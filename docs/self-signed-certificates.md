# Self-Signed Certificates

This document describes how to generate locally trusted TLS certificates for the **dnd-mapp** ecosystem using [`mkcert`](https://github.com/FiloSottile/mkcert). All services must run over HTTPS during local development to support secure cookies, PKCE flows, and `SameSite=Strict` cookie policies.

`mkcert` creates certificates signed by a local Certificate Authority (CA) that it installs into your OS and browser trust stores. This means the browser padlock is green with no security warnings — no manual certificate exceptions required.

---

## Prerequisites

Before generating certificates, the custom local hostnames must resolve on your machine. Follow the [Local DNS Setup](./local-dns-setup.md) guide first and verify that all three hostnames respond to `ping` before continuing.

---

## Installing mkcert

Follow the [official installation instructions](https://github.com/FiloSottile/mkcert#installation) for your platform.

After installation, verify it is available:

```bash
mkcert --version
```

---

## Installing the Local CA

This is a **one-time step per machine**. It registers mkcert's local CA with your operating system's certificate store and with any browsers that use the OS trust store (Chrome, Edge, Safari). Firefox maintains its own store and is also updated automatically.

```bash
mkcert -install
```

> [!NOTE]
> On Windows, a UAC prompt will appear asking for administrator privileges. On Linux/macOS, you may be prompted for your `sudo` password. This step only needs to be repeated if you reinstall your OS, switch to a different user account, or explicitly uninstall the CA.

---

## Generating Certificates Per Service

Each service has a `gen:ssl-certs` script in its `package.json` that runs the correct `mkcert` command for its hostname. Run this command **inside each service directory**:

| Service          | Command              |
|:-----------------|:---------------------|
| `dnd-mapp`       | `pnpm gen:ssl-certs` |
| `auth-server`    | `pnpm gen:ssl-certs` |
| `email-service`  | `pnpm gen:ssl-certs` |

The script expands to the following `mkcert` invocations. Each certificate also covers `localhost` and `127.0.0.1` so the service remains accessible via plain loopback if needed:

### dnd-mapp

```bash
mkcert -cert-file ssl-cert.pem -key-file ssl-key.pem localhost.www.dndmapp.dev localhost 127.0.0.1
```

### auth-server

```bash
mkcert -cert-file ssl-cert.pem -key-file ssl-key.pem localhost.auth.dndmapp.dev localhost 127.0.0.1
```

### email-service

```bash
mkcert -cert-file ssl-cert.pem -key-file ssl-key.pem localhost.email.dndmapp.dev localhost 127.0.0.1
```

Each command writes two files into the service root directory:

| File           | Purpose                                |
|:---------------|:---------------------------------------|
| `ssl-cert.pem` | TLS certificate (public)               |
| `ssl-key.pem`  | Private key (keep local, never commit) |

These filenames are the values that each service reads from its configuration.

> [!NOTE]
> Both `ssl-cert.pem` and `ssl-key.pem` are listed in `.gitignore`. They are machine-specific and must be regenerated on each development machine — never commit them to the repository.

---

## Verification

Start each service and open its URL in a browser. The address bar should show a padlock with no warnings:

| Service       | URL                                        |
|:--------------|:-------------------------------------------|
| dnd-mapp      | `https://localhost.www.dndmapp.dev:4200`   |
| auth-server   | `https://localhost.auth.dndmapp.dev:4350`  |
| email-service | `https://localhost.email.dndmapp.dev:4450` |

---

## Troubleshooting

### Certificate not trusted / "Your connection is not private"

`mkcert -install` was not run, or was run under a different OS user account than the one currently logged in. Re-run `mkcert -install` as the current user and restart the browser.

### `ERR_CERT_COMMON_NAME_INVALID`

The hostname in the browser address bar does not appear in the certificate's Subject Alternative Names (SANs). This usually means `pnpm gen:ssl-certs` was run in the wrong directory, generating a certificate for a different service's hostname. Re-run `pnpm gen:ssl-certs` inside the correct service directory.

Also confirm that the hostname resolves correctly by checking the [Local DNS Setup](./local-dns-setup.md) guide.

### Service fails to start — certificate file not found

`ssl-cert.pem` or `ssl-key.pem` is missing from the service root. Run `pnpm gen:ssl-certs` inside the affected service directory to generate them.

### `mkcert: command not found`

mkcert is not installed or not on your `PATH`. Follow the [installation instructions](#installing-mkcert) above.

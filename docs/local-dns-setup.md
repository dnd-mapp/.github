# Local DNS Setup

This document describes how to configure local DNS for the **dnd-mapp** ecosystem so that each service can be reached via a custom hostname during development. All repositories in this organization depend on this configuration as a prerequisite for local HTTPS development.

## Why Not Plain `localhost`?

The dnd-mapp platform requires custom local hostnames rather than plain `localhost` for three reasons:

1. **Subdomain cookie sharing.** The auth server issues secure, `HttpOnly` cookies scoped to `.dndmapp.dev`. Browsers only share cookies across subdomains of a common parent domain. Plain `localhost` has no parent domain, so cookies cannot be shared between services.
2. **OAuth2 redirect URI validation.** The auth server validates that redirect URIs match registered values. Registered URIs use the `*.dndmapp.dev` pattern; mismatched origins are rejected.
3. **CORS with credentials.** Services are configured to accept credentialed cross-origin requests only from known `dndmapp.dev` origins. `localhost` origins are not in the allowlist.

---

## Service Hostnames

| Service       | Local hostname                | Dev port |
|:--------------|:------------------------------|:---------|
| dnd-mapp      | `localhost.www.dndmapp.dev`   | 4200     |
| auth-server   | `localhost.auth.dndmapp.dev`  | 4350     |
| email-service | `localhost.email.dndmapp.dev` | 4450     |

All hostnames resolve to `127.0.0.1` (your local loopback address). The `localhost.` prefix is a deliberate convention that makes the loopback intent explicit and keeps the hostnames compatible with `mkcert`'s certificate generation — see [Self-Signed Certificates](./self-signed-certificates.md).

---

## Configuring the Hosts File

The hosts file maps hostnames to IP addresses before any external DNS lookup occurs. You must add an entry for each service hostname.

### Entries to add

```text
127.0.0.1 localhost.www.dndmapp.dev
127.0.0.1 localhost.auth.dndmapp.dev
127.0.0.1 localhost.email.dndmapp.dev
```

### Windows

1. Open **Notepad** (or any text editor) **as Administrator**.

   - Press `Win`, type `Notepad`, right-click, select **Run as administrator**.

2. Open the file at:

   ```text
   C:\Windows\System32\drivers\etc\hosts
   ```

3. Append the three entries from above to the end of the file.
4. Save and close the file.

> [!NOTE]
> You must save with administrator privileges. If the Save option is greyed out, you did not open the editor as Administrator.

### Linux / macOS

1. Open a terminal and edit the hosts file with elevated privileges:

   ```bash
   sudo nano /etc/hosts
   ```

2. Append the three entries from above to the end of the file.
3. Save with `Ctrl+O`, then exit with `Ctrl+X`.

---

## Verification

After saving the hosts file, confirm each hostname resolves to `127.0.0.1`:

```bash
ping localhost.www.dndmapp.dev
ping localhost.auth.dndmapp.dev
ping localhost.email.dndmapp.dev
```

Each command should report replies from `127.0.0.1`. If any hostname does not resolve, re-check that the entry was saved correctly and that no extra whitespace or characters were introduced.

> [!NOTE]
> This configuration applies only to local development. Docker containers use standard internal networking and are designed to sit behind a reverse proxy that handles hostname resolution — no hosts file changes are required for Docker-based setups.

---

## Next Step

Once DNS resolves correctly, follow the [Self-Signed Certificates](./self-signed-certificates.md) guide to generate locally trusted TLS certificates for each service.

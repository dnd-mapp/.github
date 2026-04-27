var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/internal/constants.js
var require_constants = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/internal/constants.js"(exports, module) {
    "use strict";
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/internal/debug.js"(exports, module) {
    "use strict";
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module.exports = debug;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/internal/re.js"(exports, module) {
    "use strict";
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants();
    var debug = require_debug();
    exports = module.exports = {};
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var safeSrc = exports.safeSrc = [];
    var t = exports.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    var createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      safeSrc[index] = safe;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("COERCERTLFULL", src[t.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/internal/parse-options.js"(exports, module) {
    "use strict";
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    };
    module.exports = parseOptions;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/internal/identifiers.js"(exports, module) {
    "use strict";
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b) => {
      if (typeof a === "number" && typeof b === "number") {
        return a === b ? 0 : a < b ? -1 : 1;
      }
      const anum = numeric.test(a);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
    module.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/classes/semver.js"(exports, module) {
    "use strict";
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class _SemVer {
      constructor(version, options) {
        options = parseOptions(options);
        if (version instanceof _SemVer) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.major < other.major) {
          return -1;
        }
        if (this.major > other.major) {
          return 1;
        }
        if (this.minor < other.minor) {
          return -1;
        }
        if (this.minor > other.minor) {
          return 1;
        }
        if (this.patch < other.patch) {
          return -1;
        }
        if (this.patch > other.patch) {
          return 1;
        }
        return 0;
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug("build compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        if (release.startsWith("pre")) {
          if (!identifier && identifierBase === false) {
            throw new Error("invalid increment argument: identifier is empty");
          }
          if (identifier) {
            const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
            if (!match || match[1] !== identifier) {
              throw new Error(`invalid identifier: ${identifier}`);
            }
          }
        }
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          // If the input is a non-prerelease version, this acts the same as
          // prepatch.
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "release":
            if (this.prerelease.length === 0) {
              throw new Error(`version ${this.raw} is not a prerelease`);
            }
            this.prerelease.length = 0;
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          // This probably shouldn't be used publicly.
          // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module.exports = SemVer;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/parse.js
var require_parse = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/parse.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var parse2 = (version, options, throwErrors = false) => {
      if (version instanceof SemVer) {
        return version;
      }
      try {
        return new SemVer(version, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    module.exports = parse2;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/valid.js
var require_valid = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/valid.js"(exports, module) {
    "use strict";
    var parse2 = require_parse();
    var valid = (version, options) => {
      const v = parse2(version, options);
      return v ? v.version : null;
    };
    module.exports = valid;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/clean.js
var require_clean = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/clean.js"(exports, module) {
    "use strict";
    var parse2 = require_parse();
    var clean = (version, options) => {
      const s = parse2(version.trim().replace(/^[=v]+/, ""), options);
      return s ? s.version : null;
    };
    module.exports = clean;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/inc.js
var require_inc = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/inc.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var inc2 = (version, release, options, identifier, identifierBase) => {
      if (typeof options === "string") {
        identifierBase = identifier;
        identifier = options;
        options = void 0;
      }
      try {
        return new SemVer(
          version instanceof SemVer ? version.version : version,
          options
        ).inc(release, identifier, identifierBase).version;
      } catch (er) {
        return null;
      }
    };
    module.exports = inc2;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/diff.js
var require_diff = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/diff.js"(exports, module) {
    "use strict";
    var parse2 = require_parse();
    var diff = (version1, version2) => {
      const v1 = parse2(version1, null, true);
      const v2 = parse2(version2, null, true);
      const comparison = v1.compare(v2);
      if (comparison === 0) {
        return null;
      }
      const v1Higher = comparison > 0;
      const highVersion = v1Higher ? v1 : v2;
      const lowVersion = v1Higher ? v2 : v1;
      const highHasPre = !!highVersion.prerelease.length;
      const lowHasPre = !!lowVersion.prerelease.length;
      if (lowHasPre && !highHasPre) {
        if (!lowVersion.patch && !lowVersion.minor) {
          return "major";
        }
        if (lowVersion.compareMain(highVersion) === 0) {
          if (lowVersion.minor && !lowVersion.patch) {
            return "minor";
          }
          return "patch";
        }
      }
      const prefix = highHasPre ? "pre" : "";
      if (v1.major !== v2.major) {
        return prefix + "major";
      }
      if (v1.minor !== v2.minor) {
        return prefix + "minor";
      }
      if (v1.patch !== v2.patch) {
        return prefix + "patch";
      }
      return "prerelease";
    };
    module.exports = diff;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/major.js
var require_major = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/major.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var major = (a, loose) => new SemVer(a, loose).major;
    module.exports = major;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/minor.js
var require_minor = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/minor.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var minor = (a, loose) => new SemVer(a, loose).minor;
    module.exports = minor;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/patch.js
var require_patch = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/patch.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var patch = (a, loose) => new SemVer(a, loose).patch;
    module.exports = patch;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/prerelease.js
var require_prerelease = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/prerelease.js"(exports, module) {
    "use strict";
    var parse2 = require_parse();
    var prerelease = (version, options) => {
      const parsed = parse2(version, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    };
    module.exports = prerelease;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/compare.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
    module.exports = compare;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/rcompare.js
var require_rcompare = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/rcompare.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var rcompare = (a, b, loose) => compare(b, a, loose);
    module.exports = rcompare;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/compare-loose.js
var require_compare_loose = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/compare-loose.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var compareLoose = (a, b) => compare(a, b, true);
    module.exports = compareLoose;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/compare-build.js
var require_compare_build = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/compare-build.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var compareBuild = (a, b, loose) => {
      const versionA = new SemVer(a, loose);
      const versionB = new SemVer(b, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    };
    module.exports = compareBuild;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/sort.js
var require_sort = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/sort.js"(exports, module) {
    "use strict";
    var compareBuild = require_compare_build();
    var sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
    module.exports = sort;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/rsort.js
var require_rsort = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/rsort.js"(exports, module) {
    "use strict";
    var compareBuild = require_compare_build();
    var rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
    module.exports = rsort;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/gt.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var gt = (a, b, loose) => compare(a, b, loose) > 0;
    module.exports = gt;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/lt.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var lt = (a, b, loose) => compare(a, b, loose) < 0;
    module.exports = lt;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/eq.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var eq = (a, b, loose) => compare(a, b, loose) === 0;
    module.exports = eq;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/neq.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var neq = (a, b, loose) => compare(a, b, loose) !== 0;
    module.exports = neq;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/gte.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var gte = (a, b, loose) => compare(a, b, loose) >= 0;
    module.exports = gte;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/lte.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var lte = (a, b, loose) => compare(a, b, loose) <= 0;
    module.exports = lte;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/cmp.js"(exports, module) {
    "use strict";
    var eq = require_eq();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = (a, op, b, loose) => {
      switch (op) {
        case "===":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a === b;
        case "!==":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a !== b;
        case "":
        case "=":
        case "==":
          return eq(a, b, loose);
        case "!=":
          return neq(a, b, loose);
        case ">":
          return gt(a, b, loose);
        case ">=":
          return gte(a, b, loose);
        case "<":
          return lt(a, b, loose);
        case "<=":
          return lte(a, b, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    };
    module.exports = cmp;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/coerce.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var parse2 = require_parse();
    var { safeRe: re, t } = require_re();
    var coerce = (version, options) => {
      if (version instanceof SemVer) {
        return version;
      }
      if (typeof version === "number") {
        version = String(version);
      }
      if (typeof version !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
      } else {
        const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        let next;
        while ((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        coerceRtlRegex.lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      const major = match[2];
      const minor = match[3] || "0";
      const patch = match[4] || "0";
      const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
      const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
      return parse2(`${major}.${minor}.${patch}${prerelease}${build}`, options);
    };
    module.exports = coerce;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/internal/lrucache.js
var require_lrucache = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/internal/lrucache.js"(exports, module) {
    "use strict";
    var LRUCache = class {
      constructor() {
        this.max = 1e3;
        this.map = /* @__PURE__ */ new Map();
      }
      get(key) {
        const value = this.map.get(key);
        if (value === void 0) {
          return void 0;
        } else {
          this.map.delete(key);
          this.map.set(key, value);
          return value;
        }
      }
      delete(key) {
        return this.map.delete(key);
      }
      set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== void 0) {
          if (this.map.size >= this.max) {
            const firstKey = this.map.keys().next().value;
            this.delete(firstKey);
          }
          this.map.set(key, value);
        }
        return this;
      }
    };
    module.exports = LRUCache;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/classes/range.js
var require_range = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/classes/range.js"(exports, module) {
    "use strict";
    var SPACE_CHARACTERS = /\s+/g;
    var Range = class _Range {
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof _Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new _Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.formatted = void 0;
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range.trim().replace(SPACE_CHARACTERS, " ");
        this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c) => !isNullSet(c[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c of this.set) {
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c];
                break;
              }
            }
          }
        }
        this.formatted = void 0;
      }
      get range() {
        if (this.formatted === void 0) {
          this.formatted = "";
          for (let i = 0; i < this.set.length; i++) {
            if (i > 0) {
              this.formatted += "||";
            }
            const comps = this.set[i];
            for (let k = 0; k < comps.length; k++) {
              if (k > 0) {
                this.formatted += " ";
              }
              this.formatted += comps[k].toString().trim();
            }
          }
        }
        return this.formatted;
      }
      format() {
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug("hyphen replace", range);
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug("comparator trim", range);
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug("tilde trim", range);
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug("loose invalid filter", comp, this.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
          });
        }
        debug("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof _Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version) {
        if (!version) {
          return false;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module.exports = Range;
    var LRU = require_lrucache();
    var cache = new LRU();
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug = require_debug();
    var SemVer = require_semver();
    var {
      safeRe: re,
      t,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
    var isNullSet = (c) => c.value === "<0.0.0-0";
    var isAny = (c) => c.value === "";
    var isSatisfiable = (comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    };
    var parseComparator = (comp, options) => {
      comp = comp.replace(re[t.BUILD], "");
      debug("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug("caret", comp);
      comp = replaceTildes(comp, options);
      debug("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug("xrange", comp);
      comp = replaceStars(comp, options);
      debug("stars", comp);
      return comp;
    };
    var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
    var replaceTildes = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
    };
    var replaceTilde = (comp, options) => {
      const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("tilde", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug("tilde return", ret);
        return ret;
      });
    };
    var replaceCarets = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
    };
    var replaceCaret = (comp, options) => {
      debug("caret", comp, options);
      const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
      const z = options.includePrerelease ? "-0" : "";
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("caret", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          if (M === "0") {
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
          }
        } else {
          debug("no pr");
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
          }
        }
        debug("caret return", ret);
        return ret;
      });
    };
    var replaceXRanges = (comp, options) => {
      debug("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
    };
    var replaceXRange = (comp, options) => {
      comp = comp.trim();
      const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
      return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
        debug("xRange", comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug("xRange return", ret);
        return ret;
      });
    };
    var replaceStars = (comp, options) => {
      debug("replaceStars", comp, options);
      return comp.trim().replace(re[t.STAR], "");
    };
    var replaceGTE0 = (comp, options) => {
      debug("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
    };
    var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    };
    var testSet = (set, version, options) => {
      for (let i = 0; i < set.length; i++) {
        if (!set[i].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (let i = 0; i < set.length; i++) {
          debug(set[i].semver);
          if (set[i].semver === Comparator.ANY) {
            continue;
          }
          if (set[i].semver.prerelease.length > 0) {
            const allowed = set[i].semver;
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    };
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/classes/comparator.js"(exports, module) {
    "use strict";
    var ANY = /* @__PURE__ */ Symbol("SemVer ANY");
    var Comparator = class _Comparator {
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof _Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug("comp", this);
      }
      parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== void 0 ? m[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version) {
        debug("Comparator.test", version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
          return true;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof _Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    module.exports = Comparator;
    var parseOptions = require_parse_options();
    var { safeRe: re, t } = require_re();
    var cmp = require_cmp();
    var debug = require_debug();
    var SemVer = require_semver();
    var Range = require_range();
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/functions/satisfies.js"(exports, module) {
    "use strict";
    var Range = require_range();
    var satisfies = (version, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version);
    };
    module.exports = satisfies;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/to-comparators.js
var require_to_comparators = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/to-comparators.js"(exports, module) {
    "use strict";
    var Range = require_range();
    var toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
    module.exports = toComparators;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/max-satisfying.js
var require_max_satisfying = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/max-satisfying.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range();
    var maxSatisfying = (versions, range, options) => {
      let max = null;
      let maxSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!max || maxSV.compare(v) === -1) {
            max = v;
            maxSV = new SemVer(max, options);
          }
        }
      });
      return max;
    };
    module.exports = maxSatisfying;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/min-satisfying.js
var require_min_satisfying = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/min-satisfying.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range();
    var minSatisfying = (versions, range, options) => {
      let min = null;
      let minSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!min || minSV.compare(v) === 1) {
            min = v;
            minSV = new SemVer(min, options);
          }
        }
      });
      return min;
    };
    module.exports = minSatisfying;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/min-version.js
var require_min_version = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/min-version.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range();
    var gt = require_gt();
    var minVersion = (range, loose) => {
      range = new Range(range, loose);
      let minver = new SemVer("0.0.0");
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer("0.0.0-0");
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator) => {
          const compver = new SemVer(comparator.semver.version);
          switch (comparator.operator) {
            case ">":
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            /* fallthrough */
            case "":
            case ">=":
              if (!setMin || gt(compver, setMin)) {
                setMin = compver;
              }
              break;
            case "<":
            case "<=":
              break;
            /* istanbul ignore next */
            default:
              throw new Error(`Unexpected operation: ${comparator.operator}`);
          }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
          minver = setMin;
        }
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    };
    module.exports = minVersion;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/valid.js
var require_valid2 = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/valid.js"(exports, module) {
    "use strict";
    var Range = require_range();
    var validRange = (range, options) => {
      try {
        return new Range(range, options).range || "*";
      } catch (er) {
        return null;
      }
    };
    module.exports = validRange;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/outside.js
var require_outside = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/outside.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var Range = require_range();
    var satisfies = require_satisfies();
    var gt = require_gt();
    var lt = require_lt();
    var lte = require_lte();
    var gte = require_gte();
    var outside = (version, range, hilo, options) => {
      version = new SemVer(version, options);
      range = new Range(range, options);
      let gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case ">":
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = ">";
          ecomp = ">=";
          break;
        case "<":
          gtfn = lt;
          ltefn = gte;
          ltfn = gt;
          comp = "<";
          ecomp = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies(version, range, options)) {
        return false;
      }
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator) => {
          if (comparator.semver === ANY) {
            comparator = new Comparator(">=0.0.0");
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false;
        }
      }
      return true;
    };
    module.exports = outside;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/gtr.js
var require_gtr = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/gtr.js"(exports, module) {
    "use strict";
    var outside = require_outside();
    var gtr = (version, range, options) => outside(version, range, ">", options);
    module.exports = gtr;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/ltr.js
var require_ltr = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/ltr.js"(exports, module) {
    "use strict";
    var outside = require_outside();
    var ltr = (version, range, options) => outside(version, range, "<", options);
    module.exports = ltr;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/intersects.js
var require_intersects = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/intersects.js"(exports, module) {
    "use strict";
    var Range = require_range();
    var intersects = (r1, r2, options) => {
      r1 = new Range(r1, options);
      r2 = new Range(r2, options);
      return r1.intersects(r2, options);
    };
    module.exports = intersects;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/simplify.js
var require_simplify = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/simplify.js"(exports, module) {
    "use strict";
    var satisfies = require_satisfies();
    var compare = require_compare();
    module.exports = (versions, range, options) => {
      const set = [];
      let first = null;
      let prev = null;
      const v = versions.sort((a, b) => compare(a, b, options));
      for (const version of v) {
        const included = satisfies(version, range, options);
        if (included) {
          prev = version;
          if (!first) {
            first = version;
          }
        } else {
          if (prev) {
            set.push([first, prev]);
          }
          prev = null;
          first = null;
        }
      }
      if (first) {
        set.push([first, null]);
      }
      const ranges = [];
      for (const [min, max] of set) {
        if (min === max) {
          ranges.push(min);
        } else if (!max && min === v[0]) {
          ranges.push("*");
        } else if (!max) {
          ranges.push(`>=${min}`);
        } else if (min === v[0]) {
          ranges.push(`<=${max}`);
        } else {
          ranges.push(`${min} - ${max}`);
        }
      }
      const simplified = ranges.join(" || ");
      const original = typeof range.raw === "string" ? range.raw : String(range);
      return simplified.length < original.length ? simplified : range;
    };
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/subset.js
var require_subset = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/ranges/subset.js"(exports, module) {
    "use strict";
    var Range = require_range();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var satisfies = require_satisfies();
    var compare = require_compare();
    var subset = (sub, dom, options = {}) => {
      if (sub === dom) {
        return true;
      }
      sub = new Range(sub, options);
      dom = new Range(dom, options);
      let sawNonNull = false;
      OUTER: for (const simpleSub of sub.set) {
        for (const simpleDom of dom.set) {
          const isSub = simpleSubset(simpleSub, simpleDom, options);
          sawNonNull = sawNonNull || isSub !== null;
          if (isSub) {
            continue OUTER;
          }
        }
        if (sawNonNull) {
          return false;
        }
      }
      return true;
    };
    var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
    var minimumVersion = [new Comparator(">=0.0.0")];
    var simpleSubset = (sub, dom, options) => {
      if (sub === dom) {
        return true;
      }
      if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
          return true;
        } else if (options.includePrerelease) {
          sub = minimumVersionWithPreRelease;
        } else {
          sub = minimumVersion;
        }
      }
      if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
          return true;
        } else {
          dom = minimumVersion;
        }
      }
      const eqSet = /* @__PURE__ */ new Set();
      let gt, lt;
      for (const c of sub) {
        if (c.operator === ">" || c.operator === ">=") {
          gt = higherGT(gt, c, options);
        } else if (c.operator === "<" || c.operator === "<=") {
          lt = lowerLT(lt, c, options);
        } else {
          eqSet.add(c.semver);
        }
      }
      if (eqSet.size > 1) {
        return null;
      }
      let gtltComp;
      if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
          return null;
        } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
          return null;
        }
      }
      for (const eq of eqSet) {
        if (gt && !satisfies(eq, String(gt), options)) {
          return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
          return null;
        }
        for (const c of dom) {
          if (!satisfies(eq, String(c), options)) {
            return false;
          }
        }
        return true;
      }
      let higher, lower;
      let hasDomLT, hasDomGT;
      let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
      let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
      if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
      }
      for (const c of dom) {
        hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
        hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
        if (gt) {
          if (needDomGTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
              needDomGTPre = false;
            }
          }
          if (c.operator === ">" || c.operator === ">=") {
            higher = higherGT(gt, c, options);
            if (higher === c && higher !== gt) {
              return false;
            }
          } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c), options)) {
            return false;
          }
        }
        if (lt) {
          if (needDomLTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
              needDomLTPre = false;
            }
          }
          if (c.operator === "<" || c.operator === "<=") {
            lower = lowerLT(lt, c, options);
            if (lower === c && lower !== lt) {
              return false;
            }
          } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c), options)) {
            return false;
          }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
          return false;
        }
      }
      if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
      }
      if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
      }
      if (needDomGTPre || needDomLTPre) {
        return false;
      }
      return true;
    };
    var higherGT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare(a.semver, b.semver, options);
      return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
    };
    var lowerLT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare(a.semver, b.semver, options);
      return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
    };
    module.exports = subset;
  }
});

// node_modules/.pnpm/semver@7.7.4/node_modules/semver/index.js
var require_semver2 = __commonJS({
  "node_modules/.pnpm/semver@7.7.4/node_modules/semver/index.js"(exports, module) {
    "use strict";
    var internalRe = require_re();
    var constants = require_constants();
    var SemVer = require_semver();
    var identifiers = require_identifiers();
    var parse2 = require_parse();
    var valid = require_valid();
    var clean = require_clean();
    var inc2 = require_inc();
    var diff = require_diff();
    var major = require_major();
    var minor = require_minor();
    var patch = require_patch();
    var prerelease = require_prerelease();
    var compare = require_compare();
    var rcompare = require_rcompare();
    var compareLoose = require_compare_loose();
    var compareBuild = require_compare_build();
    var sort = require_sort();
    var rsort = require_rsort();
    var gt = require_gt();
    var lt = require_lt();
    var eq = require_eq();
    var neq = require_neq();
    var gte = require_gte();
    var lte = require_lte();
    var cmp = require_cmp();
    var coerce = require_coerce();
    var Comparator = require_comparator();
    var Range = require_range();
    var satisfies = require_satisfies();
    var toComparators = require_to_comparators();
    var maxSatisfying = require_max_satisfying();
    var minSatisfying = require_min_satisfying();
    var minVersion = require_min_version();
    var validRange = require_valid2();
    var outside = require_outside();
    var gtr = require_gtr();
    var ltr = require_ltr();
    var intersects = require_intersects();
    var simplifyRange = require_simplify();
    var subset = require_subset();
    module.exports = {
      parse: parse2,
      valid,
      clean,
      inc: inc2,
      diff,
      major,
      minor,
      patch,
      prerelease,
      compare,
      rcompare,
      compareLoose,
      compareBuild,
      sort,
      rsort,
      gt,
      lt,
      eq,
      neq,
      gte,
      lte,
      cmp,
      coerce,
      Comparator,
      Range,
      satisfies,
      toComparators,
      maxSatisfying,
      minSatisfying,
      minVersion,
      validRange,
      outside,
      gtr,
      ltr,
      intersects,
      simplifyRange,
      subset,
      SemVer,
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: constants.RELEASE_TYPES,
      compareIdentifiers: identifiers.compareIdentifiers,
      rcompareIdentifiers: identifiers.rcompareIdentifiers
    };
  }
});

// src/version-bumper/version-bumper.ts
var import_semver = __toESM(require_semver2());
import { readFile, writeFile } from "fs/promises";
function bumpVersion(params) {
  let result;
  if (params.preid) result = (0, import_semver.inc)(params.currentVersion, params.bumpType, params.preid);
  else result = (0, import_semver.inc)(params.currentVersion, params.bumpType);
  if (!result) {
    throw new Error(`Cannot bump version "${params.currentVersion}" with type "${params.bumpType}".`);
  }
  return result;
}
function deriveReleaseBranchName(newVersion) {
  const parsed = (0, import_semver.parse)(newVersion);
  if (!parsed) {
    throw new Error(`Invalid version: "${newVersion}"`);
  }
  if (parsed.prerelease.length > 0) {
    return `release/v${parsed.major}.${parsed.minor}.${parsed.patch}`;
  }
  return null;
}
async function writePackageVersion(params) {
  const raw = await readFile(params.manifestPath, { encoding: "utf-8" });
  const manifest = JSON.parse(raw);
  manifest["version"] = params.newVersion;
  await writeFile(params.manifestPath, JSON.stringify(manifest, null, 2) + "\n", { encoding: "utf-8" });
}

// src/scripts/bump-version.ts
import { appendFile, readFile as readFile2 } from "fs/promises";
import { fileURLToPath } from "url";
async function run() {
  const versionInput = process.env["VERSION"];
  const prereleaseIdInput = process.env["PRERELEASE_ID"];
  const manifestPath = `${process.env["GITHUB_WORKSPACE"]}/package.json`;
  const manifest = JSON.parse(await readFile2(manifestPath, "utf-8"));
  const preid = prereleaseIdInput !== "none" ? prereleaseIdInput : void 0;
  const newVersion = bumpVersion({ currentVersion: manifest.version, bumpType: versionInput, preid });
  await writePackageVersion({ manifestPath, newVersion });
  const output = process.env["GITHUB_OUTPUT"];
  await appendFile(output, `raw-version=v${newVersion}
`);
  await appendFile(output, `clean-version=${newVersion}
`);
  await appendFile(output, `release-branch-name=${deriveReleaseBranchName(newVersion) ?? ""}
`);
}
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await run();
}
export {
  run
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvaW50ZXJuYWwvZGVidWcuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL3JlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9wYXJzZS1vcHRpb25zLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9pZGVudGlmaWVycy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvY2xhc3Nlcy9zZW12ZXIuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9wYXJzZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3ZhbGlkLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY2xlYW4uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9pbmMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9kaWZmLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvbWFqb3IuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9taW5vci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3BhdGNoLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvcHJlcmVsZWFzZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2NvbXBhcmUuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9yY29tcGFyZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2NvbXBhcmUtbG9vc2UuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9jb21wYXJlLWJ1aWxkLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvc29ydC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3Jzb3J0LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvZ3QuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9sdC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2VxLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvbmVxLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvZ3RlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvbHRlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY21wLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY29lcmNlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9scnVjYWNoZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvY2xhc3Nlcy9yYW5nZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvY2xhc3Nlcy9jb21wYXJhdG9yLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvc2F0aXNmaWVzLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvdG8tY29tcGFyYXRvcnMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9tYXgtc2F0aXNmeWluZy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL21pbi1zYXRpc2Z5aW5nLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvbWluLXZlcnNpb24uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy92YWxpZC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL291dHNpZGUuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9ndHIuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9sdHIuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9pbnRlcnNlY3RzLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvc2ltcGxpZnkuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9zdWJzZXQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL3NyYy92ZXJzaW9uLWJ1bXBlci92ZXJzaW9uLWJ1bXBlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvc2NyaXB0cy9idW1wLXZlcnNpb24udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0J1xuXG4vLyBOb3RlOiB0aGlzIGlzIHRoZSBzZW12ZXIub3JnIHZlcnNpb24gb2YgdGhlIHNwZWMgdGhhdCBpdCBpbXBsZW1lbnRzXG4vLyBOb3QgbmVjZXNzYXJpbHkgdGhlIHBhY2thZ2UgdmVyc2lvbiBvZiB0aGlzIGNvZGUuXG5jb25zdCBTRU1WRVJfU1BFQ19WRVJTSU9OID0gJzIuMC4wJ1xuXG5jb25zdCBNQVhfTEVOR1RIID0gMjU2XG5jb25zdCBNQVhfU0FGRV9JTlRFR0VSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHxcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIDkwMDcxOTkyNTQ3NDA5OTFcblxuLy8gTWF4IHNhZmUgc2VnbWVudCBsZW5ndGggZm9yIGNvZXJjaW9uLlxuY29uc3QgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSCA9IDE2XG5cbi8vIE1heCBzYWZlIGxlbmd0aCBmb3IgYSBidWlsZCBpZGVudGlmaWVyLiBUaGUgbWF4IGxlbmd0aCBtaW51cyA2IGNoYXJhY3RlcnMgZm9yXG4vLyB0aGUgc2hvcnRlc3QgdmVyc2lvbiB3aXRoIGEgYnVpbGQgMC4wLjArQlVJTEQuXG5jb25zdCBNQVhfU0FGRV9CVUlMRF9MRU5HVEggPSBNQVhfTEVOR1RIIC0gNlxuXG5jb25zdCBSRUxFQVNFX1RZUEVTID0gW1xuICAnbWFqb3InLFxuICAncHJlbWFqb3InLFxuICAnbWlub3InLFxuICAncHJlbWlub3InLFxuICAncGF0Y2gnLFxuICAncHJlcGF0Y2gnLFxuICAncHJlcmVsZWFzZScsXG5dXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBNQVhfTEVOR1RILFxuICBNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RILFxuICBNQVhfU0FGRV9CVUlMRF9MRU5HVEgsXG4gIE1BWF9TQUZFX0lOVEVHRVIsXG4gIFJFTEVBU0VfVFlQRVMsXG4gIFNFTVZFUl9TUEVDX1ZFUlNJT04sXG4gIEZMQUdfSU5DTFVERV9QUkVSRUxFQVNFOiAwYjAwMSxcbiAgRkxBR19MT09TRTogMGIwMTAsXG59XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGRlYnVnID0gKFxuICB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiZcbiAgcHJvY2Vzcy5lbnYgJiZcbiAgcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyAmJlxuICAvXFxic2VtdmVyXFxiL2kudGVzdChwcm9jZXNzLmVudi5OT0RFX0RFQlVHKVxuKSA/ICguLi5hcmdzKSA9PiBjb25zb2xlLmVycm9yKCdTRU1WRVInLCAuLi5hcmdzKVxuICA6ICgpID0+IHt9XG5cbm1vZHVsZS5leHBvcnRzID0gZGVidWdcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3Qge1xuICBNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RILFxuICBNQVhfU0FGRV9CVUlMRF9MRU5HVEgsXG4gIE1BWF9MRU5HVEgsXG59ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKVxuY29uc3QgZGVidWcgPSByZXF1aXJlKCcuL2RlYnVnJylcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9XG5cbi8vIFRoZSBhY3R1YWwgcmVnZXhwcyBnbyBvbiBleHBvcnRzLnJlXG5jb25zdCByZSA9IGV4cG9ydHMucmUgPSBbXVxuY29uc3Qgc2FmZVJlID0gZXhwb3J0cy5zYWZlUmUgPSBbXVxuY29uc3Qgc3JjID0gZXhwb3J0cy5zcmMgPSBbXVxuY29uc3Qgc2FmZVNyYyA9IGV4cG9ydHMuc2FmZVNyYyA9IFtdXG5jb25zdCB0ID0gZXhwb3J0cy50ID0ge31cbmxldCBSID0gMFxuXG5jb25zdCBMRVRURVJEQVNITlVNQkVSID0gJ1thLXpBLVowLTktXSdcblxuLy8gUmVwbGFjZSBzb21lIGdyZWVkeSByZWdleCB0b2tlbnMgdG8gcHJldmVudCByZWdleCBkb3MgaXNzdWVzLiBUaGVzZSByZWdleCBhcmVcbi8vIHVzZWQgaW50ZXJuYWxseSB2aWEgdGhlIHNhZmVSZSBvYmplY3Qgc2luY2UgYWxsIGlucHV0cyBpbiB0aGlzIGxpYnJhcnkgZ2V0XG4vLyBub3JtYWxpemVkIGZpcnN0IHRvIHRyaW0gYW5kIGNvbGxhcHNlIGFsbCBleHRyYSB3aGl0ZXNwYWNlLiBUaGUgb3JpZ2luYWxcbi8vIHJlZ2V4ZXMgYXJlIGV4cG9ydGVkIGZvciB1c2VybGFuZCBjb25zdW1wdGlvbiBhbmQgbG93ZXIgbGV2ZWwgdXNhZ2UuIEFcbi8vIGZ1dHVyZSBicmVha2luZyBjaGFuZ2UgY291bGQgZXhwb3J0IHRoZSBzYWZlciByZWdleCBvbmx5IHdpdGggYSBub3RlIHRoYXRcbi8vIGFsbCBpbnB1dCBzaG91bGQgaGF2ZSBleHRyYSB3aGl0ZXNwYWNlIHJlbW92ZWQuXG5jb25zdCBzYWZlUmVnZXhSZXBsYWNlbWVudHMgPSBbXG4gIFsnXFxcXHMnLCAxXSxcbiAgWydcXFxcZCcsIE1BWF9MRU5HVEhdLFxuICBbTEVUVEVSREFTSE5VTUJFUiwgTUFYX1NBRkVfQlVJTERfTEVOR1RIXSxcbl1cblxuY29uc3QgbWFrZVNhZmVSZWdleCA9ICh2YWx1ZSkgPT4ge1xuICBmb3IgKGNvbnN0IFt0b2tlbiwgbWF4XSBvZiBzYWZlUmVnZXhSZXBsYWNlbWVudHMpIHtcbiAgICB2YWx1ZSA9IHZhbHVlXG4gICAgICAuc3BsaXQoYCR7dG9rZW59KmApLmpvaW4oYCR7dG9rZW59ezAsJHttYXh9fWApXG4gICAgICAuc3BsaXQoYCR7dG9rZW59K2ApLmpvaW4oYCR7dG9rZW59ezEsJHttYXh9fWApXG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmNvbnN0IGNyZWF0ZVRva2VuID0gKG5hbWUsIHZhbHVlLCBpc0dsb2JhbCkgPT4ge1xuICBjb25zdCBzYWZlID0gbWFrZVNhZmVSZWdleCh2YWx1ZSlcbiAgY29uc3QgaW5kZXggPSBSKytcbiAgZGVidWcobmFtZSwgaW5kZXgsIHZhbHVlKVxuICB0W25hbWVdID0gaW5kZXhcbiAgc3JjW2luZGV4XSA9IHZhbHVlXG4gIHNhZmVTcmNbaW5kZXhdID0gc2FmZVxuICByZVtpbmRleF0gPSBuZXcgUmVnRXhwKHZhbHVlLCBpc0dsb2JhbCA/ICdnJyA6IHVuZGVmaW5lZClcbiAgc2FmZVJlW2luZGV4XSA9IG5ldyBSZWdFeHAoc2FmZSwgaXNHbG9iYWwgPyAnZycgOiB1bmRlZmluZWQpXG59XG5cbi8vIFRoZSBmb2xsb3dpbmcgUmVndWxhciBFeHByZXNzaW9ucyBjYW4gYmUgdXNlZCBmb3IgdG9rZW5pemluZyxcbi8vIHZhbGlkYXRpbmcsIGFuZCBwYXJzaW5nIFNlbVZlciB2ZXJzaW9uIHN0cmluZ3MuXG5cbi8vICMjIE51bWVyaWMgSWRlbnRpZmllclxuLy8gQSBzaW5nbGUgYDBgLCBvciBhIG5vbi16ZXJvIGRpZ2l0IGZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBkaWdpdHMuXG5cbmNyZWF0ZVRva2VuKCdOVU1FUklDSURFTlRJRklFUicsICcwfFsxLTldXFxcXGQqJylcbmNyZWF0ZVRva2VuKCdOVU1FUklDSURFTlRJRklFUkxPT1NFJywgJ1xcXFxkKycpXG5cbi8vICMjIE5vbi1udW1lcmljIElkZW50aWZpZXJcbi8vIFplcm8gb3IgbW9yZSBkaWdpdHMsIGZvbGxvd2VkIGJ5IGEgbGV0dGVyIG9yIGh5cGhlbiwgYW5kIHRoZW4gemVybyBvclxuLy8gbW9yZSBsZXR0ZXJzLCBkaWdpdHMsIG9yIGh5cGhlbnMuXG5cbmNyZWF0ZVRva2VuKCdOT05OVU1FUklDSURFTlRJRklFUicsIGBcXFxcZCpbYS16QS1aLV0ke0xFVFRFUkRBU0hOVU1CRVJ9KmApXG5cbi8vICMjIE1haW4gVmVyc2lvblxuLy8gVGhyZWUgZG90LXNlcGFyYXRlZCBudW1lcmljIGlkZW50aWZpZXJzLlxuXG5jcmVhdGVUb2tlbignTUFJTlZFUlNJT04nLCBgKCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJdfSlcXFxcLmAgK1xuICAgICAgICAgICAgICAgICAgIGAoJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUl19KVxcXFwuYCArXG4gICAgICAgICAgICAgICAgICAgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSXX0pYClcblxuY3JlYXRlVG9rZW4oJ01BSU5WRVJTSU9OTE9PU0UnLCBgKCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJMT09TRV19KVxcXFwuYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJMT09TRV19KVxcXFwuYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJMT09TRV19KWApXG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb24gSWRlbnRpZmllclxuLy8gQSBudW1lcmljIGlkZW50aWZpZXIsIG9yIGEgbm9uLW51bWVyaWMgaWRlbnRpZmllci5cbi8vIE5vbi1udW1lcmljIGlkZW50aWZpZXJzIGluY2x1ZGUgbnVtZXJpYyBpZGVudGlmaWVycyBidXQgY2FuIGJlIGxvbmdlci5cbi8vIFRoZXJlZm9yZSBub24tbnVtZXJpYyBpZGVudGlmaWVycyBtdXN0IGdvIGZpcnN0LlxuXG5jcmVhdGVUb2tlbignUFJFUkVMRUFTRUlERU5USUZJRVInLCBgKD86JHtzcmNbdC5OT05OVU1FUklDSURFTlRJRklFUl1cbn18JHtzcmNbdC5OVU1FUklDSURFTlRJRklFUl19KWApXG5cbmNyZWF0ZVRva2VuKCdQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFJywgYCg/OiR7c3JjW3QuTk9OTlVNRVJJQ0lERU5USUZJRVJdXG59fCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJMT09TRV19KWApXG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb25cbi8vIEh5cGhlbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgZG90LXNlcGFyYXRlZCBwcmUtcmVsZWFzZSB2ZXJzaW9uXG4vLyBpZGVudGlmaWVycy5cblxuY3JlYXRlVG9rZW4oJ1BSRVJFTEVBU0UnLCBgKD86LSgke3NyY1t0LlBSRVJFTEVBU0VJREVOVElGSUVSXVxufSg/OlxcXFwuJHtzcmNbdC5QUkVSRUxFQVNFSURFTlRJRklFUl19KSopKWApXG5cbmNyZWF0ZVRva2VuKCdQUkVSRUxFQVNFTE9PU0UnLCBgKD86LT8oJHtzcmNbdC5QUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXVxufSg/OlxcXFwuJHtzcmNbdC5QUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXX0pKikpYClcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGEgSWRlbnRpZmllclxuLy8gQW55IGNvbWJpbmF0aW9uIG9mIGRpZ2l0cywgbGV0dGVycywgb3IgaHlwaGVucy5cblxuY3JlYXRlVG9rZW4oJ0JVSUxESURFTlRJRklFUicsIGAke0xFVFRFUkRBU0hOVU1CRVJ9K2ApXG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhXG4vLyBQbHVzIHNpZ24sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIHBlcmlvZC1zZXBhcmF0ZWQgYnVpbGQgbWV0YWRhdGFcbi8vIGlkZW50aWZpZXJzLlxuXG5jcmVhdGVUb2tlbignQlVJTEQnLCBgKD86XFxcXCsoJHtzcmNbdC5CVUlMRElERU5USUZJRVJdXG59KD86XFxcXC4ke3NyY1t0LkJVSUxESURFTlRJRklFUl19KSopKWApXG5cbi8vICMjIEZ1bGwgVmVyc2lvbiBTdHJpbmdcbi8vIEEgbWFpbiB2ZXJzaW9uLCBmb2xsb3dlZCBvcHRpb25hbGx5IGJ5IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiBhbmRcbi8vIGJ1aWxkIG1ldGFkYXRhLlxuXG4vLyBOb3RlIHRoYXQgdGhlIG9ubHkgbWFqb3IsIG1pbm9yLCBwYXRjaCwgYW5kIHByZS1yZWxlYXNlIHNlY3Rpb25zIG9mXG4vLyB0aGUgdmVyc2lvbiBzdHJpbmcgYXJlIGNhcHR1cmluZyBncm91cHMuICBUaGUgYnVpbGQgbWV0YWRhdGEgaXMgbm90IGFcbi8vIGNhcHR1cmluZyBncm91cCwgYmVjYXVzZSBpdCBzaG91bGQgbm90IGV2ZXIgYmUgdXNlZCBpbiB2ZXJzaW9uXG4vLyBjb21wYXJpc29uLlxuXG5jcmVhdGVUb2tlbignRlVMTFBMQUlOJywgYHY/JHtzcmNbdC5NQUlOVkVSU0lPTl1cbn0ke3NyY1t0LlBSRVJFTEVBU0VdfT8ke1xuICBzcmNbdC5CVUlMRF19P2ApXG5cbmNyZWF0ZVRva2VuKCdGVUxMJywgYF4ke3NyY1t0LkZVTExQTEFJTl19JGApXG5cbi8vIGxpa2UgZnVsbCwgYnV0IGFsbG93cyB2MS4yLjMgYW5kID0xLjIuMywgd2hpY2ggcGVvcGxlIGRvIHNvbWV0aW1lcy5cbi8vIGFsc28sIDEuMC4wYWxwaGExIChwcmVyZWxlYXNlIHdpdGhvdXQgdGhlIGh5cGhlbikgd2hpY2ggaXMgcHJldHR5XG4vLyBjb21tb24gaW4gdGhlIG5wbSByZWdpc3RyeS5cbmNyZWF0ZVRva2VuKCdMT09TRVBMQUlOJywgYFt2PVxcXFxzXSoke3NyY1t0Lk1BSU5WRVJTSU9OTE9PU0VdXG59JHtzcmNbdC5QUkVSRUxFQVNFTE9PU0VdfT8ke1xuICBzcmNbdC5CVUlMRF19P2ApXG5cbmNyZWF0ZVRva2VuKCdMT09TRScsIGBeJHtzcmNbdC5MT09TRVBMQUlOXX0kYClcblxuY3JlYXRlVG9rZW4oJ0dUTFQnLCAnKCg/Ojx8Pik/PT8pJylcblxuLy8gU29tZXRoaW5nIGxpa2UgXCIyLipcIiBvciBcIjEuMi54XCIuXG4vLyBOb3RlIHRoYXQgXCJ4LnhcIiBpcyBhIHZhbGlkIHhSYW5nZSBpZGVudGlmZXIsIG1lYW5pbmcgXCJhbnkgdmVyc2lvblwiXG4vLyBPbmx5IHRoZSBmaXJzdCBpdGVtIGlzIHN0cmljdGx5IHJlcXVpcmVkLlxuY3JlYXRlVG9rZW4oJ1hSQU5HRUlERU5USUZJRVJMT09TRScsIGAke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfXx4fFh8XFxcXCpgKVxuY3JlYXRlVG9rZW4oJ1hSQU5HRUlERU5USUZJRVInLCBgJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUl19fHh8WHxcXFxcKmApXG5cbmNyZWF0ZVRva2VuKCdYUkFOR0VQTEFJTicsIGBbdj1cXFxcc10qKCR7c3JjW3QuWFJBTkdFSURFTlRJRklFUl19KWAgK1xuICAgICAgICAgICAgICAgICAgIGAoPzpcXFxcLigke3NyY1t0LlhSQU5HRUlERU5USUZJRVJdfSlgICtcbiAgICAgICAgICAgICAgICAgICBgKD86XFxcXC4oJHtzcmNbdC5YUkFOR0VJREVOVElGSUVSXX0pYCArXG4gICAgICAgICAgICAgICAgICAgYCg/OiR7c3JjW3QuUFJFUkVMRUFTRV19KT8ke1xuICAgICAgICAgICAgICAgICAgICAgc3JjW3QuQlVJTERdfT9gICtcbiAgICAgICAgICAgICAgICAgICBgKT8pP2ApXG5cbmNyZWF0ZVRva2VuKCdYUkFOR0VQTEFJTkxPT1NFJywgYFt2PVxcXFxzXSooJHtzcmNbdC5YUkFOR0VJREVOVElGSUVSTE9PU0VdfSlgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAoPzpcXFxcLigke3NyY1t0LlhSQU5HRUlERU5USUZJRVJMT09TRV19KWAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCg/OlxcXFwuKCR7c3JjW3QuWFJBTkdFSURFTlRJRklFUkxPT1NFXX0pYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKD86JHtzcmNbdC5QUkVSRUxFQVNFTE9PU0VdfSk/JHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjW3QuQlVJTERdfT9gICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGApPyk/YClcblxuY3JlYXRlVG9rZW4oJ1hSQU5HRScsIGBeJHtzcmNbdC5HVExUXX1cXFxccyoke3NyY1t0LlhSQU5HRVBMQUlOXX0kYClcbmNyZWF0ZVRva2VuKCdYUkFOR0VMT09TRScsIGBeJHtzcmNbdC5HVExUXX1cXFxccyoke3NyY1t0LlhSQU5HRVBMQUlOTE9PU0VdfSRgKVxuXG4vLyBDb2VyY2lvbi5cbi8vIEV4dHJhY3QgYW55dGhpbmcgdGhhdCBjb3VsZCBjb25jZWl2YWJseSBiZSBhIHBhcnQgb2YgYSB2YWxpZCBzZW12ZXJcbmNyZWF0ZVRva2VuKCdDT0VSQ0VQTEFJTicsIGAkeycoXnxbXlxcXFxkXSknICtcbiAgICAgICAgICAgICAgJyhcXFxcZHsxLCd9JHtNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RIfX0pYCArXG4gICAgICAgICAgICAgIGAoPzpcXFxcLihcXFxcZHsxLCR7TUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSH19KSk/YCArXG4gICAgICAgICAgICAgIGAoPzpcXFxcLihcXFxcZHsxLCR7TUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSH19KSk/YClcbmNyZWF0ZVRva2VuKCdDT0VSQ0UnLCBgJHtzcmNbdC5DT0VSQ0VQTEFJTl19KD86JHxbXlxcXFxkXSlgKVxuY3JlYXRlVG9rZW4oJ0NPRVJDRUZVTEwnLCBzcmNbdC5DT0VSQ0VQTEFJTl0gK1xuICAgICAgICAgICAgICBgKD86JHtzcmNbdC5QUkVSRUxFQVNFXX0pP2AgK1xuICAgICAgICAgICAgICBgKD86JHtzcmNbdC5CVUlMRF19KT9gICtcbiAgICAgICAgICAgICAgYCg/OiR8W15cXFxcZF0pYClcbmNyZWF0ZVRva2VuKCdDT0VSQ0VSVEwnLCBzcmNbdC5DT0VSQ0VdLCB0cnVlKVxuY3JlYXRlVG9rZW4oJ0NPRVJDRVJUTEZVTEwnLCBzcmNbdC5DT0VSQ0VGVUxMXSwgdHJ1ZSlcblxuLy8gVGlsZGUgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcInJlYXNvbmFibHkgYXQgb3IgZ3JlYXRlciB0aGFuXCJcbmNyZWF0ZVRva2VuKCdMT05FVElMREUnLCAnKD86fj4/KScpXG5cbmNyZWF0ZVRva2VuKCdUSUxERVRSSU0nLCBgKFxcXFxzKikke3NyY1t0LkxPTkVUSUxERV19XFxcXHMrYCwgdHJ1ZSlcbmV4cG9ydHMudGlsZGVUcmltUmVwbGFjZSA9ICckMX4nXG5cbmNyZWF0ZVRva2VuKCdUSUxERScsIGBeJHtzcmNbdC5MT05FVElMREVdfSR7c3JjW3QuWFJBTkdFUExBSU5dfSRgKVxuY3JlYXRlVG9rZW4oJ1RJTERFTE9PU0UnLCBgXiR7c3JjW3QuTE9ORVRJTERFXX0ke3NyY1t0LlhSQU5HRVBMQUlOTE9PU0VdfSRgKVxuXG4vLyBDYXJldCByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwiYXQgbGVhc3QgYW5kIGJhY2t3YXJkcyBjb21wYXRpYmxlIHdpdGhcIlxuY3JlYXRlVG9rZW4oJ0xPTkVDQVJFVCcsICcoPzpcXFxcXiknKVxuXG5jcmVhdGVUb2tlbignQ0FSRVRUUklNJywgYChcXFxccyopJHtzcmNbdC5MT05FQ0FSRVRdfVxcXFxzK2AsIHRydWUpXG5leHBvcnRzLmNhcmV0VHJpbVJlcGxhY2UgPSAnJDFeJ1xuXG5jcmVhdGVUb2tlbignQ0FSRVQnLCBgXiR7c3JjW3QuTE9ORUNBUkVUXX0ke3NyY1t0LlhSQU5HRVBMQUlOXX0kYClcbmNyZWF0ZVRva2VuKCdDQVJFVExPT1NFJywgYF4ke3NyY1t0LkxPTkVDQVJFVF19JHtzcmNbdC5YUkFOR0VQTEFJTkxPT1NFXX0kYClcblxuLy8gQSBzaW1wbGUgZ3QvbHQvZXEgdGhpbmcsIG9yIGp1c3QgXCJcIiB0byBpbmRpY2F0ZSBcImFueSB2ZXJzaW9uXCJcbmNyZWF0ZVRva2VuKCdDT01QQVJBVE9STE9PU0UnLCBgXiR7c3JjW3QuR1RMVF19XFxcXHMqKCR7c3JjW3QuTE9PU0VQTEFJTl19KSR8XiRgKVxuY3JlYXRlVG9rZW4oJ0NPTVBBUkFUT1InLCBgXiR7c3JjW3QuR1RMVF19XFxcXHMqKCR7c3JjW3QuRlVMTFBMQUlOXX0pJHxeJGApXG5cbi8vIEFuIGV4cHJlc3Npb24gdG8gc3RyaXAgYW55IHdoaXRlc3BhY2UgYmV0d2VlbiB0aGUgZ3RsdCBhbmQgdGhlIHRoaW5nXG4vLyBpdCBtb2RpZmllcywgc28gdGhhdCBgPiAxLjIuM2AgPT0+IGA+MS4yLjNgXG5jcmVhdGVUb2tlbignQ09NUEFSQVRPUlRSSU0nLCBgKFxcXFxzKikke3NyY1t0LkdUTFRdXG59XFxcXHMqKCR7c3JjW3QuTE9PU0VQTEFJTl19fCR7c3JjW3QuWFJBTkdFUExBSU5dfSlgLCB0cnVlKVxuZXhwb3J0cy5jb21wYXJhdG9yVHJpbVJlcGxhY2UgPSAnJDEkMiQzJ1xuXG4vLyBTb21ldGhpbmcgbGlrZSBgMS4yLjMgLSAxLjIuNGBcbi8vIE5vdGUgdGhhdCB0aGVzZSBhbGwgdXNlIHRoZSBsb29zZSBmb3JtLCBiZWNhdXNlIHRoZXknbGwgYmVcbi8vIGNoZWNrZWQgYWdhaW5zdCBlaXRoZXIgdGhlIHN0cmljdCBvciBsb29zZSBjb21wYXJhdG9yIGZvcm1cbi8vIGxhdGVyLlxuY3JlYXRlVG9rZW4oJ0hZUEhFTlJBTkdFJywgYF5cXFxccyooJHtzcmNbdC5YUkFOR0VQTEFJTl19KWAgK1xuICAgICAgICAgICAgICAgICAgIGBcXFxccystXFxcXHMrYCArXG4gICAgICAgICAgICAgICAgICAgYCgke3NyY1t0LlhSQU5HRVBMQUlOXX0pYCArXG4gICAgICAgICAgICAgICAgICAgYFxcXFxzKiRgKVxuXG5jcmVhdGVUb2tlbignSFlQSEVOUkFOR0VMT09TRScsIGBeXFxcXHMqKCR7c3JjW3QuWFJBTkdFUExBSU5MT09TRV19KWAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYFxcXFxzKy1cXFxccytgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAoJHtzcmNbdC5YUkFOR0VQTEFJTkxPT1NFXX0pYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgXFxcXHMqJGApXG5cbi8vIFN0YXIgcmFuZ2VzIGJhc2ljYWxseSBqdXN0IGFsbG93IGFueXRoaW5nIGF0IGFsbC5cbmNyZWF0ZVRva2VuKCdTVEFSJywgJyg8fD4pPz0/XFxcXHMqXFxcXConKVxuLy8gPj0wLjAuMCBpcyBsaWtlIGEgc3RhclxuY3JlYXRlVG9rZW4oJ0dURTAnLCAnXlxcXFxzKj49XFxcXHMqMFxcXFwuMFxcXFwuMFxcXFxzKiQnKVxuY3JlYXRlVG9rZW4oJ0dURTBQUkUnLCAnXlxcXFxzKj49XFxcXHMqMFxcXFwuMFxcXFwuMC0wXFxcXHMqJCcpXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbi8vIHBhcnNlIG91dCBqdXN0IHRoZSBvcHRpb25zIHdlIGNhcmUgYWJvdXRcbmNvbnN0IGxvb3NlT3B0aW9uID0gT2JqZWN0LmZyZWV6ZSh7IGxvb3NlOiB0cnVlIH0pXG5jb25zdCBlbXB0eU9wdHMgPSBPYmplY3QuZnJlZXplKHsgfSlcbmNvbnN0IHBhcnNlT3B0aW9ucyA9IG9wdGlvbnMgPT4ge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gZW1wdHlPcHRzXG4gIH1cblxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGxvb3NlT3B0aW9uXG4gIH1cblxuICByZXR1cm4gb3B0aW9uc1xufVxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZU9wdGlvbnNcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgbnVtZXJpYyA9IC9eWzAtOV0rJC9cbmNvbnN0IGNvbXBhcmVJZGVudGlmaWVycyA9IChhLCBiKSA9PiB7XG4gIGlmICh0eXBlb2YgYSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGIgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGEgPT09IGIgPyAwIDogYSA8IGIgPyAtMSA6IDFcbiAgfVxuXG4gIGNvbnN0IGFudW0gPSBudW1lcmljLnRlc3QoYSlcbiAgY29uc3QgYm51bSA9IG51bWVyaWMudGVzdChiKVxuXG4gIGlmIChhbnVtICYmIGJudW0pIHtcbiAgICBhID0gK2FcbiAgICBiID0gK2JcbiAgfVxuXG4gIHJldHVybiBhID09PSBiID8gMFxuICAgIDogKGFudW0gJiYgIWJudW0pID8gLTFcbiAgICA6IChibnVtICYmICFhbnVtKSA/IDFcbiAgICA6IGEgPCBiID8gLTFcbiAgICA6IDFcbn1cblxuY29uc3QgcmNvbXBhcmVJZGVudGlmaWVycyA9IChhLCBiKSA9PiBjb21wYXJlSWRlbnRpZmllcnMoYiwgYSlcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXBhcmVJZGVudGlmaWVycyxcbiAgcmNvbXBhcmVJZGVudGlmaWVycyxcbn1cbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgZGVidWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9kZWJ1ZycpXG5jb25zdCB7IE1BWF9MRU5HVEgsIE1BWF9TQUZFX0lOVEVHRVIgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NvbnN0YW50cycpXG5jb25zdCB7IHNhZmVSZTogcmUsIHQgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3JlJylcblxuY29uc3QgcGFyc2VPcHRpb25zID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcGFyc2Utb3B0aW9ucycpXG5jb25zdCB7IGNvbXBhcmVJZGVudGlmaWVycyB9ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaWRlbnRpZmllcnMnKVxuY2xhc3MgU2VtVmVyIHtcbiAgY29uc3RydWN0b3IgKHZlcnNpb24sIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpXG5cbiAgICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgICAgaWYgKHZlcnNpb24ubG9vc2UgPT09ICEhb3B0aW9ucy5sb29zZSAmJlxuICAgICAgICB2ZXJzaW9uLmluY2x1ZGVQcmVyZWxlYXNlID09PSAhIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UpIHtcbiAgICAgICAgcmV0dXJuIHZlcnNpb25cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcnNpb24gPSB2ZXJzaW9uLnZlcnNpb25cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCB2ZXJzaW9uLiBNdXN0IGJlIGEgc3RyaW5nLiBHb3QgdHlwZSBcIiR7dHlwZW9mIHZlcnNpb259XCIuYClcbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBgdmVyc2lvbiBpcyBsb25nZXIgdGhhbiAke01BWF9MRU5HVEh9IGNoYXJhY3RlcnNgXG4gICAgICApXG4gICAgfVxuXG4gICAgZGVidWcoJ1NlbVZlcicsIHZlcnNpb24sIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMubG9vc2UgPSAhIW9wdGlvbnMubG9vc2VcbiAgICAvLyB0aGlzIGlzbid0IGFjdHVhbGx5IHJlbGV2YW50IGZvciB2ZXJzaW9ucywgYnV0IGtlZXAgaXQgc28gdGhhdCB3ZVxuICAgIC8vIGRvbid0IHJ1biBpbnRvIHRyb3VibGUgcGFzc2luZyB0aGlzLm9wdGlvbnMgYXJvdW5kLlxuICAgIHRoaXMuaW5jbHVkZVByZXJlbGVhc2UgPSAhIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2VcblxuICAgIGNvbnN0IG0gPSB2ZXJzaW9uLnRyaW0oKS5tYXRjaChvcHRpb25zLmxvb3NlID8gcmVbdC5MT09TRV0gOiByZVt0LkZVTExdKVxuXG4gICAgaWYgKCFtKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIFZlcnNpb246ICR7dmVyc2lvbn1gKVxuICAgIH1cblxuICAgIHRoaXMucmF3ID0gdmVyc2lvblxuXG4gICAgLy8gdGhlc2UgYXJlIGFjdHVhbGx5IG51bWJlcnNcbiAgICB0aGlzLm1ham9yID0gK21bMV1cbiAgICB0aGlzLm1pbm9yID0gK21bMl1cbiAgICB0aGlzLnBhdGNoID0gK21bM11cblxuICAgIGlmICh0aGlzLm1ham9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1ham9yIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtYWpvciB2ZXJzaW9uJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5taW5vciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5taW5vciA8IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWlub3IgdmVyc2lvbicpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGF0Y2ggPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMucGF0Y2ggPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHBhdGNoIHZlcnNpb24nKVxuICAgIH1cblxuICAgIC8vIG51bWJlcmlmeSBhbnkgcHJlcmVsZWFzZSBudW1lcmljIGlkc1xuICAgIGlmICghbVs0XSkge1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gbVs0XS5zcGxpdCgnLicpLm1hcCgoaWQpID0+IHtcbiAgICAgICAgaWYgKC9eWzAtOV0rJC8udGVzdChpZCkpIHtcbiAgICAgICAgICBjb25zdCBudW0gPSAraWRcbiAgICAgICAgICBpZiAobnVtID49IDAgJiYgbnVtIDwgTUFYX1NBRkVfSU5URUdFUikge1xuICAgICAgICAgICAgcmV0dXJuIG51bVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5idWlsZCA9IG1bNV0gPyBtWzVdLnNwbGl0KCcuJykgOiBbXVxuICAgIHRoaXMuZm9ybWF0KClcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgdGhpcy52ZXJzaW9uID0gYCR7dGhpcy5tYWpvcn0uJHt0aGlzLm1pbm9yfS4ke3RoaXMucGF0Y2h9YFxuICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICB0aGlzLnZlcnNpb24gKz0gYC0ke3RoaXMucHJlcmVsZWFzZS5qb2luKCcuJyl9YFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uXG4gIH1cblxuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyc2lvblxuICB9XG5cbiAgY29tcGFyZSAob3RoZXIpIHtcbiAgICBkZWJ1ZygnU2VtVmVyLmNvbXBhcmUnLCB0aGlzLnZlcnNpb24sIHRoaXMub3B0aW9ucywgb3RoZXIpXG4gICAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKSB7XG4gICAgICBpZiAodHlwZW9mIG90aGVyID09PSAnc3RyaW5nJyAmJiBvdGhlciA9PT0gdGhpcy52ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gICAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMub3B0aW9ucylcbiAgICB9XG5cbiAgICBpZiAob3RoZXIudmVyc2lvbiA9PT0gdGhpcy52ZXJzaW9uKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvbXBhcmVNYWluKG90aGVyKSB8fCB0aGlzLmNvbXBhcmVQcmUob3RoZXIpXG4gIH1cblxuICBjb21wYXJlTWFpbiAob3RoZXIpIHtcbiAgICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpIHtcbiAgICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5vcHRpb25zKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm1ham9yIDwgb3RoZXIubWFqb3IpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBpZiAodGhpcy5tYWpvciA+IG90aGVyLm1ham9yKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH1cbiAgICBpZiAodGhpcy5taW5vciA8IG90aGVyLm1pbm9yKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgaWYgKHRoaXMubWlub3IgPiBvdGhlci5taW5vcikge1xuICAgICAgcmV0dXJuIDFcbiAgICB9XG4gICAgaWYgKHRoaXMucGF0Y2ggPCBvdGhlci5wYXRjaCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIGlmICh0aGlzLnBhdGNoID4gb3RoZXIucGF0Y2gpIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuICAgIHJldHVybiAwXG4gIH1cblxuICBjb21wYXJlUHJlIChvdGhlcikge1xuICAgIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSkge1xuICAgICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLm9wdGlvbnMpXG4gICAgfVxuXG4gICAgLy8gTk9UIGhhdmluZyBhIHByZXJlbGVhc2UgaXMgPiBoYXZpbmcgb25lXG4gICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmIG90aGVyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIGxldCBpID0gMFxuICAgIGRvIHtcbiAgICAgIGNvbnN0IGEgPSB0aGlzLnByZXJlbGVhc2VbaV1cbiAgICAgIGNvbnN0IGIgPSBvdGhlci5wcmVyZWxlYXNlW2ldXG4gICAgICBkZWJ1ZygncHJlcmVsZWFzZSBjb21wYXJlJywgaSwgYSwgYilcbiAgICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9IGVsc2UgaWYgKGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMVxuICAgICAgfSBlbHNlIGlmIChhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9IGVsc2UgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYilcbiAgICAgIH1cbiAgICB9IHdoaWxlICgrK2kpXG4gIH1cblxuICBjb21wYXJlQnVpbGQgKG90aGVyKSB7XG4gICAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKSB7XG4gICAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMub3B0aW9ucylcbiAgICB9XG5cbiAgICBsZXQgaSA9IDBcbiAgICBkbyB7XG4gICAgICBjb25zdCBhID0gdGhpcy5idWlsZFtpXVxuICAgICAgY29uc3QgYiA9IG90aGVyLmJ1aWxkW2ldXG4gICAgICBkZWJ1ZygnYnVpbGQgY29tcGFyZScsIGksIGEsIGIpXG4gICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfSBlbHNlIGlmIChiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICAgIH0gZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfSBlbHNlIGlmIChhID09PSBiKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpXG4gICAgICB9XG4gICAgfSB3aGlsZSAoKytpKVxuICB9XG5cbiAgLy8gcHJlbWlub3Igd2lsbCBidW1wIHRoZSB2ZXJzaW9uIHVwIHRvIHRoZSBuZXh0IG1pbm9yIHJlbGVhc2UsIGFuZCBpbW1lZGlhdGVseVxuICAvLyBkb3duIHRvIHByZS1yZWxlYXNlLiBwcmVtYWpvciBhbmQgcHJlcGF0Y2ggd29yayB0aGUgc2FtZSB3YXkuXG4gIGluYyAocmVsZWFzZSwgaWRlbnRpZmllciwgaWRlbnRpZmllckJhc2UpIHtcbiAgICBpZiAocmVsZWFzZS5zdGFydHNXaXRoKCdwcmUnKSkge1xuICAgICAgaWYgKCFpZGVudGlmaWVyICYmIGlkZW50aWZpZXJCYXNlID09PSBmYWxzZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW5jcmVtZW50IGFyZ3VtZW50OiBpZGVudGlmaWVyIGlzIGVtcHR5JylcbiAgICAgIH1cbiAgICAgIC8vIEF2b2lkIGFuIGludmFsaWQgc2VtdmVyIHJlc3VsdHNcbiAgICAgIGlmIChpZGVudGlmaWVyKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gYC0ke2lkZW50aWZpZXJ9YC5tYXRjaCh0aGlzLm9wdGlvbnMubG9vc2UgPyByZVt0LlBSRVJFTEVBU0VMT09TRV0gOiByZVt0LlBSRVJFTEVBU0VdKVxuICAgICAgICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdICE9PSBpZGVudGlmaWVyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIGlkZW50aWZpZXI6ICR7aWRlbnRpZmllcn1gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoIChyZWxlYXNlKSB7XG4gICAgICBjYXNlICdwcmVtYWpvcic6XG4gICAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwXG4gICAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICAgIHRoaXMubWlub3IgPSAwXG4gICAgICAgIHRoaXMubWFqb3IrK1xuICAgICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllciwgaWRlbnRpZmllckJhc2UpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwcmVtaW5vcic6XG4gICAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwXG4gICAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICAgIHRoaXMubWlub3IrK1xuICAgICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllciwgaWRlbnRpZmllckJhc2UpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwcmVwYXRjaCc6XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYWxyZWFkeSBhIHByZXJlbGVhc2UsIGl0IHdpbGwgYnVtcCB0byB0aGUgbmV4dCB2ZXJzaW9uXG4gICAgICAgIC8vIGRyb3AgYW55IHByZXJlbGVhc2VzIHRoYXQgbWlnaHQgYWxyZWFkeSBleGlzdCwgc2luY2UgdGhleSBhcmUgbm90XG4gICAgICAgIC8vIHJlbGV2YW50IGF0IHRoaXMgcG9pbnQuXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwXG4gICAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIsIGlkZW50aWZpZXJCYXNlKVxuICAgICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllciwgaWRlbnRpZmllckJhc2UpXG4gICAgICAgIGJyZWFrXG4gICAgICAvLyBJZiB0aGUgaW5wdXQgaXMgYSBub24tcHJlcmVsZWFzZSB2ZXJzaW9uLCB0aGlzIGFjdHMgdGhlIHNhbWUgYXNcbiAgICAgIC8vIHByZXBhdGNoLlxuICAgICAgY2FzZSAncHJlcmVsZWFzZSc6XG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllciwgaWRlbnRpZmllckJhc2UpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIsIGlkZW50aWZpZXJCYXNlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncmVsZWFzZSc6XG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB2ZXJzaW9uICR7dGhpcy5yYXd9IGlzIG5vdCBhIHByZXJlbGVhc2VgKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ21ham9yJzpcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1tYWpvciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1ham9yIHZlcnNpb24uXG4gICAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWFqb3IuXG4gICAgICAgIC8vIDEuMC4wLTUgYnVtcHMgdG8gMS4wLjBcbiAgICAgICAgLy8gMS4xLjAgYnVtcHMgdG8gMi4wLjBcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMubWlub3IgIT09IDAgfHxcbiAgICAgICAgICB0aGlzLnBhdGNoICE9PSAwIHx8XG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLm1ham9yKytcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1pbm9yID0gMFxuICAgICAgICB0aGlzLnBhdGNoID0gMFxuICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbWlub3InOlxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1pbm9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWlub3IgdmVyc2lvbi5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtaW5vci5cbiAgICAgICAgLy8gMS4yLjAtNSBidW1wcyB0byAxLjIuMFxuICAgICAgICAvLyAxLjIuMSBidW1wcyB0byAxLjMuMFxuICAgICAgICBpZiAodGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5taW5vcisrXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXRjaCA9IDBcbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3BhdGNoJzpcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBub3QgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uLCBpdCB3aWxsIGluY3JlbWVudCB0aGUgcGF0Y2guXG4gICAgICAgIC8vIElmIGl0IGlzIGEgcHJlLXJlbGVhc2UgaXQgd2lsbCBidW1wIHVwIHRvIHRoZSBzYW1lIHBhdGNoIHZlcnNpb24uXG4gICAgICAgIC8vIDEuMi4wLTUgcGF0Y2hlcyB0byAxLjIuMFxuICAgICAgICAvLyAxLjIuMCBwYXRjaGVzIHRvIDEuMi4xXG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5wYXRjaCsrXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgICAgICAgYnJlYWtcbiAgICAgIC8vIFRoaXMgcHJvYmFibHkgc2hvdWxkbid0IGJlIHVzZWQgcHVibGljbHkuXG4gICAgICAvLyAxLjAuMCAncHJlJyB3b3VsZCBiZWNvbWUgMS4wLjAtMCB3aGljaCBpcyB0aGUgd3JvbmcgZGlyZWN0aW9uLlxuICAgICAgY2FzZSAncHJlJzoge1xuICAgICAgICBjb25zdCBiYXNlID0gTnVtYmVyKGlkZW50aWZpZXJCYXNlKSA/IDEgOiAwXG5cbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbYmFzZV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgaSA9IHRoaXMucHJlcmVsZWFzZS5sZW5ndGhcbiAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVyZWxlYXNlW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICB0aGlzLnByZXJlbGVhc2VbaV0rK1xuICAgICAgICAgICAgICBpID0gLTJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBkaWRuJ3QgaW5jcmVtZW50IGFueXRoaW5nXG4gICAgICAgICAgICBpZiAoaWRlbnRpZmllciA9PT0gdGhpcy5wcmVyZWxlYXNlLmpvaW4oJy4nKSAmJiBpZGVudGlmaWVyQmFzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGluY3JlbWVudCBhcmd1bWVudDogaWRlbnRpZmllciBhbHJlYWR5IGV4aXN0cycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UucHVzaChiYXNlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaWRlbnRpZmllcikge1xuICAgICAgICAgIC8vIDEuMi4wLWJldGEuMSBidW1wcyB0byAxLjIuMC1iZXRhLjIsXG4gICAgICAgICAgLy8gMS4yLjAtYmV0YS5mb29ibHogb3IgMS4yLjAtYmV0YSBidW1wcyB0byAxLjIuMC1iZXRhLjBcbiAgICAgICAgICBsZXQgcHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCBiYXNlXVxuICAgICAgICAgIGlmIChpZGVudGlmaWVyQmFzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByZXJlbGVhc2UgPSBbaWRlbnRpZmllcl1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLnByZXJlbGVhc2VbMF0sIGlkZW50aWZpZXIpID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoaXNOYU4odGhpcy5wcmVyZWxlYXNlWzFdKSkge1xuICAgICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBwcmVyZWxlYXNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IHByZXJlbGVhc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCBpbmNyZW1lbnQgYXJndW1lbnQ6ICR7cmVsZWFzZX1gKVxuICAgIH1cbiAgICB0aGlzLnJhdyA9IHRoaXMuZm9ybWF0KClcbiAgICBpZiAodGhpcy5idWlsZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmF3ICs9IGArJHt0aGlzLmJ1aWxkLmpvaW4oJy4nKX1gXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZW1WZXJcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgcGFyc2UgPSAodmVyc2lvbiwgb3B0aW9ucywgdGhyb3dFcnJvcnMgPSBmYWxzZSkgPT4ge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgIHJldHVybiB2ZXJzaW9uXG4gIH1cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBvcHRpb25zKVxuICB9IGNhdGNoIChlcikge1xuICAgIGlmICghdGhyb3dFcnJvcnMpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHRocm93IGVyXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKVxuY29uc3QgdmFsaWQgPSAodmVyc2lvbiwgb3B0aW9ucykgPT4ge1xuICBjb25zdCB2ID0gcGFyc2UodmVyc2lvbiwgb3B0aW9ucylcbiAgcmV0dXJuIHYgPyB2LnZlcnNpb24gOiBudWxsXG59XG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5jb25zdCBjbGVhbiA9ICh2ZXJzaW9uLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHMgPSBwYXJzZSh2ZXJzaW9uLnRyaW0oKS5yZXBsYWNlKC9eWz12XSsvLCAnJyksIG9wdGlvbnMpXG4gIHJldHVybiBzID8gcy52ZXJzaW9uIDogbnVsbFxufVxubW9kdWxlLmV4cG9ydHMgPSBjbGVhblxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5cbmNvbnN0IGluYyA9ICh2ZXJzaW9uLCByZWxlYXNlLCBvcHRpb25zLCBpZGVudGlmaWVyLCBpZGVudGlmaWVyQmFzZSkgPT4ge1xuICBpZiAodHlwZW9mIChvcHRpb25zKSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZGVudGlmaWVyQmFzZSA9IGlkZW50aWZpZXJcbiAgICBpZGVudGlmaWVyID0gb3B0aW9uc1xuICAgIG9wdGlvbnMgPSB1bmRlZmluZWRcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIoXG4gICAgICB2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyID8gdmVyc2lvbi52ZXJzaW9uIDogdmVyc2lvbixcbiAgICAgIG9wdGlvbnNcbiAgICApLmluYyhyZWxlYXNlLCBpZGVudGlmaWVyLCBpZGVudGlmaWVyQmFzZSkudmVyc2lvblxuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gaW5jXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZS5qcycpXG5cbmNvbnN0IGRpZmYgPSAodmVyc2lvbjEsIHZlcnNpb24yKSA9PiB7XG4gIGNvbnN0IHYxID0gcGFyc2UodmVyc2lvbjEsIG51bGwsIHRydWUpXG4gIGNvbnN0IHYyID0gcGFyc2UodmVyc2lvbjIsIG51bGwsIHRydWUpXG4gIGNvbnN0IGNvbXBhcmlzb24gPSB2MS5jb21wYXJlKHYyKVxuXG4gIGlmIChjb21wYXJpc29uID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHYxSGlnaGVyID0gY29tcGFyaXNvbiA+IDBcbiAgY29uc3QgaGlnaFZlcnNpb24gPSB2MUhpZ2hlciA/IHYxIDogdjJcbiAgY29uc3QgbG93VmVyc2lvbiA9IHYxSGlnaGVyID8gdjIgOiB2MVxuICBjb25zdCBoaWdoSGFzUHJlID0gISFoaWdoVmVyc2lvbi5wcmVyZWxlYXNlLmxlbmd0aFxuICBjb25zdCBsb3dIYXNQcmUgPSAhIWxvd1ZlcnNpb24ucHJlcmVsZWFzZS5sZW5ndGhcblxuICBpZiAobG93SGFzUHJlICYmICFoaWdoSGFzUHJlKSB7XG4gICAgLy8gR29pbmcgZnJvbSBwcmVyZWxlYXNlIC0+IG5vIHByZXJlbGVhc2UgcmVxdWlyZXMgc29tZSBzcGVjaWFsIGNhc2luZ1xuXG4gICAgLy8gSWYgdGhlIGxvdyB2ZXJzaW9uIGhhcyBvbmx5IGEgbWFqb3IsIHRoZW4gaXQgd2lsbCBhbHdheXMgYmUgYSBtYWpvclxuICAgIC8vIFNvbWUgZXhhbXBsZXM6XG4gICAgLy8gMS4wLjAtMSAtPiAxLjAuMFxuICAgIC8vIDEuMC4wLTEgLT4gMS4xLjFcbiAgICAvLyAxLjAuMC0xIC0+IDIuMC4wXG4gICAgaWYgKCFsb3dWZXJzaW9uLnBhdGNoICYmICFsb3dWZXJzaW9uLm1pbm9yKSB7XG4gICAgICByZXR1cm4gJ21ham9yJ1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBtYWluIHBhcnQgaGFzIG5vIGRpZmZlcmVuY2VcbiAgICBpZiAobG93VmVyc2lvbi5jb21wYXJlTWFpbihoaWdoVmVyc2lvbikgPT09IDApIHtcbiAgICAgIGlmIChsb3dWZXJzaW9uLm1pbm9yICYmICFsb3dWZXJzaW9uLnBhdGNoKSB7XG4gICAgICAgIHJldHVybiAnbWlub3InXG4gICAgICB9XG4gICAgICByZXR1cm4gJ3BhdGNoJ1xuICAgIH1cbiAgfVxuXG4gIC8vIGFkZCB0aGUgYHByZWAgcHJlZml4IGlmIHdlIGFyZSBnb2luZyB0byBhIHByZXJlbGVhc2UgdmVyc2lvblxuICBjb25zdCBwcmVmaXggPSBoaWdoSGFzUHJlID8gJ3ByZScgOiAnJ1xuXG4gIGlmICh2MS5tYWpvciAhPT0gdjIubWFqb3IpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJ21ham9yJ1xuICB9XG5cbiAgaWYgKHYxLm1pbm9yICE9PSB2Mi5taW5vcikge1xuICAgIHJldHVybiBwcmVmaXggKyAnbWlub3InXG4gIH1cblxuICBpZiAodjEucGF0Y2ggIT09IHYyLnBhdGNoKSB7XG4gICAgcmV0dXJuIHByZWZpeCArICdwYXRjaCdcbiAgfVxuXG4gIC8vIGhpZ2ggYW5kIGxvdyBhcmUgcHJlcmVsZWFzZXNcbiAgcmV0dXJuICdwcmVyZWxlYXNlJ1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpZmZcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgbWFqb3IgPSAoYSwgbG9vc2UpID0+IG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1ham9yXG5tb2R1bGUuZXhwb3J0cyA9IG1ham9yXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IG1pbm9yID0gKGEsIGxvb3NlKSA9PiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5taW5vclxubW9kdWxlLmV4cG9ydHMgPSBtaW5vclxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBwYXRjaCA9IChhLCBsb29zZSkgPT4gbmV3IFNlbVZlcihhLCBsb29zZSkucGF0Y2hcbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcbmNvbnN0IHByZXJlbGVhc2UgPSAodmVyc2lvbiwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBwYXJzZWQgPSBwYXJzZSh2ZXJzaW9uLCBvcHRpb25zKVxuICByZXR1cm4gKHBhcnNlZCAmJiBwYXJzZWQucHJlcmVsZWFzZS5sZW5ndGgpID8gcGFyc2VkLnByZXJlbGVhc2UgOiBudWxsXG59XG5tb2R1bGUuZXhwb3J0cyA9IHByZXJlbGVhc2VcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgY29tcGFyZSA9IChhLCBiLCBsb29zZSkgPT5cbiAgbmV3IFNlbVZlcihhLCBsb29zZSkuY29tcGFyZShuZXcgU2VtVmVyKGIsIGxvb3NlKSlcblxubW9kdWxlLmV4cG9ydHMgPSBjb21wYXJlXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgcmNvbXBhcmUgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYiwgYSwgbG9vc2UpXG5tb2R1bGUuZXhwb3J0cyA9IHJjb21wYXJlXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgY29tcGFyZUxvb3NlID0gKGEsIGIpID0+IGNvbXBhcmUoYSwgYiwgdHJ1ZSlcbm1vZHVsZS5leHBvcnRzID0gY29tcGFyZUxvb3NlXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IGNvbXBhcmVCdWlsZCA9IChhLCBiLCBsb29zZSkgPT4ge1xuICBjb25zdCB2ZXJzaW9uQSA9IG5ldyBTZW1WZXIoYSwgbG9vc2UpXG4gIGNvbnN0IHZlcnNpb25CID0gbmV3IFNlbVZlcihiLCBsb29zZSlcbiAgcmV0dXJuIHZlcnNpb25BLmNvbXBhcmUodmVyc2lvbkIpIHx8IHZlcnNpb25BLmNvbXBhcmVCdWlsZCh2ZXJzaW9uQilcbn1cbm1vZHVsZS5leHBvcnRzID0gY29tcGFyZUJ1aWxkXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNvbXBhcmVCdWlsZCA9IHJlcXVpcmUoJy4vY29tcGFyZS1idWlsZCcpXG5jb25zdCBzb3J0ID0gKGxpc3QsIGxvb3NlKSA9PiBsaXN0LnNvcnQoKGEsIGIpID0+IGNvbXBhcmVCdWlsZChhLCBiLCBsb29zZSkpXG5tb2R1bGUuZXhwb3J0cyA9IHNvcnRcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgY29tcGFyZUJ1aWxkID0gcmVxdWlyZSgnLi9jb21wYXJlLWJ1aWxkJylcbmNvbnN0IHJzb3J0ID0gKGxpc3QsIGxvb3NlKSA9PiBsaXN0LnNvcnQoKGEsIGIpID0+IGNvbXBhcmVCdWlsZChiLCBhLCBsb29zZSkpXG5tb2R1bGUuZXhwb3J0cyA9IHJzb3J0XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgZ3QgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYSwgYiwgbG9vc2UpID4gMFxubW9kdWxlLmV4cG9ydHMgPSBndFxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IGx0ID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8IDBcbm1vZHVsZS5leHBvcnRzID0gbHRcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBlcSA9IChhLCBiLCBsb29zZSkgPT4gY29tcGFyZShhLCBiLCBsb29zZSkgPT09IDBcbm1vZHVsZS5leHBvcnRzID0gZXFcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBuZXEgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYSwgYiwgbG9vc2UpICE9PSAwXG5tb2R1bGUuZXhwb3J0cyA9IG5lcVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IGd0ZSA9IChhLCBiLCBsb29zZSkgPT4gY29tcGFyZShhLCBiLCBsb29zZSkgPj0gMFxubW9kdWxlLmV4cG9ydHMgPSBndGVcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBsdGUgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYSwgYiwgbG9vc2UpIDw9IDBcbm1vZHVsZS5leHBvcnRzID0gbHRlXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGVxID0gcmVxdWlyZSgnLi9lcScpXG5jb25zdCBuZXEgPSByZXF1aXJlKCcuL25lcScpXG5jb25zdCBndCA9IHJlcXVpcmUoJy4vZ3QnKVxuY29uc3QgZ3RlID0gcmVxdWlyZSgnLi9ndGUnKVxuY29uc3QgbHQgPSByZXF1aXJlKCcuL2x0JylcbmNvbnN0IGx0ZSA9IHJlcXVpcmUoJy4vbHRlJylcblxuY29uc3QgY21wID0gKGEsIG9wLCBiLCBsb29zZSkgPT4ge1xuICBzd2l0Y2ggKG9wKSB7XG4gICAgY2FzZSAnPT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYSA9IGEudmVyc2lvblxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgICAgICBiID0gYi52ZXJzaW9uXG4gICAgICB9XG4gICAgICByZXR1cm4gYSA9PT0gYlxuXG4gICAgY2FzZSAnIT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYSA9IGEudmVyc2lvblxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgICAgICBiID0gYi52ZXJzaW9uXG4gICAgICB9XG4gICAgICByZXR1cm4gYSAhPT0gYlxuXG4gICAgY2FzZSAnJzpcbiAgICBjYXNlICc9JzpcbiAgICBjYXNlICc9PSc6XG4gICAgICByZXR1cm4gZXEoYSwgYiwgbG9vc2UpXG5cbiAgICBjYXNlICchPSc6XG4gICAgICByZXR1cm4gbmVxKGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnPic6XG4gICAgICByZXR1cm4gZ3QoYSwgYiwgbG9vc2UpXG5cbiAgICBjYXNlICc+PSc6XG4gICAgICByZXR1cm4gZ3RlKGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnPCc6XG4gICAgICByZXR1cm4gbHQoYSwgYiwgbG9vc2UpXG5cbiAgICBjYXNlICc8PSc6XG4gICAgICByZXR1cm4gbHRlKGEsIGIsIGxvb3NlKVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgb3BlcmF0b3I6ICR7b3B9YClcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBjbXBcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcbmNvbnN0IHsgc2FmZVJlOiByZSwgdCB9ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcmUnKVxuXG5jb25zdCBjb2VyY2UgPSAodmVyc2lvbiwgb3B0aW9ucykgPT4ge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgIHJldHVybiB2ZXJzaW9uXG4gIH1cblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdudW1iZXInKSB7XG4gICAgdmVyc2lvbiA9IFN0cmluZyh2ZXJzaW9uKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIGxldCBtYXRjaCA9IG51bGxcbiAgaWYgKCFvcHRpb25zLnJ0bCkge1xuICAgIG1hdGNoID0gdmVyc2lvbi5tYXRjaChvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlID8gcmVbdC5DT0VSQ0VGVUxMXSA6IHJlW3QuQ09FUkNFXSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGaW5kIHRoZSByaWdodC1tb3N0IGNvZXJjaWJsZSBzdHJpbmcgdGhhdCBkb2VzIG5vdCBzaGFyZVxuICAgIC8vIGEgdGVybWludXMgd2l0aCBhIG1vcmUgbGVmdC13YXJkIGNvZXJjaWJsZSBzdHJpbmcuXG4gICAgLy8gRWcsICcxLjIuMy40JyB3YW50cyB0byBjb2VyY2UgJzIuMy40Jywgbm90ICczLjQnIG9yICc0J1xuICAgIC8vIFdpdGggaW5jbHVkZVByZXJlbGVhc2Ugb3B0aW9uIHNldCwgJzEuMi4zLjQtcmMnIHdhbnRzIHRvIGNvZXJjZSAnMi4zLjQtcmMnLCBub3QgJzIuMy40J1xuICAgIC8vXG4gICAgLy8gV2FsayB0aHJvdWdoIHRoZSBzdHJpbmcgY2hlY2tpbmcgd2l0aCBhIC9nIHJlZ2V4cFxuICAgIC8vIE1hbnVhbGx5IHNldCB0aGUgaW5kZXggc28gYXMgdG8gcGljayB1cCBvdmVybGFwcGluZyBtYXRjaGVzLlxuICAgIC8vIFN0b3Agd2hlbiB3ZSBnZXQgYSBtYXRjaCB0aGF0IGVuZHMgYXQgdGhlIHN0cmluZyBlbmQsIHNpbmNlIG5vXG4gICAgLy8gY29lcmNpYmxlIHN0cmluZyBjYW4gYmUgbW9yZSByaWdodC13YXJkIHdpdGhvdXQgdGhlIHNhbWUgdGVybWludXMuXG4gICAgY29uc3QgY29lcmNlUnRsUmVnZXggPSBvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlID8gcmVbdC5DT0VSQ0VSVExGVUxMXSA6IHJlW3QuQ09FUkNFUlRMXVxuICAgIGxldCBuZXh0XG4gICAgd2hpbGUgKChuZXh0ID0gY29lcmNlUnRsUmVnZXguZXhlYyh2ZXJzaW9uKSkgJiZcbiAgICAgICAgKCFtYXRjaCB8fCBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCAhPT0gdmVyc2lvbi5sZW5ndGgpXG4gICAgKSB7XG4gICAgICBpZiAoIW1hdGNoIHx8XG4gICAgICAgICAgICBuZXh0LmluZGV4ICsgbmV4dFswXS5sZW5ndGggIT09IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKSB7XG4gICAgICAgIG1hdGNoID0gbmV4dFxuICAgICAgfVxuICAgICAgY29lcmNlUnRsUmVnZXgubGFzdEluZGV4ID0gbmV4dC5pbmRleCArIG5leHRbMV0ubGVuZ3RoICsgbmV4dFsyXS5sZW5ndGhcbiAgICB9XG4gICAgLy8gbGVhdmUgaXQgaW4gYSBjbGVhbiBzdGF0ZVxuICAgIGNvZXJjZVJ0bFJlZ2V4Lmxhc3RJbmRleCA9IC0xXG4gIH1cblxuICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgbWFqb3IgPSBtYXRjaFsyXVxuICBjb25zdCBtaW5vciA9IG1hdGNoWzNdIHx8ICcwJ1xuICBjb25zdCBwYXRjaCA9IG1hdGNoWzRdIHx8ICcwJ1xuICBjb25zdCBwcmVyZWxlYXNlID0gb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSAmJiBtYXRjaFs1XSA/IGAtJHttYXRjaFs1XX1gIDogJydcbiAgY29uc3QgYnVpbGQgPSBvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlICYmIG1hdGNoWzZdID8gYCske21hdGNoWzZdfWAgOiAnJ1xuXG4gIHJldHVybiBwYXJzZShgJHttYWpvcn0uJHttaW5vcn0uJHtwYXRjaH0ke3ByZXJlbGVhc2V9JHtidWlsZH1gLCBvcHRpb25zKVxufVxubW9kdWxlLmV4cG9ydHMgPSBjb2VyY2VcbiIsICIndXNlIHN0cmljdCdcblxuY2xhc3MgTFJVQ2FjaGUge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5tYXggPSAxMDAwXG4gICAgdGhpcy5tYXAgPSBuZXcgTWFwKClcbiAgfVxuXG4gIGdldCAoa2V5KSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLm1hcC5nZXQoa2V5KVxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbW92ZSB0aGUga2V5IGZyb20gdGhlIG1hcCBhbmQgYWRkIGl0IHRvIHRoZSBlbmRcbiAgICAgIHRoaXMubWFwLmRlbGV0ZShrZXkpXG4gICAgICB0aGlzLm1hcC5zZXQoa2V5LCB2YWx1ZSlcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZSAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmRlbGV0ZShrZXkpXG4gIH1cblxuICBzZXQgKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBkZWxldGVkID0gdGhpcy5kZWxldGUoa2V5KVxuXG4gICAgaWYgKCFkZWxldGVkICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIElmIGNhY2hlIGlzIGZ1bGwsIGRlbGV0ZSB0aGUgbGVhc3QgcmVjZW50bHkgdXNlZCBpdGVtXG4gICAgICBpZiAodGhpcy5tYXAuc2l6ZSA+PSB0aGlzLm1heCkge1xuICAgICAgICBjb25zdCBmaXJzdEtleSA9IHRoaXMubWFwLmtleXMoKS5uZXh0KCkudmFsdWVcbiAgICAgICAgdGhpcy5kZWxldGUoZmlyc3RLZXkpXG4gICAgICB9XG5cbiAgICAgIHRoaXMubWFwLnNldChrZXksIHZhbHVlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMUlVDYWNoZVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBTUEFDRV9DSEFSQUNURVJTID0gL1xccysvZ1xuXG4vLyBob2lzdGVkIGNsYXNzIGZvciBjeWNsaWMgZGVwZW5kZW5jeVxuY2xhc3MgUmFuZ2Uge1xuICBjb25zdHJ1Y3RvciAocmFuZ2UsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpXG5cbiAgICBpZiAocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkge1xuICAgICAgaWYgKFxuICAgICAgICByYW5nZS5sb29zZSA9PT0gISFvcHRpb25zLmxvb3NlICYmXG4gICAgICAgIHJhbmdlLmluY2x1ZGVQcmVyZWxlYXNlID09PSAhIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2VcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gcmFuZ2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UucmF3LCBvcHRpb25zKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyYW5nZSBpbnN0YW5jZW9mIENvbXBhcmF0b3IpIHtcbiAgICAgIC8vIGp1c3QgcHV0IGl0IGluIHRoZSBzZXQgYW5kIHJldHVyblxuICAgICAgdGhpcy5yYXcgPSByYW5nZS52YWx1ZVxuICAgICAgdGhpcy5zZXQgPSBbW3JhbmdlXV1cbiAgICAgIHRoaXMuZm9ybWF0dGVkID0gdW5kZWZpbmVkXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmxvb3NlID0gISFvcHRpb25zLmxvb3NlXG4gICAgdGhpcy5pbmNsdWRlUHJlcmVsZWFzZSA9ICEhb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZVxuXG4gICAgLy8gRmlyc3QgcmVkdWNlIGFsbCB3aGl0ZXNwYWNlIGFzIG11Y2ggYXMgcG9zc2libGUgc28gd2UgZG8gbm90IGhhdmUgdG8gcmVseVxuICAgIC8vIG9uIHBvdGVudGlhbGx5IHNsb3cgcmVnZXhlcyBsaWtlIFxccyouIFRoaXMgaXMgdGhlbiBzdG9yZWQgYW5kIHVzZWQgZm9yXG4gICAgLy8gZnV0dXJlIGVycm9yIG1lc3NhZ2VzIGFzIHdlbGwuXG4gICAgdGhpcy5yYXcgPSByYW5nZS50cmltKCkucmVwbGFjZShTUEFDRV9DSEFSQUNURVJTLCAnICcpXG5cbiAgICAvLyBGaXJzdCwgc3BsaXQgb24gfHxcbiAgICB0aGlzLnNldCA9IHRoaXMucmF3XG4gICAgICAuc3BsaXQoJ3x8JylcbiAgICAgIC8vIG1hcCB0aGUgcmFuZ2UgdG8gYSAyZCBhcnJheSBvZiBjb21wYXJhdG9yc1xuICAgICAgLm1hcChyID0+IHRoaXMucGFyc2VSYW5nZShyLnRyaW0oKSkpXG4gICAgICAvLyB0aHJvdyBvdXQgYW55IGNvbXBhcmF0b3IgbGlzdHMgdGhhdCBhcmUgZW1wdHlcbiAgICAgIC8vIHRoaXMgZ2VuZXJhbGx5IG1lYW5zIHRoYXQgaXQgd2FzIG5vdCBhIHZhbGlkIHJhbmdlLCB3aGljaCBpcyBhbGxvd2VkXG4gICAgICAvLyBpbiBsb29zZSBtb2RlLCBidXQgd2lsbCBzdGlsbCB0aHJvdyBpZiB0aGUgV0hPTEUgcmFuZ2UgaXMgaW52YWxpZC5cbiAgICAgIC5maWx0ZXIoYyA9PiBjLmxlbmd0aClcblxuICAgIGlmICghdGhpcy5zZXQubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIFNlbVZlciBSYW5nZTogJHt0aGlzLnJhd31gKVxuICAgIH1cblxuICAgIC8vIGlmIHdlIGhhdmUgYW55IHRoYXQgYXJlIG5vdCB0aGUgbnVsbCBzZXQsIHRocm93IG91dCBudWxsIHNldHMuXG4gICAgaWYgKHRoaXMuc2V0Lmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIGtlZXAgdGhlIGZpcnN0IG9uZSwgaW4gY2FzZSB0aGV5J3JlIGFsbCBudWxsIHNldHNcbiAgICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5zZXRbMF1cbiAgICAgIHRoaXMuc2V0ID0gdGhpcy5zZXQuZmlsdGVyKGMgPT4gIWlzTnVsbFNldChjWzBdKSlcbiAgICAgIGlmICh0aGlzLnNldC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5zZXQgPSBbZmlyc3RdXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2V0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBhbnkgdGhhdCBhcmUgKiwgdGhlbiB0aGUgcmFuZ2UgaXMganVzdCAqXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiB0aGlzLnNldCkge1xuICAgICAgICAgIGlmIChjLmxlbmd0aCA9PT0gMSAmJiBpc0FueShjWzBdKSkge1xuICAgICAgICAgICAgdGhpcy5zZXQgPSBbY11cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtYXR0ZWQgPSB1bmRlZmluZWRcbiAgfVxuXG4gIGdldCByYW5nZSAoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0dGVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZm9ybWF0dGVkID0gJydcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgdGhpcy5mb3JtYXR0ZWQgKz0gJ3x8J1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBzID0gdGhpcy5zZXRbaV1cbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjb21wcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIGlmIChrID4gMCkge1xuICAgICAgICAgICAgdGhpcy5mb3JtYXR0ZWQgKz0gJyAnXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZm9ybWF0dGVkICs9IGNvbXBzW2tdLnRvU3RyaW5nKCkudHJpbSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0dGVkXG4gIH1cblxuICBmb3JtYXQgKCkge1xuICAgIHJldHVybiB0aGlzLnJhbmdlXG4gIH1cblxuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmFuZ2VcbiAgfVxuXG4gIHBhcnNlUmFuZ2UgKHJhbmdlKSB7XG4gICAgLy8gbWVtb2l6ZSByYW5nZSBwYXJzaW5nIGZvciBwZXJmb3JtYW5jZS5cbiAgICAvLyB0aGlzIGlzIGEgdmVyeSBob3QgcGF0aCwgYW5kIGZ1bGx5IGRldGVybWluaXN0aWMuXG4gICAgY29uc3QgbWVtb09wdHMgPVxuICAgICAgKHRoaXMub3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSAmJiBGTEFHX0lOQ0xVREVfUFJFUkVMRUFTRSkgfFxuICAgICAgKHRoaXMub3B0aW9ucy5sb29zZSAmJiBGTEFHX0xPT1NFKVxuICAgIGNvbnN0IG1lbW9LZXkgPSBtZW1vT3B0cyArICc6JyArIHJhbmdlXG4gICAgY29uc3QgY2FjaGVkID0gY2FjaGUuZ2V0KG1lbW9LZXkpXG4gICAgaWYgKGNhY2hlZCkge1xuICAgICAgcmV0dXJuIGNhY2hlZFxuICAgIH1cblxuICAgIGNvbnN0IGxvb3NlID0gdGhpcy5vcHRpb25zLmxvb3NlXG4gICAgLy8gYDEuMi4zIC0gMS4yLjRgID0+IGA+PTEuMi4zIDw9MS4yLjRgXG4gICAgY29uc3QgaHIgPSBsb29zZSA/IHJlW3QuSFlQSEVOUkFOR0VMT09TRV0gOiByZVt0LkhZUEhFTlJBTkdFXVxuICAgIHJhbmdlID0gcmFuZ2UucmVwbGFjZShociwgaHlwaGVuUmVwbGFjZSh0aGlzLm9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UpKVxuICAgIGRlYnVnKCdoeXBoZW4gcmVwbGFjZScsIHJhbmdlKVxuXG4gICAgLy8gYD4gMS4yLjMgPCAxLjIuNWAgPT4gYD4xLjIuMyA8MS4yLjVgXG4gICAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW3QuQ09NUEFSQVRPUlRSSU1dLCBjb21wYXJhdG9yVHJpbVJlcGxhY2UpXG4gICAgZGVidWcoJ2NvbXBhcmF0b3IgdHJpbScsIHJhbmdlKVxuXG4gICAgLy8gYH4gMS4yLjNgID0+IGB+MS4yLjNgXG4gICAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW3QuVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSlcbiAgICBkZWJ1ZygndGlsZGUgdHJpbScsIHJhbmdlKVxuXG4gICAgLy8gYF4gMS4yLjNgID0+IGBeMS4yLjNgXG4gICAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW3QuQ0FSRVRUUklNXSwgY2FyZXRUcmltUmVwbGFjZSlcbiAgICBkZWJ1ZygnY2FyZXQgdHJpbScsIHJhbmdlKVxuXG4gICAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgdHJpbW1lZCBhbmRcbiAgICAvLyByZWFkeSB0byBiZSBzcGxpdCBpbnRvIGNvbXBhcmF0b3JzLlxuXG4gICAgbGV0IHJhbmdlTGlzdCA9IHJhbmdlXG4gICAgICAuc3BsaXQoJyAnKVxuICAgICAgLm1hcChjb21wID0+IHBhcnNlQ29tcGFyYXRvcihjb21wLCB0aGlzLm9wdGlvbnMpKVxuICAgICAgLmpvaW4oJyAnKVxuICAgICAgLnNwbGl0KC9cXHMrLylcbiAgICAgIC8vID49MC4wLjAgaXMgZXF1aXZhbGVudCB0byAqXG4gICAgICAubWFwKGNvbXAgPT4gcmVwbGFjZUdURTAoY29tcCwgdGhpcy5vcHRpb25zKSlcblxuICAgIGlmIChsb29zZSkge1xuICAgICAgLy8gaW4gbG9vc2UgbW9kZSwgdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgdmFsaWQgY29tcGFyYXRvcnNcbiAgICAgIHJhbmdlTGlzdCA9IHJhbmdlTGlzdC5maWx0ZXIoY29tcCA9PiB7XG4gICAgICAgIGRlYnVnKCdsb29zZSBpbnZhbGlkIGZpbHRlcicsIGNvbXAsIHRoaXMub3B0aW9ucylcbiAgICAgICAgcmV0dXJuICEhY29tcC5tYXRjaChyZVt0LkNPTVBBUkFUT1JMT09TRV0pXG4gICAgICB9KVxuICAgIH1cbiAgICBkZWJ1ZygncmFuZ2UgbGlzdCcsIHJhbmdlTGlzdClcblxuICAgIC8vIGlmIGFueSBjb21wYXJhdG9ycyBhcmUgdGhlIG51bGwgc2V0LCB0aGVuIHJlcGxhY2Ugd2l0aCBKVVNUIG51bGwgc2V0XG4gICAgLy8gaWYgbW9yZSB0aGFuIG9uZSBjb21wYXJhdG9yLCByZW1vdmUgYW55ICogY29tcGFyYXRvcnNcbiAgICAvLyBhbHNvLCBkb24ndCBpbmNsdWRlIHRoZSBzYW1lIGNvbXBhcmF0b3IgbW9yZSB0aGFuIG9uY2VcbiAgICBjb25zdCByYW5nZU1hcCA9IG5ldyBNYXAoKVxuICAgIGNvbnN0IGNvbXBhcmF0b3JzID0gcmFuZ2VMaXN0Lm1hcChjb21wID0+IG5ldyBDb21wYXJhdG9yKGNvbXAsIHRoaXMub3B0aW9ucykpXG4gICAgZm9yIChjb25zdCBjb21wIG9mIGNvbXBhcmF0b3JzKSB7XG4gICAgICBpZiAoaXNOdWxsU2V0KGNvbXApKSB7XG4gICAgICAgIHJldHVybiBbY29tcF1cbiAgICAgIH1cbiAgICAgIHJhbmdlTWFwLnNldChjb21wLnZhbHVlLCBjb21wKVxuICAgIH1cbiAgICBpZiAocmFuZ2VNYXAuc2l6ZSA+IDEgJiYgcmFuZ2VNYXAuaGFzKCcnKSkge1xuICAgICAgcmFuZ2VNYXAuZGVsZXRlKCcnKVxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IFsuLi5yYW5nZU1hcC52YWx1ZXMoKV1cbiAgICBjYWNoZS5zZXQobWVtb0tleSwgcmVzdWx0KVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGludGVyc2VjdHMgKHJhbmdlLCBvcHRpb25zKSB7XG4gICAgaWYgKCEocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2EgUmFuZ2UgaXMgcmVxdWlyZWQnKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNldC5zb21lKCh0aGlzQ29tcGFyYXRvcnMpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGlzU2F0aXNmaWFibGUodGhpc0NvbXBhcmF0b3JzLCBvcHRpb25zKSAmJlxuICAgICAgICByYW5nZS5zZXQuc29tZSgocmFuZ2VDb21wYXJhdG9ycykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBpc1NhdGlzZmlhYmxlKHJhbmdlQ29tcGFyYXRvcnMsIG9wdGlvbnMpICYmXG4gICAgICAgICAgICB0aGlzQ29tcGFyYXRvcnMuZXZlcnkoKHRoaXNDb21wYXJhdG9yKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiByYW5nZUNvbXBhcmF0b3JzLmV2ZXJ5KChyYW5nZUNvbXBhcmF0b3IpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc0NvbXBhcmF0b3IuaW50ZXJzZWN0cyhyYW5nZUNvbXBhcmF0b3IsIG9wdGlvbnMpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgLy8gaWYgQU5ZIG9mIHRoZSBzZXRzIG1hdGNoIEFMTCBvZiBpdHMgY29tcGFyYXRvcnMsIHRoZW4gcGFzc1xuICB0ZXN0ICh2ZXJzaW9uKSB7XG4gICAgaWYgKCF2ZXJzaW9uKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLm9wdGlvbnMpXG4gICAgICB9IGNhdGNoIChlcikge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGVzdFNldCh0aGlzLnNldFtpXSwgdmVyc2lvbiwgdGhpcy5vcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJhbmdlXG5cbmNvbnN0IExSVSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2xydWNhY2hlJylcbmNvbnN0IGNhY2hlID0gbmV3IExSVSgpXG5cbmNvbnN0IHBhcnNlT3B0aW9ucyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3BhcnNlLW9wdGlvbnMnKVxuY29uc3QgQ29tcGFyYXRvciA9IHJlcXVpcmUoJy4vY29tcGFyYXRvcicpXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2RlYnVnJylcbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4vc2VtdmVyJylcbmNvbnN0IHtcbiAgc2FmZVJlOiByZSxcbiAgdCxcbiAgY29tcGFyYXRvclRyaW1SZXBsYWNlLFxuICB0aWxkZVRyaW1SZXBsYWNlLFxuICBjYXJldFRyaW1SZXBsYWNlLFxufSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3JlJylcbmNvbnN0IHsgRkxBR19JTkNMVURFX1BSRVJFTEVBU0UsIEZMQUdfTE9PU0UgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NvbnN0YW50cycpXG5cbmNvbnN0IGlzTnVsbFNldCA9IGMgPT4gYy52YWx1ZSA9PT0gJzwwLjAuMC0wJ1xuY29uc3QgaXNBbnkgPSBjID0+IGMudmFsdWUgPT09ICcnXG5cbi8vIHRha2UgYSBzZXQgb2YgY29tcGFyYXRvcnMgYW5kIGRldGVybWluZSB3aGV0aGVyIHRoZXJlXG4vLyBleGlzdHMgYSB2ZXJzaW9uIHdoaWNoIGNhbiBzYXRpc2Z5IGl0XG5jb25zdCBpc1NhdGlzZmlhYmxlID0gKGNvbXBhcmF0b3JzLCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQgPSB0cnVlXG4gIGNvbnN0IHJlbWFpbmluZ0NvbXBhcmF0b3JzID0gY29tcGFyYXRvcnMuc2xpY2UoKVxuICBsZXQgdGVzdENvbXBhcmF0b3IgPSByZW1haW5pbmdDb21wYXJhdG9ycy5wb3AoKVxuXG4gIHdoaWxlIChyZXN1bHQgJiYgcmVtYWluaW5nQ29tcGFyYXRvcnMubGVuZ3RoKSB7XG4gICAgcmVzdWx0ID0gcmVtYWluaW5nQ29tcGFyYXRvcnMuZXZlcnkoKG90aGVyQ29tcGFyYXRvcikgPT4ge1xuICAgICAgcmV0dXJuIHRlc3RDb21wYXJhdG9yLmludGVyc2VjdHMob3RoZXJDb21wYXJhdG9yLCBvcHRpb25zKVxuICAgIH0pXG5cbiAgICB0ZXN0Q29tcGFyYXRvciA9IHJlbWFpbmluZ0NvbXBhcmF0b3JzLnBvcCgpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8vIGNvbXByaXNlZCBvZiB4cmFuZ2VzLCB0aWxkZXMsIHN0YXJzLCBhbmQgZ3RsdCdzIGF0IHRoaXMgcG9pbnQuXG4vLyBhbHJlYWR5IHJlcGxhY2VkIHRoZSBoeXBoZW4gcmFuZ2VzXG4vLyB0dXJuIGludG8gYSBzZXQgb2YgSlVTVCBjb21wYXJhdG9ycy5cbmNvbnN0IHBhcnNlQ29tcGFyYXRvciA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIGNvbXAgPSBjb21wLnJlcGxhY2UocmVbdC5CVUlMRF0sICcnKVxuICBkZWJ1ZygnY29tcCcsIGNvbXAsIG9wdGlvbnMpXG4gIGNvbXAgPSByZXBsYWNlQ2FyZXRzKGNvbXAsIG9wdGlvbnMpXG4gIGRlYnVnKCdjYXJldCcsIGNvbXApXG4gIGNvbXAgPSByZXBsYWNlVGlsZGVzKGNvbXAsIG9wdGlvbnMpXG4gIGRlYnVnKCd0aWxkZXMnLCBjb21wKVxuICBjb21wID0gcmVwbGFjZVhSYW5nZXMoY29tcCwgb3B0aW9ucylcbiAgZGVidWcoJ3hyYW5nZScsIGNvbXApXG4gIGNvbXAgPSByZXBsYWNlU3RhcnMoY29tcCwgb3B0aW9ucylcbiAgZGVidWcoJ3N0YXJzJywgY29tcClcbiAgcmV0dXJuIGNvbXBcbn1cblxuY29uc3QgaXNYID0gaWQgPT4gIWlkIHx8IGlkLnRvTG93ZXJDYXNlKCkgPT09ICd4JyB8fCBpZCA9PT0gJyonXG5cbi8vIH4sIH4+IC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gfjIsIH4yLngsIH4yLngueCwgfj4yLCB+PjIueCB+PjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMC0wXG4vLyB+Mi4wLCB+Mi4wLngsIH4+Mi4wLCB+PjIuMC54IC0tPiA+PTIuMC4wIDwyLjEuMC0wXG4vLyB+MS4yLCB+MS4yLngsIH4+MS4yLCB+PjEuMi54IC0tPiA+PTEuMi4wIDwxLjMuMC0wXG4vLyB+MS4yLjMsIH4+MS4yLjMgLS0+ID49MS4yLjMgPDEuMy4wLTBcbi8vIH4xLjIuMCwgfj4xLjIuMCAtLT4gPj0xLjIuMCA8MS4zLjAtMFxuLy8gfjAuMC4xIC0tPiA+PTAuMC4xIDwwLjEuMC0wXG5jb25zdCByZXBsYWNlVGlsZGVzID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgcmV0dXJuIGNvbXBcbiAgICAudHJpbSgpXG4gICAgLnNwbGl0KC9cXHMrLylcbiAgICAubWFwKChjKSA9PiByZXBsYWNlVGlsZGUoYywgb3B0aW9ucykpXG4gICAgLmpvaW4oJyAnKVxufVxuXG5jb25zdCByZXBsYWNlVGlsZGUgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBjb25zdCByID0gb3B0aW9ucy5sb29zZSA/IHJlW3QuVElMREVMT09TRV0gOiByZVt0LlRJTERFXVxuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIChfLCBNLCBtLCBwLCBwcikgPT4ge1xuICAgIGRlYnVnKCd0aWxkZScsIGNvbXAsIF8sIE0sIG0sIHAsIHByKVxuICAgIGxldCByZXRcblxuICAgIGlmIChpc1goTSkpIHtcbiAgICAgIHJldCA9ICcnXG4gICAgfSBlbHNlIGlmIChpc1gobSkpIHtcbiAgICAgIHJldCA9IGA+PSR7TX0uMC4wIDwkeytNICsgMX0uMC4wLTBgXG4gICAgfSBlbHNlIGlmIChpc1gocCkpIHtcbiAgICAgIC8vIH4xLjIgPT0gPj0xLjIuMCA8MS4zLjAtMFxuICAgICAgcmV0ID0gYD49JHtNfS4ke219LjAgPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICB9IGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZVRpbGRlIHByJywgcHIpXG4gICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwfS0ke3ByXG4gICAgICB9IDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIH4xLjIuMyA9PSA+PTEuMi4zIDwxLjMuMC0wXG4gICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwXG4gICAgICB9IDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgfVxuXG4gICAgZGVidWcoJ3RpbGRlIHJldHVybicsIHJldClcbiAgICByZXR1cm4gcmV0XG4gIH0pXG59XG5cbi8vIF4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyBeMiwgXjIueCwgXjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMC0wXG4vLyBeMi4wLCBeMi4wLnggLS0+ID49Mi4wLjAgPDMuMC4wLTBcbi8vIF4xLjIsIF4xLjIueCAtLT4gPj0xLjIuMCA8Mi4wLjAtMFxuLy8gXjEuMi4zIC0tPiA+PTEuMi4zIDwyLjAuMC0wXG4vLyBeMS4yLjAgLS0+ID49MS4yLjAgPDIuMC4wLTBcbi8vIF4wLjAuMSAtLT4gPj0wLjAuMSA8MC4wLjItMFxuLy8gXjAuMS4wIC0tPiA+PTAuMS4wIDwwLjIuMC0wXG5jb25zdCByZXBsYWNlQ2FyZXRzID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgcmV0dXJuIGNvbXBcbiAgICAudHJpbSgpXG4gICAgLnNwbGl0KC9cXHMrLylcbiAgICAubWFwKChjKSA9PiByZXBsYWNlQ2FyZXQoYywgb3B0aW9ucykpXG4gICAgLmpvaW4oJyAnKVxufVxuXG5jb25zdCByZXBsYWNlQ2FyZXQgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBvcHRpb25zKVxuICBjb25zdCByID0gb3B0aW9ucy5sb29zZSA/IHJlW3QuQ0FSRVRMT09TRV0gOiByZVt0LkNBUkVUXVxuICBjb25zdCB6ID0gb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSA/ICctMCcgOiAnJ1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIChfLCBNLCBtLCBwLCBwcikgPT4ge1xuICAgIGRlYnVnKCdjYXJldCcsIGNvbXAsIF8sIE0sIG0sIHAsIHByKVxuICAgIGxldCByZXRcblxuICAgIGlmIChpc1goTSkpIHtcbiAgICAgIHJldCA9ICcnXG4gICAgfSBlbHNlIGlmIChpc1gobSkpIHtcbiAgICAgIHJldCA9IGA+PSR7TX0uMC4wJHt6fSA8JHsrTSArIDF9LjAuMC0wYFxuICAgIH0gZWxzZSBpZiAoaXNYKHApKSB7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4wJHt6fSA8JHtNfS4keyttICsgMX0uMC0wYFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LjAke3p9IDwkeytNICsgMX0uMC4wLTBgXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VDYXJldCBwcicsIHByKVxuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKSB7XG4gICAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cH0tJHtwclxuICAgICAgICAgIH0gPCR7TX0uJHttfS4keytwICsgMX0tMGBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwfS0ke3ByXG4gICAgICAgICAgfSA8JHtNfS4keyttICsgMX0uMC0wYFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwfS0ke3ByXG4gICAgICAgIH0gPCR7K00gKyAxfS4wLjAtMGBcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ25vIHByJylcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJykge1xuICAgICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3BcbiAgICAgICAgICB9JHt6fSA8JHtNfS4ke219LiR7K3AgKyAxfS0wYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3BcbiAgICAgICAgICB9JHt6fSA8JHtNfS4keyttICsgMX0uMC0wYFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwXG4gICAgICAgIH0gPCR7K00gKyAxfS4wLjAtMGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZWJ1ZygnY2FyZXQgcmV0dXJuJywgcmV0KVxuICAgIHJldHVybiByZXRcbiAgfSlcbn1cblxuY29uc3QgcmVwbGFjZVhSYW5nZXMgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBkZWJ1ZygncmVwbGFjZVhSYW5nZXMnLCBjb21wLCBvcHRpb25zKVxuICByZXR1cm4gY29tcFxuICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgLm1hcCgoYykgPT4gcmVwbGFjZVhSYW5nZShjLCBvcHRpb25zKSlcbiAgICAuam9pbignICcpXG59XG5cbmNvbnN0IHJlcGxhY2VYUmFuZ2UgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBjb21wID0gY29tcC50cmltKClcbiAgY29uc3QgciA9IG9wdGlvbnMubG9vc2UgPyByZVt0LlhSQU5HRUxPT1NFXSA6IHJlW3QuWFJBTkdFXVxuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIChyZXQsIGd0bHQsIE0sIG0sIHAsIHByKSA9PiB7XG4gICAgZGVidWcoJ3hSYW5nZScsIGNvbXAsIHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpXG4gICAgY29uc3QgeE0gPSBpc1goTSlcbiAgICBjb25zdCB4bSA9IHhNIHx8IGlzWChtKVxuICAgIGNvbnN0IHhwID0geG0gfHwgaXNYKHApXG4gICAgY29uc3QgYW55WCA9IHhwXG5cbiAgICBpZiAoZ3RsdCA9PT0gJz0nICYmIGFueVgpIHtcbiAgICAgIGd0bHQgPSAnJ1xuICAgIH1cblxuICAgIC8vIGlmIHdlJ3JlIGluY2x1ZGluZyBwcmVyZWxlYXNlcyBpbiB0aGUgbWF0Y2gsIHRoZW4gd2UgbmVlZFxuICAgIC8vIHRvIGZpeCB0aGlzIHRvIC0wLCB0aGUgbG93ZXN0IHBvc3NpYmxlIHByZXJlbGVhc2UgdmFsdWVcbiAgICBwciA9IG9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgPyAnLTAnIDogJydcblxuICAgIGlmICh4TSkge1xuICAgICAgaWYgKGd0bHQgPT09ICc+JyB8fCBndGx0ID09PSAnPCcpIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBhbGxvd2VkXG4gICAgICAgIHJldCA9ICc8MC4wLjAtMCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgZm9yYmlkZGVuXG4gICAgICAgIHJldCA9ICcqJ1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ3RsdCAmJiBhbnlYKSB7XG4gICAgICAvLyB3ZSBrbm93IHBhdGNoIGlzIGFuIHgsIGJlY2F1c2Ugd2UgaGF2ZSBhbnkgeCBhdCBhbGwuXG4gICAgICAvLyByZXBsYWNlIFggd2l0aCAwXG4gICAgICBpZiAoeG0pIHtcbiAgICAgICAgbSA9IDBcbiAgICAgIH1cbiAgICAgIHAgPSAwXG5cbiAgICAgIGlmIChndGx0ID09PSAnPicpIHtcbiAgICAgICAgLy8gPjEgPT4gPj0yLjAuMFxuICAgICAgICAvLyA+MS4yID0+ID49MS4zLjBcbiAgICAgICAgZ3RsdCA9ICc+PSdcbiAgICAgICAgaWYgKHhtKSB7XG4gICAgICAgICAgTSA9ICtNICsgMVxuICAgICAgICAgIG0gPSAwXG4gICAgICAgICAgcCA9IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtID0gK20gKyAxXG4gICAgICAgICAgcCA9IDBcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChndGx0ID09PSAnPD0nKSB7XG4gICAgICAgIC8vIDw9MC43LnggaXMgYWN0dWFsbHkgPDAuOC4wLCBzaW5jZSBhbnkgMC43Lnggc2hvdWxkXG4gICAgICAgIC8vIHBhc3MuICBTaW1pbGFybHksIDw9Ny54IGlzIGFjdHVhbGx5IDw4LjAuMCwgZXRjLlxuICAgICAgICBndGx0ID0gJzwnXG4gICAgICAgIGlmICh4bSkge1xuICAgICAgICAgIE0gPSArTSArIDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtID0gK20gKyAxXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGd0bHQgPT09ICc8Jykge1xuICAgICAgICBwciA9ICctMCdcbiAgICAgIH1cblxuICAgICAgcmV0ID0gYCR7Z3RsdCArIE19LiR7bX0uJHtwfSR7cHJ9YFxuICAgIH0gZWxzZSBpZiAoeG0pIHtcbiAgICAgIHJldCA9IGA+PSR7TX0uMC4wJHtwcn0gPCR7K00gKyAxfS4wLjAtMGBcbiAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICByZXQgPSBgPj0ke019LiR7bX0uMCR7cHJcbiAgICAgIH0gPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICB9XG5cbiAgICBkZWJ1ZygneFJhbmdlIHJldHVybicsIHJldClcblxuICAgIHJldHVybiByZXRcbiAgfSlcbn1cblxuLy8gQmVjYXVzZSAqIGlzIEFORC1lZCB3aXRoIGV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgY29tcGFyYXRvcixcbi8vIGFuZCAnJyBtZWFucyBcImFueSB2ZXJzaW9uXCIsIGp1c3QgcmVtb3ZlIHRoZSAqcyBlbnRpcmVseS5cbmNvbnN0IHJlcGxhY2VTdGFycyA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIGRlYnVnKCdyZXBsYWNlU3RhcnMnLCBjb21wLCBvcHRpb25zKVxuICAvLyBMb29zZW5lc3MgaXMgaWdub3JlZCBoZXJlLiAgc3RhciBpcyBhbHdheXMgYXMgbG9vc2UgYXMgaXQgZ2V0cyFcbiAgcmV0dXJuIGNvbXBcbiAgICAudHJpbSgpXG4gICAgLnJlcGxhY2UocmVbdC5TVEFSXSwgJycpXG59XG5cbmNvbnN0IHJlcGxhY2VHVEUwID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgZGVidWcoJ3JlcGxhY2VHVEUwJywgY29tcCwgb3B0aW9ucylcbiAgcmV0dXJuIGNvbXBcbiAgICAudHJpbSgpXG4gICAgLnJlcGxhY2UocmVbb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSA/IHQuR1RFMFBSRSA6IHQuR1RFMF0sICcnKVxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCB0byBzdHJpbmcucmVwbGFjZShyZVt0LkhZUEhFTlJBTkdFXSlcbi8vIE0sIG0sIHBhdGNoLCBwcmVyZWxlYXNlLCBidWlsZFxuLy8gMS4yIC0gMy40LjUgPT4gPj0xLjIuMCA8PTMuNC41XG4vLyAxLjIuMyAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMC0wIEFueSAzLjQueCB3aWxsIGRvXG4vLyAxLjIgLSAzLjQgPT4gPj0xLjIuMCA8My41LjAtMFxuLy8gVE9ETyBidWlsZD9cbmNvbnN0IGh5cGhlblJlcGxhY2UgPSBpbmNQciA9PiAoJDAsXG4gIGZyb20sIGZNLCBmbSwgZnAsIGZwciwgZmIsXG4gIHRvLCB0TSwgdG0sIHRwLCB0cHIpID0+IHtcbiAgaWYgKGlzWChmTSkpIHtcbiAgICBmcm9tID0gJydcbiAgfSBlbHNlIGlmIChpc1goZm0pKSB7XG4gICAgZnJvbSA9IGA+PSR7Zk19LjAuMCR7aW5jUHIgPyAnLTAnIDogJyd9YFxuICB9IGVsc2UgaWYgKGlzWChmcCkpIHtcbiAgICBmcm9tID0gYD49JHtmTX0uJHtmbX0uMCR7aW5jUHIgPyAnLTAnIDogJyd9YFxuICB9IGVsc2UgaWYgKGZwcikge1xuICAgIGZyb20gPSBgPj0ke2Zyb219YFxuICB9IGVsc2Uge1xuICAgIGZyb20gPSBgPj0ke2Zyb219JHtpbmNQciA/ICctMCcgOiAnJ31gXG4gIH1cblxuICBpZiAoaXNYKHRNKSkge1xuICAgIHRvID0gJydcbiAgfSBlbHNlIGlmIChpc1godG0pKSB7XG4gICAgdG8gPSBgPCR7K3RNICsgMX0uMC4wLTBgXG4gIH0gZWxzZSBpZiAoaXNYKHRwKSkge1xuICAgIHRvID0gYDwke3RNfS4keyt0bSArIDF9LjAtMGBcbiAgfSBlbHNlIGlmICh0cHIpIHtcbiAgICB0byA9IGA8PSR7dE19LiR7dG19LiR7dHB9LSR7dHByfWBcbiAgfSBlbHNlIGlmIChpbmNQcikge1xuICAgIHRvID0gYDwke3RNfS4ke3RtfS4keyt0cCArIDF9LTBgXG4gIH0gZWxzZSB7XG4gICAgdG8gPSBgPD0ke3RvfWBcbiAgfVxuXG4gIHJldHVybiBgJHtmcm9tfSAke3RvfWAudHJpbSgpXG59XG5cbmNvbnN0IHRlc3RTZXQgPSAoc2V0LCB2ZXJzaW9uLCBvcHRpb25zKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFzZXRbaV0udGVzdCh2ZXJzaW9uKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaWYgKHZlcnNpb24ucHJlcmVsZWFzZS5sZW5ndGggJiYgIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UpIHtcbiAgICAvLyBGaW5kIHRoZSBzZXQgb2YgdmVyc2lvbnMgdGhhdCBhcmUgYWxsb3dlZCB0byBoYXZlIHByZXJlbGVhc2VzXG4gICAgLy8gRm9yIGV4YW1wbGUsIF4xLjIuMy1wci4xIGRlc3VnYXJzIHRvID49MS4yLjMtcHIuMSA8Mi4wLjBcbiAgICAvLyBUaGF0IHNob3VsZCBhbGxvdyBgMS4yLjMtcHIuMmAgdG8gcGFzcy5cbiAgICAvLyBIb3dldmVyLCBgMS4yLjQtYWxwaGEubm90cmVhZHlgIHNob3VsZCBOT1QgYmUgYWxsb3dlZCxcbiAgICAvLyBldmVuIHRob3VnaCBpdCdzIHdpdGhpbiB0aGUgcmFuZ2Ugc2V0IGJ5IHRoZSBjb21wYXJhdG9ycy5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoc2V0W2ldLnNlbXZlcilcbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyID09PSBDb21wYXJhdG9yLkFOWSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoc2V0W2ldLnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYWxsb3dlZCA9IHNldFtpXS5zZW12ZXJcbiAgICAgICAgaWYgKGFsbG93ZWQubWFqb3IgPT09IHZlcnNpb24ubWFqb3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQubWlub3IgPT09IHZlcnNpb24ubWlub3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQucGF0Y2ggPT09IHZlcnNpb24ucGF0Y2gpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVmVyc2lvbiBoYXMgYSAtcHJlLCBidXQgaXQncyBub3Qgb25lIG9mIHRoZSBvbmVzIHdlIGxpa2UuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBBTlkgPSBTeW1ib2woJ1NlbVZlciBBTlknKVxuLy8gaG9pc3RlZCBjbGFzcyBmb3IgY3ljbGljIGRlcGVuZGVuY3lcbmNsYXNzIENvbXBhcmF0b3Ige1xuICBzdGF0aWMgZ2V0IEFOWSAoKSB7XG4gICAgcmV0dXJuIEFOWVxuICB9XG5cbiAgY29uc3RydWN0b3IgKGNvbXAsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpXG5cbiAgICBpZiAoY29tcCBpbnN0YW5jZW9mIENvbXBhcmF0b3IpIHtcbiAgICAgIGlmIChjb21wLmxvb3NlID09PSAhIW9wdGlvbnMubG9vc2UpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXAgPSBjb21wLnZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcCA9IGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykuam9pbignICcpXG4gICAgZGVidWcoJ2NvbXBhcmF0b3InLCBjb21wLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmxvb3NlID0gISFvcHRpb25zLmxvb3NlXG4gICAgdGhpcy5wYXJzZShjb21wKVxuXG4gICAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5vcGVyYXRvciArIHRoaXMuc2VtdmVyLnZlcnNpb25cbiAgICB9XG5cbiAgICBkZWJ1ZygnY29tcCcsIHRoaXMpXG4gIH1cblxuICBwYXJzZSAoY29tcCkge1xuICAgIGNvbnN0IHIgPSB0aGlzLm9wdGlvbnMubG9vc2UgPyByZVt0LkNPTVBBUkFUT1JMT09TRV0gOiByZVt0LkNPTVBBUkFUT1JdXG4gICAgY29uc3QgbSA9IGNvbXAubWF0Y2gocilcblxuICAgIGlmICghbSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBjb21wYXJhdG9yOiAke2NvbXB9YClcbiAgICB9XG5cbiAgICB0aGlzLm9wZXJhdG9yID0gbVsxXSAhPT0gdW5kZWZpbmVkID8gbVsxXSA6ICcnXG4gICAgaWYgKHRoaXMub3BlcmF0b3IgPT09ICc9Jykge1xuICAgICAgdGhpcy5vcGVyYXRvciA9ICcnXG4gICAgfVxuXG4gICAgLy8gaWYgaXQgbGl0ZXJhbGx5IGlzIGp1c3QgJz4nIG9yICcnIHRoZW4gYWxsb3cgYW55dGhpbmcuXG4gICAgaWYgKCFtWzJdKSB7XG4gICAgICB0aGlzLnNlbXZlciA9IEFOWVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbXZlciA9IG5ldyBTZW1WZXIobVsyXSwgdGhpcy5vcHRpb25zLmxvb3NlKVxuICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgdGVzdCAodmVyc2lvbikge1xuICAgIGRlYnVnKCdDb21wYXJhdG9yLnRlc3QnLCB2ZXJzaW9uLCB0aGlzLm9wdGlvbnMubG9vc2UpXG5cbiAgICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSB8fCB2ZXJzaW9uID09PSBBTlkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5vcHRpb25zKVxuICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNtcCh2ZXJzaW9uLCB0aGlzLm9wZXJhdG9yLCB0aGlzLnNlbXZlciwgdGhpcy5vcHRpb25zKVxuICB9XG5cbiAgaW50ZXJzZWN0cyAoY29tcCwgb3B0aW9ucykge1xuICAgIGlmICghKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYSBDb21wYXJhdG9yIGlzIHJlcXVpcmVkJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJycpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlID09PSAnJykge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSYW5nZShjb21wLnZhbHVlLCBvcHRpb25zKS50ZXN0KHRoaXMudmFsdWUpXG4gICAgfSBlbHNlIGlmIChjb21wLm9wZXJhdG9yID09PSAnJykge1xuICAgICAgaWYgKGNvbXAudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJhbmdlKHRoaXMudmFsdWUsIG9wdGlvbnMpLnRlc3QoY29tcC5zZW12ZXIpXG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKVxuXG4gICAgLy8gU3BlY2lhbCBjYXNlcyB3aGVyZSBub3RoaW5nIGNhbiBwb3NzaWJseSBiZSBsb3dlclxuICAgIGlmIChvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlICYmXG4gICAgICAodGhpcy52YWx1ZSA9PT0gJzwwLjAuMC0wJyB8fCBjb21wLnZhbHVlID09PSAnPDAuMC4wLTAnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSAmJlxuICAgICAgKHRoaXMudmFsdWUuc3RhcnRzV2l0aCgnPDAuMC4wJykgfHwgY29tcC52YWx1ZS5zdGFydHNXaXRoKCc8MC4wLjAnKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIFNhbWUgZGlyZWN0aW9uIGluY3JlYXNpbmcgKD4gb3IgPj0pXG4gICAgaWYgKHRoaXMub3BlcmF0b3Iuc3RhcnRzV2l0aCgnPicpICYmIGNvbXAub3BlcmF0b3Iuc3RhcnRzV2l0aCgnPicpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICAvLyBTYW1lIGRpcmVjdGlvbiBkZWNyZWFzaW5nICg8IG9yIDw9KVxuICAgIGlmICh0aGlzLm9wZXJhdG9yLnN0YXJ0c1dpdGgoJzwnKSAmJiBjb21wLm9wZXJhdG9yLnN0YXJ0c1dpdGgoJzwnKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLy8gc2FtZSBTZW1WZXIgYW5kIGJvdGggc2lkZXMgYXJlIGluY2x1c2l2ZSAoPD0gb3IgPj0pXG4gICAgaWYgKFxuICAgICAgKHRoaXMuc2VtdmVyLnZlcnNpb24gPT09IGNvbXAuc2VtdmVyLnZlcnNpb24pICYmXG4gICAgICB0aGlzLm9wZXJhdG9yLmluY2x1ZGVzKCc9JykgJiYgY29tcC5vcGVyYXRvci5pbmNsdWRlcygnPScpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICAvLyBvcHBvc2l0ZSBkaXJlY3Rpb25zIGxlc3MgdGhhblxuICAgIGlmIChjbXAodGhpcy5zZW12ZXIsICc8JywgY29tcC5zZW12ZXIsIG9wdGlvbnMpICYmXG4gICAgICB0aGlzLm9wZXJhdG9yLnN0YXJ0c1dpdGgoJz4nKSAmJiBjb21wLm9wZXJhdG9yLnN0YXJ0c1dpdGgoJzwnKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLy8gb3Bwb3NpdGUgZGlyZWN0aW9ucyBncmVhdGVyIHRoYW5cbiAgICBpZiAoY21wKHRoaXMuc2VtdmVyLCAnPicsIGNvbXAuc2VtdmVyLCBvcHRpb25zKSAmJlxuICAgICAgdGhpcy5vcGVyYXRvci5zdGFydHNXaXRoKCc8JykgJiYgY29tcC5vcGVyYXRvci5zdGFydHNXaXRoKCc+JykpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcGFyYXRvclxuXG5jb25zdCBwYXJzZU9wdGlvbnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9wYXJzZS1vcHRpb25zJylcbmNvbnN0IHsgc2FmZVJlOiByZSwgdCB9ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcmUnKVxuY29uc3QgY21wID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2NtcCcpXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2RlYnVnJylcbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4vc2VtdmVyJylcbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi9yYW5nZScpXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZScpXG5jb25zdCBzYXRpc2ZpZXMgPSAodmVyc2lvbiwgcmFuZ2UsIG9wdGlvbnMpID0+IHtcbiAgdHJ5IHtcbiAgICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucylcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gcmFuZ2UudGVzdCh2ZXJzaW9uKVxufVxubW9kdWxlLmV4cG9ydHMgPSBzYXRpc2ZpZXNcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcblxuLy8gTW9zdGx5IGp1c3QgZm9yIHRlc3RpbmcgYW5kIGxlZ2FjeSBBUEkgcmVhc29uc1xuY29uc3QgdG9Db21wYXJhdG9ycyA9IChyYW5nZSwgb3B0aW9ucykgPT5cbiAgbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKS5zZXRcbiAgICAubWFwKGNvbXAgPT4gY29tcC5tYXAoYyA9PiBjLnZhbHVlKS5qb2luKCcgJykudHJpbSgpLnNwbGl0KCcgJykpXG5cbm1vZHVsZS5leHBvcnRzID0gdG9Db21wYXJhdG9yc1xuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuXG5jb25zdCBtYXhTYXRpc2Z5aW5nID0gKHZlcnNpb25zLCByYW5nZSwgb3B0aW9ucykgPT4ge1xuICBsZXQgbWF4ID0gbnVsbFxuICBsZXQgbWF4U1YgPSBudWxsXG4gIGxldCByYW5nZU9iaiA9IG51bGxcbiAgdHJ5IHtcbiAgICByYW5nZU9iaiA9IG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucylcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHZlcnNpb25zLmZvckVhY2goKHYpID0+IHtcbiAgICBpZiAocmFuZ2VPYmoudGVzdCh2KSkge1xuICAgICAgLy8gc2F0aXNmaWVzKHYsIHJhbmdlLCBvcHRpb25zKVxuICAgICAgaWYgKCFtYXggfHwgbWF4U1YuY29tcGFyZSh2KSA9PT0gLTEpIHtcbiAgICAgICAgLy8gY29tcGFyZShtYXgsIHYsIHRydWUpXG4gICAgICAgIG1heCA9IHZcbiAgICAgICAgbWF4U1YgPSBuZXcgU2VtVmVyKG1heCwgb3B0aW9ucylcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBtYXhcbn1cbm1vZHVsZS5leHBvcnRzID0gbWF4U2F0aXNmeWluZ1xuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuY29uc3QgbWluU2F0aXNmeWluZyA9ICh2ZXJzaW9ucywgcmFuZ2UsIG9wdGlvbnMpID0+IHtcbiAgbGV0IG1pbiA9IG51bGxcbiAgbGV0IG1pblNWID0gbnVsbFxuICBsZXQgcmFuZ2VPYmogPSBudWxsXG4gIHRyeSB7XG4gICAgcmFuZ2VPYmogPSBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICB2ZXJzaW9ucy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgaWYgKHJhbmdlT2JqLnRlc3QodikpIHtcbiAgICAgIC8vIHNhdGlzZmllcyh2LCByYW5nZSwgb3B0aW9ucylcbiAgICAgIGlmICghbWluIHx8IG1pblNWLmNvbXBhcmUodikgPT09IDEpIHtcbiAgICAgICAgLy8gY29tcGFyZShtaW4sIHYsIHRydWUpXG4gICAgICAgIG1pbiA9IHZcbiAgICAgICAgbWluU1YgPSBuZXcgU2VtVmVyKG1pbiwgb3B0aW9ucylcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBtaW5cbn1cbm1vZHVsZS5leHBvcnRzID0gbWluU2F0aXNmeWluZ1xuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuY29uc3QgZ3QgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvZ3QnKVxuXG5jb25zdCBtaW5WZXJzaW9uID0gKHJhbmdlLCBsb29zZSkgPT4ge1xuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpXG5cbiAgbGV0IG1pbnZlciA9IG5ldyBTZW1WZXIoJzAuMC4wJylcbiAgaWYgKHJhbmdlLnRlc3QobWludmVyKSkge1xuICAgIHJldHVybiBtaW52ZXJcbiAgfVxuXG4gIG1pbnZlciA9IG5ldyBTZW1WZXIoJzAuMC4wLTAnKVxuICBpZiAocmFuZ2UudGVzdChtaW52ZXIpKSB7XG4gICAgcmV0dXJuIG1pbnZlclxuICB9XG5cbiAgbWludmVyID0gbnVsbFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IGNvbXBhcmF0b3JzID0gcmFuZ2Uuc2V0W2ldXG5cbiAgICBsZXQgc2V0TWluID0gbnVsbFxuICAgIGNvbXBhcmF0b3JzLmZvckVhY2goKGNvbXBhcmF0b3IpID0+IHtcbiAgICAgIC8vIENsb25lIHRvIGF2b2lkIG1hbmlwdWxhdGluZyB0aGUgY29tcGFyYXRvcidzIHNlbXZlciBvYmplY3QuXG4gICAgICBjb25zdCBjb21wdmVyID0gbmV3IFNlbVZlcihjb21wYXJhdG9yLnNlbXZlci52ZXJzaW9uKVxuICAgICAgc3dpdGNoIChjb21wYXJhdG9yLm9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgIGlmIChjb21wdmVyLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb21wdmVyLnBhdGNoKytcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcHZlci5wcmVyZWxlYXNlLnB1c2goMClcbiAgICAgICAgICB9XG4gICAgICAgICAgY29tcHZlci5yYXcgPSBjb21wdmVyLmZvcm1hdCgpXG4gICAgICAgICAgLyogZmFsbHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAnJzpcbiAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgIGlmICghc2V0TWluIHx8IGd0KGNvbXB2ZXIsIHNldE1pbikpIHtcbiAgICAgICAgICAgIHNldE1pbiA9IGNvbXB2ZXJcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAvKiBJZ25vcmUgbWF4aW11bSB2ZXJzaW9ucyAqL1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIG9wZXJhdGlvbjogJHtjb21wYXJhdG9yLm9wZXJhdG9yfWApXG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAoc2V0TWluICYmICghbWludmVyIHx8IGd0KG1pbnZlciwgc2V0TWluKSkpIHtcbiAgICAgIG1pbnZlciA9IHNldE1pblxuICAgIH1cbiAgfVxuXG4gIGlmIChtaW52ZXIgJiYgcmFuZ2UudGVzdChtaW52ZXIpKSB7XG4gICAgcmV0dXJuIG1pbnZlclxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cbm1vZHVsZS5leHBvcnRzID0gbWluVmVyc2lvblxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuY29uc3QgdmFsaWRSYW5nZSA9IChyYW5nZSwgb3B0aW9ucykgPT4ge1xuICB0cnkge1xuICAgIC8vIFJldHVybiAnKicgaW5zdGVhZCBvZiAnJyBzbyB0aGF0IHRydXRoaW5lc3Mgd29ya3MuXG4gICAgLy8gVGhpcyB3aWxsIHRocm93IGlmIGl0J3MgaW52YWxpZCBhbnl3YXlcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKS5yYW5nZSB8fCAnKidcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkUmFuZ2VcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgQ29tcGFyYXRvciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvY29tcGFyYXRvcicpXG5jb25zdCB7IEFOWSB9ID0gQ29tcGFyYXRvclxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcbmNvbnN0IHNhdGlzZmllcyA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9ucy9zYXRpc2ZpZXMnKVxuY29uc3QgZ3QgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvZ3QnKVxuY29uc3QgbHQgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvbHQnKVxuY29uc3QgbHRlID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2x0ZScpXG5jb25zdCBndGUgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvZ3RlJylcblxuY29uc3Qgb3V0c2lkZSA9ICh2ZXJzaW9uLCByYW5nZSwgaGlsbywgb3B0aW9ucykgPT4ge1xuICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCBvcHRpb25zKVxuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucylcblxuICBsZXQgZ3RmbiwgbHRlZm4sIGx0Zm4sIGNvbXAsIGVjb21wXG4gIHN3aXRjaCAoaGlsbykge1xuICAgIGNhc2UgJz4nOlxuICAgICAgZ3RmbiA9IGd0XG4gICAgICBsdGVmbiA9IGx0ZVxuICAgICAgbHRmbiA9IGx0XG4gICAgICBjb21wID0gJz4nXG4gICAgICBlY29tcCA9ICc+PSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnPCc6XG4gICAgICBndGZuID0gbHRcbiAgICAgIGx0ZWZuID0gZ3RlXG4gICAgICBsdGZuID0gZ3RcbiAgICAgIGNvbXAgPSAnPCdcbiAgICAgIGVjb21wID0gJzw9J1xuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBwcm92aWRlIGEgaGlsbyB2YWwgb2YgXCI8XCIgb3IgXCI+XCInKVxuICB9XG5cbiAgLy8gSWYgaXQgc2F0aXNmaWVzIHRoZSByYW5nZSBpdCBpcyBub3Qgb3V0c2lkZVxuICBpZiAoc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gRnJvbSBub3cgb24sIHZhcmlhYmxlIHRlcm1zIGFyZSBhcyBpZiB3ZSdyZSBpbiBcImd0clwiIG1vZGUuXG4gIC8vIGJ1dCBub3RlIHRoYXQgZXZlcnl0aGluZyBpcyBmbGlwcGVkIGZvciB0aGUgXCJsdHJcIiBmdW5jdGlvbi5cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IGNvbXBhcmF0b3JzID0gcmFuZ2Uuc2V0W2ldXG5cbiAgICBsZXQgaGlnaCA9IG51bGxcbiAgICBsZXQgbG93ID0gbnVsbFxuXG4gICAgY29tcGFyYXRvcnMuZm9yRWFjaCgoY29tcGFyYXRvcikgPT4ge1xuICAgICAgaWYgKGNvbXBhcmF0b3Iuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgICAgY29tcGFyYXRvciA9IG5ldyBDb21wYXJhdG9yKCc+PTAuMC4wJylcbiAgICAgIH1cbiAgICAgIGhpZ2ggPSBoaWdoIHx8IGNvbXBhcmF0b3JcbiAgICAgIGxvdyA9IGxvdyB8fCBjb21wYXJhdG9yXG4gICAgICBpZiAoZ3Rmbihjb21wYXJhdG9yLnNlbXZlciwgaGlnaC5zZW12ZXIsIG9wdGlvbnMpKSB7XG4gICAgICAgIGhpZ2ggPSBjb21wYXJhdG9yXG4gICAgICB9IGVsc2UgaWYgKGx0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGxvdy5zZW12ZXIsIG9wdGlvbnMpKSB7XG4gICAgICAgIGxvdyA9IGNvbXBhcmF0b3JcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gSWYgdGhlIGVkZ2UgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhIG9wZXJhdG9yIHRoZW4gb3VyIHZlcnNpb25cbiAgICAvLyBpc24ndCBvdXRzaWRlIGl0XG4gICAgaWYgKGhpZ2gub3BlcmF0b3IgPT09IGNvbXAgfHwgaGlnaC5vcGVyYXRvciA9PT0gZWNvbXApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBsb3dlc3QgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhbiBvcGVyYXRvciBhbmQgb3VyIHZlcnNpb25cbiAgICAvLyBpcyBsZXNzIHRoYW4gaXQgdGhlbiBpdCBpc24ndCBoaWdoZXIgdGhhbiB0aGUgcmFuZ2VcbiAgICBpZiAoKCFsb3cub3BlcmF0b3IgfHwgbG93Lm9wZXJhdG9yID09PSBjb21wKSAmJlxuICAgICAgICBsdGVmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIGlmIChsb3cub3BlcmF0b3IgPT09IGVjb21wICYmIGx0Zm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG91dHNpZGVcbiIsICIndXNlIHN0cmljdCdcblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlLlxuY29uc3Qgb3V0c2lkZSA9IHJlcXVpcmUoJy4vb3V0c2lkZScpXG5jb25zdCBndHIgPSAodmVyc2lvbiwgcmFuZ2UsIG9wdGlvbnMpID0+IG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc+Jywgb3B0aW9ucylcbm1vZHVsZS5leHBvcnRzID0gZ3RyXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IG91dHNpZGUgPSByZXF1aXJlKCcuL291dHNpZGUnKVxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgbGVzcyB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlXG5jb25zdCBsdHIgPSAodmVyc2lvbiwgcmFuZ2UsIG9wdGlvbnMpID0+IG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc8Jywgb3B0aW9ucylcbm1vZHVsZS5leHBvcnRzID0gbHRyXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZScpXG5jb25zdCBpbnRlcnNlY3RzID0gKHIxLCByMiwgb3B0aW9ucykgPT4ge1xuICByMSA9IG5ldyBSYW5nZShyMSwgb3B0aW9ucylcbiAgcjIgPSBuZXcgUmFuZ2UocjIsIG9wdGlvbnMpXG4gIHJldHVybiByMS5pbnRlcnNlY3RzKHIyLCBvcHRpb25zKVxufVxubW9kdWxlLmV4cG9ydHMgPSBpbnRlcnNlY3RzXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbi8vIGdpdmVuIGEgc2V0IG9mIHZlcnNpb25zIGFuZCBhIHJhbmdlLCBjcmVhdGUgYSBcInNpbXBsaWZpZWRcIiByYW5nZVxuLy8gdGhhdCBpbmNsdWRlcyB0aGUgc2FtZSB2ZXJzaW9ucyB0aGF0IHRoZSBvcmlnaW5hbCByYW5nZSBkb2VzXG4vLyBJZiB0aGUgb3JpZ2luYWwgcmFuZ2UgaXMgc2hvcnRlciB0aGFuIHRoZSBzaW1wbGlmaWVkIG9uZSwgcmV0dXJuIHRoYXQuXG5jb25zdCBzYXRpc2ZpZXMgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvc2F0aXNmaWVzLmpzJylcbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvY29tcGFyZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICh2ZXJzaW9ucywgcmFuZ2UsIG9wdGlvbnMpID0+IHtcbiAgY29uc3Qgc2V0ID0gW11cbiAgbGV0IGZpcnN0ID0gbnVsbFxuICBsZXQgcHJldiA9IG51bGxcbiAgY29uc3QgdiA9IHZlcnNpb25zLnNvcnQoKGEsIGIpID0+IGNvbXBhcmUoYSwgYiwgb3B0aW9ucykpXG4gIGZvciAoY29uc3QgdmVyc2lvbiBvZiB2KSB7XG4gICAgY29uc3QgaW5jbHVkZWQgPSBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIG9wdGlvbnMpXG4gICAgaWYgKGluY2x1ZGVkKSB7XG4gICAgICBwcmV2ID0gdmVyc2lvblxuICAgICAgaWYgKCFmaXJzdCkge1xuICAgICAgICBmaXJzdCA9IHZlcnNpb25cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgc2V0LnB1c2goW2ZpcnN0LCBwcmV2XSlcbiAgICAgIH1cbiAgICAgIHByZXYgPSBudWxsXG4gICAgICBmaXJzdCA9IG51bGxcbiAgICB9XG4gIH1cbiAgaWYgKGZpcnN0KSB7XG4gICAgc2V0LnB1c2goW2ZpcnN0LCBudWxsXSlcbiAgfVxuXG4gIGNvbnN0IHJhbmdlcyA9IFtdXG4gIGZvciAoY29uc3QgW21pbiwgbWF4XSBvZiBzZXQpIHtcbiAgICBpZiAobWluID09PSBtYXgpIHtcbiAgICAgIHJhbmdlcy5wdXNoKG1pbilcbiAgICB9IGVsc2UgaWYgKCFtYXggJiYgbWluID09PSB2WzBdKSB7XG4gICAgICByYW5nZXMucHVzaCgnKicpXG4gICAgfSBlbHNlIGlmICghbWF4KSB7XG4gICAgICByYW5nZXMucHVzaChgPj0ke21pbn1gKVxuICAgIH0gZWxzZSBpZiAobWluID09PSB2WzBdKSB7XG4gICAgICByYW5nZXMucHVzaChgPD0ke21heH1gKVxuICAgIH0gZWxzZSB7XG4gICAgICByYW5nZXMucHVzaChgJHttaW59IC0gJHttYXh9YClcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2ltcGxpZmllZCA9IHJhbmdlcy5qb2luKCcgfHwgJylcbiAgY29uc3Qgb3JpZ2luYWwgPSB0eXBlb2YgcmFuZ2UucmF3ID09PSAnc3RyaW5nJyA/IHJhbmdlLnJhdyA6IFN0cmluZyhyYW5nZSlcbiAgcmV0dXJuIHNpbXBsaWZpZWQubGVuZ3RoIDwgb3JpZ2luYWwubGVuZ3RoID8gc2ltcGxpZmllZCA6IHJhbmdlXG59XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZS5qcycpXG5jb25zdCBDb21wYXJhdG9yID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9jb21wYXJhdG9yLmpzJylcbmNvbnN0IHsgQU5ZIH0gPSBDb21wYXJhdG9yXG5jb25zdCBzYXRpc2ZpZXMgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvc2F0aXNmaWVzLmpzJylcbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvY29tcGFyZS5qcycpXG5cbi8vIENvbXBsZXggcmFuZ2UgYHIxIHx8IHIyIHx8IC4uLmAgaXMgYSBzdWJzZXQgb2YgYFIxIHx8IFIyIHx8IC4uLmAgaWZmOlxuLy8gLSBFdmVyeSBzaW1wbGUgcmFuZ2UgYHIxLCByMiwgLi4uYCBpcyBhIG51bGwgc2V0LCBPUlxuLy8gLSBFdmVyeSBzaW1wbGUgcmFuZ2UgYHIxLCByMiwgLi4uYCB3aGljaCBpcyBub3QgYSBudWxsIHNldCBpcyBhIHN1YnNldCBvZlxuLy8gICBzb21lIGBSMSwgUjIsIC4uLmBcbi8vXG4vLyBTaW1wbGUgcmFuZ2UgYGMxIGMyIC4uLmAgaXMgYSBzdWJzZXQgb2Ygc2ltcGxlIHJhbmdlIGBDMSBDMiAuLi5gIGlmZjpcbi8vIC0gSWYgYyBpcyBvbmx5IHRoZSBBTlkgY29tcGFyYXRvclxuLy8gICAtIElmIEMgaXMgb25seSB0aGUgQU5ZIGNvbXBhcmF0b3IsIHJldHVybiB0cnVlXG4vLyAgIC0gRWxzZSBpZiBpbiBwcmVyZWxlYXNlIG1vZGUsIHJldHVybiBmYWxzZVxuLy8gICAtIGVsc2UgcmVwbGFjZSBjIHdpdGggYFs+PTAuMC4wXWBcbi8vIC0gSWYgQyBpcyBvbmx5IHRoZSBBTlkgY29tcGFyYXRvclxuLy8gICAtIGlmIGluIHByZXJlbGVhc2UgbW9kZSwgcmV0dXJuIHRydWVcbi8vICAgLSBlbHNlIHJlcGxhY2UgQyB3aXRoIGBbPj0wLjAuMF1gXG4vLyAtIExldCBFUSBiZSB0aGUgc2V0IG9mID0gY29tcGFyYXRvcnMgaW4gY1xuLy8gLSBJZiBFUSBpcyBtb3JlIHRoYW4gb25lLCByZXR1cm4gdHJ1ZSAobnVsbCBzZXQpXG4vLyAtIExldCBHVCBiZSB0aGUgaGlnaGVzdCA+IG9yID49IGNvbXBhcmF0b3IgaW4gY1xuLy8gLSBMZXQgTFQgYmUgdGhlIGxvd2VzdCA8IG9yIDw9IGNvbXBhcmF0b3IgaW4gY1xuLy8gLSBJZiBHVCBhbmQgTFQsIGFuZCBHVC5zZW12ZXIgPiBMVC5zZW12ZXIsIHJldHVybiB0cnVlIChudWxsIHNldClcbi8vIC0gSWYgYW55IEMgaXMgYSA9IHJhbmdlLCBhbmQgR1Qgb3IgTFQgYXJlIHNldCwgcmV0dXJuIGZhbHNlXG4vLyAtIElmIEVRXG4vLyAgIC0gSWYgR1QsIGFuZCBFUSBkb2VzIG5vdCBzYXRpc2Z5IEdULCByZXR1cm4gdHJ1ZSAobnVsbCBzZXQpXG4vLyAgIC0gSWYgTFQsIGFuZCBFUSBkb2VzIG5vdCBzYXRpc2Z5IExULCByZXR1cm4gdHJ1ZSAobnVsbCBzZXQpXG4vLyAgIC0gSWYgRVEgc2F0aXNmaWVzIGV2ZXJ5IEMsIHJldHVybiB0cnVlXG4vLyAgIC0gRWxzZSByZXR1cm4gZmFsc2Vcbi8vIC0gSWYgR1Rcbi8vICAgLSBJZiBHVC5zZW12ZXIgaXMgbG93ZXIgdGhhbiBhbnkgPiBvciA+PSBjb21wIGluIEMsIHJldHVybiBmYWxzZVxuLy8gICAtIElmIEdUIGlzID49LCBhbmQgR1Quc2VtdmVyIGRvZXMgbm90IHNhdGlzZnkgZXZlcnkgQywgcmV0dXJuIGZhbHNlXG4vLyAgIC0gSWYgR1Quc2VtdmVyIGhhcyBhIHByZXJlbGVhc2UsIGFuZCBub3QgaW4gcHJlcmVsZWFzZSBtb2RlXG4vLyAgICAgLSBJZiBubyBDIGhhcyBhIHByZXJlbGVhc2UgYW5kIHRoZSBHVC5zZW12ZXIgdHVwbGUsIHJldHVybiBmYWxzZVxuLy8gLSBJZiBMVFxuLy8gICAtIElmIExULnNlbXZlciBpcyBncmVhdGVyIHRoYW4gYW55IDwgb3IgPD0gY29tcCBpbiBDLCByZXR1cm4gZmFsc2Vcbi8vICAgLSBJZiBMVCBpcyA8PSwgYW5kIExULnNlbXZlciBkb2VzIG5vdCBzYXRpc2Z5IGV2ZXJ5IEMsIHJldHVybiBmYWxzZVxuLy8gICAtIElmIExULnNlbXZlciBoYXMgYSBwcmVyZWxlYXNlLCBhbmQgbm90IGluIHByZXJlbGVhc2UgbW9kZVxuLy8gICAgIC0gSWYgbm8gQyBoYXMgYSBwcmVyZWxlYXNlIGFuZCB0aGUgTFQuc2VtdmVyIHR1cGxlLCByZXR1cm4gZmFsc2Vcbi8vIC0gRWxzZSByZXR1cm4gdHJ1ZVxuXG5jb25zdCBzdWJzZXQgPSAoc3ViLCBkb20sIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBpZiAoc3ViID09PSBkb20pIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc3ViID0gbmV3IFJhbmdlKHN1Yiwgb3B0aW9ucylcbiAgZG9tID0gbmV3IFJhbmdlKGRvbSwgb3B0aW9ucylcbiAgbGV0IHNhd05vbk51bGwgPSBmYWxzZVxuXG4gIE9VVEVSOiBmb3IgKGNvbnN0IHNpbXBsZVN1YiBvZiBzdWIuc2V0KSB7XG4gICAgZm9yIChjb25zdCBzaW1wbGVEb20gb2YgZG9tLnNldCkge1xuICAgICAgY29uc3QgaXNTdWIgPSBzaW1wbGVTdWJzZXQoc2ltcGxlU3ViLCBzaW1wbGVEb20sIG9wdGlvbnMpXG4gICAgICBzYXdOb25OdWxsID0gc2F3Tm9uTnVsbCB8fCBpc1N1YiAhPT0gbnVsbFxuICAgICAgaWYgKGlzU3ViKSB7XG4gICAgICAgIGNvbnRpbnVlIE9VVEVSXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRoZSBudWxsIHNldCBpcyBhIHN1YnNldCBvZiBldmVyeXRoaW5nLCBidXQgbnVsbCBzaW1wbGUgcmFuZ2VzIGluXG4gICAgLy8gYSBjb21wbGV4IHJhbmdlIHNob3VsZCBiZSBpZ25vcmVkLiAgc28gaWYgd2Ugc2F3IGEgbm9uLW51bGwgcmFuZ2UsXG4gICAgLy8gdGhlbiB3ZSBrbm93IHRoaXMgaXNuJ3QgYSBzdWJzZXQsIGJ1dCBpZiBFVkVSWSBzaW1wbGUgcmFuZ2Ugd2FzIG51bGwsXG4gICAgLy8gdGhlbiBpdCBpcyBhIHN1YnNldC5cbiAgICBpZiAoc2F3Tm9uTnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmNvbnN0IG1pbmltdW1WZXJzaW9uV2l0aFByZVJlbGVhc2UgPSBbbmV3IENvbXBhcmF0b3IoJz49MC4wLjAtMCcpXVxuY29uc3QgbWluaW11bVZlcnNpb24gPSBbbmV3IENvbXBhcmF0b3IoJz49MC4wLjAnKV1cblxuY29uc3Qgc2ltcGxlU3Vic2V0ID0gKHN1YiwgZG9tLCBvcHRpb25zKSA9PiB7XG4gIGlmIChzdWIgPT09IGRvbSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoc3ViLmxlbmd0aCA9PT0gMSAmJiBzdWJbMF0uc2VtdmVyID09PSBBTlkpIHtcbiAgICBpZiAoZG9tLmxlbmd0aCA9PT0gMSAmJiBkb21bMF0uc2VtdmVyID09PSBBTlkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSB7XG4gICAgICBzdWIgPSBtaW5pbXVtVmVyc2lvbldpdGhQcmVSZWxlYXNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YiA9IG1pbmltdW1WZXJzaW9uXG4gICAgfVxuICB9XG5cbiAgaWYgKGRvbS5sZW5ndGggPT09IDEgJiYgZG9tWzBdLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgaWYgKG9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbSA9IG1pbmltdW1WZXJzaW9uXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZXFTZXQgPSBuZXcgU2V0KClcbiAgbGV0IGd0LCBsdFxuICBmb3IgKGNvbnN0IGMgb2Ygc3ViKSB7XG4gICAgaWYgKGMub3BlcmF0b3IgPT09ICc+JyB8fCBjLm9wZXJhdG9yID09PSAnPj0nKSB7XG4gICAgICBndCA9IGhpZ2hlckdUKGd0LCBjLCBvcHRpb25zKVxuICAgIH0gZWxzZSBpZiAoYy5vcGVyYXRvciA9PT0gJzwnIHx8IGMub3BlcmF0b3IgPT09ICc8PScpIHtcbiAgICAgIGx0ID0gbG93ZXJMVChsdCwgYywgb3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgZXFTZXQuYWRkKGMuc2VtdmVyKVxuICAgIH1cbiAgfVxuXG4gIGlmIChlcVNldC5zaXplID4gMSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBsZXQgZ3RsdENvbXBcbiAgaWYgKGd0ICYmIGx0KSB7XG4gICAgZ3RsdENvbXAgPSBjb21wYXJlKGd0LnNlbXZlciwgbHQuc2VtdmVyLCBvcHRpb25zKVxuICAgIGlmIChndGx0Q29tcCA+IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSBlbHNlIGlmIChndGx0Q29tcCA9PT0gMCAmJiAoZ3Qub3BlcmF0b3IgIT09ICc+PScgfHwgbHQub3BlcmF0b3IgIT09ICc8PScpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8vIHdpbGwgaXRlcmF0ZSBvbmUgb3IgemVybyB0aW1lc1xuICBmb3IgKGNvbnN0IGVxIG9mIGVxU2V0KSB7XG4gICAgaWYgKGd0ICYmICFzYXRpc2ZpZXMoZXEsIFN0cmluZyhndCksIG9wdGlvbnMpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmIChsdCAmJiAhc2F0aXNmaWVzKGVxLCBTdHJpbmcobHQpLCBvcHRpb25zKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGMgb2YgZG9tKSB7XG4gICAgICBpZiAoIXNhdGlzZmllcyhlcSwgU3RyaW5nKGMpLCBvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbGV0IGhpZ2hlciwgbG93ZXJcbiAgbGV0IGhhc0RvbUxULCBoYXNEb21HVFxuICAvLyBpZiB0aGUgc3Vic2V0IGhhcyBhIHByZXJlbGVhc2UsIHdlIG5lZWQgYSBjb21wYXJhdG9yIGluIHRoZSBzdXBlcnNldFxuICAvLyB3aXRoIHRoZSBzYW1lIHR1cGxlIGFuZCBhIHByZXJlbGVhc2UsIG9yIGl0J3Mgbm90IGEgc3Vic2V0XG4gIGxldCBuZWVkRG9tTFRQcmUgPSBsdCAmJlxuICAgICFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlICYmXG4gICAgbHQuc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoID8gbHQuc2VtdmVyIDogZmFsc2VcbiAgbGV0IG5lZWREb21HVFByZSA9IGd0ICYmXG4gICAgIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgJiZcbiAgICBndC5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPyBndC5zZW12ZXIgOiBmYWxzZVxuICAvLyBleGNlcHRpb246IDwxLjIuMy0wIGlzIHRoZSBzYW1lIGFzIDwxLjIuM1xuICBpZiAobmVlZERvbUxUUHJlICYmIG5lZWREb21MVFByZS5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgbHQub3BlcmF0b3IgPT09ICc8JyAmJiBuZWVkRG9tTFRQcmUucHJlcmVsZWFzZVswXSA9PT0gMCkge1xuICAgIG5lZWREb21MVFByZSA9IGZhbHNlXG4gIH1cblxuICBmb3IgKGNvbnN0IGMgb2YgZG9tKSB7XG4gICAgaGFzRG9tR1QgPSBoYXNEb21HVCB8fCBjLm9wZXJhdG9yID09PSAnPicgfHwgYy5vcGVyYXRvciA9PT0gJz49J1xuICAgIGhhc0RvbUxUID0gaGFzRG9tTFQgfHwgYy5vcGVyYXRvciA9PT0gJzwnIHx8IGMub3BlcmF0b3IgPT09ICc8PSdcbiAgICBpZiAoZ3QpIHtcbiAgICAgIGlmIChuZWVkRG9tR1RQcmUpIHtcbiAgICAgICAgaWYgKGMuc2VtdmVyLnByZXJlbGVhc2UgJiYgYy5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggJiZcbiAgICAgICAgICAgIGMuc2VtdmVyLm1ham9yID09PSBuZWVkRG9tR1RQcmUubWFqb3IgJiZcbiAgICAgICAgICAgIGMuc2VtdmVyLm1pbm9yID09PSBuZWVkRG9tR1RQcmUubWlub3IgJiZcbiAgICAgICAgICAgIGMuc2VtdmVyLnBhdGNoID09PSBuZWVkRG9tR1RQcmUucGF0Y2gpIHtcbiAgICAgICAgICBuZWVkRG9tR1RQcmUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYy5vcGVyYXRvciA9PT0gJz4nIHx8IGMub3BlcmF0b3IgPT09ICc+PScpIHtcbiAgICAgICAgaGlnaGVyID0gaGlnaGVyR1QoZ3QsIGMsIG9wdGlvbnMpXG4gICAgICAgIGlmIChoaWdoZXIgPT09IGMgJiYgaGlnaGVyICE9PSBndCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGd0Lm9wZXJhdG9yID09PSAnPj0nICYmICFzYXRpc2ZpZXMoZ3Quc2VtdmVyLCBTdHJpbmcoYyksIG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAobHQpIHtcbiAgICAgIGlmIChuZWVkRG9tTFRQcmUpIHtcbiAgICAgICAgaWYgKGMuc2VtdmVyLnByZXJlbGVhc2UgJiYgYy5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggJiZcbiAgICAgICAgICAgIGMuc2VtdmVyLm1ham9yID09PSBuZWVkRG9tTFRQcmUubWFqb3IgJiZcbiAgICAgICAgICAgIGMuc2VtdmVyLm1pbm9yID09PSBuZWVkRG9tTFRQcmUubWlub3IgJiZcbiAgICAgICAgICAgIGMuc2VtdmVyLnBhdGNoID09PSBuZWVkRG9tTFRQcmUucGF0Y2gpIHtcbiAgICAgICAgICBuZWVkRG9tTFRQcmUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYy5vcGVyYXRvciA9PT0gJzwnIHx8IGMub3BlcmF0b3IgPT09ICc8PScpIHtcbiAgICAgICAgbG93ZXIgPSBsb3dlckxUKGx0LCBjLCBvcHRpb25zKVxuICAgICAgICBpZiAobG93ZXIgPT09IGMgJiYgbG93ZXIgIT09IGx0KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobHQub3BlcmF0b3IgPT09ICc8PScgJiYgIXNhdGlzZmllcyhsdC5zZW12ZXIsIFN0cmluZyhjKSwgb3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGlmICghYy5vcGVyYXRvciAmJiAobHQgfHwgZ3QpICYmIGd0bHRDb21wICE9PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGVyZSB3YXMgYSA8IG9yID4sIGFuZCBub3RoaW5nIGluIHRoZSBkb20sIHRoZW4gbXVzdCBiZSBmYWxzZVxuICAvLyBVTkxFU1MgaXQgd2FzIGxpbWl0ZWQgYnkgYW5vdGhlciByYW5nZSBpbiB0aGUgb3RoZXIgZGlyZWN0aW9uLlxuICAvLyBFZywgPjEuMC4wIDwxLjAuMSBpcyBzdGlsbCBhIHN1YnNldCBvZiA8Mi4wLjBcbiAgaWYgKGd0ICYmIGhhc0RvbUxUICYmICFsdCAmJiBndGx0Q29tcCAhPT0gMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKGx0ICYmIGhhc0RvbUdUICYmICFndCAmJiBndGx0Q29tcCAhPT0gMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gd2UgbmVlZGVkIGEgcHJlcmVsZWFzZSByYW5nZSBpbiBhIHNwZWNpZmljIHR1cGxlLCBidXQgZGlkbid0IGdldCBvbmVcbiAgLy8gdGhlbiB0aGlzIGlzbid0IGEgc3Vic2V0LiAgZWcgPj0xLjIuMy1wcmUgaXMgbm90IGEgc3Vic2V0IG9mID49MS4wLjAsXG4gIC8vIGJlY2F1c2UgaXQgaW5jbHVkZXMgcHJlcmVsZWFzZXMgaW4gdGhlIDEuMi4zIHR1cGxlXG4gIGlmIChuZWVkRG9tR1RQcmUgfHwgbmVlZERvbUxUUHJlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG4vLyA+PTEuMi4zIGlzIGxvd2VyIHRoYW4gPjEuMi4zXG5jb25zdCBoaWdoZXJHVCA9IChhLCBiLCBvcHRpb25zKSA9PiB7XG4gIGlmICghYSkge1xuICAgIHJldHVybiBiXG4gIH1cbiAgY29uc3QgY29tcCA9IGNvbXBhcmUoYS5zZW12ZXIsIGIuc2VtdmVyLCBvcHRpb25zKVxuICByZXR1cm4gY29tcCA+IDAgPyBhXG4gICAgOiBjb21wIDwgMCA/IGJcbiAgICA6IGIub3BlcmF0b3IgPT09ICc+JyAmJiBhLm9wZXJhdG9yID09PSAnPj0nID8gYlxuICAgIDogYVxufVxuXG4vLyA8PTEuMi4zIGlzIGhpZ2hlciB0aGFuIDwxLjIuM1xuY29uc3QgbG93ZXJMVCA9IChhLCBiLCBvcHRpb25zKSA9PiB7XG4gIGlmICghYSkge1xuICAgIHJldHVybiBiXG4gIH1cbiAgY29uc3QgY29tcCA9IGNvbXBhcmUoYS5zZW12ZXIsIGIuc2VtdmVyLCBvcHRpb25zKVxuICByZXR1cm4gY29tcCA8IDAgPyBhXG4gICAgOiBjb21wID4gMCA/IGJcbiAgICA6IGIub3BlcmF0b3IgPT09ICc8JyAmJiBhLm9wZXJhdG9yID09PSAnPD0nID8gYlxuICAgIDogYVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN1YnNldFxuIiwgIid1c2Ugc3RyaWN0J1xuXG4vLyBqdXN0IHByZS1sb2FkIGFsbCB0aGUgc3R1ZmYgdGhhdCBpbmRleC5qcyBsYXppbHkgZXhwb3J0c1xuY29uc3QgaW50ZXJuYWxSZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvcmUnKVxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9jb25zdGFudHMnKVxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBpZGVudGlmaWVycyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvaWRlbnRpZmllcnMnKVxuY29uc3QgcGFyc2UgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9wYXJzZScpXG5jb25zdCB2YWxpZCA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3ZhbGlkJylcbmNvbnN0IGNsZWFuID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvY2xlYW4nKVxuY29uc3QgaW5jID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvaW5jJylcbmNvbnN0IGRpZmYgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9kaWZmJylcbmNvbnN0IG1ham9yID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvbWFqb3InKVxuY29uc3QgbWlub3IgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9taW5vcicpXG5jb25zdCBwYXRjaCA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3BhdGNoJylcbmNvbnN0IHByZXJlbGVhc2UgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9wcmVyZWxlYXNlJylcbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9jb21wYXJlJylcbmNvbnN0IHJjb21wYXJlID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvcmNvbXBhcmUnKVxuY29uc3QgY29tcGFyZUxvb3NlID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvY29tcGFyZS1sb29zZScpXG5jb25zdCBjb21wYXJlQnVpbGQgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9jb21wYXJlLWJ1aWxkJylcbmNvbnN0IHNvcnQgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9zb3J0JylcbmNvbnN0IHJzb3J0ID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvcnNvcnQnKVxuY29uc3QgZ3QgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9ndCcpXG5jb25zdCBsdCA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2x0JylcbmNvbnN0IGVxID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvZXEnKVxuY29uc3QgbmVxID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvbmVxJylcbmNvbnN0IGd0ZSA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2d0ZScpXG5jb25zdCBsdGUgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9sdGUnKVxuY29uc3QgY21wID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvY21wJylcbmNvbnN0IGNvZXJjZSA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2NvZXJjZScpXG5jb25zdCBDb21wYXJhdG9yID0gcmVxdWlyZSgnLi9jbGFzc2VzL2NvbXBhcmF0b3InKVxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuL2NsYXNzZXMvcmFuZ2UnKVxuY29uc3Qgc2F0aXNmaWVzID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvc2F0aXNmaWVzJylcbmNvbnN0IHRvQ29tcGFyYXRvcnMgPSByZXF1aXJlKCcuL3Jhbmdlcy90by1jb21wYXJhdG9ycycpXG5jb25zdCBtYXhTYXRpc2Z5aW5nID0gcmVxdWlyZSgnLi9yYW5nZXMvbWF4LXNhdGlzZnlpbmcnKVxuY29uc3QgbWluU2F0aXNmeWluZyA9IHJlcXVpcmUoJy4vcmFuZ2VzL21pbi1zYXRpc2Z5aW5nJylcbmNvbnN0IG1pblZlcnNpb24gPSByZXF1aXJlKCcuL3Jhbmdlcy9taW4tdmVyc2lvbicpXG5jb25zdCB2YWxpZFJhbmdlID0gcmVxdWlyZSgnLi9yYW5nZXMvdmFsaWQnKVxuY29uc3Qgb3V0c2lkZSA9IHJlcXVpcmUoJy4vcmFuZ2VzL291dHNpZGUnKVxuY29uc3QgZ3RyID0gcmVxdWlyZSgnLi9yYW5nZXMvZ3RyJylcbmNvbnN0IGx0ciA9IHJlcXVpcmUoJy4vcmFuZ2VzL2x0cicpXG5jb25zdCBpbnRlcnNlY3RzID0gcmVxdWlyZSgnLi9yYW5nZXMvaW50ZXJzZWN0cycpXG5jb25zdCBzaW1wbGlmeVJhbmdlID0gcmVxdWlyZSgnLi9yYW5nZXMvc2ltcGxpZnknKVxuY29uc3Qgc3Vic2V0ID0gcmVxdWlyZSgnLi9yYW5nZXMvc3Vic2V0Jylcbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXJzZSxcbiAgdmFsaWQsXG4gIGNsZWFuLFxuICBpbmMsXG4gIGRpZmYsXG4gIG1ham9yLFxuICBtaW5vcixcbiAgcGF0Y2gsXG4gIHByZXJlbGVhc2UsXG4gIGNvbXBhcmUsXG4gIHJjb21wYXJlLFxuICBjb21wYXJlTG9vc2UsXG4gIGNvbXBhcmVCdWlsZCxcbiAgc29ydCxcbiAgcnNvcnQsXG4gIGd0LFxuICBsdCxcbiAgZXEsXG4gIG5lcSxcbiAgZ3RlLFxuICBsdGUsXG4gIGNtcCxcbiAgY29lcmNlLFxuICBDb21wYXJhdG9yLFxuICBSYW5nZSxcbiAgc2F0aXNmaWVzLFxuICB0b0NvbXBhcmF0b3JzLFxuICBtYXhTYXRpc2Z5aW5nLFxuICBtaW5TYXRpc2Z5aW5nLFxuICBtaW5WZXJzaW9uLFxuICB2YWxpZFJhbmdlLFxuICBvdXRzaWRlLFxuICBndHIsXG4gIGx0cixcbiAgaW50ZXJzZWN0cyxcbiAgc2ltcGxpZnlSYW5nZSxcbiAgc3Vic2V0LFxuICBTZW1WZXIsXG4gIHJlOiBpbnRlcm5hbFJlLnJlLFxuICBzcmM6IGludGVybmFsUmUuc3JjLFxuICB0b2tlbnM6IGludGVybmFsUmUudCxcbiAgU0VNVkVSX1NQRUNfVkVSU0lPTjogY29uc3RhbnRzLlNFTVZFUl9TUEVDX1ZFUlNJT04sXG4gIFJFTEVBU0VfVFlQRVM6IGNvbnN0YW50cy5SRUxFQVNFX1RZUEVTLFxuICBjb21wYXJlSWRlbnRpZmllcnM6IGlkZW50aWZpZXJzLmNvbXBhcmVJZGVudGlmaWVycyxcbiAgcmNvbXBhcmVJZGVudGlmaWVyczogaWRlbnRpZmllcnMucmNvbXBhcmVJZGVudGlmaWVycyxcbn1cbiIsICJpbXBvcnQgeyByZWFkRmlsZSwgd3JpdGVGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnO1xuaW1wb3J0IHsgaW5jLCBwYXJzZSB9IGZyb20gJ3NlbXZlcic7XG5cbnR5cGUgUmVsZWFzZVR5cGUgPSAnbWFqb3InIHwgJ21pbm9yJyB8ICdwYXRjaCcgfCAncHJlbWFqb3InIHwgJ3ByZW1pbm9yJyB8ICdwcmVwYXRjaCcgfCAncHJlcmVsZWFzZSc7XG5cbmludGVyZmFjZSBCdW1wVmVyc2lvblBhcmFtcyB7XG4gICAgY3VycmVudFZlcnNpb246IHN0cmluZztcbiAgICBidW1wVHlwZTogc3RyaW5nO1xuICAgIHByZWlkPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgV3JpdGVQYWNrYWdlVmVyc2lvblBhcmFtcyB7XG4gICAgbWFuaWZlc3RQYXRoOiBzdHJpbmc7XG4gICAgbmV3VmVyc2lvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVtcFZlcnNpb24ocGFyYW1zOiBCdW1wVmVyc2lvblBhcmFtcyk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdDogc3RyaW5nIHwgbnVsbDtcblxuICAgIGlmIChwYXJhbXMucHJlaWQpIHJlc3VsdCA9IGluYyhwYXJhbXMuY3VycmVudFZlcnNpb24sIHBhcmFtcy5idW1wVHlwZSBhcyBSZWxlYXNlVHlwZSwgcGFyYW1zLnByZWlkKTtcbiAgICBlbHNlIHJlc3VsdCA9IGluYyhwYXJhbXMuY3VycmVudFZlcnNpb24sIHBhcmFtcy5idW1wVHlwZSBhcyBSZWxlYXNlVHlwZSk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBidW1wIHZlcnNpb24gXCIke3BhcmFtcy5jdXJyZW50VmVyc2lvbn1cIiB3aXRoIHR5cGUgXCIke3BhcmFtcy5idW1wVHlwZX1cIi5gKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZVJlbGVhc2VCcmFuY2hOYW1lKG5ld1ZlcnNpb246IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlKG5ld1ZlcnNpb24pO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHZlcnNpb246IFwiJHtuZXdWZXJzaW9ufVwiYCk7XG4gICAgfVxuICAgIGlmIChwYXJzZWQucHJlcmVsZWFzZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBgcmVsZWFzZS92JHtwYXJzZWQubWFqb3J9LiR7cGFyc2VkLm1pbm9yfS4ke3BhcnNlZC5wYXRjaH1gO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdyaXRlUGFja2FnZVZlcnNpb24ocGFyYW1zOiBXcml0ZVBhY2thZ2VWZXJzaW9uUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcmF3ID0gYXdhaXQgcmVhZEZpbGUocGFyYW1zLm1hbmlmZXN0UGF0aCwgeyBlbmNvZGluZzogJ3V0Zi04JyB9KTtcbiAgICBjb25zdCBtYW5pZmVzdCA9IEpTT04ucGFyc2UocmF3KSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcblxuICAgIG1hbmlmZXN0Wyd2ZXJzaW9uJ10gPSBwYXJhbXMubmV3VmVyc2lvbjtcblxuICAgIGF3YWl0IHdyaXRlRmlsZShwYXJhbXMubWFuaWZlc3RQYXRoLCBKU09OLnN0cmluZ2lmeShtYW5pZmVzdCwgbnVsbCwgMikgKyAnXFxuJywgeyBlbmNvZGluZzogJ3V0Zi04JyB9KTtcbn1cbiIsICJpbXBvcnQgeyBidW1wVmVyc2lvbiwgZGVyaXZlUmVsZWFzZUJyYW5jaE5hbWUsIHdyaXRlUGFja2FnZVZlcnNpb24gfSBmcm9tICdAL3ZlcnNpb24tYnVtcGVyJztcbmltcG9ydCB7IGFwcGVuZEZpbGUsIHJlYWRGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdmVyc2lvbklucHV0ID0gcHJvY2Vzcy5lbnZbJ1ZFUlNJT04nXSE7XG4gICAgY29uc3QgcHJlcmVsZWFzZUlkSW5wdXQgPSBwcm9jZXNzLmVudlsnUFJFUkVMRUFTRV9JRCddITtcbiAgICBjb25zdCBtYW5pZmVzdFBhdGggPSBgJHtwcm9jZXNzLmVudlsnR0lUSFVCX1dPUktTUEFDRSddIX0vcGFja2FnZS5qc29uYDtcblxuICAgIGNvbnN0IG1hbmlmZXN0ID0gSlNPTi5wYXJzZShhd2FpdCByZWFkRmlsZShtYW5pZmVzdFBhdGgsICd1dGYtOCcpKSBhcyB7IHZlcnNpb246IHN0cmluZyB9O1xuICAgIGNvbnN0IHByZWlkID0gcHJlcmVsZWFzZUlkSW5wdXQgIT09ICdub25lJyA/IHByZXJlbGVhc2VJZElucHV0IDogdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgbmV3VmVyc2lvbiA9IGJ1bXBWZXJzaW9uKHsgY3VycmVudFZlcnNpb246IG1hbmlmZXN0LnZlcnNpb24sIGJ1bXBUeXBlOiB2ZXJzaW9uSW5wdXQsIHByZWlkIH0pO1xuICAgIGF3YWl0IHdyaXRlUGFja2FnZVZlcnNpb24oeyBtYW5pZmVzdFBhdGgsIG5ld1ZlcnNpb24gfSk7XG5cbiAgICBjb25zdCBvdXRwdXQgPSBwcm9jZXNzLmVudlsnR0lUSFVCX09VVFBVVCddITtcbiAgICBhd2FpdCBhcHBlbmRGaWxlKG91dHB1dCwgYHJhdy12ZXJzaW9uPXYke25ld1ZlcnNpb259XFxuYCk7XG4gICAgYXdhaXQgYXBwZW5kRmlsZShvdXRwdXQsIGBjbGVhbi12ZXJzaW9uPSR7bmV3VmVyc2lvbn1cXG5gKTtcbiAgICBhd2FpdCBhcHBlbmRGaWxlKG91dHB1dCwgYHJlbGVhc2UtYnJhbmNoLW5hbWU9JHtkZXJpdmVSZWxlYXNlQnJhbmNoTmFtZShuZXdWZXJzaW9uKSA/PyAnJ31cXG5gKTtcbn1cblxuaWYgKHByb2Nlc3MuYXJndlsxXSA9PT0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpKSB7XG4gICAgYXdhaXQgcnVuKCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFJQSxRQUFNLHNCQUFzQjtBQUU1QixRQUFNLGFBQWE7QUFDbkIsUUFBTSxtQkFBbUIsT0FBTztBQUFBLElBQ0w7QUFHM0IsUUFBTSw0QkFBNEI7QUFJbEMsUUFBTSx3QkFBd0IsYUFBYTtBQUUzQyxRQUFNLGdCQUFnQjtBQUFBLE1BQ3BCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFB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QVcsS0FBSyxNQUFNLEdBQUc7QUFFL0IsV0FBUyxTQUFTLElBQUksT0FBTztBQUU3QixRQUFNLFVBQVUsT0FBTyxjQUFjLEtBQUssVUFBVSxVQUFVLE1BQU0sQ0FBQyxJQUFJLE1BQU0sRUFBRSxVQUFVLFFBQVEsQ0FBQztBQUN4Rzs7O0FDOUNBLFNBQVMsWUFBWSxZQUFBQyxpQkFBZ0I7QUFDckMsU0FBUyxxQkFBcUI7QUFFOUIsZUFBc0IsTUFBcUI7QUFDdkMsUUFBTSxlQUFlLFFBQVEsSUFBSSxTQUFTO0FBQzFDLFFBQU0sb0JBQW9CLFFBQVEsSUFBSSxlQUFlO0FBQ3JELFFBQU0sZUFBZSxHQUFHLFFBQVEsSUFBSSxrQkFBa0IsQ0FBRTtBQUV4RCxRQUFNLFdBQVcsS0FBSyxNQUFNLE1BQU1BLFVBQVMsY0FBYyxPQUFPLENBQUM7QUFDakUsUUFBTSxRQUFRLHNCQUFzQixTQUFTLG9CQUFvQjtBQUVqRSxRQUFNLGFBQWEsWUFBWSxFQUFFLGdCQUFnQixTQUFTLFNBQVMsVUFBVSxjQUFjLE1BQU0sQ0FBQztBQUNsRyxRQUFNLG9CQUFvQixFQUFFLGNBQWMsV0FBVyxDQUFDO0FBRXRELFFBQU0sU0FBUyxRQUFRLElBQUksZUFBZTtBQUMxQyxRQUFNLFdBQVcsUUFBUSxnQkFBZ0IsVUFBVTtBQUFBLENBQUk7QUFDdkQsUUFBTSxXQUFXLFFBQVEsaUJBQWlCLFVBQVU7QUFBQSxDQUFJO0FBQ3hELFFBQU0sV0FBVyxRQUFRLHVCQUF1Qix3QkFBd0IsVUFBVSxLQUFLLEVBQUU7QUFBQSxDQUFJO0FBQ2pHO0FBRUEsSUFBSSxRQUFRLEtBQUssQ0FBQyxNQUFNLGNBQWMsWUFBWSxHQUFHLEdBQUc7QUFDcEQsUUFBTSxJQUFJO0FBQ2Q7IiwKICAibmFtZXMiOiBbInBhcnNlIiwgInBhcnNlIiwgInBhcnNlIiwgImluYyIsICJwYXJzZSIsICJwYXJzZSIsICJwYXJzZSIsICJyZXF1aXJlX3ZhbGlkIiwgInJlcXVpcmVfc2VtdmVyIiwgInBhcnNlIiwgImluYyIsICJyZWFkRmlsZSJdCn0K

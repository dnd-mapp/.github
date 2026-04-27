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

// src/scripts/bump-version.mts
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvaW50ZXJuYWwvZGVidWcuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL3JlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9wYXJzZS1vcHRpb25zLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9pZGVudGlmaWVycy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvY2xhc3Nlcy9zZW12ZXIuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9wYXJzZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3ZhbGlkLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY2xlYW4uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9pbmMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9kaWZmLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvbWFqb3IuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9taW5vci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3BhdGNoLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvcHJlcmVsZWFzZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2NvbXBhcmUuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9yY29tcGFyZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2NvbXBhcmUtbG9vc2UuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9jb21wYXJlLWJ1aWxkLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvc29ydC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3Jzb3J0LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvZ3QuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9sdC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2VxLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvbmVxLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvZ3RlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvbHRlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY21wLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY29lcmNlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9scnVjYWNoZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvY2xhc3Nlcy9yYW5nZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvY2xhc3Nlcy9jb21wYXJhdG9yLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvc2F0aXNmaWVzLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvdG8tY29tcGFyYXRvcnMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9tYXgtc2F0aXNmeWluZy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL21pbi1zYXRpc2Z5aW5nLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvbWluLXZlcnNpb24uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy92YWxpZC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL291dHNpZGUuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9ndHIuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9sdHIuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9pbnRlcnNlY3RzLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvc2ltcGxpZnkuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9zdWJzZXQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL3NyYy92ZXJzaW9uLWJ1bXBlci92ZXJzaW9uLWJ1bXBlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvc2NyaXB0cy9idW1wLXZlcnNpb24ubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCdcblxuLy8gTm90ZTogdGhpcyBpcyB0aGUgc2VtdmVyLm9yZyB2ZXJzaW9uIG9mIHRoZSBzcGVjIHRoYXQgaXQgaW1wbGVtZW50c1xuLy8gTm90IG5lY2Vzc2FyaWx5IHRoZSBwYWNrYWdlIHZlcnNpb24gb2YgdGhpcyBjb2RlLlxuY29uc3QgU0VNVkVSX1NQRUNfVkVSU0lPTiA9ICcyLjAuMCdcblxuY29uc3QgTUFYX0xFTkdUSCA9IDI1NlxuY29uc3QgTUFYX1NBRkVfSU5URUdFUiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyA5MDA3MTk5MjU0NzQwOTkxXG5cbi8vIE1heCBzYWZlIHNlZ21lbnQgbGVuZ3RoIGZvciBjb2VyY2lvbi5cbmNvbnN0IE1BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEggPSAxNlxuXG4vLyBNYXggc2FmZSBsZW5ndGggZm9yIGEgYnVpbGQgaWRlbnRpZmllci4gVGhlIG1heCBsZW5ndGggbWludXMgNiBjaGFyYWN0ZXJzIGZvclxuLy8gdGhlIHNob3J0ZXN0IHZlcnNpb24gd2l0aCBhIGJ1aWxkIDAuMC4wK0JVSUxELlxuY29uc3QgTUFYX1NBRkVfQlVJTERfTEVOR1RIID0gTUFYX0xFTkdUSCAtIDZcblxuY29uc3QgUkVMRUFTRV9UWVBFUyA9IFtcbiAgJ21ham9yJyxcbiAgJ3ByZW1ham9yJyxcbiAgJ21pbm9yJyxcbiAgJ3ByZW1pbm9yJyxcbiAgJ3BhdGNoJyxcbiAgJ3ByZXBhdGNoJyxcbiAgJ3ByZXJlbGVhc2UnLFxuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgTUFYX0xFTkdUSCxcbiAgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSCxcbiAgTUFYX1NBRkVfQlVJTERfTEVOR1RILFxuICBNQVhfU0FGRV9JTlRFR0VSLFxuICBSRUxFQVNFX1RZUEVTLFxuICBTRU1WRVJfU1BFQ19WRVJTSU9OLFxuICBGTEFHX0lOQ0xVREVfUFJFUkVMRUFTRTogMGIwMDEsXG4gIEZMQUdfTE9PU0U6IDBiMDEwLFxufVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBkZWJ1ZyA9IChcbiAgdHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmXG4gIHByb2Nlc3MuZW52ICYmXG4gIHByb2Nlc3MuZW52Lk5PREVfREVCVUcgJiZcbiAgL1xcYnNlbXZlclxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRylcbikgPyAoLi4uYXJncykgPT4gY29uc29sZS5lcnJvcignU0VNVkVSJywgLi4uYXJncylcbiAgOiAoKSA9PiB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYnVnXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHtcbiAgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSCxcbiAgTUFYX1NBRkVfQlVJTERfTEVOR1RILFxuICBNQVhfTEVOR1RILFxufSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJylcbmNvbnN0IGRlYnVnID0gcmVxdWlyZSgnLi9kZWJ1ZycpXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7fVxuXG4vLyBUaGUgYWN0dWFsIHJlZ2V4cHMgZ28gb24gZXhwb3J0cy5yZVxuY29uc3QgcmUgPSBleHBvcnRzLnJlID0gW11cbmNvbnN0IHNhZmVSZSA9IGV4cG9ydHMuc2FmZVJlID0gW11cbmNvbnN0IHNyYyA9IGV4cG9ydHMuc3JjID0gW11cbmNvbnN0IHNhZmVTcmMgPSBleHBvcnRzLnNhZmVTcmMgPSBbXVxuY29uc3QgdCA9IGV4cG9ydHMudCA9IHt9XG5sZXQgUiA9IDBcblxuY29uc3QgTEVUVEVSREFTSE5VTUJFUiA9ICdbYS16QS1aMC05LV0nXG5cbi8vIFJlcGxhY2Ugc29tZSBncmVlZHkgcmVnZXggdG9rZW5zIHRvIHByZXZlbnQgcmVnZXggZG9zIGlzc3Vlcy4gVGhlc2UgcmVnZXggYXJlXG4vLyB1c2VkIGludGVybmFsbHkgdmlhIHRoZSBzYWZlUmUgb2JqZWN0IHNpbmNlIGFsbCBpbnB1dHMgaW4gdGhpcyBsaWJyYXJ5IGdldFxuLy8gbm9ybWFsaXplZCBmaXJzdCB0byB0cmltIGFuZCBjb2xsYXBzZSBhbGwgZXh0cmEgd2hpdGVzcGFjZS4gVGhlIG9yaWdpbmFsXG4vLyByZWdleGVzIGFyZSBleHBvcnRlZCBmb3IgdXNlcmxhbmQgY29uc3VtcHRpb24gYW5kIGxvd2VyIGxldmVsIHVzYWdlLiBBXG4vLyBmdXR1cmUgYnJlYWtpbmcgY2hhbmdlIGNvdWxkIGV4cG9ydCB0aGUgc2FmZXIgcmVnZXggb25seSB3aXRoIGEgbm90ZSB0aGF0XG4vLyBhbGwgaW5wdXQgc2hvdWxkIGhhdmUgZXh0cmEgd2hpdGVzcGFjZSByZW1vdmVkLlxuY29uc3Qgc2FmZVJlZ2V4UmVwbGFjZW1lbnRzID0gW1xuICBbJ1xcXFxzJywgMV0sXG4gIFsnXFxcXGQnLCBNQVhfTEVOR1RIXSxcbiAgW0xFVFRFUkRBU0hOVU1CRVIsIE1BWF9TQUZFX0JVSUxEX0xFTkdUSF0sXG5dXG5cbmNvbnN0IG1ha2VTYWZlUmVnZXggPSAodmFsdWUpID0+IHtcbiAgZm9yIChjb25zdCBbdG9rZW4sIG1heF0gb2Ygc2FmZVJlZ2V4UmVwbGFjZW1lbnRzKSB7XG4gICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgLnNwbGl0KGAke3Rva2VufSpgKS5qb2luKGAke3Rva2VufXswLCR7bWF4fX1gKVxuICAgICAgLnNwbGl0KGAke3Rva2VufStgKS5qb2luKGAke3Rva2VufXsxLCR7bWF4fX1gKVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5jb25zdCBjcmVhdGVUb2tlbiA9IChuYW1lLCB2YWx1ZSwgaXNHbG9iYWwpID0+IHtcbiAgY29uc3Qgc2FmZSA9IG1ha2VTYWZlUmVnZXgodmFsdWUpXG4gIGNvbnN0IGluZGV4ID0gUisrXG4gIGRlYnVnKG5hbWUsIGluZGV4LCB2YWx1ZSlcbiAgdFtuYW1lXSA9IGluZGV4XG4gIHNyY1tpbmRleF0gPSB2YWx1ZVxuICBzYWZlU3JjW2luZGV4XSA9IHNhZmVcbiAgcmVbaW5kZXhdID0gbmV3IFJlZ0V4cCh2YWx1ZSwgaXNHbG9iYWwgPyAnZycgOiB1bmRlZmluZWQpXG4gIHNhZmVSZVtpbmRleF0gPSBuZXcgUmVnRXhwKHNhZmUsIGlzR2xvYmFsID8gJ2cnIDogdW5kZWZpbmVkKVxufVxuXG4vLyBUaGUgZm9sbG93aW5nIFJlZ3VsYXIgRXhwcmVzc2lvbnMgY2FuIGJlIHVzZWQgZm9yIHRva2VuaXppbmcsXG4vLyB2YWxpZGF0aW5nLCBhbmQgcGFyc2luZyBTZW1WZXIgdmVyc2lvbiBzdHJpbmdzLlxuXG4vLyAjIyBOdW1lcmljIElkZW50aWZpZXJcbi8vIEEgc2luZ2xlIGAwYCwgb3IgYSBub24temVybyBkaWdpdCBmb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgZGlnaXRzLlxuXG5jcmVhdGVUb2tlbignTlVNRVJJQ0lERU5USUZJRVInLCAnMHxbMS05XVxcXFxkKicpXG5jcmVhdGVUb2tlbignTlVNRVJJQ0lERU5USUZJRVJMT09TRScsICdcXFxcZCsnKVxuXG4vLyAjIyBOb24tbnVtZXJpYyBJZGVudGlmaWVyXG4vLyBaZXJvIG9yIG1vcmUgZGlnaXRzLCBmb2xsb3dlZCBieSBhIGxldHRlciBvciBoeXBoZW4sIGFuZCB0aGVuIHplcm8gb3Jcbi8vIG1vcmUgbGV0dGVycywgZGlnaXRzLCBvciBoeXBoZW5zLlxuXG5jcmVhdGVUb2tlbignTk9OTlVNRVJJQ0lERU5USUZJRVInLCBgXFxcXGQqW2EtekEtWi1dJHtMRVRURVJEQVNITlVNQkVSfSpgKVxuXG4vLyAjIyBNYWluIFZlcnNpb25cbi8vIFRocmVlIGRvdC1zZXBhcmF0ZWQgbnVtZXJpYyBpZGVudGlmaWVycy5cblxuY3JlYXRlVG9rZW4oJ01BSU5WRVJTSU9OJywgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSXX0pXFxcXC5gICtcbiAgICAgICAgICAgICAgICAgICBgKCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJdfSlcXFxcLmAgK1xuICAgICAgICAgICAgICAgICAgIGAoJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUl19KWApXG5cbmNyZWF0ZVRva2VuKCdNQUlOVkVSU0lPTkxPT1NFJywgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfSlcXFxcLmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfSlcXFxcLmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfSlgKVxuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uIElkZW50aWZpZXJcbi8vIEEgbnVtZXJpYyBpZGVudGlmaWVyLCBvciBhIG5vbi1udW1lcmljIGlkZW50aWZpZXIuXG4vLyBOb24tbnVtZXJpYyBpZGVudGlmaWVycyBpbmNsdWRlIG51bWVyaWMgaWRlbnRpZmllcnMgYnV0IGNhbiBiZSBsb25nZXIuXG4vLyBUaGVyZWZvcmUgbm9uLW51bWVyaWMgaWRlbnRpZmllcnMgbXVzdCBnbyBmaXJzdC5cblxuY3JlYXRlVG9rZW4oJ1BSRVJFTEVBU0VJREVOVElGSUVSJywgYCg/OiR7c3JjW3QuTk9OTlVNRVJJQ0lERU5USUZJRVJdXG59fCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJdfSlgKVxuXG5jcmVhdGVUb2tlbignUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRScsIGAoPzoke3NyY1t0Lk5PTk5VTUVSSUNJREVOVElGSUVSXVxufXwke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfSlgKVxuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uXG4vLyBIeXBoZW4sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGRvdC1zZXBhcmF0ZWQgcHJlLXJlbGVhc2UgdmVyc2lvblxuLy8gaWRlbnRpZmllcnMuXG5cbmNyZWF0ZVRva2VuKCdQUkVSRUxFQVNFJywgYCg/Oi0oJHtzcmNbdC5QUkVSRUxFQVNFSURFTlRJRklFUl1cbn0oPzpcXFxcLiR7c3JjW3QuUFJFUkVMRUFTRUlERU5USUZJRVJdfSkqKSlgKVxuXG5jcmVhdGVUb2tlbignUFJFUkVMRUFTRUxPT1NFJywgYCg/Oi0/KCR7c3JjW3QuUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV1cbn0oPzpcXFxcLiR7c3JjW3QuUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV19KSopKWApXG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhIElkZW50aWZpZXJcbi8vIEFueSBjb21iaW5hdGlvbiBvZiBkaWdpdHMsIGxldHRlcnMsIG9yIGh5cGhlbnMuXG5cbmNyZWF0ZVRva2VuKCdCVUlMRElERU5USUZJRVInLCBgJHtMRVRURVJEQVNITlVNQkVSfStgKVxuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YVxuLy8gUGx1cyBzaWduLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBwZXJpb2Qtc2VwYXJhdGVkIGJ1aWxkIG1ldGFkYXRhXG4vLyBpZGVudGlmaWVycy5cblxuY3JlYXRlVG9rZW4oJ0JVSUxEJywgYCg/OlxcXFwrKCR7c3JjW3QuQlVJTERJREVOVElGSUVSXVxufSg/OlxcXFwuJHtzcmNbdC5CVUlMRElERU5USUZJRVJdfSkqKSlgKVxuXG4vLyAjIyBGdWxsIFZlcnNpb24gU3RyaW5nXG4vLyBBIG1haW4gdmVyc2lvbiwgZm9sbG93ZWQgb3B0aW9uYWxseSBieSBhIHByZS1yZWxlYXNlIHZlcnNpb24gYW5kXG4vLyBidWlsZCBtZXRhZGF0YS5cblxuLy8gTm90ZSB0aGF0IHRoZSBvbmx5IG1ham9yLCBtaW5vciwgcGF0Y2gsIGFuZCBwcmUtcmVsZWFzZSBzZWN0aW9ucyBvZlxuLy8gdGhlIHZlcnNpb24gc3RyaW5nIGFyZSBjYXB0dXJpbmcgZ3JvdXBzLiAgVGhlIGJ1aWxkIG1ldGFkYXRhIGlzIG5vdCBhXG4vLyBjYXB0dXJpbmcgZ3JvdXAsIGJlY2F1c2UgaXQgc2hvdWxkIG5vdCBldmVyIGJlIHVzZWQgaW4gdmVyc2lvblxuLy8gY29tcGFyaXNvbi5cblxuY3JlYXRlVG9rZW4oJ0ZVTExQTEFJTicsIGB2PyR7c3JjW3QuTUFJTlZFUlNJT05dXG59JHtzcmNbdC5QUkVSRUxFQVNFXX0/JHtcbiAgc3JjW3QuQlVJTERdfT9gKVxuXG5jcmVhdGVUb2tlbignRlVMTCcsIGBeJHtzcmNbdC5GVUxMUExBSU5dfSRgKVxuXG4vLyBsaWtlIGZ1bGwsIGJ1dCBhbGxvd3MgdjEuMi4zIGFuZCA9MS4yLjMsIHdoaWNoIHBlb3BsZSBkbyBzb21ldGltZXMuXG4vLyBhbHNvLCAxLjAuMGFscGhhMSAocHJlcmVsZWFzZSB3aXRob3V0IHRoZSBoeXBoZW4pIHdoaWNoIGlzIHByZXR0eVxuLy8gY29tbW9uIGluIHRoZSBucG0gcmVnaXN0cnkuXG5jcmVhdGVUb2tlbignTE9PU0VQTEFJTicsIGBbdj1cXFxcc10qJHtzcmNbdC5NQUlOVkVSU0lPTkxPT1NFXVxufSR7c3JjW3QuUFJFUkVMRUFTRUxPT1NFXX0/JHtcbiAgc3JjW3QuQlVJTERdfT9gKVxuXG5jcmVhdGVUb2tlbignTE9PU0UnLCBgXiR7c3JjW3QuTE9PU0VQTEFJTl19JGApXG5cbmNyZWF0ZVRva2VuKCdHVExUJywgJygoPzo8fD4pPz0/KScpXG5cbi8vIFNvbWV0aGluZyBsaWtlIFwiMi4qXCIgb3IgXCIxLjIueFwiLlxuLy8gTm90ZSB0aGF0IFwieC54XCIgaXMgYSB2YWxpZCB4UmFuZ2UgaWRlbnRpZmVyLCBtZWFuaW5nIFwiYW55IHZlcnNpb25cIlxuLy8gT25seSB0aGUgZmlyc3QgaXRlbSBpcyBzdHJpY3RseSByZXF1aXJlZC5cbmNyZWF0ZVRva2VuKCdYUkFOR0VJREVOVElGSUVSTE9PU0UnLCBgJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUkxPT1NFXX18eHxYfFxcXFwqYClcbmNyZWF0ZVRva2VuKCdYUkFOR0VJREVOVElGSUVSJywgYCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJdfXx4fFh8XFxcXCpgKVxuXG5jcmVhdGVUb2tlbignWFJBTkdFUExBSU4nLCBgW3Y9XFxcXHNdKigke3NyY1t0LlhSQU5HRUlERU5USUZJRVJdfSlgICtcbiAgICAgICAgICAgICAgICAgICBgKD86XFxcXC4oJHtzcmNbdC5YUkFOR0VJREVOVElGSUVSXX0pYCArXG4gICAgICAgICAgICAgICAgICAgYCg/OlxcXFwuKCR7c3JjW3QuWFJBTkdFSURFTlRJRklFUl19KWAgK1xuICAgICAgICAgICAgICAgICAgIGAoPzoke3NyY1t0LlBSRVJFTEVBU0VdfSk/JHtcbiAgICAgICAgICAgICAgICAgICAgIHNyY1t0LkJVSUxEXX0/YCArXG4gICAgICAgICAgICAgICAgICAgYCk/KT9gKVxuXG5jcmVhdGVUb2tlbignWFJBTkdFUExBSU5MT09TRScsIGBbdj1cXFxcc10qKCR7c3JjW3QuWFJBTkdFSURFTlRJRklFUkxPT1NFXX0pYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKD86XFxcXC4oJHtzcmNbdC5YUkFOR0VJREVOVElGSUVSTE9PU0VdfSlgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAoPzpcXFxcLigke3NyY1t0LlhSQU5HRUlERU5USUZJRVJMT09TRV19KWAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCg/OiR7c3JjW3QuUFJFUkVMRUFTRUxPT1NFXX0pPyR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1t0LkJVSUxEXX0/YCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKT8pP2ApXG5cbmNyZWF0ZVRva2VuKCdYUkFOR0UnLCBgXiR7c3JjW3QuR1RMVF19XFxcXHMqJHtzcmNbdC5YUkFOR0VQTEFJTl19JGApXG5jcmVhdGVUb2tlbignWFJBTkdFTE9PU0UnLCBgXiR7c3JjW3QuR1RMVF19XFxcXHMqJHtzcmNbdC5YUkFOR0VQTEFJTkxPT1NFXX0kYClcblxuLy8gQ29lcmNpb24uXG4vLyBFeHRyYWN0IGFueXRoaW5nIHRoYXQgY291bGQgY29uY2VpdmFibHkgYmUgYSBwYXJ0IG9mIGEgdmFsaWQgc2VtdmVyXG5jcmVhdGVUb2tlbignQ09FUkNFUExBSU4nLCBgJHsnKF58W15cXFxcZF0pJyArXG4gICAgICAgICAgICAgICcoXFxcXGR7MSwnfSR7TUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSH19KWAgK1xuICAgICAgICAgICAgICBgKD86XFxcXC4oXFxcXGR7MSwke01BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEh9fSkpP2AgK1xuICAgICAgICAgICAgICBgKD86XFxcXC4oXFxcXGR7MSwke01BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEh9fSkpP2ApXG5jcmVhdGVUb2tlbignQ09FUkNFJywgYCR7c3JjW3QuQ09FUkNFUExBSU5dfSg/OiR8W15cXFxcZF0pYClcbmNyZWF0ZVRva2VuKCdDT0VSQ0VGVUxMJywgc3JjW3QuQ09FUkNFUExBSU5dICtcbiAgICAgICAgICAgICAgYCg/OiR7c3JjW3QuUFJFUkVMRUFTRV19KT9gICtcbiAgICAgICAgICAgICAgYCg/OiR7c3JjW3QuQlVJTERdfSk/YCArXG4gICAgICAgICAgICAgIGAoPzokfFteXFxcXGRdKWApXG5jcmVhdGVUb2tlbignQ09FUkNFUlRMJywgc3JjW3QuQ09FUkNFXSwgdHJ1ZSlcbmNyZWF0ZVRva2VuKCdDT0VSQ0VSVExGVUxMJywgc3JjW3QuQ09FUkNFRlVMTF0sIHRydWUpXG5cbi8vIFRpbGRlIHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJyZWFzb25hYmx5IGF0IG9yIGdyZWF0ZXIgdGhhblwiXG5jcmVhdGVUb2tlbignTE9ORVRJTERFJywgJyg/On4+PyknKVxuXG5jcmVhdGVUb2tlbignVElMREVUUklNJywgYChcXFxccyopJHtzcmNbdC5MT05FVElMREVdfVxcXFxzK2AsIHRydWUpXG5leHBvcnRzLnRpbGRlVHJpbVJlcGxhY2UgPSAnJDF+J1xuXG5jcmVhdGVUb2tlbignVElMREUnLCBgXiR7c3JjW3QuTE9ORVRJTERFXX0ke3NyY1t0LlhSQU5HRVBMQUlOXX0kYClcbmNyZWF0ZVRva2VuKCdUSUxERUxPT1NFJywgYF4ke3NyY1t0LkxPTkVUSUxERV19JHtzcmNbdC5YUkFOR0VQTEFJTkxPT1NFXX0kYClcblxuLy8gQ2FyZXQgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcImF0IGxlYXN0IGFuZCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoXCJcbmNyZWF0ZVRva2VuKCdMT05FQ0FSRVQnLCAnKD86XFxcXF4pJylcblxuY3JlYXRlVG9rZW4oJ0NBUkVUVFJJTScsIGAoXFxcXHMqKSR7c3JjW3QuTE9ORUNBUkVUXX1cXFxccytgLCB0cnVlKVxuZXhwb3J0cy5jYXJldFRyaW1SZXBsYWNlID0gJyQxXidcblxuY3JlYXRlVG9rZW4oJ0NBUkVUJywgYF4ke3NyY1t0LkxPTkVDQVJFVF19JHtzcmNbdC5YUkFOR0VQTEFJTl19JGApXG5jcmVhdGVUb2tlbignQ0FSRVRMT09TRScsIGBeJHtzcmNbdC5MT05FQ0FSRVRdfSR7c3JjW3QuWFJBTkdFUExBSU5MT09TRV19JGApXG5cbi8vIEEgc2ltcGxlIGd0L2x0L2VxIHRoaW5nLCBvciBqdXN0IFwiXCIgdG8gaW5kaWNhdGUgXCJhbnkgdmVyc2lvblwiXG5jcmVhdGVUb2tlbignQ09NUEFSQVRPUkxPT1NFJywgYF4ke3NyY1t0LkdUTFRdfVxcXFxzKigke3NyY1t0LkxPT1NFUExBSU5dfSkkfF4kYClcbmNyZWF0ZVRva2VuKCdDT01QQVJBVE9SJywgYF4ke3NyY1t0LkdUTFRdfVxcXFxzKigke3NyY1t0LkZVTExQTEFJTl19KSR8XiRgKVxuXG4vLyBBbiBleHByZXNzaW9uIHRvIHN0cmlwIGFueSB3aGl0ZXNwYWNlIGJldHdlZW4gdGhlIGd0bHQgYW5kIHRoZSB0aGluZ1xuLy8gaXQgbW9kaWZpZXMsIHNvIHRoYXQgYD4gMS4yLjNgID09PiBgPjEuMi4zYFxuY3JlYXRlVG9rZW4oJ0NPTVBBUkFUT1JUUklNJywgYChcXFxccyopJHtzcmNbdC5HVExUXVxufVxcXFxzKigke3NyY1t0LkxPT1NFUExBSU5dfXwke3NyY1t0LlhSQU5HRVBMQUlOXX0pYCwgdHJ1ZSlcbmV4cG9ydHMuY29tcGFyYXRvclRyaW1SZXBsYWNlID0gJyQxJDIkMydcblxuLy8gU29tZXRoaW5nIGxpa2UgYDEuMi4zIC0gMS4yLjRgXG4vLyBOb3RlIHRoYXQgdGhlc2UgYWxsIHVzZSB0aGUgbG9vc2UgZm9ybSwgYmVjYXVzZSB0aGV5J2xsIGJlXG4vLyBjaGVja2VkIGFnYWluc3QgZWl0aGVyIHRoZSBzdHJpY3Qgb3IgbG9vc2UgY29tcGFyYXRvciBmb3JtXG4vLyBsYXRlci5cbmNyZWF0ZVRva2VuKCdIWVBIRU5SQU5HRScsIGBeXFxcXHMqKCR7c3JjW3QuWFJBTkdFUExBSU5dfSlgICtcbiAgICAgICAgICAgICAgICAgICBgXFxcXHMrLVxcXFxzK2AgK1xuICAgICAgICAgICAgICAgICAgIGAoJHtzcmNbdC5YUkFOR0VQTEFJTl19KWAgK1xuICAgICAgICAgICAgICAgICAgIGBcXFxccyokYClcblxuY3JlYXRlVG9rZW4oJ0hZUEhFTlJBTkdFTE9PU0UnLCBgXlxcXFxzKigke3NyY1t0LlhSQU5HRVBMQUlOTE9PU0VdfSlgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXFxccystXFxcXHMrYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKCR7c3JjW3QuWFJBTkdFUExBSU5MT09TRV19KWAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYFxcXFxzKiRgKVxuXG4vLyBTdGFyIHJhbmdlcyBiYXNpY2FsbHkganVzdCBhbGxvdyBhbnl0aGluZyBhdCBhbGwuXG5jcmVhdGVUb2tlbignU1RBUicsICcoPHw+KT89P1xcXFxzKlxcXFwqJylcbi8vID49MC4wLjAgaXMgbGlrZSBhIHN0YXJcbmNyZWF0ZVRva2VuKCdHVEUwJywgJ15cXFxccyo+PVxcXFxzKjBcXFxcLjBcXFxcLjBcXFxccyokJylcbmNyZWF0ZVRva2VuKCdHVEUwUFJFJywgJ15cXFxccyo+PVxcXFxzKjBcXFxcLjBcXFxcLjAtMFxcXFxzKiQnKVxuIiwgIid1c2Ugc3RyaWN0J1xuXG4vLyBwYXJzZSBvdXQganVzdCB0aGUgb3B0aW9ucyB3ZSBjYXJlIGFib3V0XG5jb25zdCBsb29zZU9wdGlvbiA9IE9iamVjdC5mcmVlemUoeyBsb29zZTogdHJ1ZSB9KVxuY29uc3QgZW1wdHlPcHRzID0gT2JqZWN0LmZyZWV6ZSh7IH0pXG5jb25zdCBwYXJzZU9wdGlvbnMgPSBvcHRpb25zID0+IHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgcmV0dXJuIGVtcHR5T3B0c1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBsb29zZU9wdGlvblxuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnNcbn1cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VPcHRpb25zXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IG51bWVyaWMgPSAvXlswLTldKyQvXG5jb25zdCBjb21wYXJlSWRlbnRpZmllcnMgPSAoYSwgYikgPT4ge1xuICBpZiAodHlwZW9mIGEgPT09ICdudW1iZXInICYmIHR5cGVvZiBiID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBhID09PSBiID8gMCA6IGEgPCBiID8gLTEgOiAxXG4gIH1cblxuICBjb25zdCBhbnVtID0gbnVtZXJpYy50ZXN0KGEpXG4gIGNvbnN0IGJudW0gPSBudW1lcmljLnRlc3QoYilcblxuICBpZiAoYW51bSAmJiBibnVtKSB7XG4gICAgYSA9ICthXG4gICAgYiA9ICtiXG4gIH1cblxuICByZXR1cm4gYSA9PT0gYiA/IDBcbiAgICA6IChhbnVtICYmICFibnVtKSA/IC0xXG4gICAgOiAoYm51bSAmJiAhYW51bSkgPyAxXG4gICAgOiBhIDwgYiA/IC0xXG4gICAgOiAxXG59XG5cbmNvbnN0IHJjb21wYXJlSWRlbnRpZmllcnMgPSAoYSwgYikgPT4gY29tcGFyZUlkZW50aWZpZXJzKGIsIGEpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb21wYXJlSWRlbnRpZmllcnMsXG4gIHJjb21wYXJlSWRlbnRpZmllcnMsXG59XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGRlYnVnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZGVidWcnKVxuY29uc3QgeyBNQVhfTEVOR1RILCBNQVhfU0FGRV9JTlRFR0VSIH0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jb25zdGFudHMnKVxuY29uc3QgeyBzYWZlUmU6IHJlLCB0IH0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9yZScpXG5cbmNvbnN0IHBhcnNlT3B0aW9ucyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3BhcnNlLW9wdGlvbnMnKVxuY29uc3QgeyBjb21wYXJlSWRlbnRpZmllcnMgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lkZW50aWZpZXJzJylcbmNsYXNzIFNlbVZlciB7XG4gIGNvbnN0cnVjdG9yICh2ZXJzaW9uLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKVxuXG4gICAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpIHtcbiAgICAgIGlmICh2ZXJzaW9uLmxvb3NlID09PSAhIW9wdGlvbnMubG9vc2UgJiZcbiAgICAgICAgdmVyc2lvbi5pbmNsdWRlUHJlcmVsZWFzZSA9PT0gISFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSB7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbi52ZXJzaW9uXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgdmVyc2lvbi4gTXVzdCBiZSBhIHN0cmluZy4gR290IHR5cGUgXCIke3R5cGVvZiB2ZXJzaW9ufVwiLmApXG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgYHZlcnNpb24gaXMgbG9uZ2VyIHRoYW4gJHtNQVhfTEVOR1RIfSBjaGFyYWN0ZXJzYFxuICAgICAgKVxuICAgIH1cblxuICAgIGRlYnVnKCdTZW1WZXInLCB2ZXJzaW9uLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmxvb3NlID0gISFvcHRpb25zLmxvb3NlXG4gICAgLy8gdGhpcyBpc24ndCBhY3R1YWxseSByZWxldmFudCBmb3IgdmVyc2lvbnMsIGJ1dCBrZWVwIGl0IHNvIHRoYXQgd2VcbiAgICAvLyBkb24ndCBydW4gaW50byB0cm91YmxlIHBhc3NpbmcgdGhpcy5vcHRpb25zIGFyb3VuZC5cbiAgICB0aGlzLmluY2x1ZGVQcmVyZWxlYXNlID0gISFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlXG5cbiAgICBjb25zdCBtID0gdmVyc2lvbi50cmltKCkubWF0Y2gob3B0aW9ucy5sb29zZSA/IHJlW3QuTE9PU0VdIDogcmVbdC5GVUxMXSlcblxuICAgIGlmICghbSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBWZXJzaW9uOiAke3ZlcnNpb259YClcbiAgICB9XG5cbiAgICB0aGlzLnJhdyA9IHZlcnNpb25cblxuICAgIC8vIHRoZXNlIGFyZSBhY3R1YWxseSBudW1iZXJzXG4gICAgdGhpcy5tYWpvciA9ICttWzFdXG4gICAgdGhpcy5taW5vciA9ICttWzJdXG4gICAgdGhpcy5wYXRjaCA9ICttWzNdXG5cbiAgICBpZiAodGhpcy5tYWpvciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5tYWpvciA8IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWFqb3IgdmVyc2lvbicpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWlub3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWlub3IgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1pbm9yIHZlcnNpb24nKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhdGNoID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLnBhdGNoIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBwYXRjaCB2ZXJzaW9uJylcbiAgICB9XG5cbiAgICAvLyBudW1iZXJpZnkgYW55IHByZXJlbGVhc2UgbnVtZXJpYyBpZHNcbiAgICBpZiAoIW1bNF0pIHtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IG1bNF0uc3BsaXQoJy4nKS5tYXAoKGlkKSA9PiB7XG4gICAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoaWQpKSB7XG4gICAgICAgICAgY29uc3QgbnVtID0gK2lkXG4gICAgICAgICAgaWYgKG51bSA+PSAwICYmIG51bSA8IE1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuYnVpbGQgPSBtWzVdID8gbVs1XS5zcGxpdCgnLicpIDogW11cbiAgICB0aGlzLmZvcm1hdCgpXG4gIH1cblxuICBmb3JtYXQgKCkge1xuICAgIHRoaXMudmVyc2lvbiA9IGAke3RoaXMubWFqb3J9LiR7dGhpcy5taW5vcn0uJHt0aGlzLnBhdGNofWBcbiAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgdGhpcy52ZXJzaW9uICs9IGAtJHt0aGlzLnByZXJlbGVhc2Uuam9pbignLicpfWBcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmVyc2lvblxuICB9XG5cbiAgdG9TdHJpbmcgKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnNpb25cbiAgfVxuXG4gIGNvbXBhcmUgKG90aGVyKSB7XG4gICAgZGVidWcoJ1NlbVZlci5jb21wYXJlJywgdGhpcy52ZXJzaW9uLCB0aGlzLm9wdGlvbnMsIG90aGVyKVxuICAgIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSkge1xuICAgICAgaWYgKHR5cGVvZiBvdGhlciA9PT0gJ3N0cmluZycgJiYgb3RoZXIgPT09IHRoaXMudmVyc2lvbikge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfVxuICAgICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLm9wdGlvbnMpXG4gICAgfVxuXG4gICAgaWYgKG90aGVyLnZlcnNpb24gPT09IHRoaXMudmVyc2lvbikge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb21wYXJlTWFpbihvdGhlcikgfHwgdGhpcy5jb21wYXJlUHJlKG90aGVyKVxuICB9XG5cbiAgY29tcGFyZU1haW4gKG90aGVyKSB7XG4gICAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKSB7XG4gICAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMub3B0aW9ucylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYWpvciA8IG90aGVyLm1ham9yKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgaWYgKHRoaXMubWFqb3IgPiBvdGhlci5tYWpvcikge1xuICAgICAgcmV0dXJuIDFcbiAgICB9XG4gICAgaWYgKHRoaXMubWlub3IgPCBvdGhlci5taW5vcikge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIGlmICh0aGlzLm1pbm9yID4gb3RoZXIubWlub3IpIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuICAgIGlmICh0aGlzLnBhdGNoIDwgb3RoZXIucGF0Y2gpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBpZiAodGhpcy5wYXRjaCA+IG90aGVyLnBhdGNoKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG5cbiAgY29tcGFyZVByZSAob3RoZXIpIHtcbiAgICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpIHtcbiAgICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5vcHRpb25zKVxuICAgIH1cblxuICAgIC8vIE5PVCBoYXZpbmcgYSBwcmVyZWxlYXNlIGlzID4gaGF2aW5nIG9uZVxuICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfSBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiBvdGhlci5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICBsZXQgaSA9IDBcbiAgICBkbyB7XG4gICAgICBjb25zdCBhID0gdGhpcy5wcmVyZWxlYXNlW2ldXG4gICAgICBjb25zdCBiID0gb3RoZXIucHJlcmVsZWFzZVtpXVxuICAgICAgZGVidWcoJ3ByZXJlbGVhc2UgY29tcGFyZScsIGksIGEsIGIpXG4gICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfSBlbHNlIGlmIChiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICAgIH0gZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfSBlbHNlIGlmIChhID09PSBiKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpXG4gICAgICB9XG4gICAgfSB3aGlsZSAoKytpKVxuICB9XG5cbiAgY29tcGFyZUJ1aWxkIChvdGhlcikge1xuICAgIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSkge1xuICAgICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLm9wdGlvbnMpXG4gICAgfVxuXG4gICAgbGV0IGkgPSAwXG4gICAgZG8ge1xuICAgICAgY29uc3QgYSA9IHRoaXMuYnVpbGRbaV1cbiAgICAgIGNvbnN0IGIgPSBvdGhlci5idWlsZFtpXVxuICAgICAgZGVidWcoJ2J1aWxkIGNvbXBhcmUnLCBpLCBhLCBiKVxuICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCAmJiBiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH0gZWxzZSBpZiAoYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgICB9IGVsc2UgaWYgKGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH0gZWxzZSBpZiAoYSA9PT0gYikge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKVxuICAgICAgfVxuICAgIH0gd2hpbGUgKCsraSlcbiAgfVxuXG4gIC8vIHByZW1pbm9yIHdpbGwgYnVtcCB0aGUgdmVyc2lvbiB1cCB0byB0aGUgbmV4dCBtaW5vciByZWxlYXNlLCBhbmQgaW1tZWRpYXRlbHlcbiAgLy8gZG93biB0byBwcmUtcmVsZWFzZS4gcHJlbWFqb3IgYW5kIHByZXBhdGNoIHdvcmsgdGhlIHNhbWUgd2F5LlxuICBpbmMgKHJlbGVhc2UsIGlkZW50aWZpZXIsIGlkZW50aWZpZXJCYXNlKSB7XG4gICAgaWYgKHJlbGVhc2Uuc3RhcnRzV2l0aCgncHJlJykpIHtcbiAgICAgIGlmICghaWRlbnRpZmllciAmJiBpZGVudGlmaWVyQmFzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGluY3JlbWVudCBhcmd1bWVudDogaWRlbnRpZmllciBpcyBlbXB0eScpXG4gICAgICB9XG4gICAgICAvLyBBdm9pZCBhbiBpbnZhbGlkIHNlbXZlciByZXN1bHRzXG4gICAgICBpZiAoaWRlbnRpZmllcikge1xuICAgICAgICBjb25zdCBtYXRjaCA9IGAtJHtpZGVudGlmaWVyfWAubWF0Y2godGhpcy5vcHRpb25zLmxvb3NlID8gcmVbdC5QUkVSRUxFQVNFTE9PU0VdIDogcmVbdC5QUkVSRUxFQVNFXSlcbiAgICAgICAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSAhPT0gaWRlbnRpZmllcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCBpZGVudGlmaWVyOiAke2lkZW50aWZpZXJ9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAocmVsZWFzZSkge1xuICAgICAgY2FzZSAncHJlbWFqb3InOlxuICAgICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMFxuICAgICAgICB0aGlzLnBhdGNoID0gMFxuICAgICAgICB0aGlzLm1pbm9yID0gMFxuICAgICAgICB0aGlzLm1ham9yKytcbiAgICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIsIGlkZW50aWZpZXJCYXNlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncHJlbWlub3InOlxuICAgICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMFxuICAgICAgICB0aGlzLnBhdGNoID0gMFxuICAgICAgICB0aGlzLm1pbm9yKytcbiAgICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIsIGlkZW50aWZpZXJCYXNlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncHJlcGF0Y2gnOlxuICAgICAgICAvLyBJZiB0aGlzIGlzIGFscmVhZHkgYSBwcmVyZWxlYXNlLCBpdCB3aWxsIGJ1bXAgdG8gdGhlIG5leHQgdmVyc2lvblxuICAgICAgICAvLyBkcm9wIGFueSBwcmVyZWxlYXNlcyB0aGF0IG1pZ2h0IGFscmVhZHkgZXhpc3QsIHNpbmNlIHRoZXkgYXJlIG5vdFxuICAgICAgICAvLyByZWxldmFudCBhdCB0aGlzIHBvaW50LlxuICAgICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMFxuICAgICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyLCBpZGVudGlmaWVyQmFzZSlcbiAgICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIsIGlkZW50aWZpZXJCYXNlKVxuICAgICAgICBicmVha1xuICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIGEgbm9uLXByZXJlbGVhc2UgdmVyc2lvbiwgdGhpcyBhY3RzIHRoZSBzYW1lIGFzXG4gICAgICAvLyBwcmVwYXRjaC5cbiAgICAgIGNhc2UgJ3ByZXJlbGVhc2UnOlxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIsIGlkZW50aWZpZXJCYXNlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyLCBpZGVudGlmaWVyQmFzZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3JlbGVhc2UnOlxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdmVyc2lvbiAke3RoaXMucmF3fSBpcyBub3QgYSBwcmVyZWxlYXNlYClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdtYWpvcic6XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWFqb3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtYWpvciB2ZXJzaW9uLlxuICAgICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1ham9yLlxuICAgICAgICAvLyAxLjAuMC01IGJ1bXBzIHRvIDEuMC4wXG4gICAgICAgIC8vIDEuMS4wIGJ1bXBzIHRvIDIuMC4wXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLm1pbm9yICE9PSAwIHx8XG4gICAgICAgICAgdGhpcy5wYXRjaCAhPT0gMCB8fFxuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5tYWpvcisrXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5taW5vciA9IDBcbiAgICAgICAgdGhpcy5wYXRjaCA9IDBcbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21pbm9yJzpcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1taW5vciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1pbm9yIHZlcnNpb24uXG4gICAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWlub3IuXG4gICAgICAgIC8vIDEuMi4wLTUgYnVtcHMgdG8gMS4yLjBcbiAgICAgICAgLy8gMS4yLjEgYnVtcHMgdG8gMS4zLjBcbiAgICAgICAgaWYgKHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMubWlub3IrK1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwYXRjaCc6XG4gICAgICAgIC8vIElmIHRoaXMgaXMgbm90IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiwgaXQgd2lsbCBpbmNyZW1lbnQgdGhlIHBhdGNoLlxuICAgICAgICAvLyBJZiBpdCBpcyBhIHByZS1yZWxlYXNlIGl0IHdpbGwgYnVtcCB1cCB0byB0aGUgc2FtZSBwYXRjaCB2ZXJzaW9uLlxuICAgICAgICAvLyAxLjIuMC01IHBhdGNoZXMgdG8gMS4yLjBcbiAgICAgICAgLy8gMS4yLjAgcGF0Y2hlcyB0byAxLjIuMVxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMucGF0Y2grK1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdXG4gICAgICAgIGJyZWFrXG4gICAgICAvLyBUaGlzIHByb2JhYmx5IHNob3VsZG4ndCBiZSB1c2VkIHB1YmxpY2x5LlxuICAgICAgLy8gMS4wLjAgJ3ByZScgd291bGQgYmVjb21lIDEuMC4wLTAgd2hpY2ggaXMgdGhlIHdyb25nIGRpcmVjdGlvbi5cbiAgICAgIGNhc2UgJ3ByZSc6IHtcbiAgICAgICAgY29uc3QgYmFzZSA9IE51bWJlcihpZGVudGlmaWVyQmFzZSkgPyAxIDogMFxuXG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2Jhc2VdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGkgPSB0aGlzLnByZXJlbGVhc2UubGVuZ3RoXG4gICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJlcmVsZWFzZVtpXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlW2ldKytcbiAgICAgICAgICAgICAgaSA9IC0yXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgLy8gZGlkbid0IGluY3JlbWVudCBhbnl0aGluZ1xuICAgICAgICAgICAgaWYgKGlkZW50aWZpZXIgPT09IHRoaXMucHJlcmVsZWFzZS5qb2luKCcuJykgJiYgaWRlbnRpZmllckJhc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBpbmNyZW1lbnQgYXJndW1lbnQ6IGlkZW50aWZpZXIgYWxyZWFkeSBleGlzdHMnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlLnB1c2goYmFzZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgICAvLyAxLjIuMC1iZXRhLjEgYnVtcHMgdG8gMS4yLjAtYmV0YS4yLFxuICAgICAgICAgIC8vIDEuMi4wLWJldGEuZm9vYmx6IG9yIDEuMi4wLWJldGEgYnVtcHMgdG8gMS4yLjAtYmV0YS4wXG4gICAgICAgICAgbGV0IHByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgYmFzZV1cbiAgICAgICAgICBpZiAoaWRlbnRpZmllckJhc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcmVyZWxlYXNlID0gW2lkZW50aWZpZXJdXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb21wYXJlSWRlbnRpZmllcnModGhpcy5wcmVyZWxlYXNlWzBdLCBpZGVudGlmaWVyKSA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGlzTmFOKHRoaXMucHJlcmVsZWFzZVsxXSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gcHJlcmVsZWFzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBwcmVyZWxlYXNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgaW5jcmVtZW50IGFyZ3VtZW50OiAke3JlbGVhc2V9YClcbiAgICB9XG4gICAgdGhpcy5yYXcgPSB0aGlzLmZvcm1hdCgpXG4gICAgaWYgKHRoaXMuYnVpbGQubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJhdyArPSBgKyR7dGhpcy5idWlsZC5qb2luKCcuJyl9YFxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VtVmVyXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IHBhcnNlID0gKHZlcnNpb24sIG9wdGlvbnMsIHRocm93RXJyb3JzID0gZmFsc2UpID0+IHtcbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpIHtcbiAgICByZXR1cm4gdmVyc2lvblxuICB9XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgb3B0aW9ucylcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICBpZiAoIXRocm93RXJyb3JzKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICB0aHJvdyBlclxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcbmNvbnN0IHZhbGlkID0gKHZlcnNpb24sIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgdiA9IHBhcnNlKHZlcnNpb24sIG9wdGlvbnMpXG4gIHJldHVybiB2ID8gdi52ZXJzaW9uIDogbnVsbFxufVxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZFxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKVxuY29uc3QgY2xlYW4gPSAodmVyc2lvbiwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBzID0gcGFyc2UodmVyc2lvbi50cmltKCkucmVwbGFjZSgvXls9dl0rLywgJycpLCBvcHRpb25zKVxuICByZXR1cm4gcyA/IHMudmVyc2lvbiA6IG51bGxcbn1cbm1vZHVsZS5leHBvcnRzID0gY2xlYW5cbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuXG5jb25zdCBpbmMgPSAodmVyc2lvbiwgcmVsZWFzZSwgb3B0aW9ucywgaWRlbnRpZmllciwgaWRlbnRpZmllckJhc2UpID0+IHtcbiAgaWYgKHR5cGVvZiAob3B0aW9ucykgPT09ICdzdHJpbmcnKSB7XG4gICAgaWRlbnRpZmllckJhc2UgPSBpZGVudGlmaWVyXG4gICAgaWRlbnRpZmllciA9IG9wdGlvbnNcbiAgICBvcHRpb25zID0gdW5kZWZpbmVkXG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKFxuICAgICAgdmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlciA/IHZlcnNpb24udmVyc2lvbiA6IHZlcnNpb24sXG4gICAgICBvcHRpb25zXG4gICAgKS5pbmMocmVsZWFzZSwgaWRlbnRpZmllciwgaWRlbnRpZmllckJhc2UpLnZlcnNpb25cbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluY1xuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UuanMnKVxuXG5jb25zdCBkaWZmID0gKHZlcnNpb24xLCB2ZXJzaW9uMikgPT4ge1xuICBjb25zdCB2MSA9IHBhcnNlKHZlcnNpb24xLCBudWxsLCB0cnVlKVxuICBjb25zdCB2MiA9IHBhcnNlKHZlcnNpb24yLCBudWxsLCB0cnVlKVxuICBjb25zdCBjb21wYXJpc29uID0gdjEuY29tcGFyZSh2MilcblxuICBpZiAoY29tcGFyaXNvbiA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCB2MUhpZ2hlciA9IGNvbXBhcmlzb24gPiAwXG4gIGNvbnN0IGhpZ2hWZXJzaW9uID0gdjFIaWdoZXIgPyB2MSA6IHYyXG4gIGNvbnN0IGxvd1ZlcnNpb24gPSB2MUhpZ2hlciA/IHYyIDogdjFcbiAgY29uc3QgaGlnaEhhc1ByZSA9ICEhaGlnaFZlcnNpb24ucHJlcmVsZWFzZS5sZW5ndGhcbiAgY29uc3QgbG93SGFzUHJlID0gISFsb3dWZXJzaW9uLnByZXJlbGVhc2UubGVuZ3RoXG5cbiAgaWYgKGxvd0hhc1ByZSAmJiAhaGlnaEhhc1ByZSkge1xuICAgIC8vIEdvaW5nIGZyb20gcHJlcmVsZWFzZSAtPiBubyBwcmVyZWxlYXNlIHJlcXVpcmVzIHNvbWUgc3BlY2lhbCBjYXNpbmdcblxuICAgIC8vIElmIHRoZSBsb3cgdmVyc2lvbiBoYXMgb25seSBhIG1ham9yLCB0aGVuIGl0IHdpbGwgYWx3YXlzIGJlIGEgbWFqb3JcbiAgICAvLyBTb21lIGV4YW1wbGVzOlxuICAgIC8vIDEuMC4wLTEgLT4gMS4wLjBcbiAgICAvLyAxLjAuMC0xIC0+IDEuMS4xXG4gICAgLy8gMS4wLjAtMSAtPiAyLjAuMFxuICAgIGlmICghbG93VmVyc2lvbi5wYXRjaCAmJiAhbG93VmVyc2lvbi5taW5vcikge1xuICAgICAgcmV0dXJuICdtYWpvcidcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgbWFpbiBwYXJ0IGhhcyBubyBkaWZmZXJlbmNlXG4gICAgaWYgKGxvd1ZlcnNpb24uY29tcGFyZU1haW4oaGlnaFZlcnNpb24pID09PSAwKSB7XG4gICAgICBpZiAobG93VmVyc2lvbi5taW5vciAmJiAhbG93VmVyc2lvbi5wYXRjaCkge1xuICAgICAgICByZXR1cm4gJ21pbm9yJ1xuICAgICAgfVxuICAgICAgcmV0dXJuICdwYXRjaCdcbiAgICB9XG4gIH1cblxuICAvLyBhZGQgdGhlIGBwcmVgIHByZWZpeCBpZiB3ZSBhcmUgZ29pbmcgdG8gYSBwcmVyZWxlYXNlIHZlcnNpb25cbiAgY29uc3QgcHJlZml4ID0gaGlnaEhhc1ByZSA/ICdwcmUnIDogJydcblxuICBpZiAodjEubWFqb3IgIT09IHYyLm1ham9yKSB7XG4gICAgcmV0dXJuIHByZWZpeCArICdtYWpvcidcbiAgfVxuXG4gIGlmICh2MS5taW5vciAhPT0gdjIubWlub3IpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJ21pbm9yJ1xuICB9XG5cbiAgaWYgKHYxLnBhdGNoICE9PSB2Mi5wYXRjaCkge1xuICAgIHJldHVybiBwcmVmaXggKyAncGF0Y2gnXG4gIH1cblxuICAvLyBoaWdoIGFuZCBsb3cgYXJlIHByZXJlbGVhc2VzXG4gIHJldHVybiAncHJlcmVsZWFzZSdcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkaWZmXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IG1ham9yID0gKGEsIGxvb3NlKSA9PiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5tYWpvclxubW9kdWxlLmV4cG9ydHMgPSBtYWpvclxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBtaW5vciA9IChhLCBsb29zZSkgPT4gbmV3IFNlbVZlcihhLCBsb29zZSkubWlub3Jcbm1vZHVsZS5leHBvcnRzID0gbWlub3JcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgcGF0Y2ggPSAoYSwgbG9vc2UpID0+IG5ldyBTZW1WZXIoYSwgbG9vc2UpLnBhdGNoXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5jb25zdCBwcmVyZWxlYXNlID0gKHZlcnNpb24sIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgcGFyc2VkID0gcGFyc2UodmVyc2lvbiwgb3B0aW9ucylcbiAgcmV0dXJuIChwYXJzZWQgJiYgcGFyc2VkLnByZXJlbGVhc2UubGVuZ3RoKSA/IHBhcnNlZC5wcmVyZWxlYXNlIDogbnVsbFxufVxubW9kdWxlLmV4cG9ydHMgPSBwcmVyZWxlYXNlXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IGNvbXBhcmUgPSAoYSwgYiwgbG9vc2UpID0+XG4gIG5ldyBTZW1WZXIoYSwgbG9vc2UpLmNvbXBhcmUobmV3IFNlbVZlcihiLCBsb29zZSkpXG5cbm1vZHVsZS5leHBvcnRzID0gY29tcGFyZVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IHJjb21wYXJlID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGIsIGEsIGxvb3NlKVxubW9kdWxlLmV4cG9ydHMgPSByY29tcGFyZVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IGNvbXBhcmVMb29zZSA9IChhLCBiKSA9PiBjb21wYXJlKGEsIGIsIHRydWUpXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBhcmVMb29zZVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBjb21wYXJlQnVpbGQgPSAoYSwgYiwgbG9vc2UpID0+IHtcbiAgY29uc3QgdmVyc2lvbkEgPSBuZXcgU2VtVmVyKGEsIGxvb3NlKVxuICBjb25zdCB2ZXJzaW9uQiA9IG5ldyBTZW1WZXIoYiwgbG9vc2UpXG4gIHJldHVybiB2ZXJzaW9uQS5jb21wYXJlKHZlcnNpb25CKSB8fCB2ZXJzaW9uQS5jb21wYXJlQnVpbGQodmVyc2lvbkIpXG59XG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBhcmVCdWlsZFxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjb21wYXJlQnVpbGQgPSByZXF1aXJlKCcuL2NvbXBhcmUtYnVpbGQnKVxuY29uc3Qgc29ydCA9IChsaXN0LCBsb29zZSkgPT4gbGlzdC5zb3J0KChhLCBiKSA9PiBjb21wYXJlQnVpbGQoYSwgYiwgbG9vc2UpKVxubW9kdWxlLmV4cG9ydHMgPSBzb3J0XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNvbXBhcmVCdWlsZCA9IHJlcXVpcmUoJy4vY29tcGFyZS1idWlsZCcpXG5jb25zdCByc29ydCA9IChsaXN0LCBsb29zZSkgPT4gbGlzdC5zb3J0KChhLCBiKSA9PiBjb21wYXJlQnVpbGQoYiwgYSwgbG9vc2UpKVxubW9kdWxlLmV4cG9ydHMgPSByc29ydFxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IGd0ID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+IDBcbm1vZHVsZS5leHBvcnRzID0gZ3RcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBsdCA9IChhLCBiLCBsb29zZSkgPT4gY29tcGFyZShhLCBiLCBsb29zZSkgPCAwXG5tb2R1bGUuZXhwb3J0cyA9IGx0XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgZXEgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYSwgYiwgbG9vc2UpID09PSAwXG5tb2R1bGUuZXhwb3J0cyA9IGVxXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgbmVxID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSAhPT0gMFxubW9kdWxlLmV4cG9ydHMgPSBuZXFcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBndGUgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYSwgYiwgbG9vc2UpID49IDBcbm1vZHVsZS5leHBvcnRzID0gZ3RlXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgbHRlID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8PSAwXG5tb2R1bGUuZXhwb3J0cyA9IGx0ZVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBlcSA9IHJlcXVpcmUoJy4vZXEnKVxuY29uc3QgbmVxID0gcmVxdWlyZSgnLi9uZXEnKVxuY29uc3QgZ3QgPSByZXF1aXJlKCcuL2d0JylcbmNvbnN0IGd0ZSA9IHJlcXVpcmUoJy4vZ3RlJylcbmNvbnN0IGx0ID0gcmVxdWlyZSgnLi9sdCcpXG5jb25zdCBsdGUgPSByZXF1aXJlKCcuL2x0ZScpXG5cbmNvbnN0IGNtcCA9IChhLCBvcCwgYiwgbG9vc2UpID0+IHtcbiAgc3dpdGNoIChvcCkge1xuICAgIGNhc2UgJz09PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGEgPSBhLnZlcnNpb25cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYiA9IGIudmVyc2lvblxuICAgICAgfVxuICAgICAgcmV0dXJuIGEgPT09IGJcblxuICAgIGNhc2UgJyE9PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGEgPSBhLnZlcnNpb25cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYiA9IGIudmVyc2lvblxuICAgICAgfVxuICAgICAgcmV0dXJuIGEgIT09IGJcblxuICAgIGNhc2UgJyc6XG4gICAgY2FzZSAnPSc6XG4gICAgY2FzZSAnPT0nOlxuICAgICAgcmV0dXJuIGVxKGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnIT0nOlxuICAgICAgcmV0dXJuIG5lcShhLCBiLCBsb29zZSlcblxuICAgIGNhc2UgJz4nOlxuICAgICAgcmV0dXJuIGd0KGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnPj0nOlxuICAgICAgcmV0dXJuIGd0ZShhLCBiLCBsb29zZSlcblxuICAgIGNhc2UgJzwnOlxuICAgICAgcmV0dXJuIGx0KGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnPD0nOlxuICAgICAgcmV0dXJuIGx0ZShhLCBiLCBsb29zZSlcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIG9wZXJhdG9yOiAke29wfWApXG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gY21wXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5jb25zdCB7IHNhZmVSZTogcmUsIHQgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3JlJylcblxuY29uc3QgY29lcmNlID0gKHZlcnNpb24sIG9wdGlvbnMpID0+IHtcbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpIHtcbiAgICByZXR1cm4gdmVyc2lvblxuICB9XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnbnVtYmVyJykge1xuICAgIHZlcnNpb24gPSBTdHJpbmcodmVyc2lvbilcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICBsZXQgbWF0Y2ggPSBudWxsXG4gIGlmICghb3B0aW9ucy5ydGwpIHtcbiAgICBtYXRjaCA9IHZlcnNpb24ubWF0Y2gob3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSA/IHJlW3QuQ09FUkNFRlVMTF0gOiByZVt0LkNPRVJDRV0pXG4gIH0gZWxzZSB7XG4gICAgLy8gRmluZCB0aGUgcmlnaHQtbW9zdCBjb2VyY2libGUgc3RyaW5nIHRoYXQgZG9lcyBub3Qgc2hhcmVcbiAgICAvLyBhIHRlcm1pbnVzIHdpdGggYSBtb3JlIGxlZnQtd2FyZCBjb2VyY2libGUgc3RyaW5nLlxuICAgIC8vIEVnLCAnMS4yLjMuNCcgd2FudHMgdG8gY29lcmNlICcyLjMuNCcsIG5vdCAnMy40JyBvciAnNCdcbiAgICAvLyBXaXRoIGluY2x1ZGVQcmVyZWxlYXNlIG9wdGlvbiBzZXQsICcxLjIuMy40LXJjJyB3YW50cyB0byBjb2VyY2UgJzIuMy40LXJjJywgbm90ICcyLjMuNCdcbiAgICAvL1xuICAgIC8vIFdhbGsgdGhyb3VnaCB0aGUgc3RyaW5nIGNoZWNraW5nIHdpdGggYSAvZyByZWdleHBcbiAgICAvLyBNYW51YWxseSBzZXQgdGhlIGluZGV4IHNvIGFzIHRvIHBpY2sgdXAgb3ZlcmxhcHBpbmcgbWF0Y2hlcy5cbiAgICAvLyBTdG9wIHdoZW4gd2UgZ2V0IGEgbWF0Y2ggdGhhdCBlbmRzIGF0IHRoZSBzdHJpbmcgZW5kLCBzaW5jZSBub1xuICAgIC8vIGNvZXJjaWJsZSBzdHJpbmcgY2FuIGJlIG1vcmUgcmlnaHQtd2FyZCB3aXRob3V0IHRoZSBzYW1lIHRlcm1pbnVzLlxuICAgIGNvbnN0IGNvZXJjZVJ0bFJlZ2V4ID0gb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSA/IHJlW3QuQ09FUkNFUlRMRlVMTF0gOiByZVt0LkNPRVJDRVJUTF1cbiAgICBsZXQgbmV4dFxuICAgIHdoaWxlICgobmV4dCA9IGNvZXJjZVJ0bFJlZ2V4LmV4ZWModmVyc2lvbikpICYmXG4gICAgICAgICghbWF0Y2ggfHwgbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggIT09IHZlcnNpb24ubGVuZ3RoKVxuICAgICkge1xuICAgICAgaWYgKCFtYXRjaCB8fFxuICAgICAgICAgICAgbmV4dC5pbmRleCArIG5leHRbMF0ubGVuZ3RoICE9PSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCkge1xuICAgICAgICBtYXRjaCA9IG5leHRcbiAgICAgIH1cbiAgICAgIGNvZXJjZVJ0bFJlZ2V4Lmxhc3RJbmRleCA9IG5leHQuaW5kZXggKyBuZXh0WzFdLmxlbmd0aCArIG5leHRbMl0ubGVuZ3RoXG4gICAgfVxuICAgIC8vIGxlYXZlIGl0IGluIGEgY2xlYW4gc3RhdGVcbiAgICBjb2VyY2VSdGxSZWdleC5sYXN0SW5kZXggPSAtMVxuICB9XG5cbiAgaWYgKG1hdGNoID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IG1ham9yID0gbWF0Y2hbMl1cbiAgY29uc3QgbWlub3IgPSBtYXRjaFszXSB8fCAnMCdcbiAgY29uc3QgcGF0Y2ggPSBtYXRjaFs0XSB8fCAnMCdcbiAgY29uc3QgcHJlcmVsZWFzZSA9IG9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgJiYgbWF0Y2hbNV0gPyBgLSR7bWF0Y2hbNV19YCA6ICcnXG4gIGNvbnN0IGJ1aWxkID0gb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSAmJiBtYXRjaFs2XSA/IGArJHttYXRjaFs2XX1gIDogJydcblxuICByZXR1cm4gcGFyc2UoYCR7bWFqb3J9LiR7bWlub3J9LiR7cGF0Y2h9JHtwcmVyZWxlYXNlfSR7YnVpbGR9YCwgb3B0aW9ucylcbn1cbm1vZHVsZS5leHBvcnRzID0gY29lcmNlXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNsYXNzIExSVUNhY2hlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubWF4ID0gMTAwMFxuICAgIHRoaXMubWFwID0gbmV3IE1hcCgpXG4gIH1cblxuICBnZXQgKGtleSkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5tYXAuZ2V0KGtleSlcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW1vdmUgdGhlIGtleSBmcm9tIHRoZSBtYXAgYW5kIGFkZCBpdCB0byB0aGUgZW5kXG4gICAgICB0aGlzLm1hcC5kZWxldGUoa2V5KVxuICAgICAgdGhpcy5tYXAuc2V0KGtleSwgdmFsdWUpXG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gIH1cblxuICBkZWxldGUgKGtleSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5kZWxldGUoa2V5KVxuICB9XG5cbiAgc2V0IChrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgZGVsZXRlZCA9IHRoaXMuZGVsZXRlKGtleSlcblxuICAgIGlmICghZGVsZXRlZCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBJZiBjYWNoZSBpcyBmdWxsLCBkZWxldGUgdGhlIGxlYXN0IHJlY2VudGx5IHVzZWQgaXRlbVxuICAgICAgaWYgKHRoaXMubWFwLnNpemUgPj0gdGhpcy5tYXgpIHtcbiAgICAgICAgY29uc3QgZmlyc3RLZXkgPSB0aGlzLm1hcC5rZXlzKCkubmV4dCgpLnZhbHVlXG4gICAgICAgIHRoaXMuZGVsZXRlKGZpcnN0S2V5KVxuICAgICAgfVxuXG4gICAgICB0aGlzLm1hcC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTFJVQ2FjaGVcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU1BBQ0VfQ0hBUkFDVEVSUyA9IC9cXHMrL2dcblxuLy8gaG9pc3RlZCBjbGFzcyBmb3IgY3ljbGljIGRlcGVuZGVuY3lcbmNsYXNzIFJhbmdlIHtcbiAgY29uc3RydWN0b3IgKHJhbmdlLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKVxuXG4gICAgaWYgKHJhbmdlIGluc3RhbmNlb2YgUmFuZ2UpIHtcbiAgICAgIGlmIChcbiAgICAgICAgcmFuZ2UubG9vc2UgPT09ICEhb3B0aW9ucy5sb29zZSAmJlxuICAgICAgICByYW5nZS5pbmNsdWRlUHJlcmVsZWFzZSA9PT0gISFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLnJhdywgb3B0aW9ucylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmFuZ2UgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgICAvLyBqdXN0IHB1dCBpdCBpbiB0aGUgc2V0IGFuZCByZXR1cm5cbiAgICAgIHRoaXMucmF3ID0gcmFuZ2UudmFsdWVcbiAgICAgIHRoaXMuc2V0ID0gW1tyYW5nZV1dXG4gICAgICB0aGlzLmZvcm1hdHRlZCA9IHVuZGVmaW5lZFxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5sb29zZSA9ICEhb3B0aW9ucy5sb29zZVxuICAgIHRoaXMuaW5jbHVkZVByZXJlbGVhc2UgPSAhIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2VcblxuICAgIC8vIEZpcnN0IHJlZHVjZSBhbGwgd2hpdGVzcGFjZSBhcyBtdWNoIGFzIHBvc3NpYmxlIHNvIHdlIGRvIG5vdCBoYXZlIHRvIHJlbHlcbiAgICAvLyBvbiBwb3RlbnRpYWxseSBzbG93IHJlZ2V4ZXMgbGlrZSBcXHMqLiBUaGlzIGlzIHRoZW4gc3RvcmVkIGFuZCB1c2VkIGZvclxuICAgIC8vIGZ1dHVyZSBlcnJvciBtZXNzYWdlcyBhcyB3ZWxsLlxuICAgIHRoaXMucmF3ID0gcmFuZ2UudHJpbSgpLnJlcGxhY2UoU1BBQ0VfQ0hBUkFDVEVSUywgJyAnKVxuXG4gICAgLy8gRmlyc3QsIHNwbGl0IG9uIHx8XG4gICAgdGhpcy5zZXQgPSB0aGlzLnJhd1xuICAgICAgLnNwbGl0KCd8fCcpXG4gICAgICAvLyBtYXAgdGhlIHJhbmdlIHRvIGEgMmQgYXJyYXkgb2YgY29tcGFyYXRvcnNcbiAgICAgIC5tYXAociA9PiB0aGlzLnBhcnNlUmFuZ2Uoci50cmltKCkpKVxuICAgICAgLy8gdGhyb3cgb3V0IGFueSBjb21wYXJhdG9yIGxpc3RzIHRoYXQgYXJlIGVtcHR5XG4gICAgICAvLyB0aGlzIGdlbmVyYWxseSBtZWFucyB0aGF0IGl0IHdhcyBub3QgYSB2YWxpZCByYW5nZSwgd2hpY2ggaXMgYWxsb3dlZFxuICAgICAgLy8gaW4gbG9vc2UgbW9kZSwgYnV0IHdpbGwgc3RpbGwgdGhyb3cgaWYgdGhlIFdIT0xFIHJhbmdlIGlzIGludmFsaWQuXG4gICAgICAuZmlsdGVyKGMgPT4gYy5sZW5ndGgpXG5cbiAgICBpZiAoIXRoaXMuc2V0Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBTZW1WZXIgUmFuZ2U6ICR7dGhpcy5yYXd9YClcbiAgICB9XG5cbiAgICAvLyBpZiB3ZSBoYXZlIGFueSB0aGF0IGFyZSBub3QgdGhlIG51bGwgc2V0LCB0aHJvdyBvdXQgbnVsbCBzZXRzLlxuICAgIGlmICh0aGlzLnNldC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBrZWVwIHRoZSBmaXJzdCBvbmUsIGluIGNhc2UgdGhleSdyZSBhbGwgbnVsbCBzZXRzXG4gICAgICBjb25zdCBmaXJzdCA9IHRoaXMuc2V0WzBdXG4gICAgICB0aGlzLnNldCA9IHRoaXMuc2V0LmZpbHRlcihjID0+ICFpc051bGxTZXQoY1swXSkpXG4gICAgICBpZiAodGhpcy5zZXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuc2V0ID0gW2ZpcnN0XVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNldC5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYW55IHRoYXQgYXJlICosIHRoZW4gdGhlIHJhbmdlIGlzIGp1c3QgKlxuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgdGhpcy5zZXQpIHtcbiAgICAgICAgICBpZiAoYy5sZW5ndGggPT09IDEgJiYgaXNBbnkoY1swXSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0ID0gW2NdXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZm9ybWF0dGVkID0gdW5kZWZpbmVkXG4gIH1cblxuICBnZXQgcmFuZ2UgKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdHRlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmZvcm1hdHRlZCA9ICcnXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgIHRoaXMuZm9ybWF0dGVkICs9ICd8fCdcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wcyA9IHRoaXMuc2V0W2ldXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY29tcHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICBpZiAoayA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0dGVkICs9ICcgJ1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmZvcm1hdHRlZCArPSBjb21wc1trXS50b1N0cmluZygpLnRyaW0oKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcm1hdHRlZFxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5yYW5nZVxuICB9XG5cbiAgdG9TdHJpbmcgKCkge1xuICAgIHJldHVybiB0aGlzLnJhbmdlXG4gIH1cblxuICBwYXJzZVJhbmdlIChyYW5nZSkge1xuICAgIC8vIG1lbW9pemUgcmFuZ2UgcGFyc2luZyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgLy8gdGhpcyBpcyBhIHZlcnkgaG90IHBhdGgsIGFuZCBmdWxseSBkZXRlcm1pbmlzdGljLlxuICAgIGNvbnN0IG1lbW9PcHRzID1cbiAgICAgICh0aGlzLm9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgJiYgRkxBR19JTkNMVURFX1BSRVJFTEVBU0UpIHxcbiAgICAgICh0aGlzLm9wdGlvbnMubG9vc2UgJiYgRkxBR19MT09TRSlcbiAgICBjb25zdCBtZW1vS2V5ID0gbWVtb09wdHMgKyAnOicgKyByYW5nZVxuICAgIGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldChtZW1vS2V5KVxuICAgIGlmIChjYWNoZWQpIHtcbiAgICAgIHJldHVybiBjYWNoZWRcbiAgICB9XG5cbiAgICBjb25zdCBsb29zZSA9IHRoaXMub3B0aW9ucy5sb29zZVxuICAgIC8vIGAxLjIuMyAtIDEuMi40YCA9PiBgPj0xLjIuMyA8PTEuMi40YFxuICAgIGNvbnN0IGhyID0gbG9vc2UgPyByZVt0LkhZUEhFTlJBTkdFTE9PU0VdIDogcmVbdC5IWVBIRU5SQU5HRV1cbiAgICByYW5nZSA9IHJhbmdlLnJlcGxhY2UoaHIsIGh5cGhlblJlcGxhY2UodGhpcy5vcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSlcbiAgICBkZWJ1ZygnaHlwaGVuIHJlcGxhY2UnLCByYW5nZSlcblxuICAgIC8vIGA+IDEuMi4zIDwgMS4yLjVgID0+IGA+MS4yLjMgPDEuMi41YFxuICAgIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVt0LkNPTVBBUkFUT1JUUklNXSwgY29tcGFyYXRvclRyaW1SZXBsYWNlKVxuICAgIGRlYnVnKCdjb21wYXJhdG9yIHRyaW0nLCByYW5nZSlcblxuICAgIC8vIGB+IDEuMi4zYCA9PiBgfjEuMi4zYFxuICAgIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVt0LlRJTERFVFJJTV0sIHRpbGRlVHJpbVJlcGxhY2UpXG4gICAgZGVidWcoJ3RpbGRlIHRyaW0nLCByYW5nZSlcblxuICAgIC8vIGBeIDEuMi4zYCA9PiBgXjEuMi4zYFxuICAgIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVt0LkNBUkVUVFJJTV0sIGNhcmV0VHJpbVJlcGxhY2UpXG4gICAgZGVidWcoJ2NhcmV0IHRyaW0nLCByYW5nZSlcblxuICAgIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSByYW5nZSBpcyBjb21wbGV0ZWx5IHRyaW1tZWQgYW5kXG4gICAgLy8gcmVhZHkgdG8gYmUgc3BsaXQgaW50byBjb21wYXJhdG9ycy5cblxuICAgIGxldCByYW5nZUxpc3QgPSByYW5nZVxuICAgICAgLnNwbGl0KCcgJylcbiAgICAgIC5tYXAoY29tcCA9PiBwYXJzZUNvbXBhcmF0b3IoY29tcCwgdGhpcy5vcHRpb25zKSlcbiAgICAgIC5qb2luKCcgJylcbiAgICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgICAvLyA+PTAuMC4wIGlzIGVxdWl2YWxlbnQgdG8gKlxuICAgICAgLm1hcChjb21wID0+IHJlcGxhY2VHVEUwKGNvbXAsIHRoaXMub3B0aW9ucykpXG5cbiAgICBpZiAobG9vc2UpIHtcbiAgICAgIC8vIGluIGxvb3NlIG1vZGUsIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHZhbGlkIGNvbXBhcmF0b3JzXG4gICAgICByYW5nZUxpc3QgPSByYW5nZUxpc3QuZmlsdGVyKGNvbXAgPT4ge1xuICAgICAgICBkZWJ1ZygnbG9vc2UgaW52YWxpZCBmaWx0ZXInLCBjb21wLCB0aGlzLm9wdGlvbnMpXG4gICAgICAgIHJldHVybiAhIWNvbXAubWF0Y2gocmVbdC5DT01QQVJBVE9STE9PU0VdKVxuICAgICAgfSlcbiAgICB9XG4gICAgZGVidWcoJ3JhbmdlIGxpc3QnLCByYW5nZUxpc3QpXG5cbiAgICAvLyBpZiBhbnkgY29tcGFyYXRvcnMgYXJlIHRoZSBudWxsIHNldCwgdGhlbiByZXBsYWNlIHdpdGggSlVTVCBudWxsIHNldFxuICAgIC8vIGlmIG1vcmUgdGhhbiBvbmUgY29tcGFyYXRvciwgcmVtb3ZlIGFueSAqIGNvbXBhcmF0b3JzXG4gICAgLy8gYWxzbywgZG9uJ3QgaW5jbHVkZSB0aGUgc2FtZSBjb21wYXJhdG9yIG1vcmUgdGhhbiBvbmNlXG4gICAgY29uc3QgcmFuZ2VNYXAgPSBuZXcgTWFwKClcbiAgICBjb25zdCBjb21wYXJhdG9ycyA9IHJhbmdlTGlzdC5tYXAoY29tcCA9PiBuZXcgQ29tcGFyYXRvcihjb21wLCB0aGlzLm9wdGlvbnMpKVxuICAgIGZvciAoY29uc3QgY29tcCBvZiBjb21wYXJhdG9ycykge1xuICAgICAgaWYgKGlzTnVsbFNldChjb21wKSkge1xuICAgICAgICByZXR1cm4gW2NvbXBdXG4gICAgICB9XG4gICAgICByYW5nZU1hcC5zZXQoY29tcC52YWx1ZSwgY29tcClcbiAgICB9XG4gICAgaWYgKHJhbmdlTWFwLnNpemUgPiAxICYmIHJhbmdlTWFwLmhhcygnJykpIHtcbiAgICAgIHJhbmdlTWFwLmRlbGV0ZSgnJylcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBbLi4ucmFuZ2VNYXAudmFsdWVzKCldXG4gICAgY2FjaGUuc2V0KG1lbW9LZXksIHJlc3VsdClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBpbnRlcnNlY3RzIChyYW5nZSwgb3B0aW9ucykge1xuICAgIGlmICghKHJhbmdlIGluc3RhbmNlb2YgUmFuZ2UpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhIFJhbmdlIGlzIHJlcXVpcmVkJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zZXQuc29tZSgodGhpc0NvbXBhcmF0b3JzKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBpc1NhdGlzZmlhYmxlKHRoaXNDb21wYXJhdG9ycywgb3B0aW9ucykgJiZcbiAgICAgICAgcmFuZ2Uuc2V0LnNvbWUoKHJhbmdlQ29tcGFyYXRvcnMpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgaXNTYXRpc2ZpYWJsZShyYW5nZUNvbXBhcmF0b3JzLCBvcHRpb25zKSAmJlxuICAgICAgICAgICAgdGhpc0NvbXBhcmF0b3JzLmV2ZXJ5KCh0aGlzQ29tcGFyYXRvcikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gcmFuZ2VDb21wYXJhdG9ycy5ldmVyeSgocmFuZ2VDb21wYXJhdG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNDb21wYXJhdG9yLmludGVyc2VjdHMocmFuZ2VDb21wYXJhdG9yLCBvcHRpb25zKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIC8vIGlmIEFOWSBvZiB0aGUgc2V0cyBtYXRjaCBBTEwgb2YgaXRzIGNvbXBhcmF0b3JzLCB0aGVuIHBhc3NcbiAgdGVzdCAodmVyc2lvbikge1xuICAgIGlmICghdmVyc2lvbikge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5vcHRpb25zKVxuICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNldC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRlc3RTZXQodGhpcy5zZXRbaV0sIHZlcnNpb24sIHRoaXMub3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSYW5nZVxuXG5jb25zdCBMUlUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9scnVjYWNoZScpXG5jb25zdCBjYWNoZSA9IG5ldyBMUlUoKVxuXG5jb25zdCBwYXJzZU9wdGlvbnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9wYXJzZS1vcHRpb25zJylcbmNvbnN0IENvbXBhcmF0b3IgPSByZXF1aXJlKCcuL2NvbXBhcmF0b3InKVxuY29uc3QgZGVidWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9kZWJ1ZycpXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuL3NlbXZlcicpXG5jb25zdCB7XG4gIHNhZmVSZTogcmUsXG4gIHQsXG4gIGNvbXBhcmF0b3JUcmltUmVwbGFjZSxcbiAgdGlsZGVUcmltUmVwbGFjZSxcbiAgY2FyZXRUcmltUmVwbGFjZSxcbn0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9yZScpXG5jb25zdCB7IEZMQUdfSU5DTFVERV9QUkVSRUxFQVNFLCBGTEFHX0xPT1NFIH0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jb25zdGFudHMnKVxuXG5jb25zdCBpc051bGxTZXQgPSBjID0+IGMudmFsdWUgPT09ICc8MC4wLjAtMCdcbmNvbnN0IGlzQW55ID0gYyA9PiBjLnZhbHVlID09PSAnJ1xuXG4vLyB0YWtlIGEgc2V0IG9mIGNvbXBhcmF0b3JzIGFuZCBkZXRlcm1pbmUgd2hldGhlciB0aGVyZVxuLy8gZXhpc3RzIGEgdmVyc2lvbiB3aGljaCBjYW4gc2F0aXNmeSBpdFxuY29uc3QgaXNTYXRpc2ZpYWJsZSA9IChjb21wYXJhdG9ycywgb3B0aW9ucykgPT4ge1xuICBsZXQgcmVzdWx0ID0gdHJ1ZVxuICBjb25zdCByZW1haW5pbmdDb21wYXJhdG9ycyA9IGNvbXBhcmF0b3JzLnNsaWNlKClcbiAgbGV0IHRlc3RDb21wYXJhdG9yID0gcmVtYWluaW5nQ29tcGFyYXRvcnMucG9wKClcblxuICB3aGlsZSAocmVzdWx0ICYmIHJlbWFpbmluZ0NvbXBhcmF0b3JzLmxlbmd0aCkge1xuICAgIHJlc3VsdCA9IHJlbWFpbmluZ0NvbXBhcmF0b3JzLmV2ZXJ5KChvdGhlckNvbXBhcmF0b3IpID0+IHtcbiAgICAgIHJldHVybiB0ZXN0Q29tcGFyYXRvci5pbnRlcnNlY3RzKG90aGVyQ29tcGFyYXRvciwgb3B0aW9ucylcbiAgICB9KVxuXG4gICAgdGVzdENvbXBhcmF0b3IgPSByZW1haW5pbmdDb21wYXJhdG9ycy5wb3AoKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vLyBjb21wcmlzZWQgb2YgeHJhbmdlcywgdGlsZGVzLCBzdGFycywgYW5kIGd0bHQncyBhdCB0aGlzIHBvaW50LlxuLy8gYWxyZWFkeSByZXBsYWNlZCB0aGUgaHlwaGVuIHJhbmdlc1xuLy8gdHVybiBpbnRvIGEgc2V0IG9mIEpVU1QgY29tcGFyYXRvcnMuXG5jb25zdCBwYXJzZUNvbXBhcmF0b3IgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBjb21wID0gY29tcC5yZXBsYWNlKHJlW3QuQlVJTERdLCAnJylcbiAgZGVidWcoJ2NvbXAnLCBjb21wLCBvcHRpb25zKVxuICBjb21wID0gcmVwbGFjZUNhcmV0cyhjb21wLCBvcHRpb25zKVxuICBkZWJ1ZygnY2FyZXQnLCBjb21wKVxuICBjb21wID0gcmVwbGFjZVRpbGRlcyhjb21wLCBvcHRpb25zKVxuICBkZWJ1ZygndGlsZGVzJywgY29tcClcbiAgY29tcCA9IHJlcGxhY2VYUmFuZ2VzKGNvbXAsIG9wdGlvbnMpXG4gIGRlYnVnKCd4cmFuZ2UnLCBjb21wKVxuICBjb21wID0gcmVwbGFjZVN0YXJzKGNvbXAsIG9wdGlvbnMpXG4gIGRlYnVnKCdzdGFycycsIGNvbXApXG4gIHJldHVybiBjb21wXG59XG5cbmNvbnN0IGlzWCA9IGlkID0+ICFpZCB8fCBpZC50b0xvd2VyQ2FzZSgpID09PSAneCcgfHwgaWQgPT09ICcqJ1xuXG4vLyB+LCB+PiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIH4yLCB+Mi54LCB+Mi54LngsIH4+Miwgfj4yLnggfj4yLngueCAtLT4gPj0yLjAuMCA8My4wLjAtMFxuLy8gfjIuMCwgfjIuMC54LCB+PjIuMCwgfj4yLjAueCAtLT4gPj0yLjAuMCA8Mi4xLjAtMFxuLy8gfjEuMiwgfjEuMi54LCB+PjEuMiwgfj4xLjIueCAtLT4gPj0xLjIuMCA8MS4zLjAtMFxuLy8gfjEuMi4zLCB+PjEuMi4zIC0tPiA+PTEuMi4zIDwxLjMuMC0wXG4vLyB+MS4yLjAsIH4+MS4yLjAgLS0+ID49MS4yLjAgPDEuMy4wLTBcbi8vIH4wLjAuMSAtLT4gPj0wLjAuMSA8MC4xLjAtMFxuY29uc3QgcmVwbGFjZVRpbGRlcyA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIHJldHVybiBjb21wXG4gICAgLnRyaW0oKVxuICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgLm1hcCgoYykgPT4gcmVwbGFjZVRpbGRlKGMsIG9wdGlvbnMpKVxuICAgIC5qb2luKCcgJylcbn1cblxuY29uc3QgcmVwbGFjZVRpbGRlID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgciA9IG9wdGlvbnMubG9vc2UgPyByZVt0LlRJTERFTE9PU0VdIDogcmVbdC5USUxERV1cbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCAoXywgTSwgbSwgcCwgcHIpID0+IHtcbiAgICBkZWJ1ZygndGlsZGUnLCBjb21wLCBfLCBNLCBtLCBwLCBwcilcbiAgICBsZXQgcmV0XG5cbiAgICBpZiAoaXNYKE0pKSB7XG4gICAgICByZXQgPSAnJ1xuICAgIH0gZWxzZSBpZiAoaXNYKG0pKSB7XG4gICAgICByZXQgPSBgPj0ke019LjAuMCA8JHsrTSArIDF9LjAuMC0wYFxuICAgIH0gZWxzZSBpZiAoaXNYKHApKSB7XG4gICAgICAvLyB+MS4yID09ID49MS4yLjAgPDEuMy4wLTBcbiAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4wIDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgfSBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VUaWxkZSBwcicsIHByKVxuICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cH0tJHtwclxuICAgICAgfSA8JHtNfS4keyttICsgMX0uMC0wYFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB+MS4yLjMgPT0gPj0xLjIuMyA8MS4zLjAtMFxuICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cFxuICAgICAgfSA8JHtNfS4keyttICsgMX0uMC0wYFxuICAgIH1cblxuICAgIGRlYnVnKCd0aWxkZSByZXR1cm4nLCByZXQpXG4gICAgcmV0dXJuIHJldFxuICB9KVxufVxuXG4vLyBeIC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gXjIsIF4yLngsIF4yLngueCAtLT4gPj0yLjAuMCA8My4wLjAtMFxuLy8gXjIuMCwgXjIuMC54IC0tPiA+PTIuMC4wIDwzLjAuMC0wXG4vLyBeMS4yLCBeMS4yLnggLS0+ID49MS4yLjAgPDIuMC4wLTBcbi8vIF4xLjIuMyAtLT4gPj0xLjIuMyA8Mi4wLjAtMFxuLy8gXjEuMi4wIC0tPiA+PTEuMi4wIDwyLjAuMC0wXG4vLyBeMC4wLjEgLS0+ID49MC4wLjEgPDAuMC4yLTBcbi8vIF4wLjEuMCAtLT4gPj0wLjEuMCA8MC4yLjAtMFxuY29uc3QgcmVwbGFjZUNhcmV0cyA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIHJldHVybiBjb21wXG4gICAgLnRyaW0oKVxuICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgLm1hcCgoYykgPT4gcmVwbGFjZUNhcmV0KGMsIG9wdGlvbnMpKVxuICAgIC5qb2luKCcgJylcbn1cblxuY29uc3QgcmVwbGFjZUNhcmV0ID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCwgb3B0aW9ucylcbiAgY29uc3QgciA9IG9wdGlvbnMubG9vc2UgPyByZVt0LkNBUkVUTE9PU0VdIDogcmVbdC5DQVJFVF1cbiAgY29uc3QgeiA9IG9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgPyAnLTAnIDogJydcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCAoXywgTSwgbSwgcCwgcHIpID0+IHtcbiAgICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBfLCBNLCBtLCBwLCBwcilcbiAgICBsZXQgcmV0XG5cbiAgICBpZiAoaXNYKE0pKSB7XG4gICAgICByZXQgPSAnJ1xuICAgIH0gZWxzZSBpZiAoaXNYKG0pKSB7XG4gICAgICByZXQgPSBgPj0ke019LjAuMCR7en0gPCR7K00gKyAxfS4wLjAtMGBcbiAgICB9IGVsc2UgaWYgKGlzWChwKSkge1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uMCR7en0gPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4wJHt6fSA8JHsrTSArIDF9LjAuMC0wYFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlQ2FyZXQgcHInLCBwcilcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJykge1xuICAgICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3B9LSR7cHJcbiAgICAgICAgICB9IDwke019LiR7bX0uJHsrcCArIDF9LTBgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cH0tJHtwclxuICAgICAgICAgIH0gPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cH0tJHtwclxuICAgICAgICB9IDwkeytNICsgMX0uMC4wLTBgXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdubyBwcicpXG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpIHtcbiAgICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwXG4gICAgICAgICAgfSR7en0gPCR7TX0uJHttfS4keytwICsgMX0tMGBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwXG4gICAgICAgICAgfSR7en0gPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cFxuICAgICAgICB9IDwkeytNICsgMX0uMC4wLTBgXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVidWcoJ2NhcmV0IHJldHVybicsIHJldClcbiAgICByZXR1cm4gcmV0XG4gIH0pXG59XG5cbmNvbnN0IHJlcGxhY2VYUmFuZ2VzID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgZGVidWcoJ3JlcGxhY2VYUmFuZ2VzJywgY29tcCwgb3B0aW9ucylcbiAgcmV0dXJuIGNvbXBcbiAgICAuc3BsaXQoL1xccysvKVxuICAgIC5tYXAoKGMpID0+IHJlcGxhY2VYUmFuZ2UoYywgb3B0aW9ucykpXG4gICAgLmpvaW4oJyAnKVxufVxuXG5jb25zdCByZXBsYWNlWFJhbmdlID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgY29tcCA9IGNvbXAudHJpbSgpXG4gIGNvbnN0IHIgPSBvcHRpb25zLmxvb3NlID8gcmVbdC5YUkFOR0VMT09TRV0gOiByZVt0LlhSQU5HRV1cbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCAocmV0LCBndGx0LCBNLCBtLCBwLCBwcikgPT4ge1xuICAgIGRlYnVnKCd4UmFuZ2UnLCBjb21wLCByZXQsIGd0bHQsIE0sIG0sIHAsIHByKVxuICAgIGNvbnN0IHhNID0gaXNYKE0pXG4gICAgY29uc3QgeG0gPSB4TSB8fCBpc1gobSlcbiAgICBjb25zdCB4cCA9IHhtIHx8IGlzWChwKVxuICAgIGNvbnN0IGFueVggPSB4cFxuXG4gICAgaWYgKGd0bHQgPT09ICc9JyAmJiBhbnlYKSB7XG4gICAgICBndGx0ID0gJydcbiAgICB9XG5cbiAgICAvLyBpZiB3ZSdyZSBpbmNsdWRpbmcgcHJlcmVsZWFzZXMgaW4gdGhlIG1hdGNoLCB0aGVuIHdlIG5lZWRcbiAgICAvLyB0byBmaXggdGhpcyB0byAtMCwgdGhlIGxvd2VzdCBwb3NzaWJsZSBwcmVyZWxlYXNlIHZhbHVlXG4gICAgcHIgPSBvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlID8gJy0wJyA6ICcnXG5cbiAgICBpZiAoeE0pIHtcbiAgICAgIGlmIChndGx0ID09PSAnPicgfHwgZ3RsdCA9PT0gJzwnKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgYWxsb3dlZFxuICAgICAgICByZXQgPSAnPDAuMC4wLTAnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGZvcmJpZGRlblxuICAgICAgICByZXQgPSAnKidcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGd0bHQgJiYgYW55WCkge1xuICAgICAgLy8gd2Uga25vdyBwYXRjaCBpcyBhbiB4LCBiZWNhdXNlIHdlIGhhdmUgYW55IHggYXQgYWxsLlxuICAgICAgLy8gcmVwbGFjZSBYIHdpdGggMFxuICAgICAgaWYgKHhtKSB7XG4gICAgICAgIG0gPSAwXG4gICAgICB9XG4gICAgICBwID0gMFxuXG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nKSB7XG4gICAgICAgIC8vID4xID0+ID49Mi4wLjBcbiAgICAgICAgLy8gPjEuMiA9PiA+PTEuMy4wXG4gICAgICAgIGd0bHQgPSAnPj0nXG4gICAgICAgIGlmICh4bSkge1xuICAgICAgICAgIE0gPSArTSArIDFcbiAgICAgICAgICBtID0gMFxuICAgICAgICAgIHAgPSAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbSA9ICttICsgMVxuICAgICAgICAgIHAgPSAwXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ3RsdCA9PT0gJzw9Jykge1xuICAgICAgICAvLyA8PTAuNy54IGlzIGFjdHVhbGx5IDwwLjguMCwgc2luY2UgYW55IDAuNy54IHNob3VsZFxuICAgICAgICAvLyBwYXNzLiAgU2ltaWxhcmx5LCA8PTcueCBpcyBhY3R1YWxseSA8OC4wLjAsIGV0Yy5cbiAgICAgICAgZ3RsdCA9ICc8J1xuICAgICAgICBpZiAoeG0pIHtcbiAgICAgICAgICBNID0gK00gKyAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbSA9ICttICsgMVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChndGx0ID09PSAnPCcpIHtcbiAgICAgICAgcHIgPSAnLTAnXG4gICAgICB9XG5cbiAgICAgIHJldCA9IGAke2d0bHQgKyBNfS4ke219LiR7cH0ke3ByfWBcbiAgICB9IGVsc2UgaWYgKHhtKSB7XG4gICAgICByZXQgPSBgPj0ke019LjAuMCR7cHJ9IDwkeytNICsgMX0uMC4wLTBgXG4gICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgcmV0ID0gYD49JHtNfS4ke219LjAke3ByXG4gICAgICB9IDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgfVxuXG4gICAgZGVidWcoJ3hSYW5nZSByZXR1cm4nLCByZXQpXG5cbiAgICByZXR1cm4gcmV0XG4gIH0pXG59XG5cbi8vIEJlY2F1c2UgKiBpcyBBTkQtZWQgd2l0aCBldmVyeXRoaW5nIGVsc2UgaW4gdGhlIGNvbXBhcmF0b3IsXG4vLyBhbmQgJycgbWVhbnMgXCJhbnkgdmVyc2lvblwiLCBqdXN0IHJlbW92ZSB0aGUgKnMgZW50aXJlbHkuXG5jb25zdCByZXBsYWNlU3RhcnMgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBkZWJ1ZygncmVwbGFjZVN0YXJzJywgY29tcCwgb3B0aW9ucylcbiAgLy8gTG9vc2VuZXNzIGlzIGlnbm9yZWQgaGVyZS4gIHN0YXIgaXMgYWx3YXlzIGFzIGxvb3NlIGFzIGl0IGdldHMhXG4gIHJldHVybiBjb21wXG4gICAgLnRyaW0oKVxuICAgIC5yZXBsYWNlKHJlW3QuU1RBUl0sICcnKVxufVxuXG5jb25zdCByZXBsYWNlR1RFMCA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIGRlYnVnKCdyZXBsYWNlR1RFMCcsIGNvbXAsIG9wdGlvbnMpXG4gIHJldHVybiBjb21wXG4gICAgLnRyaW0oKVxuICAgIC5yZXBsYWNlKHJlW29wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgPyB0LkdURTBQUkUgOiB0LkdURTBdLCAnJylcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdG8gc3RyaW5nLnJlcGxhY2UocmVbdC5IWVBIRU5SQU5HRV0pXG4vLyBNLCBtLCBwYXRjaCwgcHJlcmVsZWFzZSwgYnVpbGRcbi8vIDEuMiAtIDMuNC41ID0+ID49MS4yLjAgPD0zLjQuNVxuLy8gMS4yLjMgLSAzLjQgPT4gPj0xLjIuMCA8My41LjAtMCBBbnkgMy40Lnggd2lsbCBkb1xuLy8gMS4yIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wLTBcbi8vIFRPRE8gYnVpbGQ/XG5jb25zdCBoeXBoZW5SZXBsYWNlID0gaW5jUHIgPT4gKCQwLFxuICBmcm9tLCBmTSwgZm0sIGZwLCBmcHIsIGZiLFxuICB0bywgdE0sIHRtLCB0cCwgdHByKSA9PiB7XG4gIGlmIChpc1goZk0pKSB7XG4gICAgZnJvbSA9ICcnXG4gIH0gZWxzZSBpZiAoaXNYKGZtKSkge1xuICAgIGZyb20gPSBgPj0ke2ZNfS4wLjAke2luY1ByID8gJy0wJyA6ICcnfWBcbiAgfSBlbHNlIGlmIChpc1goZnApKSB7XG4gICAgZnJvbSA9IGA+PSR7Zk19LiR7Zm19LjAke2luY1ByID8gJy0wJyA6ICcnfWBcbiAgfSBlbHNlIGlmIChmcHIpIHtcbiAgICBmcm9tID0gYD49JHtmcm9tfWBcbiAgfSBlbHNlIHtcbiAgICBmcm9tID0gYD49JHtmcm9tfSR7aW5jUHIgPyAnLTAnIDogJyd9YFxuICB9XG5cbiAgaWYgKGlzWCh0TSkpIHtcbiAgICB0byA9ICcnXG4gIH0gZWxzZSBpZiAoaXNYKHRtKSkge1xuICAgIHRvID0gYDwkeyt0TSArIDF9LjAuMC0wYFxuICB9IGVsc2UgaWYgKGlzWCh0cCkpIHtcbiAgICB0byA9IGA8JHt0TX0uJHsrdG0gKyAxfS4wLTBgXG4gIH0gZWxzZSBpZiAodHByKSB7XG4gICAgdG8gPSBgPD0ke3RNfS4ke3RtfS4ke3RwfS0ke3Rwcn1gXG4gIH0gZWxzZSBpZiAoaW5jUHIpIHtcbiAgICB0byA9IGA8JHt0TX0uJHt0bX0uJHsrdHAgKyAxfS0wYFxuICB9IGVsc2Uge1xuICAgIHRvID0gYDw9JHt0b31gXG4gIH1cblxuICByZXR1cm4gYCR7ZnJvbX0gJHt0b31gLnRyaW0oKVxufVxuXG5jb25zdCB0ZXN0U2V0ID0gKHNldCwgdmVyc2lvbiwgb3B0aW9ucykgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICghc2V0W2ldLnRlc3QodmVyc2lvbikpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGlmICh2ZXJzaW9uLnByZXJlbGVhc2UubGVuZ3RoICYmICFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSB7XG4gICAgLy8gRmluZCB0aGUgc2V0IG9mIHZlcnNpb25zIHRoYXQgYXJlIGFsbG93ZWQgdG8gaGF2ZSBwcmVyZWxlYXNlc1xuICAgIC8vIEZvciBleGFtcGxlLCBeMS4yLjMtcHIuMSBkZXN1Z2FycyB0byA+PTEuMi4zLXByLjEgPDIuMC4wXG4gICAgLy8gVGhhdCBzaG91bGQgYWxsb3cgYDEuMi4zLXByLjJgIHRvIHBhc3MuXG4gICAgLy8gSG93ZXZlciwgYDEuMi40LWFscGhhLm5vdHJlYWR5YCBzaG91bGQgTk9UIGJlIGFsbG93ZWQsXG4gICAgLy8gZXZlbiB0aG91Z2ggaXQncyB3aXRoaW4gdGhlIHJhbmdlIHNldCBieSB0aGUgY29tcGFyYXRvcnMuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYnVnKHNldFtpXS5zZW12ZXIpXG4gICAgICBpZiAoc2V0W2ldLnNlbXZlciA9PT0gQ29tcGFyYXRvci5BTlkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKHNldFtpXS5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGFsbG93ZWQgPSBzZXRbaV0uc2VtdmVyXG4gICAgICAgIGlmIChhbGxvd2VkLm1ham9yID09PSB2ZXJzaW9uLm1ham9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLm1pbm9yID09PSB2ZXJzaW9uLm1pbm9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLnBhdGNoID09PSB2ZXJzaW9uLnBhdGNoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFZlcnNpb24gaGFzIGEgLXByZSwgYnV0IGl0J3Mgbm90IG9uZSBvZiB0aGUgb25lcyB3ZSBsaWtlLlxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgQU5ZID0gU3ltYm9sKCdTZW1WZXIgQU5ZJylcbi8vIGhvaXN0ZWQgY2xhc3MgZm9yIGN5Y2xpYyBkZXBlbmRlbmN5XG5jbGFzcyBDb21wYXJhdG9yIHtcbiAgc3RhdGljIGdldCBBTlkgKCkge1xuICAgIHJldHVybiBBTllcbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChjb21wLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKVxuXG4gICAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgICBpZiAoY29tcC5sb29zZSA9PT0gISFvcHRpb25zLmxvb3NlKSB7XG4gICAgICAgIHJldHVybiBjb21wXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wID0gY29tcC52YWx1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXAgPSBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLmpvaW4oJyAnKVxuICAgIGRlYnVnKCdjb21wYXJhdG9yJywgY29tcCwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5sb29zZSA9ICEhb3B0aW9ucy5sb29zZVxuICAgIHRoaXMucGFyc2UoY29tcClcblxuICAgIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICB0aGlzLnZhbHVlID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMub3BlcmF0b3IgKyB0aGlzLnNlbXZlci52ZXJzaW9uXG4gICAgfVxuXG4gICAgZGVidWcoJ2NvbXAnLCB0aGlzKVxuICB9XG5cbiAgcGFyc2UgKGNvbXApIHtcbiAgICBjb25zdCByID0gdGhpcy5vcHRpb25zLmxvb3NlID8gcmVbdC5DT01QQVJBVE9STE9PU0VdIDogcmVbdC5DT01QQVJBVE9SXVxuICAgIGNvbnN0IG0gPSBjb21wLm1hdGNoKHIpXG5cbiAgICBpZiAoIW0pIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgY29tcGFyYXRvcjogJHtjb21wfWApXG4gICAgfVxuXG4gICAgdGhpcy5vcGVyYXRvciA9IG1bMV0gIT09IHVuZGVmaW5lZCA/IG1bMV0gOiAnJ1xuICAgIGlmICh0aGlzLm9wZXJhdG9yID09PSAnPScpIHtcbiAgICAgIHRoaXMub3BlcmF0b3IgPSAnJ1xuICAgIH1cblxuICAgIC8vIGlmIGl0IGxpdGVyYWxseSBpcyBqdXN0ICc+JyBvciAnJyB0aGVuIGFsbG93IGFueXRoaW5nLlxuICAgIGlmICghbVsyXSkge1xuICAgICAgdGhpcy5zZW12ZXIgPSBBTllcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZW12ZXIgPSBuZXcgU2VtVmVyKG1bMl0sIHRoaXMub3B0aW9ucy5sb29zZSlcbiAgICB9XG4gIH1cblxuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIHRlc3QgKHZlcnNpb24pIHtcbiAgICBkZWJ1ZygnQ29tcGFyYXRvci50ZXN0JywgdmVyc2lvbiwgdGhpcy5vcHRpb25zLmxvb3NlKVxuXG4gICAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkgfHwgdmVyc2lvbiA9PT0gQU5ZKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMub3B0aW9ucylcbiAgICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbXAodmVyc2lvbiwgdGhpcy5vcGVyYXRvciwgdGhpcy5zZW12ZXIsIHRoaXMub3B0aW9ucylcbiAgfVxuXG4gIGludGVyc2VjdHMgKGNvbXAsIG9wdGlvbnMpIHtcbiAgICBpZiAoIShjb21wIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2EgQ29tcGFyYXRvciBpcyByZXF1aXJlZCcpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3BlcmF0b3IgPT09ICcnKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmFuZ2UoY29tcC52YWx1ZSwgb3B0aW9ucykudGVzdCh0aGlzLnZhbHVlKVxuICAgIH0gZWxzZSBpZiAoY29tcC5vcGVyYXRvciA9PT0gJycpIHtcbiAgICAgIGlmIChjb21wLnZhbHVlID09PSAnJykge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSYW5nZSh0aGlzLnZhbHVlLCBvcHRpb25zKS50ZXN0KGNvbXAuc2VtdmVyKVxuICAgIH1cblxuICAgIG9wdGlvbnMgPSBwYXJzZU9wdGlvbnMob3B0aW9ucylcblxuICAgIC8vIFNwZWNpYWwgY2FzZXMgd2hlcmUgbm90aGluZyBjYW4gcG9zc2libHkgYmUgbG93ZXJcbiAgICBpZiAob3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSAmJlxuICAgICAgKHRoaXMudmFsdWUgPT09ICc8MC4wLjAtMCcgfHwgY29tcC52YWx1ZSA9PT0gJzwwLjAuMC0wJykpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgJiZcbiAgICAgICh0aGlzLnZhbHVlLnN0YXJ0c1dpdGgoJzwwLjAuMCcpIHx8IGNvbXAudmFsdWUuc3RhcnRzV2l0aCgnPDAuMC4wJykpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBTYW1lIGRpcmVjdGlvbiBpbmNyZWFzaW5nICg+IG9yID49KVxuICAgIGlmICh0aGlzLm9wZXJhdG9yLnN0YXJ0c1dpdGgoJz4nKSAmJiBjb21wLm9wZXJhdG9yLnN0YXJ0c1dpdGgoJz4nKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLy8gU2FtZSBkaXJlY3Rpb24gZGVjcmVhc2luZyAoPCBvciA8PSlcbiAgICBpZiAodGhpcy5vcGVyYXRvci5zdGFydHNXaXRoKCc8JykgJiYgY29tcC5vcGVyYXRvci5zdGFydHNXaXRoKCc8JykpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8vIHNhbWUgU2VtVmVyIGFuZCBib3RoIHNpZGVzIGFyZSBpbmNsdXNpdmUgKDw9IG9yID49KVxuICAgIGlmIChcbiAgICAgICh0aGlzLnNlbXZlci52ZXJzaW9uID09PSBjb21wLnNlbXZlci52ZXJzaW9uKSAmJlxuICAgICAgdGhpcy5vcGVyYXRvci5pbmNsdWRlcygnPScpICYmIGNvbXAub3BlcmF0b3IuaW5jbHVkZXMoJz0nKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLy8gb3Bwb3NpdGUgZGlyZWN0aW9ucyBsZXNzIHRoYW5cbiAgICBpZiAoY21wKHRoaXMuc2VtdmVyLCAnPCcsIGNvbXAuc2VtdmVyLCBvcHRpb25zKSAmJlxuICAgICAgdGhpcy5vcGVyYXRvci5zdGFydHNXaXRoKCc+JykgJiYgY29tcC5vcGVyYXRvci5zdGFydHNXaXRoKCc8JykpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8vIG9wcG9zaXRlIGRpcmVjdGlvbnMgZ3JlYXRlciB0aGFuXG4gICAgaWYgKGNtcCh0aGlzLnNlbXZlciwgJz4nLCBjb21wLnNlbXZlciwgb3B0aW9ucykgJiZcbiAgICAgIHRoaXMub3BlcmF0b3Iuc3RhcnRzV2l0aCgnPCcpICYmIGNvbXAub3BlcmF0b3Iuc3RhcnRzV2l0aCgnPicpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBhcmF0b3JcblxuY29uc3QgcGFyc2VPcHRpb25zID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcGFyc2Utb3B0aW9ucycpXG5jb25zdCB7IHNhZmVSZTogcmUsIHQgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3JlJylcbmNvbnN0IGNtcCA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9ucy9jbXAnKVxuY29uc3QgZGVidWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9kZWJ1ZycpXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuL3NlbXZlcicpXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4vcmFuZ2UnKVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuY29uc3Qgc2F0aXNmaWVzID0gKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSA9PiB7XG4gIHRyeSB7XG4gICAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHJhbmdlLnRlc3QodmVyc2lvbilcbn1cbm1vZHVsZS5leHBvcnRzID0gc2F0aXNmaWVzXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZScpXG5cbi8vIE1vc3RseSBqdXN0IGZvciB0ZXN0aW5nIGFuZCBsZWdhY3kgQVBJIHJlYXNvbnNcbmNvbnN0IHRvQ29tcGFyYXRvcnMgPSAocmFuZ2UsIG9wdGlvbnMpID0+XG4gIG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucykuc2V0XG4gICAgLm1hcChjb21wID0+IGNvbXAubWFwKGMgPT4gYy52YWx1ZSkuam9pbignICcpLnRyaW0oKS5zcGxpdCgnICcpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvQ29tcGFyYXRvcnNcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcblxuY29uc3QgbWF4U2F0aXNmeWluZyA9ICh2ZXJzaW9ucywgcmFuZ2UsIG9wdGlvbnMpID0+IHtcbiAgbGV0IG1heCA9IG51bGxcbiAgbGV0IG1heFNWID0gbnVsbFxuICBsZXQgcmFuZ2VPYmogPSBudWxsXG4gIHRyeSB7XG4gICAgcmFuZ2VPYmogPSBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICB2ZXJzaW9ucy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgaWYgKHJhbmdlT2JqLnRlc3QodikpIHtcbiAgICAgIC8vIHNhdGlzZmllcyh2LCByYW5nZSwgb3B0aW9ucylcbiAgICAgIGlmICghbWF4IHx8IG1heFNWLmNvbXBhcmUodikgPT09IC0xKSB7XG4gICAgICAgIC8vIGNvbXBhcmUobWF4LCB2LCB0cnVlKVxuICAgICAgICBtYXggPSB2XG4gICAgICAgIG1heFNWID0gbmV3IFNlbVZlcihtYXgsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuICB9KVxuICByZXR1cm4gbWF4XG59XG5tb2R1bGUuZXhwb3J0cyA9IG1heFNhdGlzZnlpbmdcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcbmNvbnN0IG1pblNhdGlzZnlpbmcgPSAodmVyc2lvbnMsIHJhbmdlLCBvcHRpb25zKSA9PiB7XG4gIGxldCBtaW4gPSBudWxsXG4gIGxldCBtaW5TViA9IG51bGxcbiAgbGV0IHJhbmdlT2JqID0gbnVsbFxuICB0cnkge1xuICAgIHJhbmdlT2JqID0gbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKVxuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgdmVyc2lvbnMuZm9yRWFjaCgodikgPT4ge1xuICAgIGlmIChyYW5nZU9iai50ZXN0KHYpKSB7XG4gICAgICAvLyBzYXRpc2ZpZXModiwgcmFuZ2UsIG9wdGlvbnMpXG4gICAgICBpZiAoIW1pbiB8fCBtaW5TVi5jb21wYXJlKHYpID09PSAxKSB7XG4gICAgICAgIC8vIGNvbXBhcmUobWluLCB2LCB0cnVlKVxuICAgICAgICBtaW4gPSB2XG4gICAgICAgIG1pblNWID0gbmV3IFNlbVZlcihtaW4sIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuICB9KVxuICByZXR1cm4gbWluXG59XG5tb2R1bGUuZXhwb3J0cyA9IG1pblNhdGlzZnlpbmdcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcbmNvbnN0IGd0ID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2d0JylcblxuY29uc3QgbWluVmVyc2lvbiA9IChyYW5nZSwgbG9vc2UpID0+IHtcbiAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKVxuXG4gIGxldCBtaW52ZXIgPSBuZXcgU2VtVmVyKCcwLjAuMCcpXG4gIGlmIChyYW5nZS50ZXN0KG1pbnZlcikpIHtcbiAgICByZXR1cm4gbWludmVyXG4gIH1cblxuICBtaW52ZXIgPSBuZXcgU2VtVmVyKCcwLjAuMC0wJylcbiAgaWYgKHJhbmdlLnRlc3QobWludmVyKSkge1xuICAgIHJldHVybiBtaW52ZXJcbiAgfVxuXG4gIG1pbnZlciA9IG51bGxcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZS5zZXQubGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXVxuXG4gICAgbGV0IHNldE1pbiA9IG51bGxcbiAgICBjb21wYXJhdG9ycy5mb3JFYWNoKChjb21wYXJhdG9yKSA9PiB7XG4gICAgICAvLyBDbG9uZSB0byBhdm9pZCBtYW5pcHVsYXRpbmcgdGhlIGNvbXBhcmF0b3IncyBzZW12ZXIgb2JqZWN0LlxuICAgICAgY29uc3QgY29tcHZlciA9IG5ldyBTZW1WZXIoY29tcGFyYXRvci5zZW12ZXIudmVyc2lvbilcbiAgICAgIHN3aXRjaCAoY29tcGFyYXRvci5vcGVyYXRvcikge1xuICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICBpZiAoY29tcHZlci5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29tcHZlci5wYXRjaCsrXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXB2ZXIucHJlcmVsZWFzZS5wdXNoKDApXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbXB2ZXIucmF3ID0gY29tcHZlci5mb3JtYXQoKVxuICAgICAgICAgIC8qIGZhbGx0aHJvdWdoICovXG4gICAgICAgIGNhc2UgJyc6XG4gICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICBpZiAoIXNldE1pbiB8fCBndChjb21wdmVyLCBzZXRNaW4pKSB7XG4gICAgICAgICAgICBzZXRNaW4gPSBjb21wdmVyXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICBjYXNlICc8PSc6XG4gICAgICAgICAgLyogSWdub3JlIG1heGltdW0gdmVyc2lvbnMgKi9cbiAgICAgICAgICBicmVha1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBvcGVyYXRpb246ICR7Y29tcGFyYXRvci5vcGVyYXRvcn1gKVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKHNldE1pbiAmJiAoIW1pbnZlciB8fCBndChtaW52ZXIsIHNldE1pbikpKSB7XG4gICAgICBtaW52ZXIgPSBzZXRNaW5cbiAgICB9XG4gIH1cblxuICBpZiAobWludmVyICYmIHJhbmdlLnRlc3QobWludmVyKSkge1xuICAgIHJldHVybiBtaW52ZXJcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5tb2R1bGUuZXhwb3J0cyA9IG1pblZlcnNpb25cbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcbmNvbnN0IHZhbGlkUmFuZ2UgPSAocmFuZ2UsIG9wdGlvbnMpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBSZXR1cm4gJyonIGluc3RlYWQgb2YgJycgc28gdGhhdCB0cnV0aGluZXNzIHdvcmtzLlxuICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBpZiBpdCdzIGludmFsaWQgYW55d2F5XG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucykucmFuZ2UgfHwgJyonXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZFJhbmdlXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IENvbXBhcmF0b3IgPSByZXF1aXJlKCcuLi9jbGFzc2VzL2NvbXBhcmF0b3InKVxuY29uc3QgeyBBTlkgfSA9IENvbXBhcmF0b3JcbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZScpXG5jb25zdCBzYXRpc2ZpZXMgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvc2F0aXNmaWVzJylcbmNvbnN0IGd0ID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2d0JylcbmNvbnN0IGx0ID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2x0JylcbmNvbnN0IGx0ZSA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9ucy9sdGUnKVxuY29uc3QgZ3RlID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2d0ZScpXG5cbmNvbnN0IG91dHNpZGUgPSAodmVyc2lvbiwgcmFuZ2UsIGhpbG8sIG9wdGlvbnMpID0+IHtcbiAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgb3B0aW9ucylcbiAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpXG5cbiAgbGV0IGd0Zm4sIGx0ZWZuLCBsdGZuLCBjb21wLCBlY29tcFxuICBzd2l0Y2ggKGhpbG8pIHtcbiAgICBjYXNlICc+JzpcbiAgICAgIGd0Zm4gPSBndFxuICAgICAgbHRlZm4gPSBsdGVcbiAgICAgIGx0Zm4gPSBsdFxuICAgICAgY29tcCA9ICc+J1xuICAgICAgZWNvbXAgPSAnPj0nXG4gICAgICBicmVha1xuICAgIGNhc2UgJzwnOlxuICAgICAgZ3RmbiA9IGx0XG4gICAgICBsdGVmbiA9IGd0ZVxuICAgICAgbHRmbiA9IGd0XG4gICAgICBjb21wID0gJzwnXG4gICAgICBlY29tcCA9ICc8PSdcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3QgcHJvdmlkZSBhIGhpbG8gdmFsIG9mIFwiPFwiIG9yIFwiPlwiJylcbiAgfVxuXG4gIC8vIElmIGl0IHNhdGlzZmllcyB0aGUgcmFuZ2UgaXQgaXMgbm90IG91dHNpZGVcbiAgaWYgKHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgb3B0aW9ucykpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIEZyb20gbm93IG9uLCB2YXJpYWJsZSB0ZXJtcyBhcmUgYXMgaWYgd2UncmUgaW4gXCJndHJcIiBtb2RlLlxuICAvLyBidXQgbm90ZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgZmxpcHBlZCBmb3IgdGhlIFwibHRyXCIgZnVuY3Rpb24uXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZS5zZXQubGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXVxuXG4gICAgbGV0IGhpZ2ggPSBudWxsXG4gICAgbGV0IGxvdyA9IG51bGxcblxuICAgIGNvbXBhcmF0b3JzLmZvckVhY2goKGNvbXBhcmF0b3IpID0+IHtcbiAgICAgIGlmIChjb21wYXJhdG9yLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICAgIGNvbXBhcmF0b3IgPSBuZXcgQ29tcGFyYXRvcignPj0wLjAuMCcpXG4gICAgICB9XG4gICAgICBoaWdoID0gaGlnaCB8fCBjb21wYXJhdG9yXG4gICAgICBsb3cgPSBsb3cgfHwgY29tcGFyYXRvclxuICAgICAgaWYgKGd0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGhpZ2guc2VtdmVyLCBvcHRpb25zKSkge1xuICAgICAgICBoaWdoID0gY29tcGFyYXRvclxuICAgICAgfSBlbHNlIGlmIChsdGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBsb3cuc2VtdmVyLCBvcHRpb25zKSkge1xuICAgICAgICBsb3cgPSBjb21wYXJhdG9yXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIElmIHRoZSBlZGdlIHZlcnNpb24gY29tcGFyYXRvciBoYXMgYSBvcGVyYXRvciB0aGVuIG91ciB2ZXJzaW9uXG4gICAgLy8gaXNuJ3Qgb3V0c2lkZSBpdFxuICAgIGlmIChoaWdoLm9wZXJhdG9yID09PSBjb21wIHx8IGhpZ2gub3BlcmF0b3IgPT09IGVjb21wKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgbG93ZXN0IHZlcnNpb24gY29tcGFyYXRvciBoYXMgYW4gb3BlcmF0b3IgYW5kIG91ciB2ZXJzaW9uXG4gICAgLy8gaXMgbGVzcyB0aGFuIGl0IHRoZW4gaXQgaXNuJ3QgaGlnaGVyIHRoYW4gdGhlIHJhbmdlXG4gICAgaWYgKCghbG93Lm9wZXJhdG9yIHx8IGxvdy5vcGVyYXRvciA9PT0gY29tcCkgJiZcbiAgICAgICAgbHRlZm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSBpZiAobG93Lm9wZXJhdG9yID09PSBlY29tcCAmJiBsdGZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdXRzaWRlXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGdyZWF0ZXIgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZS5cbmNvbnN0IG91dHNpZGUgPSByZXF1aXJlKCcuL291dHNpZGUnKVxuY29uc3QgZ3RyID0gKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSA9PiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPicsIG9wdGlvbnMpXG5tb2R1bGUuZXhwb3J0cyA9IGd0clxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBvdXRzaWRlID0gcmVxdWlyZSgnLi9vdXRzaWRlJylcbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGxlc3MgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZVxuY29uc3QgbHRyID0gKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSA9PiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPCcsIG9wdGlvbnMpXG5tb2R1bGUuZXhwb3J0cyA9IGx0clxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuY29uc3QgaW50ZXJzZWN0cyA9IChyMSwgcjIsIG9wdGlvbnMpID0+IHtcbiAgcjEgPSBuZXcgUmFuZ2UocjEsIG9wdGlvbnMpXG4gIHIyID0gbmV3IFJhbmdlKHIyLCBvcHRpb25zKVxuICByZXR1cm4gcjEuaW50ZXJzZWN0cyhyMiwgb3B0aW9ucylcbn1cbm1vZHVsZS5leHBvcnRzID0gaW50ZXJzZWN0c1xuIiwgIid1c2Ugc3RyaWN0J1xuXG4vLyBnaXZlbiBhIHNldCBvZiB2ZXJzaW9ucyBhbmQgYSByYW5nZSwgY3JlYXRlIGEgXCJzaW1wbGlmaWVkXCIgcmFuZ2Vcbi8vIHRoYXQgaW5jbHVkZXMgdGhlIHNhbWUgdmVyc2lvbnMgdGhhdCB0aGUgb3JpZ2luYWwgcmFuZ2UgZG9lc1xuLy8gSWYgdGhlIG9yaWdpbmFsIHJhbmdlIGlzIHNob3J0ZXIgdGhhbiB0aGUgc2ltcGxpZmllZCBvbmUsIHJldHVybiB0aGF0LlxuY29uc3Qgc2F0aXNmaWVzID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL3NhdGlzZmllcy5qcycpXG5jb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2NvbXBhcmUuanMnKVxubW9kdWxlLmV4cG9ydHMgPSAodmVyc2lvbnMsIHJhbmdlLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHNldCA9IFtdXG4gIGxldCBmaXJzdCA9IG51bGxcbiAgbGV0IHByZXYgPSBudWxsXG4gIGNvbnN0IHYgPSB2ZXJzaW9ucy5zb3J0KChhLCBiKSA9PiBjb21wYXJlKGEsIGIsIG9wdGlvbnMpKVxuICBmb3IgKGNvbnN0IHZlcnNpb24gb2Ygdikge1xuICAgIGNvbnN0IGluY2x1ZGVkID0gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKVxuICAgIGlmIChpbmNsdWRlZCkge1xuICAgICAgcHJldiA9IHZlcnNpb25cbiAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgZmlyc3QgPSB2ZXJzaW9uXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgIHNldC5wdXNoKFtmaXJzdCwgcHJldl0pXG4gICAgICB9XG4gICAgICBwcmV2ID0gbnVsbFxuICAgICAgZmlyc3QgPSBudWxsXG4gICAgfVxuICB9XG4gIGlmIChmaXJzdCkge1xuICAgIHNldC5wdXNoKFtmaXJzdCwgbnVsbF0pXG4gIH1cblxuICBjb25zdCByYW5nZXMgPSBbXVxuICBmb3IgKGNvbnN0IFttaW4sIG1heF0gb2Ygc2V0KSB7XG4gICAgaWYgKG1pbiA9PT0gbWF4KSB7XG4gICAgICByYW5nZXMucHVzaChtaW4pXG4gICAgfSBlbHNlIGlmICghbWF4ICYmIG1pbiA9PT0gdlswXSkge1xuICAgICAgcmFuZ2VzLnB1c2goJyonKVxuICAgIH0gZWxzZSBpZiAoIW1heCkge1xuICAgICAgcmFuZ2VzLnB1c2goYD49JHttaW59YClcbiAgICB9IGVsc2UgaWYgKG1pbiA9PT0gdlswXSkge1xuICAgICAgcmFuZ2VzLnB1c2goYDw9JHttYXh9YClcbiAgICB9IGVsc2Uge1xuICAgICAgcmFuZ2VzLnB1c2goYCR7bWlufSAtICR7bWF4fWApXG4gICAgfVxuICB9XG4gIGNvbnN0IHNpbXBsaWZpZWQgPSByYW5nZXMuam9pbignIHx8ICcpXG4gIGNvbnN0IG9yaWdpbmFsID0gdHlwZW9mIHJhbmdlLnJhdyA9PT0gJ3N0cmluZycgPyByYW5nZS5yYXcgOiBTdHJpbmcocmFuZ2UpXG4gIHJldHVybiBzaW1wbGlmaWVkLmxlbmd0aCA8IG9yaWdpbmFsLmxlbmd0aCA/IHNpbXBsaWZpZWQgOiByYW5nZVxufVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UuanMnKVxuY29uc3QgQ29tcGFyYXRvciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvY29tcGFyYXRvci5qcycpXG5jb25zdCB7IEFOWSB9ID0gQ29tcGFyYXRvclxuY29uc3Qgc2F0aXNmaWVzID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL3NhdGlzZmllcy5qcycpXG5jb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2NvbXBhcmUuanMnKVxuXG4vLyBDb21wbGV4IHJhbmdlIGByMSB8fCByMiB8fCAuLi5gIGlzIGEgc3Vic2V0IG9mIGBSMSB8fCBSMiB8fCAuLi5gIGlmZjpcbi8vIC0gRXZlcnkgc2ltcGxlIHJhbmdlIGByMSwgcjIsIC4uLmAgaXMgYSBudWxsIHNldCwgT1Jcbi8vIC0gRXZlcnkgc2ltcGxlIHJhbmdlIGByMSwgcjIsIC4uLmAgd2hpY2ggaXMgbm90IGEgbnVsbCBzZXQgaXMgYSBzdWJzZXQgb2Zcbi8vICAgc29tZSBgUjEsIFIyLCAuLi5gXG4vL1xuLy8gU2ltcGxlIHJhbmdlIGBjMSBjMiAuLi5gIGlzIGEgc3Vic2V0IG9mIHNpbXBsZSByYW5nZSBgQzEgQzIgLi4uYCBpZmY6XG4vLyAtIElmIGMgaXMgb25seSB0aGUgQU5ZIGNvbXBhcmF0b3Jcbi8vICAgLSBJZiBDIGlzIG9ubHkgdGhlIEFOWSBjb21wYXJhdG9yLCByZXR1cm4gdHJ1ZVxuLy8gICAtIEVsc2UgaWYgaW4gcHJlcmVsZWFzZSBtb2RlLCByZXR1cm4gZmFsc2Vcbi8vICAgLSBlbHNlIHJlcGxhY2UgYyB3aXRoIGBbPj0wLjAuMF1gXG4vLyAtIElmIEMgaXMgb25seSB0aGUgQU5ZIGNvbXBhcmF0b3Jcbi8vICAgLSBpZiBpbiBwcmVyZWxlYXNlIG1vZGUsIHJldHVybiB0cnVlXG4vLyAgIC0gZWxzZSByZXBsYWNlIEMgd2l0aCBgWz49MC4wLjBdYFxuLy8gLSBMZXQgRVEgYmUgdGhlIHNldCBvZiA9IGNvbXBhcmF0b3JzIGluIGNcbi8vIC0gSWYgRVEgaXMgbW9yZSB0aGFuIG9uZSwgcmV0dXJuIHRydWUgKG51bGwgc2V0KVxuLy8gLSBMZXQgR1QgYmUgdGhlIGhpZ2hlc3QgPiBvciA+PSBjb21wYXJhdG9yIGluIGNcbi8vIC0gTGV0IExUIGJlIHRoZSBsb3dlc3QgPCBvciA8PSBjb21wYXJhdG9yIGluIGNcbi8vIC0gSWYgR1QgYW5kIExULCBhbmQgR1Quc2VtdmVyID4gTFQuc2VtdmVyLCByZXR1cm4gdHJ1ZSAobnVsbCBzZXQpXG4vLyAtIElmIGFueSBDIGlzIGEgPSByYW5nZSwgYW5kIEdUIG9yIExUIGFyZSBzZXQsIHJldHVybiBmYWxzZVxuLy8gLSBJZiBFUVxuLy8gICAtIElmIEdULCBhbmQgRVEgZG9lcyBub3Qgc2F0aXNmeSBHVCwgcmV0dXJuIHRydWUgKG51bGwgc2V0KVxuLy8gICAtIElmIExULCBhbmQgRVEgZG9lcyBub3Qgc2F0aXNmeSBMVCwgcmV0dXJuIHRydWUgKG51bGwgc2V0KVxuLy8gICAtIElmIEVRIHNhdGlzZmllcyBldmVyeSBDLCByZXR1cm4gdHJ1ZVxuLy8gICAtIEVsc2UgcmV0dXJuIGZhbHNlXG4vLyAtIElmIEdUXG4vLyAgIC0gSWYgR1Quc2VtdmVyIGlzIGxvd2VyIHRoYW4gYW55ID4gb3IgPj0gY29tcCBpbiBDLCByZXR1cm4gZmFsc2Vcbi8vICAgLSBJZiBHVCBpcyA+PSwgYW5kIEdULnNlbXZlciBkb2VzIG5vdCBzYXRpc2Z5IGV2ZXJ5IEMsIHJldHVybiBmYWxzZVxuLy8gICAtIElmIEdULnNlbXZlciBoYXMgYSBwcmVyZWxlYXNlLCBhbmQgbm90IGluIHByZXJlbGVhc2UgbW9kZVxuLy8gICAgIC0gSWYgbm8gQyBoYXMgYSBwcmVyZWxlYXNlIGFuZCB0aGUgR1Quc2VtdmVyIHR1cGxlLCByZXR1cm4gZmFsc2Vcbi8vIC0gSWYgTFRcbi8vICAgLSBJZiBMVC5zZW12ZXIgaXMgZ3JlYXRlciB0aGFuIGFueSA8IG9yIDw9IGNvbXAgaW4gQywgcmV0dXJuIGZhbHNlXG4vLyAgIC0gSWYgTFQgaXMgPD0sIGFuZCBMVC5zZW12ZXIgZG9lcyBub3Qgc2F0aXNmeSBldmVyeSBDLCByZXR1cm4gZmFsc2Vcbi8vICAgLSBJZiBMVC5zZW12ZXIgaGFzIGEgcHJlcmVsZWFzZSwgYW5kIG5vdCBpbiBwcmVyZWxlYXNlIG1vZGVcbi8vICAgICAtIElmIG5vIEMgaGFzIGEgcHJlcmVsZWFzZSBhbmQgdGhlIExULnNlbXZlciB0dXBsZSwgcmV0dXJuIGZhbHNlXG4vLyAtIEVsc2UgcmV0dXJuIHRydWVcblxuY29uc3Qgc3Vic2V0ID0gKHN1YiwgZG9tLCBvcHRpb25zID0ge30pID0+IHtcbiAgaWYgKHN1YiA9PT0gZG9tKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHN1YiA9IG5ldyBSYW5nZShzdWIsIG9wdGlvbnMpXG4gIGRvbSA9IG5ldyBSYW5nZShkb20sIG9wdGlvbnMpXG4gIGxldCBzYXdOb25OdWxsID0gZmFsc2VcblxuICBPVVRFUjogZm9yIChjb25zdCBzaW1wbGVTdWIgb2Ygc3ViLnNldCkge1xuICAgIGZvciAoY29uc3Qgc2ltcGxlRG9tIG9mIGRvbS5zZXQpIHtcbiAgICAgIGNvbnN0IGlzU3ViID0gc2ltcGxlU3Vic2V0KHNpbXBsZVN1Yiwgc2ltcGxlRG9tLCBvcHRpb25zKVxuICAgICAgc2F3Tm9uTnVsbCA9IHNhd05vbk51bGwgfHwgaXNTdWIgIT09IG51bGxcbiAgICAgIGlmIChpc1N1Yikge1xuICAgICAgICBjb250aW51ZSBPVVRFUlxuICAgICAgfVxuICAgIH1cbiAgICAvLyB0aGUgbnVsbCBzZXQgaXMgYSBzdWJzZXQgb2YgZXZlcnl0aGluZywgYnV0IG51bGwgc2ltcGxlIHJhbmdlcyBpblxuICAgIC8vIGEgY29tcGxleCByYW5nZSBzaG91bGQgYmUgaWdub3JlZC4gIHNvIGlmIHdlIHNhdyBhIG5vbi1udWxsIHJhbmdlLFxuICAgIC8vIHRoZW4gd2Uga25vdyB0aGlzIGlzbid0IGEgc3Vic2V0LCBidXQgaWYgRVZFUlkgc2ltcGxlIHJhbmdlIHdhcyBudWxsLFxuICAgIC8vIHRoZW4gaXQgaXMgYSBzdWJzZXQuXG4gICAgaWYgKHNhd05vbk51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5jb25zdCBtaW5pbXVtVmVyc2lvbldpdGhQcmVSZWxlYXNlID0gW25ldyBDb21wYXJhdG9yKCc+PTAuMC4wLTAnKV1cbmNvbnN0IG1pbmltdW1WZXJzaW9uID0gW25ldyBDb21wYXJhdG9yKCc+PTAuMC4wJyldXG5cbmNvbnN0IHNpbXBsZVN1YnNldCA9IChzdWIsIGRvbSwgb3B0aW9ucykgPT4ge1xuICBpZiAoc3ViID09PSBkb20pIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHN1Yi5sZW5ndGggPT09IDEgJiYgc3ViWzBdLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgaWYgKGRvbS5sZW5ndGggPT09IDEgJiYgZG9tWzBdLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSkge1xuICAgICAgc3ViID0gbWluaW11bVZlcnNpb25XaXRoUHJlUmVsZWFzZVxuICAgIH0gZWxzZSB7XG4gICAgICBzdWIgPSBtaW5pbXVtVmVyc2lvblxuICAgIH1cbiAgfVxuXG4gIGlmIChkb20ubGVuZ3RoID09PSAxICYmIGRvbVswXS5zZW12ZXIgPT09IEFOWSkge1xuICAgIGlmIChvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBkb20gPSBtaW5pbXVtVmVyc2lvblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGVxU2V0ID0gbmV3IFNldCgpXG4gIGxldCBndCwgbHRcbiAgZm9yIChjb25zdCBjIG9mIHN1Yikge1xuICAgIGlmIChjLm9wZXJhdG9yID09PSAnPicgfHwgYy5vcGVyYXRvciA9PT0gJz49Jykge1xuICAgICAgZ3QgPSBoaWdoZXJHVChndCwgYywgb3B0aW9ucylcbiAgICB9IGVsc2UgaWYgKGMub3BlcmF0b3IgPT09ICc8JyB8fCBjLm9wZXJhdG9yID09PSAnPD0nKSB7XG4gICAgICBsdCA9IGxvd2VyTFQobHQsIGMsIG9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVxU2V0LmFkZChjLnNlbXZlcilcbiAgICB9XG4gIH1cblxuICBpZiAoZXFTZXQuc2l6ZSA+IDEpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgbGV0IGd0bHRDb21wXG4gIGlmIChndCAmJiBsdCkge1xuICAgIGd0bHRDb21wID0gY29tcGFyZShndC5zZW12ZXIsIGx0LnNlbXZlciwgb3B0aW9ucylcbiAgICBpZiAoZ3RsdENvbXAgPiAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0gZWxzZSBpZiAoZ3RsdENvbXAgPT09IDAgJiYgKGd0Lm9wZXJhdG9yICE9PSAnPj0nIHx8IGx0Lm9wZXJhdG9yICE9PSAnPD0nKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICAvLyB3aWxsIGl0ZXJhdGUgb25lIG9yIHplcm8gdGltZXNcbiAgZm9yIChjb25zdCBlcSBvZiBlcVNldCkge1xuICAgIGlmIChndCAmJiAhc2F0aXNmaWVzKGVxLCBTdHJpbmcoZ3QpLCBvcHRpb25zKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBpZiAobHQgJiYgIXNhdGlzZmllcyhlcSwgU3RyaW5nKGx0KSwgb3B0aW9ucykpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjIG9mIGRvbSkge1xuICAgICAgaWYgKCFzYXRpc2ZpZXMoZXEsIFN0cmluZyhjKSwgb3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGxldCBoaWdoZXIsIGxvd2VyXG4gIGxldCBoYXNEb21MVCwgaGFzRG9tR1RcbiAgLy8gaWYgdGhlIHN1YnNldCBoYXMgYSBwcmVyZWxlYXNlLCB3ZSBuZWVkIGEgY29tcGFyYXRvciBpbiB0aGUgc3VwZXJzZXRcbiAgLy8gd2l0aCB0aGUgc2FtZSB0dXBsZSBhbmQgYSBwcmVyZWxlYXNlLCBvciBpdCdzIG5vdCBhIHN1YnNldFxuICBsZXQgbmVlZERvbUxUUHJlID0gbHQgJiZcbiAgICAhb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSAmJlxuICAgIGx0LnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCA/IGx0LnNlbXZlciA6IGZhbHNlXG4gIGxldCBuZWVkRG9tR1RQcmUgPSBndCAmJlxuICAgICFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlICYmXG4gICAgZ3Quc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoID8gZ3Quc2VtdmVyIDogZmFsc2VcbiAgLy8gZXhjZXB0aW9uOiA8MS4yLjMtMCBpcyB0aGUgc2FtZSBhcyA8MS4yLjNcbiAgaWYgKG5lZWREb21MVFByZSAmJiBuZWVkRG9tTFRQcmUucHJlcmVsZWFzZS5sZW5ndGggPT09IDEgJiZcbiAgICAgIGx0Lm9wZXJhdG9yID09PSAnPCcgJiYgbmVlZERvbUxUUHJlLnByZXJlbGVhc2VbMF0gPT09IDApIHtcbiAgICBuZWVkRG9tTFRQcmUgPSBmYWxzZVxuICB9XG5cbiAgZm9yIChjb25zdCBjIG9mIGRvbSkge1xuICAgIGhhc0RvbUdUID0gaGFzRG9tR1QgfHwgYy5vcGVyYXRvciA9PT0gJz4nIHx8IGMub3BlcmF0b3IgPT09ICc+PSdcbiAgICBoYXNEb21MVCA9IGhhc0RvbUxUIHx8IGMub3BlcmF0b3IgPT09ICc8JyB8fCBjLm9wZXJhdG9yID09PSAnPD0nXG4gICAgaWYgKGd0KSB7XG4gICAgICBpZiAobmVlZERvbUdUUHJlKSB7XG4gICAgICAgIGlmIChjLnNlbXZlci5wcmVyZWxlYXNlICYmIGMuc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoICYmXG4gICAgICAgICAgICBjLnNlbXZlci5tYWpvciA9PT0gbmVlZERvbUdUUHJlLm1ham9yICYmXG4gICAgICAgICAgICBjLnNlbXZlci5taW5vciA9PT0gbmVlZERvbUdUUHJlLm1pbm9yICYmXG4gICAgICAgICAgICBjLnNlbXZlci5wYXRjaCA9PT0gbmVlZERvbUdUUHJlLnBhdGNoKSB7XG4gICAgICAgICAgbmVlZERvbUdUUHJlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGMub3BlcmF0b3IgPT09ICc+JyB8fCBjLm9wZXJhdG9yID09PSAnPj0nKSB7XG4gICAgICAgIGhpZ2hlciA9IGhpZ2hlckdUKGd0LCBjLCBvcHRpb25zKVxuICAgICAgICBpZiAoaGlnaGVyID09PSBjICYmIGhpZ2hlciAhPT0gZ3QpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChndC5vcGVyYXRvciA9PT0gJz49JyAmJiAhc2F0aXNmaWVzKGd0LnNlbXZlciwgU3RyaW5nKGMpLCBvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGx0KSB7XG4gICAgICBpZiAobmVlZERvbUxUUHJlKSB7XG4gICAgICAgIGlmIChjLnNlbXZlci5wcmVyZWxlYXNlICYmIGMuc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoICYmXG4gICAgICAgICAgICBjLnNlbXZlci5tYWpvciA9PT0gbmVlZERvbUxUUHJlLm1ham9yICYmXG4gICAgICAgICAgICBjLnNlbXZlci5taW5vciA9PT0gbmVlZERvbUxUUHJlLm1pbm9yICYmXG4gICAgICAgICAgICBjLnNlbXZlci5wYXRjaCA9PT0gbmVlZERvbUxUUHJlLnBhdGNoKSB7XG4gICAgICAgICAgbmVlZERvbUxUUHJlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGMub3BlcmF0b3IgPT09ICc8JyB8fCBjLm9wZXJhdG9yID09PSAnPD0nKSB7XG4gICAgICAgIGxvd2VyID0gbG93ZXJMVChsdCwgYywgb3B0aW9ucylcbiAgICAgICAgaWYgKGxvd2VyID09PSBjICYmIGxvd2VyICE9PSBsdCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGx0Lm9wZXJhdG9yID09PSAnPD0nICYmICFzYXRpc2ZpZXMobHQuc2VtdmVyLCBTdHJpbmcoYyksIG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWMub3BlcmF0b3IgJiYgKGx0IHx8IGd0KSAmJiBndGx0Q29tcCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlcmUgd2FzIGEgPCBvciA+LCBhbmQgbm90aGluZyBpbiB0aGUgZG9tLCB0aGVuIG11c3QgYmUgZmFsc2VcbiAgLy8gVU5MRVNTIGl0IHdhcyBsaW1pdGVkIGJ5IGFub3RoZXIgcmFuZ2UgaW4gdGhlIG90aGVyIGRpcmVjdGlvbi5cbiAgLy8gRWcsID4xLjAuMCA8MS4wLjEgaXMgc3RpbGwgYSBzdWJzZXQgb2YgPDIuMC4wXG4gIGlmIChndCAmJiBoYXNEb21MVCAmJiAhbHQgJiYgZ3RsdENvbXAgIT09IDApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmIChsdCAmJiBoYXNEb21HVCAmJiAhZ3QgJiYgZ3RsdENvbXAgIT09IDApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIHdlIG5lZWRlZCBhIHByZXJlbGVhc2UgcmFuZ2UgaW4gYSBzcGVjaWZpYyB0dXBsZSwgYnV0IGRpZG4ndCBnZXQgb25lXG4gIC8vIHRoZW4gdGhpcyBpc24ndCBhIHN1YnNldC4gIGVnID49MS4yLjMtcHJlIGlzIG5vdCBhIHN1YnNldCBvZiA+PTEuMC4wLFxuICAvLyBiZWNhdXNlIGl0IGluY2x1ZGVzIHByZXJlbGVhc2VzIGluIHRoZSAxLjIuMyB0dXBsZVxuICBpZiAobmVlZERvbUdUUHJlIHx8IG5lZWREb21MVFByZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuLy8gPj0xLjIuMyBpcyBsb3dlciB0aGFuID4xLjIuM1xuY29uc3QgaGlnaGVyR1QgPSAoYSwgYiwgb3B0aW9ucykgPT4ge1xuICBpZiAoIWEpIHtcbiAgICByZXR1cm4gYlxuICB9XG4gIGNvbnN0IGNvbXAgPSBjb21wYXJlKGEuc2VtdmVyLCBiLnNlbXZlciwgb3B0aW9ucylcbiAgcmV0dXJuIGNvbXAgPiAwID8gYVxuICAgIDogY29tcCA8IDAgPyBiXG4gICAgOiBiLm9wZXJhdG9yID09PSAnPicgJiYgYS5vcGVyYXRvciA9PT0gJz49JyA/IGJcbiAgICA6IGFcbn1cblxuLy8gPD0xLjIuMyBpcyBoaWdoZXIgdGhhbiA8MS4yLjNcbmNvbnN0IGxvd2VyTFQgPSAoYSwgYiwgb3B0aW9ucykgPT4ge1xuICBpZiAoIWEpIHtcbiAgICByZXR1cm4gYlxuICB9XG4gIGNvbnN0IGNvbXAgPSBjb21wYXJlKGEuc2VtdmVyLCBiLnNlbXZlciwgb3B0aW9ucylcbiAgcmV0dXJuIGNvbXAgPCAwID8gYVxuICAgIDogY29tcCA+IDAgPyBiXG4gICAgOiBiLm9wZXJhdG9yID09PSAnPCcgJiYgYS5vcGVyYXRvciA9PT0gJzw9JyA/IGJcbiAgICA6IGFcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdWJzZXRcbiIsICIndXNlIHN0cmljdCdcblxuLy8ganVzdCBwcmUtbG9hZCBhbGwgdGhlIHN0dWZmIHRoYXQgaW5kZXguanMgbGF6aWx5IGV4cG9ydHNcbmNvbnN0IGludGVybmFsUmUgPSByZXF1aXJlKCcuL2ludGVybmFsL3JlJylcbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvY29uc3RhbnRzJylcbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgaWRlbnRpZmllcnMgPSByZXF1aXJlKCcuL2ludGVybmFsL2lkZW50aWZpZXJzJylcbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvcGFyc2UnKVxuY29uc3QgdmFsaWQgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy92YWxpZCcpXG5jb25zdCBjbGVhbiA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2NsZWFuJylcbmNvbnN0IGluYyA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2luYycpXG5jb25zdCBkaWZmID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvZGlmZicpXG5jb25zdCBtYWpvciA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL21ham9yJylcbmNvbnN0IG1pbm9yID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvbWlub3InKVxuY29uc3QgcGF0Y2ggPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9wYXRjaCcpXG5jb25zdCBwcmVyZWxlYXNlID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvcHJlcmVsZWFzZScpXG5jb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvY29tcGFyZScpXG5jb25zdCByY29tcGFyZSA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3Jjb21wYXJlJylcbmNvbnN0IGNvbXBhcmVMb29zZSA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2NvbXBhcmUtbG9vc2UnKVxuY29uc3QgY29tcGFyZUJ1aWxkID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvY29tcGFyZS1idWlsZCcpXG5jb25zdCBzb3J0ID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvc29ydCcpXG5jb25zdCByc29ydCA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3Jzb3J0JylcbmNvbnN0IGd0ID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvZ3QnKVxuY29uc3QgbHQgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9sdCcpXG5jb25zdCBlcSA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2VxJylcbmNvbnN0IG5lcSA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL25lcScpXG5jb25zdCBndGUgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9ndGUnKVxuY29uc3QgbHRlID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvbHRlJylcbmNvbnN0IGNtcCA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2NtcCcpXG5jb25zdCBjb2VyY2UgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9jb2VyY2UnKVxuY29uc3QgQ29tcGFyYXRvciA9IHJlcXVpcmUoJy4vY2xhc3Nlcy9jb21wYXJhdG9yJylcbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi9jbGFzc2VzL3JhbmdlJylcbmNvbnN0IHNhdGlzZmllcyA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3NhdGlzZmllcycpXG5jb25zdCB0b0NvbXBhcmF0b3JzID0gcmVxdWlyZSgnLi9yYW5nZXMvdG8tY29tcGFyYXRvcnMnKVxuY29uc3QgbWF4U2F0aXNmeWluZyA9IHJlcXVpcmUoJy4vcmFuZ2VzL21heC1zYXRpc2Z5aW5nJylcbmNvbnN0IG1pblNhdGlzZnlpbmcgPSByZXF1aXJlKCcuL3Jhbmdlcy9taW4tc2F0aXNmeWluZycpXG5jb25zdCBtaW5WZXJzaW9uID0gcmVxdWlyZSgnLi9yYW5nZXMvbWluLXZlcnNpb24nKVxuY29uc3QgdmFsaWRSYW5nZSA9IHJlcXVpcmUoJy4vcmFuZ2VzL3ZhbGlkJylcbmNvbnN0IG91dHNpZGUgPSByZXF1aXJlKCcuL3Jhbmdlcy9vdXRzaWRlJylcbmNvbnN0IGd0ciA9IHJlcXVpcmUoJy4vcmFuZ2VzL2d0cicpXG5jb25zdCBsdHIgPSByZXF1aXJlKCcuL3Jhbmdlcy9sdHInKVxuY29uc3QgaW50ZXJzZWN0cyA9IHJlcXVpcmUoJy4vcmFuZ2VzL2ludGVyc2VjdHMnKVxuY29uc3Qgc2ltcGxpZnlSYW5nZSA9IHJlcXVpcmUoJy4vcmFuZ2VzL3NpbXBsaWZ5JylcbmNvbnN0IHN1YnNldCA9IHJlcXVpcmUoJy4vcmFuZ2VzL3N1YnNldCcpXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGFyc2UsXG4gIHZhbGlkLFxuICBjbGVhbixcbiAgaW5jLFxuICBkaWZmLFxuICBtYWpvcixcbiAgbWlub3IsXG4gIHBhdGNoLFxuICBwcmVyZWxlYXNlLFxuICBjb21wYXJlLFxuICByY29tcGFyZSxcbiAgY29tcGFyZUxvb3NlLFxuICBjb21wYXJlQnVpbGQsXG4gIHNvcnQsXG4gIHJzb3J0LFxuICBndCxcbiAgbHQsXG4gIGVxLFxuICBuZXEsXG4gIGd0ZSxcbiAgbHRlLFxuICBjbXAsXG4gIGNvZXJjZSxcbiAgQ29tcGFyYXRvcixcbiAgUmFuZ2UsXG4gIHNhdGlzZmllcyxcbiAgdG9Db21wYXJhdG9ycyxcbiAgbWF4U2F0aXNmeWluZyxcbiAgbWluU2F0aXNmeWluZyxcbiAgbWluVmVyc2lvbixcbiAgdmFsaWRSYW5nZSxcbiAgb3V0c2lkZSxcbiAgZ3RyLFxuICBsdHIsXG4gIGludGVyc2VjdHMsXG4gIHNpbXBsaWZ5UmFuZ2UsXG4gIHN1YnNldCxcbiAgU2VtVmVyLFxuICByZTogaW50ZXJuYWxSZS5yZSxcbiAgc3JjOiBpbnRlcm5hbFJlLnNyYyxcbiAgdG9rZW5zOiBpbnRlcm5hbFJlLnQsXG4gIFNFTVZFUl9TUEVDX1ZFUlNJT046IGNvbnN0YW50cy5TRU1WRVJfU1BFQ19WRVJTSU9OLFxuICBSRUxFQVNFX1RZUEVTOiBjb25zdGFudHMuUkVMRUFTRV9UWVBFUyxcbiAgY29tcGFyZUlkZW50aWZpZXJzOiBpZGVudGlmaWVycy5jb21wYXJlSWRlbnRpZmllcnMsXG4gIHJjb21wYXJlSWRlbnRpZmllcnM6IGlkZW50aWZpZXJzLnJjb21wYXJlSWRlbnRpZmllcnMsXG59XG4iLCAiaW1wb3J0IHsgcmVhZEZpbGUsIHdyaXRlRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJztcbmltcG9ydCB7IGluYywgcGFyc2UgfSBmcm9tICdzZW12ZXInO1xuXG50eXBlIFJlbGVhc2VUeXBlID0gJ21ham9yJyB8ICdtaW5vcicgfCAncGF0Y2gnIHwgJ3ByZW1ham9yJyB8ICdwcmVtaW5vcicgfCAncHJlcGF0Y2gnIHwgJ3ByZXJlbGVhc2UnO1xuXG5pbnRlcmZhY2UgQnVtcFZlcnNpb25QYXJhbXMge1xuICAgIGN1cnJlbnRWZXJzaW9uOiBzdHJpbmc7XG4gICAgYnVtcFR5cGU6IHN0cmluZztcbiAgICBwcmVpZD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFdyaXRlUGFja2FnZVZlcnNpb25QYXJhbXMge1xuICAgIG1hbmlmZXN0UGF0aDogc3RyaW5nO1xuICAgIG5ld1ZlcnNpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1bXBWZXJzaW9uKHBhcmFtczogQnVtcFZlcnNpb25QYXJhbXMpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQ6IHN0cmluZyB8IG51bGw7XG5cbiAgICBpZiAocGFyYW1zLnByZWlkKSByZXN1bHQgPSBpbmMocGFyYW1zLmN1cnJlbnRWZXJzaW9uLCBwYXJhbXMuYnVtcFR5cGUgYXMgUmVsZWFzZVR5cGUsIHBhcmFtcy5wcmVpZCk7XG4gICAgZWxzZSByZXN1bHQgPSBpbmMocGFyYW1zLmN1cnJlbnRWZXJzaW9uLCBwYXJhbXMuYnVtcFR5cGUgYXMgUmVsZWFzZVR5cGUpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgYnVtcCB2ZXJzaW9uIFwiJHtwYXJhbXMuY3VycmVudFZlcnNpb259XCIgd2l0aCB0eXBlIFwiJHtwYXJhbXMuYnVtcFR5cGV9XCIuYCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmVSZWxlYXNlQnJhbmNoTmFtZShuZXdWZXJzaW9uOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZShuZXdWZXJzaW9uKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB2ZXJzaW9uOiBcIiR7bmV3VmVyc2lvbn1cImApO1xuICAgIH1cbiAgICBpZiAocGFyc2VkLnByZXJlbGVhc2UubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gYHJlbGVhc2UvdiR7cGFyc2VkLm1ham9yfS4ke3BhcnNlZC5taW5vcn0uJHtwYXJzZWQucGF0Y2h9YDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3cml0ZVBhY2thZ2VWZXJzaW9uKHBhcmFtczogV3JpdGVQYWNrYWdlVmVyc2lvblBhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHJhdyA9IGF3YWl0IHJlYWRGaWxlKHBhcmFtcy5tYW5pZmVzdFBhdGgsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSk7XG4gICAgY29uc3QgbWFuaWZlc3QgPSBKU09OLnBhcnNlKHJhdykgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG5cbiAgICBtYW5pZmVzdFsndmVyc2lvbiddID0gcGFyYW1zLm5ld1ZlcnNpb247XG5cbiAgICBhd2FpdCB3cml0ZUZpbGUocGFyYW1zLm1hbmlmZXN0UGF0aCwgSlNPTi5zdHJpbmdpZnkobWFuaWZlc3QsIG51bGwsIDIpICsgJ1xcbicsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSk7XG59XG4iLCAiaW1wb3J0IHsgYnVtcFZlcnNpb24sIGRlcml2ZVJlbGVhc2VCcmFuY2hOYW1lLCB3cml0ZVBhY2thZ2VWZXJzaW9uIH0gZnJvbSAnQC92ZXJzaW9uLWJ1bXBlcic7XG5pbXBvcnQgeyBhcHBlbmRGaWxlLCByZWFkRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHZlcnNpb25JbnB1dCA9IHByb2Nlc3MuZW52WydWRVJTSU9OJ10hO1xuICAgIGNvbnN0IHByZXJlbGVhc2VJZElucHV0ID0gcHJvY2Vzcy5lbnZbJ1BSRVJFTEVBU0VfSUQnXSE7XG4gICAgY29uc3QgbWFuaWZlc3RQYXRoID0gYCR7cHJvY2Vzcy5lbnZbJ0dJVEhVQl9XT1JLU1BBQ0UnXSF9L3BhY2thZ2UuanNvbmA7XG5cbiAgICBjb25zdCBtYW5pZmVzdCA9IEpTT04ucGFyc2UoYXdhaXQgcmVhZEZpbGUobWFuaWZlc3RQYXRoLCAndXRmLTgnKSkgYXMgeyB2ZXJzaW9uOiBzdHJpbmcgfTtcbiAgICBjb25zdCBwcmVpZCA9IHByZXJlbGVhc2VJZElucHV0ICE9PSAnbm9uZScgPyBwcmVyZWxlYXNlSWRJbnB1dCA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IG5ld1ZlcnNpb24gPSBidW1wVmVyc2lvbih7IGN1cnJlbnRWZXJzaW9uOiBtYW5pZmVzdC52ZXJzaW9uLCBidW1wVHlwZTogdmVyc2lvbklucHV0LCBwcmVpZCB9KTtcbiAgICBhd2FpdCB3cml0ZVBhY2thZ2VWZXJzaW9uKHsgbWFuaWZlc3RQYXRoLCBuZXdWZXJzaW9uIH0pO1xuXG4gICAgY29uc3Qgb3V0cHV0ID0gcHJvY2Vzcy5lbnZbJ0dJVEhVQl9PVVRQVVQnXSE7XG4gICAgYXdhaXQgYXBwZW5kRmlsZShvdXRwdXQsIGByYXctdmVyc2lvbj12JHtuZXdWZXJzaW9ufVxcbmApO1xuICAgIGF3YWl0IGFwcGVuZEZpbGUob3V0cHV0LCBgY2xlYW4tdmVyc2lvbj0ke25ld1ZlcnNpb259XFxuYCk7XG4gICAgYXdhaXQgYXBwZW5kRmlsZShvdXRwdXQsIGByZWxlYXNlLWJyYW5jaC1uYW1lPSR7ZGVyaXZlUmVsZWFzZUJyYW5jaE5hbWUobmV3VmVyc2lvbikgPz8gJyd9XFxuYCk7XG59XG5cbmlmIChwcm9jZXNzLmFyZ3ZbMV0gPT09IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSkge1xuICAgIGF3YWl0IHJ1bigpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBSUEsUUFBTSxzQkFBc0I7QUFFNUIsUUFBTSxhQUFhO0FBQ25CLFFBQU0sbUJBQW1CLE9BQU87QUFBQSxJQUNMO0FBRzNCLFFBQU0sNEJBQTRCO0FBSWxDLFFBQU0sd0JBQXdCLGFBQWE7QUFFM0MsUUFBTSxnQkFBZ0I7QUFBQSxNQUNwQjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFB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QUFXLEtBQUssTUFBTSxHQUFHO0FBRS9CLFdBQVMsU0FBUyxJQUFJLE9BQU87QUFFN0IsUUFBTSxVQUFVLE9BQU8sY0FBYyxLQUFLLFVBQVUsVUFBVSxNQUFNLENBQUMsSUFBSSxNQUFNLEVBQUUsVUFBVSxRQUFRLENBQUM7QUFDeEc7OztBQzlDQSxTQUFTLFlBQVksWUFBQUMsaUJBQWdCO0FBQ3JDLFNBQVMscUJBQXFCO0FBRTlCLGVBQXNCLE1BQXFCO0FBQ3ZDLFFBQU0sZUFBZSxRQUFRLElBQUksU0FBUztBQUMxQyxRQUFNLG9CQUFvQixRQUFRLElBQUksZUFBZTtBQUNyRCxRQUFNLGVBQWUsR0FBRyxRQUFRLElBQUksa0JBQWtCLENBQUU7QUFFeEQsUUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNQSxVQUFTLGNBQWMsT0FBTyxDQUFDO0FBQ2pFLFFBQU0sUUFBUSxzQkFBc0IsU0FBUyxvQkFBb0I7QUFFakUsUUFBTSxhQUFhLFlBQVksRUFBRSxnQkFBZ0IsU0FBUyxTQUFTLFVBQVUsY0FBYyxNQUFNLENBQUM7QUFDbEcsUUFBTSxvQkFBb0IsRUFBRSxjQUFjLFdBQVcsQ0FBQztBQUV0RCxRQUFNLFNBQVMsUUFBUSxJQUFJLGVBQWU7QUFDMUMsUUFBTSxXQUFXLFFBQVEsZ0JBQWdCLFVBQVU7QUFBQSxDQUFJO0FBQ3ZELFFBQU0sV0FBVyxRQUFRLGlCQUFpQixVQUFVO0FBQUEsQ0FBSTtBQUN4RCxRQUFNLFdBQVcsUUFBUSx1QkFBdUIsd0JBQXdCLFVBQVUsS0FBSyxFQUFFO0FBQUEsQ0FBSTtBQUNqRztBQUVBLElBQUksUUFBUSxLQUFLLENBQUMsTUFBTSxjQUFjLFlBQVksR0FBRyxHQUFHO0FBQ3BELFFBQU0sSUFBSTtBQUNkOyIsCiAgIm5hbWVzIjogWyJwYXJzZSIsICJwYXJzZSIsICJwYXJzZSIsICJpbmMiLCAicGFyc2UiLCAicGFyc2UiLCAicGFyc2UiLCAicmVxdWlyZV92YWxpZCIsICJyZXF1aXJlX3NlbXZlciIsICJwYXJzZSIsICJpbmMiLCAicmVhZEZpbGUiXQp9Cg==

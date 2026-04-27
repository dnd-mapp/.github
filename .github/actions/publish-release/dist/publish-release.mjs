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

// node_modules/.pnpm/fast-content-type-parse@3.0.0/node_modules/fast-content-type-parse/index.js
var require_fast_content_type_parse = __commonJS({
  "node_modules/.pnpm/fast-content-type-parse@3.0.0/node_modules/fast-content-type-parse/index.js"(exports, module) {
    "use strict";
    var NullObject = function NullObject2() {
    };
    NullObject.prototype = /* @__PURE__ */ Object.create(null);
    var paramRE = /; *([!#$%&'*+.^\w`|~-]+)=("(?:[\v\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\v\u0020-\u00ff])*"|[!#$%&'*+.^\w`|~-]+) */gu;
    var quotedPairRE = /\\([\v\u0020-\u00ff])/gu;
    var mediaTypeRE = /^[!#$%&'*+.^\w|~-]+\/[!#$%&'*+.^\w|~-]+$/u;
    var defaultContentType = { type: "", parameters: new NullObject() };
    Object.freeze(defaultContentType.parameters);
    Object.freeze(defaultContentType);
    function parse2(header) {
      if (typeof header !== "string") {
        throw new TypeError("argument header is required and must be a string");
      }
      let index = header.indexOf(";");
      const type = index !== -1 ? header.slice(0, index).trim() : header.trim();
      if (mediaTypeRE.test(type) === false) {
        throw new TypeError("invalid media type");
      }
      const result = {
        type: type.toLowerCase(),
        parameters: new NullObject()
      };
      if (index === -1) {
        return result;
      }
      let key;
      let match;
      let value;
      paramRE.lastIndex = index;
      while (match = paramRE.exec(header)) {
        if (match.index !== index) {
          throw new TypeError("invalid parameter format");
        }
        index += match[0].length;
        key = match[1].toLowerCase();
        value = match[2];
        if (value[0] === '"') {
          value = value.slice(1, value.length - 1);
          quotedPairRE.test(value) && (value = value.replace(quotedPairRE, "$1"));
        }
        result.parameters[key] = value;
      }
      if (index !== header.length) {
        throw new TypeError("invalid parameter format");
      }
      return result;
    }
    function safeParse2(header) {
      if (typeof header !== "string") {
        return defaultContentType;
      }
      let index = header.indexOf(";");
      const type = index !== -1 ? header.slice(0, index).trim() : header.trim();
      if (mediaTypeRE.test(type) === false) {
        return defaultContentType;
      }
      const result = {
        type: type.toLowerCase(),
        parameters: new NullObject()
      };
      if (index === -1) {
        return result;
      }
      let key;
      let match;
      let value;
      paramRE.lastIndex = index;
      while (match = paramRE.exec(header)) {
        if (match.index !== index) {
          return defaultContentType;
        }
        index += match[0].length;
        key = match[1].toLowerCase();
        value = match[2];
        if (value[0] === '"') {
          value = value.slice(1, value.length - 1);
          quotedPairRE.test(value) && (value = value.replace(quotedPairRE, "$1"));
        }
        result.parameters[key] = value;
      }
      if (index !== header.length) {
        return defaultContentType;
      }
      return result;
    }
    module.exports.default = { parse: parse2, safeParse: safeParse2 };
    module.exports.parse = parse2;
    module.exports.safeParse = safeParse2;
    module.exports.defaultContentType = defaultContentType;
  }
});

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
    var inc = (version, release, options, identifier, identifierBase) => {
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
    module.exports = inc;
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
    var inc = require_inc();
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
      inc,
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

// src/changelog-manager/changelog-manager.ts
import { readFile, writeFile } from "fs/promises";
var WATERMARK_REGEX = /<!-- prerelease: .+? -->/;
function splitChangelog(content) {
  const headerText = "## [Unreleased]";
  const start = content.indexOf(headerText);
  if (start === -1) {
    throw new Error("No [Unreleased] section found in changelog.");
  }
  const afterHeader = start + headerText.length;
  const separatorIdx = content.indexOf("\n---", afterHeader);
  const nextSectionIdx = content.indexOf("\n## [", afterHeader);
  let end;
  if (separatorIdx !== -1 && (nextSectionIdx === -1 || separatorIdx < nextSectionIdx)) {
    end = separatorIdx;
  } else if (nextSectionIdx !== -1) {
    end = nextSectionIdx;
  } else {
    end = content.length;
  }
  return {
    before: content.slice(0, start),
    section: content.slice(start, end),
    after: content.slice(end)
  };
}
function getSectionBody(section) {
  const newlineIdx = section.indexOf("\n");
  return newlineIdx === -1 ? "" : section.slice(newlineIdx + 1);
}
async function extractPrereleaseDelta(changelogPath) {
  const content = await readFile(changelogPath, { encoding: "utf-8" });
  const { section } = splitChangelog(content);
  const body = getSectionBody(section);
  const watermarkIdx = body.search(WATERMARK_REGEX);
  if (watermarkIdx !== -1) {
    return body.slice(0, watermarkIdx).trim();
  }
  return body.trim();
}
async function extractStableNotes(changelogPath) {
  return extractPrereleaseDelta(changelogPath);
}

// node_modules/.pnpm/universal-user-agent@7.0.3/node_modules/universal-user-agent/index.js
function getUserAgent() {
  if (typeof navigator === "object" && "userAgent" in navigator) {
    return navigator.userAgent;
  }
  if (typeof process === "object" && process.version !== void 0) {
    return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`;
  }
  return "<environment undetectable>";
}

// node_modules/.pnpm/before-after-hook@4.0.0/node_modules/before-after-hook/lib/register.js
function register(state, name, method, options) {
  if (typeof method !== "function") {
    throw new Error("method for before hook must be a function");
  }
  if (!options) {
    options = {};
  }
  if (Array.isArray(name)) {
    return name.reverse().reduce((callback, name2) => {
      return register.bind(null, state, name2, callback, options);
    }, method)();
  }
  return Promise.resolve().then(() => {
    if (!state.registry[name]) {
      return method(options);
    }
    return state.registry[name].reduce((method2, registered) => {
      return registered.hook.bind(null, method2, options);
    }, method)();
  });
}

// node_modules/.pnpm/before-after-hook@4.0.0/node_modules/before-after-hook/lib/add.js
function addHook(state, kind, name, hook2) {
  const orig = hook2;
  if (!state.registry[name]) {
    state.registry[name] = [];
  }
  if (kind === "before") {
    hook2 = (method, options) => {
      return Promise.resolve().then(orig.bind(null, options)).then(method.bind(null, options));
    };
  }
  if (kind === "after") {
    hook2 = (method, options) => {
      let result;
      return Promise.resolve().then(method.bind(null, options)).then((result_) => {
        result = result_;
        return orig(result, options);
      }).then(() => {
        return result;
      });
    };
  }
  if (kind === "error") {
    hook2 = (method, options) => {
      return Promise.resolve().then(method.bind(null, options)).catch((error) => {
        return orig(error, options);
      });
    };
  }
  state.registry[name].push({
    hook: hook2,
    orig
  });
}

// node_modules/.pnpm/before-after-hook@4.0.0/node_modules/before-after-hook/lib/remove.js
function removeHook(state, name, method) {
  if (!state.registry[name]) {
    return;
  }
  const index = state.registry[name].map((registered) => {
    return registered.orig;
  }).indexOf(method);
  if (index === -1) {
    return;
  }
  state.registry[name].splice(index, 1);
}

// node_modules/.pnpm/before-after-hook@4.0.0/node_modules/before-after-hook/index.js
var bind = Function.bind;
var bindable = bind.bind(bind);
function bindApi(hook2, state, name) {
  const removeHookRef = bindable(removeHook, null).apply(
    null,
    name ? [state, name] : [state]
  );
  hook2.api = { remove: removeHookRef };
  hook2.remove = removeHookRef;
  ["before", "error", "after", "wrap"].forEach((kind) => {
    const args = name ? [state, kind, name] : [state, kind];
    hook2[kind] = hook2.api[kind] = bindable(addHook, null).apply(null, args);
  });
}
function Singular() {
  const singularHookName = /* @__PURE__ */ Symbol("Singular");
  const singularHookState = {
    registry: {}
  };
  const singularHook = register.bind(null, singularHookState, singularHookName);
  bindApi(singularHook, singularHookState, singularHookName);
  return singularHook;
}
function Collection() {
  const state = {
    registry: {}
  };
  const hook2 = register.bind(null, state);
  bindApi(hook2, state);
  return hook2;
}
var before_after_hook_default = { Singular, Collection };

// node_modules/.pnpm/@octokit+endpoint@11.0.3/node_modules/@octokit/endpoint/dist-bundle/index.js
var VERSION = "0.0.0-development";
var userAgent = `octokit-endpoint.js/${VERSION} ${getUserAgent()}`;
var DEFAULTS = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": userAgent
  },
  mediaType: {
    format: ""
  }
};
function lowercaseKeys(object) {
  if (!object) {
    return {};
  }
  return Object.keys(object).reduce((newObj, key) => {
    newObj[key.toLowerCase()] = object[key];
    return newObj;
  }, {});
}
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) return false;
  if (Object.prototype.toString.call(value) !== "[object Object]") return false;
  const proto = Object.getPrototypeOf(value);
  if (proto === null) return true;
  const Ctor = Object.prototype.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor === "function" && Ctor instanceof Ctor && Function.prototype.call(Ctor) === Function.prototype.call(value);
}
function mergeDeep(defaults, options) {
  const result = Object.assign({}, defaults);
  Object.keys(options).forEach((key) => {
    if (isPlainObject(options[key])) {
      if (!(key in defaults)) Object.assign(result, { [key]: options[key] });
      else result[key] = mergeDeep(defaults[key], options[key]);
    } else {
      Object.assign(result, { [key]: options[key] });
    }
  });
  return result;
}
function removeUndefinedProperties(obj) {
  for (const key in obj) {
    if (obj[key] === void 0) {
      delete obj[key];
    }
  }
  return obj;
}
function merge(defaults, route, options) {
  if (typeof route === "string") {
    let [method, url] = route.split(" ");
    options = Object.assign(url ? { method, url } : { url: method }, options);
  } else {
    options = Object.assign({}, route);
  }
  options.headers = lowercaseKeys(options.headers);
  removeUndefinedProperties(options);
  removeUndefinedProperties(options.headers);
  const mergedOptions = mergeDeep(defaults || {}, options);
  if (options.url === "/graphql") {
    if (defaults && defaults.mediaType.previews?.length) {
      mergedOptions.mediaType.previews = defaults.mediaType.previews.filter(
        (preview) => !mergedOptions.mediaType.previews.includes(preview)
      ).concat(mergedOptions.mediaType.previews);
    }
    mergedOptions.mediaType.previews = (mergedOptions.mediaType.previews || []).map((preview) => preview.replace(/-preview/, ""));
  }
  return mergedOptions;
}
function addQueryParameters(url, parameters) {
  const separator = /\?/.test(url) ? "&" : "?";
  const names = Object.keys(parameters);
  if (names.length === 0) {
    return url;
  }
  return url + separator + names.map((name) => {
    if (name === "q") {
      return "q=" + parameters.q.split("+").map(encodeURIComponent).join("+");
    }
    return `${name}=${encodeURIComponent(parameters[name])}`;
  }).join("&");
}
var urlVariableRegex = /\{[^{}}]+\}/g;
function removeNonChars(variableName) {
  return variableName.replace(/(?:^\W+)|(?:(?<!\W)\W+$)/g, "").split(/,/);
}
function extractUrlVariableNames(url) {
  const matches = url.match(urlVariableRegex);
  if (!matches) {
    return [];
  }
  return matches.map(removeNonChars).reduce((a, b) => a.concat(b), []);
}
function omit(object, keysToOmit) {
  const result = { __proto__: null };
  for (const key of Object.keys(object)) {
    if (keysToOmit.indexOf(key) === -1) {
      result[key] = object[key];
    }
  }
  return result;
}
function encodeReserved(str) {
  return str.split(/(%[0-9A-Fa-f]{2})/g).map(function(part) {
    if (!/%[0-9A-Fa-f]/.test(part)) {
      part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
    }
    return part;
  }).join("");
}
function encodeUnreserved(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
function encodeValue(operator, value, key) {
  value = operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);
  if (key) {
    return encodeUnreserved(key) + "=" + value;
  } else {
    return value;
  }
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isKeyOperator(operator) {
  return operator === ";" || operator === "&" || operator === "?";
}
function getValues(context, operator, key, modifier) {
  var value = context[key], result = [];
  if (isDefined(value) && value !== "") {
    if (typeof value === "string" || typeof value === "number" || typeof value === "bigint" || typeof value === "boolean") {
      value = value.toString();
      if (modifier && modifier !== "*") {
        value = value.substring(0, parseInt(modifier, 10));
      }
      result.push(
        encodeValue(operator, value, isKeyOperator(operator) ? key : "")
      );
    } else {
      if (modifier === "*") {
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function(value2) {
            result.push(
              encodeValue(operator, value2, isKeyOperator(operator) ? key : "")
            );
          });
        } else {
          Object.keys(value).forEach(function(k) {
            if (isDefined(value[k])) {
              result.push(encodeValue(operator, value[k], k));
            }
          });
        }
      } else {
        const tmp = [];
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function(value2) {
            tmp.push(encodeValue(operator, value2));
          });
        } else {
          Object.keys(value).forEach(function(k) {
            if (isDefined(value[k])) {
              tmp.push(encodeUnreserved(k));
              tmp.push(encodeValue(operator, value[k].toString()));
            }
          });
        }
        if (isKeyOperator(operator)) {
          result.push(encodeUnreserved(key) + "=" + tmp.join(","));
        } else if (tmp.length !== 0) {
          result.push(tmp.join(","));
        }
      }
    }
  } else {
    if (operator === ";") {
      if (isDefined(value)) {
        result.push(encodeUnreserved(key));
      }
    } else if (value === "" && (operator === "&" || operator === "?")) {
      result.push(encodeUnreserved(key) + "=");
    } else if (value === "") {
      result.push("");
    }
  }
  return result;
}
function parseUrl(template) {
  return {
    expand: expand.bind(null, template)
  };
}
function expand(template, context) {
  var operators = ["+", "#", ".", "/", ";", "?", "&"];
  template = template.replace(
    /\{([^\{\}]+)\}|([^\{\}]+)/g,
    function(_, expression, literal) {
      if (expression) {
        let operator = "";
        const values = [];
        if (operators.indexOf(expression.charAt(0)) !== -1) {
          operator = expression.charAt(0);
          expression = expression.substr(1);
        }
        expression.split(/,/g).forEach(function(variable) {
          var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
          values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
        });
        if (operator && operator !== "+") {
          var separator = ",";
          if (operator === "?") {
            separator = "&";
          } else if (operator !== "#") {
            separator = operator;
          }
          return (values.length !== 0 ? operator : "") + values.join(separator);
        } else {
          return values.join(",");
        }
      } else {
        return encodeReserved(literal);
      }
    }
  );
  if (template === "/") {
    return template;
  } else {
    return template.replace(/\/$/, "");
  }
}
function parse(options) {
  let method = options.method.toUpperCase();
  let url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
  let headers = Object.assign({}, options.headers);
  let body;
  let parameters = omit(options, [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "mediaType"
  ]);
  const urlVariableNames = extractUrlVariableNames(url);
  url = parseUrl(url).expand(parameters);
  if (!/^http/.test(url)) {
    url = options.baseUrl + url;
  }
  const omittedParameters = Object.keys(options).filter((option) => urlVariableNames.includes(option)).concat("baseUrl");
  const remainingParameters = omit(parameters, omittedParameters);
  const isBinaryRequest = /application\/octet-stream/i.test(headers.accept);
  if (!isBinaryRequest) {
    if (options.mediaType.format) {
      headers.accept = headers.accept.split(/,/).map(
        (format) => format.replace(
          /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
          `application/vnd$1$2.${options.mediaType.format}`
        )
      ).join(",");
    }
    if (url.endsWith("/graphql")) {
      if (options.mediaType.previews?.length) {
        const previewsFromAcceptHeader = headers.accept.match(/(?<![\w-])[\w-]+(?=-preview)/g) || [];
        headers.accept = previewsFromAcceptHeader.concat(options.mediaType.previews).map((preview) => {
          const format = options.mediaType.format ? `.${options.mediaType.format}` : "+json";
          return `application/vnd.github.${preview}-preview${format}`;
        }).join(",");
      }
    }
  }
  if (["GET", "HEAD"].includes(method)) {
    url = addQueryParameters(url, remainingParameters);
  } else {
    if ("data" in remainingParameters) {
      body = remainingParameters.data;
    } else {
      if (Object.keys(remainingParameters).length) {
        body = remainingParameters;
      }
    }
  }
  if (!headers["content-type"] && typeof body !== "undefined") {
    headers["content-type"] = "application/json; charset=utf-8";
  }
  if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
    body = "";
  }
  return Object.assign(
    { method, url, headers },
    typeof body !== "undefined" ? { body } : null,
    options.request ? { request: options.request } : null
  );
}
function endpointWithDefaults(defaults, route, options) {
  return parse(merge(defaults, route, options));
}
function withDefaults(oldDefaults, newDefaults) {
  const DEFAULTS2 = merge(oldDefaults, newDefaults);
  const endpoint2 = endpointWithDefaults.bind(null, DEFAULTS2);
  return Object.assign(endpoint2, {
    DEFAULTS: DEFAULTS2,
    defaults: withDefaults.bind(null, DEFAULTS2),
    merge: merge.bind(null, DEFAULTS2),
    parse
  });
}
var endpoint = withDefaults(null, DEFAULTS);

// node_modules/.pnpm/@octokit+request@10.0.8/node_modules/@octokit/request/dist-bundle/index.js
var import_fast_content_type_parse = __toESM(require_fast_content_type_parse(), 1);

// node_modules/.pnpm/json-with-bigint@3.5.8/node_modules/json-with-bigint/json-with-bigint.js
var intRegex = /^-?\d+$/;
var noiseValue = /^-?\d+n+$/;
var originalStringify = JSON.stringify;
var originalParse = JSON.parse;
var customFormat = /^-?\d+n$/;
var bigIntsStringify = /([\[:])?"(-?\d+)n"($|([\\n]|\s)*(\s|[\\n])*[,\}\]])/g;
var noiseStringify = /([\[:])?("-?\d+n+)n("$|"([\\n]|\s)*(\s|[\\n])*[,\}\]])/g;
var JSONStringify = (value, replacer, space) => {
  if ("rawJSON" in JSON) {
    return originalStringify(
      value,
      (key, value2) => {
        if (typeof value2 === "bigint") return JSON.rawJSON(value2.toString());
        if (typeof replacer === "function") return replacer(key, value2);
        if (Array.isArray(replacer) && replacer.includes(key)) return value2;
        return value2;
      },
      space
    );
  }
  if (!value) return originalStringify(value, replacer, space);
  const convertedToCustomJSON = originalStringify(
    value,
    (key, value2) => {
      const isNoise = typeof value2 === "string" && noiseValue.test(value2);
      if (isNoise) return value2.toString() + "n";
      if (typeof value2 === "bigint") return value2.toString() + "n";
      if (typeof replacer === "function") return replacer(key, value2);
      if (Array.isArray(replacer) && replacer.includes(key)) return value2;
      return value2;
    },
    space
  );
  const processedJSON = convertedToCustomJSON.replace(
    bigIntsStringify,
    "$1$2$3"
  );
  const denoisedJSON = processedJSON.replace(noiseStringify, "$1$2$3");
  return denoisedJSON;
};
var featureCache = /* @__PURE__ */ new Map();
var isContextSourceSupported = () => {
  const parseFingerprint = JSON.parse.toString();
  if (featureCache.has(parseFingerprint)) {
    return featureCache.get(parseFingerprint);
  }
  try {
    const result = JSON.parse(
      "1",
      (_, __, context) => !!context?.source && context.source === "1"
    );
    featureCache.set(parseFingerprint, result);
    return result;
  } catch {
    featureCache.set(parseFingerprint, false);
    return false;
  }
};
var convertMarkedBigIntsReviver = (key, value, context, userReviver) => {
  const isCustomFormatBigInt = typeof value === "string" && customFormat.test(value);
  if (isCustomFormatBigInt) return BigInt(value.slice(0, -1));
  const isNoiseValue = typeof value === "string" && noiseValue.test(value);
  if (isNoiseValue) return value.slice(0, -1);
  if (typeof userReviver !== "function") return value;
  return userReviver(key, value, context);
};
var JSONParseV2 = (text, reviver) => {
  return JSON.parse(text, (key, value, context) => {
    const isBigNumber = typeof value === "number" && (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER);
    const isInt = context && intRegex.test(context.source);
    const isBigInt = isBigNumber && isInt;
    if (isBigInt) return BigInt(context.source);
    if (typeof reviver !== "function") return value;
    return reviver(key, value, context);
  });
};
var MAX_INT = Number.MAX_SAFE_INTEGER.toString();
var MAX_DIGITS = MAX_INT.length;
var stringsOrLargeNumbers = /"(?:\\.|[^"])*"|-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?/g;
var noiseValueWithQuotes = /^"-?\d+n+"$/;
var JSONParse = (text, reviver) => {
  if (!text) return originalParse(text, reviver);
  if (isContextSourceSupported()) return JSONParseV2(text, reviver);
  const serializedData = text.replace(
    stringsOrLargeNumbers,
    (text2, digits, fractional, exponential) => {
      const isString = text2[0] === '"';
      const isNoise = isString && noiseValueWithQuotes.test(text2);
      if (isNoise) return text2.substring(0, text2.length - 1) + 'n"';
      const isFractionalOrExponential = fractional || exponential;
      const isLessThanMaxSafeInt = digits && (digits.length < MAX_DIGITS || digits.length === MAX_DIGITS && digits <= MAX_INT);
      if (isString || isFractionalOrExponential || isLessThanMaxSafeInt)
        return text2;
      return '"' + text2 + 'n"';
    }
  );
  return originalParse(
    serializedData,
    (key, value, context) => convertMarkedBigIntsReviver(key, value, context, reviver)
  );
};

// node_modules/.pnpm/@octokit+request-error@7.1.0/node_modules/@octokit/request-error/dist-src/index.js
var RequestError = class extends Error {
  name;
  /**
   * http status code
   */
  status;
  /**
   * Request options that lead to the error.
   */
  request;
  /**
   * Response object if a response was received
   */
  response;
  constructor(message, statusCode, options) {
    super(message, { cause: options.cause });
    this.name = "HttpError";
    this.status = Number.parseInt(statusCode);
    if (Number.isNaN(this.status)) {
      this.status = 0;
    }
    if ("response" in options) {
      this.response = options.response;
    }
    const requestCopy = Object.assign({}, options.request);
    if (options.request.headers.authorization) {
      requestCopy.headers = Object.assign({}, options.request.headers, {
        authorization: options.request.headers.authorization.replace(
          /(?<! ) .*$/,
          " [REDACTED]"
        )
      });
    }
    requestCopy.url = requestCopy.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
    this.request = requestCopy;
  }
};

// node_modules/.pnpm/@octokit+request@10.0.8/node_modules/@octokit/request/dist-bundle/index.js
var VERSION2 = "10.0.8";
var defaults_default = {
  headers: {
    "user-agent": `octokit-request.js/${VERSION2} ${getUserAgent()}`
  }
};
function isPlainObject2(value) {
  if (typeof value !== "object" || value === null) return false;
  if (Object.prototype.toString.call(value) !== "[object Object]") return false;
  const proto = Object.getPrototypeOf(value);
  if (proto === null) return true;
  const Ctor = Object.prototype.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor === "function" && Ctor instanceof Ctor && Function.prototype.call(Ctor) === Function.prototype.call(value);
}
var noop = () => "";
async function fetchWrapper(requestOptions) {
  const fetch = requestOptions.request?.fetch || globalThis.fetch;
  if (!fetch) {
    throw new Error(
      "fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing"
    );
  }
  const log = requestOptions.request?.log || console;
  const parseSuccessResponseBody = requestOptions.request?.parseSuccessResponseBody !== false;
  const body = isPlainObject2(requestOptions.body) || Array.isArray(requestOptions.body) ? JSONStringify(requestOptions.body) : requestOptions.body;
  const requestHeaders = Object.fromEntries(
    Object.entries(requestOptions.headers).map(([name, value]) => [
      name,
      String(value)
    ])
  );
  let fetchResponse;
  try {
    fetchResponse = await fetch(requestOptions.url, {
      method: requestOptions.method,
      body,
      redirect: requestOptions.request?.redirect,
      headers: requestHeaders,
      signal: requestOptions.request?.signal,
      // duplex must be set if request.body is ReadableStream or Async Iterables.
      // See https://fetch.spec.whatwg.org/#dom-requestinit-duplex.
      ...requestOptions.body && { duplex: "half" }
    });
  } catch (error) {
    let message = "Unknown Error";
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        error.status = 500;
        throw error;
      }
      message = error.message;
      if (error.name === "TypeError" && "cause" in error) {
        if (error.cause instanceof Error) {
          message = error.cause.message;
        } else if (typeof error.cause === "string") {
          message = error.cause;
        }
      }
    }
    const requestError = new RequestError(message, 500, {
      request: requestOptions
    });
    requestError.cause = error;
    throw requestError;
  }
  const status = fetchResponse.status;
  const url = fetchResponse.url;
  const responseHeaders = {};
  for (const [key, value] of fetchResponse.headers) {
    responseHeaders[key] = value;
  }
  const octokitResponse = {
    url,
    status,
    headers: responseHeaders,
    data: ""
  };
  if ("deprecation" in responseHeaders) {
    const matches = responseHeaders.link && responseHeaders.link.match(/<([^<>]+)>; rel="deprecation"/);
    const deprecationLink = matches && matches.pop();
    log.warn(
      `[@octokit/request] "${requestOptions.method} ${requestOptions.url}" is deprecated. It is scheduled to be removed on ${responseHeaders.sunset}${deprecationLink ? `. See ${deprecationLink}` : ""}`
    );
  }
  if (status === 204 || status === 205) {
    return octokitResponse;
  }
  if (requestOptions.method === "HEAD") {
    if (status < 400) {
      return octokitResponse;
    }
    throw new RequestError(fetchResponse.statusText, status, {
      response: octokitResponse,
      request: requestOptions
    });
  }
  if (status === 304) {
    octokitResponse.data = await getResponseData(fetchResponse);
    throw new RequestError("Not modified", status, {
      response: octokitResponse,
      request: requestOptions
    });
  }
  if (status >= 400) {
    octokitResponse.data = await getResponseData(fetchResponse);
    throw new RequestError(toErrorMessage(octokitResponse.data), status, {
      response: octokitResponse,
      request: requestOptions
    });
  }
  octokitResponse.data = parseSuccessResponseBody ? await getResponseData(fetchResponse) : fetchResponse.body;
  return octokitResponse;
}
async function getResponseData(response) {
  const contentType = response.headers.get("content-type");
  if (!contentType) {
    return response.text().catch(noop);
  }
  const mimetype = (0, import_fast_content_type_parse.safeParse)(contentType);
  if (isJSONResponse(mimetype)) {
    let text = "";
    try {
      text = await response.text();
      return JSONParse(text);
    } catch (err) {
      return text;
    }
  } else if (mimetype.type.startsWith("text/") || mimetype.parameters.charset?.toLowerCase() === "utf-8") {
    return response.text().catch(noop);
  } else {
    return response.arrayBuffer().catch(
      /* v8 ignore next -- @preserve */
      () => new ArrayBuffer(0)
    );
  }
}
function isJSONResponse(mimetype) {
  return mimetype.type === "application/json" || mimetype.type === "application/scim+json";
}
function toErrorMessage(data) {
  if (typeof data === "string") {
    return data;
  }
  if (data instanceof ArrayBuffer) {
    return "Unknown error";
  }
  if ("message" in data) {
    const suffix = "documentation_url" in data ? ` - ${data.documentation_url}` : "";
    return Array.isArray(data.errors) ? `${data.message}: ${data.errors.map((v) => JSON.stringify(v)).join(", ")}${suffix}` : `${data.message}${suffix}`;
  }
  return `Unknown error: ${JSON.stringify(data)}`;
}
function withDefaults2(oldEndpoint, newDefaults) {
  const endpoint2 = oldEndpoint.defaults(newDefaults);
  const newApi = function(route, parameters) {
    const endpointOptions = endpoint2.merge(route, parameters);
    if (!endpointOptions.request || !endpointOptions.request.hook) {
      return fetchWrapper(endpoint2.parse(endpointOptions));
    }
    const request2 = (route2, parameters2) => {
      return fetchWrapper(
        endpoint2.parse(endpoint2.merge(route2, parameters2))
      );
    };
    Object.assign(request2, {
      endpoint: endpoint2,
      defaults: withDefaults2.bind(null, endpoint2)
    });
    return endpointOptions.request.hook(request2, endpointOptions);
  };
  return Object.assign(newApi, {
    endpoint: endpoint2,
    defaults: withDefaults2.bind(null, endpoint2)
  });
}
var request = withDefaults2(endpoint, defaults_default);

// node_modules/.pnpm/@octokit+graphql@9.0.3/node_modules/@octokit/graphql/dist-bundle/index.js
var VERSION3 = "0.0.0-development";
function _buildMessageForResponseErrors(data) {
  return `Request failed due to following response errors:
` + data.errors.map((e) => ` - ${e.message}`).join("\n");
}
var GraphqlResponseError = class extends Error {
  constructor(request2, headers, response) {
    super(_buildMessageForResponseErrors(response));
    this.request = request2;
    this.headers = headers;
    this.response = response;
    this.errors = response.errors;
    this.data = response.data;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
  name = "GraphqlResponseError";
  errors;
  data;
};
var NON_VARIABLE_OPTIONS = [
  "method",
  "baseUrl",
  "url",
  "headers",
  "request",
  "query",
  "mediaType",
  "operationName"
];
var FORBIDDEN_VARIABLE_OPTIONS = ["query", "method", "url"];
var GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;
function graphql(request2, query, options) {
  if (options) {
    if (typeof query === "string" && "query" in options) {
      return Promise.reject(
        new Error(`[@octokit/graphql] "query" cannot be used as variable name`)
      );
    }
    for (const key in options) {
      if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key)) continue;
      return Promise.reject(
        new Error(
          `[@octokit/graphql] "${key}" cannot be used as variable name`
        )
      );
    }
  }
  const parsedOptions = typeof query === "string" ? Object.assign({ query }, options) : query;
  const requestOptions = Object.keys(
    parsedOptions
  ).reduce((result, key) => {
    if (NON_VARIABLE_OPTIONS.includes(key)) {
      result[key] = parsedOptions[key];
      return result;
    }
    if (!result.variables) {
      result.variables = {};
    }
    result.variables[key] = parsedOptions[key];
    return result;
  }, {});
  const baseUrl = parsedOptions.baseUrl || request2.endpoint.DEFAULTS.baseUrl;
  if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
    requestOptions.url = baseUrl.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql");
  }
  return request2(requestOptions).then((response) => {
    if (response.data.errors) {
      const headers = {};
      for (const key of Object.keys(response.headers)) {
        headers[key] = response.headers[key];
      }
      throw new GraphqlResponseError(
        requestOptions,
        headers,
        response.data
      );
    }
    return response.data.data;
  });
}
function withDefaults3(request2, newDefaults) {
  const newRequest = request2.defaults(newDefaults);
  const newApi = (query, options) => {
    return graphql(newRequest, query, options);
  };
  return Object.assign(newApi, {
    defaults: withDefaults3.bind(null, newRequest),
    endpoint: newRequest.endpoint
  });
}
var graphql2 = withDefaults3(request, {
  headers: {
    "user-agent": `octokit-graphql.js/${VERSION3} ${getUserAgent()}`
  },
  method: "POST",
  url: "/graphql"
});
function withCustomRequest(customRequest) {
  return withDefaults3(customRequest, {
    method: "POST",
    url: "/graphql"
  });
}

// node_modules/.pnpm/@octokit+auth-token@6.0.0/node_modules/@octokit/auth-token/dist-bundle/index.js
var b64url = "(?:[a-zA-Z0-9_-]+)";
var sep = "\\.";
var jwtRE = new RegExp(`^${b64url}${sep}${b64url}${sep}${b64url}$`);
var isJWT = jwtRE.test.bind(jwtRE);
async function auth(token) {
  const isApp = isJWT(token);
  const isInstallation = token.startsWith("v1.") || token.startsWith("ghs_");
  const isUserToServer = token.startsWith("ghu_");
  const tokenType = isApp ? "app" : isInstallation ? "installation" : isUserToServer ? "user-to-server" : "oauth";
  return {
    type: "token",
    token,
    tokenType
  };
}
function withAuthorizationPrefix(token) {
  if (token.split(/\./).length === 3) {
    return `bearer ${token}`;
  }
  return `token ${token}`;
}
async function hook(token, request2, route, parameters) {
  const endpoint2 = request2.endpoint.merge(
    route,
    parameters
  );
  endpoint2.headers.authorization = withAuthorizationPrefix(token);
  return request2(endpoint2);
}
var createTokenAuth = function createTokenAuth2(token) {
  if (!token) {
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  }
  if (typeof token !== "string") {
    throw new Error(
      "[@octokit/auth-token] Token passed to createTokenAuth is not a string"
    );
  }
  token = token.replace(/^(token|bearer) +/i, "");
  return Object.assign(auth.bind(null, token), {
    hook: hook.bind(null, token)
  });
};

// node_modules/.pnpm/@octokit+core@7.0.6/node_modules/@octokit/core/dist-src/version.js
var VERSION4 = "7.0.6";

// node_modules/.pnpm/@octokit+core@7.0.6/node_modules/@octokit/core/dist-src/index.js
var noop2 = () => {
};
var consoleWarn = console.warn.bind(console);
var consoleError = console.error.bind(console);
function createLogger(logger = {}) {
  if (typeof logger.debug !== "function") {
    logger.debug = noop2;
  }
  if (typeof logger.info !== "function") {
    logger.info = noop2;
  }
  if (typeof logger.warn !== "function") {
    logger.warn = consoleWarn;
  }
  if (typeof logger.error !== "function") {
    logger.error = consoleError;
  }
  return logger;
}
var userAgentTrail = `octokit-core.js/${VERSION4} ${getUserAgent()}`;
var Octokit = class {
  static VERSION = VERSION4;
  static defaults(defaults) {
    const OctokitWithDefaults = class extends this {
      constructor(...args) {
        const options = args[0] || {};
        if (typeof defaults === "function") {
          super(defaults(options));
          return;
        }
        super(
          Object.assign(
            {},
            defaults,
            options,
            options.userAgent && defaults.userAgent ? {
              userAgent: `${options.userAgent} ${defaults.userAgent}`
            } : null
          )
        );
      }
    };
    return OctokitWithDefaults;
  }
  static plugins = [];
  /**
   * Attach a plugin (or many) to your Octokit instance.
   *
   * @example
   * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
   */
  static plugin(...newPlugins) {
    const currentPlugins = this.plugins;
    const NewOctokit = class extends this {
      static plugins = currentPlugins.concat(
        newPlugins.filter((plugin) => !currentPlugins.includes(plugin))
      );
    };
    return NewOctokit;
  }
  constructor(options = {}) {
    const hook2 = new before_after_hook_default.Collection();
    const requestDefaults = {
      baseUrl: request.endpoint.DEFAULTS.baseUrl,
      headers: {},
      request: Object.assign({}, options.request, {
        // @ts-ignore internal usage only, no need to type
        hook: hook2.bind(null, "request")
      }),
      mediaType: {
        previews: [],
        format: ""
      }
    };
    requestDefaults.headers["user-agent"] = options.userAgent ? `${options.userAgent} ${userAgentTrail}` : userAgentTrail;
    if (options.baseUrl) {
      requestDefaults.baseUrl = options.baseUrl;
    }
    if (options.previews) {
      requestDefaults.mediaType.previews = options.previews;
    }
    if (options.timeZone) {
      requestDefaults.headers["time-zone"] = options.timeZone;
    }
    this.request = request.defaults(requestDefaults);
    this.graphql = withCustomRequest(this.request).defaults(requestDefaults);
    this.log = createLogger(options.log);
    this.hook = hook2;
    if (!options.authStrategy) {
      if (!options.auth) {
        this.auth = async () => ({
          type: "unauthenticated"
        });
      } else {
        const auth2 = createTokenAuth(options.auth);
        hook2.wrap("request", auth2.hook);
        this.auth = auth2;
      }
    } else {
      const { authStrategy, ...otherOptions } = options;
      const auth2 = authStrategy(
        Object.assign(
          {
            request: this.request,
            log: this.log,
            // we pass the current octokit instance as well as its constructor options
            // to allow for authentication strategies that return a new octokit instance
            // that shares the same internal state as the current one. The original
            // requirement for this was the "event-octokit" authentication strategy
            // of https://github.com/probot/octokit-auth-probot.
            octokit: this,
            octokitOptions: otherOptions
          },
          options.auth
        )
      );
      hook2.wrap("request", auth2.hook);
      this.auth = auth2;
    }
    const classConstructor = this.constructor;
    for (let i = 0; i < classConstructor.plugins.length; ++i) {
      Object.assign(this, classConstructor.plugins[i](this, options));
    }
  }
  // assigned during constructor
  request;
  graphql;
  log;
  hook;
  // TODO: type `octokit.auth` based on passed options.authStrategy
  auth;
};

// node_modules/.pnpm/@octokit+plugin-request-log@6.0.0_@octokit+core@7.0.6/node_modules/@octokit/plugin-request-log/dist-src/version.js
var VERSION5 = "6.0.0";

// node_modules/.pnpm/@octokit+plugin-request-log@6.0.0_@octokit+core@7.0.6/node_modules/@octokit/plugin-request-log/dist-src/index.js
function requestLog(octokit) {
  octokit.hook.wrap("request", (request2, options) => {
    octokit.log.debug("request", options);
    const start = Date.now();
    const requestOptions = octokit.request.endpoint.parse(options);
    const path = requestOptions.url.replace(options.baseUrl, "");
    return request2(options).then((response) => {
      const requestId = response.headers["x-github-request-id"];
      octokit.log.info(
        `${requestOptions.method} ${path} - ${response.status} with id ${requestId} in ${Date.now() - start}ms`
      );
      return response;
    }).catch((error) => {
      const requestId = error.response?.headers["x-github-request-id"] || "UNKNOWN";
      octokit.log.error(
        `${requestOptions.method} ${path} - ${error.status} with id ${requestId} in ${Date.now() - start}ms`
      );
      throw error;
    });
  });
}
requestLog.VERSION = VERSION5;

// node_modules/.pnpm/@octokit+plugin-paginate-rest@14.0.0_@octokit+core@7.0.6/node_modules/@octokit/plugin-paginate-rest/dist-bundle/index.js
var VERSION6 = "0.0.0-development";
function normalizePaginatedListResponse(response) {
  if (!response.data) {
    return {
      ...response,
      data: []
    };
  }
  const responseNeedsNormalization = ("total_count" in response.data || "total_commits" in response.data) && !("url" in response.data);
  if (!responseNeedsNormalization) return response;
  const incompleteResults = response.data.incomplete_results;
  const repositorySelection = response.data.repository_selection;
  const totalCount = response.data.total_count;
  const totalCommits = response.data.total_commits;
  delete response.data.incomplete_results;
  delete response.data.repository_selection;
  delete response.data.total_count;
  delete response.data.total_commits;
  const namespaceKey = Object.keys(response.data)[0];
  const data = response.data[namespaceKey];
  response.data = data;
  if (typeof incompleteResults !== "undefined") {
    response.data.incomplete_results = incompleteResults;
  }
  if (typeof repositorySelection !== "undefined") {
    response.data.repository_selection = repositorySelection;
  }
  response.data.total_count = totalCount;
  response.data.total_commits = totalCommits;
  return response;
}
function iterator(octokit, route, parameters) {
  const options = typeof route === "function" ? route.endpoint(parameters) : octokit.request.endpoint(route, parameters);
  const requestMethod = typeof route === "function" ? route : octokit.request;
  const method = options.method;
  const headers = options.headers;
  let url = options.url;
  return {
    [Symbol.asyncIterator]: () => ({
      async next() {
        if (!url) return { done: true };
        try {
          const response = await requestMethod({ method, url, headers });
          const normalizedResponse = normalizePaginatedListResponse(response);
          url = ((normalizedResponse.headers.link || "").match(
            /<([^<>]+)>;\s*rel="next"/
          ) || [])[1];
          if (!url && "total_commits" in normalizedResponse.data) {
            const parsedUrl = new URL(normalizedResponse.url);
            const params = parsedUrl.searchParams;
            const page = parseInt(params.get("page") || "1", 10);
            const per_page = parseInt(params.get("per_page") || "250", 10);
            if (page * per_page < normalizedResponse.data.total_commits) {
              params.set("page", String(page + 1));
              url = parsedUrl.toString();
            }
          }
          return { value: normalizedResponse };
        } catch (error) {
          if (error.status !== 409) throw error;
          url = "";
          return {
            value: {
              status: 200,
              headers: {},
              data: []
            }
          };
        }
      }
    })
  };
}
function paginate(octokit, route, parameters, mapFn) {
  if (typeof parameters === "function") {
    mapFn = parameters;
    parameters = void 0;
  }
  return gather(
    octokit,
    [],
    iterator(octokit, route, parameters)[Symbol.asyncIterator](),
    mapFn
  );
}
function gather(octokit, results, iterator2, mapFn) {
  return iterator2.next().then((result) => {
    if (result.done) {
      return results;
    }
    let earlyExit = false;
    function done() {
      earlyExit = true;
    }
    results = results.concat(
      mapFn ? mapFn(result.value, done) : result.value.data
    );
    if (earlyExit) {
      return results;
    }
    return gather(octokit, results, iterator2, mapFn);
  });
}
var composePaginateRest = Object.assign(paginate, {
  iterator
});
function paginateRest(octokit) {
  return {
    paginate: Object.assign(paginate.bind(null, octokit), {
      iterator: iterator.bind(null, octokit)
    })
  };
}
paginateRest.VERSION = VERSION6;

// node_modules/.pnpm/@octokit+plugin-rest-endpoi_88f1cfdccbcd12f9bd89a662a3d08bce/node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/version.js
var VERSION7 = "17.0.0";

// node_modules/.pnpm/@octokit+plugin-rest-endpoi_88f1cfdccbcd12f9bd89a662a3d08bce/node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/generated/endpoints.js
var Endpoints = {
  actions: {
    addCustomLabelsToSelfHostedRunnerForOrg: [
      "POST /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    addCustomLabelsToSelfHostedRunnerForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    addRepoAccessToSelfHostedRunnerGroupInOrg: [
      "PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}"
    ],
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
    ],
    addSelectedRepoToOrgVariable: [
      "PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"
    ],
    approveWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"
    ],
    cancelWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"
    ],
    createEnvironmentVariable: [
      "POST /repos/{owner}/{repo}/environments/{environment_name}/variables"
    ],
    createHostedRunnerForOrg: ["POST /orgs/{org}/actions/hosted-runners"],
    createOrUpdateEnvironmentSecret: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"
    ],
    createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"
    ],
    createOrgVariable: ["POST /orgs/{org}/actions/variables"],
    createRegistrationTokenForOrg: [
      "POST /orgs/{org}/actions/runners/registration-token"
    ],
    createRegistrationTokenForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/registration-token"
    ],
    createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"],
    createRemoveTokenForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/remove-token"
    ],
    createRepoVariable: ["POST /repos/{owner}/{repo}/actions/variables"],
    createWorkflowDispatch: [
      "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"
    ],
    deleteActionsCacheById: [
      "DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}"
    ],
    deleteActionsCacheByKey: [
      "DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}"
    ],
    deleteArtifact: [
      "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"
    ],
    deleteCustomImageFromOrg: [
      "DELETE /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}"
    ],
    deleteCustomImageVersionFromOrg: [
      "DELETE /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}/versions/{version}"
    ],
    deleteEnvironmentSecret: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"
    ],
    deleteEnvironmentVariable: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"
    ],
    deleteHostedRunnerForOrg: [
      "DELETE /orgs/{org}/actions/hosted-runners/{hosted_runner_id}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"],
    deleteOrgVariable: ["DELETE /orgs/{org}/actions/variables/{name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"
    ],
    deleteRepoVariable: [
      "DELETE /repos/{owner}/{repo}/actions/variables/{name}"
    ],
    deleteSelfHostedRunnerFromOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}"
    ],
    deleteSelfHostedRunnerFromRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"
    ],
    deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],
    deleteWorkflowRunLogs: [
      "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"
    ],
    disableSelectedRepositoryGithubActionsOrganization: [
      "DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"
    ],
    disableWorkflow: [
      "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"
    ],
    downloadArtifact: [
      "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"
    ],
    downloadJobLogsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"
    ],
    downloadWorkflowRunAttemptLogs: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs"
    ],
    downloadWorkflowRunLogs: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"
    ],
    enableSelectedRepositoryGithubActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"
    ],
    enableWorkflow: [
      "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"
    ],
    forceCancelWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel"
    ],
    generateRunnerJitconfigForOrg: [
      "POST /orgs/{org}/actions/runners/generate-jitconfig"
    ],
    generateRunnerJitconfigForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig"
    ],
    getActionsCacheList: ["GET /repos/{owner}/{repo}/actions/caches"],
    getActionsCacheUsage: ["GET /repos/{owner}/{repo}/actions/cache/usage"],
    getActionsCacheUsageByRepoForOrg: [
      "GET /orgs/{org}/actions/cache/usage-by-repository"
    ],
    getActionsCacheUsageForOrg: ["GET /orgs/{org}/actions/cache/usage"],
    getAllowedActionsOrganization: [
      "GET /orgs/{org}/actions/permissions/selected-actions"
    ],
    getAllowedActionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/selected-actions"
    ],
    getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
    getCustomImageForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}"
    ],
    getCustomImageVersionForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}/versions/{version}"
    ],
    getCustomOidcSubClaimForRepo: [
      "GET /repos/{owner}/{repo}/actions/oidc/customization/sub"
    ],
    getEnvironmentPublicKey: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key"
    ],
    getEnvironmentSecret: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"
    ],
    getEnvironmentVariable: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"
    ],
    getGithubActionsDefaultWorkflowPermissionsOrganization: [
      "GET /orgs/{org}/actions/permissions/workflow"
    ],
    getGithubActionsDefaultWorkflowPermissionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/workflow"
    ],
    getGithubActionsPermissionsOrganization: [
      "GET /orgs/{org}/actions/permissions"
    ],
    getGithubActionsPermissionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions"
    ],
    getHostedRunnerForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/{hosted_runner_id}"
    ],
    getHostedRunnersGithubOwnedImagesForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/images/github-owned"
    ],
    getHostedRunnersLimitsForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/limits"
    ],
    getHostedRunnersMachineSpecsForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/machine-sizes"
    ],
    getHostedRunnersPartnerImagesForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/images/partner"
    ],
    getHostedRunnersPlatformsForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/platforms"
    ],
    getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
    getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"],
    getOrgVariable: ["GET /orgs/{org}/actions/variables/{name}"],
    getPendingDeploymentsForRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"
    ],
    getRepoPermissions: [
      "GET /repos/{owner}/{repo}/actions/permissions",
      {},
      { renamed: ["actions", "getGithubActionsPermissionsRepository"] }
    ],
    getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"],
    getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
    getRepoVariable: ["GET /repos/{owner}/{repo}/actions/variables/{name}"],
    getReviewsForRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"
    ],
    getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"],
    getSelfHostedRunnerForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/{runner_id}"
    ],
    getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],
    getWorkflowAccessToRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/access"
    ],
    getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
    getWorkflowRunAttempt: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}"
    ],
    getWorkflowRunUsage: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"
    ],
    getWorkflowUsage: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"
    ],
    listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
    listCustomImageVersionsForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}/versions"
    ],
    listCustomImagesForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/images/custom"
    ],
    listEnvironmentSecrets: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/secrets"
    ],
    listEnvironmentVariables: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/variables"
    ],
    listGithubHostedRunnersInGroupForOrg: [
      "GET /orgs/{org}/actions/runner-groups/{runner_group_id}/hosted-runners"
    ],
    listHostedRunnersForOrg: ["GET /orgs/{org}/actions/hosted-runners"],
    listJobsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"
    ],
    listJobsForWorkflowRunAttempt: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs"
    ],
    listLabelsForSelfHostedRunnerForOrg: [
      "GET /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    listLabelsForSelfHostedRunnerForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    listOrgSecrets: ["GET /orgs/{org}/actions/secrets"],
    listOrgVariables: ["GET /orgs/{org}/actions/variables"],
    listRepoOrganizationSecrets: [
      "GET /repos/{owner}/{repo}/actions/organization-secrets"
    ],
    listRepoOrganizationVariables: [
      "GET /repos/{owner}/{repo}/actions/organization-variables"
    ],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"],
    listRepoVariables: ["GET /repos/{owner}/{repo}/actions/variables"],
    listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
    listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"],
    listRunnerApplicationsForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/downloads"
    ],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/actions/secrets/{secret_name}/repositories"
    ],
    listSelectedReposForOrgVariable: [
      "GET /orgs/{org}/actions/variables/{name}/repositories"
    ],
    listSelectedRepositoriesEnabledGithubActionsOrganization: [
      "GET /orgs/{org}/actions/permissions/repositories"
    ],
    listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"],
    listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"],
    listWorkflowRunArtifacts: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"
    ],
    listWorkflowRuns: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"
    ],
    listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"],
    reRunJobForWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun"
    ],
    reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],
    reRunWorkflowFailedJobs: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs"
    ],
    removeAllCustomLabelsFromSelfHostedRunnerForOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    removeAllCustomLabelsFromSelfHostedRunnerForRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    removeCustomLabelFromSelfHostedRunnerForOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}"
    ],
    removeCustomLabelFromSelfHostedRunnerForRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}"
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
    ],
    removeSelectedRepoFromOrgVariable: [
      "DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"
    ],
    reviewCustomGatesForRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule"
    ],
    reviewPendingDeploymentsForRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"
    ],
    setAllowedActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/selected-actions"
    ],
    setAllowedActionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"
    ],
    setCustomLabelsForSelfHostedRunnerForOrg: [
      "PUT /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    setCustomLabelsForSelfHostedRunnerForRepo: [
      "PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    setCustomOidcSubClaimForRepo: [
      "PUT /repos/{owner}/{repo}/actions/oidc/customization/sub"
    ],
    setGithubActionsDefaultWorkflowPermissionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/workflow"
    ],
    setGithubActionsDefaultWorkflowPermissionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/workflow"
    ],
    setGithubActionsPermissionsOrganization: [
      "PUT /orgs/{org}/actions/permissions"
    ],
    setGithubActionsPermissionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"
    ],
    setSelectedReposForOrgVariable: [
      "PUT /orgs/{org}/actions/variables/{name}/repositories"
    ],
    setSelectedRepositoriesEnabledGithubActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/repositories"
    ],
    setWorkflowAccessToRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/access"
    ],
    updateEnvironmentVariable: [
      "PATCH /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"
    ],
    updateHostedRunnerForOrg: [
      "PATCH /orgs/{org}/actions/hosted-runners/{hosted_runner_id}"
    ],
    updateOrgVariable: ["PATCH /orgs/{org}/actions/variables/{name}"],
    updateRepoVariable: [
      "PATCH /repos/{owner}/{repo}/actions/variables/{name}"
    ]
  },
  activity: {
    checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"],
    deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
    deleteThreadSubscription: [
      "DELETE /notifications/threads/{thread_id}/subscription"
    ],
    getFeeds: ["GET /feeds"],
    getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
    getThread: ["GET /notifications/threads/{thread_id}"],
    getThreadSubscriptionForAuthenticatedUser: [
      "GET /notifications/threads/{thread_id}/subscription"
    ],
    listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
    listNotificationsForAuthenticatedUser: ["GET /notifications"],
    listOrgEventsForAuthenticatedUser: [
      "GET /users/{username}/events/orgs/{org}"
    ],
    listPublicEvents: ["GET /events"],
    listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
    listPublicEventsForUser: ["GET /users/{username}/events/public"],
    listPublicOrgEvents: ["GET /orgs/{org}/events"],
    listReceivedEventsForUser: ["GET /users/{username}/received_events"],
    listReceivedPublicEventsForUser: [
      "GET /users/{username}/received_events/public"
    ],
    listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
    listRepoNotificationsForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/notifications"
    ],
    listReposStarredByAuthenticatedUser: ["GET /user/starred"],
    listReposStarredByUser: ["GET /users/{username}/starred"],
    listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
    listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
    listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
    listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
    markNotificationsAsRead: ["PUT /notifications"],
    markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"],
    markThreadAsDone: ["DELETE /notifications/threads/{thread_id}"],
    markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
    setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
    setThreadSubscription: [
      "PUT /notifications/threads/{thread_id}/subscription"
    ],
    starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
    unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"]
  },
  apps: {
    addRepoToInstallation: [
      "PUT /user/installations/{installation_id}/repositories/{repository_id}",
      {},
      { renamed: ["apps", "addRepoToInstallationForAuthenticatedUser"] }
    ],
    addRepoToInstallationForAuthenticatedUser: [
      "PUT /user/installations/{installation_id}/repositories/{repository_id}"
    ],
    checkToken: ["POST /applications/{client_id}/token"],
    createFromManifest: ["POST /app-manifests/{code}/conversions"],
    createInstallationAccessToken: [
      "POST /app/installations/{installation_id}/access_tokens"
    ],
    deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
    deleteInstallation: ["DELETE /app/installations/{installation_id}"],
    deleteToken: ["DELETE /applications/{client_id}/token"],
    getAuthenticated: ["GET /app"],
    getBySlug: ["GET /apps/{app_slug}"],
    getInstallation: ["GET /app/installations/{installation_id}"],
    getOrgInstallation: ["GET /orgs/{org}/installation"],
    getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"],
    getSubscriptionPlanForAccount: [
      "GET /marketplace_listing/accounts/{account_id}"
    ],
    getSubscriptionPlanForAccountStubbed: [
      "GET /marketplace_listing/stubbed/accounts/{account_id}"
    ],
    getUserInstallation: ["GET /users/{username}/installation"],
    getWebhookConfigForApp: ["GET /app/hook/config"],
    getWebhookDelivery: ["GET /app/hook/deliveries/{delivery_id}"],
    listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"],
    listAccountsForPlanStubbed: [
      "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"
    ],
    listInstallationReposForAuthenticatedUser: [
      "GET /user/installations/{installation_id}/repositories"
    ],
    listInstallationRequestsForAuthenticatedApp: [
      "GET /app/installation-requests"
    ],
    listInstallations: ["GET /app/installations"],
    listInstallationsForAuthenticatedUser: ["GET /user/installations"],
    listPlans: ["GET /marketplace_listing/plans"],
    listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
    listReposAccessibleToInstallation: ["GET /installation/repositories"],
    listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"],
    listSubscriptionsForAuthenticatedUserStubbed: [
      "GET /user/marketplace_purchases/stubbed"
    ],
    listWebhookDeliveries: ["GET /app/hook/deliveries"],
    redeliverWebhookDelivery: [
      "POST /app/hook/deliveries/{delivery_id}/attempts"
    ],
    removeRepoFromInstallation: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
      {},
      { renamed: ["apps", "removeRepoFromInstallationForAuthenticatedUser"] }
    ],
    removeRepoFromInstallationForAuthenticatedUser: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}"
    ],
    resetToken: ["PATCH /applications/{client_id}/token"],
    revokeInstallationAccessToken: ["DELETE /installation/token"],
    scopeToken: ["POST /applications/{client_id}/token/scoped"],
    suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"],
    unsuspendInstallation: [
      "DELETE /app/installations/{installation_id}/suspended"
    ],
    updateWebhookConfigForApp: ["PATCH /app/hook/config"]
  },
  billing: {
    getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"],
    getGithubActionsBillingUser: [
      "GET /users/{username}/settings/billing/actions"
    ],
    getGithubBillingPremiumRequestUsageReportOrg: [
      "GET /organizations/{org}/settings/billing/premium_request/usage"
    ],
    getGithubBillingPremiumRequestUsageReportUser: [
      "GET /users/{username}/settings/billing/premium_request/usage"
    ],
    getGithubBillingUsageReportOrg: [
      "GET /organizations/{org}/settings/billing/usage"
    ],
    getGithubBillingUsageReportUser: [
      "GET /users/{username}/settings/billing/usage"
    ],
    getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"],
    getGithubPackagesBillingUser: [
      "GET /users/{username}/settings/billing/packages"
    ],
    getSharedStorageBillingOrg: [
      "GET /orgs/{org}/settings/billing/shared-storage"
    ],
    getSharedStorageBillingUser: [
      "GET /users/{username}/settings/billing/shared-storage"
    ]
  },
  campaigns: {
    createCampaign: ["POST /orgs/{org}/campaigns"],
    deleteCampaign: ["DELETE /orgs/{org}/campaigns/{campaign_number}"],
    getCampaignSummary: ["GET /orgs/{org}/campaigns/{campaign_number}"],
    listOrgCampaigns: ["GET /orgs/{org}/campaigns"],
    updateCampaign: ["PATCH /orgs/{org}/campaigns/{campaign_number}"]
  },
  checks: {
    create: ["POST /repos/{owner}/{repo}/check-runs"],
    createSuite: ["POST /repos/{owner}/{repo}/check-suites"],
    get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],
    getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],
    listAnnotations: [
      "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"
    ],
    listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],
    listForSuite: [
      "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"
    ],
    listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"],
    rerequestRun: [
      "POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest"
    ],
    rerequestSuite: [
      "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"
    ],
    setSuitesPreferences: [
      "PATCH /repos/{owner}/{repo}/check-suites/preferences"
    ],
    update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]
  },
  codeScanning: {
    commitAutofix: [
      "POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix/commits"
    ],
    createAutofix: [
      "POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix"
    ],
    createVariantAnalysis: [
      "POST /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses"
    ],
    deleteAnalysis: [
      "DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"
    ],
    deleteCodeqlDatabase: [
      "DELETE /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"
    ],
    getAlert: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
      {},
      { renamedParameters: { alert_id: "alert_number" } }
    ],
    getAnalysis: [
      "GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"
    ],
    getAutofix: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix"
    ],
    getCodeqlDatabase: [
      "GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"
    ],
    getDefaultSetup: ["GET /repos/{owner}/{repo}/code-scanning/default-setup"],
    getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"],
    getVariantAnalysis: [
      "GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}"
    ],
    getVariantAnalysisRepoTask: [
      "GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}/repos/{repo_owner}/{repo_name}"
    ],
    listAlertInstances: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"
    ],
    listAlertsForOrg: ["GET /orgs/{org}/code-scanning/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"],
    listAlertsInstances: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
      {},
      { renamed: ["codeScanning", "listAlertInstances"] }
    ],
    listCodeqlDatabases: [
      "GET /repos/{owner}/{repo}/code-scanning/codeql/databases"
    ],
    listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"
    ],
    updateDefaultSetup: [
      "PATCH /repos/{owner}/{repo}/code-scanning/default-setup"
    ],
    uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"]
  },
  codeSecurity: {
    attachConfiguration: [
      "POST /orgs/{org}/code-security/configurations/{configuration_id}/attach"
    ],
    attachEnterpriseConfiguration: [
      "POST /enterprises/{enterprise}/code-security/configurations/{configuration_id}/attach"
    ],
    createConfiguration: ["POST /orgs/{org}/code-security/configurations"],
    createConfigurationForEnterprise: [
      "POST /enterprises/{enterprise}/code-security/configurations"
    ],
    deleteConfiguration: [
      "DELETE /orgs/{org}/code-security/configurations/{configuration_id}"
    ],
    deleteConfigurationForEnterprise: [
      "DELETE /enterprises/{enterprise}/code-security/configurations/{configuration_id}"
    ],
    detachConfiguration: [
      "DELETE /orgs/{org}/code-security/configurations/detach"
    ],
    getConfiguration: [
      "GET /orgs/{org}/code-security/configurations/{configuration_id}"
    ],
    getConfigurationForRepository: [
      "GET /repos/{owner}/{repo}/code-security-configuration"
    ],
    getConfigurationsForEnterprise: [
      "GET /enterprises/{enterprise}/code-security/configurations"
    ],
    getConfigurationsForOrg: ["GET /orgs/{org}/code-security/configurations"],
    getDefaultConfigurations: [
      "GET /orgs/{org}/code-security/configurations/defaults"
    ],
    getDefaultConfigurationsForEnterprise: [
      "GET /enterprises/{enterprise}/code-security/configurations/defaults"
    ],
    getRepositoriesForConfiguration: [
      "GET /orgs/{org}/code-security/configurations/{configuration_id}/repositories"
    ],
    getRepositoriesForEnterpriseConfiguration: [
      "GET /enterprises/{enterprise}/code-security/configurations/{configuration_id}/repositories"
    ],
    getSingleConfigurationForEnterprise: [
      "GET /enterprises/{enterprise}/code-security/configurations/{configuration_id}"
    ],
    setConfigurationAsDefault: [
      "PUT /orgs/{org}/code-security/configurations/{configuration_id}/defaults"
    ],
    setConfigurationAsDefaultForEnterprise: [
      "PUT /enterprises/{enterprise}/code-security/configurations/{configuration_id}/defaults"
    ],
    updateConfiguration: [
      "PATCH /orgs/{org}/code-security/configurations/{configuration_id}"
    ],
    updateEnterpriseConfiguration: [
      "PATCH /enterprises/{enterprise}/code-security/configurations/{configuration_id}"
    ]
  },
  codesOfConduct: {
    getAllCodesOfConduct: ["GET /codes_of_conduct"],
    getConductCode: ["GET /codes_of_conduct/{key}"]
  },
  codespaces: {
    addRepositoryForSecretForAuthenticatedUser: [
      "PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    checkPermissionsForDevcontainer: [
      "GET /repos/{owner}/{repo}/codespaces/permissions_check"
    ],
    codespaceMachinesForAuthenticatedUser: [
      "GET /user/codespaces/{codespace_name}/machines"
    ],
    createForAuthenticatedUser: ["POST /user/codespaces"],
    createOrUpdateOrgSecret: [
      "PUT /orgs/{org}/codespaces/secrets/{secret_name}"
    ],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"
    ],
    createOrUpdateSecretForAuthenticatedUser: [
      "PUT /user/codespaces/secrets/{secret_name}"
    ],
    createWithPrForAuthenticatedUser: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces"
    ],
    createWithRepoForAuthenticatedUser: [
      "POST /repos/{owner}/{repo}/codespaces"
    ],
    deleteForAuthenticatedUser: ["DELETE /user/codespaces/{codespace_name}"],
    deleteFromOrganization: [
      "DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/codespaces/secrets/{secret_name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"
    ],
    deleteSecretForAuthenticatedUser: [
      "DELETE /user/codespaces/secrets/{secret_name}"
    ],
    exportForAuthenticatedUser: [
      "POST /user/codespaces/{codespace_name}/exports"
    ],
    getCodespacesForUserInOrg: [
      "GET /orgs/{org}/members/{username}/codespaces"
    ],
    getExportDetailsForAuthenticatedUser: [
      "GET /user/codespaces/{codespace_name}/exports/{export_id}"
    ],
    getForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}"],
    getOrgPublicKey: ["GET /orgs/{org}/codespaces/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/codespaces/secrets/{secret_name}"],
    getPublicKeyForAuthenticatedUser: [
      "GET /user/codespaces/secrets/public-key"
    ],
    getRepoPublicKey: [
      "GET /repos/{owner}/{repo}/codespaces/secrets/public-key"
    ],
    getRepoSecret: [
      "GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"
    ],
    getSecretForAuthenticatedUser: [
      "GET /user/codespaces/secrets/{secret_name}"
    ],
    listDevcontainersInRepositoryForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces/devcontainers"
    ],
    listForAuthenticatedUser: ["GET /user/codespaces"],
    listInOrganization: [
      "GET /orgs/{org}/codespaces",
      {},
      { renamedParameters: { org_id: "org" } }
    ],
    listInRepositoryForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces"
    ],
    listOrgSecrets: ["GET /orgs/{org}/codespaces/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/codespaces/secrets"],
    listRepositoriesForSecretForAuthenticatedUser: [
      "GET /user/codespaces/secrets/{secret_name}/repositories"
    ],
    listSecretsForAuthenticatedUser: ["GET /user/codespaces/secrets"],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories"
    ],
    preFlightWithRepoForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces/new"
    ],
    publishForAuthenticatedUser: [
      "POST /user/codespaces/{codespace_name}/publish"
    ],
    removeRepositoryForSecretForAuthenticatedUser: [
      "DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    repoMachinesForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces/machines"
    ],
    setRepositoriesForSecretForAuthenticatedUser: [
      "PUT /user/codespaces/secrets/{secret_name}/repositories"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories"
    ],
    startForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/start"],
    stopForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/stop"],
    stopInOrganization: [
      "POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop"
    ],
    updateForAuthenticatedUser: ["PATCH /user/codespaces/{codespace_name}"]
  },
  copilot: {
    addCopilotSeatsForTeams: [
      "POST /orgs/{org}/copilot/billing/selected_teams"
    ],
    addCopilotSeatsForUsers: [
      "POST /orgs/{org}/copilot/billing/selected_users"
    ],
    cancelCopilotSeatAssignmentForTeams: [
      "DELETE /orgs/{org}/copilot/billing/selected_teams"
    ],
    cancelCopilotSeatAssignmentForUsers: [
      "DELETE /orgs/{org}/copilot/billing/selected_users"
    ],
    copilotMetricsForOrganization: ["GET /orgs/{org}/copilot/metrics"],
    copilotMetricsForTeam: ["GET /orgs/{org}/team/{team_slug}/copilot/metrics"],
    getCopilotOrganizationDetails: ["GET /orgs/{org}/copilot/billing"],
    getCopilotSeatDetailsForUser: [
      "GET /orgs/{org}/members/{username}/copilot"
    ],
    listCopilotSeats: ["GET /orgs/{org}/copilot/billing/seats"]
  },
  credentials: { revoke: ["POST /credentials/revoke"] },
  dependabot: {
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"
    ],
    createOrUpdateOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}"
    ],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/dependabot/secrets/{secret_name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"
    ],
    getAlert: ["GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"],
    getOrgPublicKey: ["GET /orgs/{org}/dependabot/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/dependabot/secrets/{secret_name}"],
    getRepoPublicKey: [
      "GET /repos/{owner}/{repo}/dependabot/secrets/public-key"
    ],
    getRepoSecret: [
      "GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"
    ],
    listAlertsForEnterprise: [
      "GET /enterprises/{enterprise}/dependabot/alerts"
    ],
    listAlertsForOrg: ["GET /orgs/{org}/dependabot/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/dependabot/alerts"],
    listOrgSecrets: ["GET /orgs/{org}/dependabot/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/dependabot/secrets"],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories"
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"
    ],
    repositoryAccessForOrg: [
      "GET /organizations/{org}/dependabot/repository-access"
    ],
    setRepositoryAccessDefaultLevel: [
      "PUT /organizations/{org}/dependabot/repository-access/default-level"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories"
    ],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"
    ],
    updateRepositoryAccessForOrg: [
      "PATCH /organizations/{org}/dependabot/repository-access"
    ]
  },
  dependencyGraph: {
    createRepositorySnapshot: [
      "POST /repos/{owner}/{repo}/dependency-graph/snapshots"
    ],
    diffRange: [
      "GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}"
    ],
    exportSbom: ["GET /repos/{owner}/{repo}/dependency-graph/sbom"]
  },
  emojis: { get: ["GET /emojis"] },
  enterpriseTeamMemberships: {
    add: [
      "PUT /enterprises/{enterprise}/teams/{enterprise-team}/memberships/{username}"
    ],
    bulkAdd: [
      "POST /enterprises/{enterprise}/teams/{enterprise-team}/memberships/add"
    ],
    bulkRemove: [
      "POST /enterprises/{enterprise}/teams/{enterprise-team}/memberships/remove"
    ],
    get: [
      "GET /enterprises/{enterprise}/teams/{enterprise-team}/memberships/{username}"
    ],
    list: ["GET /enterprises/{enterprise}/teams/{enterprise-team}/memberships"],
    remove: [
      "DELETE /enterprises/{enterprise}/teams/{enterprise-team}/memberships/{username}"
    ]
  },
  enterpriseTeamOrganizations: {
    add: [
      "PUT /enterprises/{enterprise}/teams/{enterprise-team}/organizations/{org}"
    ],
    bulkAdd: [
      "POST /enterprises/{enterprise}/teams/{enterprise-team}/organizations/add"
    ],
    bulkRemove: [
      "POST /enterprises/{enterprise}/teams/{enterprise-team}/organizations/remove"
    ],
    delete: [
      "DELETE /enterprises/{enterprise}/teams/{enterprise-team}/organizations/{org}"
    ],
    getAssignment: [
      "GET /enterprises/{enterprise}/teams/{enterprise-team}/organizations/{org}"
    ],
    getAssignments: [
      "GET /enterprises/{enterprise}/teams/{enterprise-team}/organizations"
    ]
  },
  enterpriseTeams: {
    create: ["POST /enterprises/{enterprise}/teams"],
    delete: ["DELETE /enterprises/{enterprise}/teams/{team_slug}"],
    get: ["GET /enterprises/{enterprise}/teams/{team_slug}"],
    list: ["GET /enterprises/{enterprise}/teams"],
    update: ["PATCH /enterprises/{enterprise}/teams/{team_slug}"]
  },
  gists: {
    checkIsStarred: ["GET /gists/{gist_id}/star"],
    create: ["POST /gists"],
    createComment: ["POST /gists/{gist_id}/comments"],
    delete: ["DELETE /gists/{gist_id}"],
    deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
    fork: ["POST /gists/{gist_id}/forks"],
    get: ["GET /gists/{gist_id}"],
    getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
    getRevision: ["GET /gists/{gist_id}/{sha}"],
    list: ["GET /gists"],
    listComments: ["GET /gists/{gist_id}/comments"],
    listCommits: ["GET /gists/{gist_id}/commits"],
    listForUser: ["GET /users/{username}/gists"],
    listForks: ["GET /gists/{gist_id}/forks"],
    listPublic: ["GET /gists/public"],
    listStarred: ["GET /gists/starred"],
    star: ["PUT /gists/{gist_id}/star"],
    unstar: ["DELETE /gists/{gist_id}/star"],
    update: ["PATCH /gists/{gist_id}"],
    updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"]
  },
  git: {
    createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
    createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
    createRef: ["POST /repos/{owner}/{repo}/git/refs"],
    createTag: ["POST /repos/{owner}/{repo}/git/tags"],
    createTree: ["POST /repos/{owner}/{repo}/git/trees"],
    deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
    getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
    getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
    getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
    getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
    getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
    listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
    updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]
  },
  gitignore: {
    getAllTemplates: ["GET /gitignore/templates"],
    getTemplate: ["GET /gitignore/templates/{name}"]
  },
  hostedCompute: {
    createNetworkConfigurationForOrg: [
      "POST /orgs/{org}/settings/network-configurations"
    ],
    deleteNetworkConfigurationFromOrg: [
      "DELETE /orgs/{org}/settings/network-configurations/{network_configuration_id}"
    ],
    getNetworkConfigurationForOrg: [
      "GET /orgs/{org}/settings/network-configurations/{network_configuration_id}"
    ],
    getNetworkSettingsForOrg: [
      "GET /orgs/{org}/settings/network-settings/{network_settings_id}"
    ],
    listNetworkConfigurationsForOrg: [
      "GET /orgs/{org}/settings/network-configurations"
    ],
    updateNetworkConfigurationForOrg: [
      "PATCH /orgs/{org}/settings/network-configurations/{network_configuration_id}"
    ]
  },
  interactions: {
    getRestrictionsForAuthenticatedUser: ["GET /user/interaction-limits"],
    getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"],
    getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"],
    getRestrictionsForYourPublicRepos: [
      "GET /user/interaction-limits",
      {},
      { renamed: ["interactions", "getRestrictionsForAuthenticatedUser"] }
    ],
    removeRestrictionsForAuthenticatedUser: ["DELETE /user/interaction-limits"],
    removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"],
    removeRestrictionsForRepo: [
      "DELETE /repos/{owner}/{repo}/interaction-limits"
    ],
    removeRestrictionsForYourPublicRepos: [
      "DELETE /user/interaction-limits",
      {},
      { renamed: ["interactions", "removeRestrictionsForAuthenticatedUser"] }
    ],
    setRestrictionsForAuthenticatedUser: ["PUT /user/interaction-limits"],
    setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"],
    setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"],
    setRestrictionsForYourPublicRepos: [
      "PUT /user/interaction-limits",
      {},
      { renamed: ["interactions", "setRestrictionsForAuthenticatedUser"] }
    ]
  },
  issues: {
    addAssignees: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"
    ],
    addBlockedByDependency: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by"
    ],
    addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    addSubIssue: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/sub_issues"
    ],
    checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"],
    checkUserCanBeAssignedToIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}"
    ],
    create: ["POST /repos/{owner}/{repo}/issues"],
    createComment: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/comments"
    ],
    createLabel: ["POST /repos/{owner}/{repo}/labels"],
    createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
    deleteComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"
    ],
    deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
    deleteMilestone: [
      "DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"
    ],
    get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
    getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
    getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
    getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
    getParent: ["GET /repos/{owner}/{repo}/issues/{issue_number}/parent"],
    list: ["GET /issues"],
    listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
    listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],
    listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
    listDependenciesBlockedBy: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by"
    ],
    listDependenciesBlocking: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocking"
    ],
    listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
    listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
    listEventsForTimeline: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline"
    ],
    listForAuthenticatedUser: ["GET /user/issues"],
    listForOrg: ["GET /orgs/{org}/issues"],
    listForRepo: ["GET /repos/{owner}/{repo}/issues"],
    listLabelsForMilestone: [
      "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"
    ],
    listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
    listLabelsOnIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/labels"
    ],
    listMilestones: ["GET /repos/{owner}/{repo}/milestones"],
    listSubIssues: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/sub_issues"
    ],
    lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    removeAllLabels: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"
    ],
    removeAssignees: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"
    ],
    removeDependencyBlockedBy: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by/{issue_id}"
    ],
    removeLabel: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"
    ],
    removeSubIssue: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/sub_issue"
    ],
    reprioritizeSubIssue: [
      "PATCH /repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority"
    ],
    setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
    updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
    updateMilestone: [
      "PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"
    ]
  },
  licenses: {
    get: ["GET /licenses/{license}"],
    getAllCommonlyUsed: ["GET /licenses"],
    getForRepo: ["GET /repos/{owner}/{repo}/license"]
  },
  markdown: {
    render: ["POST /markdown"],
    renderRaw: [
      "POST /markdown/raw",
      { headers: { "content-type": "text/plain; charset=utf-8" } }
    ]
  },
  meta: {
    get: ["GET /meta"],
    getAllVersions: ["GET /versions"],
    getOctocat: ["GET /octocat"],
    getZen: ["GET /zen"],
    root: ["GET /"]
  },
  migrations: {
    deleteArchiveForAuthenticatedUser: [
      "DELETE /user/migrations/{migration_id}/archive"
    ],
    deleteArchiveForOrg: [
      "DELETE /orgs/{org}/migrations/{migration_id}/archive"
    ],
    downloadArchiveForOrg: [
      "GET /orgs/{org}/migrations/{migration_id}/archive"
    ],
    getArchiveForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}/archive"
    ],
    getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}"],
    getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}"],
    listForAuthenticatedUser: ["GET /user/migrations"],
    listForOrg: ["GET /orgs/{org}/migrations"],
    listReposForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}/repositories"
    ],
    listReposForOrg: ["GET /orgs/{org}/migrations/{migration_id}/repositories"],
    listReposForUser: [
      "GET /user/migrations/{migration_id}/repositories",
      {},
      { renamed: ["migrations", "listReposForAuthenticatedUser"] }
    ],
    startForAuthenticatedUser: ["POST /user/migrations"],
    startForOrg: ["POST /orgs/{org}/migrations"],
    unlockRepoForAuthenticatedUser: [
      "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock"
    ],
    unlockRepoForOrg: [
      "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock"
    ]
  },
  oidc: {
    getOidcCustomSubTemplateForOrg: [
      "GET /orgs/{org}/actions/oidc/customization/sub"
    ],
    updateOidcCustomSubTemplateForOrg: [
      "PUT /orgs/{org}/actions/oidc/customization/sub"
    ]
  },
  orgs: {
    addSecurityManagerTeam: [
      "PUT /orgs/{org}/security-managers/teams/{team_slug}",
      {},
      {
        deprecated: "octokit.rest.orgs.addSecurityManagerTeam() is deprecated, see https://docs.github.com/rest/orgs/security-managers#add-a-security-manager-team"
      }
    ],
    assignTeamToOrgRole: [
      "PUT /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"
    ],
    assignUserToOrgRole: [
      "PUT /orgs/{org}/organization-roles/users/{username}/{role_id}"
    ],
    blockUser: ["PUT /orgs/{org}/blocks/{username}"],
    cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"],
    checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
    checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
    checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"],
    convertMemberToOutsideCollaborator: [
      "PUT /orgs/{org}/outside_collaborators/{username}"
    ],
    createArtifactStorageRecord: [
      "POST /orgs/{org}/artifacts/metadata/storage-record"
    ],
    createInvitation: ["POST /orgs/{org}/invitations"],
    createIssueType: ["POST /orgs/{org}/issue-types"],
    createWebhook: ["POST /orgs/{org}/hooks"],
    customPropertiesForOrgsCreateOrUpdateOrganizationValues: [
      "PATCH /organizations/{org}/org-properties/values"
    ],
    customPropertiesForOrgsGetOrganizationValues: [
      "GET /organizations/{org}/org-properties/values"
    ],
    customPropertiesForReposCreateOrUpdateOrganizationDefinition: [
      "PUT /orgs/{org}/properties/schema/{custom_property_name}"
    ],
    customPropertiesForReposCreateOrUpdateOrganizationDefinitions: [
      "PATCH /orgs/{org}/properties/schema"
    ],
    customPropertiesForReposCreateOrUpdateOrganizationValues: [
      "PATCH /orgs/{org}/properties/values"
    ],
    customPropertiesForReposDeleteOrganizationDefinition: [
      "DELETE /orgs/{org}/properties/schema/{custom_property_name}"
    ],
    customPropertiesForReposGetOrganizationDefinition: [
      "GET /orgs/{org}/properties/schema/{custom_property_name}"
    ],
    customPropertiesForReposGetOrganizationDefinitions: [
      "GET /orgs/{org}/properties/schema"
    ],
    customPropertiesForReposGetOrganizationValues: [
      "GET /orgs/{org}/properties/values"
    ],
    delete: ["DELETE /orgs/{org}"],
    deleteAttestationsBulk: ["POST /orgs/{org}/attestations/delete-request"],
    deleteAttestationsById: [
      "DELETE /orgs/{org}/attestations/{attestation_id}"
    ],
    deleteAttestationsBySubjectDigest: [
      "DELETE /orgs/{org}/attestations/digest/{subject_digest}"
    ],
    deleteIssueType: ["DELETE /orgs/{org}/issue-types/{issue_type_id}"],
    deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
    disableSelectedRepositoryImmutableReleasesOrganization: [
      "DELETE /orgs/{org}/settings/immutable-releases/repositories/{repository_id}"
    ],
    enableSelectedRepositoryImmutableReleasesOrganization: [
      "PUT /orgs/{org}/settings/immutable-releases/repositories/{repository_id}"
    ],
    get: ["GET /orgs/{org}"],
    getImmutableReleasesSettings: [
      "GET /orgs/{org}/settings/immutable-releases"
    ],
    getImmutableReleasesSettingsRepositories: [
      "GET /orgs/{org}/settings/immutable-releases/repositories"
    ],
    getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
    getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"],
    getOrgRole: ["GET /orgs/{org}/organization-roles/{role_id}"],
    getOrgRulesetHistory: ["GET /orgs/{org}/rulesets/{ruleset_id}/history"],
    getOrgRulesetVersion: [
      "GET /orgs/{org}/rulesets/{ruleset_id}/history/{version_id}"
    ],
    getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"],
    getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"],
    getWebhookDelivery: [
      "GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}"
    ],
    list: ["GET /organizations"],
    listAppInstallations: ["GET /orgs/{org}/installations"],
    listArtifactStorageRecords: [
      "GET /orgs/{org}/artifacts/{subject_digest}/metadata/storage-records"
    ],
    listAttestationRepositories: ["GET /orgs/{org}/attestations/repositories"],
    listAttestations: ["GET /orgs/{org}/attestations/{subject_digest}"],
    listAttestationsBulk: [
      "POST /orgs/{org}/attestations/bulk-list{?per_page,before,after}"
    ],
    listBlockedUsers: ["GET /orgs/{org}/blocks"],
    listFailedInvitations: ["GET /orgs/{org}/failed_invitations"],
    listForAuthenticatedUser: ["GET /user/orgs"],
    listForUser: ["GET /users/{username}/orgs"],
    listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"],
    listIssueTypes: ["GET /orgs/{org}/issue-types"],
    listMembers: ["GET /orgs/{org}/members"],
    listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
    listOrgRoleTeams: ["GET /orgs/{org}/organization-roles/{role_id}/teams"],
    listOrgRoleUsers: ["GET /orgs/{org}/organization-roles/{role_id}/users"],
    listOrgRoles: ["GET /orgs/{org}/organization-roles"],
    listOrganizationFineGrainedPermissions: [
      "GET /orgs/{org}/organization-fine-grained-permissions"
    ],
    listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
    listPatGrantRepositories: [
      "GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories"
    ],
    listPatGrantRequestRepositories: [
      "GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories"
    ],
    listPatGrantRequests: ["GET /orgs/{org}/personal-access-token-requests"],
    listPatGrants: ["GET /orgs/{org}/personal-access-tokens"],
    listPendingInvitations: ["GET /orgs/{org}/invitations"],
    listPublicMembers: ["GET /orgs/{org}/public_members"],
    listSecurityManagerTeams: [
      "GET /orgs/{org}/security-managers",
      {},
      {
        deprecated: "octokit.rest.orgs.listSecurityManagerTeams() is deprecated, see https://docs.github.com/rest/orgs/security-managers#list-security-manager-teams"
      }
    ],
    listWebhookDeliveries: ["GET /orgs/{org}/hooks/{hook_id}/deliveries"],
    listWebhooks: ["GET /orgs/{org}/hooks"],
    pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
    redeliverWebhookDelivery: [
      "POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"
    ],
    removeMember: ["DELETE /orgs/{org}/members/{username}"],
    removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"],
    removeOutsideCollaborator: [
      "DELETE /orgs/{org}/outside_collaborators/{username}"
    ],
    removePublicMembershipForAuthenticatedUser: [
      "DELETE /orgs/{org}/public_members/{username}"
    ],
    removeSecurityManagerTeam: [
      "DELETE /orgs/{org}/security-managers/teams/{team_slug}",
      {},
      {
        deprecated: "octokit.rest.orgs.removeSecurityManagerTeam() is deprecated, see https://docs.github.com/rest/orgs/security-managers#remove-a-security-manager-team"
      }
    ],
    reviewPatGrantRequest: [
      "POST /orgs/{org}/personal-access-token-requests/{pat_request_id}"
    ],
    reviewPatGrantRequestsInBulk: [
      "POST /orgs/{org}/personal-access-token-requests"
    ],
    revokeAllOrgRolesTeam: [
      "DELETE /orgs/{org}/organization-roles/teams/{team_slug}"
    ],
    revokeAllOrgRolesUser: [
      "DELETE /orgs/{org}/organization-roles/users/{username}"
    ],
    revokeOrgRoleTeam: [
      "DELETE /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"
    ],
    revokeOrgRoleUser: [
      "DELETE /orgs/{org}/organization-roles/users/{username}/{role_id}"
    ],
    setImmutableReleasesSettings: [
      "PUT /orgs/{org}/settings/immutable-releases"
    ],
    setImmutableReleasesSettingsRepositories: [
      "PUT /orgs/{org}/settings/immutable-releases/repositories"
    ],
    setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"],
    setPublicMembershipForAuthenticatedUser: [
      "PUT /orgs/{org}/public_members/{username}"
    ],
    unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
    update: ["PATCH /orgs/{org}"],
    updateIssueType: ["PUT /orgs/{org}/issue-types/{issue_type_id}"],
    updateMembershipForAuthenticatedUser: [
      "PATCH /user/memberships/orgs/{org}"
    ],
    updatePatAccess: ["POST /orgs/{org}/personal-access-tokens/{pat_id}"],
    updatePatAccesses: ["POST /orgs/{org}/personal-access-tokens"],
    updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
    updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"]
  },
  packages: {
    deletePackageForAuthenticatedUser: [
      "DELETE /user/packages/{package_type}/{package_name}"
    ],
    deletePackageForOrg: [
      "DELETE /orgs/{org}/packages/{package_type}/{package_name}"
    ],
    deletePackageForUser: [
      "DELETE /users/{username}/packages/{package_type}/{package_name}"
    ],
    deletePackageVersionForAuthenticatedUser: [
      "DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    deletePackageVersionForOrg: [
      "DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    deletePackageVersionForUser: [
      "DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    getAllPackageVersionsForAPackageOwnedByAnOrg: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions",
      {},
      { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByOrg"] }
    ],
    getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions",
      {},
      {
        renamed: [
          "packages",
          "getAllPackageVersionsForPackageOwnedByAuthenticatedUser"
        ]
      }
    ],
    getAllPackageVersionsForPackageOwnedByAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions"
    ],
    getAllPackageVersionsForPackageOwnedByOrg: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions"
    ],
    getAllPackageVersionsForPackageOwnedByUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}/versions"
    ],
    getPackageForAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}"
    ],
    getPackageForOrganization: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}"
    ],
    getPackageForUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}"
    ],
    getPackageVersionForAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    getPackageVersionForOrganization: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    getPackageVersionForUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    listDockerMigrationConflictingPackagesForAuthenticatedUser: [
      "GET /user/docker/conflicts"
    ],
    listDockerMigrationConflictingPackagesForOrganization: [
      "GET /orgs/{org}/docker/conflicts"
    ],
    listDockerMigrationConflictingPackagesForUser: [
      "GET /users/{username}/docker/conflicts"
    ],
    listPackagesForAuthenticatedUser: ["GET /user/packages"],
    listPackagesForOrganization: ["GET /orgs/{org}/packages"],
    listPackagesForUser: ["GET /users/{username}/packages"],
    restorePackageForAuthenticatedUser: [
      "POST /user/packages/{package_type}/{package_name}/restore{?token}"
    ],
    restorePackageForOrg: [
      "POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"
    ],
    restorePackageForUser: [
      "POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}"
    ],
    restorePackageVersionForAuthenticatedUser: [
      "POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
    ],
    restorePackageVersionForOrg: [
      "POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
    ],
    restorePackageVersionForUser: [
      "POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
    ]
  },
  privateRegistries: {
    createOrgPrivateRegistry: ["POST /orgs/{org}/private-registries"],
    deleteOrgPrivateRegistry: [
      "DELETE /orgs/{org}/private-registries/{secret_name}"
    ],
    getOrgPrivateRegistry: ["GET /orgs/{org}/private-registries/{secret_name}"],
    getOrgPublicKey: ["GET /orgs/{org}/private-registries/public-key"],
    listOrgPrivateRegistries: ["GET /orgs/{org}/private-registries"],
    updateOrgPrivateRegistry: [
      "PATCH /orgs/{org}/private-registries/{secret_name}"
    ]
  },
  projects: {
    addItemForOrg: ["POST /orgs/{org}/projectsV2/{project_number}/items"],
    addItemForUser: [
      "POST /users/{username}/projectsV2/{project_number}/items"
    ],
    deleteItemForOrg: [
      "DELETE /orgs/{org}/projectsV2/{project_number}/items/{item_id}"
    ],
    deleteItemForUser: [
      "DELETE /users/{username}/projectsV2/{project_number}/items/{item_id}"
    ],
    getFieldForOrg: [
      "GET /orgs/{org}/projectsV2/{project_number}/fields/{field_id}"
    ],
    getFieldForUser: [
      "GET /users/{username}/projectsV2/{project_number}/fields/{field_id}"
    ],
    getForOrg: ["GET /orgs/{org}/projectsV2/{project_number}"],
    getForUser: ["GET /users/{username}/projectsV2/{project_number}"],
    getOrgItem: ["GET /orgs/{org}/projectsV2/{project_number}/items/{item_id}"],
    getUserItem: [
      "GET /users/{username}/projectsV2/{project_number}/items/{item_id}"
    ],
    listFieldsForOrg: ["GET /orgs/{org}/projectsV2/{project_number}/fields"],
    listFieldsForUser: [
      "GET /users/{username}/projectsV2/{project_number}/fields"
    ],
    listForOrg: ["GET /orgs/{org}/projectsV2"],
    listForUser: ["GET /users/{username}/projectsV2"],
    listItemsForOrg: ["GET /orgs/{org}/projectsV2/{project_number}/items"],
    listItemsForUser: [
      "GET /users/{username}/projectsV2/{project_number}/items"
    ],
    updateItemForOrg: [
      "PATCH /orgs/{org}/projectsV2/{project_number}/items/{item_id}"
    ],
    updateItemForUser: [
      "PATCH /users/{username}/projectsV2/{project_number}/items/{item_id}"
    ]
  },
  pulls: {
    checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    create: ["POST /repos/{owner}/{repo}/pulls"],
    createReplyForReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"
    ],
    createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    createReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"
    ],
    deletePendingReview: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    deleteReviewComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"
    ],
    dismissReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"
    ],
    get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
    getReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
    list: ["GET /repos/{owner}/{repo}/pulls"],
    listCommentsForReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"
    ],
    listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
    listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
    listRequestedReviewers: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    listReviewComments: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"
    ],
    listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
    listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    removeRequestedReviewers: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    requestReviewers: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    submitReview: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"
    ],
    update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
    updateBranch: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch"
    ],
    updateReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    updateReviewComment: [
      "PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"
    ]
  },
  rateLimit: { get: ["GET /rate_limit"] },
  reactions: {
    createForCommitComment: [
      "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions"
    ],
    createForIssue: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions"
    ],
    createForIssueComment: [
      "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"
    ],
    createForPullRequestReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"
    ],
    createForRelease: [
      "POST /repos/{owner}/{repo}/releases/{release_id}/reactions"
    ],
    createForTeamDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"
    ],
    createForTeamDiscussionInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"
    ],
    deleteForCommitComment: [
      "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}"
    ],
    deleteForIssue: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}"
    ],
    deleteForIssueComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}"
    ],
    deleteForPullRequestComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}"
    ],
    deleteForRelease: [
      "DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}"
    ],
    deleteForTeamDiscussion: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}"
    ],
    deleteForTeamDiscussionComment: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}"
    ],
    listForCommitComment: [
      "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions"
    ],
    listForIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"],
    listForIssueComment: [
      "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"
    ],
    listForPullRequestReviewComment: [
      "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"
    ],
    listForRelease: [
      "GET /repos/{owner}/{repo}/releases/{release_id}/reactions"
    ],
    listForTeamDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"
    ],
    listForTeamDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"
    ]
  },
  repos: {
    acceptInvitation: [
      "PATCH /user/repository_invitations/{invitation_id}",
      {},
      { renamed: ["repos", "acceptInvitationForAuthenticatedUser"] }
    ],
    acceptInvitationForAuthenticatedUser: [
      "PATCH /user/repository_invitations/{invitation_id}"
    ],
    addAppAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
    addStatusCheckContexts: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    addTeamAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    addUserAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    cancelPagesDeployment: [
      "POST /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel"
    ],
    checkAutomatedSecurityFixes: [
      "GET /repos/{owner}/{repo}/automated-security-fixes"
    ],
    checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
    checkImmutableReleases: ["GET /repos/{owner}/{repo}/immutable-releases"],
    checkPrivateVulnerabilityReporting: [
      "GET /repos/{owner}/{repo}/private-vulnerability-reporting"
    ],
    checkVulnerabilityAlerts: [
      "GET /repos/{owner}/{repo}/vulnerability-alerts"
    ],
    codeownersErrors: ["GET /repos/{owner}/{repo}/codeowners/errors"],
    compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
    compareCommitsWithBasehead: [
      "GET /repos/{owner}/{repo}/compare/{basehead}"
    ],
    createAttestation: ["POST /repos/{owner}/{repo}/attestations"],
    createAutolink: ["POST /repos/{owner}/{repo}/autolinks"],
    createCommitComment: [
      "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"
    ],
    createCommitSignatureProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"
    ],
    createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
    createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
    createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
    createDeploymentBranchPolicy: [
      "POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"
    ],
    createDeploymentProtectionRule: [
      "POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"
    ],
    createDeploymentStatus: [
      "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"
    ],
    createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
    createForAuthenticatedUser: ["POST /user/repos"],
    createFork: ["POST /repos/{owner}/{repo}/forks"],
    createInOrg: ["POST /orgs/{org}/repos"],
    createOrUpdateEnvironment: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
    createOrgRuleset: ["POST /orgs/{org}/rulesets"],
    createPagesDeployment: ["POST /repos/{owner}/{repo}/pages/deployments"],
    createPagesSite: ["POST /repos/{owner}/{repo}/pages"],
    createRelease: ["POST /repos/{owner}/{repo}/releases"],
    createRepoRuleset: ["POST /repos/{owner}/{repo}/rulesets"],
    createUsingTemplate: [
      "POST /repos/{template_owner}/{template_repo}/generate"
    ],
    createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
    customPropertiesForReposCreateOrUpdateRepositoryValues: [
      "PATCH /repos/{owner}/{repo}/properties/values"
    ],
    customPropertiesForReposGetRepositoryValues: [
      "GET /repos/{owner}/{repo}/properties/values"
    ],
    declineInvitation: [
      "DELETE /user/repository_invitations/{invitation_id}",
      {},
      { renamed: ["repos", "declineInvitationForAuthenticatedUser"] }
    ],
    declineInvitationForAuthenticatedUser: [
      "DELETE /user/repository_invitations/{invitation_id}"
    ],
    delete: ["DELETE /repos/{owner}/{repo}"],
    deleteAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
    ],
    deleteAdminBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    deleteAnEnvironment: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    deleteAutolink: ["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"],
    deleteBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
    deleteCommitSignatureProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"
    ],
    deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
    deleteDeployment: [
      "DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"
    ],
    deleteDeploymentBranchPolicy: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"
    ],
    deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
    deleteInvitation: [
      "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"
    ],
    deleteOrgRuleset: ["DELETE /orgs/{org}/rulesets/{ruleset_id}"],
    deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages"],
    deletePullRequestReviewProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
    deleteReleaseAsset: [
      "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"
    ],
    deleteRepoRuleset: ["DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
    deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
    disableAutomatedSecurityFixes: [
      "DELETE /repos/{owner}/{repo}/automated-security-fixes"
    ],
    disableDeploymentProtectionRule: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"
    ],
    disableImmutableReleases: [
      "DELETE /repos/{owner}/{repo}/immutable-releases"
    ],
    disablePrivateVulnerabilityReporting: [
      "DELETE /repos/{owner}/{repo}/private-vulnerability-reporting"
    ],
    disableVulnerabilityAlerts: [
      "DELETE /repos/{owner}/{repo}/vulnerability-alerts"
    ],
    downloadArchive: [
      "GET /repos/{owner}/{repo}/zipball/{ref}",
      {},
      { renamed: ["repos", "downloadZipballArchive"] }
    ],
    downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"],
    downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"],
    enableAutomatedSecurityFixes: [
      "PUT /repos/{owner}/{repo}/automated-security-fixes"
    ],
    enableImmutableReleases: ["PUT /repos/{owner}/{repo}/immutable-releases"],
    enablePrivateVulnerabilityReporting: [
      "PUT /repos/{owner}/{repo}/private-vulnerability-reporting"
    ],
    enableVulnerabilityAlerts: [
      "PUT /repos/{owner}/{repo}/vulnerability-alerts"
    ],
    generateReleaseNotes: [
      "POST /repos/{owner}/{repo}/releases/generate-notes"
    ],
    get: ["GET /repos/{owner}/{repo}"],
    getAccessRestrictions: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
    ],
    getAdminBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    getAllDeploymentProtectionRules: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"
    ],
    getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"],
    getAllStatusCheckContexts: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"
    ],
    getAllTopics: ["GET /repos/{owner}/{repo}/topics"],
    getAppsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"
    ],
    getAutolink: ["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"],
    getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
    getBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    getBranchRules: ["GET /repos/{owner}/{repo}/rules/branches/{branch}"],
    getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
    getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
    getCollaboratorPermissionLevel: [
      "GET /repos/{owner}/{repo}/collaborators/{username}/permission"
    ],
    getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"],
    getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
    getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"],
    getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
    getCommitSignatureProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"
    ],
    getCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"],
    getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
    getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
    getCustomDeploymentProtectionRule: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"
    ],
    getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
    getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
    getDeploymentBranchPolicy: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"
    ],
    getDeploymentStatus: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"
    ],
    getEnvironment: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
    getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
    getOrgRuleSuite: ["GET /orgs/{org}/rulesets/rule-suites/{rule_suite_id}"],
    getOrgRuleSuites: ["GET /orgs/{org}/rulesets/rule-suites"],
    getOrgRuleset: ["GET /orgs/{org}/rulesets/{ruleset_id}"],
    getOrgRulesets: ["GET /orgs/{org}/rulesets"],
    getPages: ["GET /repos/{owner}/{repo}/pages"],
    getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
    getPagesDeployment: [
      "GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}"
    ],
    getPagesHealthCheck: ["GET /repos/{owner}/{repo}/pages/health"],
    getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
    getPullRequestReviewProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
    getReadme: ["GET /repos/{owner}/{repo}/readme"],
    getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"],
    getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
    getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
    getRepoRuleSuite: [
      "GET /repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}"
    ],
    getRepoRuleSuites: ["GET /repos/{owner}/{repo}/rulesets/rule-suites"],
    getRepoRuleset: ["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
    getRepoRulesetHistory: [
      "GET /repos/{owner}/{repo}/rulesets/{ruleset_id}/history"
    ],
    getRepoRulesetVersion: [
      "GET /repos/{owner}/{repo}/rulesets/{ruleset_id}/history/{version_id}"
    ],
    getRepoRulesets: ["GET /repos/{owner}/{repo}/rulesets"],
    getStatusChecksProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    getTeamsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"
    ],
    getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
    getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
    getUsersWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"
    ],
    getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
    getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
    getWebhookConfigForRepo: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/config"
    ],
    getWebhookDelivery: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}"
    ],
    listActivities: ["GET /repos/{owner}/{repo}/activity"],
    listAttestations: [
      "GET /repos/{owner}/{repo}/attestations/{subject_digest}"
    ],
    listAutolinks: ["GET /repos/{owner}/{repo}/autolinks"],
    listBranches: ["GET /repos/{owner}/{repo}/branches"],
    listBranchesForHeadCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head"
    ],
    listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
    listCommentsForCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"
    ],
    listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"],
    listCommitStatusesForRef: [
      "GET /repos/{owner}/{repo}/commits/{ref}/statuses"
    ],
    listCommits: ["GET /repos/{owner}/{repo}/commits"],
    listContributors: ["GET /repos/{owner}/{repo}/contributors"],
    listCustomDeploymentRuleIntegrations: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps"
    ],
    listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
    listDeploymentBranchPolicies: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"
    ],
    listDeploymentStatuses: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"
    ],
    listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
    listForAuthenticatedUser: ["GET /user/repos"],
    listForOrg: ["GET /orgs/{org}/repos"],
    listForUser: ["GET /users/{username}/repos"],
    listForks: ["GET /repos/{owner}/{repo}/forks"],
    listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
    listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
    listLanguages: ["GET /repos/{owner}/{repo}/languages"],
    listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
    listPublic: ["GET /repositories"],
    listPullRequestsAssociatedWithCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls"
    ],
    listReleaseAssets: [
      "GET /repos/{owner}/{repo}/releases/{release_id}/assets"
    ],
    listReleases: ["GET /repos/{owner}/{repo}/releases"],
    listTags: ["GET /repos/{owner}/{repo}/tags"],
    listTeams: ["GET /repos/{owner}/{repo}/teams"],
    listWebhookDeliveries: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries"
    ],
    listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
    merge: ["POST /repos/{owner}/{repo}/merges"],
    mergeUpstream: ["POST /repos/{owner}/{repo}/merge-upstream"],
    pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
    redeliverWebhookDelivery: [
      "POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"
    ],
    removeAppAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    removeCollaborator: [
      "DELETE /repos/{owner}/{repo}/collaborators/{username}"
    ],
    removeStatusCheckContexts: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    removeStatusCheckProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    removeTeamAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    removeUserAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"],
    replaceAllTopics: ["PUT /repos/{owner}/{repo}/topics"],
    requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
    setAdminBranchProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    setAppAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    setStatusCheckContexts: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    setTeamAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    setUserAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
    transfer: ["POST /repos/{owner}/{repo}/transfer"],
    update: ["PATCH /repos/{owner}/{repo}"],
    updateBranchProtection: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],
    updateDeploymentBranchPolicy: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"
    ],
    updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
    updateInvitation: [
      "PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"
    ],
    updateOrgRuleset: ["PUT /orgs/{org}/rulesets/{ruleset_id}"],
    updatePullRequestReviewProtection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
    updateReleaseAsset: [
      "PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"
    ],
    updateRepoRuleset: ["PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
    updateStatusCheckPotection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
      {},
      { renamed: ["repos", "updateStatusCheckProtection"] }
    ],
    updateStatusCheckProtection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
    updateWebhookConfigForRepo: [
      "PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"
    ],
    uploadReleaseAsset: [
      "POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
      { baseUrl: "https://uploads.github.com" }
    ]
  },
  search: {
    code: ["GET /search/code"],
    commits: ["GET /search/commits"],
    issuesAndPullRequests: ["GET /search/issues"],
    labels: ["GET /search/labels"],
    repos: ["GET /search/repositories"],
    topics: ["GET /search/topics"],
    users: ["GET /search/users"]
  },
  secretScanning: {
    createPushProtectionBypass: [
      "POST /repos/{owner}/{repo}/secret-scanning/push-protection-bypasses"
    ],
    getAlert: [
      "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"
    ],
    getScanHistory: ["GET /repos/{owner}/{repo}/secret-scanning/scan-history"],
    listAlertsForOrg: ["GET /orgs/{org}/secret-scanning/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"],
    listLocationsForAlert: [
      "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations"
    ],
    listOrgPatternConfigs: [
      "GET /orgs/{org}/secret-scanning/pattern-configurations"
    ],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"
    ],
    updateOrgPatternConfigs: [
      "PATCH /orgs/{org}/secret-scanning/pattern-configurations"
    ]
  },
  securityAdvisories: {
    createFork: [
      "POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks"
    ],
    createPrivateVulnerabilityReport: [
      "POST /repos/{owner}/{repo}/security-advisories/reports"
    ],
    createRepositoryAdvisory: [
      "POST /repos/{owner}/{repo}/security-advisories"
    ],
    createRepositoryAdvisoryCveRequest: [
      "POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve"
    ],
    getGlobalAdvisory: ["GET /advisories/{ghsa_id}"],
    getRepositoryAdvisory: [
      "GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}"
    ],
    listGlobalAdvisories: ["GET /advisories"],
    listOrgRepositoryAdvisories: ["GET /orgs/{org}/security-advisories"],
    listRepositoryAdvisories: ["GET /repos/{owner}/{repo}/security-advisories"],
    updateRepositoryAdvisory: [
      "PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}"
    ]
  },
  teams: {
    addOrUpdateMembershipForUserInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    addOrUpdateRepoPermissionsInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    checkPermissionsForRepoInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    create: ["POST /orgs/{org}/teams"],
    createDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
    ],
    createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
    deleteDiscussionCommentInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    deleteDiscussionInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
    getByName: ["GET /orgs/{org}/teams/{team_slug}"],
    getDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    getDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    getMembershipForUserInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    list: ["GET /orgs/{org}/teams"],
    listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
    listDiscussionCommentsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
    ],
    listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
    listForAuthenticatedUser: ["GET /user/teams"],
    listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
    listPendingInvitationsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/invitations"
    ],
    listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
    removeMembershipForUserInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    removeRepoInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    updateDiscussionCommentInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    updateDiscussionInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"]
  },
  users: {
    addEmailForAuthenticated: [
      "POST /user/emails",
      {},
      { renamed: ["users", "addEmailForAuthenticatedUser"] }
    ],
    addEmailForAuthenticatedUser: ["POST /user/emails"],
    addSocialAccountForAuthenticatedUser: ["POST /user/social_accounts"],
    block: ["PUT /user/blocks/{username}"],
    checkBlocked: ["GET /user/blocks/{username}"],
    checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
    checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"],
    createGpgKeyForAuthenticated: [
      "POST /user/gpg_keys",
      {},
      { renamed: ["users", "createGpgKeyForAuthenticatedUser"] }
    ],
    createGpgKeyForAuthenticatedUser: ["POST /user/gpg_keys"],
    createPublicSshKeyForAuthenticated: [
      "POST /user/keys",
      {},
      { renamed: ["users", "createPublicSshKeyForAuthenticatedUser"] }
    ],
    createPublicSshKeyForAuthenticatedUser: ["POST /user/keys"],
    createSshSigningKeyForAuthenticatedUser: ["POST /user/ssh_signing_keys"],
    deleteAttestationsBulk: [
      "POST /users/{username}/attestations/delete-request"
    ],
    deleteAttestationsById: [
      "DELETE /users/{username}/attestations/{attestation_id}"
    ],
    deleteAttestationsBySubjectDigest: [
      "DELETE /users/{username}/attestations/digest/{subject_digest}"
    ],
    deleteEmailForAuthenticated: [
      "DELETE /user/emails",
      {},
      { renamed: ["users", "deleteEmailForAuthenticatedUser"] }
    ],
    deleteEmailForAuthenticatedUser: ["DELETE /user/emails"],
    deleteGpgKeyForAuthenticated: [
      "DELETE /user/gpg_keys/{gpg_key_id}",
      {},
      { renamed: ["users", "deleteGpgKeyForAuthenticatedUser"] }
    ],
    deleteGpgKeyForAuthenticatedUser: ["DELETE /user/gpg_keys/{gpg_key_id}"],
    deletePublicSshKeyForAuthenticated: [
      "DELETE /user/keys/{key_id}",
      {},
      { renamed: ["users", "deletePublicSshKeyForAuthenticatedUser"] }
    ],
    deletePublicSshKeyForAuthenticatedUser: ["DELETE /user/keys/{key_id}"],
    deleteSocialAccountForAuthenticatedUser: ["DELETE /user/social_accounts"],
    deleteSshSigningKeyForAuthenticatedUser: [
      "DELETE /user/ssh_signing_keys/{ssh_signing_key_id}"
    ],
    follow: ["PUT /user/following/{username}"],
    getAuthenticated: ["GET /user"],
    getById: ["GET /user/{account_id}"],
    getByUsername: ["GET /users/{username}"],
    getContextForUser: ["GET /users/{username}/hovercard"],
    getGpgKeyForAuthenticated: [
      "GET /user/gpg_keys/{gpg_key_id}",
      {},
      { renamed: ["users", "getGpgKeyForAuthenticatedUser"] }
    ],
    getGpgKeyForAuthenticatedUser: ["GET /user/gpg_keys/{gpg_key_id}"],
    getPublicSshKeyForAuthenticated: [
      "GET /user/keys/{key_id}",
      {},
      { renamed: ["users", "getPublicSshKeyForAuthenticatedUser"] }
    ],
    getPublicSshKeyForAuthenticatedUser: ["GET /user/keys/{key_id}"],
    getSshSigningKeyForAuthenticatedUser: [
      "GET /user/ssh_signing_keys/{ssh_signing_key_id}"
    ],
    list: ["GET /users"],
    listAttestations: ["GET /users/{username}/attestations/{subject_digest}"],
    listAttestationsBulk: [
      "POST /users/{username}/attestations/bulk-list{?per_page,before,after}"
    ],
    listBlockedByAuthenticated: [
      "GET /user/blocks",
      {},
      { renamed: ["users", "listBlockedByAuthenticatedUser"] }
    ],
    listBlockedByAuthenticatedUser: ["GET /user/blocks"],
    listEmailsForAuthenticated: [
      "GET /user/emails",
      {},
      { renamed: ["users", "listEmailsForAuthenticatedUser"] }
    ],
    listEmailsForAuthenticatedUser: ["GET /user/emails"],
    listFollowedByAuthenticated: [
      "GET /user/following",
      {},
      { renamed: ["users", "listFollowedByAuthenticatedUser"] }
    ],
    listFollowedByAuthenticatedUser: ["GET /user/following"],
    listFollowersForAuthenticatedUser: ["GET /user/followers"],
    listFollowersForUser: ["GET /users/{username}/followers"],
    listFollowingForUser: ["GET /users/{username}/following"],
    listGpgKeysForAuthenticated: [
      "GET /user/gpg_keys",
      {},
      { renamed: ["users", "listGpgKeysForAuthenticatedUser"] }
    ],
    listGpgKeysForAuthenticatedUser: ["GET /user/gpg_keys"],
    listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
    listPublicEmailsForAuthenticated: [
      "GET /user/public_emails",
      {},
      { renamed: ["users", "listPublicEmailsForAuthenticatedUser"] }
    ],
    listPublicEmailsForAuthenticatedUser: ["GET /user/public_emails"],
    listPublicKeysForUser: ["GET /users/{username}/keys"],
    listPublicSshKeysForAuthenticated: [
      "GET /user/keys",
      {},
      { renamed: ["users", "listPublicSshKeysForAuthenticatedUser"] }
    ],
    listPublicSshKeysForAuthenticatedUser: ["GET /user/keys"],
    listSocialAccountsForAuthenticatedUser: ["GET /user/social_accounts"],
    listSocialAccountsForUser: ["GET /users/{username}/social_accounts"],
    listSshSigningKeysForAuthenticatedUser: ["GET /user/ssh_signing_keys"],
    listSshSigningKeysForUser: ["GET /users/{username}/ssh_signing_keys"],
    setPrimaryEmailVisibilityForAuthenticated: [
      "PATCH /user/email/visibility",
      {},
      { renamed: ["users", "setPrimaryEmailVisibilityForAuthenticatedUser"] }
    ],
    setPrimaryEmailVisibilityForAuthenticatedUser: [
      "PATCH /user/email/visibility"
    ],
    unblock: ["DELETE /user/blocks/{username}"],
    unfollow: ["DELETE /user/following/{username}"],
    updateAuthenticated: ["PATCH /user"]
  }
};
var endpoints_default = Endpoints;

// node_modules/.pnpm/@octokit+plugin-rest-endpoi_88f1cfdccbcd12f9bd89a662a3d08bce/node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/endpoints-to-methods.js
var endpointMethodsMap = /* @__PURE__ */ new Map();
for (const [scope, endpoints] of Object.entries(endpoints_default)) {
  for (const [methodName, endpoint2] of Object.entries(endpoints)) {
    const [route, defaults, decorations] = endpoint2;
    const [method, url] = route.split(/ /);
    const endpointDefaults = Object.assign(
      {
        method,
        url
      },
      defaults
    );
    if (!endpointMethodsMap.has(scope)) {
      endpointMethodsMap.set(scope, /* @__PURE__ */ new Map());
    }
    endpointMethodsMap.get(scope).set(methodName, {
      scope,
      methodName,
      endpointDefaults,
      decorations
    });
  }
}
var handler = {
  has({ scope }, methodName) {
    return endpointMethodsMap.get(scope).has(methodName);
  },
  getOwnPropertyDescriptor(target, methodName) {
    return {
      value: this.get(target, methodName),
      // ensures method is in the cache
      configurable: true,
      writable: true,
      enumerable: true
    };
  },
  defineProperty(target, methodName, descriptor) {
    Object.defineProperty(target.cache, methodName, descriptor);
    return true;
  },
  deleteProperty(target, methodName) {
    delete target.cache[methodName];
    return true;
  },
  ownKeys({ scope }) {
    return [...endpointMethodsMap.get(scope).keys()];
  },
  set(target, methodName, value) {
    return target.cache[methodName] = value;
  },
  get({ octokit, scope, cache }, methodName) {
    if (cache[methodName]) {
      return cache[methodName];
    }
    const method = endpointMethodsMap.get(scope).get(methodName);
    if (!method) {
      return void 0;
    }
    const { endpointDefaults, decorations } = method;
    if (decorations) {
      cache[methodName] = decorate(
        octokit,
        scope,
        methodName,
        endpointDefaults,
        decorations
      );
    } else {
      cache[methodName] = octokit.request.defaults(endpointDefaults);
    }
    return cache[methodName];
  }
};
function endpointsToMethods(octokit) {
  const newMethods = {};
  for (const scope of endpointMethodsMap.keys()) {
    newMethods[scope] = new Proxy({ octokit, scope, cache: {} }, handler);
  }
  return newMethods;
}
function decorate(octokit, scope, methodName, defaults, decorations) {
  const requestWithDefaults = octokit.request.defaults(defaults);
  function withDecorations(...args) {
    let options = requestWithDefaults.endpoint.merge(...args);
    if (decorations.mapToData) {
      options = Object.assign({}, options, {
        data: options[decorations.mapToData],
        [decorations.mapToData]: void 0
      });
      return requestWithDefaults(options);
    }
    if (decorations.renamed) {
      const [newScope, newMethodName] = decorations.renamed;
      octokit.log.warn(
        `octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`
      );
    }
    if (decorations.deprecated) {
      octokit.log.warn(decorations.deprecated);
    }
    if (decorations.renamedParameters) {
      const options2 = requestWithDefaults.endpoint.merge(...args);
      for (const [name, alias] of Object.entries(
        decorations.renamedParameters
      )) {
        if (name in options2) {
          octokit.log.warn(
            `"${name}" parameter is deprecated for "octokit.${scope}.${methodName}()". Use "${alias}" instead`
          );
          if (!(alias in options2)) {
            options2[alias] = options2[name];
          }
          delete options2[name];
        }
      }
      return requestWithDefaults(options2);
    }
    return requestWithDefaults(...args);
  }
  return Object.assign(withDecorations, requestWithDefaults);
}

// node_modules/.pnpm/@octokit+plugin-rest-endpoi_88f1cfdccbcd12f9bd89a662a3d08bce/node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/index.js
function restEndpointMethods(octokit) {
  const api = endpointsToMethods(octokit);
  return {
    rest: api
  };
}
restEndpointMethods.VERSION = VERSION7;
function legacyRestEndpointMethods(octokit) {
  const api = endpointsToMethods(octokit);
  return {
    ...api,
    rest: api
  };
}
legacyRestEndpointMethods.VERSION = VERSION7;

// node_modules/.pnpm/@octokit+rest@22.0.1/node_modules/@octokit/rest/dist-src/version.js
var VERSION8 = "22.0.1";

// node_modules/.pnpm/@octokit+rest@22.0.1/node_modules/@octokit/rest/dist-src/index.js
var Octokit2 = Octokit.plugin(requestLog, legacyRestEndpointMethods, paginateRest).defaults(
  {
    userAgent: `octokit-rest.js/${VERSION8}`
  }
);

// src/github-client/github-client.ts
function createGithubClient(token) {
  return new Octokit2({ auth: token });
}

// src/release-publisher/release-publisher.ts
async function publishRelease(octokit, params) {
  const { data: tagData } = await octokit.git.createTag({
    owner: params.owner,
    repo: params.repo,
    tag: params.tagName,
    message: params.tagName,
    object: params.commitSha,
    type: "commit",
    tagger: {
      name: "github-actions[bot]",
      email: "41898282+github-actions[bot]@users.noreply.github.com",
      date: (/* @__PURE__ */ new Date()).toISOString()
    }
  });
  await octokit.git.createRef({
    owner: params.owner,
    repo: params.repo,
    ref: `refs/tags/${params.tagName}`,
    sha: tagData.sha
  });
  await octokit.repos.createRelease({
    owner: params.owner,
    repo: params.repo,
    tag_name: params.tagName,
    body: params.releaseNotes,
    prerelease: params.isPrerelease,
    make_latest: params.isPrerelease ? "false" : "true"
  });
}

// src/scripts/publish-release.ts
var import_semver = __toESM(require_semver2());
import { appendFile, readFile as readFile2 } from "fs/promises";
import { fileURLToPath } from "url";
async function run() {
  const [owner, repo] = process.env["GITHUB_REPOSITORY"].split("/");
  const changelogPath = process.env["CHANGELOG_PATH"] ?? "CHANGELOG.md";
  const manifest = JSON.parse(await readFile2(`${process.env["GITHUB_WORKSPACE"]}/package.json`, "utf-8"));
  const version = manifest.version;
  const isPrerelease = import_semver.default.prerelease(version) !== null;
  const releaseNotes = isPrerelease ? await extractPrereleaseDelta(changelogPath) : await extractStableNotes(changelogPath);
  const octokit = createGithubClient(process.env["GH_TOKEN"]);
  await publishRelease(octokit, {
    owner,
    repo,
    tagName: `v${version}`,
    commitSha: process.env["GITHUB_SHA"],
    releaseNotes,
    isPrerelease
  });
  const output = process.env["GITHUB_OUTPUT"];
  await appendFile(output, `is-prerelease=${isPrerelease}
`);
}
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await run();
}
export {
  run
};
/*! Bundled license information:

@octokit/request-error/dist-src/index.js:
  (* v8 ignore else -- @preserve -- Bug with vitest coverage where it sees an else branch that doesn't exist *)

@octokit/request/dist-bundle/index.js:
  (* v8 ignore next -- @preserve *)
  (* v8 ignore else -- @preserve *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtY29udGVudC10eXBlLXBhcnNlQDMuMC4wL25vZGVfbW9kdWxlcy9mYXN0LWNvbnRlbnQtdHlwZS1wYXJzZS9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvaW50ZXJuYWwvY29uc3RhbnRzLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9kZWJ1Zy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvaW50ZXJuYWwvcmUuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL3BhcnNlLW9wdGlvbnMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL2lkZW50aWZpZXJzLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9jbGFzc2VzL3NlbXZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3BhcnNlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvdmFsaWQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9jbGVhbi5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2luYy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2RpZmYuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9tYWpvci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL21pbm9yLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvcGF0Y2guanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9wcmVyZWxlYXNlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY29tcGFyZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3Jjb21wYXJlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY29tcGFyZS1sb29zZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2NvbXBhcmUtYnVpbGQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9zb3J0LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvcnNvcnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9ndC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2x0LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvZXEuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9uZXEuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9ndGUuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9sdGUuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9jbXAuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9jb2VyY2UuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL2xydWNhY2hlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9jbGFzc2VzL3JhbmdlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9jbGFzc2VzL2NvbXBhcmF0b3IuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9zYXRpc2ZpZXMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy90by1jb21wYXJhdG9ycy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL21heC1zYXRpc2Z5aW5nLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvbWluLXNhdGlzZnlpbmcuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9taW4tdmVyc2lvbi5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL3ZhbGlkLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvb3V0c2lkZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL2d0ci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL2x0ci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL2ludGVyc2VjdHMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9zaW1wbGlmeS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL3N1YnNldC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vc3JjL2NoYW5nZWxvZy1tYW5hZ2VyL2NoYW5nZWxvZy1tYW5hZ2VyLnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS91bml2ZXJzYWwtdXNlci1hZ2VudEA3LjAuMy9ub2RlX21vZHVsZXMvdW5pdmVyc2FsLXVzZXItYWdlbnQvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JlZm9yZS1hZnRlci1ob29rQDQuMC4wL25vZGVfbW9kdWxlcy9iZWZvcmUtYWZ0ZXItaG9vay9saWIvcmVnaXN0ZXIuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JlZm9yZS1hZnRlci1ob29rQDQuMC4wL25vZGVfbW9kdWxlcy9iZWZvcmUtYWZ0ZXItaG9vay9saWIvYWRkLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9iZWZvcmUtYWZ0ZXItaG9va0A0LjAuMC9ub2RlX21vZHVsZXMvYmVmb3JlLWFmdGVyLWhvb2svbGliL3JlbW92ZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYmVmb3JlLWFmdGVyLWhvb2tANC4wLjAvbm9kZV9tb2R1bGVzL2JlZm9yZS1hZnRlci1ob29rL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtlbmRwb2ludEAxMS4wLjMvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L2VuZHBvaW50L2Rpc3QtYnVuZGxlL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtyZXF1ZXN0QDEwLjAuOC9ub2RlX21vZHVsZXMvQG9jdG9raXQvcmVxdWVzdC9kaXN0LWJ1bmRsZS9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vanNvbi13aXRoLWJpZ2ludEAzLjUuOC9ub2RlX21vZHVsZXMvanNvbi13aXRoLWJpZ2ludC9qc29uLXdpdGgtYmlnaW50LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtyZXF1ZXN0LWVycm9yQDcuMS4wL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9yZXF1ZXN0LWVycm9yL2Rpc3Qtc3JjL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtncmFwaHFsQDkuMC4zL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9ncmFwaHFsL2Rpc3QtYnVuZGxlL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCthdXRoLXRva2VuQDYuMC4wL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9hdXRoLXRva2VuL2Rpc3QtYnVuZGxlL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtjb3JlQDcuMC42L25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9jb3JlL2Rpc3Qtc3JjL3ZlcnNpb24uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K2NvcmVANy4wLjYvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L2NvcmUvZGlzdC1zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3BsdWdpbi1yZXF1ZXN0LWxvZ0A2LjAuMF9Ab2N0b2tpdCtjb3JlQDcuMC42L25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9wbHVnaW4tcmVxdWVzdC1sb2cvZGlzdC1zcmMvdmVyc2lvbi5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9jdG9raXQrcGx1Z2luLXJlcXVlc3QtbG9nQDYuMC4wX0BvY3Rva2l0K2NvcmVANy4wLjYvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3BsdWdpbi1yZXF1ZXN0LWxvZy9kaXN0LXNyYy9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9jdG9raXQrcGx1Z2luLXBhZ2luYXRlLXJlc3RAMTQuMC4wX0BvY3Rva2l0K2NvcmVANy4wLjYvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3BsdWdpbi1wYWdpbmF0ZS1yZXN0L2Rpc3QtYnVuZGxlL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtwbHVnaW4tcmVzdC1lbmRwb2lfODhmMWNmZGNjYmNkMTJmOWJkODlhNjYyYTNkMDhiY2Uvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3NyYy92ZXJzaW9uLnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtwbHVnaW4tcmVzdC1lbmRwb2lfODhmMWNmZGNjYmNkMTJmOWJkODlhNjYyYTNkMDhiY2Uvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3NyYy9nZW5lcmF0ZWQvZW5kcG9pbnRzLnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtwbHVnaW4tcmVzdC1lbmRwb2lfODhmMWNmZGNjYmNkMTJmOWJkODlhNjYyYTNkMDhiY2Uvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3NyYy9lbmRwb2ludHMtdG8tbWV0aG9kcy50cyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9jdG9raXQrcGx1Z2luLXJlc3QtZW5kcG9pXzg4ZjFjZmRjY2JjZDEyZjliZDg5YTY2MmEzZDA4YmNlL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9zcmMvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3Jlc3RAMjIuMC4xL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9yZXN0L2Rpc3Qtc3JjL3ZlcnNpb24uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3Jlc3RAMjIuMC4xL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9yZXN0L2Rpc3Qtc3JjL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL3NyYy9naXRodWItY2xpZW50L2dpdGh1Yi1jbGllbnQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL3JlbGVhc2UtcHVibGlzaGVyL3JlbGVhc2UtcHVibGlzaGVyLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9zY3JpcHRzL3B1Ymxpc2gtcmVsZWFzZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IE51bGxPYmplY3QgPSBmdW5jdGlvbiBOdWxsT2JqZWN0ICgpIHsgfVxuTnVsbE9iamVjdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoICooIFwiO1wiIHBhcmFtZXRlciApIGluIFJGQyA3MjMxIHNlYyAzLjEuMS4xXG4gKlxuICogcGFyYW1ldGVyICAgICA9IHRva2VuIFwiPVwiICggdG9rZW4gLyBxdW90ZWQtc3RyaW5nIClcbiAqIHRva2VuICAgICAgICAgPSAxKnRjaGFyXG4gKiB0Y2hhciAgICAgICAgID0gXCIhXCIgLyBcIiNcIiAvIFwiJFwiIC8gXCIlXCIgLyBcIiZcIiAvIFwiJ1wiIC8gXCIqXCJcbiAqICAgICAgICAgICAgICAgLyBcIitcIiAvIFwiLVwiIC8gXCIuXCIgLyBcIl5cIiAvIFwiX1wiIC8gXCJgXCIgLyBcInxcIiAvIFwiflwiXG4gKiAgICAgICAgICAgICAgIC8gRElHSVQgLyBBTFBIQVxuICogICAgICAgICAgICAgICA7IGFueSBWQ0hBUiwgZXhjZXB0IGRlbGltaXRlcnNcbiAqIHF1b3RlZC1zdHJpbmcgPSBEUVVPVEUgKiggcWR0ZXh0IC8gcXVvdGVkLXBhaXIgKSBEUVVPVEVcbiAqIHFkdGV4dCAgICAgICAgPSBIVEFCIC8gU1AgLyAleDIxIC8gJXgyMy01QiAvICV4NUQtN0UgLyBvYnMtdGV4dFxuICogb2JzLXRleHQgICAgICA9ICV4ODAtRkZcbiAqIHF1b3RlZC1wYWlyICAgPSBcIlxcXCIgKCBIVEFCIC8gU1AgLyBWQ0hBUiAvIG9icy10ZXh0IClcbiAqL1xuY29uc3QgcGFyYW1SRSA9IC87ICooWyEjJCUmJyorLl5cXHdgfH4tXSspPShcIig/OltcXHZcXHUwMDIwXFx1MDAyMVxcdTAwMjMtXFx1MDA1YlxcdTAwNWQtXFx1MDA3ZVxcdTAwODAtXFx1MDBmZl18XFxcXFtcXHZcXHUwMDIwLVxcdTAwZmZdKSpcInxbISMkJSYnKisuXlxcd2B8fi1dKykgKi9ndVxuXG4vKipcbiAqIFJlZ0V4cCB0byBtYXRjaCBxdW90ZWQtcGFpciBpbiBSRkMgNzIzMCBzZWMgMy4yLjZcbiAqXG4gKiBxdW90ZWQtcGFpciA9IFwiXFxcIiAoIEhUQUIgLyBTUCAvIFZDSEFSIC8gb2JzLXRleHQgKVxuICogb2JzLXRleHQgICAgPSAleDgwLUZGXG4gKi9cbmNvbnN0IHF1b3RlZFBhaXJSRSA9IC9cXFxcKFtcXHZcXHUwMDIwLVxcdTAwZmZdKS9ndVxuXG4vKipcbiAqIFJlZ0V4cCB0byBtYXRjaCB0eXBlIGluIFJGQyA3MjMxIHNlYyAzLjEuMS4xXG4gKlxuICogbWVkaWEtdHlwZSA9IHR5cGUgXCIvXCIgc3VidHlwZVxuICogdHlwZSAgICAgICA9IHRva2VuXG4gKiBzdWJ0eXBlICAgID0gdG9rZW5cbiAqL1xuY29uc3QgbWVkaWFUeXBlUkUgPSAvXlshIyQlJicqKy5eXFx3fH4tXStcXC9bISMkJSYnKisuXlxcd3x+LV0rJC91XG5cbi8vIGRlZmF1bHQgQ29udGVudFR5cGUgdG8gcHJldmVudCByZXBlYXRlZCBvYmplY3QgY3JlYXRpb25cbmNvbnN0IGRlZmF1bHRDb250ZW50VHlwZSA9IHsgdHlwZTogJycsIHBhcmFtZXRlcnM6IG5ldyBOdWxsT2JqZWN0KCkgfVxuT2JqZWN0LmZyZWV6ZShkZWZhdWx0Q29udGVudFR5cGUucGFyYW1ldGVycylcbk9iamVjdC5mcmVlemUoZGVmYXVsdENvbnRlbnRUeXBlKVxuXG4vKipcbiAqIFBhcnNlIG1lZGlhIHR5cGUgdG8gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gaGVhZGVyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcGFyc2UgKGhlYWRlcikge1xuICBpZiAodHlwZW9mIGhlYWRlciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBoZWFkZXIgaXMgcmVxdWlyZWQgYW5kIG11c3QgYmUgYSBzdHJpbmcnKVxuICB9XG5cbiAgbGV0IGluZGV4ID0gaGVhZGVyLmluZGV4T2YoJzsnKVxuICBjb25zdCB0eXBlID0gaW5kZXggIT09IC0xXG4gICAgPyBoZWFkZXIuc2xpY2UoMCwgaW5kZXgpLnRyaW0oKVxuICAgIDogaGVhZGVyLnRyaW0oKVxuXG4gIGlmIChtZWRpYVR5cGVSRS50ZXN0KHR5cGUpID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgbWVkaWEgdHlwZScpXG4gIH1cblxuICBjb25zdCByZXN1bHQgPSB7XG4gICAgdHlwZTogdHlwZS50b0xvd2VyQ2FzZSgpLFxuICAgIHBhcmFtZXRlcnM6IG5ldyBOdWxsT2JqZWN0KClcbiAgfVxuXG4gIC8vIHBhcnNlIHBhcmFtZXRlcnNcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGxldCBrZXlcbiAgbGV0IG1hdGNoXG4gIGxldCB2YWx1ZVxuXG4gIHBhcmFtUkUubGFzdEluZGV4ID0gaW5kZXhcblxuICB3aGlsZSAoKG1hdGNoID0gcGFyYW1SRS5leGVjKGhlYWRlcikpKSB7XG4gICAgaWYgKG1hdGNoLmluZGV4ICE9PSBpbmRleCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBwYXJhbWV0ZXIgZm9ybWF0JylcbiAgICB9XG5cbiAgICBpbmRleCArPSBtYXRjaFswXS5sZW5ndGhcbiAgICBrZXkgPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpXG4gICAgdmFsdWUgPSBtYXRjaFsyXVxuXG4gICAgaWYgKHZhbHVlWzBdID09PSAnXCInKSB7XG4gICAgICAvLyByZW1vdmUgcXVvdGVzIGFuZCBlc2NhcGVzXG4gICAgICB2YWx1ZSA9IHZhbHVlXG4gICAgICAgIC5zbGljZSgxLCB2YWx1ZS5sZW5ndGggLSAxKVxuXG4gICAgICBxdW90ZWRQYWlyUkUudGVzdCh2YWx1ZSkgJiYgKHZhbHVlID0gdmFsdWUucmVwbGFjZShxdW90ZWRQYWlyUkUsICckMScpKVxuICAgIH1cblxuICAgIHJlc3VsdC5wYXJhbWV0ZXJzW2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgaWYgKGluZGV4ICE9PSBoZWFkZXIubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBwYXJhbWV0ZXIgZm9ybWF0JylcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gc2FmZVBhcnNlIChoZWFkZXIpIHtcbiAgaWYgKHR5cGVvZiBoZWFkZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRDb250ZW50VHlwZVxuICB9XG5cbiAgbGV0IGluZGV4ID0gaGVhZGVyLmluZGV4T2YoJzsnKVxuICBjb25zdCB0eXBlID0gaW5kZXggIT09IC0xXG4gICAgPyBoZWFkZXIuc2xpY2UoMCwgaW5kZXgpLnRyaW0oKVxuICAgIDogaGVhZGVyLnRyaW0oKVxuXG4gIGlmIChtZWRpYVR5cGVSRS50ZXN0KHR5cGUpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBkZWZhdWx0Q29udGVudFR5cGVcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICB0eXBlOiB0eXBlLnRvTG93ZXJDYXNlKCksXG4gICAgcGFyYW1ldGVyczogbmV3IE51bGxPYmplY3QoKVxuICB9XG5cbiAgLy8gcGFyc2UgcGFyYW1ldGVyc1xuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgbGV0IGtleVxuICBsZXQgbWF0Y2hcbiAgbGV0IHZhbHVlXG5cbiAgcGFyYW1SRS5sYXN0SW5kZXggPSBpbmRleFxuXG4gIHdoaWxlICgobWF0Y2ggPSBwYXJhbVJFLmV4ZWMoaGVhZGVyKSkpIHtcbiAgICBpZiAobWF0Y2guaW5kZXggIT09IGluZGV4KSB7XG4gICAgICByZXR1cm4gZGVmYXVsdENvbnRlbnRUeXBlXG4gICAgfVxuXG4gICAgaW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoXG4gICAga2V5ID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKVxuICAgIHZhbHVlID0gbWF0Y2hbMl1cblxuICAgIGlmICh2YWx1ZVswXSA9PT0gJ1wiJykge1xuICAgICAgLy8gcmVtb3ZlIHF1b3RlcyBhbmQgZXNjYXBlc1xuICAgICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAuc2xpY2UoMSwgdmFsdWUubGVuZ3RoIC0gMSlcblxuICAgICAgcXVvdGVkUGFpclJFLnRlc3QodmFsdWUpICYmICh2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocXVvdGVkUGFpclJFLCAnJDEnKSlcbiAgICB9XG5cbiAgICByZXN1bHQucGFyYW1ldGVyc1trZXldID0gdmFsdWVcbiAgfVxuXG4gIGlmIChpbmRleCAhPT0gaGVhZGVyLmxlbmd0aCkge1xuICAgIHJldHVybiBkZWZhdWx0Q29udGVudFR5cGVcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IHsgcGFyc2UsIHNhZmVQYXJzZSB9XG5tb2R1bGUuZXhwb3J0cy5wYXJzZSA9IHBhcnNlXG5tb2R1bGUuZXhwb3J0cy5zYWZlUGFyc2UgPSBzYWZlUGFyc2Vcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHRDb250ZW50VHlwZSA9IGRlZmF1bHRDb250ZW50VHlwZVxuIiwgIid1c2Ugc3RyaWN0J1xuXG4vLyBOb3RlOiB0aGlzIGlzIHRoZSBzZW12ZXIub3JnIHZlcnNpb24gb2YgdGhlIHNwZWMgdGhhdCBpdCBpbXBsZW1lbnRzXG4vLyBOb3QgbmVjZXNzYXJpbHkgdGhlIHBhY2thZ2UgdmVyc2lvbiBvZiB0aGlzIGNvZGUuXG5jb25zdCBTRU1WRVJfU1BFQ19WRVJTSU9OID0gJzIuMC4wJ1xuXG5jb25zdCBNQVhfTEVOR1RIID0gMjU2XG5jb25zdCBNQVhfU0FGRV9JTlRFR0VSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHxcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIDkwMDcxOTkyNTQ3NDA5OTFcblxuLy8gTWF4IHNhZmUgc2VnbWVudCBsZW5ndGggZm9yIGNvZXJjaW9uLlxuY29uc3QgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSCA9IDE2XG5cbi8vIE1heCBzYWZlIGxlbmd0aCBmb3IgYSBidWlsZCBpZGVudGlmaWVyLiBUaGUgbWF4IGxlbmd0aCBtaW51cyA2IGNoYXJhY3RlcnMgZm9yXG4vLyB0aGUgc2hvcnRlc3QgdmVyc2lvbiB3aXRoIGEgYnVpbGQgMC4wLjArQlVJTEQuXG5jb25zdCBNQVhfU0FGRV9CVUlMRF9MRU5HVEggPSBNQVhfTEVOR1RIIC0gNlxuXG5jb25zdCBSRUxFQVNFX1RZUEVTID0gW1xuICAnbWFqb3InLFxuICAncHJlbWFqb3InLFxuICAnbWlub3InLFxuICAncHJlbWlub3InLFxuICAncGF0Y2gnLFxuICAncHJlcGF0Y2gnLFxuICAncHJlcmVsZWFzZScsXG5dXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBNQVhfTEVOR1RILFxuICBNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RILFxuICBNQVhfU0FGRV9CVUlMRF9MRU5HVEgsXG4gIE1BWF9TQUZFX0lOVEVHRVIsXG4gIFJFTEVBU0VfVFlQRVMsXG4gIFNFTVZFUl9TUEVDX1ZFUlNJT04sXG4gIEZMQUdfSU5DTFVERV9QUkVSRUxFQVNFOiAwYjAwMSxcbiAgRkxBR19MT09TRTogMGIwMTAsXG59XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGRlYnVnID0gKFxuICB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiZcbiAgcHJvY2Vzcy5lbnYgJiZcbiAgcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyAmJlxuICAvXFxic2VtdmVyXFxiL2kudGVzdChwcm9jZXNzLmVudi5OT0RFX0RFQlVHKVxuKSA/ICguLi5hcmdzKSA9PiBjb25zb2xlLmVycm9yKCdTRU1WRVInLCAuLi5hcmdzKVxuICA6ICgpID0+IHt9XG5cbm1vZHVsZS5leHBvcnRzID0gZGVidWdcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3Qge1xuICBNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RILFxuICBNQVhfU0FGRV9CVUlMRF9MRU5HVEgsXG4gIE1BWF9MRU5HVEgsXG59ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKVxuY29uc3QgZGVidWcgPSByZXF1aXJlKCcuL2RlYnVnJylcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9XG5cbi8vIFRoZSBhY3R1YWwgcmVnZXhwcyBnbyBvbiBleHBvcnRzLnJlXG5jb25zdCByZSA9IGV4cG9ydHMucmUgPSBbXVxuY29uc3Qgc2FmZVJlID0gZXhwb3J0cy5zYWZlUmUgPSBbXVxuY29uc3Qgc3JjID0gZXhwb3J0cy5zcmMgPSBbXVxuY29uc3Qgc2FmZVNyYyA9IGV4cG9ydHMuc2FmZVNyYyA9IFtdXG5jb25zdCB0ID0gZXhwb3J0cy50ID0ge31cbmxldCBSID0gMFxuXG5jb25zdCBMRVRURVJEQVNITlVNQkVSID0gJ1thLXpBLVowLTktXSdcblxuLy8gUmVwbGFjZSBzb21lIGdyZWVkeSByZWdleCB0b2tlbnMgdG8gcHJldmVudCByZWdleCBkb3MgaXNzdWVzLiBUaGVzZSByZWdleCBhcmVcbi8vIHVzZWQgaW50ZXJuYWxseSB2aWEgdGhlIHNhZmVSZSBvYmplY3Qgc2luY2UgYWxsIGlucHV0cyBpbiB0aGlzIGxpYnJhcnkgZ2V0XG4vLyBub3JtYWxpemVkIGZpcnN0IHRvIHRyaW0gYW5kIGNvbGxhcHNlIGFsbCBleHRyYSB3aGl0ZXNwYWNlLiBUaGUgb3JpZ2luYWxcbi8vIHJlZ2V4ZXMgYXJlIGV4cG9ydGVkIGZvciB1c2VybGFuZCBjb25zdW1wdGlvbiBhbmQgbG93ZXIgbGV2ZWwgdXNhZ2UuIEFcbi8vIGZ1dHVyZSBicmVha2luZyBjaGFuZ2UgY291bGQgZXhwb3J0IHRoZSBzYWZlciByZWdleCBvbmx5IHdpdGggYSBub3RlIHRoYXRcbi8vIGFsbCBpbnB1dCBzaG91bGQgaGF2ZSBleHRyYSB3aGl0ZXNwYWNlIHJlbW92ZWQuXG5jb25zdCBzYWZlUmVnZXhSZXBsYWNlbWVudHMgPSBbXG4gIFsnXFxcXHMnLCAxXSxcbiAgWydcXFxcZCcsIE1BWF9MRU5HVEhdLFxuICBbTEVUVEVSREFTSE5VTUJFUiwgTUFYX1NBRkVfQlVJTERfTEVOR1RIXSxcbl1cblxuY29uc3QgbWFrZVNhZmVSZWdleCA9ICh2YWx1ZSkgPT4ge1xuICBmb3IgKGNvbnN0IFt0b2tlbiwgbWF4XSBvZiBzYWZlUmVnZXhSZXBsYWNlbWVudHMpIHtcbiAgICB2YWx1ZSA9IHZhbHVlXG4gICAgICAuc3BsaXQoYCR7dG9rZW59KmApLmpvaW4oYCR7dG9rZW59ezAsJHttYXh9fWApXG4gICAgICAuc3BsaXQoYCR7dG9rZW59K2ApLmpvaW4oYCR7dG9rZW59ezEsJHttYXh9fWApXG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmNvbnN0IGNyZWF0ZVRva2VuID0gKG5hbWUsIHZhbHVlLCBpc0dsb2JhbCkgPT4ge1xuICBjb25zdCBzYWZlID0gbWFrZVNhZmVSZWdleCh2YWx1ZSlcbiAgY29uc3QgaW5kZXggPSBSKytcbiAgZGVidWcobmFtZSwgaW5kZXgsIHZhbHVlKVxuICB0W25hbWVdID0gaW5kZXhcbiAgc3JjW2luZGV4XSA9IHZhbHVlXG4gIHNhZmVTcmNbaW5kZXhdID0gc2FmZVxuICByZVtpbmRleF0gPSBuZXcgUmVnRXhwKHZhbHVlLCBpc0dsb2JhbCA/ICdnJyA6IHVuZGVmaW5lZClcbiAgc2FmZVJlW2luZGV4XSA9IG5ldyBSZWdFeHAoc2FmZSwgaXNHbG9iYWwgPyAnZycgOiB1bmRlZmluZWQpXG59XG5cbi8vIFRoZSBmb2xsb3dpbmcgUmVndWxhciBFeHByZXNzaW9ucyBjYW4gYmUgdXNlZCBmb3IgdG9rZW5pemluZyxcbi8vIHZhbGlkYXRpbmcsIGFuZCBwYXJzaW5nIFNlbVZlciB2ZXJzaW9uIHN0cmluZ3MuXG5cbi8vICMjIE51bWVyaWMgSWRlbnRpZmllclxuLy8gQSBzaW5nbGUgYDBgLCBvciBhIG5vbi16ZXJvIGRpZ2l0IGZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBkaWdpdHMuXG5cbmNyZWF0ZVRva2VuKCdOVU1FUklDSURFTlRJRklFUicsICcwfFsxLTldXFxcXGQqJylcbmNyZWF0ZVRva2VuKCdOVU1FUklDSURFTlRJRklFUkxPT1NFJywgJ1xcXFxkKycpXG5cbi8vICMjIE5vbi1udW1lcmljIElkZW50aWZpZXJcbi8vIFplcm8gb3IgbW9yZSBkaWdpdHMsIGZvbGxvd2VkIGJ5IGEgbGV0dGVyIG9yIGh5cGhlbiwgYW5kIHRoZW4gemVybyBvclxuLy8gbW9yZSBsZXR0ZXJzLCBkaWdpdHMsIG9yIGh5cGhlbnMuXG5cbmNyZWF0ZVRva2VuKCdOT05OVU1FUklDSURFTlRJRklFUicsIGBcXFxcZCpbYS16QS1aLV0ke0xFVFRFUkRBU0hOVU1CRVJ9KmApXG5cbi8vICMjIE1haW4gVmVyc2lvblxuLy8gVGhyZWUgZG90LXNlcGFyYXRlZCBudW1lcmljIGlkZW50aWZpZXJzLlxuXG5jcmVhdGVUb2tlbignTUFJTlZFUlNJT04nLCBgKCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJdfSlcXFxcLmAgK1xuICAgICAgICAgICAgICAgICAgIGAoJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUl19KVxcXFwuYCArXG4gICAgICAgICAgICAgICAgICAgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSXX0pYClcblxuY3JlYXRlVG9rZW4oJ01BSU5WRVJTSU9OTE9PU0UnLCBgKCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJMT09TRV19KVxcXFwuYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJMT09TRV19KVxcXFwuYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJMT09TRV19KWApXG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb24gSWRlbnRpZmllclxuLy8gQSBudW1lcmljIGlkZW50aWZpZXIsIG9yIGEgbm9uLW51bWVyaWMgaWRlbnRpZmllci5cbi8vIE5vbi1udW1lcmljIGlkZW50aWZpZXJzIGluY2x1ZGUgbnVtZXJpYyBpZGVudGlmaWVycyBidXQgY2FuIGJlIGxvbmdlci5cbi8vIFRoZXJlZm9yZSBub24tbnVtZXJpYyBpZGVudGlmaWVycyBtdXN0IGdvIGZpcnN0LlxuXG5jcmVhdGVUb2tlbignUFJFUkVMRUFTRUlERU5USUZJRVInLCBgKD86JHtzcmNbdC5OT05OVU1FUklDSURFTlRJRklFUl1cbn18JHtzcmNbdC5OVU1FUklDSURFTlRJRklFUl19KWApXG5cbmNyZWF0ZVRva2VuKCdQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFJywgYCg/OiR7c3JjW3QuTk9OTlVNRVJJQ0lERU5USUZJRVJdXG59fCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJMT09TRV19KWApXG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb25cbi8vIEh5cGhlbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgZG90LXNlcGFyYXRlZCBwcmUtcmVsZWFzZSB2ZXJzaW9uXG4vLyBpZGVudGlmaWVycy5cblxuY3JlYXRlVG9rZW4oJ1BSRVJFTEVBU0UnLCBgKD86LSgke3NyY1t0LlBSRVJFTEVBU0VJREVOVElGSUVSXVxufSg/OlxcXFwuJHtzcmNbdC5QUkVSRUxFQVNFSURFTlRJRklFUl19KSopKWApXG5cbmNyZWF0ZVRva2VuKCdQUkVSRUxFQVNFTE9PU0UnLCBgKD86LT8oJHtzcmNbdC5QUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXVxufSg/OlxcXFwuJHtzcmNbdC5QUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXX0pKikpYClcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGEgSWRlbnRpZmllclxuLy8gQW55IGNvbWJpbmF0aW9uIG9mIGRpZ2l0cywgbGV0dGVycywgb3IgaHlwaGVucy5cblxuY3JlYXRlVG9rZW4oJ0JVSUxESURFTlRJRklFUicsIGAke0xFVFRFUkRBU0hOVU1CRVJ9K2ApXG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhXG4vLyBQbHVzIHNpZ24sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIHBlcmlvZC1zZXBhcmF0ZWQgYnVpbGQgbWV0YWRhdGFcbi8vIGlkZW50aWZpZXJzLlxuXG5jcmVhdGVUb2tlbignQlVJTEQnLCBgKD86XFxcXCsoJHtzcmNbdC5CVUlMRElERU5USUZJRVJdXG59KD86XFxcXC4ke3NyY1t0LkJVSUxESURFTlRJRklFUl19KSopKWApXG5cbi8vICMjIEZ1bGwgVmVyc2lvbiBTdHJpbmdcbi8vIEEgbWFpbiB2ZXJzaW9uLCBmb2xsb3dlZCBvcHRpb25hbGx5IGJ5IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiBhbmRcbi8vIGJ1aWxkIG1ldGFkYXRhLlxuXG4vLyBOb3RlIHRoYXQgdGhlIG9ubHkgbWFqb3IsIG1pbm9yLCBwYXRjaCwgYW5kIHByZS1yZWxlYXNlIHNlY3Rpb25zIG9mXG4vLyB0aGUgdmVyc2lvbiBzdHJpbmcgYXJlIGNhcHR1cmluZyBncm91cHMuICBUaGUgYnVpbGQgbWV0YWRhdGEgaXMgbm90IGFcbi8vIGNhcHR1cmluZyBncm91cCwgYmVjYXVzZSBpdCBzaG91bGQgbm90IGV2ZXIgYmUgdXNlZCBpbiB2ZXJzaW9uXG4vLyBjb21wYXJpc29uLlxuXG5jcmVhdGVUb2tlbignRlVMTFBMQUlOJywgYHY/JHtzcmNbdC5NQUlOVkVSU0lPTl1cbn0ke3NyY1t0LlBSRVJFTEVBU0VdfT8ke1xuICBzcmNbdC5CVUlMRF19P2ApXG5cbmNyZWF0ZVRva2VuKCdGVUxMJywgYF4ke3NyY1t0LkZVTExQTEFJTl19JGApXG5cbi8vIGxpa2UgZnVsbCwgYnV0IGFsbG93cyB2MS4yLjMgYW5kID0xLjIuMywgd2hpY2ggcGVvcGxlIGRvIHNvbWV0aW1lcy5cbi8vIGFsc28sIDEuMC4wYWxwaGExIChwcmVyZWxlYXNlIHdpdGhvdXQgdGhlIGh5cGhlbikgd2hpY2ggaXMgcHJldHR5XG4vLyBjb21tb24gaW4gdGhlIG5wbSByZWdpc3RyeS5cbmNyZWF0ZVRva2VuKCdMT09TRVBMQUlOJywgYFt2PVxcXFxzXSoke3NyY1t0Lk1BSU5WRVJTSU9OTE9PU0VdXG59JHtzcmNbdC5QUkVSRUxFQVNFTE9PU0VdfT8ke1xuICBzcmNbdC5CVUlMRF19P2ApXG5cbmNyZWF0ZVRva2VuKCdMT09TRScsIGBeJHtzcmNbdC5MT09TRVBMQUlOXX0kYClcblxuY3JlYXRlVG9rZW4oJ0dUTFQnLCAnKCg/Ojx8Pik/PT8pJylcblxuLy8gU29tZXRoaW5nIGxpa2UgXCIyLipcIiBvciBcIjEuMi54XCIuXG4vLyBOb3RlIHRoYXQgXCJ4LnhcIiBpcyBhIHZhbGlkIHhSYW5nZSBpZGVudGlmZXIsIG1lYW5pbmcgXCJhbnkgdmVyc2lvblwiXG4vLyBPbmx5IHRoZSBmaXJzdCBpdGVtIGlzIHN0cmljdGx5IHJlcXVpcmVkLlxuY3JlYXRlVG9rZW4oJ1hSQU5HRUlERU5USUZJRVJMT09TRScsIGAke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfXx4fFh8XFxcXCpgKVxuY3JlYXRlVG9rZW4oJ1hSQU5HRUlERU5USUZJRVInLCBgJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUl19fHh8WHxcXFxcKmApXG5cbmNyZWF0ZVRva2VuKCdYUkFOR0VQTEFJTicsIGBbdj1cXFxcc10qKCR7c3JjW3QuWFJBTkdFSURFTlRJRklFUl19KWAgK1xuICAgICAgICAgICAgICAgICAgIGAoPzpcXFxcLigke3NyY1t0LlhSQU5HRUlERU5USUZJRVJdfSlgICtcbiAgICAgICAgICAgICAgICAgICBgKD86XFxcXC4oJHtzcmNbdC5YUkFOR0VJREVOVElGSUVSXX0pYCArXG4gICAgICAgICAgICAgICAgICAgYCg/OiR7c3JjW3QuUFJFUkVMRUFTRV19KT8ke1xuICAgICAgICAgICAgICAgICAgICAgc3JjW3QuQlVJTERdfT9gICtcbiAgICAgICAgICAgICAgICAgICBgKT8pP2ApXG5cbmNyZWF0ZVRva2VuKCdYUkFOR0VQTEFJTkxPT1NFJywgYFt2PVxcXFxzXSooJHtzcmNbdC5YUkFOR0VJREVOVElGSUVSTE9PU0VdfSlgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAoPzpcXFxcLigke3NyY1t0LlhSQU5HRUlERU5USUZJRVJMT09TRV19KWAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCg/OlxcXFwuKCR7c3JjW3QuWFJBTkdFSURFTlRJRklFUkxPT1NFXX0pYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKD86JHtzcmNbdC5QUkVSRUxFQVNFTE9PU0VdfSk/JHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjW3QuQlVJTERdfT9gICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGApPyk/YClcblxuY3JlYXRlVG9rZW4oJ1hSQU5HRScsIGBeJHtzcmNbdC5HVExUXX1cXFxccyoke3NyY1t0LlhSQU5HRVBMQUlOXX0kYClcbmNyZWF0ZVRva2VuKCdYUkFOR0VMT09TRScsIGBeJHtzcmNbdC5HVExUXX1cXFxccyoke3NyY1t0LlhSQU5HRVBMQUlOTE9PU0VdfSRgKVxuXG4vLyBDb2VyY2lvbi5cbi8vIEV4dHJhY3QgYW55dGhpbmcgdGhhdCBjb3VsZCBjb25jZWl2YWJseSBiZSBhIHBhcnQgb2YgYSB2YWxpZCBzZW12ZXJcbmNyZWF0ZVRva2VuKCdDT0VSQ0VQTEFJTicsIGAkeycoXnxbXlxcXFxkXSknICtcbiAgICAgICAgICAgICAgJyhcXFxcZHsxLCd9JHtNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RIfX0pYCArXG4gICAgICAgICAgICAgIGAoPzpcXFxcLihcXFxcZHsxLCR7TUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSH19KSk/YCArXG4gICAgICAgICAgICAgIGAoPzpcXFxcLihcXFxcZHsxLCR7TUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSH19KSk/YClcbmNyZWF0ZVRva2VuKCdDT0VSQ0UnLCBgJHtzcmNbdC5DT0VSQ0VQTEFJTl19KD86JHxbXlxcXFxkXSlgKVxuY3JlYXRlVG9rZW4oJ0NPRVJDRUZVTEwnLCBzcmNbdC5DT0VSQ0VQTEFJTl0gK1xuICAgICAgICAgICAgICBgKD86JHtzcmNbdC5QUkVSRUxFQVNFXX0pP2AgK1xuICAgICAgICAgICAgICBgKD86JHtzcmNbdC5CVUlMRF19KT9gICtcbiAgICAgICAgICAgICAgYCg/OiR8W15cXFxcZF0pYClcbmNyZWF0ZVRva2VuKCdDT0VSQ0VSVEwnLCBzcmNbdC5DT0VSQ0VdLCB0cnVlKVxuY3JlYXRlVG9rZW4oJ0NPRVJDRVJUTEZVTEwnLCBzcmNbdC5DT0VSQ0VGVUxMXSwgdHJ1ZSlcblxuLy8gVGlsZGUgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcInJlYXNvbmFibHkgYXQgb3IgZ3JlYXRlciB0aGFuXCJcbmNyZWF0ZVRva2VuKCdMT05FVElMREUnLCAnKD86fj4/KScpXG5cbmNyZWF0ZVRva2VuKCdUSUxERVRSSU0nLCBgKFxcXFxzKikke3NyY1t0LkxPTkVUSUxERV19XFxcXHMrYCwgdHJ1ZSlcbmV4cG9ydHMudGlsZGVUcmltUmVwbGFjZSA9ICckMX4nXG5cbmNyZWF0ZVRva2VuKCdUSUxERScsIGBeJHtzcmNbdC5MT05FVElMREVdfSR7c3JjW3QuWFJBTkdFUExBSU5dfSRgKVxuY3JlYXRlVG9rZW4oJ1RJTERFTE9PU0UnLCBgXiR7c3JjW3QuTE9ORVRJTERFXX0ke3NyY1t0LlhSQU5HRVBMQUlOTE9PU0VdfSRgKVxuXG4vLyBDYXJldCByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwiYXQgbGVhc3QgYW5kIGJhY2t3YXJkcyBjb21wYXRpYmxlIHdpdGhcIlxuY3JlYXRlVG9rZW4oJ0xPTkVDQVJFVCcsICcoPzpcXFxcXiknKVxuXG5jcmVhdGVUb2tlbignQ0FSRVRUUklNJywgYChcXFxccyopJHtzcmNbdC5MT05FQ0FSRVRdfVxcXFxzK2AsIHRydWUpXG5leHBvcnRzLmNhcmV0VHJpbVJlcGxhY2UgPSAnJDFeJ1xuXG5jcmVhdGVUb2tlbignQ0FSRVQnLCBgXiR7c3JjW3QuTE9ORUNBUkVUXX0ke3NyY1t0LlhSQU5HRVBMQUlOXX0kYClcbmNyZWF0ZVRva2VuKCdDQVJFVExPT1NFJywgYF4ke3NyY1t0LkxPTkVDQVJFVF19JHtzcmNbdC5YUkFOR0VQTEFJTkxPT1NFXX0kYClcblxuLy8gQSBzaW1wbGUgZ3QvbHQvZXEgdGhpbmcsIG9yIGp1c3QgXCJcIiB0byBpbmRpY2F0ZSBcImFueSB2ZXJzaW9uXCJcbmNyZWF0ZVRva2VuKCdDT01QQVJBVE9STE9PU0UnLCBgXiR7c3JjW3QuR1RMVF19XFxcXHMqKCR7c3JjW3QuTE9PU0VQTEFJTl19KSR8XiRgKVxuY3JlYXRlVG9rZW4oJ0NPTVBBUkFUT1InLCBgXiR7c3JjW3QuR1RMVF19XFxcXHMqKCR7c3JjW3QuRlVMTFBMQUlOXX0pJHxeJGApXG5cbi8vIEFuIGV4cHJlc3Npb24gdG8gc3RyaXAgYW55IHdoaXRlc3BhY2UgYmV0d2VlbiB0aGUgZ3RsdCBhbmQgdGhlIHRoaW5nXG4vLyBpdCBtb2RpZmllcywgc28gdGhhdCBgPiAxLjIuM2AgPT0+IGA+MS4yLjNgXG5jcmVhdGVUb2tlbignQ09NUEFSQVRPUlRSSU0nLCBgKFxcXFxzKikke3NyY1t0LkdUTFRdXG59XFxcXHMqKCR7c3JjW3QuTE9PU0VQTEFJTl19fCR7c3JjW3QuWFJBTkdFUExBSU5dfSlgLCB0cnVlKVxuZXhwb3J0cy5jb21wYXJhdG9yVHJpbVJlcGxhY2UgPSAnJDEkMiQzJ1xuXG4vLyBTb21ldGhpbmcgbGlrZSBgMS4yLjMgLSAxLjIuNGBcbi8vIE5vdGUgdGhhdCB0aGVzZSBhbGwgdXNlIHRoZSBsb29zZSBmb3JtLCBiZWNhdXNlIHRoZXknbGwgYmVcbi8vIGNoZWNrZWQgYWdhaW5zdCBlaXRoZXIgdGhlIHN0cmljdCBvciBsb29zZSBjb21wYXJhdG9yIGZvcm1cbi8vIGxhdGVyLlxuY3JlYXRlVG9rZW4oJ0hZUEhFTlJBTkdFJywgYF5cXFxccyooJHtzcmNbdC5YUkFOR0VQTEFJTl19KWAgK1xuICAgICAgICAgICAgICAgICAgIGBcXFxccystXFxcXHMrYCArXG4gICAgICAgICAgICAgICAgICAgYCgke3NyY1t0LlhSQU5HRVBMQUlOXX0pYCArXG4gICAgICAgICAgICAgICAgICAgYFxcXFxzKiRgKVxuXG5jcmVhdGVUb2tlbignSFlQSEVOUkFOR0VMT09TRScsIGBeXFxcXHMqKCR7c3JjW3QuWFJBTkdFUExBSU5MT09TRV19KWAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYFxcXFxzKy1cXFxccytgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAoJHtzcmNbdC5YUkFOR0VQTEFJTkxPT1NFXX0pYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgXFxcXHMqJGApXG5cbi8vIFN0YXIgcmFuZ2VzIGJhc2ljYWxseSBqdXN0IGFsbG93IGFueXRoaW5nIGF0IGFsbC5cbmNyZWF0ZVRva2VuKCdTVEFSJywgJyg8fD4pPz0/XFxcXHMqXFxcXConKVxuLy8gPj0wLjAuMCBpcyBsaWtlIGEgc3RhclxuY3JlYXRlVG9rZW4oJ0dURTAnLCAnXlxcXFxzKj49XFxcXHMqMFxcXFwuMFxcXFwuMFxcXFxzKiQnKVxuY3JlYXRlVG9rZW4oJ0dURTBQUkUnLCAnXlxcXFxzKj49XFxcXHMqMFxcXFwuMFxcXFwuMC0wXFxcXHMqJCcpXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbi8vIHBhcnNlIG91dCBqdXN0IHRoZSBvcHRpb25zIHdlIGNhcmUgYWJvdXRcbmNvbnN0IGxvb3NlT3B0aW9uID0gT2JqZWN0LmZyZWV6ZSh7IGxvb3NlOiB0cnVlIH0pXG5jb25zdCBlbXB0eU9wdHMgPSBPYmplY3QuZnJlZXplKHsgfSlcbmNvbnN0IHBhcnNlT3B0aW9ucyA9IG9wdGlvbnMgPT4ge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gZW1wdHlPcHRzXG4gIH1cblxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGxvb3NlT3B0aW9uXG4gIH1cblxuICByZXR1cm4gb3B0aW9uc1xufVxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZU9wdGlvbnNcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgbnVtZXJpYyA9IC9eWzAtOV0rJC9cbmNvbnN0IGNvbXBhcmVJZGVudGlmaWVycyA9IChhLCBiKSA9PiB7XG4gIGlmICh0eXBlb2YgYSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGIgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGEgPT09IGIgPyAwIDogYSA8IGIgPyAtMSA6IDFcbiAgfVxuXG4gIGNvbnN0IGFudW0gPSBudW1lcmljLnRlc3QoYSlcbiAgY29uc3QgYm51bSA9IG51bWVyaWMudGVzdChiKVxuXG4gIGlmIChhbnVtICYmIGJudW0pIHtcbiAgICBhID0gK2FcbiAgICBiID0gK2JcbiAgfVxuXG4gIHJldHVybiBhID09PSBiID8gMFxuICAgIDogKGFudW0gJiYgIWJudW0pID8gLTFcbiAgICA6IChibnVtICYmICFhbnVtKSA/IDFcbiAgICA6IGEgPCBiID8gLTFcbiAgICA6IDFcbn1cblxuY29uc3QgcmNvbXBhcmVJZGVudGlmaWVycyA9IChhLCBiKSA9PiBjb21wYXJlSWRlbnRpZmllcnMoYiwgYSlcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXBhcmVJZGVudGlmaWVycyxcbiAgcmNvbXBhcmVJZGVudGlmaWVycyxcbn1cbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgZGVidWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9kZWJ1ZycpXG5jb25zdCB7IE1BWF9MRU5HVEgsIE1BWF9TQUZFX0lOVEVHRVIgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NvbnN0YW50cycpXG5jb25zdCB7IHNhZmVSZTogcmUsIHQgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3JlJylcblxuY29uc3QgcGFyc2VPcHRpb25zID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcGFyc2Utb3B0aW9ucycpXG5jb25zdCB7IGNvbXBhcmVJZGVudGlmaWVycyB9ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaWRlbnRpZmllcnMnKVxuY2xhc3MgU2VtVmVyIHtcbiAgY29uc3RydWN0b3IgKHZlcnNpb24sIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpXG5cbiAgICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgICAgaWYgKHZlcnNpb24ubG9vc2UgPT09ICEhb3B0aW9ucy5sb29zZSAmJlxuICAgICAgICB2ZXJzaW9uLmluY2x1ZGVQcmVyZWxlYXNlID09PSAhIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UpIHtcbiAgICAgICAgcmV0dXJuIHZlcnNpb25cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcnNpb24gPSB2ZXJzaW9uLnZlcnNpb25cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCB2ZXJzaW9uLiBNdXN0IGJlIGEgc3RyaW5nLiBHb3QgdHlwZSBcIiR7dHlwZW9mIHZlcnNpb259XCIuYClcbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBgdmVyc2lvbiBpcyBsb25nZXIgdGhhbiAke01BWF9MRU5HVEh9IGNoYXJhY3RlcnNgXG4gICAgICApXG4gICAgfVxuXG4gICAgZGVidWcoJ1NlbVZlcicsIHZlcnNpb24sIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMubG9vc2UgPSAhIW9wdGlvbnMubG9vc2VcbiAgICAvLyB0aGlzIGlzbid0IGFjdHVhbGx5IHJlbGV2YW50IGZvciB2ZXJzaW9ucywgYnV0IGtlZXAgaXQgc28gdGhhdCB3ZVxuICAgIC8vIGRvbid0IHJ1biBpbnRvIHRyb3VibGUgcGFzc2luZyB0aGlzLm9wdGlvbnMgYXJvdW5kLlxuICAgIHRoaXMuaW5jbHVkZVByZXJlbGVhc2UgPSAhIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2VcblxuICAgIGNvbnN0IG0gPSB2ZXJzaW9uLnRyaW0oKS5tYXRjaChvcHRpb25zLmxvb3NlID8gcmVbdC5MT09TRV0gOiByZVt0LkZVTExdKVxuXG4gICAgaWYgKCFtKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIFZlcnNpb246ICR7dmVyc2lvbn1gKVxuICAgIH1cblxuICAgIHRoaXMucmF3ID0gdmVyc2lvblxuXG4gICAgLy8gdGhlc2UgYXJlIGFjdHVhbGx5IG51bWJlcnNcbiAgICB0aGlzLm1ham9yID0gK21bMV1cbiAgICB0aGlzLm1pbm9yID0gK21bMl1cbiAgICB0aGlzLnBhdGNoID0gK21bM11cblxuICAgIGlmICh0aGlzLm1ham9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1ham9yIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtYWpvciB2ZXJzaW9uJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5taW5vciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5taW5vciA8IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWlub3IgdmVyc2lvbicpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGF0Y2ggPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMucGF0Y2ggPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHBhdGNoIHZlcnNpb24nKVxuICAgIH1cblxuICAgIC8vIG51bWJlcmlmeSBhbnkgcHJlcmVsZWFzZSBudW1lcmljIGlkc1xuICAgIGlmICghbVs0XSkge1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gbVs0XS5zcGxpdCgnLicpLm1hcCgoaWQpID0+IHtcbiAgICAgICAgaWYgKC9eWzAtOV0rJC8udGVzdChpZCkpIHtcbiAgICAgICAgICBjb25zdCBudW0gPSAraWRcbiAgICAgICAgICBpZiAobnVtID49IDAgJiYgbnVtIDwgTUFYX1NBRkVfSU5URUdFUikge1xuICAgICAgICAgICAgcmV0dXJuIG51bVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5idWlsZCA9IG1bNV0gPyBtWzVdLnNwbGl0KCcuJykgOiBbXVxuICAgIHRoaXMuZm9ybWF0KClcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgdGhpcy52ZXJzaW9uID0gYCR7dGhpcy5tYWpvcn0uJHt0aGlzLm1pbm9yfS4ke3RoaXMucGF0Y2h9YFxuICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICB0aGlzLnZlcnNpb24gKz0gYC0ke3RoaXMucHJlcmVsZWFzZS5qb2luKCcuJyl9YFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uXG4gIH1cblxuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyc2lvblxuICB9XG5cbiAgY29tcGFyZSAob3RoZXIpIHtcbiAgICBkZWJ1ZygnU2VtVmVyLmNvbXBhcmUnLCB0aGlzLnZlcnNpb24sIHRoaXMub3B0aW9ucywgb3RoZXIpXG4gICAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKSB7XG4gICAgICBpZiAodHlwZW9mIG90aGVyID09PSAnc3RyaW5nJyAmJiBvdGhlciA9PT0gdGhpcy52ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gICAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMub3B0aW9ucylcbiAgICB9XG5cbiAgICBpZiAob3RoZXIudmVyc2lvbiA9PT0gdGhpcy52ZXJzaW9uKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvbXBhcmVNYWluKG90aGVyKSB8fCB0aGlzLmNvbXBhcmVQcmUob3RoZXIpXG4gIH1cblxuICBjb21wYXJlTWFpbiAob3RoZXIpIHtcbiAgICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpIHtcbiAgICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5vcHRpb25zKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm1ham9yIDwgb3RoZXIubWFqb3IpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBpZiAodGhpcy5tYWpvciA+IG90aGVyLm1ham9yKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH1cbiAgICBpZiAodGhpcy5taW5vciA8IG90aGVyLm1pbm9yKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgaWYgKHRoaXMubWlub3IgPiBvdGhlci5taW5vcikge1xuICAgICAgcmV0dXJuIDFcbiAgICB9XG4gICAgaWYgKHRoaXMucGF0Y2ggPCBvdGhlci5wYXRjaCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIGlmICh0aGlzLnBhdGNoID4gb3RoZXIucGF0Y2gpIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuICAgIHJldHVybiAwXG4gIH1cblxuICBjb21wYXJlUHJlIChvdGhlcikge1xuICAgIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSkge1xuICAgICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLm9wdGlvbnMpXG4gICAgfVxuXG4gICAgLy8gTk9UIGhhdmluZyBhIHByZXJlbGVhc2UgaXMgPiBoYXZpbmcgb25lXG4gICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmIG90aGVyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIGxldCBpID0gMFxuICAgIGRvIHtcbiAgICAgIGNvbnN0IGEgPSB0aGlzLnByZXJlbGVhc2VbaV1cbiAgICAgIGNvbnN0IGIgPSBvdGhlci5wcmVyZWxlYXNlW2ldXG4gICAgICBkZWJ1ZygncHJlcmVsZWFzZSBjb21wYXJlJywgaSwgYSwgYilcbiAgICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9IGVsc2UgaWYgKGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMVxuICAgICAgfSBlbHNlIGlmIChhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9IGVsc2UgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYilcbiAgICAgIH1cbiAgICB9IHdoaWxlICgrK2kpXG4gIH1cblxuICBjb21wYXJlQnVpbGQgKG90aGVyKSB7XG4gICAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKSB7XG4gICAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMub3B0aW9ucylcbiAgICB9XG5cbiAgICBsZXQgaSA9IDBcbiAgICBkbyB7XG4gICAgICBjb25zdCBhID0gdGhpcy5idWlsZFtpXVxuICAgICAgY29uc3QgYiA9IG90aGVyLmJ1aWxkW2ldXG4gICAgICBkZWJ1ZygnYnVpbGQgY29tcGFyZScsIGksIGEsIGIpXG4gICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfSBlbHNlIGlmIChiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICAgIH0gZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfSBlbHNlIGlmIChhID09PSBiKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpXG4gICAgICB9XG4gICAgfSB3aGlsZSAoKytpKVxuICB9XG5cbiAgLy8gcHJlbWlub3Igd2lsbCBidW1wIHRoZSB2ZXJzaW9uIHVwIHRvIHRoZSBuZXh0IG1pbm9yIHJlbGVhc2UsIGFuZCBpbW1lZGlhdGVseVxuICAvLyBkb3duIHRvIHByZS1yZWxlYXNlLiBwcmVtYWpvciBhbmQgcHJlcGF0Y2ggd29yayB0aGUgc2FtZSB3YXkuXG4gIGluYyAocmVsZWFzZSwgaWRlbnRpZmllciwgaWRlbnRpZmllckJhc2UpIHtcbiAgICBpZiAocmVsZWFzZS5zdGFydHNXaXRoKCdwcmUnKSkge1xuICAgICAgaWYgKCFpZGVudGlmaWVyICYmIGlkZW50aWZpZXJCYXNlID09PSBmYWxzZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW5jcmVtZW50IGFyZ3VtZW50OiBpZGVudGlmaWVyIGlzIGVtcHR5JylcbiAgICAgIH1cbiAgICAgIC8vIEF2b2lkIGFuIGludmFsaWQgc2VtdmVyIHJlc3VsdHNcbiAgICAgIGlmIChpZGVudGlmaWVyKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gYC0ke2lkZW50aWZpZXJ9YC5tYXRjaCh0aGlzLm9wdGlvbnMubG9vc2UgPyByZVt0LlBSRVJFTEVBU0VMT09TRV0gOiByZVt0LlBSRVJFTEVBU0VdKVxuICAgICAgICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdICE9PSBpZGVudGlmaWVyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIGlkZW50aWZpZXI6ICR7aWRlbnRpZmllcn1gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoIChyZWxlYXNlKSB7XG4gICAgICBjYXNlICdwcmVtYWpvcic6XG4gICAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwXG4gICAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICAgIHRoaXMubWlub3IgPSAwXG4gICAgICAgIHRoaXMubWFqb3IrK1xuICAgICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllciwgaWRlbnRpZmllckJhc2UpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwcmVtaW5vcic6XG4gICAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwXG4gICAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICAgIHRoaXMubWlub3IrK1xuICAgICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllciwgaWRlbnRpZmllckJhc2UpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwcmVwYXRjaCc6XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYWxyZWFkeSBhIHByZXJlbGVhc2UsIGl0IHdpbGwgYnVtcCB0byB0aGUgbmV4dCB2ZXJzaW9uXG4gICAgICAgIC8vIGRyb3AgYW55IHByZXJlbGVhc2VzIHRoYXQgbWlnaHQgYWxyZWFkeSBleGlzdCwgc2luY2UgdGhleSBhcmUgbm90XG4gICAgICAgIC8vIHJlbGV2YW50IGF0IHRoaXMgcG9pbnQuXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwXG4gICAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIsIGlkZW50aWZpZXJCYXNlKVxuICAgICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllciwgaWRlbnRpZmllckJhc2UpXG4gICAgICAgIGJyZWFrXG4gICAgICAvLyBJZiB0aGUgaW5wdXQgaXMgYSBub24tcHJlcmVsZWFzZSB2ZXJzaW9uLCB0aGlzIGFjdHMgdGhlIHNhbWUgYXNcbiAgICAgIC8vIHByZXBhdGNoLlxuICAgICAgY2FzZSAncHJlcmVsZWFzZSc6XG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllciwgaWRlbnRpZmllckJhc2UpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIsIGlkZW50aWZpZXJCYXNlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncmVsZWFzZSc6XG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB2ZXJzaW9uICR7dGhpcy5yYXd9IGlzIG5vdCBhIHByZXJlbGVhc2VgKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ21ham9yJzpcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1tYWpvciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1ham9yIHZlcnNpb24uXG4gICAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWFqb3IuXG4gICAgICAgIC8vIDEuMC4wLTUgYnVtcHMgdG8gMS4wLjBcbiAgICAgICAgLy8gMS4xLjAgYnVtcHMgdG8gMi4wLjBcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMubWlub3IgIT09IDAgfHxcbiAgICAgICAgICB0aGlzLnBhdGNoICE9PSAwIHx8XG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLm1ham9yKytcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1pbm9yID0gMFxuICAgICAgICB0aGlzLnBhdGNoID0gMFxuICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbWlub3InOlxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1pbm9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWlub3IgdmVyc2lvbi5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtaW5vci5cbiAgICAgICAgLy8gMS4yLjAtNSBidW1wcyB0byAxLjIuMFxuICAgICAgICAvLyAxLjIuMSBidW1wcyB0byAxLjMuMFxuICAgICAgICBpZiAodGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5taW5vcisrXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXRjaCA9IDBcbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3BhdGNoJzpcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBub3QgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uLCBpdCB3aWxsIGluY3JlbWVudCB0aGUgcGF0Y2guXG4gICAgICAgIC8vIElmIGl0IGlzIGEgcHJlLXJlbGVhc2UgaXQgd2lsbCBidW1wIHVwIHRvIHRoZSBzYW1lIHBhdGNoIHZlcnNpb24uXG4gICAgICAgIC8vIDEuMi4wLTUgcGF0Y2hlcyB0byAxLjIuMFxuICAgICAgICAvLyAxLjIuMCBwYXRjaGVzIHRvIDEuMi4xXG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5wYXRjaCsrXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgICAgICAgYnJlYWtcbiAgICAgIC8vIFRoaXMgcHJvYmFibHkgc2hvdWxkbid0IGJlIHVzZWQgcHVibGljbHkuXG4gICAgICAvLyAxLjAuMCAncHJlJyB3b3VsZCBiZWNvbWUgMS4wLjAtMCB3aGljaCBpcyB0aGUgd3JvbmcgZGlyZWN0aW9uLlxuICAgICAgY2FzZSAncHJlJzoge1xuICAgICAgICBjb25zdCBiYXNlID0gTnVtYmVyKGlkZW50aWZpZXJCYXNlKSA/IDEgOiAwXG5cbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbYmFzZV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgaSA9IHRoaXMucHJlcmVsZWFzZS5sZW5ndGhcbiAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVyZWxlYXNlW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICB0aGlzLnByZXJlbGVhc2VbaV0rK1xuICAgICAgICAgICAgICBpID0gLTJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBkaWRuJ3QgaW5jcmVtZW50IGFueXRoaW5nXG4gICAgICAgICAgICBpZiAoaWRlbnRpZmllciA9PT0gdGhpcy5wcmVyZWxlYXNlLmpvaW4oJy4nKSAmJiBpZGVudGlmaWVyQmFzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGluY3JlbWVudCBhcmd1bWVudDogaWRlbnRpZmllciBhbHJlYWR5IGV4aXN0cycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UucHVzaChiYXNlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaWRlbnRpZmllcikge1xuICAgICAgICAgIC8vIDEuMi4wLWJldGEuMSBidW1wcyB0byAxLjIuMC1iZXRhLjIsXG4gICAgICAgICAgLy8gMS4yLjAtYmV0YS5mb29ibHogb3IgMS4yLjAtYmV0YSBidW1wcyB0byAxLjIuMC1iZXRhLjBcbiAgICAgICAgICBsZXQgcHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCBiYXNlXVxuICAgICAgICAgIGlmIChpZGVudGlmaWVyQmFzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByZXJlbGVhc2UgPSBbaWRlbnRpZmllcl1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLnByZXJlbGVhc2VbMF0sIGlkZW50aWZpZXIpID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoaXNOYU4odGhpcy5wcmVyZWxlYXNlWzFdKSkge1xuICAgICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBwcmVyZWxlYXNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IHByZXJlbGVhc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCBpbmNyZW1lbnQgYXJndW1lbnQ6ICR7cmVsZWFzZX1gKVxuICAgIH1cbiAgICB0aGlzLnJhdyA9IHRoaXMuZm9ybWF0KClcbiAgICBpZiAodGhpcy5idWlsZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmF3ICs9IGArJHt0aGlzLmJ1aWxkLmpvaW4oJy4nKX1gXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZW1WZXJcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgcGFyc2UgPSAodmVyc2lvbiwgb3B0aW9ucywgdGhyb3dFcnJvcnMgPSBmYWxzZSkgPT4ge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgIHJldHVybiB2ZXJzaW9uXG4gIH1cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBvcHRpb25zKVxuICB9IGNhdGNoIChlcikge1xuICAgIGlmICghdGhyb3dFcnJvcnMpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHRocm93IGVyXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKVxuY29uc3QgdmFsaWQgPSAodmVyc2lvbiwgb3B0aW9ucykgPT4ge1xuICBjb25zdCB2ID0gcGFyc2UodmVyc2lvbiwgb3B0aW9ucylcbiAgcmV0dXJuIHYgPyB2LnZlcnNpb24gOiBudWxsXG59XG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5jb25zdCBjbGVhbiA9ICh2ZXJzaW9uLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHMgPSBwYXJzZSh2ZXJzaW9uLnRyaW0oKS5yZXBsYWNlKC9eWz12XSsvLCAnJyksIG9wdGlvbnMpXG4gIHJldHVybiBzID8gcy52ZXJzaW9uIDogbnVsbFxufVxubW9kdWxlLmV4cG9ydHMgPSBjbGVhblxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5cbmNvbnN0IGluYyA9ICh2ZXJzaW9uLCByZWxlYXNlLCBvcHRpb25zLCBpZGVudGlmaWVyLCBpZGVudGlmaWVyQmFzZSkgPT4ge1xuICBpZiAodHlwZW9mIChvcHRpb25zKSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZGVudGlmaWVyQmFzZSA9IGlkZW50aWZpZXJcbiAgICBpZGVudGlmaWVyID0gb3B0aW9uc1xuICAgIG9wdGlvbnMgPSB1bmRlZmluZWRcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIoXG4gICAgICB2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyID8gdmVyc2lvbi52ZXJzaW9uIDogdmVyc2lvbixcbiAgICAgIG9wdGlvbnNcbiAgICApLmluYyhyZWxlYXNlLCBpZGVudGlmaWVyLCBpZGVudGlmaWVyQmFzZSkudmVyc2lvblxuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gaW5jXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZS5qcycpXG5cbmNvbnN0IGRpZmYgPSAodmVyc2lvbjEsIHZlcnNpb24yKSA9PiB7XG4gIGNvbnN0IHYxID0gcGFyc2UodmVyc2lvbjEsIG51bGwsIHRydWUpXG4gIGNvbnN0IHYyID0gcGFyc2UodmVyc2lvbjIsIG51bGwsIHRydWUpXG4gIGNvbnN0IGNvbXBhcmlzb24gPSB2MS5jb21wYXJlKHYyKVxuXG4gIGlmIChjb21wYXJpc29uID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHYxSGlnaGVyID0gY29tcGFyaXNvbiA+IDBcbiAgY29uc3QgaGlnaFZlcnNpb24gPSB2MUhpZ2hlciA/IHYxIDogdjJcbiAgY29uc3QgbG93VmVyc2lvbiA9IHYxSGlnaGVyID8gdjIgOiB2MVxuICBjb25zdCBoaWdoSGFzUHJlID0gISFoaWdoVmVyc2lvbi5wcmVyZWxlYXNlLmxlbmd0aFxuICBjb25zdCBsb3dIYXNQcmUgPSAhIWxvd1ZlcnNpb24ucHJlcmVsZWFzZS5sZW5ndGhcblxuICBpZiAobG93SGFzUHJlICYmICFoaWdoSGFzUHJlKSB7XG4gICAgLy8gR29pbmcgZnJvbSBwcmVyZWxlYXNlIC0+IG5vIHByZXJlbGVhc2UgcmVxdWlyZXMgc29tZSBzcGVjaWFsIGNhc2luZ1xuXG4gICAgLy8gSWYgdGhlIGxvdyB2ZXJzaW9uIGhhcyBvbmx5IGEgbWFqb3IsIHRoZW4gaXQgd2lsbCBhbHdheXMgYmUgYSBtYWpvclxuICAgIC8vIFNvbWUgZXhhbXBsZXM6XG4gICAgLy8gMS4wLjAtMSAtPiAxLjAuMFxuICAgIC8vIDEuMC4wLTEgLT4gMS4xLjFcbiAgICAvLyAxLjAuMC0xIC0+IDIuMC4wXG4gICAgaWYgKCFsb3dWZXJzaW9uLnBhdGNoICYmICFsb3dWZXJzaW9uLm1pbm9yKSB7XG4gICAgICByZXR1cm4gJ21ham9yJ1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBtYWluIHBhcnQgaGFzIG5vIGRpZmZlcmVuY2VcbiAgICBpZiAobG93VmVyc2lvbi5jb21wYXJlTWFpbihoaWdoVmVyc2lvbikgPT09IDApIHtcbiAgICAgIGlmIChsb3dWZXJzaW9uLm1pbm9yICYmICFsb3dWZXJzaW9uLnBhdGNoKSB7XG4gICAgICAgIHJldHVybiAnbWlub3InXG4gICAgICB9XG4gICAgICByZXR1cm4gJ3BhdGNoJ1xuICAgIH1cbiAgfVxuXG4gIC8vIGFkZCB0aGUgYHByZWAgcHJlZml4IGlmIHdlIGFyZSBnb2luZyB0byBhIHByZXJlbGVhc2UgdmVyc2lvblxuICBjb25zdCBwcmVmaXggPSBoaWdoSGFzUHJlID8gJ3ByZScgOiAnJ1xuXG4gIGlmICh2MS5tYWpvciAhPT0gdjIubWFqb3IpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJ21ham9yJ1xuICB9XG5cbiAgaWYgKHYxLm1pbm9yICE9PSB2Mi5taW5vcikge1xuICAgIHJldHVybiBwcmVmaXggKyAnbWlub3InXG4gIH1cblxuICBpZiAodjEucGF0Y2ggIT09IHYyLnBhdGNoKSB7XG4gICAgcmV0dXJuIHByZWZpeCArICdwYXRjaCdcbiAgfVxuXG4gIC8vIGhpZ2ggYW5kIGxvdyBhcmUgcHJlcmVsZWFzZXNcbiAgcmV0dXJuICdwcmVyZWxlYXNlJ1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpZmZcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgbWFqb3IgPSAoYSwgbG9vc2UpID0+IG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1ham9yXG5tb2R1bGUuZXhwb3J0cyA9IG1ham9yXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IG1pbm9yID0gKGEsIGxvb3NlKSA9PiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5taW5vclxubW9kdWxlLmV4cG9ydHMgPSBtaW5vclxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBwYXRjaCA9IChhLCBsb29zZSkgPT4gbmV3IFNlbVZlcihhLCBsb29zZSkucGF0Y2hcbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcbmNvbnN0IHByZXJlbGVhc2UgPSAodmVyc2lvbiwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBwYXJzZWQgPSBwYXJzZSh2ZXJzaW9uLCBvcHRpb25zKVxuICByZXR1cm4gKHBhcnNlZCAmJiBwYXJzZWQucHJlcmVsZWFzZS5sZW5ndGgpID8gcGFyc2VkLnByZXJlbGVhc2UgOiBudWxsXG59XG5tb2R1bGUuZXhwb3J0cyA9IHByZXJlbGVhc2VcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgY29tcGFyZSA9IChhLCBiLCBsb29zZSkgPT5cbiAgbmV3IFNlbVZlcihhLCBsb29zZSkuY29tcGFyZShuZXcgU2VtVmVyKGIsIGxvb3NlKSlcblxubW9kdWxlLmV4cG9ydHMgPSBjb21wYXJlXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgcmNvbXBhcmUgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYiwgYSwgbG9vc2UpXG5tb2R1bGUuZXhwb3J0cyA9IHJjb21wYXJlXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgY29tcGFyZUxvb3NlID0gKGEsIGIpID0+IGNvbXBhcmUoYSwgYiwgdHJ1ZSlcbm1vZHVsZS5leHBvcnRzID0gY29tcGFyZUxvb3NlXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IGNvbXBhcmVCdWlsZCA9IChhLCBiLCBsb29zZSkgPT4ge1xuICBjb25zdCB2ZXJzaW9uQSA9IG5ldyBTZW1WZXIoYSwgbG9vc2UpXG4gIGNvbnN0IHZlcnNpb25CID0gbmV3IFNlbVZlcihiLCBsb29zZSlcbiAgcmV0dXJuIHZlcnNpb25BLmNvbXBhcmUodmVyc2lvbkIpIHx8IHZlcnNpb25BLmNvbXBhcmVCdWlsZCh2ZXJzaW9uQilcbn1cbm1vZHVsZS5leHBvcnRzID0gY29tcGFyZUJ1aWxkXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNvbXBhcmVCdWlsZCA9IHJlcXVpcmUoJy4vY29tcGFyZS1idWlsZCcpXG5jb25zdCBzb3J0ID0gKGxpc3QsIGxvb3NlKSA9PiBsaXN0LnNvcnQoKGEsIGIpID0+IGNvbXBhcmVCdWlsZChhLCBiLCBsb29zZSkpXG5tb2R1bGUuZXhwb3J0cyA9IHNvcnRcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgY29tcGFyZUJ1aWxkID0gcmVxdWlyZSgnLi9jb21wYXJlLWJ1aWxkJylcbmNvbnN0IHJzb3J0ID0gKGxpc3QsIGxvb3NlKSA9PiBsaXN0LnNvcnQoKGEsIGIpID0+IGNvbXBhcmVCdWlsZChiLCBhLCBsb29zZSkpXG5tb2R1bGUuZXhwb3J0cyA9IHJzb3J0XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgZ3QgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYSwgYiwgbG9vc2UpID4gMFxubW9kdWxlLmV4cG9ydHMgPSBndFxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IGx0ID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8IDBcbm1vZHVsZS5leHBvcnRzID0gbHRcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBlcSA9IChhLCBiLCBsb29zZSkgPT4gY29tcGFyZShhLCBiLCBsb29zZSkgPT09IDBcbm1vZHVsZS5leHBvcnRzID0gZXFcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBuZXEgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYSwgYiwgbG9vc2UpICE9PSAwXG5tb2R1bGUuZXhwb3J0cyA9IG5lcVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IGd0ZSA9IChhLCBiLCBsb29zZSkgPT4gY29tcGFyZShhLCBiLCBsb29zZSkgPj0gMFxubW9kdWxlLmV4cG9ydHMgPSBndGVcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBsdGUgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYSwgYiwgbG9vc2UpIDw9IDBcbm1vZHVsZS5leHBvcnRzID0gbHRlXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGVxID0gcmVxdWlyZSgnLi9lcScpXG5jb25zdCBuZXEgPSByZXF1aXJlKCcuL25lcScpXG5jb25zdCBndCA9IHJlcXVpcmUoJy4vZ3QnKVxuY29uc3QgZ3RlID0gcmVxdWlyZSgnLi9ndGUnKVxuY29uc3QgbHQgPSByZXF1aXJlKCcuL2x0JylcbmNvbnN0IGx0ZSA9IHJlcXVpcmUoJy4vbHRlJylcblxuY29uc3QgY21wID0gKGEsIG9wLCBiLCBsb29zZSkgPT4ge1xuICBzd2l0Y2ggKG9wKSB7XG4gICAgY2FzZSAnPT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYSA9IGEudmVyc2lvblxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgICAgICBiID0gYi52ZXJzaW9uXG4gICAgICB9XG4gICAgICByZXR1cm4gYSA9PT0gYlxuXG4gICAgY2FzZSAnIT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYSA9IGEudmVyc2lvblxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgICAgICBiID0gYi52ZXJzaW9uXG4gICAgICB9XG4gICAgICByZXR1cm4gYSAhPT0gYlxuXG4gICAgY2FzZSAnJzpcbiAgICBjYXNlICc9JzpcbiAgICBjYXNlICc9PSc6XG4gICAgICByZXR1cm4gZXEoYSwgYiwgbG9vc2UpXG5cbiAgICBjYXNlICchPSc6XG4gICAgICByZXR1cm4gbmVxKGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnPic6XG4gICAgICByZXR1cm4gZ3QoYSwgYiwgbG9vc2UpXG5cbiAgICBjYXNlICc+PSc6XG4gICAgICByZXR1cm4gZ3RlKGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnPCc6XG4gICAgICByZXR1cm4gbHQoYSwgYiwgbG9vc2UpXG5cbiAgICBjYXNlICc8PSc6XG4gICAgICByZXR1cm4gbHRlKGEsIGIsIGxvb3NlKVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgb3BlcmF0b3I6ICR7b3B9YClcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBjbXBcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcbmNvbnN0IHsgc2FmZVJlOiByZSwgdCB9ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcmUnKVxuXG5jb25zdCBjb2VyY2UgPSAodmVyc2lvbiwgb3B0aW9ucykgPT4ge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgIHJldHVybiB2ZXJzaW9uXG4gIH1cblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdudW1iZXInKSB7XG4gICAgdmVyc2lvbiA9IFN0cmluZyh2ZXJzaW9uKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIGxldCBtYXRjaCA9IG51bGxcbiAgaWYgKCFvcHRpb25zLnJ0bCkge1xuICAgIG1hdGNoID0gdmVyc2lvbi5tYXRjaChvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlID8gcmVbdC5DT0VSQ0VGVUxMXSA6IHJlW3QuQ09FUkNFXSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGaW5kIHRoZSByaWdodC1tb3N0IGNvZXJjaWJsZSBzdHJpbmcgdGhhdCBkb2VzIG5vdCBzaGFyZVxuICAgIC8vIGEgdGVybWludXMgd2l0aCBhIG1vcmUgbGVmdC13YXJkIGNvZXJjaWJsZSBzdHJpbmcuXG4gICAgLy8gRWcsICcxLjIuMy40JyB3YW50cyB0byBjb2VyY2UgJzIuMy40Jywgbm90ICczLjQnIG9yICc0J1xuICAgIC8vIFdpdGggaW5jbHVkZVByZXJlbGVhc2Ugb3B0aW9uIHNldCwgJzEuMi4zLjQtcmMnIHdhbnRzIHRvIGNvZXJjZSAnMi4zLjQtcmMnLCBub3QgJzIuMy40J1xuICAgIC8vXG4gICAgLy8gV2FsayB0aHJvdWdoIHRoZSBzdHJpbmcgY2hlY2tpbmcgd2l0aCBhIC9nIHJlZ2V4cFxuICAgIC8vIE1hbnVhbGx5IHNldCB0aGUgaW5kZXggc28gYXMgdG8gcGljayB1cCBvdmVybGFwcGluZyBtYXRjaGVzLlxuICAgIC8vIFN0b3Agd2hlbiB3ZSBnZXQgYSBtYXRjaCB0aGF0IGVuZHMgYXQgdGhlIHN0cmluZyBlbmQsIHNpbmNlIG5vXG4gICAgLy8gY29lcmNpYmxlIHN0cmluZyBjYW4gYmUgbW9yZSByaWdodC13YXJkIHdpdGhvdXQgdGhlIHNhbWUgdGVybWludXMuXG4gICAgY29uc3QgY29lcmNlUnRsUmVnZXggPSBvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlID8gcmVbdC5DT0VSQ0VSVExGVUxMXSA6IHJlW3QuQ09FUkNFUlRMXVxuICAgIGxldCBuZXh0XG4gICAgd2hpbGUgKChuZXh0ID0gY29lcmNlUnRsUmVnZXguZXhlYyh2ZXJzaW9uKSkgJiZcbiAgICAgICAgKCFtYXRjaCB8fCBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCAhPT0gdmVyc2lvbi5sZW5ndGgpXG4gICAgKSB7XG4gICAgICBpZiAoIW1hdGNoIHx8XG4gICAgICAgICAgICBuZXh0LmluZGV4ICsgbmV4dFswXS5sZW5ndGggIT09IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKSB7XG4gICAgICAgIG1hdGNoID0gbmV4dFxuICAgICAgfVxuICAgICAgY29lcmNlUnRsUmVnZXgubGFzdEluZGV4ID0gbmV4dC5pbmRleCArIG5leHRbMV0ubGVuZ3RoICsgbmV4dFsyXS5sZW5ndGhcbiAgICB9XG4gICAgLy8gbGVhdmUgaXQgaW4gYSBjbGVhbiBzdGF0ZVxuICAgIGNvZXJjZVJ0bFJlZ2V4Lmxhc3RJbmRleCA9IC0xXG4gIH1cblxuICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgbWFqb3IgPSBtYXRjaFsyXVxuICBjb25zdCBtaW5vciA9IG1hdGNoWzNdIHx8ICcwJ1xuICBjb25zdCBwYXRjaCA9IG1hdGNoWzRdIHx8ICcwJ1xuICBjb25zdCBwcmVyZWxlYXNlID0gb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSAmJiBtYXRjaFs1XSA/IGAtJHttYXRjaFs1XX1gIDogJydcbiAgY29uc3QgYnVpbGQgPSBvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlICYmIG1hdGNoWzZdID8gYCske21hdGNoWzZdfWAgOiAnJ1xuXG4gIHJldHVybiBwYXJzZShgJHttYWpvcn0uJHttaW5vcn0uJHtwYXRjaH0ke3ByZXJlbGVhc2V9JHtidWlsZH1gLCBvcHRpb25zKVxufVxubW9kdWxlLmV4cG9ydHMgPSBjb2VyY2VcbiIsICIndXNlIHN0cmljdCdcblxuY2xhc3MgTFJVQ2FjaGUge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5tYXggPSAxMDAwXG4gICAgdGhpcy5tYXAgPSBuZXcgTWFwKClcbiAgfVxuXG4gIGdldCAoa2V5KSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLm1hcC5nZXQoa2V5KVxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbW92ZSB0aGUga2V5IGZyb20gdGhlIG1hcCBhbmQgYWRkIGl0IHRvIHRoZSBlbmRcbiAgICAgIHRoaXMubWFwLmRlbGV0ZShrZXkpXG4gICAgICB0aGlzLm1hcC5zZXQoa2V5LCB2YWx1ZSlcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZSAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmRlbGV0ZShrZXkpXG4gIH1cblxuICBzZXQgKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBkZWxldGVkID0gdGhpcy5kZWxldGUoa2V5KVxuXG4gICAgaWYgKCFkZWxldGVkICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIElmIGNhY2hlIGlzIGZ1bGwsIGRlbGV0ZSB0aGUgbGVhc3QgcmVjZW50bHkgdXNlZCBpdGVtXG4gICAgICBpZiAodGhpcy5tYXAuc2l6ZSA+PSB0aGlzLm1heCkge1xuICAgICAgICBjb25zdCBmaXJzdEtleSA9IHRoaXMubWFwLmtleXMoKS5uZXh0KCkudmFsdWVcbiAgICAgICAgdGhpcy5kZWxldGUoZmlyc3RLZXkpXG4gICAgICB9XG5cbiAgICAgIHRoaXMubWFwLnNldChrZXksIHZhbHVlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMUlVDYWNoZVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBTUEFDRV9DSEFSQUNURVJTID0gL1xccysvZ1xuXG4vLyBob2lzdGVkIGNsYXNzIGZvciBjeWNsaWMgZGVwZW5kZW5jeVxuY2xhc3MgUmFuZ2Uge1xuICBjb25zdHJ1Y3RvciAocmFuZ2UsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpXG5cbiAgICBpZiAocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkge1xuICAgICAgaWYgKFxuICAgICAgICByYW5nZS5sb29zZSA9PT0gISFvcHRpb25zLmxvb3NlICYmXG4gICAgICAgIHJhbmdlLmluY2x1ZGVQcmVyZWxlYXNlID09PSAhIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2VcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gcmFuZ2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UucmF3LCBvcHRpb25zKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyYW5nZSBpbnN0YW5jZW9mIENvbXBhcmF0b3IpIHtcbiAgICAgIC8vIGp1c3QgcHV0IGl0IGluIHRoZSBzZXQgYW5kIHJldHVyblxuICAgICAgdGhpcy5yYXcgPSByYW5nZS52YWx1ZVxuICAgICAgdGhpcy5zZXQgPSBbW3JhbmdlXV1cbiAgICAgIHRoaXMuZm9ybWF0dGVkID0gdW5kZWZpbmVkXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmxvb3NlID0gISFvcHRpb25zLmxvb3NlXG4gICAgdGhpcy5pbmNsdWRlUHJlcmVsZWFzZSA9ICEhb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZVxuXG4gICAgLy8gRmlyc3QgcmVkdWNlIGFsbCB3aGl0ZXNwYWNlIGFzIG11Y2ggYXMgcG9zc2libGUgc28gd2UgZG8gbm90IGhhdmUgdG8gcmVseVxuICAgIC8vIG9uIHBvdGVudGlhbGx5IHNsb3cgcmVnZXhlcyBsaWtlIFxccyouIFRoaXMgaXMgdGhlbiBzdG9yZWQgYW5kIHVzZWQgZm9yXG4gICAgLy8gZnV0dXJlIGVycm9yIG1lc3NhZ2VzIGFzIHdlbGwuXG4gICAgdGhpcy5yYXcgPSByYW5nZS50cmltKCkucmVwbGFjZShTUEFDRV9DSEFSQUNURVJTLCAnICcpXG5cbiAgICAvLyBGaXJzdCwgc3BsaXQgb24gfHxcbiAgICB0aGlzLnNldCA9IHRoaXMucmF3XG4gICAgICAuc3BsaXQoJ3x8JylcbiAgICAgIC8vIG1hcCB0aGUgcmFuZ2UgdG8gYSAyZCBhcnJheSBvZiBjb21wYXJhdG9yc1xuICAgICAgLm1hcChyID0+IHRoaXMucGFyc2VSYW5nZShyLnRyaW0oKSkpXG4gICAgICAvLyB0aHJvdyBvdXQgYW55IGNvbXBhcmF0b3IgbGlzdHMgdGhhdCBhcmUgZW1wdHlcbiAgICAgIC8vIHRoaXMgZ2VuZXJhbGx5IG1lYW5zIHRoYXQgaXQgd2FzIG5vdCBhIHZhbGlkIHJhbmdlLCB3aGljaCBpcyBhbGxvd2VkXG4gICAgICAvLyBpbiBsb29zZSBtb2RlLCBidXQgd2lsbCBzdGlsbCB0aHJvdyBpZiB0aGUgV0hPTEUgcmFuZ2UgaXMgaW52YWxpZC5cbiAgICAgIC5maWx0ZXIoYyA9PiBjLmxlbmd0aClcblxuICAgIGlmICghdGhpcy5zZXQubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIFNlbVZlciBSYW5nZTogJHt0aGlzLnJhd31gKVxuICAgIH1cblxuICAgIC8vIGlmIHdlIGhhdmUgYW55IHRoYXQgYXJlIG5vdCB0aGUgbnVsbCBzZXQsIHRocm93IG91dCBudWxsIHNldHMuXG4gICAgaWYgKHRoaXMuc2V0Lmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIGtlZXAgdGhlIGZpcnN0IG9uZSwgaW4gY2FzZSB0aGV5J3JlIGFsbCBudWxsIHNldHNcbiAgICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5zZXRbMF1cbiAgICAgIHRoaXMuc2V0ID0gdGhpcy5zZXQuZmlsdGVyKGMgPT4gIWlzTnVsbFNldChjWzBdKSlcbiAgICAgIGlmICh0aGlzLnNldC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5zZXQgPSBbZmlyc3RdXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2V0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBhbnkgdGhhdCBhcmUgKiwgdGhlbiB0aGUgcmFuZ2UgaXMganVzdCAqXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiB0aGlzLnNldCkge1xuICAgICAgICAgIGlmIChjLmxlbmd0aCA9PT0gMSAmJiBpc0FueShjWzBdKSkge1xuICAgICAgICAgICAgdGhpcy5zZXQgPSBbY11cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtYXR0ZWQgPSB1bmRlZmluZWRcbiAgfVxuXG4gIGdldCByYW5nZSAoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0dGVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZm9ybWF0dGVkID0gJydcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgdGhpcy5mb3JtYXR0ZWQgKz0gJ3x8J1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBzID0gdGhpcy5zZXRbaV1cbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjb21wcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIGlmIChrID4gMCkge1xuICAgICAgICAgICAgdGhpcy5mb3JtYXR0ZWQgKz0gJyAnXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZm9ybWF0dGVkICs9IGNvbXBzW2tdLnRvU3RyaW5nKCkudHJpbSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0dGVkXG4gIH1cblxuICBmb3JtYXQgKCkge1xuICAgIHJldHVybiB0aGlzLnJhbmdlXG4gIH1cblxuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmFuZ2VcbiAgfVxuXG4gIHBhcnNlUmFuZ2UgKHJhbmdlKSB7XG4gICAgLy8gbWVtb2l6ZSByYW5nZSBwYXJzaW5nIGZvciBwZXJmb3JtYW5jZS5cbiAgICAvLyB0aGlzIGlzIGEgdmVyeSBob3QgcGF0aCwgYW5kIGZ1bGx5IGRldGVybWluaXN0aWMuXG4gICAgY29uc3QgbWVtb09wdHMgPVxuICAgICAgKHRoaXMub3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSAmJiBGTEFHX0lOQ0xVREVfUFJFUkVMRUFTRSkgfFxuICAgICAgKHRoaXMub3B0aW9ucy5sb29zZSAmJiBGTEFHX0xPT1NFKVxuICAgIGNvbnN0IG1lbW9LZXkgPSBtZW1vT3B0cyArICc6JyArIHJhbmdlXG4gICAgY29uc3QgY2FjaGVkID0gY2FjaGUuZ2V0KG1lbW9LZXkpXG4gICAgaWYgKGNhY2hlZCkge1xuICAgICAgcmV0dXJuIGNhY2hlZFxuICAgIH1cblxuICAgIGNvbnN0IGxvb3NlID0gdGhpcy5vcHRpb25zLmxvb3NlXG4gICAgLy8gYDEuMi4zIC0gMS4yLjRgID0+IGA+PTEuMi4zIDw9MS4yLjRgXG4gICAgY29uc3QgaHIgPSBsb29zZSA/IHJlW3QuSFlQSEVOUkFOR0VMT09TRV0gOiByZVt0LkhZUEhFTlJBTkdFXVxuICAgIHJhbmdlID0gcmFuZ2UucmVwbGFjZShociwgaHlwaGVuUmVwbGFjZSh0aGlzLm9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UpKVxuICAgIGRlYnVnKCdoeXBoZW4gcmVwbGFjZScsIHJhbmdlKVxuXG4gICAgLy8gYD4gMS4yLjMgPCAxLjIuNWAgPT4gYD4xLjIuMyA8MS4yLjVgXG4gICAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW3QuQ09NUEFSQVRPUlRSSU1dLCBjb21wYXJhdG9yVHJpbVJlcGxhY2UpXG4gICAgZGVidWcoJ2NvbXBhcmF0b3IgdHJpbScsIHJhbmdlKVxuXG4gICAgLy8gYH4gMS4yLjNgID0+IGB+MS4yLjNgXG4gICAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW3QuVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSlcbiAgICBkZWJ1ZygndGlsZGUgdHJpbScsIHJhbmdlKVxuXG4gICAgLy8gYF4gMS4yLjNgID0+IGBeMS4yLjNgXG4gICAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW3QuQ0FSRVRUUklNXSwgY2FyZXRUcmltUmVwbGFjZSlcbiAgICBkZWJ1ZygnY2FyZXQgdHJpbScsIHJhbmdlKVxuXG4gICAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgdHJpbW1lZCBhbmRcbiAgICAvLyByZWFkeSB0byBiZSBzcGxpdCBpbnRvIGNvbXBhcmF0b3JzLlxuXG4gICAgbGV0IHJhbmdlTGlzdCA9IHJhbmdlXG4gICAgICAuc3BsaXQoJyAnKVxuICAgICAgLm1hcChjb21wID0+IHBhcnNlQ29tcGFyYXRvcihjb21wLCB0aGlzLm9wdGlvbnMpKVxuICAgICAgLmpvaW4oJyAnKVxuICAgICAgLnNwbGl0KC9cXHMrLylcbiAgICAgIC8vID49MC4wLjAgaXMgZXF1aXZhbGVudCB0byAqXG4gICAgICAubWFwKGNvbXAgPT4gcmVwbGFjZUdURTAoY29tcCwgdGhpcy5vcHRpb25zKSlcblxuICAgIGlmIChsb29zZSkge1xuICAgICAgLy8gaW4gbG9vc2UgbW9kZSwgdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgdmFsaWQgY29tcGFyYXRvcnNcbiAgICAgIHJhbmdlTGlzdCA9IHJhbmdlTGlzdC5maWx0ZXIoY29tcCA9PiB7XG4gICAgICAgIGRlYnVnKCdsb29zZSBpbnZhbGlkIGZpbHRlcicsIGNvbXAsIHRoaXMub3B0aW9ucylcbiAgICAgICAgcmV0dXJuICEhY29tcC5tYXRjaChyZVt0LkNPTVBBUkFUT1JMT09TRV0pXG4gICAgICB9KVxuICAgIH1cbiAgICBkZWJ1ZygncmFuZ2UgbGlzdCcsIHJhbmdlTGlzdClcblxuICAgIC8vIGlmIGFueSBjb21wYXJhdG9ycyBhcmUgdGhlIG51bGwgc2V0LCB0aGVuIHJlcGxhY2Ugd2l0aCBKVVNUIG51bGwgc2V0XG4gICAgLy8gaWYgbW9yZSB0aGFuIG9uZSBjb21wYXJhdG9yLCByZW1vdmUgYW55ICogY29tcGFyYXRvcnNcbiAgICAvLyBhbHNvLCBkb24ndCBpbmNsdWRlIHRoZSBzYW1lIGNvbXBhcmF0b3IgbW9yZSB0aGFuIG9uY2VcbiAgICBjb25zdCByYW5nZU1hcCA9IG5ldyBNYXAoKVxuICAgIGNvbnN0IGNvbXBhcmF0b3JzID0gcmFuZ2VMaXN0Lm1hcChjb21wID0+IG5ldyBDb21wYXJhdG9yKGNvbXAsIHRoaXMub3B0aW9ucykpXG4gICAgZm9yIChjb25zdCBjb21wIG9mIGNvbXBhcmF0b3JzKSB7XG4gICAgICBpZiAoaXNOdWxsU2V0KGNvbXApKSB7XG4gICAgICAgIHJldHVybiBbY29tcF1cbiAgICAgIH1cbiAgICAgIHJhbmdlTWFwLnNldChjb21wLnZhbHVlLCBjb21wKVxuICAgIH1cbiAgICBpZiAocmFuZ2VNYXAuc2l6ZSA+IDEgJiYgcmFuZ2VNYXAuaGFzKCcnKSkge1xuICAgICAgcmFuZ2VNYXAuZGVsZXRlKCcnKVxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IFsuLi5yYW5nZU1hcC52YWx1ZXMoKV1cbiAgICBjYWNoZS5zZXQobWVtb0tleSwgcmVzdWx0KVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGludGVyc2VjdHMgKHJhbmdlLCBvcHRpb25zKSB7XG4gICAgaWYgKCEocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2EgUmFuZ2UgaXMgcmVxdWlyZWQnKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNldC5zb21lKCh0aGlzQ29tcGFyYXRvcnMpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGlzU2F0aXNmaWFibGUodGhpc0NvbXBhcmF0b3JzLCBvcHRpb25zKSAmJlxuICAgICAgICByYW5nZS5zZXQuc29tZSgocmFuZ2VDb21wYXJhdG9ycykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBpc1NhdGlzZmlhYmxlKHJhbmdlQ29tcGFyYXRvcnMsIG9wdGlvbnMpICYmXG4gICAgICAgICAgICB0aGlzQ29tcGFyYXRvcnMuZXZlcnkoKHRoaXNDb21wYXJhdG9yKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiByYW5nZUNvbXBhcmF0b3JzLmV2ZXJ5KChyYW5nZUNvbXBhcmF0b3IpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc0NvbXBhcmF0b3IuaW50ZXJzZWN0cyhyYW5nZUNvbXBhcmF0b3IsIG9wdGlvbnMpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgLy8gaWYgQU5ZIG9mIHRoZSBzZXRzIG1hdGNoIEFMTCBvZiBpdHMgY29tcGFyYXRvcnMsIHRoZW4gcGFzc1xuICB0ZXN0ICh2ZXJzaW9uKSB7XG4gICAgaWYgKCF2ZXJzaW9uKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLm9wdGlvbnMpXG4gICAgICB9IGNhdGNoIChlcikge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGVzdFNldCh0aGlzLnNldFtpXSwgdmVyc2lvbiwgdGhpcy5vcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJhbmdlXG5cbmNvbnN0IExSVSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2xydWNhY2hlJylcbmNvbnN0IGNhY2hlID0gbmV3IExSVSgpXG5cbmNvbnN0IHBhcnNlT3B0aW9ucyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3BhcnNlLW9wdGlvbnMnKVxuY29uc3QgQ29tcGFyYXRvciA9IHJlcXVpcmUoJy4vY29tcGFyYXRvcicpXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2RlYnVnJylcbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4vc2VtdmVyJylcbmNvbnN0IHtcbiAgc2FmZVJlOiByZSxcbiAgdCxcbiAgY29tcGFyYXRvclRyaW1SZXBsYWNlLFxuICB0aWxkZVRyaW1SZXBsYWNlLFxuICBjYXJldFRyaW1SZXBsYWNlLFxufSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3JlJylcbmNvbnN0IHsgRkxBR19JTkNMVURFX1BSRVJFTEVBU0UsIEZMQUdfTE9PU0UgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NvbnN0YW50cycpXG5cbmNvbnN0IGlzTnVsbFNldCA9IGMgPT4gYy52YWx1ZSA9PT0gJzwwLjAuMC0wJ1xuY29uc3QgaXNBbnkgPSBjID0+IGMudmFsdWUgPT09ICcnXG5cbi8vIHRha2UgYSBzZXQgb2YgY29tcGFyYXRvcnMgYW5kIGRldGVybWluZSB3aGV0aGVyIHRoZXJlXG4vLyBleGlzdHMgYSB2ZXJzaW9uIHdoaWNoIGNhbiBzYXRpc2Z5IGl0XG5jb25zdCBpc1NhdGlzZmlhYmxlID0gKGNvbXBhcmF0b3JzLCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQgPSB0cnVlXG4gIGNvbnN0IHJlbWFpbmluZ0NvbXBhcmF0b3JzID0gY29tcGFyYXRvcnMuc2xpY2UoKVxuICBsZXQgdGVzdENvbXBhcmF0b3IgPSByZW1haW5pbmdDb21wYXJhdG9ycy5wb3AoKVxuXG4gIHdoaWxlIChyZXN1bHQgJiYgcmVtYWluaW5nQ29tcGFyYXRvcnMubGVuZ3RoKSB7XG4gICAgcmVzdWx0ID0gcmVtYWluaW5nQ29tcGFyYXRvcnMuZXZlcnkoKG90aGVyQ29tcGFyYXRvcikgPT4ge1xuICAgICAgcmV0dXJuIHRlc3RDb21wYXJhdG9yLmludGVyc2VjdHMob3RoZXJDb21wYXJhdG9yLCBvcHRpb25zKVxuICAgIH0pXG5cbiAgICB0ZXN0Q29tcGFyYXRvciA9IHJlbWFpbmluZ0NvbXBhcmF0b3JzLnBvcCgpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8vIGNvbXByaXNlZCBvZiB4cmFuZ2VzLCB0aWxkZXMsIHN0YXJzLCBhbmQgZ3RsdCdzIGF0IHRoaXMgcG9pbnQuXG4vLyBhbHJlYWR5IHJlcGxhY2VkIHRoZSBoeXBoZW4gcmFuZ2VzXG4vLyB0dXJuIGludG8gYSBzZXQgb2YgSlVTVCBjb21wYXJhdG9ycy5cbmNvbnN0IHBhcnNlQ29tcGFyYXRvciA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIGNvbXAgPSBjb21wLnJlcGxhY2UocmVbdC5CVUlMRF0sICcnKVxuICBkZWJ1ZygnY29tcCcsIGNvbXAsIG9wdGlvbnMpXG4gIGNvbXAgPSByZXBsYWNlQ2FyZXRzKGNvbXAsIG9wdGlvbnMpXG4gIGRlYnVnKCdjYXJldCcsIGNvbXApXG4gIGNvbXAgPSByZXBsYWNlVGlsZGVzKGNvbXAsIG9wdGlvbnMpXG4gIGRlYnVnKCd0aWxkZXMnLCBjb21wKVxuICBjb21wID0gcmVwbGFjZVhSYW5nZXMoY29tcCwgb3B0aW9ucylcbiAgZGVidWcoJ3hyYW5nZScsIGNvbXApXG4gIGNvbXAgPSByZXBsYWNlU3RhcnMoY29tcCwgb3B0aW9ucylcbiAgZGVidWcoJ3N0YXJzJywgY29tcClcbiAgcmV0dXJuIGNvbXBcbn1cblxuY29uc3QgaXNYID0gaWQgPT4gIWlkIHx8IGlkLnRvTG93ZXJDYXNlKCkgPT09ICd4JyB8fCBpZCA9PT0gJyonXG5cbi8vIH4sIH4+IC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gfjIsIH4yLngsIH4yLngueCwgfj4yLCB+PjIueCB+PjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMC0wXG4vLyB+Mi4wLCB+Mi4wLngsIH4+Mi4wLCB+PjIuMC54IC0tPiA+PTIuMC4wIDwyLjEuMC0wXG4vLyB+MS4yLCB+MS4yLngsIH4+MS4yLCB+PjEuMi54IC0tPiA+PTEuMi4wIDwxLjMuMC0wXG4vLyB+MS4yLjMsIH4+MS4yLjMgLS0+ID49MS4yLjMgPDEuMy4wLTBcbi8vIH4xLjIuMCwgfj4xLjIuMCAtLT4gPj0xLjIuMCA8MS4zLjAtMFxuLy8gfjAuMC4xIC0tPiA+PTAuMC4xIDwwLjEuMC0wXG5jb25zdCByZXBsYWNlVGlsZGVzID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgcmV0dXJuIGNvbXBcbiAgICAudHJpbSgpXG4gICAgLnNwbGl0KC9cXHMrLylcbiAgICAubWFwKChjKSA9PiByZXBsYWNlVGlsZGUoYywgb3B0aW9ucykpXG4gICAgLmpvaW4oJyAnKVxufVxuXG5jb25zdCByZXBsYWNlVGlsZGUgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBjb25zdCByID0gb3B0aW9ucy5sb29zZSA/IHJlW3QuVElMREVMT09TRV0gOiByZVt0LlRJTERFXVxuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIChfLCBNLCBtLCBwLCBwcikgPT4ge1xuICAgIGRlYnVnKCd0aWxkZScsIGNvbXAsIF8sIE0sIG0sIHAsIHByKVxuICAgIGxldCByZXRcblxuICAgIGlmIChpc1goTSkpIHtcbiAgICAgIHJldCA9ICcnXG4gICAgfSBlbHNlIGlmIChpc1gobSkpIHtcbiAgICAgIHJldCA9IGA+PSR7TX0uMC4wIDwkeytNICsgMX0uMC4wLTBgXG4gICAgfSBlbHNlIGlmIChpc1gocCkpIHtcbiAgICAgIC8vIH4xLjIgPT0gPj0xLjIuMCA8MS4zLjAtMFxuICAgICAgcmV0ID0gYD49JHtNfS4ke219LjAgPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICB9IGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZVRpbGRlIHByJywgcHIpXG4gICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwfS0ke3ByXG4gICAgICB9IDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIH4xLjIuMyA9PSA+PTEuMi4zIDwxLjMuMC0wXG4gICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwXG4gICAgICB9IDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgfVxuXG4gICAgZGVidWcoJ3RpbGRlIHJldHVybicsIHJldClcbiAgICByZXR1cm4gcmV0XG4gIH0pXG59XG5cbi8vIF4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyBeMiwgXjIueCwgXjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMC0wXG4vLyBeMi4wLCBeMi4wLnggLS0+ID49Mi4wLjAgPDMuMC4wLTBcbi8vIF4xLjIsIF4xLjIueCAtLT4gPj0xLjIuMCA8Mi4wLjAtMFxuLy8gXjEuMi4zIC0tPiA+PTEuMi4zIDwyLjAuMC0wXG4vLyBeMS4yLjAgLS0+ID49MS4yLjAgPDIuMC4wLTBcbi8vIF4wLjAuMSAtLT4gPj0wLjAuMSA8MC4wLjItMFxuLy8gXjAuMS4wIC0tPiA+PTAuMS4wIDwwLjIuMC0wXG5jb25zdCByZXBsYWNlQ2FyZXRzID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgcmV0dXJuIGNvbXBcbiAgICAudHJpbSgpXG4gICAgLnNwbGl0KC9cXHMrLylcbiAgICAubWFwKChjKSA9PiByZXBsYWNlQ2FyZXQoYywgb3B0aW9ucykpXG4gICAgLmpvaW4oJyAnKVxufVxuXG5jb25zdCByZXBsYWNlQ2FyZXQgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBvcHRpb25zKVxuICBjb25zdCByID0gb3B0aW9ucy5sb29zZSA/IHJlW3QuQ0FSRVRMT09TRV0gOiByZVt0LkNBUkVUXVxuICBjb25zdCB6ID0gb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSA/ICctMCcgOiAnJ1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIChfLCBNLCBtLCBwLCBwcikgPT4ge1xuICAgIGRlYnVnKCdjYXJldCcsIGNvbXAsIF8sIE0sIG0sIHAsIHByKVxuICAgIGxldCByZXRcblxuICAgIGlmIChpc1goTSkpIHtcbiAgICAgIHJldCA9ICcnXG4gICAgfSBlbHNlIGlmIChpc1gobSkpIHtcbiAgICAgIHJldCA9IGA+PSR7TX0uMC4wJHt6fSA8JHsrTSArIDF9LjAuMC0wYFxuICAgIH0gZWxzZSBpZiAoaXNYKHApKSB7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4wJHt6fSA8JHtNfS4keyttICsgMX0uMC0wYFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LjAke3p9IDwkeytNICsgMX0uMC4wLTBgXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VDYXJldCBwcicsIHByKVxuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKSB7XG4gICAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cH0tJHtwclxuICAgICAgICAgIH0gPCR7TX0uJHttfS4keytwICsgMX0tMGBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwfS0ke3ByXG4gICAgICAgICAgfSA8JHtNfS4keyttICsgMX0uMC0wYFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwfS0ke3ByXG4gICAgICAgIH0gPCR7K00gKyAxfS4wLjAtMGBcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ25vIHByJylcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJykge1xuICAgICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3BcbiAgICAgICAgICB9JHt6fSA8JHtNfS4ke219LiR7K3AgKyAxfS0wYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3BcbiAgICAgICAgICB9JHt6fSA8JHtNfS4keyttICsgMX0uMC0wYFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwXG4gICAgICAgIH0gPCR7K00gKyAxfS4wLjAtMGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZWJ1ZygnY2FyZXQgcmV0dXJuJywgcmV0KVxuICAgIHJldHVybiByZXRcbiAgfSlcbn1cblxuY29uc3QgcmVwbGFjZVhSYW5nZXMgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBkZWJ1ZygncmVwbGFjZVhSYW5nZXMnLCBjb21wLCBvcHRpb25zKVxuICByZXR1cm4gY29tcFxuICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgLm1hcCgoYykgPT4gcmVwbGFjZVhSYW5nZShjLCBvcHRpb25zKSlcbiAgICAuam9pbignICcpXG59XG5cbmNvbnN0IHJlcGxhY2VYUmFuZ2UgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBjb21wID0gY29tcC50cmltKClcbiAgY29uc3QgciA9IG9wdGlvbnMubG9vc2UgPyByZVt0LlhSQU5HRUxPT1NFXSA6IHJlW3QuWFJBTkdFXVxuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIChyZXQsIGd0bHQsIE0sIG0sIHAsIHByKSA9PiB7XG4gICAgZGVidWcoJ3hSYW5nZScsIGNvbXAsIHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpXG4gICAgY29uc3QgeE0gPSBpc1goTSlcbiAgICBjb25zdCB4bSA9IHhNIHx8IGlzWChtKVxuICAgIGNvbnN0IHhwID0geG0gfHwgaXNYKHApXG4gICAgY29uc3QgYW55WCA9IHhwXG5cbiAgICBpZiAoZ3RsdCA9PT0gJz0nICYmIGFueVgpIHtcbiAgICAgIGd0bHQgPSAnJ1xuICAgIH1cblxuICAgIC8vIGlmIHdlJ3JlIGluY2x1ZGluZyBwcmVyZWxlYXNlcyBpbiB0aGUgbWF0Y2gsIHRoZW4gd2UgbmVlZFxuICAgIC8vIHRvIGZpeCB0aGlzIHRvIC0wLCB0aGUgbG93ZXN0IHBvc3NpYmxlIHByZXJlbGVhc2UgdmFsdWVcbiAgICBwciA9IG9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgPyAnLTAnIDogJydcblxuICAgIGlmICh4TSkge1xuICAgICAgaWYgKGd0bHQgPT09ICc+JyB8fCBndGx0ID09PSAnPCcpIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBhbGxvd2VkXG4gICAgICAgIHJldCA9ICc8MC4wLjAtMCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgZm9yYmlkZGVuXG4gICAgICAgIHJldCA9ICcqJ1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ3RsdCAmJiBhbnlYKSB7XG4gICAgICAvLyB3ZSBrbm93IHBhdGNoIGlzIGFuIHgsIGJlY2F1c2Ugd2UgaGF2ZSBhbnkgeCBhdCBhbGwuXG4gICAgICAvLyByZXBsYWNlIFggd2l0aCAwXG4gICAgICBpZiAoeG0pIHtcbiAgICAgICAgbSA9IDBcbiAgICAgIH1cbiAgICAgIHAgPSAwXG5cbiAgICAgIGlmIChndGx0ID09PSAnPicpIHtcbiAgICAgICAgLy8gPjEgPT4gPj0yLjAuMFxuICAgICAgICAvLyA+MS4yID0+ID49MS4zLjBcbiAgICAgICAgZ3RsdCA9ICc+PSdcbiAgICAgICAgaWYgKHhtKSB7XG4gICAgICAgICAgTSA9ICtNICsgMVxuICAgICAgICAgIG0gPSAwXG4gICAgICAgICAgcCA9IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtID0gK20gKyAxXG4gICAgICAgICAgcCA9IDBcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChndGx0ID09PSAnPD0nKSB7XG4gICAgICAgIC8vIDw9MC43LnggaXMgYWN0dWFsbHkgPDAuOC4wLCBzaW5jZSBhbnkgMC43Lnggc2hvdWxkXG4gICAgICAgIC8vIHBhc3MuICBTaW1pbGFybHksIDw9Ny54IGlzIGFjdHVhbGx5IDw4LjAuMCwgZXRjLlxuICAgICAgICBndGx0ID0gJzwnXG4gICAgICAgIGlmICh4bSkge1xuICAgICAgICAgIE0gPSArTSArIDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtID0gK20gKyAxXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGd0bHQgPT09ICc8Jykge1xuICAgICAgICBwciA9ICctMCdcbiAgICAgIH1cblxuICAgICAgcmV0ID0gYCR7Z3RsdCArIE19LiR7bX0uJHtwfSR7cHJ9YFxuICAgIH0gZWxzZSBpZiAoeG0pIHtcbiAgICAgIHJldCA9IGA+PSR7TX0uMC4wJHtwcn0gPCR7K00gKyAxfS4wLjAtMGBcbiAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICByZXQgPSBgPj0ke019LiR7bX0uMCR7cHJcbiAgICAgIH0gPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICB9XG5cbiAgICBkZWJ1ZygneFJhbmdlIHJldHVybicsIHJldClcblxuICAgIHJldHVybiByZXRcbiAgfSlcbn1cblxuLy8gQmVjYXVzZSAqIGlzIEFORC1lZCB3aXRoIGV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgY29tcGFyYXRvcixcbi8vIGFuZCAnJyBtZWFucyBcImFueSB2ZXJzaW9uXCIsIGp1c3QgcmVtb3ZlIHRoZSAqcyBlbnRpcmVseS5cbmNvbnN0IHJlcGxhY2VTdGFycyA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIGRlYnVnKCdyZXBsYWNlU3RhcnMnLCBjb21wLCBvcHRpb25zKVxuICAvLyBMb29zZW5lc3MgaXMgaWdub3JlZCBoZXJlLiAgc3RhciBpcyBhbHdheXMgYXMgbG9vc2UgYXMgaXQgZ2V0cyFcbiAgcmV0dXJuIGNvbXBcbiAgICAudHJpbSgpXG4gICAgLnJlcGxhY2UocmVbdC5TVEFSXSwgJycpXG59XG5cbmNvbnN0IHJlcGxhY2VHVEUwID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgZGVidWcoJ3JlcGxhY2VHVEUwJywgY29tcCwgb3B0aW9ucylcbiAgcmV0dXJuIGNvbXBcbiAgICAudHJpbSgpXG4gICAgLnJlcGxhY2UocmVbb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSA/IHQuR1RFMFBSRSA6IHQuR1RFMF0sICcnKVxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCB0byBzdHJpbmcucmVwbGFjZShyZVt0LkhZUEhFTlJBTkdFXSlcbi8vIE0sIG0sIHBhdGNoLCBwcmVyZWxlYXNlLCBidWlsZFxuLy8gMS4yIC0gMy40LjUgPT4gPj0xLjIuMCA8PTMuNC41XG4vLyAxLjIuMyAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMC0wIEFueSAzLjQueCB3aWxsIGRvXG4vLyAxLjIgLSAzLjQgPT4gPj0xLjIuMCA8My41LjAtMFxuLy8gVE9ETyBidWlsZD9cbmNvbnN0IGh5cGhlblJlcGxhY2UgPSBpbmNQciA9PiAoJDAsXG4gIGZyb20sIGZNLCBmbSwgZnAsIGZwciwgZmIsXG4gIHRvLCB0TSwgdG0sIHRwLCB0cHIpID0+IHtcbiAgaWYgKGlzWChmTSkpIHtcbiAgICBmcm9tID0gJydcbiAgfSBlbHNlIGlmIChpc1goZm0pKSB7XG4gICAgZnJvbSA9IGA+PSR7Zk19LjAuMCR7aW5jUHIgPyAnLTAnIDogJyd9YFxuICB9IGVsc2UgaWYgKGlzWChmcCkpIHtcbiAgICBmcm9tID0gYD49JHtmTX0uJHtmbX0uMCR7aW5jUHIgPyAnLTAnIDogJyd9YFxuICB9IGVsc2UgaWYgKGZwcikge1xuICAgIGZyb20gPSBgPj0ke2Zyb219YFxuICB9IGVsc2Uge1xuICAgIGZyb20gPSBgPj0ke2Zyb219JHtpbmNQciA/ICctMCcgOiAnJ31gXG4gIH1cblxuICBpZiAoaXNYKHRNKSkge1xuICAgIHRvID0gJydcbiAgfSBlbHNlIGlmIChpc1godG0pKSB7XG4gICAgdG8gPSBgPCR7K3RNICsgMX0uMC4wLTBgXG4gIH0gZWxzZSBpZiAoaXNYKHRwKSkge1xuICAgIHRvID0gYDwke3RNfS4keyt0bSArIDF9LjAtMGBcbiAgfSBlbHNlIGlmICh0cHIpIHtcbiAgICB0byA9IGA8PSR7dE19LiR7dG19LiR7dHB9LSR7dHByfWBcbiAgfSBlbHNlIGlmIChpbmNQcikge1xuICAgIHRvID0gYDwke3RNfS4ke3RtfS4keyt0cCArIDF9LTBgXG4gIH0gZWxzZSB7XG4gICAgdG8gPSBgPD0ke3RvfWBcbiAgfVxuXG4gIHJldHVybiBgJHtmcm9tfSAke3RvfWAudHJpbSgpXG59XG5cbmNvbnN0IHRlc3RTZXQgPSAoc2V0LCB2ZXJzaW9uLCBvcHRpb25zKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFzZXRbaV0udGVzdCh2ZXJzaW9uKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaWYgKHZlcnNpb24ucHJlcmVsZWFzZS5sZW5ndGggJiYgIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UpIHtcbiAgICAvLyBGaW5kIHRoZSBzZXQgb2YgdmVyc2lvbnMgdGhhdCBhcmUgYWxsb3dlZCB0byBoYXZlIHByZXJlbGVhc2VzXG4gICAgLy8gRm9yIGV4YW1wbGUsIF4xLjIuMy1wci4xIGRlc3VnYXJzIHRvID49MS4yLjMtcHIuMSA8Mi4wLjBcbiAgICAvLyBUaGF0IHNob3VsZCBhbGxvdyBgMS4yLjMtcHIuMmAgdG8gcGFzcy5cbiAgICAvLyBIb3dldmVyLCBgMS4yLjQtYWxwaGEubm90cmVhZHlgIHNob3VsZCBOT1QgYmUgYWxsb3dlZCxcbiAgICAvLyBldmVuIHRob3VnaCBpdCdzIHdpdGhpbiB0aGUgcmFuZ2Ugc2V0IGJ5IHRoZSBjb21wYXJhdG9ycy5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoc2V0W2ldLnNlbXZlcilcbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyID09PSBDb21wYXJhdG9yLkFOWSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoc2V0W2ldLnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYWxsb3dlZCA9IHNldFtpXS5zZW12ZXJcbiAgICAgICAgaWYgKGFsbG93ZWQubWFqb3IgPT09IHZlcnNpb24ubWFqb3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQubWlub3IgPT09IHZlcnNpb24ubWlub3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQucGF0Y2ggPT09IHZlcnNpb24ucGF0Y2gpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVmVyc2lvbiBoYXMgYSAtcHJlLCBidXQgaXQncyBub3Qgb25lIG9mIHRoZSBvbmVzIHdlIGxpa2UuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBBTlkgPSBTeW1ib2woJ1NlbVZlciBBTlknKVxuLy8gaG9pc3RlZCBjbGFzcyBmb3IgY3ljbGljIGRlcGVuZGVuY3lcbmNsYXNzIENvbXBhcmF0b3Ige1xuICBzdGF0aWMgZ2V0IEFOWSAoKSB7XG4gICAgcmV0dXJuIEFOWVxuICB9XG5cbiAgY29uc3RydWN0b3IgKGNvbXAsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpXG5cbiAgICBpZiAoY29tcCBpbnN0YW5jZW9mIENvbXBhcmF0b3IpIHtcbiAgICAgIGlmIChjb21wLmxvb3NlID09PSAhIW9wdGlvbnMubG9vc2UpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXAgPSBjb21wLnZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcCA9IGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykuam9pbignICcpXG4gICAgZGVidWcoJ2NvbXBhcmF0b3InLCBjb21wLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmxvb3NlID0gISFvcHRpb25zLmxvb3NlXG4gICAgdGhpcy5wYXJzZShjb21wKVxuXG4gICAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5vcGVyYXRvciArIHRoaXMuc2VtdmVyLnZlcnNpb25cbiAgICB9XG5cbiAgICBkZWJ1ZygnY29tcCcsIHRoaXMpXG4gIH1cblxuICBwYXJzZSAoY29tcCkge1xuICAgIGNvbnN0IHIgPSB0aGlzLm9wdGlvbnMubG9vc2UgPyByZVt0LkNPTVBBUkFUT1JMT09TRV0gOiByZVt0LkNPTVBBUkFUT1JdXG4gICAgY29uc3QgbSA9IGNvbXAubWF0Y2gocilcblxuICAgIGlmICghbSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBjb21wYXJhdG9yOiAke2NvbXB9YClcbiAgICB9XG5cbiAgICB0aGlzLm9wZXJhdG9yID0gbVsxXSAhPT0gdW5kZWZpbmVkID8gbVsxXSA6ICcnXG4gICAgaWYgKHRoaXMub3BlcmF0b3IgPT09ICc9Jykge1xuICAgICAgdGhpcy5vcGVyYXRvciA9ICcnXG4gICAgfVxuXG4gICAgLy8gaWYgaXQgbGl0ZXJhbGx5IGlzIGp1c3QgJz4nIG9yICcnIHRoZW4gYWxsb3cgYW55dGhpbmcuXG4gICAgaWYgKCFtWzJdKSB7XG4gICAgICB0aGlzLnNlbXZlciA9IEFOWVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbXZlciA9IG5ldyBTZW1WZXIobVsyXSwgdGhpcy5vcHRpb25zLmxvb3NlKVxuICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgdGVzdCAodmVyc2lvbikge1xuICAgIGRlYnVnKCdDb21wYXJhdG9yLnRlc3QnLCB2ZXJzaW9uLCB0aGlzLm9wdGlvbnMubG9vc2UpXG5cbiAgICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSB8fCB2ZXJzaW9uID09PSBBTlkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5vcHRpb25zKVxuICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNtcCh2ZXJzaW9uLCB0aGlzLm9wZXJhdG9yLCB0aGlzLnNlbXZlciwgdGhpcy5vcHRpb25zKVxuICB9XG5cbiAgaW50ZXJzZWN0cyAoY29tcCwgb3B0aW9ucykge1xuICAgIGlmICghKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYSBDb21wYXJhdG9yIGlzIHJlcXVpcmVkJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJycpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlID09PSAnJykge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSYW5nZShjb21wLnZhbHVlLCBvcHRpb25zKS50ZXN0KHRoaXMudmFsdWUpXG4gICAgfSBlbHNlIGlmIChjb21wLm9wZXJhdG9yID09PSAnJykge1xuICAgICAgaWYgKGNvbXAudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJhbmdlKHRoaXMudmFsdWUsIG9wdGlvbnMpLnRlc3QoY29tcC5zZW12ZXIpXG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKVxuXG4gICAgLy8gU3BlY2lhbCBjYXNlcyB3aGVyZSBub3RoaW5nIGNhbiBwb3NzaWJseSBiZSBsb3dlclxuICAgIGlmIChvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlICYmXG4gICAgICAodGhpcy52YWx1ZSA9PT0gJzwwLjAuMC0wJyB8fCBjb21wLnZhbHVlID09PSAnPDAuMC4wLTAnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSAmJlxuICAgICAgKHRoaXMudmFsdWUuc3RhcnRzV2l0aCgnPDAuMC4wJykgfHwgY29tcC52YWx1ZS5zdGFydHNXaXRoKCc8MC4wLjAnKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIFNhbWUgZGlyZWN0aW9uIGluY3JlYXNpbmcgKD4gb3IgPj0pXG4gICAgaWYgKHRoaXMub3BlcmF0b3Iuc3RhcnRzV2l0aCgnPicpICYmIGNvbXAub3BlcmF0b3Iuc3RhcnRzV2l0aCgnPicpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICAvLyBTYW1lIGRpcmVjdGlvbiBkZWNyZWFzaW5nICg8IG9yIDw9KVxuICAgIGlmICh0aGlzLm9wZXJhdG9yLnN0YXJ0c1dpdGgoJzwnKSAmJiBjb21wLm9wZXJhdG9yLnN0YXJ0c1dpdGgoJzwnKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLy8gc2FtZSBTZW1WZXIgYW5kIGJvdGggc2lkZXMgYXJlIGluY2x1c2l2ZSAoPD0gb3IgPj0pXG4gICAgaWYgKFxuICAgICAgKHRoaXMuc2VtdmVyLnZlcnNpb24gPT09IGNvbXAuc2VtdmVyLnZlcnNpb24pICYmXG4gICAgICB0aGlzLm9wZXJhdG9yLmluY2x1ZGVzKCc9JykgJiYgY29tcC5vcGVyYXRvci5pbmNsdWRlcygnPScpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICAvLyBvcHBvc2l0ZSBkaXJlY3Rpb25zIGxlc3MgdGhhblxuICAgIGlmIChjbXAodGhpcy5zZW12ZXIsICc8JywgY29tcC5zZW12ZXIsIG9wdGlvbnMpICYmXG4gICAgICB0aGlzLm9wZXJhdG9yLnN0YXJ0c1dpdGgoJz4nKSAmJiBjb21wLm9wZXJhdG9yLnN0YXJ0c1dpdGgoJzwnKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLy8gb3Bwb3NpdGUgZGlyZWN0aW9ucyBncmVhdGVyIHRoYW5cbiAgICBpZiAoY21wKHRoaXMuc2VtdmVyLCAnPicsIGNvbXAuc2VtdmVyLCBvcHRpb25zKSAmJlxuICAgICAgdGhpcy5vcGVyYXRvci5zdGFydHNXaXRoKCc8JykgJiYgY29tcC5vcGVyYXRvci5zdGFydHNXaXRoKCc+JykpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcGFyYXRvclxuXG5jb25zdCBwYXJzZU9wdGlvbnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9wYXJzZS1vcHRpb25zJylcbmNvbnN0IHsgc2FmZVJlOiByZSwgdCB9ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcmUnKVxuY29uc3QgY21wID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2NtcCcpXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2RlYnVnJylcbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4vc2VtdmVyJylcbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi9yYW5nZScpXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZScpXG5jb25zdCBzYXRpc2ZpZXMgPSAodmVyc2lvbiwgcmFuZ2UsIG9wdGlvbnMpID0+IHtcbiAgdHJ5IHtcbiAgICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucylcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gcmFuZ2UudGVzdCh2ZXJzaW9uKVxufVxubW9kdWxlLmV4cG9ydHMgPSBzYXRpc2ZpZXNcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcblxuLy8gTW9zdGx5IGp1c3QgZm9yIHRlc3RpbmcgYW5kIGxlZ2FjeSBBUEkgcmVhc29uc1xuY29uc3QgdG9Db21wYXJhdG9ycyA9IChyYW5nZSwgb3B0aW9ucykgPT5cbiAgbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKS5zZXRcbiAgICAubWFwKGNvbXAgPT4gY29tcC5tYXAoYyA9PiBjLnZhbHVlKS5qb2luKCcgJykudHJpbSgpLnNwbGl0KCcgJykpXG5cbm1vZHVsZS5leHBvcnRzID0gdG9Db21wYXJhdG9yc1xuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuXG5jb25zdCBtYXhTYXRpc2Z5aW5nID0gKHZlcnNpb25zLCByYW5nZSwgb3B0aW9ucykgPT4ge1xuICBsZXQgbWF4ID0gbnVsbFxuICBsZXQgbWF4U1YgPSBudWxsXG4gIGxldCByYW5nZU9iaiA9IG51bGxcbiAgdHJ5IHtcbiAgICByYW5nZU9iaiA9IG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucylcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHZlcnNpb25zLmZvckVhY2goKHYpID0+IHtcbiAgICBpZiAocmFuZ2VPYmoudGVzdCh2KSkge1xuICAgICAgLy8gc2F0aXNmaWVzKHYsIHJhbmdlLCBvcHRpb25zKVxuICAgICAgaWYgKCFtYXggfHwgbWF4U1YuY29tcGFyZSh2KSA9PT0gLTEpIHtcbiAgICAgICAgLy8gY29tcGFyZShtYXgsIHYsIHRydWUpXG4gICAgICAgIG1heCA9IHZcbiAgICAgICAgbWF4U1YgPSBuZXcgU2VtVmVyKG1heCwgb3B0aW9ucylcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBtYXhcbn1cbm1vZHVsZS5leHBvcnRzID0gbWF4U2F0aXNmeWluZ1xuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuY29uc3QgbWluU2F0aXNmeWluZyA9ICh2ZXJzaW9ucywgcmFuZ2UsIG9wdGlvbnMpID0+IHtcbiAgbGV0IG1pbiA9IG51bGxcbiAgbGV0IG1pblNWID0gbnVsbFxuICBsZXQgcmFuZ2VPYmogPSBudWxsXG4gIHRyeSB7XG4gICAgcmFuZ2VPYmogPSBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICB2ZXJzaW9ucy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgaWYgKHJhbmdlT2JqLnRlc3QodikpIHtcbiAgICAgIC8vIHNhdGlzZmllcyh2LCByYW5nZSwgb3B0aW9ucylcbiAgICAgIGlmICghbWluIHx8IG1pblNWLmNvbXBhcmUodikgPT09IDEpIHtcbiAgICAgICAgLy8gY29tcGFyZShtaW4sIHYsIHRydWUpXG4gICAgICAgIG1pbiA9IHZcbiAgICAgICAgbWluU1YgPSBuZXcgU2VtVmVyKG1pbiwgb3B0aW9ucylcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBtaW5cbn1cbm1vZHVsZS5leHBvcnRzID0gbWluU2F0aXNmeWluZ1xuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuY29uc3QgZ3QgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvZ3QnKVxuXG5jb25zdCBtaW5WZXJzaW9uID0gKHJhbmdlLCBsb29zZSkgPT4ge1xuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpXG5cbiAgbGV0IG1pbnZlciA9IG5ldyBTZW1WZXIoJzAuMC4wJylcbiAgaWYgKHJhbmdlLnRlc3QobWludmVyKSkge1xuICAgIHJldHVybiBtaW52ZXJcbiAgfVxuXG4gIG1pbnZlciA9IG5ldyBTZW1WZXIoJzAuMC4wLTAnKVxuICBpZiAocmFuZ2UudGVzdChtaW52ZXIpKSB7XG4gICAgcmV0dXJuIG1pbnZlclxuICB9XG5cbiAgbWludmVyID0gbnVsbFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IGNvbXBhcmF0b3JzID0gcmFuZ2Uuc2V0W2ldXG5cbiAgICBsZXQgc2V0TWluID0gbnVsbFxuICAgIGNvbXBhcmF0b3JzLmZvckVhY2goKGNvbXBhcmF0b3IpID0+IHtcbiAgICAgIC8vIENsb25lIHRvIGF2b2lkIG1hbmlwdWxhdGluZyB0aGUgY29tcGFyYXRvcidzIHNlbXZlciBvYmplY3QuXG4gICAgICBjb25zdCBjb21wdmVyID0gbmV3IFNlbVZlcihjb21wYXJhdG9yLnNlbXZlci52ZXJzaW9uKVxuICAgICAgc3dpdGNoIChjb21wYXJhdG9yLm9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgIGlmIChjb21wdmVyLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb21wdmVyLnBhdGNoKytcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcHZlci5wcmVyZWxlYXNlLnB1c2goMClcbiAgICAgICAgICB9XG4gICAgICAgICAgY29tcHZlci5yYXcgPSBjb21wdmVyLmZvcm1hdCgpXG4gICAgICAgICAgLyogZmFsbHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAnJzpcbiAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgIGlmICghc2V0TWluIHx8IGd0KGNvbXB2ZXIsIHNldE1pbikpIHtcbiAgICAgICAgICAgIHNldE1pbiA9IGNvbXB2ZXJcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAvKiBJZ25vcmUgbWF4aW11bSB2ZXJzaW9ucyAqL1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIG9wZXJhdGlvbjogJHtjb21wYXJhdG9yLm9wZXJhdG9yfWApXG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAoc2V0TWluICYmICghbWludmVyIHx8IGd0KG1pbnZlciwgc2V0TWluKSkpIHtcbiAgICAgIG1pbnZlciA9IHNldE1pblxuICAgIH1cbiAgfVxuXG4gIGlmIChtaW52ZXIgJiYgcmFuZ2UudGVzdChtaW52ZXIpKSB7XG4gICAgcmV0dXJuIG1pbnZlclxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cbm1vZHVsZS5leHBvcnRzID0gbWluVmVyc2lvblxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuY29uc3QgdmFsaWRSYW5nZSA9IChyYW5nZSwgb3B0aW9ucykgPT4ge1xuICB0cnkge1xuICAgIC8vIFJldHVybiAnKicgaW5zdGVhZCBvZiAnJyBzbyB0aGF0IHRydXRoaW5lc3Mgd29ya3MuXG4gICAgLy8gVGhpcyB3aWxsIHRocm93IGlmIGl0J3MgaW52YWxpZCBhbnl3YXlcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKS5yYW5nZSB8fCAnKidcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkUmFuZ2VcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgQ29tcGFyYXRvciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvY29tcGFyYXRvcicpXG5jb25zdCB7IEFOWSB9ID0gQ29tcGFyYXRvclxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcbmNvbnN0IHNhdGlzZmllcyA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9ucy9zYXRpc2ZpZXMnKVxuY29uc3QgZ3QgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvZ3QnKVxuY29uc3QgbHQgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvbHQnKVxuY29uc3QgbHRlID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2x0ZScpXG5jb25zdCBndGUgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvZ3RlJylcblxuY29uc3Qgb3V0c2lkZSA9ICh2ZXJzaW9uLCByYW5nZSwgaGlsbywgb3B0aW9ucykgPT4ge1xuICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCBvcHRpb25zKVxuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucylcblxuICBsZXQgZ3RmbiwgbHRlZm4sIGx0Zm4sIGNvbXAsIGVjb21wXG4gIHN3aXRjaCAoaGlsbykge1xuICAgIGNhc2UgJz4nOlxuICAgICAgZ3RmbiA9IGd0XG4gICAgICBsdGVmbiA9IGx0ZVxuICAgICAgbHRmbiA9IGx0XG4gICAgICBjb21wID0gJz4nXG4gICAgICBlY29tcCA9ICc+PSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnPCc6XG4gICAgICBndGZuID0gbHRcbiAgICAgIGx0ZWZuID0gZ3RlXG4gICAgICBsdGZuID0gZ3RcbiAgICAgIGNvbXAgPSAnPCdcbiAgICAgIGVjb21wID0gJzw9J1xuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBwcm92aWRlIGEgaGlsbyB2YWwgb2YgXCI8XCIgb3IgXCI+XCInKVxuICB9XG5cbiAgLy8gSWYgaXQgc2F0aXNmaWVzIHRoZSByYW5nZSBpdCBpcyBub3Qgb3V0c2lkZVxuICBpZiAoc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gRnJvbSBub3cgb24sIHZhcmlhYmxlIHRlcm1zIGFyZSBhcyBpZiB3ZSdyZSBpbiBcImd0clwiIG1vZGUuXG4gIC8vIGJ1dCBub3RlIHRoYXQgZXZlcnl0aGluZyBpcyBmbGlwcGVkIGZvciB0aGUgXCJsdHJcIiBmdW5jdGlvbi5cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IGNvbXBhcmF0b3JzID0gcmFuZ2Uuc2V0W2ldXG5cbiAgICBsZXQgaGlnaCA9IG51bGxcbiAgICBsZXQgbG93ID0gbnVsbFxuXG4gICAgY29tcGFyYXRvcnMuZm9yRWFjaCgoY29tcGFyYXRvcikgPT4ge1xuICAgICAgaWYgKGNvbXBhcmF0b3Iuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgICAgY29tcGFyYXRvciA9IG5ldyBDb21wYXJhdG9yKCc+PTAuMC4wJylcbiAgICAgIH1cbiAgICAgIGhpZ2ggPSBoaWdoIHx8IGNvbXBhcmF0b3JcbiAgICAgIGxvdyA9IGxvdyB8fCBjb21wYXJhdG9yXG4gICAgICBpZiAoZ3Rmbihjb21wYXJhdG9yLnNlbXZlciwgaGlnaC5zZW12ZXIsIG9wdGlvbnMpKSB7XG4gICAgICAgIGhpZ2ggPSBjb21wYXJhdG9yXG4gICAgICB9IGVsc2UgaWYgKGx0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGxvdy5zZW12ZXIsIG9wdGlvbnMpKSB7XG4gICAgICAgIGxvdyA9IGNvbXBhcmF0b3JcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gSWYgdGhlIGVkZ2UgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhIG9wZXJhdG9yIHRoZW4gb3VyIHZlcnNpb25cbiAgICAvLyBpc24ndCBvdXRzaWRlIGl0XG4gICAgaWYgKGhpZ2gub3BlcmF0b3IgPT09IGNvbXAgfHwgaGlnaC5vcGVyYXRvciA9PT0gZWNvbXApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBsb3dlc3QgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhbiBvcGVyYXRvciBhbmQgb3VyIHZlcnNpb25cbiAgICAvLyBpcyBsZXNzIHRoYW4gaXQgdGhlbiBpdCBpc24ndCBoaWdoZXIgdGhhbiB0aGUgcmFuZ2VcbiAgICBpZiAoKCFsb3cub3BlcmF0b3IgfHwgbG93Lm9wZXJhdG9yID09PSBjb21wKSAmJlxuICAgICAgICBsdGVmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIGlmIChsb3cub3BlcmF0b3IgPT09IGVjb21wICYmIGx0Zm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG91dHNpZGVcbiIsICIndXNlIHN0cmljdCdcblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlLlxuY29uc3Qgb3V0c2lkZSA9IHJlcXVpcmUoJy4vb3V0c2lkZScpXG5jb25zdCBndHIgPSAodmVyc2lvbiwgcmFuZ2UsIG9wdGlvbnMpID0+IG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc+Jywgb3B0aW9ucylcbm1vZHVsZS5leHBvcnRzID0gZ3RyXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IG91dHNpZGUgPSByZXF1aXJlKCcuL291dHNpZGUnKVxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgbGVzcyB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlXG5jb25zdCBsdHIgPSAodmVyc2lvbiwgcmFuZ2UsIG9wdGlvbnMpID0+IG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc8Jywgb3B0aW9ucylcbm1vZHVsZS5leHBvcnRzID0gbHRyXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZScpXG5jb25zdCBpbnRlcnNlY3RzID0gKHIxLCByMiwgb3B0aW9ucykgPT4ge1xuICByMSA9IG5ldyBSYW5nZShyMSwgb3B0aW9ucylcbiAgcjIgPSBuZXcgUmFuZ2UocjIsIG9wdGlvbnMpXG4gIHJldHVybiByMS5pbnRlcnNlY3RzKHIyLCBvcHRpb25zKVxufVxubW9kdWxlLmV4cG9ydHMgPSBpbnRlcnNlY3RzXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbi8vIGdpdmVuIGEgc2V0IG9mIHZlcnNpb25zIGFuZCBhIHJhbmdlLCBjcmVhdGUgYSBcInNpbXBsaWZpZWRcIiByYW5nZVxuLy8gdGhhdCBpbmNsdWRlcyB0aGUgc2FtZSB2ZXJzaW9ucyB0aGF0IHRoZSBvcmlnaW5hbCByYW5nZSBkb2VzXG4vLyBJZiB0aGUgb3JpZ2luYWwgcmFuZ2UgaXMgc2hvcnRlciB0aGFuIHRoZSBzaW1wbGlmaWVkIG9uZSwgcmV0dXJuIHRoYXQuXG5jb25zdCBzYXRpc2ZpZXMgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvc2F0aXNmaWVzLmpzJylcbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvY29tcGFyZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICh2ZXJzaW9ucywgcmFuZ2UsIG9wdGlvbnMpID0+IHtcbiAgY29uc3Qgc2V0ID0gW11cbiAgbGV0IGZpcnN0ID0gbnVsbFxuICBsZXQgcHJldiA9IG51bGxcbiAgY29uc3QgdiA9IHZlcnNpb25zLnNvcnQoKGEsIGIpID0+IGNvbXBhcmUoYSwgYiwgb3B0aW9ucykpXG4gIGZvciAoY29uc3QgdmVyc2lvbiBvZiB2KSB7XG4gICAgY29uc3QgaW5jbHVkZWQgPSBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIG9wdGlvbnMpXG4gICAgaWYgKGluY2x1ZGVkKSB7XG4gICAgICBwcmV2ID0gdmVyc2lvblxuICAgICAgaWYgKCFmaXJzdCkge1xuICAgICAgICBmaXJzdCA9IHZlcnNpb25cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgc2V0LnB1c2goW2ZpcnN0LCBwcmV2XSlcbiAgICAgIH1cbiAgICAgIHByZXYgPSBudWxsXG4gICAgICBmaXJzdCA9IG51bGxcbiAgICB9XG4gIH1cbiAgaWYgKGZpcnN0KSB7XG4gICAgc2V0LnB1c2goW2ZpcnN0LCBudWxsXSlcbiAgfVxuXG4gIGNvbnN0IHJhbmdlcyA9IFtdXG4gIGZvciAoY29uc3QgW21pbiwgbWF4XSBvZiBzZXQpIHtcbiAgICBpZiAobWluID09PSBtYXgpIHtcbiAgICAgIHJhbmdlcy5wdXNoKG1pbilcbiAgICB9IGVsc2UgaWYgKCFtYXggJiYgbWluID09PSB2WzBdKSB7XG4gICAgICByYW5nZXMucHVzaCgnKicpXG4gICAgfSBlbHNlIGlmICghbWF4KSB7XG4gICAgICByYW5nZXMucHVzaChgPj0ke21pbn1gKVxuICAgIH0gZWxzZSBpZiAobWluID09PSB2WzBdKSB7XG4gICAgICByYW5nZXMucHVzaChgPD0ke21heH1gKVxuICAgIH0gZWxzZSB7XG4gICAgICByYW5nZXMucHVzaChgJHttaW59IC0gJHttYXh9YClcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2ltcGxpZmllZCA9IHJhbmdlcy5qb2luKCcgfHwgJylcbiAgY29uc3Qgb3JpZ2luYWwgPSB0eXBlb2YgcmFuZ2UucmF3ID09PSAnc3RyaW5nJyA/IHJhbmdlLnJhdyA6IFN0cmluZyhyYW5nZSlcbiAgcmV0dXJuIHNpbXBsaWZpZWQubGVuZ3RoIDwgb3JpZ2luYWwubGVuZ3RoID8gc2ltcGxpZmllZCA6IHJhbmdlXG59XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZS5qcycpXG5jb25zdCBDb21wYXJhdG9yID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9jb21wYXJhdG9yLmpzJylcbmNvbnN0IHsgQU5ZIH0gPSBDb21wYXJhdG9yXG5jb25zdCBzYXRpc2ZpZXMgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvc2F0aXNmaWVzLmpzJylcbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvY29tcGFyZS5qcycpXG5cbi8vIENvbXBsZXggcmFuZ2UgYHIxIHx8IHIyIHx8IC4uLmAgaXMgYSBzdWJzZXQgb2YgYFIxIHx8IFIyIHx8IC4uLmAgaWZmOlxuLy8gLSBFdmVyeSBzaW1wbGUgcmFuZ2UgYHIxLCByMiwgLi4uYCBpcyBhIG51bGwgc2V0LCBPUlxuLy8gLSBFdmVyeSBzaW1wbGUgcmFuZ2UgYHIxLCByMiwgLi4uYCB3aGljaCBpcyBub3QgYSBudWxsIHNldCBpcyBhIHN1YnNldCBvZlxuLy8gICBzb21lIGBSMSwgUjIsIC4uLmBcbi8vXG4vLyBTaW1wbGUgcmFuZ2UgYGMxIGMyIC4uLmAgaXMgYSBzdWJzZXQgb2Ygc2ltcGxlIHJhbmdlIGBDMSBDMiAuLi5gIGlmZjpcbi8vIC0gSWYgYyBpcyBvbmx5IHRoZSBBTlkgY29tcGFyYXRvclxuLy8gICAtIElmIEMgaXMgb25seSB0aGUgQU5ZIGNvbXBhcmF0b3IsIHJldHVybiB0cnVlXG4vLyAgIC0gRWxzZSBpZiBpbiBwcmVyZWxlYXNlIG1vZGUsIHJldHVybiBmYWxzZVxuLy8gICAtIGVsc2UgcmVwbGFjZSBjIHdpdGggYFs+PTAuMC4wXWBcbi8vIC0gSWYgQyBpcyBvbmx5IHRoZSBBTlkgY29tcGFyYXRvclxuLy8gICAtIGlmIGluIHByZXJlbGVhc2UgbW9kZSwgcmV0dXJuIHRydWVcbi8vICAgLSBlbHNlIHJlcGxhY2UgQyB3aXRoIGBbPj0wLjAuMF1gXG4vLyAtIExldCBFUSBiZSB0aGUgc2V0IG9mID0gY29tcGFyYXRvcnMgaW4gY1xuLy8gLSBJZiBFUSBpcyBtb3JlIHRoYW4gb25lLCByZXR1cm4gdHJ1ZSAobnVsbCBzZXQpXG4vLyAtIExldCBHVCBiZSB0aGUgaGlnaGVzdCA+IG9yID49IGNvbXBhcmF0b3IgaW4gY1xuLy8gLSBMZXQgTFQgYmUgdGhlIGxvd2VzdCA8IG9yIDw9IGNvbXBhcmF0b3IgaW4gY1xuLy8gLSBJZiBHVCBhbmQgTFQsIGFuZCBHVC5zZW12ZXIgPiBMVC5zZW12ZXIsIHJldHVybiB0cnVlIChudWxsIHNldClcbi8vIC0gSWYgYW55IEMgaXMgYSA9IHJhbmdlLCBhbmQgR1Qgb3IgTFQgYXJlIHNldCwgcmV0dXJuIGZhbHNlXG4vLyAtIElmIEVRXG4vLyAgIC0gSWYgR1QsIGFuZCBFUSBkb2VzIG5vdCBzYXRpc2Z5IEdULCByZXR1cm4gdHJ1ZSAobnVsbCBzZXQpXG4vLyAgIC0gSWYgTFQsIGFuZCBFUSBkb2VzIG5vdCBzYXRpc2Z5IExULCByZXR1cm4gdHJ1ZSAobnVsbCBzZXQpXG4vLyAgIC0gSWYgRVEgc2F0aXNmaWVzIGV2ZXJ5IEMsIHJldHVybiB0cnVlXG4vLyAgIC0gRWxzZSByZXR1cm4gZmFsc2Vcbi8vIC0gSWYgR1Rcbi8vICAgLSBJZiBHVC5zZW12ZXIgaXMgbG93ZXIgdGhhbiBhbnkgPiBvciA+PSBjb21wIGluIEMsIHJldHVybiBmYWxzZVxuLy8gICAtIElmIEdUIGlzID49LCBhbmQgR1Quc2VtdmVyIGRvZXMgbm90IHNhdGlzZnkgZXZlcnkgQywgcmV0dXJuIGZhbHNlXG4vLyAgIC0gSWYgR1Quc2VtdmVyIGhhcyBhIHByZXJlbGVhc2UsIGFuZCBub3QgaW4gcHJlcmVsZWFzZSBtb2RlXG4vLyAgICAgLSBJZiBubyBDIGhhcyBhIHByZXJlbGVhc2UgYW5kIHRoZSBHVC5zZW12ZXIgdHVwbGUsIHJldHVybiBmYWxzZVxuLy8gLSBJZiBMVFxuLy8gICAtIElmIExULnNlbXZlciBpcyBncmVhdGVyIHRoYW4gYW55IDwgb3IgPD0gY29tcCBpbiBDLCByZXR1cm4gZmFsc2Vcbi8vICAgLSBJZiBMVCBpcyA8PSwgYW5kIExULnNlbXZlciBkb2VzIG5vdCBzYXRpc2Z5IGV2ZXJ5IEMsIHJldHVybiBmYWxzZVxuLy8gICAtIElmIExULnNlbXZlciBoYXMgYSBwcmVyZWxlYXNlLCBhbmQgbm90IGluIHByZXJlbGVhc2UgbW9kZVxuLy8gICAgIC0gSWYgbm8gQyBoYXMgYSBwcmVyZWxlYXNlIGFuZCB0aGUgTFQuc2VtdmVyIHR1cGxlLCByZXR1cm4gZmFsc2Vcbi8vIC0gRWxzZSByZXR1cm4gdHJ1ZVxuXG5jb25zdCBzdWJzZXQgPSAoc3ViLCBkb20sIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBpZiAoc3ViID09PSBkb20pIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc3ViID0gbmV3IFJhbmdlKHN1Yiwgb3B0aW9ucylcbiAgZG9tID0gbmV3IFJhbmdlKGRvbSwgb3B0aW9ucylcbiAgbGV0IHNhd05vbk51bGwgPSBmYWxzZVxuXG4gIE9VVEVSOiBmb3IgKGNvbnN0IHNpbXBsZVN1YiBvZiBzdWIuc2V0KSB7XG4gICAgZm9yIChjb25zdCBzaW1wbGVEb20gb2YgZG9tLnNldCkge1xuICAgICAgY29uc3QgaXNTdWIgPSBzaW1wbGVTdWJzZXQoc2ltcGxlU3ViLCBzaW1wbGVEb20sIG9wdGlvbnMpXG4gICAgICBzYXdOb25OdWxsID0gc2F3Tm9uTnVsbCB8fCBpc1N1YiAhPT0gbnVsbFxuICAgICAgaWYgKGlzU3ViKSB7XG4gICAgICAgIGNvbnRpbnVlIE9VVEVSXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRoZSBudWxsIHNldCBpcyBhIHN1YnNldCBvZiBldmVyeXRoaW5nLCBidXQgbnVsbCBzaW1wbGUgcmFuZ2VzIGluXG4gICAgLy8gYSBjb21wbGV4IHJhbmdlIHNob3VsZCBiZSBpZ25vcmVkLiAgc28gaWYgd2Ugc2F3IGEgbm9uLW51bGwgcmFuZ2UsXG4gICAgLy8gdGhlbiB3ZSBrbm93IHRoaXMgaXNuJ3QgYSBzdWJzZXQsIGJ1dCBpZiBFVkVSWSBzaW1wbGUgcmFuZ2Ugd2FzIG51bGwsXG4gICAgLy8gdGhlbiBpdCBpcyBhIHN1YnNldC5cbiAgICBpZiAoc2F3Tm9uTnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmNvbnN0IG1pbmltdW1WZXJzaW9uV2l0aFByZVJlbGVhc2UgPSBbbmV3IENvbXBhcmF0b3IoJz49MC4wLjAtMCcpXVxuY29uc3QgbWluaW11bVZlcnNpb24gPSBbbmV3IENvbXBhcmF0b3IoJz49MC4wLjAnKV1cblxuY29uc3Qgc2ltcGxlU3Vic2V0ID0gKHN1YiwgZG9tLCBvcHRpb25zKSA9PiB7XG4gIGlmIChzdWIgPT09IGRvbSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoc3ViLmxlbmd0aCA9PT0gMSAmJiBzdWJbMF0uc2VtdmVyID09PSBBTlkpIHtcbiAgICBpZiAoZG9tLmxlbmd0aCA9PT0gMSAmJiBkb21bMF0uc2VtdmVyID09PSBBTlkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSB7XG4gICAgICBzdWIgPSBtaW5pbXVtVmVyc2lvbldpdGhQcmVSZWxlYXNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YiA9IG1pbmltdW1WZXJzaW9uXG4gICAgfVxuICB9XG5cbiAgaWYgKGRvbS5sZW5ndGggPT09IDEgJiYgZG9tWzBdLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgaWYgKG9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbSA9IG1pbmltdW1WZXJzaW9uXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZXFTZXQgPSBuZXcgU2V0KClcbiAgbGV0IGd0LCBsdFxuICBmb3IgKGNvbnN0IGMgb2Ygc3ViKSB7XG4gICAgaWYgKGMub3BlcmF0b3IgPT09ICc+JyB8fCBjLm9wZXJhdG9yID09PSAnPj0nKSB7XG4gICAgICBndCA9IGhpZ2hlckdUKGd0LCBjLCBvcHRpb25zKVxuICAgIH0gZWxzZSBpZiAoYy5vcGVyYXRvciA9PT0gJzwnIHx8IGMub3BlcmF0b3IgPT09ICc8PScpIHtcbiAgICAgIGx0ID0gbG93ZXJMVChsdCwgYywgb3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgZXFTZXQuYWRkKGMuc2VtdmVyKVxuICAgIH1cbiAgfVxuXG4gIGlmIChlcVNldC5zaXplID4gMSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBsZXQgZ3RsdENvbXBcbiAgaWYgKGd0ICYmIGx0KSB7XG4gICAgZ3RsdENvbXAgPSBjb21wYXJlKGd0LnNlbXZlciwgbHQuc2VtdmVyLCBvcHRpb25zKVxuICAgIGlmIChndGx0Q29tcCA+IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSBlbHNlIGlmIChndGx0Q29tcCA9PT0gMCAmJiAoZ3Qub3BlcmF0b3IgIT09ICc+PScgfHwgbHQub3BlcmF0b3IgIT09ICc8PScpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8vIHdpbGwgaXRlcmF0ZSBvbmUgb3IgemVybyB0aW1lc1xuICBmb3IgKGNvbnN0IGVxIG9mIGVxU2V0KSB7XG4gICAgaWYgKGd0ICYmICFzYXRpc2ZpZXMoZXEsIFN0cmluZyhndCksIG9wdGlvbnMpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmIChsdCAmJiAhc2F0aXNmaWVzKGVxLCBTdHJpbmcobHQpLCBvcHRpb25zKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGMgb2YgZG9tKSB7XG4gICAgICBpZiAoIXNhdGlzZmllcyhlcSwgU3RyaW5nKGMpLCBvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbGV0IGhpZ2hlciwgbG93ZXJcbiAgbGV0IGhhc0RvbUxULCBoYXNEb21HVFxuICAvLyBpZiB0aGUgc3Vic2V0IGhhcyBhIHByZXJlbGVhc2UsIHdlIG5lZWQgYSBjb21wYXJhdG9yIGluIHRoZSBzdXBlcnNldFxuICAvLyB3aXRoIHRoZSBzYW1lIHR1cGxlIGFuZCBhIHByZXJlbGVhc2UsIG9yIGl0J3Mgbm90IGEgc3Vic2V0XG4gIGxldCBuZWVkRG9tTFRQcmUgPSBsdCAmJlxuICAgICFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlICYmXG4gICAgbHQuc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoID8gbHQuc2VtdmVyIDogZmFsc2VcbiAgbGV0IG5lZWREb21HVFByZSA9IGd0ICYmXG4gICAgIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgJiZcbiAgICBndC5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPyBndC5zZW12ZXIgOiBmYWxzZVxuICAvLyBleGNlcHRpb246IDwxLjIuMy0wIGlzIHRoZSBzYW1lIGFzIDwxLjIuM1xuICBpZiAobmVlZERvbUxUUHJlICYmIG5lZWREb21MVFByZS5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgbHQub3BlcmF0b3IgPT09ICc8JyAmJiBuZWVkRG9tTFRQcmUucHJlcmVsZWFzZVswXSA9PT0gMCkge1xuICAgIG5lZWREb21MVFByZSA9IGZhbHNlXG4gIH1cblxuICBmb3IgKGNvbnN0IGMgb2YgZG9tKSB7XG4gICAgaGFzRG9tR1QgPSBoYXNEb21HVCB8fCBjLm9wZXJhdG9yID09PSAnPicgfHwgYy5vcGVyYXRvciA9PT0gJz49J1xuICAgIGhhc0RvbUxUID0gaGFzRG9tTFQgfHwgYy5vcGVyYXRvciA9PT0gJzwnIHx8IGMub3BlcmF0b3IgPT09ICc8PSdcbiAgICBpZiAoZ3QpIHtcbiAgICAgIGlmIChuZWVkRG9tR1RQcmUpIHtcbiAgICAgICAgaWYgKGMuc2VtdmVyLnByZXJlbGVhc2UgJiYgYy5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggJiZcbiAgICAgICAgICAgIGMuc2VtdmVyLm1ham9yID09PSBuZWVkRG9tR1RQcmUubWFqb3IgJiZcbiAgICAgICAgICAgIGMuc2VtdmVyLm1pbm9yID09PSBuZWVkRG9tR1RQcmUubWlub3IgJiZcbiAgICAgICAgICAgIGMuc2VtdmVyLnBhdGNoID09PSBuZWVkRG9tR1RQcmUucGF0Y2gpIHtcbiAgICAgICAgICBuZWVkRG9tR1RQcmUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYy5vcGVyYXRvciA9PT0gJz4nIHx8IGMub3BlcmF0b3IgPT09ICc+PScpIHtcbiAgICAgICAgaGlnaGVyID0gaGlnaGVyR1QoZ3QsIGMsIG9wdGlvbnMpXG4gICAgICAgIGlmIChoaWdoZXIgPT09IGMgJiYgaGlnaGVyICE9PSBndCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGd0Lm9wZXJhdG9yID09PSAnPj0nICYmICFzYXRpc2ZpZXMoZ3Quc2VtdmVyLCBTdHJpbmcoYyksIG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAobHQpIHtcbiAgICAgIGlmIChuZWVkRG9tTFRQcmUpIHtcbiAgICAgICAgaWYgKGMuc2VtdmVyLnByZXJlbGVhc2UgJiYgYy5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggJiZcbiAgICAgICAgICAgIGMuc2VtdmVyLm1ham9yID09PSBuZWVkRG9tTFRQcmUubWFqb3IgJiZcbiAgICAgICAgICAgIGMuc2VtdmVyLm1pbm9yID09PSBuZWVkRG9tTFRQcmUubWlub3IgJiZcbiAgICAgICAgICAgIGMuc2VtdmVyLnBhdGNoID09PSBuZWVkRG9tTFRQcmUucGF0Y2gpIHtcbiAgICAgICAgICBuZWVkRG9tTFRQcmUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYy5vcGVyYXRvciA9PT0gJzwnIHx8IGMub3BlcmF0b3IgPT09ICc8PScpIHtcbiAgICAgICAgbG93ZXIgPSBsb3dlckxUKGx0LCBjLCBvcHRpb25zKVxuICAgICAgICBpZiAobG93ZXIgPT09IGMgJiYgbG93ZXIgIT09IGx0KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobHQub3BlcmF0b3IgPT09ICc8PScgJiYgIXNhdGlzZmllcyhsdC5zZW12ZXIsIFN0cmluZyhjKSwgb3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGlmICghYy5vcGVyYXRvciAmJiAobHQgfHwgZ3QpICYmIGd0bHRDb21wICE9PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGVyZSB3YXMgYSA8IG9yID4sIGFuZCBub3RoaW5nIGluIHRoZSBkb20sIHRoZW4gbXVzdCBiZSBmYWxzZVxuICAvLyBVTkxFU1MgaXQgd2FzIGxpbWl0ZWQgYnkgYW5vdGhlciByYW5nZSBpbiB0aGUgb3RoZXIgZGlyZWN0aW9uLlxuICAvLyBFZywgPjEuMC4wIDwxLjAuMSBpcyBzdGlsbCBhIHN1YnNldCBvZiA8Mi4wLjBcbiAgaWYgKGd0ICYmIGhhc0RvbUxUICYmICFsdCAmJiBndGx0Q29tcCAhPT0gMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKGx0ICYmIGhhc0RvbUdUICYmICFndCAmJiBndGx0Q29tcCAhPT0gMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gd2UgbmVlZGVkIGEgcHJlcmVsZWFzZSByYW5nZSBpbiBhIHNwZWNpZmljIHR1cGxlLCBidXQgZGlkbid0IGdldCBvbmVcbiAgLy8gdGhlbiB0aGlzIGlzbid0IGEgc3Vic2V0LiAgZWcgPj0xLjIuMy1wcmUgaXMgbm90IGEgc3Vic2V0IG9mID49MS4wLjAsXG4gIC8vIGJlY2F1c2UgaXQgaW5jbHVkZXMgcHJlcmVsZWFzZXMgaW4gdGhlIDEuMi4zIHR1cGxlXG4gIGlmIChuZWVkRG9tR1RQcmUgfHwgbmVlZERvbUxUUHJlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG4vLyA+PTEuMi4zIGlzIGxvd2VyIHRoYW4gPjEuMi4zXG5jb25zdCBoaWdoZXJHVCA9IChhLCBiLCBvcHRpb25zKSA9PiB7XG4gIGlmICghYSkge1xuICAgIHJldHVybiBiXG4gIH1cbiAgY29uc3QgY29tcCA9IGNvbXBhcmUoYS5zZW12ZXIsIGIuc2VtdmVyLCBvcHRpb25zKVxuICByZXR1cm4gY29tcCA+IDAgPyBhXG4gICAgOiBjb21wIDwgMCA/IGJcbiAgICA6IGIub3BlcmF0b3IgPT09ICc+JyAmJiBhLm9wZXJhdG9yID09PSAnPj0nID8gYlxuICAgIDogYVxufVxuXG4vLyA8PTEuMi4zIGlzIGhpZ2hlciB0aGFuIDwxLjIuM1xuY29uc3QgbG93ZXJMVCA9IChhLCBiLCBvcHRpb25zKSA9PiB7XG4gIGlmICghYSkge1xuICAgIHJldHVybiBiXG4gIH1cbiAgY29uc3QgY29tcCA9IGNvbXBhcmUoYS5zZW12ZXIsIGIuc2VtdmVyLCBvcHRpb25zKVxuICByZXR1cm4gY29tcCA8IDAgPyBhXG4gICAgOiBjb21wID4gMCA/IGJcbiAgICA6IGIub3BlcmF0b3IgPT09ICc8JyAmJiBhLm9wZXJhdG9yID09PSAnPD0nID8gYlxuICAgIDogYVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN1YnNldFxuIiwgIid1c2Ugc3RyaWN0J1xuXG4vLyBqdXN0IHByZS1sb2FkIGFsbCB0aGUgc3R1ZmYgdGhhdCBpbmRleC5qcyBsYXppbHkgZXhwb3J0c1xuY29uc3QgaW50ZXJuYWxSZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvcmUnKVxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9jb25zdGFudHMnKVxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBpZGVudGlmaWVycyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvaWRlbnRpZmllcnMnKVxuY29uc3QgcGFyc2UgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9wYXJzZScpXG5jb25zdCB2YWxpZCA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3ZhbGlkJylcbmNvbnN0IGNsZWFuID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvY2xlYW4nKVxuY29uc3QgaW5jID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvaW5jJylcbmNvbnN0IGRpZmYgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9kaWZmJylcbmNvbnN0IG1ham9yID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvbWFqb3InKVxuY29uc3QgbWlub3IgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9taW5vcicpXG5jb25zdCBwYXRjaCA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3BhdGNoJylcbmNvbnN0IHByZXJlbGVhc2UgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9wcmVyZWxlYXNlJylcbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9jb21wYXJlJylcbmNvbnN0IHJjb21wYXJlID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvcmNvbXBhcmUnKVxuY29uc3QgY29tcGFyZUxvb3NlID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvY29tcGFyZS1sb29zZScpXG5jb25zdCBjb21wYXJlQnVpbGQgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9jb21wYXJlLWJ1aWxkJylcbmNvbnN0IHNvcnQgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9zb3J0JylcbmNvbnN0IHJzb3J0ID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvcnNvcnQnKVxuY29uc3QgZ3QgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9ndCcpXG5jb25zdCBsdCA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2x0JylcbmNvbnN0IGVxID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvZXEnKVxuY29uc3QgbmVxID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvbmVxJylcbmNvbnN0IGd0ZSA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2d0ZScpXG5jb25zdCBsdGUgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9sdGUnKVxuY29uc3QgY21wID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvY21wJylcbmNvbnN0IGNvZXJjZSA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2NvZXJjZScpXG5jb25zdCBDb21wYXJhdG9yID0gcmVxdWlyZSgnLi9jbGFzc2VzL2NvbXBhcmF0b3InKVxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuL2NsYXNzZXMvcmFuZ2UnKVxuY29uc3Qgc2F0aXNmaWVzID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvc2F0aXNmaWVzJylcbmNvbnN0IHRvQ29tcGFyYXRvcnMgPSByZXF1aXJlKCcuL3Jhbmdlcy90by1jb21wYXJhdG9ycycpXG5jb25zdCBtYXhTYXRpc2Z5aW5nID0gcmVxdWlyZSgnLi9yYW5nZXMvbWF4LXNhdGlzZnlpbmcnKVxuY29uc3QgbWluU2F0aXNmeWluZyA9IHJlcXVpcmUoJy4vcmFuZ2VzL21pbi1zYXRpc2Z5aW5nJylcbmNvbnN0IG1pblZlcnNpb24gPSByZXF1aXJlKCcuL3Jhbmdlcy9taW4tdmVyc2lvbicpXG5jb25zdCB2YWxpZFJhbmdlID0gcmVxdWlyZSgnLi9yYW5nZXMvdmFsaWQnKVxuY29uc3Qgb3V0c2lkZSA9IHJlcXVpcmUoJy4vcmFuZ2VzL291dHNpZGUnKVxuY29uc3QgZ3RyID0gcmVxdWlyZSgnLi9yYW5nZXMvZ3RyJylcbmNvbnN0IGx0ciA9IHJlcXVpcmUoJy4vcmFuZ2VzL2x0cicpXG5jb25zdCBpbnRlcnNlY3RzID0gcmVxdWlyZSgnLi9yYW5nZXMvaW50ZXJzZWN0cycpXG5jb25zdCBzaW1wbGlmeVJhbmdlID0gcmVxdWlyZSgnLi9yYW5nZXMvc2ltcGxpZnknKVxuY29uc3Qgc3Vic2V0ID0gcmVxdWlyZSgnLi9yYW5nZXMvc3Vic2V0Jylcbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXJzZSxcbiAgdmFsaWQsXG4gIGNsZWFuLFxuICBpbmMsXG4gIGRpZmYsXG4gIG1ham9yLFxuICBtaW5vcixcbiAgcGF0Y2gsXG4gIHByZXJlbGVhc2UsXG4gIGNvbXBhcmUsXG4gIHJjb21wYXJlLFxuICBjb21wYXJlTG9vc2UsXG4gIGNvbXBhcmVCdWlsZCxcbiAgc29ydCxcbiAgcnNvcnQsXG4gIGd0LFxuICBsdCxcbiAgZXEsXG4gIG5lcSxcbiAgZ3RlLFxuICBsdGUsXG4gIGNtcCxcbiAgY29lcmNlLFxuICBDb21wYXJhdG9yLFxuICBSYW5nZSxcbiAgc2F0aXNmaWVzLFxuICB0b0NvbXBhcmF0b3JzLFxuICBtYXhTYXRpc2Z5aW5nLFxuICBtaW5TYXRpc2Z5aW5nLFxuICBtaW5WZXJzaW9uLFxuICB2YWxpZFJhbmdlLFxuICBvdXRzaWRlLFxuICBndHIsXG4gIGx0cixcbiAgaW50ZXJzZWN0cyxcbiAgc2ltcGxpZnlSYW5nZSxcbiAgc3Vic2V0LFxuICBTZW1WZXIsXG4gIHJlOiBpbnRlcm5hbFJlLnJlLFxuICBzcmM6IGludGVybmFsUmUuc3JjLFxuICB0b2tlbnM6IGludGVybmFsUmUudCxcbiAgU0VNVkVSX1NQRUNfVkVSU0lPTjogY29uc3RhbnRzLlNFTVZFUl9TUEVDX1ZFUlNJT04sXG4gIFJFTEVBU0VfVFlQRVM6IGNvbnN0YW50cy5SRUxFQVNFX1RZUEVTLFxuICBjb21wYXJlSWRlbnRpZmllcnM6IGlkZW50aWZpZXJzLmNvbXBhcmVJZGVudGlmaWVycyxcbiAgcmNvbXBhcmVJZGVudGlmaWVyczogaWRlbnRpZmllcnMucmNvbXBhcmVJZGVudGlmaWVycyxcbn1cbiIsICJpbXBvcnQgeyByZWFkRmlsZSwgd3JpdGVGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnO1xuXG5pbnRlcmZhY2UgU3BsaXRDaGFuZ2Vsb2dSZXN1bHQge1xuICAgIGJlZm9yZTogc3RyaW5nO1xuICAgIHNlY3Rpb246IHN0cmluZztcbiAgICBhZnRlcjogc3RyaW5nO1xufVxuXG5jb25zdCBXQVRFUk1BUktfUkVHRVggPSAvPCEtLSBwcmVyZWxlYXNlOiAuKz8gLS0+LztcblxuZnVuY3Rpb24gbWFrZVdhdGVybWFyayh2ZXJzaW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPCEtLSBwcmVyZWxlYXNlOiAke3ZlcnNpb259IC0tPmA7XG59XG5cbmZ1bmN0aW9uIHNwbGl0Q2hhbmdlbG9nKGNvbnRlbnQ6IHN0cmluZyk6IFNwbGl0Q2hhbmdlbG9nUmVzdWx0IHtcbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gJyMjIFtVbnJlbGVhc2VkXSc7XG4gICAgY29uc3Qgc3RhcnQgPSBjb250ZW50LmluZGV4T2YoaGVhZGVyVGV4dCk7XG5cbiAgICBpZiAoc3RhcnQgPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gW1VucmVsZWFzZWRdIHNlY3Rpb24gZm91bmQgaW4gY2hhbmdlbG9nLicpO1xuICAgIH1cbiAgICBjb25zdCBhZnRlckhlYWRlciA9IHN0YXJ0ICsgaGVhZGVyVGV4dC5sZW5ndGg7XG4gICAgY29uc3Qgc2VwYXJhdG9ySWR4ID0gY29udGVudC5pbmRleE9mKCdcXG4tLS0nLCBhZnRlckhlYWRlcik7XG4gICAgY29uc3QgbmV4dFNlY3Rpb25JZHggPSBjb250ZW50LmluZGV4T2YoJ1xcbiMjIFsnLCBhZnRlckhlYWRlcik7XG5cbiAgICBsZXQgZW5kOiBudW1iZXI7XG5cbiAgICBpZiAoc2VwYXJhdG9ySWR4ICE9PSAtMSAmJiAobmV4dFNlY3Rpb25JZHggPT09IC0xIHx8IHNlcGFyYXRvcklkeCA8IG5leHRTZWN0aW9uSWR4KSkge1xuICAgICAgICBlbmQgPSBzZXBhcmF0b3JJZHg7XG4gICAgfSBlbHNlIGlmIChuZXh0U2VjdGlvbklkeCAhPT0gLTEpIHtcbiAgICAgICAgZW5kID0gbmV4dFNlY3Rpb25JZHg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZW5kID0gY29udGVudC5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGJlZm9yZTogY29udGVudC5zbGljZSgwLCBzdGFydCksXG4gICAgICAgIHNlY3Rpb246IGNvbnRlbnQuc2xpY2Uoc3RhcnQsIGVuZCksXG4gICAgICAgIGFmdGVyOiBjb250ZW50LnNsaWNlKGVuZCksXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0U2VjdGlvbkJvZHkoc2VjdGlvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBuZXdsaW5lSWR4ID0gc2VjdGlvbi5pbmRleE9mKCdcXG4nKTtcblxuICAgIHJldHVybiBuZXdsaW5lSWR4ID09PSAtMSA/ICcnIDogc2VjdGlvbi5zbGljZShuZXdsaW5lSWR4ICsgMSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnNlcnRPclVwZGF0ZVdhdGVybWFyayhjaGFuZ2Vsb2dQYXRoOiBzdHJpbmcsIHZlcnNpb246IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZShjaGFuZ2Vsb2dQYXRoLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pO1xuICAgIGNvbnN0IHsgYmVmb3JlLCBzZWN0aW9uLCBhZnRlciB9ID0gc3BsaXRDaGFuZ2Vsb2coY29udGVudCk7XG4gICAgY29uc3Qgd2F0ZXJtYXJrID0gbWFrZVdhdGVybWFyayh2ZXJzaW9uKTtcblxuICAgIGxldCBuZXdTZWN0aW9uOiBzdHJpbmc7XG5cbiAgICBpZiAoV0FURVJNQVJLX1JFR0VYLnRlc3Qoc2VjdGlvbikpIHtcbiAgICAgICAgbmV3U2VjdGlvbiA9IHNlY3Rpb24ucmVwbGFjZShXQVRFUk1BUktfUkVHRVgsIHdhdGVybWFyayk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U2VjdGlvbiA9IHNlY3Rpb24udHJpbUVuZCgpICsgJ1xcblxcbicgKyB3YXRlcm1hcmsgKyAnXFxuJztcbiAgICB9XG5cbiAgICBhd2FpdCB3cml0ZUZpbGUoY2hhbmdlbG9nUGF0aCwgYmVmb3JlICsgbmV3U2VjdGlvbiArIGFmdGVyLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXh0cmFjdFByZXJlbGVhc2VEZWx0YShjaGFuZ2Vsb2dQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZShjaGFuZ2Vsb2dQYXRoLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pO1xuICAgIGNvbnN0IHsgc2VjdGlvbiB9ID0gc3BsaXRDaGFuZ2Vsb2coY29udGVudCk7XG4gICAgY29uc3QgYm9keSA9IGdldFNlY3Rpb25Cb2R5KHNlY3Rpb24pO1xuICAgIGNvbnN0IHdhdGVybWFya0lkeCA9IGJvZHkuc2VhcmNoKFdBVEVSTUFSS19SRUdFWCk7XG5cbiAgICBpZiAod2F0ZXJtYXJrSWR4ICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gYm9keS5zbGljZSgwLCB3YXRlcm1hcmtJZHgpLnRyaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYm9keS50cmltKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleHRyYWN0U3RhYmxlTm90ZXMoY2hhbmdlbG9nUGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gZXh0cmFjdFByZXJlbGVhc2VEZWx0YShjaGFuZ2Vsb2dQYXRoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YW1wU3RhYmxlVmVyc2lvbihjaGFuZ2Vsb2dQYXRoOiBzdHJpbmcsIHZlcnNpb246IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZShjaGFuZ2Vsb2dQYXRoLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pO1xuICAgIGNvbnN0IHsgYmVmb3JlLCBzZWN0aW9uLCBhZnRlciB9ID0gc3BsaXRDaGFuZ2Vsb2coY29udGVudCk7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgICBsZXQgYm9keSA9IGdldFNlY3Rpb25Cb2R5KHNlY3Rpb24pO1xuXG4gICAgYm9keSA9IGJvZHkucmVwbGFjZSgvXFxuPzwhLS0gcHJlcmVsZWFzZTogLis/IC0tPlxcbj8vZywgJ1xcbicpO1xuICAgIGJvZHkgPSBib2R5LnJlcGxhY2UoL1xcbnszLH0vZywgJ1xcblxcbicpLnRyaW1FbmQoKTtcblxuICAgIGNvbnN0IHZlcnNpb25lZFNlY3Rpb24gPSBgIyMgWyR7dmVyc2lvbn1dIC0gJHtkYXRlfSR7Ym9keSA/ICdcXG4nICsgYm9keSA6ICcnfWA7XG4gICAgY29uc3QgZnJlc2hVbnJlbGVhc2VkID0gJyMjIFtVbnJlbGVhc2VkXVxcbic7XG5cbiAgICBhd2FpdCB3cml0ZUZpbGUoY2hhbmdlbG9nUGF0aCwgYmVmb3JlICsgZnJlc2hVbnJlbGVhc2VkICsgJ1xcbi0tLVxcblxcbicgKyB2ZXJzaW9uZWRTZWN0aW9uICsgYWZ0ZXIsIHtcbiAgICAgICAgZW5jb2Rpbmc6ICd1dGYtOCcsXG4gICAgfSk7XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJBZ2VudCgpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09IFwib2JqZWN0XCIgJiYgXCJ1c2VyQWdlbnRcIiBpbiBuYXZpZ2F0b3IpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLnZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBgTm9kZS5qcy8ke3Byb2Nlc3MudmVyc2lvbi5zdWJzdHIoMSl9ICgke3Byb2Nlc3MucGxhdGZvcm19OyAke1xuICAgICAgcHJvY2Vzcy5hcmNoXG4gICAgfSlgO1xuICB9XG5cbiAgcmV0dXJuIFwiPGVudmlyb25tZW50IHVuZGV0ZWN0YWJsZT5cIjtcbn1cbiIsICIvLyBAdHMtY2hlY2tcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKHN0YXRlLCBuYW1lLCBtZXRob2QsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBtZXRob2QgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm1ldGhvZCBmb3IgYmVmb3JlIGhvb2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobmFtZSkpIHtcbiAgICByZXR1cm4gbmFtZS5yZXZlcnNlKCkucmVkdWNlKChjYWxsYmFjaywgbmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIHJlZ2lzdGVyLmJpbmQobnVsbCwgc3RhdGUsIG5hbWUsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICB9LCBtZXRob2QpKCk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgaWYgKCFzdGF0ZS5yZWdpc3RyeVtuYW1lXSkge1xuICAgICAgcmV0dXJuIG1ldGhvZChvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGUucmVnaXN0cnlbbmFtZV0ucmVkdWNlKChtZXRob2QsIHJlZ2lzdGVyZWQpID0+IHtcbiAgICAgIHJldHVybiByZWdpc3RlcmVkLmhvb2suYmluZChudWxsLCBtZXRob2QsIG9wdGlvbnMpO1xuICAgIH0sIG1ldGhvZCkoKTtcbiAgfSk7XG59XG4iLCAiLy8gQHRzLWNoZWNrXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRIb29rKHN0YXRlLCBraW5kLCBuYW1lLCBob29rKSB7XG4gIGNvbnN0IG9yaWcgPSBob29rO1xuICBpZiAoIXN0YXRlLnJlZ2lzdHJ5W25hbWVdKSB7XG4gICAgc3RhdGUucmVnaXN0cnlbbmFtZV0gPSBbXTtcbiAgfVxuXG4gIGlmIChraW5kID09PSBcImJlZm9yZVwiKSB7XG4gICAgaG9vayA9IChtZXRob2QsIG9wdGlvbnMpID0+IHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAudGhlbihvcmlnLmJpbmQobnVsbCwgb3B0aW9ucykpXG4gICAgICAgIC50aGVuKG1ldGhvZC5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKGtpbmQgPT09IFwiYWZ0ZXJcIikge1xuICAgIGhvb2sgPSAobWV0aG9kLCBvcHRpb25zKSA9PiB7XG4gICAgICBsZXQgcmVzdWx0O1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgIC50aGVuKG1ldGhvZC5iaW5kKG51bGwsIG9wdGlvbnMpKVxuICAgICAgICAudGhlbigocmVzdWx0XykgPT4ge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdF87XG4gICAgICAgICAgcmV0dXJuIG9yaWcocmVzdWx0LCBvcHRpb25zKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBpZiAoa2luZCA9PT0gXCJlcnJvclwiKSB7XG4gICAgaG9vayA9IChtZXRob2QsIG9wdGlvbnMpID0+IHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAudGhlbihtZXRob2QuYmluZChudWxsLCBvcHRpb25zKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJldHVybiBvcmlnKGVycm9yLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRlLnJlZ2lzdHJ5W25hbWVdLnB1c2goe1xuICAgIGhvb2s6IGhvb2ssXG4gICAgb3JpZzogb3JpZyxcbiAgfSk7XG59XG4iLCAiLy8gQHRzLWNoZWNrXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIb29rKHN0YXRlLCBuYW1lLCBtZXRob2QpIHtcbiAgaWYgKCFzdGF0ZS5yZWdpc3RyeVtuYW1lXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUucmVnaXN0cnlbbmFtZV1cbiAgICAubWFwKChyZWdpc3RlcmVkKSA9PiB7XG4gICAgICByZXR1cm4gcmVnaXN0ZXJlZC5vcmlnO1xuICAgIH0pXG4gICAgLmluZGV4T2YobWV0aG9kKTtcblxuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUucmVnaXN0cnlbbmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbn1cbiIsICIvLyBAdHMtY2hlY2tcblxuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tIFwiLi9saWIvcmVnaXN0ZXIuanNcIjtcbmltcG9ydCB7IGFkZEhvb2sgfSBmcm9tIFwiLi9saWIvYWRkLmpzXCI7XG5pbXBvcnQgeyByZW1vdmVIb29rIH0gZnJvbSBcIi4vbGliL3JlbW92ZS5qc1wiO1xuXG4vLyBiaW5kIHdpdGggYXJyYXkgb2YgYXJndW1lbnRzOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjE3OTI5MTNcbmNvbnN0IGJpbmQgPSBGdW5jdGlvbi5iaW5kO1xuY29uc3QgYmluZGFibGUgPSBiaW5kLmJpbmQoYmluZCk7XG5cbmZ1bmN0aW9uIGJpbmRBcGkoaG9vaywgc3RhdGUsIG5hbWUpIHtcbiAgY29uc3QgcmVtb3ZlSG9va1JlZiA9IGJpbmRhYmxlKHJlbW92ZUhvb2ssIG51bGwpLmFwcGx5KFxuICAgIG51bGwsXG4gICAgbmFtZSA/IFtzdGF0ZSwgbmFtZV0gOiBbc3RhdGVdXG4gICk7XG4gIGhvb2suYXBpID0geyByZW1vdmU6IHJlbW92ZUhvb2tSZWYgfTtcbiAgaG9vay5yZW1vdmUgPSByZW1vdmVIb29rUmVmO1xuICBbXCJiZWZvcmVcIiwgXCJlcnJvclwiLCBcImFmdGVyXCIsIFwid3JhcFwiXS5mb3JFYWNoKChraW5kKSA9PiB7XG4gICAgY29uc3QgYXJncyA9IG5hbWUgPyBbc3RhdGUsIGtpbmQsIG5hbWVdIDogW3N0YXRlLCBraW5kXTtcbiAgICBob29rW2tpbmRdID0gaG9vay5hcGlba2luZF0gPSBiaW5kYWJsZShhZGRIb29rLCBudWxsKS5hcHBseShudWxsLCBhcmdzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIFNpbmd1bGFyKCkge1xuICBjb25zdCBzaW5ndWxhckhvb2tOYW1lID0gU3ltYm9sKFwiU2luZ3VsYXJcIik7XG4gIGNvbnN0IHNpbmd1bGFySG9va1N0YXRlID0ge1xuICAgIHJlZ2lzdHJ5OiB7fSxcbiAgfTtcbiAgY29uc3Qgc2luZ3VsYXJIb29rID0gcmVnaXN0ZXIuYmluZChudWxsLCBzaW5ndWxhckhvb2tTdGF0ZSwgc2luZ3VsYXJIb29rTmFtZSk7XG4gIGJpbmRBcGkoc2luZ3VsYXJIb29rLCBzaW5ndWxhckhvb2tTdGF0ZSwgc2luZ3VsYXJIb29rTmFtZSk7XG4gIHJldHVybiBzaW5ndWxhckhvb2s7XG59XG5cbmZ1bmN0aW9uIENvbGxlY3Rpb24oKSB7XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIHJlZ2lzdHJ5OiB7fSxcbiAgfTtcblxuICBjb25zdCBob29rID0gcmVnaXN0ZXIuYmluZChudWxsLCBzdGF0ZSk7XG4gIGJpbmRBcGkoaG9vaywgc3RhdGUpO1xuXG4gIHJldHVybiBob29rO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IFNpbmd1bGFyLCBDb2xsZWN0aW9uIH07XG4iLCAiLy8gcGtnL2Rpc3Qtc3JjL2RlZmF1bHRzLmpzXG5pbXBvcnQgeyBnZXRVc2VyQWdlbnQgfSBmcm9tIFwidW5pdmVyc2FsLXVzZXItYWdlbnRcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL3ZlcnNpb24uanNcbnZhciBWRVJTSU9OID0gXCIwLjAuMC1kZXZlbG9wbWVudFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvZGVmYXVsdHMuanNcbnZhciB1c2VyQWdlbnQgPSBgb2N0b2tpdC1lbmRwb2ludC5qcy8ke1ZFUlNJT059ICR7Z2V0VXNlckFnZW50KCl9YDtcbnZhciBERUZBVUxUUyA9IHtcbiAgbWV0aG9kOiBcIkdFVFwiLFxuICBiYXNlVXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb21cIixcbiAgaGVhZGVyczoge1xuICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzK2pzb25cIixcbiAgICBcInVzZXItYWdlbnRcIjogdXNlckFnZW50XG4gIH0sXG4gIG1lZGlhVHlwZToge1xuICAgIGZvcm1hdDogXCJcIlxuICB9XG59O1xuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC9sb3dlcmNhc2Uta2V5cy5qc1xuZnVuY3Rpb24gbG93ZXJjYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFvYmplY3QpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkucmVkdWNlKChuZXdPYmosIGtleSkgPT4ge1xuICAgIG5ld09ialtrZXkudG9Mb3dlckNhc2UoKV0gPSBvYmplY3Rba2V5XTtcbiAgICByZXR1cm4gbmV3T2JqO1xuICB9LCB7fSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy91dGlsL2lzLXBsYWluLW9iamVjdC5qc1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IHZhbHVlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgY29uc3QgQ3RvciA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgXCJjb25zdHJ1Y3RvclwiKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwoQ3RvcikgPT09IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsKHZhbHVlKTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3V0aWwvbWVyZ2UtZGVlcC5qc1xuZnVuY3Rpb24gbWVyZ2VEZWVwKGRlZmF1bHRzLCBvcHRpb25zKSB7XG4gIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzKTtcbiAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3Qob3B0aW9uc1trZXldKSkge1xuICAgICAgaWYgKCEoa2V5IGluIGRlZmF1bHRzKSkgT2JqZWN0LmFzc2lnbihyZXN1bHQsIHsgW2tleV06IG9wdGlvbnNba2V5XSB9KTtcbiAgICAgIGVsc2UgcmVzdWx0W2tleV0gPSBtZXJnZURlZXAoZGVmYXVsdHNba2V5XSwgb3B0aW9uc1trZXldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmFzc2lnbihyZXN1bHQsIHsgW2tleV06IG9wdGlvbnNba2V5XSB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC9yZW1vdmUtdW5kZWZpbmVkLXByb3BlcnRpZXMuanNcbmZ1bmN0aW9uIHJlbW92ZVVuZGVmaW5lZFByb3BlcnRpZXMob2JqKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChvYmpba2V5XSA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9tZXJnZS5qc1xuZnVuY3Rpb24gbWVyZ2UoZGVmYXVsdHMsIHJvdXRlLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygcm91dGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICBsZXQgW21ldGhvZCwgdXJsXSA9IHJvdXRlLnNwbGl0KFwiIFwiKTtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih1cmwgPyB7IG1ldGhvZCwgdXJsIH0gOiB7IHVybDogbWV0aG9kIH0sIG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCByb3V0ZSk7XG4gIH1cbiAgb3B0aW9ucy5oZWFkZXJzID0gbG93ZXJjYXNlS2V5cyhvcHRpb25zLmhlYWRlcnMpO1xuICByZW1vdmVVbmRlZmluZWRQcm9wZXJ0aWVzKG9wdGlvbnMpO1xuICByZW1vdmVVbmRlZmluZWRQcm9wZXJ0aWVzKG9wdGlvbnMuaGVhZGVycyk7XG4gIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSBtZXJnZURlZXAoZGVmYXVsdHMgfHwge30sIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy51cmwgPT09IFwiL2dyYXBocWxcIikge1xuICAgIGlmIChkZWZhdWx0cyAmJiBkZWZhdWx0cy5tZWRpYVR5cGUucHJldmlld3M/Lmxlbmd0aCkge1xuICAgICAgbWVyZ2VkT3B0aW9ucy5tZWRpYVR5cGUucHJldmlld3MgPSBkZWZhdWx0cy5tZWRpYVR5cGUucHJldmlld3MuZmlsdGVyKFxuICAgICAgICAocHJldmlldykgPT4gIW1lcmdlZE9wdGlvbnMubWVkaWFUeXBlLnByZXZpZXdzLmluY2x1ZGVzKHByZXZpZXcpXG4gICAgICApLmNvbmNhdChtZXJnZWRPcHRpb25zLm1lZGlhVHlwZS5wcmV2aWV3cyk7XG4gICAgfVxuICAgIG1lcmdlZE9wdGlvbnMubWVkaWFUeXBlLnByZXZpZXdzID0gKG1lcmdlZE9wdGlvbnMubWVkaWFUeXBlLnByZXZpZXdzIHx8IFtdKS5tYXAoKHByZXZpZXcpID0+IHByZXZpZXcucmVwbGFjZSgvLXByZXZpZXcvLCBcIlwiKSk7XG4gIH1cbiAgcmV0dXJuIG1lcmdlZE9wdGlvbnM7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy91dGlsL2FkZC1xdWVyeS1wYXJhbWV0ZXJzLmpzXG5mdW5jdGlvbiBhZGRRdWVyeVBhcmFtZXRlcnModXJsLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHNlcGFyYXRvciA9IC9cXD8vLnRlc3QodXJsKSA/IFwiJlwiIDogXCI/XCI7XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocGFyYW1ldGVycyk7XG4gIGlmIChuYW1lcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHJldHVybiB1cmwgKyBzZXBhcmF0b3IgKyBuYW1lcy5tYXAoKG5hbWUpID0+IHtcbiAgICBpZiAobmFtZSA9PT0gXCJxXCIpIHtcbiAgICAgIHJldHVybiBcInE9XCIgKyBwYXJhbWV0ZXJzLnEuc3BsaXQoXCIrXCIpLm1hcChlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oXCIrXCIpO1xuICAgIH1cbiAgICByZXR1cm4gYCR7bmFtZX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1ldGVyc1tuYW1lXSl9YDtcbiAgfSkuam9pbihcIiZcIik7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy91dGlsL2V4dHJhY3QtdXJsLXZhcmlhYmxlLW5hbWVzLmpzXG52YXIgdXJsVmFyaWFibGVSZWdleCA9IC9cXHtbXnt9fV0rXFx9L2c7XG5mdW5jdGlvbiByZW1vdmVOb25DaGFycyh2YXJpYWJsZU5hbWUpIHtcbiAgcmV0dXJuIHZhcmlhYmxlTmFtZS5yZXBsYWNlKC8oPzpeXFxXKyl8KD86KD88IVxcVylcXFcrJCkvZywgXCJcIikuc3BsaXQoLywvKTtcbn1cbmZ1bmN0aW9uIGV4dHJhY3RVcmxWYXJpYWJsZU5hbWVzKHVybCkge1xuICBjb25zdCBtYXRjaGVzID0gdXJsLm1hdGNoKHVybFZhcmlhYmxlUmVnZXgpO1xuICBpZiAoIW1hdGNoZXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIG1hdGNoZXMubWFwKHJlbW92ZU5vbkNoYXJzKS5yZWR1Y2UoKGEsIGIpID0+IGEuY29uY2F0KGIpLCBbXSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy91dGlsL29taXQuanNcbmZ1bmN0aW9uIG9taXQob2JqZWN0LCBrZXlzVG9PbWl0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IHsgX19wcm90b19fOiBudWxsIH07XG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iamVjdCkpIHtcbiAgICBpZiAoa2V5c1RvT21pdC5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG9iamVjdFtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC91cmwtdGVtcGxhdGUuanNcbmZ1bmN0aW9uIGVuY29kZVJlc2VydmVkKHN0cikge1xuICByZXR1cm4gc3RyLnNwbGl0KC8oJVswLTlBLUZhLWZdezJ9KS9nKS5tYXAoZnVuY3Rpb24ocGFydCkge1xuICAgIGlmICghLyVbMC05QS1GYS1mXS8udGVzdChwYXJ0KSkge1xuICAgICAgcGFydCA9IGVuY29kZVVSSShwYXJ0KS5yZXBsYWNlKC8lNUIvZywgXCJbXCIpLnJlcGxhY2UoLyU1RC9nLCBcIl1cIik7XG4gICAgfVxuICAgIHJldHVybiBwYXJ0O1xuICB9KS5qb2luKFwiXCIpO1xufVxuZnVuY3Rpb24gZW5jb2RlVW5yZXNlcnZlZChzdHIpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoL1shJygpKl0vZywgZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBcIiVcIiArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWUsIGtleSkge1xuICB2YWx1ZSA9IG9wZXJhdG9yID09PSBcIitcIiB8fCBvcGVyYXRvciA9PT0gXCIjXCIgPyBlbmNvZGVSZXNlcnZlZCh2YWx1ZSkgOiBlbmNvZGVVbnJlc2VydmVkKHZhbHVlKTtcbiAgaWYgKGtleSkge1xuICAgIHJldHVybiBlbmNvZGVVbnJlc2VydmVkKGtleSkgKyBcIj1cIiArIHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdm9pZCAwICYmIHZhbHVlICE9PSBudWxsO1xufVxuZnVuY3Rpb24gaXNLZXlPcGVyYXRvcihvcGVyYXRvcikge1xuICByZXR1cm4gb3BlcmF0b3IgPT09IFwiO1wiIHx8IG9wZXJhdG9yID09PSBcIiZcIiB8fCBvcGVyYXRvciA9PT0gXCI/XCI7XG59XG5mdW5jdGlvbiBnZXRWYWx1ZXMoY29udGV4dCwgb3BlcmF0b3IsIGtleSwgbW9kaWZpZXIpIHtcbiAgdmFyIHZhbHVlID0gY29udGV4dFtrZXldLCByZXN1bHQgPSBbXTtcbiAgaWYgKGlzRGVmaW5lZCh2YWx1ZSkgJiYgdmFsdWUgIT09IFwiXCIpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwiYmlnaW50XCIgfHwgdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgaWYgKG1vZGlmaWVyICYmIG1vZGlmaWVyICE9PSBcIipcIikge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCBwYXJzZUludChtb2RpZmllciwgMTApKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICBlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWUsIGlzS2V5T3BlcmF0b3Iob3BlcmF0b3IpID8ga2V5IDogXCJcIilcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUuZmlsdGVyKGlzRGVmaW5lZCkuZm9yRWFjaChmdW5jdGlvbih2YWx1ZTIpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICAgICAgICBlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWUyLCBpc0tleU9wZXJhdG9yKG9wZXJhdG9yKSA/IGtleSA6IFwiXCIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICAgIGlmIChpc0RlZmluZWQodmFsdWVba10pKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZVtrXSwgaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0bXAgPSBbXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUuZmlsdGVyKGlzRGVmaW5lZCkuZm9yRWFjaChmdW5jdGlvbih2YWx1ZTIpIHtcbiAgICAgICAgICAgIHRtcC5wdXNoKGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZTIpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlW2tdKSkge1xuICAgICAgICAgICAgICB0bXAucHVzaChlbmNvZGVVbnJlc2VydmVkKGspKTtcbiAgICAgICAgICAgICAgdG1wLnB1c2goZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlW2tdLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNLZXlPcGVyYXRvcihvcGVyYXRvcikpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVVbnJlc2VydmVkKGtleSkgKyBcIj1cIiArIHRtcC5qb2luKFwiLFwiKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodG1wLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHRtcC5qb2luKFwiLFwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKG9wZXJhdG9yID09PSBcIjtcIikge1xuICAgICAgaWYgKGlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlVW5yZXNlcnZlZChrZXkpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIlwiICYmIChvcGVyYXRvciA9PT0gXCImXCIgfHwgb3BlcmF0b3IgPT09IFwiP1wiKSkge1xuICAgICAgcmVzdWx0LnB1c2goZW5jb2RlVW5yZXNlcnZlZChrZXkpICsgXCI9XCIpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIHJlc3VsdC5wdXNoKFwiXCIpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gcGFyc2VVcmwodGVtcGxhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBleHBhbmQ6IGV4cGFuZC5iaW5kKG51bGwsIHRlbXBsYXRlKVxuICB9O1xufVxuZnVuY3Rpb24gZXhwYW5kKHRlbXBsYXRlLCBjb250ZXh0KSB7XG4gIHZhciBvcGVyYXRvcnMgPSBbXCIrXCIsIFwiI1wiLCBcIi5cIiwgXCIvXCIsIFwiO1wiLCBcIj9cIiwgXCImXCJdO1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoXG4gICAgL1xceyhbXlxce1xcfV0rKVxcfXwoW15cXHtcXH1dKykvZyxcbiAgICBmdW5jdGlvbihfLCBleHByZXNzaW9uLCBsaXRlcmFsKSB7XG4gICAgICBpZiAoZXhwcmVzc2lvbikge1xuICAgICAgICBsZXQgb3BlcmF0b3IgPSBcIlwiO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgaWYgKG9wZXJhdG9ycy5pbmRleE9mKGV4cHJlc3Npb24uY2hhckF0KDApKSAhPT0gLTEpIHtcbiAgICAgICAgICBvcGVyYXRvciA9IGV4cHJlc3Npb24uY2hhckF0KDApO1xuICAgICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uLnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICBleHByZXNzaW9uLnNwbGl0KC8sL2cpLmZvckVhY2goZnVuY3Rpb24odmFyaWFibGUpIHtcbiAgICAgICAgICB2YXIgdG1wID0gLyhbXjpcXCpdKikoPzo6KFxcZCspfChcXCopKT8vLmV4ZWModmFyaWFibGUpO1xuICAgICAgICAgIHZhbHVlcy5wdXNoKGdldFZhbHVlcyhjb250ZXh0LCBvcGVyYXRvciwgdG1wWzFdLCB0bXBbMl0gfHwgdG1wWzNdKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3BlcmF0b3IgJiYgb3BlcmF0b3IgIT09IFwiK1wiKSB7XG4gICAgICAgICAgdmFyIHNlcGFyYXRvciA9IFwiLFwiO1xuICAgICAgICAgIGlmIChvcGVyYXRvciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHNlcGFyYXRvciA9IFwiJlwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgIT09IFwiI1wiKSB7XG4gICAgICAgICAgICBzZXBhcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICh2YWx1ZXMubGVuZ3RoICE9PSAwID8gb3BlcmF0b3IgOiBcIlwiKSArIHZhbHVlcy5qb2luKHNlcGFyYXRvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlcy5qb2luKFwiLFwiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVuY29kZVJlc2VydmVkKGxpdGVyYWwpO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbiAgaWYgKHRlbXBsYXRlID09PSBcIi9cIikge1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgvXFwvJC8sIFwiXCIpO1xuICB9XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9wYXJzZS5qc1xuZnVuY3Rpb24gcGFyc2Uob3B0aW9ucykge1xuICBsZXQgbWV0aG9kID0gb3B0aW9ucy5tZXRob2QudG9VcHBlckNhc2UoKTtcbiAgbGV0IHVybCA9IChvcHRpb25zLnVybCB8fCBcIi9cIikucmVwbGFjZSgvOihbYS16XVxcdyspL2csIFwieyQxfVwiKTtcbiAgbGV0IGhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLmhlYWRlcnMpO1xuICBsZXQgYm9keTtcbiAgbGV0IHBhcmFtZXRlcnMgPSBvbWl0KG9wdGlvbnMsIFtcbiAgICBcIm1ldGhvZFwiLFxuICAgIFwiYmFzZVVybFwiLFxuICAgIFwidXJsXCIsXG4gICAgXCJoZWFkZXJzXCIsXG4gICAgXCJyZXF1ZXN0XCIsXG4gICAgXCJtZWRpYVR5cGVcIlxuICBdKTtcbiAgY29uc3QgdXJsVmFyaWFibGVOYW1lcyA9IGV4dHJhY3RVcmxWYXJpYWJsZU5hbWVzKHVybCk7XG4gIHVybCA9IHBhcnNlVXJsKHVybCkuZXhwYW5kKHBhcmFtZXRlcnMpO1xuICBpZiAoIS9eaHR0cC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gb3B0aW9ucy5iYXNlVXJsICsgdXJsO1xuICB9XG4gIGNvbnN0IG9taXR0ZWRQYXJhbWV0ZXJzID0gT2JqZWN0LmtleXMob3B0aW9ucykuZmlsdGVyKChvcHRpb24pID0+IHVybFZhcmlhYmxlTmFtZXMuaW5jbHVkZXMob3B0aW9uKSkuY29uY2F0KFwiYmFzZVVybFwiKTtcbiAgY29uc3QgcmVtYWluaW5nUGFyYW1ldGVycyA9IG9taXQocGFyYW1ldGVycywgb21pdHRlZFBhcmFtZXRlcnMpO1xuICBjb25zdCBpc0JpbmFyeVJlcXVlc3QgPSAvYXBwbGljYXRpb25cXC9vY3RldC1zdHJlYW0vaS50ZXN0KGhlYWRlcnMuYWNjZXB0KTtcbiAgaWYgKCFpc0JpbmFyeVJlcXVlc3QpIHtcbiAgICBpZiAob3B0aW9ucy5tZWRpYVR5cGUuZm9ybWF0KSB7XG4gICAgICBoZWFkZXJzLmFjY2VwdCA9IGhlYWRlcnMuYWNjZXB0LnNwbGl0KC8sLykubWFwKFxuICAgICAgICAoZm9ybWF0KSA9PiBmb3JtYXQucmVwbGFjZShcbiAgICAgICAgICAvYXBwbGljYXRpb25cXC92bmQoXFwuXFx3KykoXFwudjMpPyhcXC5cXHcrKT8oXFwranNvbik/JC8sXG4gICAgICAgICAgYGFwcGxpY2F0aW9uL3ZuZCQxJDIuJHtvcHRpb25zLm1lZGlhVHlwZS5mb3JtYXR9YFxuICAgICAgICApXG4gICAgICApLmpvaW4oXCIsXCIpO1xuICAgIH1cbiAgICBpZiAodXJsLmVuZHNXaXRoKFwiL2dyYXBocWxcIikpIHtcbiAgICAgIGlmIChvcHRpb25zLm1lZGlhVHlwZS5wcmV2aWV3cz8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHByZXZpZXdzRnJvbUFjY2VwdEhlYWRlciA9IGhlYWRlcnMuYWNjZXB0Lm1hdGNoKC8oPzwhW1xcdy1dKVtcXHctXSsoPz0tcHJldmlldykvZykgfHwgW107XG4gICAgICAgIGhlYWRlcnMuYWNjZXB0ID0gcHJldmlld3NGcm9tQWNjZXB0SGVhZGVyLmNvbmNhdChvcHRpb25zLm1lZGlhVHlwZS5wcmV2aWV3cykubWFwKChwcmV2aWV3KSA9PiB7XG4gICAgICAgICAgY29uc3QgZm9ybWF0ID0gb3B0aW9ucy5tZWRpYVR5cGUuZm9ybWF0ID8gYC4ke29wdGlvbnMubWVkaWFUeXBlLmZvcm1hdH1gIDogXCIranNvblwiO1xuICAgICAgICAgIHJldHVybiBgYXBwbGljYXRpb24vdm5kLmdpdGh1Yi4ke3ByZXZpZXd9LXByZXZpZXcke2Zvcm1hdH1gO1xuICAgICAgICB9KS5qb2luKFwiLFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKFtcIkdFVFwiLCBcIkhFQURcIl0uaW5jbHVkZXMobWV0aG9kKSkge1xuICAgIHVybCA9IGFkZFF1ZXJ5UGFyYW1ldGVycyh1cmwsIHJlbWFpbmluZ1BhcmFtZXRlcnMpO1xuICB9IGVsc2Uge1xuICAgIGlmIChcImRhdGFcIiBpbiByZW1haW5pbmdQYXJhbWV0ZXJzKSB7XG4gICAgICBib2R5ID0gcmVtYWluaW5nUGFyYW1ldGVycy5kYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMocmVtYWluaW5nUGFyYW1ldGVycykubGVuZ3RoKSB7XG4gICAgICAgIGJvZHkgPSByZW1haW5pbmdQYXJhbWV0ZXJzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIWhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gJiYgdHlwZW9mIGJvZHkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBoZWFkZXJzW1wiY29udGVudC10eXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCI7XG4gIH1cbiAgaWYgKFtcIlBBVENIXCIsIFwiUFVUXCJdLmluY2x1ZGVzKG1ldGhvZCkgJiYgdHlwZW9mIGJvZHkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBib2R5ID0gXCJcIjtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICB7IG1ldGhvZCwgdXJsLCBoZWFkZXJzIH0sXG4gICAgdHlwZW9mIGJvZHkgIT09IFwidW5kZWZpbmVkXCIgPyB7IGJvZHkgfSA6IG51bGwsXG4gICAgb3B0aW9ucy5yZXF1ZXN0ID8geyByZXF1ZXN0OiBvcHRpb25zLnJlcXVlc3QgfSA6IG51bGxcbiAgKTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2VuZHBvaW50LXdpdGgtZGVmYXVsdHMuanNcbmZ1bmN0aW9uIGVuZHBvaW50V2l0aERlZmF1bHRzKGRlZmF1bHRzLCByb3V0ZSwgb3B0aW9ucykge1xuICByZXR1cm4gcGFyc2UobWVyZ2UoZGVmYXVsdHMsIHJvdXRlLCBvcHRpb25zKSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy93aXRoLWRlZmF1bHRzLmpzXG5mdW5jdGlvbiB3aXRoRGVmYXVsdHMob2xkRGVmYXVsdHMsIG5ld0RlZmF1bHRzKSB7XG4gIGNvbnN0IERFRkFVTFRTMiA9IG1lcmdlKG9sZERlZmF1bHRzLCBuZXdEZWZhdWx0cyk7XG4gIGNvbnN0IGVuZHBvaW50MiA9IGVuZHBvaW50V2l0aERlZmF1bHRzLmJpbmQobnVsbCwgREVGQVVMVFMyKTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZW5kcG9pbnQyLCB7XG4gICAgREVGQVVMVFM6IERFRkFVTFRTMixcbiAgICBkZWZhdWx0czogd2l0aERlZmF1bHRzLmJpbmQobnVsbCwgREVGQVVMVFMyKSxcbiAgICBtZXJnZTogbWVyZ2UuYmluZChudWxsLCBERUZBVUxUUzIpLFxuICAgIHBhcnNlXG4gIH0pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbnZhciBlbmRwb2ludCA9IHdpdGhEZWZhdWx0cyhudWxsLCBERUZBVUxUUyk7XG5leHBvcnQge1xuICBlbmRwb2ludFxufTtcbiIsICIvLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbmltcG9ydCB7IGVuZHBvaW50IH0gZnJvbSBcIkBvY3Rva2l0L2VuZHBvaW50XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9kZWZhdWx0cy5qc1xuaW1wb3J0IHsgZ2V0VXNlckFnZW50IH0gZnJvbSBcInVuaXZlcnNhbC11c2VyLWFnZW50XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy92ZXJzaW9uLmpzXG52YXIgVkVSU0lPTiA9IFwiMTAuMC44XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9kZWZhdWx0cy5qc1xudmFyIGRlZmF1bHRzX2RlZmF1bHQgPSB7XG4gIGhlYWRlcnM6IHtcbiAgICBcInVzZXItYWdlbnRcIjogYG9jdG9raXQtcmVxdWVzdC5qcy8ke1ZFUlNJT059ICR7Z2V0VXNlckFnZW50KCl9YFxuICB9XG59O1xuXG4vLyBwa2cvZGlzdC1zcmMvZmV0Y2gtd3JhcHBlci5qc1xuaW1wb3J0IHsgc2FmZVBhcnNlIH0gZnJvbSBcImZhc3QtY29udGVudC10eXBlLXBhcnNlXCI7XG5pbXBvcnQgeyBKU09OUGFyc2UsIEpTT05TdHJpbmdpZnkgfSBmcm9tIFwianNvbi13aXRoLWJpZ2ludFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvaXMtcGxhaW4tb2JqZWN0LmpzXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgdmFsdWUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHJldHVybiB0cnVlO1xuICBjb25zdCBDdG9yID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCBcImNvbnN0cnVjdG9yXCIpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJiBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbChDdG9yKSA9PT0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwodmFsdWUpO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvZmV0Y2gtd3JhcHBlci5qc1xuaW1wb3J0IHsgUmVxdWVzdEVycm9yIH0gZnJvbSBcIkBvY3Rva2l0L3JlcXVlc3QtZXJyb3JcIjtcbnZhciBub29wID0gKCkgPT4gXCJcIjtcbmFzeW5jIGZ1bmN0aW9uIGZldGNoV3JhcHBlcihyZXF1ZXN0T3B0aW9ucykge1xuICBjb25zdCBmZXRjaCA9IHJlcXVlc3RPcHRpb25zLnJlcXVlc3Q/LmZldGNoIHx8IGdsb2JhbFRoaXMuZmV0Y2g7XG4gIGlmICghZmV0Y2gpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcImZldGNoIGlzIG5vdCBzZXQuIFBsZWFzZSBwYXNzIGEgZmV0Y2ggaW1wbGVtZW50YXRpb24gYXMgbmV3IE9jdG9raXQoeyByZXF1ZXN0OiB7IGZldGNoIH19KS4gTGVhcm4gbW9yZSBhdCBodHRwczovL2dpdGh1Yi5jb20vb2N0b2tpdC9vY3Rva2l0LmpzLyNmZXRjaC1taXNzaW5nXCJcbiAgICApO1xuICB9XG4gIGNvbnN0IGxvZyA9IHJlcXVlc3RPcHRpb25zLnJlcXVlc3Q/LmxvZyB8fCBjb25zb2xlO1xuICBjb25zdCBwYXJzZVN1Y2Nlc3NSZXNwb25zZUJvZHkgPSByZXF1ZXN0T3B0aW9ucy5yZXF1ZXN0Py5wYXJzZVN1Y2Nlc3NSZXNwb25zZUJvZHkgIT09IGZhbHNlO1xuICBjb25zdCBib2R5ID0gaXNQbGFpbk9iamVjdChyZXF1ZXN0T3B0aW9ucy5ib2R5KSB8fCBBcnJheS5pc0FycmF5KHJlcXVlc3RPcHRpb25zLmJvZHkpID8gSlNPTlN0cmluZ2lmeShyZXF1ZXN0T3B0aW9ucy5ib2R5KSA6IHJlcXVlc3RPcHRpb25zLmJvZHk7XG4gIGNvbnN0IHJlcXVlc3RIZWFkZXJzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIE9iamVjdC5lbnRyaWVzKHJlcXVlc3RPcHRpb25zLmhlYWRlcnMpLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gW1xuICAgICAgbmFtZSxcbiAgICAgIFN0cmluZyh2YWx1ZSlcbiAgICBdKVxuICApO1xuICBsZXQgZmV0Y2hSZXNwb25zZTtcbiAgdHJ5IHtcbiAgICBmZXRjaFJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdE9wdGlvbnMudXJsLCB7XG4gICAgICBtZXRob2Q6IHJlcXVlc3RPcHRpb25zLm1ldGhvZCxcbiAgICAgIGJvZHksXG4gICAgICByZWRpcmVjdDogcmVxdWVzdE9wdGlvbnMucmVxdWVzdD8ucmVkaXJlY3QsXG4gICAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVycyxcbiAgICAgIHNpZ25hbDogcmVxdWVzdE9wdGlvbnMucmVxdWVzdD8uc2lnbmFsLFxuICAgICAgLy8gZHVwbGV4IG11c3QgYmUgc2V0IGlmIHJlcXVlc3QuYm9keSBpcyBSZWFkYWJsZVN0cmVhbSBvciBBc3luYyBJdGVyYWJsZXMuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2RvbS1yZXF1ZXN0aW5pdC1kdXBsZXguXG4gICAgICAuLi5yZXF1ZXN0T3B0aW9ucy5ib2R5ICYmIHsgZHVwbGV4OiBcImhhbGZcIiB9XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbGV0IG1lc3NhZ2UgPSBcIlVua25vd24gRXJyb3JcIjtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgaWYgKGVycm9yLm5hbWUgPT09IFwiQWJvcnRFcnJvclwiKSB7XG4gICAgICAgIGVycm9yLnN0YXR1cyA9IDUwMDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgIGlmIChlcnJvci5uYW1lID09PSBcIlR5cGVFcnJvclwiICYmIFwiY2F1c2VcIiBpbiBlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IuY2F1c2UgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5jYXVzZS5tZXNzYWdlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlcnJvci5jYXVzZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5jYXVzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0RXJyb3IgPSBuZXcgUmVxdWVzdEVycm9yKG1lc3NhZ2UsIDUwMCwge1xuICAgICAgcmVxdWVzdDogcmVxdWVzdE9wdGlvbnNcbiAgICB9KTtcbiAgICByZXF1ZXN0RXJyb3IuY2F1c2UgPSBlcnJvcjtcbiAgICB0aHJvdyByZXF1ZXN0RXJyb3I7XG4gIH1cbiAgY29uc3Qgc3RhdHVzID0gZmV0Y2hSZXNwb25zZS5zdGF0dXM7XG4gIGNvbnN0IHVybCA9IGZldGNoUmVzcG9uc2UudXJsO1xuICBjb25zdCByZXNwb25zZUhlYWRlcnMgPSB7fTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgZmV0Y2hSZXNwb25zZS5oZWFkZXJzKSB7XG4gICAgcmVzcG9uc2VIZWFkZXJzW2tleV0gPSB2YWx1ZTtcbiAgfVxuICBjb25zdCBvY3Rva2l0UmVzcG9uc2UgPSB7XG4gICAgdXJsLFxuICAgIHN0YXR1cyxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgZGF0YTogXCJcIlxuICB9O1xuICBpZiAoXCJkZXByZWNhdGlvblwiIGluIHJlc3BvbnNlSGVhZGVycykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSByZXNwb25zZUhlYWRlcnMubGluayAmJiByZXNwb25zZUhlYWRlcnMubGluay5tYXRjaCgvPChbXjw+XSspPjsgcmVsPVwiZGVwcmVjYXRpb25cIi8pO1xuICAgIGNvbnN0IGRlcHJlY2F0aW9uTGluayA9IG1hdGNoZXMgJiYgbWF0Y2hlcy5wb3AoKTtcbiAgICBsb2cud2FybihcbiAgICAgIGBbQG9jdG9raXQvcmVxdWVzdF0gXCIke3JlcXVlc3RPcHRpb25zLm1ldGhvZH0gJHtyZXF1ZXN0T3B0aW9ucy51cmx9XCIgaXMgZGVwcmVjYXRlZC4gSXQgaXMgc2NoZWR1bGVkIHRvIGJlIHJlbW92ZWQgb24gJHtyZXNwb25zZUhlYWRlcnMuc3Vuc2V0fSR7ZGVwcmVjYXRpb25MaW5rID8gYC4gU2VlICR7ZGVwcmVjYXRpb25MaW5rfWAgOiBcIlwifWBcbiAgICApO1xuICB9XG4gIGlmIChzdGF0dXMgPT09IDIwNCB8fCBzdGF0dXMgPT09IDIwNSkge1xuICAgIHJldHVybiBvY3Rva2l0UmVzcG9uc2U7XG4gIH1cbiAgaWYgKHJlcXVlc3RPcHRpb25zLm1ldGhvZCA9PT0gXCJIRUFEXCIpIHtcbiAgICBpZiAoc3RhdHVzIDwgNDAwKSB7XG4gICAgICByZXR1cm4gb2N0b2tpdFJlc3BvbnNlO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKGZldGNoUmVzcG9uc2Uuc3RhdHVzVGV4dCwgc3RhdHVzLCB7XG4gICAgICByZXNwb25zZTogb2N0b2tpdFJlc3BvbnNlLFxuICAgICAgcmVxdWVzdDogcmVxdWVzdE9wdGlvbnNcbiAgICB9KTtcbiAgfVxuICBpZiAoc3RhdHVzID09PSAzMDQpIHtcbiAgICBvY3Rva2l0UmVzcG9uc2UuZGF0YSA9IGF3YWl0IGdldFJlc3BvbnNlRGF0YShmZXRjaFJlc3BvbnNlKTtcbiAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKFwiTm90IG1vZGlmaWVkXCIsIHN0YXR1cywge1xuICAgICAgcmVzcG9uc2U6IG9jdG9raXRSZXNwb25zZSxcbiAgICAgIHJlcXVlc3Q6IHJlcXVlc3RPcHRpb25zXG4gICAgfSk7XG4gIH1cbiAgaWYgKHN0YXR1cyA+PSA0MDApIHtcbiAgICBvY3Rva2l0UmVzcG9uc2UuZGF0YSA9IGF3YWl0IGdldFJlc3BvbnNlRGF0YShmZXRjaFJlc3BvbnNlKTtcbiAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKHRvRXJyb3JNZXNzYWdlKG9jdG9raXRSZXNwb25zZS5kYXRhKSwgc3RhdHVzLCB7XG4gICAgICByZXNwb25zZTogb2N0b2tpdFJlc3BvbnNlLFxuICAgICAgcmVxdWVzdDogcmVxdWVzdE9wdGlvbnNcbiAgICB9KTtcbiAgfVxuICBvY3Rva2l0UmVzcG9uc2UuZGF0YSA9IHBhcnNlU3VjY2Vzc1Jlc3BvbnNlQm9keSA/IGF3YWl0IGdldFJlc3BvbnNlRGF0YShmZXRjaFJlc3BvbnNlKSA6IGZldGNoUmVzcG9uc2UuYm9keTtcbiAgcmV0dXJuIG9jdG9raXRSZXNwb25zZTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGdldFJlc3BvbnNlRGF0YShyZXNwb25zZSkge1xuICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICBpZiAoIWNvbnRlbnRUeXBlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKS5jYXRjaChub29wKTtcbiAgfVxuICBjb25zdCBtaW1ldHlwZSA9IHNhZmVQYXJzZShjb250ZW50VHlwZSk7XG4gIGlmIChpc0pTT05SZXNwb25zZShtaW1ldHlwZSkpIHtcbiAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgdHJ5IHtcbiAgICAgIHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICByZXR1cm4gSlNPTlBhcnNlKHRleHQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKG1pbWV0eXBlLnR5cGUuc3RhcnRzV2l0aChcInRleHQvXCIpIHx8IG1pbWV0eXBlLnBhcmFtZXRlcnMuY2hhcnNldD8udG9Mb3dlckNhc2UoKSA9PT0gXCJ1dGYtOFwiKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKS5jYXRjaChub29wKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKS5jYXRjaChcbiAgICAgIC8qIHY4IGlnbm9yZSBuZXh0IC0tIEBwcmVzZXJ2ZSAqL1xuICAgICAgKCkgPT4gbmV3IEFycmF5QnVmZmVyKDApXG4gICAgKTtcbiAgfVxufVxuZnVuY3Rpb24gaXNKU09OUmVzcG9uc2UobWltZXR5cGUpIHtcbiAgcmV0dXJuIG1pbWV0eXBlLnR5cGUgPT09IFwiYXBwbGljYXRpb24vanNvblwiIHx8IG1pbWV0eXBlLnR5cGUgPT09IFwiYXBwbGljYXRpb24vc2NpbStqc29uXCI7XG59XG5mdW5jdGlvbiB0b0Vycm9yTWVzc2FnZShkYXRhKSB7XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gXCJVbmtub3duIGVycm9yXCI7XG4gIH1cbiAgaWYgKFwibWVzc2FnZVwiIGluIGRhdGEpIHtcbiAgICBjb25zdCBzdWZmaXggPSBcImRvY3VtZW50YXRpb25fdXJsXCIgaW4gZGF0YSA/IGAgLSAke2RhdGEuZG9jdW1lbnRhdGlvbl91cmx9YCA6IFwiXCI7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGF0YS5lcnJvcnMpID8gYCR7ZGF0YS5tZXNzYWdlfTogJHtkYXRhLmVycm9ycy5tYXAoKHYpID0+IEpTT04uc3RyaW5naWZ5KHYpKS5qb2luKFwiLCBcIil9JHtzdWZmaXh9YCA6IGAke2RhdGEubWVzc2FnZX0ke3N1ZmZpeH1gO1xuICB9XG4gIHJldHVybiBgVW5rbm93biBlcnJvcjogJHtKU09OLnN0cmluZ2lmeShkYXRhKX1gO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvd2l0aC1kZWZhdWx0cy5qc1xuZnVuY3Rpb24gd2l0aERlZmF1bHRzKG9sZEVuZHBvaW50LCBuZXdEZWZhdWx0cykge1xuICBjb25zdCBlbmRwb2ludDIgPSBvbGRFbmRwb2ludC5kZWZhdWx0cyhuZXdEZWZhdWx0cyk7XG4gIGNvbnN0IG5ld0FwaSA9IGZ1bmN0aW9uKHJvdXRlLCBwYXJhbWV0ZXJzKSB7XG4gICAgY29uc3QgZW5kcG9pbnRPcHRpb25zID0gZW5kcG9pbnQyLm1lcmdlKHJvdXRlLCBwYXJhbWV0ZXJzKTtcbiAgICBpZiAoIWVuZHBvaW50T3B0aW9ucy5yZXF1ZXN0IHx8ICFlbmRwb2ludE9wdGlvbnMucmVxdWVzdC5ob29rKSB7XG4gICAgICByZXR1cm4gZmV0Y2hXcmFwcGVyKGVuZHBvaW50Mi5wYXJzZShlbmRwb2ludE9wdGlvbnMpKTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDIgPSAocm91dGUyLCBwYXJhbWV0ZXJzMikgPT4ge1xuICAgICAgcmV0dXJuIGZldGNoV3JhcHBlcihcbiAgICAgICAgZW5kcG9pbnQyLnBhcnNlKGVuZHBvaW50Mi5tZXJnZShyb3V0ZTIsIHBhcmFtZXRlcnMyKSlcbiAgICAgICk7XG4gICAgfTtcbiAgICBPYmplY3QuYXNzaWduKHJlcXVlc3QyLCB7XG4gICAgICBlbmRwb2ludDogZW5kcG9pbnQyLFxuICAgICAgZGVmYXVsdHM6IHdpdGhEZWZhdWx0cy5iaW5kKG51bGwsIGVuZHBvaW50MilcbiAgICB9KTtcbiAgICByZXR1cm4gZW5kcG9pbnRPcHRpb25zLnJlcXVlc3QuaG9vayhyZXF1ZXN0MiwgZW5kcG9pbnRPcHRpb25zKTtcbiAgfTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3QXBpLCB7XG4gICAgZW5kcG9pbnQ6IGVuZHBvaW50MixcbiAgICBkZWZhdWx0czogd2l0aERlZmF1bHRzLmJpbmQobnVsbCwgZW5kcG9pbnQyKVxuICB9KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG52YXIgcmVxdWVzdCA9IHdpdGhEZWZhdWx0cyhlbmRwb2ludCwgZGVmYXVsdHNfZGVmYXVsdCk7XG5leHBvcnQge1xuICByZXF1ZXN0XG59O1xuLyogdjggaWdub3JlIG5leHQgLS0gQHByZXNlcnZlICovXG4vKiB2OCBpZ25vcmUgZWxzZSAtLSBAcHJlc2VydmUgKi9cbiIsICJjb25zdCBpbnRSZWdleCA9IC9eLT9cXGQrJC87XG5jb25zdCBub2lzZVZhbHVlID0gL14tP1xcZCtuKyQvOyAvLyBOb2lzZSAtIHN0cmluZ3MgdGhhdCBtYXRjaCB0aGUgY3VzdG9tIGZvcm1hdCBiZWZvcmUgYmVpbmcgY29udmVydGVkIHRvIGl0XG5jb25zdCBvcmlnaW5hbFN0cmluZ2lmeSA9IEpTT04uc3RyaW5naWZ5O1xuY29uc3Qgb3JpZ2luYWxQYXJzZSA9IEpTT04ucGFyc2U7XG5jb25zdCBjdXN0b21Gb3JtYXQgPSAvXi0/XFxkK24kLztcblxuY29uc3QgYmlnSW50c1N0cmluZ2lmeSA9IC8oW1xcWzpdKT9cIigtP1xcZCspblwiKCR8KFtcXFxcbl18XFxzKSooXFxzfFtcXFxcbl0pKlssXFx9XFxdXSkvZztcbmNvbnN0IG5vaXNlU3RyaW5naWZ5ID1cbiAgLyhbXFxbOl0pPyhcIi0/XFxkK24rKW4oXCIkfFwiKFtcXFxcbl18XFxzKSooXFxzfFtcXFxcbl0pKlssXFx9XFxdXSkvZztcblxuLyoqXG4gKiBAdHlwZWRlZiB7KHRoaXM6IGFueSwga2V5OiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQsIHZhbHVlOiBhbnkpID0+IGFueX0gUmVwbGFjZXJcbiAqIEB0eXBlZGVmIHsoa2V5OiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQsIHZhbHVlOiBhbnksIGNvbnRleHQ/OiB7IHNvdXJjZTogc3RyaW5nIH0pID0+IGFueX0gUmV2aXZlclxuICovXG5cbi8qKlxuICogQ29udmVydHMgYSBKYXZhU2NyaXB0IHZhbHVlIHRvIGEgSlNPTiBzdHJpbmcuXG4gKlxuICogU3VwcG9ydHMgc2VyaWFsaXphdGlvbiBvZiBCaWdJbnQgdmFsdWVzIHVzaW5nIHR3byBzdHJhdGVnaWVzOlxuICogMS4gQ3VzdG9tIGZvcm1hdCBcIjEyM25cIiBcdTIxOTIgXCIxMjNcIiAodW5pdmVyc2FsIGZhbGxiYWNrKVxuICogMi4gTmF0aXZlIEpTT04ucmF3SlNPTigpIChOb2RlLmpzIDIyKywgZmFzdGVzdCkgd2hlbiBhdmFpbGFibGVcbiAqXG4gKiBBbGwgb3RoZXIgdmFsdWVzIGFyZSBzZXJpYWxpemVkIGV4YWN0bHkgbGlrZSBuYXRpdmUgSlNPTi5zdHJpbmdpZnkoKS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGEgSlNPTiBzdHJpbmcuXG4gKiBAcGFyYW0ge1JlcGxhY2VyIHwgQXJyYXk8c3RyaW5nIHwgbnVtYmVyPiB8IG51bGx9IFtyZXBsYWNlcl1cbiAqICAgQSBmdW5jdGlvbiB0aGF0IGFsdGVycyB0aGUgYmVoYXZpb3Igb2YgdGhlIHN0cmluZ2lmaWNhdGlvbiBwcm9jZXNzLFxuICogICBvciBhbiBhcnJheSBvZiBzdHJpbmdzL251bWJlcnMgdG8gaW5kaWNhdGUgcHJvcGVydGllcyB0byBleGNsdWRlLlxuICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IFtzcGFjZV1cbiAqICAgQSBzdHJpbmcgb3IgbnVtYmVyIHRvIHNwZWNpZnkgaW5kZW50YXRpb24gb3IgcHJldHR5LXByaW50aW5nLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIEpTT04gc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxuICovXG5jb25zdCBKU09OU3RyaW5naWZ5ID0gKHZhbHVlLCByZXBsYWNlciwgc3BhY2UpID0+IHtcbiAgaWYgKFwicmF3SlNPTlwiIGluIEpTT04pIHtcbiAgICByZXR1cm4gb3JpZ2luYWxTdHJpbmdpZnkoXG4gICAgICB2YWx1ZSxcbiAgICAgIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYmlnaW50XCIpIHJldHVybiBKU09OLnJhd0pTT04odmFsdWUudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXBsYWNlciA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gcmVwbGFjZXIoa2V5LCB2YWx1ZSk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVwbGFjZXIpICYmIHJlcGxhY2VyLmluY2x1ZGVzKGtleSkpIHJldHVybiB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9LFxuICAgICAgc3BhY2UsXG4gICAgKTtcbiAgfVxuXG4gIGlmICghdmFsdWUpIHJldHVybiBvcmlnaW5hbFN0cmluZ2lmeSh2YWx1ZSwgcmVwbGFjZXIsIHNwYWNlKTtcblxuICBjb25zdCBjb252ZXJ0ZWRUb0N1c3RvbUpTT04gPSBvcmlnaW5hbFN0cmluZ2lmeShcbiAgICB2YWx1ZSxcbiAgICAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgY29uc3QgaXNOb2lzZSA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiBub2lzZVZhbHVlLnRlc3QodmFsdWUpO1xuXG4gICAgICBpZiAoaXNOb2lzZSkgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkgKyBcIm5cIjsgLy8gTWFyayBub2lzZSB2YWx1ZXMgd2l0aCBhZGRpdGlvbmFsIFwiblwiIHRvIG9mZnNldCB0aGUgZGVsZXRpb24gb2Ygb25lIFwiblwiIGR1cmluZyB0aGUgcHJvY2Vzc2luZ1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJpZ2ludFwiKSByZXR1cm4gdmFsdWUudG9TdHJpbmcoKSArIFwiblwiO1xuXG4gICAgICBpZiAodHlwZW9mIHJlcGxhY2VyID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiByZXBsYWNlcihrZXksIHZhbHVlKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVwbGFjZXIpICYmIHJlcGxhY2VyLmluY2x1ZGVzKGtleSkpIHJldHVybiB2YWx1ZTtcblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgc3BhY2UsXG4gICk7XG4gIGNvbnN0IHByb2Nlc3NlZEpTT04gPSBjb252ZXJ0ZWRUb0N1c3RvbUpTT04ucmVwbGFjZShcbiAgICBiaWdJbnRzU3RyaW5naWZ5LFxuICAgIFwiJDEkMiQzXCIsXG4gICk7IC8vIERlbGV0ZSBvbmUgXCJuXCIgb2ZmIHRoZSBlbmQgb2YgZXZlcnkgQmlnSW50IHZhbHVlXG4gIGNvbnN0IGRlbm9pc2VkSlNPTiA9IHByb2Nlc3NlZEpTT04ucmVwbGFjZShub2lzZVN0cmluZ2lmeSwgXCIkMSQyJDNcIik7IC8vIFJlbW92ZSBvbmUgXCJuXCIgb2ZmIHRoZSBlbmQgb2YgZXZlcnkgbm9pc3kgc3RyaW5nXG5cbiAgcmV0dXJuIGRlbm9pc2VkSlNPTjtcbn07XG5cbmNvbnN0IGZlYXR1cmVDYWNoZSA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBEZXRlY3RzIGlmIHRoZSBjdXJyZW50IEpTT04ucGFyc2UgaW1wbGVtZW50YXRpb24gc3VwcG9ydHMgdGhlIGNvbnRleHQuc291cmNlIGZlYXR1cmUuXG4gKlxuICogVXNlcyB0b1N0cmluZygpIGZpbmdlcnByaW50aW5nIHRvIGNhY2hlIHJlc3VsdHMgYW5kIGF1dG9tYXRpY2FsbHkgZGV0ZWN0IHJ1bnRpbWVcbiAqIHJlcGxhY2VtZW50cyBvZiBKU09OLnBhcnNlIChwb2x5ZmlsbHMsIG1vY2tzLCBldGMuKS5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBjb250ZXh0LnNvdXJjZSBpcyBzdXBwb3J0ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuY29uc3QgaXNDb250ZXh0U291cmNlU3VwcG9ydGVkID0gKCkgPT4ge1xuICBjb25zdCBwYXJzZUZpbmdlcnByaW50ID0gSlNPTi5wYXJzZS50b1N0cmluZygpO1xuXG4gIGlmIChmZWF0dXJlQ2FjaGUuaGFzKHBhcnNlRmluZ2VycHJpbnQpKSB7XG4gICAgcmV0dXJuIGZlYXR1cmVDYWNoZS5nZXQocGFyc2VGaW5nZXJwcmludCk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IEpTT04ucGFyc2UoXG4gICAgICBcIjFcIixcbiAgICAgIChfLCBfXywgY29udGV4dCkgPT4gISFjb250ZXh0Py5zb3VyY2UgJiYgY29udGV4dC5zb3VyY2UgPT09IFwiMVwiLFxuICAgICk7XG4gICAgZmVhdHVyZUNhY2hlLnNldChwYXJzZUZpbmdlcnByaW50LCByZXN1bHQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCB7XG4gICAgZmVhdHVyZUNhY2hlLnNldChwYXJzZUZpbmdlcnByaW50LCBmYWxzZSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbi8qKlxuICogUmV2aXZlciBmdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGN1c3RvbS1mb3JtYXQgQmlnSW50IHN0cmluZ3MgYmFjayB0byBCaWdJbnQgdmFsdWVzLlxuICogQWxzbyBoYW5kbGVzIFwibm9pc2VcIiBzdHJpbmdzIHRoYXQgYWNjaWRlbnRhbGx5IG1hdGNoIHRoZSBCaWdJbnQgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkfSBrZXkgVGhlIG9iamVjdCBrZXkuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBwYXJzZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHRdIFBhcnNlIGNvbnRleHQgKGlmIHN1cHBvcnRlZCBieSBKU09OLnBhcnNlKS5cbiAqIEBwYXJhbSB7UmV2aXZlcn0gW3VzZXJSZXZpdmVyXSBVc2VyJ3MgY3VzdG9tIHJldml2ZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7YW55fSBUaGUgdHJhbnNmb3JtZWQgdmFsdWUuXG4gKi9cbmNvbnN0IGNvbnZlcnRNYXJrZWRCaWdJbnRzUmV2aXZlciA9IChrZXksIHZhbHVlLCBjb250ZXh0LCB1c2VyUmV2aXZlcikgPT4ge1xuICBjb25zdCBpc0N1c3RvbUZvcm1hdEJpZ0ludCA9XG4gICAgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIGN1c3RvbUZvcm1hdC50ZXN0KHZhbHVlKTtcbiAgaWYgKGlzQ3VzdG9tRm9ybWF0QmlnSW50KSByZXR1cm4gQmlnSW50KHZhbHVlLnNsaWNlKDAsIC0xKSk7XG5cbiAgY29uc3QgaXNOb2lzZVZhbHVlID0gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIG5vaXNlVmFsdWUudGVzdCh2YWx1ZSk7XG4gIGlmIChpc05vaXNlVmFsdWUpIHJldHVybiB2YWx1ZS5zbGljZSgwLCAtMSk7XG5cbiAgaWYgKHR5cGVvZiB1c2VyUmV2aXZlciAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdmFsdWU7XG5cbiAgcmV0dXJuIHVzZXJSZXZpdmVyKGtleSwgdmFsdWUsIGNvbnRleHQpO1xufTtcblxuLyoqXG4gKiBGYXN0IEpTT04ucGFyc2UgaW1wbGVtZW50YXRpb24gKH4yeCBmYXN0ZXIgdGhhbiBjbGFzc2ljIGZhbGxiYWNrKS5cbiAqIFVzZXMgSlNPTi5wYXJzZSdzIGNvbnRleHQuc291cmNlIGZlYXR1cmUgdG8gZGV0ZWN0IGludGVnZXJzIGFuZCBjb252ZXJ0XG4gKiBsYXJnZSBudW1iZXJzIGRpcmVjdGx5IHRvIEJpZ0ludCB3aXRob3V0IHN0cmluZyBtYW5pcHVsYXRpb24uXG4gKlxuICogRG9lcyBub3Qgc3VwcG9ydCBsZWdhY3kgY3VzdG9tIGZvcm1hdCBmcm9tIHYxIG9mIHRoaXMgbGlicmFyeS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBKU09OIHN0cmluZyB0byBwYXJzZS5cbiAqIEBwYXJhbSB7UmV2aXZlcn0gW3Jldml2ZXJdIFRyYW5zZm9ybSBmdW5jdGlvbiB0byBhcHBseSB0byBlYWNoIHZhbHVlLlxuICogQHJldHVybnMge2FueX0gUGFyc2VkIEphdmFTY3JpcHQgdmFsdWUuXG4gKi9cbmNvbnN0IEpTT05QYXJzZVYyID0gKHRleHQsIHJldml2ZXIpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UodGV4dCwgKGtleSwgdmFsdWUsIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBpc0JpZ051bWJlciA9XG4gICAgICB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICh2YWx1ZSA+IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IHZhbHVlIDwgTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIpO1xuICAgIGNvbnN0IGlzSW50ID0gY29udGV4dCAmJiBpbnRSZWdleC50ZXN0KGNvbnRleHQuc291cmNlKTtcbiAgICBjb25zdCBpc0JpZ0ludCA9IGlzQmlnTnVtYmVyICYmIGlzSW50O1xuXG4gICAgaWYgKGlzQmlnSW50KSByZXR1cm4gQmlnSW50KGNvbnRleHQuc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgcmV2aXZlciAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdmFsdWU7XG5cbiAgICByZXR1cm4gcmV2aXZlcihrZXksIHZhbHVlLCBjb250ZXh0KTtcbiAgfSk7XG59O1xuXG5jb25zdCBNQVhfSU5UID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIudG9TdHJpbmcoKTtcbmNvbnN0IE1BWF9ESUdJVFMgPSBNQVhfSU5ULmxlbmd0aDtcbmNvbnN0IHN0cmluZ3NPckxhcmdlTnVtYmVycyA9XG4gIC9cIig/OlxcXFwufFteXCJdKSpcInwtPygwfFsxLTldWzAtOV0qKShcXC5bMC05XSspPyhbZUVdWystXT9bMC05XSspPy9nO1xuY29uc3Qgbm9pc2VWYWx1ZVdpdGhRdW90ZXMgPSAvXlwiLT9cXGQrbitcIiQvOyAvLyBOb2lzZSAtIHN0cmluZ3MgdGhhdCBtYXRjaCB0aGUgY3VzdG9tIGZvcm1hdCBiZWZvcmUgYmVpbmcgY29udmVydGVkIHRvIGl0XG5cbi8qKlxuICogQ29udmVydHMgYSBKU09OIHN0cmluZyBpbnRvIGEgSmF2YVNjcmlwdCB2YWx1ZS5cbiAqXG4gKiBTdXBwb3J0cyBwYXJzaW5nIG9mIGxhcmdlIGludGVnZXJzIHVzaW5nIHR3byBzdHJhdGVnaWVzOlxuICogMS4gQ2xhc3NpYyBmYWxsYmFjazogTWFya3MgbGFyZ2UgbnVtYmVycyB3aXRoIFwiMTIzblwiIGZvcm1hdCwgdGhlbiBjb252ZXJ0cyB0byBCaWdJbnRcbiAqIDIuIEZhc3QgcGF0aCAoSlNPTlBhcnNlVjIpOiBVc2VzIGNvbnRleHQuc291cmNlIGZlYXR1cmUgKH4yeCBmYXN0ZXIpIHdoZW4gYXZhaWxhYmxlXG4gKlxuICogQWxsIG90aGVyIEpTT04gdmFsdWVzIGFyZSBwYXJzZWQgZXhhY3RseSBsaWtlIG5hdGl2ZSBKU09OLnBhcnNlKCkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgQSB2YWxpZCBKU09OIHN0cmluZy5cbiAqIEBwYXJhbSB7UmV2aXZlcn0gW3Jldml2ZXJdXG4gKiAgIEEgZnVuY3Rpb24gdGhhdCB0cmFuc2Zvcm1zIHRoZSByZXN1bHRzLiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBmb3IgZWFjaCBtZW1iZXJcbiAqICAgb2YgdGhlIG9iamVjdC4gSWYgYSBtZW1iZXIgY29udGFpbnMgbmVzdGVkIG9iamVjdHMsIHRoZSBuZXN0ZWQgb2JqZWN0cyBhcmVcbiAqICAgdHJhbnNmb3JtZWQgYmVmb3JlIHRoZSBwYXJlbnQgb2JqZWN0IGlzLlxuICogQHJldHVybnMge2FueX0gVGhlIHBhcnNlZCBKYXZhU2NyaXB0IHZhbHVlLlxuICogQHRocm93cyB7U3ludGF4RXJyb3J9IElmIHRleHQgaXMgbm90IHZhbGlkIEpTT04uXG4gKi9cbmNvbnN0IEpTT05QYXJzZSA9ICh0ZXh0LCByZXZpdmVyKSA9PiB7XG4gIGlmICghdGV4dCkgcmV0dXJuIG9yaWdpbmFsUGFyc2UodGV4dCwgcmV2aXZlcik7XG5cbiAgaWYgKGlzQ29udGV4dFNvdXJjZVN1cHBvcnRlZCgpKSByZXR1cm4gSlNPTlBhcnNlVjIodGV4dCwgcmV2aXZlcik7IC8vIFNob3J0Y3V0IHRvIGEgZmFzdGVyICgyeCkgYW5kIHNpbXBsZXIgdmVyc2lvblxuXG4gIC8vIEZpbmQgYW5kIG1hcmsgYmlnIG51bWJlcnMgd2l0aCBcIm5cIlxuICBjb25zdCBzZXJpYWxpemVkRGF0YSA9IHRleHQucmVwbGFjZShcbiAgICBzdHJpbmdzT3JMYXJnZU51bWJlcnMsXG4gICAgKHRleHQsIGRpZ2l0cywgZnJhY3Rpb25hbCwgZXhwb25lbnRpYWwpID0+IHtcbiAgICAgIGNvbnN0IGlzU3RyaW5nID0gdGV4dFswXSA9PT0gJ1wiJztcbiAgICAgIGNvbnN0IGlzTm9pc2UgPSBpc1N0cmluZyAmJiBub2lzZVZhbHVlV2l0aFF1b3Rlcy50ZXN0KHRleHQpO1xuXG4gICAgICBpZiAoaXNOb2lzZSkgcmV0dXJuIHRleHQuc3Vic3RyaW5nKDAsIHRleHQubGVuZ3RoIC0gMSkgKyAnblwiJzsgLy8gTWFyayBub2lzZSB2YWx1ZXMgd2l0aCBhZGRpdGlvbmFsIFwiblwiIHRvIG9mZnNldCB0aGUgZGVsZXRpb24gb2Ygb25lIFwiblwiIGR1cmluZyB0aGUgcHJvY2Vzc2luZ1xuXG4gICAgICBjb25zdCBpc0ZyYWN0aW9uYWxPckV4cG9uZW50aWFsID0gZnJhY3Rpb25hbCB8fCBleHBvbmVudGlhbDtcbiAgICAgIGNvbnN0IGlzTGVzc1RoYW5NYXhTYWZlSW50ID1cbiAgICAgICAgZGlnaXRzICYmXG4gICAgICAgIChkaWdpdHMubGVuZ3RoIDwgTUFYX0RJR0lUUyB8fFxuICAgICAgICAgIChkaWdpdHMubGVuZ3RoID09PSBNQVhfRElHSVRTICYmIGRpZ2l0cyA8PSBNQVhfSU5UKSk7IC8vIFdpdGggYSBmaXhlZCBudW1iZXIgb2YgZGlnaXRzLCB3ZSBjYW4gY29ycmVjdGx5IHVzZSBsZXhpY29ncmFwaGljYWwgY29tcGFyaXNvbiB0byBkbyBhIG51bWVyaWMgY29tcGFyaXNvblxuXG4gICAgICBpZiAoaXNTdHJpbmcgfHwgaXNGcmFjdGlvbmFsT3JFeHBvbmVudGlhbCB8fCBpc0xlc3NUaGFuTWF4U2FmZUludClcbiAgICAgICAgcmV0dXJuIHRleHQ7XG5cbiAgICAgIHJldHVybiAnXCInICsgdGV4dCArICduXCInO1xuICAgIH0sXG4gICk7XG5cbiAgcmV0dXJuIG9yaWdpbmFsUGFyc2Uoc2VyaWFsaXplZERhdGEsIChrZXksIHZhbHVlLCBjb250ZXh0KSA9PlxuICAgIGNvbnZlcnRNYXJrZWRCaWdJbnRzUmV2aXZlcihrZXksIHZhbHVlLCBjb250ZXh0LCByZXZpdmVyKSxcbiAgKTtcbn07XG5cbmV4cG9ydCB7IEpTT05TdHJpbmdpZnksIEpTT05QYXJzZSB9O1xuIiwgImNsYXNzIFJlcXVlc3RFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgbmFtZTtcbiAgLyoqXG4gICAqIGh0dHAgc3RhdHVzIGNvZGVcbiAgICovXG4gIHN0YXR1cztcbiAgLyoqXG4gICAqIFJlcXVlc3Qgb3B0aW9ucyB0aGF0IGxlYWQgdG8gdGhlIGVycm9yLlxuICAgKi9cbiAgcmVxdWVzdDtcbiAgLyoqXG4gICAqIFJlc3BvbnNlIG9iamVjdCBpZiBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxuICAgKi9cbiAgcmVzcG9uc2U7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHN0YXR1c0NvZGUsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihtZXNzYWdlLCB7IGNhdXNlOiBvcHRpb25zLmNhdXNlIH0pO1xuICAgIHRoaXMubmFtZSA9IFwiSHR0cEVycm9yXCI7XG4gICAgdGhpcy5zdGF0dXMgPSBOdW1iZXIucGFyc2VJbnQoc3RhdHVzQ29kZSk7XG4gICAgaWYgKE51bWJlci5pc05hTih0aGlzLnN0YXR1cykpIHtcbiAgICAgIHRoaXMuc3RhdHVzID0gMDtcbiAgICB9XG4gICAgLyogdjggaWdub3JlIGVsc2UgLS0gQHByZXNlcnZlIC0tIEJ1ZyB3aXRoIHZpdGVzdCBjb3ZlcmFnZSB3aGVyZSBpdCBzZWVzIGFuIGVsc2UgYnJhbmNoIHRoYXQgZG9lc24ndCBleGlzdCAqL1xuICAgIGlmIChcInJlc3BvbnNlXCIgaW4gb3B0aW9ucykge1xuICAgICAgdGhpcy5yZXNwb25zZSA9IG9wdGlvbnMucmVzcG9uc2U7XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3RDb3B5ID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucy5yZXF1ZXN0KTtcbiAgICBpZiAob3B0aW9ucy5yZXF1ZXN0LmhlYWRlcnMuYXV0aG9yaXphdGlvbikge1xuICAgICAgcmVxdWVzdENvcHkuaGVhZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMucmVxdWVzdC5oZWFkZXJzLCB7XG4gICAgICAgIGF1dGhvcml6YXRpb246IG9wdGlvbnMucmVxdWVzdC5oZWFkZXJzLmF1dGhvcml6YXRpb24ucmVwbGFjZShcbiAgICAgICAgICAvKD88ISApIC4qJC8sXG4gICAgICAgICAgXCIgW1JFREFDVEVEXVwiXG4gICAgICAgIClcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXF1ZXN0Q29weS51cmwgPSByZXF1ZXN0Q29weS51cmwucmVwbGFjZSgvXFxiY2xpZW50X3NlY3JldD1cXHcrL2csIFwiY2xpZW50X3NlY3JldD1bUkVEQUNURURdXCIpLnJlcGxhY2UoL1xcYmFjY2Vzc190b2tlbj1cXHcrL2csIFwiYWNjZXNzX3Rva2VuPVtSRURBQ1RFRF1cIik7XG4gICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdENvcHk7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIFJlcXVlc3RFcnJvclxufTtcbiIsICIvLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdFwiO1xuaW1wb3J0IHsgZ2V0VXNlckFnZW50IH0gZnJvbSBcInVuaXZlcnNhbC11c2VyLWFnZW50XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy92ZXJzaW9uLmpzXG52YXIgVkVSU0lPTiA9IFwiMC4wLjAtZGV2ZWxvcG1lbnRcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL3dpdGgtZGVmYXVsdHMuanNcbmltcG9ydCB7IHJlcXVlc3QgYXMgUmVxdWVzdDIgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvZ3JhcGhxbC5qc1xuaW1wb3J0IHsgcmVxdWVzdCBhcyBSZXF1ZXN0IH0gZnJvbSBcIkBvY3Rva2l0L3JlcXVlc3RcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL2Vycm9yLmpzXG5mdW5jdGlvbiBfYnVpbGRNZXNzYWdlRm9yUmVzcG9uc2VFcnJvcnMoZGF0YSkge1xuICByZXR1cm4gYFJlcXVlc3QgZmFpbGVkIGR1ZSB0byBmb2xsb3dpbmcgcmVzcG9uc2UgZXJyb3JzOlxuYCArIGRhdGEuZXJyb3JzLm1hcCgoZSkgPT4gYCAtICR7ZS5tZXNzYWdlfWApLmpvaW4oXCJcXG5cIik7XG59XG52YXIgR3JhcGhxbFJlc3BvbnNlRXJyb3IgPSBjbGFzcyBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IocmVxdWVzdDIsIGhlYWRlcnMsIHJlc3BvbnNlKSB7XG4gICAgc3VwZXIoX2J1aWxkTWVzc2FnZUZvclJlc3BvbnNlRXJyb3JzKHJlc3BvbnNlKSk7XG4gICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdDI7XG4gICAgdGhpcy5oZWFkZXJzID0gaGVhZGVycztcbiAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgdGhpcy5lcnJvcnMgPSByZXNwb25zZS5lcnJvcnM7XG4gICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgIH1cbiAgfVxuICBuYW1lID0gXCJHcmFwaHFsUmVzcG9uc2VFcnJvclwiO1xuICBlcnJvcnM7XG4gIGRhdGE7XG59O1xuXG4vLyBwa2cvZGlzdC1zcmMvZ3JhcGhxbC5qc1xudmFyIE5PTl9WQVJJQUJMRV9PUFRJT05TID0gW1xuICBcIm1ldGhvZFwiLFxuICBcImJhc2VVcmxcIixcbiAgXCJ1cmxcIixcbiAgXCJoZWFkZXJzXCIsXG4gIFwicmVxdWVzdFwiLFxuICBcInF1ZXJ5XCIsXG4gIFwibWVkaWFUeXBlXCIsXG4gIFwib3BlcmF0aW9uTmFtZVwiXG5dO1xudmFyIEZPUkJJRERFTl9WQVJJQUJMRV9PUFRJT05TID0gW1wicXVlcnlcIiwgXCJtZXRob2RcIiwgXCJ1cmxcIl07XG52YXIgR0hFU19WM19TVUZGSVhfUkVHRVggPSAvXFwvYXBpXFwvdjNcXC8/JC87XG5mdW5jdGlvbiBncmFwaHFsKHJlcXVlc3QyLCBxdWVyeSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgcXVlcnkgPT09IFwic3RyaW5nXCIgJiYgXCJxdWVyeVwiIGluIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgbmV3IEVycm9yKGBbQG9jdG9raXQvZ3JhcGhxbF0gXCJxdWVyeVwiIGNhbm5vdCBiZSB1c2VkIGFzIHZhcmlhYmxlIG5hbWVgKVxuICAgICAgKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xuICAgICAgaWYgKCFGT1JCSURERU5fVkFSSUFCTEVfT1BUSU9OUy5pbmNsdWRlcyhrZXkpKSBjb250aW51ZTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgIGBbQG9jdG9raXQvZ3JhcGhxbF0gXCIke2tleX1cIiBjYW5ub3QgYmUgdXNlZCBhcyB2YXJpYWJsZSBuYW1lYFxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBjb25zdCBwYXJzZWRPcHRpb25zID0gdHlwZW9mIHF1ZXJ5ID09PSBcInN0cmluZ1wiID8gT2JqZWN0LmFzc2lnbih7IHF1ZXJ5IH0sIG9wdGlvbnMpIDogcXVlcnk7XG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0gT2JqZWN0LmtleXMoXG4gICAgcGFyc2VkT3B0aW9uc1xuICApLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICBpZiAoTk9OX1ZBUklBQkxFX09QVElPTlMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBwYXJzZWRPcHRpb25zW2tleV07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBpZiAoIXJlc3VsdC52YXJpYWJsZXMpIHtcbiAgICAgIHJlc3VsdC52YXJpYWJsZXMgPSB7fTtcbiAgICB9XG4gICAgcmVzdWx0LnZhcmlhYmxlc1trZXldID0gcGFyc2VkT3B0aW9uc1trZXldO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIHt9KTtcbiAgY29uc3QgYmFzZVVybCA9IHBhcnNlZE9wdGlvbnMuYmFzZVVybCB8fCByZXF1ZXN0Mi5lbmRwb2ludC5ERUZBVUxUUy5iYXNlVXJsO1xuICBpZiAoR0hFU19WM19TVUZGSVhfUkVHRVgudGVzdChiYXNlVXJsKSkge1xuICAgIHJlcXVlc3RPcHRpb25zLnVybCA9IGJhc2VVcmwucmVwbGFjZShHSEVTX1YzX1NVRkZJWF9SRUdFWCwgXCIvYXBpL2dyYXBocWxcIik7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3QyKHJlcXVlc3RPcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9ycykge1xuICAgICAgY29uc3QgaGVhZGVycyA9IHt9O1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocmVzcG9uc2UuaGVhZGVycykpIHtcbiAgICAgICAgaGVhZGVyc1trZXldID0gcmVzcG9uc2UuaGVhZGVyc1trZXldO1xuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEdyYXBocWxSZXNwb25zZUVycm9yKFxuICAgICAgICByZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgcmVzcG9uc2UuZGF0YVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgfSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy93aXRoLWRlZmF1bHRzLmpzXG5mdW5jdGlvbiB3aXRoRGVmYXVsdHMocmVxdWVzdDIsIG5ld0RlZmF1bHRzKSB7XG4gIGNvbnN0IG5ld1JlcXVlc3QgPSByZXF1ZXN0Mi5kZWZhdWx0cyhuZXdEZWZhdWx0cyk7XG4gIGNvbnN0IG5ld0FwaSA9IChxdWVyeSwgb3B0aW9ucykgPT4ge1xuICAgIHJldHVybiBncmFwaHFsKG5ld1JlcXVlc3QsIHF1ZXJ5LCBvcHRpb25zKTtcbiAgfTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3QXBpLCB7XG4gICAgZGVmYXVsdHM6IHdpdGhEZWZhdWx0cy5iaW5kKG51bGwsIG5ld1JlcXVlc3QpLFxuICAgIGVuZHBvaW50OiBuZXdSZXF1ZXN0LmVuZHBvaW50XG4gIH0pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbnZhciBncmFwaHFsMiA9IHdpdGhEZWZhdWx0cyhyZXF1ZXN0LCB7XG4gIGhlYWRlcnM6IHtcbiAgICBcInVzZXItYWdlbnRcIjogYG9jdG9raXQtZ3JhcGhxbC5qcy8ke1ZFUlNJT059ICR7Z2V0VXNlckFnZW50KCl9YFxuICB9LFxuICBtZXRob2Q6IFwiUE9TVFwiLFxuICB1cmw6IFwiL2dyYXBocWxcIlxufSk7XG5mdW5jdGlvbiB3aXRoQ3VzdG9tUmVxdWVzdChjdXN0b21SZXF1ZXN0KSB7XG4gIHJldHVybiB3aXRoRGVmYXVsdHMoY3VzdG9tUmVxdWVzdCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgdXJsOiBcIi9ncmFwaHFsXCJcbiAgfSk7XG59XG5leHBvcnQge1xuICBHcmFwaHFsUmVzcG9uc2VFcnJvcixcbiAgZ3JhcGhxbDIgYXMgZ3JhcGhxbCxcbiAgd2l0aEN1c3RvbVJlcXVlc3Rcbn07XG4iLCAiLy8gcGtnL2Rpc3Qtc3JjL2lzLWp3dC5qc1xudmFyIGI2NHVybCA9IFwiKD86W2EtekEtWjAtOV8tXSspXCI7XG52YXIgc2VwID0gXCJcXFxcLlwiO1xudmFyIGp3dFJFID0gbmV3IFJlZ0V4cChgXiR7YjY0dXJsfSR7c2VwfSR7YjY0dXJsfSR7c2VwfSR7YjY0dXJsfSRgKTtcbnZhciBpc0pXVCA9IGp3dFJFLnRlc3QuYmluZChqd3RSRSk7XG5cbi8vIHBrZy9kaXN0LXNyYy9hdXRoLmpzXG5hc3luYyBmdW5jdGlvbiBhdXRoKHRva2VuKSB7XG4gIGNvbnN0IGlzQXBwID0gaXNKV1QodG9rZW4pO1xuICBjb25zdCBpc0luc3RhbGxhdGlvbiA9IHRva2VuLnN0YXJ0c1dpdGgoXCJ2MS5cIikgfHwgdG9rZW4uc3RhcnRzV2l0aChcImdoc19cIik7XG4gIGNvbnN0IGlzVXNlclRvU2VydmVyID0gdG9rZW4uc3RhcnRzV2l0aChcImdodV9cIik7XG4gIGNvbnN0IHRva2VuVHlwZSA9IGlzQXBwID8gXCJhcHBcIiA6IGlzSW5zdGFsbGF0aW9uID8gXCJpbnN0YWxsYXRpb25cIiA6IGlzVXNlclRvU2VydmVyID8gXCJ1c2VyLXRvLXNlcnZlclwiIDogXCJvYXV0aFwiO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFwidG9rZW5cIixcbiAgICB0b2tlbixcbiAgICB0b2tlblR5cGVcbiAgfTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3dpdGgtYXV0aG9yaXphdGlvbi1wcmVmaXguanNcbmZ1bmN0aW9uIHdpdGhBdXRob3JpemF0aW9uUHJlZml4KHRva2VuKSB7XG4gIGlmICh0b2tlbi5zcGxpdCgvXFwuLykubGVuZ3RoID09PSAzKSB7XG4gICAgcmV0dXJuIGBiZWFyZXIgJHt0b2tlbn1gO1xuICB9XG4gIHJldHVybiBgdG9rZW4gJHt0b2tlbn1gO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaG9vay5qc1xuYXN5bmMgZnVuY3Rpb24gaG9vayh0b2tlbiwgcmVxdWVzdCwgcm91dGUsIHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgZW5kcG9pbnQgPSByZXF1ZXN0LmVuZHBvaW50Lm1lcmdlKFxuICAgIHJvdXRlLFxuICAgIHBhcmFtZXRlcnNcbiAgKTtcbiAgZW5kcG9pbnQuaGVhZGVycy5hdXRob3JpemF0aW9uID0gd2l0aEF1dGhvcml6YXRpb25QcmVmaXgodG9rZW4pO1xuICByZXR1cm4gcmVxdWVzdChlbmRwb2ludCk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9pbmRleC5qc1xudmFyIGNyZWF0ZVRva2VuQXV0aCA9IGZ1bmN0aW9uIGNyZWF0ZVRva2VuQXV0aDIodG9rZW4pIHtcbiAgaWYgKCF0b2tlbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIltAb2N0b2tpdC9hdXRoLXRva2VuXSBObyB0b2tlbiBwYXNzZWQgdG8gY3JlYXRlVG9rZW5BdXRoXCIpO1xuICB9XG4gIGlmICh0eXBlb2YgdG9rZW4gIT09IFwic3RyaW5nXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIltAb2N0b2tpdC9hdXRoLXRva2VuXSBUb2tlbiBwYXNzZWQgdG8gY3JlYXRlVG9rZW5BdXRoIGlzIG5vdCBhIHN0cmluZ1wiXG4gICAgKTtcbiAgfVxuICB0b2tlbiA9IHRva2VuLnJlcGxhY2UoL14odG9rZW58YmVhcmVyKSArL2ksIFwiXCIpO1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihhdXRoLmJpbmQobnVsbCwgdG9rZW4pLCB7XG4gICAgaG9vazogaG9vay5iaW5kKG51bGwsIHRva2VuKVxuICB9KTtcbn07XG5leHBvcnQge1xuICBjcmVhdGVUb2tlbkF1dGhcbn07XG4iLCAiY29uc3QgVkVSU0lPTiA9IFwiNy4wLjZcIjtcbmV4cG9ydCB7XG4gIFZFUlNJT05cbn07XG4iLCAiaW1wb3J0IHsgZ2V0VXNlckFnZW50IH0gZnJvbSBcInVuaXZlcnNhbC11c2VyLWFnZW50XCI7XG5pbXBvcnQgSG9vayBmcm9tIFwiYmVmb3JlLWFmdGVyLWhvb2tcIjtcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdFwiO1xuaW1wb3J0IHsgd2l0aEN1c3RvbVJlcXVlc3QgfSBmcm9tIFwiQG9jdG9raXQvZ3JhcGhxbFwiO1xuaW1wb3J0IHsgY3JlYXRlVG9rZW5BdXRoIH0gZnJvbSBcIkBvY3Rva2l0L2F1dGgtdG9rZW5cIjtcbmltcG9ydCB7IFZFUlNJT04gfSBmcm9tIFwiLi92ZXJzaW9uLmpzXCI7XG5jb25zdCBub29wID0gKCkgPT4ge1xufTtcbmNvbnN0IGNvbnNvbGVXYXJuID0gY29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7XG5jb25zdCBjb25zb2xlRXJyb3IgPSBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSk7XG5mdW5jdGlvbiBjcmVhdGVMb2dnZXIobG9nZ2VyID0ge30pIHtcbiAgaWYgKHR5cGVvZiBsb2dnZXIuZGVidWcgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIGxvZ2dlci5kZWJ1ZyA9IG5vb3A7XG4gIH1cbiAgaWYgKHR5cGVvZiBsb2dnZXIuaW5mbyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgbG9nZ2VyLmluZm8gPSBub29wO1xuICB9XG4gIGlmICh0eXBlb2YgbG9nZ2VyLndhcm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIGxvZ2dlci53YXJuID0gY29uc29sZVdhcm47XG4gIH1cbiAgaWYgKHR5cGVvZiBsb2dnZXIuZXJyb3IgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIGxvZ2dlci5lcnJvciA9IGNvbnNvbGVFcnJvcjtcbiAgfVxuICByZXR1cm4gbG9nZ2VyO1xufVxuY29uc3QgdXNlckFnZW50VHJhaWwgPSBgb2N0b2tpdC1jb3JlLmpzLyR7VkVSU0lPTn0gJHtnZXRVc2VyQWdlbnQoKX1gO1xuY2xhc3MgT2N0b2tpdCB7XG4gIHN0YXRpYyBWRVJTSU9OID0gVkVSU0lPTjtcbiAgc3RhdGljIGRlZmF1bHRzKGRlZmF1bHRzKSB7XG4gICAgY29uc3QgT2N0b2tpdFdpdGhEZWZhdWx0cyA9IGNsYXNzIGV4dGVuZHMgdGhpcyB7XG4gICAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBhcmdzWzBdIHx8IHt9O1xuICAgICAgICBpZiAodHlwZW9mIGRlZmF1bHRzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBzdXBlcihkZWZhdWx0cyhvcHRpb25zKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIGRlZmF1bHRzLFxuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnMudXNlckFnZW50ICYmIGRlZmF1bHRzLnVzZXJBZ2VudCA/IHtcbiAgICAgICAgICAgICAgdXNlckFnZW50OiBgJHtvcHRpb25zLnVzZXJBZ2VudH0gJHtkZWZhdWx0cy51c2VyQWdlbnR9YFxuICAgICAgICAgICAgfSA6IG51bGxcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gT2N0b2tpdFdpdGhEZWZhdWx0cztcbiAgfVxuICBzdGF0aWMgcGx1Z2lucyA9IFtdO1xuICAvKipcbiAgICogQXR0YWNoIGEgcGx1Z2luIChvciBtYW55KSB0byB5b3VyIE9jdG9raXQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGNvbnN0IEFQSSA9IE9jdG9raXQucGx1Z2luKHBsdWdpbjEsIHBsdWdpbjIsIHBsdWdpbjMsIC4uLilcbiAgICovXG4gIHN0YXRpYyBwbHVnaW4oLi4ubmV3UGx1Z2lucykge1xuICAgIGNvbnN0IGN1cnJlbnRQbHVnaW5zID0gdGhpcy5wbHVnaW5zO1xuICAgIGNvbnN0IE5ld09jdG9raXQgPSBjbGFzcyBleHRlbmRzIHRoaXMge1xuICAgICAgc3RhdGljIHBsdWdpbnMgPSBjdXJyZW50UGx1Z2lucy5jb25jYXQoXG4gICAgICAgIG5ld1BsdWdpbnMuZmlsdGVyKChwbHVnaW4pID0+ICFjdXJyZW50UGx1Z2lucy5pbmNsdWRlcyhwbHVnaW4pKVxuICAgICAgKTtcbiAgICB9O1xuICAgIHJldHVybiBOZXdPY3Rva2l0O1xuICB9XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGhvb2sgPSBuZXcgSG9vay5Db2xsZWN0aW9uKCk7XG4gICAgY29uc3QgcmVxdWVzdERlZmF1bHRzID0ge1xuICAgICAgYmFzZVVybDogcmVxdWVzdC5lbmRwb2ludC5ERUZBVUxUUy5iYXNlVXJsLFxuICAgICAgaGVhZGVyczoge30sXG4gICAgICByZXF1ZXN0OiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLnJlcXVlc3QsIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBpbnRlcm5hbCB1c2FnZSBvbmx5LCBubyBuZWVkIHRvIHR5cGVcbiAgICAgICAgaG9vazogaG9vay5iaW5kKG51bGwsIFwicmVxdWVzdFwiKVxuICAgICAgfSksXG4gICAgICBtZWRpYVR5cGU6IHtcbiAgICAgICAgcHJldmlld3M6IFtdLFxuICAgICAgICBmb3JtYXQ6IFwiXCJcbiAgICAgIH1cbiAgICB9O1xuICAgIHJlcXVlc3REZWZhdWx0cy5oZWFkZXJzW1widXNlci1hZ2VudFwiXSA9IG9wdGlvbnMudXNlckFnZW50ID8gYCR7b3B0aW9ucy51c2VyQWdlbnR9ICR7dXNlckFnZW50VHJhaWx9YCA6IHVzZXJBZ2VudFRyYWlsO1xuICAgIGlmIChvcHRpb25zLmJhc2VVcmwpIHtcbiAgICAgIHJlcXVlc3REZWZhdWx0cy5iYXNlVXJsID0gb3B0aW9ucy5iYXNlVXJsO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5wcmV2aWV3cykge1xuICAgICAgcmVxdWVzdERlZmF1bHRzLm1lZGlhVHlwZS5wcmV2aWV3cyA9IG9wdGlvbnMucHJldmlld3M7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRpbWVab25lKSB7XG4gICAgICByZXF1ZXN0RGVmYXVsdHMuaGVhZGVyc1tcInRpbWUtem9uZVwiXSA9IG9wdGlvbnMudGltZVpvbmU7XG4gICAgfVxuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3QuZGVmYXVsdHMocmVxdWVzdERlZmF1bHRzKTtcbiAgICB0aGlzLmdyYXBocWwgPSB3aXRoQ3VzdG9tUmVxdWVzdCh0aGlzLnJlcXVlc3QpLmRlZmF1bHRzKHJlcXVlc3REZWZhdWx0cyk7XG4gICAgdGhpcy5sb2cgPSBjcmVhdGVMb2dnZXIob3B0aW9ucy5sb2cpO1xuICAgIHRoaXMuaG9vayA9IGhvb2s7XG4gICAgaWYgKCFvcHRpb25zLmF1dGhTdHJhdGVneSkge1xuICAgICAgaWYgKCFvcHRpb25zLmF1dGgpIHtcbiAgICAgICAgdGhpcy5hdXRoID0gYXN5bmMgKCkgPT4gKHtcbiAgICAgICAgICB0eXBlOiBcInVuYXV0aGVudGljYXRlZFwiXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXV0aCA9IGNyZWF0ZVRva2VuQXV0aChvcHRpb25zLmF1dGgpO1xuICAgICAgICBob29rLndyYXAoXCJyZXF1ZXN0XCIsIGF1dGguaG9vayk7XG4gICAgICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgYXV0aFN0cmF0ZWd5LCAuLi5vdGhlck9wdGlvbnMgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCBhdXRoID0gYXV0aFN0cmF0ZWd5KFxuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVlc3Q6IHRoaXMucmVxdWVzdCxcbiAgICAgICAgICAgIGxvZzogdGhpcy5sb2csXG4gICAgICAgICAgICAvLyB3ZSBwYXNzIHRoZSBjdXJyZW50IG9jdG9raXQgaW5zdGFuY2UgYXMgd2VsbCBhcyBpdHMgY29uc3RydWN0b3Igb3B0aW9uc1xuICAgICAgICAgICAgLy8gdG8gYWxsb3cgZm9yIGF1dGhlbnRpY2F0aW9uIHN0cmF0ZWdpZXMgdGhhdCByZXR1cm4gYSBuZXcgb2N0b2tpdCBpbnN0YW5jZVxuICAgICAgICAgICAgLy8gdGhhdCBzaGFyZXMgdGhlIHNhbWUgaW50ZXJuYWwgc3RhdGUgYXMgdGhlIGN1cnJlbnQgb25lLiBUaGUgb3JpZ2luYWxcbiAgICAgICAgICAgIC8vIHJlcXVpcmVtZW50IGZvciB0aGlzIHdhcyB0aGUgXCJldmVudC1vY3Rva2l0XCIgYXV0aGVudGljYXRpb24gc3RyYXRlZ3lcbiAgICAgICAgICAgIC8vIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9ib3Qvb2N0b2tpdC1hdXRoLXByb2JvdC5cbiAgICAgICAgICAgIG9jdG9raXQ6IHRoaXMsXG4gICAgICAgICAgICBvY3Rva2l0T3B0aW9uczogb3RoZXJPcHRpb25zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcHRpb25zLmF1dGhcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIGhvb2sud3JhcChcInJlcXVlc3RcIiwgYXV0aC5ob29rKTtcbiAgICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgfVxuICAgIGNvbnN0IGNsYXNzQ29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NDb25zdHJ1Y3Rvci5wbHVnaW5zLmxlbmd0aDsgKytpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNsYXNzQ29uc3RydWN0b3IucGx1Z2luc1tpXSh0aGlzLCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG4gIC8vIGFzc2lnbmVkIGR1cmluZyBjb25zdHJ1Y3RvclxuICByZXF1ZXN0O1xuICBncmFwaHFsO1xuICBsb2c7XG4gIGhvb2s7XG4gIC8vIFRPRE86IHR5cGUgYG9jdG9raXQuYXV0aGAgYmFzZWQgb24gcGFzc2VkIG9wdGlvbnMuYXV0aFN0cmF0ZWd5XG4gIGF1dGg7XG59XG5leHBvcnQge1xuICBPY3Rva2l0XG59O1xuIiwgImNvbnN0IFZFUlNJT04gPSBcIjYuMC4wXCI7XG5leHBvcnQge1xuICBWRVJTSU9OXG59O1xuIiwgImltcG9ydCB7IFZFUlNJT04gfSBmcm9tIFwiLi92ZXJzaW9uLmpzXCI7XG5mdW5jdGlvbiByZXF1ZXN0TG9nKG9jdG9raXQpIHtcbiAgb2N0b2tpdC5ob29rLndyYXAoXCJyZXF1ZXN0XCIsIChyZXF1ZXN0LCBvcHRpb25zKSA9PiB7XG4gICAgb2N0b2tpdC5sb2cuZGVidWcoXCJyZXF1ZXN0XCIsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IG9jdG9raXQucmVxdWVzdC5lbmRwb2ludC5wYXJzZShvcHRpb25zKTtcbiAgICBjb25zdCBwYXRoID0gcmVxdWVzdE9wdGlvbnMudXJsLnJlcGxhY2Uob3B0aW9ucy5iYXNlVXJsLCBcIlwiKTtcbiAgICByZXR1cm4gcmVxdWVzdChvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdElkID0gcmVzcG9uc2UuaGVhZGVyc1tcIngtZ2l0aHViLXJlcXVlc3QtaWRcIl07XG4gICAgICBvY3Rva2l0LmxvZy5pbmZvKFxuICAgICAgICBgJHtyZXF1ZXN0T3B0aW9ucy5tZXRob2R9ICR7cGF0aH0gLSAke3Jlc3BvbnNlLnN0YXR1c30gd2l0aCBpZCAke3JlcXVlc3RJZH0gaW4gJHtEYXRlLm5vdygpIC0gc3RhcnR9bXNgXG4gICAgICApO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdElkID0gZXJyb3IucmVzcG9uc2U/LmhlYWRlcnNbXCJ4LWdpdGh1Yi1yZXF1ZXN0LWlkXCJdIHx8IFwiVU5LTk9XTlwiO1xuICAgICAgb2N0b2tpdC5sb2cuZXJyb3IoXG4gICAgICAgIGAke3JlcXVlc3RPcHRpb25zLm1ldGhvZH0gJHtwYXRofSAtICR7ZXJyb3Iuc3RhdHVzfSB3aXRoIGlkICR7cmVxdWVzdElkfSBpbiAke0RhdGUubm93KCkgLSBzdGFydH1tc2BcbiAgICAgICk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9KTtcbiAgfSk7XG59XG5yZXF1ZXN0TG9nLlZFUlNJT04gPSBWRVJTSU9OO1xuZXhwb3J0IHtcbiAgcmVxdWVzdExvZ1xufTtcbiIsICIvLyBwa2cvZGlzdC1zcmMvdmVyc2lvbi5qc1xudmFyIFZFUlNJT04gPSBcIjAuMC4wLWRldmVsb3BtZW50XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9ub3JtYWxpemUtcGFnaW5hdGVkLWxpc3QtcmVzcG9uc2UuanNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhZ2luYXRlZExpc3RSZXNwb25zZShyZXNwb25zZSkge1xuICBpZiAoIXJlc3BvbnNlLmRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVzcG9uc2UsXG4gICAgICBkYXRhOiBbXVxuICAgIH07XG4gIH1cbiAgY29uc3QgcmVzcG9uc2VOZWVkc05vcm1hbGl6YXRpb24gPSAoXCJ0b3RhbF9jb3VudFwiIGluIHJlc3BvbnNlLmRhdGEgfHwgXCJ0b3RhbF9jb21taXRzXCIgaW4gcmVzcG9uc2UuZGF0YSkgJiYgIShcInVybFwiIGluIHJlc3BvbnNlLmRhdGEpO1xuICBpZiAoIXJlc3BvbnNlTmVlZHNOb3JtYWxpemF0aW9uKSByZXR1cm4gcmVzcG9uc2U7XG4gIGNvbnN0IGluY29tcGxldGVSZXN1bHRzID0gcmVzcG9uc2UuZGF0YS5pbmNvbXBsZXRlX3Jlc3VsdHM7XG4gIGNvbnN0IHJlcG9zaXRvcnlTZWxlY3Rpb24gPSByZXNwb25zZS5kYXRhLnJlcG9zaXRvcnlfc2VsZWN0aW9uO1xuICBjb25zdCB0b3RhbENvdW50ID0gcmVzcG9uc2UuZGF0YS50b3RhbF9jb3VudDtcbiAgY29uc3QgdG90YWxDb21taXRzID0gcmVzcG9uc2UuZGF0YS50b3RhbF9jb21taXRzO1xuICBkZWxldGUgcmVzcG9uc2UuZGF0YS5pbmNvbXBsZXRlX3Jlc3VsdHM7XG4gIGRlbGV0ZSByZXNwb25zZS5kYXRhLnJlcG9zaXRvcnlfc2VsZWN0aW9uO1xuICBkZWxldGUgcmVzcG9uc2UuZGF0YS50b3RhbF9jb3VudDtcbiAgZGVsZXRlIHJlc3BvbnNlLmRhdGEudG90YWxfY29tbWl0cztcbiAgY29uc3QgbmFtZXNwYWNlS2V5ID0gT2JqZWN0LmtleXMocmVzcG9uc2UuZGF0YSlbMF07XG4gIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhW25hbWVzcGFjZUtleV07XG4gIHJlc3BvbnNlLmRhdGEgPSBkYXRhO1xuICBpZiAodHlwZW9mIGluY29tcGxldGVSZXN1bHRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmVzcG9uc2UuZGF0YS5pbmNvbXBsZXRlX3Jlc3VsdHMgPSBpbmNvbXBsZXRlUmVzdWx0cztcbiAgfVxuICBpZiAodHlwZW9mIHJlcG9zaXRvcnlTZWxlY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXNwb25zZS5kYXRhLnJlcG9zaXRvcnlfc2VsZWN0aW9uID0gcmVwb3NpdG9yeVNlbGVjdGlvbjtcbiAgfVxuICByZXNwb25zZS5kYXRhLnRvdGFsX2NvdW50ID0gdG90YWxDb3VudDtcbiAgcmVzcG9uc2UuZGF0YS50b3RhbF9jb21taXRzID0gdG90YWxDb21taXRzO1xuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9pdGVyYXRvci5qc1xuZnVuY3Rpb24gaXRlcmF0b3Iob2N0b2tpdCwgcm91dGUsIHBhcmFtZXRlcnMpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHR5cGVvZiByb3V0ZSA9PT0gXCJmdW5jdGlvblwiID8gcm91dGUuZW5kcG9pbnQocGFyYW1ldGVycykgOiBvY3Rva2l0LnJlcXVlc3QuZW5kcG9pbnQocm91dGUsIHBhcmFtZXRlcnMpO1xuICBjb25zdCByZXF1ZXN0TWV0aG9kID0gdHlwZW9mIHJvdXRlID09PSBcImZ1bmN0aW9uXCIgPyByb3V0ZSA6IG9jdG9raXQucmVxdWVzdDtcbiAgY29uc3QgbWV0aG9kID0gb3B0aW9ucy5tZXRob2Q7XG4gIGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XG4gIGxldCB1cmwgPSBvcHRpb25zLnVybDtcbiAgcmV0dXJuIHtcbiAgICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdOiAoKSA9PiAoe1xuICAgICAgYXN5bmMgbmV4dCgpIHtcbiAgICAgICAgaWYgKCF1cmwpIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RNZXRob2QoeyBtZXRob2QsIHVybCwgaGVhZGVycyB9KTtcbiAgICAgICAgICBjb25zdCBub3JtYWxpemVkUmVzcG9uc2UgPSBub3JtYWxpemVQYWdpbmF0ZWRMaXN0UmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgIHVybCA9ICgobm9ybWFsaXplZFJlc3BvbnNlLmhlYWRlcnMubGluayB8fCBcIlwiKS5tYXRjaChcbiAgICAgICAgICAgIC88KFtePD5dKyk+O1xccypyZWw9XCJuZXh0XCIvXG4gICAgICAgICAgKSB8fCBbXSlbMV07XG4gICAgICAgICAgaWYgKCF1cmwgJiYgXCJ0b3RhbF9jb21taXRzXCIgaW4gbm9ybWFsaXplZFJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFVybCA9IG5ldyBVUkwobm9ybWFsaXplZFJlc3BvbnNlLnVybCk7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBwYXJzZWRVcmwuc2VhcmNoUGFyYW1zO1xuICAgICAgICAgICAgY29uc3QgcGFnZSA9IHBhcnNlSW50KHBhcmFtcy5nZXQoXCJwYWdlXCIpIHx8IFwiMVwiLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBwZXJfcGFnZSA9IHBhcnNlSW50KHBhcmFtcy5nZXQoXCJwZXJfcGFnZVwiKSB8fCBcIjI1MFwiLCAxMCk7XG4gICAgICAgICAgICBpZiAocGFnZSAqIHBlcl9wYWdlIDwgbm9ybWFsaXplZFJlc3BvbnNlLmRhdGEudG90YWxfY29tbWl0cykge1xuICAgICAgICAgICAgICBwYXJhbXMuc2V0KFwicGFnZVwiLCBTdHJpbmcocGFnZSArIDEpKTtcbiAgICAgICAgICAgICAgdXJsID0gcGFyc2VkVXJsLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBub3JtYWxpemVkUmVzcG9uc2UgfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzICE9PSA0MDkpIHRocm93IGVycm9yO1xuICAgICAgICAgIHVybCA9IFwiXCI7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgICAgZGF0YTogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3BhZ2luYXRlLmpzXG5mdW5jdGlvbiBwYWdpbmF0ZShvY3Rva2l0LCByb3V0ZSwgcGFyYW1ldGVycywgbWFwRm4pIHtcbiAgaWYgKHR5cGVvZiBwYXJhbWV0ZXJzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBtYXBGbiA9IHBhcmFtZXRlcnM7XG4gICAgcGFyYW1ldGVycyA9IHZvaWQgMDtcbiAgfVxuICByZXR1cm4gZ2F0aGVyKFxuICAgIG9jdG9raXQsXG4gICAgW10sXG4gICAgaXRlcmF0b3Iob2N0b2tpdCwgcm91dGUsIHBhcmFtZXRlcnMpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpLFxuICAgIG1hcEZuXG4gICk7XG59XG5mdW5jdGlvbiBnYXRoZXIob2N0b2tpdCwgcmVzdWx0cywgaXRlcmF0b3IyLCBtYXBGbikge1xuICByZXR1cm4gaXRlcmF0b3IyLm5leHQoKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgICBsZXQgZWFybHlFeGl0ID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGVhcmx5RXhpdCA9IHRydWU7XG4gICAgfVxuICAgIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChcbiAgICAgIG1hcEZuID8gbWFwRm4ocmVzdWx0LnZhbHVlLCBkb25lKSA6IHJlc3VsdC52YWx1ZS5kYXRhXG4gICAgKTtcbiAgICBpZiAoZWFybHlFeGl0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gICAgcmV0dXJuIGdhdGhlcihvY3Rva2l0LCByZXN1bHRzLCBpdGVyYXRvcjIsIG1hcEZuKTtcbiAgfSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9jb21wb3NlLXBhZ2luYXRlLmpzXG52YXIgY29tcG9zZVBhZ2luYXRlUmVzdCA9IE9iamVjdC5hc3NpZ24ocGFnaW5hdGUsIHtcbiAgaXRlcmF0b3Jcbn0pO1xuXG4vLyBwa2cvZGlzdC1zcmMvZ2VuZXJhdGVkL3BhZ2luYXRpbmctZW5kcG9pbnRzLmpzXG52YXIgcGFnaW5hdGluZ0VuZHBvaW50cyA9IFtcbiAgXCJHRVQgL2Fkdmlzb3JpZXNcIixcbiAgXCJHRVQgL2FwcC9ob29rL2RlbGl2ZXJpZXNcIixcbiAgXCJHRVQgL2FwcC9pbnN0YWxsYXRpb24tcmVxdWVzdHNcIixcbiAgXCJHRVQgL2FwcC9pbnN0YWxsYXRpb25zXCIsXG4gIFwiR0VUIC9hc3NpZ25tZW50cy97YXNzaWdubWVudF9pZH0vYWNjZXB0ZWRfYXNzaWdubWVudHNcIixcbiAgXCJHRVQgL2NsYXNzcm9vbXNcIixcbiAgXCJHRVQgL2NsYXNzcm9vbXMve2NsYXNzcm9vbV9pZH0vYXNzaWdubWVudHNcIixcbiAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zXCIsXG4gIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vZGVwZW5kYWJvdC9hbGVydHNcIixcbiAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtc1wiLFxuICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L21lbWJlcnNoaXBzXCIsXG4gIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vb3JnYW5pemF0aW9uc1wiLFxuICBcIkdFVCAvZXZlbnRzXCIsXG4gIFwiR0VUIC9naXN0c1wiLFxuICBcIkdFVCAvZ2lzdHMvcHVibGljXCIsXG4gIFwiR0VUIC9naXN0cy9zdGFycmVkXCIsXG4gIFwiR0VUIC9naXN0cy97Z2lzdF9pZH0vY29tbWVudHNcIixcbiAgXCJHRVQgL2dpc3RzL3tnaXN0X2lkfS9jb21taXRzXCIsXG4gIFwiR0VUIC9naXN0cy97Z2lzdF9pZH0vZm9ya3NcIixcbiAgXCJHRVQgL2luc3RhbGxhdGlvbi9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL2lzc3Vlc1wiLFxuICBcIkdFVCAvbGljZW5zZXNcIixcbiAgXCJHRVQgL21hcmtldHBsYWNlX2xpc3RpbmcvcGxhbnNcIixcbiAgXCJHRVQgL21hcmtldHBsYWNlX2xpc3RpbmcvcGxhbnMve3BsYW5faWR9L2FjY291bnRzXCIsXG4gIFwiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3N0dWJiZWQvcGxhbnNcIixcbiAgXCJHRVQgL21hcmtldHBsYWNlX2xpc3Rpbmcvc3R1YmJlZC9wbGFucy97cGxhbl9pZH0vYWNjb3VudHNcIixcbiAgXCJHRVQgL25ldHdvcmtzL3tvd25lcn0ve3JlcG99L2V2ZW50c1wiLFxuICBcIkdFVCAvbm90aWZpY2F0aW9uc1wiLFxuICBcIkdFVCAvb3JnYW5pemF0aW9uc1wiLFxuICBcIkdFVCAvb3JnYW5pemF0aW9ucy97b3JnfS9kZXBlbmRhYm90L3JlcG9zaXRvcnktYWNjZXNzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvY2FjaGUvdXNhZ2UtYnktcmVwb3NpdG9yeVwiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvc2VsZi1ob3N0ZWQtcnVubmVycy9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXItZ3JvdXBzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVyLWdyb3Vwcy97cnVubmVyX2dyb3VwX2lkfS9ob3N0ZWQtcnVubmVyc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lci1ncm91cHMve3J1bm5lcl9ncm91cF9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVyLWdyb3Vwcy97cnVubmVyX2dyb3VwX2lkfS9ydW5uZXJzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVyc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYXR0ZXN0YXRpb25zL3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hdHRlc3RhdGlvbnMve3N1YmplY3RfZGlnZXN0fVwiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9ibG9ja3NcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vY2FtcGFpZ25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGUtc2Nhbm5pbmcvYWxlcnRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9jb3BpbG90L2JpbGxpbmcvc2VhdHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vY29waWxvdC9tZXRyaWNzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2RlcGVuZGFib3QvYWxlcnRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vZXZlbnRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2ZhaWxlZF9pbnZpdGF0aW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9ob29rc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9ob29rcy97aG9va19pZH0vZGVsaXZlcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9pbnNpZ2h0cy9hcGkvcm91dGUtc3RhdHMve2FjdG9yX3R5cGV9L3thY3Rvcl9pZH1cIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaW5zaWdodHMvYXBpL3N1YmplY3Qtc3RhdHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaW5zaWdodHMvYXBpL3VzZXItc3RhdHMve3VzZXJfaWR9XCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2luc3RhbGxhdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaW52aXRhdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9L3RlYW1zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2lzc3Vlc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9tZW1iZXJzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L21lbWJlcnMve3VzZXJuYW1lfS9jb2Rlc3BhY2VzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3tyb2xlX2lkfS90ZWFtc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMve3JvbGVfaWR9L3VzZXJzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L291dHNpZGVfY29sbGFib3JhdG9yc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wYWNrYWdlc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW4tcmVxdWVzdHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2VuLXJlcXVlc3RzL3twYXRfcmVxdWVzdF9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2Vucy97cGF0X2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcHJpdmF0ZS1yZWdpc3RyaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzVjJcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2ZpZWxkc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcHJvcGVydGllcy92YWx1ZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcHVibGljX21lbWJlcnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcmVwb3NcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcnVsZXNldHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcnVsZXNldHMvcnVsZS1zdWl0ZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcnVsZXNldHMve3J1bGVzZXRfaWR9L2hpc3RvcnlcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9zZWN1cml0eS1hZHZpc29yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2ltbXV0YWJsZS1yZWxlYXNlcy9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvbmV0d29yay1jb25maWd1cmF0aW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtL3t0ZWFtX3NsdWd9L2NvcGlsb3QvbWV0cmljc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vaW52aXRhdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vbWVtYmVyc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9wcm9qZWN0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9yZXBvc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS90ZWFtc1wiLFxuICBcIkdFVCAvcHJvamVjdHMve3Byb2plY3RfaWR9L2NvbGxhYm9yYXRvcnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvYXJ0aWZhY3RzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2NhY2hlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9vcmdhbml6YXRpb24tc2VjcmV0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9vcmdhbml6YXRpb24tdmFyaWFibGVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVuc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2FydGlmYWN0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2F0dGVtcHRzL3thdHRlbXB0X251bWJlcn0vam9ic1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2pvYnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvc2VjcmV0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy92YXJpYWJsZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvd29ya2Zsb3dzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93cy97d29ya2Zsb3dfaWR9L3J1bnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGl2aXR5XCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hc3NpZ25lZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2F0dGVzdGF0aW9ucy97c3ViamVjdF9kaWdlc3R9XCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stcnVucy97Y2hlY2tfcnVuX2lkfS9hbm5vdGF0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stc3VpdGVzL3tjaGVja19zdWl0ZV9pZH0vY2hlY2stcnVuc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbGVydHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9L2luc3RhbmNlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbmFseXNlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9kZXZjb250YWluZXJzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL3NlY3JldHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbGxhYm9yYXRvcnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tjb21taXRfc2hhfS9jb21tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97Y29tbWl0X3NoYX0vcHVsbHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vY2hlY2stcnVuc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97cmVmfS9jaGVjay1zdWl0ZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vc3RhdHVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tyZWZ9L3N0YXR1c2VzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21wYXJlL3tiYXNlaGVhZH1cIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbXBhcmUve2Jhc2V9Li4ue2hlYWR9XCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250cmlidXRvcnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGFib3QvYWxlcnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L3NlY3JldHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBsb3ltZW50cy97ZGVwbG95bWVudF9pZH0vc3RhdHVzZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50LWJyYW5jaC1wb2xpY2llc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50X3Byb3RlY3Rpb25fcnVsZXMvYXBwc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9zZWNyZXRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3ZhcmlhYmxlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZXZlbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9mb3Jrc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3NcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfS9kZWxpdmVyaWVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbnZpdGF0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvY29tbWVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvZXZlbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vY29tbWVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9kZXBlbmRlbmNpZXMvYmxvY2tlZF9ieVwiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2RlcGVuZGVuY2llcy9ibG9ja2luZ1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2V2ZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2xhYmVsc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3JlYWN0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3N1Yl9pc3N1ZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS90aW1lbGluZVwiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30va2V5c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbGFiZWxzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzL3ttaWxlc3RvbmVfbnVtYmVyfS9sYWJlbHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L25vdGlmaWNhdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2J1aWxkc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHJvamVjdHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy9jb21tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb21tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb21taXRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L2ZpbGVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3NcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3cy97cmV2aWV3X2lkfS9jb21tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfS9hc3NldHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzL2JyYW5jaGVzL3ticmFuY2h9XCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHMvcnVsZS1zdWl0ZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzL3tydWxlc2V0X2lkfS9oaXN0b3J5XCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWNyZXQtc2Nhbm5pbmcvYWxlcnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWNyZXQtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9L2xvY2F0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjdXJpdHktYWR2aXNvcmllc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3RhcmdhemVyc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3Vic2NyaWJlcnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RhZ3NcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RlYW1zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90b3BpY3NcIixcbiAgXCJHRVQgL3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvc2VhcmNoL2NvZGVcIixcbiAgXCJHRVQgL3NlYXJjaC9jb21taXRzXCIsXG4gIFwiR0VUIC9zZWFyY2gvaXNzdWVzXCIsXG4gIFwiR0VUIC9zZWFyY2gvbGFiZWxzXCIsXG4gIFwiR0VUIC9zZWFyY2gvcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9zZWFyY2gvdG9waWNzXCIsXG4gIFwiR0VUIC9zZWFyY2gvdXNlcnNcIixcbiAgXCJHRVQgL3RlYW1zL3t0ZWFtX2lkfS9kaXNjdXNzaW9uc1wiLFxuICBcIkdFVCAvdGVhbXMve3RlYW1faWR9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHNcIixcbiAgXCJHRVQgL3RlYW1zL3t0ZWFtX2lkfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzL3tjb21tZW50X251bWJlcn0vcmVhY3Rpb25zXCIsXG4gIFwiR0VUIC90ZWFtcy97dGVhbV9pZH0vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL3RlYW1zL3t0ZWFtX2lkfS9pbnZpdGF0aW9uc1wiLFxuICBcIkdFVCAvdGVhbXMve3RlYW1faWR9L21lbWJlcnNcIixcbiAgXCJHRVQgL3RlYW1zL3t0ZWFtX2lkfS9wcm9qZWN0c1wiLFxuICBcIkdFVCAvdGVhbXMve3RlYW1faWR9L3JlcG9zXCIsXG4gIFwiR0VUIC90ZWFtcy97dGVhbV9pZH0vdGVhbXNcIixcbiAgXCJHRVQgL3VzZXIvYmxvY2tzXCIsXG4gIFwiR0VUIC91c2VyL2NvZGVzcGFjZXNcIixcbiAgXCJHRVQgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzXCIsXG4gIFwiR0VUIC91c2VyL2VtYWlsc1wiLFxuICBcIkdFVCAvdXNlci9mb2xsb3dlcnNcIixcbiAgXCJHRVQgL3VzZXIvZm9sbG93aW5nXCIsXG4gIFwiR0VUIC91c2VyL2dwZ19rZXlzXCIsXG4gIFwiR0VUIC91c2VyL2luc3RhbGxhdGlvbnNcIixcbiAgXCJHRVQgL3VzZXIvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL3VzZXIvaXNzdWVzXCIsXG4gIFwiR0VUIC91c2VyL2tleXNcIixcbiAgXCJHRVQgL3VzZXIvbWFya2V0cGxhY2VfcHVyY2hhc2VzXCIsXG4gIFwiR0VUIC91c2VyL21hcmtldHBsYWNlX3B1cmNoYXNlcy9zdHViYmVkXCIsXG4gIFwiR0VUIC91c2VyL21lbWJlcnNoaXBzL29yZ3NcIixcbiAgXCJHRVQgL3VzZXIvbWlncmF0aW9uc1wiLFxuICBcIkdFVCAvdXNlci9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvdXNlci9vcmdzXCIsXG4gIFwiR0VUIC91c2VyL3BhY2thZ2VzXCIsXG4gIFwiR0VUIC91c2VyL3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zXCIsXG4gIFwiR0VUIC91c2VyL3B1YmxpY19lbWFpbHNcIixcbiAgXCJHRVQgL3VzZXIvcmVwb3NcIixcbiAgXCJHRVQgL3VzZXIvcmVwb3NpdG9yeV9pbnZpdGF0aW9uc1wiLFxuICBcIkdFVCAvdXNlci9zb2NpYWxfYWNjb3VudHNcIixcbiAgXCJHRVQgL3VzZXIvc3NoX3NpZ25pbmdfa2V5c1wiLFxuICBcIkdFVCAvdXNlci9zdGFycmVkXCIsXG4gIFwiR0VUIC91c2VyL3N1YnNjcmlwdGlvbnNcIixcbiAgXCJHRVQgL3VzZXIvdGVhbXNcIixcbiAgXCJHRVQgL3VzZXJzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2F0dGVzdGF0aW9ucy97c3ViamVjdF9kaWdlc3R9XCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2V2ZW50c1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ldmVudHMvb3Jncy97b3JnfVwiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ldmVudHMvcHVibGljXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2ZvbGxvd2Vyc1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9mb2xsb3dpbmdcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZ2lzdHNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZ3BnX2tleXNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0va2V5c1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9vcmdzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3BhY2thZ2VzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzVjJcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2ZpZWxkc1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcmVjZWl2ZWRfZXZlbnRzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3JlY2VpdmVkX2V2ZW50cy9wdWJsaWNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcmVwb3NcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc29jaWFsX2FjY291bnRzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3NzaF9zaWduaW5nX2tleXNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc3RhcnJlZFwiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zdWJzY3JpcHRpb25zXCJcbl07XG5cbi8vIHBrZy9kaXN0LXNyYy9wYWdpbmF0aW5nLWVuZHBvaW50cy5qc1xuZnVuY3Rpb24gaXNQYWdpbmF0aW5nRW5kcG9pbnQoYXJnKSB7XG4gIGlmICh0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHBhZ2luYXRpbmdFbmRwb2ludHMuaW5jbHVkZXMoYXJnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG5mdW5jdGlvbiBwYWdpbmF0ZVJlc3Qob2N0b2tpdCkge1xuICByZXR1cm4ge1xuICAgIHBhZ2luYXRlOiBPYmplY3QuYXNzaWduKHBhZ2luYXRlLmJpbmQobnVsbCwgb2N0b2tpdCksIHtcbiAgICAgIGl0ZXJhdG9yOiBpdGVyYXRvci5iaW5kKG51bGwsIG9jdG9raXQpXG4gICAgfSlcbiAgfTtcbn1cbnBhZ2luYXRlUmVzdC5WRVJTSU9OID0gVkVSU0lPTjtcbmV4cG9ydCB7XG4gIGNvbXBvc2VQYWdpbmF0ZVJlc3QsXG4gIGlzUGFnaW5hdGluZ0VuZHBvaW50LFxuICBwYWdpbmF0ZVJlc3QsXG4gIHBhZ2luYXRpbmdFbmRwb2ludHNcbn07XG4iLCAiZXhwb3J0IGNvbnN0IFZFUlNJT04gPSBcIjE3LjAuMFwiO1xuIiwgImltcG9ydCB0eXBlIHsgRW5kcG9pbnRzRGVmYXVsdHNBbmREZWNvcmF0aW9ucyB9IGZyb20gXCIuLi90eXBlcy5qc1wiO1xuY29uc3QgRW5kcG9pbnRzOiBFbmRwb2ludHNEZWZhdWx0c0FuZERlY29yYXRpb25zID0ge1xuICBhY3Rpb25zOiB7XG4gICAgYWRkQ3VzdG9tTGFiZWxzVG9TZWxmSG9zdGVkUnVubmVyRm9yT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9L2xhYmVsc1wiLFxuICAgIF0sXG4gICAgYWRkQ3VzdG9tTGFiZWxzVG9TZWxmSG9zdGVkUnVubmVyRm9yUmVwbzogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzXCIsXG4gICAgXSxcbiAgICBhZGRSZXBvQWNjZXNzVG9TZWxmSG9zdGVkUnVubmVyR3JvdXBJbk9yZzogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXItZ3JvdXBzL3tydW5uZXJfZ3JvdXBfaWR9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIGFkZFNlbGVjdGVkUmVwb1RvT3JnU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBhZGRTZWxlY3RlZFJlcG9Ub09yZ1ZhcmlhYmxlOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgYXBwcm92ZVdvcmtmbG93UnVuOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hcHByb3ZlXCIsXG4gICAgXSxcbiAgICBjYW5jZWxXb3JrZmxvd1J1bjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vY2FuY2VsXCIsXG4gICAgXSxcbiAgICBjcmVhdGVFbnZpcm9ubWVudFZhcmlhYmxlOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vdmFyaWFibGVzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcIlBPU1QgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVyc1wiXSxcbiAgICBjcmVhdGVPclVwZGF0ZUVudmlyb25tZW50U2VjcmV0OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGNyZWF0ZU9yVXBkYXRlT3JnU2VjcmV0OiBbXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgY3JlYXRlT3JVcGRhdGVSZXBvU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGNyZWF0ZU9yZ1ZhcmlhYmxlOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzXCJdLFxuICAgIGNyZWF0ZVJlZ2lzdHJhdGlvblRva2VuRm9yT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL3JlZ2lzdHJhdGlvbi10b2tlblwiLFxuICAgIF0sXG4gICAgY3JlYXRlUmVnaXN0cmF0aW9uVG9rZW5Gb3JSZXBvOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy9yZWdpc3RyYXRpb24tdG9rZW5cIixcbiAgICBdLFxuICAgIGNyZWF0ZVJlbW92ZVRva2VuRm9yT3JnOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy9yZW1vdmUtdG9rZW5cIl0sXG4gICAgY3JlYXRlUmVtb3ZlVG9rZW5Gb3JSZXBvOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy9yZW1vdmUtdG9rZW5cIixcbiAgICBdLFxuICAgIGNyZWF0ZVJlcG9WYXJpYWJsZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy92YXJpYWJsZXNcIl0sXG4gICAgY3JlYXRlV29ya2Zsb3dEaXNwYXRjaDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93cy97d29ya2Zsb3dfaWR9L2Rpc3BhdGNoZXNcIixcbiAgICBdLFxuICAgIGRlbGV0ZUFjdGlvbnNDYWNoZUJ5SWQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2NhY2hlcy97Y2FjaGVfaWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVBY3Rpb25zQ2FjaGVCeUtleTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvY2FjaGVzez9rZXkscmVmfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlQXJ0aWZhY3Q6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2FydGlmYWN0cy97YXJ0aWZhY3RfaWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVDdXN0b21JbWFnZUZyb21Pcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvaW1hZ2VzL2N1c3RvbS97aW1hZ2VfZGVmaW5pdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUN1c3RvbUltYWdlVmVyc2lvbkZyb21Pcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvaW1hZ2VzL2N1c3RvbS97aW1hZ2VfZGVmaW5pdGlvbl9pZH0vdmVyc2lvbnMve3ZlcnNpb259XCIsXG4gICAgXSxcbiAgICBkZWxldGVFbnZpcm9ubWVudFNlY3JldDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVFbnZpcm9ubWVudFZhcmlhYmxlOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS92YXJpYWJsZXMve25hbWV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMve2hvc3RlZF9ydW5uZXJfaWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVPcmdTZWNyZXQ6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfVwiXSxcbiAgICBkZWxldGVPcmdWYXJpYWJsZTogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfVwiXSxcbiAgICBkZWxldGVSZXBvU2VjcmV0OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGRlbGV0ZVJlcG9WYXJpYWJsZTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlU2VsZkhvc3RlZFJ1bm5lckZyb21Pcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlU2VsZkhvc3RlZFJ1bm5lckZyb21SZXBvOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVXb3JrZmxvd1J1bjogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH1cIl0sXG4gICAgZGVsZXRlV29ya2Zsb3dSdW5Mb2dzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2xvZ3NcIixcbiAgICBdLFxuICAgIGRpc2FibGVTZWxlY3RlZFJlcG9zaXRvcnlHaXRodWJBY3Rpb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIGRpc2FibGVXb3JrZmxvdzogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvd29ya2Zsb3dzL3t3b3JrZmxvd19pZH0vZGlzYWJsZVwiLFxuICAgIF0sXG4gICAgZG93bmxvYWRBcnRpZmFjdDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvYXJ0aWZhY3RzL3thcnRpZmFjdF9pZH0ve2FyY2hpdmVfZm9ybWF0fVwiLFxuICAgIF0sXG4gICAgZG93bmxvYWRKb2JMb2dzRm9yV29ya2Zsb3dSdW46IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2pvYnMve2pvYl9pZH0vbG9nc1wiLFxuICAgIF0sXG4gICAgZG93bmxvYWRXb3JrZmxvd1J1bkF0dGVtcHRMb2dzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2F0dGVtcHRzL3thdHRlbXB0X251bWJlcn0vbG9nc1wiLFxuICAgIF0sXG4gICAgZG93bmxvYWRXb3JrZmxvd1J1bkxvZ3M6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vbG9nc1wiLFxuICAgIF0sXG4gICAgZW5hYmxlU2VsZWN0ZWRSZXBvc2l0b3J5R2l0aHViQWN0aW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9ucy9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBlbmFibGVXb3JrZmxvdzogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvd29ya2Zsb3dzL3t3b3JrZmxvd19pZH0vZW5hYmxlXCIsXG4gICAgXSxcbiAgICBmb3JjZUNhbmNlbFdvcmtmbG93UnVuOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9mb3JjZS1jYW5jZWxcIixcbiAgICBdLFxuICAgIGdlbmVyYXRlUnVubmVySml0Y29uZmlnRm9yT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL2dlbmVyYXRlLWppdGNvbmZpZ1wiLFxuICAgIF0sXG4gICAgZ2VuZXJhdGVSdW5uZXJKaXRjb25maWdGb3JSZXBvOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy9nZW5lcmF0ZS1qaXRjb25maWdcIixcbiAgICBdLFxuICAgIGdldEFjdGlvbnNDYWNoZUxpc3Q6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9jYWNoZXNcIl0sXG4gICAgZ2V0QWN0aW9uc0NhY2hlVXNhZ2U6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9jYWNoZS91c2FnZVwiXSxcbiAgICBnZXRBY3Rpb25zQ2FjaGVVc2FnZUJ5UmVwb0Zvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9jYWNoZS91c2FnZS1ieS1yZXBvc2l0b3J5XCIsXG4gICAgXSxcbiAgICBnZXRBY3Rpb25zQ2FjaGVVc2FnZUZvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvY2FjaGUvdXNhZ2VcIl0sXG4gICAgZ2V0QWxsb3dlZEFjdGlvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvc2VsZWN0ZWQtYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgZ2V0QWxsb3dlZEFjdGlvbnNSZXBvc2l0b3J5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9wZXJtaXNzaW9ucy9zZWxlY3RlZC1hY3Rpb25zXCIsXG4gICAgXSxcbiAgICBnZXRBcnRpZmFjdDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2FydGlmYWN0cy97YXJ0aWZhY3RfaWR9XCJdLFxuICAgIGdldEN1c3RvbUltYWdlRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL2ltYWdlcy9jdXN0b20ve2ltYWdlX2RlZmluaXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBnZXRDdXN0b21JbWFnZVZlcnNpb25Gb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvaW1hZ2VzL2N1c3RvbS97aW1hZ2VfZGVmaW5pdGlvbl9pZH0vdmVyc2lvbnMve3ZlcnNpb259XCIsXG4gICAgXSxcbiAgICBnZXRDdXN0b21PaWRjU3ViQ2xhaW1Gb3JSZXBvOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9vaWRjL2N1c3RvbWl6YXRpb24vc3ViXCIsXG4gICAgXSxcbiAgICBnZXRFbnZpcm9ubWVudFB1YmxpY0tleTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vc2VjcmV0cy9wdWJsaWMta2V5XCIsXG4gICAgXSxcbiAgICBnZXRFbnZpcm9ubWVudFNlY3JldDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBnZXRFbnZpcm9ubWVudFZhcmlhYmxlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS92YXJpYWJsZXMve25hbWV9XCIsXG4gICAgXSxcbiAgICBnZXRHaXRodWJBY3Rpb25zRGVmYXVsdFdvcmtmbG93UGVybWlzc2lvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvd29ya2Zsb3dcIixcbiAgICBdLFxuICAgIGdldEdpdGh1YkFjdGlvbnNEZWZhdWx0V29ya2Zsb3dQZXJtaXNzaW9uc1JlcG9zaXRvcnk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zL3dvcmtmbG93XCIsXG4gICAgXSxcbiAgICBnZXRHaXRodWJBY3Rpb25zUGVybWlzc2lvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnNcIixcbiAgICBdLFxuICAgIGdldEdpdGh1YkFjdGlvbnNQZXJtaXNzaW9uc1JlcG9zaXRvcnk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zXCIsXG4gICAgXSxcbiAgICBnZXRIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMve2hvc3RlZF9ydW5uZXJfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRIb3N0ZWRSdW5uZXJzR2l0aHViT3duZWRJbWFnZXNGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvaW1hZ2VzL2dpdGh1Yi1vd25lZFwiLFxuICAgIF0sXG4gICAgZ2V0SG9zdGVkUnVubmVyc0xpbWl0c0Zvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy9saW1pdHNcIixcbiAgICBdLFxuICAgIGdldEhvc3RlZFJ1bm5lcnNNYWNoaW5lU3BlY3NGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvbWFjaGluZS1zaXplc1wiLFxuICAgIF0sXG4gICAgZ2V0SG9zdGVkUnVubmVyc1BhcnRuZXJJbWFnZXNGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvaW1hZ2VzL3BhcnRuZXJcIixcbiAgICBdLFxuICAgIGdldEhvc3RlZFJ1bm5lcnNQbGF0Zm9ybXNGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvcGxhdGZvcm1zXCIsXG4gICAgXSxcbiAgICBnZXRKb2JGb3JXb3JrZmxvd1J1bjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2pvYnMve2pvYl9pZH1cIl0sXG4gICAgZ2V0T3JnUHVibGljS2V5OiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3B1YmxpYy1rZXlcIl0sXG4gICAgZ2V0T3JnU2VjcmV0OiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZ2V0T3JnVmFyaWFibGU6IFtcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX1cIl0sXG4gICAgZ2V0UGVuZGluZ0RlcGxveW1lbnRzRm9yUnVuOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L3BlbmRpbmdfZGVwbG95bWVudHNcIixcbiAgICBdLFxuICAgIGdldFJlcG9QZXJtaXNzaW9uczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcGVybWlzc2lvbnNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJhY3Rpb25zXCIsIFwiZ2V0R2l0aHViQWN0aW9uc1Blcm1pc3Npb25zUmVwb3NpdG9yeVwiXSB9LFxuICAgIF0sXG4gICAgZ2V0UmVwb1B1YmxpY0tleTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3NlY3JldHMvcHVibGljLWtleVwiXSxcbiAgICBnZXRSZXBvU2VjcmV0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJdLFxuICAgIGdldFJlcG9WYXJpYWJsZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX1cIl0sXG4gICAgZ2V0UmV2aWV3c0ZvclJ1bjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hcHByb3ZhbHNcIixcbiAgICBdLFxuICAgIGdldFNlbGZIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH1cIl0sXG4gICAgZ2V0U2VsZkhvc3RlZFJ1bm5lckZvclJlcG86IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH1cIixcbiAgICBdLFxuICAgIGdldFdvcmtmbG93OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvd29ya2Zsb3dzL3t3b3JrZmxvd19pZH1cIl0sXG4gICAgZ2V0V29ya2Zsb3dBY2Nlc3NUb1JlcG9zaXRvcnk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zL2FjY2Vzc1wiLFxuICAgIF0sXG4gICAgZ2V0V29ya2Zsb3dSdW46IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9XCJdLFxuICAgIGdldFdvcmtmbG93UnVuQXR0ZW1wdDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hdHRlbXB0cy97YXR0ZW1wdF9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICBnZXRXb3JrZmxvd1J1blVzYWdlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L3RpbWluZ1wiLFxuICAgIF0sXG4gICAgZ2V0V29ya2Zsb3dVc2FnZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvd29ya2Zsb3dzL3t3b3JrZmxvd19pZH0vdGltaW5nXCIsXG4gICAgXSxcbiAgICBsaXN0QXJ0aWZhY3RzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2FydGlmYWN0c1wiXSxcbiAgICBsaXN0Q3VzdG9tSW1hZ2VWZXJzaW9uc0Zvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy9pbWFnZXMvY3VzdG9tL3tpbWFnZV9kZWZpbml0aW9uX2lkfS92ZXJzaW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdEN1c3RvbUltYWdlc0Zvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy9pbWFnZXMvY3VzdG9tXCIsXG4gICAgXSxcbiAgICBsaXN0RW52aXJvbm1lbnRTZWNyZXRzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9zZWNyZXRzXCIsXG4gICAgXSxcbiAgICBsaXN0RW52aXJvbm1lbnRWYXJpYWJsZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3ZhcmlhYmxlc1wiLFxuICAgIF0sXG4gICAgbGlzdEdpdGh1Ykhvc3RlZFJ1bm5lcnNJbkdyb3VwRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lci1ncm91cHMve3J1bm5lcl9ncm91cF9pZH0vaG9zdGVkLXJ1bm5lcnNcIixcbiAgICBdLFxuICAgIGxpc3RIb3N0ZWRSdW5uZXJzRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVyc1wiXSxcbiAgICBsaXN0Sm9ic0ZvcldvcmtmbG93UnVuOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2pvYnNcIixcbiAgICBdLFxuICAgIGxpc3RKb2JzRm9yV29ya2Zsb3dSdW5BdHRlbXB0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2F0dGVtcHRzL3thdHRlbXB0X251bWJlcn0vam9ic1wiLFxuICAgIF0sXG4gICAgbGlzdExhYmVsc0ZvclNlbGZIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIGxpc3RMYWJlbHNGb3JTZWxmSG9zdGVkUnVubmVyRm9yUmVwbzogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIGxpc3RPcmdTZWNyZXRzOiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzXCJdLFxuICAgIGxpc3RPcmdWYXJpYWJsZXM6IFtcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlc1wiXSxcbiAgICBsaXN0UmVwb09yZ2FuaXphdGlvblNlY3JldHM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL29yZ2FuaXphdGlvbi1zZWNyZXRzXCIsXG4gICAgXSxcbiAgICBsaXN0UmVwb09yZ2FuaXphdGlvblZhcmlhYmxlczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvb3JnYW5pemF0aW9uLXZhcmlhYmxlc1wiLFxuICAgIF0sXG4gICAgbGlzdFJlcG9TZWNyZXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvc2VjcmV0c1wiXSxcbiAgICBsaXN0UmVwb1ZhcmlhYmxlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3ZhcmlhYmxlc1wiXSxcbiAgICBsaXN0UmVwb1dvcmtmbG93czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93c1wiXSxcbiAgICBsaXN0UnVubmVyQXBwbGljYXRpb25zRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL2Rvd25sb2Fkc1wiXSxcbiAgICBsaXN0UnVubmVyQXBwbGljYXRpb25zRm9yUmVwbzogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy9kb3dubG9hZHNcIixcbiAgICBdLFxuICAgIGxpc3RTZWxlY3RlZFJlcG9zRm9yT3JnU2VjcmV0OiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGxpc3RTZWxlY3RlZFJlcG9zRm9yT3JnVmFyaWFibGU6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGxpc3RTZWxlY3RlZFJlcG9zaXRvcmllc0VuYWJsZWRHaXRodWJBY3Rpb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgbGlzdFNlbGZIb3N0ZWRSdW5uZXJzRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzXCJdLFxuICAgIGxpc3RTZWxmSG9zdGVkUnVubmVyc0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzXCJdLFxuICAgIGxpc3RXb3JrZmxvd1J1bkFydGlmYWN0czogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hcnRpZmFjdHNcIixcbiAgICBdLFxuICAgIGxpc3RXb3JrZmxvd1J1bnM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93cy97d29ya2Zsb3dfaWR9L3J1bnNcIixcbiAgICBdLFxuICAgIGxpc3RXb3JrZmxvd1J1bnNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVuc1wiXSxcbiAgICByZVJ1bkpvYkZvcldvcmtmbG93UnVuOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvam9icy97am9iX2lkfS9yZXJ1blwiLFxuICAgIF0sXG4gICAgcmVSdW5Xb3JrZmxvdzogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L3JlcnVuXCJdLFxuICAgIHJlUnVuV29ya2Zsb3dGYWlsZWRKb2JzOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9yZXJ1bi1mYWlsZWQtam9ic1wiLFxuICAgIF0sXG4gICAgcmVtb3ZlQWxsQ3VzdG9tTGFiZWxzRnJvbVNlbGZIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIHJlbW92ZUFsbEN1c3RvbUxhYmVsc0Zyb21TZWxmSG9zdGVkUnVubmVyRm9yUmVwbzogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIHJlbW92ZUN1c3RvbUxhYmVsRnJvbVNlbGZIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHMve25hbWV9XCIsXG4gICAgXSxcbiAgICByZW1vdmVDdXN0b21MYWJlbEZyb21TZWxmSG9zdGVkUnVubmVyRm9yUmVwbzogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHMve25hbWV9XCIsXG4gICAgXSxcbiAgICByZW1vdmVTZWxlY3RlZFJlcG9Gcm9tT3JnU2VjcmV0OiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICByZW1vdmVTZWxlY3RlZFJlcG9Gcm9tT3JnVmFyaWFibGU6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICByZXZpZXdDdXN0b21HYXRlc0ZvclJ1bjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vZGVwbG95bWVudF9wcm90ZWN0aW9uX3J1bGVcIixcbiAgICBdLFxuICAgIHJldmlld1BlbmRpbmdEZXBsb3ltZW50c0ZvclJ1bjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vcGVuZGluZ19kZXBsb3ltZW50c1wiLFxuICAgIF0sXG4gICAgc2V0QWxsb3dlZEFjdGlvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvc2VsZWN0ZWQtYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgc2V0QWxsb3dlZEFjdGlvbnNSZXBvc2l0b3J5OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9wZXJtaXNzaW9ucy9zZWxlY3RlZC1hY3Rpb25zXCIsXG4gICAgXSxcbiAgICBzZXRDdXN0b21MYWJlbHNGb3JTZWxmSG9zdGVkUnVubmVyRm9yT3JnOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzXCIsXG4gICAgXSxcbiAgICBzZXRDdXN0b21MYWJlbHNGb3JTZWxmSG9zdGVkUnVubmVyRm9yUmVwbzogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIHNldEN1c3RvbU9pZGNTdWJDbGFpbUZvclJlcG86IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL29pZGMvY3VzdG9taXphdGlvbi9zdWJcIixcbiAgICBdLFxuICAgIHNldEdpdGh1YkFjdGlvbnNEZWZhdWx0V29ya2Zsb3dQZXJtaXNzaW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9ucy93b3JrZmxvd1wiLFxuICAgIF0sXG4gICAgc2V0R2l0aHViQWN0aW9uc0RlZmF1bHRXb3JrZmxvd1Blcm1pc3Npb25zUmVwb3NpdG9yeTogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcGVybWlzc2lvbnMvd29ya2Zsb3dcIixcbiAgICBdLFxuICAgIHNldEdpdGh1YkFjdGlvbnNQZXJtaXNzaW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9uc1wiLFxuICAgIF0sXG4gICAgc2V0R2l0aHViQWN0aW9uc1Blcm1pc3Npb25zUmVwb3NpdG9yeTogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcGVybWlzc2lvbnNcIixcbiAgICBdLFxuICAgIHNldFNlbGVjdGVkUmVwb3NGb3JPcmdTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgc2V0U2VsZWN0ZWRSZXBvc0Zvck9yZ1ZhcmlhYmxlOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBzZXRTZWxlY3RlZFJlcG9zaXRvcmllc0VuYWJsZWRHaXRodWJBY3Rpb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgc2V0V29ya2Zsb3dBY2Nlc3NUb1JlcG9zaXRvcnk6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zL2FjY2Vzc1wiLFxuICAgIF0sXG4gICAgdXBkYXRlRW52aXJvbm1lbnRWYXJpYWJsZTogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS92YXJpYWJsZXMve25hbWV9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy97aG9zdGVkX3J1bm5lcl9pZH1cIixcbiAgICBdLFxuICAgIHVwZGF0ZU9yZ1ZhcmlhYmxlOiBbXCJQQVRDSCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX1cIl0sXG4gICAgdXBkYXRlUmVwb1ZhcmlhYmxlOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX1cIixcbiAgICBdLFxuICB9LFxuICBhY3Rpdml0eToge1xuICAgIGNoZWNrUmVwb0lzU3RhcnJlZEJ5QXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9zdGFycmVkL3tvd25lcn0ve3JlcG99XCJdLFxuICAgIGRlbGV0ZVJlcG9TdWJzY3JpcHRpb246IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vc3Vic2NyaXB0aW9uXCJdLFxuICAgIGRlbGV0ZVRocmVhZFN1YnNjcmlwdGlvbjogW1xuICAgICAgXCJERUxFVEUgL25vdGlmaWNhdGlvbnMvdGhyZWFkcy97dGhyZWFkX2lkfS9zdWJzY3JpcHRpb25cIixcbiAgICBdLFxuICAgIGdldEZlZWRzOiBbXCJHRVQgL2ZlZWRzXCJdLFxuICAgIGdldFJlcG9TdWJzY3JpcHRpb246IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3Vic2NyaXB0aW9uXCJdLFxuICAgIGdldFRocmVhZDogW1wiR0VUIC9ub3RpZmljYXRpb25zL3RocmVhZHMve3RocmVhZF9pZH1cIl0sXG4gICAgZ2V0VGhyZWFkU3Vic2NyaXB0aW9uRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC9ub3RpZmljYXRpb25zL3RocmVhZHMve3RocmVhZF9pZH0vc3Vic2NyaXB0aW9uXCIsXG4gICAgXSxcbiAgICBsaXN0RXZlbnRzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ldmVudHNcIl0sXG4gICAgbGlzdE5vdGlmaWNhdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC9ub3RpZmljYXRpb25zXCJdLFxuICAgIGxpc3RPcmdFdmVudHNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZXZlbnRzL29yZ3Mve29yZ31cIixcbiAgICBdLFxuICAgIGxpc3RQdWJsaWNFdmVudHM6IFtcIkdFVCAvZXZlbnRzXCJdLFxuICAgIGxpc3RQdWJsaWNFdmVudHNGb3JSZXBvTmV0d29yazogW1wiR0VUIC9uZXR3b3Jrcy97b3duZXJ9L3tyZXBvfS9ldmVudHNcIl0sXG4gICAgbGlzdFB1YmxpY0V2ZW50c0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ldmVudHMvcHVibGljXCJdLFxuICAgIGxpc3RQdWJsaWNPcmdFdmVudHM6IFtcIkdFVCAvb3Jncy97b3JnfS9ldmVudHNcIl0sXG4gICAgbGlzdFJlY2VpdmVkRXZlbnRzRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L3JlY2VpdmVkX2V2ZW50c1wiXSxcbiAgICBsaXN0UmVjZWl2ZWRQdWJsaWNFdmVudHNGb3JVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9yZWNlaXZlZF9ldmVudHMvcHVibGljXCIsXG4gICAgXSxcbiAgICBsaXN0UmVwb0V2ZW50czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ldmVudHNcIl0sXG4gICAgbGlzdFJlcG9Ob3RpZmljYXRpb25zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ub3RpZmljYXRpb25zXCIsXG4gICAgXSxcbiAgICBsaXN0UmVwb3NTdGFycmVkQnlBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3N0YXJyZWRcIl0sXG4gICAgbGlzdFJlcG9zU3RhcnJlZEJ5VXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L3N0YXJyZWRcIl0sXG4gICAgbGlzdFJlcG9zV2F0Y2hlZEJ5VXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L3N1YnNjcmlwdGlvbnNcIl0sXG4gICAgbGlzdFN0YXJnYXplcnNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXJnYXplcnNcIl0sXG4gICAgbGlzdFdhdGNoZWRSZXBvc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvc3Vic2NyaXB0aW9uc1wiXSxcbiAgICBsaXN0V2F0Y2hlcnNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N1YnNjcmliZXJzXCJdLFxuICAgIG1hcmtOb3RpZmljYXRpb25zQXNSZWFkOiBbXCJQVVQgL25vdGlmaWNhdGlvbnNcIl0sXG4gICAgbWFya1JlcG9Ob3RpZmljYXRpb25zQXNSZWFkOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L25vdGlmaWNhdGlvbnNcIl0sXG4gICAgbWFya1RocmVhZEFzRG9uZTogW1wiREVMRVRFIC9ub3RpZmljYXRpb25zL3RocmVhZHMve3RocmVhZF9pZH1cIl0sXG4gICAgbWFya1RocmVhZEFzUmVhZDogW1wiUEFUQ0ggL25vdGlmaWNhdGlvbnMvdGhyZWFkcy97dGhyZWFkX2lkfVwiXSxcbiAgICBzZXRSZXBvU3Vic2NyaXB0aW9uOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N1YnNjcmlwdGlvblwiXSxcbiAgICBzZXRUaHJlYWRTdWJzY3JpcHRpb246IFtcbiAgICAgIFwiUFVUIC9ub3RpZmljYXRpb25zL3RocmVhZHMve3RocmVhZF9pZH0vc3Vic2NyaXB0aW9uXCIsXG4gICAgXSxcbiAgICBzdGFyUmVwb0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQVVQgL3VzZXIvc3RhcnJlZC97b3duZXJ9L3tyZXBvfVwiXSxcbiAgICB1bnN0YXJSZXBvRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkRFTEVURSAvdXNlci9zdGFycmVkL3tvd25lcn0ve3JlcG99XCJdLFxuICB9LFxuICBhcHBzOiB7XG4gICAgYWRkUmVwb1RvSW5zdGFsbGF0aW9uOiBbXG4gICAgICBcIlBVVCAvdXNlci9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJhcHBzXCIsIFwiYWRkUmVwb1RvSW5zdGFsbGF0aW9uRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGFkZFJlcG9Ub0luc3RhbGxhdGlvbkZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBVVCAvdXNlci9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIGNoZWNrVG9rZW46IFtcIlBPU1QgL2FwcGxpY2F0aW9ucy97Y2xpZW50X2lkfS90b2tlblwiXSxcbiAgICBjcmVhdGVGcm9tTWFuaWZlc3Q6IFtcIlBPU1QgL2FwcC1tYW5pZmVzdHMve2NvZGV9L2NvbnZlcnNpb25zXCJdLFxuICAgIGNyZWF0ZUluc3RhbGxhdGlvbkFjY2Vzc1Rva2VuOiBbXG4gICAgICBcIlBPU1QgL2FwcC9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L2FjY2Vzc190b2tlbnNcIixcbiAgICBdLFxuICAgIGRlbGV0ZUF1dGhvcml6YXRpb246IFtcIkRFTEVURSAvYXBwbGljYXRpb25zL3tjbGllbnRfaWR9L2dyYW50XCJdLFxuICAgIGRlbGV0ZUluc3RhbGxhdGlvbjogW1wiREVMRVRFIC9hcHAvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfVwiXSxcbiAgICBkZWxldGVUb2tlbjogW1wiREVMRVRFIC9hcHBsaWNhdGlvbnMve2NsaWVudF9pZH0vdG9rZW5cIl0sXG4gICAgZ2V0QXV0aGVudGljYXRlZDogW1wiR0VUIC9hcHBcIl0sXG4gICAgZ2V0QnlTbHVnOiBbXCJHRVQgL2FwcHMve2FwcF9zbHVnfVwiXSxcbiAgICBnZXRJbnN0YWxsYXRpb246IFtcIkdFVCAvYXBwL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH1cIl0sXG4gICAgZ2V0T3JnSW5zdGFsbGF0aW9uOiBbXCJHRVQgL29yZ3Mve29yZ30vaW5zdGFsbGF0aW9uXCJdLFxuICAgIGdldFJlcG9JbnN0YWxsYXRpb246IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaW5zdGFsbGF0aW9uXCJdLFxuICAgIGdldFN1YnNjcmlwdGlvblBsYW5Gb3JBY2NvdW50OiBbXG4gICAgICBcIkdFVCAvbWFya2V0cGxhY2VfbGlzdGluZy9hY2NvdW50cy97YWNjb3VudF9pZH1cIixcbiAgICBdLFxuICAgIGdldFN1YnNjcmlwdGlvblBsYW5Gb3JBY2NvdW50U3R1YmJlZDogW1xuICAgICAgXCJHRVQgL21hcmtldHBsYWNlX2xpc3Rpbmcvc3R1YmJlZC9hY2NvdW50cy97YWNjb3VudF9pZH1cIixcbiAgICBdLFxuICAgIGdldFVzZXJJbnN0YWxsYXRpb246IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9pbnN0YWxsYXRpb25cIl0sXG4gICAgZ2V0V2ViaG9va0NvbmZpZ0ZvckFwcDogW1wiR0VUIC9hcHAvaG9vay9jb25maWdcIl0sXG4gICAgZ2V0V2ViaG9va0RlbGl2ZXJ5OiBbXCJHRVQgL2FwcC9ob29rL2RlbGl2ZXJpZXMve2RlbGl2ZXJ5X2lkfVwiXSxcbiAgICBsaXN0QWNjb3VudHNGb3JQbGFuOiBbXCJHRVQgL21hcmtldHBsYWNlX2xpc3RpbmcvcGxhbnMve3BsYW5faWR9L2FjY291bnRzXCJdLFxuICAgIGxpc3RBY2NvdW50c0ZvclBsYW5TdHViYmVkOiBbXG4gICAgICBcIkdFVCAvbWFya2V0cGxhY2VfbGlzdGluZy9zdHViYmVkL3BsYW5zL3twbGFuX2lkfS9hY2NvdW50c1wiLFxuICAgIF0sXG4gICAgbGlzdEluc3RhbGxhdGlvblJlcG9zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBsaXN0SW5zdGFsbGF0aW9uUmVxdWVzdHNGb3JBdXRoZW50aWNhdGVkQXBwOiBbXG4gICAgICBcIkdFVCAvYXBwL2luc3RhbGxhdGlvbi1yZXF1ZXN0c1wiLFxuICAgIF0sXG4gICAgbGlzdEluc3RhbGxhdGlvbnM6IFtcIkdFVCAvYXBwL2luc3RhbGxhdGlvbnNcIl0sXG4gICAgbGlzdEluc3RhbGxhdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2luc3RhbGxhdGlvbnNcIl0sXG4gICAgbGlzdFBsYW5zOiBbXCJHRVQgL21hcmtldHBsYWNlX2xpc3RpbmcvcGxhbnNcIl0sXG4gICAgbGlzdFBsYW5zU3R1YmJlZDogW1wiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3N0dWJiZWQvcGxhbnNcIl0sXG4gICAgbGlzdFJlcG9zQWNjZXNzaWJsZVRvSW5zdGFsbGF0aW9uOiBbXCJHRVQgL2luc3RhbGxhdGlvbi9yZXBvc2l0b3JpZXNcIl0sXG4gICAgbGlzdFN1YnNjcmlwdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL21hcmtldHBsYWNlX3B1cmNoYXNlc1wiXSxcbiAgICBsaXN0U3Vic2NyaXB0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyU3R1YmJlZDogW1xuICAgICAgXCJHRVQgL3VzZXIvbWFya2V0cGxhY2VfcHVyY2hhc2VzL3N0dWJiZWRcIixcbiAgICBdLFxuICAgIGxpc3RXZWJob29rRGVsaXZlcmllczogW1wiR0VUIC9hcHAvaG9vay9kZWxpdmVyaWVzXCJdLFxuICAgIHJlZGVsaXZlcldlYmhvb2tEZWxpdmVyeTogW1xuICAgICAgXCJQT1NUIC9hcHAvaG9vay9kZWxpdmVyaWVzL3tkZWxpdmVyeV9pZH0vYXR0ZW1wdHNcIixcbiAgICBdLFxuICAgIHJlbW92ZVJlcG9Gcm9tSW5zdGFsbGF0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJhcHBzXCIsIFwicmVtb3ZlUmVwb0Zyb21JbnN0YWxsYXRpb25Gb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgcmVtb3ZlUmVwb0Zyb21JbnN0YWxsYXRpb25Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICByZXNldFRva2VuOiBbXCJQQVRDSCAvYXBwbGljYXRpb25zL3tjbGllbnRfaWR9L3Rva2VuXCJdLFxuICAgIHJldm9rZUluc3RhbGxhdGlvbkFjY2Vzc1Rva2VuOiBbXCJERUxFVEUgL2luc3RhbGxhdGlvbi90b2tlblwiXSxcbiAgICBzY29wZVRva2VuOiBbXCJQT1NUIC9hcHBsaWNhdGlvbnMve2NsaWVudF9pZH0vdG9rZW4vc2NvcGVkXCJdLFxuICAgIHN1c3BlbmRJbnN0YWxsYXRpb246IFtcIlBVVCAvYXBwL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH0vc3VzcGVuZGVkXCJdLFxuICAgIHVuc3VzcGVuZEluc3RhbGxhdGlvbjogW1xuICAgICAgXCJERUxFVEUgL2FwcC9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L3N1c3BlbmRlZFwiLFxuICAgIF0sXG4gICAgdXBkYXRlV2ViaG9va0NvbmZpZ0ZvckFwcDogW1wiUEFUQ0ggL2FwcC9ob29rL2NvbmZpZ1wiXSxcbiAgfSxcbiAgYmlsbGluZzoge1xuICAgIGdldEdpdGh1YkFjdGlvbnNCaWxsaW5nT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvYmlsbGluZy9hY3Rpb25zXCJdLFxuICAgIGdldEdpdGh1YkFjdGlvbnNCaWxsaW5nVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc2V0dGluZ3MvYmlsbGluZy9hY3Rpb25zXCIsXG4gICAgXSxcbiAgICBnZXRHaXRodWJCaWxsaW5nUHJlbWl1bVJlcXVlc3RVc2FnZVJlcG9ydE9yZzogW1xuICAgICAgXCJHRVQgL29yZ2FuaXphdGlvbnMve29yZ30vc2V0dGluZ3MvYmlsbGluZy9wcmVtaXVtX3JlcXVlc3QvdXNhZ2VcIixcbiAgICBdLFxuICAgIGdldEdpdGh1YkJpbGxpbmdQcmVtaXVtUmVxdWVzdFVzYWdlUmVwb3J0VXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc2V0dGluZ3MvYmlsbGluZy9wcmVtaXVtX3JlcXVlc3QvdXNhZ2VcIixcbiAgICBdLFxuICAgIGdldEdpdGh1YkJpbGxpbmdVc2FnZVJlcG9ydE9yZzogW1xuICAgICAgXCJHRVQgL29yZ2FuaXphdGlvbnMve29yZ30vc2V0dGluZ3MvYmlsbGluZy91c2FnZVwiLFxuICAgIF0sXG4gICAgZ2V0R2l0aHViQmlsbGluZ1VzYWdlUmVwb3J0VXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc2V0dGluZ3MvYmlsbGluZy91c2FnZVwiLFxuICAgIF0sXG4gICAgZ2V0R2l0aHViUGFja2FnZXNCaWxsaW5nT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvYmlsbGluZy9wYWNrYWdlc1wiXSxcbiAgICBnZXRHaXRodWJQYWNrYWdlc0JpbGxpbmdVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zZXR0aW5ncy9iaWxsaW5nL3BhY2thZ2VzXCIsXG4gICAgXSxcbiAgICBnZXRTaGFyZWRTdG9yYWdlQmlsbGluZ09yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvYmlsbGluZy9zaGFyZWQtc3RvcmFnZVwiLFxuICAgIF0sXG4gICAgZ2V0U2hhcmVkU3RvcmFnZUJpbGxpbmdVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zZXR0aW5ncy9iaWxsaW5nL3NoYXJlZC1zdG9yYWdlXCIsXG4gICAgXSxcbiAgfSxcbiAgY2FtcGFpZ25zOiB7XG4gICAgY3JlYXRlQ2FtcGFpZ246IFtcIlBPU1QgL29yZ3Mve29yZ30vY2FtcGFpZ25zXCJdLFxuICAgIGRlbGV0ZUNhbXBhaWduOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vY2FtcGFpZ25zL3tjYW1wYWlnbl9udW1iZXJ9XCJdLFxuICAgIGdldENhbXBhaWduU3VtbWFyeTogW1wiR0VUIC9vcmdzL3tvcmd9L2NhbXBhaWducy97Y2FtcGFpZ25fbnVtYmVyfVwiXSxcbiAgICBsaXN0T3JnQ2FtcGFpZ25zOiBbXCJHRVQgL29yZ3Mve29yZ30vY2FtcGFpZ25zXCJdLFxuICAgIHVwZGF0ZUNhbXBhaWduOiBbXCJQQVRDSCAvb3Jncy97b3JnfS9jYW1wYWlnbnMve2NhbXBhaWduX251bWJlcn1cIl0sXG4gIH0sXG4gIGNoZWNrczoge1xuICAgIGNyZWF0ZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stcnVuc1wiXSxcbiAgICBjcmVhdGVTdWl0ZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stc3VpdGVzXCJdLFxuICAgIGdldDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1ydW5zL3tjaGVja19ydW5faWR9XCJdLFxuICAgIGdldFN1aXRlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXN1aXRlcy97Y2hlY2tfc3VpdGVfaWR9XCJdLFxuICAgIGxpc3RBbm5vdGF0aW9uczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXJ1bnMve2NoZWNrX3J1bl9pZH0vYW5ub3RhdGlvbnNcIixcbiAgICBdLFxuICAgIGxpc3RGb3JSZWY6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97cmVmfS9jaGVjay1ydW5zXCJdLFxuICAgIGxpc3RGb3JTdWl0ZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXN1aXRlcy97Y2hlY2tfc3VpdGVfaWR9L2NoZWNrLXJ1bnNcIixcbiAgICBdLFxuICAgIGxpc3RTdWl0ZXNGb3JSZWY6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97cmVmfS9jaGVjay1zdWl0ZXNcIl0sXG4gICAgcmVyZXF1ZXN0UnVuOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXJ1bnMve2NoZWNrX3J1bl9pZH0vcmVyZXF1ZXN0XCIsXG4gICAgXSxcbiAgICByZXJlcXVlc3RTdWl0ZTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1zdWl0ZXMve2NoZWNrX3N1aXRlX2lkfS9yZXJlcXVlc3RcIixcbiAgICBdLFxuICAgIHNldFN1aXRlc1ByZWZlcmVuY2VzOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1zdWl0ZXMvcHJlZmVyZW5jZXNcIixcbiAgICBdLFxuICAgIHVwZGF0ZTogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXJ1bnMve2NoZWNrX3J1bl9pZH1cIl0sXG4gIH0sXG4gIGNvZGVTY2FubmluZzoge1xuICAgIGNvbW1pdEF1dG9maXg6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn0vYXV0b2ZpeC9jb21taXRzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVBdXRvZml4OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9L2F1dG9maXhcIixcbiAgICBdLFxuICAgIGNyZWF0ZVZhcmlhbnRBbmFseXNpczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2NvZGVxbC92YXJpYW50LWFuYWx5c2VzXCIsXG4gICAgXSxcbiAgICBkZWxldGVBbmFseXNpczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYW5hbHlzZXMve2FuYWx5c2lzX2lkfXs/Y29uZmlybV9kZWxldGV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVDb2RlcWxEYXRhYmFzZTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvY29kZXFsL2RhdGFiYXNlcy97bGFuZ3VhZ2V9XCIsXG4gICAgXSxcbiAgICBnZXRBbGVydDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZFBhcmFtZXRlcnM6IHsgYWxlcnRfaWQ6IFwiYWxlcnRfbnVtYmVyXCIgfSB9LFxuICAgIF0sXG4gICAgZ2V0QW5hbHlzaXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FuYWx5c2VzL3thbmFseXNpc19pZH1cIixcbiAgICBdLFxuICAgIGdldEF1dG9maXg6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfS9hdXRvZml4XCIsXG4gICAgXSxcbiAgICBnZXRDb2RlcWxEYXRhYmFzZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvY29kZXFsL2RhdGFiYXNlcy97bGFuZ3VhZ2V9XCIsXG4gICAgXSxcbiAgICBnZXREZWZhdWx0U2V0dXA6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9kZWZhdWx0LXNldHVwXCJdLFxuICAgIGdldFNhcmlmOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvc2FyaWZzL3tzYXJpZl9pZH1cIl0sXG4gICAgZ2V0VmFyaWFudEFuYWx5c2lzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9jb2RlcWwvdmFyaWFudC1hbmFseXNlcy97Y29kZXFsX3ZhcmlhbnRfYW5hbHlzaXNfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRWYXJpYW50QW5hbHlzaXNSZXBvVGFzazogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvY29kZXFsL3ZhcmlhbnQtYW5hbHlzZXMve2NvZGVxbF92YXJpYW50X2FuYWx5c2lzX2lkfS9yZXBvcy97cmVwb19vd25lcn0ve3JlcG9fbmFtZX1cIixcbiAgICBdLFxuICAgIGxpc3RBbGVydEluc3RhbmNlczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9L2luc3RhbmNlc1wiLFxuICAgIF0sXG4gICAgbGlzdEFsZXJ0c0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2NvZGUtc2Nhbm5pbmcvYWxlcnRzXCJdLFxuICAgIGxpc3RBbGVydHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzXCJdLFxuICAgIGxpc3RBbGVydHNJbnN0YW5jZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfS9pbnN0YW5jZXNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJjb2RlU2Nhbm5pbmdcIiwgXCJsaXN0QWxlcnRJbnN0YW5jZXNcIl0gfSxcbiAgICBdLFxuICAgIGxpc3RDb2RlcWxEYXRhYmFzZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2NvZGVxbC9kYXRhYmFzZXNcIixcbiAgICBdLFxuICAgIGxpc3RSZWNlbnRBbmFseXNlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FuYWx5c2VzXCJdLFxuICAgIHVwZGF0ZUFsZXJ0OiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlRGVmYXVsdFNldHVwOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2RlZmF1bHQtc2V0dXBcIixcbiAgICBdLFxuICAgIHVwbG9hZFNhcmlmOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL3Nhcmlmc1wiXSxcbiAgfSxcbiAgY29kZVNlY3VyaXR5OiB7XG4gICAgYXR0YWNoQ29uZmlndXJhdGlvbjogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9L2F0dGFjaFwiLFxuICAgIF0sXG4gICAgYXR0YWNoRW50ZXJwcmlzZUNvbmZpZ3VyYXRpb246IFtcbiAgICAgIFwiUE9TVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9L2F0dGFjaFwiLFxuICAgIF0sXG4gICAgY3JlYXRlQ29uZmlndXJhdGlvbjogW1wiUE9TVCAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zXCJdLFxuICAgIGNyZWF0ZUNvbmZpZ3VyYXRpb25Gb3JFbnRlcnByaXNlOiBbXG4gICAgICBcIlBPU1QgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zXCIsXG4gICAgXSxcbiAgICBkZWxldGVDb25maWd1cmF0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlQ29uZmlndXJhdGlvbkZvckVudGVycHJpc2U6IFtcbiAgICAgIFwiREVMRVRFIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRldGFjaENvbmZpZ3VyYXRpb246IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMvZGV0YWNoXCIsXG4gICAgXSxcbiAgICBnZXRDb25maWd1cmF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0Q29uZmlndXJhdGlvbkZvclJlcG9zaXRvcnk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNlY3VyaXR5LWNvbmZpZ3VyYXRpb25cIixcbiAgICBdLFxuICAgIGdldENvbmZpZ3VyYXRpb25zRm9yRW50ZXJwcmlzZTogW1xuICAgICAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zXCIsXG4gICAgXSxcbiAgICBnZXRDb25maWd1cmF0aW9uc0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnNcIl0sXG4gICAgZ2V0RGVmYXVsdENvbmZpZ3VyYXRpb25zOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL2RlZmF1bHRzXCIsXG4gICAgXSxcbiAgICBnZXREZWZhdWx0Q29uZmlndXJhdGlvbnNGb3JFbnRlcnByaXNlOiBbXG4gICAgICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMvZGVmYXVsdHNcIixcbiAgICBdLFxuICAgIGdldFJlcG9zaXRvcmllc0ZvckNvbmZpZ3VyYXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgZ2V0UmVwb3NpdG9yaWVzRm9yRW50ZXJwcmlzZUNvbmZpZ3VyYXRpb246IFtcbiAgICAgIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBnZXRTaW5nbGVDb25maWd1cmF0aW9uRm9yRW50ZXJwcmlzZTogW1xuICAgICAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgc2V0Q29uZmlndXJhdGlvbkFzRGVmYXVsdDogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH0vZGVmYXVsdHNcIixcbiAgICBdLFxuICAgIHNldENvbmZpZ3VyYXRpb25Bc0RlZmF1bHRGb3JFbnRlcnByaXNlOiBbXG4gICAgICBcIlBVVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9L2RlZmF1bHRzXCIsXG4gICAgXSxcbiAgICB1cGRhdGVDb25maWd1cmF0aW9uOiBbXG4gICAgICBcIlBBVENIIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVFbnRlcnByaXNlQ29uZmlndXJhdGlvbjogW1xuICAgICAgXCJQQVRDSCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9XCIsXG4gICAgXSxcbiAgfSxcbiAgY29kZXNPZkNvbmR1Y3Q6IHtcbiAgICBnZXRBbGxDb2Rlc09mQ29uZHVjdDogW1wiR0VUIC9jb2Rlc19vZl9jb25kdWN0XCJdLFxuICAgIGdldENvbmR1Y3RDb2RlOiBbXCJHRVQgL2NvZGVzX29mX2NvbmR1Y3Qve2tleX1cIl0sXG4gIH0sXG4gIGNvZGVzcGFjZXM6IHtcbiAgICBhZGRSZXBvc2l0b3J5Rm9yU2VjcmV0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUFVUIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIGFkZFNlbGVjdGVkUmVwb1RvT3JnU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBjaGVja1Blcm1pc3Npb25zRm9yRGV2Y29udGFpbmVyOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9wZXJtaXNzaW9uc19jaGVja1wiLFxuICAgIF0sXG4gICAgY29kZXNwYWNlTWFjaGluZXNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9L21hY2hpbmVzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9jb2Rlc3BhY2VzXCJdLFxuICAgIGNyZWF0ZU9yVXBkYXRlT3JnU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgY3JlYXRlT3JVcGRhdGVSZXBvU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGNyZWF0ZU9yVXBkYXRlU2VjcmV0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUFVUIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBjcmVhdGVXaXRoUHJGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L2NvZGVzcGFjZXNcIixcbiAgICBdLFxuICAgIGNyZWF0ZVdpdGhSZXBvRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlc1wiLFxuICAgIF0sXG4gICAgZGVsZXRlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkRFTEVURSAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX1cIl0sXG4gICAgZGVsZXRlRnJvbU9yZ2FuaXphdGlvbjogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vbWVtYmVycy97dXNlcm5hbWV9L2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlT3JnU2VjcmV0OiBbXCJERUxFVEUgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZGVsZXRlUmVwb1NlY3JldDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVTZWNyZXRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGV4cG9ydEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBPU1QgL3VzZXIvY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9L2V4cG9ydHNcIixcbiAgICBdLFxuICAgIGdldENvZGVzcGFjZXNGb3JVc2VySW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L21lbWJlcnMve3VzZXJuYW1lfS9jb2Rlc3BhY2VzXCIsXG4gICAgXSxcbiAgICBnZXRFeHBvcnREZXRhaWxzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfS9leHBvcnRzL3tleHBvcnRfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfVwiXSxcbiAgICBnZXRPcmdQdWJsaWNLZXk6IFtcIkdFVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHMvcHVibGljLWtleVwiXSxcbiAgICBnZXRPcmdTZWNyZXQ6IFtcIkdFVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfVwiXSxcbiAgICBnZXRQdWJsaWNLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzL3B1YmxpYy1rZXlcIixcbiAgICBdLFxuICAgIGdldFJlcG9QdWJsaWNLZXk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL3NlY3JldHMvcHVibGljLWtleVwiLFxuICAgIF0sXG4gICAgZ2V0UmVwb1NlY3JldDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBnZXRTZWNyZXRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGxpc3REZXZjb250YWluZXJzSW5SZXBvc2l0b3J5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL2RldmNvbnRhaW5lcnNcIixcbiAgICBdLFxuICAgIGxpc3RGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2NvZGVzcGFjZXNcIl0sXG4gICAgbGlzdEluT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZFBhcmFtZXRlcnM6IHsgb3JnX2lkOiBcIm9yZ1wiIH0gfSxcbiAgICBdLFxuICAgIGxpc3RJblJlcG9zaXRvcnlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXNcIixcbiAgICBdLFxuICAgIGxpc3RPcmdTZWNyZXRzOiBbXCJHRVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzXCJdLFxuICAgIGxpc3RSZXBvU2VjcmV0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL3NlY3JldHNcIl0sXG4gICAgbGlzdFJlcG9zaXRvcmllc0ZvclNlY3JldEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGxpc3RTZWNyZXRzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHNcIl0sXG4gICAgbGlzdFNlbGVjdGVkUmVwb3NGb3JPcmdTZWNyZXQ6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgcHJlRmxpZ2h0V2l0aFJlcG9Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvbmV3XCIsXG4gICAgXSxcbiAgICBwdWJsaXNoRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUE9TVCAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX0vcHVibGlzaFwiLFxuICAgIF0sXG4gICAgcmVtb3ZlUmVwb3NpdG9yeUZvclNlY3JldEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICByZW1vdmVTZWxlY3RlZFJlcG9Gcm9tT3JnU2VjcmV0OiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICByZXBvTWFjaGluZXNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvbWFjaGluZXNcIixcbiAgICBdLFxuICAgIHNldFJlcG9zaXRvcmllc0ZvclNlY3JldEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBVVCAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIHNldFNlbGVjdGVkUmVwb3NGb3JPcmdTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgc3RhcnRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX0vc3RhcnRcIl0sXG4gICAgc3RvcEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfS9zdG9wXCJdLFxuICAgIHN0b3BJbk9yZ2FuaXphdGlvbjogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L21lbWJlcnMve3VzZXJuYW1lfS9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX0vc3RvcFwiLFxuICAgIF0sXG4gICAgdXBkYXRlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBBVENIIC91c2VyL2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfVwiXSxcbiAgfSxcbiAgY29waWxvdDoge1xuICAgIGFkZENvcGlsb3RTZWF0c0ZvclRlYW1zOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vY29waWxvdC9iaWxsaW5nL3NlbGVjdGVkX3RlYW1zXCIsXG4gICAgXSxcbiAgICBhZGRDb3BpbG90U2VhdHNGb3JVc2VyczogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2NvcGlsb3QvYmlsbGluZy9zZWxlY3RlZF91c2Vyc1wiLFxuICAgIF0sXG4gICAgY2FuY2VsQ29waWxvdFNlYXRBc3NpZ25tZW50Rm9yVGVhbXM6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2NvcGlsb3QvYmlsbGluZy9zZWxlY3RlZF90ZWFtc1wiLFxuICAgIF0sXG4gICAgY2FuY2VsQ29waWxvdFNlYXRBc3NpZ25tZW50Rm9yVXNlcnM6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2NvcGlsb3QvYmlsbGluZy9zZWxlY3RlZF91c2Vyc1wiLFxuICAgIF0sXG4gICAgY29waWxvdE1ldHJpY3NGb3JPcmdhbml6YXRpb246IFtcIkdFVCAvb3Jncy97b3JnfS9jb3BpbG90L21ldHJpY3NcIl0sXG4gICAgY29waWxvdE1ldHJpY3NGb3JUZWFtOiBbXCJHRVQgL29yZ3Mve29yZ30vdGVhbS97dGVhbV9zbHVnfS9jb3BpbG90L21ldHJpY3NcIl0sXG4gICAgZ2V0Q29waWxvdE9yZ2FuaXphdGlvbkRldGFpbHM6IFtcIkdFVCAvb3Jncy97b3JnfS9jb3BpbG90L2JpbGxpbmdcIl0sXG4gICAgZ2V0Q29waWxvdFNlYXREZXRhaWxzRm9yVXNlcjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vbWVtYmVycy97dXNlcm5hbWV9L2NvcGlsb3RcIixcbiAgICBdLFxuICAgIGxpc3RDb3BpbG90U2VhdHM6IFtcIkdFVCAvb3Jncy97b3JnfS9jb3BpbG90L2JpbGxpbmcvc2VhdHNcIl0sXG4gIH0sXG4gIGNyZWRlbnRpYWxzOiB7IHJldm9rZTogW1wiUE9TVCAvY3JlZGVudGlhbHMvcmV2b2tlXCJdIH0sXG4gIGRlcGVuZGFib3Q6IHtcbiAgICBhZGRTZWxlY3RlZFJlcG9Ub09yZ1NlY3JldDogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgY3JlYXRlT3JVcGRhdGVPcmdTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBjcmVhdGVPclVwZGF0ZVJlcG9TZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlT3JnU2VjcmV0OiBbXCJERUxFVEUgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZGVsZXRlUmVwb1NlY3JldDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGFib3Qvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBnZXRBbGVydDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L2FsZXJ0cy97YWxlcnRfbnVtYmVyfVwiXSxcbiAgICBnZXRPcmdQdWJsaWNLZXk6IFtcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHMvcHVibGljLWtleVwiXSxcbiAgICBnZXRPcmdTZWNyZXQ6IFtcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfVwiXSxcbiAgICBnZXRSZXBvUHVibGljS2V5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9zZWNyZXRzL3B1YmxpYy1rZXlcIixcbiAgICBdLFxuICAgIGdldFJlcG9TZWNyZXQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgbGlzdEFsZXJ0c0ZvckVudGVycHJpc2U6IFtcbiAgICAgIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vZGVwZW5kYWJvdC9hbGVydHNcIixcbiAgICBdLFxuICAgIGxpc3RBbGVydHNGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L2FsZXJ0c1wiXSxcbiAgICBsaXN0QWxlcnRzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L2FsZXJ0c1wiXSxcbiAgICBsaXN0T3JnU2VjcmV0czogW1wiR0VUIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0c1wiXSxcbiAgICBsaXN0UmVwb1NlY3JldHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9zZWNyZXRzXCJdLFxuICAgIGxpc3RTZWxlY3RlZFJlcG9zRm9yT3JnU2VjcmV0OiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIHJlbW92ZVNlbGVjdGVkUmVwb0Zyb21PcmdTZWNyZXQ6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIHJlcG9zaXRvcnlBY2Nlc3NGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdhbml6YXRpb25zL3tvcmd9L2RlcGVuZGFib3QvcmVwb3NpdG9yeS1hY2Nlc3NcIixcbiAgICBdLFxuICAgIHNldFJlcG9zaXRvcnlBY2Nlc3NEZWZhdWx0TGV2ZWw6IFtcbiAgICAgIFwiUFVUIC9vcmdhbml6YXRpb25zL3tvcmd9L2RlcGVuZGFib3QvcmVwb3NpdG9yeS1hY2Nlc3MvZGVmYXVsdC1sZXZlbFwiLFxuICAgIF0sXG4gICAgc2V0U2VsZWN0ZWRSZXBvc0Zvck9yZ1NlY3JldDogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICB1cGRhdGVBbGVydDogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9hbGVydHMve2FsZXJ0X251bWJlcn1cIixcbiAgICBdLFxuICAgIHVwZGF0ZVJlcG9zaXRvcnlBY2Nlc3NGb3JPcmc6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ2FuaXphdGlvbnMve29yZ30vZGVwZW5kYWJvdC9yZXBvc2l0b3J5LWFjY2Vzc1wiLFxuICAgIF0sXG4gIH0sXG4gIGRlcGVuZGVuY3lHcmFwaDoge1xuICAgIGNyZWF0ZVJlcG9zaXRvcnlTbmFwc2hvdDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRlbmN5LWdyYXBoL3NuYXBzaG90c1wiLFxuICAgIF0sXG4gICAgZGlmZlJhbmdlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kZW5jeS1ncmFwaC9jb21wYXJlL3tiYXNlaGVhZH1cIixcbiAgICBdLFxuICAgIGV4cG9ydFNib206IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kZW5jeS1ncmFwaC9zYm9tXCJdLFxuICB9LFxuICBlbW9qaXM6IHsgZ2V0OiBbXCJHRVQgL2Vtb2ppc1wiXSB9LFxuICBlbnRlcnByaXNlVGVhbU1lbWJlcnNoaXBzOiB7XG4gICAgYWRkOiBbXG4gICAgICBcIlBVVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L21lbWJlcnNoaXBzL3t1c2VybmFtZX1cIixcbiAgICBdLFxuICAgIGJ1bGtBZGQ6IFtcbiAgICAgIFwiUE9TVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L21lbWJlcnNoaXBzL2FkZFwiLFxuICAgIF0sXG4gICAgYnVsa1JlbW92ZTogW1xuICAgICAgXCJQT1NUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vbWVtYmVyc2hpcHMvcmVtb3ZlXCIsXG4gICAgXSxcbiAgICBnZXQ6IFtcbiAgICAgIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vbWVtYmVyc2hpcHMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgbGlzdDogW1wiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vbWVtYmVyc2hpcHNcIl0sXG4gICAgcmVtb3ZlOiBbXG4gICAgICBcIkRFTEVURSAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L21lbWJlcnNoaXBzL3t1c2VybmFtZX1cIixcbiAgICBdLFxuICB9LFxuICBlbnRlcnByaXNlVGVhbU9yZ2FuaXphdGlvbnM6IHtcbiAgICBhZGQ6IFtcbiAgICAgIFwiUFVUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vb3JnYW5pemF0aW9ucy97b3JnfVwiLFxuICAgIF0sXG4gICAgYnVsa0FkZDogW1xuICAgICAgXCJQT1NUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vb3JnYW5pemF0aW9ucy9hZGRcIixcbiAgICBdLFxuICAgIGJ1bGtSZW1vdmU6IFtcbiAgICAgIFwiUE9TVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L29yZ2FuaXphdGlvbnMvcmVtb3ZlXCIsXG4gICAgXSxcbiAgICBkZWxldGU6IFtcbiAgICAgIFwiREVMRVRFIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vb3JnYW5pemF0aW9ucy97b3JnfVwiLFxuICAgIF0sXG4gICAgZ2V0QXNzaWdubWVudDogW1xuICAgICAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9vcmdhbml6YXRpb25zL3tvcmd9XCIsXG4gICAgXSxcbiAgICBnZXRBc3NpZ25tZW50czogW1xuICAgICAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9vcmdhbml6YXRpb25zXCIsXG4gICAgXSxcbiAgfSxcbiAgZW50ZXJwcmlzZVRlYW1zOiB7XG4gICAgY3JlYXRlOiBbXCJQT1NUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXNcIl0sXG4gICAgZGVsZXRlOiBbXCJERUxFVEUgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97dGVhbV9zbHVnfVwiXSxcbiAgICBnZXQ6IFtcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3t0ZWFtX3NsdWd9XCJdLFxuICAgIGxpc3Q6IFtcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zXCJdLFxuICAgIHVwZGF0ZTogW1wiUEFUQ0ggL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97dGVhbV9zbHVnfVwiXSxcbiAgfSxcbiAgZ2lzdHM6IHtcbiAgICBjaGVja0lzU3RhcnJlZDogW1wiR0VUIC9naXN0cy97Z2lzdF9pZH0vc3RhclwiXSxcbiAgICBjcmVhdGU6IFtcIlBPU1QgL2dpc3RzXCJdLFxuICAgIGNyZWF0ZUNvbW1lbnQ6IFtcIlBPU1QgL2dpc3RzL3tnaXN0X2lkfS9jb21tZW50c1wiXSxcbiAgICBkZWxldGU6IFtcIkRFTEVURSAvZ2lzdHMve2dpc3RfaWR9XCJdLFxuICAgIGRlbGV0ZUNvbW1lbnQ6IFtcIkRFTEVURSAvZ2lzdHMve2dpc3RfaWR9L2NvbW1lbnRzL3tjb21tZW50X2lkfVwiXSxcbiAgICBmb3JrOiBbXCJQT1NUIC9naXN0cy97Z2lzdF9pZH0vZm9ya3NcIl0sXG4gICAgZ2V0OiBbXCJHRVQgL2dpc3RzL3tnaXN0X2lkfVwiXSxcbiAgICBnZXRDb21tZW50OiBbXCJHRVQgL2dpc3RzL3tnaXN0X2lkfS9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gICAgZ2V0UmV2aXNpb246IFtcIkdFVCAvZ2lzdHMve2dpc3RfaWR9L3tzaGF9XCJdLFxuICAgIGxpc3Q6IFtcIkdFVCAvZ2lzdHNcIl0sXG4gICAgbGlzdENvbW1lbnRzOiBbXCJHRVQgL2dpc3RzL3tnaXN0X2lkfS9jb21tZW50c1wiXSxcbiAgICBsaXN0Q29tbWl0czogW1wiR0VUIC9naXN0cy97Z2lzdF9pZH0vY29tbWl0c1wiXSxcbiAgICBsaXN0Rm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2dpc3RzXCJdLFxuICAgIGxpc3RGb3JrczogW1wiR0VUIC9naXN0cy97Z2lzdF9pZH0vZm9ya3NcIl0sXG4gICAgbGlzdFB1YmxpYzogW1wiR0VUIC9naXN0cy9wdWJsaWNcIl0sXG4gICAgbGlzdFN0YXJyZWQ6IFtcIkdFVCAvZ2lzdHMvc3RhcnJlZFwiXSxcbiAgICBzdGFyOiBbXCJQVVQgL2dpc3RzL3tnaXN0X2lkfS9zdGFyXCJdLFxuICAgIHVuc3RhcjogW1wiREVMRVRFIC9naXN0cy97Z2lzdF9pZH0vc3RhclwiXSxcbiAgICB1cGRhdGU6IFtcIlBBVENIIC9naXN0cy97Z2lzdF9pZH1cIl0sXG4gICAgdXBkYXRlQ29tbWVudDogW1wiUEFUQ0ggL2dpc3RzL3tnaXN0X2lkfS9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gIH0sXG4gIGdpdDoge1xuICAgIGNyZWF0ZUJsb2I6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC9ibG9ic1wiXSxcbiAgICBjcmVhdGVDb21taXQ6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC9jb21taXRzXCJdLFxuICAgIGNyZWF0ZVJlZjogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L3JlZnNcIl0sXG4gICAgY3JlYXRlVGFnOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvdGFnc1wiXSxcbiAgICBjcmVhdGVUcmVlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvdHJlZXNcIl0sXG4gICAgZGVsZXRlUmVmOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC9yZWZzL3tyZWZ9XCJdLFxuICAgIGdldEJsb2I6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L2Jsb2JzL3tmaWxlX3NoYX1cIl0sXG4gICAgZ2V0Q29tbWl0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC9jb21taXRzL3tjb21taXRfc2hhfVwiXSxcbiAgICBnZXRSZWY6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L3JlZi97cmVmfVwiXSxcbiAgICBnZXRUYWc6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L3RhZ3Mve3RhZ19zaGF9XCJdLFxuICAgIGdldFRyZWU6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L3RyZWVzL3t0cmVlX3NoYX1cIl0sXG4gICAgbGlzdE1hdGNoaW5nUmVmczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvbWF0Y2hpbmctcmVmcy97cmVmfVwiXSxcbiAgICB1cGRhdGVSZWY6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvcmVmcy97cmVmfVwiXSxcbiAgfSxcbiAgZ2l0aWdub3JlOiB7XG4gICAgZ2V0QWxsVGVtcGxhdGVzOiBbXCJHRVQgL2dpdGlnbm9yZS90ZW1wbGF0ZXNcIl0sXG4gICAgZ2V0VGVtcGxhdGU6IFtcIkdFVCAvZ2l0aWdub3JlL3RlbXBsYXRlcy97bmFtZX1cIl0sXG4gIH0sXG4gIGhvc3RlZENvbXB1dGU6IHtcbiAgICBjcmVhdGVOZXR3b3JrQ29uZmlndXJhdGlvbkZvck9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3NldHRpbmdzL25ldHdvcmstY29uZmlndXJhdGlvbnNcIixcbiAgICBdLFxuICAgIGRlbGV0ZU5ldHdvcmtDb25maWd1cmF0aW9uRnJvbU9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vc2V0dGluZ3MvbmV0d29yay1jb25maWd1cmF0aW9ucy97bmV0d29ya19jb25maWd1cmF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0TmV0d29ya0NvbmZpZ3VyYXRpb25Gb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL25ldHdvcmstY29uZmlndXJhdGlvbnMve25ldHdvcmtfY29uZmlndXJhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGdldE5ldHdvcmtTZXR0aW5nc0Zvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvbmV0d29yay1zZXR0aW5ncy97bmV0d29ya19zZXR0aW5nc19pZH1cIixcbiAgICBdLFxuICAgIGxpc3ROZXR3b3JrQ29uZmlndXJhdGlvbnNGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL25ldHdvcmstY29uZmlndXJhdGlvbnNcIixcbiAgICBdLFxuICAgIHVwZGF0ZU5ldHdvcmtDb25maWd1cmF0aW9uRm9yT3JnOiBbXG4gICAgICBcIlBBVENIIC9vcmdzL3tvcmd9L3NldHRpbmdzL25ldHdvcmstY29uZmlndXJhdGlvbnMve25ldHdvcmtfY29uZmlndXJhdGlvbl9pZH1cIixcbiAgICBdLFxuICB9LFxuICBpbnRlcmFjdGlvbnM6IHtcbiAgICBnZXRSZXN0cmljdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2ludGVyYWN0aW9uLWxpbWl0c1wiXSxcbiAgICBnZXRSZXN0cmljdGlvbnNGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9pbnRlcmFjdGlvbi1saW1pdHNcIl0sXG4gICAgZ2V0UmVzdHJpY3Rpb25zRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbnRlcmFjdGlvbi1saW1pdHNcIl0sXG4gICAgZ2V0UmVzdHJpY3Rpb25zRm9yWW91clB1YmxpY1JlcG9zOiBbXG4gICAgICBcIkdFVCAvdXNlci9pbnRlcmFjdGlvbi1saW1pdHNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJpbnRlcmFjdGlvbnNcIiwgXCJnZXRSZXN0cmljdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgcmVtb3ZlUmVzdHJpY3Rpb25zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkRFTEVURSAvdXNlci9pbnRlcmFjdGlvbi1saW1pdHNcIl0sXG4gICAgcmVtb3ZlUmVzdHJpY3Rpb25zRm9yT3JnOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vaW50ZXJhY3Rpb24tbGltaXRzXCJdLFxuICAgIHJlbW92ZVJlc3RyaWN0aW9uc0ZvclJlcG86IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbnRlcmFjdGlvbi1saW1pdHNcIixcbiAgICBdLFxuICAgIHJlbW92ZVJlc3RyaWN0aW9uc0ZvcllvdXJQdWJsaWNSZXBvczogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvaW50ZXJhY3Rpb24tbGltaXRzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wiaW50ZXJhY3Rpb25zXCIsIFwicmVtb3ZlUmVzdHJpY3Rpb25zRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIHNldFJlc3RyaWN0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQVVQgL3VzZXIvaW50ZXJhY3Rpb24tbGltaXRzXCJdLFxuICAgIHNldFJlc3RyaWN0aW9uc0Zvck9yZzogW1wiUFVUIC9vcmdzL3tvcmd9L2ludGVyYWN0aW9uLWxpbWl0c1wiXSxcbiAgICBzZXRSZXN0cmljdGlvbnNGb3JSZXBvOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ludGVyYWN0aW9uLWxpbWl0c1wiXSxcbiAgICBzZXRSZXN0cmljdGlvbnNGb3JZb3VyUHVibGljUmVwb3M6IFtcbiAgICAgIFwiUFVUIC91c2VyL2ludGVyYWN0aW9uLWxpbWl0c1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcImludGVyYWN0aW9uc1wiLCBcInNldFJlc3RyaWN0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgfSxcbiAgaXNzdWVzOiB7XG4gICAgYWRkQXNzaWduZWVzOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9hc3NpZ25lZXNcIixcbiAgICBdLFxuICAgIGFkZEJsb2NrZWRCeURlcGVuZGVuY3k6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2RlcGVuZGVuY2llcy9ibG9ja2VkX2J5XCIsXG4gICAgXSxcbiAgICBhZGRMYWJlbHM6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sYWJlbHNcIl0sXG4gICAgYWRkU3ViSXNzdWU6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3N1Yl9pc3N1ZXNcIixcbiAgICBdLFxuICAgIGNoZWNrVXNlckNhbkJlQXNzaWduZWQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXNzaWduZWVzL3thc3NpZ25lZX1cIl0sXG4gICAgY2hlY2tVc2VyQ2FuQmVBc3NpZ25lZFRvSXNzdWU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vYXNzaWduZWVzL3thc3NpZ25lZX1cIixcbiAgICBdLFxuICAgIGNyZWF0ZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzXCJdLFxuICAgIGNyZWF0ZUNvbW1lbnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVMYWJlbDogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vbGFiZWxzXCJdLFxuICAgIGNyZWF0ZU1pbGVzdG9uZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vbWlsZXN0b25lc1wiXSxcbiAgICBkZWxldGVDb21tZW50OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzL3tjb21tZW50X2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlTGFiZWw6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vbGFiZWxzL3tuYW1lfVwiXSxcbiAgICBkZWxldGVNaWxlc3RvbmU6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzL3ttaWxlc3RvbmVfbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgZ2V0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfVwiXSxcbiAgICBnZXRDb21tZW50OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gICAgZ2V0RXZlbnQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2V2ZW50cy97ZXZlbnRfaWR9XCJdLFxuICAgIGdldExhYmVsOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2xhYmVscy97bmFtZX1cIl0sXG4gICAgZ2V0TWlsZXN0b25lOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L21pbGVzdG9uZXMve21pbGVzdG9uZV9udW1iZXJ9XCJdLFxuICAgIGdldFBhcmVudDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vcGFyZW50XCJdLFxuICAgIGxpc3Q6IFtcIkdFVCAvaXNzdWVzXCJdLFxuICAgIGxpc3RBc3NpZ25lZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXNzaWduZWVzXCJdLFxuICAgIGxpc3RDb21tZW50czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vY29tbWVudHNcIl0sXG4gICAgbGlzdENvbW1lbnRzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvY29tbWVudHNcIl0sXG4gICAgbGlzdERlcGVuZGVuY2llc0Jsb2NrZWRCeTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9kZXBlbmRlbmNpZXMvYmxvY2tlZF9ieVwiLFxuICAgIF0sXG4gICAgbGlzdERlcGVuZGVuY2llc0Jsb2NraW5nOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2RlcGVuZGVuY2llcy9ibG9ja2luZ1wiLFxuICAgIF0sXG4gICAgbGlzdEV2ZW50czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vZXZlbnRzXCJdLFxuICAgIGxpc3RFdmVudHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9ldmVudHNcIl0sXG4gICAgbGlzdEV2ZW50c0ZvclRpbWVsaW5lOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3RpbWVsaW5lXCIsXG4gICAgXSxcbiAgICBsaXN0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9pc3N1ZXNcIl0sXG4gICAgbGlzdEZvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2lzc3Vlc1wiXSxcbiAgICBsaXN0Rm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXNcIl0sXG4gICAgbGlzdExhYmVsc0Zvck1pbGVzdG9uZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L21pbGVzdG9uZXMve21pbGVzdG9uZV9udW1iZXJ9L2xhYmVsc1wiLFxuICAgIF0sXG4gICAgbGlzdExhYmVsc0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbGFiZWxzXCJdLFxuICAgIGxpc3RMYWJlbHNPbklzc3VlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2xhYmVsc1wiLFxuICAgIF0sXG4gICAgbGlzdE1pbGVzdG9uZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbWlsZXN0b25lc1wiXSxcbiAgICBsaXN0U3ViSXNzdWVzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3N1Yl9pc3N1ZXNcIixcbiAgICBdLFxuICAgIGxvY2s6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2xvY2tcIl0sXG4gICAgcmVtb3ZlQWxsTGFiZWxzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2xhYmVsc1wiLFxuICAgIF0sXG4gICAgcmVtb3ZlQXNzaWduZWVzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2Fzc2lnbmVlc1wiLFxuICAgIF0sXG4gICAgcmVtb3ZlRGVwZW5kZW5jeUJsb2NrZWRCeTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9kZXBlbmRlbmNpZXMvYmxvY2tlZF9ieS97aXNzdWVfaWR9XCIsXG4gICAgXSxcbiAgICByZW1vdmVMYWJlbDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sYWJlbHMve25hbWV9XCIsXG4gICAgXSxcbiAgICByZW1vdmVTdWJJc3N1ZTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9zdWJfaXNzdWVcIixcbiAgICBdLFxuICAgIHJlcHJpb3JpdGl6ZVN1Yklzc3VlOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vc3ViX2lzc3Vlcy9wcmlvcml0eVwiLFxuICAgIF0sXG4gICAgc2V0TGFiZWxzOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sYWJlbHNcIl0sXG4gICAgdW5sb2NrOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sb2NrXCJdLFxuICAgIHVwZGF0ZTogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfVwiXSxcbiAgICB1cGRhdGVDb21tZW50OiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzL3tjb21tZW50X2lkfVwiXSxcbiAgICB1cGRhdGVMYWJlbDogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2xhYmVscy97bmFtZX1cIl0sXG4gICAgdXBkYXRlTWlsZXN0b25lOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzL3ttaWxlc3RvbmVfbnVtYmVyfVwiLFxuICAgIF0sXG4gIH0sXG4gIGxpY2Vuc2VzOiB7XG4gICAgZ2V0OiBbXCJHRVQgL2xpY2Vuc2VzL3tsaWNlbnNlfVwiXSxcbiAgICBnZXRBbGxDb21tb25seVVzZWQ6IFtcIkdFVCAvbGljZW5zZXNcIl0sXG4gICAgZ2V0Rm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9saWNlbnNlXCJdLFxuICB9LFxuICBtYXJrZG93bjoge1xuICAgIHJlbmRlcjogW1wiUE9TVCAvbWFya2Rvd25cIl0sXG4gICAgcmVuZGVyUmF3OiBbXG4gICAgICBcIlBPU1QgL21hcmtkb3duL3Jhd1wiLFxuICAgICAgeyBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IFwidGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiIH0gfSxcbiAgICBdLFxuICB9LFxuICBtZXRhOiB7XG4gICAgZ2V0OiBbXCJHRVQgL21ldGFcIl0sXG4gICAgZ2V0QWxsVmVyc2lvbnM6IFtcIkdFVCAvdmVyc2lvbnNcIl0sXG4gICAgZ2V0T2N0b2NhdDogW1wiR0VUIC9vY3RvY2F0XCJdLFxuICAgIGdldFplbjogW1wiR0VUIC96ZW5cIl0sXG4gICAgcm9vdDogW1wiR0VUIC9cIl0sXG4gIH0sXG4gIG1pZ3JhdGlvbnM6IHtcbiAgICBkZWxldGVBcmNoaXZlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vYXJjaGl2ZVwiLFxuICAgIF0sXG4gICAgZGVsZXRlQXJjaGl2ZUZvck9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9hcmNoaXZlXCIsXG4gICAgXSxcbiAgICBkb3dubG9hZEFyY2hpdmVGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vYXJjaGl2ZVwiLFxuICAgIF0sXG4gICAgZ2V0QXJjaGl2ZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L2FyY2hpdmVcIixcbiAgICBdLFxuICAgIGdldFN0YXR1c0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfVwiXSxcbiAgICBnZXRTdGF0dXNGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9XCJdLFxuICAgIGxpc3RGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL21pZ3JhdGlvbnNcIl0sXG4gICAgbGlzdEZvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnNcIl0sXG4gICAgbGlzdFJlcG9zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBsaXN0UmVwb3NGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L3JlcG9zaXRvcmllc1wiXSxcbiAgICBsaXN0UmVwb3NGb3JVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcIm1pZ3JhdGlvbnNcIiwgXCJsaXN0UmVwb3NGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgc3RhcnRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9taWdyYXRpb25zXCJdLFxuICAgIHN0YXJ0Rm9yT3JnOiBbXCJQT1NUIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnNcIl0sXG4gICAgdW5sb2NrUmVwb0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L3JlcG9zL3tyZXBvX25hbWV9L2xvY2tcIixcbiAgICBdLFxuICAgIHVubG9ja1JlcG9Gb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vcmVwb3Mve3JlcG9fbmFtZX0vbG9ja1wiLFxuICAgIF0sXG4gIH0sXG4gIG9pZGM6IHtcbiAgICBnZXRPaWRjQ3VzdG9tU3ViVGVtcGxhdGVGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvb2lkYy9jdXN0b21pemF0aW9uL3N1YlwiLFxuICAgIF0sXG4gICAgdXBkYXRlT2lkY0N1c3RvbVN1YlRlbXBsYXRlRm9yT3JnOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL29pZGMvY3VzdG9taXphdGlvbi9zdWJcIixcbiAgICBdLFxuICB9LFxuICBvcmdzOiB7XG4gICAgYWRkU2VjdXJpdHlNYW5hZ2VyVGVhbTogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vc2VjdXJpdHktbWFuYWdlcnMvdGVhbXMve3RlYW1fc2x1Z31cIixcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICBkZXByZWNhdGVkOlxuICAgICAgICAgIFwib2N0b2tpdC5yZXN0Lm9yZ3MuYWRkU2VjdXJpdHlNYW5hZ2VyVGVhbSgpIGlzIGRlcHJlY2F0ZWQsIHNlZSBodHRwczovL2RvY3MuZ2l0aHViLmNvbS9yZXN0L29yZ3Mvc2VjdXJpdHktbWFuYWdlcnMjYWRkLWEtc2VjdXJpdHktbWFuYWdlci10ZWFtXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgYXNzaWduVGVhbVRvT3JnUm9sZTogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3RlYW1zL3t0ZWFtX3NsdWd9L3tyb2xlX2lkfVwiLFxuICAgIF0sXG4gICAgYXNzaWduVXNlclRvT3JnUm9sZTogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3VzZXJzL3t1c2VybmFtZX0ve3JvbGVfaWR9XCIsXG4gICAgXSxcbiAgICBibG9ja1VzZXI6IFtcIlBVVCAvb3Jncy97b3JnfS9ibG9ja3Mve3VzZXJuYW1lfVwiXSxcbiAgICBjYW5jZWxJbnZpdGF0aW9uOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9XCJdLFxuICAgIGNoZWNrQmxvY2tlZFVzZXI6IFtcIkdFVCAvb3Jncy97b3JnfS9ibG9ja3Mve3VzZXJuYW1lfVwiXSxcbiAgICBjaGVja01lbWJlcnNoaXBGb3JVc2VyOiBbXCJHRVQgL29yZ3Mve29yZ30vbWVtYmVycy97dXNlcm5hbWV9XCJdLFxuICAgIGNoZWNrUHVibGljTWVtYmVyc2hpcEZvclVzZXI6IFtcIkdFVCAvb3Jncy97b3JnfS9wdWJsaWNfbWVtYmVycy97dXNlcm5hbWV9XCJdLFxuICAgIGNvbnZlcnRNZW1iZXJUb091dHNpZGVDb2xsYWJvcmF0b3I6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L291dHNpZGVfY29sbGFib3JhdG9ycy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICBjcmVhdGVBcnRpZmFjdFN0b3JhZ2VSZWNvcmQ6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9hcnRpZmFjdHMvbWV0YWRhdGEvc3RvcmFnZS1yZWNvcmRcIixcbiAgICBdLFxuICAgIGNyZWF0ZUludml0YXRpb246IFtcIlBPU1QgL29yZ3Mve29yZ30vaW52aXRhdGlvbnNcIl0sXG4gICAgY3JlYXRlSXNzdWVUeXBlOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2lzc3VlLXR5cGVzXCJdLFxuICAgIGNyZWF0ZVdlYmhvb2s6IFtcIlBPU1QgL29yZ3Mve29yZ30vaG9va3NcIl0sXG4gICAgY3VzdG9tUHJvcGVydGllc0Zvck9yZ3NDcmVhdGVPclVwZGF0ZU9yZ2FuaXphdGlvblZhbHVlczogW1xuICAgICAgXCJQQVRDSCAvb3JnYW5pemF0aW9ucy97b3JnfS9vcmctcHJvcGVydGllcy92YWx1ZXNcIixcbiAgICBdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JPcmdzR2V0T3JnYW5pemF0aW9uVmFsdWVzOiBbXG4gICAgICBcIkdFVCAvb3JnYW5pemF0aW9ucy97b3JnfS9vcmctcHJvcGVydGllcy92YWx1ZXNcIixcbiAgICBdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JSZXBvc0NyZWF0ZU9yVXBkYXRlT3JnYW5pemF0aW9uRGVmaW5pdGlvbjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vcHJvcGVydGllcy9zY2hlbWEve2N1c3RvbV9wcm9wZXJ0eV9uYW1lfVwiLFxuICAgIF0sXG4gICAgY3VzdG9tUHJvcGVydGllc0ZvclJlcG9zQ3JlYXRlT3JVcGRhdGVPcmdhbml6YXRpb25EZWZpbml0aW9uczogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS9wcm9wZXJ0aWVzL3NjaGVtYVwiLFxuICAgIF0sXG4gICAgY3VzdG9tUHJvcGVydGllc0ZvclJlcG9zQ3JlYXRlT3JVcGRhdGVPcmdhbml6YXRpb25WYWx1ZXM6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ3Mve29yZ30vcHJvcGVydGllcy92YWx1ZXNcIixcbiAgICBdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JSZXBvc0RlbGV0ZU9yZ2FuaXphdGlvbkRlZmluaXRpb246IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3Byb3BlcnRpZXMvc2NoZW1hL3tjdXN0b21fcHJvcGVydHlfbmFtZX1cIixcbiAgICBdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JSZXBvc0dldE9yZ2FuaXphdGlvbkRlZmluaXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3Byb3BlcnRpZXMvc2NoZW1hL3tjdXN0b21fcHJvcGVydHlfbmFtZX1cIixcbiAgICBdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JSZXBvc0dldE9yZ2FuaXphdGlvbkRlZmluaXRpb25zOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9wcm9wZXJ0aWVzL3NjaGVtYVwiLFxuICAgIF0sXG4gICAgY3VzdG9tUHJvcGVydGllc0ZvclJlcG9zR2V0T3JnYW5pemF0aW9uVmFsdWVzOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9wcm9wZXJ0aWVzL3ZhbHVlc1wiLFxuICAgIF0sXG4gICAgZGVsZXRlOiBbXCJERUxFVEUgL29yZ3Mve29yZ31cIl0sXG4gICAgZGVsZXRlQXR0ZXN0YXRpb25zQnVsazogW1wiUE9TVCAvb3Jncy97b3JnfS9hdHRlc3RhdGlvbnMvZGVsZXRlLXJlcXVlc3RcIl0sXG4gICAgZGVsZXRlQXR0ZXN0YXRpb25zQnlJZDogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYXR0ZXN0YXRpb25zL3thdHRlc3RhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUF0dGVzdGF0aW9uc0J5U3ViamVjdERpZ2VzdDogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYXR0ZXN0YXRpb25zL2RpZ2VzdC97c3ViamVjdF9kaWdlc3R9XCIsXG4gICAgXSxcbiAgICBkZWxldGVJc3N1ZVR5cGU6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9pc3N1ZS10eXBlcy97aXNzdWVfdHlwZV9pZH1cIl0sXG4gICAgZGVsZXRlV2ViaG9vazogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfVwiXSxcbiAgICBkaXNhYmxlU2VsZWN0ZWRSZXBvc2l0b3J5SW1tdXRhYmxlUmVsZWFzZXNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3NldHRpbmdzL2ltbXV0YWJsZS1yZWxlYXNlcy9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBlbmFibGVTZWxlY3RlZFJlcG9zaXRvcnlJbW11dGFibGVSZWxlYXNlc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvaW1tdXRhYmxlLXJlbGVhc2VzL3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIGdldDogW1wiR0VUIC9vcmdzL3tvcmd9XCJdLFxuICAgIGdldEltbXV0YWJsZVJlbGVhc2VzU2V0dGluZ3M6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2ltbXV0YWJsZS1yZWxlYXNlc1wiLFxuICAgIF0sXG4gICAgZ2V0SW1tdXRhYmxlUmVsZWFzZXNTZXR0aW5nc1JlcG9zaXRvcmllczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvaW1tdXRhYmxlLXJlbGVhc2VzL3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgZ2V0TWVtYmVyc2hpcEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvbWVtYmVyc2hpcHMvb3Jncy97b3JnfVwiXSxcbiAgICBnZXRNZW1iZXJzaGlwRm9yVXNlcjogW1wiR0VUIC9vcmdzL3tvcmd9L21lbWJlcnNoaXBzL3t1c2VybmFtZX1cIl0sXG4gICAgZ2V0T3JnUm9sZTogW1wiR0VUIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlcy97cm9sZV9pZH1cIl0sXG4gICAgZ2V0T3JnUnVsZXNldEhpc3Rvcnk6IFtcIkdFVCAvb3Jncy97b3JnfS9ydWxlc2V0cy97cnVsZXNldF9pZH0vaGlzdG9yeVwiXSxcbiAgICBnZXRPcmdSdWxlc2V0VmVyc2lvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcnVsZXNldHMve3J1bGVzZXRfaWR9L2hpc3Rvcnkve3ZlcnNpb25faWR9XCIsXG4gICAgXSxcbiAgICBnZXRXZWJob29rOiBbXCJHRVQgL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9XCJdLFxuICAgIGdldFdlYmhvb2tDb25maWdGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9ob29rcy97aG9va19pZH0vY29uZmlnXCJdLFxuICAgIGdldFdlYmhvb2tEZWxpdmVyeTogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9L2RlbGl2ZXJpZXMve2RlbGl2ZXJ5X2lkfVwiLFxuICAgIF0sXG4gICAgbGlzdDogW1wiR0VUIC9vcmdhbml6YXRpb25zXCJdLFxuICAgIGxpc3RBcHBJbnN0YWxsYXRpb25zOiBbXCJHRVQgL29yZ3Mve29yZ30vaW5zdGFsbGF0aW9uc1wiXSxcbiAgICBsaXN0QXJ0aWZhY3RTdG9yYWdlUmVjb3JkczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYXJ0aWZhY3RzL3tzdWJqZWN0X2RpZ2VzdH0vbWV0YWRhdGEvc3RvcmFnZS1yZWNvcmRzXCIsXG4gICAgXSxcbiAgICBsaXN0QXR0ZXN0YXRpb25SZXBvc2l0b3JpZXM6IFtcIkdFVCAvb3Jncy97b3JnfS9hdHRlc3RhdGlvbnMvcmVwb3NpdG9yaWVzXCJdLFxuICAgIGxpc3RBdHRlc3RhdGlvbnM6IFtcIkdFVCAvb3Jncy97b3JnfS9hdHRlc3RhdGlvbnMve3N1YmplY3RfZGlnZXN0fVwiXSxcbiAgICBsaXN0QXR0ZXN0YXRpb25zQnVsazogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2F0dGVzdGF0aW9ucy9idWxrLWxpc3R7P3Blcl9wYWdlLGJlZm9yZSxhZnRlcn1cIixcbiAgICBdLFxuICAgIGxpc3RCbG9ja2VkVXNlcnM6IFtcIkdFVCAvb3Jncy97b3JnfS9ibG9ja3NcIl0sXG4gICAgbGlzdEZhaWxlZEludml0YXRpb25zOiBbXCJHRVQgL29yZ3Mve29yZ30vZmFpbGVkX2ludml0YXRpb25zXCJdLFxuICAgIGxpc3RGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL29yZ3NcIl0sXG4gICAgbGlzdEZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9vcmdzXCJdLFxuICAgIGxpc3RJbnZpdGF0aW9uVGVhbXM6IFtcIkdFVCAvb3Jncy97b3JnfS9pbnZpdGF0aW9ucy97aW52aXRhdGlvbl9pZH0vdGVhbXNcIl0sXG4gICAgbGlzdElzc3VlVHlwZXM6IFtcIkdFVCAvb3Jncy97b3JnfS9pc3N1ZS10eXBlc1wiXSxcbiAgICBsaXN0TWVtYmVyczogW1wiR0VUIC9vcmdzL3tvcmd9L21lbWJlcnNcIl0sXG4gICAgbGlzdE1lbWJlcnNoaXBzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9tZW1iZXJzaGlwcy9vcmdzXCJdLFxuICAgIGxpc3RPcmdSb2xlVGVhbXM6IFtcIkdFVCAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMve3JvbGVfaWR9L3RlYW1zXCJdLFxuICAgIGxpc3RPcmdSb2xlVXNlcnM6IFtcIkdFVCAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMve3JvbGVfaWR9L3VzZXJzXCJdLFxuICAgIGxpc3RPcmdSb2xlczogW1wiR0VUIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlc1wiXSxcbiAgICBsaXN0T3JnYW5pemF0aW9uRmluZUdyYWluZWRQZXJtaXNzaW9uczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLWZpbmUtZ3JhaW5lZC1wZXJtaXNzaW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdE91dHNpZGVDb2xsYWJvcmF0b3JzOiBbXCJHRVQgL29yZ3Mve29yZ30vb3V0c2lkZV9jb2xsYWJvcmF0b3JzXCJdLFxuICAgIGxpc3RQYXRHcmFudFJlcG9zaXRvcmllczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2Vucy97cGF0X2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGxpc3RQYXRHcmFudFJlcXVlc3RSZXBvc2l0b3JpZXM6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbi1yZXF1ZXN0cy97cGF0X3JlcXVlc3RfaWR9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgbGlzdFBhdEdyYW50UmVxdWVzdHM6IFtcIkdFVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW4tcmVxdWVzdHNcIl0sXG4gICAgbGlzdFBhdEdyYW50czogW1wiR0VUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbnNcIl0sXG4gICAgbGlzdFBlbmRpbmdJbnZpdGF0aW9uczogW1wiR0VUIC9vcmdzL3tvcmd9L2ludml0YXRpb25zXCJdLFxuICAgIGxpc3RQdWJsaWNNZW1iZXJzOiBbXCJHRVQgL29yZ3Mve29yZ30vcHVibGljX21lbWJlcnNcIl0sXG4gICAgbGlzdFNlY3VyaXR5TWFuYWdlclRlYW1zOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9zZWN1cml0eS1tYW5hZ2Vyc1wiLFxuICAgICAge30sXG4gICAgICB7XG4gICAgICAgIGRlcHJlY2F0ZWQ6XG4gICAgICAgICAgXCJvY3Rva2l0LnJlc3Qub3Jncy5saXN0U2VjdXJpdHlNYW5hZ2VyVGVhbXMoKSBpcyBkZXByZWNhdGVkLCBzZWUgaHR0cHM6Ly9kb2NzLmdpdGh1Yi5jb20vcmVzdC9vcmdzL3NlY3VyaXR5LW1hbmFnZXJzI2xpc3Qtc2VjdXJpdHktbWFuYWdlci10ZWFtc1wiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGxpc3RXZWJob29rRGVsaXZlcmllczogW1wiR0VUIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfS9kZWxpdmVyaWVzXCJdLFxuICAgIGxpc3RXZWJob29rczogW1wiR0VUIC9vcmdzL3tvcmd9L2hvb2tzXCJdLFxuICAgIHBpbmdXZWJob29rOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfS9waW5nc1wiXSxcbiAgICByZWRlbGl2ZXJXZWJob29rRGVsaXZlcnk6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9ob29rcy97aG9va19pZH0vZGVsaXZlcmllcy97ZGVsaXZlcnlfaWR9L2F0dGVtcHRzXCIsXG4gICAgXSxcbiAgICByZW1vdmVNZW1iZXI6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9tZW1iZXJzL3t1c2VybmFtZX1cIl0sXG4gICAgcmVtb3ZlTWVtYmVyc2hpcEZvclVzZXI6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9tZW1iZXJzaGlwcy97dXNlcm5hbWV9XCJdLFxuICAgIHJlbW92ZU91dHNpZGVDb2xsYWJvcmF0b3I6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L291dHNpZGVfY29sbGFib3JhdG9ycy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICByZW1vdmVQdWJsaWNNZW1iZXJzaGlwRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3B1YmxpY19tZW1iZXJzL3t1c2VybmFtZX1cIixcbiAgICBdLFxuICAgIHJlbW92ZVNlY3VyaXR5TWFuYWdlclRlYW06IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3NlY3VyaXR5LW1hbmFnZXJzL3RlYW1zL3t0ZWFtX3NsdWd9XCIsXG4gICAgICB7fSxcbiAgICAgIHtcbiAgICAgICAgZGVwcmVjYXRlZDpcbiAgICAgICAgICBcIm9jdG9raXQucmVzdC5vcmdzLnJlbW92ZVNlY3VyaXR5TWFuYWdlclRlYW0oKSBpcyBkZXByZWNhdGVkLCBzZWUgaHR0cHM6Ly9kb2NzLmdpdGh1Yi5jb20vcmVzdC9vcmdzL3NlY3VyaXR5LW1hbmFnZXJzI3JlbW92ZS1hLXNlY3VyaXR5LW1hbmFnZXItdGVhbVwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHJldmlld1BhdEdyYW50UmVxdWVzdDogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbi1yZXF1ZXN0cy97cGF0X3JlcXVlc3RfaWR9XCIsXG4gICAgXSxcbiAgICByZXZpZXdQYXRHcmFudFJlcXVlc3RzSW5CdWxrOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2VuLXJlcXVlc3RzXCIsXG4gICAgXSxcbiAgICByZXZva2VBbGxPcmdSb2xlc1RlYW06IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlcy90ZWFtcy97dGVhbV9zbHVnfVwiLFxuICAgIF0sXG4gICAgcmV2b2tlQWxsT3JnUm9sZXNVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMvdXNlcnMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgcmV2b2tlT3JnUm9sZVRlYW06IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlcy90ZWFtcy97dGVhbV9zbHVnfS97cm9sZV9pZH1cIixcbiAgICBdLFxuICAgIHJldm9rZU9yZ1JvbGVVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMvdXNlcnMve3VzZXJuYW1lfS97cm9sZV9pZH1cIixcbiAgICBdLFxuICAgIHNldEltbXV0YWJsZVJlbGVhc2VzU2V0dGluZ3M6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2ltbXV0YWJsZS1yZWxlYXNlc1wiLFxuICAgIF0sXG4gICAgc2V0SW1tdXRhYmxlUmVsZWFzZXNTZXR0aW5nc1JlcG9zaXRvcmllczogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvaW1tdXRhYmxlLXJlbGVhc2VzL3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgc2V0TWVtYmVyc2hpcEZvclVzZXI6IFtcIlBVVCAvb3Jncy97b3JnfS9tZW1iZXJzaGlwcy97dXNlcm5hbWV9XCJdLFxuICAgIHNldFB1YmxpY01lbWJlcnNoaXBGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vcHVibGljX21lbWJlcnMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgdW5ibG9ja1VzZXI6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9ibG9ja3Mve3VzZXJuYW1lfVwiXSxcbiAgICB1cGRhdGU6IFtcIlBBVENIIC9vcmdzL3tvcmd9XCJdLFxuICAgIHVwZGF0ZUlzc3VlVHlwZTogW1wiUFVUIC9vcmdzL3tvcmd9L2lzc3VlLXR5cGVzL3tpc3N1ZV90eXBlX2lkfVwiXSxcbiAgICB1cGRhdGVNZW1iZXJzaGlwRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUEFUQ0ggL3VzZXIvbWVtYmVyc2hpcHMvb3Jncy97b3JnfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlUGF0QWNjZXNzOiBbXCJQT1NUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbnMve3BhdF9pZH1cIl0sXG4gICAgdXBkYXRlUGF0QWNjZXNzZXM6IFtcIlBPU1QgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2Vuc1wiXSxcbiAgICB1cGRhdGVXZWJob29rOiBbXCJQQVRDSCAvb3Jncy97b3JnfS9ob29rcy97aG9va19pZH1cIl0sXG4gICAgdXBkYXRlV2ViaG9va0NvbmZpZ0Zvck9yZzogW1wiUEFUQ0ggL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9L2NvbmZpZ1wiXSxcbiAgfSxcbiAgcGFja2FnZXM6IHtcbiAgICBkZWxldGVQYWNrYWdlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVQYWNrYWdlRm9yT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlUGFja2FnZUZvclVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2Vycy97dXNlcm5hbWV9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVQYWNrYWdlVmVyc2lvbkZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9ucy97cGFja2FnZV92ZXJzaW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlUGFja2FnZVZlcnNpb25Gb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVQYWNrYWdlVmVyc2lvbkZvclVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2Vycy97dXNlcm5hbWV9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9XCIsXG4gICAgXSxcbiAgICBnZXRBbGxQYWNrYWdlVmVyc2lvbnNGb3JBUGFja2FnZU93bmVkQnlBbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJwYWNrYWdlc1wiLCBcImdldEFsbFBhY2thZ2VWZXJzaW9uc0ZvclBhY2thZ2VPd25lZEJ5T3JnXCJdIH0sXG4gICAgXSxcbiAgICBnZXRBbGxQYWNrYWdlVmVyc2lvbnNGb3JBUGFja2FnZU93bmVkQnlUaGVBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnNcIixcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICByZW5hbWVkOiBbXG4gICAgICAgICAgXCJwYWNrYWdlc1wiLFxuICAgICAgICAgIFwiZ2V0QWxsUGFja2FnZVZlcnNpb25zRm9yUGFja2FnZU93bmVkQnlBdXRoZW50aWNhdGVkVXNlclwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGdldEFsbFBhY2thZ2VWZXJzaW9uc0ZvclBhY2thZ2VPd25lZEJ5QXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zXCIsXG4gICAgXSxcbiAgICBnZXRBbGxQYWNrYWdlVmVyc2lvbnNGb3JQYWNrYWdlT3duZWRCeU9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnNcIixcbiAgICBdLFxuICAgIGdldEFsbFBhY2thZ2VWZXJzaW9uc0ZvclBhY2thZ2VPd25lZEJ5VXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnNcIixcbiAgICBdLFxuICAgIGdldFBhY2thZ2VGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX1cIixcbiAgICBdLFxuICAgIGdldFBhY2thZ2VGb3JPcmdhbml6YXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9XCIsXG4gICAgXSxcbiAgICBnZXRQYWNrYWdlRm9yVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX1cIixcbiAgICBdLFxuICAgIGdldFBhY2thZ2VWZXJzaW9uRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9XCIsXG4gICAgXSxcbiAgICBnZXRQYWNrYWdlVmVyc2lvbkZvck9yZ2FuaXphdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnMve3BhY2thZ2VfdmVyc2lvbl9pZH1cIixcbiAgICBdLFxuICAgIGdldFBhY2thZ2VWZXJzaW9uRm9yVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnMve3BhY2thZ2VfdmVyc2lvbl9pZH1cIixcbiAgICBdLFxuICAgIGxpc3REb2NrZXJNaWdyYXRpb25Db25mbGljdGluZ1BhY2thZ2VzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL2RvY2tlci9jb25mbGljdHNcIixcbiAgICBdLFxuICAgIGxpc3REb2NrZXJNaWdyYXRpb25Db25mbGljdGluZ1BhY2thZ2VzRm9yT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9kb2NrZXIvY29uZmxpY3RzXCIsXG4gICAgXSxcbiAgICBsaXN0RG9ja2VyTWlncmF0aW9uQ29uZmxpY3RpbmdQYWNrYWdlc0ZvclVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2RvY2tlci9jb25mbGljdHNcIixcbiAgICBdLFxuICAgIGxpc3RQYWNrYWdlc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvcGFja2FnZXNcIl0sXG4gICAgbGlzdFBhY2thZ2VzRm9yT3JnYW5pemF0aW9uOiBbXCJHRVQgL29yZ3Mve29yZ30vcGFja2FnZXNcIl0sXG4gICAgbGlzdFBhY2thZ2VzRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L3BhY2thZ2VzXCJdLFxuICAgIHJlc3RvcmVQYWNrYWdlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUE9TVCAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS9yZXN0b3Jlez90b2tlbn1cIixcbiAgICBdLFxuICAgIHJlc3RvcmVQYWNrYWdlRm9yT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vcmVzdG9yZXs/dG9rZW59XCIsXG4gICAgXSxcbiAgICByZXN0b3JlUGFja2FnZUZvclVzZXI6IFtcbiAgICAgIFwiUE9TVCAvdXNlcnMve3VzZXJuYW1lfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS9yZXN0b3Jlez90b2tlbn1cIixcbiAgICBdLFxuICAgIHJlc3RvcmVQYWNrYWdlVmVyc2lvbkZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBPU1QgL3VzZXIvcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnMve3BhY2thZ2VfdmVyc2lvbl9pZH0vcmVzdG9yZVwiLFxuICAgIF0sXG4gICAgcmVzdG9yZVBhY2thZ2VWZXJzaW9uRm9yT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnMve3BhY2thZ2VfdmVyc2lvbl9pZH0vcmVzdG9yZVwiLFxuICAgIF0sXG4gICAgcmVzdG9yZVBhY2thZ2VWZXJzaW9uRm9yVXNlcjogW1xuICAgICAgXCJQT1NUIC91c2Vycy97dXNlcm5hbWV9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9L3Jlc3RvcmVcIixcbiAgICBdLFxuICB9LFxuICBwcml2YXRlUmVnaXN0cmllczoge1xuICAgIGNyZWF0ZU9yZ1ByaXZhdGVSZWdpc3RyeTogW1wiUE9TVCAvb3Jncy97b3JnfS9wcml2YXRlLXJlZ2lzdHJpZXNcIl0sXG4gICAgZGVsZXRlT3JnUHJpdmF0ZVJlZ2lzdHJ5OiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9wcml2YXRlLXJlZ2lzdHJpZXMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZ2V0T3JnUHJpdmF0ZVJlZ2lzdHJ5OiBbXCJHRVQgL29yZ3Mve29yZ30vcHJpdmF0ZS1yZWdpc3RyaWVzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZ2V0T3JnUHVibGljS2V5OiBbXCJHRVQgL29yZ3Mve29yZ30vcHJpdmF0ZS1yZWdpc3RyaWVzL3B1YmxpYy1rZXlcIl0sXG4gICAgbGlzdE9yZ1ByaXZhdGVSZWdpc3RyaWVzOiBbXCJHRVQgL29yZ3Mve29yZ30vcHJpdmF0ZS1yZWdpc3RyaWVzXCJdLFxuICAgIHVwZGF0ZU9yZ1ByaXZhdGVSZWdpc3RyeTogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS9wcml2YXRlLXJlZ2lzdHJpZXMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gIH0sXG4gIHByb2plY3RzOiB7XG4gICAgYWRkSXRlbUZvck9yZzogW1wiUE9TVCAvb3Jncy97b3JnfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXNcIl0sXG4gICAgYWRkSXRlbUZvclVzZXI6IFtcbiAgICAgIFwiUE9TVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXNcIixcbiAgICBdLFxuICAgIGRlbGV0ZUl0ZW1Gb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9pdGVtcy97aXRlbV9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUl0ZW1Gb3JVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXMve2l0ZW1faWR9XCIsXG4gICAgXSxcbiAgICBnZXRGaWVsZEZvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2ZpZWxkcy97ZmllbGRfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRGaWVsZEZvclVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9maWVsZHMve2ZpZWxkX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0Rm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9XCJdLFxuICAgIGdldEZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn1cIl0sXG4gICAgZ2V0T3JnSXRlbTogW1wiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9pdGVtcy97aXRlbV9pZH1cIl0sXG4gICAgZ2V0VXNlckl0ZW06IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9pdGVtcy97aXRlbV9pZH1cIixcbiAgICBdLFxuICAgIGxpc3RGaWVsZHNGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vZmllbGRzXCJdLFxuICAgIGxpc3RGaWVsZHNGb3JVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vZmllbGRzXCIsXG4gICAgXSxcbiAgICBsaXN0Rm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vcHJvamVjdHNWMlwiXSxcbiAgICBsaXN0Rm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzVjJcIl0sXG4gICAgbGlzdEl0ZW1zRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zXCJdLFxuICAgIGxpc3RJdGVtc0ZvclVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9pdGVtc1wiLFxuICAgIF0sXG4gICAgdXBkYXRlSXRlbUZvck9yZzogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXMve2l0ZW1faWR9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVJdGVtRm9yVXNlcjogW1xuICAgICAgXCJQQVRDSCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXMve2l0ZW1faWR9XCIsXG4gICAgXSxcbiAgfSxcbiAgcHVsbHM6IHtcbiAgICBjaGVja0lmTWVyZ2VkOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vbWVyZ2VcIl0sXG4gICAgY3JlYXRlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxsc1wiXSxcbiAgICBjcmVhdGVSZXBseUZvclJldmlld0NvbW1lbnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9pZH0vcmVwbGllc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlUmV2aWV3OiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3NcIl0sXG4gICAgY3JlYXRlUmV2aWV3Q29tbWVudDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gICAgXSxcbiAgICBkZWxldGVQZW5kaW5nUmV2aWV3OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXZpZXdzL3tyZXZpZXdfaWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVSZXZpZXdDb21tZW50OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHMve2NvbW1lbnRfaWR9XCIsXG4gICAgXSxcbiAgICBkaXNtaXNzUmV2aWV3OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXZpZXdzL3tyZXZpZXdfaWR9L2Rpc21pc3NhbHNcIixcbiAgICBdLFxuICAgIGdldDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9XCJdLFxuICAgIGdldFJldmlldzogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3cy97cmV2aWV3X2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0UmV2aWV3Q29tbWVudDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gICAgbGlzdDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxsc1wiXSxcbiAgICBsaXN0Q29tbWVudHNGb3JSZXZpZXc6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3Mve3Jldmlld19pZH0vY29tbWVudHNcIixcbiAgICBdLFxuICAgIGxpc3RDb21taXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vY29tbWl0c1wiXSxcbiAgICBsaXN0RmlsZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9maWxlc1wiXSxcbiAgICBsaXN0UmVxdWVzdGVkUmV2aWV3ZXJzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXF1ZXN0ZWRfcmV2aWV3ZXJzXCIsXG4gICAgXSxcbiAgICBsaXN0UmV2aWV3Q29tbWVudHM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gICAgXSxcbiAgICBsaXN0UmV2aWV3Q29tbWVudHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL2NvbW1lbnRzXCJdLFxuICAgIGxpc3RSZXZpZXdzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3c1wiXSxcbiAgICBtZXJnZTogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L21lcmdlXCJdLFxuICAgIHJlbW92ZVJlcXVlc3RlZFJldmlld2VyczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmVxdWVzdGVkX3Jldmlld2Vyc1wiLFxuICAgIF0sXG4gICAgcmVxdWVzdFJldmlld2VyczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3JlcXVlc3RlZF9yZXZpZXdlcnNcIixcbiAgICBdLFxuICAgIHN1Ym1pdFJldmlldzogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3Mve3Jldmlld19pZH0vZXZlbnRzXCIsXG4gICAgXSxcbiAgICB1cGRhdGU6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9XCJdLFxuICAgIHVwZGF0ZUJyYW5jaDogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vdXBkYXRlLWJyYW5jaFwiLFxuICAgIF0sXG4gICAgdXBkYXRlUmV2aWV3OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXZpZXdzL3tyZXZpZXdfaWR9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVSZXZpZXdDb21tZW50OiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy9jb21tZW50cy97Y29tbWVudF9pZH1cIixcbiAgICBdLFxuICB9LFxuICByYXRlTGltaXQ6IHsgZ2V0OiBbXCJHRVQgL3JhdGVfbGltaXRcIl0gfSxcbiAgcmVhY3Rpb25zOiB7XG4gICAgY3JlYXRlRm9yQ29tbWl0Q29tbWVudDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBjcmVhdGVGb3JJc3N1ZTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBjcmVhdGVGb3JJc3N1ZUNvbW1lbnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGNyZWF0ZUZvclB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBjcmVhdGVGb3JSZWxlYXNlOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGNyZWF0ZUZvclRlYW1EaXNjdXNzaW9uQ29tbWVudEluT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9udW1iZXJ9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlRm9yVGVhbURpc2N1c3Npb25Jbk9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBkZWxldGVGb3JDb21taXRDb21tZW50OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9ucy97cmVhY3Rpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVGb3JJc3N1ZTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9yZWFjdGlvbnMve3JlYWN0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRm9ySXNzdWVDb21tZW50OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnMve3JlYWN0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRm9yUHVsbFJlcXVlc3RDb21tZW50OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9ucy97cmVhY3Rpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVGb3JSZWxlYXNlOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMve3JlbGVhc2VfaWR9L3JlYWN0aW9ucy97cmVhY3Rpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVGb3JUZWFtRGlzY3Vzc2lvbjogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9yZWFjdGlvbnMve3JlYWN0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRm9yVGVhbURpc2N1c3Npb25Db21tZW50OiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzL3tjb21tZW50X251bWJlcn0vcmVhY3Rpb25zL3tyZWFjdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGxpc3RGb3JDb21taXRDb21tZW50OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdEZvcklzc3VlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9yZWFjdGlvbnNcIl0sXG4gICAgbGlzdEZvcklzc3VlQ29tbWVudDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBsaXN0Rm9yUHVsbFJlcXVlc3RSZXZpZXdDb21tZW50OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdEZvclJlbGVhc2U6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBsaXN0Rm9yVGVhbURpc2N1c3Npb25Db21tZW50SW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGxpc3RGb3JUZWFtRGlzY3Vzc2lvbkluT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gIH0sXG4gIHJlcG9zOiB7XG4gICAgYWNjZXB0SW52aXRhdGlvbjogW1xuICAgICAgXCJQQVRDSCAvdXNlci9yZXBvc2l0b3J5X2ludml0YXRpb25zL3tpbnZpdGF0aW9uX2lkfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInJlcG9zXCIsIFwiYWNjZXB0SW52aXRhdGlvbkZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBhY2NlcHRJbnZpdGF0aW9uRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUEFUQ0ggL3VzZXIvcmVwb3NpdG9yeV9pbnZpdGF0aW9ucy97aW52aXRhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGFkZEFwcEFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy9hcHBzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcImFwcHNcIiB9LFxuICAgIF0sXG4gICAgYWRkQ29sbGFib3JhdG9yOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbGxhYm9yYXRvcnMve3VzZXJuYW1lfVwiXSxcbiAgICBhZGRTdGF0dXNDaGVja0NvbnRleHRzOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc3RhdHVzX2NoZWNrcy9jb250ZXh0c1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJjb250ZXh0c1wiIH0sXG4gICAgXSxcbiAgICBhZGRUZWFtQWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL3RlYW1zXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcInRlYW1zXCIgfSxcbiAgICBdLFxuICAgIGFkZFVzZXJBY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvdXNlcnNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwidXNlcnNcIiB9LFxuICAgIF0sXG4gICAgY2FuY2VsUGFnZXNEZXBsb3ltZW50OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2RlcGxveW1lbnRzL3twYWdlc19kZXBsb3ltZW50X2lkfS9jYW5jZWxcIixcbiAgICBdLFxuICAgIGNoZWNrQXV0b21hdGVkU2VjdXJpdHlGaXhlczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2F1dG9tYXRlZC1zZWN1cml0eS1maXhlc1wiLFxuICAgIF0sXG4gICAgY2hlY2tDb2xsYWJvcmF0b3I6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29sbGFib3JhdG9ycy97dXNlcm5hbWV9XCJdLFxuICAgIGNoZWNrSW1tdXRhYmxlUmVsZWFzZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaW1tdXRhYmxlLXJlbGVhc2VzXCJdLFxuICAgIGNoZWNrUHJpdmF0ZVZ1bG5lcmFiaWxpdHlSZXBvcnRpbmc6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wcml2YXRlLXZ1bG5lcmFiaWxpdHktcmVwb3J0aW5nXCIsXG4gICAgXSxcbiAgICBjaGVja1Z1bG5lcmFiaWxpdHlBbGVydHM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS92dWxuZXJhYmlsaXR5LWFsZXJ0c1wiLFxuICAgIF0sXG4gICAgY29kZW93bmVyc0Vycm9yczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlb3duZXJzL2Vycm9yc1wiXSxcbiAgICBjb21wYXJlQ29tbWl0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21wYXJlL3tiYXNlfS4uLntoZWFkfVwiXSxcbiAgICBjb21wYXJlQ29tbWl0c1dpdGhCYXNlaGVhZDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbXBhcmUve2Jhc2VoZWFkfVwiLFxuICAgIF0sXG4gICAgY3JlYXRlQXR0ZXN0YXRpb246IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2F0dGVzdGF0aW9uc1wiXSxcbiAgICBjcmVhdGVBdXRvbGluazogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXV0b2xpbmtzXCJdLFxuICAgIGNyZWF0ZUNvbW1pdENvbW1lbnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97Y29tbWl0X3NoYX0vY29tbWVudHNcIixcbiAgICBdLFxuICAgIGNyZWF0ZUNvbW1pdFNpZ25hdHVyZVByb3RlY3Rpb246IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zaWduYXR1cmVzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVDb21taXRTdGF0dXM6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXR1c2VzL3tzaGF9XCJdLFxuICAgIGNyZWF0ZURlcGxveUtleTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30va2V5c1wiXSxcbiAgICBjcmVhdGVEZXBsb3ltZW50OiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBsb3ltZW50c1wiXSxcbiAgICBjcmVhdGVEZXBsb3ltZW50QnJhbmNoUG9saWN5OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudC1icmFuY2gtcG9saWNpZXNcIixcbiAgICBdLFxuICAgIGNyZWF0ZURlcGxveW1lbnRQcm90ZWN0aW9uUnVsZTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnRfcHJvdGVjdGlvbl9ydWxlc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlRGVwbG95bWVudFN0YXR1czogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBsb3ltZW50cy97ZGVwbG95bWVudF9pZH0vc3RhdHVzZXNcIixcbiAgICBdLFxuICAgIGNyZWF0ZURpc3BhdGNoRXZlbnQ6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Rpc3BhdGNoZXNcIl0sXG4gICAgY3JlYXRlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvcmVwb3NcIl0sXG4gICAgY3JlYXRlRm9yazogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZm9ya3NcIl0sXG4gICAgY3JlYXRlSW5Pcmc6IFtcIlBPU1QgL29yZ3Mve29yZ30vcmVwb3NcIl0sXG4gICAgY3JlYXRlT3JVcGRhdGVFbnZpcm9ubWVudDogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX1cIixcbiAgICBdLFxuICAgIGNyZWF0ZU9yVXBkYXRlRmlsZUNvbnRlbnRzOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3twYXRofVwiXSxcbiAgICBjcmVhdGVPcmdSdWxlc2V0OiBbXCJQT1NUIC9vcmdzL3tvcmd9L3J1bGVzZXRzXCJdLFxuICAgIGNyZWF0ZVBhZ2VzRGVwbG95bWVudDogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXMvZGVwbG95bWVudHNcIl0sXG4gICAgY3JlYXRlUGFnZXNTaXRlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlc1wiXSxcbiAgICBjcmVhdGVSZWxlYXNlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlc1wiXSxcbiAgICBjcmVhdGVSZXBvUnVsZXNldDogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHNcIl0sXG4gICAgY3JlYXRlVXNpbmdUZW1wbGF0ZTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97dGVtcGxhdGVfb3duZXJ9L3t0ZW1wbGF0ZV9yZXBvfS9nZW5lcmF0ZVwiLFxuICAgIF0sXG4gICAgY3JlYXRlV2ViaG9vazogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3NcIl0sXG4gICAgY3VzdG9tUHJvcGVydGllc0ZvclJlcG9zQ3JlYXRlT3JVcGRhdGVSZXBvc2l0b3J5VmFsdWVzOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wcm9wZXJ0aWVzL3ZhbHVlc1wiLFxuICAgIF0sXG4gICAgY3VzdG9tUHJvcGVydGllc0ZvclJlcG9zR2V0UmVwb3NpdG9yeVZhbHVlczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3Byb3BlcnRpZXMvdmFsdWVzXCIsXG4gICAgXSxcbiAgICBkZWNsaW5lSW52aXRhdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvcmVwb3NpdG9yeV9pbnZpdGF0aW9ucy97aW52aXRhdGlvbl9pZH1cIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJyZXBvc1wiLCBcImRlY2xpbmVJbnZpdGF0aW9uRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGRlY2xpbmVJbnZpdGF0aW9uRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL3JlcG9zaXRvcnlfaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGU6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb31cIl0sXG4gICAgZGVsZXRlQWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnNcIixcbiAgICBdLFxuICAgIGRlbGV0ZUFkbWluQnJhbmNoUHJvdGVjdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vZW5mb3JjZV9hZG1pbnNcIixcbiAgICBdLFxuICAgIGRlbGV0ZUFuRW52aXJvbm1lbnQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVBdXRvbGluazogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdXRvbGlua3Mve2F1dG9saW5rX2lkfVwiXSxcbiAgICBkZWxldGVCcmFuY2hQcm90ZWN0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvblwiLFxuICAgIF0sXG4gICAgZGVsZXRlQ29tbWl0Q29tbWVudDogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gICAgZGVsZXRlQ29tbWl0U2lnbmF0dXJlUHJvdGVjdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc2lnbmF0dXJlc1wiLFxuICAgIF0sXG4gICAgZGVsZXRlRGVwbG95S2V5OiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2tleXMve2tleV9pZH1cIl0sXG4gICAgZGVsZXRlRGVwbG95bWVudDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzL3tkZXBsb3ltZW50X2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRGVwbG95bWVudEJyYW5jaFBvbGljeTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudC1icmFuY2gtcG9saWNpZXMve2JyYW5jaF9wb2xpY3lfaWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVGaWxlOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3twYXRofVwiXSxcbiAgICBkZWxldGVJbnZpdGF0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVPcmdSdWxlc2V0OiBbXCJERUxFVEUgL29yZ3Mve29yZ30vcnVsZXNldHMve3J1bGVzZXRfaWR9XCJdLFxuICAgIGRlbGV0ZVBhZ2VzU2l0ZTogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlc1wiXSxcbiAgICBkZWxldGVQdWxsUmVxdWVzdFJldmlld1Byb3RlY3Rpb246IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3B1bGxfcmVxdWVzdF9yZXZpZXdzXCIsXG4gICAgXSxcbiAgICBkZWxldGVSZWxlYXNlOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfVwiXSxcbiAgICBkZWxldGVSZWxlYXNlQXNzZXQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy9hc3NldHMve2Fzc2V0X2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlUmVwb1J1bGVzZXQ6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHMve3J1bGVzZXRfaWR9XCJdLFxuICAgIGRlbGV0ZVdlYmhvb2s6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9XCJdLFxuICAgIGRpc2FibGVBdXRvbWF0ZWRTZWN1cml0eUZpeGVzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYXV0b21hdGVkLXNlY3VyaXR5LWZpeGVzXCIsXG4gICAgXSxcbiAgICBkaXNhYmxlRGVwbG95bWVudFByb3RlY3Rpb25SdWxlOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50X3Byb3RlY3Rpb25fcnVsZXMve3Byb3RlY3Rpb25fcnVsZV9pZH1cIixcbiAgICBdLFxuICAgIGRpc2FibGVJbW11dGFibGVSZWxlYXNlczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ltbXV0YWJsZS1yZWxlYXNlc1wiLFxuICAgIF0sXG4gICAgZGlzYWJsZVByaXZhdGVWdWxuZXJhYmlsaXR5UmVwb3J0aW5nOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcHJpdmF0ZS12dWxuZXJhYmlsaXR5LXJlcG9ydGluZ1wiLFxuICAgIF0sXG4gICAgZGlzYWJsZVZ1bG5lcmFiaWxpdHlBbGVydHM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS92dWxuZXJhYmlsaXR5LWFsZXJ0c1wiLFxuICAgIF0sXG4gICAgZG93bmxvYWRBcmNoaXZlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vemlwYmFsbC97cmVmfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInJlcG9zXCIsIFwiZG93bmxvYWRaaXBiYWxsQXJjaGl2ZVwiXSB9LFxuICAgIF0sXG4gICAgZG93bmxvYWRUYXJiYWxsQXJjaGl2ZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90YXJiYWxsL3tyZWZ9XCJdLFxuICAgIGRvd25sb2FkWmlwYmFsbEFyY2hpdmU6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vemlwYmFsbC97cmVmfVwiXSxcbiAgICBlbmFibGVBdXRvbWF0ZWRTZWN1cml0eUZpeGVzOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXV0b21hdGVkLXNlY3VyaXR5LWZpeGVzXCIsXG4gICAgXSxcbiAgICBlbmFibGVJbW11dGFibGVSZWxlYXNlczogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbW11dGFibGUtcmVsZWFzZXNcIl0sXG4gICAgZW5hYmxlUHJpdmF0ZVZ1bG5lcmFiaWxpdHlSZXBvcnRpbmc6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wcml2YXRlLXZ1bG5lcmFiaWxpdHktcmVwb3J0aW5nXCIsXG4gICAgXSxcbiAgICBlbmFibGVWdWxuZXJhYmlsaXR5QWxlcnRzOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vdnVsbmVyYWJpbGl0eS1hbGVydHNcIixcbiAgICBdLFxuICAgIGdlbmVyYXRlUmVsZWFzZU5vdGVzOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL2dlbmVyYXRlLW5vdGVzXCIsXG4gICAgXSxcbiAgICBnZXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb31cIl0sXG4gICAgZ2V0QWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnNcIixcbiAgICBdLFxuICAgIGdldEFkbWluQnJhbmNoUHJvdGVjdGlvbjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vZW5mb3JjZV9hZG1pbnNcIixcbiAgICBdLFxuICAgIGdldEFsbERlcGxveW1lbnRQcm90ZWN0aW9uUnVsZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnRfcHJvdGVjdGlvbl9ydWxlc1wiLFxuICAgIF0sXG4gICAgZ2V0QWxsRW52aXJvbm1lbnRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50c1wiXSxcbiAgICBnZXRBbGxTdGF0dXNDaGVja0NvbnRleHRzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zdGF0dXNfY2hlY2tzL2NvbnRleHRzXCIsXG4gICAgXSxcbiAgICBnZXRBbGxUb3BpY3M6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdG9waWNzXCJdLFxuICAgIGdldEFwcHNXaXRoQWNjZXNzVG9Qcm90ZWN0ZWRCcmFuY2g6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy9hcHBzXCIsXG4gICAgXSxcbiAgICBnZXRBdXRvbGluazogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdXRvbGlua3Mve2F1dG9saW5rX2lkfVwiXSxcbiAgICBnZXRCcmFuY2g6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH1cIl0sXG4gICAgZ2V0QnJhbmNoUHJvdGVjdGlvbjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb25cIixcbiAgICBdLFxuICAgIGdldEJyYW5jaFJ1bGVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzL2JyYW5jaGVzL3ticmFuY2h9XCJdLFxuICAgIGdldENsb25lczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90cmFmZmljL2Nsb25lc1wiXSxcbiAgICBnZXRDb2RlRnJlcXVlbmN5U3RhdHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3RhdHMvY29kZV9mcmVxdWVuY3lcIl0sXG4gICAgZ2V0Q29sbGFib3JhdG9yUGVybWlzc2lvbkxldmVsOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29sbGFib3JhdG9ycy97dXNlcm5hbWV9L3Blcm1pc3Npb25cIixcbiAgICBdLFxuICAgIGdldENvbWJpbmVkU3RhdHVzRm9yUmVmOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vc3RhdHVzXCJdLFxuICAgIGdldENvbW1pdDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tyZWZ9XCJdLFxuICAgIGdldENvbW1pdEFjdGl2aXR5U3RhdHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3RhdHMvY29tbWl0X2FjdGl2aXR5XCJdLFxuICAgIGdldENvbW1pdENvbW1lbnQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWVudHMve2NvbW1lbnRfaWR9XCJdLFxuICAgIGdldENvbW1pdFNpZ25hdHVyZVByb3RlY3Rpb246IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3NpZ25hdHVyZXNcIixcbiAgICBdLFxuICAgIGdldENvbW11bml0eVByb2ZpbGVNZXRyaWNzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW11bml0eS9wcm9maWxlXCJdLFxuICAgIGdldENvbnRlbnQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29udGVudHMve3BhdGh9XCJdLFxuICAgIGdldENvbnRyaWJ1dG9yc1N0YXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXRzL2NvbnRyaWJ1dG9yc1wiXSxcbiAgICBnZXRDdXN0b21EZXBsb3ltZW50UHJvdGVjdGlvblJ1bGU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnRfcHJvdGVjdGlvbl9ydWxlcy97cHJvdGVjdGlvbl9ydWxlX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0RGVwbG95S2V5OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2tleXMve2tleV9pZH1cIl0sXG4gICAgZ2V0RGVwbG95bWVudDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBsb3ltZW50cy97ZGVwbG95bWVudF9pZH1cIl0sXG4gICAgZ2V0RGVwbG95bWVudEJyYW5jaFBvbGljeTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudC1icmFuY2gtcG9saWNpZXMve2JyYW5jaF9wb2xpY3lfaWR9XCIsXG4gICAgXSxcbiAgICBnZXREZXBsb3ltZW50U3RhdHVzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwbG95bWVudHMve2RlcGxveW1lbnRfaWR9L3N0YXR1c2VzL3tzdGF0dXNfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRFbnZpcm9ubWVudDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX1cIixcbiAgICBdLFxuICAgIGdldExhdGVzdFBhZ2VzQnVpbGQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXMvYnVpbGRzL2xhdGVzdFwiXSxcbiAgICBnZXRMYXRlc3RSZWxlYXNlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL2xhdGVzdFwiXSxcbiAgICBnZXRPcmdSdWxlU3VpdGU6IFtcIkdFVCAvb3Jncy97b3JnfS9ydWxlc2V0cy9ydWxlLXN1aXRlcy97cnVsZV9zdWl0ZV9pZH1cIl0sXG4gICAgZ2V0T3JnUnVsZVN1aXRlczogW1wiR0VUIC9vcmdzL3tvcmd9L3J1bGVzZXRzL3J1bGUtc3VpdGVzXCJdLFxuICAgIGdldE9yZ1J1bGVzZXQ6IFtcIkdFVCAvb3Jncy97b3JnfS9ydWxlc2V0cy97cnVsZXNldF9pZH1cIl0sXG4gICAgZ2V0T3JnUnVsZXNldHM6IFtcIkdFVCAvb3Jncy97b3JnfS9ydWxlc2V0c1wiXSxcbiAgICBnZXRQYWdlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlc1wiXSxcbiAgICBnZXRQYWdlc0J1aWxkOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2J1aWxkcy97YnVpbGRfaWR9XCJdLFxuICAgIGdldFBhZ2VzRGVwbG95bWVudDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2RlcGxveW1lbnRzL3twYWdlc19kZXBsb3ltZW50X2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0UGFnZXNIZWFsdGhDaGVjazogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlcy9oZWFsdGhcIl0sXG4gICAgZ2V0UGFydGljaXBhdGlvblN0YXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXRzL3BhcnRpY2lwYXRpb25cIl0sXG4gICAgZ2V0UHVsbFJlcXVlc3RSZXZpZXdQcm90ZWN0aW9uOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9wdWxsX3JlcXVlc3RfcmV2aWV3c1wiLFxuICAgIF0sXG4gICAgZ2V0UHVuY2hDYXJkU3RhdHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3RhdHMvcHVuY2hfY2FyZFwiXSxcbiAgICBnZXRSZWFkbWU6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVhZG1lXCJdLFxuICAgIGdldFJlYWRtZUluRGlyZWN0b3J5OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlYWRtZS97ZGlyfVwiXSxcbiAgICBnZXRSZWxlYXNlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfVwiXSxcbiAgICBnZXRSZWxlYXNlQXNzZXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMvYXNzZXRzL3thc3NldF9pZH1cIl0sXG4gICAgZ2V0UmVsZWFzZUJ5VGFnOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3RhZ3Mve3RhZ31cIl0sXG4gICAgZ2V0UmVwb1J1bGVTdWl0ZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzL3J1bGUtc3VpdGVzL3tydWxlX3N1aXRlX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0UmVwb1J1bGVTdWl0ZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHMvcnVsZS1zdWl0ZXNcIl0sXG4gICAgZ2V0UmVwb1J1bGVzZXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHMve3J1bGVzZXRfaWR9XCJdLFxuICAgIGdldFJlcG9SdWxlc2V0SGlzdG9yeTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzL3tydWxlc2V0X2lkfS9oaXN0b3J5XCIsXG4gICAgXSxcbiAgICBnZXRSZXBvUnVsZXNldFZlcnNpb246IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0cy97cnVsZXNldF9pZH0vaGlzdG9yeS97dmVyc2lvbl9pZH1cIixcbiAgICBdLFxuICAgIGdldFJlcG9SdWxlc2V0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0c1wiXSxcbiAgICBnZXRTdGF0dXNDaGVja3NQcm90ZWN0aW9uOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zdGF0dXNfY2hlY2tzXCIsXG4gICAgXSxcbiAgICBnZXRUZWFtc1dpdGhBY2Nlc3NUb1Byb3RlY3RlZEJyYW5jaDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL3RlYW1zXCIsXG4gICAgXSxcbiAgICBnZXRUb3BQYXRoczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90cmFmZmljL3BvcHVsYXIvcGF0aHNcIl0sXG4gICAgZ2V0VG9wUmVmZXJyZXJzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RyYWZmaWMvcG9wdWxhci9yZWZlcnJlcnNcIl0sXG4gICAgZ2V0VXNlcnNXaXRoQWNjZXNzVG9Qcm90ZWN0ZWRCcmFuY2g6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy91c2Vyc1wiLFxuICAgIF0sXG4gICAgZ2V0Vmlld3M6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdHJhZmZpYy92aWV3c1wiXSxcbiAgICBnZXRXZWJob29rOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfVwiXSxcbiAgICBnZXRXZWJob29rQ29uZmlnRm9yUmVwbzogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfS9jb25maWdcIixcbiAgICBdLFxuICAgIGdldFdlYmhvb2tEZWxpdmVyeTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfS9kZWxpdmVyaWVzL3tkZWxpdmVyeV9pZH1cIixcbiAgICBdLFxuICAgIGxpc3RBY3Rpdml0aWVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGl2aXR5XCJdLFxuICAgIGxpc3RBdHRlc3RhdGlvbnM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdHRlc3RhdGlvbnMve3N1YmplY3RfZGlnZXN0fVwiLFxuICAgIF0sXG4gICAgbGlzdEF1dG9saW5rczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdXRvbGlua3NcIl0sXG4gICAgbGlzdEJyYW5jaGVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzXCJdLFxuICAgIGxpc3RCcmFuY2hlc0ZvckhlYWRDb21taXQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tjb21taXRfc2hhfS9icmFuY2hlcy13aGVyZS1oZWFkXCIsXG4gICAgXSxcbiAgICBsaXN0Q29sbGFib3JhdG9yczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2xsYWJvcmF0b3JzXCJdLFxuICAgIGxpc3RDb21tZW50c0ZvckNvbW1pdDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve2NvbW1pdF9zaGF9L2NvbW1lbnRzXCIsXG4gICAgXSxcbiAgICBsaXN0Q29tbWl0Q29tbWVudHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzXCJdLFxuICAgIGxpc3RDb21taXRTdGF0dXNlc0ZvclJlZjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vc3RhdHVzZXNcIixcbiAgICBdLFxuICAgIGxpc3RDb21taXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHNcIl0sXG4gICAgbGlzdENvbnRyaWJ1dG9yczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250cmlidXRvcnNcIl0sXG4gICAgbGlzdEN1c3RvbURlcGxveW1lbnRSdWxlSW50ZWdyYXRpb25zOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50X3Byb3RlY3Rpb25fcnVsZXMvYXBwc1wiLFxuICAgIF0sXG4gICAgbGlzdERlcGxveUtleXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30va2V5c1wiXSxcbiAgICBsaXN0RGVwbG95bWVudEJyYW5jaFBvbGljaWVzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50LWJyYW5jaC1wb2xpY2llc1wiLFxuICAgIF0sXG4gICAgbGlzdERlcGxveW1lbnRTdGF0dXNlczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzL3tkZXBsb3ltZW50X2lkfS9zdGF0dXNlc1wiLFxuICAgIF0sXG4gICAgbGlzdERlcGxveW1lbnRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzXCJdLFxuICAgIGxpc3RGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3JlcG9zXCJdLFxuICAgIGxpc3RGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9yZXBvc1wiXSxcbiAgICBsaXN0Rm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L3JlcG9zXCJdLFxuICAgIGxpc3RGb3JrczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9mb3Jrc1wiXSxcbiAgICBsaXN0SW52aXRhdGlvbnM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaW52aXRhdGlvbnNcIl0sXG4gICAgbGlzdEludml0YXRpb25zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9yZXBvc2l0b3J5X2ludml0YXRpb25zXCJdLFxuICAgIGxpc3RMYW5ndWFnZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbGFuZ3VhZ2VzXCJdLFxuICAgIGxpc3RQYWdlc0J1aWxkczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlcy9idWlsZHNcIl0sXG4gICAgbGlzdFB1YmxpYzogW1wiR0VUIC9yZXBvc2l0b3JpZXNcIl0sXG4gICAgbGlzdFB1bGxSZXF1ZXN0c0Fzc29jaWF0ZWRXaXRoQ29tbWl0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97Y29tbWl0X3NoYX0vcHVsbHNcIixcbiAgICBdLFxuICAgIGxpc3RSZWxlYXNlQXNzZXRzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMve3JlbGVhc2VfaWR9L2Fzc2V0c1wiLFxuICAgIF0sXG4gICAgbGlzdFJlbGVhc2VzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzXCJdLFxuICAgIGxpc3RUYWdzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RhZ3NcIl0sXG4gICAgbGlzdFRlYW1zOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RlYW1zXCJdLFxuICAgIGxpc3RXZWJob29rRGVsaXZlcmllczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfS9kZWxpdmVyaWVzXCIsXG4gICAgXSxcbiAgICBsaXN0V2ViaG9va3M6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3NcIl0sXG4gICAgbWVyZ2U6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L21lcmdlc1wiXSxcbiAgICBtZXJnZVVwc3RyZWFtOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9tZXJnZS11cHN0cmVhbVwiXSxcbiAgICBwaW5nV2ViaG9vazogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9L3BpbmdzXCJdLFxuICAgIHJlZGVsaXZlcldlYmhvb2tEZWxpdmVyeTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH0vZGVsaXZlcmllcy97ZGVsaXZlcnlfaWR9L2F0dGVtcHRzXCIsXG4gICAgXSxcbiAgICByZW1vdmVBcHBBY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy9hcHBzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcImFwcHNcIiB9LFxuICAgIF0sXG4gICAgcmVtb3ZlQ29sbGFib3JhdG9yOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vY29sbGFib3JhdG9ycy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICByZW1vdmVTdGF0dXNDaGVja0NvbnRleHRzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zdGF0dXNfY2hlY2tzL2NvbnRleHRzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcImNvbnRleHRzXCIgfSxcbiAgICBdLFxuICAgIHJlbW92ZVN0YXR1c0NoZWNrUHJvdGVjdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc3RhdHVzX2NoZWNrc1wiLFxuICAgIF0sXG4gICAgcmVtb3ZlVGVhbUFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL3RlYW1zXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcInRlYW1zXCIgfSxcbiAgICBdLFxuICAgIHJlbW92ZVVzZXJBY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy91c2Vyc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJ1c2Vyc1wiIH0sXG4gICAgXSxcbiAgICByZW5hbWVCcmFuY2g6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3JlbmFtZVwiXSxcbiAgICByZXBsYWNlQWxsVG9waWNzOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RvcGljc1wiXSxcbiAgICByZXF1ZXN0UGFnZXNCdWlsZDogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXMvYnVpbGRzXCJdLFxuICAgIHNldEFkbWluQnJhbmNoUHJvdGVjdGlvbjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL2VuZm9yY2VfYWRtaW5zXCIsXG4gICAgXSxcbiAgICBzZXRBcHBBY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy9hcHBzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcImFwcHNcIiB9LFxuICAgIF0sXG4gICAgc2V0U3RhdHVzQ2hlY2tDb250ZXh0czogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc3RhdHVzX2NoZWNrcy9jb250ZXh0c1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJjb250ZXh0c1wiIH0sXG4gICAgXSxcbiAgICBzZXRUZWFtQWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvdGVhbXNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwidGVhbXNcIiB9LFxuICAgIF0sXG4gICAgc2V0VXNlckFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL3VzZXJzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcInVzZXJzXCIgfSxcbiAgICBdLFxuICAgIHRlc3RQdXNoV2ViaG9vazogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9L3Rlc3RzXCJdLFxuICAgIHRyYW5zZmVyOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90cmFuc2ZlclwiXSxcbiAgICB1cGRhdGU6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfVwiXSxcbiAgICB1cGRhdGVCcmFuY2hQcm90ZWN0aW9uOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvblwiLFxuICAgIF0sXG4gICAgdXBkYXRlQ29tbWl0Q29tbWVudDogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzL3tjb21tZW50X2lkfVwiXSxcbiAgICB1cGRhdGVEZXBsb3ltZW50QnJhbmNoUG9saWN5OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50LWJyYW5jaC1wb2xpY2llcy97YnJhbmNoX3BvbGljeV9pZH1cIixcbiAgICBdLFxuICAgIHVwZGF0ZUluZm9ybWF0aW9uQWJvdXRQYWdlc1NpdGU6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXNcIl0sXG4gICAgdXBkYXRlSW52aXRhdGlvbjogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVPcmdSdWxlc2V0OiBbXCJQVVQgL29yZ3Mve29yZ30vcnVsZXNldHMve3J1bGVzZXRfaWR9XCJdLFxuICAgIHVwZGF0ZVB1bGxSZXF1ZXN0UmV2aWV3UHJvdGVjdGlvbjogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9wdWxsX3JlcXVlc3RfcmV2aWV3c1wiLFxuICAgIF0sXG4gICAgdXBkYXRlUmVsZWFzZTogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfVwiXSxcbiAgICB1cGRhdGVSZWxlYXNlQXNzZXQ6IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL2Fzc2V0cy97YXNzZXRfaWR9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVSZXBvUnVsZXNldDogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0cy97cnVsZXNldF9pZH1cIl0sXG4gICAgdXBkYXRlU3RhdHVzQ2hlY2tQb3RlY3Rpb246IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc3RhdHVzX2NoZWNrc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInJlcG9zXCIsIFwidXBkYXRlU3RhdHVzQ2hlY2tQcm90ZWN0aW9uXCJdIH0sXG4gICAgXSxcbiAgICB1cGRhdGVTdGF0dXNDaGVja1Byb3RlY3Rpb246IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc3RhdHVzX2NoZWNrc1wiLFxuICAgIF0sXG4gICAgdXBkYXRlV2ViaG9vazogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfVwiXSxcbiAgICB1cGRhdGVXZWJob29rQ29uZmlnRm9yUmVwbzogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9L2NvbmZpZ1wiLFxuICAgIF0sXG4gICAgdXBsb2FkUmVsZWFzZUFzc2V0OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfS9hc3NldHN7P25hbWUsbGFiZWx9XCIsXG4gICAgICB7IGJhc2VVcmw6IFwiaHR0cHM6Ly91cGxvYWRzLmdpdGh1Yi5jb21cIiB9LFxuICAgIF0sXG4gIH0sXG4gIHNlYXJjaDoge1xuICAgIGNvZGU6IFtcIkdFVCAvc2VhcmNoL2NvZGVcIl0sXG4gICAgY29tbWl0czogW1wiR0VUIC9zZWFyY2gvY29tbWl0c1wiXSxcbiAgICBpc3N1ZXNBbmRQdWxsUmVxdWVzdHM6IFtcIkdFVCAvc2VhcmNoL2lzc3Vlc1wiXSxcbiAgICBsYWJlbHM6IFtcIkdFVCAvc2VhcmNoL2xhYmVsc1wiXSxcbiAgICByZXBvczogW1wiR0VUIC9zZWFyY2gvcmVwb3NpdG9yaWVzXCJdLFxuICAgIHRvcGljczogW1wiR0VUIC9zZWFyY2gvdG9waWNzXCJdLFxuICAgIHVzZXJzOiBbXCJHRVQgL3NlYXJjaC91c2Vyc1wiXSxcbiAgfSxcbiAgc2VjcmV0U2Nhbm5pbmc6IHtcbiAgICBjcmVhdGVQdXNoUHJvdGVjdGlvbkJ5cGFzczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWNyZXQtc2Nhbm5pbmcvcHVzaC1wcm90ZWN0aW9uLWJ5cGFzc2VzXCIsXG4gICAgXSxcbiAgICBnZXRBbGVydDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3JldC1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn1cIixcbiAgICBdLFxuICAgIGdldFNjYW5IaXN0b3J5OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3JldC1zY2FubmluZy9zY2FuLWhpc3RvcnlcIl0sXG4gICAgbGlzdEFsZXJ0c0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3NlY3JldC1zY2FubmluZy9hbGVydHNcIl0sXG4gICAgbGlzdEFsZXJ0c0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0c1wiXSxcbiAgICBsaXN0TG9jYXRpb25zRm9yQWxlcnQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWNyZXQtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9L2xvY2F0aW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdE9yZ1BhdHRlcm5Db25maWdzOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9zZWNyZXQtc2Nhbm5pbmcvcGF0dGVybi1jb25maWd1cmF0aW9uc1wiLFxuICAgIF0sXG4gICAgdXBkYXRlQWxlcnQ6IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3JldC1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn1cIixcbiAgICBdLFxuICAgIHVwZGF0ZU9yZ1BhdHRlcm5Db25maWdzOiBbXG4gICAgICBcIlBBVENIIC9vcmdzL3tvcmd9L3NlY3JldC1zY2FubmluZy9wYXR0ZXJuLWNvbmZpZ3VyYXRpb25zXCIsXG4gICAgXSxcbiAgfSxcbiAgc2VjdXJpdHlBZHZpc29yaWVzOiB7XG4gICAgY3JlYXRlRm9yazogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWN1cml0eS1hZHZpc29yaWVzL3tnaHNhX2lkfS9mb3Jrc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlUHJpdmF0ZVZ1bG5lcmFiaWxpdHlSZXBvcnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjdXJpdHktYWR2aXNvcmllcy9yZXBvcnRzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVSZXBvc2l0b3J5QWR2aXNvcnk6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjdXJpdHktYWR2aXNvcmllc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlUmVwb3NpdG9yeUFkdmlzb3J5Q3ZlUmVxdWVzdDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWN1cml0eS1hZHZpc29yaWVzL3tnaHNhX2lkfS9jdmVcIixcbiAgICBdLFxuICAgIGdldEdsb2JhbEFkdmlzb3J5OiBbXCJHRVQgL2Fkdmlzb3JpZXMve2doc2FfaWR9XCJdLFxuICAgIGdldFJlcG9zaXRvcnlBZHZpc29yeTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3VyaXR5LWFkdmlzb3JpZXMve2doc2FfaWR9XCIsXG4gICAgXSxcbiAgICBsaXN0R2xvYmFsQWR2aXNvcmllczogW1wiR0VUIC9hZHZpc29yaWVzXCJdLFxuICAgIGxpc3RPcmdSZXBvc2l0b3J5QWR2aXNvcmllczogW1wiR0VUIC9vcmdzL3tvcmd9L3NlY3VyaXR5LWFkdmlzb3JpZXNcIl0sXG4gICAgbGlzdFJlcG9zaXRvcnlBZHZpc29yaWVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3VyaXR5LWFkdmlzb3JpZXNcIl0sXG4gICAgdXBkYXRlUmVwb3NpdG9yeUFkdmlzb3J5OiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWN1cml0eS1hZHZpc29yaWVzL3tnaHNhX2lkfVwiLFxuICAgIF0sXG4gIH0sXG4gIHRlYW1zOiB7XG4gICAgYWRkT3JVcGRhdGVNZW1iZXJzaGlwRm9yVXNlckluT3JnOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9tZW1iZXJzaGlwcy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICBhZGRPclVwZGF0ZVJlcG9QZXJtaXNzaW9uc0luT3JnOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9yZXBvcy97b3duZXJ9L3tyZXBvfVwiLFxuICAgIF0sXG4gICAgY2hlY2tQZXJtaXNzaW9uc0ZvclJlcG9Jbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vcmVwb3Mve293bmVyfS97cmVwb31cIixcbiAgICBdLFxuICAgIGNyZWF0ZTogW1wiUE9TVCAvb3Jncy97b3JnfS90ZWFtc1wiXSxcbiAgICBjcmVhdGVEaXNjdXNzaW9uQ29tbWVudEluT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50c1wiLFxuICAgIF0sXG4gICAgY3JlYXRlRGlzY3Vzc2lvbkluT3JnOiBbXCJQT1NUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zXCJdLFxuICAgIGRlbGV0ZURpc2N1c3Npb25Db21tZW50SW5Pcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRGlzY3Vzc2lvbkluT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICBkZWxldGVJbk9yZzogW1wiREVMRVRFIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9XCJdLFxuICAgIGdldEJ5TmFtZTogW1wiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9XCJdLFxuICAgIGdldERpc2N1c3Npb25Db21tZW50SW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgZ2V0RGlzY3Vzc2lvbkluT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICBnZXRNZW1iZXJzaGlwRm9yVXNlckluT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9tZW1iZXJzaGlwcy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICBsaXN0OiBbXCJHRVQgL29yZ3Mve29yZ30vdGVhbXNcIl0sXG4gICAgbGlzdENoaWxkSW5Pcmc6IFtcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS90ZWFtc1wiXSxcbiAgICBsaXN0RGlzY3Vzc2lvbkNvbW1lbnRzSW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHNcIixcbiAgICBdLFxuICAgIGxpc3REaXNjdXNzaW9uc0luT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnNcIl0sXG4gICAgbGlzdEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvdGVhbXNcIl0sXG4gICAgbGlzdE1lbWJlcnNJbk9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L21lbWJlcnNcIl0sXG4gICAgbGlzdFBlbmRpbmdJbnZpdGF0aW9uc0luT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9pbnZpdGF0aW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdFJlcG9zSW5Pcmc6IFtcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9yZXBvc1wiXSxcbiAgICByZW1vdmVNZW1iZXJzaGlwRm9yVXNlckluT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9tZW1iZXJzaGlwcy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICByZW1vdmVSZXBvSW5Pcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L3JlcG9zL3tvd25lcn0ve3JlcG99XCIsXG4gICAgXSxcbiAgICB1cGRhdGVEaXNjdXNzaW9uQ29tbWVudEluT3JnOiBbXG4gICAgICBcIlBBVENIIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlRGlzY3Vzc2lvbkluT3JnOiBbXG4gICAgICBcIlBBVENIIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn1cIixcbiAgICBdLFxuICAgIHVwZGF0ZUluT3JnOiBbXCJQQVRDSCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfVwiXSxcbiAgfSxcbiAgdXNlcnM6IHtcbiAgICBhZGRFbWFpbEZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiUE9TVCAvdXNlci9lbWFpbHNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImFkZEVtYWlsRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGFkZEVtYWlsRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvZW1haWxzXCJdLFxuICAgIGFkZFNvY2lhbEFjY291bnRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9zb2NpYWxfYWNjb3VudHNcIl0sXG4gICAgYmxvY2s6IFtcIlBVVCAvdXNlci9ibG9ja3Mve3VzZXJuYW1lfVwiXSxcbiAgICBjaGVja0Jsb2NrZWQ6IFtcIkdFVCAvdXNlci9ibG9ja3Mve3VzZXJuYW1lfVwiXSxcbiAgICBjaGVja0ZvbGxvd2luZ0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9mb2xsb3dpbmcve3RhcmdldF91c2VyfVwiXSxcbiAgICBjaGVja1BlcnNvbklzRm9sbG93ZWRCeUF1dGhlbnRpY2F0ZWQ6IFtcIkdFVCAvdXNlci9mb2xsb3dpbmcve3VzZXJuYW1lfVwiXSxcbiAgICBjcmVhdGVHcGdLZXlGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIlBPU1QgL3VzZXIvZ3BnX2tleXNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImNyZWF0ZUdwZ0tleUZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBjcmVhdGVHcGdLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9ncGdfa2V5c1wiXSxcbiAgICBjcmVhdGVQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIlBPU1QgL3VzZXIva2V5c1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwiY3JlYXRlUHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGNyZWF0ZVB1YmxpY1NzaEtleUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL2tleXNcIl0sXG4gICAgY3JlYXRlU3NoU2lnbmluZ0tleUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL3NzaF9zaWduaW5nX2tleXNcIl0sXG4gICAgZGVsZXRlQXR0ZXN0YXRpb25zQnVsazogW1xuICAgICAgXCJQT1NUIC91c2Vycy97dXNlcm5hbWV9L2F0dGVzdGF0aW9ucy9kZWxldGUtcmVxdWVzdFwiLFxuICAgIF0sXG4gICAgZGVsZXRlQXR0ZXN0YXRpb25zQnlJZDogW1xuICAgICAgXCJERUxFVEUgL3VzZXJzL3t1c2VybmFtZX0vYXR0ZXN0YXRpb25zL3thdHRlc3RhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUF0dGVzdGF0aW9uc0J5U3ViamVjdERpZ2VzdDogW1xuICAgICAgXCJERUxFVEUgL3VzZXJzL3t1c2VybmFtZX0vYXR0ZXN0YXRpb25zL2RpZ2VzdC97c3ViamVjdF9kaWdlc3R9XCIsXG4gICAgXSxcbiAgICBkZWxldGVFbWFpbEZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL2VtYWlsc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwiZGVsZXRlRW1haWxGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgZGVsZXRlRW1haWxGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiREVMRVRFIC91c2VyL2VtYWlsc1wiXSxcbiAgICBkZWxldGVHcGdLZXlGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9ncGdfa2V5cy97Z3BnX2tleV9pZH1cIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImRlbGV0ZUdwZ0tleUZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBkZWxldGVHcGdLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiREVMRVRFIC91c2VyL2dwZ19rZXlzL3tncGdfa2V5X2lkfVwiXSxcbiAgICBkZWxldGVQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9rZXlzL3trZXlfaWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJkZWxldGVQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgZGVsZXRlUHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkRFTEVURSAvdXNlci9rZXlzL3trZXlfaWR9XCJdLFxuICAgIGRlbGV0ZVNvY2lhbEFjY291bnRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiREVMRVRFIC91c2VyL3NvY2lhbF9hY2NvdW50c1wiXSxcbiAgICBkZWxldGVTc2hTaWduaW5nS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL3NzaF9zaWduaW5nX2tleXMve3NzaF9zaWduaW5nX2tleV9pZH1cIixcbiAgICBdLFxuICAgIGZvbGxvdzogW1wiUFVUIC91c2VyL2ZvbGxvd2luZy97dXNlcm5hbWV9XCJdLFxuICAgIGdldEF1dGhlbnRpY2F0ZWQ6IFtcIkdFVCAvdXNlclwiXSxcbiAgICBnZXRCeUlkOiBbXCJHRVQgL3VzZXIve2FjY291bnRfaWR9XCJdLFxuICAgIGdldEJ5VXNlcm5hbWU6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfVwiXSxcbiAgICBnZXRDb250ZXh0Rm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2hvdmVyY2FyZFwiXSxcbiAgICBnZXRHcGdLZXlGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkdFVCAvdXNlci9ncGdfa2V5cy97Z3BnX2tleV9pZH1cIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImdldEdwZ0tleUZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBnZXRHcGdLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2dwZ19rZXlzL3tncGdfa2V5X2lkfVwiXSxcbiAgICBnZXRQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkdFVCAvdXNlci9rZXlzL3trZXlfaWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJnZXRQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgZ2V0UHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9rZXlzL3trZXlfaWR9XCJdLFxuICAgIGdldFNzaFNpZ25pbmdLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvc3NoX3NpZ25pbmdfa2V5cy97c3NoX3NpZ25pbmdfa2V5X2lkfVwiLFxuICAgIF0sXG4gICAgbGlzdDogW1wiR0VUIC91c2Vyc1wiXSxcbiAgICBsaXN0QXR0ZXN0YXRpb25zOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vYXR0ZXN0YXRpb25zL3tzdWJqZWN0X2RpZ2VzdH1cIl0sXG4gICAgbGlzdEF0dGVzdGF0aW9uc0J1bGs6IFtcbiAgICAgIFwiUE9TVCAvdXNlcnMve3VzZXJuYW1lfS9hdHRlc3RhdGlvbnMvYnVsay1saXN0ez9wZXJfcGFnZSxiZWZvcmUsYWZ0ZXJ9XCIsXG4gICAgXSxcbiAgICBsaXN0QmxvY2tlZEJ5QXV0aGVudGljYXRlZDogW1xuICAgICAgXCJHRVQgL3VzZXIvYmxvY2tzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJsaXN0QmxvY2tlZEJ5QXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGxpc3RCbG9ja2VkQnlBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2Jsb2Nrc1wiXSxcbiAgICBsaXN0RW1haWxzRm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJHRVQgL3VzZXIvZW1haWxzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJsaXN0RW1haWxzRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGxpc3RFbWFpbHNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2VtYWlsc1wiXSxcbiAgICBsaXN0Rm9sbG93ZWRCeUF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL2ZvbGxvd2luZ1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwibGlzdEZvbGxvd2VkQnlBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgbGlzdEZvbGxvd2VkQnlBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2ZvbGxvd2luZ1wiXSxcbiAgICBsaXN0Rm9sbG93ZXJzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9mb2xsb3dlcnNcIl0sXG4gICAgbGlzdEZvbGxvd2Vyc0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9mb2xsb3dlcnNcIl0sXG4gICAgbGlzdEZvbGxvd2luZ0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9mb2xsb3dpbmdcIl0sXG4gICAgbGlzdEdwZ0tleXNGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkdFVCAvdXNlci9ncGdfa2V5c1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwibGlzdEdwZ0tleXNGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgbGlzdEdwZ0tleXNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2dwZ19rZXlzXCJdLFxuICAgIGxpc3RHcGdLZXlzRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2dwZ19rZXlzXCJdLFxuICAgIGxpc3RQdWJsaWNFbWFpbHNGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkdFVCAvdXNlci9wdWJsaWNfZW1haWxzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJsaXN0UHVibGljRW1haWxzRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGxpc3RQdWJsaWNFbWFpbHNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3B1YmxpY19lbWFpbHNcIl0sXG4gICAgbGlzdFB1YmxpY0tleXNGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0va2V5c1wiXSxcbiAgICBsaXN0UHVibGljU3NoS2V5c0ZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL2tleXNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImxpc3RQdWJsaWNTc2hLZXlzRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGxpc3RQdWJsaWNTc2hLZXlzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9rZXlzXCJdLFxuICAgIGxpc3RTb2NpYWxBY2NvdW50c0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvc29jaWFsX2FjY291bnRzXCJdLFxuICAgIGxpc3RTb2NpYWxBY2NvdW50c0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zb2NpYWxfYWNjb3VudHNcIl0sXG4gICAgbGlzdFNzaFNpZ25pbmdLZXlzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9zc2hfc2lnbmluZ19rZXlzXCJdLFxuICAgIGxpc3RTc2hTaWduaW5nS2V5c0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zc2hfc2lnbmluZ19rZXlzXCJdLFxuICAgIHNldFByaW1hcnlFbWFpbFZpc2liaWxpdHlGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIlBBVENIIC91c2VyL2VtYWlsL3Zpc2liaWxpdHlcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcInNldFByaW1hcnlFbWFpbFZpc2liaWxpdHlGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgc2V0UHJpbWFyeUVtYWlsVmlzaWJpbGl0eUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBBVENIIC91c2VyL2VtYWlsL3Zpc2liaWxpdHlcIixcbiAgICBdLFxuICAgIHVuYmxvY2s6IFtcIkRFTEVURSAvdXNlci9ibG9ja3Mve3VzZXJuYW1lfVwiXSxcbiAgICB1bmZvbGxvdzogW1wiREVMRVRFIC91c2VyL2ZvbGxvd2luZy97dXNlcm5hbWV9XCJdLFxuICAgIHVwZGF0ZUF1dGhlbnRpY2F0ZWQ6IFtcIlBBVENIIC91c2VyXCJdLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRW5kcG9pbnRzO1xuIiwgImltcG9ydCB0eXBlIHsgT2N0b2tpdCB9IGZyb20gXCJAb2N0b2tpdC9jb3JlXCI7XG5pbXBvcnQgdHlwZSB7IEVuZHBvaW50T3B0aW9ucywgUmVxdWVzdFBhcmFtZXRlcnMsIFJvdXRlIH0gZnJvbSBcIkBvY3Rva2l0L3R5cGVzXCI7XG5pbXBvcnQgRU5EUE9JTlRTIGZyb20gXCIuL2dlbmVyYXRlZC9lbmRwb2ludHMuanNcIjtcbmltcG9ydCB0eXBlIHsgUmVzdEVuZHBvaW50TWV0aG9kcyB9IGZyb20gXCIuL2dlbmVyYXRlZC9tZXRob2QtdHlwZXMuanNcIjtcbmltcG9ydCB0eXBlIHsgRW5kcG9pbnREZWNvcmF0aW9ucyB9IGZyb20gXCIuL3R5cGVzLmpzXCI7XG5cbi8vIFRoZSBmb2xsb3dpbmcgY29kZSB3YXMgcmVmYWN0b3JlZCBpbjogaHR0cHM6Ly9naXRodWIuY29tL29jdG9raXQvcGx1Z2luLXJlc3QtZW5kcG9pbnQtbWV0aG9kcy5qcy9wdWxsLzYyMlxuLy8gdG8gb3B0aW1pc2UgdGhlIHJ1bnRpbWUgcGVyZm9ybWFuY2Ugb2YgT2N0b2tpdCBpbml0aWFsaXphdGlvbi5cbi8vXG4vLyBUaGlzIG9wdGltaXphdGlvbiBpbnZvbHZlcyB0d28ga2V5IGNoYW5nZXM6XG4vLyAxLiBQcmUtQ29tcHV0YXRpb246IFRoZSBlbmRwb2ludCBtZXRob2RzIGFyZSBwcmUtY29tcHV0ZWQgb25jZSBhdCBtb2R1bGUgbG9hZFxuLy8gICAgdGltZSBpbnN0ZWFkIG9mIGVhY2ggaW52b2NhdGlvbiBvZiBgZW5kcG9pbnRzVG9NZXRob2RzKClgLlxuLy8gMi4gTGF6eSBpbml0aWFsaXphdGlvbiBhbmQgY2FjaGluZzogV2UgdXNlIGEgUHJveHkgZm9yIGVhY2ggc2NvcGUgdG8gb25seVxuLy8gICAgaW5pdGlhbGl6ZSBtZXRob2RzIHRoYXQgYXJlIGFjdHVhbGx5IGNhbGxlZC4gVGhpcyByZWR1Y2VzIHJ1bnRpbWUgb3ZlcmhlYWRcbi8vICAgIGFzIHRoZSBpbml0aWFsaXphdGlvbiBpbnZvbHZlcyBkZWVwIG1lcmdpbmcgb2Ygb2JqZWN0cy4gVGhlIGluaXRpYWxpemVkXG4vLyAgICBtZXRob2RzIGFyZSB0aGVuIGNhY2hlZCBmb3IgZnV0dXJlIHVzZS5cblxuY29uc3QgZW5kcG9pbnRNZXRob2RzTWFwID0gbmV3IE1hcCgpO1xuZm9yIChjb25zdCBbc2NvcGUsIGVuZHBvaW50c10gb2YgT2JqZWN0LmVudHJpZXMoRU5EUE9JTlRTKSkge1xuICBmb3IgKGNvbnN0IFttZXRob2ROYW1lLCBlbmRwb2ludF0gb2YgT2JqZWN0LmVudHJpZXMoZW5kcG9pbnRzKSkge1xuICAgIGNvbnN0IFtyb3V0ZSwgZGVmYXVsdHMsIGRlY29yYXRpb25zXSA9IGVuZHBvaW50O1xuICAgIGNvbnN0IFttZXRob2QsIHVybF0gPSByb3V0ZS5zcGxpdCgvIC8pO1xuICAgIGNvbnN0IGVuZHBvaW50RGVmYXVsdHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0cyxcbiAgICApO1xuXG4gICAgaWYgKCFlbmRwb2ludE1ldGhvZHNNYXAuaGFzKHNjb3BlKSkge1xuICAgICAgZW5kcG9pbnRNZXRob2RzTWFwLnNldChzY29wZSwgbmV3IE1hcCgpKTtcbiAgICB9XG5cbiAgICBlbmRwb2ludE1ldGhvZHNNYXAuZ2V0KHNjb3BlKS5zZXQobWV0aG9kTmFtZSwge1xuICAgICAgc2NvcGUsXG4gICAgICBtZXRob2ROYW1lLFxuICAgICAgZW5kcG9pbnREZWZhdWx0cyxcbiAgICAgIGRlY29yYXRpb25zLFxuICAgIH0pO1xuICB9XG59XG5cbnR5cGUgUHJveHlUYXJnZXQgPSB7XG4gIG9jdG9raXQ6IE9jdG9raXQ7XG4gIHNjb3BlOiBzdHJpbmc7XG4gIGNhY2hlOiBSZWNvcmQ8c3RyaW5nLCAoLi4uYXJnczogYW55W10pID0+IGFueT47XG59O1xuXG5jb25zdCBoYW5kbGVyID0ge1xuICBoYXMoeyBzY29wZSB9OiBQcm94eVRhcmdldCwgbWV0aG9kTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGVuZHBvaW50TWV0aG9kc01hcC5nZXQoc2NvcGUpLmhhcyhtZXRob2ROYW1lKTtcbiAgfSxcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldDogUHJveHlUYXJnZXQsIG1ldGhvZE5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy5nZXQodGFyZ2V0LCBtZXRob2ROYW1lKSwgLy8gZW5zdXJlcyBtZXRob2QgaXMgaW4gdGhlIGNhY2hlXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgfTtcbiAgfSxcbiAgZGVmaW5lUHJvcGVydHkoXG4gICAgdGFyZ2V0OiBQcm94eVRhcmdldCxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmcsXG4gICAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yLFxuICApIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LmNhY2hlLCBtZXRob2ROYW1lLCBkZXNjcmlwdG9yKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHkodGFyZ2V0OiBQcm94eVRhcmdldCwgbWV0aG9kTmFtZTogc3RyaW5nKSB7XG4gICAgZGVsZXRlIHRhcmdldC5jYWNoZVttZXRob2ROYW1lXTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgb3duS2V5cyh7IHNjb3BlIH06IFByb3h5VGFyZ2V0KSB7XG4gICAgcmV0dXJuIFsuLi5lbmRwb2ludE1ldGhvZHNNYXAuZ2V0KHNjb3BlKS5rZXlzKCldO1xuICB9LFxuICBzZXQodGFyZ2V0OiBQcm94eVRhcmdldCwgbWV0aG9kTmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuICh0YXJnZXQuY2FjaGVbbWV0aG9kTmFtZV0gPSB2YWx1ZSk7XG4gIH0sXG4gIGdldCh7IG9jdG9raXQsIHNjb3BlLCBjYWNoZSB9OiBQcm94eVRhcmdldCwgbWV0aG9kTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKGNhY2hlW21ldGhvZE5hbWVdKSB7XG4gICAgICByZXR1cm4gY2FjaGVbbWV0aG9kTmFtZV07XG4gICAgfVxuXG4gICAgY29uc3QgbWV0aG9kID0gZW5kcG9pbnRNZXRob2RzTWFwLmdldChzY29wZSkuZ2V0KG1ldGhvZE5hbWUpO1xuICAgIGlmICghbWV0aG9kKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZW5kcG9pbnREZWZhdWx0cywgZGVjb3JhdGlvbnMgfSA9IG1ldGhvZDtcblxuICAgIGlmIChkZWNvcmF0aW9ucykge1xuICAgICAgY2FjaGVbbWV0aG9kTmFtZV0gPSBkZWNvcmF0ZShcbiAgICAgICAgb2N0b2tpdCxcbiAgICAgICAgc2NvcGUsXG4gICAgICAgIG1ldGhvZE5hbWUsXG4gICAgICAgIGVuZHBvaW50RGVmYXVsdHMsXG4gICAgICAgIGRlY29yYXRpb25zLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGVbbWV0aG9kTmFtZV0gPSBvY3Rva2l0LnJlcXVlc3QuZGVmYXVsdHMoZW5kcG9pbnREZWZhdWx0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhY2hlW21ldGhvZE5hbWVdO1xuICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuZHBvaW50c1RvTWV0aG9kcyhvY3Rva2l0OiBPY3Rva2l0KTogUmVzdEVuZHBvaW50TWV0aG9kcyB7XG4gIGNvbnN0IG5ld01ldGhvZHMgPSB7fSBhcyB7IFtrZXk6IHN0cmluZ106IG9iamVjdCB9O1xuXG4gIGZvciAoY29uc3Qgc2NvcGUgb2YgZW5kcG9pbnRNZXRob2RzTWFwLmtleXMoKSkge1xuICAgIG5ld01ldGhvZHNbc2NvcGVdID0gbmV3IFByb3h5KHsgb2N0b2tpdCwgc2NvcGUsIGNhY2hlOiB7fSB9LCBoYW5kbGVyKTtcbiAgfVxuXG4gIHJldHVybiBuZXdNZXRob2RzIGFzIFJlc3RFbmRwb2ludE1ldGhvZHM7XG59XG5cbmZ1bmN0aW9uIGRlY29yYXRlKFxuICBvY3Rva2l0OiBPY3Rva2l0LFxuICBzY29wZTogc3RyaW5nLFxuICBtZXRob2ROYW1lOiBzdHJpbmcsXG4gIGRlZmF1bHRzOiBFbmRwb2ludE9wdGlvbnMsXG4gIGRlY29yYXRpb25zOiBFbmRwb2ludERlY29yYXRpb25zLFxuKSB7XG4gIGNvbnN0IHJlcXVlc3RXaXRoRGVmYXVsdHMgPSBvY3Rva2l0LnJlcXVlc3QuZGVmYXVsdHMoZGVmYXVsdHMpO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGZ1bmN0aW9uIHdpdGhEZWNvcmF0aW9ucyhcbiAgICAuLi5hcmdzOiBbUm91dGUsIFJlcXVlc3RQYXJhbWV0ZXJzP10gfCBbRW5kcG9pbnRPcHRpb25zXVxuICApIHtcbiAgICAvLyBAdHMtaWdub3JlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjU0ODhcbiAgICBsZXQgb3B0aW9ucyA9IHJlcXVlc3RXaXRoRGVmYXVsdHMuZW5kcG9pbnQubWVyZ2UoLi4uYXJncyk7XG5cbiAgICAvLyBUaGVyZSBhcmUgY3VycmVudGx5IG5vIG90aGVyIGRlY29yYXRpb25zIHRoYW4gYC5tYXBUb0RhdGFgXG4gICAgaWYgKGRlY29yYXRpb25zLm1hcFRvRGF0YSkge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgZGF0YTogb3B0aW9uc1tkZWNvcmF0aW9ucy5tYXBUb0RhdGFdLFxuICAgICAgICBbZGVjb3JhdGlvbnMubWFwVG9EYXRhXTogdW5kZWZpbmVkLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVxdWVzdFdpdGhEZWZhdWx0cyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZGVjb3JhdGlvbnMucmVuYW1lZCkge1xuICAgICAgY29uc3QgW25ld1Njb3BlLCBuZXdNZXRob2ROYW1lXSA9IGRlY29yYXRpb25zLnJlbmFtZWQ7XG4gICAgICBvY3Rva2l0LmxvZy53YXJuKFxuICAgICAgICBgb2N0b2tpdC4ke3Njb3BlfS4ke21ldGhvZE5hbWV9KCkgaGFzIGJlZW4gcmVuYW1lZCB0byBvY3Rva2l0LiR7bmV3U2NvcGV9LiR7bmV3TWV0aG9kTmFtZX0oKWAsXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoZGVjb3JhdGlvbnMuZGVwcmVjYXRlZCkge1xuICAgICAgb2N0b2tpdC5sb2cud2FybihkZWNvcmF0aW9ucy5kZXByZWNhdGVkKTtcbiAgICB9XG5cbiAgICBpZiAoZGVjb3JhdGlvbnMucmVuYW1lZFBhcmFtZXRlcnMpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yNTQ4OFxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHJlcXVlc3RXaXRoRGVmYXVsdHMuZW5kcG9pbnQubWVyZ2UoLi4uYXJncyk7XG5cbiAgICAgIGZvciAoY29uc3QgW25hbWUsIGFsaWFzXSBvZiBPYmplY3QuZW50cmllcyhcbiAgICAgICAgZGVjb3JhdGlvbnMucmVuYW1lZFBhcmFtZXRlcnMsXG4gICAgICApKSB7XG4gICAgICAgIGlmIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICBvY3Rva2l0LmxvZy53YXJuKFxuICAgICAgICAgICAgYFwiJHtuYW1lfVwiIHBhcmFtZXRlciBpcyBkZXByZWNhdGVkIGZvciBcIm9jdG9raXQuJHtzY29wZX0uJHttZXRob2ROYW1lfSgpXCIuIFVzZSBcIiR7YWxpYXN9XCIgaW5zdGVhZGAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoIShhbGlhcyBpbiBvcHRpb25zKSkge1xuICAgICAgICAgICAgb3B0aW9uc1thbGlhc10gPSBvcHRpb25zW25hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWxldGUgb3B0aW9uc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcXVlc3RXaXRoRGVmYXVsdHMob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gQHRzLWlnbm9yZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI1NDg4XG4gICAgcmV0dXJuIHJlcXVlc3RXaXRoRGVmYXVsdHMoLi4uYXJncyk7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24od2l0aERlY29yYXRpb25zLCByZXF1ZXN0V2l0aERlZmF1bHRzKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IE9jdG9raXQgfSBmcm9tIFwiQG9jdG9raXQvY29yZVwiO1xuXG5leHBvcnQgdHlwZSB7IFJlc3RFbmRwb2ludE1ldGhvZFR5cGVzIH0gZnJvbSBcIi4vZ2VuZXJhdGVkL3BhcmFtZXRlcnMtYW5kLXJlc3BvbnNlLXR5cGVzLmpzXCI7XG5pbXBvcnQgeyBWRVJTSU9OIH0gZnJvbSBcIi4vdmVyc2lvbi5qc1wiO1xuaW1wb3J0IHR5cGUgeyBBcGkgfSBmcm9tIFwiLi90eXBlcy5qc1wiO1xuaW1wb3J0IHsgZW5kcG9pbnRzVG9NZXRob2RzIH0gZnJvbSBcIi4vZW5kcG9pbnRzLXRvLW1ldGhvZHMuanNcIjtcblxuLy8gRXhwb3J0IHRoZSB0eXBlIGZvciBkb3duc3RyZWFtIHVzZXJzIGluIG9yZGVyIHRvIGZpeCBhIFR5cGVTY3JpcHQgZXJyb3Jcbi8vIFRoZSBpbmZlcnJlZCB0eXBlIG9mICdPY3Rva2l0JyBjYW5ub3QgYmUgbmFtZWQgd2l0aG91dCBhIHJlZmVyZW5jZSB0byAnLi4vbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3BsdWdpbi1yZXN0LWVuZHBvaW50LW1ldGhvZHMvZGlzdC10eXBlcy90eXBlcy5qcycuIFRoaXMgaXMgbGlrZWx5IG5vdCBwb3J0YWJsZS4gQSB0eXBlIGFubm90YXRpb24gaXMgbmVjZXNzYXJ5LlxuZXhwb3J0IHR5cGUgeyBBcGkgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RFbmRwb2ludE1ldGhvZHMob2N0b2tpdDogT2N0b2tpdCk6IEFwaSB7XG4gIGNvbnN0IGFwaSA9IGVuZHBvaW50c1RvTWV0aG9kcyhvY3Rva2l0KTtcbiAgcmV0dXJuIHtcbiAgICByZXN0OiBhcGksXG4gIH07XG59XG5yZXN0RW5kcG9pbnRNZXRob2RzLlZFUlNJT04gPSBWRVJTSU9OO1xuXG5leHBvcnQgZnVuY3Rpb24gbGVnYWN5UmVzdEVuZHBvaW50TWV0aG9kcyhvY3Rva2l0OiBPY3Rva2l0KTogQXBpW1wicmVzdFwiXSAmIEFwaSB7XG4gIGNvbnN0IGFwaSA9IGVuZHBvaW50c1RvTWV0aG9kcyhvY3Rva2l0KTtcbiAgcmV0dXJuIHtcbiAgICAuLi5hcGksXG4gICAgcmVzdDogYXBpLFxuICB9O1xufVxubGVnYWN5UmVzdEVuZHBvaW50TWV0aG9kcy5WRVJTSU9OID0gVkVSU0lPTjtcbiIsICJjb25zdCBWRVJTSU9OID0gXCIyMi4wLjFcIjtcbmV4cG9ydCB7XG4gIFZFUlNJT05cbn07XG4iLCAiaW1wb3J0IHsgT2N0b2tpdCBhcyBDb3JlIH0gZnJvbSBcIkBvY3Rva2l0L2NvcmVcIjtcbmltcG9ydCB7IHJlcXVlc3RMb2cgfSBmcm9tIFwiQG9jdG9raXQvcGx1Z2luLXJlcXVlc3QtbG9nXCI7XG5pbXBvcnQge1xuICBwYWdpbmF0ZVJlc3Rcbn0gZnJvbSBcIkBvY3Rva2l0L3BsdWdpbi1wYWdpbmF0ZS1yZXN0XCI7XG5pbXBvcnQgeyBsZWdhY3lSZXN0RW5kcG9pbnRNZXRob2RzIH0gZnJvbSBcIkBvY3Rva2l0L3BsdWdpbi1yZXN0LWVuZHBvaW50LW1ldGhvZHNcIjtcbmltcG9ydCB7IFZFUlNJT04gfSBmcm9tIFwiLi92ZXJzaW9uLmpzXCI7XG5jb25zdCBPY3Rva2l0ID0gQ29yZS5wbHVnaW4ocmVxdWVzdExvZywgbGVnYWN5UmVzdEVuZHBvaW50TWV0aG9kcywgcGFnaW5hdGVSZXN0KS5kZWZhdWx0cyhcbiAge1xuICAgIHVzZXJBZ2VudDogYG9jdG9raXQtcmVzdC5qcy8ke1ZFUlNJT059YFxuICB9XG4pO1xuZXhwb3J0IHtcbiAgT2N0b2tpdFxufTtcbiIsICJpbXBvcnQgeyBPY3Rva2l0IH0gZnJvbSAnQG9jdG9raXQvcmVzdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHaXRodWJDbGllbnQodG9rZW46IHN0cmluZyk6IE9jdG9raXQge1xuICAgIHJldHVybiBuZXcgT2N0b2tpdCh7IGF1dGg6IHRva2VuIH0pO1xufVxuIiwgImltcG9ydCB7IE9jdG9raXQgfSBmcm9tICdAb2N0b2tpdC9yZXN0JztcblxuaW50ZXJmYWNlIFB1Ymxpc2hSZWxlYXNlUGFyYW1zIHtcbiAgICBvd25lcjogc3RyaW5nO1xuICAgIHJlcG86IHN0cmluZztcbiAgICB0YWdOYW1lOiBzdHJpbmc7XG4gICAgY29tbWl0U2hhOiBzdHJpbmc7XG4gICAgcmVsZWFzZU5vdGVzOiBzdHJpbmc7XG4gICAgaXNQcmVyZWxlYXNlOiBib29sZWFuO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHVibGlzaFJlbGVhc2Uob2N0b2tpdDogT2N0b2tpdCwgcGFyYW1zOiBQdWJsaXNoUmVsZWFzZVBhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgZGF0YTogdGFnRGF0YSB9ID0gYXdhaXQgb2N0b2tpdC5naXQuY3JlYXRlVGFnKHtcbiAgICAgICAgb3duZXI6IHBhcmFtcy5vd25lcixcbiAgICAgICAgcmVwbzogcGFyYW1zLnJlcG8sXG4gICAgICAgIHRhZzogcGFyYW1zLnRhZ05hbWUsXG4gICAgICAgIG1lc3NhZ2U6IHBhcmFtcy50YWdOYW1lLFxuICAgICAgICBvYmplY3Q6IHBhcmFtcy5jb21taXRTaGEsXG4gICAgICAgIHR5cGU6ICdjb21taXQnLFxuICAgICAgICB0YWdnZXI6IHtcbiAgICAgICAgICAgIG5hbWU6ICdnaXRodWItYWN0aW9uc1tib3RdJyxcbiAgICAgICAgICAgIGVtYWlsOiAnNDE4OTgyODIrZ2l0aHViLWFjdGlvbnNbYm90XUB1c2Vycy5ub3JlcGx5LmdpdGh1Yi5jb20nLFxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgYXdhaXQgb2N0b2tpdC5naXQuY3JlYXRlUmVmKHtcbiAgICAgICAgb3duZXI6IHBhcmFtcy5vd25lcixcbiAgICAgICAgcmVwbzogcGFyYW1zLnJlcG8sXG4gICAgICAgIHJlZjogYHJlZnMvdGFncy8ke3BhcmFtcy50YWdOYW1lfWAsXG4gICAgICAgIHNoYTogdGFnRGF0YS5zaGEsXG4gICAgfSk7XG5cbiAgICBhd2FpdCBvY3Rva2l0LnJlcG9zLmNyZWF0ZVJlbGVhc2Uoe1xuICAgICAgICBvd25lcjogcGFyYW1zLm93bmVyLFxuICAgICAgICByZXBvOiBwYXJhbXMucmVwbyxcbiAgICAgICAgdGFnX25hbWU6IHBhcmFtcy50YWdOYW1lLFxuICAgICAgICBib2R5OiBwYXJhbXMucmVsZWFzZU5vdGVzLFxuICAgICAgICBwcmVyZWxlYXNlOiBwYXJhbXMuaXNQcmVyZWxlYXNlLFxuICAgICAgICBtYWtlX2xhdGVzdDogcGFyYW1zLmlzUHJlcmVsZWFzZSA/ICdmYWxzZScgOiAndHJ1ZScsXG4gICAgfSk7XG59XG4iLCAiaW1wb3J0IHsgZXh0cmFjdFByZXJlbGVhc2VEZWx0YSwgZXh0cmFjdFN0YWJsZU5vdGVzIH0gZnJvbSAnQC9jaGFuZ2Vsb2ctbWFuYWdlcic7XG5pbXBvcnQgeyBjcmVhdGVHaXRodWJDbGllbnQgfSBmcm9tICdAL2dpdGh1Yi1jbGllbnQnO1xuaW1wb3J0IHsgcHVibGlzaFJlbGVhc2UgfSBmcm9tICdAL3JlbGVhc2UtcHVibGlzaGVyJztcbmltcG9ydCB7IGFwcGVuZEZpbGUsIHJlYWRGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnO1xuaW1wb3J0IHNlbXZlciBmcm9tICdzZW12ZXInO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgW293bmVyLCByZXBvXSA9IHByb2Nlc3MuZW52WydHSVRIVUJfUkVQT1NJVE9SWSddIS5zcGxpdCgnLycpO1xuICAgIGNvbnN0IGNoYW5nZWxvZ1BhdGggPSBwcm9jZXNzLmVudlsnQ0hBTkdFTE9HX1BBVEgnXSA/PyAnQ0hBTkdFTE9HLm1kJztcblxuICAgIGNvbnN0IG1hbmlmZXN0ID0gSlNPTi5wYXJzZShhd2FpdCByZWFkRmlsZShgJHtwcm9jZXNzLmVudlsnR0lUSFVCX1dPUktTUEFDRSddIX0vcGFja2FnZS5qc29uYCwgJ3V0Zi04JykpIGFzIHtcbiAgICAgICAgdmVyc2lvbjogc3RyaW5nO1xuICAgIH07XG4gICAgY29uc3QgdmVyc2lvbiA9IG1hbmlmZXN0LnZlcnNpb247XG4gICAgY29uc3QgaXNQcmVyZWxlYXNlID0gc2VtdmVyLnByZXJlbGVhc2UodmVyc2lvbikgIT09IG51bGw7XG5cbiAgICBjb25zdCByZWxlYXNlTm90ZXMgPSBpc1ByZXJlbGVhc2VcbiAgICAgICAgPyBhd2FpdCBleHRyYWN0UHJlcmVsZWFzZURlbHRhKGNoYW5nZWxvZ1BhdGgpXG4gICAgICAgIDogYXdhaXQgZXh0cmFjdFN0YWJsZU5vdGVzKGNoYW5nZWxvZ1BhdGgpO1xuXG4gICAgY29uc3Qgb2N0b2tpdCA9IGNyZWF0ZUdpdGh1YkNsaWVudChwcm9jZXNzLmVudlsnR0hfVE9LRU4nXSEpO1xuXG4gICAgYXdhaXQgcHVibGlzaFJlbGVhc2Uob2N0b2tpdCwge1xuICAgICAgICBvd25lcjogb3duZXIhLFxuICAgICAgICByZXBvOiByZXBvISxcbiAgICAgICAgdGFnTmFtZTogYHYke3ZlcnNpb259YCxcbiAgICAgICAgY29tbWl0U2hhOiBwcm9jZXNzLmVudlsnR0lUSFVCX1NIQSddISxcbiAgICAgICAgcmVsZWFzZU5vdGVzLFxuICAgICAgICBpc1ByZXJlbGVhc2UsXG4gICAgfSk7XG5cbiAgICBjb25zdCBvdXRwdXQgPSBwcm9jZXNzLmVudlsnR0lUSFVCX09VVFBVVCddITtcbiAgICBhd2FpdCBhcHBlbmRGaWxlKG91dHB1dCwgYGlzLXByZXJlbGVhc2U9JHtpc1ByZXJlbGVhc2V9XFxuYCk7XG59XG5cbmlmIChwcm9jZXNzLmFyZ3ZbMV0gPT09IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSkge1xuICAgIGF3YWl0IHJ1bigpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBRUEsUUFBTSxhQUFhLFNBQVNBLGNBQWM7QUFBQSxJQUFFO0FBQzVDLGVBQVcsWUFBWSx1QkFBTyxPQUFPLElBQUk7QUFnQnpDLFFBQU0sVUFBVTtBQVFoQixRQUFNLGVBQWU7QUFTckIsUUFBTSxjQUFjO0FBR3BCLFFBQU0scUJBQXFCLEVBQUUsTUFBTSxJQUFJLFlBQVksSUFBSSxXQUFXLEVBQUU7QUFDcEUsV0FBTyxPQUFPLG1CQUFtQixVQUFVO0FBQzNDLFdBQU8sT0FBTyxrQkFBa0I7QUFVaEMsYUFBU0MsT0FBTyxRQUFRO0FBQ3RCLFVBQUksT0FBTyxXQUFXLFVBQVU7QUFDOUIsY0FBTSxJQUFJLFVBQVUsa0RBQWtEO0FBQUEsTUFDeEU7QUFFQSxVQUFJLFFBQVEsT0FBTyxRQUFRLEdBQUc7QUFDOUIsWUFBTSxPQUFPLFVBQVUsS0FDbkIsT0FBTyxNQUFNLEdBQUcsS0FBSyxFQUFFLEtBQUssSUFDNUIsT0FBTyxLQUFLO0FBRWhCLFVBQUksWUFBWSxLQUFLLElBQUksTUFBTSxPQUFPO0FBQ3BDLGNBQU0sSUFBSSxVQUFVLG9CQUFvQjtBQUFBLE1BQzFDO0FBRUEsWUFBTSxTQUFTO0FBQUEsUUFDYixNQUFNLEtBQUssWUFBWTtBQUFBLFFBQ3ZCLFlBQVksSUFBSSxXQUFXO0FBQUEsTUFDN0I7QUFHQSxVQUFJLFVBQVUsSUFBSTtBQUNoQixlQUFPO0FBQUEsTUFDVDtBQUVBLFVBQUk7QUFDSixVQUFJO0FBQ0osVUFBSTtBQUVKLGNBQVEsWUFBWTtBQUVwQixhQUFRLFFBQVEsUUFBUSxLQUFLLE1BQU0sR0FBSTtBQUNyQyxZQUFJLE1BQU0sVUFBVSxPQUFPO0FBQ3pCLGdCQUFNLElBQUksVUFBVSwwQkFBMEI7QUFBQSxRQUNoRDtBQUVBLGlCQUFTLE1BQU0sQ0FBQyxFQUFFO0FBQ2xCLGNBQU0sTUFBTSxDQUFDLEVBQUUsWUFBWTtBQUMzQixnQkFBUSxNQUFNLENBQUM7QUFFZixZQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUs7QUFFcEIsa0JBQVEsTUFDTCxNQUFNLEdBQUcsTUFBTSxTQUFTLENBQUM7QUFFNUIsdUJBQWEsS0FBSyxLQUFLLE1BQU0sUUFBUSxNQUFNLFFBQVEsY0FBYyxJQUFJO0FBQUEsUUFDdkU7QUFFQSxlQUFPLFdBQVcsR0FBRyxJQUFJO0FBQUEsTUFDM0I7QUFFQSxVQUFJLFVBQVUsT0FBTyxRQUFRO0FBQzNCLGNBQU0sSUFBSSxVQUFVLDBCQUEwQjtBQUFBLE1BQ2hEO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFFQSxhQUFTQyxXQUFXLFFBQVE7QUFDMUIsVUFBSSxPQUFPLFdBQVcsVUFBVTtBQUM5QixlQUFPO0FBQUEsTUFDVDtBQUVBLFVBQUksUUFBUSxPQUFPLFFBQVEsR0FBRztBQUM5QixZQUFNLE9BQU8sVUFBVSxLQUNuQixPQUFPLE1BQU0sR0FBRyxLQUFLLEVBQUUsS0FBSyxJQUM1QixPQUFPLEtBQUs7QUFFaEIsVUFBSSxZQUFZLEtBQUssSUFBSSxNQUFNLE9BQU87QUFDcEMsZUFBTztBQUFBLE1BQ1Q7QUFFQSxZQUFNLFNBQVM7QUFBQSxRQUNiLE1BQU0sS0FBSyxZQUFZO0FBQUEsUUFDdkIsWUFBWSxJQUFJLFdBQVc7QUFBQSxNQUM3QjtBQUdBLFVBQUksVUFBVSxJQUFJO0FBQ2hCLGVBQU87QUFBQSxNQUNUO0FBRUEsVUFBSTtBQUNKLFVBQUk7QUFDSixVQUFJO0FBRUosY0FBUSxZQUFZO0FBRXBCLGFBQVEsUUFBUSxRQUFRLEtBQUssTUFBTSxHQUFJO0FBQ3JDLFlBQUksTUFBTSxVQUFVLE9BQU87QUFDekIsaUJBQU87QUFBQSxRQUNUO0FBRUEsaUJBQVMsTUFBTSxDQUFDLEVBQUU7QUFDbEIsY0FBTSxNQUFNLENBQUMsRUFBRSxZQUFZO0FBQzNCLGdCQUFRLE1BQU0sQ0FBQztBQUVmLFlBQUksTUFBTSxDQUFDLE1BQU0sS0FBSztBQUVwQixrQkFBUSxNQUNMLE1BQU0sR0FBRyxNQUFNLFNBQVMsQ0FBQztBQUU1Qix1QkFBYSxLQUFLLEtBQUssTUFBTSxRQUFRLE1BQU0sUUFBUSxjQUFjLElBQUk7QUFBQSxRQUN2RTtBQUVBLGVBQU8sV0FBVyxHQUFHLElBQUk7QUFBQSxNQUMzQjtBQUVBLFVBQUksVUFBVSxPQUFPLFFBQVE7QUFDM0IsZUFBTztBQUFBLE1BQ1Q7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUVBLFdBQU8sUUFBUSxVQUFVLEVBQUUsT0FBQUQsUUFBTyxXQUFBQyxXQUFVO0FBQzVDLFdBQU8sUUFBUSxRQUFRRDtBQUN2QixXQUFPLFFBQVEsWUFBWUM7QUFDM0IsV0FBTyxRQUFRLHFCQUFxQjtBQUFBO0FBQUE7OztBQ3hLcEM7QUFBQTtBQUFBO0FBSUEsUUFBTSxzQkFBc0I7QUFFNUIsUUFBTSxhQUFhO0FBQ25CLFFBQU0sbUJBQW1CLE9BQU87QUFBQSxJQUNMO0FBRzNCLFFBQU0sNEJBQTRCO0FBSWxDLFFBQU0sd0JBQXdCLGFBQWE7QUFFM0MsUUFBTSxnQkFBZ0I7QUFBQSxNQUNwQjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFFQSxXQUFPLFVBQVU7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBLHlCQUF5QjtBQUFBLE1BQ3pCLFlBQVk7QUFBQSxJQUNkO0FBQUE7QUFBQTs7O0FDcENBO0FBQUE7QUFBQTtBQUVBLFFBQU0sUUFDSixPQUFPLFlBQVksWUFDbkIsUUFBUSxPQUNSLFFBQVEsSUFBSSxjQUNaLGNBQWMsS0FBSyxRQUFRLElBQUksVUFBVSxJQUN2QyxJQUFJLFNBQVMsUUFBUSxNQUFNLFVBQVUsR0FBRyxJQUFJLElBQzVDLE1BQU07QUFBQSxJQUFDO0FBRVgsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDVmpCO0FBQUE7QUFBQTtBQUVBLFFBQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGLElBQUk7QUFDSixRQUFNLFFBQVE7QUFDZCxjQUFVLE9BQU8sVUFBVSxDQUFDO0FBRzVCLFFBQU0sS0FBSyxRQUFRLEtBQUssQ0FBQztBQUN6QixRQUFNLFNBQVMsUUFBUSxTQUFTLENBQUM7QUFDakMsUUFBTSxNQUFNLFFBQVEsTUFBTSxDQUFDO0FBQzNCLFFBQU0sVUFBVSxRQUFRLFVBQVUsQ0FBQztBQUNuQyxRQUFNLElBQUksUUFBUSxJQUFJLENBQUM7QUFDdkIsUUFBSSxJQUFJO0FBRVIsUUFBTSxtQkFBbUI7QUFRekIsUUFBTSx3QkFBd0I7QUFBQSxNQUM1QixDQUFDLE9BQU8sQ0FBQztBQUFBLE1BQ1QsQ0FBQyxPQUFPLFVBQVU7QUFBQSxNQUNsQixDQUFDLGtCQUFrQixxQkFBcUI7QUFBQSxJQUMxQztBQUVBLFFBQU0sZ0JBQWdCLENBQUMsVUFBVTtBQUMvQixpQkFBVyxDQUFDLE9BQU8sR0FBRyxLQUFLLHVCQUF1QjtBQUNoRCxnQkFBUSxNQUNMLE1BQU0sR0FBRyxLQUFLLEdBQUcsRUFBRSxLQUFLLEdBQUcsS0FBSyxNQUFNLEdBQUcsR0FBRyxFQUM1QyxNQUFNLEdBQUcsS0FBSyxHQUFHLEVBQUUsS0FBSyxHQUFHLEtBQUssTUFBTSxHQUFHLEdBQUc7QUFBQSxNQUNqRDtBQUNBLGFBQU87QUFBQSxJQUNUO0FBRUEsUUFBTSxjQUFjLENBQUMsTUFBTSxPQUFPLGFBQWE7QUFDN0MsWUFBTSxPQUFPLGNBQWMsS0FBSztBQUNoQyxZQUFNLFFBQVE7QUFDZCxZQUFNLE1BQU0sT0FBTyxLQUFLO0FBQ3hCLFFBQUUsSUFBSSxJQUFJO0FBQ1YsVUFBSSxLQUFLLElBQUk7QUFDYixjQUFRLEtBQUssSUFBSTtBQUNqQixTQUFHLEtBQUssSUFBSSxJQUFJLE9BQU8sT0FBTyxXQUFXLE1BQU0sTUFBUztBQUN4RCxhQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBUztBQUFBLElBQzdEO0FBUUEsZ0JBQVkscUJBQXFCLGFBQWE7QUFDOUMsZ0JBQVksMEJBQTBCLE1BQU07QUFNNUMsZ0JBQVksd0JBQXdCLGdCQUFnQixnQkFBZ0IsR0FBRztBQUt2RSxnQkFBWSxlQUFlLElBQUksSUFBSSxFQUFFLGlCQUFpQixDQUFDLFFBQ2hDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxRQUN4QixJQUFJLEVBQUUsaUJBQWlCLENBQUMsR0FBRztBQUVsRCxnQkFBWSxvQkFBb0IsSUFBSSxJQUFJLEVBQUUsc0JBQXNCLENBQUMsUUFDckMsSUFBSSxFQUFFLHNCQUFzQixDQUFDLFFBQzdCLElBQUksRUFBRSxzQkFBc0IsQ0FBQyxHQUFHO0FBTzVELGdCQUFZLHdCQUF3QixNQUFNLElBQUksRUFBRSxvQkFBb0IsQ0FDcEUsSUFBSSxJQUFJLEVBQUUsaUJBQWlCLENBQUMsR0FBRztBQUUvQixnQkFBWSw2QkFBNkIsTUFBTSxJQUFJLEVBQUUsb0JBQW9CLENBQ3pFLElBQUksSUFBSSxFQUFFLHNCQUFzQixDQUFDLEdBQUc7QUFNcEMsZ0JBQVksY0FBYyxRQUFRLElBQUksRUFBRSxvQkFBb0IsQ0FDNUQsU0FBUyxJQUFJLEVBQUUsb0JBQW9CLENBQUMsTUFBTTtBQUUxQyxnQkFBWSxtQkFBbUIsU0FBUyxJQUFJLEVBQUUseUJBQXlCLENBQ3ZFLFNBQVMsSUFBSSxFQUFFLHlCQUF5QixDQUFDLE1BQU07QUFLL0MsZ0JBQVksbUJBQW1CLEdBQUcsZ0JBQWdCLEdBQUc7QUFNckQsZ0JBQVksU0FBUyxVQUFVLElBQUksRUFBRSxlQUFlLENBQ3BELFNBQVMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxNQUFNO0FBV3JDLGdCQUFZLGFBQWEsS0FBSyxJQUFJLEVBQUUsV0FBVyxDQUMvQyxHQUFHLElBQUksRUFBRSxVQUFVLENBQUMsSUFDbEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHO0FBRWpCLGdCQUFZLFFBQVEsSUFBSSxJQUFJLEVBQUUsU0FBUyxDQUFDLEdBQUc7QUFLM0MsZ0JBQVksY0FBYyxXQUFXLElBQUksRUFBRSxnQkFBZ0IsQ0FDM0QsR0FBRyxJQUFJLEVBQUUsZUFBZSxDQUFDLElBQ3ZCLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRztBQUVqQixnQkFBWSxTQUFTLElBQUksSUFBSSxFQUFFLFVBQVUsQ0FBQyxHQUFHO0FBRTdDLGdCQUFZLFFBQVEsY0FBYztBQUtsQyxnQkFBWSx5QkFBeUIsR0FBRyxJQUFJLEVBQUUsc0JBQXNCLENBQUMsVUFBVTtBQUMvRSxnQkFBWSxvQkFBb0IsR0FBRyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsVUFBVTtBQUVyRSxnQkFBWSxlQUFlLFlBQVksSUFBSSxFQUFFLGdCQUFnQixDQUFDLFdBQ2pDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxXQUN2QixJQUFJLEVBQUUsZ0JBQWdCLENBQUMsT0FDM0IsSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUNyQixJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQ1I7QUFFekIsZ0JBQVksb0JBQW9CLFlBQVksSUFBSSxFQUFFLHFCQUFxQixDQUFDLFdBQ3RDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxXQUM1QixJQUFJLEVBQUUscUJBQXFCLENBQUMsT0FDaEMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxLQUMxQixJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQ1I7QUFFOUIsZ0JBQVksVUFBVSxJQUFJLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsV0FBVyxDQUFDLEdBQUc7QUFDakUsZ0JBQVksZUFBZSxJQUFJLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsR0FBRztBQUkzRSxnQkFBWSxlQUFlLEdBQUcsbUJBQ1AsR0FBRyx5QkFBeUIsa0JBQ3JCLHlCQUF5QixvQkFDekIseUJBQXlCLE1BQU07QUFDN0QsZ0JBQVksVUFBVSxHQUFHLElBQUksRUFBRSxXQUFXLENBQUMsY0FBYztBQUN6RCxnQkFBWSxjQUFjLElBQUksRUFBRSxXQUFXLElBQzdCLE1BQU0sSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUNqQixJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUNKO0FBQzVCLGdCQUFZLGFBQWEsSUFBSSxFQUFFLE1BQU0sR0FBRyxJQUFJO0FBQzVDLGdCQUFZLGlCQUFpQixJQUFJLEVBQUUsVUFBVSxHQUFHLElBQUk7QUFJcEQsZ0JBQVksYUFBYSxTQUFTO0FBRWxDLGdCQUFZLGFBQWEsU0FBUyxJQUFJLEVBQUUsU0FBUyxDQUFDLFFBQVEsSUFBSTtBQUM5RCxZQUFRLG1CQUFtQjtBQUUzQixnQkFBWSxTQUFTLElBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQyxHQUFHLElBQUksRUFBRSxXQUFXLENBQUMsR0FBRztBQUNqRSxnQkFBWSxjQUFjLElBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQyxHQUFHLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHO0FBSTNFLGdCQUFZLGFBQWEsU0FBUztBQUVsQyxnQkFBWSxhQUFhLFNBQVMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxRQUFRLElBQUk7QUFDOUQsWUFBUSxtQkFBbUI7QUFFM0IsZ0JBQVksU0FBUyxJQUFJLElBQUksRUFBRSxTQUFTLENBQUMsR0FBRyxJQUFJLEVBQUUsV0FBVyxDQUFDLEdBQUc7QUFDakUsZ0JBQVksY0FBYyxJQUFJLElBQUksRUFBRSxTQUFTLENBQUMsR0FBRyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsR0FBRztBQUczRSxnQkFBWSxtQkFBbUIsSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLFVBQVUsQ0FBQyxPQUFPO0FBQzlFLGdCQUFZLGNBQWMsSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO0FBSXhFLGdCQUFZLGtCQUFrQixTQUFTLElBQUksRUFBRSxJQUFJLENBQ2pELFFBQVEsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxXQUFXLENBQUMsS0FBSyxJQUFJO0FBQ3hELFlBQVEsd0JBQXdCO0FBTWhDLGdCQUFZLGVBQWUsU0FBUyxJQUFJLEVBQUUsV0FBVyxDQUFDLGNBRS9CLElBQUksRUFBRSxXQUFXLENBQUMsUUFDZjtBQUUxQixnQkFBWSxvQkFBb0IsU0FBUyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsY0FFcEMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLFFBQ3BCO0FBRy9CLGdCQUFZLFFBQVEsaUJBQWlCO0FBRXJDLGdCQUFZLFFBQVEsMkJBQTJCO0FBQy9DLGdCQUFZLFdBQVcsNkJBQTZCO0FBQUE7QUFBQTs7O0FDOU5wRDtBQUFBO0FBQUE7QUFHQSxRQUFNLGNBQWMsT0FBTyxPQUFPLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDakQsUUFBTSxZQUFZLE9BQU8sT0FBTyxDQUFFLENBQUM7QUFDbkMsUUFBTSxlQUFlLGFBQVc7QUFDOUIsVUFBSSxDQUFDLFNBQVM7QUFDWixlQUFPO0FBQUEsTUFDVDtBQUVBLFVBQUksT0FBTyxZQUFZLFVBQVU7QUFDL0IsZUFBTztBQUFBLE1BQ1Q7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUNBLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ2hCakI7QUFBQTtBQUFBO0FBRUEsUUFBTSxVQUFVO0FBQ2hCLFFBQU0scUJBQXFCLENBQUMsR0FBRyxNQUFNO0FBQ25DLFVBQUksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVU7QUFDbEQsZUFBTyxNQUFNLElBQUksSUFBSSxJQUFJLElBQUksS0FBSztBQUFBLE1BQ3BDO0FBRUEsWUFBTSxPQUFPLFFBQVEsS0FBSyxDQUFDO0FBQzNCLFlBQU0sT0FBTyxRQUFRLEtBQUssQ0FBQztBQUUzQixVQUFJLFFBQVEsTUFBTTtBQUNoQixZQUFJLENBQUM7QUFDTCxZQUFJLENBQUM7QUFBQSxNQUNQO0FBRUEsYUFBTyxNQUFNLElBQUksSUFDWixRQUFRLENBQUMsT0FBUSxLQUNqQixRQUFRLENBQUMsT0FBUSxJQUNsQixJQUFJLElBQUksS0FDUjtBQUFBLElBQ047QUFFQSxRQUFNLHNCQUFzQixDQUFDLEdBQUcsTUFBTSxtQkFBbUIsR0FBRyxDQUFDO0FBRTdELFdBQU8sVUFBVTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQzVCQTtBQUFBO0FBQUE7QUFFQSxRQUFNLFFBQVE7QUFDZCxRQUFNLEVBQUUsWUFBWSxpQkFBaUIsSUFBSTtBQUN6QyxRQUFNLEVBQUUsUUFBUSxJQUFJLEVBQUUsSUFBSTtBQUUxQixRQUFNLGVBQWU7QUFDckIsUUFBTSxFQUFFLG1CQUFtQixJQUFJO0FBQy9CLFFBQU0sU0FBTixNQUFNLFFBQU87QUFBQSxNQUNYLFlBQWEsU0FBUyxTQUFTO0FBQzdCLGtCQUFVLGFBQWEsT0FBTztBQUU5QixZQUFJLG1CQUFtQixTQUFRO0FBQzdCLGNBQUksUUFBUSxVQUFVLENBQUMsQ0FBQyxRQUFRLFNBQzlCLFFBQVEsc0JBQXNCLENBQUMsQ0FBQyxRQUFRLG1CQUFtQjtBQUMzRCxtQkFBTztBQUFBLFVBQ1QsT0FBTztBQUNMLHNCQUFVLFFBQVE7QUFBQSxVQUNwQjtBQUFBLFFBQ0YsV0FBVyxPQUFPLFlBQVksVUFBVTtBQUN0QyxnQkFBTSxJQUFJLFVBQVUsZ0RBQWdELE9BQU8sT0FBTyxJQUFJO0FBQUEsUUFDeEY7QUFFQSxZQUFJLFFBQVEsU0FBUyxZQUFZO0FBQy9CLGdCQUFNLElBQUk7QUFBQSxZQUNSLDBCQUEwQixVQUFVO0FBQUEsVUFDdEM7QUFBQSxRQUNGO0FBRUEsY0FBTSxVQUFVLFNBQVMsT0FBTztBQUNoQyxhQUFLLFVBQVU7QUFDZixhQUFLLFFBQVEsQ0FBQyxDQUFDLFFBQVE7QUFHdkIsYUFBSyxvQkFBb0IsQ0FBQyxDQUFDLFFBQVE7QUFFbkMsY0FBTSxJQUFJLFFBQVEsS0FBSyxFQUFFLE1BQU0sUUFBUSxRQUFRLEdBQUcsRUFBRSxLQUFLLElBQUksR0FBRyxFQUFFLElBQUksQ0FBQztBQUV2RSxZQUFJLENBQUMsR0FBRztBQUNOLGdCQUFNLElBQUksVUFBVSxvQkFBb0IsT0FBTyxFQUFFO0FBQUEsUUFDbkQ7QUFFQSxhQUFLLE1BQU07QUFHWCxhQUFLLFFBQVEsQ0FBQyxFQUFFLENBQUM7QUFDakIsYUFBSyxRQUFRLENBQUMsRUFBRSxDQUFDO0FBQ2pCLGFBQUssUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUVqQixZQUFJLEtBQUssUUFBUSxvQkFBb0IsS0FBSyxRQUFRLEdBQUc7QUFDbkQsZ0JBQU0sSUFBSSxVQUFVLHVCQUF1QjtBQUFBLFFBQzdDO0FBRUEsWUFBSSxLQUFLLFFBQVEsb0JBQW9CLEtBQUssUUFBUSxHQUFHO0FBQ25ELGdCQUFNLElBQUksVUFBVSx1QkFBdUI7QUFBQSxRQUM3QztBQUVBLFlBQUksS0FBSyxRQUFRLG9CQUFvQixLQUFLLFFBQVEsR0FBRztBQUNuRCxnQkFBTSxJQUFJLFVBQVUsdUJBQXVCO0FBQUEsUUFDN0M7QUFHQSxZQUFJLENBQUMsRUFBRSxDQUFDLEdBQUc7QUFDVCxlQUFLLGFBQWEsQ0FBQztBQUFBLFFBQ3JCLE9BQU87QUFDTCxlQUFLLGFBQWEsRUFBRSxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU87QUFDNUMsZ0JBQUksV0FBVyxLQUFLLEVBQUUsR0FBRztBQUN2QixvQkFBTSxNQUFNLENBQUM7QUFDYixrQkFBSSxPQUFPLEtBQUssTUFBTSxrQkFBa0I7QUFDdEMsdUJBQU87QUFBQSxjQUNUO0FBQUEsWUFDRjtBQUNBLG1CQUFPO0FBQUEsVUFDVCxDQUFDO0FBQUEsUUFDSDtBQUVBLGFBQUssUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3ZDLGFBQUssT0FBTztBQUFBLE1BQ2Q7QUFBQSxNQUVBLFNBQVU7QUFDUixhQUFLLFVBQVUsR0FBRyxLQUFLLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxLQUFLLEtBQUs7QUFDeEQsWUFBSSxLQUFLLFdBQVcsUUFBUTtBQUMxQixlQUFLLFdBQVcsSUFBSSxLQUFLLFdBQVcsS0FBSyxHQUFHLENBQUM7QUFBQSxRQUMvQztBQUNBLGVBQU8sS0FBSztBQUFBLE1BQ2Q7QUFBQSxNQUVBLFdBQVk7QUFDVixlQUFPLEtBQUs7QUFBQSxNQUNkO0FBQUEsTUFFQSxRQUFTLE9BQU87QUFDZCxjQUFNLGtCQUFrQixLQUFLLFNBQVMsS0FBSyxTQUFTLEtBQUs7QUFDekQsWUFBSSxFQUFFLGlCQUFpQixVQUFTO0FBQzlCLGNBQUksT0FBTyxVQUFVLFlBQVksVUFBVSxLQUFLLFNBQVM7QUFDdkQsbUJBQU87QUFBQSxVQUNUO0FBQ0Esa0JBQVEsSUFBSSxRQUFPLE9BQU8sS0FBSyxPQUFPO0FBQUEsUUFDeEM7QUFFQSxZQUFJLE1BQU0sWUFBWSxLQUFLLFNBQVM7QUFDbEMsaUJBQU87QUFBQSxRQUNUO0FBRUEsZUFBTyxLQUFLLFlBQVksS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLO0FBQUEsTUFDekQ7QUFBQSxNQUVBLFlBQWEsT0FBTztBQUNsQixZQUFJLEVBQUUsaUJBQWlCLFVBQVM7QUFDOUIsa0JBQVEsSUFBSSxRQUFPLE9BQU8sS0FBSyxPQUFPO0FBQUEsUUFDeEM7QUFFQSxZQUFJLEtBQUssUUFBUSxNQUFNLE9BQU87QUFDNUIsaUJBQU87QUFBQSxRQUNUO0FBQ0EsWUFBSSxLQUFLLFFBQVEsTUFBTSxPQUFPO0FBQzVCLGlCQUFPO0FBQUEsUUFDVDtBQUNBLFlBQUksS0FBSyxRQUFRLE1BQU0sT0FBTztBQUM1QixpQkFBTztBQUFBLFFBQ1Q7QUFDQSxZQUFJLEtBQUssUUFBUSxNQUFNLE9BQU87QUFDNUIsaUJBQU87QUFBQSxRQUNUO0FBQ0EsWUFBSSxLQUFLLFFBQVEsTUFBTSxPQUFPO0FBQzVCLGlCQUFPO0FBQUEsUUFDVDtBQUNBLFlBQUksS0FBSyxRQUFRLE1BQU0sT0FBTztBQUM1QixpQkFBTztBQUFBLFFBQ1Q7QUFDQSxlQUFPO0FBQUEsTUFDVDtBQUFBLE1BRUEsV0FBWSxPQUFPO0FBQ2pCLFlBQUksRUFBRSxpQkFBaUIsVUFBUztBQUM5QixrQkFBUSxJQUFJLFFBQU8sT0FBTyxLQUFLLE9BQU87QUFBQSxRQUN4QztBQUdBLFlBQUksS0FBSyxXQUFXLFVBQVUsQ0FBQyxNQUFNLFdBQVcsUUFBUTtBQUN0RCxpQkFBTztBQUFBLFFBQ1QsV0FBVyxDQUFDLEtBQUssV0FBVyxVQUFVLE1BQU0sV0FBVyxRQUFRO0FBQzdELGlCQUFPO0FBQUEsUUFDVCxXQUFXLENBQUMsS0FBSyxXQUFXLFVBQVUsQ0FBQyxNQUFNLFdBQVcsUUFBUTtBQUM5RCxpQkFBTztBQUFBLFFBQ1Q7QUFFQSxZQUFJLElBQUk7QUFDUixXQUFHO0FBQ0QsZ0JBQU0sSUFBSSxLQUFLLFdBQVcsQ0FBQztBQUMzQixnQkFBTSxJQUFJLE1BQU0sV0FBVyxDQUFDO0FBQzVCLGdCQUFNLHNCQUFzQixHQUFHLEdBQUcsQ0FBQztBQUNuQyxjQUFJLE1BQU0sVUFBYSxNQUFNLFFBQVc7QUFDdEMsbUJBQU87QUFBQSxVQUNULFdBQVcsTUFBTSxRQUFXO0FBQzFCLG1CQUFPO0FBQUEsVUFDVCxXQUFXLE1BQU0sUUFBVztBQUMxQixtQkFBTztBQUFBLFVBQ1QsV0FBVyxNQUFNLEdBQUc7QUFDbEI7QUFBQSxVQUNGLE9BQU87QUFDTCxtQkFBTyxtQkFBbUIsR0FBRyxDQUFDO0FBQUEsVUFDaEM7QUFBQSxRQUNGLFNBQVMsRUFBRTtBQUFBLE1BQ2I7QUFBQSxNQUVBLGFBQWMsT0FBTztBQUNuQixZQUFJLEVBQUUsaUJBQWlCLFVBQVM7QUFDOUIsa0JBQVEsSUFBSSxRQUFPLE9BQU8sS0FBSyxPQUFPO0FBQUEsUUFDeEM7QUFFQSxZQUFJLElBQUk7QUFDUixXQUFHO0FBQ0QsZ0JBQU0sSUFBSSxLQUFLLE1BQU0sQ0FBQztBQUN0QixnQkFBTSxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQ3ZCLGdCQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQztBQUM5QixjQUFJLE1BQU0sVUFBYSxNQUFNLFFBQVc7QUFDdEMsbUJBQU87QUFBQSxVQUNULFdBQVcsTUFBTSxRQUFXO0FBQzFCLG1CQUFPO0FBQUEsVUFDVCxXQUFXLE1BQU0sUUFBVztBQUMxQixtQkFBTztBQUFBLFVBQ1QsV0FBVyxNQUFNLEdBQUc7QUFDbEI7QUFBQSxVQUNGLE9BQU87QUFDTCxtQkFBTyxtQkFBbUIsR0FBRyxDQUFDO0FBQUEsVUFDaEM7QUFBQSxRQUNGLFNBQVMsRUFBRTtBQUFBLE1BQ2I7QUFBQTtBQUFBO0FBQUEsTUFJQSxJQUFLLFNBQVMsWUFBWSxnQkFBZ0I7QUFDeEMsWUFBSSxRQUFRLFdBQVcsS0FBSyxHQUFHO0FBQzdCLGNBQUksQ0FBQyxjQUFjLG1CQUFtQixPQUFPO0FBQzNDLGtCQUFNLElBQUksTUFBTSxpREFBaUQ7QUFBQSxVQUNuRTtBQUVBLGNBQUksWUFBWTtBQUNkLGtCQUFNLFFBQVEsSUFBSSxVQUFVLEdBQUcsTUFBTSxLQUFLLFFBQVEsUUFBUSxHQUFHLEVBQUUsZUFBZSxJQUFJLEdBQUcsRUFBRSxVQUFVLENBQUM7QUFDbEcsZ0JBQUksQ0FBQyxTQUFTLE1BQU0sQ0FBQyxNQUFNLFlBQVk7QUFDckMsb0JBQU0sSUFBSSxNQUFNLHVCQUF1QixVQUFVLEVBQUU7QUFBQSxZQUNyRDtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBRUEsZ0JBQVEsU0FBUztBQUFBLFVBQ2YsS0FBSztBQUNILGlCQUFLLFdBQVcsU0FBUztBQUN6QixpQkFBSyxRQUFRO0FBQ2IsaUJBQUssUUFBUTtBQUNiLGlCQUFLO0FBQ0wsaUJBQUssSUFBSSxPQUFPLFlBQVksY0FBYztBQUMxQztBQUFBLFVBQ0YsS0FBSztBQUNILGlCQUFLLFdBQVcsU0FBUztBQUN6QixpQkFBSyxRQUFRO0FBQ2IsaUJBQUs7QUFDTCxpQkFBSyxJQUFJLE9BQU8sWUFBWSxjQUFjO0FBQzFDO0FBQUEsVUFDRixLQUFLO0FBSUgsaUJBQUssV0FBVyxTQUFTO0FBQ3pCLGlCQUFLLElBQUksU0FBUyxZQUFZLGNBQWM7QUFDNUMsaUJBQUssSUFBSSxPQUFPLFlBQVksY0FBYztBQUMxQztBQUFBO0FBQUE7QUFBQSxVQUdGLEtBQUs7QUFDSCxnQkFBSSxLQUFLLFdBQVcsV0FBVyxHQUFHO0FBQ2hDLG1CQUFLLElBQUksU0FBUyxZQUFZLGNBQWM7QUFBQSxZQUM5QztBQUNBLGlCQUFLLElBQUksT0FBTyxZQUFZLGNBQWM7QUFDMUM7QUFBQSxVQUNGLEtBQUs7QUFDSCxnQkFBSSxLQUFLLFdBQVcsV0FBVyxHQUFHO0FBQ2hDLG9CQUFNLElBQUksTUFBTSxXQUFXLEtBQUssR0FBRyxzQkFBc0I7QUFBQSxZQUMzRDtBQUNBLGlCQUFLLFdBQVcsU0FBUztBQUN6QjtBQUFBLFVBRUYsS0FBSztBQUtILGdCQUNFLEtBQUssVUFBVSxLQUNmLEtBQUssVUFBVSxLQUNmLEtBQUssV0FBVyxXQUFXLEdBQzNCO0FBQ0EsbUJBQUs7QUFBQSxZQUNQO0FBQ0EsaUJBQUssUUFBUTtBQUNiLGlCQUFLLFFBQVE7QUFDYixpQkFBSyxhQUFhLENBQUM7QUFDbkI7QUFBQSxVQUNGLEtBQUs7QUFLSCxnQkFBSSxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxHQUFHO0FBQ3BELG1CQUFLO0FBQUEsWUFDUDtBQUNBLGlCQUFLLFFBQVE7QUFDYixpQkFBSyxhQUFhLENBQUM7QUFDbkI7QUFBQSxVQUNGLEtBQUs7QUFLSCxnQkFBSSxLQUFLLFdBQVcsV0FBVyxHQUFHO0FBQ2hDLG1CQUFLO0FBQUEsWUFDUDtBQUNBLGlCQUFLLGFBQWEsQ0FBQztBQUNuQjtBQUFBO0FBQUE7QUFBQSxVQUdGLEtBQUssT0FBTztBQUNWLGtCQUFNLE9BQU8sT0FBTyxjQUFjLElBQUksSUFBSTtBQUUxQyxnQkFBSSxLQUFLLFdBQVcsV0FBVyxHQUFHO0FBQ2hDLG1CQUFLLGFBQWEsQ0FBQyxJQUFJO0FBQUEsWUFDekIsT0FBTztBQUNMLGtCQUFJLElBQUksS0FBSyxXQUFXO0FBQ3hCLHFCQUFPLEVBQUUsS0FBSyxHQUFHO0FBQ2Ysb0JBQUksT0FBTyxLQUFLLFdBQVcsQ0FBQyxNQUFNLFVBQVU7QUFDMUMsdUJBQUssV0FBVyxDQUFDO0FBQ2pCLHNCQUFJO0FBQUEsZ0JBQ047QUFBQSxjQUNGO0FBQ0Esa0JBQUksTUFBTSxJQUFJO0FBRVosb0JBQUksZUFBZSxLQUFLLFdBQVcsS0FBSyxHQUFHLEtBQUssbUJBQW1CLE9BQU87QUFDeEUsd0JBQU0sSUFBSSxNQUFNLHVEQUF1RDtBQUFBLGdCQUN6RTtBQUNBLHFCQUFLLFdBQVcsS0FBSyxJQUFJO0FBQUEsY0FDM0I7QUFBQSxZQUNGO0FBQ0EsZ0JBQUksWUFBWTtBQUdkLGtCQUFJLGFBQWEsQ0FBQyxZQUFZLElBQUk7QUFDbEMsa0JBQUksbUJBQW1CLE9BQU87QUFDNUIsNkJBQWEsQ0FBQyxVQUFVO0FBQUEsY0FDMUI7QUFDQSxrQkFBSSxtQkFBbUIsS0FBSyxXQUFXLENBQUMsR0FBRyxVQUFVLE1BQU0sR0FBRztBQUM1RCxvQkFBSSxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsR0FBRztBQUM3Qix1QkFBSyxhQUFhO0FBQUEsZ0JBQ3BCO0FBQUEsY0FDRixPQUFPO0FBQ0wscUJBQUssYUFBYTtBQUFBLGNBQ3BCO0FBQUEsWUFDRjtBQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFDRSxrQkFBTSxJQUFJLE1BQU0sK0JBQStCLE9BQU8sRUFBRTtBQUFBLFFBQzVEO0FBQ0EsYUFBSyxNQUFNLEtBQUssT0FBTztBQUN2QixZQUFJLEtBQUssTUFBTSxRQUFRO0FBQ3JCLGVBQUssT0FBTyxJQUFJLEtBQUssTUFBTSxLQUFLLEdBQUcsQ0FBQztBQUFBLFFBQ3RDO0FBQ0EsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBRUEsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDNVVqQjtBQUFBO0FBQUE7QUFFQSxRQUFNLFNBQVM7QUFDZixRQUFNQyxTQUFRLENBQUMsU0FBUyxTQUFTLGNBQWMsVUFBVTtBQUN2RCxVQUFJLG1CQUFtQixRQUFRO0FBQzdCLGVBQU87QUFBQSxNQUNUO0FBQ0EsVUFBSTtBQUNGLGVBQU8sSUFBSSxPQUFPLFNBQVMsT0FBTztBQUFBLE1BQ3BDLFNBQVMsSUFBSTtBQUNYLFlBQUksQ0FBQyxhQUFhO0FBQ2hCLGlCQUFPO0FBQUEsUUFDVDtBQUNBLGNBQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUVBLFdBQU8sVUFBVUE7QUFBQTtBQUFBOzs7QUNqQmpCO0FBQUE7QUFBQTtBQUVBLFFBQU1DLFNBQVE7QUFDZCxRQUFNLFFBQVEsQ0FBQyxTQUFTLFlBQVk7QUFDbEMsWUFBTSxJQUFJQSxPQUFNLFNBQVMsT0FBTztBQUNoQyxhQUFPLElBQUksRUFBRSxVQUFVO0FBQUEsSUFDekI7QUFDQSxXQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUNQakI7QUFBQTtBQUFBO0FBRUEsUUFBTUMsU0FBUTtBQUNkLFFBQU0sUUFBUSxDQUFDLFNBQVMsWUFBWTtBQUNsQyxZQUFNLElBQUlBLE9BQU0sUUFBUSxLQUFLLEVBQUUsUUFBUSxVQUFVLEVBQUUsR0FBRyxPQUFPO0FBQzdELGFBQU8sSUFBSSxFQUFFLFVBQVU7QUFBQSxJQUN6QjtBQUNBLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ1BqQjtBQUFBO0FBQUE7QUFFQSxRQUFNLFNBQVM7QUFFZixRQUFNLE1BQU0sQ0FBQyxTQUFTLFNBQVMsU0FBUyxZQUFZLG1CQUFtQjtBQUNyRSxVQUFJLE9BQVEsWUFBYSxVQUFVO0FBQ2pDLHlCQUFpQjtBQUNqQixxQkFBYTtBQUNiLGtCQUFVO0FBQUEsTUFDWjtBQUVBLFVBQUk7QUFDRixlQUFPLElBQUk7QUFBQSxVQUNULG1CQUFtQixTQUFTLFFBQVEsVUFBVTtBQUFBLFVBQzlDO0FBQUEsUUFDRixFQUFFLElBQUksU0FBUyxZQUFZLGNBQWMsRUFBRTtBQUFBLE1BQzdDLFNBQVMsSUFBSTtBQUNYLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUNBLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ3BCakI7QUFBQTtBQUFBO0FBRUEsUUFBTUMsU0FBUTtBQUVkLFFBQU0sT0FBTyxDQUFDLFVBQVUsYUFBYTtBQUNuQyxZQUFNLEtBQUtBLE9BQU0sVUFBVSxNQUFNLElBQUk7QUFDckMsWUFBTSxLQUFLQSxPQUFNLFVBQVUsTUFBTSxJQUFJO0FBQ3JDLFlBQU0sYUFBYSxHQUFHLFFBQVEsRUFBRTtBQUVoQyxVQUFJLGVBQWUsR0FBRztBQUNwQixlQUFPO0FBQUEsTUFDVDtBQUVBLFlBQU0sV0FBVyxhQUFhO0FBQzlCLFlBQU0sY0FBYyxXQUFXLEtBQUs7QUFDcEMsWUFBTSxhQUFhLFdBQVcsS0FBSztBQUNuQyxZQUFNLGFBQWEsQ0FBQyxDQUFDLFlBQVksV0FBVztBQUM1QyxZQUFNLFlBQVksQ0FBQyxDQUFDLFdBQVcsV0FBVztBQUUxQyxVQUFJLGFBQWEsQ0FBQyxZQUFZO0FBUTVCLFlBQUksQ0FBQyxXQUFXLFNBQVMsQ0FBQyxXQUFXLE9BQU87QUFDMUMsaUJBQU87QUFBQSxRQUNUO0FBR0EsWUFBSSxXQUFXLFlBQVksV0FBVyxNQUFNLEdBQUc7QUFDN0MsY0FBSSxXQUFXLFNBQVMsQ0FBQyxXQUFXLE9BQU87QUFDekMsbUJBQU87QUFBQSxVQUNUO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUdBLFlBQU0sU0FBUyxhQUFhLFFBQVE7QUFFcEMsVUFBSSxHQUFHLFVBQVUsR0FBRyxPQUFPO0FBQ3pCLGVBQU8sU0FBUztBQUFBLE1BQ2xCO0FBRUEsVUFBSSxHQUFHLFVBQVUsR0FBRyxPQUFPO0FBQ3pCLGVBQU8sU0FBUztBQUFBLE1BQ2xCO0FBRUEsVUFBSSxHQUFHLFVBQVUsR0FBRyxPQUFPO0FBQ3pCLGVBQU8sU0FBUztBQUFBLE1BQ2xCO0FBR0EsYUFBTztBQUFBLElBQ1Q7QUFFQSxXQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUMzRGpCO0FBQUE7QUFBQTtBQUVBLFFBQU0sU0FBUztBQUNmLFFBQU0sUUFBUSxDQUFDLEdBQUcsVUFBVSxJQUFJLE9BQU8sR0FBRyxLQUFLLEVBQUU7QUFDakQsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDSmpCO0FBQUE7QUFBQTtBQUVBLFFBQU0sU0FBUztBQUNmLFFBQU0sUUFBUSxDQUFDLEdBQUcsVUFBVSxJQUFJLE9BQU8sR0FBRyxLQUFLLEVBQUU7QUFDakQsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDSmpCO0FBQUE7QUFBQTtBQUVBLFFBQU0sU0FBUztBQUNmLFFBQU0sUUFBUSxDQUFDLEdBQUcsVUFBVSxJQUFJLE9BQU8sR0FBRyxLQUFLLEVBQUU7QUFDakQsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDSmpCO0FBQUE7QUFBQTtBQUVBLFFBQU1DLFNBQVE7QUFDZCxRQUFNLGFBQWEsQ0FBQyxTQUFTLFlBQVk7QUFDdkMsWUFBTSxTQUFTQSxPQUFNLFNBQVMsT0FBTztBQUNyQyxhQUFRLFVBQVUsT0FBTyxXQUFXLFNBQVUsT0FBTyxhQUFhO0FBQUEsSUFDcEU7QUFDQSxXQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUNQakI7QUFBQTtBQUFBO0FBRUEsUUFBTSxTQUFTO0FBQ2YsUUFBTSxVQUFVLENBQUMsR0FBRyxHQUFHLFVBQ3JCLElBQUksT0FBTyxHQUFHLEtBQUssRUFBRSxRQUFRLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztBQUVuRCxXQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUNOakI7QUFBQTtBQUFBO0FBRUEsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sV0FBVyxDQUFDLEdBQUcsR0FBRyxVQUFVLFFBQVEsR0FBRyxHQUFHLEtBQUs7QUFDckQsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDSmpCO0FBQUE7QUFBQTtBQUVBLFFBQU0sVUFBVTtBQUNoQixRQUFNLGVBQWUsQ0FBQyxHQUFHLE1BQU0sUUFBUSxHQUFHLEdBQUcsSUFBSTtBQUNqRCxXQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUNKakI7QUFBQTtBQUFBO0FBRUEsUUFBTSxTQUFTO0FBQ2YsUUFBTSxlQUFlLENBQUMsR0FBRyxHQUFHLFVBQVU7QUFDcEMsWUFBTSxXQUFXLElBQUksT0FBTyxHQUFHLEtBQUs7QUFDcEMsWUFBTSxXQUFXLElBQUksT0FBTyxHQUFHLEtBQUs7QUFDcEMsYUFBTyxTQUFTLFFBQVEsUUFBUSxLQUFLLFNBQVMsYUFBYSxRQUFRO0FBQUEsSUFDckU7QUFDQSxXQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUNSakI7QUFBQTtBQUFBO0FBRUEsUUFBTSxlQUFlO0FBQ3JCLFFBQU0sT0FBTyxDQUFDLE1BQU0sVUFBVSxLQUFLLEtBQUssQ0FBQyxHQUFHLE1BQU0sYUFBYSxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQzNFLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ0pqQjtBQUFBO0FBQUE7QUFFQSxRQUFNLGVBQWU7QUFDckIsUUFBTSxRQUFRLENBQUMsTUFBTSxVQUFVLEtBQUssS0FBSyxDQUFDLEdBQUcsTUFBTSxhQUFhLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDNUUsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDSmpCO0FBQUE7QUFBQTtBQUVBLFFBQU0sVUFBVTtBQUNoQixRQUFNLEtBQUssQ0FBQyxHQUFHLEdBQUcsVUFBVSxRQUFRLEdBQUcsR0FBRyxLQUFLLElBQUk7QUFDbkQsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDSmpCO0FBQUE7QUFBQTtBQUVBLFFBQU0sVUFBVTtBQUNoQixRQUFNLEtBQUssQ0FBQyxHQUFHLEdBQUcsVUFBVSxRQUFRLEdBQUcsR0FBRyxLQUFLLElBQUk7QUFDbkQsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDSmpCO0FBQUE7QUFBQTtBQUVBLFFBQU0sVUFBVTtBQUNoQixRQUFNLEtBQUssQ0FBQyxHQUFHLEdBQUcsVUFBVSxRQUFRLEdBQUcsR0FBRyxLQUFLLE1BQU07QUFDckQsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDSmpCO0FBQUE7QUFBQTtBQUVBLFFBQU0sVUFBVTtBQUNoQixRQUFNLE1BQU0sQ0FBQyxHQUFHLEdBQUcsVUFBVSxRQUFRLEdBQUcsR0FBRyxLQUFLLE1BQU07QUFDdEQsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDSmpCO0FBQUE7QUFBQTtBQUVBLFFBQU0sVUFBVTtBQUNoQixRQUFNLE1BQU0sQ0FBQyxHQUFHLEdBQUcsVUFBVSxRQUFRLEdBQUcsR0FBRyxLQUFLLEtBQUs7QUFDckQsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDSmpCO0FBQUE7QUFBQTtBQUVBLFFBQU0sVUFBVTtBQUNoQixRQUFNLE1BQU0sQ0FBQyxHQUFHLEdBQUcsVUFBVSxRQUFRLEdBQUcsR0FBRyxLQUFLLEtBQUs7QUFDckQsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDSmpCO0FBQUE7QUFBQTtBQUVBLFFBQU0sS0FBSztBQUNYLFFBQU0sTUFBTTtBQUNaLFFBQU0sS0FBSztBQUNYLFFBQU0sTUFBTTtBQUNaLFFBQU0sS0FBSztBQUNYLFFBQU0sTUFBTTtBQUVaLFFBQU0sTUFBTSxDQUFDLEdBQUcsSUFBSSxHQUFHLFVBQVU7QUFDL0IsY0FBUSxJQUFJO0FBQUEsUUFDVixLQUFLO0FBQ0gsY0FBSSxPQUFPLE1BQU0sVUFBVTtBQUN6QixnQkFBSSxFQUFFO0FBQUEsVUFDUjtBQUNBLGNBQUksT0FBTyxNQUFNLFVBQVU7QUFDekIsZ0JBQUksRUFBRTtBQUFBLFVBQ1I7QUFDQSxpQkFBTyxNQUFNO0FBQUEsUUFFZixLQUFLO0FBQ0gsY0FBSSxPQUFPLE1BQU0sVUFBVTtBQUN6QixnQkFBSSxFQUFFO0FBQUEsVUFDUjtBQUNBLGNBQUksT0FBTyxNQUFNLFVBQVU7QUFDekIsZ0JBQUksRUFBRTtBQUFBLFVBQ1I7QUFDQSxpQkFBTyxNQUFNO0FBQUEsUUFFZixLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQ0gsaUJBQU8sR0FBRyxHQUFHLEdBQUcsS0FBSztBQUFBLFFBRXZCLEtBQUs7QUFDSCxpQkFBTyxJQUFJLEdBQUcsR0FBRyxLQUFLO0FBQUEsUUFFeEIsS0FBSztBQUNILGlCQUFPLEdBQUcsR0FBRyxHQUFHLEtBQUs7QUFBQSxRQUV2QixLQUFLO0FBQ0gsaUJBQU8sSUFBSSxHQUFHLEdBQUcsS0FBSztBQUFBLFFBRXhCLEtBQUs7QUFDSCxpQkFBTyxHQUFHLEdBQUcsR0FBRyxLQUFLO0FBQUEsUUFFdkIsS0FBSztBQUNILGlCQUFPLElBQUksR0FBRyxHQUFHLEtBQUs7QUFBQSxRQUV4QjtBQUNFLGdCQUFNLElBQUksVUFBVSxxQkFBcUIsRUFBRSxFQUFFO0FBQUEsTUFDakQ7QUFBQSxJQUNGO0FBQ0EsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDckRqQjtBQUFBO0FBQUE7QUFFQSxRQUFNLFNBQVM7QUFDZixRQUFNQyxTQUFRO0FBQ2QsUUFBTSxFQUFFLFFBQVEsSUFBSSxFQUFFLElBQUk7QUFFMUIsUUFBTSxTQUFTLENBQUMsU0FBUyxZQUFZO0FBQ25DLFVBQUksbUJBQW1CLFFBQVE7QUFDN0IsZUFBTztBQUFBLE1BQ1Q7QUFFQSxVQUFJLE9BQU8sWUFBWSxVQUFVO0FBQy9CLGtCQUFVLE9BQU8sT0FBTztBQUFBLE1BQzFCO0FBRUEsVUFBSSxPQUFPLFlBQVksVUFBVTtBQUMvQixlQUFPO0FBQUEsTUFDVDtBQUVBLGdCQUFVLFdBQVcsQ0FBQztBQUV0QixVQUFJLFFBQVE7QUFDWixVQUFJLENBQUMsUUFBUSxLQUFLO0FBQ2hCLGdCQUFRLFFBQVEsTUFBTSxRQUFRLG9CQUFvQixHQUFHLEVBQUUsVUFBVSxJQUFJLEdBQUcsRUFBRSxNQUFNLENBQUM7QUFBQSxNQUNuRixPQUFPO0FBVUwsY0FBTSxpQkFBaUIsUUFBUSxvQkFBb0IsR0FBRyxFQUFFLGFBQWEsSUFBSSxHQUFHLEVBQUUsU0FBUztBQUN2RixZQUFJO0FBQ0osZ0JBQVEsT0FBTyxlQUFlLEtBQUssT0FBTyxPQUNyQyxDQUFDLFNBQVMsTUFBTSxRQUFRLE1BQU0sQ0FBQyxFQUFFLFdBQVcsUUFBUSxTQUN2RDtBQUNBLGNBQUksQ0FBQyxTQUNDLEtBQUssUUFBUSxLQUFLLENBQUMsRUFBRSxXQUFXLE1BQU0sUUFBUSxNQUFNLENBQUMsRUFBRSxRQUFRO0FBQ25FLG9CQUFRO0FBQUEsVUFDVjtBQUNBLHlCQUFlLFlBQVksS0FBSyxRQUFRLEtBQUssQ0FBQyxFQUFFLFNBQVMsS0FBSyxDQUFDLEVBQUU7QUFBQSxRQUNuRTtBQUVBLHVCQUFlLFlBQVk7QUFBQSxNQUM3QjtBQUVBLFVBQUksVUFBVSxNQUFNO0FBQ2xCLGVBQU87QUFBQSxNQUNUO0FBRUEsWUFBTSxRQUFRLE1BQU0sQ0FBQztBQUNyQixZQUFNLFFBQVEsTUFBTSxDQUFDLEtBQUs7QUFDMUIsWUFBTSxRQUFRLE1BQU0sQ0FBQyxLQUFLO0FBQzFCLFlBQU0sYUFBYSxRQUFRLHFCQUFxQixNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLEtBQUs7QUFDNUUsWUFBTSxRQUFRLFFBQVEscUJBQXFCLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLENBQUMsS0FBSztBQUV2RSxhQUFPQSxPQUFNLEdBQUcsS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLEdBQUcsVUFBVSxHQUFHLEtBQUssSUFBSSxPQUFPO0FBQUEsSUFDekU7QUFDQSxXQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUM3RGpCO0FBQUE7QUFBQTtBQUVBLFFBQU0sV0FBTixNQUFlO0FBQUEsTUFDYixjQUFlO0FBQ2IsYUFBSyxNQUFNO0FBQ1gsYUFBSyxNQUFNLG9CQUFJLElBQUk7QUFBQSxNQUNyQjtBQUFBLE1BRUEsSUFBSyxLQUFLO0FBQ1IsY0FBTSxRQUFRLEtBQUssSUFBSSxJQUFJLEdBQUc7QUFDOUIsWUFBSSxVQUFVLFFBQVc7QUFDdkIsaUJBQU87QUFBQSxRQUNULE9BQU87QUFFTCxlQUFLLElBQUksT0FBTyxHQUFHO0FBQ25CLGVBQUssSUFBSSxJQUFJLEtBQUssS0FBSztBQUN2QixpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsTUFFQSxPQUFRLEtBQUs7QUFDWCxlQUFPLEtBQUssSUFBSSxPQUFPLEdBQUc7QUFBQSxNQUM1QjtBQUFBLE1BRUEsSUFBSyxLQUFLLE9BQU87QUFDZixjQUFNLFVBQVUsS0FBSyxPQUFPLEdBQUc7QUFFL0IsWUFBSSxDQUFDLFdBQVcsVUFBVSxRQUFXO0FBRW5DLGNBQUksS0FBSyxJQUFJLFFBQVEsS0FBSyxLQUFLO0FBQzdCLGtCQUFNLFdBQVcsS0FBSyxJQUFJLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDeEMsaUJBQUssT0FBTyxRQUFRO0FBQUEsVUFDdEI7QUFFQSxlQUFLLElBQUksSUFBSSxLQUFLLEtBQUs7QUFBQSxRQUN6QjtBQUVBLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUVBLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ3pDakI7QUFBQTtBQUFBO0FBRUEsUUFBTSxtQkFBbUI7QUFHekIsUUFBTSxRQUFOLE1BQU0sT0FBTTtBQUFBLE1BQ1YsWUFBYSxPQUFPLFNBQVM7QUFDM0Isa0JBQVUsYUFBYSxPQUFPO0FBRTlCLFlBQUksaUJBQWlCLFFBQU87QUFDMUIsY0FDRSxNQUFNLFVBQVUsQ0FBQyxDQUFDLFFBQVEsU0FDMUIsTUFBTSxzQkFBc0IsQ0FBQyxDQUFDLFFBQVEsbUJBQ3RDO0FBQ0EsbUJBQU87QUFBQSxVQUNULE9BQU87QUFDTCxtQkFBTyxJQUFJLE9BQU0sTUFBTSxLQUFLLE9BQU87QUFBQSxVQUNyQztBQUFBLFFBQ0Y7QUFFQSxZQUFJLGlCQUFpQixZQUFZO0FBRS9CLGVBQUssTUFBTSxNQUFNO0FBQ2pCLGVBQUssTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ25CLGVBQUssWUFBWTtBQUNqQixpQkFBTztBQUFBLFFBQ1Q7QUFFQSxhQUFLLFVBQVU7QUFDZixhQUFLLFFBQVEsQ0FBQyxDQUFDLFFBQVE7QUFDdkIsYUFBSyxvQkFBb0IsQ0FBQyxDQUFDLFFBQVE7QUFLbkMsYUFBSyxNQUFNLE1BQU0sS0FBSyxFQUFFLFFBQVEsa0JBQWtCLEdBQUc7QUFHckQsYUFBSyxNQUFNLEtBQUssSUFDYixNQUFNLElBQUksRUFFVixJQUFJLE9BQUssS0FBSyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFJbEMsT0FBTyxPQUFLLEVBQUUsTUFBTTtBQUV2QixZQUFJLENBQUMsS0FBSyxJQUFJLFFBQVE7QUFDcEIsZ0JBQU0sSUFBSSxVQUFVLHlCQUF5QixLQUFLLEdBQUcsRUFBRTtBQUFBLFFBQ3pEO0FBR0EsWUFBSSxLQUFLLElBQUksU0FBUyxHQUFHO0FBRXZCLGdCQUFNLFFBQVEsS0FBSyxJQUFJLENBQUM7QUFDeEIsZUFBSyxNQUFNLEtBQUssSUFBSSxPQUFPLE9BQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEQsY0FBSSxLQUFLLElBQUksV0FBVyxHQUFHO0FBQ3pCLGlCQUFLLE1BQU0sQ0FBQyxLQUFLO0FBQUEsVUFDbkIsV0FBVyxLQUFLLElBQUksU0FBUyxHQUFHO0FBRTlCLHVCQUFXLEtBQUssS0FBSyxLQUFLO0FBQ3hCLGtCQUFJLEVBQUUsV0FBVyxLQUFLLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRztBQUNqQyxxQkFBSyxNQUFNLENBQUMsQ0FBQztBQUNiO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUVBLGFBQUssWUFBWTtBQUFBLE1BQ25CO0FBQUEsTUFFQSxJQUFJLFFBQVM7QUFDWCxZQUFJLEtBQUssY0FBYyxRQUFXO0FBQ2hDLGVBQUssWUFBWTtBQUNqQixtQkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLElBQUksUUFBUSxLQUFLO0FBQ3hDLGdCQUFJLElBQUksR0FBRztBQUNULG1CQUFLLGFBQWE7QUFBQSxZQUNwQjtBQUNBLGtCQUFNLFFBQVEsS0FBSyxJQUFJLENBQUM7QUFDeEIscUJBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDckMsa0JBQUksSUFBSSxHQUFHO0FBQ1QscUJBQUssYUFBYTtBQUFBLGNBQ3BCO0FBQ0EsbUJBQUssYUFBYSxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSztBQUFBLFlBQzdDO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFDQSxlQUFPLEtBQUs7QUFBQSxNQUNkO0FBQUEsTUFFQSxTQUFVO0FBQ1IsZUFBTyxLQUFLO0FBQUEsTUFDZDtBQUFBLE1BRUEsV0FBWTtBQUNWLGVBQU8sS0FBSztBQUFBLE1BQ2Q7QUFBQSxNQUVBLFdBQVksT0FBTztBQUdqQixjQUFNLFlBQ0gsS0FBSyxRQUFRLHFCQUFxQiw0QkFDbEMsS0FBSyxRQUFRLFNBQVM7QUFDekIsY0FBTSxVQUFVLFdBQVcsTUFBTTtBQUNqQyxjQUFNLFNBQVMsTUFBTSxJQUFJLE9BQU87QUFDaEMsWUFBSSxRQUFRO0FBQ1YsaUJBQU87QUFBQSxRQUNUO0FBRUEsY0FBTSxRQUFRLEtBQUssUUFBUTtBQUUzQixjQUFNLEtBQUssUUFBUSxHQUFHLEVBQUUsZ0JBQWdCLElBQUksR0FBRyxFQUFFLFdBQVc7QUFDNUQsZ0JBQVEsTUFBTSxRQUFRLElBQUksY0FBYyxLQUFLLFFBQVEsaUJBQWlCLENBQUM7QUFDdkUsY0FBTSxrQkFBa0IsS0FBSztBQUc3QixnQkFBUSxNQUFNLFFBQVEsR0FBRyxFQUFFLGNBQWMsR0FBRyxxQkFBcUI7QUFDakUsY0FBTSxtQkFBbUIsS0FBSztBQUc5QixnQkFBUSxNQUFNLFFBQVEsR0FBRyxFQUFFLFNBQVMsR0FBRyxnQkFBZ0I7QUFDdkQsY0FBTSxjQUFjLEtBQUs7QUFHekIsZ0JBQVEsTUFBTSxRQUFRLEdBQUcsRUFBRSxTQUFTLEdBQUcsZ0JBQWdCO0FBQ3ZELGNBQU0sY0FBYyxLQUFLO0FBS3pCLFlBQUksWUFBWSxNQUNiLE1BQU0sR0FBRyxFQUNULElBQUksVUFBUSxnQkFBZ0IsTUFBTSxLQUFLLE9BQU8sQ0FBQyxFQUMvQyxLQUFLLEdBQUcsRUFDUixNQUFNLEtBQUssRUFFWCxJQUFJLFVBQVEsWUFBWSxNQUFNLEtBQUssT0FBTyxDQUFDO0FBRTlDLFlBQUksT0FBTztBQUVULHNCQUFZLFVBQVUsT0FBTyxVQUFRO0FBQ25DLGtCQUFNLHdCQUF3QixNQUFNLEtBQUssT0FBTztBQUNoRCxtQkFBTyxDQUFDLENBQUMsS0FBSyxNQUFNLEdBQUcsRUFBRSxlQUFlLENBQUM7QUFBQSxVQUMzQyxDQUFDO0FBQUEsUUFDSDtBQUNBLGNBQU0sY0FBYyxTQUFTO0FBSzdCLGNBQU0sV0FBVyxvQkFBSSxJQUFJO0FBQ3pCLGNBQU0sY0FBYyxVQUFVLElBQUksVUFBUSxJQUFJLFdBQVcsTUFBTSxLQUFLLE9BQU8sQ0FBQztBQUM1RSxtQkFBVyxRQUFRLGFBQWE7QUFDOUIsY0FBSSxVQUFVLElBQUksR0FBRztBQUNuQixtQkFBTyxDQUFDLElBQUk7QUFBQSxVQUNkO0FBQ0EsbUJBQVMsSUFBSSxLQUFLLE9BQU8sSUFBSTtBQUFBLFFBQy9CO0FBQ0EsWUFBSSxTQUFTLE9BQU8sS0FBSyxTQUFTLElBQUksRUFBRSxHQUFHO0FBQ3pDLG1CQUFTLE9BQU8sRUFBRTtBQUFBLFFBQ3BCO0FBRUEsY0FBTSxTQUFTLENBQUMsR0FBRyxTQUFTLE9BQU8sQ0FBQztBQUNwQyxjQUFNLElBQUksU0FBUyxNQUFNO0FBQ3pCLGVBQU87QUFBQSxNQUNUO0FBQUEsTUFFQSxXQUFZLE9BQU8sU0FBUztBQUMxQixZQUFJLEVBQUUsaUJBQWlCLFNBQVE7QUFDN0IsZ0JBQU0sSUFBSSxVQUFVLHFCQUFxQjtBQUFBLFFBQzNDO0FBRUEsZUFBTyxLQUFLLElBQUksS0FBSyxDQUFDLG9CQUFvQjtBQUN4QyxpQkFDRSxjQUFjLGlCQUFpQixPQUFPLEtBQ3RDLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCO0FBQ25DLG1CQUNFLGNBQWMsa0JBQWtCLE9BQU8sS0FDdkMsZ0JBQWdCLE1BQU0sQ0FBQyxtQkFBbUI7QUFDeEMscUJBQU8saUJBQWlCLE1BQU0sQ0FBQyxvQkFBb0I7QUFDakQsdUJBQU8sZUFBZSxXQUFXLGlCQUFpQixPQUFPO0FBQUEsY0FDM0QsQ0FBQztBQUFBLFlBQ0gsQ0FBQztBQUFBLFVBRUwsQ0FBQztBQUFBLFFBRUwsQ0FBQztBQUFBLE1BQ0g7QUFBQTtBQUFBLE1BR0EsS0FBTSxTQUFTO0FBQ2IsWUFBSSxDQUFDLFNBQVM7QUFDWixpQkFBTztBQUFBLFFBQ1Q7QUFFQSxZQUFJLE9BQU8sWUFBWSxVQUFVO0FBQy9CLGNBQUk7QUFDRixzQkFBVSxJQUFJLE9BQU8sU0FBUyxLQUFLLE9BQU87QUFBQSxVQUM1QyxTQUFTLElBQUk7QUFDWCxtQkFBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBRUEsaUJBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLFFBQVEsS0FBSztBQUN4QyxjQUFJLFFBQVEsS0FBSyxJQUFJLENBQUMsR0FBRyxTQUFTLEtBQUssT0FBTyxHQUFHO0FBQy9DLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFDQSxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFFQSxXQUFPLFVBQVU7QUFFakIsUUFBTSxNQUFNO0FBQ1osUUFBTSxRQUFRLElBQUksSUFBSTtBQUV0QixRQUFNLGVBQWU7QUFDckIsUUFBTSxhQUFhO0FBQ25CLFFBQU0sUUFBUTtBQUNkLFFBQU0sU0FBUztBQUNmLFFBQU07QUFBQSxNQUNKLFFBQVE7QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRixJQUFJO0FBQ0osUUFBTSxFQUFFLHlCQUF5QixXQUFXLElBQUk7QUFFaEQsUUFBTSxZQUFZLE9BQUssRUFBRSxVQUFVO0FBQ25DLFFBQU0sUUFBUSxPQUFLLEVBQUUsVUFBVTtBQUkvQixRQUFNLGdCQUFnQixDQUFDLGFBQWEsWUFBWTtBQUM5QyxVQUFJLFNBQVM7QUFDYixZQUFNLHVCQUF1QixZQUFZLE1BQU07QUFDL0MsVUFBSSxpQkFBaUIscUJBQXFCLElBQUk7QUFFOUMsYUFBTyxVQUFVLHFCQUFxQixRQUFRO0FBQzVDLGlCQUFTLHFCQUFxQixNQUFNLENBQUMsb0JBQW9CO0FBQ3ZELGlCQUFPLGVBQWUsV0FBVyxpQkFBaUIsT0FBTztBQUFBLFFBQzNELENBQUM7QUFFRCx5QkFBaUIscUJBQXFCLElBQUk7QUFBQSxNQUM1QztBQUVBLGFBQU87QUFBQSxJQUNUO0FBS0EsUUFBTSxrQkFBa0IsQ0FBQyxNQUFNLFlBQVk7QUFDekMsYUFBTyxLQUFLLFFBQVEsR0FBRyxFQUFFLEtBQUssR0FBRyxFQUFFO0FBQ25DLFlBQU0sUUFBUSxNQUFNLE9BQU87QUFDM0IsYUFBTyxjQUFjLE1BQU0sT0FBTztBQUNsQyxZQUFNLFNBQVMsSUFBSTtBQUNuQixhQUFPLGNBQWMsTUFBTSxPQUFPO0FBQ2xDLFlBQU0sVUFBVSxJQUFJO0FBQ3BCLGFBQU8sZUFBZSxNQUFNLE9BQU87QUFDbkMsWUFBTSxVQUFVLElBQUk7QUFDcEIsYUFBTyxhQUFhLE1BQU0sT0FBTztBQUNqQyxZQUFNLFNBQVMsSUFBSTtBQUNuQixhQUFPO0FBQUEsSUFDVDtBQUVBLFFBQU0sTUFBTSxRQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksTUFBTSxPQUFPLE9BQU87QUFTNUQsUUFBTSxnQkFBZ0IsQ0FBQyxNQUFNLFlBQVk7QUFDdkMsYUFBTyxLQUNKLEtBQUssRUFDTCxNQUFNLEtBQUssRUFDWCxJQUFJLENBQUMsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLEVBQ25DLEtBQUssR0FBRztBQUFBLElBQ2I7QUFFQSxRQUFNLGVBQWUsQ0FBQyxNQUFNLFlBQVk7QUFDdEMsWUFBTSxJQUFJLFFBQVEsUUFBUSxHQUFHLEVBQUUsVUFBVSxJQUFJLEdBQUcsRUFBRSxLQUFLO0FBQ3ZELGFBQU8sS0FBSyxRQUFRLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLE9BQU87QUFDekMsY0FBTSxTQUFTLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFO0FBQ25DLFlBQUk7QUFFSixZQUFJLElBQUksQ0FBQyxHQUFHO0FBQ1YsZ0JBQU07QUFBQSxRQUNSLFdBQVcsSUFBSSxDQUFDLEdBQUc7QUFDakIsZ0JBQU0sS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFBQSxRQUM3QixXQUFXLElBQUksQ0FBQyxHQUFHO0FBRWpCLGdCQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFBQSxRQUNyQyxXQUFXLElBQUk7QUFDYixnQkFBTSxtQkFBbUIsRUFBRTtBQUMzQixnQkFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQUEsUUFDbEIsT0FBTztBQUVMLGdCQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUFBLFFBQ2xCO0FBRUEsY0FBTSxnQkFBZ0IsR0FBRztBQUN6QixlQUFPO0FBQUEsTUFDVCxDQUFDO0FBQUEsSUFDSDtBQVVBLFFBQU0sZ0JBQWdCLENBQUMsTUFBTSxZQUFZO0FBQ3ZDLGFBQU8sS0FDSixLQUFLLEVBQ0wsTUFBTSxLQUFLLEVBQ1gsSUFBSSxDQUFDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxFQUNuQyxLQUFLLEdBQUc7QUFBQSxJQUNiO0FBRUEsUUFBTSxlQUFlLENBQUMsTUFBTSxZQUFZO0FBQ3RDLFlBQU0sU0FBUyxNQUFNLE9BQU87QUFDNUIsWUFBTSxJQUFJLFFBQVEsUUFBUSxHQUFHLEVBQUUsVUFBVSxJQUFJLEdBQUcsRUFBRSxLQUFLO0FBQ3ZELFlBQU0sSUFBSSxRQUFRLG9CQUFvQixPQUFPO0FBQzdDLGFBQU8sS0FBSyxRQUFRLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLE9BQU87QUFDekMsY0FBTSxTQUFTLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFO0FBQ25DLFlBQUk7QUFFSixZQUFJLElBQUksQ0FBQyxHQUFHO0FBQ1YsZ0JBQU07QUFBQSxRQUNSLFdBQVcsSUFBSSxDQUFDLEdBQUc7QUFDakIsZ0JBQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQUEsUUFDakMsV0FBVyxJQUFJLENBQUMsR0FBRztBQUNqQixjQUFJLE1BQU0sS0FBSztBQUNiLGtCQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQUEsVUFDekMsT0FBTztBQUNMLGtCQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFBQSxVQUNwQztBQUFBLFFBQ0YsV0FBVyxJQUFJO0FBQ2IsZ0JBQU0sbUJBQW1CLEVBQUU7QUFDM0IsY0FBSSxNQUFNLEtBQUs7QUFDYixnQkFBSSxNQUFNLEtBQUs7QUFDYixvQkFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUFBLFlBQ3ZCLE9BQU87QUFDTCxvQkFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQUEsWUFDbEI7QUFBQSxVQUNGLE9BQU87QUFDTCxrQkFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFBQSxVQUNiO0FBQUEsUUFDRixPQUFPO0FBQ0wsZ0JBQU0sT0FBTztBQUNiLGNBQUksTUFBTSxLQUFLO0FBQ2IsZ0JBQUksTUFBTSxLQUFLO0FBQ2Isb0JBQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3JCLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFBQSxZQUMzQixPQUFPO0FBQ0wsb0JBQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3JCLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUFBLFlBQ3RCO0FBQUEsVUFDRixPQUFPO0FBQ0wsa0JBQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFBQSxVQUNiO0FBQUEsUUFDRjtBQUVBLGNBQU0sZ0JBQWdCLEdBQUc7QUFDekIsZUFBTztBQUFBLE1BQ1QsQ0FBQztBQUFBLElBQ0g7QUFFQSxRQUFNLGlCQUFpQixDQUFDLE1BQU0sWUFBWTtBQUN4QyxZQUFNLGtCQUFrQixNQUFNLE9BQU87QUFDckMsYUFBTyxLQUNKLE1BQU0sS0FBSyxFQUNYLElBQUksQ0FBQyxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsRUFDcEMsS0FBSyxHQUFHO0FBQUEsSUFDYjtBQUVBLFFBQU0sZ0JBQWdCLENBQUMsTUFBTSxZQUFZO0FBQ3ZDLGFBQU8sS0FBSyxLQUFLO0FBQ2pCLFlBQU0sSUFBSSxRQUFRLFFBQVEsR0FBRyxFQUFFLFdBQVcsSUFBSSxHQUFHLEVBQUUsTUFBTTtBQUN6RCxhQUFPLEtBQUssUUFBUSxHQUFHLENBQUMsS0FBSyxNQUFNLEdBQUcsR0FBRyxHQUFHLE9BQU87QUFDakQsY0FBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUU7QUFDNUMsY0FBTSxLQUFLLElBQUksQ0FBQztBQUNoQixjQUFNLEtBQUssTUFBTSxJQUFJLENBQUM7QUFDdEIsY0FBTSxLQUFLLE1BQU0sSUFBSSxDQUFDO0FBQ3RCLGNBQU0sT0FBTztBQUViLFlBQUksU0FBUyxPQUFPLE1BQU07QUFDeEIsaUJBQU87QUFBQSxRQUNUO0FBSUEsYUFBSyxRQUFRLG9CQUFvQixPQUFPO0FBRXhDLFlBQUksSUFBSTtBQUNOLGNBQUksU0FBUyxPQUFPLFNBQVMsS0FBSztBQUVoQyxrQkFBTTtBQUFBLFVBQ1IsT0FBTztBQUVMLGtCQUFNO0FBQUEsVUFDUjtBQUFBLFFBQ0YsV0FBVyxRQUFRLE1BQU07QUFHdkIsY0FBSSxJQUFJO0FBQ04sZ0JBQUk7QUFBQSxVQUNOO0FBQ0EsY0FBSTtBQUVKLGNBQUksU0FBUyxLQUFLO0FBR2hCLG1CQUFPO0FBQ1AsZ0JBQUksSUFBSTtBQUNOLGtCQUFJLENBQUMsSUFBSTtBQUNULGtCQUFJO0FBQ0osa0JBQUk7QUFBQSxZQUNOLE9BQU87QUFDTCxrQkFBSSxDQUFDLElBQUk7QUFDVCxrQkFBSTtBQUFBLFlBQ047QUFBQSxVQUNGLFdBQVcsU0FBUyxNQUFNO0FBR3hCLG1CQUFPO0FBQ1AsZ0JBQUksSUFBSTtBQUNOLGtCQUFJLENBQUMsSUFBSTtBQUFBLFlBQ1gsT0FBTztBQUNMLGtCQUFJLENBQUMsSUFBSTtBQUFBLFlBQ1g7QUFBQSxVQUNGO0FBRUEsY0FBSSxTQUFTLEtBQUs7QUFDaEIsaUJBQUs7QUFBQSxVQUNQO0FBRUEsZ0JBQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7QUFBQSxRQUNsQyxXQUFXLElBQUk7QUFDYixnQkFBTSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFBQSxRQUNsQyxXQUFXLElBQUk7QUFDYixnQkFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFBQSxRQUNsQjtBQUVBLGNBQU0saUJBQWlCLEdBQUc7QUFFMUIsZUFBTztBQUFBLE1BQ1QsQ0FBQztBQUFBLElBQ0g7QUFJQSxRQUFNLGVBQWUsQ0FBQyxNQUFNLFlBQVk7QUFDdEMsWUFBTSxnQkFBZ0IsTUFBTSxPQUFPO0FBRW5DLGFBQU8sS0FDSixLQUFLLEVBQ0wsUUFBUSxHQUFHLEVBQUUsSUFBSSxHQUFHLEVBQUU7QUFBQSxJQUMzQjtBQUVBLFFBQU0sY0FBYyxDQUFDLE1BQU0sWUFBWTtBQUNyQyxZQUFNLGVBQWUsTUFBTSxPQUFPO0FBQ2xDLGFBQU8sS0FDSixLQUFLLEVBQ0wsUUFBUSxHQUFHLFFBQVEsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLElBQUksR0FBRyxFQUFFO0FBQUEsSUFDbkU7QUFRQSxRQUFNLGdCQUFnQixXQUFTLENBQUMsSUFDOUIsTUFBTSxJQUFJLElBQUksSUFBSSxLQUFLLElBQ3ZCLElBQUksSUFBSSxJQUFJLElBQUksUUFBUTtBQUN4QixVQUFJLElBQUksRUFBRSxHQUFHO0FBQ1gsZUFBTztBQUFBLE1BQ1QsV0FBVyxJQUFJLEVBQUUsR0FBRztBQUNsQixlQUFPLEtBQUssRUFBRSxPQUFPLFFBQVEsT0FBTyxFQUFFO0FBQUEsTUFDeEMsV0FBVyxJQUFJLEVBQUUsR0FBRztBQUNsQixlQUFPLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxRQUFRLE9BQU8sRUFBRTtBQUFBLE1BQzVDLFdBQVcsS0FBSztBQUNkLGVBQU8sS0FBSyxJQUFJO0FBQUEsTUFDbEIsT0FBTztBQUNMLGVBQU8sS0FBSyxJQUFJLEdBQUcsUUFBUSxPQUFPLEVBQUU7QUFBQSxNQUN0QztBQUVBLFVBQUksSUFBSSxFQUFFLEdBQUc7QUFDWCxhQUFLO0FBQUEsTUFDUCxXQUFXLElBQUksRUFBRSxHQUFHO0FBQ2xCLGFBQUssSUFBSSxDQUFDLEtBQUssQ0FBQztBQUFBLE1BQ2xCLFdBQVcsSUFBSSxFQUFFLEdBQUc7QUFDbEIsYUFBSyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUFBLE1BQ3hCLFdBQVcsS0FBSztBQUNkLGFBQUssS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHO0FBQUEsTUFDakMsV0FBVyxPQUFPO0FBQ2hCLGFBQUssSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQUEsTUFDOUIsT0FBTztBQUNMLGFBQUssS0FBSyxFQUFFO0FBQUEsTUFDZDtBQUVBLGFBQU8sR0FBRyxJQUFJLElBQUksRUFBRSxHQUFHLEtBQUs7QUFBQSxJQUM5QjtBQUVBLFFBQU0sVUFBVSxDQUFDLEtBQUssU0FBUyxZQUFZO0FBQ3pDLGVBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxRQUFRLEtBQUs7QUFDbkMsWUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBTyxHQUFHO0FBQ3pCLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFFQSxVQUFJLFFBQVEsV0FBVyxVQUFVLENBQUMsUUFBUSxtQkFBbUI7QUFNM0QsaUJBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxRQUFRLEtBQUs7QUFDbkMsZ0JBQU0sSUFBSSxDQUFDLEVBQUUsTUFBTTtBQUNuQixjQUFJLElBQUksQ0FBQyxFQUFFLFdBQVcsV0FBVyxLQUFLO0FBQ3BDO0FBQUEsVUFDRjtBQUVBLGNBQUksSUFBSSxDQUFDLEVBQUUsT0FBTyxXQUFXLFNBQVMsR0FBRztBQUN2QyxrQkFBTSxVQUFVLElBQUksQ0FBQyxFQUFFO0FBQ3ZCLGdCQUFJLFFBQVEsVUFBVSxRQUFRLFNBQzFCLFFBQVEsVUFBVSxRQUFRLFNBQzFCLFFBQVEsVUFBVSxRQUFRLE9BQU87QUFDbkMscUJBQU87QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFHQSxlQUFPO0FBQUEsTUFDVDtBQUVBLGFBQU87QUFBQSxJQUNUO0FBQUE7QUFBQTs7O0FDNWlCQTtBQUFBO0FBQUE7QUFFQSxRQUFNLE1BQU0sdUJBQU8sWUFBWTtBQUUvQixRQUFNLGFBQU4sTUFBTSxZQUFXO0FBQUEsTUFDZixXQUFXLE1BQU87QUFDaEIsZUFBTztBQUFBLE1BQ1Q7QUFBQSxNQUVBLFlBQWEsTUFBTSxTQUFTO0FBQzFCLGtCQUFVLGFBQWEsT0FBTztBQUU5QixZQUFJLGdCQUFnQixhQUFZO0FBQzlCLGNBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxRQUFRLE9BQU87QUFDbEMsbUJBQU87QUFBQSxVQUNULE9BQU87QUFDTCxtQkFBTyxLQUFLO0FBQUEsVUFDZDtBQUFBLFFBQ0Y7QUFFQSxlQUFPLEtBQUssS0FBSyxFQUFFLE1BQU0sS0FBSyxFQUFFLEtBQUssR0FBRztBQUN4QyxjQUFNLGNBQWMsTUFBTSxPQUFPO0FBQ2pDLGFBQUssVUFBVTtBQUNmLGFBQUssUUFBUSxDQUFDLENBQUMsUUFBUTtBQUN2QixhQUFLLE1BQU0sSUFBSTtBQUVmLFlBQUksS0FBSyxXQUFXLEtBQUs7QUFDdkIsZUFBSyxRQUFRO0FBQUEsUUFDZixPQUFPO0FBQ0wsZUFBSyxRQUFRLEtBQUssV0FBVyxLQUFLLE9BQU87QUFBQSxRQUMzQztBQUVBLGNBQU0sUUFBUSxJQUFJO0FBQUEsTUFDcEI7QUFBQSxNQUVBLE1BQU8sTUFBTTtBQUNYLGNBQU0sSUFBSSxLQUFLLFFBQVEsUUFBUSxHQUFHLEVBQUUsZUFBZSxJQUFJLEdBQUcsRUFBRSxVQUFVO0FBQ3RFLGNBQU0sSUFBSSxLQUFLLE1BQU0sQ0FBQztBQUV0QixZQUFJLENBQUMsR0FBRztBQUNOLGdCQUFNLElBQUksVUFBVSx1QkFBdUIsSUFBSSxFQUFFO0FBQUEsUUFDbkQ7QUFFQSxhQUFLLFdBQVcsRUFBRSxDQUFDLE1BQU0sU0FBWSxFQUFFLENBQUMsSUFBSTtBQUM1QyxZQUFJLEtBQUssYUFBYSxLQUFLO0FBQ3pCLGVBQUssV0FBVztBQUFBLFFBQ2xCO0FBR0EsWUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHO0FBQ1QsZUFBSyxTQUFTO0FBQUEsUUFDaEIsT0FBTztBQUNMLGVBQUssU0FBUyxJQUFJLE9BQU8sRUFBRSxDQUFDLEdBQUcsS0FBSyxRQUFRLEtBQUs7QUFBQSxRQUNuRDtBQUFBLE1BQ0Y7QUFBQSxNQUVBLFdBQVk7QUFDVixlQUFPLEtBQUs7QUFBQSxNQUNkO0FBQUEsTUFFQSxLQUFNLFNBQVM7QUFDYixjQUFNLG1CQUFtQixTQUFTLEtBQUssUUFBUSxLQUFLO0FBRXBELFlBQUksS0FBSyxXQUFXLE9BQU8sWUFBWSxLQUFLO0FBQzFDLGlCQUFPO0FBQUEsUUFDVDtBQUVBLFlBQUksT0FBTyxZQUFZLFVBQVU7QUFDL0IsY0FBSTtBQUNGLHNCQUFVLElBQUksT0FBTyxTQUFTLEtBQUssT0FBTztBQUFBLFVBQzVDLFNBQVMsSUFBSTtBQUNYLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFFQSxlQUFPLElBQUksU0FBUyxLQUFLLFVBQVUsS0FBSyxRQUFRLEtBQUssT0FBTztBQUFBLE1BQzlEO0FBQUEsTUFFQSxXQUFZLE1BQU0sU0FBUztBQUN6QixZQUFJLEVBQUUsZ0JBQWdCLGNBQWE7QUFDakMsZ0JBQU0sSUFBSSxVQUFVLDBCQUEwQjtBQUFBLFFBQ2hEO0FBRUEsWUFBSSxLQUFLLGFBQWEsSUFBSTtBQUN4QixjQUFJLEtBQUssVUFBVSxJQUFJO0FBQ3JCLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPLElBQUksTUFBTSxLQUFLLE9BQU8sT0FBTyxFQUFFLEtBQUssS0FBSyxLQUFLO0FBQUEsUUFDdkQsV0FBVyxLQUFLLGFBQWEsSUFBSTtBQUMvQixjQUFJLEtBQUssVUFBVSxJQUFJO0FBQ3JCLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPLElBQUksTUFBTSxLQUFLLE9BQU8sT0FBTyxFQUFFLEtBQUssS0FBSyxNQUFNO0FBQUEsUUFDeEQ7QUFFQSxrQkFBVSxhQUFhLE9BQU87QUFHOUIsWUFBSSxRQUFRLHNCQUNULEtBQUssVUFBVSxjQUFjLEtBQUssVUFBVSxhQUFhO0FBQzFELGlCQUFPO0FBQUEsUUFDVDtBQUNBLFlBQUksQ0FBQyxRQUFRLHNCQUNWLEtBQUssTUFBTSxXQUFXLFFBQVEsS0FBSyxLQUFLLE1BQU0sV0FBVyxRQUFRLElBQUk7QUFDdEUsaUJBQU87QUFBQSxRQUNUO0FBR0EsWUFBSSxLQUFLLFNBQVMsV0FBVyxHQUFHLEtBQUssS0FBSyxTQUFTLFdBQVcsR0FBRyxHQUFHO0FBQ2xFLGlCQUFPO0FBQUEsUUFDVDtBQUVBLFlBQUksS0FBSyxTQUFTLFdBQVcsR0FBRyxLQUFLLEtBQUssU0FBUyxXQUFXLEdBQUcsR0FBRztBQUNsRSxpQkFBTztBQUFBLFFBQ1Q7QUFFQSxZQUNHLEtBQUssT0FBTyxZQUFZLEtBQUssT0FBTyxXQUNyQyxLQUFLLFNBQVMsU0FBUyxHQUFHLEtBQUssS0FBSyxTQUFTLFNBQVMsR0FBRyxHQUFHO0FBQzVELGlCQUFPO0FBQUEsUUFDVDtBQUVBLFlBQUksSUFBSSxLQUFLLFFBQVEsS0FBSyxLQUFLLFFBQVEsT0FBTyxLQUM1QyxLQUFLLFNBQVMsV0FBVyxHQUFHLEtBQUssS0FBSyxTQUFTLFdBQVcsR0FBRyxHQUFHO0FBQ2hFLGlCQUFPO0FBQUEsUUFDVDtBQUVBLFlBQUksSUFBSSxLQUFLLFFBQVEsS0FBSyxLQUFLLFFBQVEsT0FBTyxLQUM1QyxLQUFLLFNBQVMsV0FBVyxHQUFHLEtBQUssS0FBSyxTQUFTLFdBQVcsR0FBRyxHQUFHO0FBQ2hFLGlCQUFPO0FBQUEsUUFDVDtBQUNBLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUVBLFdBQU8sVUFBVTtBQUVqQixRQUFNLGVBQWU7QUFDckIsUUFBTSxFQUFFLFFBQVEsSUFBSSxFQUFFLElBQUk7QUFDMUIsUUFBTSxNQUFNO0FBQ1osUUFBTSxRQUFRO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxRQUFRO0FBQUE7QUFBQTs7O0FDOUlkO0FBQUE7QUFBQTtBQUVBLFFBQU0sUUFBUTtBQUNkLFFBQU0sWUFBWSxDQUFDLFNBQVMsT0FBTyxZQUFZO0FBQzdDLFVBQUk7QUFDRixnQkFBUSxJQUFJLE1BQU0sT0FBTyxPQUFPO0FBQUEsTUFDbEMsU0FBUyxJQUFJO0FBQ1gsZUFBTztBQUFBLE1BQ1Q7QUFDQSxhQUFPLE1BQU0sS0FBSyxPQUFPO0FBQUEsSUFDM0I7QUFDQSxXQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUNYakI7QUFBQTtBQUFBO0FBRUEsUUFBTSxRQUFRO0FBR2QsUUFBTSxnQkFBZ0IsQ0FBQyxPQUFPLFlBQzVCLElBQUksTUFBTSxPQUFPLE9BQU8sRUFBRSxJQUN2QixJQUFJLFVBQVEsS0FBSyxJQUFJLE9BQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sR0FBRyxDQUFDO0FBRW5FLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ1RqQjtBQUFBO0FBQUE7QUFFQSxRQUFNLFNBQVM7QUFDZixRQUFNLFFBQVE7QUFFZCxRQUFNLGdCQUFnQixDQUFDLFVBQVUsT0FBTyxZQUFZO0FBQ2xELFVBQUksTUFBTTtBQUNWLFVBQUksUUFBUTtBQUNaLFVBQUksV0FBVztBQUNmLFVBQUk7QUFDRixtQkFBVyxJQUFJLE1BQU0sT0FBTyxPQUFPO0FBQUEsTUFDckMsU0FBUyxJQUFJO0FBQ1gsZUFBTztBQUFBLE1BQ1Q7QUFDQSxlQUFTLFFBQVEsQ0FBQyxNQUFNO0FBQ3RCLFlBQUksU0FBUyxLQUFLLENBQUMsR0FBRztBQUVwQixjQUFJLENBQUMsT0FBTyxNQUFNLFFBQVEsQ0FBQyxNQUFNLElBQUk7QUFFbkMsa0JBQU07QUFDTixvQkFBUSxJQUFJLE9BQU8sS0FBSyxPQUFPO0FBQUEsVUFDakM7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBQ0QsYUFBTztBQUFBLElBQ1Q7QUFDQSxXQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUMxQmpCO0FBQUE7QUFBQTtBQUVBLFFBQU0sU0FBUztBQUNmLFFBQU0sUUFBUTtBQUNkLFFBQU0sZ0JBQWdCLENBQUMsVUFBVSxPQUFPLFlBQVk7QUFDbEQsVUFBSSxNQUFNO0FBQ1YsVUFBSSxRQUFRO0FBQ1osVUFBSSxXQUFXO0FBQ2YsVUFBSTtBQUNGLG1CQUFXLElBQUksTUFBTSxPQUFPLE9BQU87QUFBQSxNQUNyQyxTQUFTLElBQUk7QUFDWCxlQUFPO0FBQUEsTUFDVDtBQUNBLGVBQVMsUUFBUSxDQUFDLE1BQU07QUFDdEIsWUFBSSxTQUFTLEtBQUssQ0FBQyxHQUFHO0FBRXBCLGNBQUksQ0FBQyxPQUFPLE1BQU0sUUFBUSxDQUFDLE1BQU0sR0FBRztBQUVsQyxrQkFBTTtBQUNOLG9CQUFRLElBQUksT0FBTyxLQUFLLE9BQU87QUFBQSxVQUNqQztBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFDRCxhQUFPO0FBQUEsSUFDVDtBQUNBLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ3pCakI7QUFBQTtBQUFBO0FBRUEsUUFBTSxTQUFTO0FBQ2YsUUFBTSxRQUFRO0FBQ2QsUUFBTSxLQUFLO0FBRVgsUUFBTSxhQUFhLENBQUMsT0FBTyxVQUFVO0FBQ25DLGNBQVEsSUFBSSxNQUFNLE9BQU8sS0FBSztBQUU5QixVQUFJLFNBQVMsSUFBSSxPQUFPLE9BQU87QUFDL0IsVUFBSSxNQUFNLEtBQUssTUFBTSxHQUFHO0FBQ3RCLGVBQU87QUFBQSxNQUNUO0FBRUEsZUFBUyxJQUFJLE9BQU8sU0FBUztBQUM3QixVQUFJLE1BQU0sS0FBSyxNQUFNLEdBQUc7QUFDdEIsZUFBTztBQUFBLE1BQ1Q7QUFFQSxlQUFTO0FBQ1QsZUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLElBQUksUUFBUSxFQUFFLEdBQUc7QUFDekMsY0FBTSxjQUFjLE1BQU0sSUFBSSxDQUFDO0FBRS9CLFlBQUksU0FBUztBQUNiLG9CQUFZLFFBQVEsQ0FBQyxlQUFlO0FBRWxDLGdCQUFNLFVBQVUsSUFBSSxPQUFPLFdBQVcsT0FBTyxPQUFPO0FBQ3BELGtCQUFRLFdBQVcsVUFBVTtBQUFBLFlBQzNCLEtBQUs7QUFDSCxrQkFBSSxRQUFRLFdBQVcsV0FBVyxHQUFHO0FBQ25DLHdCQUFRO0FBQUEsY0FDVixPQUFPO0FBQ0wsd0JBQVEsV0FBVyxLQUFLLENBQUM7QUFBQSxjQUMzQjtBQUNBLHNCQUFRLE1BQU0sUUFBUSxPQUFPO0FBQUE7QUFBQSxZQUUvQixLQUFLO0FBQUEsWUFDTCxLQUFLO0FBQ0gsa0JBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxNQUFNLEdBQUc7QUFDbEMseUJBQVM7QUFBQSxjQUNYO0FBQ0E7QUFBQSxZQUNGLEtBQUs7QUFBQSxZQUNMLEtBQUs7QUFFSDtBQUFBO0FBQUEsWUFFRjtBQUNFLG9CQUFNLElBQUksTUFBTSx5QkFBeUIsV0FBVyxRQUFRLEVBQUU7QUFBQSxVQUNsRTtBQUFBLFFBQ0YsQ0FBQztBQUNELFlBQUksV0FBVyxDQUFDLFVBQVUsR0FBRyxRQUFRLE1BQU0sSUFBSTtBQUM3QyxtQkFBUztBQUFBLFFBQ1g7QUFBQSxNQUNGO0FBRUEsVUFBSSxVQUFVLE1BQU0sS0FBSyxNQUFNLEdBQUc7QUFDaEMsZUFBTztBQUFBLE1BQ1Q7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUNBLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQzlEakIsSUFBQUMsaUJBQUE7QUFBQTtBQUFBO0FBRUEsUUFBTSxRQUFRO0FBQ2QsUUFBTSxhQUFhLENBQUMsT0FBTyxZQUFZO0FBQ3JDLFVBQUk7QUFHRixlQUFPLElBQUksTUFBTSxPQUFPLE9BQU8sRUFBRSxTQUFTO0FBQUEsTUFDNUMsU0FBUyxJQUFJO0FBQ1gsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQ0EsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDWmpCO0FBQUE7QUFBQTtBQUVBLFFBQU0sU0FBUztBQUNmLFFBQU0sYUFBYTtBQUNuQixRQUFNLEVBQUUsSUFBSSxJQUFJO0FBQ2hCLFFBQU0sUUFBUTtBQUNkLFFBQU0sWUFBWTtBQUNsQixRQUFNLEtBQUs7QUFDWCxRQUFNLEtBQUs7QUFDWCxRQUFNLE1BQU07QUFDWixRQUFNLE1BQU07QUFFWixRQUFNLFVBQVUsQ0FBQyxTQUFTLE9BQU8sTUFBTSxZQUFZO0FBQ2pELGdCQUFVLElBQUksT0FBTyxTQUFTLE9BQU87QUFDckMsY0FBUSxJQUFJLE1BQU0sT0FBTyxPQUFPO0FBRWhDLFVBQUksTUFBTSxPQUFPLE1BQU0sTUFBTTtBQUM3QixjQUFRLE1BQU07QUFBQSxRQUNaLEtBQUs7QUFDSCxpQkFBTztBQUNQLGtCQUFRO0FBQ1IsaUJBQU87QUFDUCxpQkFBTztBQUNQLGtCQUFRO0FBQ1I7QUFBQSxRQUNGLEtBQUs7QUFDSCxpQkFBTztBQUNQLGtCQUFRO0FBQ1IsaUJBQU87QUFDUCxpQkFBTztBQUNQLGtCQUFRO0FBQ1I7QUFBQSxRQUNGO0FBQ0UsZ0JBQU0sSUFBSSxVQUFVLHVDQUF1QztBQUFBLE1BQy9EO0FBR0EsVUFBSSxVQUFVLFNBQVMsT0FBTyxPQUFPLEdBQUc7QUFDdEMsZUFBTztBQUFBLE1BQ1Q7QUFLQSxlQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sSUFBSSxRQUFRLEVBQUUsR0FBRztBQUN6QyxjQUFNLGNBQWMsTUFBTSxJQUFJLENBQUM7QUFFL0IsWUFBSSxPQUFPO0FBQ1gsWUFBSSxNQUFNO0FBRVYsb0JBQVksUUFBUSxDQUFDLGVBQWU7QUFDbEMsY0FBSSxXQUFXLFdBQVcsS0FBSztBQUM3Qix5QkFBYSxJQUFJLFdBQVcsU0FBUztBQUFBLFVBQ3ZDO0FBQ0EsaUJBQU8sUUFBUTtBQUNmLGdCQUFNLE9BQU87QUFDYixjQUFJLEtBQUssV0FBVyxRQUFRLEtBQUssUUFBUSxPQUFPLEdBQUc7QUFDakQsbUJBQU87QUFBQSxVQUNULFdBQVcsS0FBSyxXQUFXLFFBQVEsSUFBSSxRQUFRLE9BQU8sR0FBRztBQUN2RCxrQkFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGLENBQUM7QUFJRCxZQUFJLEtBQUssYUFBYSxRQUFRLEtBQUssYUFBYSxPQUFPO0FBQ3JELGlCQUFPO0FBQUEsUUFDVDtBQUlBLGFBQUssQ0FBQyxJQUFJLFlBQVksSUFBSSxhQUFhLFNBQ25DLE1BQU0sU0FBUyxJQUFJLE1BQU0sR0FBRztBQUM5QixpQkFBTztBQUFBLFFBQ1QsV0FBVyxJQUFJLGFBQWEsU0FBUyxLQUFLLFNBQVMsSUFBSSxNQUFNLEdBQUc7QUFDOUQsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUNBLGFBQU87QUFBQSxJQUNUO0FBRUEsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDakZqQjtBQUFBO0FBQUE7QUFHQSxRQUFNLFVBQVU7QUFDaEIsUUFBTSxNQUFNLENBQUMsU0FBUyxPQUFPLFlBQVksUUFBUSxTQUFTLE9BQU8sS0FBSyxPQUFPO0FBQzdFLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ0xqQjtBQUFBO0FBQUE7QUFFQSxRQUFNLFVBQVU7QUFFaEIsUUFBTSxNQUFNLENBQUMsU0FBUyxPQUFPLFlBQVksUUFBUSxTQUFTLE9BQU8sS0FBSyxPQUFPO0FBQzdFLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ0xqQjtBQUFBO0FBQUE7QUFFQSxRQUFNLFFBQVE7QUFDZCxRQUFNLGFBQWEsQ0FBQyxJQUFJLElBQUksWUFBWTtBQUN0QyxXQUFLLElBQUksTUFBTSxJQUFJLE9BQU87QUFDMUIsV0FBSyxJQUFJLE1BQU0sSUFBSSxPQUFPO0FBQzFCLGFBQU8sR0FBRyxXQUFXLElBQUksT0FBTztBQUFBLElBQ2xDO0FBQ0EsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDUmpCO0FBQUE7QUFBQTtBQUtBLFFBQU0sWUFBWTtBQUNsQixRQUFNLFVBQVU7QUFDaEIsV0FBTyxVQUFVLENBQUMsVUFBVSxPQUFPLFlBQVk7QUFDN0MsWUFBTSxNQUFNLENBQUM7QUFDYixVQUFJLFFBQVE7QUFDWixVQUFJLE9BQU87QUFDWCxZQUFNLElBQUksU0FBUyxLQUFLLENBQUMsR0FBRyxNQUFNLFFBQVEsR0FBRyxHQUFHLE9BQU8sQ0FBQztBQUN4RCxpQkFBVyxXQUFXLEdBQUc7QUFDdkIsY0FBTSxXQUFXLFVBQVUsU0FBUyxPQUFPLE9BQU87QUFDbEQsWUFBSSxVQUFVO0FBQ1osaUJBQU87QUFDUCxjQUFJLENBQUMsT0FBTztBQUNWLG9CQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0YsT0FBTztBQUNMLGNBQUksTUFBTTtBQUNSLGdCQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQztBQUFBLFVBQ3hCO0FBQ0EsaUJBQU87QUFDUCxrQkFBUTtBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBQ0EsVUFBSSxPQUFPO0FBQ1QsWUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUM7QUFBQSxNQUN4QjtBQUVBLFlBQU0sU0FBUyxDQUFDO0FBQ2hCLGlCQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssS0FBSztBQUM1QixZQUFJLFFBQVEsS0FBSztBQUNmLGlCQUFPLEtBQUssR0FBRztBQUFBLFFBQ2pCLFdBQVcsQ0FBQyxPQUFPLFFBQVEsRUFBRSxDQUFDLEdBQUc7QUFDL0IsaUJBQU8sS0FBSyxHQUFHO0FBQUEsUUFDakIsV0FBVyxDQUFDLEtBQUs7QUFDZixpQkFBTyxLQUFLLEtBQUssR0FBRyxFQUFFO0FBQUEsUUFDeEIsV0FBVyxRQUFRLEVBQUUsQ0FBQyxHQUFHO0FBQ3ZCLGlCQUFPLEtBQUssS0FBSyxHQUFHLEVBQUU7QUFBQSxRQUN4QixPQUFPO0FBQ0wsaUJBQU8sS0FBSyxHQUFHLEdBQUcsTUFBTSxHQUFHLEVBQUU7QUFBQSxRQUMvQjtBQUFBLE1BQ0Y7QUFDQSxZQUFNLGFBQWEsT0FBTyxLQUFLLE1BQU07QUFDckMsWUFBTSxXQUFXLE9BQU8sTUFBTSxRQUFRLFdBQVcsTUFBTSxNQUFNLE9BQU8sS0FBSztBQUN6RSxhQUFPLFdBQVcsU0FBUyxTQUFTLFNBQVMsYUFBYTtBQUFBLElBQzVEO0FBQUE7QUFBQTs7O0FDaERBO0FBQUE7QUFBQTtBQUVBLFFBQU0sUUFBUTtBQUNkLFFBQU0sYUFBYTtBQUNuQixRQUFNLEVBQUUsSUFBSSxJQUFJO0FBQ2hCLFFBQU0sWUFBWTtBQUNsQixRQUFNLFVBQVU7QUFzQ2hCLFFBQU0sU0FBUyxDQUFDLEtBQUssS0FBSyxVQUFVLENBQUMsTUFBTTtBQUN6QyxVQUFJLFFBQVEsS0FBSztBQUNmLGVBQU87QUFBQSxNQUNUO0FBRUEsWUFBTSxJQUFJLE1BQU0sS0FBSyxPQUFPO0FBQzVCLFlBQU0sSUFBSSxNQUFNLEtBQUssT0FBTztBQUM1QixVQUFJLGFBQWE7QUFFakIsWUFBTyxZQUFXLGFBQWEsSUFBSSxLQUFLO0FBQ3RDLG1CQUFXLGFBQWEsSUFBSSxLQUFLO0FBQy9CLGdCQUFNLFFBQVEsYUFBYSxXQUFXLFdBQVcsT0FBTztBQUN4RCx1QkFBYSxjQUFjLFVBQVU7QUFDckMsY0FBSSxPQUFPO0FBQ1QscUJBQVM7QUFBQSxVQUNYO0FBQUEsUUFDRjtBQUtBLFlBQUksWUFBWTtBQUNkLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFDQSxhQUFPO0FBQUEsSUFDVDtBQUVBLFFBQU0sK0JBQStCLENBQUMsSUFBSSxXQUFXLFdBQVcsQ0FBQztBQUNqRSxRQUFNLGlCQUFpQixDQUFDLElBQUksV0FBVyxTQUFTLENBQUM7QUFFakQsUUFBTSxlQUFlLENBQUMsS0FBSyxLQUFLLFlBQVk7QUFDMUMsVUFBSSxRQUFRLEtBQUs7QUFDZixlQUFPO0FBQUEsTUFDVDtBQUVBLFVBQUksSUFBSSxXQUFXLEtBQUssSUFBSSxDQUFDLEVBQUUsV0FBVyxLQUFLO0FBQzdDLFlBQUksSUFBSSxXQUFXLEtBQUssSUFBSSxDQUFDLEVBQUUsV0FBVyxLQUFLO0FBQzdDLGlCQUFPO0FBQUEsUUFDVCxXQUFXLFFBQVEsbUJBQW1CO0FBQ3BDLGdCQUFNO0FBQUEsUUFDUixPQUFPO0FBQ0wsZ0JBQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUVBLFVBQUksSUFBSSxXQUFXLEtBQUssSUFBSSxDQUFDLEVBQUUsV0FBVyxLQUFLO0FBQzdDLFlBQUksUUFBUSxtQkFBbUI7QUFDN0IsaUJBQU87QUFBQSxRQUNULE9BQU87QUFDTCxnQkFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBRUEsWUFBTSxRQUFRLG9CQUFJLElBQUk7QUFDdEIsVUFBSSxJQUFJO0FBQ1IsaUJBQVcsS0FBSyxLQUFLO0FBQ25CLFlBQUksRUFBRSxhQUFhLE9BQU8sRUFBRSxhQUFhLE1BQU07QUFDN0MsZUFBSyxTQUFTLElBQUksR0FBRyxPQUFPO0FBQUEsUUFDOUIsV0FBVyxFQUFFLGFBQWEsT0FBTyxFQUFFLGFBQWEsTUFBTTtBQUNwRCxlQUFLLFFBQVEsSUFBSSxHQUFHLE9BQU87QUFBQSxRQUM3QixPQUFPO0FBQ0wsZ0JBQU0sSUFBSSxFQUFFLE1BQU07QUFBQSxRQUNwQjtBQUFBLE1BQ0Y7QUFFQSxVQUFJLE1BQU0sT0FBTyxHQUFHO0FBQ2xCLGVBQU87QUFBQSxNQUNUO0FBRUEsVUFBSTtBQUNKLFVBQUksTUFBTSxJQUFJO0FBQ1osbUJBQVcsUUFBUSxHQUFHLFFBQVEsR0FBRyxRQUFRLE9BQU87QUFDaEQsWUFBSSxXQUFXLEdBQUc7QUFDaEIsaUJBQU87QUFBQSxRQUNULFdBQVcsYUFBYSxNQUFNLEdBQUcsYUFBYSxRQUFRLEdBQUcsYUFBYSxPQUFPO0FBQzNFLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFHQSxpQkFBVyxNQUFNLE9BQU87QUFDdEIsWUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRSxHQUFHLE9BQU8sR0FBRztBQUM3QyxpQkFBTztBQUFBLFFBQ1Q7QUFFQSxZQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFLEdBQUcsT0FBTyxHQUFHO0FBQzdDLGlCQUFPO0FBQUEsUUFDVDtBQUVBLG1CQUFXLEtBQUssS0FBSztBQUNuQixjQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxHQUFHLE9BQU8sR0FBRztBQUN0QyxtQkFBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBRUEsZUFBTztBQUFBLE1BQ1Q7QUFFQSxVQUFJLFFBQVE7QUFDWixVQUFJLFVBQVU7QUFHZCxVQUFJLGVBQWUsTUFDakIsQ0FBQyxRQUFRLHFCQUNULEdBQUcsT0FBTyxXQUFXLFNBQVMsR0FBRyxTQUFTO0FBQzVDLFVBQUksZUFBZSxNQUNqQixDQUFDLFFBQVEscUJBQ1QsR0FBRyxPQUFPLFdBQVcsU0FBUyxHQUFHLFNBQVM7QUFFNUMsVUFBSSxnQkFBZ0IsYUFBYSxXQUFXLFdBQVcsS0FDbkQsR0FBRyxhQUFhLE9BQU8sYUFBYSxXQUFXLENBQUMsTUFBTSxHQUFHO0FBQzNELHVCQUFlO0FBQUEsTUFDakI7QUFFQSxpQkFBVyxLQUFLLEtBQUs7QUFDbkIsbUJBQVcsWUFBWSxFQUFFLGFBQWEsT0FBTyxFQUFFLGFBQWE7QUFDNUQsbUJBQVcsWUFBWSxFQUFFLGFBQWEsT0FBTyxFQUFFLGFBQWE7QUFDNUQsWUFBSSxJQUFJO0FBQ04sY0FBSSxjQUFjO0FBQ2hCLGdCQUFJLEVBQUUsT0FBTyxjQUFjLEVBQUUsT0FBTyxXQUFXLFVBQzNDLEVBQUUsT0FBTyxVQUFVLGFBQWEsU0FDaEMsRUFBRSxPQUFPLFVBQVUsYUFBYSxTQUNoQyxFQUFFLE9BQU8sVUFBVSxhQUFhLE9BQU87QUFDekMsNkJBQWU7QUFBQSxZQUNqQjtBQUFBLFVBQ0Y7QUFDQSxjQUFJLEVBQUUsYUFBYSxPQUFPLEVBQUUsYUFBYSxNQUFNO0FBQzdDLHFCQUFTLFNBQVMsSUFBSSxHQUFHLE9BQU87QUFDaEMsZ0JBQUksV0FBVyxLQUFLLFdBQVcsSUFBSTtBQUNqQyxxQkFBTztBQUFBLFlBQ1Q7QUFBQSxVQUNGLFdBQVcsR0FBRyxhQUFhLFFBQVEsQ0FBQyxVQUFVLEdBQUcsUUFBUSxPQUFPLENBQUMsR0FBRyxPQUFPLEdBQUc7QUFDNUUsbUJBQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUNBLFlBQUksSUFBSTtBQUNOLGNBQUksY0FBYztBQUNoQixnQkFBSSxFQUFFLE9BQU8sY0FBYyxFQUFFLE9BQU8sV0FBVyxVQUMzQyxFQUFFLE9BQU8sVUFBVSxhQUFhLFNBQ2hDLEVBQUUsT0FBTyxVQUFVLGFBQWEsU0FDaEMsRUFBRSxPQUFPLFVBQVUsYUFBYSxPQUFPO0FBQ3pDLDZCQUFlO0FBQUEsWUFDakI7QUFBQSxVQUNGO0FBQ0EsY0FBSSxFQUFFLGFBQWEsT0FBTyxFQUFFLGFBQWEsTUFBTTtBQUM3QyxvQkFBUSxRQUFRLElBQUksR0FBRyxPQUFPO0FBQzlCLGdCQUFJLFVBQVUsS0FBSyxVQUFVLElBQUk7QUFDL0IscUJBQU87QUFBQSxZQUNUO0FBQUEsVUFDRixXQUFXLEdBQUcsYUFBYSxRQUFRLENBQUMsVUFBVSxHQUFHLFFBQVEsT0FBTyxDQUFDLEdBQUcsT0FBTyxHQUFHO0FBQzVFLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFDQSxZQUFJLENBQUMsRUFBRSxhQUFhLE1BQU0sT0FBTyxhQUFhLEdBQUc7QUFDL0MsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUtBLFVBQUksTUFBTSxZQUFZLENBQUMsTUFBTSxhQUFhLEdBQUc7QUFDM0MsZUFBTztBQUFBLE1BQ1Q7QUFFQSxVQUFJLE1BQU0sWUFBWSxDQUFDLE1BQU0sYUFBYSxHQUFHO0FBQzNDLGVBQU87QUFBQSxNQUNUO0FBS0EsVUFBSSxnQkFBZ0IsY0FBYztBQUNoQyxlQUFPO0FBQUEsTUFDVDtBQUVBLGFBQU87QUFBQSxJQUNUO0FBR0EsUUFBTSxXQUFXLENBQUMsR0FBRyxHQUFHLFlBQVk7QUFDbEMsVUFBSSxDQUFDLEdBQUc7QUFDTixlQUFPO0FBQUEsTUFDVDtBQUNBLFlBQU0sT0FBTyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsT0FBTztBQUNoRCxhQUFPLE9BQU8sSUFBSSxJQUNkLE9BQU8sSUFBSSxJQUNYLEVBQUUsYUFBYSxPQUFPLEVBQUUsYUFBYSxPQUFPLElBQzVDO0FBQUEsSUFDTjtBQUdBLFFBQU0sVUFBVSxDQUFDLEdBQUcsR0FBRyxZQUFZO0FBQ2pDLFVBQUksQ0FBQyxHQUFHO0FBQ04sZUFBTztBQUFBLE1BQ1Q7QUFDQSxZQUFNLE9BQU8sUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLE9BQU87QUFDaEQsYUFBTyxPQUFPLElBQUksSUFDZCxPQUFPLElBQUksSUFDWCxFQUFFLGFBQWEsT0FBTyxFQUFFLGFBQWEsT0FBTyxJQUM1QztBQUFBLElBQ047QUFFQSxXQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUN4UGpCLElBQUFDLGtCQUFBO0FBQUE7QUFBQTtBQUdBLFFBQU0sYUFBYTtBQUNuQixRQUFNLFlBQVk7QUFDbEIsUUFBTSxTQUFTO0FBQ2YsUUFBTSxjQUFjO0FBQ3BCLFFBQU1DLFNBQVE7QUFDZCxRQUFNLFFBQVE7QUFDZCxRQUFNLFFBQVE7QUFDZCxRQUFNLE1BQU07QUFDWixRQUFNLE9BQU87QUFDYixRQUFNLFFBQVE7QUFDZCxRQUFNLFFBQVE7QUFDZCxRQUFNLFFBQVE7QUFDZCxRQUFNLGFBQWE7QUFDbkIsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sV0FBVztBQUNqQixRQUFNLGVBQWU7QUFDckIsUUFBTSxlQUFlO0FBQ3JCLFFBQU0sT0FBTztBQUNiLFFBQU0sUUFBUTtBQUNkLFFBQU0sS0FBSztBQUNYLFFBQU0sS0FBSztBQUNYLFFBQU0sS0FBSztBQUNYLFFBQU0sTUFBTTtBQUNaLFFBQU0sTUFBTTtBQUNaLFFBQU0sTUFBTTtBQUNaLFFBQU0sTUFBTTtBQUNaLFFBQU0sU0FBUztBQUNmLFFBQU0sYUFBYTtBQUNuQixRQUFNLFFBQVE7QUFDZCxRQUFNLFlBQVk7QUFDbEIsUUFBTSxnQkFBZ0I7QUFDdEIsUUFBTSxnQkFBZ0I7QUFDdEIsUUFBTSxnQkFBZ0I7QUFDdEIsUUFBTSxhQUFhO0FBQ25CLFFBQU0sYUFBYTtBQUNuQixRQUFNLFVBQVU7QUFDaEIsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxhQUFhO0FBQ25CLFFBQU0sZ0JBQWdCO0FBQ3RCLFFBQU0sU0FBUztBQUNmLFdBQU8sVUFBVTtBQUFBLE1BQ2YsT0FBQUE7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxJQUFJLFdBQVc7QUFBQSxNQUNmLEtBQUssV0FBVztBQUFBLE1BQ2hCLFFBQVEsV0FBVztBQUFBLE1BQ25CLHFCQUFxQixVQUFVO0FBQUEsTUFDL0IsZUFBZSxVQUFVO0FBQUEsTUFDekIsb0JBQW9CLFlBQVk7QUFBQSxNQUNoQyxxQkFBcUIsWUFBWTtBQUFBLElBQ25DO0FBQUE7QUFBQTs7O0FDMUZBLFNBQVMsVUFBVSxpQkFBaUI7QUFRcEMsSUFBTSxrQkFBa0I7QUFNeEIsU0FBUyxlQUFlLFNBQXVDO0FBQzNELFFBQU0sYUFBYTtBQUNuQixRQUFNLFFBQVEsUUFBUSxRQUFRLFVBQVU7QUFFeEMsTUFBSSxVQUFVLElBQUk7QUFDZCxVQUFNLElBQUksTUFBTSw2Q0FBNkM7QUFBQSxFQUNqRTtBQUNBLFFBQU0sY0FBYyxRQUFRLFdBQVc7QUFDdkMsUUFBTSxlQUFlLFFBQVEsUUFBUSxTQUFTLFdBQVc7QUFDekQsUUFBTSxpQkFBaUIsUUFBUSxRQUFRLFVBQVUsV0FBVztBQUU1RCxNQUFJO0FBRUosTUFBSSxpQkFBaUIsT0FBTyxtQkFBbUIsTUFBTSxlQUFlLGlCQUFpQjtBQUNqRixVQUFNO0FBQUEsRUFDVixXQUFXLG1CQUFtQixJQUFJO0FBQzlCLFVBQU07QUFBQSxFQUNWLE9BQU87QUFDSCxVQUFNLFFBQVE7QUFBQSxFQUNsQjtBQUNBLFNBQU87QUFBQSxJQUNILFFBQVEsUUFBUSxNQUFNLEdBQUcsS0FBSztBQUFBLElBQzlCLFNBQVMsUUFBUSxNQUFNLE9BQU8sR0FBRztBQUFBLElBQ2pDLE9BQU8sUUFBUSxNQUFNLEdBQUc7QUFBQSxFQUM1QjtBQUNKO0FBRUEsU0FBUyxlQUFlLFNBQXlCO0FBQzdDLFFBQU0sYUFBYSxRQUFRLFFBQVEsSUFBSTtBQUV2QyxTQUFPLGVBQWUsS0FBSyxLQUFLLFFBQVEsTUFBTSxhQUFhLENBQUM7QUFDaEU7QUFrQkEsZUFBc0IsdUJBQXVCLGVBQXdDO0FBQ2pGLFFBQU0sVUFBVSxNQUFNLFNBQVMsZUFBZSxFQUFFLFVBQVUsUUFBUSxDQUFDO0FBQ25FLFFBQU0sRUFBRSxRQUFRLElBQUksZUFBZSxPQUFPO0FBQzFDLFFBQU0sT0FBTyxlQUFlLE9BQU87QUFDbkMsUUFBTSxlQUFlLEtBQUssT0FBTyxlQUFlO0FBRWhELE1BQUksaUJBQWlCLElBQUk7QUFDckIsV0FBTyxLQUFLLE1BQU0sR0FBRyxZQUFZLEVBQUUsS0FBSztBQUFBLEVBQzVDO0FBRUEsU0FBTyxLQUFLLEtBQUs7QUFDckI7QUFFQSxlQUFzQixtQkFBbUIsZUFBd0M7QUFDN0UsU0FBTyx1QkFBdUIsYUFBYTtBQUMvQzs7O0FDOUVPLFNBQVMsZUFBZTtBQUM3QixNQUFJLE9BQU8sY0FBYyxZQUFZLGVBQWUsV0FBVztBQUM3RCxXQUFPLFVBQVU7QUFBQSxFQUNuQjtBQUVBLE1BQUksT0FBTyxZQUFZLFlBQVksUUFBUSxZQUFZLFFBQVc7QUFDaEUsV0FBTyxXQUFXLFFBQVEsUUFBUSxPQUFPLENBQUMsQ0FBQyxLQUFLLFFBQVEsUUFBUSxLQUM5RCxRQUFRLElBQ1Y7QUFBQSxFQUNGO0FBRUEsU0FBTztBQUNUOzs7QUNWTyxTQUFTLFNBQVMsT0FBTyxNQUFNLFFBQVEsU0FBUztBQUNyRCxNQUFJLE9BQU8sV0FBVyxZQUFZO0FBQ2hDLFVBQU0sSUFBSSxNQUFNLDJDQUEyQztBQUFBLEVBQzdEO0FBRUEsTUFBSSxDQUFDLFNBQVM7QUFDWixjQUFVLENBQUM7QUFBQSxFQUNiO0FBRUEsTUFBSSxNQUFNLFFBQVEsSUFBSSxHQUFHO0FBQ3ZCLFdBQU8sS0FBSyxRQUFRLEVBQUUsT0FBTyxDQUFDLFVBQVVDLFVBQVM7QUFDL0MsYUFBTyxTQUFTLEtBQUssTUFBTSxPQUFPQSxPQUFNLFVBQVUsT0FBTztBQUFBLElBQzNELEdBQUcsTUFBTSxFQUFFO0FBQUEsRUFDYjtBQUVBLFNBQU8sUUFBUSxRQUFRLEVBQUUsS0FBSyxNQUFNO0FBQ2xDLFFBQUksQ0FBQyxNQUFNLFNBQVMsSUFBSSxHQUFHO0FBQ3pCLGFBQU8sT0FBTyxPQUFPO0FBQUEsSUFDdkI7QUFFQSxXQUFPLE1BQU0sU0FBUyxJQUFJLEVBQUUsT0FBTyxDQUFDQyxTQUFRLGVBQWU7QUFDekQsYUFBTyxXQUFXLEtBQUssS0FBSyxNQUFNQSxTQUFRLE9BQU87QUFBQSxJQUNuRCxHQUFHLE1BQU0sRUFBRTtBQUFBLEVBQ2IsQ0FBQztBQUNIOzs7QUN4Qk8sU0FBUyxRQUFRLE9BQU8sTUFBTSxNQUFNQyxPQUFNO0FBQy9DLFFBQU0sT0FBT0E7QUFDYixNQUFJLENBQUMsTUFBTSxTQUFTLElBQUksR0FBRztBQUN6QixVQUFNLFNBQVMsSUFBSSxJQUFJLENBQUM7QUFBQSxFQUMxQjtBQUVBLE1BQUksU0FBUyxVQUFVO0FBQ3JCLElBQUFBLFFBQU8sQ0FBQyxRQUFRLFlBQVk7QUFDMUIsYUFBTyxRQUFRLFFBQVEsRUFDcEIsS0FBSyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUMsRUFDN0IsS0FBSyxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFFQSxNQUFJLFNBQVMsU0FBUztBQUNwQixJQUFBQSxRQUFPLENBQUMsUUFBUSxZQUFZO0FBQzFCLFVBQUk7QUFDSixhQUFPLFFBQVEsUUFBUSxFQUNwQixLQUFLLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQyxFQUMvQixLQUFLLENBQUMsWUFBWTtBQUNqQixpQkFBUztBQUNULGVBQU8sS0FBSyxRQUFRLE9BQU87QUFBQSxNQUM3QixDQUFDLEVBQ0EsS0FBSyxNQUFNO0FBQ1YsZUFBTztBQUFBLE1BQ1QsQ0FBQztBQUFBLElBQ0w7QUFBQSxFQUNGO0FBRUEsTUFBSSxTQUFTLFNBQVM7QUFDcEIsSUFBQUEsUUFBTyxDQUFDLFFBQVEsWUFBWTtBQUMxQixhQUFPLFFBQVEsUUFBUSxFQUNwQixLQUFLLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQyxFQUMvQixNQUFNLENBQUMsVUFBVTtBQUNoQixlQUFPLEtBQUssT0FBTyxPQUFPO0FBQUEsTUFDNUIsQ0FBQztBQUFBLElBQ0w7QUFBQSxFQUNGO0FBRUEsUUFBTSxTQUFTLElBQUksRUFBRSxLQUFLO0FBQUEsSUFDeEIsTUFBTUE7QUFBQSxJQUNOO0FBQUEsRUFDRixDQUFDO0FBQ0g7OztBQzNDTyxTQUFTLFdBQVcsT0FBTyxNQUFNLFFBQVE7QUFDOUMsTUFBSSxDQUFDLE1BQU0sU0FBUyxJQUFJLEdBQUc7QUFDekI7QUFBQSxFQUNGO0FBRUEsUUFBTSxRQUFRLE1BQU0sU0FBUyxJQUFJLEVBQzlCLElBQUksQ0FBQyxlQUFlO0FBQ25CLFdBQU8sV0FBVztBQUFBLEVBQ3BCLENBQUMsRUFDQSxRQUFRLE1BQU07QUFFakIsTUFBSSxVQUFVLElBQUk7QUFDaEI7QUFBQSxFQUNGO0FBRUEsUUFBTSxTQUFTLElBQUksRUFBRSxPQUFPLE9BQU8sQ0FBQztBQUN0Qzs7O0FDWEEsSUFBTSxPQUFPLFNBQVM7QUFDdEIsSUFBTSxXQUFXLEtBQUssS0FBSyxJQUFJO0FBRS9CLFNBQVMsUUFBUUMsT0FBTSxPQUFPLE1BQU07QUFDbEMsUUFBTSxnQkFBZ0IsU0FBUyxZQUFZLElBQUksRUFBRTtBQUFBLElBQy9DO0FBQUEsSUFDQSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLO0FBQUEsRUFDL0I7QUFDQSxFQUFBQSxNQUFLLE1BQU0sRUFBRSxRQUFRLGNBQWM7QUFDbkMsRUFBQUEsTUFBSyxTQUFTO0FBQ2QsR0FBQyxVQUFVLFNBQVMsU0FBUyxNQUFNLEVBQUUsUUFBUSxDQUFDLFNBQVM7QUFDckQsVUFBTSxPQUFPLE9BQU8sQ0FBQyxPQUFPLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJO0FBQ3RELElBQUFBLE1BQUssSUFBSSxJQUFJQSxNQUFLLElBQUksSUFBSSxJQUFJLFNBQVMsU0FBUyxJQUFJLEVBQUUsTUFBTSxNQUFNLElBQUk7QUFBQSxFQUN4RSxDQUFDO0FBQ0g7QUFFQSxTQUFTLFdBQVc7QUFDbEIsUUFBTSxtQkFBbUIsdUJBQU8sVUFBVTtBQUMxQyxRQUFNLG9CQUFvQjtBQUFBLElBQ3hCLFVBQVUsQ0FBQztBQUFBLEVBQ2I7QUFDQSxRQUFNLGVBQWUsU0FBUyxLQUFLLE1BQU0sbUJBQW1CLGdCQUFnQjtBQUM1RSxVQUFRLGNBQWMsbUJBQW1CLGdCQUFnQjtBQUN6RCxTQUFPO0FBQ1Q7QUFFQSxTQUFTLGFBQWE7QUFDcEIsUUFBTSxRQUFRO0FBQUEsSUFDWixVQUFVLENBQUM7QUFBQSxFQUNiO0FBRUEsUUFBTUEsUUFBTyxTQUFTLEtBQUssTUFBTSxLQUFLO0FBQ3RDLFVBQVFBLE9BQU0sS0FBSztBQUVuQixTQUFPQTtBQUNUO0FBRUEsSUFBTyw0QkFBUSxFQUFFLFVBQVUsV0FBVzs7O0FDeEN0QyxJQUFJLFVBQVU7QUFHZCxJQUFJLFlBQVksdUJBQXVCLE9BQU8sSUFBSSxhQUFhLENBQUM7QUFDaEUsSUFBSSxXQUFXO0FBQUEsRUFDYixRQUFRO0FBQUEsRUFDUixTQUFTO0FBQUEsRUFDVCxTQUFTO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNULFFBQVE7QUFBQSxFQUNWO0FBQ0Y7QUFHQSxTQUFTLGNBQWMsUUFBUTtBQUM3QixNQUFJLENBQUMsUUFBUTtBQUNYLFdBQU8sQ0FBQztBQUFBLEVBQ1Y7QUFDQSxTQUFPLE9BQU8sS0FBSyxNQUFNLEVBQUUsT0FBTyxDQUFDLFFBQVEsUUFBUTtBQUNqRCxXQUFPLElBQUksWUFBWSxDQUFDLElBQUksT0FBTyxHQUFHO0FBQ3RDLFdBQU87QUFBQSxFQUNULEdBQUcsQ0FBQyxDQUFDO0FBQ1A7QUFHQSxTQUFTLGNBQWMsT0FBTztBQUM1QixNQUFJLE9BQU8sVUFBVSxZQUFZLFVBQVUsS0FBTSxRQUFPO0FBQ3hELE1BQUksT0FBTyxVQUFVLFNBQVMsS0FBSyxLQUFLLE1BQU0sa0JBQW1CLFFBQU87QUFDeEUsUUFBTSxRQUFRLE9BQU8sZUFBZSxLQUFLO0FBQ3pDLE1BQUksVUFBVSxLQUFNLFFBQU87QUFDM0IsUUFBTSxPQUFPLE9BQU8sVUFBVSxlQUFlLEtBQUssT0FBTyxhQUFhLEtBQUssTUFBTTtBQUNqRixTQUFPLE9BQU8sU0FBUyxjQUFjLGdCQUFnQixRQUFRLFNBQVMsVUFBVSxLQUFLLElBQUksTUFBTSxTQUFTLFVBQVUsS0FBSyxLQUFLO0FBQzlIO0FBR0EsU0FBUyxVQUFVLFVBQVUsU0FBUztBQUNwQyxRQUFNLFNBQVMsT0FBTyxPQUFPLENBQUMsR0FBRyxRQUFRO0FBQ3pDLFNBQU8sS0FBSyxPQUFPLEVBQUUsUUFBUSxDQUFDLFFBQVE7QUFDcEMsUUFBSSxjQUFjLFFBQVEsR0FBRyxDQUFDLEdBQUc7QUFDL0IsVUFBSSxFQUFFLE9BQU8sVUFBVyxRQUFPLE9BQU8sUUFBUSxFQUFFLENBQUMsR0FBRyxHQUFHLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFBQSxVQUNoRSxRQUFPLEdBQUcsSUFBSSxVQUFVLFNBQVMsR0FBRyxHQUFHLFFBQVEsR0FBRyxDQUFDO0FBQUEsSUFDMUQsT0FBTztBQUNMLGFBQU8sT0FBTyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEdBQUcsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUFBLElBQy9DO0FBQUEsRUFDRixDQUFDO0FBQ0QsU0FBTztBQUNUO0FBR0EsU0FBUywwQkFBMEIsS0FBSztBQUN0QyxhQUFXLE9BQU8sS0FBSztBQUNyQixRQUFJLElBQUksR0FBRyxNQUFNLFFBQVE7QUFDdkIsYUFBTyxJQUFJLEdBQUc7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7QUFHQSxTQUFTLE1BQU0sVUFBVSxPQUFPLFNBQVM7QUFDdkMsTUFBSSxPQUFPLFVBQVUsVUFBVTtBQUM3QixRQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxNQUFNLEdBQUc7QUFDbkMsY0FBVSxPQUFPLE9BQU8sTUFBTSxFQUFFLFFBQVEsSUFBSSxJQUFJLEVBQUUsS0FBSyxPQUFPLEdBQUcsT0FBTztBQUFBLEVBQzFFLE9BQU87QUFDTCxjQUFVLE9BQU8sT0FBTyxDQUFDLEdBQUcsS0FBSztBQUFBLEVBQ25DO0FBQ0EsVUFBUSxVQUFVLGNBQWMsUUFBUSxPQUFPO0FBQy9DLDRCQUEwQixPQUFPO0FBQ2pDLDRCQUEwQixRQUFRLE9BQU87QUFDekMsUUFBTSxnQkFBZ0IsVUFBVSxZQUFZLENBQUMsR0FBRyxPQUFPO0FBQ3ZELE1BQUksUUFBUSxRQUFRLFlBQVk7QUFDOUIsUUFBSSxZQUFZLFNBQVMsVUFBVSxVQUFVLFFBQVE7QUFDbkQsb0JBQWMsVUFBVSxXQUFXLFNBQVMsVUFBVSxTQUFTO0FBQUEsUUFDN0QsQ0FBQyxZQUFZLENBQUMsY0FBYyxVQUFVLFNBQVMsU0FBUyxPQUFPO0FBQUEsTUFDakUsRUFBRSxPQUFPLGNBQWMsVUFBVSxRQUFRO0FBQUEsSUFDM0M7QUFDQSxrQkFBYyxVQUFVLFlBQVksY0FBYyxVQUFVLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLFFBQVEsUUFBUSxZQUFZLEVBQUUsQ0FBQztBQUFBLEVBQzlIO0FBQ0EsU0FBTztBQUNUO0FBR0EsU0FBUyxtQkFBbUIsS0FBSyxZQUFZO0FBQzNDLFFBQU0sWUFBWSxLQUFLLEtBQUssR0FBRyxJQUFJLE1BQU07QUFDekMsUUFBTSxRQUFRLE9BQU8sS0FBSyxVQUFVO0FBQ3BDLE1BQUksTUFBTSxXQUFXLEdBQUc7QUFDdEIsV0FBTztBQUFBLEVBQ1Q7QUFDQSxTQUFPLE1BQU0sWUFBWSxNQUFNLElBQUksQ0FBQyxTQUFTO0FBQzNDLFFBQUksU0FBUyxLQUFLO0FBQ2hCLGFBQU8sT0FBTyxXQUFXLEVBQUUsTUFBTSxHQUFHLEVBQUUsSUFBSSxrQkFBa0IsRUFBRSxLQUFLLEdBQUc7QUFBQSxJQUN4RTtBQUNBLFdBQU8sR0FBRyxJQUFJLElBQUksbUJBQW1CLFdBQVcsSUFBSSxDQUFDLENBQUM7QUFBQSxFQUN4RCxDQUFDLEVBQUUsS0FBSyxHQUFHO0FBQ2I7QUFHQSxJQUFJLG1CQUFtQjtBQUN2QixTQUFTLGVBQWUsY0FBYztBQUNwQyxTQUFPLGFBQWEsUUFBUSw2QkFBNkIsRUFBRSxFQUFFLE1BQU0sR0FBRztBQUN4RTtBQUNBLFNBQVMsd0JBQXdCLEtBQUs7QUFDcEMsUUFBTSxVQUFVLElBQUksTUFBTSxnQkFBZ0I7QUFDMUMsTUFBSSxDQUFDLFNBQVM7QUFDWixXQUFPLENBQUM7QUFBQSxFQUNWO0FBQ0EsU0FBTyxRQUFRLElBQUksY0FBYyxFQUFFLE9BQU8sQ0FBQyxHQUFHLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckU7QUFHQSxTQUFTLEtBQUssUUFBUSxZQUFZO0FBQ2hDLFFBQU0sU0FBUyxFQUFFLFdBQVcsS0FBSztBQUNqQyxhQUFXLE9BQU8sT0FBTyxLQUFLLE1BQU0sR0FBRztBQUNyQyxRQUFJLFdBQVcsUUFBUSxHQUFHLE1BQU0sSUFBSTtBQUNsQyxhQUFPLEdBQUcsSUFBSSxPQUFPLEdBQUc7QUFBQSxJQUMxQjtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7QUFHQSxTQUFTLGVBQWUsS0FBSztBQUMzQixTQUFPLElBQUksTUFBTSxvQkFBb0IsRUFBRSxJQUFJLFNBQVMsTUFBTTtBQUN4RCxRQUFJLENBQUMsZUFBZSxLQUFLLElBQUksR0FBRztBQUM5QixhQUFPLFVBQVUsSUFBSSxFQUFFLFFBQVEsUUFBUSxHQUFHLEVBQUUsUUFBUSxRQUFRLEdBQUc7QUFBQSxJQUNqRTtBQUNBLFdBQU87QUFBQSxFQUNULENBQUMsRUFBRSxLQUFLLEVBQUU7QUFDWjtBQUNBLFNBQVMsaUJBQWlCLEtBQUs7QUFDN0IsU0FBTyxtQkFBbUIsR0FBRyxFQUFFLFFBQVEsWUFBWSxTQUFTLEdBQUc7QUFDN0QsV0FBTyxNQUFNLEVBQUUsV0FBVyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsWUFBWTtBQUFBLEVBQ3hELENBQUM7QUFDSDtBQUNBLFNBQVMsWUFBWSxVQUFVLE9BQU8sS0FBSztBQUN6QyxVQUFRLGFBQWEsT0FBTyxhQUFhLE1BQU0sZUFBZSxLQUFLLElBQUksaUJBQWlCLEtBQUs7QUFDN0YsTUFBSSxLQUFLO0FBQ1AsV0FBTyxpQkFBaUIsR0FBRyxJQUFJLE1BQU07QUFBQSxFQUN2QyxPQUFPO0FBQ0wsV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQUNBLFNBQVMsVUFBVSxPQUFPO0FBQ3hCLFNBQU8sVUFBVSxVQUFVLFVBQVU7QUFDdkM7QUFDQSxTQUFTLGNBQWMsVUFBVTtBQUMvQixTQUFPLGFBQWEsT0FBTyxhQUFhLE9BQU8sYUFBYTtBQUM5RDtBQUNBLFNBQVMsVUFBVSxTQUFTLFVBQVUsS0FBSyxVQUFVO0FBQ25ELE1BQUksUUFBUSxRQUFRLEdBQUcsR0FBRyxTQUFTLENBQUM7QUFDcEMsTUFBSSxVQUFVLEtBQUssS0FBSyxVQUFVLElBQUk7QUFDcEMsUUFBSSxPQUFPLFVBQVUsWUFBWSxPQUFPLFVBQVUsWUFBWSxPQUFPLFVBQVUsWUFBWSxPQUFPLFVBQVUsV0FBVztBQUNySCxjQUFRLE1BQU0sU0FBUztBQUN2QixVQUFJLFlBQVksYUFBYSxLQUFLO0FBQ2hDLGdCQUFRLE1BQU0sVUFBVSxHQUFHLFNBQVMsVUFBVSxFQUFFLENBQUM7QUFBQSxNQUNuRDtBQUNBLGFBQU87QUFBQSxRQUNMLFlBQVksVUFBVSxPQUFPLGNBQWMsUUFBUSxJQUFJLE1BQU0sRUFBRTtBQUFBLE1BQ2pFO0FBQUEsSUFDRixPQUFPO0FBQ0wsVUFBSSxhQUFhLEtBQUs7QUFDcEIsWUFBSSxNQUFNLFFBQVEsS0FBSyxHQUFHO0FBQ3hCLGdCQUFNLE9BQU8sU0FBUyxFQUFFLFFBQVEsU0FBUyxRQUFRO0FBQy9DLG1CQUFPO0FBQUEsY0FDTCxZQUFZLFVBQVUsUUFBUSxjQUFjLFFBQVEsSUFBSSxNQUFNLEVBQUU7QUFBQSxZQUNsRTtBQUFBLFVBQ0YsQ0FBQztBQUFBLFFBQ0gsT0FBTztBQUNMLGlCQUFPLEtBQUssS0FBSyxFQUFFLFFBQVEsU0FBUyxHQUFHO0FBQ3JDLGdCQUFJLFVBQVUsTUFBTSxDQUFDLENBQUMsR0FBRztBQUN2QixxQkFBTyxLQUFLLFlBQVksVUFBVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFBQSxZQUNoRDtBQUFBLFVBQ0YsQ0FBQztBQUFBLFFBQ0g7QUFBQSxNQUNGLE9BQU87QUFDTCxjQUFNLE1BQU0sQ0FBQztBQUNiLFlBQUksTUFBTSxRQUFRLEtBQUssR0FBRztBQUN4QixnQkFBTSxPQUFPLFNBQVMsRUFBRSxRQUFRLFNBQVMsUUFBUTtBQUMvQyxnQkFBSSxLQUFLLFlBQVksVUFBVSxNQUFNLENBQUM7QUFBQSxVQUN4QyxDQUFDO0FBQUEsUUFDSCxPQUFPO0FBQ0wsaUJBQU8sS0FBSyxLQUFLLEVBQUUsUUFBUSxTQUFTLEdBQUc7QUFDckMsZ0JBQUksVUFBVSxNQUFNLENBQUMsQ0FBQyxHQUFHO0FBQ3ZCLGtCQUFJLEtBQUssaUJBQWlCLENBQUMsQ0FBQztBQUM1QixrQkFBSSxLQUFLLFlBQVksVUFBVSxNQUFNLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUFBLFlBQ3JEO0FBQUEsVUFDRixDQUFDO0FBQUEsUUFDSDtBQUNBLFlBQUksY0FBYyxRQUFRLEdBQUc7QUFDM0IsaUJBQU8sS0FBSyxpQkFBaUIsR0FBRyxJQUFJLE1BQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQztBQUFBLFFBQ3pELFdBQVcsSUFBSSxXQUFXLEdBQUc7QUFDM0IsaUJBQU8sS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDO0FBQUEsUUFDM0I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0YsT0FBTztBQUNMLFFBQUksYUFBYSxLQUFLO0FBQ3BCLFVBQUksVUFBVSxLQUFLLEdBQUc7QUFDcEIsZUFBTyxLQUFLLGlCQUFpQixHQUFHLENBQUM7QUFBQSxNQUNuQztBQUFBLElBQ0YsV0FBVyxVQUFVLE9BQU8sYUFBYSxPQUFPLGFBQWEsTUFBTTtBQUNqRSxhQUFPLEtBQUssaUJBQWlCLEdBQUcsSUFBSSxHQUFHO0FBQUEsSUFDekMsV0FBVyxVQUFVLElBQUk7QUFDdkIsYUFBTyxLQUFLLEVBQUU7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7QUFDQSxTQUFTLFNBQVMsVUFBVTtBQUMxQixTQUFPO0FBQUEsSUFDTCxRQUFRLE9BQU8sS0FBSyxNQUFNLFFBQVE7QUFBQSxFQUNwQztBQUNGO0FBQ0EsU0FBUyxPQUFPLFVBQVUsU0FBUztBQUNqQyxNQUFJLFlBQVksQ0FBQyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHO0FBQ2xELGFBQVcsU0FBUztBQUFBLElBQ2xCO0FBQUEsSUFDQSxTQUFTLEdBQUcsWUFBWSxTQUFTO0FBQy9CLFVBQUksWUFBWTtBQUNkLFlBQUksV0FBVztBQUNmLGNBQU0sU0FBUyxDQUFDO0FBQ2hCLFlBQUksVUFBVSxRQUFRLFdBQVcsT0FBTyxDQUFDLENBQUMsTUFBTSxJQUFJO0FBQ2xELHFCQUFXLFdBQVcsT0FBTyxDQUFDO0FBQzlCLHVCQUFhLFdBQVcsT0FBTyxDQUFDO0FBQUEsUUFDbEM7QUFDQSxtQkFBVyxNQUFNLElBQUksRUFBRSxRQUFRLFNBQVMsVUFBVTtBQUNoRCxjQUFJLE1BQU0sNEJBQTRCLEtBQUssUUFBUTtBQUNuRCxpQkFBTyxLQUFLLFVBQVUsU0FBUyxVQUFVLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBQSxRQUNwRSxDQUFDO0FBQ0QsWUFBSSxZQUFZLGFBQWEsS0FBSztBQUNoQyxjQUFJLFlBQVk7QUFDaEIsY0FBSSxhQUFhLEtBQUs7QUFDcEIsd0JBQVk7QUFBQSxVQUNkLFdBQVcsYUFBYSxLQUFLO0FBQzNCLHdCQUFZO0FBQUEsVUFDZDtBQUNBLGtCQUFRLE9BQU8sV0FBVyxJQUFJLFdBQVcsTUFBTSxPQUFPLEtBQUssU0FBUztBQUFBLFFBQ3RFLE9BQU87QUFDTCxpQkFBTyxPQUFPLEtBQUssR0FBRztBQUFBLFFBQ3hCO0FBQUEsTUFDRixPQUFPO0FBQ0wsZUFBTyxlQUFlLE9BQU87QUFBQSxNQUMvQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0EsTUFBSSxhQUFhLEtBQUs7QUFDcEIsV0FBTztBQUFBLEVBQ1QsT0FBTztBQUNMLFdBQU8sU0FBUyxRQUFRLE9BQU8sRUFBRTtBQUFBLEVBQ25DO0FBQ0Y7QUFHQSxTQUFTLE1BQU0sU0FBUztBQUN0QixNQUFJLFNBQVMsUUFBUSxPQUFPLFlBQVk7QUFDeEMsTUFBSSxPQUFPLFFBQVEsT0FBTyxLQUFLLFFBQVEsZ0JBQWdCLE1BQU07QUFDN0QsTUFBSSxVQUFVLE9BQU8sT0FBTyxDQUFDLEdBQUcsUUFBUSxPQUFPO0FBQy9DLE1BQUk7QUFDSixNQUFJLGFBQWEsS0FBSyxTQUFTO0FBQUEsSUFDN0I7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0YsQ0FBQztBQUNELFFBQU0sbUJBQW1CLHdCQUF3QixHQUFHO0FBQ3BELFFBQU0sU0FBUyxHQUFHLEVBQUUsT0FBTyxVQUFVO0FBQ3JDLE1BQUksQ0FBQyxRQUFRLEtBQUssR0FBRyxHQUFHO0FBQ3RCLFVBQU0sUUFBUSxVQUFVO0FBQUEsRUFDMUI7QUFDQSxRQUFNLG9CQUFvQixPQUFPLEtBQUssT0FBTyxFQUFFLE9BQU8sQ0FBQyxXQUFXLGlCQUFpQixTQUFTLE1BQU0sQ0FBQyxFQUFFLE9BQU8sU0FBUztBQUNySCxRQUFNLHNCQUFzQixLQUFLLFlBQVksaUJBQWlCO0FBQzlELFFBQU0sa0JBQWtCLDZCQUE2QixLQUFLLFFBQVEsTUFBTTtBQUN4RSxNQUFJLENBQUMsaUJBQWlCO0FBQ3BCLFFBQUksUUFBUSxVQUFVLFFBQVE7QUFDNUIsY0FBUSxTQUFTLFFBQVEsT0FBTyxNQUFNLEdBQUcsRUFBRTtBQUFBLFFBQ3pDLENBQUMsV0FBVyxPQUFPO0FBQUEsVUFDakI7QUFBQSxVQUNBLHVCQUF1QixRQUFRLFVBQVUsTUFBTTtBQUFBLFFBQ2pEO0FBQUEsTUFDRixFQUFFLEtBQUssR0FBRztBQUFBLElBQ1o7QUFDQSxRQUFJLElBQUksU0FBUyxVQUFVLEdBQUc7QUFDNUIsVUFBSSxRQUFRLFVBQVUsVUFBVSxRQUFRO0FBQ3RDLGNBQU0sMkJBQTJCLFFBQVEsT0FBTyxNQUFNLCtCQUErQixLQUFLLENBQUM7QUFDM0YsZ0JBQVEsU0FBUyx5QkFBeUIsT0FBTyxRQUFRLFVBQVUsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZO0FBQzVGLGdCQUFNLFNBQVMsUUFBUSxVQUFVLFNBQVMsSUFBSSxRQUFRLFVBQVUsTUFBTSxLQUFLO0FBQzNFLGlCQUFPLDBCQUEwQixPQUFPLFdBQVcsTUFBTTtBQUFBLFFBQzNELENBQUMsRUFBRSxLQUFLLEdBQUc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxNQUFJLENBQUMsT0FBTyxNQUFNLEVBQUUsU0FBUyxNQUFNLEdBQUc7QUFDcEMsVUFBTSxtQkFBbUIsS0FBSyxtQkFBbUI7QUFBQSxFQUNuRCxPQUFPO0FBQ0wsUUFBSSxVQUFVLHFCQUFxQjtBQUNqQyxhQUFPLG9CQUFvQjtBQUFBLElBQzdCLE9BQU87QUFDTCxVQUFJLE9BQU8sS0FBSyxtQkFBbUIsRUFBRSxRQUFRO0FBQzNDLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxNQUFJLENBQUMsUUFBUSxjQUFjLEtBQUssT0FBTyxTQUFTLGFBQWE7QUFDM0QsWUFBUSxjQUFjLElBQUk7QUFBQSxFQUM1QjtBQUNBLE1BQUksQ0FBQyxTQUFTLEtBQUssRUFBRSxTQUFTLE1BQU0sS0FBSyxPQUFPLFNBQVMsYUFBYTtBQUNwRSxXQUFPO0FBQUEsRUFDVDtBQUNBLFNBQU8sT0FBTztBQUFBLElBQ1osRUFBRSxRQUFRLEtBQUssUUFBUTtBQUFBLElBQ3ZCLE9BQU8sU0FBUyxjQUFjLEVBQUUsS0FBSyxJQUFJO0FBQUEsSUFDekMsUUFBUSxVQUFVLEVBQUUsU0FBUyxRQUFRLFFBQVEsSUFBSTtBQUFBLEVBQ25EO0FBQ0Y7QUFHQSxTQUFTLHFCQUFxQixVQUFVLE9BQU8sU0FBUztBQUN0RCxTQUFPLE1BQU0sTUFBTSxVQUFVLE9BQU8sT0FBTyxDQUFDO0FBQzlDO0FBR0EsU0FBUyxhQUFhLGFBQWEsYUFBYTtBQUM5QyxRQUFNLFlBQVksTUFBTSxhQUFhLFdBQVc7QUFDaEQsUUFBTSxZQUFZLHFCQUFxQixLQUFLLE1BQU0sU0FBUztBQUMzRCxTQUFPLE9BQU8sT0FBTyxXQUFXO0FBQUEsSUFDOUIsVUFBVTtBQUFBLElBQ1YsVUFBVSxhQUFhLEtBQUssTUFBTSxTQUFTO0FBQUEsSUFDM0MsT0FBTyxNQUFNLEtBQUssTUFBTSxTQUFTO0FBQUEsSUFDakM7QUFBQSxFQUNGLENBQUM7QUFDSDtBQUdBLElBQUksV0FBVyxhQUFhLE1BQU0sUUFBUTs7O0FDclUxQyxxQ0FBMEI7OztBQ2pCMUIsSUFBTSxXQUFXO0FBQ2pCLElBQU0sYUFBYTtBQUNuQixJQUFNLG9CQUFvQixLQUFLO0FBQy9CLElBQU0sZ0JBQWdCLEtBQUs7QUFDM0IsSUFBTSxlQUFlO0FBRXJCLElBQU0sbUJBQW1CO0FBQ3pCLElBQU0saUJBQ0o7QUF3QkYsSUFBTSxnQkFBZ0IsQ0FBQyxPQUFPLFVBQVUsVUFBVTtBQUNoRCxNQUFJLGFBQWEsTUFBTTtBQUNyQixXQUFPO0FBQUEsTUFDTDtBQUFBLE1BQ0EsQ0FBQyxLQUFLQyxXQUFVO0FBQ2QsWUFBSSxPQUFPQSxXQUFVLFNBQVUsUUFBTyxLQUFLLFFBQVFBLE9BQU0sU0FBUyxDQUFDO0FBRW5FLFlBQUksT0FBTyxhQUFhLFdBQVksUUFBTyxTQUFTLEtBQUtBLE1BQUs7QUFFOUQsWUFBSSxNQUFNLFFBQVEsUUFBUSxLQUFLLFNBQVMsU0FBUyxHQUFHLEVBQUcsUUFBT0E7QUFFOUQsZUFBT0E7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsTUFBSSxDQUFDLE1BQU8sUUFBTyxrQkFBa0IsT0FBTyxVQUFVLEtBQUs7QUFFM0QsUUFBTSx3QkFBd0I7QUFBQSxJQUM1QjtBQUFBLElBQ0EsQ0FBQyxLQUFLQSxXQUFVO0FBQ2QsWUFBTSxVQUFVLE9BQU9BLFdBQVUsWUFBWSxXQUFXLEtBQUtBLE1BQUs7QUFFbEUsVUFBSSxRQUFTLFFBQU9BLE9BQU0sU0FBUyxJQUFJO0FBRXZDLFVBQUksT0FBT0EsV0FBVSxTQUFVLFFBQU9BLE9BQU0sU0FBUyxJQUFJO0FBRXpELFVBQUksT0FBTyxhQUFhLFdBQVksUUFBTyxTQUFTLEtBQUtBLE1BQUs7QUFFOUQsVUFBSSxNQUFNLFFBQVEsUUFBUSxLQUFLLFNBQVMsU0FBUyxHQUFHLEVBQUcsUUFBT0E7QUFFOUQsYUFBT0E7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDQSxRQUFNLGdCQUFnQixzQkFBc0I7QUFBQSxJQUMxQztBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQ0EsUUFBTSxlQUFlLGNBQWMsUUFBUSxnQkFBZ0IsUUFBUTtBQUVuRSxTQUFPO0FBQ1Q7QUFFQSxJQUFNLGVBQWUsb0JBQUksSUFBSTtBQVU3QixJQUFNLDJCQUEyQixNQUFNO0FBQ3JDLFFBQU0sbUJBQW1CLEtBQUssTUFBTSxTQUFTO0FBRTdDLE1BQUksYUFBYSxJQUFJLGdCQUFnQixHQUFHO0FBQ3RDLFdBQU8sYUFBYSxJQUFJLGdCQUFnQjtBQUFBLEVBQzFDO0FBRUEsTUFBSTtBQUNGLFVBQU0sU0FBUyxLQUFLO0FBQUEsTUFDbEI7QUFBQSxNQUNBLENBQUMsR0FBRyxJQUFJLFlBQVksQ0FBQyxDQUFDLFNBQVMsVUFBVSxRQUFRLFdBQVc7QUFBQSxJQUM5RDtBQUNBLGlCQUFhLElBQUksa0JBQWtCLE1BQU07QUFFekMsV0FBTztBQUFBLEVBQ1QsUUFBUTtBQUNOLGlCQUFhLElBQUksa0JBQWtCLEtBQUs7QUFFeEMsV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQVlBLElBQU0sOEJBQThCLENBQUMsS0FBSyxPQUFPLFNBQVMsZ0JBQWdCO0FBQ3hFLFFBQU0sdUJBQ0osT0FBTyxVQUFVLFlBQVksYUFBYSxLQUFLLEtBQUs7QUFDdEQsTUFBSSxxQkFBc0IsUUFBTyxPQUFPLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUUxRCxRQUFNLGVBQWUsT0FBTyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUs7QUFDdkUsTUFBSSxhQUFjLFFBQU8sTUFBTSxNQUFNLEdBQUcsRUFBRTtBQUUxQyxNQUFJLE9BQU8sZ0JBQWdCLFdBQVksUUFBTztBQUU5QyxTQUFPLFlBQVksS0FBSyxPQUFPLE9BQU87QUFDeEM7QUFhQSxJQUFNLGNBQWMsQ0FBQyxNQUFNLFlBQVk7QUFDckMsU0FBTyxLQUFLLE1BQU0sTUFBTSxDQUFDLEtBQUssT0FBTyxZQUFZO0FBQy9DLFVBQU0sY0FDSixPQUFPLFVBQVUsYUFDaEIsUUFBUSxPQUFPLG9CQUFvQixRQUFRLE9BQU87QUFDckQsVUFBTSxRQUFRLFdBQVcsU0FBUyxLQUFLLFFBQVEsTUFBTTtBQUNyRCxVQUFNLFdBQVcsZUFBZTtBQUVoQyxRQUFJLFNBQVUsUUFBTyxPQUFPLFFBQVEsTUFBTTtBQUUxQyxRQUFJLE9BQU8sWUFBWSxXQUFZLFFBQU87QUFFMUMsV0FBTyxRQUFRLEtBQUssT0FBTyxPQUFPO0FBQUEsRUFDcEMsQ0FBQztBQUNIO0FBRUEsSUFBTSxVQUFVLE9BQU8saUJBQWlCLFNBQVM7QUFDakQsSUFBTSxhQUFhLFFBQVE7QUFDM0IsSUFBTSx3QkFDSjtBQUNGLElBQU0sdUJBQXVCO0FBbUI3QixJQUFNLFlBQVksQ0FBQyxNQUFNLFlBQVk7QUFDbkMsTUFBSSxDQUFDLEtBQU0sUUFBTyxjQUFjLE1BQU0sT0FBTztBQUU3QyxNQUFJLHlCQUF5QixFQUFHLFFBQU8sWUFBWSxNQUFNLE9BQU87QUFHaEUsUUFBTSxpQkFBaUIsS0FBSztBQUFBLElBQzFCO0FBQUEsSUFDQSxDQUFDQyxPQUFNLFFBQVEsWUFBWSxnQkFBZ0I7QUFDekMsWUFBTSxXQUFXQSxNQUFLLENBQUMsTUFBTTtBQUM3QixZQUFNLFVBQVUsWUFBWSxxQkFBcUIsS0FBS0EsS0FBSTtBQUUxRCxVQUFJLFFBQVMsUUFBT0EsTUFBSyxVQUFVLEdBQUdBLE1BQUssU0FBUyxDQUFDLElBQUk7QUFFekQsWUFBTSw0QkFBNEIsY0FBYztBQUNoRCxZQUFNLHVCQUNKLFdBQ0MsT0FBTyxTQUFTLGNBQ2QsT0FBTyxXQUFXLGNBQWMsVUFBVTtBQUUvQyxVQUFJLFlBQVksNkJBQTZCO0FBQzNDLGVBQU9BO0FBRVQsYUFBTyxNQUFNQSxRQUFPO0FBQUEsSUFDdEI7QUFBQSxFQUNGO0FBRUEsU0FBTztBQUFBLElBQWM7QUFBQSxJQUFnQixDQUFDLEtBQUssT0FBTyxZQUNoRCw0QkFBNEIsS0FBSyxPQUFPLFNBQVMsT0FBTztBQUFBLEVBQzFEO0FBQ0Y7OztBQ3BOQSxJQUFNLGVBQU4sY0FBMkIsTUFBTTtBQUFBLEVBQy9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBO0FBQUEsRUFDQSxZQUFZLFNBQVMsWUFBWSxTQUFTO0FBQ3hDLFVBQU0sU0FBUyxFQUFFLE9BQU8sUUFBUSxNQUFNLENBQUM7QUFDdkMsU0FBSyxPQUFPO0FBQ1osU0FBSyxTQUFTLE9BQU8sU0FBUyxVQUFVO0FBQ3hDLFFBQUksT0FBTyxNQUFNLEtBQUssTUFBTSxHQUFHO0FBQzdCLFdBQUssU0FBUztBQUFBLElBQ2hCO0FBRUEsUUFBSSxjQUFjLFNBQVM7QUFDekIsV0FBSyxXQUFXLFFBQVE7QUFBQSxJQUMxQjtBQUNBLFVBQU0sY0FBYyxPQUFPLE9BQU8sQ0FBQyxHQUFHLFFBQVEsT0FBTztBQUNyRCxRQUFJLFFBQVEsUUFBUSxRQUFRLGVBQWU7QUFDekMsa0JBQVksVUFBVSxPQUFPLE9BQU8sQ0FBQyxHQUFHLFFBQVEsUUFBUSxTQUFTO0FBQUEsUUFDL0QsZUFBZSxRQUFRLFFBQVEsUUFBUSxjQUFjO0FBQUEsVUFDbkQ7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFDQSxnQkFBWSxNQUFNLFlBQVksSUFBSSxRQUFRLHdCQUF3QiwwQkFBMEIsRUFBRSxRQUFRLHVCQUF1Qix5QkFBeUI7QUFDdEosU0FBSyxVQUFVO0FBQUEsRUFDakI7QUFDRjs7O0FGOUJBLElBQUlDLFdBQVU7QUFHZCxJQUFJLG1CQUFtQjtBQUFBLEVBQ3JCLFNBQVM7QUFBQSxJQUNQLGNBQWMsc0JBQXNCQSxRQUFPLElBQUksYUFBYSxDQUFDO0FBQUEsRUFDL0Q7QUFDRjtBQU9BLFNBQVNDLGVBQWMsT0FBTztBQUM1QixNQUFJLE9BQU8sVUFBVSxZQUFZLFVBQVUsS0FBTSxRQUFPO0FBQ3hELE1BQUksT0FBTyxVQUFVLFNBQVMsS0FBSyxLQUFLLE1BQU0sa0JBQW1CLFFBQU87QUFDeEUsUUFBTSxRQUFRLE9BQU8sZUFBZSxLQUFLO0FBQ3pDLE1BQUksVUFBVSxLQUFNLFFBQU87QUFDM0IsUUFBTSxPQUFPLE9BQU8sVUFBVSxlQUFlLEtBQUssT0FBTyxhQUFhLEtBQUssTUFBTTtBQUNqRixTQUFPLE9BQU8sU0FBUyxjQUFjLGdCQUFnQixRQUFRLFNBQVMsVUFBVSxLQUFLLElBQUksTUFBTSxTQUFTLFVBQVUsS0FBSyxLQUFLO0FBQzlIO0FBSUEsSUFBSSxPQUFPLE1BQU07QUFDakIsZUFBZSxhQUFhLGdCQUFnQjtBQUMxQyxRQUFNLFFBQVEsZUFBZSxTQUFTLFNBQVMsV0FBVztBQUMxRCxNQUFJLENBQUMsT0FBTztBQUNWLFVBQU0sSUFBSTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBLFFBQU0sTUFBTSxlQUFlLFNBQVMsT0FBTztBQUMzQyxRQUFNLDJCQUEyQixlQUFlLFNBQVMsNkJBQTZCO0FBQ3RGLFFBQU0sT0FBT0EsZUFBYyxlQUFlLElBQUksS0FBSyxNQUFNLFFBQVEsZUFBZSxJQUFJLElBQUksY0FBYyxlQUFlLElBQUksSUFBSSxlQUFlO0FBQzVJLFFBQU0saUJBQWlCLE9BQU87QUFBQSxJQUM1QixPQUFPLFFBQVEsZUFBZSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU07QUFBQSxNQUM1RDtBQUFBLE1BQ0EsT0FBTyxLQUFLO0FBQUEsSUFDZCxDQUFDO0FBQUEsRUFDSDtBQUNBLE1BQUk7QUFDSixNQUFJO0FBQ0Ysb0JBQWdCLE1BQU0sTUFBTSxlQUFlLEtBQUs7QUFBQSxNQUM5QyxRQUFRLGVBQWU7QUFBQSxNQUN2QjtBQUFBLE1BQ0EsVUFBVSxlQUFlLFNBQVM7QUFBQSxNQUNsQyxTQUFTO0FBQUEsTUFDVCxRQUFRLGVBQWUsU0FBUztBQUFBO0FBQUE7QUFBQSxNQUdoQyxHQUFHLGVBQWUsUUFBUSxFQUFFLFFBQVEsT0FBTztBQUFBLElBQzdDLENBQUM7QUFBQSxFQUNILFNBQVMsT0FBTztBQUNkLFFBQUksVUFBVTtBQUNkLFFBQUksaUJBQWlCLE9BQU87QUFDMUIsVUFBSSxNQUFNLFNBQVMsY0FBYztBQUMvQixjQUFNLFNBQVM7QUFDZixjQUFNO0FBQUEsTUFDUjtBQUNBLGdCQUFVLE1BQU07QUFDaEIsVUFBSSxNQUFNLFNBQVMsZUFBZSxXQUFXLE9BQU87QUFDbEQsWUFBSSxNQUFNLGlCQUFpQixPQUFPO0FBQ2hDLG9CQUFVLE1BQU0sTUFBTTtBQUFBLFFBQ3hCLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVTtBQUMxQyxvQkFBVSxNQUFNO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUNBLFVBQU0sZUFBZSxJQUFJLGFBQWEsU0FBUyxLQUFLO0FBQUEsTUFDbEQsU0FBUztBQUFBLElBQ1gsQ0FBQztBQUNELGlCQUFhLFFBQVE7QUFDckIsVUFBTTtBQUFBLEVBQ1I7QUFDQSxRQUFNLFNBQVMsY0FBYztBQUM3QixRQUFNLE1BQU0sY0FBYztBQUMxQixRQUFNLGtCQUFrQixDQUFDO0FBQ3pCLGFBQVcsQ0FBQyxLQUFLLEtBQUssS0FBSyxjQUFjLFNBQVM7QUFDaEQsb0JBQWdCLEdBQUcsSUFBSTtBQUFBLEVBQ3pCO0FBQ0EsUUFBTSxrQkFBa0I7QUFBQSxJQUN0QjtBQUFBLElBQ0E7QUFBQSxJQUNBLFNBQVM7QUFBQSxJQUNULE1BQU07QUFBQSxFQUNSO0FBQ0EsTUFBSSxpQkFBaUIsaUJBQWlCO0FBQ3BDLFVBQU0sVUFBVSxnQkFBZ0IsUUFBUSxnQkFBZ0IsS0FBSyxNQUFNLCtCQUErQjtBQUNsRyxVQUFNLGtCQUFrQixXQUFXLFFBQVEsSUFBSTtBQUMvQyxRQUFJO0FBQUEsTUFDRix1QkFBdUIsZUFBZSxNQUFNLElBQUksZUFBZSxHQUFHLHFEQUFxRCxnQkFBZ0IsTUFBTSxHQUFHLGtCQUFrQixTQUFTLGVBQWUsS0FBSyxFQUFFO0FBQUEsSUFDbk07QUFBQSxFQUNGO0FBQ0EsTUFBSSxXQUFXLE9BQU8sV0FBVyxLQUFLO0FBQ3BDLFdBQU87QUFBQSxFQUNUO0FBQ0EsTUFBSSxlQUFlLFdBQVcsUUFBUTtBQUNwQyxRQUFJLFNBQVMsS0FBSztBQUNoQixhQUFPO0FBQUEsSUFDVDtBQUNBLFVBQU0sSUFBSSxhQUFhLGNBQWMsWUFBWSxRQUFRO0FBQUEsTUFDdkQsVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLElBQ1gsQ0FBQztBQUFBLEVBQ0g7QUFDQSxNQUFJLFdBQVcsS0FBSztBQUNsQixvQkFBZ0IsT0FBTyxNQUFNLGdCQUFnQixhQUFhO0FBQzFELFVBQU0sSUFBSSxhQUFhLGdCQUFnQixRQUFRO0FBQUEsTUFDN0MsVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLElBQ1gsQ0FBQztBQUFBLEVBQ0g7QUFDQSxNQUFJLFVBQVUsS0FBSztBQUNqQixvQkFBZ0IsT0FBTyxNQUFNLGdCQUFnQixhQUFhO0FBQzFELFVBQU0sSUFBSSxhQUFhLGVBQWUsZ0JBQWdCLElBQUksR0FBRyxRQUFRO0FBQUEsTUFDbkUsVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLElBQ1gsQ0FBQztBQUFBLEVBQ0g7QUFDQSxrQkFBZ0IsT0FBTywyQkFBMkIsTUFBTSxnQkFBZ0IsYUFBYSxJQUFJLGNBQWM7QUFDdkcsU0FBTztBQUNUO0FBQ0EsZUFBZSxnQkFBZ0IsVUFBVTtBQUN2QyxRQUFNLGNBQWMsU0FBUyxRQUFRLElBQUksY0FBYztBQUN2RCxNQUFJLENBQUMsYUFBYTtBQUNoQixXQUFPLFNBQVMsS0FBSyxFQUFFLE1BQU0sSUFBSTtBQUFBLEVBQ25DO0FBQ0EsUUFBTSxlQUFXLDBDQUFVLFdBQVc7QUFDdEMsTUFBSSxlQUFlLFFBQVEsR0FBRztBQUM1QixRQUFJLE9BQU87QUFDWCxRQUFJO0FBQ0YsYUFBTyxNQUFNLFNBQVMsS0FBSztBQUMzQixhQUFPLFVBQVUsSUFBSTtBQUFBLElBQ3ZCLFNBQVMsS0FBSztBQUNaLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRixXQUFXLFNBQVMsS0FBSyxXQUFXLE9BQU8sS0FBSyxTQUFTLFdBQVcsU0FBUyxZQUFZLE1BQU0sU0FBUztBQUN0RyxXQUFPLFNBQVMsS0FBSyxFQUFFLE1BQU0sSUFBSTtBQUFBLEVBQ25DLE9BQU87QUFDTCxXQUFPLFNBQVMsWUFBWSxFQUFFO0FBQUE7QUFBQSxNQUU1QixNQUFNLElBQUksWUFBWSxDQUFDO0FBQUEsSUFDekI7QUFBQSxFQUNGO0FBQ0Y7QUFDQSxTQUFTLGVBQWUsVUFBVTtBQUNoQyxTQUFPLFNBQVMsU0FBUyxzQkFBc0IsU0FBUyxTQUFTO0FBQ25FO0FBQ0EsU0FBUyxlQUFlLE1BQU07QUFDNUIsTUFBSSxPQUFPLFNBQVMsVUFBVTtBQUM1QixXQUFPO0FBQUEsRUFDVDtBQUNBLE1BQUksZ0JBQWdCLGFBQWE7QUFDL0IsV0FBTztBQUFBLEVBQ1Q7QUFDQSxNQUFJLGFBQWEsTUFBTTtBQUNyQixVQUFNLFNBQVMsdUJBQXVCLE9BQU8sTUFBTSxLQUFLLGlCQUFpQixLQUFLO0FBQzlFLFdBQU8sTUFBTSxRQUFRLEtBQUssTUFBTSxJQUFJLEdBQUcsS0FBSyxPQUFPLEtBQUssS0FBSyxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sS0FBSyxHQUFHLEtBQUssT0FBTyxHQUFHLE1BQU07QUFBQSxFQUNwSjtBQUNBLFNBQU8sa0JBQWtCLEtBQUssVUFBVSxJQUFJLENBQUM7QUFDL0M7QUFHQSxTQUFTQyxjQUFhLGFBQWEsYUFBYTtBQUM5QyxRQUFNLFlBQVksWUFBWSxTQUFTLFdBQVc7QUFDbEQsUUFBTSxTQUFTLFNBQVMsT0FBTyxZQUFZO0FBQ3pDLFVBQU0sa0JBQWtCLFVBQVUsTUFBTSxPQUFPLFVBQVU7QUFDekQsUUFBSSxDQUFDLGdCQUFnQixXQUFXLENBQUMsZ0JBQWdCLFFBQVEsTUFBTTtBQUM3RCxhQUFPLGFBQWEsVUFBVSxNQUFNLGVBQWUsQ0FBQztBQUFBLElBQ3REO0FBQ0EsVUFBTSxXQUFXLENBQUMsUUFBUSxnQkFBZ0I7QUFDeEMsYUFBTztBQUFBLFFBQ0wsVUFBVSxNQUFNLFVBQVUsTUFBTSxRQUFRLFdBQVcsQ0FBQztBQUFBLE1BQ3REO0FBQUEsSUFDRjtBQUNBLFdBQU8sT0FBTyxVQUFVO0FBQUEsTUFDdEIsVUFBVTtBQUFBLE1BQ1YsVUFBVUEsY0FBYSxLQUFLLE1BQU0sU0FBUztBQUFBLElBQzdDLENBQUM7QUFDRCxXQUFPLGdCQUFnQixRQUFRLEtBQUssVUFBVSxlQUFlO0FBQUEsRUFDL0Q7QUFDQSxTQUFPLE9BQU8sT0FBTyxRQUFRO0FBQUEsSUFDM0IsVUFBVTtBQUFBLElBQ1YsVUFBVUEsY0FBYSxLQUFLLE1BQU0sU0FBUztBQUFBLEVBQzdDLENBQUM7QUFDSDtBQUdBLElBQUksVUFBVUEsY0FBYSxVQUFVLGdCQUFnQjs7O0FHaE1yRCxJQUFJQyxXQUFVO0FBU2QsU0FBUywrQkFBK0IsTUFBTTtBQUM1QyxTQUFPO0FBQUEsSUFDTCxLQUFLLE9BQU8sSUFBSSxDQUFDLE1BQU0sTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEtBQUssSUFBSTtBQUN2RDtBQUNBLElBQUksdUJBQXVCLGNBQWMsTUFBTTtBQUFBLEVBQzdDLFlBQVksVUFBVSxTQUFTLFVBQVU7QUFDdkMsVUFBTSwrQkFBK0IsUUFBUSxDQUFDO0FBQzlDLFNBQUssVUFBVTtBQUNmLFNBQUssVUFBVTtBQUNmLFNBQUssV0FBVztBQUNoQixTQUFLLFNBQVMsU0FBUztBQUN2QixTQUFLLE9BQU8sU0FBUztBQUNyQixRQUFJLE1BQU0sbUJBQW1CO0FBQzNCLFlBQU0sa0JBQWtCLE1BQU0sS0FBSyxXQUFXO0FBQUEsSUFDaEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsRUFDUDtBQUFBLEVBQ0E7QUFDRjtBQUdBLElBQUksdUJBQXVCO0FBQUEsRUFDekI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Y7QUFDQSxJQUFJLDZCQUE2QixDQUFDLFNBQVMsVUFBVSxLQUFLO0FBQzFELElBQUksdUJBQXVCO0FBQzNCLFNBQVMsUUFBUSxVQUFVLE9BQU8sU0FBUztBQUN6QyxNQUFJLFNBQVM7QUFDWCxRQUFJLE9BQU8sVUFBVSxZQUFZLFdBQVcsU0FBUztBQUNuRCxhQUFPLFFBQVE7QUFBQSxRQUNiLElBQUksTUFBTSw0REFBNEQ7QUFBQSxNQUN4RTtBQUFBLElBQ0Y7QUFDQSxlQUFXLE9BQU8sU0FBUztBQUN6QixVQUFJLENBQUMsMkJBQTJCLFNBQVMsR0FBRyxFQUFHO0FBQy9DLGFBQU8sUUFBUTtBQUFBLFFBQ2IsSUFBSTtBQUFBLFVBQ0YsdUJBQXVCLEdBQUc7QUFBQSxRQUM1QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBLFFBQU0sZ0JBQWdCLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxFQUFFLE1BQU0sR0FBRyxPQUFPLElBQUk7QUFDdEYsUUFBTSxpQkFBaUIsT0FBTztBQUFBLElBQzVCO0FBQUEsRUFDRixFQUFFLE9BQU8sQ0FBQyxRQUFRLFFBQVE7QUFDeEIsUUFBSSxxQkFBcUIsU0FBUyxHQUFHLEdBQUc7QUFDdEMsYUFBTyxHQUFHLElBQUksY0FBYyxHQUFHO0FBQy9CLGFBQU87QUFBQSxJQUNUO0FBQ0EsUUFBSSxDQUFDLE9BQU8sV0FBVztBQUNyQixhQUFPLFlBQVksQ0FBQztBQUFBLElBQ3RCO0FBQ0EsV0FBTyxVQUFVLEdBQUcsSUFBSSxjQUFjLEdBQUc7QUFDekMsV0FBTztBQUFBLEVBQ1QsR0FBRyxDQUFDLENBQUM7QUFDTCxRQUFNLFVBQVUsY0FBYyxXQUFXLFNBQVMsU0FBUyxTQUFTO0FBQ3BFLE1BQUkscUJBQXFCLEtBQUssT0FBTyxHQUFHO0FBQ3RDLG1CQUFlLE1BQU0sUUFBUSxRQUFRLHNCQUFzQixjQUFjO0FBQUEsRUFDM0U7QUFDQSxTQUFPLFNBQVMsY0FBYyxFQUFFLEtBQUssQ0FBQyxhQUFhO0FBQ2pELFFBQUksU0FBUyxLQUFLLFFBQVE7QUFDeEIsWUFBTSxVQUFVLENBQUM7QUFDakIsaUJBQVcsT0FBTyxPQUFPLEtBQUssU0FBUyxPQUFPLEdBQUc7QUFDL0MsZ0JBQVEsR0FBRyxJQUFJLFNBQVMsUUFBUSxHQUFHO0FBQUEsTUFDckM7QUFDQSxZQUFNLElBQUk7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0EsU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGO0FBQ0EsV0FBTyxTQUFTLEtBQUs7QUFBQSxFQUN2QixDQUFDO0FBQ0g7QUFHQSxTQUFTQyxjQUFhLFVBQVUsYUFBYTtBQUMzQyxRQUFNLGFBQWEsU0FBUyxTQUFTLFdBQVc7QUFDaEQsUUFBTSxTQUFTLENBQUMsT0FBTyxZQUFZO0FBQ2pDLFdBQU8sUUFBUSxZQUFZLE9BQU8sT0FBTztBQUFBLEVBQzNDO0FBQ0EsU0FBTyxPQUFPLE9BQU8sUUFBUTtBQUFBLElBQzNCLFVBQVVBLGNBQWEsS0FBSyxNQUFNLFVBQVU7QUFBQSxJQUM1QyxVQUFVLFdBQVc7QUFBQSxFQUN2QixDQUFDO0FBQ0g7QUFHQSxJQUFJLFdBQVdBLGNBQWEsU0FBUztBQUFBLEVBQ25DLFNBQVM7QUFBQSxJQUNQLGNBQWMsc0JBQXNCRCxRQUFPLElBQUksYUFBYSxDQUFDO0FBQUEsRUFDL0Q7QUFBQSxFQUNBLFFBQVE7QUFBQSxFQUNSLEtBQUs7QUFDUCxDQUFDO0FBQ0QsU0FBUyxrQkFBa0IsZUFBZTtBQUN4QyxTQUFPQyxjQUFhLGVBQWU7QUFBQSxJQUNqQyxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsRUFDUCxDQUFDO0FBQ0g7OztBQzFIQSxJQUFJLFNBQVM7QUFDYixJQUFJLE1BQU07QUFDVixJQUFJLFFBQVEsSUFBSSxPQUFPLElBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRztBQUNsRSxJQUFJLFFBQVEsTUFBTSxLQUFLLEtBQUssS0FBSztBQUdqQyxlQUFlLEtBQUssT0FBTztBQUN6QixRQUFNLFFBQVEsTUFBTSxLQUFLO0FBQ3pCLFFBQU0saUJBQWlCLE1BQU0sV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLE1BQU07QUFDekUsUUFBTSxpQkFBaUIsTUFBTSxXQUFXLE1BQU07QUFDOUMsUUFBTSxZQUFZLFFBQVEsUUFBUSxpQkFBaUIsaUJBQWlCLGlCQUFpQixtQkFBbUI7QUFDeEcsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ047QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUNGO0FBR0EsU0FBUyx3QkFBd0IsT0FBTztBQUN0QyxNQUFJLE1BQU0sTUFBTSxJQUFJLEVBQUUsV0FBVyxHQUFHO0FBQ2xDLFdBQU8sVUFBVSxLQUFLO0FBQUEsRUFDeEI7QUFDQSxTQUFPLFNBQVMsS0FBSztBQUN2QjtBQUdBLGVBQWUsS0FBSyxPQUFPQyxVQUFTLE9BQU8sWUFBWTtBQUNyRCxRQUFNQyxZQUFXRCxTQUFRLFNBQVM7QUFBQSxJQUNoQztBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQ0EsRUFBQUMsVUFBUyxRQUFRLGdCQUFnQix3QkFBd0IsS0FBSztBQUM5RCxTQUFPRCxTQUFRQyxTQUFRO0FBQ3pCO0FBR0EsSUFBSSxrQkFBa0IsU0FBUyxpQkFBaUIsT0FBTztBQUNyRCxNQUFJLENBQUMsT0FBTztBQUNWLFVBQU0sSUFBSSxNQUFNLDBEQUEwRDtBQUFBLEVBQzVFO0FBQ0EsTUFBSSxPQUFPLFVBQVUsVUFBVTtBQUM3QixVQUFNLElBQUk7QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxVQUFRLE1BQU0sUUFBUSxzQkFBc0IsRUFBRTtBQUM5QyxTQUFPLE9BQU8sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLEdBQUc7QUFBQSxJQUMzQyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUs7QUFBQSxFQUM3QixDQUFDO0FBQ0g7OztBQ25EQSxJQUFNQyxXQUFVOzs7QUNNaEIsSUFBTUMsUUFBTyxNQUFNO0FBQ25CO0FBQ0EsSUFBTSxjQUFjLFFBQVEsS0FBSyxLQUFLLE9BQU87QUFDN0MsSUFBTSxlQUFlLFFBQVEsTUFBTSxLQUFLLE9BQU87QUFDL0MsU0FBUyxhQUFhLFNBQVMsQ0FBQyxHQUFHO0FBQ2pDLE1BQUksT0FBTyxPQUFPLFVBQVUsWUFBWTtBQUN0QyxXQUFPLFFBQVFBO0FBQUEsRUFDakI7QUFDQSxNQUFJLE9BQU8sT0FBTyxTQUFTLFlBQVk7QUFDckMsV0FBTyxPQUFPQTtBQUFBLEVBQ2hCO0FBQ0EsTUFBSSxPQUFPLE9BQU8sU0FBUyxZQUFZO0FBQ3JDLFdBQU8sT0FBTztBQUFBLEVBQ2hCO0FBQ0EsTUFBSSxPQUFPLE9BQU8sVUFBVSxZQUFZO0FBQ3RDLFdBQU8sUUFBUTtBQUFBLEVBQ2pCO0FBQ0EsU0FBTztBQUNUO0FBQ0EsSUFBTSxpQkFBaUIsbUJBQW1CQyxRQUFPLElBQUksYUFBYSxDQUFDO0FBQ25FLElBQU0sVUFBTixNQUFjO0FBQUEsRUFDWixPQUFPLFVBQVVBO0FBQUEsRUFDakIsT0FBTyxTQUFTLFVBQVU7QUFDeEIsVUFBTSxzQkFBc0IsY0FBYyxLQUFLO0FBQUEsTUFDN0MsZUFBZSxNQUFNO0FBQ25CLGNBQU0sVUFBVSxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQzVCLFlBQUksT0FBTyxhQUFhLFlBQVk7QUFDbEMsZ0JBQU0sU0FBUyxPQUFPLENBQUM7QUFDdkI7QUFBQSxRQUNGO0FBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMLENBQUM7QUFBQSxZQUNEO0FBQUEsWUFDQTtBQUFBLFlBQ0EsUUFBUSxhQUFhLFNBQVMsWUFBWTtBQUFBLGNBQ3hDLFdBQVcsR0FBRyxRQUFRLFNBQVMsSUFBSSxTQUFTLFNBQVM7QUFBQSxZQUN2RCxJQUFJO0FBQUEsVUFDTjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUNBLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxPQUFPLFVBQVUsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT2xCLE9BQU8sVUFBVSxZQUFZO0FBQzNCLFVBQU0saUJBQWlCLEtBQUs7QUFDNUIsVUFBTSxhQUFhLGNBQWMsS0FBSztBQUFBLE1BQ3BDLE9BQU8sVUFBVSxlQUFlO0FBQUEsUUFDOUIsV0FBVyxPQUFPLENBQUMsV0FBVyxDQUFDLGVBQWUsU0FBUyxNQUFNLENBQUM7QUFBQSxNQUNoRTtBQUFBLElBQ0Y7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsWUFBWSxVQUFVLENBQUMsR0FBRztBQUN4QixVQUFNQyxRQUFPLElBQUksMEJBQUssV0FBVztBQUNqQyxVQUFNLGtCQUFrQjtBQUFBLE1BQ3RCLFNBQVMsUUFBUSxTQUFTLFNBQVM7QUFBQSxNQUNuQyxTQUFTLENBQUM7QUFBQSxNQUNWLFNBQVMsT0FBTyxPQUFPLENBQUMsR0FBRyxRQUFRLFNBQVM7QUFBQTtBQUFBLFFBRTFDLE1BQU1BLE1BQUssS0FBSyxNQUFNLFNBQVM7QUFBQSxNQUNqQyxDQUFDO0FBQUEsTUFDRCxXQUFXO0FBQUEsUUFDVCxVQUFVLENBQUM7QUFBQSxRQUNYLFFBQVE7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUNBLG9CQUFnQixRQUFRLFlBQVksSUFBSSxRQUFRLFlBQVksR0FBRyxRQUFRLFNBQVMsSUFBSSxjQUFjLEtBQUs7QUFDdkcsUUFBSSxRQUFRLFNBQVM7QUFDbkIsc0JBQWdCLFVBQVUsUUFBUTtBQUFBLElBQ3BDO0FBQ0EsUUFBSSxRQUFRLFVBQVU7QUFDcEIsc0JBQWdCLFVBQVUsV0FBVyxRQUFRO0FBQUEsSUFDL0M7QUFDQSxRQUFJLFFBQVEsVUFBVTtBQUNwQixzQkFBZ0IsUUFBUSxXQUFXLElBQUksUUFBUTtBQUFBLElBQ2pEO0FBQ0EsU0FBSyxVQUFVLFFBQVEsU0FBUyxlQUFlO0FBQy9DLFNBQUssVUFBVSxrQkFBa0IsS0FBSyxPQUFPLEVBQUUsU0FBUyxlQUFlO0FBQ3ZFLFNBQUssTUFBTSxhQUFhLFFBQVEsR0FBRztBQUNuQyxTQUFLLE9BQU9BO0FBQ1osUUFBSSxDQUFDLFFBQVEsY0FBYztBQUN6QixVQUFJLENBQUMsUUFBUSxNQUFNO0FBQ2pCLGFBQUssT0FBTyxhQUFhO0FBQUEsVUFDdkIsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGLE9BQU87QUFDTCxjQUFNQyxRQUFPLGdCQUFnQixRQUFRLElBQUk7QUFDekMsUUFBQUQsTUFBSyxLQUFLLFdBQVdDLE1BQUssSUFBSTtBQUM5QixhQUFLLE9BQU9BO0FBQUEsTUFDZDtBQUFBLElBQ0YsT0FBTztBQUNMLFlBQU0sRUFBRSxjQUFjLEdBQUcsYUFBYSxJQUFJO0FBQzFDLFlBQU1BLFFBQU87QUFBQSxRQUNYLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxTQUFTLEtBQUs7QUFBQSxZQUNkLEtBQUssS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU1WLFNBQVM7QUFBQSxZQUNULGdCQUFnQjtBQUFBLFVBQ2xCO0FBQUEsVUFDQSxRQUFRO0FBQUEsUUFDVjtBQUFBLE1BQ0Y7QUFDQSxNQUFBRCxNQUFLLEtBQUssV0FBV0MsTUFBSyxJQUFJO0FBQzlCLFdBQUssT0FBT0E7QUFBQSxJQUNkO0FBQ0EsVUFBTSxtQkFBbUIsS0FBSztBQUM5QixhQUFTLElBQUksR0FBRyxJQUFJLGlCQUFpQixRQUFRLFFBQVEsRUFBRSxHQUFHO0FBQ3hELGFBQU8sT0FBTyxNQUFNLGlCQUFpQixRQUFRLENBQUMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUFBLElBQ2hFO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFFQTtBQUNGOzs7QUN6SUEsSUFBTUMsV0FBVTs7O0FDQ2hCLFNBQVMsV0FBVyxTQUFTO0FBQzNCLFVBQVEsS0FBSyxLQUFLLFdBQVcsQ0FBQ0MsVUFBUyxZQUFZO0FBQ2pELFlBQVEsSUFBSSxNQUFNLFdBQVcsT0FBTztBQUNwQyxVQUFNLFFBQVEsS0FBSyxJQUFJO0FBQ3ZCLFVBQU0saUJBQWlCLFFBQVEsUUFBUSxTQUFTLE1BQU0sT0FBTztBQUM3RCxVQUFNLE9BQU8sZUFBZSxJQUFJLFFBQVEsUUFBUSxTQUFTLEVBQUU7QUFDM0QsV0FBT0EsU0FBUSxPQUFPLEVBQUUsS0FBSyxDQUFDLGFBQWE7QUFDekMsWUFBTSxZQUFZLFNBQVMsUUFBUSxxQkFBcUI7QUFDeEQsY0FBUSxJQUFJO0FBQUEsUUFDVixHQUFHLGVBQWUsTUFBTSxJQUFJLElBQUksTUFBTSxTQUFTLE1BQU0sWUFBWSxTQUFTLE9BQU8sS0FBSyxJQUFJLElBQUksS0FBSztBQUFBLE1BQ3JHO0FBQ0EsYUFBTztBQUFBLElBQ1QsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxVQUFVO0FBQ2xCLFlBQU0sWUFBWSxNQUFNLFVBQVUsUUFBUSxxQkFBcUIsS0FBSztBQUNwRSxjQUFRLElBQUk7QUFBQSxRQUNWLEdBQUcsZUFBZSxNQUFNLElBQUksSUFBSSxNQUFNLE1BQU0sTUFBTSxZQUFZLFNBQVMsT0FBTyxLQUFLLElBQUksSUFBSSxLQUFLO0FBQUEsTUFDbEc7QUFDQSxZQUFNO0FBQUEsSUFDUixDQUFDO0FBQUEsRUFDSCxDQUFDO0FBQ0g7QUFDQSxXQUFXLFVBQVVDOzs7QUNyQnJCLElBQUlDLFdBQVU7QUFHZCxTQUFTLCtCQUErQixVQUFVO0FBQ2hELE1BQUksQ0FBQyxTQUFTLE1BQU07QUFDbEIsV0FBTztBQUFBLE1BQ0wsR0FBRztBQUFBLE1BQ0gsTUFBTSxDQUFDO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFDQSxRQUFNLDhCQUE4QixpQkFBaUIsU0FBUyxRQUFRLG1CQUFtQixTQUFTLFNBQVMsRUFBRSxTQUFTLFNBQVM7QUFDL0gsTUFBSSxDQUFDLDJCQUE0QixRQUFPO0FBQ3hDLFFBQU0sb0JBQW9CLFNBQVMsS0FBSztBQUN4QyxRQUFNLHNCQUFzQixTQUFTLEtBQUs7QUFDMUMsUUFBTSxhQUFhLFNBQVMsS0FBSztBQUNqQyxRQUFNLGVBQWUsU0FBUyxLQUFLO0FBQ25DLFNBQU8sU0FBUyxLQUFLO0FBQ3JCLFNBQU8sU0FBUyxLQUFLO0FBQ3JCLFNBQU8sU0FBUyxLQUFLO0FBQ3JCLFNBQU8sU0FBUyxLQUFLO0FBQ3JCLFFBQU0sZUFBZSxPQUFPLEtBQUssU0FBUyxJQUFJLEVBQUUsQ0FBQztBQUNqRCxRQUFNLE9BQU8sU0FBUyxLQUFLLFlBQVk7QUFDdkMsV0FBUyxPQUFPO0FBQ2hCLE1BQUksT0FBTyxzQkFBc0IsYUFBYTtBQUM1QyxhQUFTLEtBQUsscUJBQXFCO0FBQUEsRUFDckM7QUFDQSxNQUFJLE9BQU8sd0JBQXdCLGFBQWE7QUFDOUMsYUFBUyxLQUFLLHVCQUF1QjtBQUFBLEVBQ3ZDO0FBQ0EsV0FBUyxLQUFLLGNBQWM7QUFDNUIsV0FBUyxLQUFLLGdCQUFnQjtBQUM5QixTQUFPO0FBQ1Q7QUFHQSxTQUFTLFNBQVMsU0FBUyxPQUFPLFlBQVk7QUFDNUMsUUFBTSxVQUFVLE9BQU8sVUFBVSxhQUFhLE1BQU0sU0FBUyxVQUFVLElBQUksUUFBUSxRQUFRLFNBQVMsT0FBTyxVQUFVO0FBQ3JILFFBQU0sZ0JBQWdCLE9BQU8sVUFBVSxhQUFhLFFBQVEsUUFBUTtBQUNwRSxRQUFNLFNBQVMsUUFBUTtBQUN2QixRQUFNLFVBQVUsUUFBUTtBQUN4QixNQUFJLE1BQU0sUUFBUTtBQUNsQixTQUFPO0FBQUEsSUFDTCxDQUFDLE9BQU8sYUFBYSxHQUFHLE9BQU87QUFBQSxNQUM3QixNQUFNLE9BQU87QUFDWCxZQUFJLENBQUMsSUFBSyxRQUFPLEVBQUUsTUFBTSxLQUFLO0FBQzlCLFlBQUk7QUFDRixnQkFBTSxXQUFXLE1BQU0sY0FBYyxFQUFFLFFBQVEsS0FBSyxRQUFRLENBQUM7QUFDN0QsZ0JBQU0scUJBQXFCLCtCQUErQixRQUFRO0FBQ2xFLGtCQUFRLG1CQUFtQixRQUFRLFFBQVEsSUFBSTtBQUFBLFlBQzdDO0FBQUEsVUFDRixLQUFLLENBQUMsR0FBRyxDQUFDO0FBQ1YsY0FBSSxDQUFDLE9BQU8sbUJBQW1CLG1CQUFtQixNQUFNO0FBQ3RELGtCQUFNLFlBQVksSUFBSSxJQUFJLG1CQUFtQixHQUFHO0FBQ2hELGtCQUFNLFNBQVMsVUFBVTtBQUN6QixrQkFBTSxPQUFPLFNBQVMsT0FBTyxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7QUFDbkQsa0JBQU0sV0FBVyxTQUFTLE9BQU8sSUFBSSxVQUFVLEtBQUssT0FBTyxFQUFFO0FBQzdELGdCQUFJLE9BQU8sV0FBVyxtQkFBbUIsS0FBSyxlQUFlO0FBQzNELHFCQUFPLElBQUksUUFBUSxPQUFPLE9BQU8sQ0FBQyxDQUFDO0FBQ25DLG9CQUFNLFVBQVUsU0FBUztBQUFBLFlBQzNCO0FBQUEsVUFDRjtBQUNBLGlCQUFPLEVBQUUsT0FBTyxtQkFBbUI7QUFBQSxRQUNyQyxTQUFTLE9BQU87QUFDZCxjQUFJLE1BQU0sV0FBVyxJQUFLLE9BQU07QUFDaEMsZ0JBQU07QUFDTixpQkFBTztBQUFBLFlBQ0wsT0FBTztBQUFBLGNBQ0wsUUFBUTtBQUFBLGNBQ1IsU0FBUyxDQUFDO0FBQUEsY0FDVixNQUFNLENBQUM7QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUdBLFNBQVMsU0FBUyxTQUFTLE9BQU8sWUFBWSxPQUFPO0FBQ25ELE1BQUksT0FBTyxlQUFlLFlBQVk7QUFDcEMsWUFBUTtBQUNSLGlCQUFhO0FBQUEsRUFDZjtBQUNBLFNBQU87QUFBQSxJQUNMO0FBQUEsSUFDQSxDQUFDO0FBQUEsSUFDRCxTQUFTLFNBQVMsT0FBTyxVQUFVLEVBQUUsT0FBTyxhQUFhLEVBQUU7QUFBQSxJQUMzRDtBQUFBLEVBQ0Y7QUFDRjtBQUNBLFNBQVMsT0FBTyxTQUFTLFNBQVMsV0FBVyxPQUFPO0FBQ2xELFNBQU8sVUFBVSxLQUFLLEVBQUUsS0FBSyxDQUFDLFdBQVc7QUFDdkMsUUFBSSxPQUFPLE1BQU07QUFDZixhQUFPO0FBQUEsSUFDVDtBQUNBLFFBQUksWUFBWTtBQUNoQixhQUFTLE9BQU87QUFDZCxrQkFBWTtBQUFBLElBQ2Q7QUFDQSxjQUFVLFFBQVE7QUFBQSxNQUNoQixRQUFRLE1BQU0sT0FBTyxPQUFPLElBQUksSUFBSSxPQUFPLE1BQU07QUFBQSxJQUNuRDtBQUNBLFFBQUksV0FBVztBQUNiLGFBQU87QUFBQSxJQUNUO0FBQ0EsV0FBTyxPQUFPLFNBQVMsU0FBUyxXQUFXLEtBQUs7QUFBQSxFQUNsRCxDQUFDO0FBQ0g7QUFHQSxJQUFJLHNCQUFzQixPQUFPLE9BQU8sVUFBVTtBQUFBLEVBQ2hEO0FBQ0YsQ0FBQztBQStSRCxTQUFTLGFBQWEsU0FBUztBQUM3QixTQUFPO0FBQUEsSUFDTCxVQUFVLE9BQU8sT0FBTyxTQUFTLEtBQUssTUFBTSxPQUFPLEdBQUc7QUFBQSxNQUNwRCxVQUFVLFNBQVMsS0FBSyxNQUFNLE9BQU87QUFBQSxJQUN2QyxDQUFDO0FBQUEsRUFDSDtBQUNGO0FBQ0EsYUFBYSxVQUFVQzs7O0FDeFpoQixJQUFNQyxXQUFVOzs7QUNDdkIsSUFBTSxZQUE2QztFQUNqRCxTQUFTO0lBQ1AseUNBQXlDO01BQ3ZDO0lBQ0Y7SUFDQSwwQ0FBMEM7TUFDeEM7SUFDRjtJQUNBLDJDQUEyQztNQUN6QztJQUNGO0lBQ0EsNEJBQTRCO01BQzFCO0lBQ0Y7SUFDQSw4QkFBOEI7TUFDNUI7SUFDRjtJQUNBLG9CQUFvQjtNQUNsQjtJQUNGO0lBQ0EsbUJBQW1CO01BQ2pCO0lBQ0Y7SUFDQSwyQkFBMkI7TUFDekI7SUFDRjtJQUNBLDBCQUEwQixDQUFDLHlDQUF5QztJQUNwRSxpQ0FBaUM7TUFDL0I7SUFDRjtJQUNBLHlCQUF5QixDQUFDLCtDQUErQztJQUN6RSwwQkFBMEI7TUFDeEI7SUFDRjtJQUNBLG1CQUFtQixDQUFDLG9DQUFvQztJQUN4RCwrQkFBK0I7TUFDN0I7SUFDRjtJQUNBLGdDQUFnQztNQUM5QjtJQUNGO0lBQ0EseUJBQXlCLENBQUMsK0NBQStDO0lBQ3pFLDBCQUEwQjtNQUN4QjtJQUNGO0lBQ0Esb0JBQW9CLENBQUMsOENBQThDO0lBQ25FLHdCQUF3QjtNQUN0QjtJQUNGO0lBQ0Esd0JBQXdCO01BQ3RCO0lBQ0Y7SUFDQSx5QkFBeUI7TUFDdkI7SUFDRjtJQUNBLGdCQUFnQjtNQUNkO0lBQ0Y7SUFDQSwwQkFBMEI7TUFDeEI7SUFDRjtJQUNBLGlDQUFpQztNQUMvQjtJQUNGO0lBQ0EseUJBQXlCO01BQ3ZCO0lBQ0Y7SUFDQSwyQkFBMkI7TUFDekI7SUFDRjtJQUNBLDBCQUEwQjtNQUN4QjtJQUNGO0lBQ0EsaUJBQWlCLENBQUMsa0RBQWtEO0lBQ3BFLG1CQUFtQixDQUFDLDZDQUE2QztJQUNqRSxrQkFBa0I7TUFDaEI7SUFDRjtJQUNBLG9CQUFvQjtNQUNsQjtJQUNGO0lBQ0EsK0JBQStCO01BQzdCO0lBQ0Y7SUFDQSxnQ0FBZ0M7TUFDOUI7SUFDRjtJQUNBLG1CQUFtQixDQUFDLG9EQUFvRDtJQUN4RSx1QkFBdUI7TUFDckI7SUFDRjtJQUNBLG9EQUFvRDtNQUNsRDtJQUNGO0lBQ0EsaUJBQWlCO01BQ2Y7SUFDRjtJQUNBLGtCQUFrQjtNQUNoQjtJQUNGO0lBQ0EsK0JBQStCO01BQzdCO0lBQ0Y7SUFDQSxnQ0FBZ0M7TUFDOUI7SUFDRjtJQUNBLHlCQUF5QjtNQUN2QjtJQUNGO0lBQ0EsbURBQW1EO01BQ2pEO0lBQ0Y7SUFDQSxnQkFBZ0I7TUFDZDtJQUNGO0lBQ0Esd0JBQXdCO01BQ3RCO0lBQ0Y7SUFDQSwrQkFBK0I7TUFDN0I7SUFDRjtJQUNBLGdDQUFnQztNQUM5QjtJQUNGO0lBQ0EscUJBQXFCLENBQUMsMENBQTBDO0lBQ2hFLHNCQUFzQixDQUFDLCtDQUErQztJQUN0RSxrQ0FBa0M7TUFDaEM7SUFDRjtJQUNBLDRCQUE0QixDQUFDLHFDQUFxQztJQUNsRSwrQkFBK0I7TUFDN0I7SUFDRjtJQUNBLDZCQUE2QjtNQUMzQjtJQUNGO0lBQ0EsYUFBYSxDQUFDLDJEQUEyRDtJQUN6RSxzQkFBc0I7TUFDcEI7SUFDRjtJQUNBLDZCQUE2QjtNQUMzQjtJQUNGO0lBQ0EsOEJBQThCO01BQzVCO0lBQ0Y7SUFDQSx5QkFBeUI7TUFDdkI7SUFDRjtJQUNBLHNCQUFzQjtNQUNwQjtJQUNGO0lBQ0Esd0JBQXdCO01BQ3RCO0lBQ0Y7SUFDQSx3REFBd0Q7TUFDdEQ7SUFDRjtJQUNBLHNEQUFzRDtNQUNwRDtJQUNGO0lBQ0EseUNBQXlDO01BQ3ZDO0lBQ0Y7SUFDQSx1Q0FBdUM7TUFDckM7SUFDRjtJQUNBLHVCQUF1QjtNQUNyQjtJQUNGO0lBQ0EseUNBQXlDO01BQ3ZDO0lBQ0Y7SUFDQSw4QkFBOEI7TUFDNUI7SUFDRjtJQUNBLG9DQUFvQztNQUNsQztJQUNGO0lBQ0EscUNBQXFDO01BQ25DO0lBQ0Y7SUFDQSxpQ0FBaUM7TUFDL0I7SUFDRjtJQUNBLHNCQUFzQixDQUFDLGlEQUFpRDtJQUN4RSxpQkFBaUIsQ0FBQyw0Q0FBNEM7SUFDOUQsY0FBYyxDQUFDLCtDQUErQztJQUM5RCxnQkFBZ0IsQ0FBQywwQ0FBMEM7SUFDM0QsNkJBQTZCO01BQzNCO0lBQ0Y7SUFDQSxvQkFBb0I7TUFDbEI7TUFDQSxDQUFDO01BQ0QsRUFBRSxTQUFTLENBQUMsV0FBVyx1Q0FBdUMsRUFBRTtJQUNsRTtJQUNBLGtCQUFrQixDQUFDLHNEQUFzRDtJQUN6RSxlQUFlLENBQUMseURBQXlEO0lBQ3pFLGlCQUFpQixDQUFDLG9EQUFvRDtJQUN0RSxrQkFBa0I7TUFDaEI7SUFDRjtJQUNBLDJCQUEyQixDQUFDLDZDQUE2QztJQUN6RSw0QkFBNEI7TUFDMUI7SUFDRjtJQUNBLGFBQWEsQ0FBQywyREFBMkQ7SUFDekUsK0JBQStCO01BQzdCO0lBQ0Y7SUFDQSxnQkFBZ0IsQ0FBQyxpREFBaUQ7SUFDbEUsdUJBQXVCO01BQ3JCO0lBQ0Y7SUFDQSxxQkFBcUI7TUFDbkI7SUFDRjtJQUNBLGtCQUFrQjtNQUNoQjtJQUNGO0lBQ0Esc0JBQXNCLENBQUMsNkNBQTZDO0lBQ3BFLCtCQUErQjtNQUM3QjtJQUNGO0lBQ0Esd0JBQXdCO01BQ3RCO0lBQ0Y7SUFDQSx3QkFBd0I7TUFDdEI7SUFDRjtJQUNBLDBCQUEwQjtNQUN4QjtJQUNGO0lBQ0Esc0NBQXNDO01BQ3BDO0lBQ0Y7SUFDQSx5QkFBeUIsQ0FBQyx3Q0FBd0M7SUFDbEUsd0JBQXdCO01BQ3RCO0lBQ0Y7SUFDQSwrQkFBK0I7TUFDN0I7SUFDRjtJQUNBLHFDQUFxQztNQUNuQztJQUNGO0lBQ0Esc0NBQXNDO01BQ3BDO0lBQ0Y7SUFDQSxnQkFBZ0IsQ0FBQyxpQ0FBaUM7SUFDbEQsa0JBQWtCLENBQUMsbUNBQW1DO0lBQ3RELDZCQUE2QjtNQUMzQjtJQUNGO0lBQ0EsK0JBQStCO01BQzdCO0lBQ0Y7SUFDQSxpQkFBaUIsQ0FBQywyQ0FBMkM7SUFDN0QsbUJBQW1CLENBQUMsNkNBQTZDO0lBQ2pFLG1CQUFtQixDQUFDLDZDQUE2QztJQUNqRSw4QkFBOEIsQ0FBQywyQ0FBMkM7SUFDMUUsK0JBQStCO01BQzdCO0lBQ0Y7SUFDQSwrQkFBK0I7TUFDN0I7SUFDRjtJQUNBLGlDQUFpQztNQUMvQjtJQUNGO0lBQ0EsMERBQTBEO01BQ3hEO0lBQ0Y7SUFDQSw2QkFBNkIsQ0FBQyxpQ0FBaUM7SUFDL0QsOEJBQThCLENBQUMsMkNBQTJDO0lBQzFFLDBCQUEwQjtNQUN4QjtJQUNGO0lBQ0Esa0JBQWtCO01BQ2hCO0lBQ0Y7SUFDQSx5QkFBeUIsQ0FBQyx3Q0FBd0M7SUFDbEUsd0JBQXdCO01BQ3RCO0lBQ0Y7SUFDQSxlQUFlLENBQUMsd0RBQXdEO0lBQ3hFLHlCQUF5QjtNQUN2QjtJQUNGO0lBQ0EsaURBQWlEO01BQy9DO0lBQ0Y7SUFDQSxrREFBa0Q7TUFDaEQ7SUFDRjtJQUNBLDZDQUE2QztNQUMzQztJQUNGO0lBQ0EsOENBQThDO01BQzVDO0lBQ0Y7SUFDQSxpQ0FBaUM7TUFDL0I7SUFDRjtJQUNBLG1DQUFtQztNQUNqQztJQUNGO0lBQ0EseUJBQXlCO01BQ3ZCO0lBQ0Y7SUFDQSxnQ0FBZ0M7TUFDOUI7SUFDRjtJQUNBLCtCQUErQjtNQUM3QjtJQUNGO0lBQ0EsNkJBQTZCO01BQzNCO0lBQ0Y7SUFDQSwwQ0FBMEM7TUFDeEM7SUFDRjtJQUNBLDJDQUEyQztNQUN6QztJQUNGO0lBQ0EsOEJBQThCO01BQzVCO0lBQ0Y7SUFDQSx3REFBd0Q7TUFDdEQ7SUFDRjtJQUNBLHNEQUFzRDtNQUNwRDtJQUNGO0lBQ0EseUNBQXlDO01BQ3ZDO0lBQ0Y7SUFDQSx1Q0FBdUM7TUFDckM7SUFDRjtJQUNBLDhCQUE4QjtNQUM1QjtJQUNGO0lBQ0EsZ0NBQWdDO01BQzlCO0lBQ0Y7SUFDQSx5REFBeUQ7TUFDdkQ7SUFDRjtJQUNBLCtCQUErQjtNQUM3QjtJQUNGO0lBQ0EsMkJBQTJCO01BQ3pCO0lBQ0Y7SUFDQSwwQkFBMEI7TUFDeEI7SUFDRjtJQUNBLG1CQUFtQixDQUFDLDRDQUE0QztJQUNoRSxvQkFBb0I7TUFDbEI7SUFDRjtFQUNGO0VBQ0EsVUFBVTtJQUNSLHVDQUF1QyxDQUFDLGtDQUFrQztJQUMxRSx3QkFBd0IsQ0FBQywyQ0FBMkM7SUFDcEUsMEJBQTBCO01BQ3hCO0lBQ0Y7SUFDQSxVQUFVLENBQUMsWUFBWTtJQUN2QixxQkFBcUIsQ0FBQyx3Q0FBd0M7SUFDOUQsV0FBVyxDQUFDLHdDQUF3QztJQUNwRCwyQ0FBMkM7TUFDekM7SUFDRjtJQUNBLGdDQUFnQyxDQUFDLDhCQUE4QjtJQUMvRCx1Q0FBdUMsQ0FBQyxvQkFBb0I7SUFDNUQsbUNBQW1DO01BQ2pDO0lBQ0Y7SUFDQSxrQkFBa0IsQ0FBQyxhQUFhO0lBQ2hDLGdDQUFnQyxDQUFDLHFDQUFxQztJQUN0RSx5QkFBeUIsQ0FBQyxxQ0FBcUM7SUFDL0QscUJBQXFCLENBQUMsd0JBQXdCO0lBQzlDLDJCQUEyQixDQUFDLHVDQUF1QztJQUNuRSxpQ0FBaUM7TUFDL0I7SUFDRjtJQUNBLGdCQUFnQixDQUFDLGtDQUFrQztJQUNuRCwyQ0FBMkM7TUFDekM7SUFDRjtJQUNBLHFDQUFxQyxDQUFDLG1CQUFtQjtJQUN6RCx3QkFBd0IsQ0FBQywrQkFBK0I7SUFDeEQsd0JBQXdCLENBQUMscUNBQXFDO0lBQzlELHVCQUF1QixDQUFDLHNDQUFzQztJQUM5RCxzQ0FBc0MsQ0FBQyx5QkFBeUI7SUFDaEUscUJBQXFCLENBQUMsdUNBQXVDO0lBQzdELHlCQUF5QixDQUFDLG9CQUFvQjtJQUM5Qyw2QkFBNkIsQ0FBQyx5Q0FBeUM7SUFDdkUsa0JBQWtCLENBQUMsMkNBQTJDO0lBQzlELGtCQUFrQixDQUFDLDBDQUEwQztJQUM3RCxxQkFBcUIsQ0FBQyx3Q0FBd0M7SUFDOUQsdUJBQXVCO01BQ3JCO0lBQ0Y7SUFDQSw4QkFBOEIsQ0FBQyxrQ0FBa0M7SUFDakUsZ0NBQWdDLENBQUMscUNBQXFDO0VBQ3hFO0VBQ0EsTUFBTTtJQUNKLHVCQUF1QjtNQUNyQjtNQUNBLENBQUM7TUFDRCxFQUFFLFNBQVMsQ0FBQyxRQUFRLDJDQUEyQyxFQUFFO0lBQ25FO0lBQ0EsMkNBQTJDO01BQ3pDO0lBQ0Y7SUFDQSxZQUFZLENBQUMsc0NBQXNDO0lBQ25ELG9CQUFvQixDQUFDLHdDQUF3QztJQUM3RCwrQkFBK0I7TUFDN0I7SUFDRjtJQUNBLHFCQUFxQixDQUFDLHdDQUF3QztJQUM5RCxvQkFBb0IsQ0FBQyw2Q0FBNkM7SUFDbEUsYUFBYSxDQUFDLHdDQUF3QztJQUN0RCxrQkFBa0IsQ0FBQyxVQUFVO0lBQzdCLFdBQVcsQ0FBQyxzQkFBc0I7SUFDbEMsaUJBQWlCLENBQUMsMENBQTBDO0lBQzVELG9CQUFvQixDQUFDLDhCQUE4QjtJQUNuRCxxQkFBcUIsQ0FBQyx3Q0FBd0M7SUFDOUQsK0JBQStCO01BQzdCO0lBQ0Y7SUFDQSxzQ0FBc0M7TUFDcEM7SUFDRjtJQUNBLHFCQUFxQixDQUFDLG9DQUFvQztJQUMxRCx3QkFBd0IsQ0FBQyxzQkFBc0I7SUFDL0Msb0JBQW9CLENBQUMsd0NBQXdDO0lBQzdELHFCQUFxQixDQUFDLG1EQUFtRDtJQUN6RSw0QkFBNEI7TUFDMUI7SUFDRjtJQUNBLDJDQUEyQztNQUN6QztJQUNGO0lBQ0EsNkNBQTZDO01BQzNDO0lBQ0Y7SUFDQSxtQkFBbUIsQ0FBQyx3QkFBd0I7SUFDNUMsdUNBQXVDLENBQUMseUJBQXlCO0lBQ2pFLFdBQVcsQ0FBQyxnQ0FBZ0M7SUFDNUMsa0JBQWtCLENBQUMsd0NBQXdDO0lBQzNELG1DQUFtQyxDQUFDLGdDQUFnQztJQUNwRSx1Q0FBdUMsQ0FBQyxpQ0FBaUM7SUFDekUsOENBQThDO01BQzVDO0lBQ0Y7SUFDQSx1QkFBdUIsQ0FBQywwQkFBMEI7SUFDbEQsMEJBQTBCO01BQ3hCO0lBQ0Y7SUFDQSw0QkFBNEI7TUFDMUI7TUFDQSxDQUFDO01BQ0QsRUFBRSxTQUFTLENBQUMsUUFBUSxnREFBZ0QsRUFBRTtJQUN4RTtJQUNBLGdEQUFnRDtNQUM5QztJQUNGO0lBQ0EsWUFBWSxDQUFDLHVDQUF1QztJQUNwRCwrQkFBK0IsQ0FBQyw0QkFBNEI7SUFDNUQsWUFBWSxDQUFDLDZDQUE2QztJQUMxRCxxQkFBcUIsQ0FBQyxvREFBb0Q7SUFDMUUsdUJBQXVCO01BQ3JCO0lBQ0Y7SUFDQSwyQkFBMkIsQ0FBQyx3QkFBd0I7RUFDdEQ7RUFDQSxTQUFTO0lBQ1AsNEJBQTRCLENBQUMsMENBQTBDO0lBQ3ZFLDZCQUE2QjtNQUMzQjtJQUNGO0lBQ0EsOENBQThDO01BQzVDO0lBQ0Y7SUFDQSwrQ0FBK0M7TUFDN0M7SUFDRjtJQUNBLGdDQUFnQztNQUM5QjtJQUNGO0lBQ0EsaUNBQWlDO01BQy9CO0lBQ0Y7SUFDQSw2QkFBNkIsQ0FBQywyQ0FBMkM7SUFDekUsOEJBQThCO01BQzVCO0lBQ0Y7SUFDQSw0QkFBNEI7TUFDMUI7SUFDRjtJQUNBLDZCQUE2QjtNQUMzQjtJQUNGO0VBQ0Y7RUFDQSxXQUFXO0lBQ1QsZ0JBQWdCLENBQUMsNEJBQTRCO0lBQzdDLGdCQUFnQixDQUFDLGdEQUFnRDtJQUNqRSxvQkFBb0IsQ0FBQyw2Q0FBNkM7SUFDbEUsa0JBQWtCLENBQUMsMkJBQTJCO0lBQzlDLGdCQUFnQixDQUFDLCtDQUErQztFQUNsRTtFQUNBLFFBQVE7SUFDTixRQUFRLENBQUMsdUNBQXVDO0lBQ2hELGFBQWEsQ0FBQyx5Q0FBeUM7SUFDdkQsS0FBSyxDQUFDLHFEQUFxRDtJQUMzRCxVQUFVLENBQUMseURBQXlEO0lBQ3BFLGlCQUFpQjtNQUNmO0lBQ0Y7SUFDQSxZQUFZLENBQUMsb0RBQW9EO0lBQ2pFLGNBQWM7TUFDWjtJQUNGO0lBQ0Esa0JBQWtCLENBQUMsc0RBQXNEO0lBQ3pFLGNBQWM7TUFDWjtJQUNGO0lBQ0EsZ0JBQWdCO01BQ2Q7SUFDRjtJQUNBLHNCQUFzQjtNQUNwQjtJQUNGO0lBQ0EsUUFBUSxDQUFDLHVEQUF1RDtFQUNsRTtFQUNBLGNBQWM7SUFDWixlQUFlO01BQ2I7SUFDRjtJQUNBLGVBQWU7TUFDYjtJQUNGO0lBQ0EsdUJBQXVCO01BQ3JCO0lBQ0Y7SUFDQSxnQkFBZ0I7TUFDZDtJQUNGO0lBQ0Esc0JBQXNCO01BQ3BCO0lBQ0Y7SUFDQSxVQUFVO01BQ1I7TUFDQSxDQUFDO01BQ0QsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLGVBQWUsRUFBRTtJQUNwRDtJQUNBLGFBQWE7TUFDWDtJQUNGO0lBQ0EsWUFBWTtNQUNWO0lBQ0Y7SUFDQSxtQkFBbUI7TUFDakI7SUFDRjtJQUNBLGlCQUFpQixDQUFDLHVEQUF1RDtJQUN6RSxVQUFVLENBQUMsMkRBQTJEO0lBQ3RFLG9CQUFvQjtNQUNsQjtJQUNGO0lBQ0EsNEJBQTRCO01BQzFCO0lBQ0Y7SUFDQSxvQkFBb0I7TUFDbEI7SUFDRjtJQUNBLGtCQUFrQixDQUFDLHNDQUFzQztJQUN6RCxtQkFBbUIsQ0FBQyxnREFBZ0Q7SUFDcEUscUJBQXFCO01BQ25CO01BQ0EsQ0FBQztNQUNELEVBQUUsU0FBUyxDQUFDLGdCQUFnQixvQkFBb0IsRUFBRTtJQUNwRDtJQUNBLHFCQUFxQjtNQUNuQjtJQUNGO0lBQ0Esb0JBQW9CLENBQUMsa0RBQWtEO0lBQ3ZFLGFBQWE7TUFDWDtJQUNGO0lBQ0Esb0JBQW9CO01BQ2xCO0lBQ0Y7SUFDQSxhQUFhLENBQUMsaURBQWlEO0VBQ2pFO0VBQ0EsY0FBYztJQUNaLHFCQUFxQjtNQUNuQjtJQUNGO0lBQ0EsK0JBQStCO01BQzdCO0lBQ0Y7SUFDQSxxQkFBcUIsQ0FBQywrQ0FBK0M7SUFDckUsa0NBQWtDO01BQ2hDO0lBQ0Y7SUFDQSxxQkFBcUI7TUFDbkI7SUFDRjtJQUNBLGtDQUFrQztNQUNoQztJQUNGO0lBQ0EscUJBQXFCO01BQ25CO0lBQ0Y7SUFDQSxrQkFBa0I7TUFDaEI7SUFDRjtJQUNBLCtCQUErQjtNQUM3QjtJQUNGO0lBQ0EsZ0NBQWdDO01BQzlCO0lBQ0Y7SUFDQSx5QkFBeUIsQ0FBQyw4Q0FBOEM7SUFDeEUsMEJBQTBCO01BQ3hCO0lBQ0Y7SUFDQSx1Q0FBdUM7TUFDckM7SUFDRjtJQUNBLGlDQUFpQztNQUMvQjtJQUNGO0lBQ0EsMkNBQTJDO01BQ3pDO0lBQ0Y7SUFDQSxxQ0FBcUM7TUFDbkM7SUFDRjtJQUNBLDJCQUEyQjtNQUN6QjtJQUNGO0lBQ0Esd0NBQXdDO01BQ3RDO0lBQ0Y7SUFDQSxxQkFBcUI7TUFDbkI7SUFDRjtJQUNBLCtCQUErQjtNQUM3QjtJQUNGO0VBQ0Y7RUFDQSxnQkFBZ0I7SUFDZCxzQkFBc0IsQ0FBQyx1QkFBdUI7SUFDOUMsZ0JBQWdCLENBQUMsNkJBQTZCO0VBQ2hEO0VBQ0EsWUFBWTtJQUNWLDRDQUE0QztNQUMxQztJQUNGO0lBQ0EsNEJBQTRCO01BQzFCO0lBQ0Y7SUFDQSxpQ0FBaUM7TUFDL0I7SUFDRjtJQUNBLHVDQUF1QztNQUNyQztJQUNGO0lBQ0EsNEJBQTRCLENBQUMsdUJBQXVCO0lBQ3BELHlCQUF5QjtNQUN2QjtJQUNGO0lBQ0EsMEJBQTBCO01BQ3hCO0lBQ0Y7SUFDQSwwQ0FBMEM7TUFDeEM7SUFDRjtJQUNBLGtDQUFrQztNQUNoQztJQUNGO0lBQ0Esb0NBQW9DO01BQ2xDO0lBQ0Y7SUFDQSw0QkFBNEIsQ0FBQywwQ0FBMEM7SUFDdkUsd0JBQXdCO01BQ3RCO0lBQ0Y7SUFDQSxpQkFBaUIsQ0FBQyxxREFBcUQ7SUFDdkUsa0JBQWtCO01BQ2hCO0lBQ0Y7SUFDQSxrQ0FBa0M7TUFDaEM7SUFDRjtJQUNBLDRCQUE0QjtNQUMxQjtJQUNGO0lBQ0EsMkJBQTJCO01BQ3pCO0lBQ0Y7SUFDQSxzQ0FBc0M7TUFDcEM7SUFDRjtJQUNBLHlCQUF5QixDQUFDLHVDQUF1QztJQUNqRSxpQkFBaUIsQ0FBQywrQ0FBK0M7SUFDakUsY0FBYyxDQUFDLGtEQUFrRDtJQUNqRSxrQ0FBa0M7TUFDaEM7SUFDRjtJQUNBLGtCQUFrQjtNQUNoQjtJQUNGO0lBQ0EsZUFBZTtNQUNiO0lBQ0Y7SUFDQSwrQkFBK0I7TUFDN0I7SUFDRjtJQUNBLG1EQUFtRDtNQUNqRDtJQUNGO0lBQ0EsMEJBQTBCLENBQUMsc0JBQXNCO0lBQ2pELG9CQUFvQjtNQUNsQjtNQUNBLENBQUM7TUFDRCxFQUFFLG1CQUFtQixFQUFFLFFBQVEsTUFBTSxFQUFFO0lBQ3pDO0lBQ0Esc0NBQXNDO01BQ3BDO0lBQ0Y7SUFDQSxnQkFBZ0IsQ0FBQyxvQ0FBb0M7SUFDckQsaUJBQWlCLENBQUMsOENBQThDO0lBQ2hFLCtDQUErQztNQUM3QztJQUNGO0lBQ0EsaUNBQWlDLENBQUMsOEJBQThCO0lBQ2hFLCtCQUErQjtNQUM3QjtJQUNGO0lBQ0EsdUNBQXVDO01BQ3JDO0lBQ0Y7SUFDQSw2QkFBNkI7TUFDM0I7SUFDRjtJQUNBLCtDQUErQztNQUM3QztJQUNGO0lBQ0EsaUNBQWlDO01BQy9CO0lBQ0Y7SUFDQSxrQ0FBa0M7TUFDaEM7SUFDRjtJQUNBLDhDQUE4QztNQUM1QztJQUNGO0lBQ0EsOEJBQThCO01BQzVCO0lBQ0Y7SUFDQSwyQkFBMkIsQ0FBQyw4Q0FBOEM7SUFDMUUsMEJBQTBCLENBQUMsNkNBQTZDO0lBQ3hFLG9CQUFvQjtNQUNsQjtJQUNGO0lBQ0EsNEJBQTRCLENBQUMseUNBQXlDO0VBQ3hFO0VBQ0EsU0FBUztJQUNQLHlCQUF5QjtNQUN2QjtJQUNGO0lBQ0EseUJBQXlCO01BQ3ZCO0lBQ0Y7SUFDQSxxQ0FBcUM7TUFDbkM7SUFDRjtJQUNBLHFDQUFxQztNQUNuQztJQUNGO0lBQ0EsK0JBQStCLENBQUMsaUNBQWlDO0lBQ2pFLHVCQUF1QixDQUFDLGtEQUFrRDtJQUMxRSwrQkFBK0IsQ0FBQyxpQ0FBaUM7SUFDakUsOEJBQThCO01BQzVCO0lBQ0Y7SUFDQSxrQkFBa0IsQ0FBQyx1Q0FBdUM7RUFDNUQ7RUFDQSxhQUFhLEVBQUUsUUFBUSxDQUFDLDBCQUEwQixFQUFFO0VBQ3BELFlBQVk7SUFDViw0QkFBNEI7TUFDMUI7SUFDRjtJQUNBLHlCQUF5QjtNQUN2QjtJQUNGO0lBQ0EsMEJBQTBCO01BQ3hCO0lBQ0Y7SUFDQSxpQkFBaUIsQ0FBQyxxREFBcUQ7SUFDdkUsa0JBQWtCO01BQ2hCO0lBQ0Y7SUFDQSxVQUFVLENBQUMsNERBQTREO0lBQ3ZFLGlCQUFpQixDQUFDLCtDQUErQztJQUNqRSxjQUFjLENBQUMsa0RBQWtEO0lBQ2pFLGtCQUFrQjtNQUNoQjtJQUNGO0lBQ0EsZUFBZTtNQUNiO0lBQ0Y7SUFDQSx5QkFBeUI7TUFDdkI7SUFDRjtJQUNBLGtCQUFrQixDQUFDLG1DQUFtQztJQUN0RCxtQkFBbUIsQ0FBQyw2Q0FBNkM7SUFDakUsZ0JBQWdCLENBQUMsb0NBQW9DO0lBQ3JELGlCQUFpQixDQUFDLDhDQUE4QztJQUNoRSwrQkFBK0I7TUFDN0I7SUFDRjtJQUNBLGlDQUFpQztNQUMvQjtJQUNGO0lBQ0Esd0JBQXdCO01BQ3RCO0lBQ0Y7SUFDQSxpQ0FBaUM7TUFDL0I7SUFDRjtJQUNBLDhCQUE4QjtNQUM1QjtJQUNGO0lBQ0EsYUFBYTtNQUNYO0lBQ0Y7SUFDQSw4QkFBOEI7TUFDNUI7SUFDRjtFQUNGO0VBQ0EsaUJBQWlCO0lBQ2YsMEJBQTBCO01BQ3hCO0lBQ0Y7SUFDQSxXQUFXO01BQ1Q7SUFDRjtJQUNBLFlBQVksQ0FBQyxpREFBaUQ7RUFDaEU7RUFDQSxRQUFRLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRTtFQUMvQiwyQkFBMkI7SUFDekIsS0FBSztNQUNIO0lBQ0Y7SUFDQSxTQUFTO01BQ1A7SUFDRjtJQUNBLFlBQVk7TUFDVjtJQUNGO0lBQ0EsS0FBSztNQUNIO0lBQ0Y7SUFDQSxNQUFNLENBQUMsbUVBQW1FO0lBQzFFLFFBQVE7TUFDTjtJQUNGO0VBQ0Y7RUFDQSw2QkFBNkI7SUFDM0IsS0FBSztNQUNIO0lBQ0Y7SUFDQSxTQUFTO01BQ1A7SUFDRjtJQUNBLFlBQVk7TUFDVjtJQUNGO0lBQ0EsUUFBUTtNQUNOO0lBQ0Y7SUFDQSxlQUFlO01BQ2I7SUFDRjtJQUNBLGdCQUFnQjtNQUNkO0lBQ0Y7RUFDRjtFQUNBLGlCQUFpQjtJQUNmLFFBQVEsQ0FBQyxzQ0FBc0M7SUFDL0MsUUFBUSxDQUFDLG9EQUFvRDtJQUM3RCxLQUFLLENBQUMsaURBQWlEO0lBQ3ZELE1BQU0sQ0FBQyxxQ0FBcUM7SUFDNUMsUUFBUSxDQUFDLG1EQUFtRDtFQUM5RDtFQUNBLE9BQU87SUFDTCxnQkFBZ0IsQ0FBQywyQkFBMkI7SUFDNUMsUUFBUSxDQUFDLGFBQWE7SUFDdEIsZUFBZSxDQUFDLGdDQUFnQztJQUNoRCxRQUFRLENBQUMseUJBQXlCO0lBQ2xDLGVBQWUsQ0FBQywrQ0FBK0M7SUFDL0QsTUFBTSxDQUFDLDZCQUE2QjtJQUNwQyxLQUFLLENBQUMsc0JBQXNCO0lBQzVCLFlBQVksQ0FBQyw0Q0FBNEM7SUFDekQsYUFBYSxDQUFDLDRCQUE0QjtJQUMxQyxNQUFNLENBQUMsWUFBWTtJQUNuQixjQUFjLENBQUMsK0JBQStCO0lBQzlDLGFBQWEsQ0FBQyw4QkFBOEI7SUFDNUMsYUFBYSxDQUFDLDZCQUE2QjtJQUMzQyxXQUFXLENBQUMsNEJBQTRCO0lBQ3hDLFlBQVksQ0FBQyxtQkFBbUI7SUFDaEMsYUFBYSxDQUFDLG9CQUFvQjtJQUNsQyxNQUFNLENBQUMsMkJBQTJCO0lBQ2xDLFFBQVEsQ0FBQyw4QkFBOEI7SUFDdkMsUUFBUSxDQUFDLHdCQUF3QjtJQUNqQyxlQUFlLENBQUMsOENBQThDO0VBQ2hFO0VBQ0EsS0FBSztJQUNILFlBQVksQ0FBQyxzQ0FBc0M7SUFDbkQsY0FBYyxDQUFDLHdDQUF3QztJQUN2RCxXQUFXLENBQUMscUNBQXFDO0lBQ2pELFdBQVcsQ0FBQyxxQ0FBcUM7SUFDakQsWUFBWSxDQUFDLHNDQUFzQztJQUNuRCxXQUFXLENBQUMsNkNBQTZDO0lBQ3pELFNBQVMsQ0FBQyxnREFBZ0Q7SUFDMUQsV0FBVyxDQUFDLG9EQUFvRDtJQUNoRSxRQUFRLENBQUMseUNBQXlDO0lBQ2xELFFBQVEsQ0FBQyw4Q0FBOEM7SUFDdkQsU0FBUyxDQUFDLGdEQUFnRDtJQUMxRCxrQkFBa0IsQ0FBQyxtREFBbUQ7SUFDdEUsV0FBVyxDQUFDLDRDQUE0QztFQUMxRDtFQUNBLFdBQVc7SUFDVCxpQkFBaUIsQ0FBQywwQkFBMEI7SUFDNUMsYUFBYSxDQUFDLGlDQUFpQztFQUNqRDtFQUNBLGVBQWU7SUFDYixrQ0FBa0M7TUFDaEM7SUFDRjtJQUNBLG1DQUFtQztNQUNqQztJQUNGO0lBQ0EsK0JBQStCO01BQzdCO0lBQ0Y7SUFDQSwwQkFBMEI7TUFDeEI7SUFDRjtJQUNBLGlDQUFpQztNQUMvQjtJQUNGO0lBQ0Esa0NBQWtDO01BQ2hDO0lBQ0Y7RUFDRjtFQUNBLGNBQWM7SUFDWixxQ0FBcUMsQ0FBQyw4QkFBOEI7SUFDcEUsdUJBQXVCLENBQUMsb0NBQW9DO0lBQzVELHdCQUF3QixDQUFDLDhDQUE4QztJQUN2RSxtQ0FBbUM7TUFDakM7TUFDQSxDQUFDO01BQ0QsRUFBRSxTQUFTLENBQUMsZ0JBQWdCLHFDQUFxQyxFQUFFO0lBQ3JFO0lBQ0Esd0NBQXdDLENBQUMsaUNBQWlDO0lBQzFFLDBCQUEwQixDQUFDLHVDQUF1QztJQUNsRSwyQkFBMkI7TUFDekI7SUFDRjtJQUNBLHNDQUFzQztNQUNwQztNQUNBLENBQUM7TUFDRCxFQUFFLFNBQVMsQ0FBQyxnQkFBZ0Isd0NBQXdDLEVBQUU7SUFDeEU7SUFDQSxxQ0FBcUMsQ0FBQyw4QkFBOEI7SUFDcEUsdUJBQXVCLENBQUMsb0NBQW9DO0lBQzVELHdCQUF3QixDQUFDLDhDQUE4QztJQUN2RSxtQ0FBbUM7TUFDakM7TUFDQSxDQUFDO01BQ0QsRUFBRSxTQUFTLENBQUMsZ0JBQWdCLHFDQUFxQyxFQUFFO0lBQ3JFO0VBQ0Y7RUFDQSxRQUFRO0lBQ04sY0FBYztNQUNaO0lBQ0Y7SUFDQSx3QkFBd0I7TUFDdEI7SUFDRjtJQUNBLFdBQVcsQ0FBQyx5REFBeUQ7SUFDckUsYUFBYTtNQUNYO0lBQ0Y7SUFDQSx3QkFBd0IsQ0FBQyxnREFBZ0Q7SUFDekUsK0JBQStCO01BQzdCO0lBQ0Y7SUFDQSxRQUFRLENBQUMsbUNBQW1DO0lBQzVDLGVBQWU7TUFDYjtJQUNGO0lBQ0EsYUFBYSxDQUFDLG1DQUFtQztJQUNqRCxpQkFBaUIsQ0FBQyx1Q0FBdUM7SUFDekQsZUFBZTtNQUNiO0lBQ0Y7SUFDQSxhQUFhLENBQUMsNENBQTRDO0lBQzFELGlCQUFpQjtNQUNmO0lBQ0Y7SUFDQSxLQUFLLENBQUMsaURBQWlEO0lBQ3ZELFlBQVksQ0FBQyx3REFBd0Q7SUFDckUsVUFBVSxDQUFDLG9EQUFvRDtJQUMvRCxVQUFVLENBQUMseUNBQXlDO0lBQ3BELGNBQWMsQ0FBQyx5REFBeUQ7SUFDeEUsV0FBVyxDQUFDLHdEQUF3RDtJQUNwRSxNQUFNLENBQUMsYUFBYTtJQUNwQixlQUFlLENBQUMscUNBQXFDO0lBQ3JELGNBQWMsQ0FBQywwREFBMEQ7SUFDekUscUJBQXFCLENBQUMsMkNBQTJDO0lBQ2pFLDJCQUEyQjtNQUN6QjtJQUNGO0lBQ0EsMEJBQTBCO01BQ3hCO0lBQ0Y7SUFDQSxZQUFZLENBQUMsd0RBQXdEO0lBQ3JFLG1CQUFtQixDQUFDLHlDQUF5QztJQUM3RCx1QkFBdUI7TUFDckI7SUFDRjtJQUNBLDBCQUEwQixDQUFDLGtCQUFrQjtJQUM3QyxZQUFZLENBQUMsd0JBQXdCO0lBQ3JDLGFBQWEsQ0FBQyxrQ0FBa0M7SUFDaEQsd0JBQXdCO01BQ3RCO0lBQ0Y7SUFDQSxtQkFBbUIsQ0FBQyxrQ0FBa0M7SUFDdEQsbUJBQW1CO01BQ2pCO0lBQ0Y7SUFDQSxnQkFBZ0IsQ0FBQyxzQ0FBc0M7SUFDdkQsZUFBZTtNQUNiO0lBQ0Y7SUFDQSxNQUFNLENBQUMsc0RBQXNEO0lBQzdELGlCQUFpQjtNQUNmO0lBQ0Y7SUFDQSxpQkFBaUI7TUFDZjtJQUNGO0lBQ0EsMkJBQTJCO01BQ3pCO0lBQ0Y7SUFDQSxhQUFhO01BQ1g7SUFDRjtJQUNBLGdCQUFnQjtNQUNkO0lBQ0Y7SUFDQSxzQkFBc0I7TUFDcEI7SUFDRjtJQUNBLFdBQVcsQ0FBQyx3REFBd0Q7SUFDcEUsUUFBUSxDQUFDLHlEQUF5RDtJQUNsRSxRQUFRLENBQUMsbURBQW1EO0lBQzVELGVBQWUsQ0FBQywwREFBMEQ7SUFDMUUsYUFBYSxDQUFDLDJDQUEyQztJQUN6RCxpQkFBaUI7TUFDZjtJQUNGO0VBQ0Y7RUFDQSxVQUFVO0lBQ1IsS0FBSyxDQUFDLHlCQUF5QjtJQUMvQixvQkFBb0IsQ0FBQyxlQUFlO0lBQ3BDLFlBQVksQ0FBQyxtQ0FBbUM7RUFDbEQ7RUFDQSxVQUFVO0lBQ1IsUUFBUSxDQUFDLGdCQUFnQjtJQUN6QixXQUFXO01BQ1Q7TUFDQSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsNEJBQTRCLEVBQUU7SUFDN0Q7RUFDRjtFQUNBLE1BQU07SUFDSixLQUFLLENBQUMsV0FBVztJQUNqQixnQkFBZ0IsQ0FBQyxlQUFlO0lBQ2hDLFlBQVksQ0FBQyxjQUFjO0lBQzNCLFFBQVEsQ0FBQyxVQUFVO0lBQ25CLE1BQU0sQ0FBQyxPQUFPO0VBQ2hCO0VBQ0EsWUFBWTtJQUNWLG1DQUFtQztNQUNqQztJQUNGO0lBQ0EscUJBQXFCO01BQ25CO0lBQ0Y7SUFDQSx1QkFBdUI7TUFDckI7SUFDRjtJQUNBLGdDQUFnQztNQUM5QjtJQUNGO0lBQ0EsK0JBQStCLENBQUMscUNBQXFDO0lBQ3JFLGlCQUFpQixDQUFDLDJDQUEyQztJQUM3RCwwQkFBMEIsQ0FBQyxzQkFBc0I7SUFDakQsWUFBWSxDQUFDLDRCQUE0QjtJQUN6QywrQkFBK0I7TUFDN0I7SUFDRjtJQUNBLGlCQUFpQixDQUFDLHdEQUF3RDtJQUMxRSxrQkFBa0I7TUFDaEI7TUFDQSxDQUFDO01BQ0QsRUFBRSxTQUFTLENBQUMsY0FBYywrQkFBK0IsRUFBRTtJQUM3RDtJQUNBLDJCQUEyQixDQUFDLHVCQUF1QjtJQUNuRCxhQUFhLENBQUMsNkJBQTZCO0lBQzNDLGdDQUFnQztNQUM5QjtJQUNGO0lBQ0Esa0JBQWtCO01BQ2hCO0lBQ0Y7RUFDRjtFQUNBLE1BQU07SUFDSixnQ0FBZ0M7TUFDOUI7SUFDRjtJQUNBLG1DQUFtQztNQUNqQztJQUNGO0VBQ0Y7RUFDQSxNQUFNO0lBQ0osd0JBQXdCO01BQ3RCO01BQ0EsQ0FBQztNQUNEO1FBQ0UsWUFDRTtNQUNKO0lBQ0Y7SUFDQSxxQkFBcUI7TUFDbkI7SUFDRjtJQUNBLHFCQUFxQjtNQUNuQjtJQUNGO0lBQ0EsV0FBVyxDQUFDLG1DQUFtQztJQUMvQyxrQkFBa0IsQ0FBQyxnREFBZ0Q7SUFDbkUsa0JBQWtCLENBQUMsbUNBQW1DO0lBQ3RELHdCQUF3QixDQUFDLG9DQUFvQztJQUM3RCw4QkFBOEIsQ0FBQywyQ0FBMkM7SUFDMUUsb0NBQW9DO01BQ2xDO0lBQ0Y7SUFDQSw2QkFBNkI7TUFDM0I7SUFDRjtJQUNBLGtCQUFrQixDQUFDLDhCQUE4QjtJQUNqRCxpQkFBaUIsQ0FBQyw4QkFBOEI7SUFDaEQsZUFBZSxDQUFDLHdCQUF3QjtJQUN4Qyx5REFBeUQ7TUFDdkQ7SUFDRjtJQUNBLDhDQUE4QztNQUM1QztJQUNGO0lBQ0EsOERBQThEO01BQzVEO0lBQ0Y7SUFDQSwrREFBK0Q7TUFDN0Q7SUFDRjtJQUNBLDBEQUEwRDtNQUN4RDtJQUNGO0lBQ0Esc0RBQXNEO01BQ3BEO0lBQ0Y7SUFDQSxtREFBbUQ7TUFDakQ7SUFDRjtJQUNBLG9EQUFvRDtNQUNsRDtJQUNGO0lBQ0EsK0NBQStDO01BQzdDO0lBQ0Y7SUFDQSxRQUFRLENBQUMsb0JBQW9CO0lBQzdCLHdCQUF3QixDQUFDLDhDQUE4QztJQUN2RSx3QkFBd0I7TUFDdEI7SUFDRjtJQUNBLG1DQUFtQztNQUNqQztJQUNGO0lBQ0EsaUJBQWlCLENBQUMsZ0RBQWdEO0lBQ2xFLGVBQWUsQ0FBQyxvQ0FBb0M7SUFDcEQsd0RBQXdEO01BQ3REO0lBQ0Y7SUFDQSx1REFBdUQ7TUFDckQ7SUFDRjtJQUNBLEtBQUssQ0FBQyxpQkFBaUI7SUFDdkIsOEJBQThCO01BQzVCO0lBQ0Y7SUFDQSwwQ0FBMEM7TUFDeEM7SUFDRjtJQUNBLG1DQUFtQyxDQUFDLGtDQUFrQztJQUN0RSxzQkFBc0IsQ0FBQyx3Q0FBd0M7SUFDL0QsWUFBWSxDQUFDLDhDQUE4QztJQUMzRCxzQkFBc0IsQ0FBQywrQ0FBK0M7SUFDdEUsc0JBQXNCO01BQ3BCO0lBQ0Y7SUFDQSxZQUFZLENBQUMsaUNBQWlDO0lBQzlDLHdCQUF3QixDQUFDLHdDQUF3QztJQUNqRSxvQkFBb0I7TUFDbEI7SUFDRjtJQUNBLE1BQU0sQ0FBQyxvQkFBb0I7SUFDM0Isc0JBQXNCLENBQUMsK0JBQStCO0lBQ3RELDRCQUE0QjtNQUMxQjtJQUNGO0lBQ0EsNkJBQTZCLENBQUMsMkNBQTJDO0lBQ3pFLGtCQUFrQixDQUFDLCtDQUErQztJQUNsRSxzQkFBc0I7TUFDcEI7SUFDRjtJQUNBLGtCQUFrQixDQUFDLHdCQUF3QjtJQUMzQyx1QkFBdUIsQ0FBQyxvQ0FBb0M7SUFDNUQsMEJBQTBCLENBQUMsZ0JBQWdCO0lBQzNDLGFBQWEsQ0FBQyw0QkFBNEI7SUFDMUMscUJBQXFCLENBQUMsbURBQW1EO0lBQ3pFLGdCQUFnQixDQUFDLDZCQUE2QjtJQUM5QyxhQUFhLENBQUMseUJBQXlCO0lBQ3ZDLHFDQUFxQyxDQUFDLDRCQUE0QjtJQUNsRSxrQkFBa0IsQ0FBQyxvREFBb0Q7SUFDdkUsa0JBQWtCLENBQUMsb0RBQW9EO0lBQ3ZFLGNBQWMsQ0FBQyxvQ0FBb0M7SUFDbkQsd0NBQXdDO01BQ3RDO0lBQ0Y7SUFDQSwwQkFBMEIsQ0FBQyx1Q0FBdUM7SUFDbEUsMEJBQTBCO01BQ3hCO0lBQ0Y7SUFDQSxpQ0FBaUM7TUFDL0I7SUFDRjtJQUNBLHNCQUFzQixDQUFDLGdEQUFnRDtJQUN2RSxlQUFlLENBQUMsd0NBQXdDO0lBQ3hELHdCQUF3QixDQUFDLDZCQUE2QjtJQUN0RCxtQkFBbUIsQ0FBQyxnQ0FBZ0M7SUFDcEQsMEJBQTBCO01BQ3hCO01BQ0EsQ0FBQztNQUNEO1FBQ0UsWUFDRTtNQUNKO0lBQ0Y7SUFDQSx1QkFBdUIsQ0FBQyw0Q0FBNEM7SUFDcEUsY0FBYyxDQUFDLHVCQUF1QjtJQUN0QyxhQUFhLENBQUMsd0NBQXdDO0lBQ3RELDBCQUEwQjtNQUN4QjtJQUNGO0lBQ0EsY0FBYyxDQUFDLHVDQUF1QztJQUN0RCx5QkFBeUIsQ0FBQywyQ0FBMkM7SUFDckUsMkJBQTJCO01BQ3pCO0lBQ0Y7SUFDQSw0Q0FBNEM7TUFDMUM7SUFDRjtJQUNBLDJCQUEyQjtNQUN6QjtNQUNBLENBQUM7TUFDRDtRQUNFLFlBQ0U7TUFDSjtJQUNGO0lBQ0EsdUJBQXVCO01BQ3JCO0lBQ0Y7SUFDQSw4QkFBOEI7TUFDNUI7SUFDRjtJQUNBLHVCQUF1QjtNQUNyQjtJQUNGO0lBQ0EsdUJBQXVCO01BQ3JCO0lBQ0Y7SUFDQSxtQkFBbUI7TUFDakI7SUFDRjtJQUNBLG1CQUFtQjtNQUNqQjtJQUNGO0lBQ0EsOEJBQThCO01BQzVCO0lBQ0Y7SUFDQSwwQ0FBMEM7TUFDeEM7SUFDRjtJQUNBLHNCQUFzQixDQUFDLHdDQUF3QztJQUMvRCx5Q0FBeUM7TUFDdkM7SUFDRjtJQUNBLGFBQWEsQ0FBQyxzQ0FBc0M7SUFDcEQsUUFBUSxDQUFDLG1CQUFtQjtJQUM1QixpQkFBaUIsQ0FBQyw2Q0FBNkM7SUFDL0Qsc0NBQXNDO01BQ3BDO0lBQ0Y7SUFDQSxpQkFBaUIsQ0FBQyxrREFBa0Q7SUFDcEUsbUJBQW1CLENBQUMseUNBQXlDO0lBQzdELGVBQWUsQ0FBQyxtQ0FBbUM7SUFDbkQsMkJBQTJCLENBQUMsMENBQTBDO0VBQ3hFO0VBQ0EsVUFBVTtJQUNSLG1DQUFtQztNQUNqQztJQUNGO0lBQ0EscUJBQXFCO01BQ25CO0lBQ0Y7SUFDQSxzQkFBc0I7TUFDcEI7SUFDRjtJQUNBLDBDQUEwQztNQUN4QztJQUNGO0lBQ0EsNEJBQTRCO01BQzFCO0lBQ0Y7SUFDQSw2QkFBNkI7TUFDM0I7SUFDRjtJQUNBLDhDQUE4QztNQUM1QztNQUNBLENBQUM7TUFDRCxFQUFFLFNBQVMsQ0FBQyxZQUFZLDJDQUEyQyxFQUFFO0lBQ3ZFO0lBQ0EsNkRBQTZEO01BQzNEO01BQ0EsQ0FBQztNQUNEO1FBQ0UsU0FBUztVQUNQO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSx5REFBeUQ7TUFDdkQ7SUFDRjtJQUNBLDJDQUEyQztNQUN6QztJQUNGO0lBQ0EsNENBQTRDO01BQzFDO0lBQ0Y7SUFDQSxnQ0FBZ0M7TUFDOUI7SUFDRjtJQUNBLDJCQUEyQjtNQUN6QjtJQUNGO0lBQ0EsbUJBQW1CO01BQ2pCO0lBQ0Y7SUFDQSx1Q0FBdUM7TUFDckM7SUFDRjtJQUNBLGtDQUFrQztNQUNoQztJQUNGO0lBQ0EsMEJBQTBCO01BQ3hCO0lBQ0Y7SUFDQSw0REFBNEQ7TUFDMUQ7SUFDRjtJQUNBLHVEQUF1RDtNQUNyRDtJQUNGO0lBQ0EsK0NBQStDO01BQzdDO0lBQ0Y7SUFDQSxrQ0FBa0MsQ0FBQyxvQkFBb0I7SUFDdkQsNkJBQTZCLENBQUMsMEJBQTBCO0lBQ3hELHFCQUFxQixDQUFDLGdDQUFnQztJQUN0RCxvQ0FBb0M7TUFDbEM7SUFDRjtJQUNBLHNCQUFzQjtNQUNwQjtJQUNGO0lBQ0EsdUJBQXVCO01BQ3JCO0lBQ0Y7SUFDQSwyQ0FBMkM7TUFDekM7SUFDRjtJQUNBLDZCQUE2QjtNQUMzQjtJQUNGO0lBQ0EsOEJBQThCO01BQzVCO0lBQ0Y7RUFDRjtFQUNBLG1CQUFtQjtJQUNqQiwwQkFBMEIsQ0FBQyxxQ0FBcUM7SUFDaEUsMEJBQTBCO01BQ3hCO0lBQ0Y7SUFDQSx1QkFBdUIsQ0FBQyxrREFBa0Q7SUFDMUUsaUJBQWlCLENBQUMsK0NBQStDO0lBQ2pFLDBCQUEwQixDQUFDLG9DQUFvQztJQUMvRCwwQkFBMEI7TUFDeEI7SUFDRjtFQUNGO0VBQ0EsVUFBVTtJQUNSLGVBQWUsQ0FBQyxvREFBb0Q7SUFDcEUsZ0JBQWdCO01BQ2Q7SUFDRjtJQUNBLGtCQUFrQjtNQUNoQjtJQUNGO0lBQ0EsbUJBQW1CO01BQ2pCO0lBQ0Y7SUFDQSxnQkFBZ0I7TUFDZDtJQUNGO0lBQ0EsaUJBQWlCO01BQ2Y7SUFDRjtJQUNBLFdBQVcsQ0FBQyw2Q0FBNkM7SUFDekQsWUFBWSxDQUFDLG1EQUFtRDtJQUNoRSxZQUFZLENBQUMsNkRBQTZEO0lBQzFFLGFBQWE7TUFDWDtJQUNGO0lBQ0Esa0JBQWtCLENBQUMsb0RBQW9EO0lBQ3ZFLG1CQUFtQjtNQUNqQjtJQUNGO0lBQ0EsWUFBWSxDQUFDLDRCQUE0QjtJQUN6QyxhQUFhLENBQUMsa0NBQWtDO0lBQ2hELGlCQUFpQixDQUFDLG1EQUFtRDtJQUNyRSxrQkFBa0I7TUFDaEI7SUFDRjtJQUNBLGtCQUFrQjtNQUNoQjtJQUNGO0lBQ0EsbUJBQW1CO01BQ2pCO0lBQ0Y7RUFDRjtFQUNBLE9BQU87SUFDTCxlQUFlLENBQUMscURBQXFEO0lBQ3JFLFFBQVEsQ0FBQyxrQ0FBa0M7SUFDM0MsNkJBQTZCO01BQzNCO0lBQ0Y7SUFDQSxjQUFjLENBQUMsd0RBQXdEO0lBQ3ZFLHFCQUFxQjtNQUNuQjtJQUNGO0lBQ0EscUJBQXFCO01BQ25CO0lBQ0Y7SUFDQSxxQkFBcUI7TUFDbkI7SUFDRjtJQUNBLGVBQWU7TUFDYjtJQUNGO0lBQ0EsS0FBSyxDQUFDLCtDQUErQztJQUNyRCxXQUFXO01BQ1Q7SUFDRjtJQUNBLGtCQUFrQixDQUFDLHVEQUF1RDtJQUMxRSxNQUFNLENBQUMsaUNBQWlDO0lBQ3hDLHVCQUF1QjtNQUNyQjtJQUNGO0lBQ0EsYUFBYSxDQUFDLHVEQUF1RDtJQUNyRSxXQUFXLENBQUMscURBQXFEO0lBQ2pFLHdCQUF3QjtNQUN0QjtJQUNGO0lBQ0Esb0JBQW9CO01BQ2xCO0lBQ0Y7SUFDQSwyQkFBMkIsQ0FBQywwQ0FBMEM7SUFDdEUsYUFBYSxDQUFDLHVEQUF1RDtJQUNyRSxPQUFPLENBQUMscURBQXFEO0lBQzdELDBCQUEwQjtNQUN4QjtJQUNGO0lBQ0Esa0JBQWtCO01BQ2hCO0lBQ0Y7SUFDQSxjQUFjO01BQ1o7SUFDRjtJQUNBLFFBQVEsQ0FBQyxpREFBaUQ7SUFDMUQsY0FBYztNQUNaO0lBQ0Y7SUFDQSxjQUFjO01BQ1o7SUFDRjtJQUNBLHFCQUFxQjtNQUNuQjtJQUNGO0VBQ0Y7RUFDQSxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixFQUFFO0VBQ3RDLFdBQVc7SUFDVCx3QkFBd0I7TUFDdEI7SUFDRjtJQUNBLGdCQUFnQjtNQUNkO0lBQ0Y7SUFDQSx1QkFBdUI7TUFDckI7SUFDRjtJQUNBLG1DQUFtQztNQUNqQztJQUNGO0lBQ0Esa0JBQWtCO01BQ2hCO0lBQ0Y7SUFDQSxxQ0FBcUM7TUFDbkM7SUFDRjtJQUNBLDhCQUE4QjtNQUM1QjtJQUNGO0lBQ0Esd0JBQXdCO01BQ3RCO0lBQ0Y7SUFDQSxnQkFBZ0I7TUFDZDtJQUNGO0lBQ0EsdUJBQXVCO01BQ3JCO0lBQ0Y7SUFDQSw2QkFBNkI7TUFDM0I7SUFDRjtJQUNBLGtCQUFrQjtNQUNoQjtJQUNGO0lBQ0EseUJBQXlCO01BQ3ZCO0lBQ0Y7SUFDQSxnQ0FBZ0M7TUFDOUI7SUFDRjtJQUNBLHNCQUFzQjtNQUNwQjtJQUNGO0lBQ0EsY0FBYyxDQUFDLDJEQUEyRDtJQUMxRSxxQkFBcUI7TUFDbkI7SUFDRjtJQUNBLGlDQUFpQztNQUMvQjtJQUNGO0lBQ0EsZ0JBQWdCO01BQ2Q7SUFDRjtJQUNBLG1DQUFtQztNQUNqQztJQUNGO0lBQ0EsNEJBQTRCO01BQzFCO0lBQ0Y7RUFDRjtFQUNBLE9BQU87SUFDTCxrQkFBa0I7TUFDaEI7TUFDQSxDQUFDO01BQ0QsRUFBRSxTQUFTLENBQUMsU0FBUyxzQ0FBc0MsRUFBRTtJQUMvRDtJQUNBLHNDQUFzQztNQUNwQztJQUNGO0lBQ0EsMEJBQTBCO01BQ3hCO01BQ0EsQ0FBQztNQUNELEVBQUUsV0FBVyxPQUFPO0lBQ3RCO0lBQ0EsaUJBQWlCLENBQUMsb0RBQW9EO0lBQ3RFLHdCQUF3QjtNQUN0QjtNQUNBLENBQUM7TUFDRCxFQUFFLFdBQVcsV0FBVztJQUMxQjtJQUNBLDJCQUEyQjtNQUN6QjtNQUNBLENBQUM7TUFDRCxFQUFFLFdBQVcsUUFBUTtJQUN2QjtJQUNBLDJCQUEyQjtNQUN6QjtNQUNBLENBQUM7TUFDRCxFQUFFLFdBQVcsUUFBUTtJQUN2QjtJQUNBLHVCQUF1QjtNQUNyQjtJQUNGO0lBQ0EsNkJBQTZCO01BQzNCO0lBQ0Y7SUFDQSxtQkFBbUIsQ0FBQyxvREFBb0Q7SUFDeEUsd0JBQXdCLENBQUMsOENBQThDO0lBQ3ZFLG9DQUFvQztNQUNsQztJQUNGO0lBQ0EsMEJBQTBCO01BQ3hCO0lBQ0Y7SUFDQSxrQkFBa0IsQ0FBQyw2Q0FBNkM7SUFDaEUsZ0JBQWdCLENBQUMsbURBQW1EO0lBQ3BFLDRCQUE0QjtNQUMxQjtJQUNGO0lBQ0EsbUJBQW1CLENBQUMseUNBQXlDO0lBQzdELGdCQUFnQixDQUFDLHNDQUFzQztJQUN2RCxxQkFBcUI7TUFDbkI7SUFDRjtJQUNBLGlDQUFpQztNQUMvQjtJQUNGO0lBQ0Esb0JBQW9CLENBQUMsMkNBQTJDO0lBQ2hFLGlCQUFpQixDQUFDLGlDQUFpQztJQUNuRCxrQkFBa0IsQ0FBQyx3Q0FBd0M7SUFDM0QsOEJBQThCO01BQzVCO0lBQ0Y7SUFDQSxnQ0FBZ0M7TUFDOUI7SUFDRjtJQUNBLHdCQUF3QjtNQUN0QjtJQUNGO0lBQ0EscUJBQXFCLENBQUMsdUNBQXVDO0lBQzdELDRCQUE0QixDQUFDLGtCQUFrQjtJQUMvQyxZQUFZLENBQUMsa0NBQWtDO0lBQy9DLGFBQWEsQ0FBQyx3QkFBd0I7SUFDdEMsMkJBQTJCO01BQ3pCO0lBQ0Y7SUFDQSw0QkFBNEIsQ0FBQywyQ0FBMkM7SUFDeEUsa0JBQWtCLENBQUMsMkJBQTJCO0lBQzlDLHVCQUF1QixDQUFDLDhDQUE4QztJQUN0RSxpQkFBaUIsQ0FBQyxrQ0FBa0M7SUFDcEQsZUFBZSxDQUFDLHFDQUFxQztJQUNyRCxtQkFBbUIsQ0FBQyxxQ0FBcUM7SUFDekQscUJBQXFCO01BQ25CO0lBQ0Y7SUFDQSxlQUFlLENBQUMsa0NBQWtDO0lBQ2xELHdEQUF3RDtNQUN0RDtJQUNGO0lBQ0EsNkNBQTZDO01BQzNDO0lBQ0Y7SUFDQSxtQkFBbUI7TUFDakI7TUFDQSxDQUFDO01BQ0QsRUFBRSxTQUFTLENBQUMsU0FBUyx1Q0FBdUMsRUFBRTtJQUNoRTtJQUNBLHVDQUF1QztNQUNyQztJQUNGO0lBQ0EsUUFBUSxDQUFDLDhCQUE4QjtJQUN2QywwQkFBMEI7TUFDeEI7SUFDRjtJQUNBLDZCQUE2QjtNQUMzQjtJQUNGO0lBQ0EscUJBQXFCO01BQ25CO0lBQ0Y7SUFDQSxnQkFBZ0IsQ0FBQyxzREFBc0Q7SUFDdkUsd0JBQXdCO01BQ3RCO0lBQ0Y7SUFDQSxxQkFBcUIsQ0FBQyxvREFBb0Q7SUFDMUUsaUNBQWlDO01BQy9CO0lBQ0Y7SUFDQSxpQkFBaUIsQ0FBQyw0Q0FBNEM7SUFDOUQsa0JBQWtCO01BQ2hCO0lBQ0Y7SUFDQSw4QkFBOEI7TUFDNUI7SUFDRjtJQUNBLFlBQVksQ0FBQyw4Q0FBOEM7SUFDM0Qsa0JBQWtCO01BQ2hCO0lBQ0Y7SUFDQSxrQkFBa0IsQ0FBQywwQ0FBMEM7SUFDN0QsaUJBQWlCLENBQUMsb0NBQW9DO0lBQ3RELG1DQUFtQztNQUNqQztJQUNGO0lBQ0EsZUFBZSxDQUFDLG9EQUFvRDtJQUNwRSxvQkFBb0I7TUFDbEI7SUFDRjtJQUNBLG1CQUFtQixDQUFDLG9EQUFvRDtJQUN4RSxlQUFlLENBQUMsOENBQThDO0lBQzlELCtCQUErQjtNQUM3QjtJQUNGO0lBQ0EsaUNBQWlDO01BQy9CO0lBQ0Y7SUFDQSwwQkFBMEI7TUFDeEI7SUFDRjtJQUNBLHNDQUFzQztNQUNwQztJQUNGO0lBQ0EsNEJBQTRCO01BQzFCO0lBQ0Y7SUFDQSxpQkFBaUI7TUFDZjtNQUNBLENBQUM7TUFDRCxFQUFFLFNBQVMsQ0FBQyxTQUFTLHdCQUF3QixFQUFFO0lBQ2pEO0lBQ0Esd0JBQXdCLENBQUMseUNBQXlDO0lBQ2xFLHdCQUF3QixDQUFDLHlDQUF5QztJQUNsRSw4QkFBOEI7TUFDNUI7SUFDRjtJQUNBLHlCQUF5QixDQUFDLDhDQUE4QztJQUN4RSxxQ0FBcUM7TUFDbkM7SUFDRjtJQUNBLDJCQUEyQjtNQUN6QjtJQUNGO0lBQ0Esc0JBQXNCO01BQ3BCO0lBQ0Y7SUFDQSxLQUFLLENBQUMsMkJBQTJCO0lBQ2pDLHVCQUF1QjtNQUNyQjtJQUNGO0lBQ0EsMEJBQTBCO01BQ3hCO0lBQ0Y7SUFDQSxpQ0FBaUM7TUFDL0I7SUFDRjtJQUNBLG9CQUFvQixDQUFDLHdDQUF3QztJQUM3RCwyQkFBMkI7TUFDekI7SUFDRjtJQUNBLGNBQWMsQ0FBQyxrQ0FBa0M7SUFDakQsb0NBQW9DO01BQ2xDO0lBQ0Y7SUFDQSxhQUFhLENBQUMsbURBQW1EO0lBQ2pFLFdBQVcsQ0FBQyw2Q0FBNkM7SUFDekQscUJBQXFCO01BQ25CO0lBQ0Y7SUFDQSxnQkFBZ0IsQ0FBQyxtREFBbUQ7SUFDcEUsV0FBVyxDQUFDLDBDQUEwQztJQUN0RCx1QkFBdUIsQ0FBQyxnREFBZ0Q7SUFDeEUsZ0NBQWdDO01BQzlCO0lBQ0Y7SUFDQSx5QkFBeUIsQ0FBQyxnREFBZ0Q7SUFDMUUsV0FBVyxDQUFDLHlDQUF5QztJQUNyRCx3QkFBd0IsQ0FBQyxpREFBaUQ7SUFDMUUsa0JBQWtCLENBQUMsaURBQWlEO0lBQ3BFLDhCQUE4QjtNQUM1QjtJQUNGO0lBQ0EsNEJBQTRCLENBQUMsNkNBQTZDO0lBQzFFLFlBQVksQ0FBQywyQ0FBMkM7SUFDeEQsc0JBQXNCLENBQUMsOENBQThDO0lBQ3JFLG1DQUFtQztNQUNqQztJQUNGO0lBQ0EsY0FBYyxDQUFDLHlDQUF5QztJQUN4RCxlQUFlLENBQUMsdURBQXVEO0lBQ3ZFLDJCQUEyQjtNQUN6QjtJQUNGO0lBQ0EscUJBQXFCO01BQ25CO0lBQ0Y7SUFDQSxnQkFBZ0I7TUFDZDtJQUNGO0lBQ0EscUJBQXFCLENBQUMsK0NBQStDO0lBQ3JFLGtCQUFrQixDQUFDLDJDQUEyQztJQUM5RCxpQkFBaUIsQ0FBQyxzREFBc0Q7SUFDeEUsa0JBQWtCLENBQUMsc0NBQXNDO0lBQ3pELGVBQWUsQ0FBQyx1Q0FBdUM7SUFDdkQsZ0JBQWdCLENBQUMsMEJBQTBCO0lBQzNDLFVBQVUsQ0FBQyxpQ0FBaUM7SUFDNUMsZUFBZSxDQUFDLG1EQUFtRDtJQUNuRSxvQkFBb0I7TUFDbEI7SUFDRjtJQUNBLHFCQUFxQixDQUFDLHdDQUF3QztJQUM5RCx1QkFBdUIsQ0FBQywrQ0FBK0M7SUFDdkUsZ0NBQWdDO01BQzlCO0lBQ0Y7SUFDQSxtQkFBbUIsQ0FBQyw0Q0FBNEM7SUFDaEUsV0FBVyxDQUFDLGtDQUFrQztJQUM5QyxzQkFBc0IsQ0FBQyx3Q0FBd0M7SUFDL0QsWUFBWSxDQUFDLGlEQUFpRDtJQUM5RCxpQkFBaUIsQ0FBQyxzREFBc0Q7SUFDeEUsaUJBQWlCLENBQUMsK0NBQStDO0lBQ2pFLGtCQUFrQjtNQUNoQjtJQUNGO0lBQ0EsbUJBQW1CLENBQUMsZ0RBQWdEO0lBQ3BFLGdCQUFnQixDQUFDLGlEQUFpRDtJQUNsRSx1QkFBdUI7TUFDckI7SUFDRjtJQUNBLHVCQUF1QjtNQUNyQjtJQUNGO0lBQ0EsaUJBQWlCLENBQUMsb0NBQW9DO0lBQ3RELDJCQUEyQjtNQUN6QjtJQUNGO0lBQ0EscUNBQXFDO01BQ25DO0lBQ0Y7SUFDQSxhQUFhLENBQUMsaURBQWlEO0lBQy9ELGlCQUFpQixDQUFDLHFEQUFxRDtJQUN2RSxxQ0FBcUM7TUFDbkM7SUFDRjtJQUNBLFVBQVUsQ0FBQyx5Q0FBeUM7SUFDcEQsWUFBWSxDQUFDLDJDQUEyQztJQUN4RCx5QkFBeUI7TUFDdkI7SUFDRjtJQUNBLG9CQUFvQjtNQUNsQjtJQUNGO0lBQ0EsZ0JBQWdCLENBQUMsb0NBQW9DO0lBQ3JELGtCQUFrQjtNQUNoQjtJQUNGO0lBQ0EsZUFBZSxDQUFDLHFDQUFxQztJQUNyRCxjQUFjLENBQUMsb0NBQW9DO0lBQ25ELDJCQUEyQjtNQUN6QjtJQUNGO0lBQ0EsbUJBQW1CLENBQUMseUNBQXlDO0lBQzdELHVCQUF1QjtNQUNyQjtJQUNGO0lBQ0EsMkJBQTJCLENBQUMsb0NBQW9DO0lBQ2hFLDBCQUEwQjtNQUN4QjtJQUNGO0lBQ0EsYUFBYSxDQUFDLG1DQUFtQztJQUNqRCxrQkFBa0IsQ0FBQyx3Q0FBd0M7SUFDM0Qsc0NBQXNDO01BQ3BDO0lBQ0Y7SUFDQSxnQkFBZ0IsQ0FBQyxnQ0FBZ0M7SUFDakQsOEJBQThCO01BQzVCO0lBQ0Y7SUFDQSx3QkFBd0I7TUFDdEI7SUFDRjtJQUNBLGlCQUFpQixDQUFDLHVDQUF1QztJQUN6RCwwQkFBMEIsQ0FBQyxpQkFBaUI7SUFDNUMsWUFBWSxDQUFDLHVCQUF1QjtJQUNwQyxhQUFhLENBQUMsNkJBQTZCO0lBQzNDLFdBQVcsQ0FBQyxpQ0FBaUM7SUFDN0MsaUJBQWlCLENBQUMsdUNBQXVDO0lBQ3pELHFDQUFxQyxDQUFDLGtDQUFrQztJQUN4RSxlQUFlLENBQUMscUNBQXFDO0lBQ3JELGlCQUFpQixDQUFDLHdDQUF3QztJQUMxRCxZQUFZLENBQUMsbUJBQW1CO0lBQ2hDLHNDQUFzQztNQUNwQztJQUNGO0lBQ0EsbUJBQW1CO01BQ2pCO0lBQ0Y7SUFDQSxjQUFjLENBQUMsb0NBQW9DO0lBQ25ELFVBQVUsQ0FBQyxnQ0FBZ0M7SUFDM0MsV0FBVyxDQUFDLGlDQUFpQztJQUM3Qyx1QkFBdUI7TUFDckI7SUFDRjtJQUNBLGNBQWMsQ0FBQyxpQ0FBaUM7SUFDaEQsT0FBTyxDQUFDLG1DQUFtQztJQUMzQyxlQUFlLENBQUMsMkNBQTJDO0lBQzNELGFBQWEsQ0FBQyxrREFBa0Q7SUFDaEUsMEJBQTBCO01BQ3hCO0lBQ0Y7SUFDQSw2QkFBNkI7TUFDM0I7TUFDQSxDQUFDO01BQ0QsRUFBRSxXQUFXLE9BQU87SUFDdEI7SUFDQSxvQkFBb0I7TUFDbEI7SUFDRjtJQUNBLDJCQUEyQjtNQUN6QjtNQUNBLENBQUM7TUFDRCxFQUFFLFdBQVcsV0FBVztJQUMxQjtJQUNBLDZCQUE2QjtNQUMzQjtJQUNGO0lBQ0EsOEJBQThCO01BQzVCO01BQ0EsQ0FBQztNQUNELEVBQUUsV0FBVyxRQUFRO0lBQ3ZCO0lBQ0EsOEJBQThCO01BQzVCO01BQ0EsQ0FBQztNQUNELEVBQUUsV0FBVyxRQUFRO0lBQ3ZCO0lBQ0EsY0FBYyxDQUFDLHFEQUFxRDtJQUNwRSxrQkFBa0IsQ0FBQyxrQ0FBa0M7SUFDckQsbUJBQW1CLENBQUMseUNBQXlDO0lBQzdELDBCQUEwQjtNQUN4QjtJQUNGO0lBQ0EsMEJBQTBCO01BQ3hCO01BQ0EsQ0FBQztNQUNELEVBQUUsV0FBVyxPQUFPO0lBQ3RCO0lBQ0Esd0JBQXdCO01BQ3RCO01BQ0EsQ0FBQztNQUNELEVBQUUsV0FBVyxXQUFXO0lBQzFCO0lBQ0EsMkJBQTJCO01BQ3pCO01BQ0EsQ0FBQztNQUNELEVBQUUsV0FBVyxRQUFRO0lBQ3ZCO0lBQ0EsMkJBQTJCO01BQ3pCO01BQ0EsQ0FBQztNQUNELEVBQUUsV0FBVyxRQUFRO0lBQ3ZCO0lBQ0EsaUJBQWlCLENBQUMsa0RBQWtEO0lBQ3BFLFVBQVUsQ0FBQyxxQ0FBcUM7SUFDaEQsUUFBUSxDQUFDLDZCQUE2QjtJQUN0Qyx3QkFBd0I7TUFDdEI7SUFDRjtJQUNBLHFCQUFxQixDQUFDLG1EQUFtRDtJQUN6RSw4QkFBOEI7TUFDNUI7SUFDRjtJQUNBLGlDQUFpQyxDQUFDLGlDQUFpQztJQUNuRSxrQkFBa0I7TUFDaEI7SUFDRjtJQUNBLGtCQUFrQixDQUFDLHVDQUF1QztJQUMxRCxtQ0FBbUM7TUFDakM7SUFDRjtJQUNBLGVBQWUsQ0FBQyxtREFBbUQ7SUFDbkUsb0JBQW9CO01BQ2xCO0lBQ0Y7SUFDQSxtQkFBbUIsQ0FBQyxpREFBaUQ7SUFDckUsNEJBQTRCO01BQzFCO01BQ0EsQ0FBQztNQUNELEVBQUUsU0FBUyxDQUFDLFNBQVMsNkJBQTZCLEVBQUU7SUFDdEQ7SUFDQSw2QkFBNkI7TUFDM0I7SUFDRjtJQUNBLGVBQWUsQ0FBQyw2Q0FBNkM7SUFDN0QsNEJBQTRCO01BQzFCO0lBQ0Y7SUFDQSxvQkFBb0I7TUFDbEI7TUFDQSxFQUFFLFNBQVMsNkJBQTZCO0lBQzFDO0VBQ0Y7RUFDQSxRQUFRO0lBQ04sTUFBTSxDQUFDLGtCQUFrQjtJQUN6QixTQUFTLENBQUMscUJBQXFCO0lBQy9CLHVCQUF1QixDQUFDLG9CQUFvQjtJQUM1QyxRQUFRLENBQUMsb0JBQW9CO0lBQzdCLE9BQU8sQ0FBQywwQkFBMEI7SUFDbEMsUUFBUSxDQUFDLG9CQUFvQjtJQUM3QixPQUFPLENBQUMsbUJBQW1CO0VBQzdCO0VBQ0EsZ0JBQWdCO0lBQ2QsNEJBQTRCO01BQzFCO0lBQ0Y7SUFDQSxVQUFVO01BQ1I7SUFDRjtJQUNBLGdCQUFnQixDQUFDLHdEQUF3RDtJQUN6RSxrQkFBa0IsQ0FBQyx3Q0FBd0M7SUFDM0QsbUJBQW1CLENBQUMsa0RBQWtEO0lBQ3RFLHVCQUF1QjtNQUNyQjtJQUNGO0lBQ0EsdUJBQXVCO01BQ3JCO0lBQ0Y7SUFDQSxhQUFhO01BQ1g7SUFDRjtJQUNBLHlCQUF5QjtNQUN2QjtJQUNGO0VBQ0Y7RUFDQSxvQkFBb0I7SUFDbEIsWUFBWTtNQUNWO0lBQ0Y7SUFDQSxrQ0FBa0M7TUFDaEM7SUFDRjtJQUNBLDBCQUEwQjtNQUN4QjtJQUNGO0lBQ0Esb0NBQW9DO01BQ2xDO0lBQ0Y7SUFDQSxtQkFBbUIsQ0FBQywyQkFBMkI7SUFDL0MsdUJBQXVCO01BQ3JCO0lBQ0Y7SUFDQSxzQkFBc0IsQ0FBQyxpQkFBaUI7SUFDeEMsNkJBQTZCLENBQUMscUNBQXFDO0lBQ25FLDBCQUEwQixDQUFDLCtDQUErQztJQUMxRSwwQkFBMEI7TUFDeEI7SUFDRjtFQUNGO0VBQ0EsT0FBTztJQUNMLG1DQUFtQztNQUNqQztJQUNGO0lBQ0EsaUNBQWlDO01BQy9CO0lBQ0Y7SUFDQSw4QkFBOEI7TUFDNUI7SUFDRjtJQUNBLFFBQVEsQ0FBQyx3QkFBd0I7SUFDakMsOEJBQThCO01BQzVCO0lBQ0Y7SUFDQSx1QkFBdUIsQ0FBQyxnREFBZ0Q7SUFDeEUsOEJBQThCO01BQzVCO0lBQ0Y7SUFDQSx1QkFBdUI7TUFDckI7SUFDRjtJQUNBLGFBQWEsQ0FBQyxzQ0FBc0M7SUFDcEQsV0FBVyxDQUFDLG1DQUFtQztJQUMvQywyQkFBMkI7TUFDekI7SUFDRjtJQUNBLG9CQUFvQjtNQUNsQjtJQUNGO0lBQ0EsMkJBQTJCO01BQ3pCO0lBQ0Y7SUFDQSxNQUFNLENBQUMsdUJBQXVCO0lBQzlCLGdCQUFnQixDQUFDLHlDQUF5QztJQUMxRCw2QkFBNkI7TUFDM0I7SUFDRjtJQUNBLHNCQUFzQixDQUFDLCtDQUErQztJQUN0RSwwQkFBMEIsQ0FBQyxpQkFBaUI7SUFDNUMsa0JBQWtCLENBQUMsMkNBQTJDO0lBQzlELDZCQUE2QjtNQUMzQjtJQUNGO0lBQ0EsZ0JBQWdCLENBQUMseUNBQXlDO0lBQzFELDhCQUE4QjtNQUM1QjtJQUNGO0lBQ0EsaUJBQWlCO01BQ2Y7SUFDRjtJQUNBLDhCQUE4QjtNQUM1QjtJQUNGO0lBQ0EsdUJBQXVCO01BQ3JCO0lBQ0Y7SUFDQSxhQUFhLENBQUMscUNBQXFDO0VBQ3JEO0VBQ0EsT0FBTztJQUNMLDBCQUEwQjtNQUN4QjtNQUNBLENBQUM7TUFDRCxFQUFFLFNBQVMsQ0FBQyxTQUFTLDhCQUE4QixFQUFFO0lBQ3ZEO0lBQ0EsOEJBQThCLENBQUMsbUJBQW1CO0lBQ2xELHNDQUFzQyxDQUFDLDRCQUE0QjtJQUNuRSxPQUFPLENBQUMsNkJBQTZCO0lBQ3JDLGNBQWMsQ0FBQyw2QkFBNkI7SUFDNUMsdUJBQXVCLENBQUMsK0NBQStDO0lBQ3ZFLHNDQUFzQyxDQUFDLGdDQUFnQztJQUN2RSw4QkFBOEI7TUFDNUI7TUFDQSxDQUFDO01BQ0QsRUFBRSxTQUFTLENBQUMsU0FBUyxrQ0FBa0MsRUFBRTtJQUMzRDtJQUNBLGtDQUFrQyxDQUFDLHFCQUFxQjtJQUN4RCxvQ0FBb0M7TUFDbEM7TUFDQSxDQUFDO01BQ0QsRUFBRSxTQUFTLENBQUMsU0FBUyx3Q0FBd0MsRUFBRTtJQUNqRTtJQUNBLHdDQUF3QyxDQUFDLGlCQUFpQjtJQUMxRCx5Q0FBeUMsQ0FBQyw2QkFBNkI7SUFDdkUsd0JBQXdCO01BQ3RCO0lBQ0Y7SUFDQSx3QkFBd0I7TUFDdEI7SUFDRjtJQUNBLG1DQUFtQztNQUNqQztJQUNGO0lBQ0EsNkJBQTZCO01BQzNCO01BQ0EsQ0FBQztNQUNELEVBQUUsU0FBUyxDQUFDLFNBQVMsaUNBQWlDLEVBQUU7SUFDMUQ7SUFDQSxpQ0FBaUMsQ0FBQyxxQkFBcUI7SUFDdkQsOEJBQThCO01BQzVCO01BQ0EsQ0FBQztNQUNELEVBQUUsU0FBUyxDQUFDLFNBQVMsa0NBQWtDLEVBQUU7SUFDM0Q7SUFDQSxrQ0FBa0MsQ0FBQyxvQ0FBb0M7SUFDdkUsb0NBQW9DO01BQ2xDO01BQ0EsQ0FBQztNQUNELEVBQUUsU0FBUyxDQUFDLFNBQVMsd0NBQXdDLEVBQUU7SUFDakU7SUFDQSx3Q0FBd0MsQ0FBQyw0QkFBNEI7SUFDckUseUNBQXlDLENBQUMsOEJBQThCO0lBQ3hFLHlDQUF5QztNQUN2QztJQUNGO0lBQ0EsUUFBUSxDQUFDLGdDQUFnQztJQUN6QyxrQkFBa0IsQ0FBQyxXQUFXO0lBQzlCLFNBQVMsQ0FBQyx3QkFBd0I7SUFDbEMsZUFBZSxDQUFDLHVCQUF1QjtJQUN2QyxtQkFBbUIsQ0FBQyxpQ0FBaUM7SUFDckQsMkJBQTJCO01BQ3pCO01BQ0EsQ0FBQztNQUNELEVBQUUsU0FBUyxDQUFDLFNBQVMsK0JBQStCLEVBQUU7SUFDeEQ7SUFDQSwrQkFBK0IsQ0FBQyxpQ0FBaUM7SUFDakUsaUNBQWlDO01BQy9CO01BQ0EsQ0FBQztNQUNELEVBQUUsU0FBUyxDQUFDLFNBQVMscUNBQXFDLEVBQUU7SUFDOUQ7SUFDQSxxQ0FBcUMsQ0FBQyx5QkFBeUI7SUFDL0Qsc0NBQXNDO01BQ3BDO0lBQ0Y7SUFDQSxNQUFNLENBQUMsWUFBWTtJQUNuQixrQkFBa0IsQ0FBQyxxREFBcUQ7SUFDeEUsc0JBQXNCO01BQ3BCO0lBQ0Y7SUFDQSw0QkFBNEI7TUFDMUI7TUFDQSxDQUFDO01BQ0QsRUFBRSxTQUFTLENBQUMsU0FBUyxnQ0FBZ0MsRUFBRTtJQUN6RDtJQUNBLGdDQUFnQyxDQUFDLGtCQUFrQjtJQUNuRCw0QkFBNEI7TUFDMUI7TUFDQSxDQUFDO01BQ0QsRUFBRSxTQUFTLENBQUMsU0FBUyxnQ0FBZ0MsRUFBRTtJQUN6RDtJQUNBLGdDQUFnQyxDQUFDLGtCQUFrQjtJQUNuRCw2QkFBNkI7TUFDM0I7TUFDQSxDQUFDO01BQ0QsRUFBRSxTQUFTLENBQUMsU0FBUyxpQ0FBaUMsRUFBRTtJQUMxRDtJQUNBLGlDQUFpQyxDQUFDLHFCQUFxQjtJQUN2RCxtQ0FBbUMsQ0FBQyxxQkFBcUI7SUFDekQsc0JBQXNCLENBQUMsaUNBQWlDO0lBQ3hELHNCQUFzQixDQUFDLGlDQUFpQztJQUN4RCw2QkFBNkI7TUFDM0I7TUFDQSxDQUFDO01BQ0QsRUFBRSxTQUFTLENBQUMsU0FBUyxpQ0FBaUMsRUFBRTtJQUMxRDtJQUNBLGlDQUFpQyxDQUFDLG9CQUFvQjtJQUN0RCxvQkFBb0IsQ0FBQyxnQ0FBZ0M7SUFDckQsa0NBQWtDO01BQ2hDO01BQ0EsQ0FBQztNQUNELEVBQUUsU0FBUyxDQUFDLFNBQVMsc0NBQXNDLEVBQUU7SUFDL0Q7SUFDQSxzQ0FBc0MsQ0FBQyx5QkFBeUI7SUFDaEUsdUJBQXVCLENBQUMsNEJBQTRCO0lBQ3BELG1DQUFtQztNQUNqQztNQUNBLENBQUM7TUFDRCxFQUFFLFNBQVMsQ0FBQyxTQUFTLHVDQUF1QyxFQUFFO0lBQ2hFO0lBQ0EsdUNBQXVDLENBQUMsZ0JBQWdCO0lBQ3hELHdDQUF3QyxDQUFDLDJCQUEyQjtJQUNwRSwyQkFBMkIsQ0FBQyx1Q0FBdUM7SUFDbkUsd0NBQXdDLENBQUMsNEJBQTRCO0lBQ3JFLDJCQUEyQixDQUFDLHdDQUF3QztJQUNwRSwyQ0FBMkM7TUFDekM7TUFDQSxDQUFDO01BQ0QsRUFBRSxTQUFTLENBQUMsU0FBUywrQ0FBK0MsRUFBRTtJQUN4RTtJQUNBLCtDQUErQztNQUM3QztJQUNGO0lBQ0EsU0FBUyxDQUFDLGdDQUFnQztJQUMxQyxVQUFVLENBQUMsbUNBQW1DO0lBQzlDLHFCQUFxQixDQUFDLGFBQWE7RUFDckM7QUFDRjtBQUVBLElBQU8sb0JBQVE7OztBQ3J1RWYsSUFBTSxxQkFBcUIsb0JBQUksSUFBSTtBQUNuQyxXQUFXLENBQUMsT0FBTyxTQUFTLEtBQUssT0FBTyxRQUFRLGlCQUFTLEdBQUc7QUFDMUQsYUFBVyxDQUFDLFlBQVlDLFNBQVEsS0FBSyxPQUFPLFFBQVEsU0FBUyxHQUFHO0FBQzlELFVBQU0sQ0FBQyxPQUFPLFVBQVUsV0FBVyxJQUFJQTtBQUN2QyxVQUFNLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxNQUFNLEdBQUc7QUFDckMsVUFBTSxtQkFBbUIsT0FBTztNQUM5QjtRQUNFO1FBQ0E7TUFDRjtNQUNBO0lBQ0Y7QUFFQSxRQUFJLENBQUMsbUJBQW1CLElBQUksS0FBSyxHQUFHO0FBQ2xDLHlCQUFtQixJQUFJLE9BQU8sb0JBQUksSUFBSSxDQUFDO0lBQ3pDO0FBRUEsdUJBQW1CLElBQUksS0FBSyxFQUFFLElBQUksWUFBWTtNQUM1QztNQUNBO01BQ0E7TUFDQTtJQUNGLENBQUM7RUFDSDtBQUNGO0FBUUEsSUFBTSxVQUFVO0VBQ2QsSUFBSSxFQUFFLE1BQU0sR0FBZ0IsWUFBb0I7QUFDOUMsV0FBTyxtQkFBbUIsSUFBSSxLQUFLLEVBQUUsSUFBSSxVQUFVO0VBQ3JEO0VBQ0EseUJBQXlCLFFBQXFCLFlBQW9CO0FBQ2hFLFdBQU87TUFDTCxPQUFPLEtBQUssSUFBSSxRQUFRLFVBQVU7O01BQ2xDLGNBQWM7TUFDZCxVQUFVO01BQ1YsWUFBWTtJQUNkO0VBQ0Y7RUFDQSxlQUNFLFFBQ0EsWUFDQSxZQUNBO0FBQ0EsV0FBTyxlQUFlLE9BQU8sT0FBTyxZQUFZLFVBQVU7QUFDMUQsV0FBTztFQUNUO0VBQ0EsZUFBZSxRQUFxQixZQUFvQjtBQUN0RCxXQUFPLE9BQU8sTUFBTSxVQUFVO0FBQzlCLFdBQU87RUFDVDtFQUNBLFFBQVEsRUFBRSxNQUFNLEdBQWdCO0FBQzlCLFdBQU8sQ0FBQyxHQUFHLG1CQUFtQixJQUFJLEtBQUssRUFBRSxLQUFLLENBQUM7RUFDakQ7RUFDQSxJQUFJLFFBQXFCLFlBQW9CLE9BQVk7QUFDdkQsV0FBUSxPQUFPLE1BQU0sVUFBVSxJQUFJO0VBQ3JDO0VBQ0EsSUFBSSxFQUFFLFNBQVMsT0FBTyxNQUFNLEdBQWdCLFlBQW9CO0FBQzlELFFBQUksTUFBTSxVQUFVLEdBQUc7QUFDckIsYUFBTyxNQUFNLFVBQVU7SUFDekI7QUFFQSxVQUFNLFNBQVMsbUJBQW1CLElBQUksS0FBSyxFQUFFLElBQUksVUFBVTtBQUMzRCxRQUFJLENBQUMsUUFBUTtBQUNYLGFBQU87SUFDVDtBQUVBLFVBQU0sRUFBRSxrQkFBa0IsWUFBWSxJQUFJO0FBRTFDLFFBQUksYUFBYTtBQUNmLFlBQU0sVUFBVSxJQUFJO1FBQ2xCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDRjtJQUNGLE9BQU87QUFDTCxZQUFNLFVBQVUsSUFBSSxRQUFRLFFBQVEsU0FBUyxnQkFBZ0I7SUFDL0Q7QUFFQSxXQUFPLE1BQU0sVUFBVTtFQUN6QjtBQUNGO0FBRU8sU0FBUyxtQkFBbUIsU0FBdUM7QUFDeEUsUUFBTSxhQUFhLENBQUM7QUFFcEIsYUFBVyxTQUFTLG1CQUFtQixLQUFLLEdBQUc7QUFDN0MsZUFBVyxLQUFLLElBQUksSUFBSSxNQUFNLEVBQUUsU0FBUyxPQUFPLE9BQU8sQ0FBQyxFQUFFLEdBQUcsT0FBTztFQUN0RTtBQUVBLFNBQU87QUFDVDtBQUVBLFNBQVMsU0FDUCxTQUNBLE9BQ0EsWUFDQSxVQUNBLGFBQ0E7QUFDQSxRQUFNLHNCQUFzQixRQUFRLFFBQVEsU0FBUyxRQUFRO0FBRzdELFdBQVMsbUJBQ0osTUFDSDtBQUVBLFFBQUksVUFBVSxvQkFBb0IsU0FBUyxNQUFNLEdBQUcsSUFBSTtBQUd4RCxRQUFJLFlBQVksV0FBVztBQUN6QixnQkFBVSxPQUFPLE9BQU8sQ0FBQyxHQUFHLFNBQVM7UUFDbkMsTUFBTSxRQUFRLFlBQVksU0FBUztRQUNuQyxDQUFDLFlBQVksU0FBUyxHQUFHO01BQzNCLENBQUM7QUFDRCxhQUFPLG9CQUFvQixPQUFPO0lBQ3BDO0FBRUEsUUFBSSxZQUFZLFNBQVM7QUFDdkIsWUFBTSxDQUFDLFVBQVUsYUFBYSxJQUFJLFlBQVk7QUFDOUMsY0FBUSxJQUFJO1FBQ1YsV0FBVyxLQUFLLElBQUksVUFBVSxrQ0FBa0MsUUFBUSxJQUFJLGFBQWE7TUFDM0Y7SUFDRjtBQUNBLFFBQUksWUFBWSxZQUFZO0FBQzFCLGNBQVEsSUFBSSxLQUFLLFlBQVksVUFBVTtJQUN6QztBQUVBLFFBQUksWUFBWSxtQkFBbUI7QUFFakMsWUFBTUMsV0FBVSxvQkFBb0IsU0FBUyxNQUFNLEdBQUcsSUFBSTtBQUUxRCxpQkFBVyxDQUFDLE1BQU0sS0FBSyxLQUFLLE9BQU87UUFDakMsWUFBWTtNQUNkLEdBQUc7QUFDRCxZQUFJLFFBQVFBLFVBQVM7QUFDbkIsa0JBQVEsSUFBSTtZQUNWLElBQUksSUFBSSwwQ0FBMEMsS0FBSyxJQUFJLFVBQVUsYUFBYSxLQUFLO1VBQ3pGO0FBQ0EsY0FBSSxFQUFFLFNBQVNBLFdBQVU7QUFDdkJBLHFCQUFRLEtBQUssSUFBSUEsU0FBUSxJQUFJO1VBQy9CO0FBQ0EsaUJBQU9BLFNBQVEsSUFBSTtRQUNyQjtNQUNGO0FBQ0EsYUFBTyxvQkFBb0JBLFFBQU87SUFDcEM7QUFHQSxXQUFPLG9CQUFvQixHQUFHLElBQUk7RUFDcEM7QUFDQSxTQUFPLE9BQU8sT0FBTyxpQkFBaUIsbUJBQW1CO0FBQzNEOzs7QUNyS08sU0FBUyxvQkFBb0IsU0FBdUI7QUFDekQsUUFBTSxNQUFNLG1CQUFtQixPQUFPO0FBQ3RDLFNBQU87SUFDTCxNQUFNO0VBQ1I7QUFDRjtBQUNBLG9CQUFvQixVQUFVQztBQUV2QixTQUFTLDBCQUEwQixTQUFxQztBQUM3RSxRQUFNLE1BQU0sbUJBQW1CLE9BQU87QUFDdEMsU0FBTztJQUNMLEdBQUc7SUFDSCxNQUFNO0VBQ1I7QUFDRjtBQUNBLDBCQUEwQixVQUFVQTs7O0FDMUJwQyxJQUFNQyxXQUFVOzs7QUNPaEIsSUFBTUMsV0FBVSxRQUFLLE9BQU8sWUFBWSwyQkFBMkIsWUFBWSxFQUFFO0FBQUEsRUFDL0U7QUFBQSxJQUNFLFdBQVcsbUJBQW1CQyxRQUFPO0FBQUEsRUFDdkM7QUFDRjs7O0FDVE8sU0FBUyxtQkFBbUIsT0FBd0I7QUFDdkQsU0FBTyxJQUFJQyxTQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEM7OztBQ09BLGVBQXNCLGVBQWUsU0FBa0IsUUFBNkM7QUFDaEcsUUFBTSxFQUFFLE1BQU0sUUFBUSxJQUFJLE1BQU0sUUFBUSxJQUFJLFVBQVU7QUFBQSxJQUNsRCxPQUFPLE9BQU87QUFBQSxJQUNkLE1BQU0sT0FBTztBQUFBLElBQ2IsS0FBSyxPQUFPO0FBQUEsSUFDWixTQUFTLE9BQU87QUFBQSxJQUNoQixRQUFRLE9BQU87QUFBQSxJQUNmLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU0sb0JBQUksS0FBSyxHQUFFLFlBQVk7QUFBQSxJQUNqQztBQUFBLEVBQ0osQ0FBQztBQUVELFFBQU0sUUFBUSxJQUFJLFVBQVU7QUFBQSxJQUN4QixPQUFPLE9BQU87QUFBQSxJQUNkLE1BQU0sT0FBTztBQUFBLElBQ2IsS0FBSyxhQUFhLE9BQU8sT0FBTztBQUFBLElBQ2hDLEtBQUssUUFBUTtBQUFBLEVBQ2pCLENBQUM7QUFFRCxRQUFNLFFBQVEsTUFBTSxjQUFjO0FBQUEsSUFDOUIsT0FBTyxPQUFPO0FBQUEsSUFDZCxNQUFNLE9BQU87QUFBQSxJQUNiLFVBQVUsT0FBTztBQUFBLElBQ2pCLE1BQU0sT0FBTztBQUFBLElBQ2IsWUFBWSxPQUFPO0FBQUEsSUFDbkIsYUFBYSxPQUFPLGVBQWUsVUFBVTtBQUFBLEVBQ2pELENBQUM7QUFDTDs7O0FDckNBLG9CQUFtQjtBQURuQixTQUFTLFlBQVksWUFBQUMsaUJBQWdCO0FBRXJDLFNBQVMscUJBQXFCO0FBRTlCLGVBQXNCLE1BQXFCO0FBQ3ZDLFFBQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxRQUFRLElBQUksbUJBQW1CLEVBQUcsTUFBTSxHQUFHO0FBQ2pFLFFBQU0sZ0JBQWdCLFFBQVEsSUFBSSxnQkFBZ0IsS0FBSztBQUV2RCxRQUFNLFdBQVcsS0FBSyxNQUFNLE1BQU1BLFVBQVMsR0FBRyxRQUFRLElBQUksa0JBQWtCLENBQUUsaUJBQWlCLE9BQU8sQ0FBQztBQUd2RyxRQUFNLFVBQVUsU0FBUztBQUN6QixRQUFNLGVBQWUsY0FBQUMsUUFBTyxXQUFXLE9BQU8sTUFBTTtBQUVwRCxRQUFNLGVBQWUsZUFDZixNQUFNLHVCQUF1QixhQUFhLElBQzFDLE1BQU0sbUJBQW1CLGFBQWE7QUFFNUMsUUFBTSxVQUFVLG1CQUFtQixRQUFRLElBQUksVUFBVSxDQUFFO0FBRTNELFFBQU0sZUFBZSxTQUFTO0FBQUEsSUFDMUI7QUFBQSxJQUNBO0FBQUEsSUFDQSxTQUFTLElBQUksT0FBTztBQUFBLElBQ3BCLFdBQVcsUUFBUSxJQUFJLFlBQVk7QUFBQSxJQUNuQztBQUFBLElBQ0E7QUFBQSxFQUNKLENBQUM7QUFFRCxRQUFNLFNBQVMsUUFBUSxJQUFJLGVBQWU7QUFDMUMsUUFBTSxXQUFXLFFBQVEsaUJBQWlCLFlBQVk7QUFBQSxDQUFJO0FBQzlEO0FBRUEsSUFBSSxRQUFRLEtBQUssQ0FBQyxNQUFNLGNBQWMsWUFBWSxHQUFHLEdBQUc7QUFDcEQsUUFBTSxJQUFJO0FBQ2Q7IiwKICAibmFtZXMiOiBbIk51bGxPYmplY3QiLCAicGFyc2UiLCAic2FmZVBhcnNlIiwgInBhcnNlIiwgInBhcnNlIiwgInBhcnNlIiwgInBhcnNlIiwgInBhcnNlIiwgInBhcnNlIiwgInJlcXVpcmVfdmFsaWQiLCAicmVxdWlyZV9zZW12ZXIiLCAicGFyc2UiLCAibmFtZSIsICJtZXRob2QiLCAiaG9vayIsICJob29rIiwgInZhbHVlIiwgInRleHQiLCAiVkVSU0lPTiIsICJpc1BsYWluT2JqZWN0IiwgIndpdGhEZWZhdWx0cyIsICJWRVJTSU9OIiwgIndpdGhEZWZhdWx0cyIsICJyZXF1ZXN0IiwgImVuZHBvaW50IiwgIlZFUlNJT04iLCAibm9vcCIsICJWRVJTSU9OIiwgImhvb2siLCAiYXV0aCIsICJWRVJTSU9OIiwgInJlcXVlc3QiLCAiVkVSU0lPTiIsICJWRVJTSU9OIiwgIlZFUlNJT04iLCAiVkVSU0lPTiIsICJlbmRwb2ludCIsICJvcHRpb25zIiwgIlZFUlNJT04iLCAiVkVSU0lPTiIsICJPY3Rva2l0IiwgIlZFUlNJT04iLCAiT2N0b2tpdCIsICJyZWFkRmlsZSIsICJzZW12ZXIiXQp9Cg==

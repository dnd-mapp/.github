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

// src/scripts/publish-release.mts
var import_semver = __toESM(require_semver2(), 1);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtY29udGVudC10eXBlLXBhcnNlQDMuMC4wL25vZGVfbW9kdWxlcy9mYXN0LWNvbnRlbnQtdHlwZS1wYXJzZS9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvaW50ZXJuYWwvY29uc3RhbnRzLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9kZWJ1Zy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvaW50ZXJuYWwvcmUuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL3BhcnNlLW9wdGlvbnMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL2lkZW50aWZpZXJzLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9jbGFzc2VzL3NlbXZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3BhcnNlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvdmFsaWQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9jbGVhbi5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2luYy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2RpZmYuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9tYWpvci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL21pbm9yLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvcGF0Y2guanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9wcmVyZWxlYXNlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY29tcGFyZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3Jjb21wYXJlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY29tcGFyZS1sb29zZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2NvbXBhcmUtYnVpbGQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9zb3J0LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvcnNvcnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9ndC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2x0LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvZXEuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9uZXEuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9ndGUuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9sdGUuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9jbXAuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9jb2VyY2UuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL2xydWNhY2hlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9jbGFzc2VzL3JhbmdlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9jbGFzc2VzL2NvbXBhcmF0b3IuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9zYXRpc2ZpZXMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy90by1jb21wYXJhdG9ycy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL21heC1zYXRpc2Z5aW5nLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvbWluLXNhdGlzZnlpbmcuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9taW4tdmVyc2lvbi5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL3ZhbGlkLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZW12ZXJANy43LjQvbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvb3V0c2lkZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL2d0ci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL2x0ci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL2ludGVyc2VjdHMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NlbXZlckA3LjcuNC9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9zaW1wbGlmeS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL3N1YnNldC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VtdmVyQDcuNy40L25vZGVfbW9kdWxlcy9zZW12ZXIvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vc3JjL2NoYW5nZWxvZy1tYW5hZ2VyL2NoYW5nZWxvZy1tYW5hZ2VyLnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS91bml2ZXJzYWwtdXNlci1hZ2VudEA3LjAuMy9ub2RlX21vZHVsZXMvdW5pdmVyc2FsLXVzZXItYWdlbnQvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JlZm9yZS1hZnRlci1ob29rQDQuMC4wL25vZGVfbW9kdWxlcy9iZWZvcmUtYWZ0ZXItaG9vay9saWIvcmVnaXN0ZXIuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JlZm9yZS1hZnRlci1ob29rQDQuMC4wL25vZGVfbW9kdWxlcy9iZWZvcmUtYWZ0ZXItaG9vay9saWIvYWRkLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9iZWZvcmUtYWZ0ZXItaG9va0A0LjAuMC9ub2RlX21vZHVsZXMvYmVmb3JlLWFmdGVyLWhvb2svbGliL3JlbW92ZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYmVmb3JlLWFmdGVyLWhvb2tANC4wLjAvbm9kZV9tb2R1bGVzL2JlZm9yZS1hZnRlci1ob29rL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtlbmRwb2ludEAxMS4wLjMvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L2VuZHBvaW50L2Rpc3QtYnVuZGxlL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtyZXF1ZXN0QDEwLjAuOC9ub2RlX21vZHVsZXMvQG9jdG9raXQvcmVxdWVzdC9kaXN0LWJ1bmRsZS9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vanNvbi13aXRoLWJpZ2ludEAzLjUuOC9ub2RlX21vZHVsZXMvanNvbi13aXRoLWJpZ2ludC9qc29uLXdpdGgtYmlnaW50LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtyZXF1ZXN0LWVycm9yQDcuMS4wL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9yZXF1ZXN0LWVycm9yL2Rpc3Qtc3JjL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtncmFwaHFsQDkuMC4zL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9ncmFwaHFsL2Rpc3QtYnVuZGxlL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCthdXRoLXRva2VuQDYuMC4wL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9hdXRoLXRva2VuL2Rpc3QtYnVuZGxlL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtjb3JlQDcuMC42L25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9jb3JlL2Rpc3Qtc3JjL3ZlcnNpb24uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K2NvcmVANy4wLjYvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L2NvcmUvZGlzdC1zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3BsdWdpbi1yZXF1ZXN0LWxvZ0A2LjAuMF9Ab2N0b2tpdCtjb3JlQDcuMC42L25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9wbHVnaW4tcmVxdWVzdC1sb2cvZGlzdC1zcmMvdmVyc2lvbi5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9jdG9raXQrcGx1Z2luLXJlcXVlc3QtbG9nQDYuMC4wX0BvY3Rva2l0K2NvcmVANy4wLjYvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3BsdWdpbi1yZXF1ZXN0LWxvZy9kaXN0LXNyYy9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9jdG9raXQrcGx1Z2luLXBhZ2luYXRlLXJlc3RAMTQuMC4wX0BvY3Rva2l0K2NvcmVANy4wLjYvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3BsdWdpbi1wYWdpbmF0ZS1yZXN0L2Rpc3QtYnVuZGxlL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtwbHVnaW4tcmVzdC1lbmRwb2lfODhmMWNmZGNjYmNkMTJmOWJkODlhNjYyYTNkMDhiY2Uvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3NyYy92ZXJzaW9uLnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtwbHVnaW4tcmVzdC1lbmRwb2lfODhmMWNmZGNjYmNkMTJmOWJkODlhNjYyYTNkMDhiY2Uvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3NyYy9nZW5lcmF0ZWQvZW5kcG9pbnRzLnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtwbHVnaW4tcmVzdC1lbmRwb2lfODhmMWNmZGNjYmNkMTJmOWJkODlhNjYyYTNkMDhiY2Uvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3NyYy9lbmRwb2ludHMtdG8tbWV0aG9kcy50cyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9jdG9raXQrcGx1Z2luLXJlc3QtZW5kcG9pXzg4ZjFjZmRjY2JjZDEyZjliZDg5YTY2MmEzZDA4YmNlL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9zcmMvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3Jlc3RAMjIuMC4xL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9yZXN0L2Rpc3Qtc3JjL3ZlcnNpb24uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3Jlc3RAMjIuMC4xL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9yZXN0L2Rpc3Qtc3JjL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL3NyYy9naXRodWItY2xpZW50L2dpdGh1Yi1jbGllbnQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL3JlbGVhc2UtcHVibGlzaGVyL3JlbGVhc2UtcHVibGlzaGVyLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9zY3JpcHRzL3B1Ymxpc2gtcmVsZWFzZS5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBOdWxsT2JqZWN0ID0gZnVuY3Rpb24gTnVsbE9iamVjdCAoKSB7IH1cbk51bGxPYmplY3QucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4vKipcbiAqIFJlZ0V4cCB0byBtYXRjaCAqKCBcIjtcIiBwYXJhbWV0ZXIgKSBpbiBSRkMgNzIzMSBzZWMgMy4xLjEuMVxuICpcbiAqIHBhcmFtZXRlciAgICAgPSB0b2tlbiBcIj1cIiAoIHRva2VuIC8gcXVvdGVkLXN0cmluZyApXG4gKiB0b2tlbiAgICAgICAgID0gMSp0Y2hhclxuICogdGNoYXIgICAgICAgICA9IFwiIVwiIC8gXCIjXCIgLyBcIiRcIiAvIFwiJVwiIC8gXCImXCIgLyBcIidcIiAvIFwiKlwiXG4gKiAgICAgICAgICAgICAgIC8gXCIrXCIgLyBcIi1cIiAvIFwiLlwiIC8gXCJeXCIgLyBcIl9cIiAvIFwiYFwiIC8gXCJ8XCIgLyBcIn5cIlxuICogICAgICAgICAgICAgICAvIERJR0lUIC8gQUxQSEFcbiAqICAgICAgICAgICAgICAgOyBhbnkgVkNIQVIsIGV4Y2VwdCBkZWxpbWl0ZXJzXG4gKiBxdW90ZWQtc3RyaW5nID0gRFFVT1RFICooIHFkdGV4dCAvIHF1b3RlZC1wYWlyICkgRFFVT1RFXG4gKiBxZHRleHQgICAgICAgID0gSFRBQiAvIFNQIC8gJXgyMSAvICV4MjMtNUIgLyAleDVELTdFIC8gb2JzLXRleHRcbiAqIG9icy10ZXh0ICAgICAgPSAleDgwLUZGXG4gKiBxdW90ZWQtcGFpciAgID0gXCJcXFwiICggSFRBQiAvIFNQIC8gVkNIQVIgLyBvYnMtdGV4dCApXG4gKi9cbmNvbnN0IHBhcmFtUkUgPSAvOyAqKFshIyQlJicqKy5eXFx3YHx+LV0rKT0oXCIoPzpbXFx2XFx1MDAyMFxcdTAwMjFcXHUwMDIzLVxcdTAwNWJcXHUwMDVkLVxcdTAwN2VcXHUwMDgwLVxcdTAwZmZdfFxcXFxbXFx2XFx1MDAyMC1cXHUwMGZmXSkqXCJ8WyEjJCUmJyorLl5cXHdgfH4tXSspICovZ3VcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggcXVvdGVkLXBhaXIgaW4gUkZDIDcyMzAgc2VjIDMuMi42XG4gKlxuICogcXVvdGVkLXBhaXIgPSBcIlxcXCIgKCBIVEFCIC8gU1AgLyBWQ0hBUiAvIG9icy10ZXh0IClcbiAqIG9icy10ZXh0ICAgID0gJXg4MC1GRlxuICovXG5jb25zdCBxdW90ZWRQYWlyUkUgPSAvXFxcXChbXFx2XFx1MDAyMC1cXHUwMGZmXSkvZ3VcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggdHlwZSBpbiBSRkMgNzIzMSBzZWMgMy4xLjEuMVxuICpcbiAqIG1lZGlhLXR5cGUgPSB0eXBlIFwiL1wiIHN1YnR5cGVcbiAqIHR5cGUgICAgICAgPSB0b2tlblxuICogc3VidHlwZSAgICA9IHRva2VuXG4gKi9cbmNvbnN0IG1lZGlhVHlwZVJFID0gL15bISMkJSYnKisuXlxcd3x+LV0rXFwvWyEjJCUmJyorLl5cXHd8fi1dKyQvdVxuXG4vLyBkZWZhdWx0IENvbnRlbnRUeXBlIHRvIHByZXZlbnQgcmVwZWF0ZWQgb2JqZWN0IGNyZWF0aW9uXG5jb25zdCBkZWZhdWx0Q29udGVudFR5cGUgPSB7IHR5cGU6ICcnLCBwYXJhbWV0ZXJzOiBuZXcgTnVsbE9iamVjdCgpIH1cbk9iamVjdC5mcmVlemUoZGVmYXVsdENvbnRlbnRUeXBlLnBhcmFtZXRlcnMpXG5PYmplY3QuZnJlZXplKGRlZmF1bHRDb250ZW50VHlwZSlcblxuLyoqXG4gKiBQYXJzZSBtZWRpYSB0eXBlIHRvIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IGhlYWRlclxuICogQHJldHVybiB7T2JqZWN0fVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHBhcnNlIChoZWFkZXIpIHtcbiAgaWYgKHR5cGVvZiBoZWFkZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgaGVhZGVyIGlzIHJlcXVpcmVkIGFuZCBtdXN0IGJlIGEgc3RyaW5nJylcbiAgfVxuXG4gIGxldCBpbmRleCA9IGhlYWRlci5pbmRleE9mKCc7JylcbiAgY29uc3QgdHlwZSA9IGluZGV4ICE9PSAtMVxuICAgID8gaGVhZGVyLnNsaWNlKDAsIGluZGV4KS50cmltKClcbiAgICA6IGhlYWRlci50cmltKClcblxuICBpZiAobWVkaWFUeXBlUkUudGVzdCh0eXBlKSA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIG1lZGlhIHR5cGUnKVxuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHR5cGU6IHR5cGUudG9Mb3dlckNhc2UoKSxcbiAgICBwYXJhbWV0ZXJzOiBuZXcgTnVsbE9iamVjdCgpXG4gIH1cblxuICAvLyBwYXJzZSBwYXJhbWV0ZXJzXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBsZXQga2V5XG4gIGxldCBtYXRjaFxuICBsZXQgdmFsdWVcblxuICBwYXJhbVJFLmxhc3RJbmRleCA9IGluZGV4XG5cbiAgd2hpbGUgKChtYXRjaCA9IHBhcmFtUkUuZXhlYyhoZWFkZXIpKSkge1xuICAgIGlmIChtYXRjaC5pbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgcGFyYW1ldGVyIGZvcm1hdCcpXG4gICAgfVxuXG4gICAgaW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoXG4gICAga2V5ID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKVxuICAgIHZhbHVlID0gbWF0Y2hbMl1cblxuICAgIGlmICh2YWx1ZVswXSA9PT0gJ1wiJykge1xuICAgICAgLy8gcmVtb3ZlIHF1b3RlcyBhbmQgZXNjYXBlc1xuICAgICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAuc2xpY2UoMSwgdmFsdWUubGVuZ3RoIC0gMSlcblxuICAgICAgcXVvdGVkUGFpclJFLnRlc3QodmFsdWUpICYmICh2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocXVvdGVkUGFpclJFLCAnJDEnKSlcbiAgICB9XG5cbiAgICByZXN1bHQucGFyYW1ldGVyc1trZXldID0gdmFsdWVcbiAgfVxuXG4gIGlmIChpbmRleCAhPT0gaGVhZGVyLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgcGFyYW1ldGVyIGZvcm1hdCcpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIHNhZmVQYXJzZSAoaGVhZGVyKSB7XG4gIGlmICh0eXBlb2YgaGVhZGVyICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZWZhdWx0Q29udGVudFR5cGVcbiAgfVxuXG4gIGxldCBpbmRleCA9IGhlYWRlci5pbmRleE9mKCc7JylcbiAgY29uc3QgdHlwZSA9IGluZGV4ICE9PSAtMVxuICAgID8gaGVhZGVyLnNsaWNlKDAsIGluZGV4KS50cmltKClcbiAgICA6IGhlYWRlci50cmltKClcblxuICBpZiAobWVkaWFUeXBlUkUudGVzdCh0eXBlKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZGVmYXVsdENvbnRlbnRUeXBlXG4gIH1cblxuICBjb25zdCByZXN1bHQgPSB7XG4gICAgdHlwZTogdHlwZS50b0xvd2VyQ2FzZSgpLFxuICAgIHBhcmFtZXRlcnM6IG5ldyBOdWxsT2JqZWN0KClcbiAgfVxuXG4gIC8vIHBhcnNlIHBhcmFtZXRlcnNcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGxldCBrZXlcbiAgbGV0IG1hdGNoXG4gIGxldCB2YWx1ZVxuXG4gIHBhcmFtUkUubGFzdEluZGV4ID0gaW5kZXhcblxuICB3aGlsZSAoKG1hdGNoID0gcGFyYW1SRS5leGVjKGhlYWRlcikpKSB7XG4gICAgaWYgKG1hdGNoLmluZGV4ICE9PSBpbmRleCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb250ZW50VHlwZVxuICAgIH1cblxuICAgIGluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aFxuICAgIGtleSA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKClcbiAgICB2YWx1ZSA9IG1hdGNoWzJdXG5cbiAgICBpZiAodmFsdWVbMF0gPT09ICdcIicpIHtcbiAgICAgIC8vIHJlbW92ZSBxdW90ZXMgYW5kIGVzY2FwZXNcbiAgICAgIHZhbHVlID0gdmFsdWVcbiAgICAgICAgLnNsaWNlKDEsIHZhbHVlLmxlbmd0aCAtIDEpXG5cbiAgICAgIHF1b3RlZFBhaXJSRS50ZXN0KHZhbHVlKSAmJiAodmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHF1b3RlZFBhaXJSRSwgJyQxJykpXG4gICAgfVxuXG4gICAgcmVzdWx0LnBhcmFtZXRlcnNba2V5XSA9IHZhbHVlXG4gIH1cblxuICBpZiAoaW5kZXggIT09IGhlYWRlci5sZW5ndGgpIHtcbiAgICByZXR1cm4gZGVmYXVsdENvbnRlbnRUeXBlXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSB7IHBhcnNlLCBzYWZlUGFyc2UgfVxubW9kdWxlLmV4cG9ydHMucGFyc2UgPSBwYXJzZVxubW9kdWxlLmV4cG9ydHMuc2FmZVBhcnNlID0gc2FmZVBhcnNlXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0Q29udGVudFR5cGUgPSBkZWZhdWx0Q29udGVudFR5cGVcbiIsICIndXNlIHN0cmljdCdcblxuLy8gTm90ZTogdGhpcyBpcyB0aGUgc2VtdmVyLm9yZyB2ZXJzaW9uIG9mIHRoZSBzcGVjIHRoYXQgaXQgaW1wbGVtZW50c1xuLy8gTm90IG5lY2Vzc2FyaWx5IHRoZSBwYWNrYWdlIHZlcnNpb24gb2YgdGhpcyBjb2RlLlxuY29uc3QgU0VNVkVSX1NQRUNfVkVSU0lPTiA9ICcyLjAuMCdcblxuY29uc3QgTUFYX0xFTkdUSCA9IDI1NlxuY29uc3QgTUFYX1NBRkVfSU5URUdFUiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyA5MDA3MTk5MjU0NzQwOTkxXG5cbi8vIE1heCBzYWZlIHNlZ21lbnQgbGVuZ3RoIGZvciBjb2VyY2lvbi5cbmNvbnN0IE1BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEggPSAxNlxuXG4vLyBNYXggc2FmZSBsZW5ndGggZm9yIGEgYnVpbGQgaWRlbnRpZmllci4gVGhlIG1heCBsZW5ndGggbWludXMgNiBjaGFyYWN0ZXJzIGZvclxuLy8gdGhlIHNob3J0ZXN0IHZlcnNpb24gd2l0aCBhIGJ1aWxkIDAuMC4wK0JVSUxELlxuY29uc3QgTUFYX1NBRkVfQlVJTERfTEVOR1RIID0gTUFYX0xFTkdUSCAtIDZcblxuY29uc3QgUkVMRUFTRV9UWVBFUyA9IFtcbiAgJ21ham9yJyxcbiAgJ3ByZW1ham9yJyxcbiAgJ21pbm9yJyxcbiAgJ3ByZW1pbm9yJyxcbiAgJ3BhdGNoJyxcbiAgJ3ByZXBhdGNoJyxcbiAgJ3ByZXJlbGVhc2UnLFxuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgTUFYX0xFTkdUSCxcbiAgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSCxcbiAgTUFYX1NBRkVfQlVJTERfTEVOR1RILFxuICBNQVhfU0FGRV9JTlRFR0VSLFxuICBSRUxFQVNFX1RZUEVTLFxuICBTRU1WRVJfU1BFQ19WRVJTSU9OLFxuICBGTEFHX0lOQ0xVREVfUFJFUkVMRUFTRTogMGIwMDEsXG4gIEZMQUdfTE9PU0U6IDBiMDEwLFxufVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBkZWJ1ZyA9IChcbiAgdHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmXG4gIHByb2Nlc3MuZW52ICYmXG4gIHByb2Nlc3MuZW52Lk5PREVfREVCVUcgJiZcbiAgL1xcYnNlbXZlclxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRylcbikgPyAoLi4uYXJncykgPT4gY29uc29sZS5lcnJvcignU0VNVkVSJywgLi4uYXJncylcbiAgOiAoKSA9PiB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYnVnXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHtcbiAgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSCxcbiAgTUFYX1NBRkVfQlVJTERfTEVOR1RILFxuICBNQVhfTEVOR1RILFxufSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJylcbmNvbnN0IGRlYnVnID0gcmVxdWlyZSgnLi9kZWJ1ZycpXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7fVxuXG4vLyBUaGUgYWN0dWFsIHJlZ2V4cHMgZ28gb24gZXhwb3J0cy5yZVxuY29uc3QgcmUgPSBleHBvcnRzLnJlID0gW11cbmNvbnN0IHNhZmVSZSA9IGV4cG9ydHMuc2FmZVJlID0gW11cbmNvbnN0IHNyYyA9IGV4cG9ydHMuc3JjID0gW11cbmNvbnN0IHNhZmVTcmMgPSBleHBvcnRzLnNhZmVTcmMgPSBbXVxuY29uc3QgdCA9IGV4cG9ydHMudCA9IHt9XG5sZXQgUiA9IDBcblxuY29uc3QgTEVUVEVSREFTSE5VTUJFUiA9ICdbYS16QS1aMC05LV0nXG5cbi8vIFJlcGxhY2Ugc29tZSBncmVlZHkgcmVnZXggdG9rZW5zIHRvIHByZXZlbnQgcmVnZXggZG9zIGlzc3Vlcy4gVGhlc2UgcmVnZXggYXJlXG4vLyB1c2VkIGludGVybmFsbHkgdmlhIHRoZSBzYWZlUmUgb2JqZWN0IHNpbmNlIGFsbCBpbnB1dHMgaW4gdGhpcyBsaWJyYXJ5IGdldFxuLy8gbm9ybWFsaXplZCBmaXJzdCB0byB0cmltIGFuZCBjb2xsYXBzZSBhbGwgZXh0cmEgd2hpdGVzcGFjZS4gVGhlIG9yaWdpbmFsXG4vLyByZWdleGVzIGFyZSBleHBvcnRlZCBmb3IgdXNlcmxhbmQgY29uc3VtcHRpb24gYW5kIGxvd2VyIGxldmVsIHVzYWdlLiBBXG4vLyBmdXR1cmUgYnJlYWtpbmcgY2hhbmdlIGNvdWxkIGV4cG9ydCB0aGUgc2FmZXIgcmVnZXggb25seSB3aXRoIGEgbm90ZSB0aGF0XG4vLyBhbGwgaW5wdXQgc2hvdWxkIGhhdmUgZXh0cmEgd2hpdGVzcGFjZSByZW1vdmVkLlxuY29uc3Qgc2FmZVJlZ2V4UmVwbGFjZW1lbnRzID0gW1xuICBbJ1xcXFxzJywgMV0sXG4gIFsnXFxcXGQnLCBNQVhfTEVOR1RIXSxcbiAgW0xFVFRFUkRBU0hOVU1CRVIsIE1BWF9TQUZFX0JVSUxEX0xFTkdUSF0sXG5dXG5cbmNvbnN0IG1ha2VTYWZlUmVnZXggPSAodmFsdWUpID0+IHtcbiAgZm9yIChjb25zdCBbdG9rZW4sIG1heF0gb2Ygc2FmZVJlZ2V4UmVwbGFjZW1lbnRzKSB7XG4gICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgLnNwbGl0KGAke3Rva2VufSpgKS5qb2luKGAke3Rva2VufXswLCR7bWF4fX1gKVxuICAgICAgLnNwbGl0KGAke3Rva2VufStgKS5qb2luKGAke3Rva2VufXsxLCR7bWF4fX1gKVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5jb25zdCBjcmVhdGVUb2tlbiA9IChuYW1lLCB2YWx1ZSwgaXNHbG9iYWwpID0+IHtcbiAgY29uc3Qgc2FmZSA9IG1ha2VTYWZlUmVnZXgodmFsdWUpXG4gIGNvbnN0IGluZGV4ID0gUisrXG4gIGRlYnVnKG5hbWUsIGluZGV4LCB2YWx1ZSlcbiAgdFtuYW1lXSA9IGluZGV4XG4gIHNyY1tpbmRleF0gPSB2YWx1ZVxuICBzYWZlU3JjW2luZGV4XSA9IHNhZmVcbiAgcmVbaW5kZXhdID0gbmV3IFJlZ0V4cCh2YWx1ZSwgaXNHbG9iYWwgPyAnZycgOiB1bmRlZmluZWQpXG4gIHNhZmVSZVtpbmRleF0gPSBuZXcgUmVnRXhwKHNhZmUsIGlzR2xvYmFsID8gJ2cnIDogdW5kZWZpbmVkKVxufVxuXG4vLyBUaGUgZm9sbG93aW5nIFJlZ3VsYXIgRXhwcmVzc2lvbnMgY2FuIGJlIHVzZWQgZm9yIHRva2VuaXppbmcsXG4vLyB2YWxpZGF0aW5nLCBhbmQgcGFyc2luZyBTZW1WZXIgdmVyc2lvbiBzdHJpbmdzLlxuXG4vLyAjIyBOdW1lcmljIElkZW50aWZpZXJcbi8vIEEgc2luZ2xlIGAwYCwgb3IgYSBub24temVybyBkaWdpdCBmb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgZGlnaXRzLlxuXG5jcmVhdGVUb2tlbignTlVNRVJJQ0lERU5USUZJRVInLCAnMHxbMS05XVxcXFxkKicpXG5jcmVhdGVUb2tlbignTlVNRVJJQ0lERU5USUZJRVJMT09TRScsICdcXFxcZCsnKVxuXG4vLyAjIyBOb24tbnVtZXJpYyBJZGVudGlmaWVyXG4vLyBaZXJvIG9yIG1vcmUgZGlnaXRzLCBmb2xsb3dlZCBieSBhIGxldHRlciBvciBoeXBoZW4sIGFuZCB0aGVuIHplcm8gb3Jcbi8vIG1vcmUgbGV0dGVycywgZGlnaXRzLCBvciBoeXBoZW5zLlxuXG5jcmVhdGVUb2tlbignTk9OTlVNRVJJQ0lERU5USUZJRVInLCBgXFxcXGQqW2EtekEtWi1dJHtMRVRURVJEQVNITlVNQkVSfSpgKVxuXG4vLyAjIyBNYWluIFZlcnNpb25cbi8vIFRocmVlIGRvdC1zZXBhcmF0ZWQgbnVtZXJpYyBpZGVudGlmaWVycy5cblxuY3JlYXRlVG9rZW4oJ01BSU5WRVJTSU9OJywgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSXX0pXFxcXC5gICtcbiAgICAgICAgICAgICAgICAgICBgKCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJdfSlcXFxcLmAgK1xuICAgICAgICAgICAgICAgICAgIGAoJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUl19KWApXG5cbmNyZWF0ZVRva2VuKCdNQUlOVkVSU0lPTkxPT1NFJywgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfSlcXFxcLmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfSlcXFxcLmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfSlgKVxuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uIElkZW50aWZpZXJcbi8vIEEgbnVtZXJpYyBpZGVudGlmaWVyLCBvciBhIG5vbi1udW1lcmljIGlkZW50aWZpZXIuXG4vLyBOb24tbnVtZXJpYyBpZGVudGlmaWVycyBpbmNsdWRlIG51bWVyaWMgaWRlbnRpZmllcnMgYnV0IGNhbiBiZSBsb25nZXIuXG4vLyBUaGVyZWZvcmUgbm9uLW51bWVyaWMgaWRlbnRpZmllcnMgbXVzdCBnbyBmaXJzdC5cblxuY3JlYXRlVG9rZW4oJ1BSRVJFTEVBU0VJREVOVElGSUVSJywgYCg/OiR7c3JjW3QuTk9OTlVNRVJJQ0lERU5USUZJRVJdXG59fCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJdfSlgKVxuXG5jcmVhdGVUb2tlbignUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRScsIGAoPzoke3NyY1t0Lk5PTk5VTUVSSUNJREVOVElGSUVSXVxufXwke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfSlgKVxuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uXG4vLyBIeXBoZW4sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGRvdC1zZXBhcmF0ZWQgcHJlLXJlbGVhc2UgdmVyc2lvblxuLy8gaWRlbnRpZmllcnMuXG5cbmNyZWF0ZVRva2VuKCdQUkVSRUxFQVNFJywgYCg/Oi0oJHtzcmNbdC5QUkVSRUxFQVNFSURFTlRJRklFUl1cbn0oPzpcXFxcLiR7c3JjW3QuUFJFUkVMRUFTRUlERU5USUZJRVJdfSkqKSlgKVxuXG5jcmVhdGVUb2tlbignUFJFUkVMRUFTRUxPT1NFJywgYCg/Oi0/KCR7c3JjW3QuUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV1cbn0oPzpcXFxcLiR7c3JjW3QuUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV19KSopKWApXG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhIElkZW50aWZpZXJcbi8vIEFueSBjb21iaW5hdGlvbiBvZiBkaWdpdHMsIGxldHRlcnMsIG9yIGh5cGhlbnMuXG5cbmNyZWF0ZVRva2VuKCdCVUlMRElERU5USUZJRVInLCBgJHtMRVRURVJEQVNITlVNQkVSfStgKVxuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YVxuLy8gUGx1cyBzaWduLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBwZXJpb2Qtc2VwYXJhdGVkIGJ1aWxkIG1ldGFkYXRhXG4vLyBpZGVudGlmaWVycy5cblxuY3JlYXRlVG9rZW4oJ0JVSUxEJywgYCg/OlxcXFwrKCR7c3JjW3QuQlVJTERJREVOVElGSUVSXVxufSg/OlxcXFwuJHtzcmNbdC5CVUlMRElERU5USUZJRVJdfSkqKSlgKVxuXG4vLyAjIyBGdWxsIFZlcnNpb24gU3RyaW5nXG4vLyBBIG1haW4gdmVyc2lvbiwgZm9sbG93ZWQgb3B0aW9uYWxseSBieSBhIHByZS1yZWxlYXNlIHZlcnNpb24gYW5kXG4vLyBidWlsZCBtZXRhZGF0YS5cblxuLy8gTm90ZSB0aGF0IHRoZSBvbmx5IG1ham9yLCBtaW5vciwgcGF0Y2gsIGFuZCBwcmUtcmVsZWFzZSBzZWN0aW9ucyBvZlxuLy8gdGhlIHZlcnNpb24gc3RyaW5nIGFyZSBjYXB0dXJpbmcgZ3JvdXBzLiAgVGhlIGJ1aWxkIG1ldGFkYXRhIGlzIG5vdCBhXG4vLyBjYXB0dXJpbmcgZ3JvdXAsIGJlY2F1c2UgaXQgc2hvdWxkIG5vdCBldmVyIGJlIHVzZWQgaW4gdmVyc2lvblxuLy8gY29tcGFyaXNvbi5cblxuY3JlYXRlVG9rZW4oJ0ZVTExQTEFJTicsIGB2PyR7c3JjW3QuTUFJTlZFUlNJT05dXG59JHtzcmNbdC5QUkVSRUxFQVNFXX0/JHtcbiAgc3JjW3QuQlVJTERdfT9gKVxuXG5jcmVhdGVUb2tlbignRlVMTCcsIGBeJHtzcmNbdC5GVUxMUExBSU5dfSRgKVxuXG4vLyBsaWtlIGZ1bGwsIGJ1dCBhbGxvd3MgdjEuMi4zIGFuZCA9MS4yLjMsIHdoaWNoIHBlb3BsZSBkbyBzb21ldGltZXMuXG4vLyBhbHNvLCAxLjAuMGFscGhhMSAocHJlcmVsZWFzZSB3aXRob3V0IHRoZSBoeXBoZW4pIHdoaWNoIGlzIHByZXR0eVxuLy8gY29tbW9uIGluIHRoZSBucG0gcmVnaXN0cnkuXG5jcmVhdGVUb2tlbignTE9PU0VQTEFJTicsIGBbdj1cXFxcc10qJHtzcmNbdC5NQUlOVkVSU0lPTkxPT1NFXVxufSR7c3JjW3QuUFJFUkVMRUFTRUxPT1NFXX0/JHtcbiAgc3JjW3QuQlVJTERdfT9gKVxuXG5jcmVhdGVUb2tlbignTE9PU0UnLCBgXiR7c3JjW3QuTE9PU0VQTEFJTl19JGApXG5cbmNyZWF0ZVRva2VuKCdHVExUJywgJygoPzo8fD4pPz0/KScpXG5cbi8vIFNvbWV0aGluZyBsaWtlIFwiMi4qXCIgb3IgXCIxLjIueFwiLlxuLy8gTm90ZSB0aGF0IFwieC54XCIgaXMgYSB2YWxpZCB4UmFuZ2UgaWRlbnRpZmVyLCBtZWFuaW5nIFwiYW55IHZlcnNpb25cIlxuLy8gT25seSB0aGUgZmlyc3QgaXRlbSBpcyBzdHJpY3RseSByZXF1aXJlZC5cbmNyZWF0ZVRva2VuKCdYUkFOR0VJREVOVElGSUVSTE9PU0UnLCBgJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUkxPT1NFXX18eHxYfFxcXFwqYClcbmNyZWF0ZVRva2VuKCdYUkFOR0VJREVOVElGSUVSJywgYCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJdfXx4fFh8XFxcXCpgKVxuXG5jcmVhdGVUb2tlbignWFJBTkdFUExBSU4nLCBgW3Y9XFxcXHNdKigke3NyY1t0LlhSQU5HRUlERU5USUZJRVJdfSlgICtcbiAgICAgICAgICAgICAgICAgICBgKD86XFxcXC4oJHtzcmNbdC5YUkFOR0VJREVOVElGSUVSXX0pYCArXG4gICAgICAgICAgICAgICAgICAgYCg/OlxcXFwuKCR7c3JjW3QuWFJBTkdFSURFTlRJRklFUl19KWAgK1xuICAgICAgICAgICAgICAgICAgIGAoPzoke3NyY1t0LlBSRVJFTEVBU0VdfSk/JHtcbiAgICAgICAgICAgICAgICAgICAgIHNyY1t0LkJVSUxEXX0/YCArXG4gICAgICAgICAgICAgICAgICAgYCk/KT9gKVxuXG5jcmVhdGVUb2tlbignWFJBTkdFUExBSU5MT09TRScsIGBbdj1cXFxcc10qKCR7c3JjW3QuWFJBTkdFSURFTlRJRklFUkxPT1NFXX0pYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKD86XFxcXC4oJHtzcmNbdC5YUkFOR0VJREVOVElGSUVSTE9PU0VdfSlgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAoPzpcXFxcLigke3NyY1t0LlhSQU5HRUlERU5USUZJRVJMT09TRV19KWAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCg/OiR7c3JjW3QuUFJFUkVMRUFTRUxPT1NFXX0pPyR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1t0LkJVSUxEXX0/YCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKT8pP2ApXG5cbmNyZWF0ZVRva2VuKCdYUkFOR0UnLCBgXiR7c3JjW3QuR1RMVF19XFxcXHMqJHtzcmNbdC5YUkFOR0VQTEFJTl19JGApXG5jcmVhdGVUb2tlbignWFJBTkdFTE9PU0UnLCBgXiR7c3JjW3QuR1RMVF19XFxcXHMqJHtzcmNbdC5YUkFOR0VQTEFJTkxPT1NFXX0kYClcblxuLy8gQ29lcmNpb24uXG4vLyBFeHRyYWN0IGFueXRoaW5nIHRoYXQgY291bGQgY29uY2VpdmFibHkgYmUgYSBwYXJ0IG9mIGEgdmFsaWQgc2VtdmVyXG5jcmVhdGVUb2tlbignQ09FUkNFUExBSU4nLCBgJHsnKF58W15cXFxcZF0pJyArXG4gICAgICAgICAgICAgICcoXFxcXGR7MSwnfSR7TUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSH19KWAgK1xuICAgICAgICAgICAgICBgKD86XFxcXC4oXFxcXGR7MSwke01BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEh9fSkpP2AgK1xuICAgICAgICAgICAgICBgKD86XFxcXC4oXFxcXGR7MSwke01BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEh9fSkpP2ApXG5jcmVhdGVUb2tlbignQ09FUkNFJywgYCR7c3JjW3QuQ09FUkNFUExBSU5dfSg/OiR8W15cXFxcZF0pYClcbmNyZWF0ZVRva2VuKCdDT0VSQ0VGVUxMJywgc3JjW3QuQ09FUkNFUExBSU5dICtcbiAgICAgICAgICAgICAgYCg/OiR7c3JjW3QuUFJFUkVMRUFTRV19KT9gICtcbiAgICAgICAgICAgICAgYCg/OiR7c3JjW3QuQlVJTERdfSk/YCArXG4gICAgICAgICAgICAgIGAoPzokfFteXFxcXGRdKWApXG5jcmVhdGVUb2tlbignQ09FUkNFUlRMJywgc3JjW3QuQ09FUkNFXSwgdHJ1ZSlcbmNyZWF0ZVRva2VuKCdDT0VSQ0VSVExGVUxMJywgc3JjW3QuQ09FUkNFRlVMTF0sIHRydWUpXG5cbi8vIFRpbGRlIHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJyZWFzb25hYmx5IGF0IG9yIGdyZWF0ZXIgdGhhblwiXG5jcmVhdGVUb2tlbignTE9ORVRJTERFJywgJyg/On4+PyknKVxuXG5jcmVhdGVUb2tlbignVElMREVUUklNJywgYChcXFxccyopJHtzcmNbdC5MT05FVElMREVdfVxcXFxzK2AsIHRydWUpXG5leHBvcnRzLnRpbGRlVHJpbVJlcGxhY2UgPSAnJDF+J1xuXG5jcmVhdGVUb2tlbignVElMREUnLCBgXiR7c3JjW3QuTE9ORVRJTERFXX0ke3NyY1t0LlhSQU5HRVBMQUlOXX0kYClcbmNyZWF0ZVRva2VuKCdUSUxERUxPT1NFJywgYF4ke3NyY1t0LkxPTkVUSUxERV19JHtzcmNbdC5YUkFOR0VQTEFJTkxPT1NFXX0kYClcblxuLy8gQ2FyZXQgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcImF0IGxlYXN0IGFuZCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoXCJcbmNyZWF0ZVRva2VuKCdMT05FQ0FSRVQnLCAnKD86XFxcXF4pJylcblxuY3JlYXRlVG9rZW4oJ0NBUkVUVFJJTScsIGAoXFxcXHMqKSR7c3JjW3QuTE9ORUNBUkVUXX1cXFxccytgLCB0cnVlKVxuZXhwb3J0cy5jYXJldFRyaW1SZXBsYWNlID0gJyQxXidcblxuY3JlYXRlVG9rZW4oJ0NBUkVUJywgYF4ke3NyY1t0LkxPTkVDQVJFVF19JHtzcmNbdC5YUkFOR0VQTEFJTl19JGApXG5jcmVhdGVUb2tlbignQ0FSRVRMT09TRScsIGBeJHtzcmNbdC5MT05FQ0FSRVRdfSR7c3JjW3QuWFJBTkdFUExBSU5MT09TRV19JGApXG5cbi8vIEEgc2ltcGxlIGd0L2x0L2VxIHRoaW5nLCBvciBqdXN0IFwiXCIgdG8gaW5kaWNhdGUgXCJhbnkgdmVyc2lvblwiXG5jcmVhdGVUb2tlbignQ09NUEFSQVRPUkxPT1NFJywgYF4ke3NyY1t0LkdUTFRdfVxcXFxzKigke3NyY1t0LkxPT1NFUExBSU5dfSkkfF4kYClcbmNyZWF0ZVRva2VuKCdDT01QQVJBVE9SJywgYF4ke3NyY1t0LkdUTFRdfVxcXFxzKigke3NyY1t0LkZVTExQTEFJTl19KSR8XiRgKVxuXG4vLyBBbiBleHByZXNzaW9uIHRvIHN0cmlwIGFueSB3aGl0ZXNwYWNlIGJldHdlZW4gdGhlIGd0bHQgYW5kIHRoZSB0aGluZ1xuLy8gaXQgbW9kaWZpZXMsIHNvIHRoYXQgYD4gMS4yLjNgID09PiBgPjEuMi4zYFxuY3JlYXRlVG9rZW4oJ0NPTVBBUkFUT1JUUklNJywgYChcXFxccyopJHtzcmNbdC5HVExUXVxufVxcXFxzKigke3NyY1t0LkxPT1NFUExBSU5dfXwke3NyY1t0LlhSQU5HRVBMQUlOXX0pYCwgdHJ1ZSlcbmV4cG9ydHMuY29tcGFyYXRvclRyaW1SZXBsYWNlID0gJyQxJDIkMydcblxuLy8gU29tZXRoaW5nIGxpa2UgYDEuMi4zIC0gMS4yLjRgXG4vLyBOb3RlIHRoYXQgdGhlc2UgYWxsIHVzZSB0aGUgbG9vc2UgZm9ybSwgYmVjYXVzZSB0aGV5J2xsIGJlXG4vLyBjaGVja2VkIGFnYWluc3QgZWl0aGVyIHRoZSBzdHJpY3Qgb3IgbG9vc2UgY29tcGFyYXRvciBmb3JtXG4vLyBsYXRlci5cbmNyZWF0ZVRva2VuKCdIWVBIRU5SQU5HRScsIGBeXFxcXHMqKCR7c3JjW3QuWFJBTkdFUExBSU5dfSlgICtcbiAgICAgICAgICAgICAgICAgICBgXFxcXHMrLVxcXFxzK2AgK1xuICAgICAgICAgICAgICAgICAgIGAoJHtzcmNbdC5YUkFOR0VQTEFJTl19KWAgK1xuICAgICAgICAgICAgICAgICAgIGBcXFxccyokYClcblxuY3JlYXRlVG9rZW4oJ0hZUEhFTlJBTkdFTE9PU0UnLCBgXlxcXFxzKigke3NyY1t0LlhSQU5HRVBMQUlOTE9PU0VdfSlgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXFxccystXFxcXHMrYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKCR7c3JjW3QuWFJBTkdFUExBSU5MT09TRV19KWAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYFxcXFxzKiRgKVxuXG4vLyBTdGFyIHJhbmdlcyBiYXNpY2FsbHkganVzdCBhbGxvdyBhbnl0aGluZyBhdCBhbGwuXG5jcmVhdGVUb2tlbignU1RBUicsICcoPHw+KT89P1xcXFxzKlxcXFwqJylcbi8vID49MC4wLjAgaXMgbGlrZSBhIHN0YXJcbmNyZWF0ZVRva2VuKCdHVEUwJywgJ15cXFxccyo+PVxcXFxzKjBcXFxcLjBcXFxcLjBcXFxccyokJylcbmNyZWF0ZVRva2VuKCdHVEUwUFJFJywgJ15cXFxccyo+PVxcXFxzKjBcXFxcLjBcXFxcLjAtMFxcXFxzKiQnKVxuIiwgIid1c2Ugc3RyaWN0J1xuXG4vLyBwYXJzZSBvdXQganVzdCB0aGUgb3B0aW9ucyB3ZSBjYXJlIGFib3V0XG5jb25zdCBsb29zZU9wdGlvbiA9IE9iamVjdC5mcmVlemUoeyBsb29zZTogdHJ1ZSB9KVxuY29uc3QgZW1wdHlPcHRzID0gT2JqZWN0LmZyZWV6ZSh7IH0pXG5jb25zdCBwYXJzZU9wdGlvbnMgPSBvcHRpb25zID0+IHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgcmV0dXJuIGVtcHR5T3B0c1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBsb29zZU9wdGlvblxuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnNcbn1cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VPcHRpb25zXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IG51bWVyaWMgPSAvXlswLTldKyQvXG5jb25zdCBjb21wYXJlSWRlbnRpZmllcnMgPSAoYSwgYikgPT4ge1xuICBpZiAodHlwZW9mIGEgPT09ICdudW1iZXInICYmIHR5cGVvZiBiID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBhID09PSBiID8gMCA6IGEgPCBiID8gLTEgOiAxXG4gIH1cblxuICBjb25zdCBhbnVtID0gbnVtZXJpYy50ZXN0KGEpXG4gIGNvbnN0IGJudW0gPSBudW1lcmljLnRlc3QoYilcblxuICBpZiAoYW51bSAmJiBibnVtKSB7XG4gICAgYSA9ICthXG4gICAgYiA9ICtiXG4gIH1cblxuICByZXR1cm4gYSA9PT0gYiA/IDBcbiAgICA6IChhbnVtICYmICFibnVtKSA/IC0xXG4gICAgOiAoYm51bSAmJiAhYW51bSkgPyAxXG4gICAgOiBhIDwgYiA/IC0xXG4gICAgOiAxXG59XG5cbmNvbnN0IHJjb21wYXJlSWRlbnRpZmllcnMgPSAoYSwgYikgPT4gY29tcGFyZUlkZW50aWZpZXJzKGIsIGEpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb21wYXJlSWRlbnRpZmllcnMsXG4gIHJjb21wYXJlSWRlbnRpZmllcnMsXG59XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGRlYnVnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZGVidWcnKVxuY29uc3QgeyBNQVhfTEVOR1RILCBNQVhfU0FGRV9JTlRFR0VSIH0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jb25zdGFudHMnKVxuY29uc3QgeyBzYWZlUmU6IHJlLCB0IH0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9yZScpXG5cbmNvbnN0IHBhcnNlT3B0aW9ucyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3BhcnNlLW9wdGlvbnMnKVxuY29uc3QgeyBjb21wYXJlSWRlbnRpZmllcnMgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lkZW50aWZpZXJzJylcbmNsYXNzIFNlbVZlciB7XG4gIGNvbnN0cnVjdG9yICh2ZXJzaW9uLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKVxuXG4gICAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpIHtcbiAgICAgIGlmICh2ZXJzaW9uLmxvb3NlID09PSAhIW9wdGlvbnMubG9vc2UgJiZcbiAgICAgICAgdmVyc2lvbi5pbmNsdWRlUHJlcmVsZWFzZSA9PT0gISFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSB7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbi52ZXJzaW9uXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgdmVyc2lvbi4gTXVzdCBiZSBhIHN0cmluZy4gR290IHR5cGUgXCIke3R5cGVvZiB2ZXJzaW9ufVwiLmApXG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgYHZlcnNpb24gaXMgbG9uZ2VyIHRoYW4gJHtNQVhfTEVOR1RIfSBjaGFyYWN0ZXJzYFxuICAgICAgKVxuICAgIH1cblxuICAgIGRlYnVnKCdTZW1WZXInLCB2ZXJzaW9uLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmxvb3NlID0gISFvcHRpb25zLmxvb3NlXG4gICAgLy8gdGhpcyBpc24ndCBhY3R1YWxseSByZWxldmFudCBmb3IgdmVyc2lvbnMsIGJ1dCBrZWVwIGl0IHNvIHRoYXQgd2VcbiAgICAvLyBkb24ndCBydW4gaW50byB0cm91YmxlIHBhc3NpbmcgdGhpcy5vcHRpb25zIGFyb3VuZC5cbiAgICB0aGlzLmluY2x1ZGVQcmVyZWxlYXNlID0gISFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlXG5cbiAgICBjb25zdCBtID0gdmVyc2lvbi50cmltKCkubWF0Y2gob3B0aW9ucy5sb29zZSA/IHJlW3QuTE9PU0VdIDogcmVbdC5GVUxMXSlcblxuICAgIGlmICghbSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBWZXJzaW9uOiAke3ZlcnNpb259YClcbiAgICB9XG5cbiAgICB0aGlzLnJhdyA9IHZlcnNpb25cblxuICAgIC8vIHRoZXNlIGFyZSBhY3R1YWxseSBudW1iZXJzXG4gICAgdGhpcy5tYWpvciA9ICttWzFdXG4gICAgdGhpcy5taW5vciA9ICttWzJdXG4gICAgdGhpcy5wYXRjaCA9ICttWzNdXG5cbiAgICBpZiAodGhpcy5tYWpvciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5tYWpvciA8IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWFqb3IgdmVyc2lvbicpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWlub3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWlub3IgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1pbm9yIHZlcnNpb24nKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhdGNoID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLnBhdGNoIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBwYXRjaCB2ZXJzaW9uJylcbiAgICB9XG5cbiAgICAvLyBudW1iZXJpZnkgYW55IHByZXJlbGVhc2UgbnVtZXJpYyBpZHNcbiAgICBpZiAoIW1bNF0pIHtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IG1bNF0uc3BsaXQoJy4nKS5tYXAoKGlkKSA9PiB7XG4gICAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoaWQpKSB7XG4gICAgICAgICAgY29uc3QgbnVtID0gK2lkXG4gICAgICAgICAgaWYgKG51bSA+PSAwICYmIG51bSA8IE1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuYnVpbGQgPSBtWzVdID8gbVs1XS5zcGxpdCgnLicpIDogW11cbiAgICB0aGlzLmZvcm1hdCgpXG4gIH1cblxuICBmb3JtYXQgKCkge1xuICAgIHRoaXMudmVyc2lvbiA9IGAke3RoaXMubWFqb3J9LiR7dGhpcy5taW5vcn0uJHt0aGlzLnBhdGNofWBcbiAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgdGhpcy52ZXJzaW9uICs9IGAtJHt0aGlzLnByZXJlbGVhc2Uuam9pbignLicpfWBcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmVyc2lvblxuICB9XG5cbiAgdG9TdHJpbmcgKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnNpb25cbiAgfVxuXG4gIGNvbXBhcmUgKG90aGVyKSB7XG4gICAgZGVidWcoJ1NlbVZlci5jb21wYXJlJywgdGhpcy52ZXJzaW9uLCB0aGlzLm9wdGlvbnMsIG90aGVyKVxuICAgIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSkge1xuICAgICAgaWYgKHR5cGVvZiBvdGhlciA9PT0gJ3N0cmluZycgJiYgb3RoZXIgPT09IHRoaXMudmVyc2lvbikge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfVxuICAgICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLm9wdGlvbnMpXG4gICAgfVxuXG4gICAgaWYgKG90aGVyLnZlcnNpb24gPT09IHRoaXMudmVyc2lvbikge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb21wYXJlTWFpbihvdGhlcikgfHwgdGhpcy5jb21wYXJlUHJlKG90aGVyKVxuICB9XG5cbiAgY29tcGFyZU1haW4gKG90aGVyKSB7XG4gICAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKSB7XG4gICAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMub3B0aW9ucylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYWpvciA8IG90aGVyLm1ham9yKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgaWYgKHRoaXMubWFqb3IgPiBvdGhlci5tYWpvcikge1xuICAgICAgcmV0dXJuIDFcbiAgICB9XG4gICAgaWYgKHRoaXMubWlub3IgPCBvdGhlci5taW5vcikge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIGlmICh0aGlzLm1pbm9yID4gb3RoZXIubWlub3IpIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuICAgIGlmICh0aGlzLnBhdGNoIDwgb3RoZXIucGF0Y2gpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBpZiAodGhpcy5wYXRjaCA+IG90aGVyLnBhdGNoKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG5cbiAgY29tcGFyZVByZSAob3RoZXIpIHtcbiAgICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpIHtcbiAgICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5vcHRpb25zKVxuICAgIH1cblxuICAgIC8vIE5PVCBoYXZpbmcgYSBwcmVyZWxlYXNlIGlzID4gaGF2aW5nIG9uZVxuICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfSBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiBvdGhlci5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICBsZXQgaSA9IDBcbiAgICBkbyB7XG4gICAgICBjb25zdCBhID0gdGhpcy5wcmVyZWxlYXNlW2ldXG4gICAgICBjb25zdCBiID0gb3RoZXIucHJlcmVsZWFzZVtpXVxuICAgICAgZGVidWcoJ3ByZXJlbGVhc2UgY29tcGFyZScsIGksIGEsIGIpXG4gICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfSBlbHNlIGlmIChiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICAgIH0gZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfSBlbHNlIGlmIChhID09PSBiKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpXG4gICAgICB9XG4gICAgfSB3aGlsZSAoKytpKVxuICB9XG5cbiAgY29tcGFyZUJ1aWxkIChvdGhlcikge1xuICAgIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSkge1xuICAgICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLm9wdGlvbnMpXG4gICAgfVxuXG4gICAgbGV0IGkgPSAwXG4gICAgZG8ge1xuICAgICAgY29uc3QgYSA9IHRoaXMuYnVpbGRbaV1cbiAgICAgIGNvbnN0IGIgPSBvdGhlci5idWlsZFtpXVxuICAgICAgZGVidWcoJ2J1aWxkIGNvbXBhcmUnLCBpLCBhLCBiKVxuICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCAmJiBiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH0gZWxzZSBpZiAoYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgICB9IGVsc2UgaWYgKGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH0gZWxzZSBpZiAoYSA9PT0gYikge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKVxuICAgICAgfVxuICAgIH0gd2hpbGUgKCsraSlcbiAgfVxuXG4gIC8vIHByZW1pbm9yIHdpbGwgYnVtcCB0aGUgdmVyc2lvbiB1cCB0byB0aGUgbmV4dCBtaW5vciByZWxlYXNlLCBhbmQgaW1tZWRpYXRlbHlcbiAgLy8gZG93biB0byBwcmUtcmVsZWFzZS4gcHJlbWFqb3IgYW5kIHByZXBhdGNoIHdvcmsgdGhlIHNhbWUgd2F5LlxuICBpbmMgKHJlbGVhc2UsIGlkZW50aWZpZXIsIGlkZW50aWZpZXJCYXNlKSB7XG4gICAgaWYgKHJlbGVhc2Uuc3RhcnRzV2l0aCgncHJlJykpIHtcbiAgICAgIGlmICghaWRlbnRpZmllciAmJiBpZGVudGlmaWVyQmFzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGluY3JlbWVudCBhcmd1bWVudDogaWRlbnRpZmllciBpcyBlbXB0eScpXG4gICAgICB9XG4gICAgICAvLyBBdm9pZCBhbiBpbnZhbGlkIHNlbXZlciByZXN1bHRzXG4gICAgICBpZiAoaWRlbnRpZmllcikge1xuICAgICAgICBjb25zdCBtYXRjaCA9IGAtJHtpZGVudGlmaWVyfWAubWF0Y2godGhpcy5vcHRpb25zLmxvb3NlID8gcmVbdC5QUkVSRUxFQVNFTE9PU0VdIDogcmVbdC5QUkVSRUxFQVNFXSlcbiAgICAgICAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSAhPT0gaWRlbnRpZmllcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCBpZGVudGlmaWVyOiAke2lkZW50aWZpZXJ9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAocmVsZWFzZSkge1xuICAgICAgY2FzZSAncHJlbWFqb3InOlxuICAgICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMFxuICAgICAgICB0aGlzLnBhdGNoID0gMFxuICAgICAgICB0aGlzLm1pbm9yID0gMFxuICAgICAgICB0aGlzLm1ham9yKytcbiAgICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIsIGlkZW50aWZpZXJCYXNlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncHJlbWlub3InOlxuICAgICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMFxuICAgICAgICB0aGlzLnBhdGNoID0gMFxuICAgICAgICB0aGlzLm1pbm9yKytcbiAgICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIsIGlkZW50aWZpZXJCYXNlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncHJlcGF0Y2gnOlxuICAgICAgICAvLyBJZiB0aGlzIGlzIGFscmVhZHkgYSBwcmVyZWxlYXNlLCBpdCB3aWxsIGJ1bXAgdG8gdGhlIG5leHQgdmVyc2lvblxuICAgICAgICAvLyBkcm9wIGFueSBwcmVyZWxlYXNlcyB0aGF0IG1pZ2h0IGFscmVhZHkgZXhpc3QsIHNpbmNlIHRoZXkgYXJlIG5vdFxuICAgICAgICAvLyByZWxldmFudCBhdCB0aGlzIHBvaW50LlxuICAgICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMFxuICAgICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyLCBpZGVudGlmaWVyQmFzZSlcbiAgICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIsIGlkZW50aWZpZXJCYXNlKVxuICAgICAgICBicmVha1xuICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIGEgbm9uLXByZXJlbGVhc2UgdmVyc2lvbiwgdGhpcyBhY3RzIHRoZSBzYW1lIGFzXG4gICAgICAvLyBwcmVwYXRjaC5cbiAgICAgIGNhc2UgJ3ByZXJlbGVhc2UnOlxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIsIGlkZW50aWZpZXJCYXNlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyLCBpZGVudGlmaWVyQmFzZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3JlbGVhc2UnOlxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdmVyc2lvbiAke3RoaXMucmF3fSBpcyBub3QgYSBwcmVyZWxlYXNlYClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdtYWpvcic6XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWFqb3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtYWpvciB2ZXJzaW9uLlxuICAgICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1ham9yLlxuICAgICAgICAvLyAxLjAuMC01IGJ1bXBzIHRvIDEuMC4wXG4gICAgICAgIC8vIDEuMS4wIGJ1bXBzIHRvIDIuMC4wXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLm1pbm9yICE9PSAwIHx8XG4gICAgICAgICAgdGhpcy5wYXRjaCAhPT0gMCB8fFxuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5tYWpvcisrXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5taW5vciA9IDBcbiAgICAgICAgdGhpcy5wYXRjaCA9IDBcbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21pbm9yJzpcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1taW5vciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1pbm9yIHZlcnNpb24uXG4gICAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWlub3IuXG4gICAgICAgIC8vIDEuMi4wLTUgYnVtcHMgdG8gMS4yLjBcbiAgICAgICAgLy8gMS4yLjEgYnVtcHMgdG8gMS4zLjBcbiAgICAgICAgaWYgKHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMubWlub3IrK1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwYXRjaCc6XG4gICAgICAgIC8vIElmIHRoaXMgaXMgbm90IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiwgaXQgd2lsbCBpbmNyZW1lbnQgdGhlIHBhdGNoLlxuICAgICAgICAvLyBJZiBpdCBpcyBhIHByZS1yZWxlYXNlIGl0IHdpbGwgYnVtcCB1cCB0byB0aGUgc2FtZSBwYXRjaCB2ZXJzaW9uLlxuICAgICAgICAvLyAxLjIuMC01IHBhdGNoZXMgdG8gMS4yLjBcbiAgICAgICAgLy8gMS4yLjAgcGF0Y2hlcyB0byAxLjIuMVxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMucGF0Y2grK1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdXG4gICAgICAgIGJyZWFrXG4gICAgICAvLyBUaGlzIHByb2JhYmx5IHNob3VsZG4ndCBiZSB1c2VkIHB1YmxpY2x5LlxuICAgICAgLy8gMS4wLjAgJ3ByZScgd291bGQgYmVjb21lIDEuMC4wLTAgd2hpY2ggaXMgdGhlIHdyb25nIGRpcmVjdGlvbi5cbiAgICAgIGNhc2UgJ3ByZSc6IHtcbiAgICAgICAgY29uc3QgYmFzZSA9IE51bWJlcihpZGVudGlmaWVyQmFzZSkgPyAxIDogMFxuXG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2Jhc2VdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGkgPSB0aGlzLnByZXJlbGVhc2UubGVuZ3RoXG4gICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJlcmVsZWFzZVtpXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlW2ldKytcbiAgICAgICAgICAgICAgaSA9IC0yXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgLy8gZGlkbid0IGluY3JlbWVudCBhbnl0aGluZ1xuICAgICAgICAgICAgaWYgKGlkZW50aWZpZXIgPT09IHRoaXMucHJlcmVsZWFzZS5qb2luKCcuJykgJiYgaWRlbnRpZmllckJhc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBpbmNyZW1lbnQgYXJndW1lbnQ6IGlkZW50aWZpZXIgYWxyZWFkeSBleGlzdHMnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlLnB1c2goYmFzZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgICAvLyAxLjIuMC1iZXRhLjEgYnVtcHMgdG8gMS4yLjAtYmV0YS4yLFxuICAgICAgICAgIC8vIDEuMi4wLWJldGEuZm9vYmx6IG9yIDEuMi4wLWJldGEgYnVtcHMgdG8gMS4yLjAtYmV0YS4wXG4gICAgICAgICAgbGV0IHByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgYmFzZV1cbiAgICAgICAgICBpZiAoaWRlbnRpZmllckJhc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcmVyZWxlYXNlID0gW2lkZW50aWZpZXJdXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb21wYXJlSWRlbnRpZmllcnModGhpcy5wcmVyZWxlYXNlWzBdLCBpZGVudGlmaWVyKSA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGlzTmFOKHRoaXMucHJlcmVsZWFzZVsxXSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gcHJlcmVsZWFzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBwcmVyZWxlYXNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgaW5jcmVtZW50IGFyZ3VtZW50OiAke3JlbGVhc2V9YClcbiAgICB9XG4gICAgdGhpcy5yYXcgPSB0aGlzLmZvcm1hdCgpXG4gICAgaWYgKHRoaXMuYnVpbGQubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJhdyArPSBgKyR7dGhpcy5idWlsZC5qb2luKCcuJyl9YFxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VtVmVyXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IHBhcnNlID0gKHZlcnNpb24sIG9wdGlvbnMsIHRocm93RXJyb3JzID0gZmFsc2UpID0+IHtcbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpIHtcbiAgICByZXR1cm4gdmVyc2lvblxuICB9XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgb3B0aW9ucylcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICBpZiAoIXRocm93RXJyb3JzKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICB0aHJvdyBlclxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcbmNvbnN0IHZhbGlkID0gKHZlcnNpb24sIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgdiA9IHBhcnNlKHZlcnNpb24sIG9wdGlvbnMpXG4gIHJldHVybiB2ID8gdi52ZXJzaW9uIDogbnVsbFxufVxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZFxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKVxuY29uc3QgY2xlYW4gPSAodmVyc2lvbiwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBzID0gcGFyc2UodmVyc2lvbi50cmltKCkucmVwbGFjZSgvXls9dl0rLywgJycpLCBvcHRpb25zKVxuICByZXR1cm4gcyA/IHMudmVyc2lvbiA6IG51bGxcbn1cbm1vZHVsZS5leHBvcnRzID0gY2xlYW5cbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuXG5jb25zdCBpbmMgPSAodmVyc2lvbiwgcmVsZWFzZSwgb3B0aW9ucywgaWRlbnRpZmllciwgaWRlbnRpZmllckJhc2UpID0+IHtcbiAgaWYgKHR5cGVvZiAob3B0aW9ucykgPT09ICdzdHJpbmcnKSB7XG4gICAgaWRlbnRpZmllckJhc2UgPSBpZGVudGlmaWVyXG4gICAgaWRlbnRpZmllciA9IG9wdGlvbnNcbiAgICBvcHRpb25zID0gdW5kZWZpbmVkXG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKFxuICAgICAgdmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlciA/IHZlcnNpb24udmVyc2lvbiA6IHZlcnNpb24sXG4gICAgICBvcHRpb25zXG4gICAgKS5pbmMocmVsZWFzZSwgaWRlbnRpZmllciwgaWRlbnRpZmllckJhc2UpLnZlcnNpb25cbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluY1xuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UuanMnKVxuXG5jb25zdCBkaWZmID0gKHZlcnNpb24xLCB2ZXJzaW9uMikgPT4ge1xuICBjb25zdCB2MSA9IHBhcnNlKHZlcnNpb24xLCBudWxsLCB0cnVlKVxuICBjb25zdCB2MiA9IHBhcnNlKHZlcnNpb24yLCBudWxsLCB0cnVlKVxuICBjb25zdCBjb21wYXJpc29uID0gdjEuY29tcGFyZSh2MilcblxuICBpZiAoY29tcGFyaXNvbiA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCB2MUhpZ2hlciA9IGNvbXBhcmlzb24gPiAwXG4gIGNvbnN0IGhpZ2hWZXJzaW9uID0gdjFIaWdoZXIgPyB2MSA6IHYyXG4gIGNvbnN0IGxvd1ZlcnNpb24gPSB2MUhpZ2hlciA/IHYyIDogdjFcbiAgY29uc3QgaGlnaEhhc1ByZSA9ICEhaGlnaFZlcnNpb24ucHJlcmVsZWFzZS5sZW5ndGhcbiAgY29uc3QgbG93SGFzUHJlID0gISFsb3dWZXJzaW9uLnByZXJlbGVhc2UubGVuZ3RoXG5cbiAgaWYgKGxvd0hhc1ByZSAmJiAhaGlnaEhhc1ByZSkge1xuICAgIC8vIEdvaW5nIGZyb20gcHJlcmVsZWFzZSAtPiBubyBwcmVyZWxlYXNlIHJlcXVpcmVzIHNvbWUgc3BlY2lhbCBjYXNpbmdcblxuICAgIC8vIElmIHRoZSBsb3cgdmVyc2lvbiBoYXMgb25seSBhIG1ham9yLCB0aGVuIGl0IHdpbGwgYWx3YXlzIGJlIGEgbWFqb3JcbiAgICAvLyBTb21lIGV4YW1wbGVzOlxuICAgIC8vIDEuMC4wLTEgLT4gMS4wLjBcbiAgICAvLyAxLjAuMC0xIC0+IDEuMS4xXG4gICAgLy8gMS4wLjAtMSAtPiAyLjAuMFxuICAgIGlmICghbG93VmVyc2lvbi5wYXRjaCAmJiAhbG93VmVyc2lvbi5taW5vcikge1xuICAgICAgcmV0dXJuICdtYWpvcidcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgbWFpbiBwYXJ0IGhhcyBubyBkaWZmZXJlbmNlXG4gICAgaWYgKGxvd1ZlcnNpb24uY29tcGFyZU1haW4oaGlnaFZlcnNpb24pID09PSAwKSB7XG4gICAgICBpZiAobG93VmVyc2lvbi5taW5vciAmJiAhbG93VmVyc2lvbi5wYXRjaCkge1xuICAgICAgICByZXR1cm4gJ21pbm9yJ1xuICAgICAgfVxuICAgICAgcmV0dXJuICdwYXRjaCdcbiAgICB9XG4gIH1cblxuICAvLyBhZGQgdGhlIGBwcmVgIHByZWZpeCBpZiB3ZSBhcmUgZ29pbmcgdG8gYSBwcmVyZWxlYXNlIHZlcnNpb25cbiAgY29uc3QgcHJlZml4ID0gaGlnaEhhc1ByZSA/ICdwcmUnIDogJydcblxuICBpZiAodjEubWFqb3IgIT09IHYyLm1ham9yKSB7XG4gICAgcmV0dXJuIHByZWZpeCArICdtYWpvcidcbiAgfVxuXG4gIGlmICh2MS5taW5vciAhPT0gdjIubWlub3IpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJ21pbm9yJ1xuICB9XG5cbiAgaWYgKHYxLnBhdGNoICE9PSB2Mi5wYXRjaCkge1xuICAgIHJldHVybiBwcmVmaXggKyAncGF0Y2gnXG4gIH1cblxuICAvLyBoaWdoIGFuZCBsb3cgYXJlIHByZXJlbGVhc2VzXG4gIHJldHVybiAncHJlcmVsZWFzZSdcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkaWZmXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IG1ham9yID0gKGEsIGxvb3NlKSA9PiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5tYWpvclxubW9kdWxlLmV4cG9ydHMgPSBtYWpvclxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBtaW5vciA9IChhLCBsb29zZSkgPT4gbmV3IFNlbVZlcihhLCBsb29zZSkubWlub3Jcbm1vZHVsZS5leHBvcnRzID0gbWlub3JcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgcGF0Y2ggPSAoYSwgbG9vc2UpID0+IG5ldyBTZW1WZXIoYSwgbG9vc2UpLnBhdGNoXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5jb25zdCBwcmVyZWxlYXNlID0gKHZlcnNpb24sIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgcGFyc2VkID0gcGFyc2UodmVyc2lvbiwgb3B0aW9ucylcbiAgcmV0dXJuIChwYXJzZWQgJiYgcGFyc2VkLnByZXJlbGVhc2UubGVuZ3RoKSA/IHBhcnNlZC5wcmVyZWxlYXNlIDogbnVsbFxufVxubW9kdWxlLmV4cG9ydHMgPSBwcmVyZWxlYXNlXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IGNvbXBhcmUgPSAoYSwgYiwgbG9vc2UpID0+XG4gIG5ldyBTZW1WZXIoYSwgbG9vc2UpLmNvbXBhcmUobmV3IFNlbVZlcihiLCBsb29zZSkpXG5cbm1vZHVsZS5leHBvcnRzID0gY29tcGFyZVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IHJjb21wYXJlID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGIsIGEsIGxvb3NlKVxubW9kdWxlLmV4cG9ydHMgPSByY29tcGFyZVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IGNvbXBhcmVMb29zZSA9IChhLCBiKSA9PiBjb21wYXJlKGEsIGIsIHRydWUpXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBhcmVMb29zZVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBjb21wYXJlQnVpbGQgPSAoYSwgYiwgbG9vc2UpID0+IHtcbiAgY29uc3QgdmVyc2lvbkEgPSBuZXcgU2VtVmVyKGEsIGxvb3NlKVxuICBjb25zdCB2ZXJzaW9uQiA9IG5ldyBTZW1WZXIoYiwgbG9vc2UpXG4gIHJldHVybiB2ZXJzaW9uQS5jb21wYXJlKHZlcnNpb25CKSB8fCB2ZXJzaW9uQS5jb21wYXJlQnVpbGQodmVyc2lvbkIpXG59XG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBhcmVCdWlsZFxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjb21wYXJlQnVpbGQgPSByZXF1aXJlKCcuL2NvbXBhcmUtYnVpbGQnKVxuY29uc3Qgc29ydCA9IChsaXN0LCBsb29zZSkgPT4gbGlzdC5zb3J0KChhLCBiKSA9PiBjb21wYXJlQnVpbGQoYSwgYiwgbG9vc2UpKVxubW9kdWxlLmV4cG9ydHMgPSBzb3J0XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNvbXBhcmVCdWlsZCA9IHJlcXVpcmUoJy4vY29tcGFyZS1idWlsZCcpXG5jb25zdCByc29ydCA9IChsaXN0LCBsb29zZSkgPT4gbGlzdC5zb3J0KChhLCBiKSA9PiBjb21wYXJlQnVpbGQoYiwgYSwgbG9vc2UpKVxubW9kdWxlLmV4cG9ydHMgPSByc29ydFxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IGd0ID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+IDBcbm1vZHVsZS5leHBvcnRzID0gZ3RcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBsdCA9IChhLCBiLCBsb29zZSkgPT4gY29tcGFyZShhLCBiLCBsb29zZSkgPCAwXG5tb2R1bGUuZXhwb3J0cyA9IGx0XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgZXEgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYSwgYiwgbG9vc2UpID09PSAwXG5tb2R1bGUuZXhwb3J0cyA9IGVxXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgbmVxID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSAhPT0gMFxubW9kdWxlLmV4cG9ydHMgPSBuZXFcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBndGUgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYSwgYiwgbG9vc2UpID49IDBcbm1vZHVsZS5leHBvcnRzID0gZ3RlXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgbHRlID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8PSAwXG5tb2R1bGUuZXhwb3J0cyA9IGx0ZVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBlcSA9IHJlcXVpcmUoJy4vZXEnKVxuY29uc3QgbmVxID0gcmVxdWlyZSgnLi9uZXEnKVxuY29uc3QgZ3QgPSByZXF1aXJlKCcuL2d0JylcbmNvbnN0IGd0ZSA9IHJlcXVpcmUoJy4vZ3RlJylcbmNvbnN0IGx0ID0gcmVxdWlyZSgnLi9sdCcpXG5jb25zdCBsdGUgPSByZXF1aXJlKCcuL2x0ZScpXG5cbmNvbnN0IGNtcCA9IChhLCBvcCwgYiwgbG9vc2UpID0+IHtcbiAgc3dpdGNoIChvcCkge1xuICAgIGNhc2UgJz09PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGEgPSBhLnZlcnNpb25cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYiA9IGIudmVyc2lvblxuICAgICAgfVxuICAgICAgcmV0dXJuIGEgPT09IGJcblxuICAgIGNhc2UgJyE9PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGEgPSBhLnZlcnNpb25cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYiA9IGIudmVyc2lvblxuICAgICAgfVxuICAgICAgcmV0dXJuIGEgIT09IGJcblxuICAgIGNhc2UgJyc6XG4gICAgY2FzZSAnPSc6XG4gICAgY2FzZSAnPT0nOlxuICAgICAgcmV0dXJuIGVxKGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnIT0nOlxuICAgICAgcmV0dXJuIG5lcShhLCBiLCBsb29zZSlcblxuICAgIGNhc2UgJz4nOlxuICAgICAgcmV0dXJuIGd0KGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnPj0nOlxuICAgICAgcmV0dXJuIGd0ZShhLCBiLCBsb29zZSlcblxuICAgIGNhc2UgJzwnOlxuICAgICAgcmV0dXJuIGx0KGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnPD0nOlxuICAgICAgcmV0dXJuIGx0ZShhLCBiLCBsb29zZSlcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIG9wZXJhdG9yOiAke29wfWApXG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gY21wXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5jb25zdCB7IHNhZmVSZTogcmUsIHQgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3JlJylcblxuY29uc3QgY29lcmNlID0gKHZlcnNpb24sIG9wdGlvbnMpID0+IHtcbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpIHtcbiAgICByZXR1cm4gdmVyc2lvblxuICB9XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnbnVtYmVyJykge1xuICAgIHZlcnNpb24gPSBTdHJpbmcodmVyc2lvbilcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICBsZXQgbWF0Y2ggPSBudWxsXG4gIGlmICghb3B0aW9ucy5ydGwpIHtcbiAgICBtYXRjaCA9IHZlcnNpb24ubWF0Y2gob3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSA/IHJlW3QuQ09FUkNFRlVMTF0gOiByZVt0LkNPRVJDRV0pXG4gIH0gZWxzZSB7XG4gICAgLy8gRmluZCB0aGUgcmlnaHQtbW9zdCBjb2VyY2libGUgc3RyaW5nIHRoYXQgZG9lcyBub3Qgc2hhcmVcbiAgICAvLyBhIHRlcm1pbnVzIHdpdGggYSBtb3JlIGxlZnQtd2FyZCBjb2VyY2libGUgc3RyaW5nLlxuICAgIC8vIEVnLCAnMS4yLjMuNCcgd2FudHMgdG8gY29lcmNlICcyLjMuNCcsIG5vdCAnMy40JyBvciAnNCdcbiAgICAvLyBXaXRoIGluY2x1ZGVQcmVyZWxlYXNlIG9wdGlvbiBzZXQsICcxLjIuMy40LXJjJyB3YW50cyB0byBjb2VyY2UgJzIuMy40LXJjJywgbm90ICcyLjMuNCdcbiAgICAvL1xuICAgIC8vIFdhbGsgdGhyb3VnaCB0aGUgc3RyaW5nIGNoZWNraW5nIHdpdGggYSAvZyByZWdleHBcbiAgICAvLyBNYW51YWxseSBzZXQgdGhlIGluZGV4IHNvIGFzIHRvIHBpY2sgdXAgb3ZlcmxhcHBpbmcgbWF0Y2hlcy5cbiAgICAvLyBTdG9wIHdoZW4gd2UgZ2V0IGEgbWF0Y2ggdGhhdCBlbmRzIGF0IHRoZSBzdHJpbmcgZW5kLCBzaW5jZSBub1xuICAgIC8vIGNvZXJjaWJsZSBzdHJpbmcgY2FuIGJlIG1vcmUgcmlnaHQtd2FyZCB3aXRob3V0IHRoZSBzYW1lIHRlcm1pbnVzLlxuICAgIGNvbnN0IGNvZXJjZVJ0bFJlZ2V4ID0gb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSA/IHJlW3QuQ09FUkNFUlRMRlVMTF0gOiByZVt0LkNPRVJDRVJUTF1cbiAgICBsZXQgbmV4dFxuICAgIHdoaWxlICgobmV4dCA9IGNvZXJjZVJ0bFJlZ2V4LmV4ZWModmVyc2lvbikpICYmXG4gICAgICAgICghbWF0Y2ggfHwgbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggIT09IHZlcnNpb24ubGVuZ3RoKVxuICAgICkge1xuICAgICAgaWYgKCFtYXRjaCB8fFxuICAgICAgICAgICAgbmV4dC5pbmRleCArIG5leHRbMF0ubGVuZ3RoICE9PSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCkge1xuICAgICAgICBtYXRjaCA9IG5leHRcbiAgICAgIH1cbiAgICAgIGNvZXJjZVJ0bFJlZ2V4Lmxhc3RJbmRleCA9IG5leHQuaW5kZXggKyBuZXh0WzFdLmxlbmd0aCArIG5leHRbMl0ubGVuZ3RoXG4gICAgfVxuICAgIC8vIGxlYXZlIGl0IGluIGEgY2xlYW4gc3RhdGVcbiAgICBjb2VyY2VSdGxSZWdleC5sYXN0SW5kZXggPSAtMVxuICB9XG5cbiAgaWYgKG1hdGNoID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IG1ham9yID0gbWF0Y2hbMl1cbiAgY29uc3QgbWlub3IgPSBtYXRjaFszXSB8fCAnMCdcbiAgY29uc3QgcGF0Y2ggPSBtYXRjaFs0XSB8fCAnMCdcbiAgY29uc3QgcHJlcmVsZWFzZSA9IG9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgJiYgbWF0Y2hbNV0gPyBgLSR7bWF0Y2hbNV19YCA6ICcnXG4gIGNvbnN0IGJ1aWxkID0gb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSAmJiBtYXRjaFs2XSA/IGArJHttYXRjaFs2XX1gIDogJydcblxuICByZXR1cm4gcGFyc2UoYCR7bWFqb3J9LiR7bWlub3J9LiR7cGF0Y2h9JHtwcmVyZWxlYXNlfSR7YnVpbGR9YCwgb3B0aW9ucylcbn1cbm1vZHVsZS5leHBvcnRzID0gY29lcmNlXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNsYXNzIExSVUNhY2hlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubWF4ID0gMTAwMFxuICAgIHRoaXMubWFwID0gbmV3IE1hcCgpXG4gIH1cblxuICBnZXQgKGtleSkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5tYXAuZ2V0KGtleSlcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW1vdmUgdGhlIGtleSBmcm9tIHRoZSBtYXAgYW5kIGFkZCBpdCB0byB0aGUgZW5kXG4gICAgICB0aGlzLm1hcC5kZWxldGUoa2V5KVxuICAgICAgdGhpcy5tYXAuc2V0KGtleSwgdmFsdWUpXG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gIH1cblxuICBkZWxldGUgKGtleSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5kZWxldGUoa2V5KVxuICB9XG5cbiAgc2V0IChrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgZGVsZXRlZCA9IHRoaXMuZGVsZXRlKGtleSlcblxuICAgIGlmICghZGVsZXRlZCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBJZiBjYWNoZSBpcyBmdWxsLCBkZWxldGUgdGhlIGxlYXN0IHJlY2VudGx5IHVzZWQgaXRlbVxuICAgICAgaWYgKHRoaXMubWFwLnNpemUgPj0gdGhpcy5tYXgpIHtcbiAgICAgICAgY29uc3QgZmlyc3RLZXkgPSB0aGlzLm1hcC5rZXlzKCkubmV4dCgpLnZhbHVlXG4gICAgICAgIHRoaXMuZGVsZXRlKGZpcnN0S2V5KVxuICAgICAgfVxuXG4gICAgICB0aGlzLm1hcC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTFJVQ2FjaGVcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU1BBQ0VfQ0hBUkFDVEVSUyA9IC9cXHMrL2dcblxuLy8gaG9pc3RlZCBjbGFzcyBmb3IgY3ljbGljIGRlcGVuZGVuY3lcbmNsYXNzIFJhbmdlIHtcbiAgY29uc3RydWN0b3IgKHJhbmdlLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKVxuXG4gICAgaWYgKHJhbmdlIGluc3RhbmNlb2YgUmFuZ2UpIHtcbiAgICAgIGlmIChcbiAgICAgICAgcmFuZ2UubG9vc2UgPT09ICEhb3B0aW9ucy5sb29zZSAmJlxuICAgICAgICByYW5nZS5pbmNsdWRlUHJlcmVsZWFzZSA9PT0gISFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLnJhdywgb3B0aW9ucylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmFuZ2UgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgICAvLyBqdXN0IHB1dCBpdCBpbiB0aGUgc2V0IGFuZCByZXR1cm5cbiAgICAgIHRoaXMucmF3ID0gcmFuZ2UudmFsdWVcbiAgICAgIHRoaXMuc2V0ID0gW1tyYW5nZV1dXG4gICAgICB0aGlzLmZvcm1hdHRlZCA9IHVuZGVmaW5lZFxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5sb29zZSA9ICEhb3B0aW9ucy5sb29zZVxuICAgIHRoaXMuaW5jbHVkZVByZXJlbGVhc2UgPSAhIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2VcblxuICAgIC8vIEZpcnN0IHJlZHVjZSBhbGwgd2hpdGVzcGFjZSBhcyBtdWNoIGFzIHBvc3NpYmxlIHNvIHdlIGRvIG5vdCBoYXZlIHRvIHJlbHlcbiAgICAvLyBvbiBwb3RlbnRpYWxseSBzbG93IHJlZ2V4ZXMgbGlrZSBcXHMqLiBUaGlzIGlzIHRoZW4gc3RvcmVkIGFuZCB1c2VkIGZvclxuICAgIC8vIGZ1dHVyZSBlcnJvciBtZXNzYWdlcyBhcyB3ZWxsLlxuICAgIHRoaXMucmF3ID0gcmFuZ2UudHJpbSgpLnJlcGxhY2UoU1BBQ0VfQ0hBUkFDVEVSUywgJyAnKVxuXG4gICAgLy8gRmlyc3QsIHNwbGl0IG9uIHx8XG4gICAgdGhpcy5zZXQgPSB0aGlzLnJhd1xuICAgICAgLnNwbGl0KCd8fCcpXG4gICAgICAvLyBtYXAgdGhlIHJhbmdlIHRvIGEgMmQgYXJyYXkgb2YgY29tcGFyYXRvcnNcbiAgICAgIC5tYXAociA9PiB0aGlzLnBhcnNlUmFuZ2Uoci50cmltKCkpKVxuICAgICAgLy8gdGhyb3cgb3V0IGFueSBjb21wYXJhdG9yIGxpc3RzIHRoYXQgYXJlIGVtcHR5XG4gICAgICAvLyB0aGlzIGdlbmVyYWxseSBtZWFucyB0aGF0IGl0IHdhcyBub3QgYSB2YWxpZCByYW5nZSwgd2hpY2ggaXMgYWxsb3dlZFxuICAgICAgLy8gaW4gbG9vc2UgbW9kZSwgYnV0IHdpbGwgc3RpbGwgdGhyb3cgaWYgdGhlIFdIT0xFIHJhbmdlIGlzIGludmFsaWQuXG4gICAgICAuZmlsdGVyKGMgPT4gYy5sZW5ndGgpXG5cbiAgICBpZiAoIXRoaXMuc2V0Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBTZW1WZXIgUmFuZ2U6ICR7dGhpcy5yYXd9YClcbiAgICB9XG5cbiAgICAvLyBpZiB3ZSBoYXZlIGFueSB0aGF0IGFyZSBub3QgdGhlIG51bGwgc2V0LCB0aHJvdyBvdXQgbnVsbCBzZXRzLlxuICAgIGlmICh0aGlzLnNldC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBrZWVwIHRoZSBmaXJzdCBvbmUsIGluIGNhc2UgdGhleSdyZSBhbGwgbnVsbCBzZXRzXG4gICAgICBjb25zdCBmaXJzdCA9IHRoaXMuc2V0WzBdXG4gICAgICB0aGlzLnNldCA9IHRoaXMuc2V0LmZpbHRlcihjID0+ICFpc051bGxTZXQoY1swXSkpXG4gICAgICBpZiAodGhpcy5zZXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuc2V0ID0gW2ZpcnN0XVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNldC5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYW55IHRoYXQgYXJlICosIHRoZW4gdGhlIHJhbmdlIGlzIGp1c3QgKlxuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgdGhpcy5zZXQpIHtcbiAgICAgICAgICBpZiAoYy5sZW5ndGggPT09IDEgJiYgaXNBbnkoY1swXSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0ID0gW2NdXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZm9ybWF0dGVkID0gdW5kZWZpbmVkXG4gIH1cblxuICBnZXQgcmFuZ2UgKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdHRlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmZvcm1hdHRlZCA9ICcnXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgIHRoaXMuZm9ybWF0dGVkICs9ICd8fCdcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wcyA9IHRoaXMuc2V0W2ldXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY29tcHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICBpZiAoayA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0dGVkICs9ICcgJ1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmZvcm1hdHRlZCArPSBjb21wc1trXS50b1N0cmluZygpLnRyaW0oKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcm1hdHRlZFxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5yYW5nZVxuICB9XG5cbiAgdG9TdHJpbmcgKCkge1xuICAgIHJldHVybiB0aGlzLnJhbmdlXG4gIH1cblxuICBwYXJzZVJhbmdlIChyYW5nZSkge1xuICAgIC8vIG1lbW9pemUgcmFuZ2UgcGFyc2luZyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgLy8gdGhpcyBpcyBhIHZlcnkgaG90IHBhdGgsIGFuZCBmdWxseSBkZXRlcm1pbmlzdGljLlxuICAgIGNvbnN0IG1lbW9PcHRzID1cbiAgICAgICh0aGlzLm9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgJiYgRkxBR19JTkNMVURFX1BSRVJFTEVBU0UpIHxcbiAgICAgICh0aGlzLm9wdGlvbnMubG9vc2UgJiYgRkxBR19MT09TRSlcbiAgICBjb25zdCBtZW1vS2V5ID0gbWVtb09wdHMgKyAnOicgKyByYW5nZVxuICAgIGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldChtZW1vS2V5KVxuICAgIGlmIChjYWNoZWQpIHtcbiAgICAgIHJldHVybiBjYWNoZWRcbiAgICB9XG5cbiAgICBjb25zdCBsb29zZSA9IHRoaXMub3B0aW9ucy5sb29zZVxuICAgIC8vIGAxLjIuMyAtIDEuMi40YCA9PiBgPj0xLjIuMyA8PTEuMi40YFxuICAgIGNvbnN0IGhyID0gbG9vc2UgPyByZVt0LkhZUEhFTlJBTkdFTE9PU0VdIDogcmVbdC5IWVBIRU5SQU5HRV1cbiAgICByYW5nZSA9IHJhbmdlLnJlcGxhY2UoaHIsIGh5cGhlblJlcGxhY2UodGhpcy5vcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSlcbiAgICBkZWJ1ZygnaHlwaGVuIHJlcGxhY2UnLCByYW5nZSlcblxuICAgIC8vIGA+IDEuMi4zIDwgMS4yLjVgID0+IGA+MS4yLjMgPDEuMi41YFxuICAgIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVt0LkNPTVBBUkFUT1JUUklNXSwgY29tcGFyYXRvclRyaW1SZXBsYWNlKVxuICAgIGRlYnVnKCdjb21wYXJhdG9yIHRyaW0nLCByYW5nZSlcblxuICAgIC8vIGB+IDEuMi4zYCA9PiBgfjEuMi4zYFxuICAgIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVt0LlRJTERFVFJJTV0sIHRpbGRlVHJpbVJlcGxhY2UpXG4gICAgZGVidWcoJ3RpbGRlIHRyaW0nLCByYW5nZSlcblxuICAgIC8vIGBeIDEuMi4zYCA9PiBgXjEuMi4zYFxuICAgIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVt0LkNBUkVUVFJJTV0sIGNhcmV0VHJpbVJlcGxhY2UpXG4gICAgZGVidWcoJ2NhcmV0IHRyaW0nLCByYW5nZSlcblxuICAgIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSByYW5nZSBpcyBjb21wbGV0ZWx5IHRyaW1tZWQgYW5kXG4gICAgLy8gcmVhZHkgdG8gYmUgc3BsaXQgaW50byBjb21wYXJhdG9ycy5cblxuICAgIGxldCByYW5nZUxpc3QgPSByYW5nZVxuICAgICAgLnNwbGl0KCcgJylcbiAgICAgIC5tYXAoY29tcCA9PiBwYXJzZUNvbXBhcmF0b3IoY29tcCwgdGhpcy5vcHRpb25zKSlcbiAgICAgIC5qb2luKCcgJylcbiAgICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgICAvLyA+PTAuMC4wIGlzIGVxdWl2YWxlbnQgdG8gKlxuICAgICAgLm1hcChjb21wID0+IHJlcGxhY2VHVEUwKGNvbXAsIHRoaXMub3B0aW9ucykpXG5cbiAgICBpZiAobG9vc2UpIHtcbiAgICAgIC8vIGluIGxvb3NlIG1vZGUsIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHZhbGlkIGNvbXBhcmF0b3JzXG4gICAgICByYW5nZUxpc3QgPSByYW5nZUxpc3QuZmlsdGVyKGNvbXAgPT4ge1xuICAgICAgICBkZWJ1ZygnbG9vc2UgaW52YWxpZCBmaWx0ZXInLCBjb21wLCB0aGlzLm9wdGlvbnMpXG4gICAgICAgIHJldHVybiAhIWNvbXAubWF0Y2gocmVbdC5DT01QQVJBVE9STE9PU0VdKVxuICAgICAgfSlcbiAgICB9XG4gICAgZGVidWcoJ3JhbmdlIGxpc3QnLCByYW5nZUxpc3QpXG5cbiAgICAvLyBpZiBhbnkgY29tcGFyYXRvcnMgYXJlIHRoZSBudWxsIHNldCwgdGhlbiByZXBsYWNlIHdpdGggSlVTVCBudWxsIHNldFxuICAgIC8vIGlmIG1vcmUgdGhhbiBvbmUgY29tcGFyYXRvciwgcmVtb3ZlIGFueSAqIGNvbXBhcmF0b3JzXG4gICAgLy8gYWxzbywgZG9uJ3QgaW5jbHVkZSB0aGUgc2FtZSBjb21wYXJhdG9yIG1vcmUgdGhhbiBvbmNlXG4gICAgY29uc3QgcmFuZ2VNYXAgPSBuZXcgTWFwKClcbiAgICBjb25zdCBjb21wYXJhdG9ycyA9IHJhbmdlTGlzdC5tYXAoY29tcCA9PiBuZXcgQ29tcGFyYXRvcihjb21wLCB0aGlzLm9wdGlvbnMpKVxuICAgIGZvciAoY29uc3QgY29tcCBvZiBjb21wYXJhdG9ycykge1xuICAgICAgaWYgKGlzTnVsbFNldChjb21wKSkge1xuICAgICAgICByZXR1cm4gW2NvbXBdXG4gICAgICB9XG4gICAgICByYW5nZU1hcC5zZXQoY29tcC52YWx1ZSwgY29tcClcbiAgICB9XG4gICAgaWYgKHJhbmdlTWFwLnNpemUgPiAxICYmIHJhbmdlTWFwLmhhcygnJykpIHtcbiAgICAgIHJhbmdlTWFwLmRlbGV0ZSgnJylcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBbLi4ucmFuZ2VNYXAudmFsdWVzKCldXG4gICAgY2FjaGUuc2V0KG1lbW9LZXksIHJlc3VsdClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBpbnRlcnNlY3RzIChyYW5nZSwgb3B0aW9ucykge1xuICAgIGlmICghKHJhbmdlIGluc3RhbmNlb2YgUmFuZ2UpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhIFJhbmdlIGlzIHJlcXVpcmVkJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zZXQuc29tZSgodGhpc0NvbXBhcmF0b3JzKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBpc1NhdGlzZmlhYmxlKHRoaXNDb21wYXJhdG9ycywgb3B0aW9ucykgJiZcbiAgICAgICAgcmFuZ2Uuc2V0LnNvbWUoKHJhbmdlQ29tcGFyYXRvcnMpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgaXNTYXRpc2ZpYWJsZShyYW5nZUNvbXBhcmF0b3JzLCBvcHRpb25zKSAmJlxuICAgICAgICAgICAgdGhpc0NvbXBhcmF0b3JzLmV2ZXJ5KCh0aGlzQ29tcGFyYXRvcikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gcmFuZ2VDb21wYXJhdG9ycy5ldmVyeSgocmFuZ2VDb21wYXJhdG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNDb21wYXJhdG9yLmludGVyc2VjdHMocmFuZ2VDb21wYXJhdG9yLCBvcHRpb25zKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIC8vIGlmIEFOWSBvZiB0aGUgc2V0cyBtYXRjaCBBTEwgb2YgaXRzIGNvbXBhcmF0b3JzLCB0aGVuIHBhc3NcbiAgdGVzdCAodmVyc2lvbikge1xuICAgIGlmICghdmVyc2lvbikge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5vcHRpb25zKVxuICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNldC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRlc3RTZXQodGhpcy5zZXRbaV0sIHZlcnNpb24sIHRoaXMub3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSYW5nZVxuXG5jb25zdCBMUlUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9scnVjYWNoZScpXG5jb25zdCBjYWNoZSA9IG5ldyBMUlUoKVxuXG5jb25zdCBwYXJzZU9wdGlvbnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9wYXJzZS1vcHRpb25zJylcbmNvbnN0IENvbXBhcmF0b3IgPSByZXF1aXJlKCcuL2NvbXBhcmF0b3InKVxuY29uc3QgZGVidWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9kZWJ1ZycpXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuL3NlbXZlcicpXG5jb25zdCB7XG4gIHNhZmVSZTogcmUsXG4gIHQsXG4gIGNvbXBhcmF0b3JUcmltUmVwbGFjZSxcbiAgdGlsZGVUcmltUmVwbGFjZSxcbiAgY2FyZXRUcmltUmVwbGFjZSxcbn0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9yZScpXG5jb25zdCB7IEZMQUdfSU5DTFVERV9QUkVSRUxFQVNFLCBGTEFHX0xPT1NFIH0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jb25zdGFudHMnKVxuXG5jb25zdCBpc051bGxTZXQgPSBjID0+IGMudmFsdWUgPT09ICc8MC4wLjAtMCdcbmNvbnN0IGlzQW55ID0gYyA9PiBjLnZhbHVlID09PSAnJ1xuXG4vLyB0YWtlIGEgc2V0IG9mIGNvbXBhcmF0b3JzIGFuZCBkZXRlcm1pbmUgd2hldGhlciB0aGVyZVxuLy8gZXhpc3RzIGEgdmVyc2lvbiB3aGljaCBjYW4gc2F0aXNmeSBpdFxuY29uc3QgaXNTYXRpc2ZpYWJsZSA9IChjb21wYXJhdG9ycywgb3B0aW9ucykgPT4ge1xuICBsZXQgcmVzdWx0ID0gdHJ1ZVxuICBjb25zdCByZW1haW5pbmdDb21wYXJhdG9ycyA9IGNvbXBhcmF0b3JzLnNsaWNlKClcbiAgbGV0IHRlc3RDb21wYXJhdG9yID0gcmVtYWluaW5nQ29tcGFyYXRvcnMucG9wKClcblxuICB3aGlsZSAocmVzdWx0ICYmIHJlbWFpbmluZ0NvbXBhcmF0b3JzLmxlbmd0aCkge1xuICAgIHJlc3VsdCA9IHJlbWFpbmluZ0NvbXBhcmF0b3JzLmV2ZXJ5KChvdGhlckNvbXBhcmF0b3IpID0+IHtcbiAgICAgIHJldHVybiB0ZXN0Q29tcGFyYXRvci5pbnRlcnNlY3RzKG90aGVyQ29tcGFyYXRvciwgb3B0aW9ucylcbiAgICB9KVxuXG4gICAgdGVzdENvbXBhcmF0b3IgPSByZW1haW5pbmdDb21wYXJhdG9ycy5wb3AoKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vLyBjb21wcmlzZWQgb2YgeHJhbmdlcywgdGlsZGVzLCBzdGFycywgYW5kIGd0bHQncyBhdCB0aGlzIHBvaW50LlxuLy8gYWxyZWFkeSByZXBsYWNlZCB0aGUgaHlwaGVuIHJhbmdlc1xuLy8gdHVybiBpbnRvIGEgc2V0IG9mIEpVU1QgY29tcGFyYXRvcnMuXG5jb25zdCBwYXJzZUNvbXBhcmF0b3IgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBjb21wID0gY29tcC5yZXBsYWNlKHJlW3QuQlVJTERdLCAnJylcbiAgZGVidWcoJ2NvbXAnLCBjb21wLCBvcHRpb25zKVxuICBjb21wID0gcmVwbGFjZUNhcmV0cyhjb21wLCBvcHRpb25zKVxuICBkZWJ1ZygnY2FyZXQnLCBjb21wKVxuICBjb21wID0gcmVwbGFjZVRpbGRlcyhjb21wLCBvcHRpb25zKVxuICBkZWJ1ZygndGlsZGVzJywgY29tcClcbiAgY29tcCA9IHJlcGxhY2VYUmFuZ2VzKGNvbXAsIG9wdGlvbnMpXG4gIGRlYnVnKCd4cmFuZ2UnLCBjb21wKVxuICBjb21wID0gcmVwbGFjZVN0YXJzKGNvbXAsIG9wdGlvbnMpXG4gIGRlYnVnKCdzdGFycycsIGNvbXApXG4gIHJldHVybiBjb21wXG59XG5cbmNvbnN0IGlzWCA9IGlkID0+ICFpZCB8fCBpZC50b0xvd2VyQ2FzZSgpID09PSAneCcgfHwgaWQgPT09ICcqJ1xuXG4vLyB+LCB+PiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIH4yLCB+Mi54LCB+Mi54LngsIH4+Miwgfj4yLnggfj4yLngueCAtLT4gPj0yLjAuMCA8My4wLjAtMFxuLy8gfjIuMCwgfjIuMC54LCB+PjIuMCwgfj4yLjAueCAtLT4gPj0yLjAuMCA8Mi4xLjAtMFxuLy8gfjEuMiwgfjEuMi54LCB+PjEuMiwgfj4xLjIueCAtLT4gPj0xLjIuMCA8MS4zLjAtMFxuLy8gfjEuMi4zLCB+PjEuMi4zIC0tPiA+PTEuMi4zIDwxLjMuMC0wXG4vLyB+MS4yLjAsIH4+MS4yLjAgLS0+ID49MS4yLjAgPDEuMy4wLTBcbi8vIH4wLjAuMSAtLT4gPj0wLjAuMSA8MC4xLjAtMFxuY29uc3QgcmVwbGFjZVRpbGRlcyA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIHJldHVybiBjb21wXG4gICAgLnRyaW0oKVxuICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgLm1hcCgoYykgPT4gcmVwbGFjZVRpbGRlKGMsIG9wdGlvbnMpKVxuICAgIC5qb2luKCcgJylcbn1cblxuY29uc3QgcmVwbGFjZVRpbGRlID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgciA9IG9wdGlvbnMubG9vc2UgPyByZVt0LlRJTERFTE9PU0VdIDogcmVbdC5USUxERV1cbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCAoXywgTSwgbSwgcCwgcHIpID0+IHtcbiAgICBkZWJ1ZygndGlsZGUnLCBjb21wLCBfLCBNLCBtLCBwLCBwcilcbiAgICBsZXQgcmV0XG5cbiAgICBpZiAoaXNYKE0pKSB7XG4gICAgICByZXQgPSAnJ1xuICAgIH0gZWxzZSBpZiAoaXNYKG0pKSB7XG4gICAgICByZXQgPSBgPj0ke019LjAuMCA8JHsrTSArIDF9LjAuMC0wYFxuICAgIH0gZWxzZSBpZiAoaXNYKHApKSB7XG4gICAgICAvLyB+MS4yID09ID49MS4yLjAgPDEuMy4wLTBcbiAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4wIDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgfSBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VUaWxkZSBwcicsIHByKVxuICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cH0tJHtwclxuICAgICAgfSA8JHtNfS4keyttICsgMX0uMC0wYFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB+MS4yLjMgPT0gPj0xLjIuMyA8MS4zLjAtMFxuICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cFxuICAgICAgfSA8JHtNfS4keyttICsgMX0uMC0wYFxuICAgIH1cblxuICAgIGRlYnVnKCd0aWxkZSByZXR1cm4nLCByZXQpXG4gICAgcmV0dXJuIHJldFxuICB9KVxufVxuXG4vLyBeIC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gXjIsIF4yLngsIF4yLngueCAtLT4gPj0yLjAuMCA8My4wLjAtMFxuLy8gXjIuMCwgXjIuMC54IC0tPiA+PTIuMC4wIDwzLjAuMC0wXG4vLyBeMS4yLCBeMS4yLnggLS0+ID49MS4yLjAgPDIuMC4wLTBcbi8vIF4xLjIuMyAtLT4gPj0xLjIuMyA8Mi4wLjAtMFxuLy8gXjEuMi4wIC0tPiA+PTEuMi4wIDwyLjAuMC0wXG4vLyBeMC4wLjEgLS0+ID49MC4wLjEgPDAuMC4yLTBcbi8vIF4wLjEuMCAtLT4gPj0wLjEuMCA8MC4yLjAtMFxuY29uc3QgcmVwbGFjZUNhcmV0cyA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIHJldHVybiBjb21wXG4gICAgLnRyaW0oKVxuICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgLm1hcCgoYykgPT4gcmVwbGFjZUNhcmV0KGMsIG9wdGlvbnMpKVxuICAgIC5qb2luKCcgJylcbn1cblxuY29uc3QgcmVwbGFjZUNhcmV0ID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCwgb3B0aW9ucylcbiAgY29uc3QgciA9IG9wdGlvbnMubG9vc2UgPyByZVt0LkNBUkVUTE9PU0VdIDogcmVbdC5DQVJFVF1cbiAgY29uc3QgeiA9IG9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgPyAnLTAnIDogJydcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCAoXywgTSwgbSwgcCwgcHIpID0+IHtcbiAgICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBfLCBNLCBtLCBwLCBwcilcbiAgICBsZXQgcmV0XG5cbiAgICBpZiAoaXNYKE0pKSB7XG4gICAgICByZXQgPSAnJ1xuICAgIH0gZWxzZSBpZiAoaXNYKG0pKSB7XG4gICAgICByZXQgPSBgPj0ke019LjAuMCR7en0gPCR7K00gKyAxfS4wLjAtMGBcbiAgICB9IGVsc2UgaWYgKGlzWChwKSkge1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uMCR7en0gPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4wJHt6fSA8JHsrTSArIDF9LjAuMC0wYFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlQ2FyZXQgcHInLCBwcilcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJykge1xuICAgICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3B9LSR7cHJcbiAgICAgICAgICB9IDwke019LiR7bX0uJHsrcCArIDF9LTBgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cH0tJHtwclxuICAgICAgICAgIH0gPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cH0tJHtwclxuICAgICAgICB9IDwkeytNICsgMX0uMC4wLTBgXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdubyBwcicpXG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpIHtcbiAgICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwXG4gICAgICAgICAgfSR7en0gPCR7TX0uJHttfS4keytwICsgMX0tMGBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwXG4gICAgICAgICAgfSR7en0gPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cFxuICAgICAgICB9IDwkeytNICsgMX0uMC4wLTBgXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVidWcoJ2NhcmV0IHJldHVybicsIHJldClcbiAgICByZXR1cm4gcmV0XG4gIH0pXG59XG5cbmNvbnN0IHJlcGxhY2VYUmFuZ2VzID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgZGVidWcoJ3JlcGxhY2VYUmFuZ2VzJywgY29tcCwgb3B0aW9ucylcbiAgcmV0dXJuIGNvbXBcbiAgICAuc3BsaXQoL1xccysvKVxuICAgIC5tYXAoKGMpID0+IHJlcGxhY2VYUmFuZ2UoYywgb3B0aW9ucykpXG4gICAgLmpvaW4oJyAnKVxufVxuXG5jb25zdCByZXBsYWNlWFJhbmdlID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgY29tcCA9IGNvbXAudHJpbSgpXG4gIGNvbnN0IHIgPSBvcHRpb25zLmxvb3NlID8gcmVbdC5YUkFOR0VMT09TRV0gOiByZVt0LlhSQU5HRV1cbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCAocmV0LCBndGx0LCBNLCBtLCBwLCBwcikgPT4ge1xuICAgIGRlYnVnKCd4UmFuZ2UnLCBjb21wLCByZXQsIGd0bHQsIE0sIG0sIHAsIHByKVxuICAgIGNvbnN0IHhNID0gaXNYKE0pXG4gICAgY29uc3QgeG0gPSB4TSB8fCBpc1gobSlcbiAgICBjb25zdCB4cCA9IHhtIHx8IGlzWChwKVxuICAgIGNvbnN0IGFueVggPSB4cFxuXG4gICAgaWYgKGd0bHQgPT09ICc9JyAmJiBhbnlYKSB7XG4gICAgICBndGx0ID0gJydcbiAgICB9XG5cbiAgICAvLyBpZiB3ZSdyZSBpbmNsdWRpbmcgcHJlcmVsZWFzZXMgaW4gdGhlIG1hdGNoLCB0aGVuIHdlIG5lZWRcbiAgICAvLyB0byBmaXggdGhpcyB0byAtMCwgdGhlIGxvd2VzdCBwb3NzaWJsZSBwcmVyZWxlYXNlIHZhbHVlXG4gICAgcHIgPSBvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlID8gJy0wJyA6ICcnXG5cbiAgICBpZiAoeE0pIHtcbiAgICAgIGlmIChndGx0ID09PSAnPicgfHwgZ3RsdCA9PT0gJzwnKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgYWxsb3dlZFxuICAgICAgICByZXQgPSAnPDAuMC4wLTAnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGZvcmJpZGRlblxuICAgICAgICByZXQgPSAnKidcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGd0bHQgJiYgYW55WCkge1xuICAgICAgLy8gd2Uga25vdyBwYXRjaCBpcyBhbiB4LCBiZWNhdXNlIHdlIGhhdmUgYW55IHggYXQgYWxsLlxuICAgICAgLy8gcmVwbGFjZSBYIHdpdGggMFxuICAgICAgaWYgKHhtKSB7XG4gICAgICAgIG0gPSAwXG4gICAgICB9XG4gICAgICBwID0gMFxuXG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nKSB7XG4gICAgICAgIC8vID4xID0+ID49Mi4wLjBcbiAgICAgICAgLy8gPjEuMiA9PiA+PTEuMy4wXG4gICAgICAgIGd0bHQgPSAnPj0nXG4gICAgICAgIGlmICh4bSkge1xuICAgICAgICAgIE0gPSArTSArIDFcbiAgICAgICAgICBtID0gMFxuICAgICAgICAgIHAgPSAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbSA9ICttICsgMVxuICAgICAgICAgIHAgPSAwXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ3RsdCA9PT0gJzw9Jykge1xuICAgICAgICAvLyA8PTAuNy54IGlzIGFjdHVhbGx5IDwwLjguMCwgc2luY2UgYW55IDAuNy54IHNob3VsZFxuICAgICAgICAvLyBwYXNzLiAgU2ltaWxhcmx5LCA8PTcueCBpcyBhY3R1YWxseSA8OC4wLjAsIGV0Yy5cbiAgICAgICAgZ3RsdCA9ICc8J1xuICAgICAgICBpZiAoeG0pIHtcbiAgICAgICAgICBNID0gK00gKyAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbSA9ICttICsgMVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChndGx0ID09PSAnPCcpIHtcbiAgICAgICAgcHIgPSAnLTAnXG4gICAgICB9XG5cbiAgICAgIHJldCA9IGAke2d0bHQgKyBNfS4ke219LiR7cH0ke3ByfWBcbiAgICB9IGVsc2UgaWYgKHhtKSB7XG4gICAgICByZXQgPSBgPj0ke019LjAuMCR7cHJ9IDwkeytNICsgMX0uMC4wLTBgXG4gICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgcmV0ID0gYD49JHtNfS4ke219LjAke3ByXG4gICAgICB9IDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgfVxuXG4gICAgZGVidWcoJ3hSYW5nZSByZXR1cm4nLCByZXQpXG5cbiAgICByZXR1cm4gcmV0XG4gIH0pXG59XG5cbi8vIEJlY2F1c2UgKiBpcyBBTkQtZWQgd2l0aCBldmVyeXRoaW5nIGVsc2UgaW4gdGhlIGNvbXBhcmF0b3IsXG4vLyBhbmQgJycgbWVhbnMgXCJhbnkgdmVyc2lvblwiLCBqdXN0IHJlbW92ZSB0aGUgKnMgZW50aXJlbHkuXG5jb25zdCByZXBsYWNlU3RhcnMgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBkZWJ1ZygncmVwbGFjZVN0YXJzJywgY29tcCwgb3B0aW9ucylcbiAgLy8gTG9vc2VuZXNzIGlzIGlnbm9yZWQgaGVyZS4gIHN0YXIgaXMgYWx3YXlzIGFzIGxvb3NlIGFzIGl0IGdldHMhXG4gIHJldHVybiBjb21wXG4gICAgLnRyaW0oKVxuICAgIC5yZXBsYWNlKHJlW3QuU1RBUl0sICcnKVxufVxuXG5jb25zdCByZXBsYWNlR1RFMCA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIGRlYnVnKCdyZXBsYWNlR1RFMCcsIGNvbXAsIG9wdGlvbnMpXG4gIHJldHVybiBjb21wXG4gICAgLnRyaW0oKVxuICAgIC5yZXBsYWNlKHJlW29wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgPyB0LkdURTBQUkUgOiB0LkdURTBdLCAnJylcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdG8gc3RyaW5nLnJlcGxhY2UocmVbdC5IWVBIRU5SQU5HRV0pXG4vLyBNLCBtLCBwYXRjaCwgcHJlcmVsZWFzZSwgYnVpbGRcbi8vIDEuMiAtIDMuNC41ID0+ID49MS4yLjAgPD0zLjQuNVxuLy8gMS4yLjMgLSAzLjQgPT4gPj0xLjIuMCA8My41LjAtMCBBbnkgMy40Lnggd2lsbCBkb1xuLy8gMS4yIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wLTBcbi8vIFRPRE8gYnVpbGQ/XG5jb25zdCBoeXBoZW5SZXBsYWNlID0gaW5jUHIgPT4gKCQwLFxuICBmcm9tLCBmTSwgZm0sIGZwLCBmcHIsIGZiLFxuICB0bywgdE0sIHRtLCB0cCwgdHByKSA9PiB7XG4gIGlmIChpc1goZk0pKSB7XG4gICAgZnJvbSA9ICcnXG4gIH0gZWxzZSBpZiAoaXNYKGZtKSkge1xuICAgIGZyb20gPSBgPj0ke2ZNfS4wLjAke2luY1ByID8gJy0wJyA6ICcnfWBcbiAgfSBlbHNlIGlmIChpc1goZnApKSB7XG4gICAgZnJvbSA9IGA+PSR7Zk19LiR7Zm19LjAke2luY1ByID8gJy0wJyA6ICcnfWBcbiAgfSBlbHNlIGlmIChmcHIpIHtcbiAgICBmcm9tID0gYD49JHtmcm9tfWBcbiAgfSBlbHNlIHtcbiAgICBmcm9tID0gYD49JHtmcm9tfSR7aW5jUHIgPyAnLTAnIDogJyd9YFxuICB9XG5cbiAgaWYgKGlzWCh0TSkpIHtcbiAgICB0byA9ICcnXG4gIH0gZWxzZSBpZiAoaXNYKHRtKSkge1xuICAgIHRvID0gYDwkeyt0TSArIDF9LjAuMC0wYFxuICB9IGVsc2UgaWYgKGlzWCh0cCkpIHtcbiAgICB0byA9IGA8JHt0TX0uJHsrdG0gKyAxfS4wLTBgXG4gIH0gZWxzZSBpZiAodHByKSB7XG4gICAgdG8gPSBgPD0ke3RNfS4ke3RtfS4ke3RwfS0ke3Rwcn1gXG4gIH0gZWxzZSBpZiAoaW5jUHIpIHtcbiAgICB0byA9IGA8JHt0TX0uJHt0bX0uJHsrdHAgKyAxfS0wYFxuICB9IGVsc2Uge1xuICAgIHRvID0gYDw9JHt0b31gXG4gIH1cblxuICByZXR1cm4gYCR7ZnJvbX0gJHt0b31gLnRyaW0oKVxufVxuXG5jb25zdCB0ZXN0U2V0ID0gKHNldCwgdmVyc2lvbiwgb3B0aW9ucykgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICghc2V0W2ldLnRlc3QodmVyc2lvbikpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGlmICh2ZXJzaW9uLnByZXJlbGVhc2UubGVuZ3RoICYmICFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSB7XG4gICAgLy8gRmluZCB0aGUgc2V0IG9mIHZlcnNpb25zIHRoYXQgYXJlIGFsbG93ZWQgdG8gaGF2ZSBwcmVyZWxlYXNlc1xuICAgIC8vIEZvciBleGFtcGxlLCBeMS4yLjMtcHIuMSBkZXN1Z2FycyB0byA+PTEuMi4zLXByLjEgPDIuMC4wXG4gICAgLy8gVGhhdCBzaG91bGQgYWxsb3cgYDEuMi4zLXByLjJgIHRvIHBhc3MuXG4gICAgLy8gSG93ZXZlciwgYDEuMi40LWFscGhhLm5vdHJlYWR5YCBzaG91bGQgTk9UIGJlIGFsbG93ZWQsXG4gICAgLy8gZXZlbiB0aG91Z2ggaXQncyB3aXRoaW4gdGhlIHJhbmdlIHNldCBieSB0aGUgY29tcGFyYXRvcnMuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYnVnKHNldFtpXS5zZW12ZXIpXG4gICAgICBpZiAoc2V0W2ldLnNlbXZlciA9PT0gQ29tcGFyYXRvci5BTlkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKHNldFtpXS5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGFsbG93ZWQgPSBzZXRbaV0uc2VtdmVyXG4gICAgICAgIGlmIChhbGxvd2VkLm1ham9yID09PSB2ZXJzaW9uLm1ham9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLm1pbm9yID09PSB2ZXJzaW9uLm1pbm9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLnBhdGNoID09PSB2ZXJzaW9uLnBhdGNoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFZlcnNpb24gaGFzIGEgLXByZSwgYnV0IGl0J3Mgbm90IG9uZSBvZiB0aGUgb25lcyB3ZSBsaWtlLlxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgQU5ZID0gU3ltYm9sKCdTZW1WZXIgQU5ZJylcbi8vIGhvaXN0ZWQgY2xhc3MgZm9yIGN5Y2xpYyBkZXBlbmRlbmN5XG5jbGFzcyBDb21wYXJhdG9yIHtcbiAgc3RhdGljIGdldCBBTlkgKCkge1xuICAgIHJldHVybiBBTllcbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChjb21wLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKVxuXG4gICAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgICBpZiAoY29tcC5sb29zZSA9PT0gISFvcHRpb25zLmxvb3NlKSB7XG4gICAgICAgIHJldHVybiBjb21wXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wID0gY29tcC52YWx1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXAgPSBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLmpvaW4oJyAnKVxuICAgIGRlYnVnKCdjb21wYXJhdG9yJywgY29tcCwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5sb29zZSA9ICEhb3B0aW9ucy5sb29zZVxuICAgIHRoaXMucGFyc2UoY29tcClcblxuICAgIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICB0aGlzLnZhbHVlID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMub3BlcmF0b3IgKyB0aGlzLnNlbXZlci52ZXJzaW9uXG4gICAgfVxuXG4gICAgZGVidWcoJ2NvbXAnLCB0aGlzKVxuICB9XG5cbiAgcGFyc2UgKGNvbXApIHtcbiAgICBjb25zdCByID0gdGhpcy5vcHRpb25zLmxvb3NlID8gcmVbdC5DT01QQVJBVE9STE9PU0VdIDogcmVbdC5DT01QQVJBVE9SXVxuICAgIGNvbnN0IG0gPSBjb21wLm1hdGNoKHIpXG5cbiAgICBpZiAoIW0pIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgY29tcGFyYXRvcjogJHtjb21wfWApXG4gICAgfVxuXG4gICAgdGhpcy5vcGVyYXRvciA9IG1bMV0gIT09IHVuZGVmaW5lZCA/IG1bMV0gOiAnJ1xuICAgIGlmICh0aGlzLm9wZXJhdG9yID09PSAnPScpIHtcbiAgICAgIHRoaXMub3BlcmF0b3IgPSAnJ1xuICAgIH1cblxuICAgIC8vIGlmIGl0IGxpdGVyYWxseSBpcyBqdXN0ICc+JyBvciAnJyB0aGVuIGFsbG93IGFueXRoaW5nLlxuICAgIGlmICghbVsyXSkge1xuICAgICAgdGhpcy5zZW12ZXIgPSBBTllcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZW12ZXIgPSBuZXcgU2VtVmVyKG1bMl0sIHRoaXMub3B0aW9ucy5sb29zZSlcbiAgICB9XG4gIH1cblxuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIHRlc3QgKHZlcnNpb24pIHtcbiAgICBkZWJ1ZygnQ29tcGFyYXRvci50ZXN0JywgdmVyc2lvbiwgdGhpcy5vcHRpb25zLmxvb3NlKVxuXG4gICAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkgfHwgdmVyc2lvbiA9PT0gQU5ZKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMub3B0aW9ucylcbiAgICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbXAodmVyc2lvbiwgdGhpcy5vcGVyYXRvciwgdGhpcy5zZW12ZXIsIHRoaXMub3B0aW9ucylcbiAgfVxuXG4gIGludGVyc2VjdHMgKGNvbXAsIG9wdGlvbnMpIHtcbiAgICBpZiAoIShjb21wIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2EgQ29tcGFyYXRvciBpcyByZXF1aXJlZCcpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3BlcmF0b3IgPT09ICcnKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmFuZ2UoY29tcC52YWx1ZSwgb3B0aW9ucykudGVzdCh0aGlzLnZhbHVlKVxuICAgIH0gZWxzZSBpZiAoY29tcC5vcGVyYXRvciA9PT0gJycpIHtcbiAgICAgIGlmIChjb21wLnZhbHVlID09PSAnJykge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSYW5nZSh0aGlzLnZhbHVlLCBvcHRpb25zKS50ZXN0KGNvbXAuc2VtdmVyKVxuICAgIH1cblxuICAgIG9wdGlvbnMgPSBwYXJzZU9wdGlvbnMob3B0aW9ucylcblxuICAgIC8vIFNwZWNpYWwgY2FzZXMgd2hlcmUgbm90aGluZyBjYW4gcG9zc2libHkgYmUgbG93ZXJcbiAgICBpZiAob3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSAmJlxuICAgICAgKHRoaXMudmFsdWUgPT09ICc8MC4wLjAtMCcgfHwgY29tcC52YWx1ZSA9PT0gJzwwLjAuMC0wJykpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgJiZcbiAgICAgICh0aGlzLnZhbHVlLnN0YXJ0c1dpdGgoJzwwLjAuMCcpIHx8IGNvbXAudmFsdWUuc3RhcnRzV2l0aCgnPDAuMC4wJykpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBTYW1lIGRpcmVjdGlvbiBpbmNyZWFzaW5nICg+IG9yID49KVxuICAgIGlmICh0aGlzLm9wZXJhdG9yLnN0YXJ0c1dpdGgoJz4nKSAmJiBjb21wLm9wZXJhdG9yLnN0YXJ0c1dpdGgoJz4nKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLy8gU2FtZSBkaXJlY3Rpb24gZGVjcmVhc2luZyAoPCBvciA8PSlcbiAgICBpZiAodGhpcy5vcGVyYXRvci5zdGFydHNXaXRoKCc8JykgJiYgY29tcC5vcGVyYXRvci5zdGFydHNXaXRoKCc8JykpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8vIHNhbWUgU2VtVmVyIGFuZCBib3RoIHNpZGVzIGFyZSBpbmNsdXNpdmUgKDw9IG9yID49KVxuICAgIGlmIChcbiAgICAgICh0aGlzLnNlbXZlci52ZXJzaW9uID09PSBjb21wLnNlbXZlci52ZXJzaW9uKSAmJlxuICAgICAgdGhpcy5vcGVyYXRvci5pbmNsdWRlcygnPScpICYmIGNvbXAub3BlcmF0b3IuaW5jbHVkZXMoJz0nKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLy8gb3Bwb3NpdGUgZGlyZWN0aW9ucyBsZXNzIHRoYW5cbiAgICBpZiAoY21wKHRoaXMuc2VtdmVyLCAnPCcsIGNvbXAuc2VtdmVyLCBvcHRpb25zKSAmJlxuICAgICAgdGhpcy5vcGVyYXRvci5zdGFydHNXaXRoKCc+JykgJiYgY29tcC5vcGVyYXRvci5zdGFydHNXaXRoKCc8JykpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8vIG9wcG9zaXRlIGRpcmVjdGlvbnMgZ3JlYXRlciB0aGFuXG4gICAgaWYgKGNtcCh0aGlzLnNlbXZlciwgJz4nLCBjb21wLnNlbXZlciwgb3B0aW9ucykgJiZcbiAgICAgIHRoaXMub3BlcmF0b3Iuc3RhcnRzV2l0aCgnPCcpICYmIGNvbXAub3BlcmF0b3Iuc3RhcnRzV2l0aCgnPicpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBhcmF0b3JcblxuY29uc3QgcGFyc2VPcHRpb25zID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcGFyc2Utb3B0aW9ucycpXG5jb25zdCB7IHNhZmVSZTogcmUsIHQgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3JlJylcbmNvbnN0IGNtcCA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9ucy9jbXAnKVxuY29uc3QgZGVidWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9kZWJ1ZycpXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuL3NlbXZlcicpXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4vcmFuZ2UnKVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuY29uc3Qgc2F0aXNmaWVzID0gKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSA9PiB7XG4gIHRyeSB7XG4gICAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHJhbmdlLnRlc3QodmVyc2lvbilcbn1cbm1vZHVsZS5leHBvcnRzID0gc2F0aXNmaWVzXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZScpXG5cbi8vIE1vc3RseSBqdXN0IGZvciB0ZXN0aW5nIGFuZCBsZWdhY3kgQVBJIHJlYXNvbnNcbmNvbnN0IHRvQ29tcGFyYXRvcnMgPSAocmFuZ2UsIG9wdGlvbnMpID0+XG4gIG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucykuc2V0XG4gICAgLm1hcChjb21wID0+IGNvbXAubWFwKGMgPT4gYy52YWx1ZSkuam9pbignICcpLnRyaW0oKS5zcGxpdCgnICcpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvQ29tcGFyYXRvcnNcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcblxuY29uc3QgbWF4U2F0aXNmeWluZyA9ICh2ZXJzaW9ucywgcmFuZ2UsIG9wdGlvbnMpID0+IHtcbiAgbGV0IG1heCA9IG51bGxcbiAgbGV0IG1heFNWID0gbnVsbFxuICBsZXQgcmFuZ2VPYmogPSBudWxsXG4gIHRyeSB7XG4gICAgcmFuZ2VPYmogPSBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICB2ZXJzaW9ucy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgaWYgKHJhbmdlT2JqLnRlc3QodikpIHtcbiAgICAgIC8vIHNhdGlzZmllcyh2LCByYW5nZSwgb3B0aW9ucylcbiAgICAgIGlmICghbWF4IHx8IG1heFNWLmNvbXBhcmUodikgPT09IC0xKSB7XG4gICAgICAgIC8vIGNvbXBhcmUobWF4LCB2LCB0cnVlKVxuICAgICAgICBtYXggPSB2XG4gICAgICAgIG1heFNWID0gbmV3IFNlbVZlcihtYXgsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuICB9KVxuICByZXR1cm4gbWF4XG59XG5tb2R1bGUuZXhwb3J0cyA9IG1heFNhdGlzZnlpbmdcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcbmNvbnN0IG1pblNhdGlzZnlpbmcgPSAodmVyc2lvbnMsIHJhbmdlLCBvcHRpb25zKSA9PiB7XG4gIGxldCBtaW4gPSBudWxsXG4gIGxldCBtaW5TViA9IG51bGxcbiAgbGV0IHJhbmdlT2JqID0gbnVsbFxuICB0cnkge1xuICAgIHJhbmdlT2JqID0gbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKVxuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgdmVyc2lvbnMuZm9yRWFjaCgodikgPT4ge1xuICAgIGlmIChyYW5nZU9iai50ZXN0KHYpKSB7XG4gICAgICAvLyBzYXRpc2ZpZXModiwgcmFuZ2UsIG9wdGlvbnMpXG4gICAgICBpZiAoIW1pbiB8fCBtaW5TVi5jb21wYXJlKHYpID09PSAxKSB7XG4gICAgICAgIC8vIGNvbXBhcmUobWluLCB2LCB0cnVlKVxuICAgICAgICBtaW4gPSB2XG4gICAgICAgIG1pblNWID0gbmV3IFNlbVZlcihtaW4sIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuICB9KVxuICByZXR1cm4gbWluXG59XG5tb2R1bGUuZXhwb3J0cyA9IG1pblNhdGlzZnlpbmdcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcbmNvbnN0IGd0ID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2d0JylcblxuY29uc3QgbWluVmVyc2lvbiA9IChyYW5nZSwgbG9vc2UpID0+IHtcbiAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKVxuXG4gIGxldCBtaW52ZXIgPSBuZXcgU2VtVmVyKCcwLjAuMCcpXG4gIGlmIChyYW5nZS50ZXN0KG1pbnZlcikpIHtcbiAgICByZXR1cm4gbWludmVyXG4gIH1cblxuICBtaW52ZXIgPSBuZXcgU2VtVmVyKCcwLjAuMC0wJylcbiAgaWYgKHJhbmdlLnRlc3QobWludmVyKSkge1xuICAgIHJldHVybiBtaW52ZXJcbiAgfVxuXG4gIG1pbnZlciA9IG51bGxcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZS5zZXQubGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXVxuXG4gICAgbGV0IHNldE1pbiA9IG51bGxcbiAgICBjb21wYXJhdG9ycy5mb3JFYWNoKChjb21wYXJhdG9yKSA9PiB7XG4gICAgICAvLyBDbG9uZSB0byBhdm9pZCBtYW5pcHVsYXRpbmcgdGhlIGNvbXBhcmF0b3IncyBzZW12ZXIgb2JqZWN0LlxuICAgICAgY29uc3QgY29tcHZlciA9IG5ldyBTZW1WZXIoY29tcGFyYXRvci5zZW12ZXIudmVyc2lvbilcbiAgICAgIHN3aXRjaCAoY29tcGFyYXRvci5vcGVyYXRvcikge1xuICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICBpZiAoY29tcHZlci5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29tcHZlci5wYXRjaCsrXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXB2ZXIucHJlcmVsZWFzZS5wdXNoKDApXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbXB2ZXIucmF3ID0gY29tcHZlci5mb3JtYXQoKVxuICAgICAgICAgIC8qIGZhbGx0aHJvdWdoICovXG4gICAgICAgIGNhc2UgJyc6XG4gICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICBpZiAoIXNldE1pbiB8fCBndChjb21wdmVyLCBzZXRNaW4pKSB7XG4gICAgICAgICAgICBzZXRNaW4gPSBjb21wdmVyXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICBjYXNlICc8PSc6XG4gICAgICAgICAgLyogSWdub3JlIG1heGltdW0gdmVyc2lvbnMgKi9cbiAgICAgICAgICBicmVha1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBvcGVyYXRpb246ICR7Y29tcGFyYXRvci5vcGVyYXRvcn1gKVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKHNldE1pbiAmJiAoIW1pbnZlciB8fCBndChtaW52ZXIsIHNldE1pbikpKSB7XG4gICAgICBtaW52ZXIgPSBzZXRNaW5cbiAgICB9XG4gIH1cblxuICBpZiAobWludmVyICYmIHJhbmdlLnRlc3QobWludmVyKSkge1xuICAgIHJldHVybiBtaW52ZXJcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5tb2R1bGUuZXhwb3J0cyA9IG1pblZlcnNpb25cbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcbmNvbnN0IHZhbGlkUmFuZ2UgPSAocmFuZ2UsIG9wdGlvbnMpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBSZXR1cm4gJyonIGluc3RlYWQgb2YgJycgc28gdGhhdCB0cnV0aGluZXNzIHdvcmtzLlxuICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBpZiBpdCdzIGludmFsaWQgYW55d2F5XG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucykucmFuZ2UgfHwgJyonXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZFJhbmdlXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IENvbXBhcmF0b3IgPSByZXF1aXJlKCcuLi9jbGFzc2VzL2NvbXBhcmF0b3InKVxuY29uc3QgeyBBTlkgfSA9IENvbXBhcmF0b3JcbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZScpXG5jb25zdCBzYXRpc2ZpZXMgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvc2F0aXNmaWVzJylcbmNvbnN0IGd0ID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2d0JylcbmNvbnN0IGx0ID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2x0JylcbmNvbnN0IGx0ZSA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9ucy9sdGUnKVxuY29uc3QgZ3RlID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2d0ZScpXG5cbmNvbnN0IG91dHNpZGUgPSAodmVyc2lvbiwgcmFuZ2UsIGhpbG8sIG9wdGlvbnMpID0+IHtcbiAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgb3B0aW9ucylcbiAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpXG5cbiAgbGV0IGd0Zm4sIGx0ZWZuLCBsdGZuLCBjb21wLCBlY29tcFxuICBzd2l0Y2ggKGhpbG8pIHtcbiAgICBjYXNlICc+JzpcbiAgICAgIGd0Zm4gPSBndFxuICAgICAgbHRlZm4gPSBsdGVcbiAgICAgIGx0Zm4gPSBsdFxuICAgICAgY29tcCA9ICc+J1xuICAgICAgZWNvbXAgPSAnPj0nXG4gICAgICBicmVha1xuICAgIGNhc2UgJzwnOlxuICAgICAgZ3RmbiA9IGx0XG4gICAgICBsdGVmbiA9IGd0ZVxuICAgICAgbHRmbiA9IGd0XG4gICAgICBjb21wID0gJzwnXG4gICAgICBlY29tcCA9ICc8PSdcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3QgcHJvdmlkZSBhIGhpbG8gdmFsIG9mIFwiPFwiIG9yIFwiPlwiJylcbiAgfVxuXG4gIC8vIElmIGl0IHNhdGlzZmllcyB0aGUgcmFuZ2UgaXQgaXMgbm90IG91dHNpZGVcbiAgaWYgKHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgb3B0aW9ucykpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIEZyb20gbm93IG9uLCB2YXJpYWJsZSB0ZXJtcyBhcmUgYXMgaWYgd2UncmUgaW4gXCJndHJcIiBtb2RlLlxuICAvLyBidXQgbm90ZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgZmxpcHBlZCBmb3IgdGhlIFwibHRyXCIgZnVuY3Rpb24uXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZS5zZXQubGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXVxuXG4gICAgbGV0IGhpZ2ggPSBudWxsXG4gICAgbGV0IGxvdyA9IG51bGxcblxuICAgIGNvbXBhcmF0b3JzLmZvckVhY2goKGNvbXBhcmF0b3IpID0+IHtcbiAgICAgIGlmIChjb21wYXJhdG9yLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICAgIGNvbXBhcmF0b3IgPSBuZXcgQ29tcGFyYXRvcignPj0wLjAuMCcpXG4gICAgICB9XG4gICAgICBoaWdoID0gaGlnaCB8fCBjb21wYXJhdG9yXG4gICAgICBsb3cgPSBsb3cgfHwgY29tcGFyYXRvclxuICAgICAgaWYgKGd0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGhpZ2guc2VtdmVyLCBvcHRpb25zKSkge1xuICAgICAgICBoaWdoID0gY29tcGFyYXRvclxuICAgICAgfSBlbHNlIGlmIChsdGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBsb3cuc2VtdmVyLCBvcHRpb25zKSkge1xuICAgICAgICBsb3cgPSBjb21wYXJhdG9yXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIElmIHRoZSBlZGdlIHZlcnNpb24gY29tcGFyYXRvciBoYXMgYSBvcGVyYXRvciB0aGVuIG91ciB2ZXJzaW9uXG4gICAgLy8gaXNuJ3Qgb3V0c2lkZSBpdFxuICAgIGlmIChoaWdoLm9wZXJhdG9yID09PSBjb21wIHx8IGhpZ2gub3BlcmF0b3IgPT09IGVjb21wKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgbG93ZXN0IHZlcnNpb24gY29tcGFyYXRvciBoYXMgYW4gb3BlcmF0b3IgYW5kIG91ciB2ZXJzaW9uXG4gICAgLy8gaXMgbGVzcyB0aGFuIGl0IHRoZW4gaXQgaXNuJ3QgaGlnaGVyIHRoYW4gdGhlIHJhbmdlXG4gICAgaWYgKCghbG93Lm9wZXJhdG9yIHx8IGxvdy5vcGVyYXRvciA9PT0gY29tcCkgJiZcbiAgICAgICAgbHRlZm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSBpZiAobG93Lm9wZXJhdG9yID09PSBlY29tcCAmJiBsdGZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdXRzaWRlXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGdyZWF0ZXIgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZS5cbmNvbnN0IG91dHNpZGUgPSByZXF1aXJlKCcuL291dHNpZGUnKVxuY29uc3QgZ3RyID0gKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSA9PiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPicsIG9wdGlvbnMpXG5tb2R1bGUuZXhwb3J0cyA9IGd0clxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBvdXRzaWRlID0gcmVxdWlyZSgnLi9vdXRzaWRlJylcbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGxlc3MgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZVxuY29uc3QgbHRyID0gKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSA9PiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPCcsIG9wdGlvbnMpXG5tb2R1bGUuZXhwb3J0cyA9IGx0clxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuY29uc3QgaW50ZXJzZWN0cyA9IChyMSwgcjIsIG9wdGlvbnMpID0+IHtcbiAgcjEgPSBuZXcgUmFuZ2UocjEsIG9wdGlvbnMpXG4gIHIyID0gbmV3IFJhbmdlKHIyLCBvcHRpb25zKVxuICByZXR1cm4gcjEuaW50ZXJzZWN0cyhyMiwgb3B0aW9ucylcbn1cbm1vZHVsZS5leHBvcnRzID0gaW50ZXJzZWN0c1xuIiwgIid1c2Ugc3RyaWN0J1xuXG4vLyBnaXZlbiBhIHNldCBvZiB2ZXJzaW9ucyBhbmQgYSByYW5nZSwgY3JlYXRlIGEgXCJzaW1wbGlmaWVkXCIgcmFuZ2Vcbi8vIHRoYXQgaW5jbHVkZXMgdGhlIHNhbWUgdmVyc2lvbnMgdGhhdCB0aGUgb3JpZ2luYWwgcmFuZ2UgZG9lc1xuLy8gSWYgdGhlIG9yaWdpbmFsIHJhbmdlIGlzIHNob3J0ZXIgdGhhbiB0aGUgc2ltcGxpZmllZCBvbmUsIHJldHVybiB0aGF0LlxuY29uc3Qgc2F0aXNmaWVzID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL3NhdGlzZmllcy5qcycpXG5jb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2NvbXBhcmUuanMnKVxubW9kdWxlLmV4cG9ydHMgPSAodmVyc2lvbnMsIHJhbmdlLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHNldCA9IFtdXG4gIGxldCBmaXJzdCA9IG51bGxcbiAgbGV0IHByZXYgPSBudWxsXG4gIGNvbnN0IHYgPSB2ZXJzaW9ucy5zb3J0KChhLCBiKSA9PiBjb21wYXJlKGEsIGIsIG9wdGlvbnMpKVxuICBmb3IgKGNvbnN0IHZlcnNpb24gb2Ygdikge1xuICAgIGNvbnN0IGluY2x1ZGVkID0gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKVxuICAgIGlmIChpbmNsdWRlZCkge1xuICAgICAgcHJldiA9IHZlcnNpb25cbiAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgZmlyc3QgPSB2ZXJzaW9uXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgIHNldC5wdXNoKFtmaXJzdCwgcHJldl0pXG4gICAgICB9XG4gICAgICBwcmV2ID0gbnVsbFxuICAgICAgZmlyc3QgPSBudWxsXG4gICAgfVxuICB9XG4gIGlmIChmaXJzdCkge1xuICAgIHNldC5wdXNoKFtmaXJzdCwgbnVsbF0pXG4gIH1cblxuICBjb25zdCByYW5nZXMgPSBbXVxuICBmb3IgKGNvbnN0IFttaW4sIG1heF0gb2Ygc2V0KSB7XG4gICAgaWYgKG1pbiA9PT0gbWF4KSB7XG4gICAgICByYW5nZXMucHVzaChtaW4pXG4gICAgfSBlbHNlIGlmICghbWF4ICYmIG1pbiA9PT0gdlswXSkge1xuICAgICAgcmFuZ2VzLnB1c2goJyonKVxuICAgIH0gZWxzZSBpZiAoIW1heCkge1xuICAgICAgcmFuZ2VzLnB1c2goYD49JHttaW59YClcbiAgICB9IGVsc2UgaWYgKG1pbiA9PT0gdlswXSkge1xuICAgICAgcmFuZ2VzLnB1c2goYDw9JHttYXh9YClcbiAgICB9IGVsc2Uge1xuICAgICAgcmFuZ2VzLnB1c2goYCR7bWlufSAtICR7bWF4fWApXG4gICAgfVxuICB9XG4gIGNvbnN0IHNpbXBsaWZpZWQgPSByYW5nZXMuam9pbignIHx8ICcpXG4gIGNvbnN0IG9yaWdpbmFsID0gdHlwZW9mIHJhbmdlLnJhdyA9PT0gJ3N0cmluZycgPyByYW5nZS5yYXcgOiBTdHJpbmcocmFuZ2UpXG4gIHJldHVybiBzaW1wbGlmaWVkLmxlbmd0aCA8IG9yaWdpbmFsLmxlbmd0aCA/IHNpbXBsaWZpZWQgOiByYW5nZVxufVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UuanMnKVxuY29uc3QgQ29tcGFyYXRvciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvY29tcGFyYXRvci5qcycpXG5jb25zdCB7IEFOWSB9ID0gQ29tcGFyYXRvclxuY29uc3Qgc2F0aXNmaWVzID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL3NhdGlzZmllcy5qcycpXG5jb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2NvbXBhcmUuanMnKVxuXG4vLyBDb21wbGV4IHJhbmdlIGByMSB8fCByMiB8fCAuLi5gIGlzIGEgc3Vic2V0IG9mIGBSMSB8fCBSMiB8fCAuLi5gIGlmZjpcbi8vIC0gRXZlcnkgc2ltcGxlIHJhbmdlIGByMSwgcjIsIC4uLmAgaXMgYSBudWxsIHNldCwgT1Jcbi8vIC0gRXZlcnkgc2ltcGxlIHJhbmdlIGByMSwgcjIsIC4uLmAgd2hpY2ggaXMgbm90IGEgbnVsbCBzZXQgaXMgYSBzdWJzZXQgb2Zcbi8vICAgc29tZSBgUjEsIFIyLCAuLi5gXG4vL1xuLy8gU2ltcGxlIHJhbmdlIGBjMSBjMiAuLi5gIGlzIGEgc3Vic2V0IG9mIHNpbXBsZSByYW5nZSBgQzEgQzIgLi4uYCBpZmY6XG4vLyAtIElmIGMgaXMgb25seSB0aGUgQU5ZIGNvbXBhcmF0b3Jcbi8vICAgLSBJZiBDIGlzIG9ubHkgdGhlIEFOWSBjb21wYXJhdG9yLCByZXR1cm4gdHJ1ZVxuLy8gICAtIEVsc2UgaWYgaW4gcHJlcmVsZWFzZSBtb2RlLCByZXR1cm4gZmFsc2Vcbi8vICAgLSBlbHNlIHJlcGxhY2UgYyB3aXRoIGBbPj0wLjAuMF1gXG4vLyAtIElmIEMgaXMgb25seSB0aGUgQU5ZIGNvbXBhcmF0b3Jcbi8vICAgLSBpZiBpbiBwcmVyZWxlYXNlIG1vZGUsIHJldHVybiB0cnVlXG4vLyAgIC0gZWxzZSByZXBsYWNlIEMgd2l0aCBgWz49MC4wLjBdYFxuLy8gLSBMZXQgRVEgYmUgdGhlIHNldCBvZiA9IGNvbXBhcmF0b3JzIGluIGNcbi8vIC0gSWYgRVEgaXMgbW9yZSB0aGFuIG9uZSwgcmV0dXJuIHRydWUgKG51bGwgc2V0KVxuLy8gLSBMZXQgR1QgYmUgdGhlIGhpZ2hlc3QgPiBvciA+PSBjb21wYXJhdG9yIGluIGNcbi8vIC0gTGV0IExUIGJlIHRoZSBsb3dlc3QgPCBvciA8PSBjb21wYXJhdG9yIGluIGNcbi8vIC0gSWYgR1QgYW5kIExULCBhbmQgR1Quc2VtdmVyID4gTFQuc2VtdmVyLCByZXR1cm4gdHJ1ZSAobnVsbCBzZXQpXG4vLyAtIElmIGFueSBDIGlzIGEgPSByYW5nZSwgYW5kIEdUIG9yIExUIGFyZSBzZXQsIHJldHVybiBmYWxzZVxuLy8gLSBJZiBFUVxuLy8gICAtIElmIEdULCBhbmQgRVEgZG9lcyBub3Qgc2F0aXNmeSBHVCwgcmV0dXJuIHRydWUgKG51bGwgc2V0KVxuLy8gICAtIElmIExULCBhbmQgRVEgZG9lcyBub3Qgc2F0aXNmeSBMVCwgcmV0dXJuIHRydWUgKG51bGwgc2V0KVxuLy8gICAtIElmIEVRIHNhdGlzZmllcyBldmVyeSBDLCByZXR1cm4gdHJ1ZVxuLy8gICAtIEVsc2UgcmV0dXJuIGZhbHNlXG4vLyAtIElmIEdUXG4vLyAgIC0gSWYgR1Quc2VtdmVyIGlzIGxvd2VyIHRoYW4gYW55ID4gb3IgPj0gY29tcCBpbiBDLCByZXR1cm4gZmFsc2Vcbi8vICAgLSBJZiBHVCBpcyA+PSwgYW5kIEdULnNlbXZlciBkb2VzIG5vdCBzYXRpc2Z5IGV2ZXJ5IEMsIHJldHVybiBmYWxzZVxuLy8gICAtIElmIEdULnNlbXZlciBoYXMgYSBwcmVyZWxlYXNlLCBhbmQgbm90IGluIHByZXJlbGVhc2UgbW9kZVxuLy8gICAgIC0gSWYgbm8gQyBoYXMgYSBwcmVyZWxlYXNlIGFuZCB0aGUgR1Quc2VtdmVyIHR1cGxlLCByZXR1cm4gZmFsc2Vcbi8vIC0gSWYgTFRcbi8vICAgLSBJZiBMVC5zZW12ZXIgaXMgZ3JlYXRlciB0aGFuIGFueSA8IG9yIDw9IGNvbXAgaW4gQywgcmV0dXJuIGZhbHNlXG4vLyAgIC0gSWYgTFQgaXMgPD0sIGFuZCBMVC5zZW12ZXIgZG9lcyBub3Qgc2F0aXNmeSBldmVyeSBDLCByZXR1cm4gZmFsc2Vcbi8vICAgLSBJZiBMVC5zZW12ZXIgaGFzIGEgcHJlcmVsZWFzZSwgYW5kIG5vdCBpbiBwcmVyZWxlYXNlIG1vZGVcbi8vICAgICAtIElmIG5vIEMgaGFzIGEgcHJlcmVsZWFzZSBhbmQgdGhlIExULnNlbXZlciB0dXBsZSwgcmV0dXJuIGZhbHNlXG4vLyAtIEVsc2UgcmV0dXJuIHRydWVcblxuY29uc3Qgc3Vic2V0ID0gKHN1YiwgZG9tLCBvcHRpb25zID0ge30pID0+IHtcbiAgaWYgKHN1YiA9PT0gZG9tKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHN1YiA9IG5ldyBSYW5nZShzdWIsIG9wdGlvbnMpXG4gIGRvbSA9IG5ldyBSYW5nZShkb20sIG9wdGlvbnMpXG4gIGxldCBzYXdOb25OdWxsID0gZmFsc2VcblxuICBPVVRFUjogZm9yIChjb25zdCBzaW1wbGVTdWIgb2Ygc3ViLnNldCkge1xuICAgIGZvciAoY29uc3Qgc2ltcGxlRG9tIG9mIGRvbS5zZXQpIHtcbiAgICAgIGNvbnN0IGlzU3ViID0gc2ltcGxlU3Vic2V0KHNpbXBsZVN1Yiwgc2ltcGxlRG9tLCBvcHRpb25zKVxuICAgICAgc2F3Tm9uTnVsbCA9IHNhd05vbk51bGwgfHwgaXNTdWIgIT09IG51bGxcbiAgICAgIGlmIChpc1N1Yikge1xuICAgICAgICBjb250aW51ZSBPVVRFUlxuICAgICAgfVxuICAgIH1cbiAgICAvLyB0aGUgbnVsbCBzZXQgaXMgYSBzdWJzZXQgb2YgZXZlcnl0aGluZywgYnV0IG51bGwgc2ltcGxlIHJhbmdlcyBpblxuICAgIC8vIGEgY29tcGxleCByYW5nZSBzaG91bGQgYmUgaWdub3JlZC4gIHNvIGlmIHdlIHNhdyBhIG5vbi1udWxsIHJhbmdlLFxuICAgIC8vIHRoZW4gd2Uga25vdyB0aGlzIGlzbid0IGEgc3Vic2V0LCBidXQgaWYgRVZFUlkgc2ltcGxlIHJhbmdlIHdhcyBudWxsLFxuICAgIC8vIHRoZW4gaXQgaXMgYSBzdWJzZXQuXG4gICAgaWYgKHNhd05vbk51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5jb25zdCBtaW5pbXVtVmVyc2lvbldpdGhQcmVSZWxlYXNlID0gW25ldyBDb21wYXJhdG9yKCc+PTAuMC4wLTAnKV1cbmNvbnN0IG1pbmltdW1WZXJzaW9uID0gW25ldyBDb21wYXJhdG9yKCc+PTAuMC4wJyldXG5cbmNvbnN0IHNpbXBsZVN1YnNldCA9IChzdWIsIGRvbSwgb3B0aW9ucykgPT4ge1xuICBpZiAoc3ViID09PSBkb20pIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHN1Yi5sZW5ndGggPT09IDEgJiYgc3ViWzBdLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgaWYgKGRvbS5sZW5ndGggPT09IDEgJiYgZG9tWzBdLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSkge1xuICAgICAgc3ViID0gbWluaW11bVZlcnNpb25XaXRoUHJlUmVsZWFzZVxuICAgIH0gZWxzZSB7XG4gICAgICBzdWIgPSBtaW5pbXVtVmVyc2lvblxuICAgIH1cbiAgfVxuXG4gIGlmIChkb20ubGVuZ3RoID09PSAxICYmIGRvbVswXS5zZW12ZXIgPT09IEFOWSkge1xuICAgIGlmIChvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBkb20gPSBtaW5pbXVtVmVyc2lvblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGVxU2V0ID0gbmV3IFNldCgpXG4gIGxldCBndCwgbHRcbiAgZm9yIChjb25zdCBjIG9mIHN1Yikge1xuICAgIGlmIChjLm9wZXJhdG9yID09PSAnPicgfHwgYy5vcGVyYXRvciA9PT0gJz49Jykge1xuICAgICAgZ3QgPSBoaWdoZXJHVChndCwgYywgb3B0aW9ucylcbiAgICB9IGVsc2UgaWYgKGMub3BlcmF0b3IgPT09ICc8JyB8fCBjLm9wZXJhdG9yID09PSAnPD0nKSB7XG4gICAgICBsdCA9IGxvd2VyTFQobHQsIGMsIG9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVxU2V0LmFkZChjLnNlbXZlcilcbiAgICB9XG4gIH1cblxuICBpZiAoZXFTZXQuc2l6ZSA+IDEpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgbGV0IGd0bHRDb21wXG4gIGlmIChndCAmJiBsdCkge1xuICAgIGd0bHRDb21wID0gY29tcGFyZShndC5zZW12ZXIsIGx0LnNlbXZlciwgb3B0aW9ucylcbiAgICBpZiAoZ3RsdENvbXAgPiAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0gZWxzZSBpZiAoZ3RsdENvbXAgPT09IDAgJiYgKGd0Lm9wZXJhdG9yICE9PSAnPj0nIHx8IGx0Lm9wZXJhdG9yICE9PSAnPD0nKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICAvLyB3aWxsIGl0ZXJhdGUgb25lIG9yIHplcm8gdGltZXNcbiAgZm9yIChjb25zdCBlcSBvZiBlcVNldCkge1xuICAgIGlmIChndCAmJiAhc2F0aXNmaWVzKGVxLCBTdHJpbmcoZ3QpLCBvcHRpb25zKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBpZiAobHQgJiYgIXNhdGlzZmllcyhlcSwgU3RyaW5nKGx0KSwgb3B0aW9ucykpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjIG9mIGRvbSkge1xuICAgICAgaWYgKCFzYXRpc2ZpZXMoZXEsIFN0cmluZyhjKSwgb3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGxldCBoaWdoZXIsIGxvd2VyXG4gIGxldCBoYXNEb21MVCwgaGFzRG9tR1RcbiAgLy8gaWYgdGhlIHN1YnNldCBoYXMgYSBwcmVyZWxlYXNlLCB3ZSBuZWVkIGEgY29tcGFyYXRvciBpbiB0aGUgc3VwZXJzZXRcbiAgLy8gd2l0aCB0aGUgc2FtZSB0dXBsZSBhbmQgYSBwcmVyZWxlYXNlLCBvciBpdCdzIG5vdCBhIHN1YnNldFxuICBsZXQgbmVlZERvbUxUUHJlID0gbHQgJiZcbiAgICAhb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSAmJlxuICAgIGx0LnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCA/IGx0LnNlbXZlciA6IGZhbHNlXG4gIGxldCBuZWVkRG9tR1RQcmUgPSBndCAmJlxuICAgICFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlICYmXG4gICAgZ3Quc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoID8gZ3Quc2VtdmVyIDogZmFsc2VcbiAgLy8gZXhjZXB0aW9uOiA8MS4yLjMtMCBpcyB0aGUgc2FtZSBhcyA8MS4yLjNcbiAgaWYgKG5lZWREb21MVFByZSAmJiBuZWVkRG9tTFRQcmUucHJlcmVsZWFzZS5sZW5ndGggPT09IDEgJiZcbiAgICAgIGx0Lm9wZXJhdG9yID09PSAnPCcgJiYgbmVlZERvbUxUUHJlLnByZXJlbGVhc2VbMF0gPT09IDApIHtcbiAgICBuZWVkRG9tTFRQcmUgPSBmYWxzZVxuICB9XG5cbiAgZm9yIChjb25zdCBjIG9mIGRvbSkge1xuICAgIGhhc0RvbUdUID0gaGFzRG9tR1QgfHwgYy5vcGVyYXRvciA9PT0gJz4nIHx8IGMub3BlcmF0b3IgPT09ICc+PSdcbiAgICBoYXNEb21MVCA9IGhhc0RvbUxUIHx8IGMub3BlcmF0b3IgPT09ICc8JyB8fCBjLm9wZXJhdG9yID09PSAnPD0nXG4gICAgaWYgKGd0KSB7XG4gICAgICBpZiAobmVlZERvbUdUUHJlKSB7XG4gICAgICAgIGlmIChjLnNlbXZlci5wcmVyZWxlYXNlICYmIGMuc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoICYmXG4gICAgICAgICAgICBjLnNlbXZlci5tYWpvciA9PT0gbmVlZERvbUdUUHJlLm1ham9yICYmXG4gICAgICAgICAgICBjLnNlbXZlci5taW5vciA9PT0gbmVlZERvbUdUUHJlLm1pbm9yICYmXG4gICAgICAgICAgICBjLnNlbXZlci5wYXRjaCA9PT0gbmVlZERvbUdUUHJlLnBhdGNoKSB7XG4gICAgICAgICAgbmVlZERvbUdUUHJlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGMub3BlcmF0b3IgPT09ICc+JyB8fCBjLm9wZXJhdG9yID09PSAnPj0nKSB7XG4gICAgICAgIGhpZ2hlciA9IGhpZ2hlckdUKGd0LCBjLCBvcHRpb25zKVxuICAgICAgICBpZiAoaGlnaGVyID09PSBjICYmIGhpZ2hlciAhPT0gZ3QpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChndC5vcGVyYXRvciA9PT0gJz49JyAmJiAhc2F0aXNmaWVzKGd0LnNlbXZlciwgU3RyaW5nKGMpLCBvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGx0KSB7XG4gICAgICBpZiAobmVlZERvbUxUUHJlKSB7XG4gICAgICAgIGlmIChjLnNlbXZlci5wcmVyZWxlYXNlICYmIGMuc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoICYmXG4gICAgICAgICAgICBjLnNlbXZlci5tYWpvciA9PT0gbmVlZERvbUxUUHJlLm1ham9yICYmXG4gICAgICAgICAgICBjLnNlbXZlci5taW5vciA9PT0gbmVlZERvbUxUUHJlLm1pbm9yICYmXG4gICAgICAgICAgICBjLnNlbXZlci5wYXRjaCA9PT0gbmVlZERvbUxUUHJlLnBhdGNoKSB7XG4gICAgICAgICAgbmVlZERvbUxUUHJlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGMub3BlcmF0b3IgPT09ICc8JyB8fCBjLm9wZXJhdG9yID09PSAnPD0nKSB7XG4gICAgICAgIGxvd2VyID0gbG93ZXJMVChsdCwgYywgb3B0aW9ucylcbiAgICAgICAgaWYgKGxvd2VyID09PSBjICYmIGxvd2VyICE9PSBsdCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGx0Lm9wZXJhdG9yID09PSAnPD0nICYmICFzYXRpc2ZpZXMobHQuc2VtdmVyLCBTdHJpbmcoYyksIG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWMub3BlcmF0b3IgJiYgKGx0IHx8IGd0KSAmJiBndGx0Q29tcCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlcmUgd2FzIGEgPCBvciA+LCBhbmQgbm90aGluZyBpbiB0aGUgZG9tLCB0aGVuIG11c3QgYmUgZmFsc2VcbiAgLy8gVU5MRVNTIGl0IHdhcyBsaW1pdGVkIGJ5IGFub3RoZXIgcmFuZ2UgaW4gdGhlIG90aGVyIGRpcmVjdGlvbi5cbiAgLy8gRWcsID4xLjAuMCA8MS4wLjEgaXMgc3RpbGwgYSBzdWJzZXQgb2YgPDIuMC4wXG4gIGlmIChndCAmJiBoYXNEb21MVCAmJiAhbHQgJiYgZ3RsdENvbXAgIT09IDApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmIChsdCAmJiBoYXNEb21HVCAmJiAhZ3QgJiYgZ3RsdENvbXAgIT09IDApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIHdlIG5lZWRlZCBhIHByZXJlbGVhc2UgcmFuZ2UgaW4gYSBzcGVjaWZpYyB0dXBsZSwgYnV0IGRpZG4ndCBnZXQgb25lXG4gIC8vIHRoZW4gdGhpcyBpc24ndCBhIHN1YnNldC4gIGVnID49MS4yLjMtcHJlIGlzIG5vdCBhIHN1YnNldCBvZiA+PTEuMC4wLFxuICAvLyBiZWNhdXNlIGl0IGluY2x1ZGVzIHByZXJlbGVhc2VzIGluIHRoZSAxLjIuMyB0dXBsZVxuICBpZiAobmVlZERvbUdUUHJlIHx8IG5lZWREb21MVFByZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuLy8gPj0xLjIuMyBpcyBsb3dlciB0aGFuID4xLjIuM1xuY29uc3QgaGlnaGVyR1QgPSAoYSwgYiwgb3B0aW9ucykgPT4ge1xuICBpZiAoIWEpIHtcbiAgICByZXR1cm4gYlxuICB9XG4gIGNvbnN0IGNvbXAgPSBjb21wYXJlKGEuc2VtdmVyLCBiLnNlbXZlciwgb3B0aW9ucylcbiAgcmV0dXJuIGNvbXAgPiAwID8gYVxuICAgIDogY29tcCA8IDAgPyBiXG4gICAgOiBiLm9wZXJhdG9yID09PSAnPicgJiYgYS5vcGVyYXRvciA9PT0gJz49JyA/IGJcbiAgICA6IGFcbn1cblxuLy8gPD0xLjIuMyBpcyBoaWdoZXIgdGhhbiA8MS4yLjNcbmNvbnN0IGxvd2VyTFQgPSAoYSwgYiwgb3B0aW9ucykgPT4ge1xuICBpZiAoIWEpIHtcbiAgICByZXR1cm4gYlxuICB9XG4gIGNvbnN0IGNvbXAgPSBjb21wYXJlKGEuc2VtdmVyLCBiLnNlbXZlciwgb3B0aW9ucylcbiAgcmV0dXJuIGNvbXAgPCAwID8gYVxuICAgIDogY29tcCA+IDAgPyBiXG4gICAgOiBiLm9wZXJhdG9yID09PSAnPCcgJiYgYS5vcGVyYXRvciA9PT0gJzw9JyA/IGJcbiAgICA6IGFcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdWJzZXRcbiIsICIndXNlIHN0cmljdCdcblxuLy8ganVzdCBwcmUtbG9hZCBhbGwgdGhlIHN0dWZmIHRoYXQgaW5kZXguanMgbGF6aWx5IGV4cG9ydHNcbmNvbnN0IGludGVybmFsUmUgPSByZXF1aXJlKCcuL2ludGVybmFsL3JlJylcbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvY29uc3RhbnRzJylcbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgaWRlbnRpZmllcnMgPSByZXF1aXJlKCcuL2ludGVybmFsL2lkZW50aWZpZXJzJylcbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvcGFyc2UnKVxuY29uc3QgdmFsaWQgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy92YWxpZCcpXG5jb25zdCBjbGVhbiA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2NsZWFuJylcbmNvbnN0IGluYyA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2luYycpXG5jb25zdCBkaWZmID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvZGlmZicpXG5jb25zdCBtYWpvciA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL21ham9yJylcbmNvbnN0IG1pbm9yID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvbWlub3InKVxuY29uc3QgcGF0Y2ggPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9wYXRjaCcpXG5jb25zdCBwcmVyZWxlYXNlID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvcHJlcmVsZWFzZScpXG5jb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvY29tcGFyZScpXG5jb25zdCByY29tcGFyZSA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3Jjb21wYXJlJylcbmNvbnN0IGNvbXBhcmVMb29zZSA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2NvbXBhcmUtbG9vc2UnKVxuY29uc3QgY29tcGFyZUJ1aWxkID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvY29tcGFyZS1idWlsZCcpXG5jb25zdCBzb3J0ID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvc29ydCcpXG5jb25zdCByc29ydCA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3Jzb3J0JylcbmNvbnN0IGd0ID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvZ3QnKVxuY29uc3QgbHQgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9sdCcpXG5jb25zdCBlcSA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2VxJylcbmNvbnN0IG5lcSA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL25lcScpXG5jb25zdCBndGUgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9ndGUnKVxuY29uc3QgbHRlID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvbHRlJylcbmNvbnN0IGNtcCA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2NtcCcpXG5jb25zdCBjb2VyY2UgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9jb2VyY2UnKVxuY29uc3QgQ29tcGFyYXRvciA9IHJlcXVpcmUoJy4vY2xhc3Nlcy9jb21wYXJhdG9yJylcbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi9jbGFzc2VzL3JhbmdlJylcbmNvbnN0IHNhdGlzZmllcyA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3NhdGlzZmllcycpXG5jb25zdCB0b0NvbXBhcmF0b3JzID0gcmVxdWlyZSgnLi9yYW5nZXMvdG8tY29tcGFyYXRvcnMnKVxuY29uc3QgbWF4U2F0aXNmeWluZyA9IHJlcXVpcmUoJy4vcmFuZ2VzL21heC1zYXRpc2Z5aW5nJylcbmNvbnN0IG1pblNhdGlzZnlpbmcgPSByZXF1aXJlKCcuL3Jhbmdlcy9taW4tc2F0aXNmeWluZycpXG5jb25zdCBtaW5WZXJzaW9uID0gcmVxdWlyZSgnLi9yYW5nZXMvbWluLXZlcnNpb24nKVxuY29uc3QgdmFsaWRSYW5nZSA9IHJlcXVpcmUoJy4vcmFuZ2VzL3ZhbGlkJylcbmNvbnN0IG91dHNpZGUgPSByZXF1aXJlKCcuL3Jhbmdlcy9vdXRzaWRlJylcbmNvbnN0IGd0ciA9IHJlcXVpcmUoJy4vcmFuZ2VzL2d0cicpXG5jb25zdCBsdHIgPSByZXF1aXJlKCcuL3Jhbmdlcy9sdHInKVxuY29uc3QgaW50ZXJzZWN0cyA9IHJlcXVpcmUoJy4vcmFuZ2VzL2ludGVyc2VjdHMnKVxuY29uc3Qgc2ltcGxpZnlSYW5nZSA9IHJlcXVpcmUoJy4vcmFuZ2VzL3NpbXBsaWZ5JylcbmNvbnN0IHN1YnNldCA9IHJlcXVpcmUoJy4vcmFuZ2VzL3N1YnNldCcpXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGFyc2UsXG4gIHZhbGlkLFxuICBjbGVhbixcbiAgaW5jLFxuICBkaWZmLFxuICBtYWpvcixcbiAgbWlub3IsXG4gIHBhdGNoLFxuICBwcmVyZWxlYXNlLFxuICBjb21wYXJlLFxuICByY29tcGFyZSxcbiAgY29tcGFyZUxvb3NlLFxuICBjb21wYXJlQnVpbGQsXG4gIHNvcnQsXG4gIHJzb3J0LFxuICBndCxcbiAgbHQsXG4gIGVxLFxuICBuZXEsXG4gIGd0ZSxcbiAgbHRlLFxuICBjbXAsXG4gIGNvZXJjZSxcbiAgQ29tcGFyYXRvcixcbiAgUmFuZ2UsXG4gIHNhdGlzZmllcyxcbiAgdG9Db21wYXJhdG9ycyxcbiAgbWF4U2F0aXNmeWluZyxcbiAgbWluU2F0aXNmeWluZyxcbiAgbWluVmVyc2lvbixcbiAgdmFsaWRSYW5nZSxcbiAgb3V0c2lkZSxcbiAgZ3RyLFxuICBsdHIsXG4gIGludGVyc2VjdHMsXG4gIHNpbXBsaWZ5UmFuZ2UsXG4gIHN1YnNldCxcbiAgU2VtVmVyLFxuICByZTogaW50ZXJuYWxSZS5yZSxcbiAgc3JjOiBpbnRlcm5hbFJlLnNyYyxcbiAgdG9rZW5zOiBpbnRlcm5hbFJlLnQsXG4gIFNFTVZFUl9TUEVDX1ZFUlNJT046IGNvbnN0YW50cy5TRU1WRVJfU1BFQ19WRVJTSU9OLFxuICBSRUxFQVNFX1RZUEVTOiBjb25zdGFudHMuUkVMRUFTRV9UWVBFUyxcbiAgY29tcGFyZUlkZW50aWZpZXJzOiBpZGVudGlmaWVycy5jb21wYXJlSWRlbnRpZmllcnMsXG4gIHJjb21wYXJlSWRlbnRpZmllcnM6IGlkZW50aWZpZXJzLnJjb21wYXJlSWRlbnRpZmllcnMsXG59XG4iLCAiaW1wb3J0IHsgcmVhZEZpbGUsIHdyaXRlRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJztcblxuaW50ZXJmYWNlIFNwbGl0Q2hhbmdlbG9nUmVzdWx0IHtcbiAgICBiZWZvcmU6IHN0cmluZztcbiAgICBzZWN0aW9uOiBzdHJpbmc7XG4gICAgYWZ0ZXI6IHN0cmluZztcbn1cblxuY29uc3QgV0FURVJNQVJLX1JFR0VYID0gLzwhLS0gcHJlcmVsZWFzZTogLis/IC0tPi87XG5cbmZ1bmN0aW9uIG1ha2VXYXRlcm1hcmsodmVyc2lvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDwhLS0gcHJlcmVsZWFzZTogJHt2ZXJzaW9ufSAtLT5gO1xufVxuXG5mdW5jdGlvbiBzcGxpdENoYW5nZWxvZyhjb250ZW50OiBzdHJpbmcpOiBTcGxpdENoYW5nZWxvZ1Jlc3VsdCB7XG4gICAgY29uc3QgaGVhZGVyVGV4dCA9ICcjIyBbVW5yZWxlYXNlZF0nO1xuICAgIGNvbnN0IHN0YXJ0ID0gY29udGVudC5pbmRleE9mKGhlYWRlclRleHQpO1xuXG4gICAgaWYgKHN0YXJ0ID09PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFtVbnJlbGVhc2VkXSBzZWN0aW9uIGZvdW5kIGluIGNoYW5nZWxvZy4nKTtcbiAgICB9XG4gICAgY29uc3QgYWZ0ZXJIZWFkZXIgPSBzdGFydCArIGhlYWRlclRleHQubGVuZ3RoO1xuICAgIGNvbnN0IHNlcGFyYXRvcklkeCA9IGNvbnRlbnQuaW5kZXhPZignXFxuLS0tJywgYWZ0ZXJIZWFkZXIpO1xuICAgIGNvbnN0IG5leHRTZWN0aW9uSWR4ID0gY29udGVudC5pbmRleE9mKCdcXG4jIyBbJywgYWZ0ZXJIZWFkZXIpO1xuXG4gICAgbGV0IGVuZDogbnVtYmVyO1xuXG4gICAgaWYgKHNlcGFyYXRvcklkeCAhPT0gLTEgJiYgKG5leHRTZWN0aW9uSWR4ID09PSAtMSB8fCBzZXBhcmF0b3JJZHggPCBuZXh0U2VjdGlvbklkeCkpIHtcbiAgICAgICAgZW5kID0gc2VwYXJhdG9ySWR4O1xuICAgIH0gZWxzZSBpZiAobmV4dFNlY3Rpb25JZHggIT09IC0xKSB7XG4gICAgICAgIGVuZCA9IG5leHRTZWN0aW9uSWR4O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZCA9IGNvbnRlbnQubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBiZWZvcmU6IGNvbnRlbnQuc2xpY2UoMCwgc3RhcnQpLFxuICAgICAgICBzZWN0aW9uOiBjb250ZW50LnNsaWNlKHN0YXJ0LCBlbmQpLFxuICAgICAgICBhZnRlcjogY29udGVudC5zbGljZShlbmQpLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFNlY3Rpb25Cb2R5KHNlY3Rpb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbmV3bGluZUlkeCA9IHNlY3Rpb24uaW5kZXhPZignXFxuJyk7XG5cbiAgICByZXR1cm4gbmV3bGluZUlkeCA9PT0gLTEgPyAnJyA6IHNlY3Rpb24uc2xpY2UobmV3bGluZUlkeCArIDEpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zZXJ0T3JVcGRhdGVXYXRlcm1hcmsoY2hhbmdlbG9nUGF0aDogc3RyaW5nLCB2ZXJzaW9uOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGUoY2hhbmdlbG9nUGF0aCwgeyBlbmNvZGluZzogJ3V0Zi04JyB9KTtcbiAgICBjb25zdCB7IGJlZm9yZSwgc2VjdGlvbiwgYWZ0ZXIgfSA9IHNwbGl0Q2hhbmdlbG9nKGNvbnRlbnQpO1xuICAgIGNvbnN0IHdhdGVybWFyayA9IG1ha2VXYXRlcm1hcmsodmVyc2lvbik7XG5cbiAgICBsZXQgbmV3U2VjdGlvbjogc3RyaW5nO1xuXG4gICAgaWYgKFdBVEVSTUFSS19SRUdFWC50ZXN0KHNlY3Rpb24pKSB7XG4gICAgICAgIG5ld1NlY3Rpb24gPSBzZWN0aW9uLnJlcGxhY2UoV0FURVJNQVJLX1JFR0VYLCB3YXRlcm1hcmspO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1NlY3Rpb24gPSBzZWN0aW9uLnRyaW1FbmQoKSArICdcXG5cXG4nICsgd2F0ZXJtYXJrICsgJ1xcbic7XG4gICAgfVxuXG4gICAgYXdhaXQgd3JpdGVGaWxlKGNoYW5nZWxvZ1BhdGgsIGJlZm9yZSArIG5ld1NlY3Rpb24gKyBhZnRlciwgeyBlbmNvZGluZzogJ3V0Zi04JyB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4dHJhY3RQcmVyZWxlYXNlRGVsdGEoY2hhbmdlbG9nUGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGUoY2hhbmdlbG9nUGF0aCwgeyBlbmNvZGluZzogJ3V0Zi04JyB9KTtcbiAgICBjb25zdCB7IHNlY3Rpb24gfSA9IHNwbGl0Q2hhbmdlbG9nKGNvbnRlbnQpO1xuICAgIGNvbnN0IGJvZHkgPSBnZXRTZWN0aW9uQm9keShzZWN0aW9uKTtcbiAgICBjb25zdCB3YXRlcm1hcmtJZHggPSBib2R5LnNlYXJjaChXQVRFUk1BUktfUkVHRVgpO1xuXG4gICAgaWYgKHdhdGVybWFya0lkeCAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGJvZHkuc2xpY2UoMCwgd2F0ZXJtYXJrSWR4KS50cmltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvZHkudHJpbSgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXh0cmFjdFN0YWJsZU5vdGVzKGNoYW5nZWxvZ1BhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIGV4dHJhY3RQcmVyZWxlYXNlRGVsdGEoY2hhbmdlbG9nUGF0aCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFtcFN0YWJsZVZlcnNpb24oY2hhbmdlbG9nUGF0aDogc3RyaW5nLCB2ZXJzaW9uOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGUoY2hhbmdlbG9nUGF0aCwgeyBlbmNvZGluZzogJ3V0Zi04JyB9KTtcbiAgICBjb25zdCB7IGJlZm9yZSwgc2VjdGlvbiwgYWZ0ZXIgfSA9IHNwbGl0Q2hhbmdlbG9nKGNvbnRlbnQpO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gICAgbGV0IGJvZHkgPSBnZXRTZWN0aW9uQm9keShzZWN0aW9uKTtcblxuICAgIGJvZHkgPSBib2R5LnJlcGxhY2UoL1xcbj88IS0tIHByZXJlbGVhc2U6IC4rPyAtLT5cXG4/L2csICdcXG4nKTtcbiAgICBib2R5ID0gYm9keS5yZXBsYWNlKC9cXG57Myx9L2csICdcXG5cXG4nKS50cmltRW5kKCk7XG5cbiAgICBjb25zdCB2ZXJzaW9uZWRTZWN0aW9uID0gYCMjIFske3ZlcnNpb259XSAtICR7ZGF0ZX0ke2JvZHkgPyAnXFxuJyArIGJvZHkgOiAnJ31gO1xuICAgIGNvbnN0IGZyZXNoVW5yZWxlYXNlZCA9ICcjIyBbVW5yZWxlYXNlZF1cXG4nO1xuXG4gICAgYXdhaXQgd3JpdGVGaWxlKGNoYW5nZWxvZ1BhdGgsIGJlZm9yZSArIGZyZXNoVW5yZWxlYXNlZCArICdcXG4tLS1cXG5cXG4nICsgdmVyc2lvbmVkU2VjdGlvbiArIGFmdGVyLCB7XG4gICAgICAgIGVuY29kaW5nOiAndXRmLTgnLFxuICAgIH0pO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyQWdlbnQoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSBcIm9iamVjdFwiICYmIFwidXNlckFnZW50XCIgaW4gbmF2aWdhdG9yKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgcHJvY2Vzcy52ZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYE5vZGUuanMvJHtwcm9jZXNzLnZlcnNpb24uc3Vic3RyKDEpfSAoJHtwcm9jZXNzLnBsYXRmb3JtfTsgJHtcbiAgICAgIHByb2Nlc3MuYXJjaFxuICAgIH0pYDtcbiAgfVxuXG4gIHJldHVybiBcIjxlbnZpcm9ubWVudCB1bmRldGVjdGFibGU+XCI7XG59XG4iLCAiLy8gQHRzLWNoZWNrXG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlcihzdGF0ZSwgbmFtZSwgbWV0aG9kLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgbWV0aG9kICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJtZXRob2QgZm9yIGJlZm9yZSBob29rIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5hbWUpKSB7XG4gICAgcmV0dXJuIG5hbWUucmV2ZXJzZSgpLnJlZHVjZSgoY2FsbGJhY2ssIG5hbWUpID0+IHtcbiAgICAgIHJldHVybiByZWdpc3Rlci5iaW5kKG51bGwsIHN0YXRlLCBuYW1lLCBjYWxsYmFjaywgb3B0aW9ucyk7XG4gICAgfSwgbWV0aG9kKSgpO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgIGlmICghc3RhdGUucmVnaXN0cnlbbmFtZV0pIHtcbiAgICAgIHJldHVybiBtZXRob2Qob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlLnJlZ2lzdHJ5W25hbWVdLnJlZHVjZSgobWV0aG9kLCByZWdpc3RlcmVkKSA9PiB7XG4gICAgICByZXR1cm4gcmVnaXN0ZXJlZC5ob29rLmJpbmQobnVsbCwgbWV0aG9kLCBvcHRpb25zKTtcbiAgICB9LCBtZXRob2QpKCk7XG4gIH0pO1xufVxuIiwgIi8vIEB0cy1jaGVja1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkSG9vayhzdGF0ZSwga2luZCwgbmFtZSwgaG9vaykge1xuICBjb25zdCBvcmlnID0gaG9vaztcbiAgaWYgKCFzdGF0ZS5yZWdpc3RyeVtuYW1lXSkge1xuICAgIHN0YXRlLnJlZ2lzdHJ5W25hbWVdID0gW107XG4gIH1cblxuICBpZiAoa2luZCA9PT0gXCJiZWZvcmVcIikge1xuICAgIGhvb2sgPSAobWV0aG9kLCBvcHRpb25zKSA9PiB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgLnRoZW4ob3JpZy5iaW5kKG51bGwsIG9wdGlvbnMpKVxuICAgICAgICAudGhlbihtZXRob2QuYmluZChudWxsLCBvcHRpb25zKSk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChraW5kID09PSBcImFmdGVyXCIpIHtcbiAgICBob29rID0gKG1ldGhvZCwgb3B0aW9ucykgPT4ge1xuICAgICAgbGV0IHJlc3VsdDtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAudGhlbihtZXRob2QuYmluZChudWxsLCBvcHRpb25zKSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdF8pID0+IHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHRfO1xuICAgICAgICAgIHJldHVybiBvcmlnKHJlc3VsdCwgb3B0aW9ucyk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKGtpbmQgPT09IFwiZXJyb3JcIikge1xuICAgIGhvb2sgPSAobWV0aG9kLCBvcHRpb25zKSA9PiB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgLnRoZW4obWV0aG9kLmJpbmQobnVsbCwgb3B0aW9ucykpXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZXR1cm4gb3JpZyhlcnJvciwgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBzdGF0ZS5yZWdpc3RyeVtuYW1lXS5wdXNoKHtcbiAgICBob29rOiBob29rLFxuICAgIG9yaWc6IG9yaWcsXG4gIH0pO1xufVxuIiwgIi8vIEB0cy1jaGVja1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSG9vayhzdGF0ZSwgbmFtZSwgbWV0aG9kKSB7XG4gIGlmICghc3RhdGUucmVnaXN0cnlbbmFtZV0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBpbmRleCA9IHN0YXRlLnJlZ2lzdHJ5W25hbWVdXG4gICAgLm1hcCgocmVnaXN0ZXJlZCkgPT4ge1xuICAgICAgcmV0dXJuIHJlZ2lzdGVyZWQub3JpZztcbiAgICB9KVxuICAgIC5pbmRleE9mKG1ldGhvZCk7XG5cbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRlLnJlZ2lzdHJ5W25hbWVdLnNwbGljZShpbmRleCwgMSk7XG59XG4iLCAiLy8gQHRzLWNoZWNrXG5cbmltcG9ydCB7IHJlZ2lzdGVyIH0gZnJvbSBcIi4vbGliL3JlZ2lzdGVyLmpzXCI7XG5pbXBvcnQgeyBhZGRIb29rIH0gZnJvbSBcIi4vbGliL2FkZC5qc1wiO1xuaW1wb3J0IHsgcmVtb3ZlSG9vayB9IGZyb20gXCIuL2xpYi9yZW1vdmUuanNcIjtcblxuLy8gYmluZCB3aXRoIGFycmF5IG9mIGFyZ3VtZW50czogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxNzkyOTEzXG5jb25zdCBiaW5kID0gRnVuY3Rpb24uYmluZDtcbmNvbnN0IGJpbmRhYmxlID0gYmluZC5iaW5kKGJpbmQpO1xuXG5mdW5jdGlvbiBiaW5kQXBpKGhvb2ssIHN0YXRlLCBuYW1lKSB7XG4gIGNvbnN0IHJlbW92ZUhvb2tSZWYgPSBiaW5kYWJsZShyZW1vdmVIb29rLCBudWxsKS5hcHBseShcbiAgICBudWxsLFxuICAgIG5hbWUgPyBbc3RhdGUsIG5hbWVdIDogW3N0YXRlXVxuICApO1xuICBob29rLmFwaSA9IHsgcmVtb3ZlOiByZW1vdmVIb29rUmVmIH07XG4gIGhvb2sucmVtb3ZlID0gcmVtb3ZlSG9va1JlZjtcbiAgW1wiYmVmb3JlXCIsIFwiZXJyb3JcIiwgXCJhZnRlclwiLCBcIndyYXBcIl0uZm9yRWFjaCgoa2luZCkgPT4ge1xuICAgIGNvbnN0IGFyZ3MgPSBuYW1lID8gW3N0YXRlLCBraW5kLCBuYW1lXSA6IFtzdGF0ZSwga2luZF07XG4gICAgaG9va1traW5kXSA9IGhvb2suYXBpW2tpbmRdID0gYmluZGFibGUoYWRkSG9vaywgbnVsbCkuYXBwbHkobnVsbCwgYXJncyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBTaW5ndWxhcigpIHtcbiAgY29uc3Qgc2luZ3VsYXJIb29rTmFtZSA9IFN5bWJvbChcIlNpbmd1bGFyXCIpO1xuICBjb25zdCBzaW5ndWxhckhvb2tTdGF0ZSA9IHtcbiAgICByZWdpc3RyeToge30sXG4gIH07XG4gIGNvbnN0IHNpbmd1bGFySG9vayA9IHJlZ2lzdGVyLmJpbmQobnVsbCwgc2luZ3VsYXJIb29rU3RhdGUsIHNpbmd1bGFySG9va05hbWUpO1xuICBiaW5kQXBpKHNpbmd1bGFySG9vaywgc2luZ3VsYXJIb29rU3RhdGUsIHNpbmd1bGFySG9va05hbWUpO1xuICByZXR1cm4gc2luZ3VsYXJIb29rO1xufVxuXG5mdW5jdGlvbiBDb2xsZWN0aW9uKCkge1xuICBjb25zdCBzdGF0ZSA9IHtcbiAgICByZWdpc3RyeToge30sXG4gIH07XG5cbiAgY29uc3QgaG9vayA9IHJlZ2lzdGVyLmJpbmQobnVsbCwgc3RhdGUpO1xuICBiaW5kQXBpKGhvb2ssIHN0YXRlKTtcblxuICByZXR1cm4gaG9vaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBTaW5ndWxhciwgQ29sbGVjdGlvbiB9O1xuIiwgIi8vIHBrZy9kaXN0LXNyYy9kZWZhdWx0cy5qc1xuaW1wb3J0IHsgZ2V0VXNlckFnZW50IH0gZnJvbSBcInVuaXZlcnNhbC11c2VyLWFnZW50XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy92ZXJzaW9uLmpzXG52YXIgVkVSU0lPTiA9IFwiMC4wLjAtZGV2ZWxvcG1lbnRcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL2RlZmF1bHRzLmpzXG52YXIgdXNlckFnZW50ID0gYG9jdG9raXQtZW5kcG9pbnQuanMvJHtWRVJTSU9OfSAke2dldFVzZXJBZ2VudCgpfWA7XG52YXIgREVGQVVMVFMgPSB7XG4gIG1ldGhvZDogXCJHRVRcIixcbiAgYmFzZVVybDogXCJodHRwczovL2FwaS5naXRodWIuY29tXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uXCIsXG4gICAgXCJ1c2VyLWFnZW50XCI6IHVzZXJBZ2VudFxuICB9LFxuICBtZWRpYVR5cGU6IHtcbiAgICBmb3JtYXQ6IFwiXCJcbiAgfVxufTtcblxuLy8gcGtnL2Rpc3Qtc3JjL3V0aWwvbG93ZXJjYXNlLWtleXMuanNcbmZ1bmN0aW9uIGxvd2VyY2FzZUtleXMob2JqZWN0KSB7XG4gIGlmICghb2JqZWN0KSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnJlZHVjZSgobmV3T2JqLCBrZXkpID0+IHtcbiAgICBuZXdPYmpba2V5LnRvTG93ZXJDYXNlKCldID0gb2JqZWN0W2tleV07XG4gICAgcmV0dXJuIG5ld09iajtcbiAgfSwge30pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC9pcy1wbGFpbi1vYmplY3QuanNcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiB8fCB2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIGNvbnN0IEN0b3IgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvdG8sIFwiY29uc3RydWN0b3JcIikgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PT0gXCJmdW5jdGlvblwiICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmIEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsKEN0b3IpID09PSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCh2YWx1ZSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy91dGlsL21lcmdlLWRlZXAuanNcbmZ1bmN0aW9uIG1lcmdlRGVlcChkZWZhdWx0cywgb3B0aW9ucykge1xuICBjb25zdCByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cyk7XG4gIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChpc1BsYWluT2JqZWN0KG9wdGlvbnNba2V5XSkpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZWZhdWx0cykpIE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7IFtrZXldOiBvcHRpb25zW2tleV0gfSk7XG4gICAgICBlbHNlIHJlc3VsdFtrZXldID0gbWVyZ2VEZWVwKGRlZmF1bHRzW2tleV0sIG9wdGlvbnNba2V5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7IFtrZXldOiBvcHRpb25zW2tleV0gfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3V0aWwvcmVtb3ZlLXVuZGVmaW5lZC1wcm9wZXJ0aWVzLmpzXG5mdW5jdGlvbiByZW1vdmVVbmRlZmluZWRQcm9wZXJ0aWVzKG9iaikge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBpZiAob2JqW2tleV0gPT09IHZvaWQgMCkge1xuICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvbWVyZ2UuanNcbmZ1bmN0aW9uIG1lcmdlKGRlZmF1bHRzLCByb3V0ZSwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHJvdXRlID09PSBcInN0cmluZ1wiKSB7XG4gICAgbGV0IFttZXRob2QsIHVybF0gPSByb3V0ZS5zcGxpdChcIiBcIik7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odXJsID8geyBtZXRob2QsIHVybCB9IDogeyB1cmw6IG1ldGhvZCB9LCBvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgcm91dGUpO1xuICB9XG4gIG9wdGlvbnMuaGVhZGVycyA9IGxvd2VyY2FzZUtleXMob3B0aW9ucy5oZWFkZXJzKTtcbiAgcmVtb3ZlVW5kZWZpbmVkUHJvcGVydGllcyhvcHRpb25zKTtcbiAgcmVtb3ZlVW5kZWZpbmVkUHJvcGVydGllcyhvcHRpb25zLmhlYWRlcnMpO1xuICBjb25zdCBtZXJnZWRPcHRpb25zID0gbWVyZ2VEZWVwKGRlZmF1bHRzIHx8IHt9LCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMudXJsID09PSBcIi9ncmFwaHFsXCIpIHtcbiAgICBpZiAoZGVmYXVsdHMgJiYgZGVmYXVsdHMubWVkaWFUeXBlLnByZXZpZXdzPy5sZW5ndGgpIHtcbiAgICAgIG1lcmdlZE9wdGlvbnMubWVkaWFUeXBlLnByZXZpZXdzID0gZGVmYXVsdHMubWVkaWFUeXBlLnByZXZpZXdzLmZpbHRlcihcbiAgICAgICAgKHByZXZpZXcpID0+ICFtZXJnZWRPcHRpb25zLm1lZGlhVHlwZS5wcmV2aWV3cy5pbmNsdWRlcyhwcmV2aWV3KVxuICAgICAgKS5jb25jYXQobWVyZ2VkT3B0aW9ucy5tZWRpYVR5cGUucHJldmlld3MpO1xuICAgIH1cbiAgICBtZXJnZWRPcHRpb25zLm1lZGlhVHlwZS5wcmV2aWV3cyA9IChtZXJnZWRPcHRpb25zLm1lZGlhVHlwZS5wcmV2aWV3cyB8fCBbXSkubWFwKChwcmV2aWV3KSA9PiBwcmV2aWV3LnJlcGxhY2UoLy1wcmV2aWV3LywgXCJcIikpO1xuICB9XG4gIHJldHVybiBtZXJnZWRPcHRpb25zO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC9hZGQtcXVlcnktcGFyYW1ldGVycy5qc1xuZnVuY3Rpb24gYWRkUXVlcnlQYXJhbWV0ZXJzKHVybCwgcGFyYW1ldGVycykge1xuICBjb25zdCBzZXBhcmF0b3IgPSAvXFw/Ly50ZXN0KHVybCkgPyBcIiZcIiA6IFwiP1wiO1xuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpO1xuICBpZiAobmFtZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICByZXR1cm4gdXJsICsgc2VwYXJhdG9yICsgbmFtZXMubWFwKChuYW1lKSA9PiB7XG4gICAgaWYgKG5hbWUgPT09IFwicVwiKSB7XG4gICAgICByZXR1cm4gXCJxPVwiICsgcGFyYW1ldGVycy5xLnNwbGl0KFwiK1wiKS5tYXAoZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKFwiK1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIGAke25hbWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtZXRlcnNbbmFtZV0pfWA7XG4gIH0pLmpvaW4oXCImXCIpO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC9leHRyYWN0LXVybC12YXJpYWJsZS1uYW1lcy5qc1xudmFyIHVybFZhcmlhYmxlUmVnZXggPSAvXFx7W157fX1dK1xcfS9nO1xuZnVuY3Rpb24gcmVtb3ZlTm9uQ2hhcnModmFyaWFibGVOYW1lKSB7XG4gIHJldHVybiB2YXJpYWJsZU5hbWUucmVwbGFjZSgvKD86XlxcVyspfCg/Oig/PCFcXFcpXFxXKyQpL2csIFwiXCIpLnNwbGl0KC8sLyk7XG59XG5mdW5jdGlvbiBleHRyYWN0VXJsVmFyaWFibGVOYW1lcyh1cmwpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHVybC5tYXRjaCh1cmxWYXJpYWJsZVJlZ2V4KTtcbiAgaWYgKCFtYXRjaGVzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBtYXRjaGVzLm1hcChyZW1vdmVOb25DaGFycykucmVkdWNlKChhLCBiKSA9PiBhLmNvbmNhdChiKSwgW10pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC9vbWl0LmpzXG5mdW5jdGlvbiBvbWl0KG9iamVjdCwga2V5c1RvT21pdCkge1xuICBjb25zdCByZXN1bHQgPSB7IF9fcHJvdG9fXzogbnVsbCB9O1xuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmplY3QpKSB7XG4gICAgaWYgKGtleXNUb09taXQuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBvYmplY3Rba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3V0aWwvdXJsLXRlbXBsYXRlLmpzXG5mdW5jdGlvbiBlbmNvZGVSZXNlcnZlZChzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdCgvKCVbMC05QS1GYS1mXXsyfSkvZykubWFwKGZ1bmN0aW9uKHBhcnQpIHtcbiAgICBpZiAoIS8lWzAtOUEtRmEtZl0vLnRlc3QocGFydCkpIHtcbiAgICAgIHBhcnQgPSBlbmNvZGVVUkkocGFydCkucmVwbGFjZSgvJTVCL2csIFwiW1wiKS5yZXBsYWNlKC8lNUQvZywgXCJdXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcGFydDtcbiAgfSkuam9pbihcIlwiKTtcbn1cbmZ1bmN0aW9uIGVuY29kZVVucmVzZXJ2ZWQoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKSpdL2csIGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gXCIlXCIgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlLCBrZXkpIHtcbiAgdmFsdWUgPSBvcGVyYXRvciA9PT0gXCIrXCIgfHwgb3BlcmF0b3IgPT09IFwiI1wiID8gZW5jb2RlUmVzZXJ2ZWQodmFsdWUpIDogZW5jb2RlVW5yZXNlcnZlZCh2YWx1ZSk7XG4gIGlmIChrZXkpIHtcbiAgICByZXR1cm4gZW5jb2RlVW5yZXNlcnZlZChrZXkpICsgXCI9XCIgKyB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZvaWQgMCAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzS2V5T3BlcmF0b3Iob3BlcmF0b3IpIHtcbiAgcmV0dXJuIG9wZXJhdG9yID09PSBcIjtcIiB8fCBvcGVyYXRvciA9PT0gXCImXCIgfHwgb3BlcmF0b3IgPT09IFwiP1wiO1xufVxuZnVuY3Rpb24gZ2V0VmFsdWVzKGNvbnRleHQsIG9wZXJhdG9yLCBrZXksIG1vZGlmaWVyKSB7XG4gIHZhciB2YWx1ZSA9IGNvbnRleHRba2V5XSwgcmVzdWx0ID0gW107XG4gIGlmIChpc0RlZmluZWQodmFsdWUpICYmIHZhbHVlICE9PSBcIlwiKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcImJpZ2ludFwiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIGlmIChtb2RpZmllciAmJiBtb2RpZmllciAhPT0gXCIqXCIpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgcGFyc2VJbnQobW9kaWZpZXIsIDEwKSk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChcbiAgICAgICAgZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlLCBpc0tleU9wZXJhdG9yKG9wZXJhdG9yKSA/IGtleSA6IFwiXCIpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlLmZpbHRlcihpc0RlZmluZWQpLmZvckVhY2goZnVuY3Rpb24odmFsdWUyKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChcbiAgICAgICAgICAgICAgZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlMiwgaXNLZXlPcGVyYXRvcihvcGVyYXRvcikgPyBrZXkgOiBcIlwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlW2tdKSkge1xuICAgICAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWVba10sIGspKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdG1wID0gW107XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlLmZpbHRlcihpc0RlZmluZWQpLmZvckVhY2goZnVuY3Rpb24odmFsdWUyKSB7XG4gICAgICAgICAgICB0bXAucHVzaChlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWUyKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goZnVuY3Rpb24oaykge1xuICAgICAgICAgICAgaWYgKGlzRGVmaW5lZCh2YWx1ZVtrXSkpIHtcbiAgICAgICAgICAgICAgdG1wLnB1c2goZW5jb2RlVW5yZXNlcnZlZChrKSk7XG4gICAgICAgICAgICAgIHRtcC5wdXNoKGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZVtrXS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzS2V5T3BlcmF0b3Iob3BlcmF0b3IpKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlVW5yZXNlcnZlZChrZXkpICsgXCI9XCIgKyB0bXAuam9pbihcIixcIikpO1xuICAgICAgICB9IGVsc2UgaWYgKHRtcC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh0bXAuam9pbihcIixcIikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChvcGVyYXRvciA9PT0gXCI7XCIpIHtcbiAgICAgIGlmIChpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVVucmVzZXJ2ZWQoa2V5KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJcIiAmJiAob3BlcmF0b3IgPT09IFwiJlwiIHx8IG9wZXJhdG9yID09PSBcIj9cIikpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVVucmVzZXJ2ZWQoa2V5KSArIFwiPVwiKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgICByZXN1bHQucHVzaChcIlwiKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIHBhcnNlVXJsKHRlbXBsYXRlKSB7XG4gIHJldHVybiB7XG4gICAgZXhwYW5kOiBleHBhbmQuYmluZChudWxsLCB0ZW1wbGF0ZSlcbiAgfTtcbn1cbmZ1bmN0aW9uIGV4cGFuZCh0ZW1wbGF0ZSwgY29udGV4dCkge1xuICB2YXIgb3BlcmF0b3JzID0gW1wiK1wiLCBcIiNcIiwgXCIuXCIsIFwiL1wiLCBcIjtcIiwgXCI/XCIsIFwiJlwiXTtcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKFxuICAgIC9cXHsoW15cXHtcXH1dKylcXH18KFteXFx7XFx9XSspL2csXG4gICAgZnVuY3Rpb24oXywgZXhwcmVzc2lvbiwgbGl0ZXJhbCkge1xuICAgICAgaWYgKGV4cHJlc3Npb24pIHtcbiAgICAgICAgbGV0IG9wZXJhdG9yID0gXCJcIjtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgICAgIGlmIChvcGVyYXRvcnMuaW5kZXhPZihleHByZXNzaW9uLmNoYXJBdCgwKSkgIT09IC0xKSB7XG4gICAgICAgICAgb3BlcmF0b3IgPSBleHByZXNzaW9uLmNoYXJBdCgwKTtcbiAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbi5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwcmVzc2lvbi5zcGxpdCgvLC9nKS5mb3JFYWNoKGZ1bmN0aW9uKHZhcmlhYmxlKSB7XG4gICAgICAgICAgdmFyIHRtcCA9IC8oW146XFwqXSopKD86OihcXGQrKXwoXFwqKSk/Ly5leGVjKHZhcmlhYmxlKTtcbiAgICAgICAgICB2YWx1ZXMucHVzaChnZXRWYWx1ZXMoY29udGV4dCwgb3BlcmF0b3IsIHRtcFsxXSwgdG1wWzJdIHx8IHRtcFszXSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9wZXJhdG9yICYmIG9wZXJhdG9yICE9PSBcIitcIikge1xuICAgICAgICAgIHZhciBzZXBhcmF0b3IgPSBcIixcIjtcbiAgICAgICAgICBpZiAob3BlcmF0b3IgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICBzZXBhcmF0b3IgPSBcIiZcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yICE9PSBcIiNcIikge1xuICAgICAgICAgICAgc2VwYXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAodmFsdWVzLmxlbmd0aCAhPT0gMCA/IG9wZXJhdG9yIDogXCJcIikgKyB2YWx1ZXMuam9pbihzZXBhcmF0b3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB2YWx1ZXMuam9pbihcIixcIik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVSZXNlcnZlZChsaXRlcmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG4gIGlmICh0ZW1wbGF0ZSA9PT0gXCIvXCIpIHtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoL1xcLyQvLCBcIlwiKTtcbiAgfVxufVxuXG4vLyBwa2cvZGlzdC1zcmMvcGFyc2UuanNcbmZ1bmN0aW9uIHBhcnNlKG9wdGlvbnMpIHtcbiAgbGV0IG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kLnRvVXBwZXJDYXNlKCk7XG4gIGxldCB1cmwgPSAob3B0aW9ucy51cmwgfHwgXCIvXCIpLnJlcGxhY2UoLzooW2Etel1cXHcrKS9nLCBcInskMX1cIik7XG4gIGxldCBoZWFkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucy5oZWFkZXJzKTtcbiAgbGV0IGJvZHk7XG4gIGxldCBwYXJhbWV0ZXJzID0gb21pdChvcHRpb25zLCBbXG4gICAgXCJtZXRob2RcIixcbiAgICBcImJhc2VVcmxcIixcbiAgICBcInVybFwiLFxuICAgIFwiaGVhZGVyc1wiLFxuICAgIFwicmVxdWVzdFwiLFxuICAgIFwibWVkaWFUeXBlXCJcbiAgXSk7XG4gIGNvbnN0IHVybFZhcmlhYmxlTmFtZXMgPSBleHRyYWN0VXJsVmFyaWFibGVOYW1lcyh1cmwpO1xuICB1cmwgPSBwYXJzZVVybCh1cmwpLmV4cGFuZChwYXJhbWV0ZXJzKTtcbiAgaWYgKCEvXmh0dHAvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IG9wdGlvbnMuYmFzZVVybCArIHVybDtcbiAgfVxuICBjb25zdCBvbWl0dGVkUGFyYW1ldGVycyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbHRlcigob3B0aW9uKSA9PiB1cmxWYXJpYWJsZU5hbWVzLmluY2x1ZGVzKG9wdGlvbikpLmNvbmNhdChcImJhc2VVcmxcIik7XG4gIGNvbnN0IHJlbWFpbmluZ1BhcmFtZXRlcnMgPSBvbWl0KHBhcmFtZXRlcnMsIG9taXR0ZWRQYXJhbWV0ZXJzKTtcbiAgY29uc3QgaXNCaW5hcnlSZXF1ZXN0ID0gL2FwcGxpY2F0aW9uXFwvb2N0ZXQtc3RyZWFtL2kudGVzdChoZWFkZXJzLmFjY2VwdCk7XG4gIGlmICghaXNCaW5hcnlSZXF1ZXN0KSB7XG4gICAgaWYgKG9wdGlvbnMubWVkaWFUeXBlLmZvcm1hdCkge1xuICAgICAgaGVhZGVycy5hY2NlcHQgPSBoZWFkZXJzLmFjY2VwdC5zcGxpdCgvLC8pLm1hcChcbiAgICAgICAgKGZvcm1hdCkgPT4gZm9ybWF0LnJlcGxhY2UoXG4gICAgICAgICAgL2FwcGxpY2F0aW9uXFwvdm5kKFxcLlxcdyspKFxcLnYzKT8oXFwuXFx3Kyk/KFxcK2pzb24pPyQvLFxuICAgICAgICAgIGBhcHBsaWNhdGlvbi92bmQkMSQyLiR7b3B0aW9ucy5tZWRpYVR5cGUuZm9ybWF0fWBcbiAgICAgICAgKVxuICAgICAgKS5qb2luKFwiLFwiKTtcbiAgICB9XG4gICAgaWYgKHVybC5lbmRzV2l0aChcIi9ncmFwaHFsXCIpKSB7XG4gICAgICBpZiAob3B0aW9ucy5tZWRpYVR5cGUucHJldmlld3M/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBwcmV2aWV3c0Zyb21BY2NlcHRIZWFkZXIgPSBoZWFkZXJzLmFjY2VwdC5tYXRjaCgvKD88IVtcXHctXSlbXFx3LV0rKD89LXByZXZpZXcpL2cpIHx8IFtdO1xuICAgICAgICBoZWFkZXJzLmFjY2VwdCA9IHByZXZpZXdzRnJvbUFjY2VwdEhlYWRlci5jb25jYXQob3B0aW9ucy5tZWRpYVR5cGUucHJldmlld3MpLm1hcCgocHJldmlldykgPT4ge1xuICAgICAgICAgIGNvbnN0IGZvcm1hdCA9IG9wdGlvbnMubWVkaWFUeXBlLmZvcm1hdCA/IGAuJHtvcHRpb25zLm1lZGlhVHlwZS5mb3JtYXR9YCA6IFwiK2pzb25cIjtcbiAgICAgICAgICByZXR1cm4gYGFwcGxpY2F0aW9uL3ZuZC5naXRodWIuJHtwcmV2aWV3fS1wcmV2aWV3JHtmb3JtYXR9YDtcbiAgICAgICAgfSkuam9pbihcIixcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChbXCJHRVRcIiwgXCJIRUFEXCJdLmluY2x1ZGVzKG1ldGhvZCkpIHtcbiAgICB1cmwgPSBhZGRRdWVyeVBhcmFtZXRlcnModXJsLCByZW1haW5pbmdQYXJhbWV0ZXJzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoXCJkYXRhXCIgaW4gcmVtYWluaW5nUGFyYW1ldGVycykge1xuICAgICAgYm9keSA9IHJlbWFpbmluZ1BhcmFtZXRlcnMuZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHJlbWFpbmluZ1BhcmFtZXRlcnMpLmxlbmd0aCkge1xuICAgICAgICBib2R5ID0gcmVtYWluaW5nUGFyYW1ldGVycztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFoZWFkZXJzW1wiY29udGVudC10eXBlXCJdICYmIHR5cGVvZiBib2R5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiO1xuICB9XG4gIGlmIChbXCJQQVRDSFwiLCBcIlBVVFwiXS5pbmNsdWRlcyhtZXRob2QpICYmIHR5cGVvZiBib2R5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgYm9keSA9IFwiXCI7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgeyBtZXRob2QsIHVybCwgaGVhZGVycyB9LFxuICAgIHR5cGVvZiBib2R5ICE9PSBcInVuZGVmaW5lZFwiID8geyBib2R5IH0gOiBudWxsLFxuICAgIG9wdGlvbnMucmVxdWVzdCA/IHsgcmVxdWVzdDogb3B0aW9ucy5yZXF1ZXN0IH0gOiBudWxsXG4gICk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9lbmRwb2ludC13aXRoLWRlZmF1bHRzLmpzXG5mdW5jdGlvbiBlbmRwb2ludFdpdGhEZWZhdWx0cyhkZWZhdWx0cywgcm91dGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHBhcnNlKG1lcmdlKGRlZmF1bHRzLCByb3V0ZSwgb3B0aW9ucykpO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvd2l0aC1kZWZhdWx0cy5qc1xuZnVuY3Rpb24gd2l0aERlZmF1bHRzKG9sZERlZmF1bHRzLCBuZXdEZWZhdWx0cykge1xuICBjb25zdCBERUZBVUxUUzIgPSBtZXJnZShvbGREZWZhdWx0cywgbmV3RGVmYXVsdHMpO1xuICBjb25zdCBlbmRwb2ludDIgPSBlbmRwb2ludFdpdGhEZWZhdWx0cy5iaW5kKG51bGwsIERFRkFVTFRTMik7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKGVuZHBvaW50Miwge1xuICAgIERFRkFVTFRTOiBERUZBVUxUUzIsXG4gICAgZGVmYXVsdHM6IHdpdGhEZWZhdWx0cy5iaW5kKG51bGwsIERFRkFVTFRTMiksXG4gICAgbWVyZ2U6IG1lcmdlLmJpbmQobnVsbCwgREVGQVVMVFMyKSxcbiAgICBwYXJzZVxuICB9KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG52YXIgZW5kcG9pbnQgPSB3aXRoRGVmYXVsdHMobnVsbCwgREVGQVVMVFMpO1xuZXhwb3J0IHtcbiAgZW5kcG9pbnRcbn07XG4iLCAiLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG5pbXBvcnQgeyBlbmRwb2ludCB9IGZyb20gXCJAb2N0b2tpdC9lbmRwb2ludFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvZGVmYXVsdHMuanNcbmltcG9ydCB7IGdldFVzZXJBZ2VudCB9IGZyb20gXCJ1bml2ZXJzYWwtdXNlci1hZ2VudFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvdmVyc2lvbi5qc1xudmFyIFZFUlNJT04gPSBcIjEwLjAuOFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvZGVmYXVsdHMuanNcbnZhciBkZWZhdWx0c19kZWZhdWx0ID0ge1xuICBoZWFkZXJzOiB7XG4gICAgXCJ1c2VyLWFnZW50XCI6IGBvY3Rva2l0LXJlcXVlc3QuanMvJHtWRVJTSU9OfSAke2dldFVzZXJBZ2VudCgpfWBcbiAgfVxufTtcblxuLy8gcGtnL2Rpc3Qtc3JjL2ZldGNoLXdyYXBwZXIuanNcbmltcG9ydCB7IHNhZmVQYXJzZSB9IGZyb20gXCJmYXN0LWNvbnRlbnQtdHlwZS1wYXJzZVwiO1xuaW1wb3J0IHsgSlNPTlBhcnNlLCBKU09OU3RyaW5naWZ5IH0gZnJvbSBcImpzb24td2l0aC1iaWdpbnRcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL2lzLXBsYWluLW9iamVjdC5qc1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IHZhbHVlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgY29uc3QgQ3RvciA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgXCJjb25zdHJ1Y3RvclwiKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwoQ3RvcikgPT09IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsKHZhbHVlKTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2ZldGNoLXdyYXBwZXIuanNcbmltcG9ydCB7IFJlcXVlc3RFcnJvciB9IGZyb20gXCJAb2N0b2tpdC9yZXF1ZXN0LWVycm9yXCI7XG52YXIgbm9vcCA9ICgpID0+IFwiXCI7XG5hc3luYyBmdW5jdGlvbiBmZXRjaFdyYXBwZXIocmVxdWVzdE9wdGlvbnMpIHtcbiAgY29uc3QgZmV0Y2ggPSByZXF1ZXN0T3B0aW9ucy5yZXF1ZXN0Py5mZXRjaCB8fCBnbG9iYWxUaGlzLmZldGNoO1xuICBpZiAoIWZldGNoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJmZXRjaCBpcyBub3Qgc2V0LiBQbGVhc2UgcGFzcyBhIGZldGNoIGltcGxlbWVudGF0aW9uIGFzIG5ldyBPY3Rva2l0KHsgcmVxdWVzdDogeyBmZXRjaCB9fSkuIExlYXJuIG1vcmUgYXQgaHR0cHM6Ly9naXRodWIuY29tL29jdG9raXQvb2N0b2tpdC5qcy8jZmV0Y2gtbWlzc2luZ1wiXG4gICAgKTtcbiAgfVxuICBjb25zdCBsb2cgPSByZXF1ZXN0T3B0aW9ucy5yZXF1ZXN0Py5sb2cgfHwgY29uc29sZTtcbiAgY29uc3QgcGFyc2VTdWNjZXNzUmVzcG9uc2VCb2R5ID0gcmVxdWVzdE9wdGlvbnMucmVxdWVzdD8ucGFyc2VTdWNjZXNzUmVzcG9uc2VCb2R5ICE9PSBmYWxzZTtcbiAgY29uc3QgYm9keSA9IGlzUGxhaW5PYmplY3QocmVxdWVzdE9wdGlvbnMuYm9keSkgfHwgQXJyYXkuaXNBcnJheShyZXF1ZXN0T3B0aW9ucy5ib2R5KSA/IEpTT05TdHJpbmdpZnkocmVxdWVzdE9wdGlvbnMuYm9keSkgOiByZXF1ZXN0T3B0aW9ucy5ib2R5O1xuICBjb25zdCByZXF1ZXN0SGVhZGVycyA9IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICBPYmplY3QuZW50cmllcyhyZXF1ZXN0T3B0aW9ucy5oZWFkZXJzKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IFtcbiAgICAgIG5hbWUsXG4gICAgICBTdHJpbmcodmFsdWUpXG4gICAgXSlcbiAgKTtcbiAgbGV0IGZldGNoUmVzcG9uc2U7XG4gIHRyeSB7XG4gICAgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RPcHRpb25zLnVybCwge1xuICAgICAgbWV0aG9kOiByZXF1ZXN0T3B0aW9ucy5tZXRob2QsXG4gICAgICBib2R5LFxuICAgICAgcmVkaXJlY3Q6IHJlcXVlc3RPcHRpb25zLnJlcXVlc3Q/LnJlZGlyZWN0LFxuICAgICAgaGVhZGVyczogcmVxdWVzdEhlYWRlcnMsXG4gICAgICBzaWduYWw6IHJlcXVlc3RPcHRpb25zLnJlcXVlc3Q/LnNpZ25hbCxcbiAgICAgIC8vIGR1cGxleCBtdXN0IGJlIHNldCBpZiByZXF1ZXN0LmJvZHkgaXMgUmVhZGFibGVTdHJlYW0gb3IgQXN5bmMgSXRlcmFibGVzLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNkb20tcmVxdWVzdGluaXQtZHVwbGV4LlxuICAgICAgLi4ucmVxdWVzdE9wdGlvbnMuYm9keSAmJiB7IGR1cGxleDogXCJoYWxmXCIgfVxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxldCBtZXNzYWdlID0gXCJVbmtub3duIEVycm9yXCI7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5uYW1lID09PSBcIkFib3J0RXJyb3JcIikge1xuICAgICAgICBlcnJvci5zdGF0dXMgPSA1MDA7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICBpZiAoZXJyb3IubmFtZSA9PT0gXCJUeXBlRXJyb3JcIiAmJiBcImNhdXNlXCIgaW4gZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLmNhdXNlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICBtZXNzYWdlID0gZXJyb3IuY2F1c2UubWVzc2FnZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZXJyb3IuY2F1c2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBtZXNzYWdlID0gZXJyb3IuY2F1c2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdEVycm9yID0gbmV3IFJlcXVlc3RFcnJvcihtZXNzYWdlLCA1MDAsIHtcbiAgICAgIHJlcXVlc3Q6IHJlcXVlc3RPcHRpb25zXG4gICAgfSk7XG4gICAgcmVxdWVzdEVycm9yLmNhdXNlID0gZXJyb3I7XG4gICAgdGhyb3cgcmVxdWVzdEVycm9yO1xuICB9XG4gIGNvbnN0IHN0YXR1cyA9IGZldGNoUmVzcG9uc2Uuc3RhdHVzO1xuICBjb25zdCB1cmwgPSBmZXRjaFJlc3BvbnNlLnVybDtcbiAgY29uc3QgcmVzcG9uc2VIZWFkZXJzID0ge307XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGZldGNoUmVzcG9uc2UuaGVhZGVycykge1xuICAgIHJlc3BvbnNlSGVhZGVyc1trZXldID0gdmFsdWU7XG4gIH1cbiAgY29uc3Qgb2N0b2tpdFJlc3BvbnNlID0ge1xuICAgIHVybCxcbiAgICBzdGF0dXMsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgIGRhdGE6IFwiXCJcbiAgfTtcbiAgaWYgKFwiZGVwcmVjYXRpb25cIiBpbiByZXNwb25zZUhlYWRlcnMpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gcmVzcG9uc2VIZWFkZXJzLmxpbmsgJiYgcmVzcG9uc2VIZWFkZXJzLmxpbmsubWF0Y2goLzwoW148Pl0rKT47IHJlbD1cImRlcHJlY2F0aW9uXCIvKTtcbiAgICBjb25zdCBkZXByZWNhdGlvbkxpbmsgPSBtYXRjaGVzICYmIG1hdGNoZXMucG9wKCk7XG4gICAgbG9nLndhcm4oXG4gICAgICBgW0BvY3Rva2l0L3JlcXVlc3RdIFwiJHtyZXF1ZXN0T3B0aW9ucy5tZXRob2R9ICR7cmVxdWVzdE9wdGlvbnMudXJsfVwiIGlzIGRlcHJlY2F0ZWQuIEl0IGlzIHNjaGVkdWxlZCB0byBiZSByZW1vdmVkIG9uICR7cmVzcG9uc2VIZWFkZXJzLnN1bnNldH0ke2RlcHJlY2F0aW9uTGluayA/IGAuIFNlZSAke2RlcHJlY2F0aW9uTGlua31gIDogXCJcIn1gXG4gICAgKTtcbiAgfVxuICBpZiAoc3RhdHVzID09PSAyMDQgfHwgc3RhdHVzID09PSAyMDUpIHtcbiAgICByZXR1cm4gb2N0b2tpdFJlc3BvbnNlO1xuICB9XG4gIGlmIChyZXF1ZXN0T3B0aW9ucy5tZXRob2QgPT09IFwiSEVBRFwiKSB7XG4gICAgaWYgKHN0YXR1cyA8IDQwMCkge1xuICAgICAgcmV0dXJuIG9jdG9raXRSZXNwb25zZTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcihmZXRjaFJlc3BvbnNlLnN0YXR1c1RleHQsIHN0YXR1cywge1xuICAgICAgcmVzcG9uc2U6IG9jdG9raXRSZXNwb25zZSxcbiAgICAgIHJlcXVlc3Q6IHJlcXVlc3RPcHRpb25zXG4gICAgfSk7XG4gIH1cbiAgaWYgKHN0YXR1cyA9PT0gMzA0KSB7XG4gICAgb2N0b2tpdFJlc3BvbnNlLmRhdGEgPSBhd2FpdCBnZXRSZXNwb25zZURhdGEoZmV0Y2hSZXNwb25zZSk7XG4gICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcihcIk5vdCBtb2RpZmllZFwiLCBzdGF0dXMsIHtcbiAgICAgIHJlc3BvbnNlOiBvY3Rva2l0UmVzcG9uc2UsXG4gICAgICByZXF1ZXN0OiByZXF1ZXN0T3B0aW9uc1xuICAgIH0pO1xuICB9XG4gIGlmIChzdGF0dXMgPj0gNDAwKSB7XG4gICAgb2N0b2tpdFJlc3BvbnNlLmRhdGEgPSBhd2FpdCBnZXRSZXNwb25zZURhdGEoZmV0Y2hSZXNwb25zZSk7XG4gICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcih0b0Vycm9yTWVzc2FnZShvY3Rva2l0UmVzcG9uc2UuZGF0YSksIHN0YXR1cywge1xuICAgICAgcmVzcG9uc2U6IG9jdG9raXRSZXNwb25zZSxcbiAgICAgIHJlcXVlc3Q6IHJlcXVlc3RPcHRpb25zXG4gICAgfSk7XG4gIH1cbiAgb2N0b2tpdFJlc3BvbnNlLmRhdGEgPSBwYXJzZVN1Y2Nlc3NSZXNwb25zZUJvZHkgPyBhd2FpdCBnZXRSZXNwb25zZURhdGEoZmV0Y2hSZXNwb25zZSkgOiBmZXRjaFJlc3BvbnNlLmJvZHk7XG4gIHJldHVybiBvY3Rva2l0UmVzcG9uc2U7XG59XG5hc3luYyBmdW5jdGlvbiBnZXRSZXNwb25zZURhdGEocmVzcG9uc2UpIHtcbiAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKTtcbiAgaWYgKCFjb250ZW50VHlwZSkge1xuICAgIHJldHVybiByZXNwb25zZS50ZXh0KCkuY2F0Y2gobm9vcCk7XG4gIH1cbiAgY29uc3QgbWltZXR5cGUgPSBzYWZlUGFyc2UoY29udGVudFR5cGUpO1xuICBpZiAoaXNKU09OUmVzcG9uc2UobWltZXR5cGUpKSB7XG4gICAgbGV0IHRleHQgPSBcIlwiO1xuICAgIHRyeSB7XG4gICAgICB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgcmV0dXJuIEpTT05QYXJzZSh0ZXh0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgfSBlbHNlIGlmIChtaW1ldHlwZS50eXBlLnN0YXJ0c1dpdGgoXCJ0ZXh0L1wiKSB8fCBtaW1ldHlwZS5wYXJhbWV0ZXJzLmNoYXJzZXQ/LnRvTG93ZXJDYXNlKCkgPT09IFwidXRmLThcIikge1xuICAgIHJldHVybiByZXNwb25zZS50ZXh0KCkuY2F0Y2gobm9vcCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmFycmF5QnVmZmVyKCkuY2F0Y2goXG4gICAgICAvKiB2OCBpZ25vcmUgbmV4dCAtLSBAcHJlc2VydmUgKi9cbiAgICAgICgpID0+IG5ldyBBcnJheUJ1ZmZlcigwKVxuICAgICk7XG4gIH1cbn1cbmZ1bmN0aW9uIGlzSlNPTlJlc3BvbnNlKG1pbWV0eXBlKSB7XG4gIHJldHVybiBtaW1ldHlwZS50eXBlID09PSBcImFwcGxpY2F0aW9uL2pzb25cIiB8fCBtaW1ldHlwZS50eXBlID09PSBcImFwcGxpY2F0aW9uL3NjaW0ranNvblwiO1xufVxuZnVuY3Rpb24gdG9FcnJvck1lc3NhZ2UoZGF0YSkge1xuICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIFwiVW5rbm93biBlcnJvclwiO1xuICB9XG4gIGlmIChcIm1lc3NhZ2VcIiBpbiBkYXRhKSB7XG4gICAgY29uc3Qgc3VmZml4ID0gXCJkb2N1bWVudGF0aW9uX3VybFwiIGluIGRhdGEgPyBgIC0gJHtkYXRhLmRvY3VtZW50YXRpb25fdXJsfWAgOiBcIlwiO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGRhdGEuZXJyb3JzKSA/IGAke2RhdGEubWVzc2FnZX06ICR7ZGF0YS5lcnJvcnMubWFwKCh2KSA9PiBKU09OLnN0cmluZ2lmeSh2KSkuam9pbihcIiwgXCIpfSR7c3VmZml4fWAgOiBgJHtkYXRhLm1lc3NhZ2V9JHtzdWZmaXh9YDtcbiAgfVxuICByZXR1cm4gYFVua25vd24gZXJyb3I6ICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YDtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3dpdGgtZGVmYXVsdHMuanNcbmZ1bmN0aW9uIHdpdGhEZWZhdWx0cyhvbGRFbmRwb2ludCwgbmV3RGVmYXVsdHMpIHtcbiAgY29uc3QgZW5kcG9pbnQyID0gb2xkRW5kcG9pbnQuZGVmYXVsdHMobmV3RGVmYXVsdHMpO1xuICBjb25zdCBuZXdBcGkgPSBmdW5jdGlvbihyb3V0ZSwgcGFyYW1ldGVycykge1xuICAgIGNvbnN0IGVuZHBvaW50T3B0aW9ucyA9IGVuZHBvaW50Mi5tZXJnZShyb3V0ZSwgcGFyYW1ldGVycyk7XG4gICAgaWYgKCFlbmRwb2ludE9wdGlvbnMucmVxdWVzdCB8fCAhZW5kcG9pbnRPcHRpb25zLnJlcXVlc3QuaG9vaykge1xuICAgICAgcmV0dXJuIGZldGNoV3JhcHBlcihlbmRwb2ludDIucGFyc2UoZW5kcG9pbnRPcHRpb25zKSk7XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3QyID0gKHJvdXRlMiwgcGFyYW1ldGVyczIpID0+IHtcbiAgICAgIHJldHVybiBmZXRjaFdyYXBwZXIoXG4gICAgICAgIGVuZHBvaW50Mi5wYXJzZShlbmRwb2ludDIubWVyZ2Uocm91dGUyLCBwYXJhbWV0ZXJzMikpXG4gICAgICApO1xuICAgIH07XG4gICAgT2JqZWN0LmFzc2lnbihyZXF1ZXN0Miwge1xuICAgICAgZW5kcG9pbnQ6IGVuZHBvaW50MixcbiAgICAgIGRlZmF1bHRzOiB3aXRoRGVmYXVsdHMuYmluZChudWxsLCBlbmRwb2ludDIpXG4gICAgfSk7XG4gICAgcmV0dXJuIGVuZHBvaW50T3B0aW9ucy5yZXF1ZXN0Lmhvb2socmVxdWVzdDIsIGVuZHBvaW50T3B0aW9ucyk7XG4gIH07XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ld0FwaSwge1xuICAgIGVuZHBvaW50OiBlbmRwb2ludDIsXG4gICAgZGVmYXVsdHM6IHdpdGhEZWZhdWx0cy5iaW5kKG51bGwsIGVuZHBvaW50MilcbiAgfSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9pbmRleC5qc1xudmFyIHJlcXVlc3QgPSB3aXRoRGVmYXVsdHMoZW5kcG9pbnQsIGRlZmF1bHRzX2RlZmF1bHQpO1xuZXhwb3J0IHtcbiAgcmVxdWVzdFxufTtcbi8qIHY4IGlnbm9yZSBuZXh0IC0tIEBwcmVzZXJ2ZSAqL1xuLyogdjggaWdub3JlIGVsc2UgLS0gQHByZXNlcnZlICovXG4iLCAiY29uc3QgaW50UmVnZXggPSAvXi0/XFxkKyQvO1xuY29uc3Qgbm9pc2VWYWx1ZSA9IC9eLT9cXGQrbiskLzsgLy8gTm9pc2UgLSBzdHJpbmdzIHRoYXQgbWF0Y2ggdGhlIGN1c3RvbSBmb3JtYXQgYmVmb3JlIGJlaW5nIGNvbnZlcnRlZCB0byBpdFxuY29uc3Qgb3JpZ2luYWxTdHJpbmdpZnkgPSBKU09OLnN0cmluZ2lmeTtcbmNvbnN0IG9yaWdpbmFsUGFyc2UgPSBKU09OLnBhcnNlO1xuY29uc3QgY3VzdG9tRm9ybWF0ID0gL14tP1xcZCtuJC87XG5cbmNvbnN0IGJpZ0ludHNTdHJpbmdpZnkgPSAvKFtcXFs6XSk/XCIoLT9cXGQrKW5cIigkfChbXFxcXG5dfFxccykqKFxcc3xbXFxcXG5dKSpbLFxcfVxcXV0pL2c7XG5jb25zdCBub2lzZVN0cmluZ2lmeSA9XG4gIC8oW1xcWzpdKT8oXCItP1xcZCtuKyluKFwiJHxcIihbXFxcXG5dfFxccykqKFxcc3xbXFxcXG5dKSpbLFxcfVxcXV0pL2c7XG5cbi8qKlxuICogQHR5cGVkZWYgeyh0aGlzOiBhbnksIGtleTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkLCB2YWx1ZTogYW55KSA9PiBhbnl9IFJlcGxhY2VyXG4gKiBAdHlwZWRlZiB7KGtleTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkLCB2YWx1ZTogYW55LCBjb250ZXh0PzogeyBzb3VyY2U6IHN0cmluZyB9KSA9PiBhbnl9IFJldml2ZXJcbiAqL1xuXG4vKipcbiAqIENvbnZlcnRzIGEgSmF2YVNjcmlwdCB2YWx1ZSB0byBhIEpTT04gc3RyaW5nLlxuICpcbiAqIFN1cHBvcnRzIHNlcmlhbGl6YXRpb24gb2YgQmlnSW50IHZhbHVlcyB1c2luZyB0d28gc3RyYXRlZ2llczpcbiAqIDEuIEN1c3RvbSBmb3JtYXQgXCIxMjNuXCIgXHUyMTkyIFwiMTIzXCIgKHVuaXZlcnNhbCBmYWxsYmFjaylcbiAqIDIuIE5hdGl2ZSBKU09OLnJhd0pTT04oKSAoTm9kZS5qcyAyMissIGZhc3Rlc3QpIHdoZW4gYXZhaWxhYmxlXG4gKlxuICogQWxsIG90aGVyIHZhbHVlcyBhcmUgc2VyaWFsaXplZCBleGFjdGx5IGxpa2UgbmF0aXZlIEpTT04uc3RyaW5naWZ5KCkuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydCB0byBhIEpTT04gc3RyaW5nLlxuICogQHBhcmFtIHtSZXBsYWNlciB8IEFycmF5PHN0cmluZyB8IG51bWJlcj4gfCBudWxsfSBbcmVwbGFjZXJdXG4gKiAgIEEgZnVuY3Rpb24gdGhhdCBhbHRlcnMgdGhlIGJlaGF2aW9yIG9mIHRoZSBzdHJpbmdpZmljYXRpb24gcHJvY2VzcyxcbiAqICAgb3IgYW4gYXJyYXkgb2Ygc3RyaW5ncy9udW1iZXJzIHRvIGluZGljYXRlIHByb3BlcnRpZXMgdG8gZXhjbHVkZS5cbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBbc3BhY2VdXG4gKiAgIEEgc3RyaW5nIG9yIG51bWJlciB0byBzcGVjaWZ5IGluZGVudGF0aW9uIG9yIHByZXR0eS1wcmludGluZy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBKU09OIHN0cmluZyByZXByZXNlbnRhdGlvbi5cbiAqL1xuY29uc3QgSlNPTlN0cmluZ2lmeSA9ICh2YWx1ZSwgcmVwbGFjZXIsIHNwYWNlKSA9PiB7XG4gIGlmIChcInJhd0pTT05cIiBpbiBKU09OKSB7XG4gICAgcmV0dXJuIG9yaWdpbmFsU3RyaW5naWZ5KFxuICAgICAgdmFsdWUsXG4gICAgICAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJpZ2ludFwiKSByZXR1cm4gSlNPTi5yYXdKU09OKHZhbHVlLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVwbGFjZXIgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHJlcGxhY2VyKGtleSwgdmFsdWUpO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlcGxhY2VyKSAmJiByZXBsYWNlci5pbmNsdWRlcyhrZXkpKSByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNwYWNlLFxuICAgICk7XG4gIH1cblxuICBpZiAoIXZhbHVlKSByZXR1cm4gb3JpZ2luYWxTdHJpbmdpZnkodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSk7XG5cbiAgY29uc3QgY29udmVydGVkVG9DdXN0b21KU09OID0gb3JpZ2luYWxTdHJpbmdpZnkoXG4gICAgdmFsdWUsXG4gICAgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGlzTm9pc2UgPSB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgbm9pc2VWYWx1ZS50ZXN0KHZhbHVlKTtcblxuICAgICAgaWYgKGlzTm9pc2UpIHJldHVybiB2YWx1ZS50b1N0cmluZygpICsgXCJuXCI7IC8vIE1hcmsgbm9pc2UgdmFsdWVzIHdpdGggYWRkaXRpb25hbCBcIm5cIiB0byBvZmZzZXQgdGhlIGRlbGV0aW9uIG9mIG9uZSBcIm5cIiBkdXJpbmcgdGhlIHByb2Nlc3NpbmdcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJiaWdpbnRcIikgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkgKyBcIm5cIjtcblxuICAgICAgaWYgKHR5cGVvZiByZXBsYWNlciA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gcmVwbGFjZXIoa2V5LCB2YWx1ZSk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlcGxhY2VyKSAmJiByZXBsYWNlci5pbmNsdWRlcyhrZXkpKSByZXR1cm4gdmFsdWU7XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIHNwYWNlLFxuICApO1xuICBjb25zdCBwcm9jZXNzZWRKU09OID0gY29udmVydGVkVG9DdXN0b21KU09OLnJlcGxhY2UoXG4gICAgYmlnSW50c1N0cmluZ2lmeSxcbiAgICBcIiQxJDIkM1wiLFxuICApOyAvLyBEZWxldGUgb25lIFwiblwiIG9mZiB0aGUgZW5kIG9mIGV2ZXJ5IEJpZ0ludCB2YWx1ZVxuICBjb25zdCBkZW5vaXNlZEpTT04gPSBwcm9jZXNzZWRKU09OLnJlcGxhY2Uobm9pc2VTdHJpbmdpZnksIFwiJDEkMiQzXCIpOyAvLyBSZW1vdmUgb25lIFwiblwiIG9mZiB0aGUgZW5kIG9mIGV2ZXJ5IG5vaXN5IHN0cmluZ1xuXG4gIHJldHVybiBkZW5vaXNlZEpTT047XG59O1xuXG5jb25zdCBmZWF0dXJlQ2FjaGUgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogRGV0ZWN0cyBpZiB0aGUgY3VycmVudCBKU09OLnBhcnNlIGltcGxlbWVudGF0aW9uIHN1cHBvcnRzIHRoZSBjb250ZXh0LnNvdXJjZSBmZWF0dXJlLlxuICpcbiAqIFVzZXMgdG9TdHJpbmcoKSBmaW5nZXJwcmludGluZyB0byBjYWNoZSByZXN1bHRzIGFuZCBhdXRvbWF0aWNhbGx5IGRldGVjdCBydW50aW1lXG4gKiByZXBsYWNlbWVudHMgb2YgSlNPTi5wYXJzZSAocG9seWZpbGxzLCBtb2NrcywgZXRjLikuXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgY29udGV4dC5zb3VyY2UgaXMgc3VwcG9ydGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmNvbnN0IGlzQ29udGV4dFNvdXJjZVN1cHBvcnRlZCA9ICgpID0+IHtcbiAgY29uc3QgcGFyc2VGaW5nZXJwcmludCA9IEpTT04ucGFyc2UudG9TdHJpbmcoKTtcblxuICBpZiAoZmVhdHVyZUNhY2hlLmhhcyhwYXJzZUZpbmdlcnByaW50KSkge1xuICAgIHJldHVybiBmZWF0dXJlQ2FjaGUuZ2V0KHBhcnNlRmluZ2VycHJpbnQpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBKU09OLnBhcnNlKFxuICAgICAgXCIxXCIsXG4gICAgICAoXywgX18sIGNvbnRleHQpID0+ICEhY29udGV4dD8uc291cmNlICYmIGNvbnRleHQuc291cmNlID09PSBcIjFcIixcbiAgICApO1xuICAgIGZlYXR1cmVDYWNoZS5zZXQocGFyc2VGaW5nZXJwcmludCwgcmVzdWx0KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2gge1xuICAgIGZlYXR1cmVDYWNoZS5zZXQocGFyc2VGaW5nZXJwcmludCwgZmFsc2UpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG4vKipcbiAqIFJldml2ZXIgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBjdXN0b20tZm9ybWF0IEJpZ0ludCBzdHJpbmdzIGJhY2sgdG8gQmlnSW50IHZhbHVlcy5cbiAqIEFsc28gaGFuZGxlcyBcIm5vaXNlXCIgc3RyaW5ncyB0aGF0IGFjY2lkZW50YWxseSBtYXRjaCB0aGUgQmlnSW50IGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZH0ga2V5IFRoZSBvYmplY3Qga2V5LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgcGFyc2VkLlxuICogQHBhcmFtIHtvYmplY3R9IFtjb250ZXh0XSBQYXJzZSBjb250ZXh0IChpZiBzdXBwb3J0ZWQgYnkgSlNPTi5wYXJzZSkuXG4gKiBAcGFyYW0ge1Jldml2ZXJ9IFt1c2VyUmV2aXZlcl0gVXNlcidzIGN1c3RvbSByZXZpdmVyIGZ1bmN0aW9uLlxuICogQHJldHVybnMge2FueX0gVGhlIHRyYW5zZm9ybWVkIHZhbHVlLlxuICovXG5jb25zdCBjb252ZXJ0TWFya2VkQmlnSW50c1Jldml2ZXIgPSAoa2V5LCB2YWx1ZSwgY29udGV4dCwgdXNlclJldml2ZXIpID0+IHtcbiAgY29uc3QgaXNDdXN0b21Gb3JtYXRCaWdJbnQgPVxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiBjdXN0b21Gb3JtYXQudGVzdCh2YWx1ZSk7XG4gIGlmIChpc0N1c3RvbUZvcm1hdEJpZ0ludCkgcmV0dXJuIEJpZ0ludCh2YWx1ZS5zbGljZSgwLCAtMSkpO1xuXG4gIGNvbnN0IGlzTm9pc2VWYWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiBub2lzZVZhbHVlLnRlc3QodmFsdWUpO1xuICBpZiAoaXNOb2lzZVZhbHVlKSByZXR1cm4gdmFsdWUuc2xpY2UoMCwgLTEpO1xuXG4gIGlmICh0eXBlb2YgdXNlclJldml2ZXIgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHZhbHVlO1xuXG4gIHJldHVybiB1c2VyUmV2aXZlcihrZXksIHZhbHVlLCBjb250ZXh0KTtcbn07XG5cbi8qKlxuICogRmFzdCBKU09OLnBhcnNlIGltcGxlbWVudGF0aW9uICh+MnggZmFzdGVyIHRoYW4gY2xhc3NpYyBmYWxsYmFjaykuXG4gKiBVc2VzIEpTT04ucGFyc2UncyBjb250ZXh0LnNvdXJjZSBmZWF0dXJlIHRvIGRldGVjdCBpbnRlZ2VycyBhbmQgY29udmVydFxuICogbGFyZ2UgbnVtYmVycyBkaXJlY3RseSB0byBCaWdJbnQgd2l0aG91dCBzdHJpbmcgbWFuaXB1bGF0aW9uLlxuICpcbiAqIERvZXMgbm90IHN1cHBvcnQgbGVnYWN5IGN1c3RvbSBmb3JtYXQgZnJvbSB2MSBvZiB0aGlzIGxpYnJhcnkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgSlNPTiBzdHJpbmcgdG8gcGFyc2UuXG4gKiBAcGFyYW0ge1Jldml2ZXJ9IFtyZXZpdmVyXSBUcmFuc2Zvcm0gZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCB2YWx1ZS5cbiAqIEByZXR1cm5zIHthbnl9IFBhcnNlZCBKYXZhU2NyaXB0IHZhbHVlLlxuICovXG5jb25zdCBKU09OUGFyc2VWMiA9ICh0ZXh0LCByZXZpdmVyKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKHRleHQsIChrZXksIHZhbHVlLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgaXNCaWdOdW1iZXIgPVxuICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmXG4gICAgICAodmFsdWUgPiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCB2YWx1ZSA8IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSKTtcbiAgICBjb25zdCBpc0ludCA9IGNvbnRleHQgJiYgaW50UmVnZXgudGVzdChjb250ZXh0LnNvdXJjZSk7XG4gICAgY29uc3QgaXNCaWdJbnQgPSBpc0JpZ051bWJlciAmJiBpc0ludDtcblxuICAgIGlmIChpc0JpZ0ludCkgcmV0dXJuIEJpZ0ludChjb250ZXh0LnNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIHJldml2ZXIgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHZhbHVlO1xuXG4gICAgcmV0dXJuIHJldml2ZXIoa2V5LCB2YWx1ZSwgY29udGV4dCk7XG4gIH0pO1xufTtcblxuY29uc3QgTUFYX0lOVCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLnRvU3RyaW5nKCk7XG5jb25zdCBNQVhfRElHSVRTID0gTUFYX0lOVC5sZW5ndGg7XG5jb25zdCBzdHJpbmdzT3JMYXJnZU51bWJlcnMgPVxuICAvXCIoPzpcXFxcLnxbXlwiXSkqXCJ8LT8oMHxbMS05XVswLTldKikoXFwuWzAtOV0rKT8oW2VFXVsrLV0/WzAtOV0rKT8vZztcbmNvbnN0IG5vaXNlVmFsdWVXaXRoUXVvdGVzID0gL15cIi0/XFxkK24rXCIkLzsgLy8gTm9pc2UgLSBzdHJpbmdzIHRoYXQgbWF0Y2ggdGhlIGN1c3RvbSBmb3JtYXQgYmVmb3JlIGJlaW5nIGNvbnZlcnRlZCB0byBpdFxuXG4vKipcbiAqIENvbnZlcnRzIGEgSlNPTiBzdHJpbmcgaW50byBhIEphdmFTY3JpcHQgdmFsdWUuXG4gKlxuICogU3VwcG9ydHMgcGFyc2luZyBvZiBsYXJnZSBpbnRlZ2VycyB1c2luZyB0d28gc3RyYXRlZ2llczpcbiAqIDEuIENsYXNzaWMgZmFsbGJhY2s6IE1hcmtzIGxhcmdlIG51bWJlcnMgd2l0aCBcIjEyM25cIiBmb3JtYXQsIHRoZW4gY29udmVydHMgdG8gQmlnSW50XG4gKiAyLiBGYXN0IHBhdGggKEpTT05QYXJzZVYyKTogVXNlcyBjb250ZXh0LnNvdXJjZSBmZWF0dXJlICh+MnggZmFzdGVyKSB3aGVuIGF2YWlsYWJsZVxuICpcbiAqIEFsbCBvdGhlciBKU09OIHZhbHVlcyBhcmUgcGFyc2VkIGV4YWN0bHkgbGlrZSBuYXRpdmUgSlNPTi5wYXJzZSgpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IEEgdmFsaWQgSlNPTiBzdHJpbmcuXG4gKiBAcGFyYW0ge1Jldml2ZXJ9IFtyZXZpdmVyXVxuICogICBBIGZ1bmN0aW9uIHRoYXQgdHJhbnNmb3JtcyB0aGUgcmVzdWx0cy4gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgZm9yIGVhY2ggbWVtYmVyXG4gKiAgIG9mIHRoZSBvYmplY3QuIElmIGEgbWVtYmVyIGNvbnRhaW5zIG5lc3RlZCBvYmplY3RzLCB0aGUgbmVzdGVkIG9iamVjdHMgYXJlXG4gKiAgIHRyYW5zZm9ybWVkIGJlZm9yZSB0aGUgcGFyZW50IG9iamVjdCBpcy5cbiAqIEByZXR1cm5zIHthbnl9IFRoZSBwYXJzZWQgSmF2YVNjcmlwdCB2YWx1ZS5cbiAqIEB0aHJvd3Mge1N5bnRheEVycm9yfSBJZiB0ZXh0IGlzIG5vdCB2YWxpZCBKU09OLlxuICovXG5jb25zdCBKU09OUGFyc2UgPSAodGV4dCwgcmV2aXZlcikgPT4ge1xuICBpZiAoIXRleHQpIHJldHVybiBvcmlnaW5hbFBhcnNlKHRleHQsIHJldml2ZXIpO1xuXG4gIGlmIChpc0NvbnRleHRTb3VyY2VTdXBwb3J0ZWQoKSkgcmV0dXJuIEpTT05QYXJzZVYyKHRleHQsIHJldml2ZXIpOyAvLyBTaG9ydGN1dCB0byBhIGZhc3RlciAoMngpIGFuZCBzaW1wbGVyIHZlcnNpb25cblxuICAvLyBGaW5kIGFuZCBtYXJrIGJpZyBudW1iZXJzIHdpdGggXCJuXCJcbiAgY29uc3Qgc2VyaWFsaXplZERhdGEgPSB0ZXh0LnJlcGxhY2UoXG4gICAgc3RyaW5nc09yTGFyZ2VOdW1iZXJzLFxuICAgICh0ZXh0LCBkaWdpdHMsIGZyYWN0aW9uYWwsIGV4cG9uZW50aWFsKSA9PiB7XG4gICAgICBjb25zdCBpc1N0cmluZyA9IHRleHRbMF0gPT09ICdcIic7XG4gICAgICBjb25zdCBpc05vaXNlID0gaXNTdHJpbmcgJiYgbm9pc2VWYWx1ZVdpdGhRdW90ZXMudGVzdCh0ZXh0KTtcblxuICAgICAgaWYgKGlzTm9pc2UpIHJldHVybiB0ZXh0LnN1YnN0cmluZygwLCB0ZXh0Lmxlbmd0aCAtIDEpICsgJ25cIic7IC8vIE1hcmsgbm9pc2UgdmFsdWVzIHdpdGggYWRkaXRpb25hbCBcIm5cIiB0byBvZmZzZXQgdGhlIGRlbGV0aW9uIG9mIG9uZSBcIm5cIiBkdXJpbmcgdGhlIHByb2Nlc3NpbmdcblxuICAgICAgY29uc3QgaXNGcmFjdGlvbmFsT3JFeHBvbmVudGlhbCA9IGZyYWN0aW9uYWwgfHwgZXhwb25lbnRpYWw7XG4gICAgICBjb25zdCBpc0xlc3NUaGFuTWF4U2FmZUludCA9XG4gICAgICAgIGRpZ2l0cyAmJlxuICAgICAgICAoZGlnaXRzLmxlbmd0aCA8IE1BWF9ESUdJVFMgfHxcbiAgICAgICAgICAoZGlnaXRzLmxlbmd0aCA9PT0gTUFYX0RJR0lUUyAmJiBkaWdpdHMgPD0gTUFYX0lOVCkpOyAvLyBXaXRoIGEgZml4ZWQgbnVtYmVyIG9mIGRpZ2l0cywgd2UgY2FuIGNvcnJlY3RseSB1c2UgbGV4aWNvZ3JhcGhpY2FsIGNvbXBhcmlzb24gdG8gZG8gYSBudW1lcmljIGNvbXBhcmlzb25cblxuICAgICAgaWYgKGlzU3RyaW5nIHx8IGlzRnJhY3Rpb25hbE9yRXhwb25lbnRpYWwgfHwgaXNMZXNzVGhhbk1heFNhZmVJbnQpXG4gICAgICAgIHJldHVybiB0ZXh0O1xuXG4gICAgICByZXR1cm4gJ1wiJyArIHRleHQgKyAnblwiJztcbiAgICB9LFxuICApO1xuXG4gIHJldHVybiBvcmlnaW5hbFBhcnNlKHNlcmlhbGl6ZWREYXRhLCAoa2V5LCB2YWx1ZSwgY29udGV4dCkgPT5cbiAgICBjb252ZXJ0TWFya2VkQmlnSW50c1Jldml2ZXIoa2V5LCB2YWx1ZSwgY29udGV4dCwgcmV2aXZlciksXG4gICk7XG59O1xuXG5leHBvcnQgeyBKU09OU3RyaW5naWZ5LCBKU09OUGFyc2UgfTtcbiIsICJjbGFzcyBSZXF1ZXN0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIG5hbWU7XG4gIC8qKlxuICAgKiBodHRwIHN0YXR1cyBjb2RlXG4gICAqL1xuICBzdGF0dXM7XG4gIC8qKlxuICAgKiBSZXF1ZXN0IG9wdGlvbnMgdGhhdCBsZWFkIHRvIHRoZSBlcnJvci5cbiAgICovXG4gIHJlcXVlc3Q7XG4gIC8qKlxuICAgKiBSZXNwb25zZSBvYmplY3QgaWYgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWRcbiAgICovXG4gIHJlc3BvbnNlO1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBzdGF0dXNDb2RlLCBvcHRpb25zKSB7XG4gICAgc3VwZXIobWVzc2FnZSwgeyBjYXVzZTogb3B0aW9ucy5jYXVzZSB9KTtcbiAgICB0aGlzLm5hbWUgPSBcIkh0dHBFcnJvclwiO1xuICAgIHRoaXMuc3RhdHVzID0gTnVtYmVyLnBhcnNlSW50KHN0YXR1c0NvZGUpO1xuICAgIGlmIChOdW1iZXIuaXNOYU4odGhpcy5zdGF0dXMpKSB7XG4gICAgICB0aGlzLnN0YXR1cyA9IDA7XG4gICAgfVxuICAgIC8qIHY4IGlnbm9yZSBlbHNlIC0tIEBwcmVzZXJ2ZSAtLSBCdWcgd2l0aCB2aXRlc3QgY292ZXJhZ2Ugd2hlcmUgaXQgc2VlcyBhbiBlbHNlIGJyYW5jaCB0aGF0IGRvZXNuJ3QgZXhpc3QgKi9cbiAgICBpZiAoXCJyZXNwb25zZVwiIGluIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMucmVzcG9uc2UgPSBvcHRpb25zLnJlc3BvbnNlO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0Q29weSA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMucmVxdWVzdCk7XG4gICAgaWYgKG9wdGlvbnMucmVxdWVzdC5oZWFkZXJzLmF1dGhvcml6YXRpb24pIHtcbiAgICAgIHJlcXVlc3RDb3B5LmhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLnJlcXVlc3QuaGVhZGVycywge1xuICAgICAgICBhdXRob3JpemF0aW9uOiBvcHRpb25zLnJlcXVlc3QuaGVhZGVycy5hdXRob3JpemF0aW9uLnJlcGxhY2UoXG4gICAgICAgICAgLyg/PCEgKSAuKiQvLFxuICAgICAgICAgIFwiIFtSRURBQ1RFRF1cIlxuICAgICAgICApXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmVxdWVzdENvcHkudXJsID0gcmVxdWVzdENvcHkudXJsLnJlcGxhY2UoL1xcYmNsaWVudF9zZWNyZXQ9XFx3Ky9nLCBcImNsaWVudF9zZWNyZXQ9W1JFREFDVEVEXVwiKS5yZXBsYWNlKC9cXGJhY2Nlc3NfdG9rZW49XFx3Ky9nLCBcImFjY2Vzc190b2tlbj1bUkVEQUNURURdXCIpO1xuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3RDb3B5O1xuICB9XG59XG5leHBvcnQge1xuICBSZXF1ZXN0RXJyb3Jcbn07XG4iLCAiLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIkBvY3Rva2l0L3JlcXVlc3RcIjtcbmltcG9ydCB7IGdldFVzZXJBZ2VudCB9IGZyb20gXCJ1bml2ZXJzYWwtdXNlci1hZ2VudFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvdmVyc2lvbi5qc1xudmFyIFZFUlNJT04gPSBcIjAuMC4wLWRldmVsb3BtZW50XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy93aXRoLWRlZmF1bHRzLmpzXG5pbXBvcnQgeyByZXF1ZXN0IGFzIFJlcXVlc3QyIH0gZnJvbSBcIkBvY3Rva2l0L3JlcXVlc3RcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL2dyYXBocWwuanNcbmltcG9ydCB7IHJlcXVlc3QgYXMgUmVxdWVzdCB9IGZyb20gXCJAb2N0b2tpdC9yZXF1ZXN0XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9lcnJvci5qc1xuZnVuY3Rpb24gX2J1aWxkTWVzc2FnZUZvclJlc3BvbnNlRXJyb3JzKGRhdGEpIHtcbiAgcmV0dXJuIGBSZXF1ZXN0IGZhaWxlZCBkdWUgdG8gZm9sbG93aW5nIHJlc3BvbnNlIGVycm9yczpcbmAgKyBkYXRhLmVycm9ycy5tYXAoKGUpID0+IGAgLSAke2UubWVzc2FnZX1gKS5qb2luKFwiXFxuXCIpO1xufVxudmFyIEdyYXBocWxSZXNwb25zZUVycm9yID0gY2xhc3MgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHJlcXVlc3QyLCBoZWFkZXJzLCByZXNwb25zZSkge1xuICAgIHN1cGVyKF9idWlsZE1lc3NhZ2VGb3JSZXNwb25zZUVycm9ycyhyZXNwb25zZSkpO1xuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3QyO1xuICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XG4gICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIHRoaXMuZXJyb3JzID0gcmVzcG9uc2UuZXJyb3JzO1xuICAgIHRoaXMuZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICB9XG4gIH1cbiAgbmFtZSA9IFwiR3JhcGhxbFJlc3BvbnNlRXJyb3JcIjtcbiAgZXJyb3JzO1xuICBkYXRhO1xufTtcblxuLy8gcGtnL2Rpc3Qtc3JjL2dyYXBocWwuanNcbnZhciBOT05fVkFSSUFCTEVfT1BUSU9OUyA9IFtcbiAgXCJtZXRob2RcIixcbiAgXCJiYXNlVXJsXCIsXG4gIFwidXJsXCIsXG4gIFwiaGVhZGVyc1wiLFxuICBcInJlcXVlc3RcIixcbiAgXCJxdWVyeVwiLFxuICBcIm1lZGlhVHlwZVwiLFxuICBcIm9wZXJhdGlvbk5hbWVcIlxuXTtcbnZhciBGT1JCSURERU5fVkFSSUFCTEVfT1BUSU9OUyA9IFtcInF1ZXJ5XCIsIFwibWV0aG9kXCIsIFwidXJsXCJdO1xudmFyIEdIRVNfVjNfU1VGRklYX1JFR0VYID0gL1xcL2FwaVxcL3YzXFwvPyQvO1xuZnVuY3Rpb24gZ3JhcGhxbChyZXF1ZXN0MiwgcXVlcnksIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5ID09PSBcInN0cmluZ1wiICYmIFwicXVlcnlcIiBpbiBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgIG5ldyBFcnJvcihgW0BvY3Rva2l0L2dyYXBocWxdIFwicXVlcnlcIiBjYW5ub3QgYmUgdXNlZCBhcyB2YXJpYWJsZSBuYW1lYClcbiAgICAgICk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbnMpIHtcbiAgICAgIGlmICghRk9SQklEREVOX1ZBUklBQkxFX09QVElPTlMuaW5jbHVkZXMoa2V5KSkgY29udGludWU7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICBgW0BvY3Rva2l0L2dyYXBocWxdIFwiJHtrZXl9XCIgY2Fubm90IGJlIHVzZWQgYXMgdmFyaWFibGUgbmFtZWBcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgcGFyc2VkT3B0aW9ucyA9IHR5cGVvZiBxdWVyeSA9PT0gXCJzdHJpbmdcIiA/IE9iamVjdC5hc3NpZ24oeyBxdWVyeSB9LCBvcHRpb25zKSA6IHF1ZXJ5O1xuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5rZXlzKFxuICAgIHBhcnNlZE9wdGlvbnNcbiAgKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgaWYgKE5PTl9WQVJJQUJMRV9PUFRJT05TLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gcGFyc2VkT3B0aW9uc1trZXldO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgaWYgKCFyZXN1bHQudmFyaWFibGVzKSB7XG4gICAgICByZXN1bHQudmFyaWFibGVzID0ge307XG4gICAgfVxuICAgIHJlc3VsdC52YXJpYWJsZXNba2V5XSA9IHBhcnNlZE9wdGlvbnNba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG4gIGNvbnN0IGJhc2VVcmwgPSBwYXJzZWRPcHRpb25zLmJhc2VVcmwgfHwgcmVxdWVzdDIuZW5kcG9pbnQuREVGQVVMVFMuYmFzZVVybDtcbiAgaWYgKEdIRVNfVjNfU1VGRklYX1JFR0VYLnRlc3QoYmFzZVVybCkpIHtcbiAgICByZXF1ZXN0T3B0aW9ucy51cmwgPSBiYXNlVXJsLnJlcGxhY2UoR0hFU19WM19TVUZGSVhfUkVHRVgsIFwiL2FwaS9ncmFwaHFsXCIpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0MihyZXF1ZXN0T3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcnMpIHtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHJlc3BvbnNlLmhlYWRlcnMpKSB7XG4gICAgICAgIGhlYWRlcnNba2V5XSA9IHJlc3BvbnNlLmhlYWRlcnNba2V5XTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBHcmFwaHFsUmVzcG9uc2VFcnJvcihcbiAgICAgICAgcmVxdWVzdE9wdGlvbnMsXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIHJlc3BvbnNlLmRhdGFcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGE7XG4gIH0pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvd2l0aC1kZWZhdWx0cy5qc1xuZnVuY3Rpb24gd2l0aERlZmF1bHRzKHJlcXVlc3QyLCBuZXdEZWZhdWx0cykge1xuICBjb25zdCBuZXdSZXF1ZXN0ID0gcmVxdWVzdDIuZGVmYXVsdHMobmV3RGVmYXVsdHMpO1xuICBjb25zdCBuZXdBcGkgPSAocXVlcnksIG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gZ3JhcGhxbChuZXdSZXF1ZXN0LCBxdWVyeSwgb3B0aW9ucyk7XG4gIH07XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ld0FwaSwge1xuICAgIGRlZmF1bHRzOiB3aXRoRGVmYXVsdHMuYmluZChudWxsLCBuZXdSZXF1ZXN0KSxcbiAgICBlbmRwb2ludDogbmV3UmVxdWVzdC5lbmRwb2ludFxuICB9KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG52YXIgZ3JhcGhxbDIgPSB3aXRoRGVmYXVsdHMocmVxdWVzdCwge1xuICBoZWFkZXJzOiB7XG4gICAgXCJ1c2VyLWFnZW50XCI6IGBvY3Rva2l0LWdyYXBocWwuanMvJHtWRVJTSU9OfSAke2dldFVzZXJBZ2VudCgpfWBcbiAgfSxcbiAgbWV0aG9kOiBcIlBPU1RcIixcbiAgdXJsOiBcIi9ncmFwaHFsXCJcbn0pO1xuZnVuY3Rpb24gd2l0aEN1c3RvbVJlcXVlc3QoY3VzdG9tUmVxdWVzdCkge1xuICByZXR1cm4gd2l0aERlZmF1bHRzKGN1c3RvbVJlcXVlc3QsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIHVybDogXCIvZ3JhcGhxbFwiXG4gIH0pO1xufVxuZXhwb3J0IHtcbiAgR3JhcGhxbFJlc3BvbnNlRXJyb3IsXG4gIGdyYXBocWwyIGFzIGdyYXBocWwsXG4gIHdpdGhDdXN0b21SZXF1ZXN0XG59O1xuIiwgIi8vIHBrZy9kaXN0LXNyYy9pcy1qd3QuanNcbnZhciBiNjR1cmwgPSBcIig/OlthLXpBLVowLTlfLV0rKVwiO1xudmFyIHNlcCA9IFwiXFxcXC5cIjtcbnZhciBqd3RSRSA9IG5ldyBSZWdFeHAoYF4ke2I2NHVybH0ke3NlcH0ke2I2NHVybH0ke3NlcH0ke2I2NHVybH0kYCk7XG52YXIgaXNKV1QgPSBqd3RSRS50ZXN0LmJpbmQoand0UkUpO1xuXG4vLyBwa2cvZGlzdC1zcmMvYXV0aC5qc1xuYXN5bmMgZnVuY3Rpb24gYXV0aCh0b2tlbikge1xuICBjb25zdCBpc0FwcCA9IGlzSldUKHRva2VuKTtcbiAgY29uc3QgaXNJbnN0YWxsYXRpb24gPSB0b2tlbi5zdGFydHNXaXRoKFwidjEuXCIpIHx8IHRva2VuLnN0YXJ0c1dpdGgoXCJnaHNfXCIpO1xuICBjb25zdCBpc1VzZXJUb1NlcnZlciA9IHRva2VuLnN0YXJ0c1dpdGgoXCJnaHVfXCIpO1xuICBjb25zdCB0b2tlblR5cGUgPSBpc0FwcCA/IFwiYXBwXCIgOiBpc0luc3RhbGxhdGlvbiA/IFwiaW5zdGFsbGF0aW9uXCIgOiBpc1VzZXJUb1NlcnZlciA/IFwidXNlci10by1zZXJ2ZXJcIiA6IFwib2F1dGhcIjtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcInRva2VuXCIsXG4gICAgdG9rZW4sXG4gICAgdG9rZW5UeXBlXG4gIH07XG59XG5cbi8vIHBrZy9kaXN0LXNyYy93aXRoLWF1dGhvcml6YXRpb24tcHJlZml4LmpzXG5mdW5jdGlvbiB3aXRoQXV0aG9yaXphdGlvblByZWZpeCh0b2tlbikge1xuICBpZiAodG9rZW4uc3BsaXQoL1xcLi8pLmxlbmd0aCA9PT0gMykge1xuICAgIHJldHVybiBgYmVhcmVyICR7dG9rZW59YDtcbiAgfVxuICByZXR1cm4gYHRva2VuICR7dG9rZW59YDtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2hvb2suanNcbmFzeW5jIGZ1bmN0aW9uIGhvb2sodG9rZW4sIHJlcXVlc3QsIHJvdXRlLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IGVuZHBvaW50ID0gcmVxdWVzdC5lbmRwb2ludC5tZXJnZShcbiAgICByb3V0ZSxcbiAgICBwYXJhbWV0ZXJzXG4gICk7XG4gIGVuZHBvaW50LmhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IHdpdGhBdXRob3JpemF0aW9uUHJlZml4KHRva2VuKTtcbiAgcmV0dXJuIHJlcXVlc3QoZW5kcG9pbnQpO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbnZhciBjcmVhdGVUb2tlbkF1dGggPSBmdW5jdGlvbiBjcmVhdGVUb2tlbkF1dGgyKHRva2VuKSB7XG4gIGlmICghdG9rZW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJbQG9jdG9raXQvYXV0aC10b2tlbl0gTm8gdG9rZW4gcGFzc2VkIHRvIGNyZWF0ZVRva2VuQXV0aFwiKTtcbiAgfVxuICBpZiAodHlwZW9mIHRva2VuICE9PSBcInN0cmluZ1wiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJbQG9jdG9raXQvYXV0aC10b2tlbl0gVG9rZW4gcGFzc2VkIHRvIGNyZWF0ZVRva2VuQXV0aCBpcyBub3QgYSBzdHJpbmdcIlxuICAgICk7XG4gIH1cbiAgdG9rZW4gPSB0b2tlbi5yZXBsYWNlKC9eKHRva2VufGJlYXJlcikgKy9pLCBcIlwiKTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYXV0aC5iaW5kKG51bGwsIHRva2VuKSwge1xuICAgIGhvb2s6IGhvb2suYmluZChudWxsLCB0b2tlbilcbiAgfSk7XG59O1xuZXhwb3J0IHtcbiAgY3JlYXRlVG9rZW5BdXRoXG59O1xuIiwgImNvbnN0IFZFUlNJT04gPSBcIjcuMC42XCI7XG5leHBvcnQge1xuICBWRVJTSU9OXG59O1xuIiwgImltcG9ydCB7IGdldFVzZXJBZ2VudCB9IGZyb20gXCJ1bml2ZXJzYWwtdXNlci1hZ2VudFwiO1xuaW1wb3J0IEhvb2sgZnJvbSBcImJlZm9yZS1hZnRlci1ob29rXCI7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIkBvY3Rva2l0L3JlcXVlc3RcIjtcbmltcG9ydCB7IHdpdGhDdXN0b21SZXF1ZXN0IH0gZnJvbSBcIkBvY3Rva2l0L2dyYXBocWxcIjtcbmltcG9ydCB7IGNyZWF0ZVRva2VuQXV0aCB9IGZyb20gXCJAb2N0b2tpdC9hdXRoLXRva2VuXCI7XG5pbXBvcnQgeyBWRVJTSU9OIH0gZnJvbSBcIi4vdmVyc2lvbi5qc1wiO1xuY29uc3Qgbm9vcCA9ICgpID0+IHtcbn07XG5jb25zdCBjb25zb2xlV2FybiA9IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpO1xuY29uc3QgY29uc29sZUVycm9yID0gY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpO1xuZnVuY3Rpb24gY3JlYXRlTG9nZ2VyKGxvZ2dlciA9IHt9KSB7XG4gIGlmICh0eXBlb2YgbG9nZ2VyLmRlYnVnICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBsb2dnZXIuZGVidWcgPSBub29wO1xuICB9XG4gIGlmICh0eXBlb2YgbG9nZ2VyLmluZm8gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIGxvZ2dlci5pbmZvID0gbm9vcDtcbiAgfVxuICBpZiAodHlwZW9mIGxvZ2dlci53YXJuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBsb2dnZXIud2FybiA9IGNvbnNvbGVXYXJuO1xuICB9XG4gIGlmICh0eXBlb2YgbG9nZ2VyLmVycm9yICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBsb2dnZXIuZXJyb3IgPSBjb25zb2xlRXJyb3I7XG4gIH1cbiAgcmV0dXJuIGxvZ2dlcjtcbn1cbmNvbnN0IHVzZXJBZ2VudFRyYWlsID0gYG9jdG9raXQtY29yZS5qcy8ke1ZFUlNJT059ICR7Z2V0VXNlckFnZW50KCl9YDtcbmNsYXNzIE9jdG9raXQge1xuICBzdGF0aWMgVkVSU0lPTiA9IFZFUlNJT047XG4gIHN0YXRpYyBkZWZhdWx0cyhkZWZhdWx0cykge1xuICAgIGNvbnN0IE9jdG9raXRXaXRoRGVmYXVsdHMgPSBjbGFzcyBleHRlbmRzIHRoaXMge1xuICAgICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gYXJnc1swXSB8fCB7fTtcbiAgICAgICAgaWYgKHR5cGVvZiBkZWZhdWx0cyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgc3VwZXIoZGVmYXVsdHMob3B0aW9ucykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBkZWZhdWx0cyxcbiAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zLnVzZXJBZ2VudCAmJiBkZWZhdWx0cy51c2VyQWdlbnQgPyB7XG4gICAgICAgICAgICAgIHVzZXJBZ2VudDogYCR7b3B0aW9ucy51c2VyQWdlbnR9ICR7ZGVmYXVsdHMudXNlckFnZW50fWBcbiAgICAgICAgICAgIH0gOiBudWxsXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE9jdG9raXRXaXRoRGVmYXVsdHM7XG4gIH1cbiAgc3RhdGljIHBsdWdpbnMgPSBbXTtcbiAgLyoqXG4gICAqIEF0dGFjaCBhIHBsdWdpbiAob3IgbWFueSkgdG8geW91ciBPY3Rva2l0IGluc3RhbmNlLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBjb25zdCBBUEkgPSBPY3Rva2l0LnBsdWdpbihwbHVnaW4xLCBwbHVnaW4yLCBwbHVnaW4zLCAuLi4pXG4gICAqL1xuICBzdGF0aWMgcGx1Z2luKC4uLm5ld1BsdWdpbnMpIHtcbiAgICBjb25zdCBjdXJyZW50UGx1Z2lucyA9IHRoaXMucGx1Z2lucztcbiAgICBjb25zdCBOZXdPY3Rva2l0ID0gY2xhc3MgZXh0ZW5kcyB0aGlzIHtcbiAgICAgIHN0YXRpYyBwbHVnaW5zID0gY3VycmVudFBsdWdpbnMuY29uY2F0KFxuICAgICAgICBuZXdQbHVnaW5zLmZpbHRlcigocGx1Z2luKSA9PiAhY3VycmVudFBsdWdpbnMuaW5jbHVkZXMocGx1Z2luKSlcbiAgICAgICk7XG4gICAgfTtcbiAgICByZXR1cm4gTmV3T2N0b2tpdDtcbiAgfVxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBob29rID0gbmV3IEhvb2suQ29sbGVjdGlvbigpO1xuICAgIGNvbnN0IHJlcXVlc3REZWZhdWx0cyA9IHtcbiAgICAgIGJhc2VVcmw6IHJlcXVlc3QuZW5kcG9pbnQuREVGQVVMVFMuYmFzZVVybCxcbiAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgcmVxdWVzdDogT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucy5yZXF1ZXN0LCB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgaW50ZXJuYWwgdXNhZ2Ugb25seSwgbm8gbmVlZCB0byB0eXBlXG4gICAgICAgIGhvb2s6IGhvb2suYmluZChudWxsLCBcInJlcXVlc3RcIilcbiAgICAgIH0pLFxuICAgICAgbWVkaWFUeXBlOiB7XG4gICAgICAgIHByZXZpZXdzOiBbXSxcbiAgICAgICAgZm9ybWF0OiBcIlwiXG4gICAgICB9XG4gICAgfTtcbiAgICByZXF1ZXN0RGVmYXVsdHMuaGVhZGVyc1tcInVzZXItYWdlbnRcIl0gPSBvcHRpb25zLnVzZXJBZ2VudCA/IGAke29wdGlvbnMudXNlckFnZW50fSAke3VzZXJBZ2VudFRyYWlsfWAgOiB1c2VyQWdlbnRUcmFpbDtcbiAgICBpZiAob3B0aW9ucy5iYXNlVXJsKSB7XG4gICAgICByZXF1ZXN0RGVmYXVsdHMuYmFzZVVybCA9IG9wdGlvbnMuYmFzZVVybDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucHJldmlld3MpIHtcbiAgICAgIHJlcXVlc3REZWZhdWx0cy5tZWRpYVR5cGUucHJldmlld3MgPSBvcHRpb25zLnByZXZpZXdzO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy50aW1lWm9uZSkge1xuICAgICAgcmVxdWVzdERlZmF1bHRzLmhlYWRlcnNbXCJ0aW1lLXpvbmVcIl0gPSBvcHRpb25zLnRpbWVab25lO1xuICAgIH1cbiAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0LmRlZmF1bHRzKHJlcXVlc3REZWZhdWx0cyk7XG4gICAgdGhpcy5ncmFwaHFsID0gd2l0aEN1c3RvbVJlcXVlc3QodGhpcy5yZXF1ZXN0KS5kZWZhdWx0cyhyZXF1ZXN0RGVmYXVsdHMpO1xuICAgIHRoaXMubG9nID0gY3JlYXRlTG9nZ2VyKG9wdGlvbnMubG9nKTtcbiAgICB0aGlzLmhvb2sgPSBob29rO1xuICAgIGlmICghb3B0aW9ucy5hdXRoU3RyYXRlZ3kpIHtcbiAgICAgIGlmICghb3B0aW9ucy5hdXRoKSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IGFzeW5jICgpID0+ICh7XG4gICAgICAgICAgdHlwZTogXCJ1bmF1dGhlbnRpY2F0ZWRcIlxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGF1dGggPSBjcmVhdGVUb2tlbkF1dGgob3B0aW9ucy5hdXRoKTtcbiAgICAgICAgaG9vay53cmFwKFwicmVxdWVzdFwiLCBhdXRoLmhvb2spO1xuICAgICAgICB0aGlzLmF1dGggPSBhdXRoO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IGF1dGhTdHJhdGVneSwgLi4ub3RoZXJPcHRpb25zIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgYXV0aCA9IGF1dGhTdHJhdGVneShcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXF1ZXN0OiB0aGlzLnJlcXVlc3QsXG4gICAgICAgICAgICBsb2c6IHRoaXMubG9nLFxuICAgICAgICAgICAgLy8gd2UgcGFzcyB0aGUgY3VycmVudCBvY3Rva2l0IGluc3RhbmNlIGFzIHdlbGwgYXMgaXRzIGNvbnN0cnVjdG9yIG9wdGlvbnNcbiAgICAgICAgICAgIC8vIHRvIGFsbG93IGZvciBhdXRoZW50aWNhdGlvbiBzdHJhdGVnaWVzIHRoYXQgcmV0dXJuIGEgbmV3IG9jdG9raXQgaW5zdGFuY2VcbiAgICAgICAgICAgIC8vIHRoYXQgc2hhcmVzIHRoZSBzYW1lIGludGVybmFsIHN0YXRlIGFzIHRoZSBjdXJyZW50IG9uZS4gVGhlIG9yaWdpbmFsXG4gICAgICAgICAgICAvLyByZXF1aXJlbWVudCBmb3IgdGhpcyB3YXMgdGhlIFwiZXZlbnQtb2N0b2tpdFwiIGF1dGhlbnRpY2F0aW9uIHN0cmF0ZWd5XG4gICAgICAgICAgICAvLyBvZiBodHRwczovL2dpdGh1Yi5jb20vcHJvYm90L29jdG9raXQtYXV0aC1wcm9ib3QuXG4gICAgICAgICAgICBvY3Rva2l0OiB0aGlzLFxuICAgICAgICAgICAgb2N0b2tpdE9wdGlvbnM6IG90aGVyT3B0aW9uc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb3B0aW9ucy5hdXRoXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICBob29rLndyYXAoXCJyZXF1ZXN0XCIsIGF1dGguaG9vayk7XG4gICAgICB0aGlzLmF1dGggPSBhdXRoO1xuICAgIH1cbiAgICBjb25zdCBjbGFzc0NvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzQ29uc3RydWN0b3IucGx1Z2lucy5sZW5ndGg7ICsraSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjbGFzc0NvbnN0cnVjdG9yLnBsdWdpbnNbaV0odGhpcywgb3B0aW9ucykpO1xuICAgIH1cbiAgfVxuICAvLyBhc3NpZ25lZCBkdXJpbmcgY29uc3RydWN0b3JcbiAgcmVxdWVzdDtcbiAgZ3JhcGhxbDtcbiAgbG9nO1xuICBob29rO1xuICAvLyBUT0RPOiB0eXBlIGBvY3Rva2l0LmF1dGhgIGJhc2VkIG9uIHBhc3NlZCBvcHRpb25zLmF1dGhTdHJhdGVneVxuICBhdXRoO1xufVxuZXhwb3J0IHtcbiAgT2N0b2tpdFxufTtcbiIsICJjb25zdCBWRVJTSU9OID0gXCI2LjAuMFwiO1xuZXhwb3J0IHtcbiAgVkVSU0lPTlxufTtcbiIsICJpbXBvcnQgeyBWRVJTSU9OIH0gZnJvbSBcIi4vdmVyc2lvbi5qc1wiO1xuZnVuY3Rpb24gcmVxdWVzdExvZyhvY3Rva2l0KSB7XG4gIG9jdG9raXQuaG9vay53cmFwKFwicmVxdWVzdFwiLCAocmVxdWVzdCwgb3B0aW9ucykgPT4ge1xuICAgIG9jdG9raXQubG9nLmRlYnVnKFwicmVxdWVzdFwiLCBvcHRpb25zKTtcbiAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSBvY3Rva2l0LnJlcXVlc3QuZW5kcG9pbnQucGFyc2Uob3B0aW9ucyk7XG4gICAgY29uc3QgcGF0aCA9IHJlcXVlc3RPcHRpb25zLnVybC5yZXBsYWNlKG9wdGlvbnMuYmFzZVVybCwgXCJcIik7XG4gICAgcmV0dXJuIHJlcXVlc3Qob3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3RJZCA9IHJlc3BvbnNlLmhlYWRlcnNbXCJ4LWdpdGh1Yi1yZXF1ZXN0LWlkXCJdO1xuICAgICAgb2N0b2tpdC5sb2cuaW5mbyhcbiAgICAgICAgYCR7cmVxdWVzdE9wdGlvbnMubWV0aG9kfSAke3BhdGh9IC0gJHtyZXNwb25zZS5zdGF0dXN9IHdpdGggaWQgJHtyZXF1ZXN0SWR9IGluICR7RGF0ZS5ub3coKSAtIHN0YXJ0fW1zYFxuICAgICAgKTtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3RJZCA9IGVycm9yLnJlc3BvbnNlPy5oZWFkZXJzW1wieC1naXRodWItcmVxdWVzdC1pZFwiXSB8fCBcIlVOS05PV05cIjtcbiAgICAgIG9jdG9raXQubG9nLmVycm9yKFxuICAgICAgICBgJHtyZXF1ZXN0T3B0aW9ucy5tZXRob2R9ICR7cGF0aH0gLSAke2Vycm9yLnN0YXR1c30gd2l0aCBpZCAke3JlcXVlc3RJZH0gaW4gJHtEYXRlLm5vdygpIC0gc3RhcnR9bXNgXG4gICAgICApO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSk7XG4gIH0pO1xufVxucmVxdWVzdExvZy5WRVJTSU9OID0gVkVSU0lPTjtcbmV4cG9ydCB7XG4gIHJlcXVlc3RMb2dcbn07XG4iLCAiLy8gcGtnL2Rpc3Qtc3JjL3ZlcnNpb24uanNcbnZhciBWRVJTSU9OID0gXCIwLjAuMC1kZXZlbG9wbWVudFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvbm9ybWFsaXplLXBhZ2luYXRlZC1saXN0LXJlc3BvbnNlLmpzXG5mdW5jdGlvbiBub3JtYWxpemVQYWdpbmF0ZWRMaXN0UmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgaWYgKCFyZXNwb25zZS5kYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlc3BvbnNlLFxuICAgICAgZGF0YTogW11cbiAgICB9O1xuICB9XG4gIGNvbnN0IHJlc3BvbnNlTmVlZHNOb3JtYWxpemF0aW9uID0gKFwidG90YWxfY291bnRcIiBpbiByZXNwb25zZS5kYXRhIHx8IFwidG90YWxfY29tbWl0c1wiIGluIHJlc3BvbnNlLmRhdGEpICYmICEoXCJ1cmxcIiBpbiByZXNwb25zZS5kYXRhKTtcbiAgaWYgKCFyZXNwb25zZU5lZWRzTm9ybWFsaXphdGlvbikgcmV0dXJuIHJlc3BvbnNlO1xuICBjb25zdCBpbmNvbXBsZXRlUmVzdWx0cyA9IHJlc3BvbnNlLmRhdGEuaW5jb21wbGV0ZV9yZXN1bHRzO1xuICBjb25zdCByZXBvc2l0b3J5U2VsZWN0aW9uID0gcmVzcG9uc2UuZGF0YS5yZXBvc2l0b3J5X3NlbGVjdGlvbjtcbiAgY29uc3QgdG90YWxDb3VudCA9IHJlc3BvbnNlLmRhdGEudG90YWxfY291bnQ7XG4gIGNvbnN0IHRvdGFsQ29tbWl0cyA9IHJlc3BvbnNlLmRhdGEudG90YWxfY29tbWl0cztcbiAgZGVsZXRlIHJlc3BvbnNlLmRhdGEuaW5jb21wbGV0ZV9yZXN1bHRzO1xuICBkZWxldGUgcmVzcG9uc2UuZGF0YS5yZXBvc2l0b3J5X3NlbGVjdGlvbjtcbiAgZGVsZXRlIHJlc3BvbnNlLmRhdGEudG90YWxfY291bnQ7XG4gIGRlbGV0ZSByZXNwb25zZS5kYXRhLnRvdGFsX2NvbW1pdHM7XG4gIGNvbnN0IG5hbWVzcGFjZUtleSA9IE9iamVjdC5rZXlzKHJlc3BvbnNlLmRhdGEpWzBdO1xuICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YVtuYW1lc3BhY2VLZXldO1xuICByZXNwb25zZS5kYXRhID0gZGF0YTtcbiAgaWYgKHR5cGVvZiBpbmNvbXBsZXRlUmVzdWx0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJlc3BvbnNlLmRhdGEuaW5jb21wbGV0ZV9yZXN1bHRzID0gaW5jb21wbGV0ZVJlc3VsdHM7XG4gIH1cbiAgaWYgKHR5cGVvZiByZXBvc2l0b3J5U2VsZWN0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmVzcG9uc2UuZGF0YS5yZXBvc2l0b3J5X3NlbGVjdGlvbiA9IHJlcG9zaXRvcnlTZWxlY3Rpb247XG4gIH1cbiAgcmVzcG9uc2UuZGF0YS50b3RhbF9jb3VudCA9IHRvdGFsQ291bnQ7XG4gIHJlc3BvbnNlLmRhdGEudG90YWxfY29tbWl0cyA9IHRvdGFsQ29tbWl0cztcbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaXRlcmF0b3IuanNcbmZ1bmN0aW9uIGl0ZXJhdG9yKG9jdG9raXQsIHJvdXRlLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB0eXBlb2Ygcm91dGUgPT09IFwiZnVuY3Rpb25cIiA/IHJvdXRlLmVuZHBvaW50KHBhcmFtZXRlcnMpIDogb2N0b2tpdC5yZXF1ZXN0LmVuZHBvaW50KHJvdXRlLCBwYXJhbWV0ZXJzKTtcbiAgY29uc3QgcmVxdWVzdE1ldGhvZCA9IHR5cGVvZiByb3V0ZSA9PT0gXCJmdW5jdGlvblwiID8gcm91dGUgOiBvY3Rva2l0LnJlcXVlc3Q7XG4gIGNvbnN0IG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kO1xuICBjb25zdCBoZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xuICBsZXQgdXJsID0gb3B0aW9ucy51cmw7XG4gIHJldHVybiB7XG4gICAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXTogKCkgPT4gKHtcbiAgICAgIGFzeW5jIG5leHQoKSB7XG4gICAgICAgIGlmICghdXJsKSByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0TWV0aG9kKHsgbWV0aG9kLCB1cmwsIGhlYWRlcnMgfSk7XG4gICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFJlc3BvbnNlID0gbm9ybWFsaXplUGFnaW5hdGVkTGlzdFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICB1cmwgPSAoKG5vcm1hbGl6ZWRSZXNwb25zZS5oZWFkZXJzLmxpbmsgfHwgXCJcIikubWF0Y2goXG4gICAgICAgICAgICAvPChbXjw+XSspPjtcXHMqcmVsPVwibmV4dFwiL1xuICAgICAgICAgICkgfHwgW10pWzFdO1xuICAgICAgICAgIGlmICghdXJsICYmIFwidG90YWxfY29tbWl0c1wiIGluIG5vcm1hbGl6ZWRSZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKG5vcm1hbGl6ZWRSZXNwb25zZS51cmwpO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gcGFyc2VkVXJsLnNlYXJjaFBhcmFtcztcbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBwYXJzZUludChwYXJhbXMuZ2V0KFwicGFnZVwiKSB8fCBcIjFcIiwgMTApO1xuICAgICAgICAgICAgY29uc3QgcGVyX3BhZ2UgPSBwYXJzZUludChwYXJhbXMuZ2V0KFwicGVyX3BhZ2VcIikgfHwgXCIyNTBcIiwgMTApO1xuICAgICAgICAgICAgaWYgKHBhZ2UgKiBwZXJfcGFnZSA8IG5vcm1hbGl6ZWRSZXNwb25zZS5kYXRhLnRvdGFsX2NvbW1pdHMpIHtcbiAgICAgICAgICAgICAgcGFyYW1zLnNldChcInBhZ2VcIiwgU3RyaW5nKHBhZ2UgKyAxKSk7XG4gICAgICAgICAgICAgIHVybCA9IHBhcnNlZFVybC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbm9ybWFsaXplZFJlc3BvbnNlIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyAhPT0gNDA5KSB0aHJvdyBlcnJvcjtcbiAgICAgICAgICB1cmwgPSBcIlwiO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgICAgIGRhdGE6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH07XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9wYWdpbmF0ZS5qc1xuZnVuY3Rpb24gcGFnaW5hdGUob2N0b2tpdCwgcm91dGUsIHBhcmFtZXRlcnMsIG1hcEZuKSB7XG4gIGlmICh0eXBlb2YgcGFyYW1ldGVycyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgbWFwRm4gPSBwYXJhbWV0ZXJzO1xuICAgIHBhcmFtZXRlcnMgPSB2b2lkIDA7XG4gIH1cbiAgcmV0dXJuIGdhdGhlcihcbiAgICBvY3Rva2l0LFxuICAgIFtdLFxuICAgIGl0ZXJhdG9yKG9jdG9raXQsIHJvdXRlLCBwYXJhbWV0ZXJzKVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSxcbiAgICBtYXBGblxuICApO1xufVxuZnVuY3Rpb24gZ2F0aGVyKG9jdG9raXQsIHJlc3VsdHMsIGl0ZXJhdG9yMiwgbWFwRm4pIHtcbiAgcmV0dXJuIGl0ZXJhdG9yMi5uZXh0KCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgaWYgKHJlc3VsdC5kb25lKSB7XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gICAgbGV0IGVhcmx5RXhpdCA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBlYXJseUV4aXQgPSB0cnVlO1xuICAgIH1cbiAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoXG4gICAgICBtYXBGbiA/IG1hcEZuKHJlc3VsdC52YWx1ZSwgZG9uZSkgOiByZXN1bHQudmFsdWUuZGF0YVxuICAgICk7XG4gICAgaWYgKGVhcmx5RXhpdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICAgIHJldHVybiBnYXRoZXIob2N0b2tpdCwgcmVzdWx0cywgaXRlcmF0b3IyLCBtYXBGbik7XG4gIH0pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvY29tcG9zZS1wYWdpbmF0ZS5qc1xudmFyIGNvbXBvc2VQYWdpbmF0ZVJlc3QgPSBPYmplY3QuYXNzaWduKHBhZ2luYXRlLCB7XG4gIGl0ZXJhdG9yXG59KTtcblxuLy8gcGtnL2Rpc3Qtc3JjL2dlbmVyYXRlZC9wYWdpbmF0aW5nLWVuZHBvaW50cy5qc1xudmFyIHBhZ2luYXRpbmdFbmRwb2ludHMgPSBbXG4gIFwiR0VUIC9hZHZpc29yaWVzXCIsXG4gIFwiR0VUIC9hcHAvaG9vay9kZWxpdmVyaWVzXCIsXG4gIFwiR0VUIC9hcHAvaW5zdGFsbGF0aW9uLXJlcXVlc3RzXCIsXG4gIFwiR0VUIC9hcHAvaW5zdGFsbGF0aW9uc1wiLFxuICBcIkdFVCAvYXNzaWdubWVudHMve2Fzc2lnbm1lbnRfaWR9L2FjY2VwdGVkX2Fzc2lnbm1lbnRzXCIsXG4gIFwiR0VUIC9jbGFzc3Jvb21zXCIsXG4gIFwiR0VUIC9jbGFzc3Jvb21zL3tjbGFzc3Jvb21faWR9L2Fzc2lnbm1lbnRzXCIsXG4gIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9uc1wiLFxuICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2RlcGVuZGFib3QvYWxlcnRzXCIsXG4gIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXNcIixcbiAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9tZW1iZXJzaGlwc1wiLFxuICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L29yZ2FuaXphdGlvbnNcIixcbiAgXCJHRVQgL2V2ZW50c1wiLFxuICBcIkdFVCAvZ2lzdHNcIixcbiAgXCJHRVQgL2dpc3RzL3B1YmxpY1wiLFxuICBcIkdFVCAvZ2lzdHMvc3RhcnJlZFwiLFxuICBcIkdFVCAvZ2lzdHMve2dpc3RfaWR9L2NvbW1lbnRzXCIsXG4gIFwiR0VUIC9naXN0cy97Z2lzdF9pZH0vY29tbWl0c1wiLFxuICBcIkdFVCAvZ2lzdHMve2dpc3RfaWR9L2ZvcmtzXCIsXG4gIFwiR0VUIC9pbnN0YWxsYXRpb24vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9pc3N1ZXNcIixcbiAgXCJHRVQgL2xpY2Vuc2VzXCIsXG4gIFwiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3BsYW5zXCIsXG4gIFwiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3BsYW5zL3twbGFuX2lkfS9hY2NvdW50c1wiLFxuICBcIkdFVCAvbWFya2V0cGxhY2VfbGlzdGluZy9zdHViYmVkL3BsYW5zXCIsXG4gIFwiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3N0dWJiZWQvcGxhbnMve3BsYW5faWR9L2FjY291bnRzXCIsXG4gIFwiR0VUIC9uZXR3b3Jrcy97b3duZXJ9L3tyZXBvfS9ldmVudHNcIixcbiAgXCJHRVQgL25vdGlmaWNhdGlvbnNcIixcbiAgXCJHRVQgL29yZ2FuaXphdGlvbnNcIixcbiAgXCJHRVQgL29yZ2FuaXphdGlvbnMve29yZ30vZGVwZW5kYWJvdC9yZXBvc2l0b3J5LWFjY2Vzc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2NhY2hlL3VzYWdlLWJ5LXJlcG9zaXRvcnlcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVyc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3NlbGYtaG9zdGVkLXJ1bm5lcnMvcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVyLWdyb3Vwc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lci1ncm91cHMve3J1bm5lcl9ncm91cF9pZH0vaG9zdGVkLXJ1bm5lcnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXItZ3JvdXBzL3tydW5uZXJfZ3JvdXBfaWR9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lci1ncm91cHMve3J1bm5lcl9ncm91cF9pZH0vcnVubmVyc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2F0dGVzdGF0aW9ucy9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYXR0ZXN0YXRpb25zL3tzdWJqZWN0X2RpZ2VzdH1cIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYmxvY2tzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NhbXBhaWduc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9jb2RlLXNjYW5uaW5nL2FsZXJ0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vY29waWxvdC9iaWxsaW5nL3NlYXRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NvcGlsb3QvbWV0cmljc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L2FsZXJ0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2V2ZW50c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9mYWlsZWRfaW52aXRhdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaG9va3NcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9L2RlbGl2ZXJpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaW5zaWdodHMvYXBpL3JvdXRlLXN0YXRzL3thY3Rvcl90eXBlfS97YWN0b3JfaWR9XCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2luc2lnaHRzL2FwaS9zdWJqZWN0LXN0YXRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2luc2lnaHRzL2FwaS91c2VyLXN0YXRzL3t1c2VyX2lkfVwiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9pbnN0YWxsYXRpb25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2ludml0YXRpb25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2ludml0YXRpb25zL3tpbnZpdGF0aW9uX2lkfS90ZWFtc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9pc3N1ZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vbWVtYmVyc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9tZW1iZXJzL3t1c2VybmFtZX0vY29kZXNwYWNlc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9taWdyYXRpb25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlcy97cm9sZV9pZH0vdGVhbXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3tyb2xlX2lkfS91c2Vyc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9vdXRzaWRlX2NvbGxhYm9yYXRvcnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcGFja2FnZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2VuLXJlcXVlc3RzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbi1yZXF1ZXN0cy97cGF0X3JlcXVlc3RfaWR9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW5zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbnMve3BhdF9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3ByaXZhdGUtcmVnaXN0cmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wcm9qZWN0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wcm9qZWN0c1YyXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9maWVsZHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3Byb3BlcnRpZXMvdmFsdWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3B1YmxpY19tZW1iZXJzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3JlcG9zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3J1bGVzZXRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3J1bGVzZXRzL3J1bGUtc3VpdGVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3J1bGVzZXRzL3tydWxlc2V0X2lkfS9oaXN0b3J5XCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3NlY3JldC1zY2FubmluZy9hbGVydHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vc2VjdXJpdHktYWR2aXNvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9pbW11dGFibGUtcmVsZWFzZXMvcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL25ldHdvcmstY29uZmlndXJhdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbS97dGVhbV9zbHVnfS9jb3BpbG90L21ldHJpY3NcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzL3tjb21tZW50X251bWJlcn0vcmVhY3Rpb25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vcmVhY3Rpb25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2ludml0YXRpb25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L21lbWJlcnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vcHJvamVjdHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vcmVwb3NcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vdGVhbXNcIixcbiAgXCJHRVQgL3Byb2plY3RzL3twcm9qZWN0X2lkfS9jb2xsYWJvcmF0b3JzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2FydGlmYWN0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9jYWNoZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvb3JnYW5pemF0aW9uLXNlY3JldHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvb3JnYW5pemF0aW9uLXZhcmlhYmxlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hcnRpZmFjdHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hdHRlbXB0cy97YXR0ZW1wdF9udW1iZXJ9L2pvYnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9qb2JzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3NlY3JldHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvdmFyaWFibGVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy93b3JrZmxvd3Mve3dvcmtmbG93X2lkfS9ydW5zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpdml0eVwiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXNzaWduZWVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdHRlc3RhdGlvbnMve3N1YmplY3RfZGlnZXN0fVwiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXJ1bnMve2NoZWNrX3J1bl9pZH0vYW5ub3RhdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXN1aXRlcy97Y2hlY2tfc3VpdGVfaWR9L2NoZWNrLXJ1bnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfS9pbnN0YW5jZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYW5hbHlzZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvZGV2Y29udGFpbmVyc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9zZWNyZXRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2xsYWJvcmF0b3JzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97Y29tbWl0X3NoYX0vY29tbWVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve2NvbW1pdF9zaGF9L3B1bGxzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tyZWZ9L2NoZWNrLXJ1bnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vY2hlY2stc3VpdGVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tyZWZ9L3N0YXR1c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97cmVmfS9zdGF0dXNlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tcGFyZS97YmFzZWhlYWR9XCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21wYXJlL3tiYXNlfS4uLntoZWFkfVwiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29udHJpYnV0b3JzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L2FsZXJ0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9zZWNyZXRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBsb3ltZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwbG95bWVudHMve2RlcGxveW1lbnRfaWR9L3N0YXR1c2VzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudC1icmFuY2gtcG9saWNpZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudF9wcm90ZWN0aW9uX3J1bGVzL2FwcHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vc2VjcmV0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS92YXJpYWJsZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2V2ZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZm9ya3NcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH0vZGVsaXZlcmllc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaW52aXRhdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2V2ZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vZGVwZW5kZW5jaWVzL2Jsb2NrZWRfYnlcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9kZXBlbmRlbmNpZXMvYmxvY2tpbmdcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9ldmVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sYWJlbHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9zdWJfaXNzdWVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vdGltZWxpbmVcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2tleXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2xhYmVsc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbWlsZXN0b25lc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbWlsZXN0b25lcy97bWlsZXN0b25lX251bWJlcn0vbGFiZWxzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ub3RpZmljYXRpb25zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlcy9idWlsZHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3Byb2plY3RzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxsc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vY29tbWVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vY29tbWl0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9maWxlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXZpZXdzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3Mve3Jldmlld19pZH0vY29tbWVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH0vYXNzZXRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH0vcmVhY3Rpb25zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlcy9icmFuY2hlcy97YnJhbmNofVwiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzL3J1bGUtc3VpdGVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0cy97cnVsZXNldF9pZH0vaGlzdG9yeVwiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfS9sb2NhdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3VyaXR5LWFkdmlzb3JpZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXJnYXplcnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N1YnNjcmliZXJzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90YWdzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90ZWFtc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdG9waWNzXCIsXG4gIFwiR0VUIC9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL3NlYXJjaC9jb2RlXCIsXG4gIFwiR0VUIC9zZWFyY2gvY29tbWl0c1wiLFxuICBcIkdFVCAvc2VhcmNoL2lzc3Vlc1wiLFxuICBcIkdFVCAvc2VhcmNoL2xhYmVsc1wiLFxuICBcIkdFVCAvc2VhcmNoL3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvc2VhcmNoL3RvcGljc1wiLFxuICBcIkdFVCAvc2VhcmNoL3VzZXJzXCIsXG4gIFwiR0VUIC90ZWFtcy97dGVhbV9pZH0vZGlzY3Vzc2lvbnNcIixcbiAgXCJHRVQgL3RlYW1zL3t0ZWFtX2lkfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gIFwiR0VUIC90ZWFtcy97dGVhbV9pZH0vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9udW1iZXJ9L3JlYWN0aW9uc1wiLFxuICBcIkdFVCAvdGVhbXMve3RlYW1faWR9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vcmVhY3Rpb25zXCIsXG4gIFwiR0VUIC90ZWFtcy97dGVhbV9pZH0vaW52aXRhdGlvbnNcIixcbiAgXCJHRVQgL3RlYW1zL3t0ZWFtX2lkfS9tZW1iZXJzXCIsXG4gIFwiR0VUIC90ZWFtcy97dGVhbV9pZH0vcHJvamVjdHNcIixcbiAgXCJHRVQgL3RlYW1zL3t0ZWFtX2lkfS9yZXBvc1wiLFxuICBcIkdFVCAvdGVhbXMve3RlYW1faWR9L3RlYW1zXCIsXG4gIFwiR0VUIC91c2VyL2Jsb2Nrc1wiLFxuICBcIkdFVCAvdXNlci9jb2Rlc3BhY2VzXCIsXG4gIFwiR0VUIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0c1wiLFxuICBcIkdFVCAvdXNlci9lbWFpbHNcIixcbiAgXCJHRVQgL3VzZXIvZm9sbG93ZXJzXCIsXG4gIFwiR0VUIC91c2VyL2ZvbGxvd2luZ1wiLFxuICBcIkdFVCAvdXNlci9ncGdfa2V5c1wiLFxuICBcIkdFVCAvdXNlci9pbnN0YWxsYXRpb25zXCIsXG4gIFwiR0VUIC91c2VyL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC91c2VyL2lzc3Vlc1wiLFxuICBcIkdFVCAvdXNlci9rZXlzXCIsXG4gIFwiR0VUIC91c2VyL21hcmtldHBsYWNlX3B1cmNoYXNlc1wiLFxuICBcIkdFVCAvdXNlci9tYXJrZXRwbGFjZV9wdXJjaGFzZXMvc3R1YmJlZFwiLFxuICBcIkdFVCAvdXNlci9tZW1iZXJzaGlwcy9vcmdzXCIsXG4gIFwiR0VUIC91c2VyL21pZ3JhdGlvbnNcIixcbiAgXCJHRVQgL3VzZXIvbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL3VzZXIvb3Jnc1wiLFxuICBcIkdFVCAvdXNlci9wYWNrYWdlc1wiLFxuICBcIkdFVCAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9uc1wiLFxuICBcIkdFVCAvdXNlci9wdWJsaWNfZW1haWxzXCIsXG4gIFwiR0VUIC91c2VyL3JlcG9zXCIsXG4gIFwiR0VUIC91c2VyL3JlcG9zaXRvcnlfaW52aXRhdGlvbnNcIixcbiAgXCJHRVQgL3VzZXIvc29jaWFsX2FjY291bnRzXCIsXG4gIFwiR0VUIC91c2VyL3NzaF9zaWduaW5nX2tleXNcIixcbiAgXCJHRVQgL3VzZXIvc3RhcnJlZFwiLFxuICBcIkdFVCAvdXNlci9zdWJzY3JpcHRpb25zXCIsXG4gIFwiR0VUIC91c2VyL3RlYW1zXCIsXG4gIFwiR0VUIC91c2Vyc1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9hdHRlc3RhdGlvbnMve3N1YmplY3RfZGlnZXN0fVwiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ldmVudHNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZXZlbnRzL29yZ3Mve29yZ31cIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZXZlbnRzL3B1YmxpY1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9mb2xsb3dlcnNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZm9sbG93aW5nXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2dpc3RzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2dwZ19rZXlzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2tleXNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vb3Jnc1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wYWNrYWdlc1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9maWVsZHNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3JlY2VpdmVkX2V2ZW50c1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9yZWNlaXZlZF9ldmVudHMvcHVibGljXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3JlcG9zXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3NvY2lhbF9hY2NvdW50c1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zc2hfc2lnbmluZ19rZXlzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3N0YXJyZWRcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc3Vic2NyaXB0aW9uc1wiXG5dO1xuXG4vLyBwa2cvZGlzdC1zcmMvcGFnaW5hdGluZy1lbmRwb2ludHMuanNcbmZ1bmN0aW9uIGlzUGFnaW5hdGluZ0VuZHBvaW50KGFyZykge1xuICBpZiAodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBwYWdpbmF0aW5nRW5kcG9pbnRzLmluY2x1ZGVzKGFyZyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9pbmRleC5qc1xuZnVuY3Rpb24gcGFnaW5hdGVSZXN0KG9jdG9raXQpIHtcbiAgcmV0dXJuIHtcbiAgICBwYWdpbmF0ZTogT2JqZWN0LmFzc2lnbihwYWdpbmF0ZS5iaW5kKG51bGwsIG9jdG9raXQpLCB7XG4gICAgICBpdGVyYXRvcjogaXRlcmF0b3IuYmluZChudWxsLCBvY3Rva2l0KVxuICAgIH0pXG4gIH07XG59XG5wYWdpbmF0ZVJlc3QuVkVSU0lPTiA9IFZFUlNJT047XG5leHBvcnQge1xuICBjb21wb3NlUGFnaW5hdGVSZXN0LFxuICBpc1BhZ2luYXRpbmdFbmRwb2ludCxcbiAgcGFnaW5hdGVSZXN0LFxuICBwYWdpbmF0aW5nRW5kcG9pbnRzXG59O1xuIiwgImV4cG9ydCBjb25zdCBWRVJTSU9OID0gXCIxNy4wLjBcIjtcbiIsICJpbXBvcnQgdHlwZSB7IEVuZHBvaW50c0RlZmF1bHRzQW5kRGVjb3JhdGlvbnMgfSBmcm9tIFwiLi4vdHlwZXMuanNcIjtcbmNvbnN0IEVuZHBvaW50czogRW5kcG9pbnRzRGVmYXVsdHNBbmREZWNvcmF0aW9ucyA9IHtcbiAgYWN0aW9uczoge1xuICAgIGFkZEN1c3RvbUxhYmVsc1RvU2VsZkhvc3RlZFJ1bm5lckZvck9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIGFkZEN1c3RvbUxhYmVsc1RvU2VsZkhvc3RlZFJ1bm5lckZvclJlcG86IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9L2xhYmVsc1wiLFxuICAgIF0sXG4gICAgYWRkUmVwb0FjY2Vzc1RvU2VsZkhvc3RlZFJ1bm5lckdyb3VwSW5Pcmc6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVyLWdyb3Vwcy97cnVubmVyX2dyb3VwX2lkfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBhZGRTZWxlY3RlZFJlcG9Ub09yZ1NlY3JldDogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgYWRkU2VsZWN0ZWRSZXBvVG9PcmdWYXJpYWJsZTogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIGFwcHJvdmVXb3JrZmxvd1J1bjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vYXBwcm92ZVwiLFxuICAgIF0sXG4gICAgY2FuY2VsV29ya2Zsb3dSdW46IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2NhbmNlbFwiLFxuICAgIF0sXG4gICAgY3JlYXRlRW52aXJvbm1lbnRWYXJpYWJsZTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3ZhcmlhYmxlc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlSG9zdGVkUnVubmVyRm9yT3JnOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnNcIl0sXG4gICAgY3JlYXRlT3JVcGRhdGVFbnZpcm9ubWVudFNlY3JldDogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBjcmVhdGVPclVwZGF0ZU9yZ1NlY3JldDogW1wiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJdLFxuICAgIGNyZWF0ZU9yVXBkYXRlUmVwb1NlY3JldDogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBjcmVhdGVPcmdWYXJpYWJsZTogW1wiUE9TVCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlc1wiXSxcbiAgICBjcmVhdGVSZWdpc3RyYXRpb25Ub2tlbkZvck9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy9yZWdpc3RyYXRpb24tdG9rZW5cIixcbiAgICBdLFxuICAgIGNyZWF0ZVJlZ2lzdHJhdGlvblRva2VuRm9yUmVwbzogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMvcmVnaXN0cmF0aW9uLXRva2VuXCIsXG4gICAgXSxcbiAgICBjcmVhdGVSZW1vdmVUb2tlbkZvck9yZzogW1wiUE9TVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMvcmVtb3ZlLXRva2VuXCJdLFxuICAgIGNyZWF0ZVJlbW92ZVRva2VuRm9yUmVwbzogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMvcmVtb3ZlLXRva2VuXCIsXG4gICAgXSxcbiAgICBjcmVhdGVSZXBvVmFyaWFibGU6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvdmFyaWFibGVzXCJdLFxuICAgIGNyZWF0ZVdvcmtmbG93RGlzcGF0Y2g6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy93b3JrZmxvd3Mve3dvcmtmbG93X2lkfS9kaXNwYXRjaGVzXCIsXG4gICAgXSxcbiAgICBkZWxldGVBY3Rpb25zQ2FjaGVCeUlkOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9jYWNoZXMve2NhY2hlX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlQWN0aW9uc0NhY2hlQnlLZXk6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2NhY2hlc3s/a2V5LHJlZn1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUFydGlmYWN0OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9hcnRpZmFjdHMve2FydGlmYWN0X2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlQ3VzdG9tSW1hZ2VGcm9tT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL2ltYWdlcy9jdXN0b20ve2ltYWdlX2RlZmluaXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVDdXN0b21JbWFnZVZlcnNpb25Gcm9tT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL2ltYWdlcy9jdXN0b20ve2ltYWdlX2RlZmluaXRpb25faWR9L3ZlcnNpb25zL3t2ZXJzaW9ufVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRW52aXJvbm1lbnRTZWNyZXQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRW52aXJvbm1lbnRWYXJpYWJsZTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vdmFyaWFibGVzL3tuYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlSG9zdGVkUnVubmVyRm9yT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL3tob3N0ZWRfcnVubmVyX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlT3JnU2VjcmV0OiBbXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZGVsZXRlT3JnVmFyaWFibGU6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX1cIl0sXG4gICAgZGVsZXRlUmVwb1NlY3JldDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVSZXBvVmFyaWFibGU6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX1cIixcbiAgICBdLFxuICAgIGRlbGV0ZVNlbGZIb3N0ZWRSdW5uZXJGcm9tT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZVNlbGZIb3N0ZWRSdW5uZXJGcm9tUmVwbzogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlV29ya2Zsb3dSdW46IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9XCJdLFxuICAgIGRlbGV0ZVdvcmtmbG93UnVuTG9nczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9sb2dzXCIsXG4gICAgXSxcbiAgICBkaXNhYmxlU2VsZWN0ZWRSZXBvc2l0b3J5R2l0aHViQWN0aW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9ucy9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBkaXNhYmxlV29ya2Zsb3c6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93cy97d29ya2Zsb3dfaWR9L2Rpc2FibGVcIixcbiAgICBdLFxuICAgIGRvd25sb2FkQXJ0aWZhY3Q6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2FydGlmYWN0cy97YXJ0aWZhY3RfaWR9L3thcmNoaXZlX2Zvcm1hdH1cIixcbiAgICBdLFxuICAgIGRvd25sb2FkSm9iTG9nc0ZvcldvcmtmbG93UnVuOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9qb2JzL3tqb2JfaWR9L2xvZ3NcIixcbiAgICBdLFxuICAgIGRvd25sb2FkV29ya2Zsb3dSdW5BdHRlbXB0TG9nczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hdHRlbXB0cy97YXR0ZW1wdF9udW1iZXJ9L2xvZ3NcIixcbiAgICBdLFxuICAgIGRvd25sb2FkV29ya2Zsb3dSdW5Mb2dzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2xvZ3NcIixcbiAgICBdLFxuICAgIGVuYWJsZVNlbGVjdGVkUmVwb3NpdG9yeUdpdGh1YkFjdGlvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgZW5hYmxlV29ya2Zsb3c6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93cy97d29ya2Zsb3dfaWR9L2VuYWJsZVwiLFxuICAgIF0sXG4gICAgZm9yY2VDYW5jZWxXb3JrZmxvd1J1bjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vZm9yY2UtY2FuY2VsXCIsXG4gICAgXSxcbiAgICBnZW5lcmF0ZVJ1bm5lckppdGNvbmZpZ0Zvck9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy9nZW5lcmF0ZS1qaXRjb25maWdcIixcbiAgICBdLFxuICAgIGdlbmVyYXRlUnVubmVySml0Y29uZmlnRm9yUmVwbzogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMvZ2VuZXJhdGUtaml0Y29uZmlnXCIsXG4gICAgXSxcbiAgICBnZXRBY3Rpb25zQ2FjaGVMaXN0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvY2FjaGVzXCJdLFxuICAgIGdldEFjdGlvbnNDYWNoZVVzYWdlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvY2FjaGUvdXNhZ2VcIl0sXG4gICAgZ2V0QWN0aW9uc0NhY2hlVXNhZ2VCeVJlcG9Gb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvY2FjaGUvdXNhZ2UtYnktcmVwb3NpdG9yeVwiLFxuICAgIF0sXG4gICAgZ2V0QWN0aW9uc0NhY2hlVXNhZ2VGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2NhY2hlL3VzYWdlXCJdLFxuICAgIGdldEFsbG93ZWRBY3Rpb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3NlbGVjdGVkLWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGdldEFsbG93ZWRBY3Rpb25zUmVwb3NpdG9yeTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcGVybWlzc2lvbnMvc2VsZWN0ZWQtYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgZ2V0QXJ0aWZhY3Q6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9hcnRpZmFjdHMve2FydGlmYWN0X2lkfVwiXSxcbiAgICBnZXRDdXN0b21JbWFnZUZvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy9pbWFnZXMvY3VzdG9tL3tpbWFnZV9kZWZpbml0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0Q3VzdG9tSW1hZ2VWZXJzaW9uRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL2ltYWdlcy9jdXN0b20ve2ltYWdlX2RlZmluaXRpb25faWR9L3ZlcnNpb25zL3t2ZXJzaW9ufVwiLFxuICAgIF0sXG4gICAgZ2V0Q3VzdG9tT2lkY1N1YkNsYWltRm9yUmVwbzogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvb2lkYy9jdXN0b21pemF0aW9uL3N1YlwiLFxuICAgIF0sXG4gICAgZ2V0RW52aXJvbm1lbnRQdWJsaWNLZXk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3NlY3JldHMvcHVibGljLWtleVwiLFxuICAgIF0sXG4gICAgZ2V0RW52aXJvbm1lbnRTZWNyZXQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZ2V0RW52aXJvbm1lbnRWYXJpYWJsZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vdmFyaWFibGVzL3tuYW1lfVwiLFxuICAgIF0sXG4gICAgZ2V0R2l0aHViQWN0aW9uc0RlZmF1bHRXb3JrZmxvd1Blcm1pc3Npb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3dvcmtmbG93XCIsXG4gICAgXSxcbiAgICBnZXRHaXRodWJBY3Rpb25zRGVmYXVsdFdvcmtmbG93UGVybWlzc2lvbnNSZXBvc2l0b3J5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9wZXJtaXNzaW9ucy93b3JrZmxvd1wiLFxuICAgIF0sXG4gICAgZ2V0R2l0aHViQWN0aW9uc1Blcm1pc3Npb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zXCIsXG4gICAgXSxcbiAgICBnZXRHaXRodWJBY3Rpb25zUGVybWlzc2lvbnNSZXBvc2l0b3J5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9wZXJtaXNzaW9uc1wiLFxuICAgIF0sXG4gICAgZ2V0SG9zdGVkUnVubmVyRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL3tob3N0ZWRfcnVubmVyX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0SG9zdGVkUnVubmVyc0dpdGh1Yk93bmVkSW1hZ2VzRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL2ltYWdlcy9naXRodWItb3duZWRcIixcbiAgICBdLFxuICAgIGdldEhvc3RlZFJ1bm5lcnNMaW1pdHNGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvbGltaXRzXCIsXG4gICAgXSxcbiAgICBnZXRIb3N0ZWRSdW5uZXJzTWFjaGluZVNwZWNzRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL21hY2hpbmUtc2l6ZXNcIixcbiAgICBdLFxuICAgIGdldEhvc3RlZFJ1bm5lcnNQYXJ0bmVySW1hZ2VzRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL2ltYWdlcy9wYXJ0bmVyXCIsXG4gICAgXSxcbiAgICBnZXRIb3N0ZWRSdW5uZXJzUGxhdGZvcm1zRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL3BsYXRmb3Jtc1wiLFxuICAgIF0sXG4gICAgZ2V0Sm9iRm9yV29ya2Zsb3dSdW46IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9qb2JzL3tqb2JfaWR9XCJdLFxuICAgIGdldE9yZ1B1YmxpY0tleTogW1wiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0cy9wdWJsaWMta2V5XCJdLFxuICAgIGdldE9yZ1NlY3JldDogW1wiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJdLFxuICAgIGdldE9yZ1ZhcmlhYmxlOiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9XCJdLFxuICAgIGdldFBlbmRpbmdEZXBsb3ltZW50c0ZvclJ1bjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9wZW5kaW5nX2RlcGxveW1lbnRzXCIsXG4gICAgXSxcbiAgICBnZXRSZXBvUGVybWlzc2lvbnM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wiYWN0aW9uc1wiLCBcImdldEdpdGh1YkFjdGlvbnNQZXJtaXNzaW9uc1JlcG9zaXRvcnlcIl0gfSxcbiAgICBdLFxuICAgIGdldFJlcG9QdWJsaWNLZXk6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9zZWNyZXRzL3B1YmxpYy1rZXlcIl0sXG4gICAgZ2V0UmVwb1NlY3JldDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfVwiXSxcbiAgICBnZXRSZXBvVmFyaWFibGU6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9XCJdLFxuICAgIGdldFJldmlld3NGb3JSdW46IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vYXBwcm92YWxzXCIsXG4gICAgXSxcbiAgICBnZXRTZWxmSG9zdGVkUnVubmVyRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9XCJdLFxuICAgIGdldFNlbGZIb3N0ZWRSdW5uZXJGb3JSZXBvOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRXb3JrZmxvdzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93cy97d29ya2Zsb3dfaWR9XCJdLFxuICAgIGdldFdvcmtmbG93QWNjZXNzVG9SZXBvc2l0b3J5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9wZXJtaXNzaW9ucy9hY2Nlc3NcIixcbiAgICBdLFxuICAgIGdldFdvcmtmbG93UnVuOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfVwiXSxcbiAgICBnZXRXb3JrZmxvd1J1bkF0dGVtcHQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vYXR0ZW1wdHMve2F0dGVtcHRfbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgZ2V0V29ya2Zsb3dSdW5Vc2FnZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS90aW1pbmdcIixcbiAgICBdLFxuICAgIGdldFdvcmtmbG93VXNhZ2U6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93cy97d29ya2Zsb3dfaWR9L3RpbWluZ1wiLFxuICAgIF0sXG4gICAgbGlzdEFydGlmYWN0c0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9hcnRpZmFjdHNcIl0sXG4gICAgbGlzdEN1c3RvbUltYWdlVmVyc2lvbnNGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvaW1hZ2VzL2N1c3RvbS97aW1hZ2VfZGVmaW5pdGlvbl9pZH0vdmVyc2lvbnNcIixcbiAgICBdLFxuICAgIGxpc3RDdXN0b21JbWFnZXNGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvaW1hZ2VzL2N1c3RvbVwiLFxuICAgIF0sXG4gICAgbGlzdEVudmlyb25tZW50U2VjcmV0czogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vc2VjcmV0c1wiLFxuICAgIF0sXG4gICAgbGlzdEVudmlyb25tZW50VmFyaWFibGVzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS92YXJpYWJsZXNcIixcbiAgICBdLFxuICAgIGxpc3RHaXRodWJIb3N0ZWRSdW5uZXJzSW5Hcm91cEZvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXItZ3JvdXBzL3tydW5uZXJfZ3JvdXBfaWR9L2hvc3RlZC1ydW5uZXJzXCIsXG4gICAgXSxcbiAgICBsaXN0SG9zdGVkUnVubmVyc0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnNcIl0sXG4gICAgbGlzdEpvYnNGb3JXb3JrZmxvd1J1bjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9qb2JzXCIsXG4gICAgXSxcbiAgICBsaXN0Sm9ic0ZvcldvcmtmbG93UnVuQXR0ZW1wdDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hdHRlbXB0cy97YXR0ZW1wdF9udW1iZXJ9L2pvYnNcIixcbiAgICBdLFxuICAgIGxpc3RMYWJlbHNGb3JTZWxmSG9zdGVkUnVubmVyRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzXCIsXG4gICAgXSxcbiAgICBsaXN0TGFiZWxzRm9yU2VsZkhvc3RlZFJ1bm5lckZvclJlcG86IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzXCIsXG4gICAgXSxcbiAgICBsaXN0T3JnU2VjcmV0czogW1wiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0c1wiXSxcbiAgICBsaXN0T3JnVmFyaWFibGVzOiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXNcIl0sXG4gICAgbGlzdFJlcG9Pcmdhbml6YXRpb25TZWNyZXRzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9vcmdhbml6YXRpb24tc2VjcmV0c1wiLFxuICAgIF0sXG4gICAgbGlzdFJlcG9Pcmdhbml6YXRpb25WYXJpYWJsZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL29yZ2FuaXphdGlvbi12YXJpYWJsZXNcIixcbiAgICBdLFxuICAgIGxpc3RSZXBvU2VjcmV0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3NlY3JldHNcIl0sXG4gICAgbGlzdFJlcG9WYXJpYWJsZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy92YXJpYWJsZXNcIl0sXG4gICAgbGlzdFJlcG9Xb3JrZmxvd3M6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy93b3JrZmxvd3NcIl0sXG4gICAgbGlzdFJ1bm5lckFwcGxpY2F0aW9uc0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy9kb3dubG9hZHNcIl0sXG4gICAgbGlzdFJ1bm5lckFwcGxpY2F0aW9uc0ZvclJlcG86IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMvZG93bmxvYWRzXCIsXG4gICAgXSxcbiAgICBsaXN0U2VsZWN0ZWRSZXBvc0Zvck9yZ1NlY3JldDogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBsaXN0U2VsZWN0ZWRSZXBvc0Zvck9yZ1ZhcmlhYmxlOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBsaXN0U2VsZWN0ZWRSZXBvc2l0b3JpZXNFbmFibGVkR2l0aHViQWN0aW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9ucy9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGxpc3RTZWxmSG9zdGVkUnVubmVyc0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVyc1wiXSxcbiAgICBsaXN0U2VsZkhvc3RlZFJ1bm5lcnNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVyc1wiXSxcbiAgICBsaXN0V29ya2Zsb3dSdW5BcnRpZmFjdHM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vYXJ0aWZhY3RzXCIsXG4gICAgXSxcbiAgICBsaXN0V29ya2Zsb3dSdW5zOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy93b3JrZmxvd3Mve3dvcmtmbG93X2lkfS9ydW5zXCIsXG4gICAgXSxcbiAgICBsaXN0V29ya2Zsb3dSdW5zRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnNcIl0sXG4gICAgcmVSdW5Kb2JGb3JXb3JrZmxvd1J1bjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2pvYnMve2pvYl9pZH0vcmVydW5cIixcbiAgICBdLFxuICAgIHJlUnVuV29ya2Zsb3c6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9yZXJ1blwiXSxcbiAgICByZVJ1bldvcmtmbG93RmFpbGVkSm9iczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vcmVydW4tZmFpbGVkLWpvYnNcIixcbiAgICBdLFxuICAgIHJlbW92ZUFsbEN1c3RvbUxhYmVsc0Zyb21TZWxmSG9zdGVkUnVubmVyRm9yT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzXCIsXG4gICAgXSxcbiAgICByZW1vdmVBbGxDdXN0b21MYWJlbHNGcm9tU2VsZkhvc3RlZFJ1bm5lckZvclJlcG86IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzXCIsXG4gICAgXSxcbiAgICByZW1vdmVDdXN0b21MYWJlbEZyb21TZWxmSG9zdGVkUnVubmVyRm9yT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzL3tuYW1lfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlQ3VzdG9tTGFiZWxGcm9tU2VsZkhvc3RlZFJ1bm5lckZvclJlcG86IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzL3tuYW1lfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlU2VsZWN0ZWRSZXBvRnJvbU9yZ1NlY3JldDogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlU2VsZWN0ZWRSZXBvRnJvbU9yZ1ZhcmlhYmxlOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgcmV2aWV3Q3VzdG9tR2F0ZXNGb3JSdW46IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2RlcGxveW1lbnRfcHJvdGVjdGlvbl9ydWxlXCIsXG4gICAgXSxcbiAgICByZXZpZXdQZW5kaW5nRGVwbG95bWVudHNGb3JSdW46IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L3BlbmRpbmdfZGVwbG95bWVudHNcIixcbiAgICBdLFxuICAgIHNldEFsbG93ZWRBY3Rpb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3NlbGVjdGVkLWFjdGlvbnNcIixcbiAgICBdLFxuICAgIHNldEFsbG93ZWRBY3Rpb25zUmVwb3NpdG9yeTogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcGVybWlzc2lvbnMvc2VsZWN0ZWQtYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgc2V0Q3VzdG9tTGFiZWxzRm9yU2VsZkhvc3RlZFJ1bm5lckZvck9yZzogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9L2xhYmVsc1wiLFxuICAgIF0sXG4gICAgc2V0Q3VzdG9tTGFiZWxzRm9yU2VsZkhvc3RlZFJ1bm5lckZvclJlcG86IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzXCIsXG4gICAgXSxcbiAgICBzZXRDdXN0b21PaWRjU3ViQ2xhaW1Gb3JSZXBvOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9vaWRjL2N1c3RvbWl6YXRpb24vc3ViXCIsXG4gICAgXSxcbiAgICBzZXRHaXRodWJBY3Rpb25zRGVmYXVsdFdvcmtmbG93UGVybWlzc2lvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvd29ya2Zsb3dcIixcbiAgICBdLFxuICAgIHNldEdpdGh1YkFjdGlvbnNEZWZhdWx0V29ya2Zsb3dQZXJtaXNzaW9uc1JlcG9zaXRvcnk6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zL3dvcmtmbG93XCIsXG4gICAgXSxcbiAgICBzZXRHaXRodWJBY3Rpb25zUGVybWlzc2lvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnNcIixcbiAgICBdLFxuICAgIHNldEdpdGh1YkFjdGlvbnNQZXJtaXNzaW9uc1JlcG9zaXRvcnk6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zXCIsXG4gICAgXSxcbiAgICBzZXRTZWxlY3RlZFJlcG9zRm9yT3JnU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIHNldFNlbGVjdGVkUmVwb3NGb3JPcmdWYXJpYWJsZTogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgc2V0U2VsZWN0ZWRSZXBvc2l0b3JpZXNFbmFibGVkR2l0aHViQWN0aW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9ucy9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIHNldFdvcmtmbG93QWNjZXNzVG9SZXBvc2l0b3J5OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9wZXJtaXNzaW9ucy9hY2Nlc3NcIixcbiAgICBdLFxuICAgIHVwZGF0ZUVudmlyb25tZW50VmFyaWFibGU6IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vdmFyaWFibGVzL3tuYW1lfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlSG9zdGVkUnVubmVyRm9yT3JnOiBbXG4gICAgICBcIlBBVENIIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMve2hvc3RlZF9ydW5uZXJfaWR9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVPcmdWYXJpYWJsZTogW1wiUEFUQ0ggL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9XCJdLFxuICAgIHVwZGF0ZVJlcG9WYXJpYWJsZTogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9XCIsXG4gICAgXSxcbiAgfSxcbiAgYWN0aXZpdHk6IHtcbiAgICBjaGVja1JlcG9Jc1N0YXJyZWRCeUF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvc3RhcnJlZC97b3duZXJ9L3tyZXBvfVwiXSxcbiAgICBkZWxldGVSZXBvU3Vic2NyaXB0aW9uOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N1YnNjcmlwdGlvblwiXSxcbiAgICBkZWxldGVUaHJlYWRTdWJzY3JpcHRpb246IFtcbiAgICAgIFwiREVMRVRFIC9ub3RpZmljYXRpb25zL3RocmVhZHMve3RocmVhZF9pZH0vc3Vic2NyaXB0aW9uXCIsXG4gICAgXSxcbiAgICBnZXRGZWVkczogW1wiR0VUIC9mZWVkc1wiXSxcbiAgICBnZXRSZXBvU3Vic2NyaXB0aW9uOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N1YnNjcmlwdGlvblwiXSxcbiAgICBnZXRUaHJlYWQ6IFtcIkdFVCAvbm90aWZpY2F0aW9ucy90aHJlYWRzL3t0aHJlYWRfaWR9XCJdLFxuICAgIGdldFRocmVhZFN1YnNjcmlwdGlvbkZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvbm90aWZpY2F0aW9ucy90aHJlYWRzL3t0aHJlYWRfaWR9L3N1YnNjcmlwdGlvblwiLFxuICAgIF0sXG4gICAgbGlzdEV2ZW50c0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZXZlbnRzXCJdLFxuICAgIGxpc3ROb3RpZmljYXRpb25zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvbm90aWZpY2F0aW9uc1wiXSxcbiAgICBsaXN0T3JnRXZlbnRzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2V2ZW50cy9vcmdzL3tvcmd9XCIsXG4gICAgXSxcbiAgICBsaXN0UHVibGljRXZlbnRzOiBbXCJHRVQgL2V2ZW50c1wiXSxcbiAgICBsaXN0UHVibGljRXZlbnRzRm9yUmVwb05ldHdvcms6IFtcIkdFVCAvbmV0d29ya3Mve293bmVyfS97cmVwb30vZXZlbnRzXCJdLFxuICAgIGxpc3RQdWJsaWNFdmVudHNGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZXZlbnRzL3B1YmxpY1wiXSxcbiAgICBsaXN0UHVibGljT3JnRXZlbnRzOiBbXCJHRVQgL29yZ3Mve29yZ30vZXZlbnRzXCJdLFxuICAgIGxpc3RSZWNlaXZlZEV2ZW50c0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9yZWNlaXZlZF9ldmVudHNcIl0sXG4gICAgbGlzdFJlY2VpdmVkUHVibGljRXZlbnRzRm9yVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcmVjZWl2ZWRfZXZlbnRzL3B1YmxpY1wiLFxuICAgIF0sXG4gICAgbGlzdFJlcG9FdmVudHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZXZlbnRzXCJdLFxuICAgIGxpc3RSZXBvTm90aWZpY2F0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbm90aWZpY2F0aW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdFJlcG9zU3RhcnJlZEJ5QXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9zdGFycmVkXCJdLFxuICAgIGxpc3RSZXBvc1N0YXJyZWRCeVVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zdGFycmVkXCJdLFxuICAgIGxpc3RSZXBvc1dhdGNoZWRCeVVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zdWJzY3JpcHRpb25zXCJdLFxuICAgIGxpc3RTdGFyZ2F6ZXJzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdGFyZ2F6ZXJzXCJdLFxuICAgIGxpc3RXYXRjaGVkUmVwb3NGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3N1YnNjcmlwdGlvbnNcIl0sXG4gICAgbGlzdFdhdGNoZXJzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdWJzY3JpYmVyc1wiXSxcbiAgICBtYXJrTm90aWZpY2F0aW9uc0FzUmVhZDogW1wiUFVUIC9ub3RpZmljYXRpb25zXCJdLFxuICAgIG1hcmtSZXBvTm90aWZpY2F0aW9uc0FzUmVhZDogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ub3RpZmljYXRpb25zXCJdLFxuICAgIG1hcmtUaHJlYWRBc0RvbmU6IFtcIkRFTEVURSAvbm90aWZpY2F0aW9ucy90aHJlYWRzL3t0aHJlYWRfaWR9XCJdLFxuICAgIG1hcmtUaHJlYWRBc1JlYWQ6IFtcIlBBVENIIC9ub3RpZmljYXRpb25zL3RocmVhZHMve3RocmVhZF9pZH1cIl0sXG4gICAgc2V0UmVwb1N1YnNjcmlwdGlvbjogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdWJzY3JpcHRpb25cIl0sXG4gICAgc2V0VGhyZWFkU3Vic2NyaXB0aW9uOiBbXG4gICAgICBcIlBVVCAvbm90aWZpY2F0aW9ucy90aHJlYWRzL3t0aHJlYWRfaWR9L3N1YnNjcmlwdGlvblwiLFxuICAgIF0sXG4gICAgc3RhclJlcG9Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUFVUIC91c2VyL3N0YXJyZWQve293bmVyfS97cmVwb31cIl0sXG4gICAgdW5zdGFyUmVwb0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJERUxFVEUgL3VzZXIvc3RhcnJlZC97b3duZXJ9L3tyZXBvfVwiXSxcbiAgfSxcbiAgYXBwczoge1xuICAgIGFkZFJlcG9Ub0luc3RhbGxhdGlvbjogW1xuICAgICAgXCJQVVQgL3VzZXIvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wiYXBwc1wiLCBcImFkZFJlcG9Ub0luc3RhbGxhdGlvbkZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBhZGRSZXBvVG9JbnN0YWxsYXRpb25Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQVVQgL3VzZXIvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBjaGVja1Rva2VuOiBbXCJQT1NUIC9hcHBsaWNhdGlvbnMve2NsaWVudF9pZH0vdG9rZW5cIl0sXG4gICAgY3JlYXRlRnJvbU1hbmlmZXN0OiBbXCJQT1NUIC9hcHAtbWFuaWZlc3RzL3tjb2RlfS9jb252ZXJzaW9uc1wiXSxcbiAgICBjcmVhdGVJbnN0YWxsYXRpb25BY2Nlc3NUb2tlbjogW1xuICAgICAgXCJQT1NUIC9hcHAvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9hY2Nlc3NfdG9rZW5zXCIsXG4gICAgXSxcbiAgICBkZWxldGVBdXRob3JpemF0aW9uOiBbXCJERUxFVEUgL2FwcGxpY2F0aW9ucy97Y2xpZW50X2lkfS9ncmFudFwiXSxcbiAgICBkZWxldGVJbnN0YWxsYXRpb246IFtcIkRFTEVURSAvYXBwL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH1cIl0sXG4gICAgZGVsZXRlVG9rZW46IFtcIkRFTEVURSAvYXBwbGljYXRpb25zL3tjbGllbnRfaWR9L3Rva2VuXCJdLFxuICAgIGdldEF1dGhlbnRpY2F0ZWQ6IFtcIkdFVCAvYXBwXCJdLFxuICAgIGdldEJ5U2x1ZzogW1wiR0VUIC9hcHBzL3thcHBfc2x1Z31cIl0sXG4gICAgZ2V0SW5zdGFsbGF0aW9uOiBbXCJHRVQgL2FwcC9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9XCJdLFxuICAgIGdldE9yZ0luc3RhbGxhdGlvbjogW1wiR0VUIC9vcmdzL3tvcmd9L2luc3RhbGxhdGlvblwiXSxcbiAgICBnZXRSZXBvSW5zdGFsbGF0aW9uOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2luc3RhbGxhdGlvblwiXSxcbiAgICBnZXRTdWJzY3JpcHRpb25QbGFuRm9yQWNjb3VudDogW1xuICAgICAgXCJHRVQgL21hcmtldHBsYWNlX2xpc3RpbmcvYWNjb3VudHMve2FjY291bnRfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRTdWJzY3JpcHRpb25QbGFuRm9yQWNjb3VudFN0dWJiZWQ6IFtcbiAgICAgIFwiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3N0dWJiZWQvYWNjb3VudHMve2FjY291bnRfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRVc2VySW5zdGFsbGF0aW9uOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vaW5zdGFsbGF0aW9uXCJdLFxuICAgIGdldFdlYmhvb2tDb25maWdGb3JBcHA6IFtcIkdFVCAvYXBwL2hvb2svY29uZmlnXCJdLFxuICAgIGdldFdlYmhvb2tEZWxpdmVyeTogW1wiR0VUIC9hcHAvaG9vay9kZWxpdmVyaWVzL3tkZWxpdmVyeV9pZH1cIl0sXG4gICAgbGlzdEFjY291bnRzRm9yUGxhbjogW1wiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3BsYW5zL3twbGFuX2lkfS9hY2NvdW50c1wiXSxcbiAgICBsaXN0QWNjb3VudHNGb3JQbGFuU3R1YmJlZDogW1xuICAgICAgXCJHRVQgL21hcmtldHBsYWNlX2xpc3Rpbmcvc3R1YmJlZC9wbGFucy97cGxhbl9pZH0vYWNjb3VudHNcIixcbiAgICBdLFxuICAgIGxpc3RJbnN0YWxsYXRpb25SZXBvc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgbGlzdEluc3RhbGxhdGlvblJlcXVlc3RzRm9yQXV0aGVudGljYXRlZEFwcDogW1xuICAgICAgXCJHRVQgL2FwcC9pbnN0YWxsYXRpb24tcmVxdWVzdHNcIixcbiAgICBdLFxuICAgIGxpc3RJbnN0YWxsYXRpb25zOiBbXCJHRVQgL2FwcC9pbnN0YWxsYXRpb25zXCJdLFxuICAgIGxpc3RJbnN0YWxsYXRpb25zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9pbnN0YWxsYXRpb25zXCJdLFxuICAgIGxpc3RQbGFuczogW1wiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3BsYW5zXCJdLFxuICAgIGxpc3RQbGFuc1N0dWJiZWQ6IFtcIkdFVCAvbWFya2V0cGxhY2VfbGlzdGluZy9zdHViYmVkL3BsYW5zXCJdLFxuICAgIGxpc3RSZXBvc0FjY2Vzc2libGVUb0luc3RhbGxhdGlvbjogW1wiR0VUIC9pbnN0YWxsYXRpb24vcmVwb3NpdG9yaWVzXCJdLFxuICAgIGxpc3RTdWJzY3JpcHRpb25zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9tYXJrZXRwbGFjZV9wdXJjaGFzZXNcIl0sXG4gICAgbGlzdFN1YnNjcmlwdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlclN0dWJiZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL21hcmtldHBsYWNlX3B1cmNoYXNlcy9zdHViYmVkXCIsXG4gICAgXSxcbiAgICBsaXN0V2ViaG9va0RlbGl2ZXJpZXM6IFtcIkdFVCAvYXBwL2hvb2svZGVsaXZlcmllc1wiXSxcbiAgICByZWRlbGl2ZXJXZWJob29rRGVsaXZlcnk6IFtcbiAgICAgIFwiUE9TVCAvYXBwL2hvb2svZGVsaXZlcmllcy97ZGVsaXZlcnlfaWR9L2F0dGVtcHRzXCIsXG4gICAgXSxcbiAgICByZW1vdmVSZXBvRnJvbUluc3RhbGxhdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wiYXBwc1wiLCBcInJlbW92ZVJlcG9Gcm9tSW5zdGFsbGF0aW9uRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIHJlbW92ZVJlcG9Gcm9tSW5zdGFsbGF0aW9uRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgcmVzZXRUb2tlbjogW1wiUEFUQ0ggL2FwcGxpY2F0aW9ucy97Y2xpZW50X2lkfS90b2tlblwiXSxcbiAgICByZXZva2VJbnN0YWxsYXRpb25BY2Nlc3NUb2tlbjogW1wiREVMRVRFIC9pbnN0YWxsYXRpb24vdG9rZW5cIl0sXG4gICAgc2NvcGVUb2tlbjogW1wiUE9TVCAvYXBwbGljYXRpb25zL3tjbGllbnRfaWR9L3Rva2VuL3Njb3BlZFwiXSxcbiAgICBzdXNwZW5kSW5zdGFsbGF0aW9uOiBbXCJQVVQgL2FwcC9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L3N1c3BlbmRlZFwiXSxcbiAgICB1bnN1c3BlbmRJbnN0YWxsYXRpb246IFtcbiAgICAgIFwiREVMRVRFIC9hcHAvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9zdXNwZW5kZWRcIixcbiAgICBdLFxuICAgIHVwZGF0ZVdlYmhvb2tDb25maWdGb3JBcHA6IFtcIlBBVENIIC9hcHAvaG9vay9jb25maWdcIl0sXG4gIH0sXG4gIGJpbGxpbmc6IHtcbiAgICBnZXRHaXRodWJBY3Rpb25zQmlsbGluZ09yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2JpbGxpbmcvYWN0aW9uc1wiXSxcbiAgICBnZXRHaXRodWJBY3Rpb25zQmlsbGluZ1VzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3NldHRpbmdzL2JpbGxpbmcvYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgZ2V0R2l0aHViQmlsbGluZ1ByZW1pdW1SZXF1ZXN0VXNhZ2VSZXBvcnRPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdhbml6YXRpb25zL3tvcmd9L3NldHRpbmdzL2JpbGxpbmcvcHJlbWl1bV9yZXF1ZXN0L3VzYWdlXCIsXG4gICAgXSxcbiAgICBnZXRHaXRodWJCaWxsaW5nUHJlbWl1bVJlcXVlc3RVc2FnZVJlcG9ydFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3NldHRpbmdzL2JpbGxpbmcvcHJlbWl1bV9yZXF1ZXN0L3VzYWdlXCIsXG4gICAgXSxcbiAgICBnZXRHaXRodWJCaWxsaW5nVXNhZ2VSZXBvcnRPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdhbml6YXRpb25zL3tvcmd9L3NldHRpbmdzL2JpbGxpbmcvdXNhZ2VcIixcbiAgICBdLFxuICAgIGdldEdpdGh1YkJpbGxpbmdVc2FnZVJlcG9ydFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3NldHRpbmdzL2JpbGxpbmcvdXNhZ2VcIixcbiAgICBdLFxuICAgIGdldEdpdGh1YlBhY2thZ2VzQmlsbGluZ09yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2JpbGxpbmcvcGFja2FnZXNcIl0sXG4gICAgZ2V0R2l0aHViUGFja2FnZXNCaWxsaW5nVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc2V0dGluZ3MvYmlsbGluZy9wYWNrYWdlc1wiLFxuICAgIF0sXG4gICAgZ2V0U2hhcmVkU3RvcmFnZUJpbGxpbmdPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2JpbGxpbmcvc2hhcmVkLXN0b3JhZ2VcIixcbiAgICBdLFxuICAgIGdldFNoYXJlZFN0b3JhZ2VCaWxsaW5nVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc2V0dGluZ3MvYmlsbGluZy9zaGFyZWQtc3RvcmFnZVwiLFxuICAgIF0sXG4gIH0sXG4gIGNhbXBhaWduczoge1xuICAgIGNyZWF0ZUNhbXBhaWduOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2NhbXBhaWduc1wiXSxcbiAgICBkZWxldGVDYW1wYWlnbjogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2NhbXBhaWducy97Y2FtcGFpZ25fbnVtYmVyfVwiXSxcbiAgICBnZXRDYW1wYWlnblN1bW1hcnk6IFtcIkdFVCAvb3Jncy97b3JnfS9jYW1wYWlnbnMve2NhbXBhaWduX251bWJlcn1cIl0sXG4gICAgbGlzdE9yZ0NhbXBhaWduczogW1wiR0VUIC9vcmdzL3tvcmd9L2NhbXBhaWduc1wiXSxcbiAgICB1cGRhdGVDYW1wYWlnbjogW1wiUEFUQ0ggL29yZ3Mve29yZ30vY2FtcGFpZ25zL3tjYW1wYWlnbl9udW1iZXJ9XCJdLFxuICB9LFxuICBjaGVja3M6IHtcbiAgICBjcmVhdGU6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXJ1bnNcIl0sXG4gICAgY3JlYXRlU3VpdGU6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXN1aXRlc1wiXSxcbiAgICBnZXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stcnVucy97Y2hlY2tfcnVuX2lkfVwiXSxcbiAgICBnZXRTdWl0ZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1zdWl0ZXMve2NoZWNrX3N1aXRlX2lkfVwiXSxcbiAgICBsaXN0QW5ub3RhdGlvbnM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1ydW5zL3tjaGVja19ydW5faWR9L2Fubm90YXRpb25zXCIsXG4gICAgXSxcbiAgICBsaXN0Rm9yUmVmOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vY2hlY2stcnVuc1wiXSxcbiAgICBsaXN0Rm9yU3VpdGU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1zdWl0ZXMve2NoZWNrX3N1aXRlX2lkfS9jaGVjay1ydW5zXCIsXG4gICAgXSxcbiAgICBsaXN0U3VpdGVzRm9yUmVmOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vY2hlY2stc3VpdGVzXCJdLFxuICAgIHJlcmVxdWVzdFJ1bjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1ydW5zL3tjaGVja19ydW5faWR9L3JlcmVxdWVzdFwiLFxuICAgIF0sXG4gICAgcmVyZXF1ZXN0U3VpdGU6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stc3VpdGVzL3tjaGVja19zdWl0ZV9pZH0vcmVyZXF1ZXN0XCIsXG4gICAgXSxcbiAgICBzZXRTdWl0ZXNQcmVmZXJlbmNlczogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stc3VpdGVzL3ByZWZlcmVuY2VzXCIsXG4gICAgXSxcbiAgICB1cGRhdGU6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1ydW5zL3tjaGVja19ydW5faWR9XCJdLFxuICB9LFxuICBjb2RlU2Nhbm5pbmc6IHtcbiAgICBjb21taXRBdXRvZml4OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9L2F1dG9maXgvY29tbWl0c1wiLFxuICAgIF0sXG4gICAgY3JlYXRlQXV0b2ZpeDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfS9hdXRvZml4XCIsXG4gICAgXSxcbiAgICBjcmVhdGVWYXJpYW50QW5hbHlzaXM6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9jb2RlcWwvdmFyaWFudC1hbmFseXNlc1wiLFxuICAgIF0sXG4gICAgZGVsZXRlQW5hbHlzaXM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FuYWx5c2VzL3thbmFseXNpc19pZH17P2NvbmZpcm1fZGVsZXRlfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlQ29kZXFsRGF0YWJhc2U6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2NvZGVxbC9kYXRhYmFzZXMve2xhbmd1YWdlfVwiLFxuICAgIF0sXG4gICAgZ2V0QWxlcnQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWRQYXJhbWV0ZXJzOiB7IGFsZXJ0X2lkOiBcImFsZXJ0X251bWJlclwiIH0gfSxcbiAgICBdLFxuICAgIGdldEFuYWx5c2lzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbmFseXNlcy97YW5hbHlzaXNfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRBdXRvZml4OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn0vYXV0b2ZpeFwiLFxuICAgIF0sXG4gICAgZ2V0Q29kZXFsRGF0YWJhc2U6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2NvZGVxbC9kYXRhYmFzZXMve2xhbmd1YWdlfVwiLFxuICAgIF0sXG4gICAgZ2V0RGVmYXVsdFNldHVwOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvZGVmYXVsdC1zZXR1cFwiXSxcbiAgICBnZXRTYXJpZjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL3Nhcmlmcy97c2FyaWZfaWR9XCJdLFxuICAgIGdldFZhcmlhbnRBbmFseXNpczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvY29kZXFsL3ZhcmlhbnQtYW5hbHlzZXMve2NvZGVxbF92YXJpYW50X2FuYWx5c2lzX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0VmFyaWFudEFuYWx5c2lzUmVwb1Rhc2s6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2NvZGVxbC92YXJpYW50LWFuYWx5c2VzL3tjb2RlcWxfdmFyaWFudF9hbmFseXNpc19pZH0vcmVwb3Mve3JlcG9fb3duZXJ9L3tyZXBvX25hbWV9XCIsXG4gICAgXSxcbiAgICBsaXN0QWxlcnRJbnN0YW5jZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfS9pbnN0YW5jZXNcIixcbiAgICBdLFxuICAgIGxpc3RBbGVydHNGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9jb2RlLXNjYW5uaW5nL2FsZXJ0c1wiXSxcbiAgICBsaXN0QWxlcnRzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0c1wiXSxcbiAgICBsaXN0QWxlcnRzSW5zdGFuY2VzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn0vaW5zdGFuY2VzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wiY29kZVNjYW5uaW5nXCIsIFwibGlzdEFsZXJ0SW5zdGFuY2VzXCJdIH0sXG4gICAgXSxcbiAgICBsaXN0Q29kZXFsRGF0YWJhc2VzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9jb2RlcWwvZGF0YWJhc2VzXCIsXG4gICAgXSxcbiAgICBsaXN0UmVjZW50QW5hbHlzZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbmFseXNlc1wiXSxcbiAgICB1cGRhdGVBbGVydDogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn1cIixcbiAgICBdLFxuICAgIHVwZGF0ZURlZmF1bHRTZXR1cDogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9kZWZhdWx0LXNldHVwXCIsXG4gICAgXSxcbiAgICB1cGxvYWRTYXJpZjogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9zYXJpZnNcIl0sXG4gIH0sXG4gIGNvZGVTZWN1cml0eToge1xuICAgIGF0dGFjaENvbmZpZ3VyYXRpb246IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfS9hdHRhY2hcIixcbiAgICBdLFxuICAgIGF0dGFjaEVudGVycHJpc2VDb25maWd1cmF0aW9uOiBbXG4gICAgICBcIlBPU1QgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfS9hdHRhY2hcIixcbiAgICBdLFxuICAgIGNyZWF0ZUNvbmZpZ3VyYXRpb246IFtcIlBPU1QgL29yZ3Mve29yZ30vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9uc1wiXSxcbiAgICBjcmVhdGVDb25maWd1cmF0aW9uRm9yRW50ZXJwcmlzZTogW1xuICAgICAgXCJQT1NUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9uc1wiLFxuICAgIF0sXG4gICAgZGVsZXRlQ29uZmlndXJhdGlvbjogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUNvbmZpZ3VyYXRpb25Gb3JFbnRlcnByaXNlOiBbXG4gICAgICBcIkRFTEVURSAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZXRhY2hDb25maWd1cmF0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL2RldGFjaFwiLFxuICAgIF0sXG4gICAgZ2V0Q29uZmlndXJhdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGdldENvbmZpZ3VyYXRpb25Gb3JSZXBvc2l0b3J5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zZWN1cml0eS1jb25maWd1cmF0aW9uXCIsXG4gICAgXSxcbiAgICBnZXRDb25maWd1cmF0aW9uc0ZvckVudGVycHJpc2U6IFtcbiAgICAgIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9uc1wiLFxuICAgIF0sXG4gICAgZ2V0Q29uZmlndXJhdGlvbnNGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zXCJdLFxuICAgIGdldERlZmF1bHRDb25maWd1cmF0aW9uczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy9kZWZhdWx0c1wiLFxuICAgIF0sXG4gICAgZ2V0RGVmYXVsdENvbmZpZ3VyYXRpb25zRm9yRW50ZXJwcmlzZTogW1xuICAgICAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL2RlZmF1bHRzXCIsXG4gICAgXSxcbiAgICBnZXRSZXBvc2l0b3JpZXNGb3JDb25maWd1cmF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGdldFJlcG9zaXRvcmllc0ZvckVudGVycHJpc2VDb25maWd1cmF0aW9uOiBbXG4gICAgICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgZ2V0U2luZ2xlQ29uZmlndXJhdGlvbkZvckVudGVycHJpc2U6IFtcbiAgICAgIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIHNldENvbmZpZ3VyYXRpb25Bc0RlZmF1bHQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9L2RlZmF1bHRzXCIsXG4gICAgXSxcbiAgICBzZXRDb25maWd1cmF0aW9uQXNEZWZhdWx0Rm9yRW50ZXJwcmlzZTogW1xuICAgICAgXCJQVVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfS9kZWZhdWx0c1wiLFxuICAgIF0sXG4gICAgdXBkYXRlQ29uZmlndXJhdGlvbjogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlRW50ZXJwcmlzZUNvbmZpZ3VyYXRpb246IFtcbiAgICAgIFwiUEFUQ0ggL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfVwiLFxuICAgIF0sXG4gIH0sXG4gIGNvZGVzT2ZDb25kdWN0OiB7XG4gICAgZ2V0QWxsQ29kZXNPZkNvbmR1Y3Q6IFtcIkdFVCAvY29kZXNfb2ZfY29uZHVjdFwiXSxcbiAgICBnZXRDb25kdWN0Q29kZTogW1wiR0VUIC9jb2Rlc19vZl9jb25kdWN0L3trZXl9XCJdLFxuICB9LFxuICBjb2Rlc3BhY2VzOiB7XG4gICAgYWRkUmVwb3NpdG9yeUZvclNlY3JldEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBVVCAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBhZGRTZWxlY3RlZFJlcG9Ub09yZ1NlY3JldDogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgY2hlY2tQZXJtaXNzaW9uc0ZvckRldmNvbnRhaW5lcjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvcGVybWlzc2lvbnNfY2hlY2tcIixcbiAgICBdLFxuICAgIGNvZGVzcGFjZU1hY2hpbmVzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfS9tYWNoaW5lc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvY29kZXNwYWNlc1wiXSxcbiAgICBjcmVhdGVPclVwZGF0ZU9yZ1NlY3JldDogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGNyZWF0ZU9yVXBkYXRlUmVwb1NlY3JldDogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBjcmVhdGVPclVwZGF0ZVNlY3JldEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBVVCAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgY3JlYXRlV2l0aFByRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb2Rlc3BhY2VzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVXaXRoUmVwb0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXNcIixcbiAgICBdLFxuICAgIGRlbGV0ZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJERUxFVEUgL3VzZXIvY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9XCJdLFxuICAgIGRlbGV0ZUZyb21Pcmdhbml6YXRpb246IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L21lbWJlcnMve3VzZXJuYW1lfS9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX1cIixcbiAgICBdLFxuICAgIGRlbGV0ZU9yZ1NlY3JldDogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJdLFxuICAgIGRlbGV0ZVJlcG9TZWNyZXQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlU2VjcmV0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBleHBvcnRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQT1NUIC91c2VyL2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfS9leHBvcnRzXCIsXG4gICAgXSxcbiAgICBnZXRDb2Rlc3BhY2VzRm9yVXNlckluT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9tZW1iZXJzL3t1c2VybmFtZX0vY29kZXNwYWNlc1wiLFxuICAgIF0sXG4gICAgZ2V0RXhwb3J0RGV0YWlsc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX0vZXhwb3J0cy97ZXhwb3J0X2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX1cIl0sXG4gICAgZ2V0T3JnUHVibGljS2V5OiBbXCJHRVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3B1YmxpYy1rZXlcIl0sXG4gICAgZ2V0T3JnU2VjcmV0OiBbXCJHRVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZ2V0UHVibGljS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0cy9wdWJsaWMta2V5XCIsXG4gICAgXSxcbiAgICBnZXRSZXBvUHVibGljS2V5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9zZWNyZXRzL3B1YmxpYy1rZXlcIixcbiAgICBdLFxuICAgIGdldFJlcG9TZWNyZXQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZ2V0U2VjcmV0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBsaXN0RGV2Y29udGFpbmVyc0luUmVwb3NpdG9yeUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9kZXZjb250YWluZXJzXCIsXG4gICAgXSxcbiAgICBsaXN0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9jb2Rlc3BhY2VzXCJdLFxuICAgIGxpc3RJbk9yZ2FuaXphdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vY29kZXNwYWNlc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWRQYXJhbWV0ZXJzOiB7IG9yZ19pZDogXCJvcmdcIiB9IH0sXG4gICAgXSxcbiAgICBsaXN0SW5SZXBvc2l0b3J5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzXCIsXG4gICAgXSxcbiAgICBsaXN0T3JnU2VjcmV0czogW1wiR0VUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0c1wiXSxcbiAgICBsaXN0UmVwb1NlY3JldHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9zZWNyZXRzXCJdLFxuICAgIGxpc3RSZXBvc2l0b3JpZXNGb3JTZWNyZXRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBsaXN0U2VjcmV0c0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzXCJdLFxuICAgIGxpc3RTZWxlY3RlZFJlcG9zRm9yT3JnU2VjcmV0OiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIHByZUZsaWdodFdpdGhSZXBvRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL25ld1wiLFxuICAgIF0sXG4gICAgcHVibGlzaEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBPU1QgL3VzZXIvY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9L3B1Ymxpc2hcIixcbiAgICBdLFxuICAgIHJlbW92ZVJlcG9zaXRvcnlGb3JTZWNyZXRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlU2VsZWN0ZWRSZXBvRnJvbU9yZ1NlY3JldDogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgcmVwb01hY2hpbmVzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL21hY2hpbmVzXCIsXG4gICAgXSxcbiAgICBzZXRSZXBvc2l0b3JpZXNGb3JTZWNyZXRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQVVQgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBzZXRTZWxlY3RlZFJlcG9zRm9yT3JnU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIHN0YXJ0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9L3N0YXJ0XCJdLFxuICAgIHN0b3BGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX0vc3RvcFwiXSxcbiAgICBzdG9wSW5Pcmdhbml6YXRpb246IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9tZW1iZXJzL3t1c2VybmFtZX0vY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9L3N0b3BcIixcbiAgICBdLFxuICAgIHVwZGF0ZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQQVRDSCAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX1cIl0sXG4gIH0sXG4gIGNvcGlsb3Q6IHtcbiAgICBhZGRDb3BpbG90U2VhdHNGb3JUZWFtczogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2NvcGlsb3QvYmlsbGluZy9zZWxlY3RlZF90ZWFtc1wiLFxuICAgIF0sXG4gICAgYWRkQ29waWxvdFNlYXRzRm9yVXNlcnM6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9jb3BpbG90L2JpbGxpbmcvc2VsZWN0ZWRfdXNlcnNcIixcbiAgICBdLFxuICAgIGNhbmNlbENvcGlsb3RTZWF0QXNzaWdubWVudEZvclRlYW1zOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9jb3BpbG90L2JpbGxpbmcvc2VsZWN0ZWRfdGVhbXNcIixcbiAgICBdLFxuICAgIGNhbmNlbENvcGlsb3RTZWF0QXNzaWdubWVudEZvclVzZXJzOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9jb3BpbG90L2JpbGxpbmcvc2VsZWN0ZWRfdXNlcnNcIixcbiAgICBdLFxuICAgIGNvcGlsb3RNZXRyaWNzRm9yT3JnYW5pemF0aW9uOiBbXCJHRVQgL29yZ3Mve29yZ30vY29waWxvdC9tZXRyaWNzXCJdLFxuICAgIGNvcGlsb3RNZXRyaWNzRm9yVGVhbTogW1wiR0VUIC9vcmdzL3tvcmd9L3RlYW0ve3RlYW1fc2x1Z30vY29waWxvdC9tZXRyaWNzXCJdLFxuICAgIGdldENvcGlsb3RPcmdhbml6YXRpb25EZXRhaWxzOiBbXCJHRVQgL29yZ3Mve29yZ30vY29waWxvdC9iaWxsaW5nXCJdLFxuICAgIGdldENvcGlsb3RTZWF0RGV0YWlsc0ZvclVzZXI6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L21lbWJlcnMve3VzZXJuYW1lfS9jb3BpbG90XCIsXG4gICAgXSxcbiAgICBsaXN0Q29waWxvdFNlYXRzOiBbXCJHRVQgL29yZ3Mve29yZ30vY29waWxvdC9iaWxsaW5nL3NlYXRzXCJdLFxuICB9LFxuICBjcmVkZW50aWFsczogeyByZXZva2U6IFtcIlBPU1QgL2NyZWRlbnRpYWxzL3Jldm9rZVwiXSB9LFxuICBkZXBlbmRhYm90OiB7XG4gICAgYWRkU2VsZWN0ZWRSZXBvVG9PcmdTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIGNyZWF0ZU9yVXBkYXRlT3JnU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgY3JlYXRlT3JVcGRhdGVSZXBvU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGRlbGV0ZU9yZ1NlY3JldDogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJdLFxuICAgIGRlbGV0ZVJlcG9TZWNyZXQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZ2V0QWxlcnQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9hbGVydHMve2FsZXJ0X251bWJlcn1cIl0sXG4gICAgZ2V0T3JnUHVibGljS2V5OiBbXCJHRVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3B1YmxpYy1rZXlcIl0sXG4gICAgZ2V0T3JnU2VjcmV0OiBbXCJHRVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZ2V0UmVwb1B1YmxpY0tleTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGFib3Qvc2VjcmV0cy9wdWJsaWMta2V5XCIsXG4gICAgXSxcbiAgICBnZXRSZXBvU2VjcmV0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGxpc3RBbGVydHNGb3JFbnRlcnByaXNlOiBbXG4gICAgICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2RlcGVuZGFib3QvYWxlcnRzXCIsXG4gICAgXSxcbiAgICBsaXN0QWxlcnRzRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9hbGVydHNcIl0sXG4gICAgbGlzdEFsZXJ0c0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9hbGVydHNcIl0sXG4gICAgbGlzdE9yZ1NlY3JldHM6IFtcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHNcIl0sXG4gICAgbGlzdFJlcG9TZWNyZXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGFib3Qvc2VjcmV0c1wiXSxcbiAgICBsaXN0U2VsZWN0ZWRSZXBvc0Zvck9yZ1NlY3JldDogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICByZW1vdmVTZWxlY3RlZFJlcG9Gcm9tT3JnU2VjcmV0OiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICByZXBvc2l0b3J5QWNjZXNzRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3JnYW5pemF0aW9ucy97b3JnfS9kZXBlbmRhYm90L3JlcG9zaXRvcnktYWNjZXNzXCIsXG4gICAgXSxcbiAgICBzZXRSZXBvc2l0b3J5QWNjZXNzRGVmYXVsdExldmVsOiBbXG4gICAgICBcIlBVVCAvb3JnYW5pemF0aW9ucy97b3JnfS9kZXBlbmRhYm90L3JlcG9zaXRvcnktYWNjZXNzL2RlZmF1bHQtbGV2ZWxcIixcbiAgICBdLFxuICAgIHNldFNlbGVjdGVkUmVwb3NGb3JPcmdTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgdXBkYXRlQWxlcnQ6IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGFib3QvYWxlcnRzL3thbGVydF9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVSZXBvc2l0b3J5QWNjZXNzRm9yT3JnOiBbXG4gICAgICBcIlBBVENIIC9vcmdhbml6YXRpb25zL3tvcmd9L2RlcGVuZGFib3QvcmVwb3NpdG9yeS1hY2Nlc3NcIixcbiAgICBdLFxuICB9LFxuICBkZXBlbmRlbmN5R3JhcGg6IHtcbiAgICBjcmVhdGVSZXBvc2l0b3J5U25hcHNob3Q6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kZW5jeS1ncmFwaC9zbmFwc2hvdHNcIixcbiAgICBdLFxuICAgIGRpZmZSYW5nZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGVuY3ktZ3JhcGgvY29tcGFyZS97YmFzZWhlYWR9XCIsXG4gICAgXSxcbiAgICBleHBvcnRTYm9tOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGVuY3ktZ3JhcGgvc2JvbVwiXSxcbiAgfSxcbiAgZW1vamlzOiB7IGdldDogW1wiR0VUIC9lbW9qaXNcIl0gfSxcbiAgZW50ZXJwcmlzZVRlYW1NZW1iZXJzaGlwczoge1xuICAgIGFkZDogW1xuICAgICAgXCJQVVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9tZW1iZXJzaGlwcy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICBidWxrQWRkOiBbXG4gICAgICBcIlBPU1QgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9tZW1iZXJzaGlwcy9hZGRcIixcbiAgICBdLFxuICAgIGJ1bGtSZW1vdmU6IFtcbiAgICAgIFwiUE9TVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L21lbWJlcnNoaXBzL3JlbW92ZVwiLFxuICAgIF0sXG4gICAgZ2V0OiBbXG4gICAgICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L21lbWJlcnNoaXBzL3t1c2VybmFtZX1cIixcbiAgICBdLFxuICAgIGxpc3Q6IFtcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L21lbWJlcnNoaXBzXCJdLFxuICAgIHJlbW92ZTogW1xuICAgICAgXCJERUxFVEUgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9tZW1iZXJzaGlwcy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgfSxcbiAgZW50ZXJwcmlzZVRlYW1Pcmdhbml6YXRpb25zOiB7XG4gICAgYWRkOiBbXG4gICAgICBcIlBVVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L29yZ2FuaXphdGlvbnMve29yZ31cIixcbiAgICBdLFxuICAgIGJ1bGtBZGQ6IFtcbiAgICAgIFwiUE9TVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L29yZ2FuaXphdGlvbnMvYWRkXCIsXG4gICAgXSxcbiAgICBidWxrUmVtb3ZlOiBbXG4gICAgICBcIlBPU1QgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9vcmdhbml6YXRpb25zL3JlbW92ZVwiLFxuICAgIF0sXG4gICAgZGVsZXRlOiBbXG4gICAgICBcIkRFTEVURSAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L29yZ2FuaXphdGlvbnMve29yZ31cIixcbiAgICBdLFxuICAgIGdldEFzc2lnbm1lbnQ6IFtcbiAgICAgIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vb3JnYW5pemF0aW9ucy97b3JnfVwiLFxuICAgIF0sXG4gICAgZ2V0QXNzaWdubWVudHM6IFtcbiAgICAgIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vb3JnYW5pemF0aW9uc1wiLFxuICAgIF0sXG4gIH0sXG4gIGVudGVycHJpc2VUZWFtczoge1xuICAgIGNyZWF0ZTogW1wiUE9TVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zXCJdLFxuICAgIGRlbGV0ZTogW1wiREVMRVRFIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve3RlYW1fc2x1Z31cIl0sXG4gICAgZ2V0OiBbXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97dGVhbV9zbHVnfVwiXSxcbiAgICBsaXN0OiBbXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtc1wiXSxcbiAgICB1cGRhdGU6IFtcIlBBVENIIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve3RlYW1fc2x1Z31cIl0sXG4gIH0sXG4gIGdpc3RzOiB7XG4gICAgY2hlY2tJc1N0YXJyZWQ6IFtcIkdFVCAvZ2lzdHMve2dpc3RfaWR9L3N0YXJcIl0sXG4gICAgY3JlYXRlOiBbXCJQT1NUIC9naXN0c1wiXSxcbiAgICBjcmVhdGVDb21tZW50OiBbXCJQT1NUIC9naXN0cy97Z2lzdF9pZH0vY29tbWVudHNcIl0sXG4gICAgZGVsZXRlOiBbXCJERUxFVEUgL2dpc3RzL3tnaXN0X2lkfVwiXSxcbiAgICBkZWxldGVDb21tZW50OiBbXCJERUxFVEUgL2dpc3RzL3tnaXN0X2lkfS9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gICAgZm9yazogW1wiUE9TVCAvZ2lzdHMve2dpc3RfaWR9L2ZvcmtzXCJdLFxuICAgIGdldDogW1wiR0VUIC9naXN0cy97Z2lzdF9pZH1cIl0sXG4gICAgZ2V0Q29tbWVudDogW1wiR0VUIC9naXN0cy97Z2lzdF9pZH0vY29tbWVudHMve2NvbW1lbnRfaWR9XCJdLFxuICAgIGdldFJldmlzaW9uOiBbXCJHRVQgL2dpc3RzL3tnaXN0X2lkfS97c2hhfVwiXSxcbiAgICBsaXN0OiBbXCJHRVQgL2dpc3RzXCJdLFxuICAgIGxpc3RDb21tZW50czogW1wiR0VUIC9naXN0cy97Z2lzdF9pZH0vY29tbWVudHNcIl0sXG4gICAgbGlzdENvbW1pdHM6IFtcIkdFVCAvZ2lzdHMve2dpc3RfaWR9L2NvbW1pdHNcIl0sXG4gICAgbGlzdEZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9naXN0c1wiXSxcbiAgICBsaXN0Rm9ya3M6IFtcIkdFVCAvZ2lzdHMve2dpc3RfaWR9L2ZvcmtzXCJdLFxuICAgIGxpc3RQdWJsaWM6IFtcIkdFVCAvZ2lzdHMvcHVibGljXCJdLFxuICAgIGxpc3RTdGFycmVkOiBbXCJHRVQgL2dpc3RzL3N0YXJyZWRcIl0sXG4gICAgc3RhcjogW1wiUFVUIC9naXN0cy97Z2lzdF9pZH0vc3RhclwiXSxcbiAgICB1bnN0YXI6IFtcIkRFTEVURSAvZ2lzdHMve2dpc3RfaWR9L3N0YXJcIl0sXG4gICAgdXBkYXRlOiBbXCJQQVRDSCAvZ2lzdHMve2dpc3RfaWR9XCJdLFxuICAgIHVwZGF0ZUNvbW1lbnQ6IFtcIlBBVENIIC9naXN0cy97Z2lzdF9pZH0vY29tbWVudHMve2NvbW1lbnRfaWR9XCJdLFxuICB9LFxuICBnaXQ6IHtcbiAgICBjcmVhdGVCbG9iOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvYmxvYnNcIl0sXG4gICAgY3JlYXRlQ29tbWl0OiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvY29tbWl0c1wiXSxcbiAgICBjcmVhdGVSZWY6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC9yZWZzXCJdLFxuICAgIGNyZWF0ZVRhZzogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L3RhZ3NcIl0sXG4gICAgY3JlYXRlVHJlZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L3RyZWVzXCJdLFxuICAgIGRlbGV0ZVJlZjogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvcmVmcy97cmVmfVwiXSxcbiAgICBnZXRCbG9iOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC9ibG9icy97ZmlsZV9zaGF9XCJdLFxuICAgIGdldENvbW1pdDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvY29tbWl0cy97Y29tbWl0X3NoYX1cIl0sXG4gICAgZ2V0UmVmOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC9yZWYve3JlZn1cIl0sXG4gICAgZ2V0VGFnOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC90YWdzL3t0YWdfc2hhfVwiXSxcbiAgICBnZXRUcmVlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC90cmVlcy97dHJlZV9zaGF9XCJdLFxuICAgIGxpc3RNYXRjaGluZ1JlZnM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L21hdGNoaW5nLXJlZnMve3JlZn1cIl0sXG4gICAgdXBkYXRlUmVmOiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L3JlZnMve3JlZn1cIl0sXG4gIH0sXG4gIGdpdGlnbm9yZToge1xuICAgIGdldEFsbFRlbXBsYXRlczogW1wiR0VUIC9naXRpZ25vcmUvdGVtcGxhdGVzXCJdLFxuICAgIGdldFRlbXBsYXRlOiBbXCJHRVQgL2dpdGlnbm9yZS90ZW1wbGF0ZXMve25hbWV9XCJdLFxuICB9LFxuICBob3N0ZWRDb21wdXRlOiB7XG4gICAgY3JlYXRlTmV0d29ya0NvbmZpZ3VyYXRpb25Gb3JPcmc6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9uZXR3b3JrLWNvbmZpZ3VyYXRpb25zXCIsXG4gICAgXSxcbiAgICBkZWxldGVOZXR3b3JrQ29uZmlndXJhdGlvbkZyb21Pcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3NldHRpbmdzL25ldHdvcmstY29uZmlndXJhdGlvbnMve25ldHdvcmtfY29uZmlndXJhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGdldE5ldHdvcmtDb25maWd1cmF0aW9uRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9uZXR3b3JrLWNvbmZpZ3VyYXRpb25zL3tuZXR3b3JrX2NvbmZpZ3VyYXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBnZXROZXR3b3JrU2V0dGluZ3NGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL25ldHdvcmstc2V0dGluZ3Mve25ldHdvcmtfc2V0dGluZ3NfaWR9XCIsXG4gICAgXSxcbiAgICBsaXN0TmV0d29ya0NvbmZpZ3VyYXRpb25zRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9uZXR3b3JrLWNvbmZpZ3VyYXRpb25zXCIsXG4gICAgXSxcbiAgICB1cGRhdGVOZXR3b3JrQ29uZmlndXJhdGlvbkZvck9yZzogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS9zZXR0aW5ncy9uZXR3b3JrLWNvbmZpZ3VyYXRpb25zL3tuZXR3b3JrX2NvbmZpZ3VyYXRpb25faWR9XCIsXG4gICAgXSxcbiAgfSxcbiAgaW50ZXJhY3Rpb25zOiB7XG4gICAgZ2V0UmVzdHJpY3Rpb25zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9pbnRlcmFjdGlvbi1saW1pdHNcIl0sXG4gICAgZ2V0UmVzdHJpY3Rpb25zRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vaW50ZXJhY3Rpb24tbGltaXRzXCJdLFxuICAgIGdldFJlc3RyaWN0aW9uc0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaW50ZXJhY3Rpb24tbGltaXRzXCJdLFxuICAgIGdldFJlc3RyaWN0aW9uc0ZvcllvdXJQdWJsaWNSZXBvczogW1xuICAgICAgXCJHRVQgL3VzZXIvaW50ZXJhY3Rpb24tbGltaXRzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wiaW50ZXJhY3Rpb25zXCIsIFwiZ2V0UmVzdHJpY3Rpb25zRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIHJlbW92ZVJlc3RyaWN0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJERUxFVEUgL3VzZXIvaW50ZXJhY3Rpb24tbGltaXRzXCJdLFxuICAgIHJlbW92ZVJlc3RyaWN0aW9uc0Zvck9yZzogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2ludGVyYWN0aW9uLWxpbWl0c1wiXSxcbiAgICByZW1vdmVSZXN0cmljdGlvbnNGb3JSZXBvOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaW50ZXJhY3Rpb24tbGltaXRzXCIsXG4gICAgXSxcbiAgICByZW1vdmVSZXN0cmljdGlvbnNGb3JZb3VyUHVibGljUmVwb3M6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL2ludGVyYWN0aW9uLWxpbWl0c1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcImludGVyYWN0aW9uc1wiLCBcInJlbW92ZVJlc3RyaWN0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBzZXRSZXN0cmljdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUFVUIC91c2VyL2ludGVyYWN0aW9uLWxpbWl0c1wiXSxcbiAgICBzZXRSZXN0cmljdGlvbnNGb3JPcmc6IFtcIlBVVCAvb3Jncy97b3JnfS9pbnRlcmFjdGlvbi1saW1pdHNcIl0sXG4gICAgc2V0UmVzdHJpY3Rpb25zRm9yUmVwbzogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbnRlcmFjdGlvbi1saW1pdHNcIl0sXG4gICAgc2V0UmVzdHJpY3Rpb25zRm9yWW91clB1YmxpY1JlcG9zOiBbXG4gICAgICBcIlBVVCAvdXNlci9pbnRlcmFjdGlvbi1saW1pdHNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJpbnRlcmFjdGlvbnNcIiwgXCJzZXRSZXN0cmljdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gIH0sXG4gIGlzc3Vlczoge1xuICAgIGFkZEFzc2lnbmVlczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vYXNzaWduZWVzXCIsXG4gICAgXSxcbiAgICBhZGRCbG9ja2VkQnlEZXBlbmRlbmN5OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9kZXBlbmRlbmNpZXMvYmxvY2tlZF9ieVwiLFxuICAgIF0sXG4gICAgYWRkTGFiZWxzOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vbGFiZWxzXCJdLFxuICAgIGFkZFN1Yklzc3VlOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9zdWJfaXNzdWVzXCIsXG4gICAgXSxcbiAgICBjaGVja1VzZXJDYW5CZUFzc2lnbmVkOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Fzc2lnbmVlcy97YXNzaWduZWV9XCJdLFxuICAgIGNoZWNrVXNlckNhbkJlQXNzaWduZWRUb0lzc3VlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2Fzc2lnbmVlcy97YXNzaWduZWV9XCIsXG4gICAgXSxcbiAgICBjcmVhdGU6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlc1wiXSxcbiAgICBjcmVhdGVDb21tZW50OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9jb21tZW50c1wiLFxuICAgIF0sXG4gICAgY3JlYXRlTGFiZWw6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2xhYmVsc1wiXSxcbiAgICBjcmVhdGVNaWxlc3RvbmU6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L21pbGVzdG9uZXNcIl0sXG4gICAgZGVsZXRlQ29tbWVudDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50cy97Y29tbWVudF9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUxhYmVsOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2xhYmVscy97bmFtZX1cIl0sXG4gICAgZGVsZXRlTWlsZXN0b25lOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vbWlsZXN0b25lcy97bWlsZXN0b25lX251bWJlcn1cIixcbiAgICBdLFxuICAgIGdldDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn1cIl0sXG4gICAgZ2V0Q29tbWVudDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvY29tbWVudHMve2NvbW1lbnRfaWR9XCJdLFxuICAgIGdldEV2ZW50OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9ldmVudHMve2V2ZW50X2lkfVwiXSxcbiAgICBnZXRMYWJlbDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9sYWJlbHMve25hbWV9XCJdLFxuICAgIGdldE1pbGVzdG9uZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzL3ttaWxlc3RvbmVfbnVtYmVyfVwiXSxcbiAgICBnZXRQYXJlbnQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3BhcmVudFwiXSxcbiAgICBsaXN0OiBbXCJHRVQgL2lzc3Vlc1wiXSxcbiAgICBsaXN0QXNzaWduZWVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Fzc2lnbmVlc1wiXSxcbiAgICBsaXN0Q29tbWVudHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2NvbW1lbnRzXCJdLFxuICAgIGxpc3RDb21tZW50c0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzXCJdLFxuICAgIGxpc3REZXBlbmRlbmNpZXNCbG9ja2VkQnk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vZGVwZW5kZW5jaWVzL2Jsb2NrZWRfYnlcIixcbiAgICBdLFxuICAgIGxpc3REZXBlbmRlbmNpZXNCbG9ja2luZzogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9kZXBlbmRlbmNpZXMvYmxvY2tpbmdcIixcbiAgICBdLFxuICAgIGxpc3RFdmVudHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2V2ZW50c1wiXSxcbiAgICBsaXN0RXZlbnRzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvZXZlbnRzXCJdLFxuICAgIGxpc3RFdmVudHNGb3JUaW1lbGluZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS90aW1lbGluZVwiLFxuICAgIF0sXG4gICAgbGlzdEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvaXNzdWVzXCJdLFxuICAgIGxpc3RGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9pc3N1ZXNcIl0sXG4gICAgbGlzdEZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzXCJdLFxuICAgIGxpc3RMYWJlbHNGb3JNaWxlc3RvbmU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzL3ttaWxlc3RvbmVfbnVtYmVyfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIGxpc3RMYWJlbHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2xhYmVsc1wiXSxcbiAgICBsaXN0TGFiZWxzT25Jc3N1ZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIGxpc3RNaWxlc3RvbmVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L21pbGVzdG9uZXNcIl0sXG4gICAgbGlzdFN1Yklzc3VlczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9zdWJfaXNzdWVzXCIsXG4gICAgXSxcbiAgICBsb2NrOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sb2NrXCJdLFxuICAgIHJlbW92ZUFsbExhYmVsczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIHJlbW92ZUFzc2lnbmVlczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9hc3NpZ25lZXNcIixcbiAgICBdLFxuICAgIHJlbW92ZURlcGVuZGVuY3lCbG9ja2VkQnk6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vZGVwZW5kZW5jaWVzL2Jsb2NrZWRfYnkve2lzc3VlX2lkfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlTGFiZWw6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vbGFiZWxzL3tuYW1lfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlU3ViSXNzdWU6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vc3ViX2lzc3VlXCIsXG4gICAgXSxcbiAgICByZXByaW9yaXRpemVTdWJJc3N1ZTogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3N1Yl9pc3N1ZXMvcHJpb3JpdHlcIixcbiAgICBdLFxuICAgIHNldExhYmVsczogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vbGFiZWxzXCJdLFxuICAgIHVubG9jazogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vbG9ja1wiXSxcbiAgICB1cGRhdGU6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn1cIl0sXG4gICAgdXBkYXRlQ29tbWVudDogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gICAgdXBkYXRlTGFiZWw6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9sYWJlbHMve25hbWV9XCJdLFxuICAgIHVwZGF0ZU1pbGVzdG9uZTogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vbWlsZXN0b25lcy97bWlsZXN0b25lX251bWJlcn1cIixcbiAgICBdLFxuICB9LFxuICBsaWNlbnNlczoge1xuICAgIGdldDogW1wiR0VUIC9saWNlbnNlcy97bGljZW5zZX1cIl0sXG4gICAgZ2V0QWxsQ29tbW9ubHlVc2VkOiBbXCJHRVQgL2xpY2Vuc2VzXCJdLFxuICAgIGdldEZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbGljZW5zZVwiXSxcbiAgfSxcbiAgbWFya2Rvd246IHtcbiAgICByZW5kZXI6IFtcIlBPU1QgL21hcmtkb3duXCJdLFxuICAgIHJlbmRlclJhdzogW1xuICAgICAgXCJQT1NUIC9tYXJrZG93bi9yYXdcIixcbiAgICAgIHsgaGVhZGVyczogeyBcImNvbnRlbnQtdHlwZVwiOiBcInRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIiB9IH0sXG4gICAgXSxcbiAgfSxcbiAgbWV0YToge1xuICAgIGdldDogW1wiR0VUIC9tZXRhXCJdLFxuICAgIGdldEFsbFZlcnNpb25zOiBbXCJHRVQgL3ZlcnNpb25zXCJdLFxuICAgIGdldE9jdG9jYXQ6IFtcIkdFVCAvb2N0b2NhdFwiXSxcbiAgICBnZXRaZW46IFtcIkdFVCAvemVuXCJdLFxuICAgIHJvb3Q6IFtcIkdFVCAvXCJdLFxuICB9LFxuICBtaWdyYXRpb25zOiB7XG4gICAgZGVsZXRlQXJjaGl2ZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L2FyY2hpdmVcIixcbiAgICBdLFxuICAgIGRlbGV0ZUFyY2hpdmVGb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vYXJjaGl2ZVwiLFxuICAgIF0sXG4gICAgZG93bmxvYWRBcmNoaXZlRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L2FyY2hpdmVcIixcbiAgICBdLFxuICAgIGdldEFyY2hpdmVGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9hcmNoaXZlXCIsXG4gICAgXSxcbiAgICBnZXRTdGF0dXNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH1cIl0sXG4gICAgZ2V0U3RhdHVzRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfVwiXSxcbiAgICBsaXN0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9taWdyYXRpb25zXCJdLFxuICAgIGxpc3RGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9taWdyYXRpb25zXCJdLFxuICAgIGxpc3RSZXBvc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgbGlzdFJlcG9zRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIl0sXG4gICAgbGlzdFJlcG9zRm9yVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJtaWdyYXRpb25zXCIsIFwibGlzdFJlcG9zRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIHN0YXJ0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvbWlncmF0aW9uc1wiXSxcbiAgICBzdGFydEZvck9yZzogW1wiUE9TVCAvb3Jncy97b3JnfS9taWdyYXRpb25zXCJdLFxuICAgIHVubG9ja1JlcG9Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9yZXBvcy97cmVwb19uYW1lfS9sb2NrXCIsXG4gICAgXSxcbiAgICB1bmxvY2tSZXBvRm9yT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L3JlcG9zL3tyZXBvX25hbWV9L2xvY2tcIixcbiAgICBdLFxuICB9LFxuICBvaWRjOiB7XG4gICAgZ2V0T2lkY0N1c3RvbVN1YlRlbXBsYXRlRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL29pZGMvY3VzdG9taXphdGlvbi9zdWJcIixcbiAgICBdLFxuICAgIHVwZGF0ZU9pZGNDdXN0b21TdWJUZW1wbGF0ZUZvck9yZzogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9vaWRjL2N1c3RvbWl6YXRpb24vc3ViXCIsXG4gICAgXSxcbiAgfSxcbiAgb3Jnczoge1xuICAgIGFkZFNlY3VyaXR5TWFuYWdlclRlYW06IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L3NlY3VyaXR5LW1hbmFnZXJzL3RlYW1zL3t0ZWFtX3NsdWd9XCIsXG4gICAgICB7fSxcbiAgICAgIHtcbiAgICAgICAgZGVwcmVjYXRlZDpcbiAgICAgICAgICBcIm9jdG9raXQucmVzdC5vcmdzLmFkZFNlY3VyaXR5TWFuYWdlclRlYW0oKSBpcyBkZXByZWNhdGVkLCBzZWUgaHR0cHM6Ly9kb2NzLmdpdGh1Yi5jb20vcmVzdC9vcmdzL3NlY3VyaXR5LW1hbmFnZXJzI2FkZC1hLXNlY3VyaXR5LW1hbmFnZXItdGVhbVwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGFzc2lnblRlYW1Ub09yZ1JvbGU6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlcy90ZWFtcy97dGVhbV9zbHVnfS97cm9sZV9pZH1cIixcbiAgICBdLFxuICAgIGFzc2lnblVzZXJUb09yZ1JvbGU6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlcy91c2Vycy97dXNlcm5hbWV9L3tyb2xlX2lkfVwiLFxuICAgIF0sXG4gICAgYmxvY2tVc2VyOiBbXCJQVVQgL29yZ3Mve29yZ30vYmxvY2tzL3t1c2VybmFtZX1cIl0sXG4gICAgY2FuY2VsSW52aXRhdGlvbjogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2ludml0YXRpb25zL3tpbnZpdGF0aW9uX2lkfVwiXSxcbiAgICBjaGVja0Jsb2NrZWRVc2VyOiBbXCJHRVQgL29yZ3Mve29yZ30vYmxvY2tzL3t1c2VybmFtZX1cIl0sXG4gICAgY2hlY2tNZW1iZXJzaGlwRm9yVXNlcjogW1wiR0VUIC9vcmdzL3tvcmd9L21lbWJlcnMve3VzZXJuYW1lfVwiXSxcbiAgICBjaGVja1B1YmxpY01lbWJlcnNoaXBGb3JVc2VyOiBbXCJHRVQgL29yZ3Mve29yZ30vcHVibGljX21lbWJlcnMve3VzZXJuYW1lfVwiXSxcbiAgICBjb252ZXJ0TWVtYmVyVG9PdXRzaWRlQ29sbGFib3JhdG9yOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9vdXRzaWRlX2NvbGxhYm9yYXRvcnMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgY3JlYXRlQXJ0aWZhY3RTdG9yYWdlUmVjb3JkOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vYXJ0aWZhY3RzL21ldGFkYXRhL3N0b3JhZ2UtcmVjb3JkXCIsXG4gICAgXSxcbiAgICBjcmVhdGVJbnZpdGF0aW9uOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2ludml0YXRpb25zXCJdLFxuICAgIGNyZWF0ZUlzc3VlVHlwZTogW1wiUE9TVCAvb3Jncy97b3JnfS9pc3N1ZS10eXBlc1wiXSxcbiAgICBjcmVhdGVXZWJob29rOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2hvb2tzXCJdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JPcmdzQ3JlYXRlT3JVcGRhdGVPcmdhbml6YXRpb25WYWx1ZXM6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ2FuaXphdGlvbnMve29yZ30vb3JnLXByb3BlcnRpZXMvdmFsdWVzXCIsXG4gICAgXSxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzRm9yT3Jnc0dldE9yZ2FuaXphdGlvblZhbHVlczogW1xuICAgICAgXCJHRVQgL29yZ2FuaXphdGlvbnMve29yZ30vb3JnLXByb3BlcnRpZXMvdmFsdWVzXCIsXG4gICAgXSxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzRm9yUmVwb3NDcmVhdGVPclVwZGF0ZU9yZ2FuaXphdGlvbkRlZmluaXRpb246IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L3Byb3BlcnRpZXMvc2NoZW1hL3tjdXN0b21fcHJvcGVydHlfbmFtZX1cIixcbiAgICBdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JSZXBvc0NyZWF0ZU9yVXBkYXRlT3JnYW5pemF0aW9uRGVmaW5pdGlvbnM6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ3Mve29yZ30vcHJvcGVydGllcy9zY2hlbWFcIixcbiAgICBdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JSZXBvc0NyZWF0ZU9yVXBkYXRlT3JnYW5pemF0aW9uVmFsdWVzOiBbXG4gICAgICBcIlBBVENIIC9vcmdzL3tvcmd9L3Byb3BlcnRpZXMvdmFsdWVzXCIsXG4gICAgXSxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzRm9yUmVwb3NEZWxldGVPcmdhbml6YXRpb25EZWZpbml0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9wcm9wZXJ0aWVzL3NjaGVtYS97Y3VzdG9tX3Byb3BlcnR5X25hbWV9XCIsXG4gICAgXSxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzRm9yUmVwb3NHZXRPcmdhbml6YXRpb25EZWZpbml0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9wcm9wZXJ0aWVzL3NjaGVtYS97Y3VzdG9tX3Byb3BlcnR5X25hbWV9XCIsXG4gICAgXSxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzRm9yUmVwb3NHZXRPcmdhbml6YXRpb25EZWZpbml0aW9uczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcHJvcGVydGllcy9zY2hlbWFcIixcbiAgICBdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JSZXBvc0dldE9yZ2FuaXphdGlvblZhbHVlczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcHJvcGVydGllcy92YWx1ZXNcIixcbiAgICBdLFxuICAgIGRlbGV0ZTogW1wiREVMRVRFIC9vcmdzL3tvcmd9XCJdLFxuICAgIGRlbGV0ZUF0dGVzdGF0aW9uc0J1bGs6IFtcIlBPU1QgL29yZ3Mve29yZ30vYXR0ZXN0YXRpb25zL2RlbGV0ZS1yZXF1ZXN0XCJdLFxuICAgIGRlbGV0ZUF0dGVzdGF0aW9uc0J5SWQ6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2F0dGVzdGF0aW9ucy97YXR0ZXN0YXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVBdHRlc3RhdGlvbnNCeVN1YmplY3REaWdlc3Q6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2F0dGVzdGF0aW9ucy9kaWdlc3Qve3N1YmplY3RfZGlnZXN0fVwiLFxuICAgIF0sXG4gICAgZGVsZXRlSXNzdWVUeXBlOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vaXNzdWUtdHlwZXMve2lzc3VlX3R5cGVfaWR9XCJdLFxuICAgIGRlbGV0ZVdlYmhvb2s6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9ob29rcy97aG9va19pZH1cIl0sXG4gICAgZGlzYWJsZVNlbGVjdGVkUmVwb3NpdG9yeUltbXV0YWJsZVJlbGVhc2VzT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9zZXR0aW5ncy9pbW11dGFibGUtcmVsZWFzZXMvcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgZW5hYmxlU2VsZWN0ZWRSZXBvc2l0b3J5SW1tdXRhYmxlUmVsZWFzZXNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2ltbXV0YWJsZS1yZWxlYXNlcy9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBnZXQ6IFtcIkdFVCAvb3Jncy97b3JnfVwiXSxcbiAgICBnZXRJbW11dGFibGVSZWxlYXNlc1NldHRpbmdzOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9pbW11dGFibGUtcmVsZWFzZXNcIixcbiAgICBdLFxuICAgIGdldEltbXV0YWJsZVJlbGVhc2VzU2V0dGluZ3NSZXBvc2l0b3JpZXM6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2ltbXV0YWJsZS1yZWxlYXNlcy9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGdldE1lbWJlcnNoaXBGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL21lbWJlcnNoaXBzL29yZ3Mve29yZ31cIl0sXG4gICAgZ2V0TWVtYmVyc2hpcEZvclVzZXI6IFtcIkdFVCAvb3Jncy97b3JnfS9tZW1iZXJzaGlwcy97dXNlcm5hbWV9XCJdLFxuICAgIGdldE9yZ1JvbGU6IFtcIkdFVCAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMve3JvbGVfaWR9XCJdLFxuICAgIGdldE9yZ1J1bGVzZXRIaXN0b3J5OiBbXCJHRVQgL29yZ3Mve29yZ30vcnVsZXNldHMve3J1bGVzZXRfaWR9L2hpc3RvcnlcIl0sXG4gICAgZ2V0T3JnUnVsZXNldFZlcnNpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3J1bGVzZXRzL3tydWxlc2V0X2lkfS9oaXN0b3J5L3t2ZXJzaW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0V2ViaG9vazogW1wiR0VUIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfVwiXSxcbiAgICBnZXRXZWJob29rQ29uZmlnRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9L2NvbmZpZ1wiXSxcbiAgICBnZXRXZWJob29rRGVsaXZlcnk6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfS9kZWxpdmVyaWVzL3tkZWxpdmVyeV9pZH1cIixcbiAgICBdLFxuICAgIGxpc3Q6IFtcIkdFVCAvb3JnYW5pemF0aW9uc1wiXSxcbiAgICBsaXN0QXBwSW5zdGFsbGF0aW9uczogW1wiR0VUIC9vcmdzL3tvcmd9L2luc3RhbGxhdGlvbnNcIl0sXG4gICAgbGlzdEFydGlmYWN0U3RvcmFnZVJlY29yZHM6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FydGlmYWN0cy97c3ViamVjdF9kaWdlc3R9L21ldGFkYXRhL3N0b3JhZ2UtcmVjb3Jkc1wiLFxuICAgIF0sXG4gICAgbGlzdEF0dGVzdGF0aW9uUmVwb3NpdG9yaWVzOiBbXCJHRVQgL29yZ3Mve29yZ30vYXR0ZXN0YXRpb25zL3JlcG9zaXRvcmllc1wiXSxcbiAgICBsaXN0QXR0ZXN0YXRpb25zOiBbXCJHRVQgL29yZ3Mve29yZ30vYXR0ZXN0YXRpb25zL3tzdWJqZWN0X2RpZ2VzdH1cIl0sXG4gICAgbGlzdEF0dGVzdGF0aW9uc0J1bGs6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9hdHRlc3RhdGlvbnMvYnVsay1saXN0ez9wZXJfcGFnZSxiZWZvcmUsYWZ0ZXJ9XCIsXG4gICAgXSxcbiAgICBsaXN0QmxvY2tlZFVzZXJzOiBbXCJHRVQgL29yZ3Mve29yZ30vYmxvY2tzXCJdLFxuICAgIGxpc3RGYWlsZWRJbnZpdGF0aW9uczogW1wiR0VUIC9vcmdzL3tvcmd9L2ZhaWxlZF9pbnZpdGF0aW9uc1wiXSxcbiAgICBsaXN0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9vcmdzXCJdLFxuICAgIGxpc3RGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vb3Jnc1wiXSxcbiAgICBsaXN0SW52aXRhdGlvblRlYW1zOiBbXCJHRVQgL29yZ3Mve29yZ30vaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9L3RlYW1zXCJdLFxuICAgIGxpc3RJc3N1ZVR5cGVzOiBbXCJHRVQgL29yZ3Mve29yZ30vaXNzdWUtdHlwZXNcIl0sXG4gICAgbGlzdE1lbWJlcnM6IFtcIkdFVCAvb3Jncy97b3JnfS9tZW1iZXJzXCJdLFxuICAgIGxpc3RNZW1iZXJzaGlwc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvbWVtYmVyc2hpcHMvb3Jnc1wiXSxcbiAgICBsaXN0T3JnUm9sZVRlYW1zOiBbXCJHRVQgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3tyb2xlX2lkfS90ZWFtc1wiXSxcbiAgICBsaXN0T3JnUm9sZVVzZXJzOiBbXCJHRVQgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3tyb2xlX2lkfS91c2Vyc1wiXSxcbiAgICBsaXN0T3JnUm9sZXM6IFtcIkdFVCAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXNcIl0sXG4gICAgbGlzdE9yZ2FuaXphdGlvbkZpbmVHcmFpbmVkUGVybWlzc2lvbnM6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1maW5lLWdyYWluZWQtcGVybWlzc2lvbnNcIixcbiAgICBdLFxuICAgIGxpc3RPdXRzaWRlQ29sbGFib3JhdG9yczogW1wiR0VUIC9vcmdzL3tvcmd9L291dHNpZGVfY29sbGFib3JhdG9yc1wiXSxcbiAgICBsaXN0UGF0R3JhbnRSZXBvc2l0b3JpZXM6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbnMve3BhdF9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBsaXN0UGF0R3JhbnRSZXF1ZXN0UmVwb3NpdG9yaWVzOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW4tcmVxdWVzdHMve3BhdF9yZXF1ZXN0X2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGxpc3RQYXRHcmFudFJlcXVlc3RzOiBbXCJHRVQgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2VuLXJlcXVlc3RzXCJdLFxuICAgIGxpc3RQYXRHcmFudHM6IFtcIkdFVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW5zXCJdLFxuICAgIGxpc3RQZW5kaW5nSW52aXRhdGlvbnM6IFtcIkdFVCAvb3Jncy97b3JnfS9pbnZpdGF0aW9uc1wiXSxcbiAgICBsaXN0UHVibGljTWVtYmVyczogW1wiR0VUIC9vcmdzL3tvcmd9L3B1YmxpY19tZW1iZXJzXCJdLFxuICAgIGxpc3RTZWN1cml0eU1hbmFnZXJUZWFtczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vc2VjdXJpdHktbWFuYWdlcnNcIixcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICBkZXByZWNhdGVkOlxuICAgICAgICAgIFwib2N0b2tpdC5yZXN0Lm9yZ3MubGlzdFNlY3VyaXR5TWFuYWdlclRlYW1zKCkgaXMgZGVwcmVjYXRlZCwgc2VlIGh0dHBzOi8vZG9jcy5naXRodWIuY29tL3Jlc3Qvb3Jncy9zZWN1cml0eS1tYW5hZ2VycyNsaXN0LXNlY3VyaXR5LW1hbmFnZXItdGVhbXNcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBsaXN0V2ViaG9va0RlbGl2ZXJpZXM6IFtcIkdFVCAvb3Jncy97b3JnfS9ob29rcy97aG9va19pZH0vZGVsaXZlcmllc1wiXSxcbiAgICBsaXN0V2ViaG9va3M6IFtcIkdFVCAvb3Jncy97b3JnfS9ob29rc1wiXSxcbiAgICBwaW5nV2ViaG9vazogW1wiUE9TVCAvb3Jncy97b3JnfS9ob29rcy97aG9va19pZH0vcGluZ3NcIl0sXG4gICAgcmVkZWxpdmVyV2ViaG9va0RlbGl2ZXJ5OiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9L2RlbGl2ZXJpZXMve2RlbGl2ZXJ5X2lkfS9hdHRlbXB0c1wiLFxuICAgIF0sXG4gICAgcmVtb3ZlTWVtYmVyOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vbWVtYmVycy97dXNlcm5hbWV9XCJdLFxuICAgIHJlbW92ZU1lbWJlcnNoaXBGb3JVc2VyOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vbWVtYmVyc2hpcHMve3VzZXJuYW1lfVwiXSxcbiAgICByZW1vdmVPdXRzaWRlQ29sbGFib3JhdG9yOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9vdXRzaWRlX2NvbGxhYm9yYXRvcnMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlUHVibGljTWVtYmVyc2hpcEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9wdWJsaWNfbWVtYmVycy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICByZW1vdmVTZWN1cml0eU1hbmFnZXJUZWFtOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9zZWN1cml0eS1tYW5hZ2Vycy90ZWFtcy97dGVhbV9zbHVnfVwiLFxuICAgICAge30sXG4gICAgICB7XG4gICAgICAgIGRlcHJlY2F0ZWQ6XG4gICAgICAgICAgXCJvY3Rva2l0LnJlc3Qub3Jncy5yZW1vdmVTZWN1cml0eU1hbmFnZXJUZWFtKCkgaXMgZGVwcmVjYXRlZCwgc2VlIGh0dHBzOi8vZG9jcy5naXRodWIuY29tL3Jlc3Qvb3Jncy9zZWN1cml0eS1tYW5hZ2VycyNyZW1vdmUtYS1zZWN1cml0eS1tYW5hZ2VyLXRlYW1cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICByZXZpZXdQYXRHcmFudFJlcXVlc3Q6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW4tcmVxdWVzdHMve3BhdF9yZXF1ZXN0X2lkfVwiLFxuICAgIF0sXG4gICAgcmV2aWV3UGF0R3JhbnRSZXF1ZXN0c0luQnVsazogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbi1yZXF1ZXN0c1wiLFxuICAgIF0sXG4gICAgcmV2b2tlQWxsT3JnUm9sZXNUZWFtOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMvdGVhbXMve3RlYW1fc2x1Z31cIixcbiAgICBdLFxuICAgIHJldm9rZUFsbE9yZ1JvbGVzVXNlcjogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3VzZXJzL3t1c2VybmFtZX1cIixcbiAgICBdLFxuICAgIHJldm9rZU9yZ1JvbGVUZWFtOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMvdGVhbXMve3RlYW1fc2x1Z30ve3JvbGVfaWR9XCIsXG4gICAgXSxcbiAgICByZXZva2VPcmdSb2xlVXNlcjogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3VzZXJzL3t1c2VybmFtZX0ve3JvbGVfaWR9XCIsXG4gICAgXSxcbiAgICBzZXRJbW11dGFibGVSZWxlYXNlc1NldHRpbmdzOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9pbW11dGFibGUtcmVsZWFzZXNcIixcbiAgICBdLFxuICAgIHNldEltbXV0YWJsZVJlbGVhc2VzU2V0dGluZ3NSZXBvc2l0b3JpZXM6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2ltbXV0YWJsZS1yZWxlYXNlcy9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIHNldE1lbWJlcnNoaXBGb3JVc2VyOiBbXCJQVVQgL29yZ3Mve29yZ30vbWVtYmVyc2hpcHMve3VzZXJuYW1lfVwiXSxcbiAgICBzZXRQdWJsaWNNZW1iZXJzaGlwRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L3B1YmxpY19tZW1iZXJzL3t1c2VybmFtZX1cIixcbiAgICBdLFxuICAgIHVuYmxvY2tVc2VyOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vYmxvY2tzL3t1c2VybmFtZX1cIl0sXG4gICAgdXBkYXRlOiBbXCJQQVRDSCAvb3Jncy97b3JnfVwiXSxcbiAgICB1cGRhdGVJc3N1ZVR5cGU6IFtcIlBVVCAvb3Jncy97b3JnfS9pc3N1ZS10eXBlcy97aXNzdWVfdHlwZV9pZH1cIl0sXG4gICAgdXBkYXRlTWVtYmVyc2hpcEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBBVENIIC91c2VyL21lbWJlcnNoaXBzL29yZ3Mve29yZ31cIixcbiAgICBdLFxuICAgIHVwZGF0ZVBhdEFjY2VzczogW1wiUE9TVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW5zL3twYXRfaWR9XCJdLFxuICAgIHVwZGF0ZVBhdEFjY2Vzc2VzOiBbXCJQT1NUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbnNcIl0sXG4gICAgdXBkYXRlV2ViaG9vazogW1wiUEFUQ0ggL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9XCJdLFxuICAgIHVwZGF0ZVdlYmhvb2tDb25maWdGb3JPcmc6IFtcIlBBVENIIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfS9jb25maWdcIl0sXG4gIH0sXG4gIHBhY2thZ2VzOiB7XG4gICAgZGVsZXRlUGFja2FnZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlUGFja2FnZUZvck9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX1cIixcbiAgICBdLFxuICAgIGRlbGV0ZVBhY2thZ2VGb3JVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlcnMve3VzZXJuYW1lfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlUGFja2FnZVZlcnNpb25Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnMve3BhY2thZ2VfdmVyc2lvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZVBhY2thZ2VWZXJzaW9uRm9yT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9ucy97cGFja2FnZV92ZXJzaW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlUGFja2FnZVZlcnNpb25Gb3JVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlcnMve3VzZXJuYW1lfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9ucy97cGFja2FnZV92ZXJzaW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0QWxsUGFja2FnZVZlcnNpb25zRm9yQVBhY2thZ2VPd25lZEJ5QW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wicGFja2FnZXNcIiwgXCJnZXRBbGxQYWNrYWdlVmVyc2lvbnNGb3JQYWNrYWdlT3duZWRCeU9yZ1wiXSB9LFxuICAgIF0sXG4gICAgZ2V0QWxsUGFja2FnZVZlcnNpb25zRm9yQVBhY2thZ2VPd25lZEJ5VGhlQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zXCIsXG4gICAgICB7fSxcbiAgICAgIHtcbiAgICAgICAgcmVuYW1lZDogW1xuICAgICAgICAgIFwicGFja2FnZXNcIixcbiAgICAgICAgICBcImdldEFsbFBhY2thZ2VWZXJzaW9uc0ZvclBhY2thZ2VPd25lZEJ5QXV0aGVudGljYXRlZFVzZXJcIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBnZXRBbGxQYWNrYWdlVmVyc2lvbnNGb3JQYWNrYWdlT3duZWRCeUF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9uc1wiLFxuICAgIF0sXG4gICAgZ2V0QWxsUGFja2FnZVZlcnNpb25zRm9yUGFja2FnZU93bmVkQnlPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zXCIsXG4gICAgXSxcbiAgICBnZXRBbGxQYWNrYWdlVmVyc2lvbnNGb3JQYWNrYWdlT3duZWRCeVVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zXCIsXG4gICAgXSxcbiAgICBnZXRQYWNrYWdlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9XCIsXG4gICAgXSxcbiAgICBnZXRQYWNrYWdlRm9yT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfVwiLFxuICAgIF0sXG4gICAgZ2V0UGFja2FnZUZvclVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9XCIsXG4gICAgXSxcbiAgICBnZXRQYWNrYWdlVmVyc2lvbkZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9ucy97cGFja2FnZV92ZXJzaW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0UGFja2FnZVZlcnNpb25Gb3JPcmdhbml6YXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9XCIsXG4gICAgXSxcbiAgICBnZXRQYWNrYWdlVmVyc2lvbkZvclVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9XCIsXG4gICAgXSxcbiAgICBsaXN0RG9ja2VyTWlncmF0aW9uQ29uZmxpY3RpbmdQYWNrYWdlc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9kb2NrZXIvY29uZmxpY3RzXCIsXG4gICAgXSxcbiAgICBsaXN0RG9ja2VyTWlncmF0aW9uQ29uZmxpY3RpbmdQYWNrYWdlc0Zvck9yZ2FuaXphdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vZG9ja2VyL2NvbmZsaWN0c1wiLFxuICAgIF0sXG4gICAgbGlzdERvY2tlck1pZ3JhdGlvbkNvbmZsaWN0aW5nUGFja2FnZXNGb3JVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9kb2NrZXIvY29uZmxpY3RzXCIsXG4gICAgXSxcbiAgICBsaXN0UGFja2FnZXNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3BhY2thZ2VzXCJdLFxuICAgIGxpc3RQYWNrYWdlc0Zvck9yZ2FuaXphdGlvbjogW1wiR0VUIC9vcmdzL3tvcmd9L3BhY2thZ2VzXCJdLFxuICAgIGxpc3RQYWNrYWdlc0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wYWNrYWdlc1wiXSxcbiAgICByZXN0b3JlUGFja2FnZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBPU1QgL3VzZXIvcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vcmVzdG9yZXs/dG9rZW59XCIsXG4gICAgXSxcbiAgICByZXN0b3JlUGFja2FnZUZvck9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3Jlc3RvcmV7P3Rva2VufVwiLFxuICAgIF0sXG4gICAgcmVzdG9yZVBhY2thZ2VGb3JVc2VyOiBbXG4gICAgICBcIlBPU1QgL3VzZXJzL3t1c2VybmFtZX0vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vcmVzdG9yZXs/dG9rZW59XCIsXG4gICAgXSxcbiAgICByZXN0b3JlUGFja2FnZVZlcnNpb25Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQT1NUIC91c2VyL3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9L3Jlc3RvcmVcIixcbiAgICBdLFxuICAgIHJlc3RvcmVQYWNrYWdlVmVyc2lvbkZvck9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9L3Jlc3RvcmVcIixcbiAgICBdLFxuICAgIHJlc3RvcmVQYWNrYWdlVmVyc2lvbkZvclVzZXI6IFtcbiAgICAgIFwiUE9TVCAvdXNlcnMve3VzZXJuYW1lfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9ucy97cGFja2FnZV92ZXJzaW9uX2lkfS9yZXN0b3JlXCIsXG4gICAgXSxcbiAgfSxcbiAgcHJpdmF0ZVJlZ2lzdHJpZXM6IHtcbiAgICBjcmVhdGVPcmdQcml2YXRlUmVnaXN0cnk6IFtcIlBPU1QgL29yZ3Mve29yZ30vcHJpdmF0ZS1yZWdpc3RyaWVzXCJdLFxuICAgIGRlbGV0ZU9yZ1ByaXZhdGVSZWdpc3RyeTogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vcHJpdmF0ZS1yZWdpc3RyaWVzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGdldE9yZ1ByaXZhdGVSZWdpc3RyeTogW1wiR0VUIC9vcmdzL3tvcmd9L3ByaXZhdGUtcmVnaXN0cmllcy97c2VjcmV0X25hbWV9XCJdLFxuICAgIGdldE9yZ1B1YmxpY0tleTogW1wiR0VUIC9vcmdzL3tvcmd9L3ByaXZhdGUtcmVnaXN0cmllcy9wdWJsaWMta2V5XCJdLFxuICAgIGxpc3RPcmdQcml2YXRlUmVnaXN0cmllczogW1wiR0VUIC9vcmdzL3tvcmd9L3ByaXZhdGUtcmVnaXN0cmllc1wiXSxcbiAgICB1cGRhdGVPcmdQcml2YXRlUmVnaXN0cnk6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ3Mve29yZ30vcHJpdmF0ZS1yZWdpc3RyaWVzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICB9LFxuICBwcm9qZWN0czoge1xuICAgIGFkZEl0ZW1Gb3JPcmc6IFtcIlBPU1QgL29yZ3Mve29yZ30vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zXCJdLFxuICAgIGFkZEl0ZW1Gb3JVc2VyOiBbXG4gICAgICBcIlBPU1QgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zXCIsXG4gICAgXSxcbiAgICBkZWxldGVJdGVtRm9yT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXMve2l0ZW1faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVJdGVtRm9yVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zL3tpdGVtX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0RmllbGRGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9maWVsZHMve2ZpZWxkX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0RmllbGRGb3JVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vZmllbGRzL3tmaWVsZF9pZH1cIixcbiAgICBdLFxuICAgIGdldEZvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfVwiXSxcbiAgICBnZXRGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9XCJdLFxuICAgIGdldE9yZ0l0ZW06IFtcIkdFVCAvb3Jncy97b3JnfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXMve2l0ZW1faWR9XCJdLFxuICAgIGdldFVzZXJJdGVtOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXMve2l0ZW1faWR9XCIsXG4gICAgXSxcbiAgICBsaXN0RmllbGRzRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2ZpZWxkc1wiXSxcbiAgICBsaXN0RmllbGRzRm9yVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2ZpZWxkc1wiLFxuICAgIF0sXG4gICAgbGlzdEZvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzVjJcIl0sXG4gICAgbGlzdEZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyXCJdLFxuICAgIGxpc3RJdGVtc0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9pdGVtc1wiXSxcbiAgICBsaXN0SXRlbXNGb3JVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXNcIixcbiAgICBdLFxuICAgIHVwZGF0ZUl0ZW1Gb3JPcmc6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ3Mve29yZ30vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zL3tpdGVtX2lkfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlSXRlbUZvclVzZXI6IFtcbiAgICAgIFwiUEFUQ0ggL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zL3tpdGVtX2lkfVwiLFxuICAgIF0sXG4gIH0sXG4gIHB1bGxzOiB7XG4gICAgY2hlY2tJZk1lcmdlZDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L21lcmdlXCJdLFxuICAgIGNyZWF0ZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHNcIl0sXG4gICAgY3JlYXRlUmVwbHlGb3JSZXZpZXdDb21tZW50OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfaWR9L3JlcGxpZXNcIixcbiAgICBdLFxuICAgIGNyZWF0ZVJldmlldzogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXZpZXdzXCJdLFxuICAgIGNyZWF0ZVJldmlld0NvbW1lbnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb21tZW50c1wiLFxuICAgIF0sXG4gICAgZGVsZXRlUGVuZGluZ1JldmlldzogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3cy97cmV2aWV3X2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlUmV2aWV3Q29tbWVudDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL2NvbW1lbnRzL3tjb21tZW50X2lkfVwiLFxuICAgIF0sXG4gICAgZGlzbWlzc1JldmlldzogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3cy97cmV2aWV3X2lkfS9kaXNtaXNzYWxzXCIsXG4gICAgXSxcbiAgICBnZXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfVwiXSxcbiAgICBnZXRSZXZpZXc6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3Mve3Jldmlld19pZH1cIixcbiAgICBdLFxuICAgIGdldFJldmlld0NvbW1lbnQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHMve2NvbW1lbnRfaWR9XCJdLFxuICAgIGxpc3Q6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHNcIl0sXG4gICAgbGlzdENvbW1lbnRzRm9yUmV2aWV3OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXZpZXdzL3tyZXZpZXdfaWR9L2NvbW1lbnRzXCIsXG4gICAgXSxcbiAgICBsaXN0Q29tbWl0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L2NvbW1pdHNcIl0sXG4gICAgbGlzdEZpbGVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vZmlsZXNcIl0sXG4gICAgbGlzdFJlcXVlc3RlZFJldmlld2VyczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmVxdWVzdGVkX3Jldmlld2Vyc1wiLFxuICAgIF0sXG4gICAgbGlzdFJldmlld0NvbW1lbnRzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb21tZW50c1wiLFxuICAgIF0sXG4gICAgbGlzdFJldmlld0NvbW1lbnRzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy9jb21tZW50c1wiXSxcbiAgICBsaXN0UmV2aWV3czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3NcIl0sXG4gICAgbWVyZ2U6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9tZXJnZVwiXSxcbiAgICByZW1vdmVSZXF1ZXN0ZWRSZXZpZXdlcnM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3JlcXVlc3RlZF9yZXZpZXdlcnNcIixcbiAgICBdLFxuICAgIHJlcXVlc3RSZXZpZXdlcnM6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXF1ZXN0ZWRfcmV2aWV3ZXJzXCIsXG4gICAgXSxcbiAgICBzdWJtaXRSZXZpZXc6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXZpZXdzL3tyZXZpZXdfaWR9L2V2ZW50c1wiLFxuICAgIF0sXG4gICAgdXBkYXRlOiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfVwiXSxcbiAgICB1cGRhdGVCcmFuY2g6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3VwZGF0ZS1icmFuY2hcIixcbiAgICBdLFxuICAgIHVwZGF0ZVJldmlldzogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3cy97cmV2aWV3X2lkfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlUmV2aWV3Q29tbWVudDogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHMve2NvbW1lbnRfaWR9XCIsXG4gICAgXSxcbiAgfSxcbiAgcmF0ZUxpbWl0OiB7IGdldDogW1wiR0VUIC9yYXRlX2xpbWl0XCJdIH0sXG4gIHJlYWN0aW9uczoge1xuICAgIGNyZWF0ZUZvckNvbW1pdENvbW1lbnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlRm9ySXNzdWU6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlRm9ySXNzdWVDb21tZW50OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBjcmVhdGVGb3JQdWxsUmVxdWVzdFJldmlld0NvbW1lbnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlRm9yUmVsZWFzZTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBjcmVhdGVGb3JUZWFtRGlzY3Vzc2lvbkNvbW1lbnRJbk9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGNyZWF0ZUZvclRlYW1EaXNjdXNzaW9uSW5Pcmc6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgZGVsZXRlRm9yQ29tbWl0Q29tbWVudDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnMve3JlYWN0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRm9ySXNzdWU6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vcmVhY3Rpb25zL3tyZWFjdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUZvcklzc3VlQ29tbWVudDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zL3tyZWFjdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUZvclB1bGxSZXF1ZXN0Q29tbWVudDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnMve3JlYWN0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRm9yUmVsZWFzZTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfS9yZWFjdGlvbnMve3JlYWN0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRm9yVGVhbURpc2N1c3Npb246IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vcmVhY3Rpb25zL3tyZWFjdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUZvclRlYW1EaXNjdXNzaW9uQ29tbWVudDogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9udW1iZXJ9L3JlYWN0aW9ucy97cmVhY3Rpb25faWR9XCIsXG4gICAgXSxcbiAgICBsaXN0Rm9yQ29tbWl0Q29tbWVudDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGxpc3RGb3JJc3N1ZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vcmVhY3Rpb25zXCJdLFxuICAgIGxpc3RGb3JJc3N1ZUNvbW1lbnQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdEZvclB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGxpc3RGb3JSZWxlYXNlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMve3JlbGVhc2VfaWR9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdEZvclRlYW1EaXNjdXNzaW9uQ29tbWVudEluT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzL3tjb21tZW50X251bWJlcn0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBsaXN0Rm9yVGVhbURpc2N1c3Npb25Jbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICB9LFxuICByZXBvczoge1xuICAgIGFjY2VwdEludml0YXRpb246IFtcbiAgICAgIFwiUEFUQ0ggL3VzZXIvcmVwb3NpdG9yeV9pbnZpdGF0aW9ucy97aW52aXRhdGlvbl9pZH1cIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJyZXBvc1wiLCBcImFjY2VwdEludml0YXRpb25Gb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgYWNjZXB0SW52aXRhdGlvbkZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBBVENIIC91c2VyL3JlcG9zaXRvcnlfaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBhZGRBcHBBY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvYXBwc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJhcHBzXCIgfSxcbiAgICBdLFxuICAgIGFkZENvbGxhYm9yYXRvcjogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2xsYWJvcmF0b3JzL3t1c2VybmFtZX1cIl0sXG4gICAgYWRkU3RhdHVzQ2hlY2tDb250ZXh0czogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3N0YXR1c19jaGVja3MvY29udGV4dHNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwiY29udGV4dHNcIiB9LFxuICAgIF0sXG4gICAgYWRkVGVhbUFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy90ZWFtc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJ0ZWFtc1wiIH0sXG4gICAgXSxcbiAgICBhZGRVc2VyQWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL3VzZXJzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcInVzZXJzXCIgfSxcbiAgICBdLFxuICAgIGNhbmNlbFBhZ2VzRGVwbG95bWVudDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlcy9kZXBsb3ltZW50cy97cGFnZXNfZGVwbG95bWVudF9pZH0vY2FuY2VsXCIsXG4gICAgXSxcbiAgICBjaGVja0F1dG9tYXRlZFNlY3VyaXR5Rml4ZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdXRvbWF0ZWQtc2VjdXJpdHktZml4ZXNcIixcbiAgICBdLFxuICAgIGNoZWNrQ29sbGFib3JhdG9yOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbGxhYm9yYXRvcnMve3VzZXJuYW1lfVwiXSxcbiAgICBjaGVja0ltbXV0YWJsZVJlbGVhc2VzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ltbXV0YWJsZS1yZWxlYXNlc1wiXSxcbiAgICBjaGVja1ByaXZhdGVWdWxuZXJhYmlsaXR5UmVwb3J0aW5nOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHJpdmF0ZS12dWxuZXJhYmlsaXR5LXJlcG9ydGluZ1wiLFxuICAgIF0sXG4gICAgY2hlY2tWdWxuZXJhYmlsaXR5QWxlcnRzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdnVsbmVyYWJpbGl0eS1hbGVydHNcIixcbiAgICBdLFxuICAgIGNvZGVvd25lcnNFcnJvcnM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZW93bmVycy9lcnJvcnNcIl0sXG4gICAgY29tcGFyZUNvbW1pdHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tcGFyZS97YmFzZX0uLi57aGVhZH1cIl0sXG4gICAgY29tcGFyZUNvbW1pdHNXaXRoQmFzZWhlYWQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21wYXJlL3tiYXNlaGVhZH1cIixcbiAgICBdLFxuICAgIGNyZWF0ZUF0dGVzdGF0aW9uOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdHRlc3RhdGlvbnNcIl0sXG4gICAgY3JlYXRlQXV0b2xpbms6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2F1dG9saW5rc1wiXSxcbiAgICBjcmVhdGVDb21taXRDb21tZW50OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve2NvbW1pdF9zaGF9L2NvbW1lbnRzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVDb21taXRTaWduYXR1cmVQcm90ZWN0aW9uOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc2lnbmF0dXJlc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlQ29tbWl0U3RhdHVzOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdGF0dXNlcy97c2hhfVwiXSxcbiAgICBjcmVhdGVEZXBsb3lLZXk6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2tleXNcIl0sXG4gICAgY3JlYXRlRGVwbG95bWVudDogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwbG95bWVudHNcIl0sXG4gICAgY3JlYXRlRGVwbG95bWVudEJyYW5jaFBvbGljeTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnQtYnJhbmNoLXBvbGljaWVzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVEZXBsb3ltZW50UHJvdGVjdGlvblJ1bGU6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50X3Byb3RlY3Rpb25fcnVsZXNcIixcbiAgICBdLFxuICAgIGNyZWF0ZURlcGxveW1lbnRTdGF0dXM6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwbG95bWVudHMve2RlcGxveW1lbnRfaWR9L3N0YXR1c2VzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVEaXNwYXRjaEV2ZW50OiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kaXNwYXRjaGVzXCJdLFxuICAgIGNyZWF0ZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL3JlcG9zXCJdLFxuICAgIGNyZWF0ZUZvcms6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ZvcmtzXCJdLFxuICAgIGNyZWF0ZUluT3JnOiBbXCJQT1NUIC9vcmdzL3tvcmd9L3JlcG9zXCJdLFxuICAgIGNyZWF0ZU9yVXBkYXRlRW52aXJvbm1lbnQ6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9XCIsXG4gICAgXSxcbiAgICBjcmVhdGVPclVwZGF0ZUZpbGVDb250ZW50czogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250ZW50cy97cGF0aH1cIl0sXG4gICAgY3JlYXRlT3JnUnVsZXNldDogW1wiUE9TVCAvb3Jncy97b3JnfS9ydWxlc2V0c1wiXSxcbiAgICBjcmVhdGVQYWdlc0RlcGxveW1lbnQ6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2RlcGxveW1lbnRzXCJdLFxuICAgIGNyZWF0ZVBhZ2VzU2l0ZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXNcIl0sXG4gICAgY3JlYXRlUmVsZWFzZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXNcIl0sXG4gICAgY3JlYXRlUmVwb1J1bGVzZXQ6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzXCJdLFxuICAgIGNyZWF0ZVVzaW5nVGVtcGxhdGU6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve3RlbXBsYXRlX293bmVyfS97dGVtcGxhdGVfcmVwb30vZ2VuZXJhdGVcIixcbiAgICBdLFxuICAgIGNyZWF0ZVdlYmhvb2s6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzXCJdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JSZXBvc0NyZWF0ZU9yVXBkYXRlUmVwb3NpdG9yeVZhbHVlczogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vcHJvcGVydGllcy92YWx1ZXNcIixcbiAgICBdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JSZXBvc0dldFJlcG9zaXRvcnlWYWx1ZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wcm9wZXJ0aWVzL3ZhbHVlc1wiLFxuICAgIF0sXG4gICAgZGVjbGluZUludml0YXRpb246IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL3JlcG9zaXRvcnlfaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wicmVwb3NcIiwgXCJkZWNsaW5lSW52aXRhdGlvbkZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBkZWNsaW5lSW52aXRhdGlvbkZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9yZXBvc2l0b3J5X2ludml0YXRpb25zL3tpbnZpdGF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99XCJdLFxuICAgIGRlbGV0ZUFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zXCIsXG4gICAgXSxcbiAgICBkZWxldGVBZG1pbkJyYW5jaFByb3RlY3Rpb246IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL2VuZm9yY2VfYWRtaW5zXCIsXG4gICAgXSxcbiAgICBkZWxldGVBbkVudmlyb25tZW50OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlQXV0b2xpbms6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYXV0b2xpbmtzL3thdXRvbGlua19pZH1cIl0sXG4gICAgZGVsZXRlQnJhbmNoUHJvdGVjdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb25cIixcbiAgICBdLFxuICAgIGRlbGV0ZUNvbW1pdENvbW1lbnQ6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWVudHMve2NvbW1lbnRfaWR9XCJdLFxuICAgIGRlbGV0ZUNvbW1pdFNpZ25hdHVyZVByb3RlY3Rpb246IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3NpZ25hdHVyZXNcIixcbiAgICBdLFxuICAgIGRlbGV0ZURlcGxveUtleTogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9rZXlzL3trZXlfaWR9XCJdLFxuICAgIGRlbGV0ZURlcGxveW1lbnQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBsb3ltZW50cy97ZGVwbG95bWVudF9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZURlcGxveW1lbnRCcmFuY2hQb2xpY3k6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnQtYnJhbmNoLXBvbGljaWVzL3ticmFuY2hfcG9saWN5X2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRmlsZTogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250ZW50cy97cGF0aH1cIl0sXG4gICAgZGVsZXRlSW52aXRhdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ludml0YXRpb25zL3tpbnZpdGF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlT3JnUnVsZXNldDogW1wiREVMRVRFIC9vcmdzL3tvcmd9L3J1bGVzZXRzL3tydWxlc2V0X2lkfVwiXSxcbiAgICBkZWxldGVQYWdlc1NpdGU6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXNcIl0sXG4gICAgZGVsZXRlUHVsbFJlcXVlc3RSZXZpZXdQcm90ZWN0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9wdWxsX3JlcXVlc3RfcmV2aWV3c1wiLFxuICAgIF0sXG4gICAgZGVsZXRlUmVsZWFzZTogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH1cIl0sXG4gICAgZGVsZXRlUmVsZWFzZUFzc2V0OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMvYXNzZXRzL3thc3NldF9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZVJlcG9SdWxlc2V0OiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzL3tydWxlc2V0X2lkfVwiXSxcbiAgICBkZWxldGVXZWJob29rOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfVwiXSxcbiAgICBkaXNhYmxlQXV0b21hdGVkU2VjdXJpdHlGaXhlczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2F1dG9tYXRlZC1zZWN1cml0eS1maXhlc1wiLFxuICAgIF0sXG4gICAgZGlzYWJsZURlcGxveW1lbnRQcm90ZWN0aW9uUnVsZTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudF9wcm90ZWN0aW9uX3J1bGVzL3twcm90ZWN0aW9uX3J1bGVfaWR9XCIsXG4gICAgXSxcbiAgICBkaXNhYmxlSW1tdXRhYmxlUmVsZWFzZXM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbW11dGFibGUtcmVsZWFzZXNcIixcbiAgICBdLFxuICAgIGRpc2FibGVQcml2YXRlVnVsbmVyYWJpbGl0eVJlcG9ydGluZzogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3ByaXZhdGUtdnVsbmVyYWJpbGl0eS1yZXBvcnRpbmdcIixcbiAgICBdLFxuICAgIGRpc2FibGVWdWxuZXJhYmlsaXR5QWxlcnRzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vdnVsbmVyYWJpbGl0eS1hbGVydHNcIixcbiAgICBdLFxuICAgIGRvd25sb2FkQXJjaGl2ZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3ppcGJhbGwve3JlZn1cIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJyZXBvc1wiLCBcImRvd25sb2FkWmlwYmFsbEFyY2hpdmVcIl0gfSxcbiAgICBdLFxuICAgIGRvd25sb2FkVGFyYmFsbEFyY2hpdmU6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdGFyYmFsbC97cmVmfVwiXSxcbiAgICBkb3dubG9hZFppcGJhbGxBcmNoaXZlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3ppcGJhbGwve3JlZn1cIl0sXG4gICAgZW5hYmxlQXV0b21hdGVkU2VjdXJpdHlGaXhlczogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2F1dG9tYXRlZC1zZWN1cml0eS1maXhlc1wiLFxuICAgIF0sXG4gICAgZW5hYmxlSW1tdXRhYmxlUmVsZWFzZXM6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vaW1tdXRhYmxlLXJlbGVhc2VzXCJdLFxuICAgIGVuYWJsZVByaXZhdGVWdWxuZXJhYmlsaXR5UmVwb3J0aW5nOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHJpdmF0ZS12dWxuZXJhYmlsaXR5LXJlcG9ydGluZ1wiLFxuICAgIF0sXG4gICAgZW5hYmxlVnVsbmVyYWJpbGl0eUFsZXJ0czogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3Z1bG5lcmFiaWxpdHktYWxlcnRzXCIsXG4gICAgXSxcbiAgICBnZW5lcmF0ZVJlbGVhc2VOb3RlczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy9nZW5lcmF0ZS1ub3Rlc1wiLFxuICAgIF0sXG4gICAgZ2V0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99XCJdLFxuICAgIGdldEFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zXCIsXG4gICAgXSxcbiAgICBnZXRBZG1pbkJyYW5jaFByb3RlY3Rpb246IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL2VuZm9yY2VfYWRtaW5zXCIsXG4gICAgXSxcbiAgICBnZXRBbGxEZXBsb3ltZW50UHJvdGVjdGlvblJ1bGVzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50X3Byb3RlY3Rpb25fcnVsZXNcIixcbiAgICBdLFxuICAgIGdldEFsbEVudmlyb25tZW50czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHNcIl0sXG4gICAgZ2V0QWxsU3RhdHVzQ2hlY2tDb250ZXh0czogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc3RhdHVzX2NoZWNrcy9jb250ZXh0c1wiLFxuICAgIF0sXG4gICAgZ2V0QWxsVG9waWNzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RvcGljc1wiXSxcbiAgICBnZXRBcHBzV2l0aEFjY2Vzc1RvUHJvdGVjdGVkQnJhbmNoOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvYXBwc1wiLFxuICAgIF0sXG4gICAgZ2V0QXV0b2xpbms6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXV0b2xpbmtzL3thdXRvbGlua19pZH1cIl0sXG4gICAgZ2V0QnJhbmNoOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9XCJdLFxuICAgIGdldEJyYW5jaFByb3RlY3Rpb246IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uXCIsXG4gICAgXSxcbiAgICBnZXRCcmFuY2hSdWxlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlcy9icmFuY2hlcy97YnJhbmNofVwiXSxcbiAgICBnZXRDbG9uZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdHJhZmZpYy9jbG9uZXNcIl0sXG4gICAgZ2V0Q29kZUZyZXF1ZW5jeVN0YXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXRzL2NvZGVfZnJlcXVlbmN5XCJdLFxuICAgIGdldENvbGxhYm9yYXRvclBlcm1pc3Npb25MZXZlbDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbGxhYm9yYXRvcnMve3VzZXJuYW1lfS9wZXJtaXNzaW9uXCIsXG4gICAgXSxcbiAgICBnZXRDb21iaW5lZFN0YXR1c0ZvclJlZjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tyZWZ9L3N0YXR1c1wiXSxcbiAgICBnZXRDb21taXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97cmVmfVwiXSxcbiAgICBnZXRDb21taXRBY3Rpdml0eVN0YXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXRzL2NvbW1pdF9hY3Rpdml0eVwiXSxcbiAgICBnZXRDb21taXRDb21tZW50OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzL3tjb21tZW50X2lkfVwiXSxcbiAgICBnZXRDb21taXRTaWduYXR1cmVQcm90ZWN0aW9uOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zaWduYXR1cmVzXCIsXG4gICAgXSxcbiAgICBnZXRDb21tdW5pdHlQcm9maWxlTWV0cmljczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tdW5pdHkvcHJvZmlsZVwiXSxcbiAgICBnZXRDb250ZW50OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3twYXRofVwiXSxcbiAgICBnZXRDb250cmlidXRvcnNTdGF0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdGF0cy9jb250cmlidXRvcnNcIl0sXG4gICAgZ2V0Q3VzdG9tRGVwbG95bWVudFByb3RlY3Rpb25SdWxlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50X3Byb3RlY3Rpb25fcnVsZXMve3Byb3RlY3Rpb25fcnVsZV9pZH1cIixcbiAgICBdLFxuICAgIGdldERlcGxveUtleTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9rZXlzL3trZXlfaWR9XCJdLFxuICAgIGdldERlcGxveW1lbnQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwbG95bWVudHMve2RlcGxveW1lbnRfaWR9XCJdLFxuICAgIGdldERlcGxveW1lbnRCcmFuY2hQb2xpY3k6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnQtYnJhbmNoLXBvbGljaWVzL3ticmFuY2hfcG9saWN5X2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0RGVwbG95bWVudFN0YXR1czogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzL3tkZXBsb3ltZW50X2lkfS9zdGF0dXNlcy97c3RhdHVzX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0RW52aXJvbm1lbnQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9XCIsXG4gICAgXSxcbiAgICBnZXRMYXRlc3RQYWdlc0J1aWxkOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2J1aWxkcy9sYXRlc3RcIl0sXG4gICAgZ2V0TGF0ZXN0UmVsZWFzZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy9sYXRlc3RcIl0sXG4gICAgZ2V0T3JnUnVsZVN1aXRlOiBbXCJHRVQgL29yZ3Mve29yZ30vcnVsZXNldHMvcnVsZS1zdWl0ZXMve3J1bGVfc3VpdGVfaWR9XCJdLFxuICAgIGdldE9yZ1J1bGVTdWl0ZXM6IFtcIkdFVCAvb3Jncy97b3JnfS9ydWxlc2V0cy9ydWxlLXN1aXRlc1wiXSxcbiAgICBnZXRPcmdSdWxlc2V0OiBbXCJHRVQgL29yZ3Mve29yZ30vcnVsZXNldHMve3J1bGVzZXRfaWR9XCJdLFxuICAgIGdldE9yZ1J1bGVzZXRzOiBbXCJHRVQgL29yZ3Mve29yZ30vcnVsZXNldHNcIl0sXG4gICAgZ2V0UGFnZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXNcIl0sXG4gICAgZ2V0UGFnZXNCdWlsZDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlcy9idWlsZHMve2J1aWxkX2lkfVwiXSxcbiAgICBnZXRQYWdlc0RlcGxveW1lbnQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlcy9kZXBsb3ltZW50cy97cGFnZXNfZGVwbG95bWVudF9pZH1cIixcbiAgICBdLFxuICAgIGdldFBhZ2VzSGVhbHRoQ2hlY2s6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXMvaGVhbHRoXCJdLFxuICAgIGdldFBhcnRpY2lwYXRpb25TdGF0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdGF0cy9wYXJ0aWNpcGF0aW9uXCJdLFxuICAgIGdldFB1bGxSZXF1ZXN0UmV2aWV3UHJvdGVjdGlvbjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfcHVsbF9yZXF1ZXN0X3Jldmlld3NcIixcbiAgICBdLFxuICAgIGdldFB1bmNoQ2FyZFN0YXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXRzL3B1bmNoX2NhcmRcIl0sXG4gICAgZ2V0UmVhZG1lOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlYWRtZVwiXSxcbiAgICBnZXRSZWFkbWVJbkRpcmVjdG9yeTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWFkbWUve2Rpcn1cIl0sXG4gICAgZ2V0UmVsZWFzZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH1cIl0sXG4gICAgZ2V0UmVsZWFzZUFzc2V0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL2Fzc2V0cy97YXNzZXRfaWR9XCJdLFxuICAgIGdldFJlbGVhc2VCeVRhZzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy90YWdzL3t0YWd9XCJdLFxuICAgIGdldFJlcG9SdWxlU3VpdGU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0cy9ydWxlLXN1aXRlcy97cnVsZV9zdWl0ZV9pZH1cIixcbiAgICBdLFxuICAgIGdldFJlcG9SdWxlU3VpdGVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzL3J1bGUtc3VpdGVzXCJdLFxuICAgIGdldFJlcG9SdWxlc2V0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzL3tydWxlc2V0X2lkfVwiXSxcbiAgICBnZXRSZXBvUnVsZXNldEhpc3Rvcnk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0cy97cnVsZXNldF9pZH0vaGlzdG9yeVwiLFxuICAgIF0sXG4gICAgZ2V0UmVwb1J1bGVzZXRWZXJzaW9uOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHMve3J1bGVzZXRfaWR9L2hpc3Rvcnkve3ZlcnNpb25faWR9XCIsXG4gICAgXSxcbiAgICBnZXRSZXBvUnVsZXNldHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHNcIl0sXG4gICAgZ2V0U3RhdHVzQ2hlY2tzUHJvdGVjdGlvbjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc3RhdHVzX2NoZWNrc1wiLFxuICAgIF0sXG4gICAgZ2V0VGVhbXNXaXRoQWNjZXNzVG9Qcm90ZWN0ZWRCcmFuY2g6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy90ZWFtc1wiLFxuICAgIF0sXG4gICAgZ2V0VG9wUGF0aHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdHJhZmZpYy9wb3B1bGFyL3BhdGhzXCJdLFxuICAgIGdldFRvcFJlZmVycmVyczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90cmFmZmljL3BvcHVsYXIvcmVmZXJyZXJzXCJdLFxuICAgIGdldFVzZXJzV2l0aEFjY2Vzc1RvUHJvdGVjdGVkQnJhbmNoOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvdXNlcnNcIixcbiAgICBdLFxuICAgIGdldFZpZXdzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RyYWZmaWMvdmlld3NcIl0sXG4gICAgZ2V0V2ViaG9vazogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH1cIl0sXG4gICAgZ2V0V2ViaG9va0NvbmZpZ0ZvclJlcG86IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH0vY29uZmlnXCIsXG4gICAgXSxcbiAgICBnZXRXZWJob29rRGVsaXZlcnk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH0vZGVsaXZlcmllcy97ZGVsaXZlcnlfaWR9XCIsXG4gICAgXSxcbiAgICBsaXN0QWN0aXZpdGllczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpdml0eVwiXSxcbiAgICBsaXN0QXR0ZXN0YXRpb25zOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXR0ZXN0YXRpb25zL3tzdWJqZWN0X2RpZ2VzdH1cIixcbiAgICBdLFxuICAgIGxpc3RBdXRvbGlua3M6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXV0b2xpbmtzXCJdLFxuICAgIGxpc3RCcmFuY2hlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlc1wiXSxcbiAgICBsaXN0QnJhbmNoZXNGb3JIZWFkQ29tbWl0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97Y29tbWl0X3NoYX0vYnJhbmNoZXMtd2hlcmUtaGVhZFwiLFxuICAgIF0sXG4gICAgbGlzdENvbGxhYm9yYXRvcnM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29sbGFib3JhdG9yc1wiXSxcbiAgICBsaXN0Q29tbWVudHNGb3JDb21taXQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tjb21taXRfc2hhfS9jb21tZW50c1wiLFxuICAgIF0sXG4gICAgbGlzdENvbW1pdENvbW1lbnRzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tZW50c1wiXSxcbiAgICBsaXN0Q29tbWl0U3RhdHVzZXNGb3JSZWY6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tyZWZ9L3N0YXR1c2VzXCIsXG4gICAgXSxcbiAgICBsaXN0Q29tbWl0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzXCJdLFxuICAgIGxpc3RDb250cmlidXRvcnM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29udHJpYnV0b3JzXCJdLFxuICAgIGxpc3RDdXN0b21EZXBsb3ltZW50UnVsZUludGVncmF0aW9uczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudF9wcm90ZWN0aW9uX3J1bGVzL2FwcHNcIixcbiAgICBdLFxuICAgIGxpc3REZXBsb3lLZXlzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2tleXNcIl0sXG4gICAgbGlzdERlcGxveW1lbnRCcmFuY2hQb2xpY2llczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudC1icmFuY2gtcG9saWNpZXNcIixcbiAgICBdLFxuICAgIGxpc3REZXBsb3ltZW50U3RhdHVzZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBsb3ltZW50cy97ZGVwbG95bWVudF9pZH0vc3RhdHVzZXNcIixcbiAgICBdLFxuICAgIGxpc3REZXBsb3ltZW50czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBsb3ltZW50c1wiXSxcbiAgICBsaXN0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9yZXBvc1wiXSxcbiAgICBsaXN0Rm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vcmVwb3NcIl0sXG4gICAgbGlzdEZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9yZXBvc1wiXSxcbiAgICBsaXN0Rm9ya3M6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZm9ya3NcIl0sXG4gICAgbGlzdEludml0YXRpb25zOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ludml0YXRpb25zXCJdLFxuICAgIGxpc3RJbnZpdGF0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvcmVwb3NpdG9yeV9pbnZpdGF0aW9uc1wiXSxcbiAgICBsaXN0TGFuZ3VhZ2VzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2xhbmd1YWdlc1wiXSxcbiAgICBsaXN0UGFnZXNCdWlsZHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXMvYnVpbGRzXCJdLFxuICAgIGxpc3RQdWJsaWM6IFtcIkdFVCAvcmVwb3NpdG9yaWVzXCJdLFxuICAgIGxpc3RQdWxsUmVxdWVzdHNBc3NvY2lhdGVkV2l0aENvbW1pdDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve2NvbW1pdF9zaGF9L3B1bGxzXCIsXG4gICAgXSxcbiAgICBsaXN0UmVsZWFzZUFzc2V0czogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfS9hc3NldHNcIixcbiAgICBdLFxuICAgIGxpc3RSZWxlYXNlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlc1wiXSxcbiAgICBsaXN0VGFnczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90YWdzXCJdLFxuICAgIGxpc3RUZWFtczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90ZWFtc1wiXSxcbiAgICBsaXN0V2ViaG9va0RlbGl2ZXJpZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH0vZGVsaXZlcmllc1wiLFxuICAgIF0sXG4gICAgbGlzdFdlYmhvb2tzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzXCJdLFxuICAgIG1lcmdlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9tZXJnZXNcIl0sXG4gICAgbWVyZ2VVcHN0cmVhbTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vbWVyZ2UtdXBzdHJlYW1cIl0sXG4gICAgcGluZ1dlYmhvb2s6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfS9waW5nc1wiXSxcbiAgICByZWRlbGl2ZXJXZWJob29rRGVsaXZlcnk6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9L2RlbGl2ZXJpZXMve2RlbGl2ZXJ5X2lkfS9hdHRlbXB0c1wiLFxuICAgIF0sXG4gICAgcmVtb3ZlQXBwQWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvYXBwc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJhcHBzXCIgfSxcbiAgICBdLFxuICAgIHJlbW92ZUNvbGxhYm9yYXRvcjogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbGxhYm9yYXRvcnMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlU3RhdHVzQ2hlY2tDb250ZXh0czogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc3RhdHVzX2NoZWNrcy9jb250ZXh0c1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJjb250ZXh0c1wiIH0sXG4gICAgXSxcbiAgICByZW1vdmVTdGF0dXNDaGVja1Byb3RlY3Rpb246IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3N0YXR1c19jaGVja3NcIixcbiAgICBdLFxuICAgIHJlbW92ZVRlYW1BY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy90ZWFtc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJ0ZWFtc1wiIH0sXG4gICAgXSxcbiAgICByZW1vdmVVc2VyQWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvdXNlcnNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwidXNlcnNcIiB9LFxuICAgIF0sXG4gICAgcmVuYW1lQnJhbmNoOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9yZW5hbWVcIl0sXG4gICAgcmVwbGFjZUFsbFRvcGljczogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90b3BpY3NcIl0sXG4gICAgcmVxdWVzdFBhZ2VzQnVpbGQ6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2J1aWxkc1wiXSxcbiAgICBzZXRBZG1pbkJyYW5jaFByb3RlY3Rpb246IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9lbmZvcmNlX2FkbWluc1wiLFxuICAgIF0sXG4gICAgc2V0QXBwQWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvYXBwc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJhcHBzXCIgfSxcbiAgICBdLFxuICAgIHNldFN0YXR1c0NoZWNrQ29udGV4dHM6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3N0YXR1c19jaGVja3MvY29udGV4dHNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwiY29udGV4dHNcIiB9LFxuICAgIF0sXG4gICAgc2V0VGVhbUFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL3RlYW1zXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcInRlYW1zXCIgfSxcbiAgICBdLFxuICAgIHNldFVzZXJBY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy91c2Vyc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJ1c2Vyc1wiIH0sXG4gICAgXSxcbiAgICB0ZXN0UHVzaFdlYmhvb2s6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfS90ZXN0c1wiXSxcbiAgICB0cmFuc2ZlcjogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vdHJhbnNmZXJcIl0sXG4gICAgdXBkYXRlOiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb31cIl0sXG4gICAgdXBkYXRlQnJhbmNoUHJvdGVjdGlvbjogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb25cIixcbiAgICBdLFxuICAgIHVwZGF0ZUNvbW1pdENvbW1lbnQ6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gICAgdXBkYXRlRGVwbG95bWVudEJyYW5jaFBvbGljeTogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudC1icmFuY2gtcG9saWNpZXMve2JyYW5jaF9wb2xpY3lfaWR9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVJbmZvcm1hdGlvbkFib3V0UGFnZXNTaXRlOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzXCJdLFxuICAgIHVwZGF0ZUludml0YXRpb246IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2ludml0YXRpb25zL3tpbnZpdGF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlT3JnUnVsZXNldDogW1wiUFVUIC9vcmdzL3tvcmd9L3J1bGVzZXRzL3tydWxlc2V0X2lkfVwiXSxcbiAgICB1cGRhdGVQdWxsUmVxdWVzdFJldmlld1Byb3RlY3Rpb246IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfcHVsbF9yZXF1ZXN0X3Jldmlld3NcIixcbiAgICBdLFxuICAgIHVwZGF0ZVJlbGVhc2U6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH1cIl0sXG4gICAgdXBkYXRlUmVsZWFzZUFzc2V0OiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy9hc3NldHMve2Fzc2V0X2lkfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlUmVwb1J1bGVzZXQ6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHMve3J1bGVzZXRfaWR9XCJdLFxuICAgIHVwZGF0ZVN0YXR1c0NoZWNrUG90ZWN0aW9uOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3N0YXR1c19jaGVja3NcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJyZXBvc1wiLCBcInVwZGF0ZVN0YXR1c0NoZWNrUHJvdGVjdGlvblwiXSB9LFxuICAgIF0sXG4gICAgdXBkYXRlU3RhdHVzQ2hlY2tQcm90ZWN0aW9uOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3N0YXR1c19jaGVja3NcIixcbiAgICBdLFxuICAgIHVwZGF0ZVdlYmhvb2s6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH1cIl0sXG4gICAgdXBkYXRlV2ViaG9va0NvbmZpZ0ZvclJlcG86IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfS9jb25maWdcIixcbiAgICBdLFxuICAgIHVwbG9hZFJlbGVhc2VBc3NldDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH0vYXNzZXRzez9uYW1lLGxhYmVsfVwiLFxuICAgICAgeyBiYXNlVXJsOiBcImh0dHBzOi8vdXBsb2Fkcy5naXRodWIuY29tXCIgfSxcbiAgICBdLFxuICB9LFxuICBzZWFyY2g6IHtcbiAgICBjb2RlOiBbXCJHRVQgL3NlYXJjaC9jb2RlXCJdLFxuICAgIGNvbW1pdHM6IFtcIkdFVCAvc2VhcmNoL2NvbW1pdHNcIl0sXG4gICAgaXNzdWVzQW5kUHVsbFJlcXVlc3RzOiBbXCJHRVQgL3NlYXJjaC9pc3N1ZXNcIl0sXG4gICAgbGFiZWxzOiBbXCJHRVQgL3NlYXJjaC9sYWJlbHNcIl0sXG4gICAgcmVwb3M6IFtcIkdFVCAvc2VhcmNoL3JlcG9zaXRvcmllc1wiXSxcbiAgICB0b3BpY3M6IFtcIkdFVCAvc2VhcmNoL3RvcGljc1wiXSxcbiAgICB1c2VyczogW1wiR0VUIC9zZWFyY2gvdXNlcnNcIl0sXG4gIH0sXG4gIHNlY3JldFNjYW5uaW5nOiB7XG4gICAgY3JlYXRlUHVzaFByb3RlY3Rpb25CeXBhc3M6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjcmV0LXNjYW5uaW5nL3B1c2gtcHJvdGVjdGlvbi1ieXBhc3Nlc1wiLFxuICAgIF0sXG4gICAgZ2V0QWxlcnQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWNyZXQtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICBnZXRTY2FuSGlzdG9yeTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWNyZXQtc2Nhbm5pbmcvc2Nhbi1oaXN0b3J5XCJdLFxuICAgIGxpc3RBbGVydHNGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9zZWNyZXQtc2Nhbm5pbmcvYWxlcnRzXCJdLFxuICAgIGxpc3RBbGVydHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3JldC1zY2FubmluZy9hbGVydHNcIl0sXG4gICAgbGlzdExvY2F0aW9uc0ZvckFsZXJ0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfS9sb2NhdGlvbnNcIixcbiAgICBdLFxuICAgIGxpc3RPcmdQYXR0ZXJuQ29uZmlnczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vc2VjcmV0LXNjYW5uaW5nL3BhdHRlcm4tY29uZmlndXJhdGlvbnNcIixcbiAgICBdLFxuICAgIHVwZGF0ZUFsZXJ0OiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWNyZXQtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVPcmdQYXR0ZXJuQ29uZmlnczogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS9zZWNyZXQtc2Nhbm5pbmcvcGF0dGVybi1jb25maWd1cmF0aW9uc1wiLFxuICAgIF0sXG4gIH0sXG4gIHNlY3VyaXR5QWR2aXNvcmllczoge1xuICAgIGNyZWF0ZUZvcms6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjdXJpdHktYWR2aXNvcmllcy97Z2hzYV9pZH0vZm9ya3NcIixcbiAgICBdLFxuICAgIGNyZWF0ZVByaXZhdGVWdWxuZXJhYmlsaXR5UmVwb3J0OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3VyaXR5LWFkdmlzb3JpZXMvcmVwb3J0c1wiLFxuICAgIF0sXG4gICAgY3JlYXRlUmVwb3NpdG9yeUFkdmlzb3J5OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3VyaXR5LWFkdmlzb3JpZXNcIixcbiAgICBdLFxuICAgIGNyZWF0ZVJlcG9zaXRvcnlBZHZpc29yeUN2ZVJlcXVlc3Q6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjdXJpdHktYWR2aXNvcmllcy97Z2hzYV9pZH0vY3ZlXCIsXG4gICAgXSxcbiAgICBnZXRHbG9iYWxBZHZpc29yeTogW1wiR0VUIC9hZHZpc29yaWVzL3tnaHNhX2lkfVwiXSxcbiAgICBnZXRSZXBvc2l0b3J5QWR2aXNvcnk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWN1cml0eS1hZHZpc29yaWVzL3tnaHNhX2lkfVwiLFxuICAgIF0sXG4gICAgbGlzdEdsb2JhbEFkdmlzb3JpZXM6IFtcIkdFVCAvYWR2aXNvcmllc1wiXSxcbiAgICBsaXN0T3JnUmVwb3NpdG9yeUFkdmlzb3JpZXM6IFtcIkdFVCAvb3Jncy97b3JnfS9zZWN1cml0eS1hZHZpc29yaWVzXCJdLFxuICAgIGxpc3RSZXBvc2l0b3J5QWR2aXNvcmllczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWN1cml0eS1hZHZpc29yaWVzXCJdLFxuICAgIHVwZGF0ZVJlcG9zaXRvcnlBZHZpc29yeTogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjdXJpdHktYWR2aXNvcmllcy97Z2hzYV9pZH1cIixcbiAgICBdLFxuICB9LFxuICB0ZWFtczoge1xuICAgIGFkZE9yVXBkYXRlTWVtYmVyc2hpcEZvclVzZXJJbk9yZzogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vbWVtYmVyc2hpcHMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgYWRkT3JVcGRhdGVSZXBvUGVybWlzc2lvbnNJbk9yZzogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vcmVwb3Mve293bmVyfS97cmVwb31cIixcbiAgICBdLFxuICAgIGNoZWNrUGVybWlzc2lvbnNGb3JSZXBvSW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L3JlcG9zL3tvd25lcn0ve3JlcG99XCIsXG4gICAgXSxcbiAgICBjcmVhdGU6IFtcIlBPU1QgL29yZ3Mve29yZ30vdGVhbXNcIl0sXG4gICAgY3JlYXRlRGlzY3Vzc2lvbkNvbW1lbnRJbk9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHNcIixcbiAgICBdLFxuICAgIGNyZWF0ZURpc2N1c3Npb25Jbk9yZzogW1wiUE9TVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9uc1wiXSxcbiAgICBkZWxldGVEaXNjdXNzaW9uQ29tbWVudEluT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzL3tjb21tZW50X251bWJlcn1cIixcbiAgICBdLFxuICAgIGRlbGV0ZURpc2N1c3Npb25Jbk9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlSW5Pcmc6IFtcIkRFTEVURSAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfVwiXSxcbiAgICBnZXRCeU5hbWU6IFtcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfVwiXSxcbiAgICBnZXREaXNjdXNzaW9uQ29tbWVudEluT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzL3tjb21tZW50X251bWJlcn1cIixcbiAgICBdLFxuICAgIGdldERpc2N1c3Npb25Jbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgZ2V0TWVtYmVyc2hpcEZvclVzZXJJbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vbWVtYmVyc2hpcHMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgbGlzdDogW1wiR0VUIC9vcmdzL3tvcmd9L3RlYW1zXCJdLFxuICAgIGxpc3RDaGlsZEluT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vdGVhbXNcIl0sXG4gICAgbGlzdERpc2N1c3Npb25Db21tZW50c0luT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gICAgXSxcbiAgICBsaXN0RGlzY3Vzc2lvbnNJbk9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zXCJdLFxuICAgIGxpc3RGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3RlYW1zXCJdLFxuICAgIGxpc3RNZW1iZXJzSW5Pcmc6IFtcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9tZW1iZXJzXCJdLFxuICAgIGxpc3RQZW5kaW5nSW52aXRhdGlvbnNJbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vaW52aXRhdGlvbnNcIixcbiAgICBdLFxuICAgIGxpc3RSZXBvc0luT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vcmVwb3NcIl0sXG4gICAgcmVtb3ZlTWVtYmVyc2hpcEZvclVzZXJJbk9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vbWVtYmVyc2hpcHMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlUmVwb0luT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9yZXBvcy97b3duZXJ9L3tyZXBvfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlRGlzY3Vzc2lvbkNvbW1lbnRJbk9yZzogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzL3tjb21tZW50X251bWJlcn1cIixcbiAgICBdLFxuICAgIHVwZGF0ZURpc2N1c3Npb25Jbk9yZzogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVJbk9yZzogW1wiUEFUQ0ggL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z31cIl0sXG4gIH0sXG4gIHVzZXJzOiB7XG4gICAgYWRkRW1haWxGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIlBPU1QgL3VzZXIvZW1haWxzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJhZGRFbWFpbEZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBhZGRFbWFpbEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL2VtYWlsc1wiXSxcbiAgICBhZGRTb2NpYWxBY2NvdW50Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvc29jaWFsX2FjY291bnRzXCJdLFxuICAgIGJsb2NrOiBbXCJQVVQgL3VzZXIvYmxvY2tzL3t1c2VybmFtZX1cIl0sXG4gICAgY2hlY2tCbG9ja2VkOiBbXCJHRVQgL3VzZXIvYmxvY2tzL3t1c2VybmFtZX1cIl0sXG4gICAgY2hlY2tGb2xsb3dpbmdGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZm9sbG93aW5nL3t0YXJnZXRfdXNlcn1cIl0sXG4gICAgY2hlY2tQZXJzb25Jc0ZvbGxvd2VkQnlBdXRoZW50aWNhdGVkOiBbXCJHRVQgL3VzZXIvZm9sbG93aW5nL3t1c2VybmFtZX1cIl0sXG4gICAgY3JlYXRlR3BnS2V5Rm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJQT1NUIC91c2VyL2dwZ19rZXlzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJjcmVhdGVHcGdLZXlGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgY3JlYXRlR3BnS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvZ3BnX2tleXNcIl0sXG4gICAgY3JlYXRlUHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJQT1NUIC91c2VyL2tleXNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImNyZWF0ZVB1YmxpY1NzaEtleUZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBjcmVhdGVQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9rZXlzXCJdLFxuICAgIGNyZWF0ZVNzaFNpZ25pbmdLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9zc2hfc2lnbmluZ19rZXlzXCJdLFxuICAgIGRlbGV0ZUF0dGVzdGF0aW9uc0J1bGs6IFtcbiAgICAgIFwiUE9TVCAvdXNlcnMve3VzZXJuYW1lfS9hdHRlc3RhdGlvbnMvZGVsZXRlLXJlcXVlc3RcIixcbiAgICBdLFxuICAgIGRlbGV0ZUF0dGVzdGF0aW9uc0J5SWQ6IFtcbiAgICAgIFwiREVMRVRFIC91c2Vycy97dXNlcm5hbWV9L2F0dGVzdGF0aW9ucy97YXR0ZXN0YXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVBdHRlc3RhdGlvbnNCeVN1YmplY3REaWdlc3Q6IFtcbiAgICAgIFwiREVMRVRFIC91c2Vycy97dXNlcm5hbWV9L2F0dGVzdGF0aW9ucy9kaWdlc3Qve3N1YmplY3RfZGlnZXN0fVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRW1haWxGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9lbWFpbHNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImRlbGV0ZUVtYWlsRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGRlbGV0ZUVtYWlsRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkRFTEVURSAvdXNlci9lbWFpbHNcIl0sXG4gICAgZGVsZXRlR3BnS2V5Rm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvZ3BnX2tleXMve2dwZ19rZXlfaWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJkZWxldGVHcGdLZXlGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgZGVsZXRlR3BnS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkRFTEVURSAvdXNlci9ncGdfa2V5cy97Z3BnX2tleV9pZH1cIl0sXG4gICAgZGVsZXRlUHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJERUxFVEUgL3VzZXIva2V5cy97a2V5X2lkfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwiZGVsZXRlUHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGRlbGV0ZVB1YmxpY1NzaEtleUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJERUxFVEUgL3VzZXIva2V5cy97a2V5X2lkfVwiXSxcbiAgICBkZWxldGVTb2NpYWxBY2NvdW50Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkRFTEVURSAvdXNlci9zb2NpYWxfYWNjb3VudHNcIl0sXG4gICAgZGVsZXRlU3NoU2lnbmluZ0tleUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9zc2hfc2lnbmluZ19rZXlzL3tzc2hfc2lnbmluZ19rZXlfaWR9XCIsXG4gICAgXSxcbiAgICBmb2xsb3c6IFtcIlBVVCAvdXNlci9mb2xsb3dpbmcve3VzZXJuYW1lfVwiXSxcbiAgICBnZXRBdXRoZW50aWNhdGVkOiBbXCJHRVQgL3VzZXJcIl0sXG4gICAgZ2V0QnlJZDogW1wiR0VUIC91c2VyL3thY2NvdW50X2lkfVwiXSxcbiAgICBnZXRCeVVzZXJuYW1lOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX1cIl0sXG4gICAgZ2V0Q29udGV4dEZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ob3ZlcmNhcmRcIl0sXG4gICAgZ2V0R3BnS2V5Rm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJHRVQgL3VzZXIvZ3BnX2tleXMve2dwZ19rZXlfaWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJnZXRHcGdLZXlGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgZ2V0R3BnS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9ncGdfa2V5cy97Z3BnX2tleV9pZH1cIl0sXG4gICAgZ2V0UHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJHRVQgL3VzZXIva2V5cy97a2V5X2lkfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwiZ2V0UHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGdldFB1YmxpY1NzaEtleUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIva2V5cy97a2V5X2lkfVwiXSxcbiAgICBnZXRTc2hTaWduaW5nS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL3NzaF9zaWduaW5nX2tleXMve3NzaF9zaWduaW5nX2tleV9pZH1cIixcbiAgICBdLFxuICAgIGxpc3Q6IFtcIkdFVCAvdXNlcnNcIl0sXG4gICAgbGlzdEF0dGVzdGF0aW9uczogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2F0dGVzdGF0aW9ucy97c3ViamVjdF9kaWdlc3R9XCJdLFxuICAgIGxpc3RBdHRlc3RhdGlvbnNCdWxrOiBbXG4gICAgICBcIlBPU1QgL3VzZXJzL3t1c2VybmFtZX0vYXR0ZXN0YXRpb25zL2J1bGstbGlzdHs/cGVyX3BhZ2UsYmVmb3JlLGFmdGVyfVwiLFxuICAgIF0sXG4gICAgbGlzdEJsb2NrZWRCeUF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL2Jsb2Nrc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwibGlzdEJsb2NrZWRCeUF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBsaXN0QmxvY2tlZEJ5QXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9ibG9ja3NcIl0sXG4gICAgbGlzdEVtYWlsc0ZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL2VtYWlsc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwibGlzdEVtYWlsc0ZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBsaXN0RW1haWxzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9lbWFpbHNcIl0sXG4gICAgbGlzdEZvbGxvd2VkQnlBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkdFVCAvdXNlci9mb2xsb3dpbmdcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImxpc3RGb2xsb3dlZEJ5QXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGxpc3RGb2xsb3dlZEJ5QXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9mb2xsb3dpbmdcIl0sXG4gICAgbGlzdEZvbGxvd2Vyc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvZm9sbG93ZXJzXCJdLFxuICAgIGxpc3RGb2xsb3dlcnNGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZm9sbG93ZXJzXCJdLFxuICAgIGxpc3RGb2xsb3dpbmdGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZm9sbG93aW5nXCJdLFxuICAgIGxpc3RHcGdLZXlzRm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJHRVQgL3VzZXIvZ3BnX2tleXNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImxpc3RHcGdLZXlzRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGxpc3RHcGdLZXlzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9ncGdfa2V5c1wiXSxcbiAgICBsaXN0R3BnS2V5c0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ncGdfa2V5c1wiXSxcbiAgICBsaXN0UHVibGljRW1haWxzRm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJHRVQgL3VzZXIvcHVibGljX2VtYWlsc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwibGlzdFB1YmxpY0VtYWlsc0ZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBsaXN0UHVibGljRW1haWxzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9wdWJsaWNfZW1haWxzXCJdLFxuICAgIGxpc3RQdWJsaWNLZXlzRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2tleXNcIl0sXG4gICAgbGlzdFB1YmxpY1NzaEtleXNGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkdFVCAvdXNlci9rZXlzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJsaXN0UHVibGljU3NoS2V5c0ZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBsaXN0UHVibGljU3NoS2V5c0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIva2V5c1wiXSxcbiAgICBsaXN0U29jaWFsQWNjb3VudHNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3NvY2lhbF9hY2NvdW50c1wiXSxcbiAgICBsaXN0U29jaWFsQWNjb3VudHNGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc29jaWFsX2FjY291bnRzXCJdLFxuICAgIGxpc3RTc2hTaWduaW5nS2V5c0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvc3NoX3NpZ25pbmdfa2V5c1wiXSxcbiAgICBsaXN0U3NoU2lnbmluZ0tleXNGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc3NoX3NpZ25pbmdfa2V5c1wiXSxcbiAgICBzZXRQcmltYXJ5RW1haWxWaXNpYmlsaXR5Rm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJQQVRDSCAvdXNlci9lbWFpbC92aXNpYmlsaXR5XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJzZXRQcmltYXJ5RW1haWxWaXNpYmlsaXR5Rm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIHNldFByaW1hcnlFbWFpbFZpc2liaWxpdHlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQQVRDSCAvdXNlci9lbWFpbC92aXNpYmlsaXR5XCIsXG4gICAgXSxcbiAgICB1bmJsb2NrOiBbXCJERUxFVEUgL3VzZXIvYmxvY2tzL3t1c2VybmFtZX1cIl0sXG4gICAgdW5mb2xsb3c6IFtcIkRFTEVURSAvdXNlci9mb2xsb3dpbmcve3VzZXJuYW1lfVwiXSxcbiAgICB1cGRhdGVBdXRoZW50aWNhdGVkOiBbXCJQQVRDSCAvdXNlclwiXSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVuZHBvaW50cztcbiIsICJpbXBvcnQgdHlwZSB7IE9jdG9raXQgfSBmcm9tIFwiQG9jdG9raXQvY29yZVwiO1xuaW1wb3J0IHR5cGUgeyBFbmRwb2ludE9wdGlvbnMsIFJlcXVlc3RQYXJhbWV0ZXJzLCBSb3V0ZSB9IGZyb20gXCJAb2N0b2tpdC90eXBlc1wiO1xuaW1wb3J0IEVORFBPSU5UUyBmcm9tIFwiLi9nZW5lcmF0ZWQvZW5kcG9pbnRzLmpzXCI7XG5pbXBvcnQgdHlwZSB7IFJlc3RFbmRwb2ludE1ldGhvZHMgfSBmcm9tIFwiLi9nZW5lcmF0ZWQvbWV0aG9kLXR5cGVzLmpzXCI7XG5pbXBvcnQgdHlwZSB7IEVuZHBvaW50RGVjb3JhdGlvbnMgfSBmcm9tIFwiLi90eXBlcy5qc1wiO1xuXG4vLyBUaGUgZm9sbG93aW5nIGNvZGUgd2FzIHJlZmFjdG9yZWQgaW46IGh0dHBzOi8vZ2l0aHViLmNvbS9vY3Rva2l0L3BsdWdpbi1yZXN0LWVuZHBvaW50LW1ldGhvZHMuanMvcHVsbC82MjJcbi8vIHRvIG9wdGltaXNlIHRoZSBydW50aW1lIHBlcmZvcm1hbmNlIG9mIE9jdG9raXQgaW5pdGlhbGl6YXRpb24uXG4vL1xuLy8gVGhpcyBvcHRpbWl6YXRpb24gaW52b2x2ZXMgdHdvIGtleSBjaGFuZ2VzOlxuLy8gMS4gUHJlLUNvbXB1dGF0aW9uOiBUaGUgZW5kcG9pbnQgbWV0aG9kcyBhcmUgcHJlLWNvbXB1dGVkIG9uY2UgYXQgbW9kdWxlIGxvYWRcbi8vICAgIHRpbWUgaW5zdGVhZCBvZiBlYWNoIGludm9jYXRpb24gb2YgYGVuZHBvaW50c1RvTWV0aG9kcygpYC5cbi8vIDIuIExhenkgaW5pdGlhbGl6YXRpb24gYW5kIGNhY2hpbmc6IFdlIHVzZSBhIFByb3h5IGZvciBlYWNoIHNjb3BlIHRvIG9ubHlcbi8vICAgIGluaXRpYWxpemUgbWV0aG9kcyB0aGF0IGFyZSBhY3R1YWxseSBjYWxsZWQuIFRoaXMgcmVkdWNlcyBydW50aW1lIG92ZXJoZWFkXG4vLyAgICBhcyB0aGUgaW5pdGlhbGl6YXRpb24gaW52b2x2ZXMgZGVlcCBtZXJnaW5nIG9mIG9iamVjdHMuIFRoZSBpbml0aWFsaXplZFxuLy8gICAgbWV0aG9kcyBhcmUgdGhlbiBjYWNoZWQgZm9yIGZ1dHVyZSB1c2UuXG5cbmNvbnN0IGVuZHBvaW50TWV0aG9kc01hcCA9IG5ldyBNYXAoKTtcbmZvciAoY29uc3QgW3Njb3BlLCBlbmRwb2ludHNdIG9mIE9iamVjdC5lbnRyaWVzKEVORFBPSU5UUykpIHtcbiAgZm9yIChjb25zdCBbbWV0aG9kTmFtZSwgZW5kcG9pbnRdIG9mIE9iamVjdC5lbnRyaWVzKGVuZHBvaW50cykpIHtcbiAgICBjb25zdCBbcm91dGUsIGRlZmF1bHRzLCBkZWNvcmF0aW9uc10gPSBlbmRwb2ludDtcbiAgICBjb25zdCBbbWV0aG9kLCB1cmxdID0gcm91dGUuc3BsaXQoLyAvKTtcbiAgICBjb25zdCBlbmRwb2ludERlZmF1bHRzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICB9LFxuICAgICAgZGVmYXVsdHMsXG4gICAgKTtcblxuICAgIGlmICghZW5kcG9pbnRNZXRob2RzTWFwLmhhcyhzY29wZSkpIHtcbiAgICAgIGVuZHBvaW50TWV0aG9kc01hcC5zZXQoc2NvcGUsIG5ldyBNYXAoKSk7XG4gICAgfVxuXG4gICAgZW5kcG9pbnRNZXRob2RzTWFwLmdldChzY29wZSkuc2V0KG1ldGhvZE5hbWUsIHtcbiAgICAgIHNjb3BlLFxuICAgICAgbWV0aG9kTmFtZSxcbiAgICAgIGVuZHBvaW50RGVmYXVsdHMsXG4gICAgICBkZWNvcmF0aW9ucyxcbiAgICB9KTtcbiAgfVxufVxuXG50eXBlIFByb3h5VGFyZ2V0ID0ge1xuICBvY3Rva2l0OiBPY3Rva2l0O1xuICBzY29wZTogc3RyaW5nO1xuICBjYWNoZTogUmVjb3JkPHN0cmluZywgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+O1xufTtcblxuY29uc3QgaGFuZGxlciA9IHtcbiAgaGFzKHsgc2NvcGUgfTogUHJveHlUYXJnZXQsIG1ldGhvZE5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBlbmRwb2ludE1ldGhvZHNNYXAuZ2V0KHNjb3BlKS5oYXMobWV0aG9kTmFtZSk7XG4gIH0sXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQ6IFByb3h5VGFyZ2V0LCBtZXRob2ROYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHRoaXMuZ2V0KHRhcmdldCwgbWV0aG9kTmFtZSksIC8vIGVuc3VyZXMgbWV0aG9kIGlzIGluIHRoZSBjYWNoZVxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIH07XG4gIH0sXG4gIGRlZmluZVByb3BlcnR5KFxuICAgIHRhcmdldDogUHJveHlUYXJnZXQsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nLFxuICAgIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcixcbiAgKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldC5jYWNoZSwgbWV0aG9kTmFtZSwgZGVzY3JpcHRvcik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5KHRhcmdldDogUHJveHlUYXJnZXQsIG1ldGhvZE5hbWU6IHN0cmluZykge1xuICAgIGRlbGV0ZSB0YXJnZXQuY2FjaGVbbWV0aG9kTmFtZV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIG93bktleXMoeyBzY29wZSB9OiBQcm94eVRhcmdldCkge1xuICAgIHJldHVybiBbLi4uZW5kcG9pbnRNZXRob2RzTWFwLmdldChzY29wZSkua2V5cygpXTtcbiAgfSxcbiAgc2V0KHRhcmdldDogUHJveHlUYXJnZXQsIG1ldGhvZE5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIHJldHVybiAodGFyZ2V0LmNhY2hlW21ldGhvZE5hbWVdID0gdmFsdWUpO1xuICB9LFxuICBnZXQoeyBvY3Rva2l0LCBzY29wZSwgY2FjaGUgfTogUHJveHlUYXJnZXQsIG1ldGhvZE5hbWU6IHN0cmluZykge1xuICAgIGlmIChjYWNoZVttZXRob2ROYW1lXSkge1xuICAgICAgcmV0dXJuIGNhY2hlW21ldGhvZE5hbWVdO1xuICAgIH1cblxuICAgIGNvbnN0IG1ldGhvZCA9IGVuZHBvaW50TWV0aG9kc01hcC5nZXQoc2NvcGUpLmdldChtZXRob2ROYW1lKTtcbiAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCB7IGVuZHBvaW50RGVmYXVsdHMsIGRlY29yYXRpb25zIH0gPSBtZXRob2Q7XG5cbiAgICBpZiAoZGVjb3JhdGlvbnMpIHtcbiAgICAgIGNhY2hlW21ldGhvZE5hbWVdID0gZGVjb3JhdGUoXG4gICAgICAgIG9jdG9raXQsXG4gICAgICAgIHNjb3BlLFxuICAgICAgICBtZXRob2ROYW1lLFxuICAgICAgICBlbmRwb2ludERlZmF1bHRzLFxuICAgICAgICBkZWNvcmF0aW9ucyxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlW21ldGhvZE5hbWVdID0gb2N0b2tpdC5yZXF1ZXN0LmRlZmF1bHRzKGVuZHBvaW50RGVmYXVsdHMpO1xuICAgIH1cblxuICAgIHJldHVybiBjYWNoZVttZXRob2ROYW1lXTtcbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRwb2ludHNUb01ldGhvZHMob2N0b2tpdDogT2N0b2tpdCk6IFJlc3RFbmRwb2ludE1ldGhvZHMge1xuICBjb25zdCBuZXdNZXRob2RzID0ge30gYXMgeyBba2V5OiBzdHJpbmddOiBvYmplY3QgfTtcblxuICBmb3IgKGNvbnN0IHNjb3BlIG9mIGVuZHBvaW50TWV0aG9kc01hcC5rZXlzKCkpIHtcbiAgICBuZXdNZXRob2RzW3Njb3BlXSA9IG5ldyBQcm94eSh7IG9jdG9raXQsIHNjb3BlLCBjYWNoZToge30gfSwgaGFuZGxlcik7XG4gIH1cblxuICByZXR1cm4gbmV3TWV0aG9kcyBhcyBSZXN0RW5kcG9pbnRNZXRob2RzO1xufVxuXG5mdW5jdGlvbiBkZWNvcmF0ZShcbiAgb2N0b2tpdDogT2N0b2tpdCxcbiAgc2NvcGU6IHN0cmluZyxcbiAgbWV0aG9kTmFtZTogc3RyaW5nLFxuICBkZWZhdWx0czogRW5kcG9pbnRPcHRpb25zLFxuICBkZWNvcmF0aW9uczogRW5kcG9pbnREZWNvcmF0aW9ucyxcbikge1xuICBjb25zdCByZXF1ZXN0V2l0aERlZmF1bHRzID0gb2N0b2tpdC5yZXF1ZXN0LmRlZmF1bHRzKGRlZmF1bHRzKTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBmdW5jdGlvbiB3aXRoRGVjb3JhdGlvbnMoXG4gICAgLi4uYXJnczogW1JvdXRlLCBSZXF1ZXN0UGFyYW1ldGVycz9dIHwgW0VuZHBvaW50T3B0aW9uc11cbiAgKSB7XG4gICAgLy8gQHRzLWlnbm9yZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI1NDg4XG4gICAgbGV0IG9wdGlvbnMgPSByZXF1ZXN0V2l0aERlZmF1bHRzLmVuZHBvaW50Lm1lcmdlKC4uLmFyZ3MpO1xuXG4gICAgLy8gVGhlcmUgYXJlIGN1cnJlbnRseSBubyBvdGhlciBkZWNvcmF0aW9ucyB0aGFuIGAubWFwVG9EYXRhYFxuICAgIGlmIChkZWNvcmF0aW9ucy5tYXBUb0RhdGEpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIGRhdGE6IG9wdGlvbnNbZGVjb3JhdGlvbnMubWFwVG9EYXRhXSxcbiAgICAgICAgW2RlY29yYXRpb25zLm1hcFRvRGF0YV06IHVuZGVmaW5lZCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlcXVlc3RXaXRoRGVmYXVsdHMob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGRlY29yYXRpb25zLnJlbmFtZWQpIHtcbiAgICAgIGNvbnN0IFtuZXdTY29wZSwgbmV3TWV0aG9kTmFtZV0gPSBkZWNvcmF0aW9ucy5yZW5hbWVkO1xuICAgICAgb2N0b2tpdC5sb2cud2FybihcbiAgICAgICAgYG9jdG9raXQuJHtzY29wZX0uJHttZXRob2ROYW1lfSgpIGhhcyBiZWVuIHJlbmFtZWQgdG8gb2N0b2tpdC4ke25ld1Njb3BlfS4ke25ld01ldGhvZE5hbWV9KClgLFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGRlY29yYXRpb25zLmRlcHJlY2F0ZWQpIHtcbiAgICAgIG9jdG9raXQubG9nLndhcm4oZGVjb3JhdGlvbnMuZGVwcmVjYXRlZCk7XG4gICAgfVxuXG4gICAgaWYgKGRlY29yYXRpb25zLnJlbmFtZWRQYXJhbWV0ZXJzKSB7XG4gICAgICAvLyBAdHMtaWdub3JlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjU0ODhcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSByZXF1ZXN0V2l0aERlZmF1bHRzLmVuZHBvaW50Lm1lcmdlKC4uLmFyZ3MpO1xuXG4gICAgICBmb3IgKGNvbnN0IFtuYW1lLCBhbGlhc10gb2YgT2JqZWN0LmVudHJpZXMoXG4gICAgICAgIGRlY29yYXRpb25zLnJlbmFtZWRQYXJhbWV0ZXJzLFxuICAgICAgKSkge1xuICAgICAgICBpZiAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgb2N0b2tpdC5sb2cud2FybihcbiAgICAgICAgICAgIGBcIiR7bmFtZX1cIiBwYXJhbWV0ZXIgaXMgZGVwcmVjYXRlZCBmb3IgXCJvY3Rva2l0LiR7c2NvcGV9LiR7bWV0aG9kTmFtZX0oKVwiLiBVc2UgXCIke2FsaWFzfVwiIGluc3RlYWRgLFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKCEoYWxpYXMgaW4gb3B0aW9ucykpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbYWxpYXNdID0gb3B0aW9uc1tuYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXF1ZXN0V2l0aERlZmF1bHRzKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIEB0cy1pZ25vcmUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yNTQ4OFxuICAgIHJldHVybiByZXF1ZXN0V2l0aERlZmF1bHRzKC4uLmFyZ3MpO1xuICB9XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHdpdGhEZWNvcmF0aW9ucywgcmVxdWVzdFdpdGhEZWZhdWx0cyk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBPY3Rva2l0IH0gZnJvbSBcIkBvY3Rva2l0L2NvcmVcIjtcblxuZXhwb3J0IHR5cGUgeyBSZXN0RW5kcG9pbnRNZXRob2RUeXBlcyB9IGZyb20gXCIuL2dlbmVyYXRlZC9wYXJhbWV0ZXJzLWFuZC1yZXNwb25zZS10eXBlcy5qc1wiO1xuaW1wb3J0IHsgVkVSU0lPTiB9IGZyb20gXCIuL3ZlcnNpb24uanNcIjtcbmltcG9ydCB0eXBlIHsgQXBpIH0gZnJvbSBcIi4vdHlwZXMuanNcIjtcbmltcG9ydCB7IGVuZHBvaW50c1RvTWV0aG9kcyB9IGZyb20gXCIuL2VuZHBvaW50cy10by1tZXRob2RzLmpzXCI7XG5cbi8vIEV4cG9ydCB0aGUgdHlwZSBmb3IgZG93bnN0cmVhbSB1c2VycyBpbiBvcmRlciB0byBmaXggYSBUeXBlU2NyaXB0IGVycm9yXG4vLyBUaGUgaW5mZXJyZWQgdHlwZSBvZiAnT2N0b2tpdCcgY2Fubm90IGJlIG5hbWVkIHdpdGhvdXQgYSByZWZlcmVuY2UgdG8gJy4uL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9wbHVnaW4tcmVzdC1lbmRwb2ludC1tZXRob2RzL2Rpc3QtdHlwZXMvdHlwZXMuanMnLiBUaGlzIGlzIGxpa2VseSBub3QgcG9ydGFibGUuIEEgdHlwZSBhbm5vdGF0aW9uIGlzIG5lY2Vzc2FyeS5cbmV4cG9ydCB0eXBlIHsgQXBpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiByZXN0RW5kcG9pbnRNZXRob2RzKG9jdG9raXQ6IE9jdG9raXQpOiBBcGkge1xuICBjb25zdCBhcGkgPSBlbmRwb2ludHNUb01ldGhvZHMob2N0b2tpdCk7XG4gIHJldHVybiB7XG4gICAgcmVzdDogYXBpLFxuICB9O1xufVxucmVzdEVuZHBvaW50TWV0aG9kcy5WRVJTSU9OID0gVkVSU0lPTjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxlZ2FjeVJlc3RFbmRwb2ludE1ldGhvZHMob2N0b2tpdDogT2N0b2tpdCk6IEFwaVtcInJlc3RcIl0gJiBBcGkge1xuICBjb25zdCBhcGkgPSBlbmRwb2ludHNUb01ldGhvZHMob2N0b2tpdCk7XG4gIHJldHVybiB7XG4gICAgLi4uYXBpLFxuICAgIHJlc3Q6IGFwaSxcbiAgfTtcbn1cbmxlZ2FjeVJlc3RFbmRwb2ludE1ldGhvZHMuVkVSU0lPTiA9IFZFUlNJT047XG4iLCAiY29uc3QgVkVSU0lPTiA9IFwiMjIuMC4xXCI7XG5leHBvcnQge1xuICBWRVJTSU9OXG59O1xuIiwgImltcG9ydCB7IE9jdG9raXQgYXMgQ29yZSB9IGZyb20gXCJAb2N0b2tpdC9jb3JlXCI7XG5pbXBvcnQgeyByZXF1ZXN0TG9nIH0gZnJvbSBcIkBvY3Rva2l0L3BsdWdpbi1yZXF1ZXN0LWxvZ1wiO1xuaW1wb3J0IHtcbiAgcGFnaW5hdGVSZXN0XG59IGZyb20gXCJAb2N0b2tpdC9wbHVnaW4tcGFnaW5hdGUtcmVzdFwiO1xuaW1wb3J0IHsgbGVnYWN5UmVzdEVuZHBvaW50TWV0aG9kcyB9IGZyb20gXCJAb2N0b2tpdC9wbHVnaW4tcmVzdC1lbmRwb2ludC1tZXRob2RzXCI7XG5pbXBvcnQgeyBWRVJTSU9OIH0gZnJvbSBcIi4vdmVyc2lvbi5qc1wiO1xuY29uc3QgT2N0b2tpdCA9IENvcmUucGx1Z2luKHJlcXVlc3RMb2csIGxlZ2FjeVJlc3RFbmRwb2ludE1ldGhvZHMsIHBhZ2luYXRlUmVzdCkuZGVmYXVsdHMoXG4gIHtcbiAgICB1c2VyQWdlbnQ6IGBvY3Rva2l0LXJlc3QuanMvJHtWRVJTSU9OfWBcbiAgfVxuKTtcbmV4cG9ydCB7XG4gIE9jdG9raXRcbn07XG4iLCAiaW1wb3J0IHsgT2N0b2tpdCB9IGZyb20gJ0BvY3Rva2l0L3Jlc3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2l0aHViQ2xpZW50KHRva2VuOiBzdHJpbmcpOiBPY3Rva2l0IHtcbiAgICByZXR1cm4gbmV3IE9jdG9raXQoeyBhdXRoOiB0b2tlbiB9KTtcbn1cbiIsICJpbXBvcnQgeyBPY3Rva2l0IH0gZnJvbSAnQG9jdG9raXQvcmVzdCc7XG5cbmludGVyZmFjZSBQdWJsaXNoUmVsZWFzZVBhcmFtcyB7XG4gICAgb3duZXI6IHN0cmluZztcbiAgICByZXBvOiBzdHJpbmc7XG4gICAgdGFnTmFtZTogc3RyaW5nO1xuICAgIGNvbW1pdFNoYTogc3RyaW5nO1xuICAgIHJlbGVhc2VOb3Rlczogc3RyaW5nO1xuICAgIGlzUHJlcmVsZWFzZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1Ymxpc2hSZWxlYXNlKG9jdG9raXQ6IE9jdG9raXQsIHBhcmFtczogUHVibGlzaFJlbGVhc2VQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IGRhdGE6IHRhZ0RhdGEgfSA9IGF3YWl0IG9jdG9raXQuZ2l0LmNyZWF0ZVRhZyh7XG4gICAgICAgIG93bmVyOiBwYXJhbXMub3duZXIsXG4gICAgICAgIHJlcG86IHBhcmFtcy5yZXBvLFxuICAgICAgICB0YWc6IHBhcmFtcy50YWdOYW1lLFxuICAgICAgICBtZXNzYWdlOiBwYXJhbXMudGFnTmFtZSxcbiAgICAgICAgb2JqZWN0OiBwYXJhbXMuY29tbWl0U2hhLFxuICAgICAgICB0eXBlOiAnY29tbWl0JyxcbiAgICAgICAgdGFnZ2VyOiB7XG4gICAgICAgICAgICBuYW1lOiAnZ2l0aHViLWFjdGlvbnNbYm90XScsXG4gICAgICAgICAgICBlbWFpbDogJzQxODk4MjgyK2dpdGh1Yi1hY3Rpb25zW2JvdF1AdXNlcnMubm9yZXBseS5naXRodWIuY29tJyxcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIGF3YWl0IG9jdG9raXQuZ2l0LmNyZWF0ZVJlZih7XG4gICAgICAgIG93bmVyOiBwYXJhbXMub3duZXIsXG4gICAgICAgIHJlcG86IHBhcmFtcy5yZXBvLFxuICAgICAgICByZWY6IGByZWZzL3RhZ3MvJHtwYXJhbXMudGFnTmFtZX1gLFxuICAgICAgICBzaGE6IHRhZ0RhdGEuc2hhLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgb2N0b2tpdC5yZXBvcy5jcmVhdGVSZWxlYXNlKHtcbiAgICAgICAgb3duZXI6IHBhcmFtcy5vd25lcixcbiAgICAgICAgcmVwbzogcGFyYW1zLnJlcG8sXG4gICAgICAgIHRhZ19uYW1lOiBwYXJhbXMudGFnTmFtZSxcbiAgICAgICAgYm9keTogcGFyYW1zLnJlbGVhc2VOb3RlcyxcbiAgICAgICAgcHJlcmVsZWFzZTogcGFyYW1zLmlzUHJlcmVsZWFzZSxcbiAgICAgICAgbWFrZV9sYXRlc3Q6IHBhcmFtcy5pc1ByZXJlbGVhc2UgPyAnZmFsc2UnIDogJ3RydWUnLFxuICAgIH0pO1xufVxuIiwgImltcG9ydCB7IGV4dHJhY3RQcmVyZWxlYXNlRGVsdGEsIGV4dHJhY3RTdGFibGVOb3RlcyB9IGZyb20gJ0AvY2hhbmdlbG9nLW1hbmFnZXInO1xuaW1wb3J0IHsgY3JlYXRlR2l0aHViQ2xpZW50IH0gZnJvbSAnQC9naXRodWItY2xpZW50JztcbmltcG9ydCB7IHB1Ymxpc2hSZWxlYXNlIH0gZnJvbSAnQC9yZWxlYXNlLXB1Ymxpc2hlcic7XG5pbXBvcnQgeyBhcHBlbmRGaWxlLCByZWFkRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJztcbmltcG9ydCBzZW12ZXIgZnJvbSAnc2VtdmVyJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IFtvd25lciwgcmVwb10gPSBwcm9jZXNzLmVudlsnR0lUSFVCX1JFUE9TSVRPUlknXSEuc3BsaXQoJy8nKTtcbiAgICBjb25zdCBjaGFuZ2Vsb2dQYXRoID0gcHJvY2Vzcy5lbnZbJ0NIQU5HRUxPR19QQVRIJ10gPz8gJ0NIQU5HRUxPRy5tZCc7XG5cbiAgICBjb25zdCBtYW5pZmVzdCA9IEpTT04ucGFyc2UoYXdhaXQgcmVhZEZpbGUoYCR7cHJvY2Vzcy5lbnZbJ0dJVEhVQl9XT1JLU1BBQ0UnXSF9L3BhY2thZ2UuanNvbmAsICd1dGYtOCcpKSBhcyB7XG4gICAgICAgIHZlcnNpb246IHN0cmluZztcbiAgICB9O1xuICAgIGNvbnN0IHZlcnNpb24gPSBtYW5pZmVzdC52ZXJzaW9uO1xuICAgIGNvbnN0IGlzUHJlcmVsZWFzZSA9IHNlbXZlci5wcmVyZWxlYXNlKHZlcnNpb24pICE9PSBudWxsO1xuXG4gICAgY29uc3QgcmVsZWFzZU5vdGVzID0gaXNQcmVyZWxlYXNlXG4gICAgICAgID8gYXdhaXQgZXh0cmFjdFByZXJlbGVhc2VEZWx0YShjaGFuZ2Vsb2dQYXRoKVxuICAgICAgICA6IGF3YWl0IGV4dHJhY3RTdGFibGVOb3RlcyhjaGFuZ2Vsb2dQYXRoKTtcblxuICAgIGNvbnN0IG9jdG9raXQgPSBjcmVhdGVHaXRodWJDbGllbnQocHJvY2Vzcy5lbnZbJ0dIX1RPS0VOJ10hKTtcblxuICAgIGF3YWl0IHB1Ymxpc2hSZWxlYXNlKG9jdG9raXQsIHtcbiAgICAgICAgb3duZXI6IG93bmVyISxcbiAgICAgICAgcmVwbzogcmVwbyEsXG4gICAgICAgIHRhZ05hbWU6IGB2JHt2ZXJzaW9ufWAsXG4gICAgICAgIGNvbW1pdFNoYTogcHJvY2Vzcy5lbnZbJ0dJVEhVQl9TSEEnXSEsXG4gICAgICAgIHJlbGVhc2VOb3RlcyxcbiAgICAgICAgaXNQcmVyZWxlYXNlLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgb3V0cHV0ID0gcHJvY2Vzcy5lbnZbJ0dJVEhVQl9PVVRQVVQnXSE7XG4gICAgYXdhaXQgYXBwZW5kRmlsZShvdXRwdXQsIGBpcy1wcmVyZWxlYXNlPSR7aXNQcmVyZWxlYXNlfVxcbmApO1xufVxuXG5pZiAocHJvY2Vzcy5hcmd2WzFdID09PSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpIHtcbiAgICBhd2FpdCBydW4oKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBLFFBQU0sYUFBYSxTQUFTQSxjQUFjO0FBQUEsSUFBRTtBQUM1QyxlQUFXLFlBQVksdUJBQU8sT0FBTyxJQUFJO0FBZ0J6QyxRQUFNLFVBQVU7QUFRaEIsUUFBTSxlQUFlO0FBU3JCLFFB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QUFzQixNQUFxQjtBQUN2QyxRQUFNLENBQUMsT0FBTyxJQUFJLElBQUksUUFBUSxJQUFJLG1CQUFtQixFQUFHLE1BQU0sR0FBRztBQUNqRSxRQUFNLGdCQUFnQixRQUFRLElBQUksZ0JBQWdCLEtBQUs7QUFFdkQsUUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNQSxVQUFTLEdBQUcsUUFBUSxJQUFJLGtCQUFrQixDQUFFLGlCQUFpQixPQUFPLENBQUM7QUFHdkcsUUFBTSxVQUFVLFNBQVM7QUFDekIsUUFBTSxlQUFlLGNBQUFDLFFBQU8sV0FBVyxPQUFPLE1BQU07QUFFcEQsUUFBTSxlQUFlLGVBQ2YsTUFBTSx1QkFBdUIsYUFBYSxJQUMxQyxNQUFNLG1CQUFtQixhQUFhO0FBRTVDLFFBQU0sVUFBVSxtQkFBbUIsUUFBUSxJQUFJLFVBQVUsQ0FBRTtBQUUzRCxRQUFNLGVBQWUsU0FBUztBQUFBLElBQzFCO0FBQUEsSUFDQTtBQUFBLElBQ0EsU0FBUyxJQUFJLE9BQU87QUFBQSxJQUNwQixXQUFXLFFBQVEsSUFBSSxZQUFZO0FBQUEsSUFDbkM7QUFBQSxJQUNBO0FBQUEsRUFDSixDQUFDO0FBRUQsUUFBTSxTQUFTLFFBQVEsSUFBSSxlQUFlO0FBQzFDLFFBQU0sV0FBVyxRQUFRLGlCQUFpQixZQUFZO0FBQUEsQ0FBSTtBQUM5RDtBQUVBLElBQUksUUFBUSxLQUFLLENBQUMsTUFBTSxjQUFjLFlBQVksR0FBRyxHQUFHO0FBQ3BELFFBQU0sSUFBSTtBQUNkOyIsCiAgIm5hbWVzIjogWyJOdWxsT2JqZWN0IiwgInBhcnNlIiwgInNhZmVQYXJzZSIsICJwYXJzZSIsICJwYXJzZSIsICJwYXJzZSIsICJwYXJzZSIsICJwYXJzZSIsICJwYXJzZSIsICJyZXF1aXJlX3ZhbGlkIiwgInJlcXVpcmVfc2VtdmVyIiwgInBhcnNlIiwgIm5hbWUiLCAibWV0aG9kIiwgImhvb2siLCAiaG9vayIsICJ2YWx1ZSIsICJ0ZXh0IiwgIlZFUlNJT04iLCAiaXNQbGFpbk9iamVjdCIsICJ3aXRoRGVmYXVsdHMiLCAiVkVSU0lPTiIsICJ3aXRoRGVmYXVsdHMiLCAicmVxdWVzdCIsICJlbmRwb2ludCIsICJWRVJTSU9OIiwgIm5vb3AiLCAiVkVSU0lPTiIsICJob29rIiwgImF1dGgiLCAiVkVSU0lPTiIsICJyZXF1ZXN0IiwgIlZFUlNJT04iLCAiVkVSU0lPTiIsICJWRVJTSU9OIiwgIlZFUlNJT04iLCAiZW5kcG9pbnQiLCAib3B0aW9ucyIsICJWRVJTSU9OIiwgIlZFUlNJT04iLCAiT2N0b2tpdCIsICJWRVJTSU9OIiwgIk9jdG9raXQiLCAicmVhZEZpbGUiLCAic2VtdmVyIl0KfQo=

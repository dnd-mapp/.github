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

// src/branch-manager/branch-manager.ts
async function mergeReleaseBranch(octokit, params) {
  try {
    await octokit.repos.merge({
      owner: params.owner,
      repo: params.repo,
      base: "main",
      head: params.releaseBranch,
      commit_message: `chore: merge ${params.releaseBranch} into main`
    });
  } catch (error) {
    if (error.status === 409) {
      throw new Error(
        `Merge conflict: cannot merge ${params.releaseBranch} into main. Resolve conflicts manually.`,
        { cause: error }
      );
    }
    throw error;
  }
}
async function deleteReleaseBranch(octokit, params) {
  await octokit.git.deleteRef({
    owner: params.owner,
    repo: params.repo,
    ref: `heads/${params.branch}`
  });
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

// src/scripts/merge-release-branch.ts
import { fileURLToPath } from "url";
async function run() {
  const [owner, repo] = process.env["GITHUB_REPOSITORY"].split("/");
  const releaseBranch = process.env["RELEASE_BRANCH"];
  const octokit = createGithubClient(process.env["GH_TOKEN"]);
  await mergeReleaseBranch(octokit, { owner, repo, releaseBranch });
  await deleteReleaseBranch(octokit, { owner, repo, branch: releaseBranch });
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtY29udGVudC10eXBlLXBhcnNlQDMuMC4wL25vZGVfbW9kdWxlcy9mYXN0LWNvbnRlbnQtdHlwZS1wYXJzZS9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9zcmMvYnJhbmNoLW1hbmFnZXIvYnJhbmNoLW1hbmFnZXIudHMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3VuaXZlcnNhbC11c2VyLWFnZW50QDcuMC4zL25vZGVfbW9kdWxlcy91bml2ZXJzYWwtdXNlci1hZ2VudC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYmVmb3JlLWFmdGVyLWhvb2tANC4wLjAvbm9kZV9tb2R1bGVzL2JlZm9yZS1hZnRlci1ob29rL2xpYi9yZWdpc3Rlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYmVmb3JlLWFmdGVyLWhvb2tANC4wLjAvbm9kZV9tb2R1bGVzL2JlZm9yZS1hZnRlci1ob29rL2xpYi9hZGQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JlZm9yZS1hZnRlci1ob29rQDQuMC4wL25vZGVfbW9kdWxlcy9iZWZvcmUtYWZ0ZXItaG9vay9saWIvcmVtb3ZlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9iZWZvcmUtYWZ0ZXItaG9va0A0LjAuMC9ub2RlX21vZHVsZXMvYmVmb3JlLWFmdGVyLWhvb2svaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K2VuZHBvaW50QDExLjAuMy9ub2RlX21vZHVsZXMvQG9jdG9raXQvZW5kcG9pbnQvZGlzdC1idW5kbGUvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3JlcXVlc3RAMTAuMC44L25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9yZXF1ZXN0L2Rpc3QtYnVuZGxlL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9qc29uLXdpdGgtYmlnaW50QDMuNS44L25vZGVfbW9kdWxlcy9qc29uLXdpdGgtYmlnaW50L2pzb24td2l0aC1iaWdpbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3JlcXVlc3QtZXJyb3JANy4xLjAvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3JlcXVlc3QtZXJyb3IvZGlzdC1zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K2dyYXBocWxAOS4wLjMvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L2dyYXBocWwvZGlzdC1idW5kbGUvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K2F1dGgtdG9rZW5ANi4wLjAvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L2F1dGgtdG9rZW4vZGlzdC1idW5kbGUvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K2NvcmVANy4wLjYvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L2NvcmUvZGlzdC1zcmMvdmVyc2lvbi5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9jdG9raXQrY29yZUA3LjAuNi9ub2RlX21vZHVsZXMvQG9jdG9raXQvY29yZS9kaXN0LXNyYy9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9jdG9raXQrcGx1Z2luLXJlcXVlc3QtbG9nQDYuMC4wX0BvY3Rva2l0K2NvcmVANy4wLjYvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3BsdWdpbi1yZXF1ZXN0LWxvZy9kaXN0LXNyYy92ZXJzaW9uLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtwbHVnaW4tcmVxdWVzdC1sb2dANi4wLjBfQG9jdG9raXQrY29yZUA3LjAuNi9ub2RlX21vZHVsZXMvQG9jdG9raXQvcGx1Z2luLXJlcXVlc3QtbG9nL2Rpc3Qtc3JjL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtwbHVnaW4tcGFnaW5hdGUtcmVzdEAxNC4wLjBfQG9jdG9raXQrY29yZUA3LjAuNi9ub2RlX21vZHVsZXMvQG9jdG9raXQvcGx1Z2luLXBhZ2luYXRlLXJlc3QvZGlzdC1idW5kbGUvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3BsdWdpbi1yZXN0LWVuZHBvaV84OGYxY2ZkY2NiY2QxMmY5YmQ4OWE2NjJhM2QwOGJjZS9ub2RlX21vZHVsZXMvQG9jdG9raXQvc3JjL3ZlcnNpb24udHMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3BsdWdpbi1yZXN0LWVuZHBvaV84OGYxY2ZkY2NiY2QxMmY5YmQ4OWE2NjJhM2QwOGJjZS9ub2RlX21vZHVsZXMvQG9jdG9raXQvc3JjL2dlbmVyYXRlZC9lbmRwb2ludHMudHMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3BsdWdpbi1yZXN0LWVuZHBvaV84OGYxY2ZkY2NiY2QxMmY5YmQ4OWE2NjJhM2QwOGJjZS9ub2RlX21vZHVsZXMvQG9jdG9raXQvc3JjL2VuZHBvaW50cy10by1tZXRob2RzLnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtwbHVnaW4tcmVzdC1lbmRwb2lfODhmMWNmZGNjYmNkMTJmOWJkODlhNjYyYTNkMDhiY2Uvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3NyYy9pbmRleC50cyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9jdG9raXQrcmVzdEAyMi4wLjEvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3Jlc3QvZGlzdC1zcmMvdmVyc2lvbi5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9jdG9raXQrcmVzdEAyMi4wLjEvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3Jlc3QvZGlzdC1zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vc3JjL2dpdGh1Yi1jbGllbnQvZ2l0aHViLWNsaWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvc2NyaXB0cy9tZXJnZS1yZWxlYXNlLWJyYW5jaC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IE51bGxPYmplY3QgPSBmdW5jdGlvbiBOdWxsT2JqZWN0ICgpIHsgfVxuTnVsbE9iamVjdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoICooIFwiO1wiIHBhcmFtZXRlciApIGluIFJGQyA3MjMxIHNlYyAzLjEuMS4xXG4gKlxuICogcGFyYW1ldGVyICAgICA9IHRva2VuIFwiPVwiICggdG9rZW4gLyBxdW90ZWQtc3RyaW5nIClcbiAqIHRva2VuICAgICAgICAgPSAxKnRjaGFyXG4gKiB0Y2hhciAgICAgICAgID0gXCIhXCIgLyBcIiNcIiAvIFwiJFwiIC8gXCIlXCIgLyBcIiZcIiAvIFwiJ1wiIC8gXCIqXCJcbiAqICAgICAgICAgICAgICAgLyBcIitcIiAvIFwiLVwiIC8gXCIuXCIgLyBcIl5cIiAvIFwiX1wiIC8gXCJgXCIgLyBcInxcIiAvIFwiflwiXG4gKiAgICAgICAgICAgICAgIC8gRElHSVQgLyBBTFBIQVxuICogICAgICAgICAgICAgICA7IGFueSBWQ0hBUiwgZXhjZXB0IGRlbGltaXRlcnNcbiAqIHF1b3RlZC1zdHJpbmcgPSBEUVVPVEUgKiggcWR0ZXh0IC8gcXVvdGVkLXBhaXIgKSBEUVVPVEVcbiAqIHFkdGV4dCAgICAgICAgPSBIVEFCIC8gU1AgLyAleDIxIC8gJXgyMy01QiAvICV4NUQtN0UgLyBvYnMtdGV4dFxuICogb2JzLXRleHQgICAgICA9ICV4ODAtRkZcbiAqIHF1b3RlZC1wYWlyICAgPSBcIlxcXCIgKCBIVEFCIC8gU1AgLyBWQ0hBUiAvIG9icy10ZXh0IClcbiAqL1xuY29uc3QgcGFyYW1SRSA9IC87ICooWyEjJCUmJyorLl5cXHdgfH4tXSspPShcIig/OltcXHZcXHUwMDIwXFx1MDAyMVxcdTAwMjMtXFx1MDA1YlxcdTAwNWQtXFx1MDA3ZVxcdTAwODAtXFx1MDBmZl18XFxcXFtcXHZcXHUwMDIwLVxcdTAwZmZdKSpcInxbISMkJSYnKisuXlxcd2B8fi1dKykgKi9ndVxuXG4vKipcbiAqIFJlZ0V4cCB0byBtYXRjaCBxdW90ZWQtcGFpciBpbiBSRkMgNzIzMCBzZWMgMy4yLjZcbiAqXG4gKiBxdW90ZWQtcGFpciA9IFwiXFxcIiAoIEhUQUIgLyBTUCAvIFZDSEFSIC8gb2JzLXRleHQgKVxuICogb2JzLXRleHQgICAgPSAleDgwLUZGXG4gKi9cbmNvbnN0IHF1b3RlZFBhaXJSRSA9IC9cXFxcKFtcXHZcXHUwMDIwLVxcdTAwZmZdKS9ndVxuXG4vKipcbiAqIFJlZ0V4cCB0byBtYXRjaCB0eXBlIGluIFJGQyA3MjMxIHNlYyAzLjEuMS4xXG4gKlxuICogbWVkaWEtdHlwZSA9IHR5cGUgXCIvXCIgc3VidHlwZVxuICogdHlwZSAgICAgICA9IHRva2VuXG4gKiBzdWJ0eXBlICAgID0gdG9rZW5cbiAqL1xuY29uc3QgbWVkaWFUeXBlUkUgPSAvXlshIyQlJicqKy5eXFx3fH4tXStcXC9bISMkJSYnKisuXlxcd3x+LV0rJC91XG5cbi8vIGRlZmF1bHQgQ29udGVudFR5cGUgdG8gcHJldmVudCByZXBlYXRlZCBvYmplY3QgY3JlYXRpb25cbmNvbnN0IGRlZmF1bHRDb250ZW50VHlwZSA9IHsgdHlwZTogJycsIHBhcmFtZXRlcnM6IG5ldyBOdWxsT2JqZWN0KCkgfVxuT2JqZWN0LmZyZWV6ZShkZWZhdWx0Q29udGVudFR5cGUucGFyYW1ldGVycylcbk9iamVjdC5mcmVlemUoZGVmYXVsdENvbnRlbnRUeXBlKVxuXG4vKipcbiAqIFBhcnNlIG1lZGlhIHR5cGUgdG8gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gaGVhZGVyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcGFyc2UgKGhlYWRlcikge1xuICBpZiAodHlwZW9mIGhlYWRlciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBoZWFkZXIgaXMgcmVxdWlyZWQgYW5kIG11c3QgYmUgYSBzdHJpbmcnKVxuICB9XG5cbiAgbGV0IGluZGV4ID0gaGVhZGVyLmluZGV4T2YoJzsnKVxuICBjb25zdCB0eXBlID0gaW5kZXggIT09IC0xXG4gICAgPyBoZWFkZXIuc2xpY2UoMCwgaW5kZXgpLnRyaW0oKVxuICAgIDogaGVhZGVyLnRyaW0oKVxuXG4gIGlmIChtZWRpYVR5cGVSRS50ZXN0KHR5cGUpID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgbWVkaWEgdHlwZScpXG4gIH1cblxuICBjb25zdCByZXN1bHQgPSB7XG4gICAgdHlwZTogdHlwZS50b0xvd2VyQ2FzZSgpLFxuICAgIHBhcmFtZXRlcnM6IG5ldyBOdWxsT2JqZWN0KClcbiAgfVxuXG4gIC8vIHBhcnNlIHBhcmFtZXRlcnNcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGxldCBrZXlcbiAgbGV0IG1hdGNoXG4gIGxldCB2YWx1ZVxuXG4gIHBhcmFtUkUubGFzdEluZGV4ID0gaW5kZXhcblxuICB3aGlsZSAoKG1hdGNoID0gcGFyYW1SRS5leGVjKGhlYWRlcikpKSB7XG4gICAgaWYgKG1hdGNoLmluZGV4ICE9PSBpbmRleCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBwYXJhbWV0ZXIgZm9ybWF0JylcbiAgICB9XG5cbiAgICBpbmRleCArPSBtYXRjaFswXS5sZW5ndGhcbiAgICBrZXkgPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpXG4gICAgdmFsdWUgPSBtYXRjaFsyXVxuXG4gICAgaWYgKHZhbHVlWzBdID09PSAnXCInKSB7XG4gICAgICAvLyByZW1vdmUgcXVvdGVzIGFuZCBlc2NhcGVzXG4gICAgICB2YWx1ZSA9IHZhbHVlXG4gICAgICAgIC5zbGljZSgxLCB2YWx1ZS5sZW5ndGggLSAxKVxuXG4gICAgICBxdW90ZWRQYWlyUkUudGVzdCh2YWx1ZSkgJiYgKHZhbHVlID0gdmFsdWUucmVwbGFjZShxdW90ZWRQYWlyUkUsICckMScpKVxuICAgIH1cblxuICAgIHJlc3VsdC5wYXJhbWV0ZXJzW2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgaWYgKGluZGV4ICE9PSBoZWFkZXIubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBwYXJhbWV0ZXIgZm9ybWF0JylcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gc2FmZVBhcnNlIChoZWFkZXIpIHtcbiAgaWYgKHR5cGVvZiBoZWFkZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRDb250ZW50VHlwZVxuICB9XG5cbiAgbGV0IGluZGV4ID0gaGVhZGVyLmluZGV4T2YoJzsnKVxuICBjb25zdCB0eXBlID0gaW5kZXggIT09IC0xXG4gICAgPyBoZWFkZXIuc2xpY2UoMCwgaW5kZXgpLnRyaW0oKVxuICAgIDogaGVhZGVyLnRyaW0oKVxuXG4gIGlmIChtZWRpYVR5cGVSRS50ZXN0KHR5cGUpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBkZWZhdWx0Q29udGVudFR5cGVcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICB0eXBlOiB0eXBlLnRvTG93ZXJDYXNlKCksXG4gICAgcGFyYW1ldGVyczogbmV3IE51bGxPYmplY3QoKVxuICB9XG5cbiAgLy8gcGFyc2UgcGFyYW1ldGVyc1xuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgbGV0IGtleVxuICBsZXQgbWF0Y2hcbiAgbGV0IHZhbHVlXG5cbiAgcGFyYW1SRS5sYXN0SW5kZXggPSBpbmRleFxuXG4gIHdoaWxlICgobWF0Y2ggPSBwYXJhbVJFLmV4ZWMoaGVhZGVyKSkpIHtcbiAgICBpZiAobWF0Y2guaW5kZXggIT09IGluZGV4KSB7XG4gICAgICByZXR1cm4gZGVmYXVsdENvbnRlbnRUeXBlXG4gICAgfVxuXG4gICAgaW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoXG4gICAga2V5ID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKVxuICAgIHZhbHVlID0gbWF0Y2hbMl1cblxuICAgIGlmICh2YWx1ZVswXSA9PT0gJ1wiJykge1xuICAgICAgLy8gcmVtb3ZlIHF1b3RlcyBhbmQgZXNjYXBlc1xuICAgICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAuc2xpY2UoMSwgdmFsdWUubGVuZ3RoIC0gMSlcblxuICAgICAgcXVvdGVkUGFpclJFLnRlc3QodmFsdWUpICYmICh2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocXVvdGVkUGFpclJFLCAnJDEnKSlcbiAgICB9XG5cbiAgICByZXN1bHQucGFyYW1ldGVyc1trZXldID0gdmFsdWVcbiAgfVxuXG4gIGlmIChpbmRleCAhPT0gaGVhZGVyLmxlbmd0aCkge1xuICAgIHJldHVybiBkZWZhdWx0Q29udGVudFR5cGVcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IHsgcGFyc2UsIHNhZmVQYXJzZSB9XG5tb2R1bGUuZXhwb3J0cy5wYXJzZSA9IHBhcnNlXG5tb2R1bGUuZXhwb3J0cy5zYWZlUGFyc2UgPSBzYWZlUGFyc2Vcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHRDb250ZW50VHlwZSA9IGRlZmF1bHRDb250ZW50VHlwZVxuIiwgImltcG9ydCB7IE9jdG9raXQgfSBmcm9tICdAb2N0b2tpdC9yZXN0JztcblxuaW50ZXJmYWNlIENyZWF0ZVJlbGVhc2VCcmFuY2hQYXJhbXMge1xuICAgIG93bmVyOiBzdHJpbmc7XG4gICAgcmVwbzogc3RyaW5nO1xuICAgIGJyYW5jaE5hbWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENvbW1pdEZpbGVzUGFyYW1zIHtcbiAgICBvd25lcjogc3RyaW5nO1xuICAgIHJlcG86IHN0cmluZztcbiAgICBicmFuY2g6IHN0cmluZztcbiAgICBmaWxlczogeyBwYXRoOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nIH1bXTtcbn1cblxuaW50ZXJmYWNlIE1lcmdlUmVsZWFzZUJyYW5jaFBhcmFtcyB7XG4gICAgb3duZXI6IHN0cmluZztcbiAgICByZXBvOiBzdHJpbmc7XG4gICAgcmVsZWFzZUJyYW5jaDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRGVsZXRlUmVsZWFzZUJyYW5jaFBhcmFtcyB7XG4gICAgb3duZXI6IHN0cmluZztcbiAgICByZXBvOiBzdHJpbmc7XG4gICAgYnJhbmNoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQnJhbmNoKG9jdG9raXQ6IE9jdG9raXQsIHBhcmFtczogQ3JlYXRlUmVsZWFzZUJyYW5jaFBhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgZGF0YTogcmVmIH0gPSBhd2FpdCBvY3Rva2l0LmdpdC5nZXRSZWYoe1xuICAgICAgICBvd25lcjogcGFyYW1zLm93bmVyLFxuICAgICAgICByZXBvOiBwYXJhbXMucmVwbyxcbiAgICAgICAgcmVmOiAnaGVhZHMvbWFpbicsXG4gICAgfSk7XG5cbiAgICBhd2FpdCBvY3Rva2l0LmdpdC5jcmVhdGVSZWYoe1xuICAgICAgICBvd25lcjogcGFyYW1zLm93bmVyLFxuICAgICAgICByZXBvOiBwYXJhbXMucmVwbyxcbiAgICAgICAgcmVmOiBgcmVmcy9oZWFkcy8ke3BhcmFtcy5icmFuY2hOYW1lfWAsXG4gICAgICAgIHNoYTogcmVmLm9iamVjdC5zaGEsXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb21taXRGaWxlcyhvY3Rva2l0OiBPY3Rva2l0LCBwYXJhbXM6IENvbW1pdEZpbGVzUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZm9yIChjb25zdCBmaWxlIG9mIHBhcmFtcy5maWxlcykge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IG9jdG9raXQucmVwb3MuZ2V0Q29udGVudCh7XG4gICAgICAgICAgICBvd25lcjogcGFyYW1zLm93bmVyLFxuICAgICAgICAgICAgcmVwbzogcGFyYW1zLnJlcG8sXG4gICAgICAgICAgICBwYXRoOiBmaWxlLnBhdGgsXG4gICAgICAgICAgICByZWY6IHBhcmFtcy5icmFuY2gsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGZpbGVTaGEgPSAoZGF0YSBhcyB7IHNoYTogc3RyaW5nIH0pLnNoYTtcblxuICAgICAgICBhd2FpdCBvY3Rva2l0LnJlcG9zLmNyZWF0ZU9yVXBkYXRlRmlsZUNvbnRlbnRzKHtcbiAgICAgICAgICAgIG93bmVyOiBwYXJhbXMub3duZXIsXG4gICAgICAgICAgICByZXBvOiBwYXJhbXMucmVwbyxcbiAgICAgICAgICAgIHBhdGg6IGZpbGUucGF0aCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGZpbGUubWVzc2FnZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IEJ1ZmZlci5mcm9tKGZpbGUuY29udGVudCkudG9TdHJpbmcoJ2Jhc2U2NCcpLFxuICAgICAgICAgICAgc2hhOiBmaWxlU2hhLFxuICAgICAgICAgICAgYnJhbmNoOiBwYXJhbXMuYnJhbmNoLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtZXJnZVJlbGVhc2VCcmFuY2gob2N0b2tpdDogT2N0b2tpdCwgcGFyYW1zOiBNZXJnZVJlbGVhc2VCcmFuY2hQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBvY3Rva2l0LnJlcG9zLm1lcmdlKHtcbiAgICAgICAgICAgIG93bmVyOiBwYXJhbXMub3duZXIsXG4gICAgICAgICAgICByZXBvOiBwYXJhbXMucmVwbyxcbiAgICAgICAgICAgIGJhc2U6ICdtYWluJyxcbiAgICAgICAgICAgIGhlYWQ6IHBhcmFtcy5yZWxlYXNlQnJhbmNoLFxuICAgICAgICAgICAgY29tbWl0X21lc3NhZ2U6IGBjaG9yZTogbWVyZ2UgJHtwYXJhbXMucmVsZWFzZUJyYW5jaH0gaW50byBtYWluYCxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKChlcnJvciBhcyB7IHN0YXR1cz86IG51bWJlciB9KS5zdGF0dXMgPT09IDQwOSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBNZXJnZSBjb25mbGljdDogY2Fubm90IG1lcmdlICR7cGFyYW1zLnJlbGVhc2VCcmFuY2h9IGludG8gbWFpbi4gUmVzb2x2ZSBjb25mbGljdHMgbWFudWFsbHkuYCxcbiAgICAgICAgICAgICAgICB7IGNhdXNlOiBlcnJvciB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVJlbGVhc2VCcmFuY2gob2N0b2tpdDogT2N0b2tpdCwgcGFyYW1zOiBEZWxldGVSZWxlYXNlQnJhbmNoUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgb2N0b2tpdC5naXQuZGVsZXRlUmVmKHtcbiAgICAgICAgb3duZXI6IHBhcmFtcy5vd25lcixcbiAgICAgICAgcmVwbzogcGFyYW1zLnJlcG8sXG4gICAgICAgIHJlZjogYGhlYWRzLyR7cGFyYW1zLmJyYW5jaH1gLFxuICAgIH0pO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyQWdlbnQoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSBcIm9iamVjdFwiICYmIFwidXNlckFnZW50XCIgaW4gbmF2aWdhdG9yKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgcHJvY2Vzcy52ZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYE5vZGUuanMvJHtwcm9jZXNzLnZlcnNpb24uc3Vic3RyKDEpfSAoJHtwcm9jZXNzLnBsYXRmb3JtfTsgJHtcbiAgICAgIHByb2Nlc3MuYXJjaFxuICAgIH0pYDtcbiAgfVxuXG4gIHJldHVybiBcIjxlbnZpcm9ubWVudCB1bmRldGVjdGFibGU+XCI7XG59XG4iLCAiLy8gQHRzLWNoZWNrXG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlcihzdGF0ZSwgbmFtZSwgbWV0aG9kLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgbWV0aG9kICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJtZXRob2QgZm9yIGJlZm9yZSBob29rIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5hbWUpKSB7XG4gICAgcmV0dXJuIG5hbWUucmV2ZXJzZSgpLnJlZHVjZSgoY2FsbGJhY2ssIG5hbWUpID0+IHtcbiAgICAgIHJldHVybiByZWdpc3Rlci5iaW5kKG51bGwsIHN0YXRlLCBuYW1lLCBjYWxsYmFjaywgb3B0aW9ucyk7XG4gICAgfSwgbWV0aG9kKSgpO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgIGlmICghc3RhdGUucmVnaXN0cnlbbmFtZV0pIHtcbiAgICAgIHJldHVybiBtZXRob2Qob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlLnJlZ2lzdHJ5W25hbWVdLnJlZHVjZSgobWV0aG9kLCByZWdpc3RlcmVkKSA9PiB7XG4gICAgICByZXR1cm4gcmVnaXN0ZXJlZC5ob29rLmJpbmQobnVsbCwgbWV0aG9kLCBvcHRpb25zKTtcbiAgICB9LCBtZXRob2QpKCk7XG4gIH0pO1xufVxuIiwgIi8vIEB0cy1jaGVja1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkSG9vayhzdGF0ZSwga2luZCwgbmFtZSwgaG9vaykge1xuICBjb25zdCBvcmlnID0gaG9vaztcbiAgaWYgKCFzdGF0ZS5yZWdpc3RyeVtuYW1lXSkge1xuICAgIHN0YXRlLnJlZ2lzdHJ5W25hbWVdID0gW107XG4gIH1cblxuICBpZiAoa2luZCA9PT0gXCJiZWZvcmVcIikge1xuICAgIGhvb2sgPSAobWV0aG9kLCBvcHRpb25zKSA9PiB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgLnRoZW4ob3JpZy5iaW5kKG51bGwsIG9wdGlvbnMpKVxuICAgICAgICAudGhlbihtZXRob2QuYmluZChudWxsLCBvcHRpb25zKSk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChraW5kID09PSBcImFmdGVyXCIpIHtcbiAgICBob29rID0gKG1ldGhvZCwgb3B0aW9ucykgPT4ge1xuICAgICAgbGV0IHJlc3VsdDtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAudGhlbihtZXRob2QuYmluZChudWxsLCBvcHRpb25zKSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdF8pID0+IHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHRfO1xuICAgICAgICAgIHJldHVybiBvcmlnKHJlc3VsdCwgb3B0aW9ucyk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKGtpbmQgPT09IFwiZXJyb3JcIikge1xuICAgIGhvb2sgPSAobWV0aG9kLCBvcHRpb25zKSA9PiB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgLnRoZW4obWV0aG9kLmJpbmQobnVsbCwgb3B0aW9ucykpXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZXR1cm4gb3JpZyhlcnJvciwgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBzdGF0ZS5yZWdpc3RyeVtuYW1lXS5wdXNoKHtcbiAgICBob29rOiBob29rLFxuICAgIG9yaWc6IG9yaWcsXG4gIH0pO1xufVxuIiwgIi8vIEB0cy1jaGVja1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSG9vayhzdGF0ZSwgbmFtZSwgbWV0aG9kKSB7XG4gIGlmICghc3RhdGUucmVnaXN0cnlbbmFtZV0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBpbmRleCA9IHN0YXRlLnJlZ2lzdHJ5W25hbWVdXG4gICAgLm1hcCgocmVnaXN0ZXJlZCkgPT4ge1xuICAgICAgcmV0dXJuIHJlZ2lzdGVyZWQub3JpZztcbiAgICB9KVxuICAgIC5pbmRleE9mKG1ldGhvZCk7XG5cbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRlLnJlZ2lzdHJ5W25hbWVdLnNwbGljZShpbmRleCwgMSk7XG59XG4iLCAiLy8gQHRzLWNoZWNrXG5cbmltcG9ydCB7IHJlZ2lzdGVyIH0gZnJvbSBcIi4vbGliL3JlZ2lzdGVyLmpzXCI7XG5pbXBvcnQgeyBhZGRIb29rIH0gZnJvbSBcIi4vbGliL2FkZC5qc1wiO1xuaW1wb3J0IHsgcmVtb3ZlSG9vayB9IGZyb20gXCIuL2xpYi9yZW1vdmUuanNcIjtcblxuLy8gYmluZCB3aXRoIGFycmF5IG9mIGFyZ3VtZW50czogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxNzkyOTEzXG5jb25zdCBiaW5kID0gRnVuY3Rpb24uYmluZDtcbmNvbnN0IGJpbmRhYmxlID0gYmluZC5iaW5kKGJpbmQpO1xuXG5mdW5jdGlvbiBiaW5kQXBpKGhvb2ssIHN0YXRlLCBuYW1lKSB7XG4gIGNvbnN0IHJlbW92ZUhvb2tSZWYgPSBiaW5kYWJsZShyZW1vdmVIb29rLCBudWxsKS5hcHBseShcbiAgICBudWxsLFxuICAgIG5hbWUgPyBbc3RhdGUsIG5hbWVdIDogW3N0YXRlXVxuICApO1xuICBob29rLmFwaSA9IHsgcmVtb3ZlOiByZW1vdmVIb29rUmVmIH07XG4gIGhvb2sucmVtb3ZlID0gcmVtb3ZlSG9va1JlZjtcbiAgW1wiYmVmb3JlXCIsIFwiZXJyb3JcIiwgXCJhZnRlclwiLCBcIndyYXBcIl0uZm9yRWFjaCgoa2luZCkgPT4ge1xuICAgIGNvbnN0IGFyZ3MgPSBuYW1lID8gW3N0YXRlLCBraW5kLCBuYW1lXSA6IFtzdGF0ZSwga2luZF07XG4gICAgaG9va1traW5kXSA9IGhvb2suYXBpW2tpbmRdID0gYmluZGFibGUoYWRkSG9vaywgbnVsbCkuYXBwbHkobnVsbCwgYXJncyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBTaW5ndWxhcigpIHtcbiAgY29uc3Qgc2luZ3VsYXJIb29rTmFtZSA9IFN5bWJvbChcIlNpbmd1bGFyXCIpO1xuICBjb25zdCBzaW5ndWxhckhvb2tTdGF0ZSA9IHtcbiAgICByZWdpc3RyeToge30sXG4gIH07XG4gIGNvbnN0IHNpbmd1bGFySG9vayA9IHJlZ2lzdGVyLmJpbmQobnVsbCwgc2luZ3VsYXJIb29rU3RhdGUsIHNpbmd1bGFySG9va05hbWUpO1xuICBiaW5kQXBpKHNpbmd1bGFySG9vaywgc2luZ3VsYXJIb29rU3RhdGUsIHNpbmd1bGFySG9va05hbWUpO1xuICByZXR1cm4gc2luZ3VsYXJIb29rO1xufVxuXG5mdW5jdGlvbiBDb2xsZWN0aW9uKCkge1xuICBjb25zdCBzdGF0ZSA9IHtcbiAgICByZWdpc3RyeToge30sXG4gIH07XG5cbiAgY29uc3QgaG9vayA9IHJlZ2lzdGVyLmJpbmQobnVsbCwgc3RhdGUpO1xuICBiaW5kQXBpKGhvb2ssIHN0YXRlKTtcblxuICByZXR1cm4gaG9vaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBTaW5ndWxhciwgQ29sbGVjdGlvbiB9O1xuIiwgIi8vIHBrZy9kaXN0LXNyYy9kZWZhdWx0cy5qc1xuaW1wb3J0IHsgZ2V0VXNlckFnZW50IH0gZnJvbSBcInVuaXZlcnNhbC11c2VyLWFnZW50XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy92ZXJzaW9uLmpzXG52YXIgVkVSU0lPTiA9IFwiMC4wLjAtZGV2ZWxvcG1lbnRcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL2RlZmF1bHRzLmpzXG52YXIgdXNlckFnZW50ID0gYG9jdG9raXQtZW5kcG9pbnQuanMvJHtWRVJTSU9OfSAke2dldFVzZXJBZ2VudCgpfWA7XG52YXIgREVGQVVMVFMgPSB7XG4gIG1ldGhvZDogXCJHRVRcIixcbiAgYmFzZVVybDogXCJodHRwczovL2FwaS5naXRodWIuY29tXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uXCIsXG4gICAgXCJ1c2VyLWFnZW50XCI6IHVzZXJBZ2VudFxuICB9LFxuICBtZWRpYVR5cGU6IHtcbiAgICBmb3JtYXQ6IFwiXCJcbiAgfVxufTtcblxuLy8gcGtnL2Rpc3Qtc3JjL3V0aWwvbG93ZXJjYXNlLWtleXMuanNcbmZ1bmN0aW9uIGxvd2VyY2FzZUtleXMob2JqZWN0KSB7XG4gIGlmICghb2JqZWN0KSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnJlZHVjZSgobmV3T2JqLCBrZXkpID0+IHtcbiAgICBuZXdPYmpba2V5LnRvTG93ZXJDYXNlKCldID0gb2JqZWN0W2tleV07XG4gICAgcmV0dXJuIG5ld09iajtcbiAgfSwge30pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC9pcy1wbGFpbi1vYmplY3QuanNcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiB8fCB2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIGNvbnN0IEN0b3IgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvdG8sIFwiY29uc3RydWN0b3JcIikgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PT0gXCJmdW5jdGlvblwiICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmIEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsKEN0b3IpID09PSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCh2YWx1ZSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy91dGlsL21lcmdlLWRlZXAuanNcbmZ1bmN0aW9uIG1lcmdlRGVlcChkZWZhdWx0cywgb3B0aW9ucykge1xuICBjb25zdCByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cyk7XG4gIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChpc1BsYWluT2JqZWN0KG9wdGlvbnNba2V5XSkpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZWZhdWx0cykpIE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7IFtrZXldOiBvcHRpb25zW2tleV0gfSk7XG4gICAgICBlbHNlIHJlc3VsdFtrZXldID0gbWVyZ2VEZWVwKGRlZmF1bHRzW2tleV0sIG9wdGlvbnNba2V5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7IFtrZXldOiBvcHRpb25zW2tleV0gfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3V0aWwvcmVtb3ZlLXVuZGVmaW5lZC1wcm9wZXJ0aWVzLmpzXG5mdW5jdGlvbiByZW1vdmVVbmRlZmluZWRQcm9wZXJ0aWVzKG9iaikge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBpZiAob2JqW2tleV0gPT09IHZvaWQgMCkge1xuICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvbWVyZ2UuanNcbmZ1bmN0aW9uIG1lcmdlKGRlZmF1bHRzLCByb3V0ZSwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHJvdXRlID09PSBcInN0cmluZ1wiKSB7XG4gICAgbGV0IFttZXRob2QsIHVybF0gPSByb3V0ZS5zcGxpdChcIiBcIik7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odXJsID8geyBtZXRob2QsIHVybCB9IDogeyB1cmw6IG1ldGhvZCB9LCBvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgcm91dGUpO1xuICB9XG4gIG9wdGlvbnMuaGVhZGVycyA9IGxvd2VyY2FzZUtleXMob3B0aW9ucy5oZWFkZXJzKTtcbiAgcmVtb3ZlVW5kZWZpbmVkUHJvcGVydGllcyhvcHRpb25zKTtcbiAgcmVtb3ZlVW5kZWZpbmVkUHJvcGVydGllcyhvcHRpb25zLmhlYWRlcnMpO1xuICBjb25zdCBtZXJnZWRPcHRpb25zID0gbWVyZ2VEZWVwKGRlZmF1bHRzIHx8IHt9LCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMudXJsID09PSBcIi9ncmFwaHFsXCIpIHtcbiAgICBpZiAoZGVmYXVsdHMgJiYgZGVmYXVsdHMubWVkaWFUeXBlLnByZXZpZXdzPy5sZW5ndGgpIHtcbiAgICAgIG1lcmdlZE9wdGlvbnMubWVkaWFUeXBlLnByZXZpZXdzID0gZGVmYXVsdHMubWVkaWFUeXBlLnByZXZpZXdzLmZpbHRlcihcbiAgICAgICAgKHByZXZpZXcpID0+ICFtZXJnZWRPcHRpb25zLm1lZGlhVHlwZS5wcmV2aWV3cy5pbmNsdWRlcyhwcmV2aWV3KVxuICAgICAgKS5jb25jYXQobWVyZ2VkT3B0aW9ucy5tZWRpYVR5cGUucHJldmlld3MpO1xuICAgIH1cbiAgICBtZXJnZWRPcHRpb25zLm1lZGlhVHlwZS5wcmV2aWV3cyA9IChtZXJnZWRPcHRpb25zLm1lZGlhVHlwZS5wcmV2aWV3cyB8fCBbXSkubWFwKChwcmV2aWV3KSA9PiBwcmV2aWV3LnJlcGxhY2UoLy1wcmV2aWV3LywgXCJcIikpO1xuICB9XG4gIHJldHVybiBtZXJnZWRPcHRpb25zO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC9hZGQtcXVlcnktcGFyYW1ldGVycy5qc1xuZnVuY3Rpb24gYWRkUXVlcnlQYXJhbWV0ZXJzKHVybCwgcGFyYW1ldGVycykge1xuICBjb25zdCBzZXBhcmF0b3IgPSAvXFw/Ly50ZXN0KHVybCkgPyBcIiZcIiA6IFwiP1wiO1xuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpO1xuICBpZiAobmFtZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICByZXR1cm4gdXJsICsgc2VwYXJhdG9yICsgbmFtZXMubWFwKChuYW1lKSA9PiB7XG4gICAgaWYgKG5hbWUgPT09IFwicVwiKSB7XG4gICAgICByZXR1cm4gXCJxPVwiICsgcGFyYW1ldGVycy5xLnNwbGl0KFwiK1wiKS5tYXAoZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKFwiK1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIGAke25hbWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtZXRlcnNbbmFtZV0pfWA7XG4gIH0pLmpvaW4oXCImXCIpO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC9leHRyYWN0LXVybC12YXJpYWJsZS1uYW1lcy5qc1xudmFyIHVybFZhcmlhYmxlUmVnZXggPSAvXFx7W157fX1dK1xcfS9nO1xuZnVuY3Rpb24gcmVtb3ZlTm9uQ2hhcnModmFyaWFibGVOYW1lKSB7XG4gIHJldHVybiB2YXJpYWJsZU5hbWUucmVwbGFjZSgvKD86XlxcVyspfCg/Oig/PCFcXFcpXFxXKyQpL2csIFwiXCIpLnNwbGl0KC8sLyk7XG59XG5mdW5jdGlvbiBleHRyYWN0VXJsVmFyaWFibGVOYW1lcyh1cmwpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHVybC5tYXRjaCh1cmxWYXJpYWJsZVJlZ2V4KTtcbiAgaWYgKCFtYXRjaGVzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBtYXRjaGVzLm1hcChyZW1vdmVOb25DaGFycykucmVkdWNlKChhLCBiKSA9PiBhLmNvbmNhdChiKSwgW10pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC9vbWl0LmpzXG5mdW5jdGlvbiBvbWl0KG9iamVjdCwga2V5c1RvT21pdCkge1xuICBjb25zdCByZXN1bHQgPSB7IF9fcHJvdG9fXzogbnVsbCB9O1xuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmplY3QpKSB7XG4gICAgaWYgKGtleXNUb09taXQuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBvYmplY3Rba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3V0aWwvdXJsLXRlbXBsYXRlLmpzXG5mdW5jdGlvbiBlbmNvZGVSZXNlcnZlZChzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdCgvKCVbMC05QS1GYS1mXXsyfSkvZykubWFwKGZ1bmN0aW9uKHBhcnQpIHtcbiAgICBpZiAoIS8lWzAtOUEtRmEtZl0vLnRlc3QocGFydCkpIHtcbiAgICAgIHBhcnQgPSBlbmNvZGVVUkkocGFydCkucmVwbGFjZSgvJTVCL2csIFwiW1wiKS5yZXBsYWNlKC8lNUQvZywgXCJdXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcGFydDtcbiAgfSkuam9pbihcIlwiKTtcbn1cbmZ1bmN0aW9uIGVuY29kZVVucmVzZXJ2ZWQoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKSpdL2csIGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gXCIlXCIgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlLCBrZXkpIHtcbiAgdmFsdWUgPSBvcGVyYXRvciA9PT0gXCIrXCIgfHwgb3BlcmF0b3IgPT09IFwiI1wiID8gZW5jb2RlUmVzZXJ2ZWQodmFsdWUpIDogZW5jb2RlVW5yZXNlcnZlZCh2YWx1ZSk7XG4gIGlmIChrZXkpIHtcbiAgICByZXR1cm4gZW5jb2RlVW5yZXNlcnZlZChrZXkpICsgXCI9XCIgKyB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZvaWQgMCAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzS2V5T3BlcmF0b3Iob3BlcmF0b3IpIHtcbiAgcmV0dXJuIG9wZXJhdG9yID09PSBcIjtcIiB8fCBvcGVyYXRvciA9PT0gXCImXCIgfHwgb3BlcmF0b3IgPT09IFwiP1wiO1xufVxuZnVuY3Rpb24gZ2V0VmFsdWVzKGNvbnRleHQsIG9wZXJhdG9yLCBrZXksIG1vZGlmaWVyKSB7XG4gIHZhciB2YWx1ZSA9IGNvbnRleHRba2V5XSwgcmVzdWx0ID0gW107XG4gIGlmIChpc0RlZmluZWQodmFsdWUpICYmIHZhbHVlICE9PSBcIlwiKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcImJpZ2ludFwiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIGlmIChtb2RpZmllciAmJiBtb2RpZmllciAhPT0gXCIqXCIpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgcGFyc2VJbnQobW9kaWZpZXIsIDEwKSk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChcbiAgICAgICAgZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlLCBpc0tleU9wZXJhdG9yKG9wZXJhdG9yKSA/IGtleSA6IFwiXCIpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlLmZpbHRlcihpc0RlZmluZWQpLmZvckVhY2goZnVuY3Rpb24odmFsdWUyKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChcbiAgICAgICAgICAgICAgZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlMiwgaXNLZXlPcGVyYXRvcihvcGVyYXRvcikgPyBrZXkgOiBcIlwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlW2tdKSkge1xuICAgICAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWVba10sIGspKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdG1wID0gW107XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlLmZpbHRlcihpc0RlZmluZWQpLmZvckVhY2goZnVuY3Rpb24odmFsdWUyKSB7XG4gICAgICAgICAgICB0bXAucHVzaChlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWUyKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goZnVuY3Rpb24oaykge1xuICAgICAgICAgICAgaWYgKGlzRGVmaW5lZCh2YWx1ZVtrXSkpIHtcbiAgICAgICAgICAgICAgdG1wLnB1c2goZW5jb2RlVW5yZXNlcnZlZChrKSk7XG4gICAgICAgICAgICAgIHRtcC5wdXNoKGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZVtrXS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzS2V5T3BlcmF0b3Iob3BlcmF0b3IpKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlVW5yZXNlcnZlZChrZXkpICsgXCI9XCIgKyB0bXAuam9pbihcIixcIikpO1xuICAgICAgICB9IGVsc2UgaWYgKHRtcC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh0bXAuam9pbihcIixcIikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChvcGVyYXRvciA9PT0gXCI7XCIpIHtcbiAgICAgIGlmIChpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVVucmVzZXJ2ZWQoa2V5KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJcIiAmJiAob3BlcmF0b3IgPT09IFwiJlwiIHx8IG9wZXJhdG9yID09PSBcIj9cIikpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVVucmVzZXJ2ZWQoa2V5KSArIFwiPVwiKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgICByZXN1bHQucHVzaChcIlwiKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIHBhcnNlVXJsKHRlbXBsYXRlKSB7XG4gIHJldHVybiB7XG4gICAgZXhwYW5kOiBleHBhbmQuYmluZChudWxsLCB0ZW1wbGF0ZSlcbiAgfTtcbn1cbmZ1bmN0aW9uIGV4cGFuZCh0ZW1wbGF0ZSwgY29udGV4dCkge1xuICB2YXIgb3BlcmF0b3JzID0gW1wiK1wiLCBcIiNcIiwgXCIuXCIsIFwiL1wiLCBcIjtcIiwgXCI/XCIsIFwiJlwiXTtcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKFxuICAgIC9cXHsoW15cXHtcXH1dKylcXH18KFteXFx7XFx9XSspL2csXG4gICAgZnVuY3Rpb24oXywgZXhwcmVzc2lvbiwgbGl0ZXJhbCkge1xuICAgICAgaWYgKGV4cHJlc3Npb24pIHtcbiAgICAgICAgbGV0IG9wZXJhdG9yID0gXCJcIjtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgICAgIGlmIChvcGVyYXRvcnMuaW5kZXhPZihleHByZXNzaW9uLmNoYXJBdCgwKSkgIT09IC0xKSB7XG4gICAgICAgICAgb3BlcmF0b3IgPSBleHByZXNzaW9uLmNoYXJBdCgwKTtcbiAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbi5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwcmVzc2lvbi5zcGxpdCgvLC9nKS5mb3JFYWNoKGZ1bmN0aW9uKHZhcmlhYmxlKSB7XG4gICAgICAgICAgdmFyIHRtcCA9IC8oW146XFwqXSopKD86OihcXGQrKXwoXFwqKSk/Ly5leGVjKHZhcmlhYmxlKTtcbiAgICAgICAgICB2YWx1ZXMucHVzaChnZXRWYWx1ZXMoY29udGV4dCwgb3BlcmF0b3IsIHRtcFsxXSwgdG1wWzJdIHx8IHRtcFszXSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9wZXJhdG9yICYmIG9wZXJhdG9yICE9PSBcIitcIikge1xuICAgICAgICAgIHZhciBzZXBhcmF0b3IgPSBcIixcIjtcbiAgICAgICAgICBpZiAob3BlcmF0b3IgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICBzZXBhcmF0b3IgPSBcIiZcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yICE9PSBcIiNcIikge1xuICAgICAgICAgICAgc2VwYXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAodmFsdWVzLmxlbmd0aCAhPT0gMCA/IG9wZXJhdG9yIDogXCJcIikgKyB2YWx1ZXMuam9pbihzZXBhcmF0b3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB2YWx1ZXMuam9pbihcIixcIik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVSZXNlcnZlZChsaXRlcmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG4gIGlmICh0ZW1wbGF0ZSA9PT0gXCIvXCIpIHtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoL1xcLyQvLCBcIlwiKTtcbiAgfVxufVxuXG4vLyBwa2cvZGlzdC1zcmMvcGFyc2UuanNcbmZ1bmN0aW9uIHBhcnNlKG9wdGlvbnMpIHtcbiAgbGV0IG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kLnRvVXBwZXJDYXNlKCk7XG4gIGxldCB1cmwgPSAob3B0aW9ucy51cmwgfHwgXCIvXCIpLnJlcGxhY2UoLzooW2Etel1cXHcrKS9nLCBcInskMX1cIik7XG4gIGxldCBoZWFkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucy5oZWFkZXJzKTtcbiAgbGV0IGJvZHk7XG4gIGxldCBwYXJhbWV0ZXJzID0gb21pdChvcHRpb25zLCBbXG4gICAgXCJtZXRob2RcIixcbiAgICBcImJhc2VVcmxcIixcbiAgICBcInVybFwiLFxuICAgIFwiaGVhZGVyc1wiLFxuICAgIFwicmVxdWVzdFwiLFxuICAgIFwibWVkaWFUeXBlXCJcbiAgXSk7XG4gIGNvbnN0IHVybFZhcmlhYmxlTmFtZXMgPSBleHRyYWN0VXJsVmFyaWFibGVOYW1lcyh1cmwpO1xuICB1cmwgPSBwYXJzZVVybCh1cmwpLmV4cGFuZChwYXJhbWV0ZXJzKTtcbiAgaWYgKCEvXmh0dHAvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IG9wdGlvbnMuYmFzZVVybCArIHVybDtcbiAgfVxuICBjb25zdCBvbWl0dGVkUGFyYW1ldGVycyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbHRlcigob3B0aW9uKSA9PiB1cmxWYXJpYWJsZU5hbWVzLmluY2x1ZGVzKG9wdGlvbikpLmNvbmNhdChcImJhc2VVcmxcIik7XG4gIGNvbnN0IHJlbWFpbmluZ1BhcmFtZXRlcnMgPSBvbWl0KHBhcmFtZXRlcnMsIG9taXR0ZWRQYXJhbWV0ZXJzKTtcbiAgY29uc3QgaXNCaW5hcnlSZXF1ZXN0ID0gL2FwcGxpY2F0aW9uXFwvb2N0ZXQtc3RyZWFtL2kudGVzdChoZWFkZXJzLmFjY2VwdCk7XG4gIGlmICghaXNCaW5hcnlSZXF1ZXN0KSB7XG4gICAgaWYgKG9wdGlvbnMubWVkaWFUeXBlLmZvcm1hdCkge1xuICAgICAgaGVhZGVycy5hY2NlcHQgPSBoZWFkZXJzLmFjY2VwdC5zcGxpdCgvLC8pLm1hcChcbiAgICAgICAgKGZvcm1hdCkgPT4gZm9ybWF0LnJlcGxhY2UoXG4gICAgICAgICAgL2FwcGxpY2F0aW9uXFwvdm5kKFxcLlxcdyspKFxcLnYzKT8oXFwuXFx3Kyk/KFxcK2pzb24pPyQvLFxuICAgICAgICAgIGBhcHBsaWNhdGlvbi92bmQkMSQyLiR7b3B0aW9ucy5tZWRpYVR5cGUuZm9ybWF0fWBcbiAgICAgICAgKVxuICAgICAgKS5qb2luKFwiLFwiKTtcbiAgICB9XG4gICAgaWYgKHVybC5lbmRzV2l0aChcIi9ncmFwaHFsXCIpKSB7XG4gICAgICBpZiAob3B0aW9ucy5tZWRpYVR5cGUucHJldmlld3M/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBwcmV2aWV3c0Zyb21BY2NlcHRIZWFkZXIgPSBoZWFkZXJzLmFjY2VwdC5tYXRjaCgvKD88IVtcXHctXSlbXFx3LV0rKD89LXByZXZpZXcpL2cpIHx8IFtdO1xuICAgICAgICBoZWFkZXJzLmFjY2VwdCA9IHByZXZpZXdzRnJvbUFjY2VwdEhlYWRlci5jb25jYXQob3B0aW9ucy5tZWRpYVR5cGUucHJldmlld3MpLm1hcCgocHJldmlldykgPT4ge1xuICAgICAgICAgIGNvbnN0IGZvcm1hdCA9IG9wdGlvbnMubWVkaWFUeXBlLmZvcm1hdCA/IGAuJHtvcHRpb25zLm1lZGlhVHlwZS5mb3JtYXR9YCA6IFwiK2pzb25cIjtcbiAgICAgICAgICByZXR1cm4gYGFwcGxpY2F0aW9uL3ZuZC5naXRodWIuJHtwcmV2aWV3fS1wcmV2aWV3JHtmb3JtYXR9YDtcbiAgICAgICAgfSkuam9pbihcIixcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChbXCJHRVRcIiwgXCJIRUFEXCJdLmluY2x1ZGVzKG1ldGhvZCkpIHtcbiAgICB1cmwgPSBhZGRRdWVyeVBhcmFtZXRlcnModXJsLCByZW1haW5pbmdQYXJhbWV0ZXJzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoXCJkYXRhXCIgaW4gcmVtYWluaW5nUGFyYW1ldGVycykge1xuICAgICAgYm9keSA9IHJlbWFpbmluZ1BhcmFtZXRlcnMuZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHJlbWFpbmluZ1BhcmFtZXRlcnMpLmxlbmd0aCkge1xuICAgICAgICBib2R5ID0gcmVtYWluaW5nUGFyYW1ldGVycztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFoZWFkZXJzW1wiY29udGVudC10eXBlXCJdICYmIHR5cGVvZiBib2R5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiO1xuICB9XG4gIGlmIChbXCJQQVRDSFwiLCBcIlBVVFwiXS5pbmNsdWRlcyhtZXRob2QpICYmIHR5cGVvZiBib2R5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgYm9keSA9IFwiXCI7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgeyBtZXRob2QsIHVybCwgaGVhZGVycyB9LFxuICAgIHR5cGVvZiBib2R5ICE9PSBcInVuZGVmaW5lZFwiID8geyBib2R5IH0gOiBudWxsLFxuICAgIG9wdGlvbnMucmVxdWVzdCA/IHsgcmVxdWVzdDogb3B0aW9ucy5yZXF1ZXN0IH0gOiBudWxsXG4gICk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9lbmRwb2ludC13aXRoLWRlZmF1bHRzLmpzXG5mdW5jdGlvbiBlbmRwb2ludFdpdGhEZWZhdWx0cyhkZWZhdWx0cywgcm91dGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHBhcnNlKG1lcmdlKGRlZmF1bHRzLCByb3V0ZSwgb3B0aW9ucykpO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvd2l0aC1kZWZhdWx0cy5qc1xuZnVuY3Rpb24gd2l0aERlZmF1bHRzKG9sZERlZmF1bHRzLCBuZXdEZWZhdWx0cykge1xuICBjb25zdCBERUZBVUxUUzIgPSBtZXJnZShvbGREZWZhdWx0cywgbmV3RGVmYXVsdHMpO1xuICBjb25zdCBlbmRwb2ludDIgPSBlbmRwb2ludFdpdGhEZWZhdWx0cy5iaW5kKG51bGwsIERFRkFVTFRTMik7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKGVuZHBvaW50Miwge1xuICAgIERFRkFVTFRTOiBERUZBVUxUUzIsXG4gICAgZGVmYXVsdHM6IHdpdGhEZWZhdWx0cy5iaW5kKG51bGwsIERFRkFVTFRTMiksXG4gICAgbWVyZ2U6IG1lcmdlLmJpbmQobnVsbCwgREVGQVVMVFMyKSxcbiAgICBwYXJzZVxuICB9KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG52YXIgZW5kcG9pbnQgPSB3aXRoRGVmYXVsdHMobnVsbCwgREVGQVVMVFMpO1xuZXhwb3J0IHtcbiAgZW5kcG9pbnRcbn07XG4iLCAiLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG5pbXBvcnQgeyBlbmRwb2ludCB9IGZyb20gXCJAb2N0b2tpdC9lbmRwb2ludFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvZGVmYXVsdHMuanNcbmltcG9ydCB7IGdldFVzZXJBZ2VudCB9IGZyb20gXCJ1bml2ZXJzYWwtdXNlci1hZ2VudFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvdmVyc2lvbi5qc1xudmFyIFZFUlNJT04gPSBcIjEwLjAuOFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvZGVmYXVsdHMuanNcbnZhciBkZWZhdWx0c19kZWZhdWx0ID0ge1xuICBoZWFkZXJzOiB7XG4gICAgXCJ1c2VyLWFnZW50XCI6IGBvY3Rva2l0LXJlcXVlc3QuanMvJHtWRVJTSU9OfSAke2dldFVzZXJBZ2VudCgpfWBcbiAgfVxufTtcblxuLy8gcGtnL2Rpc3Qtc3JjL2ZldGNoLXdyYXBwZXIuanNcbmltcG9ydCB7IHNhZmVQYXJzZSB9IGZyb20gXCJmYXN0LWNvbnRlbnQtdHlwZS1wYXJzZVwiO1xuaW1wb3J0IHsgSlNPTlBhcnNlLCBKU09OU3RyaW5naWZ5IH0gZnJvbSBcImpzb24td2l0aC1iaWdpbnRcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL2lzLXBsYWluLW9iamVjdC5qc1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IHZhbHVlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgY29uc3QgQ3RvciA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgXCJjb25zdHJ1Y3RvclwiKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwoQ3RvcikgPT09IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsKHZhbHVlKTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2ZldGNoLXdyYXBwZXIuanNcbmltcG9ydCB7IFJlcXVlc3RFcnJvciB9IGZyb20gXCJAb2N0b2tpdC9yZXF1ZXN0LWVycm9yXCI7XG52YXIgbm9vcCA9ICgpID0+IFwiXCI7XG5hc3luYyBmdW5jdGlvbiBmZXRjaFdyYXBwZXIocmVxdWVzdE9wdGlvbnMpIHtcbiAgY29uc3QgZmV0Y2ggPSByZXF1ZXN0T3B0aW9ucy5yZXF1ZXN0Py5mZXRjaCB8fCBnbG9iYWxUaGlzLmZldGNoO1xuICBpZiAoIWZldGNoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJmZXRjaCBpcyBub3Qgc2V0LiBQbGVhc2UgcGFzcyBhIGZldGNoIGltcGxlbWVudGF0aW9uIGFzIG5ldyBPY3Rva2l0KHsgcmVxdWVzdDogeyBmZXRjaCB9fSkuIExlYXJuIG1vcmUgYXQgaHR0cHM6Ly9naXRodWIuY29tL29jdG9raXQvb2N0b2tpdC5qcy8jZmV0Y2gtbWlzc2luZ1wiXG4gICAgKTtcbiAgfVxuICBjb25zdCBsb2cgPSByZXF1ZXN0T3B0aW9ucy5yZXF1ZXN0Py5sb2cgfHwgY29uc29sZTtcbiAgY29uc3QgcGFyc2VTdWNjZXNzUmVzcG9uc2VCb2R5ID0gcmVxdWVzdE9wdGlvbnMucmVxdWVzdD8ucGFyc2VTdWNjZXNzUmVzcG9uc2VCb2R5ICE9PSBmYWxzZTtcbiAgY29uc3QgYm9keSA9IGlzUGxhaW5PYmplY3QocmVxdWVzdE9wdGlvbnMuYm9keSkgfHwgQXJyYXkuaXNBcnJheShyZXF1ZXN0T3B0aW9ucy5ib2R5KSA/IEpTT05TdHJpbmdpZnkocmVxdWVzdE9wdGlvbnMuYm9keSkgOiByZXF1ZXN0T3B0aW9ucy5ib2R5O1xuICBjb25zdCByZXF1ZXN0SGVhZGVycyA9IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICBPYmplY3QuZW50cmllcyhyZXF1ZXN0T3B0aW9ucy5oZWFkZXJzKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IFtcbiAgICAgIG5hbWUsXG4gICAgICBTdHJpbmcodmFsdWUpXG4gICAgXSlcbiAgKTtcbiAgbGV0IGZldGNoUmVzcG9uc2U7XG4gIHRyeSB7XG4gICAgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RPcHRpb25zLnVybCwge1xuICAgICAgbWV0aG9kOiByZXF1ZXN0T3B0aW9ucy5tZXRob2QsXG4gICAgICBib2R5LFxuICAgICAgcmVkaXJlY3Q6IHJlcXVlc3RPcHRpb25zLnJlcXVlc3Q/LnJlZGlyZWN0LFxuICAgICAgaGVhZGVyczogcmVxdWVzdEhlYWRlcnMsXG4gICAgICBzaWduYWw6IHJlcXVlc3RPcHRpb25zLnJlcXVlc3Q/LnNpZ25hbCxcbiAgICAgIC8vIGR1cGxleCBtdXN0IGJlIHNldCBpZiByZXF1ZXN0LmJvZHkgaXMgUmVhZGFibGVTdHJlYW0gb3IgQXN5bmMgSXRlcmFibGVzLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNkb20tcmVxdWVzdGluaXQtZHVwbGV4LlxuICAgICAgLi4ucmVxdWVzdE9wdGlvbnMuYm9keSAmJiB7IGR1cGxleDogXCJoYWxmXCIgfVxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxldCBtZXNzYWdlID0gXCJVbmtub3duIEVycm9yXCI7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5uYW1lID09PSBcIkFib3J0RXJyb3JcIikge1xuICAgICAgICBlcnJvci5zdGF0dXMgPSA1MDA7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICBpZiAoZXJyb3IubmFtZSA9PT0gXCJUeXBlRXJyb3JcIiAmJiBcImNhdXNlXCIgaW4gZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLmNhdXNlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICBtZXNzYWdlID0gZXJyb3IuY2F1c2UubWVzc2FnZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZXJyb3IuY2F1c2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBtZXNzYWdlID0gZXJyb3IuY2F1c2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdEVycm9yID0gbmV3IFJlcXVlc3RFcnJvcihtZXNzYWdlLCA1MDAsIHtcbiAgICAgIHJlcXVlc3Q6IHJlcXVlc3RPcHRpb25zXG4gICAgfSk7XG4gICAgcmVxdWVzdEVycm9yLmNhdXNlID0gZXJyb3I7XG4gICAgdGhyb3cgcmVxdWVzdEVycm9yO1xuICB9XG4gIGNvbnN0IHN0YXR1cyA9IGZldGNoUmVzcG9uc2Uuc3RhdHVzO1xuICBjb25zdCB1cmwgPSBmZXRjaFJlc3BvbnNlLnVybDtcbiAgY29uc3QgcmVzcG9uc2VIZWFkZXJzID0ge307XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGZldGNoUmVzcG9uc2UuaGVhZGVycykge1xuICAgIHJlc3BvbnNlSGVhZGVyc1trZXldID0gdmFsdWU7XG4gIH1cbiAgY29uc3Qgb2N0b2tpdFJlc3BvbnNlID0ge1xuICAgIHVybCxcbiAgICBzdGF0dXMsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgIGRhdGE6IFwiXCJcbiAgfTtcbiAgaWYgKFwiZGVwcmVjYXRpb25cIiBpbiByZXNwb25zZUhlYWRlcnMpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gcmVzcG9uc2VIZWFkZXJzLmxpbmsgJiYgcmVzcG9uc2VIZWFkZXJzLmxpbmsubWF0Y2goLzwoW148Pl0rKT47IHJlbD1cImRlcHJlY2F0aW9uXCIvKTtcbiAgICBjb25zdCBkZXByZWNhdGlvbkxpbmsgPSBtYXRjaGVzICYmIG1hdGNoZXMucG9wKCk7XG4gICAgbG9nLndhcm4oXG4gICAgICBgW0BvY3Rva2l0L3JlcXVlc3RdIFwiJHtyZXF1ZXN0T3B0aW9ucy5tZXRob2R9ICR7cmVxdWVzdE9wdGlvbnMudXJsfVwiIGlzIGRlcHJlY2F0ZWQuIEl0IGlzIHNjaGVkdWxlZCB0byBiZSByZW1vdmVkIG9uICR7cmVzcG9uc2VIZWFkZXJzLnN1bnNldH0ke2RlcHJlY2F0aW9uTGluayA/IGAuIFNlZSAke2RlcHJlY2F0aW9uTGlua31gIDogXCJcIn1gXG4gICAgKTtcbiAgfVxuICBpZiAoc3RhdHVzID09PSAyMDQgfHwgc3RhdHVzID09PSAyMDUpIHtcbiAgICByZXR1cm4gb2N0b2tpdFJlc3BvbnNlO1xuICB9XG4gIGlmIChyZXF1ZXN0T3B0aW9ucy5tZXRob2QgPT09IFwiSEVBRFwiKSB7XG4gICAgaWYgKHN0YXR1cyA8IDQwMCkge1xuICAgICAgcmV0dXJuIG9jdG9raXRSZXNwb25zZTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcihmZXRjaFJlc3BvbnNlLnN0YXR1c1RleHQsIHN0YXR1cywge1xuICAgICAgcmVzcG9uc2U6IG9jdG9raXRSZXNwb25zZSxcbiAgICAgIHJlcXVlc3Q6IHJlcXVlc3RPcHRpb25zXG4gICAgfSk7XG4gIH1cbiAgaWYgKHN0YXR1cyA9PT0gMzA0KSB7XG4gICAgb2N0b2tpdFJlc3BvbnNlLmRhdGEgPSBhd2FpdCBnZXRSZXNwb25zZURhdGEoZmV0Y2hSZXNwb25zZSk7XG4gICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcihcIk5vdCBtb2RpZmllZFwiLCBzdGF0dXMsIHtcbiAgICAgIHJlc3BvbnNlOiBvY3Rva2l0UmVzcG9uc2UsXG4gICAgICByZXF1ZXN0OiByZXF1ZXN0T3B0aW9uc1xuICAgIH0pO1xuICB9XG4gIGlmIChzdGF0dXMgPj0gNDAwKSB7XG4gICAgb2N0b2tpdFJlc3BvbnNlLmRhdGEgPSBhd2FpdCBnZXRSZXNwb25zZURhdGEoZmV0Y2hSZXNwb25zZSk7XG4gICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcih0b0Vycm9yTWVzc2FnZShvY3Rva2l0UmVzcG9uc2UuZGF0YSksIHN0YXR1cywge1xuICAgICAgcmVzcG9uc2U6IG9jdG9raXRSZXNwb25zZSxcbiAgICAgIHJlcXVlc3Q6IHJlcXVlc3RPcHRpb25zXG4gICAgfSk7XG4gIH1cbiAgb2N0b2tpdFJlc3BvbnNlLmRhdGEgPSBwYXJzZVN1Y2Nlc3NSZXNwb25zZUJvZHkgPyBhd2FpdCBnZXRSZXNwb25zZURhdGEoZmV0Y2hSZXNwb25zZSkgOiBmZXRjaFJlc3BvbnNlLmJvZHk7XG4gIHJldHVybiBvY3Rva2l0UmVzcG9uc2U7XG59XG5hc3luYyBmdW5jdGlvbiBnZXRSZXNwb25zZURhdGEocmVzcG9uc2UpIHtcbiAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKTtcbiAgaWYgKCFjb250ZW50VHlwZSkge1xuICAgIHJldHVybiByZXNwb25zZS50ZXh0KCkuY2F0Y2gobm9vcCk7XG4gIH1cbiAgY29uc3QgbWltZXR5cGUgPSBzYWZlUGFyc2UoY29udGVudFR5cGUpO1xuICBpZiAoaXNKU09OUmVzcG9uc2UobWltZXR5cGUpKSB7XG4gICAgbGV0IHRleHQgPSBcIlwiO1xuICAgIHRyeSB7XG4gICAgICB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgcmV0dXJuIEpTT05QYXJzZSh0ZXh0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgfSBlbHNlIGlmIChtaW1ldHlwZS50eXBlLnN0YXJ0c1dpdGgoXCJ0ZXh0L1wiKSB8fCBtaW1ldHlwZS5wYXJhbWV0ZXJzLmNoYXJzZXQ/LnRvTG93ZXJDYXNlKCkgPT09IFwidXRmLThcIikge1xuICAgIHJldHVybiByZXNwb25zZS50ZXh0KCkuY2F0Y2gobm9vcCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmFycmF5QnVmZmVyKCkuY2F0Y2goXG4gICAgICAvKiB2OCBpZ25vcmUgbmV4dCAtLSBAcHJlc2VydmUgKi9cbiAgICAgICgpID0+IG5ldyBBcnJheUJ1ZmZlcigwKVxuICAgICk7XG4gIH1cbn1cbmZ1bmN0aW9uIGlzSlNPTlJlc3BvbnNlKG1pbWV0eXBlKSB7XG4gIHJldHVybiBtaW1ldHlwZS50eXBlID09PSBcImFwcGxpY2F0aW9uL2pzb25cIiB8fCBtaW1ldHlwZS50eXBlID09PSBcImFwcGxpY2F0aW9uL3NjaW0ranNvblwiO1xufVxuZnVuY3Rpb24gdG9FcnJvck1lc3NhZ2UoZGF0YSkge1xuICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIFwiVW5rbm93biBlcnJvclwiO1xuICB9XG4gIGlmIChcIm1lc3NhZ2VcIiBpbiBkYXRhKSB7XG4gICAgY29uc3Qgc3VmZml4ID0gXCJkb2N1bWVudGF0aW9uX3VybFwiIGluIGRhdGEgPyBgIC0gJHtkYXRhLmRvY3VtZW50YXRpb25fdXJsfWAgOiBcIlwiO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGRhdGEuZXJyb3JzKSA/IGAke2RhdGEubWVzc2FnZX06ICR7ZGF0YS5lcnJvcnMubWFwKCh2KSA9PiBKU09OLnN0cmluZ2lmeSh2KSkuam9pbihcIiwgXCIpfSR7c3VmZml4fWAgOiBgJHtkYXRhLm1lc3NhZ2V9JHtzdWZmaXh9YDtcbiAgfVxuICByZXR1cm4gYFVua25vd24gZXJyb3I6ICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YDtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3dpdGgtZGVmYXVsdHMuanNcbmZ1bmN0aW9uIHdpdGhEZWZhdWx0cyhvbGRFbmRwb2ludCwgbmV3RGVmYXVsdHMpIHtcbiAgY29uc3QgZW5kcG9pbnQyID0gb2xkRW5kcG9pbnQuZGVmYXVsdHMobmV3RGVmYXVsdHMpO1xuICBjb25zdCBuZXdBcGkgPSBmdW5jdGlvbihyb3V0ZSwgcGFyYW1ldGVycykge1xuICAgIGNvbnN0IGVuZHBvaW50T3B0aW9ucyA9IGVuZHBvaW50Mi5tZXJnZShyb3V0ZSwgcGFyYW1ldGVycyk7XG4gICAgaWYgKCFlbmRwb2ludE9wdGlvbnMucmVxdWVzdCB8fCAhZW5kcG9pbnRPcHRpb25zLnJlcXVlc3QuaG9vaykge1xuICAgICAgcmV0dXJuIGZldGNoV3JhcHBlcihlbmRwb2ludDIucGFyc2UoZW5kcG9pbnRPcHRpb25zKSk7XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3QyID0gKHJvdXRlMiwgcGFyYW1ldGVyczIpID0+IHtcbiAgICAgIHJldHVybiBmZXRjaFdyYXBwZXIoXG4gICAgICAgIGVuZHBvaW50Mi5wYXJzZShlbmRwb2ludDIubWVyZ2Uocm91dGUyLCBwYXJhbWV0ZXJzMikpXG4gICAgICApO1xuICAgIH07XG4gICAgT2JqZWN0LmFzc2lnbihyZXF1ZXN0Miwge1xuICAgICAgZW5kcG9pbnQ6IGVuZHBvaW50MixcbiAgICAgIGRlZmF1bHRzOiB3aXRoRGVmYXVsdHMuYmluZChudWxsLCBlbmRwb2ludDIpXG4gICAgfSk7XG4gICAgcmV0dXJuIGVuZHBvaW50T3B0aW9ucy5yZXF1ZXN0Lmhvb2socmVxdWVzdDIsIGVuZHBvaW50T3B0aW9ucyk7XG4gIH07XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ld0FwaSwge1xuICAgIGVuZHBvaW50OiBlbmRwb2ludDIsXG4gICAgZGVmYXVsdHM6IHdpdGhEZWZhdWx0cy5iaW5kKG51bGwsIGVuZHBvaW50MilcbiAgfSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9pbmRleC5qc1xudmFyIHJlcXVlc3QgPSB3aXRoRGVmYXVsdHMoZW5kcG9pbnQsIGRlZmF1bHRzX2RlZmF1bHQpO1xuZXhwb3J0IHtcbiAgcmVxdWVzdFxufTtcbi8qIHY4IGlnbm9yZSBuZXh0IC0tIEBwcmVzZXJ2ZSAqL1xuLyogdjggaWdub3JlIGVsc2UgLS0gQHByZXNlcnZlICovXG4iLCAiY29uc3QgaW50UmVnZXggPSAvXi0/XFxkKyQvO1xuY29uc3Qgbm9pc2VWYWx1ZSA9IC9eLT9cXGQrbiskLzsgLy8gTm9pc2UgLSBzdHJpbmdzIHRoYXQgbWF0Y2ggdGhlIGN1c3RvbSBmb3JtYXQgYmVmb3JlIGJlaW5nIGNvbnZlcnRlZCB0byBpdFxuY29uc3Qgb3JpZ2luYWxTdHJpbmdpZnkgPSBKU09OLnN0cmluZ2lmeTtcbmNvbnN0IG9yaWdpbmFsUGFyc2UgPSBKU09OLnBhcnNlO1xuY29uc3QgY3VzdG9tRm9ybWF0ID0gL14tP1xcZCtuJC87XG5cbmNvbnN0IGJpZ0ludHNTdHJpbmdpZnkgPSAvKFtcXFs6XSk/XCIoLT9cXGQrKW5cIigkfChbXFxcXG5dfFxccykqKFxcc3xbXFxcXG5dKSpbLFxcfVxcXV0pL2c7XG5jb25zdCBub2lzZVN0cmluZ2lmeSA9XG4gIC8oW1xcWzpdKT8oXCItP1xcZCtuKyluKFwiJHxcIihbXFxcXG5dfFxccykqKFxcc3xbXFxcXG5dKSpbLFxcfVxcXV0pL2c7XG5cbi8qKlxuICogQHR5cGVkZWYgeyh0aGlzOiBhbnksIGtleTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkLCB2YWx1ZTogYW55KSA9PiBhbnl9IFJlcGxhY2VyXG4gKiBAdHlwZWRlZiB7KGtleTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkLCB2YWx1ZTogYW55LCBjb250ZXh0PzogeyBzb3VyY2U6IHN0cmluZyB9KSA9PiBhbnl9IFJldml2ZXJcbiAqL1xuXG4vKipcbiAqIENvbnZlcnRzIGEgSmF2YVNjcmlwdCB2YWx1ZSB0byBhIEpTT04gc3RyaW5nLlxuICpcbiAqIFN1cHBvcnRzIHNlcmlhbGl6YXRpb24gb2YgQmlnSW50IHZhbHVlcyB1c2luZyB0d28gc3RyYXRlZ2llczpcbiAqIDEuIEN1c3RvbSBmb3JtYXQgXCIxMjNuXCIgXHUyMTkyIFwiMTIzXCIgKHVuaXZlcnNhbCBmYWxsYmFjaylcbiAqIDIuIE5hdGl2ZSBKU09OLnJhd0pTT04oKSAoTm9kZS5qcyAyMissIGZhc3Rlc3QpIHdoZW4gYXZhaWxhYmxlXG4gKlxuICogQWxsIG90aGVyIHZhbHVlcyBhcmUgc2VyaWFsaXplZCBleGFjdGx5IGxpa2UgbmF0aXZlIEpTT04uc3RyaW5naWZ5KCkuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydCB0byBhIEpTT04gc3RyaW5nLlxuICogQHBhcmFtIHtSZXBsYWNlciB8IEFycmF5PHN0cmluZyB8IG51bWJlcj4gfCBudWxsfSBbcmVwbGFjZXJdXG4gKiAgIEEgZnVuY3Rpb24gdGhhdCBhbHRlcnMgdGhlIGJlaGF2aW9yIG9mIHRoZSBzdHJpbmdpZmljYXRpb24gcHJvY2VzcyxcbiAqICAgb3IgYW4gYXJyYXkgb2Ygc3RyaW5ncy9udW1iZXJzIHRvIGluZGljYXRlIHByb3BlcnRpZXMgdG8gZXhjbHVkZS5cbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBbc3BhY2VdXG4gKiAgIEEgc3RyaW5nIG9yIG51bWJlciB0byBzcGVjaWZ5IGluZGVudGF0aW9uIG9yIHByZXR0eS1wcmludGluZy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBKU09OIHN0cmluZyByZXByZXNlbnRhdGlvbi5cbiAqL1xuY29uc3QgSlNPTlN0cmluZ2lmeSA9ICh2YWx1ZSwgcmVwbGFjZXIsIHNwYWNlKSA9PiB7XG4gIGlmIChcInJhd0pTT05cIiBpbiBKU09OKSB7XG4gICAgcmV0dXJuIG9yaWdpbmFsU3RyaW5naWZ5KFxuICAgICAgdmFsdWUsXG4gICAgICAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJpZ2ludFwiKSByZXR1cm4gSlNPTi5yYXdKU09OKHZhbHVlLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVwbGFjZXIgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHJlcGxhY2VyKGtleSwgdmFsdWUpO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlcGxhY2VyKSAmJiByZXBsYWNlci5pbmNsdWRlcyhrZXkpKSByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNwYWNlLFxuICAgICk7XG4gIH1cblxuICBpZiAoIXZhbHVlKSByZXR1cm4gb3JpZ2luYWxTdHJpbmdpZnkodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSk7XG5cbiAgY29uc3QgY29udmVydGVkVG9DdXN0b21KU09OID0gb3JpZ2luYWxTdHJpbmdpZnkoXG4gICAgdmFsdWUsXG4gICAgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGlzTm9pc2UgPSB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgbm9pc2VWYWx1ZS50ZXN0KHZhbHVlKTtcblxuICAgICAgaWYgKGlzTm9pc2UpIHJldHVybiB2YWx1ZS50b1N0cmluZygpICsgXCJuXCI7IC8vIE1hcmsgbm9pc2UgdmFsdWVzIHdpdGggYWRkaXRpb25hbCBcIm5cIiB0byBvZmZzZXQgdGhlIGRlbGV0aW9uIG9mIG9uZSBcIm5cIiBkdXJpbmcgdGhlIHByb2Nlc3NpbmdcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJiaWdpbnRcIikgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkgKyBcIm5cIjtcblxuICAgICAgaWYgKHR5cGVvZiByZXBsYWNlciA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gcmVwbGFjZXIoa2V5LCB2YWx1ZSk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlcGxhY2VyKSAmJiByZXBsYWNlci5pbmNsdWRlcyhrZXkpKSByZXR1cm4gdmFsdWU7XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIHNwYWNlLFxuICApO1xuICBjb25zdCBwcm9jZXNzZWRKU09OID0gY29udmVydGVkVG9DdXN0b21KU09OLnJlcGxhY2UoXG4gICAgYmlnSW50c1N0cmluZ2lmeSxcbiAgICBcIiQxJDIkM1wiLFxuICApOyAvLyBEZWxldGUgb25lIFwiblwiIG9mZiB0aGUgZW5kIG9mIGV2ZXJ5IEJpZ0ludCB2YWx1ZVxuICBjb25zdCBkZW5vaXNlZEpTT04gPSBwcm9jZXNzZWRKU09OLnJlcGxhY2Uobm9pc2VTdHJpbmdpZnksIFwiJDEkMiQzXCIpOyAvLyBSZW1vdmUgb25lIFwiblwiIG9mZiB0aGUgZW5kIG9mIGV2ZXJ5IG5vaXN5IHN0cmluZ1xuXG4gIHJldHVybiBkZW5vaXNlZEpTT047XG59O1xuXG5jb25zdCBmZWF0dXJlQ2FjaGUgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogRGV0ZWN0cyBpZiB0aGUgY3VycmVudCBKU09OLnBhcnNlIGltcGxlbWVudGF0aW9uIHN1cHBvcnRzIHRoZSBjb250ZXh0LnNvdXJjZSBmZWF0dXJlLlxuICpcbiAqIFVzZXMgdG9TdHJpbmcoKSBmaW5nZXJwcmludGluZyB0byBjYWNoZSByZXN1bHRzIGFuZCBhdXRvbWF0aWNhbGx5IGRldGVjdCBydW50aW1lXG4gKiByZXBsYWNlbWVudHMgb2YgSlNPTi5wYXJzZSAocG9seWZpbGxzLCBtb2NrcywgZXRjLikuXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgY29udGV4dC5zb3VyY2UgaXMgc3VwcG9ydGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmNvbnN0IGlzQ29udGV4dFNvdXJjZVN1cHBvcnRlZCA9ICgpID0+IHtcbiAgY29uc3QgcGFyc2VGaW5nZXJwcmludCA9IEpTT04ucGFyc2UudG9TdHJpbmcoKTtcblxuICBpZiAoZmVhdHVyZUNhY2hlLmhhcyhwYXJzZUZpbmdlcnByaW50KSkge1xuICAgIHJldHVybiBmZWF0dXJlQ2FjaGUuZ2V0KHBhcnNlRmluZ2VycHJpbnQpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBKU09OLnBhcnNlKFxuICAgICAgXCIxXCIsXG4gICAgICAoXywgX18sIGNvbnRleHQpID0+ICEhY29udGV4dD8uc291cmNlICYmIGNvbnRleHQuc291cmNlID09PSBcIjFcIixcbiAgICApO1xuICAgIGZlYXR1cmVDYWNoZS5zZXQocGFyc2VGaW5nZXJwcmludCwgcmVzdWx0KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2gge1xuICAgIGZlYXR1cmVDYWNoZS5zZXQocGFyc2VGaW5nZXJwcmludCwgZmFsc2UpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG4vKipcbiAqIFJldml2ZXIgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBjdXN0b20tZm9ybWF0IEJpZ0ludCBzdHJpbmdzIGJhY2sgdG8gQmlnSW50IHZhbHVlcy5cbiAqIEFsc28gaGFuZGxlcyBcIm5vaXNlXCIgc3RyaW5ncyB0aGF0IGFjY2lkZW50YWxseSBtYXRjaCB0aGUgQmlnSW50IGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZH0ga2V5IFRoZSBvYmplY3Qga2V5LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgcGFyc2VkLlxuICogQHBhcmFtIHtvYmplY3R9IFtjb250ZXh0XSBQYXJzZSBjb250ZXh0IChpZiBzdXBwb3J0ZWQgYnkgSlNPTi5wYXJzZSkuXG4gKiBAcGFyYW0ge1Jldml2ZXJ9IFt1c2VyUmV2aXZlcl0gVXNlcidzIGN1c3RvbSByZXZpdmVyIGZ1bmN0aW9uLlxuICogQHJldHVybnMge2FueX0gVGhlIHRyYW5zZm9ybWVkIHZhbHVlLlxuICovXG5jb25zdCBjb252ZXJ0TWFya2VkQmlnSW50c1Jldml2ZXIgPSAoa2V5LCB2YWx1ZSwgY29udGV4dCwgdXNlclJldml2ZXIpID0+IHtcbiAgY29uc3QgaXNDdXN0b21Gb3JtYXRCaWdJbnQgPVxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiBjdXN0b21Gb3JtYXQudGVzdCh2YWx1ZSk7XG4gIGlmIChpc0N1c3RvbUZvcm1hdEJpZ0ludCkgcmV0dXJuIEJpZ0ludCh2YWx1ZS5zbGljZSgwLCAtMSkpO1xuXG4gIGNvbnN0IGlzTm9pc2VWYWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiBub2lzZVZhbHVlLnRlc3QodmFsdWUpO1xuICBpZiAoaXNOb2lzZVZhbHVlKSByZXR1cm4gdmFsdWUuc2xpY2UoMCwgLTEpO1xuXG4gIGlmICh0eXBlb2YgdXNlclJldml2ZXIgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHZhbHVlO1xuXG4gIHJldHVybiB1c2VyUmV2aXZlcihrZXksIHZhbHVlLCBjb250ZXh0KTtcbn07XG5cbi8qKlxuICogRmFzdCBKU09OLnBhcnNlIGltcGxlbWVudGF0aW9uICh+MnggZmFzdGVyIHRoYW4gY2xhc3NpYyBmYWxsYmFjaykuXG4gKiBVc2VzIEpTT04ucGFyc2UncyBjb250ZXh0LnNvdXJjZSBmZWF0dXJlIHRvIGRldGVjdCBpbnRlZ2VycyBhbmQgY29udmVydFxuICogbGFyZ2UgbnVtYmVycyBkaXJlY3RseSB0byBCaWdJbnQgd2l0aG91dCBzdHJpbmcgbWFuaXB1bGF0aW9uLlxuICpcbiAqIERvZXMgbm90IHN1cHBvcnQgbGVnYWN5IGN1c3RvbSBmb3JtYXQgZnJvbSB2MSBvZiB0aGlzIGxpYnJhcnkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgSlNPTiBzdHJpbmcgdG8gcGFyc2UuXG4gKiBAcGFyYW0ge1Jldml2ZXJ9IFtyZXZpdmVyXSBUcmFuc2Zvcm0gZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCB2YWx1ZS5cbiAqIEByZXR1cm5zIHthbnl9IFBhcnNlZCBKYXZhU2NyaXB0IHZhbHVlLlxuICovXG5jb25zdCBKU09OUGFyc2VWMiA9ICh0ZXh0LCByZXZpdmVyKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKHRleHQsIChrZXksIHZhbHVlLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgaXNCaWdOdW1iZXIgPVxuICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmXG4gICAgICAodmFsdWUgPiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCB2YWx1ZSA8IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSKTtcbiAgICBjb25zdCBpc0ludCA9IGNvbnRleHQgJiYgaW50UmVnZXgudGVzdChjb250ZXh0LnNvdXJjZSk7XG4gICAgY29uc3QgaXNCaWdJbnQgPSBpc0JpZ051bWJlciAmJiBpc0ludDtcblxuICAgIGlmIChpc0JpZ0ludCkgcmV0dXJuIEJpZ0ludChjb250ZXh0LnNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIHJldml2ZXIgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHZhbHVlO1xuXG4gICAgcmV0dXJuIHJldml2ZXIoa2V5LCB2YWx1ZSwgY29udGV4dCk7XG4gIH0pO1xufTtcblxuY29uc3QgTUFYX0lOVCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLnRvU3RyaW5nKCk7XG5jb25zdCBNQVhfRElHSVRTID0gTUFYX0lOVC5sZW5ndGg7XG5jb25zdCBzdHJpbmdzT3JMYXJnZU51bWJlcnMgPVxuICAvXCIoPzpcXFxcLnxbXlwiXSkqXCJ8LT8oMHxbMS05XVswLTldKikoXFwuWzAtOV0rKT8oW2VFXVsrLV0/WzAtOV0rKT8vZztcbmNvbnN0IG5vaXNlVmFsdWVXaXRoUXVvdGVzID0gL15cIi0/XFxkK24rXCIkLzsgLy8gTm9pc2UgLSBzdHJpbmdzIHRoYXQgbWF0Y2ggdGhlIGN1c3RvbSBmb3JtYXQgYmVmb3JlIGJlaW5nIGNvbnZlcnRlZCB0byBpdFxuXG4vKipcbiAqIENvbnZlcnRzIGEgSlNPTiBzdHJpbmcgaW50byBhIEphdmFTY3JpcHQgdmFsdWUuXG4gKlxuICogU3VwcG9ydHMgcGFyc2luZyBvZiBsYXJnZSBpbnRlZ2VycyB1c2luZyB0d28gc3RyYXRlZ2llczpcbiAqIDEuIENsYXNzaWMgZmFsbGJhY2s6IE1hcmtzIGxhcmdlIG51bWJlcnMgd2l0aCBcIjEyM25cIiBmb3JtYXQsIHRoZW4gY29udmVydHMgdG8gQmlnSW50XG4gKiAyLiBGYXN0IHBhdGggKEpTT05QYXJzZVYyKTogVXNlcyBjb250ZXh0LnNvdXJjZSBmZWF0dXJlICh+MnggZmFzdGVyKSB3aGVuIGF2YWlsYWJsZVxuICpcbiAqIEFsbCBvdGhlciBKU09OIHZhbHVlcyBhcmUgcGFyc2VkIGV4YWN0bHkgbGlrZSBuYXRpdmUgSlNPTi5wYXJzZSgpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IEEgdmFsaWQgSlNPTiBzdHJpbmcuXG4gKiBAcGFyYW0ge1Jldml2ZXJ9IFtyZXZpdmVyXVxuICogICBBIGZ1bmN0aW9uIHRoYXQgdHJhbnNmb3JtcyB0aGUgcmVzdWx0cy4gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgZm9yIGVhY2ggbWVtYmVyXG4gKiAgIG9mIHRoZSBvYmplY3QuIElmIGEgbWVtYmVyIGNvbnRhaW5zIG5lc3RlZCBvYmplY3RzLCB0aGUgbmVzdGVkIG9iamVjdHMgYXJlXG4gKiAgIHRyYW5zZm9ybWVkIGJlZm9yZSB0aGUgcGFyZW50IG9iamVjdCBpcy5cbiAqIEByZXR1cm5zIHthbnl9IFRoZSBwYXJzZWQgSmF2YVNjcmlwdCB2YWx1ZS5cbiAqIEB0aHJvd3Mge1N5bnRheEVycm9yfSBJZiB0ZXh0IGlzIG5vdCB2YWxpZCBKU09OLlxuICovXG5jb25zdCBKU09OUGFyc2UgPSAodGV4dCwgcmV2aXZlcikgPT4ge1xuICBpZiAoIXRleHQpIHJldHVybiBvcmlnaW5hbFBhcnNlKHRleHQsIHJldml2ZXIpO1xuXG4gIGlmIChpc0NvbnRleHRTb3VyY2VTdXBwb3J0ZWQoKSkgcmV0dXJuIEpTT05QYXJzZVYyKHRleHQsIHJldml2ZXIpOyAvLyBTaG9ydGN1dCB0byBhIGZhc3RlciAoMngpIGFuZCBzaW1wbGVyIHZlcnNpb25cblxuICAvLyBGaW5kIGFuZCBtYXJrIGJpZyBudW1iZXJzIHdpdGggXCJuXCJcbiAgY29uc3Qgc2VyaWFsaXplZERhdGEgPSB0ZXh0LnJlcGxhY2UoXG4gICAgc3RyaW5nc09yTGFyZ2VOdW1iZXJzLFxuICAgICh0ZXh0LCBkaWdpdHMsIGZyYWN0aW9uYWwsIGV4cG9uZW50aWFsKSA9PiB7XG4gICAgICBjb25zdCBpc1N0cmluZyA9IHRleHRbMF0gPT09ICdcIic7XG4gICAgICBjb25zdCBpc05vaXNlID0gaXNTdHJpbmcgJiYgbm9pc2VWYWx1ZVdpdGhRdW90ZXMudGVzdCh0ZXh0KTtcblxuICAgICAgaWYgKGlzTm9pc2UpIHJldHVybiB0ZXh0LnN1YnN0cmluZygwLCB0ZXh0Lmxlbmd0aCAtIDEpICsgJ25cIic7IC8vIE1hcmsgbm9pc2UgdmFsdWVzIHdpdGggYWRkaXRpb25hbCBcIm5cIiB0byBvZmZzZXQgdGhlIGRlbGV0aW9uIG9mIG9uZSBcIm5cIiBkdXJpbmcgdGhlIHByb2Nlc3NpbmdcblxuICAgICAgY29uc3QgaXNGcmFjdGlvbmFsT3JFeHBvbmVudGlhbCA9IGZyYWN0aW9uYWwgfHwgZXhwb25lbnRpYWw7XG4gICAgICBjb25zdCBpc0xlc3NUaGFuTWF4U2FmZUludCA9XG4gICAgICAgIGRpZ2l0cyAmJlxuICAgICAgICAoZGlnaXRzLmxlbmd0aCA8IE1BWF9ESUdJVFMgfHxcbiAgICAgICAgICAoZGlnaXRzLmxlbmd0aCA9PT0gTUFYX0RJR0lUUyAmJiBkaWdpdHMgPD0gTUFYX0lOVCkpOyAvLyBXaXRoIGEgZml4ZWQgbnVtYmVyIG9mIGRpZ2l0cywgd2UgY2FuIGNvcnJlY3RseSB1c2UgbGV4aWNvZ3JhcGhpY2FsIGNvbXBhcmlzb24gdG8gZG8gYSBudW1lcmljIGNvbXBhcmlzb25cblxuICAgICAgaWYgKGlzU3RyaW5nIHx8IGlzRnJhY3Rpb25hbE9yRXhwb25lbnRpYWwgfHwgaXNMZXNzVGhhbk1heFNhZmVJbnQpXG4gICAgICAgIHJldHVybiB0ZXh0O1xuXG4gICAgICByZXR1cm4gJ1wiJyArIHRleHQgKyAnblwiJztcbiAgICB9LFxuICApO1xuXG4gIHJldHVybiBvcmlnaW5hbFBhcnNlKHNlcmlhbGl6ZWREYXRhLCAoa2V5LCB2YWx1ZSwgY29udGV4dCkgPT5cbiAgICBjb252ZXJ0TWFya2VkQmlnSW50c1Jldml2ZXIoa2V5LCB2YWx1ZSwgY29udGV4dCwgcmV2aXZlciksXG4gICk7XG59O1xuXG5leHBvcnQgeyBKU09OU3RyaW5naWZ5LCBKU09OUGFyc2UgfTtcbiIsICJjbGFzcyBSZXF1ZXN0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIG5hbWU7XG4gIC8qKlxuICAgKiBodHRwIHN0YXR1cyBjb2RlXG4gICAqL1xuICBzdGF0dXM7XG4gIC8qKlxuICAgKiBSZXF1ZXN0IG9wdGlvbnMgdGhhdCBsZWFkIHRvIHRoZSBlcnJvci5cbiAgICovXG4gIHJlcXVlc3Q7XG4gIC8qKlxuICAgKiBSZXNwb25zZSBvYmplY3QgaWYgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWRcbiAgICovXG4gIHJlc3BvbnNlO1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBzdGF0dXNDb2RlLCBvcHRpb25zKSB7XG4gICAgc3VwZXIobWVzc2FnZSwgeyBjYXVzZTogb3B0aW9ucy5jYXVzZSB9KTtcbiAgICB0aGlzLm5hbWUgPSBcIkh0dHBFcnJvclwiO1xuICAgIHRoaXMuc3RhdHVzID0gTnVtYmVyLnBhcnNlSW50KHN0YXR1c0NvZGUpO1xuICAgIGlmIChOdW1iZXIuaXNOYU4odGhpcy5zdGF0dXMpKSB7XG4gICAgICB0aGlzLnN0YXR1cyA9IDA7XG4gICAgfVxuICAgIC8qIHY4IGlnbm9yZSBlbHNlIC0tIEBwcmVzZXJ2ZSAtLSBCdWcgd2l0aCB2aXRlc3QgY292ZXJhZ2Ugd2hlcmUgaXQgc2VlcyBhbiBlbHNlIGJyYW5jaCB0aGF0IGRvZXNuJ3QgZXhpc3QgKi9cbiAgICBpZiAoXCJyZXNwb25zZVwiIGluIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMucmVzcG9uc2UgPSBvcHRpb25zLnJlc3BvbnNlO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0Q29weSA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMucmVxdWVzdCk7XG4gICAgaWYgKG9wdGlvbnMucmVxdWVzdC5oZWFkZXJzLmF1dGhvcml6YXRpb24pIHtcbiAgICAgIHJlcXVlc3RDb3B5LmhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLnJlcXVlc3QuaGVhZGVycywge1xuICAgICAgICBhdXRob3JpemF0aW9uOiBvcHRpb25zLnJlcXVlc3QuaGVhZGVycy5hdXRob3JpemF0aW9uLnJlcGxhY2UoXG4gICAgICAgICAgLyg/PCEgKSAuKiQvLFxuICAgICAgICAgIFwiIFtSRURBQ1RFRF1cIlxuICAgICAgICApXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmVxdWVzdENvcHkudXJsID0gcmVxdWVzdENvcHkudXJsLnJlcGxhY2UoL1xcYmNsaWVudF9zZWNyZXQ9XFx3Ky9nLCBcImNsaWVudF9zZWNyZXQ9W1JFREFDVEVEXVwiKS5yZXBsYWNlKC9cXGJhY2Nlc3NfdG9rZW49XFx3Ky9nLCBcImFjY2Vzc190b2tlbj1bUkVEQUNURURdXCIpO1xuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3RDb3B5O1xuICB9XG59XG5leHBvcnQge1xuICBSZXF1ZXN0RXJyb3Jcbn07XG4iLCAiLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIkBvY3Rva2l0L3JlcXVlc3RcIjtcbmltcG9ydCB7IGdldFVzZXJBZ2VudCB9IGZyb20gXCJ1bml2ZXJzYWwtdXNlci1hZ2VudFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvdmVyc2lvbi5qc1xudmFyIFZFUlNJT04gPSBcIjAuMC4wLWRldmVsb3BtZW50XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy93aXRoLWRlZmF1bHRzLmpzXG5pbXBvcnQgeyByZXF1ZXN0IGFzIFJlcXVlc3QyIH0gZnJvbSBcIkBvY3Rva2l0L3JlcXVlc3RcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL2dyYXBocWwuanNcbmltcG9ydCB7IHJlcXVlc3QgYXMgUmVxdWVzdCB9IGZyb20gXCJAb2N0b2tpdC9yZXF1ZXN0XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9lcnJvci5qc1xuZnVuY3Rpb24gX2J1aWxkTWVzc2FnZUZvclJlc3BvbnNlRXJyb3JzKGRhdGEpIHtcbiAgcmV0dXJuIGBSZXF1ZXN0IGZhaWxlZCBkdWUgdG8gZm9sbG93aW5nIHJlc3BvbnNlIGVycm9yczpcbmAgKyBkYXRhLmVycm9ycy5tYXAoKGUpID0+IGAgLSAke2UubWVzc2FnZX1gKS5qb2luKFwiXFxuXCIpO1xufVxudmFyIEdyYXBocWxSZXNwb25zZUVycm9yID0gY2xhc3MgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHJlcXVlc3QyLCBoZWFkZXJzLCByZXNwb25zZSkge1xuICAgIHN1cGVyKF9idWlsZE1lc3NhZ2VGb3JSZXNwb25zZUVycm9ycyhyZXNwb25zZSkpO1xuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3QyO1xuICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XG4gICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIHRoaXMuZXJyb3JzID0gcmVzcG9uc2UuZXJyb3JzO1xuICAgIHRoaXMuZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICB9XG4gIH1cbiAgbmFtZSA9IFwiR3JhcGhxbFJlc3BvbnNlRXJyb3JcIjtcbiAgZXJyb3JzO1xuICBkYXRhO1xufTtcblxuLy8gcGtnL2Rpc3Qtc3JjL2dyYXBocWwuanNcbnZhciBOT05fVkFSSUFCTEVfT1BUSU9OUyA9IFtcbiAgXCJtZXRob2RcIixcbiAgXCJiYXNlVXJsXCIsXG4gIFwidXJsXCIsXG4gIFwiaGVhZGVyc1wiLFxuICBcInJlcXVlc3RcIixcbiAgXCJxdWVyeVwiLFxuICBcIm1lZGlhVHlwZVwiLFxuICBcIm9wZXJhdGlvbk5hbWVcIlxuXTtcbnZhciBGT1JCSURERU5fVkFSSUFCTEVfT1BUSU9OUyA9IFtcInF1ZXJ5XCIsIFwibWV0aG9kXCIsIFwidXJsXCJdO1xudmFyIEdIRVNfVjNfU1VGRklYX1JFR0VYID0gL1xcL2FwaVxcL3YzXFwvPyQvO1xuZnVuY3Rpb24gZ3JhcGhxbChyZXF1ZXN0MiwgcXVlcnksIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5ID09PSBcInN0cmluZ1wiICYmIFwicXVlcnlcIiBpbiBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgIG5ldyBFcnJvcihgW0BvY3Rva2l0L2dyYXBocWxdIFwicXVlcnlcIiBjYW5ub3QgYmUgdXNlZCBhcyB2YXJpYWJsZSBuYW1lYClcbiAgICAgICk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbnMpIHtcbiAgICAgIGlmICghRk9SQklEREVOX1ZBUklBQkxFX09QVElPTlMuaW5jbHVkZXMoa2V5KSkgY29udGludWU7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICBgW0BvY3Rva2l0L2dyYXBocWxdIFwiJHtrZXl9XCIgY2Fubm90IGJlIHVzZWQgYXMgdmFyaWFibGUgbmFtZWBcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgcGFyc2VkT3B0aW9ucyA9IHR5cGVvZiBxdWVyeSA9PT0gXCJzdHJpbmdcIiA/IE9iamVjdC5hc3NpZ24oeyBxdWVyeSB9LCBvcHRpb25zKSA6IHF1ZXJ5O1xuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5rZXlzKFxuICAgIHBhcnNlZE9wdGlvbnNcbiAgKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgaWYgKE5PTl9WQVJJQUJMRV9PUFRJT05TLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gcGFyc2VkT3B0aW9uc1trZXldO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgaWYgKCFyZXN1bHQudmFyaWFibGVzKSB7XG4gICAgICByZXN1bHQudmFyaWFibGVzID0ge307XG4gICAgfVxuICAgIHJlc3VsdC52YXJpYWJsZXNba2V5XSA9IHBhcnNlZE9wdGlvbnNba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG4gIGNvbnN0IGJhc2VVcmwgPSBwYXJzZWRPcHRpb25zLmJhc2VVcmwgfHwgcmVxdWVzdDIuZW5kcG9pbnQuREVGQVVMVFMuYmFzZVVybDtcbiAgaWYgKEdIRVNfVjNfU1VGRklYX1JFR0VYLnRlc3QoYmFzZVVybCkpIHtcbiAgICByZXF1ZXN0T3B0aW9ucy51cmwgPSBiYXNlVXJsLnJlcGxhY2UoR0hFU19WM19TVUZGSVhfUkVHRVgsIFwiL2FwaS9ncmFwaHFsXCIpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0MihyZXF1ZXN0T3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcnMpIHtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHJlc3BvbnNlLmhlYWRlcnMpKSB7XG4gICAgICAgIGhlYWRlcnNba2V5XSA9IHJlc3BvbnNlLmhlYWRlcnNba2V5XTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBHcmFwaHFsUmVzcG9uc2VFcnJvcihcbiAgICAgICAgcmVxdWVzdE9wdGlvbnMsXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIHJlc3BvbnNlLmRhdGFcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGE7XG4gIH0pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvd2l0aC1kZWZhdWx0cy5qc1xuZnVuY3Rpb24gd2l0aERlZmF1bHRzKHJlcXVlc3QyLCBuZXdEZWZhdWx0cykge1xuICBjb25zdCBuZXdSZXF1ZXN0ID0gcmVxdWVzdDIuZGVmYXVsdHMobmV3RGVmYXVsdHMpO1xuICBjb25zdCBuZXdBcGkgPSAocXVlcnksIG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gZ3JhcGhxbChuZXdSZXF1ZXN0LCBxdWVyeSwgb3B0aW9ucyk7XG4gIH07XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ld0FwaSwge1xuICAgIGRlZmF1bHRzOiB3aXRoRGVmYXVsdHMuYmluZChudWxsLCBuZXdSZXF1ZXN0KSxcbiAgICBlbmRwb2ludDogbmV3UmVxdWVzdC5lbmRwb2ludFxuICB9KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG52YXIgZ3JhcGhxbDIgPSB3aXRoRGVmYXVsdHMocmVxdWVzdCwge1xuICBoZWFkZXJzOiB7XG4gICAgXCJ1c2VyLWFnZW50XCI6IGBvY3Rva2l0LWdyYXBocWwuanMvJHtWRVJTSU9OfSAke2dldFVzZXJBZ2VudCgpfWBcbiAgfSxcbiAgbWV0aG9kOiBcIlBPU1RcIixcbiAgdXJsOiBcIi9ncmFwaHFsXCJcbn0pO1xuZnVuY3Rpb24gd2l0aEN1c3RvbVJlcXVlc3QoY3VzdG9tUmVxdWVzdCkge1xuICByZXR1cm4gd2l0aERlZmF1bHRzKGN1c3RvbVJlcXVlc3QsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIHVybDogXCIvZ3JhcGhxbFwiXG4gIH0pO1xufVxuZXhwb3J0IHtcbiAgR3JhcGhxbFJlc3BvbnNlRXJyb3IsXG4gIGdyYXBocWwyIGFzIGdyYXBocWwsXG4gIHdpdGhDdXN0b21SZXF1ZXN0XG59O1xuIiwgIi8vIHBrZy9kaXN0LXNyYy9pcy1qd3QuanNcbnZhciBiNjR1cmwgPSBcIig/OlthLXpBLVowLTlfLV0rKVwiO1xudmFyIHNlcCA9IFwiXFxcXC5cIjtcbnZhciBqd3RSRSA9IG5ldyBSZWdFeHAoYF4ke2I2NHVybH0ke3NlcH0ke2I2NHVybH0ke3NlcH0ke2I2NHVybH0kYCk7XG52YXIgaXNKV1QgPSBqd3RSRS50ZXN0LmJpbmQoand0UkUpO1xuXG4vLyBwa2cvZGlzdC1zcmMvYXV0aC5qc1xuYXN5bmMgZnVuY3Rpb24gYXV0aCh0b2tlbikge1xuICBjb25zdCBpc0FwcCA9IGlzSldUKHRva2VuKTtcbiAgY29uc3QgaXNJbnN0YWxsYXRpb24gPSB0b2tlbi5zdGFydHNXaXRoKFwidjEuXCIpIHx8IHRva2VuLnN0YXJ0c1dpdGgoXCJnaHNfXCIpO1xuICBjb25zdCBpc1VzZXJUb1NlcnZlciA9IHRva2VuLnN0YXJ0c1dpdGgoXCJnaHVfXCIpO1xuICBjb25zdCB0b2tlblR5cGUgPSBpc0FwcCA/IFwiYXBwXCIgOiBpc0luc3RhbGxhdGlvbiA/IFwiaW5zdGFsbGF0aW9uXCIgOiBpc1VzZXJUb1NlcnZlciA/IFwidXNlci10by1zZXJ2ZXJcIiA6IFwib2F1dGhcIjtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcInRva2VuXCIsXG4gICAgdG9rZW4sXG4gICAgdG9rZW5UeXBlXG4gIH07XG59XG5cbi8vIHBrZy9kaXN0LXNyYy93aXRoLWF1dGhvcml6YXRpb24tcHJlZml4LmpzXG5mdW5jdGlvbiB3aXRoQXV0aG9yaXphdGlvblByZWZpeCh0b2tlbikge1xuICBpZiAodG9rZW4uc3BsaXQoL1xcLi8pLmxlbmd0aCA9PT0gMykge1xuICAgIHJldHVybiBgYmVhcmVyICR7dG9rZW59YDtcbiAgfVxuICByZXR1cm4gYHRva2VuICR7dG9rZW59YDtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2hvb2suanNcbmFzeW5jIGZ1bmN0aW9uIGhvb2sodG9rZW4sIHJlcXVlc3QsIHJvdXRlLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IGVuZHBvaW50ID0gcmVxdWVzdC5lbmRwb2ludC5tZXJnZShcbiAgICByb3V0ZSxcbiAgICBwYXJhbWV0ZXJzXG4gICk7XG4gIGVuZHBvaW50LmhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IHdpdGhBdXRob3JpemF0aW9uUHJlZml4KHRva2VuKTtcbiAgcmV0dXJuIHJlcXVlc3QoZW5kcG9pbnQpO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbnZhciBjcmVhdGVUb2tlbkF1dGggPSBmdW5jdGlvbiBjcmVhdGVUb2tlbkF1dGgyKHRva2VuKSB7XG4gIGlmICghdG9rZW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJbQG9jdG9raXQvYXV0aC10b2tlbl0gTm8gdG9rZW4gcGFzc2VkIHRvIGNyZWF0ZVRva2VuQXV0aFwiKTtcbiAgfVxuICBpZiAodHlwZW9mIHRva2VuICE9PSBcInN0cmluZ1wiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJbQG9jdG9raXQvYXV0aC10b2tlbl0gVG9rZW4gcGFzc2VkIHRvIGNyZWF0ZVRva2VuQXV0aCBpcyBub3QgYSBzdHJpbmdcIlxuICAgICk7XG4gIH1cbiAgdG9rZW4gPSB0b2tlbi5yZXBsYWNlKC9eKHRva2VufGJlYXJlcikgKy9pLCBcIlwiKTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYXV0aC5iaW5kKG51bGwsIHRva2VuKSwge1xuICAgIGhvb2s6IGhvb2suYmluZChudWxsLCB0b2tlbilcbiAgfSk7XG59O1xuZXhwb3J0IHtcbiAgY3JlYXRlVG9rZW5BdXRoXG59O1xuIiwgImNvbnN0IFZFUlNJT04gPSBcIjcuMC42XCI7XG5leHBvcnQge1xuICBWRVJTSU9OXG59O1xuIiwgImltcG9ydCB7IGdldFVzZXJBZ2VudCB9IGZyb20gXCJ1bml2ZXJzYWwtdXNlci1hZ2VudFwiO1xuaW1wb3J0IEhvb2sgZnJvbSBcImJlZm9yZS1hZnRlci1ob29rXCI7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIkBvY3Rva2l0L3JlcXVlc3RcIjtcbmltcG9ydCB7IHdpdGhDdXN0b21SZXF1ZXN0IH0gZnJvbSBcIkBvY3Rva2l0L2dyYXBocWxcIjtcbmltcG9ydCB7IGNyZWF0ZVRva2VuQXV0aCB9IGZyb20gXCJAb2N0b2tpdC9hdXRoLXRva2VuXCI7XG5pbXBvcnQgeyBWRVJTSU9OIH0gZnJvbSBcIi4vdmVyc2lvbi5qc1wiO1xuY29uc3Qgbm9vcCA9ICgpID0+IHtcbn07XG5jb25zdCBjb25zb2xlV2FybiA9IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpO1xuY29uc3QgY29uc29sZUVycm9yID0gY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpO1xuZnVuY3Rpb24gY3JlYXRlTG9nZ2VyKGxvZ2dlciA9IHt9KSB7XG4gIGlmICh0eXBlb2YgbG9nZ2VyLmRlYnVnICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBsb2dnZXIuZGVidWcgPSBub29wO1xuICB9XG4gIGlmICh0eXBlb2YgbG9nZ2VyLmluZm8gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIGxvZ2dlci5pbmZvID0gbm9vcDtcbiAgfVxuICBpZiAodHlwZW9mIGxvZ2dlci53YXJuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBsb2dnZXIud2FybiA9IGNvbnNvbGVXYXJuO1xuICB9XG4gIGlmICh0eXBlb2YgbG9nZ2VyLmVycm9yICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBsb2dnZXIuZXJyb3IgPSBjb25zb2xlRXJyb3I7XG4gIH1cbiAgcmV0dXJuIGxvZ2dlcjtcbn1cbmNvbnN0IHVzZXJBZ2VudFRyYWlsID0gYG9jdG9raXQtY29yZS5qcy8ke1ZFUlNJT059ICR7Z2V0VXNlckFnZW50KCl9YDtcbmNsYXNzIE9jdG9raXQge1xuICBzdGF0aWMgVkVSU0lPTiA9IFZFUlNJT047XG4gIHN0YXRpYyBkZWZhdWx0cyhkZWZhdWx0cykge1xuICAgIGNvbnN0IE9jdG9raXRXaXRoRGVmYXVsdHMgPSBjbGFzcyBleHRlbmRzIHRoaXMge1xuICAgICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gYXJnc1swXSB8fCB7fTtcbiAgICAgICAgaWYgKHR5cGVvZiBkZWZhdWx0cyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgc3VwZXIoZGVmYXVsdHMob3B0aW9ucykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBkZWZhdWx0cyxcbiAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zLnVzZXJBZ2VudCAmJiBkZWZhdWx0cy51c2VyQWdlbnQgPyB7XG4gICAgICAgICAgICAgIHVzZXJBZ2VudDogYCR7b3B0aW9ucy51c2VyQWdlbnR9ICR7ZGVmYXVsdHMudXNlckFnZW50fWBcbiAgICAgICAgICAgIH0gOiBudWxsXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE9jdG9raXRXaXRoRGVmYXVsdHM7XG4gIH1cbiAgc3RhdGljIHBsdWdpbnMgPSBbXTtcbiAgLyoqXG4gICAqIEF0dGFjaCBhIHBsdWdpbiAob3IgbWFueSkgdG8geW91ciBPY3Rva2l0IGluc3RhbmNlLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBjb25zdCBBUEkgPSBPY3Rva2l0LnBsdWdpbihwbHVnaW4xLCBwbHVnaW4yLCBwbHVnaW4zLCAuLi4pXG4gICAqL1xuICBzdGF0aWMgcGx1Z2luKC4uLm5ld1BsdWdpbnMpIHtcbiAgICBjb25zdCBjdXJyZW50UGx1Z2lucyA9IHRoaXMucGx1Z2lucztcbiAgICBjb25zdCBOZXdPY3Rva2l0ID0gY2xhc3MgZXh0ZW5kcyB0aGlzIHtcbiAgICAgIHN0YXRpYyBwbHVnaW5zID0gY3VycmVudFBsdWdpbnMuY29uY2F0KFxuICAgICAgICBuZXdQbHVnaW5zLmZpbHRlcigocGx1Z2luKSA9PiAhY3VycmVudFBsdWdpbnMuaW5jbHVkZXMocGx1Z2luKSlcbiAgICAgICk7XG4gICAgfTtcbiAgICByZXR1cm4gTmV3T2N0b2tpdDtcbiAgfVxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBob29rID0gbmV3IEhvb2suQ29sbGVjdGlvbigpO1xuICAgIGNvbnN0IHJlcXVlc3REZWZhdWx0cyA9IHtcbiAgICAgIGJhc2VVcmw6IHJlcXVlc3QuZW5kcG9pbnQuREVGQVVMVFMuYmFzZVVybCxcbiAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgcmVxdWVzdDogT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucy5yZXF1ZXN0LCB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgaW50ZXJuYWwgdXNhZ2Ugb25seSwgbm8gbmVlZCB0byB0eXBlXG4gICAgICAgIGhvb2s6IGhvb2suYmluZChudWxsLCBcInJlcXVlc3RcIilcbiAgICAgIH0pLFxuICAgICAgbWVkaWFUeXBlOiB7XG4gICAgICAgIHByZXZpZXdzOiBbXSxcbiAgICAgICAgZm9ybWF0OiBcIlwiXG4gICAgICB9XG4gICAgfTtcbiAgICByZXF1ZXN0RGVmYXVsdHMuaGVhZGVyc1tcInVzZXItYWdlbnRcIl0gPSBvcHRpb25zLnVzZXJBZ2VudCA/IGAke29wdGlvbnMudXNlckFnZW50fSAke3VzZXJBZ2VudFRyYWlsfWAgOiB1c2VyQWdlbnRUcmFpbDtcbiAgICBpZiAob3B0aW9ucy5iYXNlVXJsKSB7XG4gICAgICByZXF1ZXN0RGVmYXVsdHMuYmFzZVVybCA9IG9wdGlvbnMuYmFzZVVybDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucHJldmlld3MpIHtcbiAgICAgIHJlcXVlc3REZWZhdWx0cy5tZWRpYVR5cGUucHJldmlld3MgPSBvcHRpb25zLnByZXZpZXdzO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy50aW1lWm9uZSkge1xuICAgICAgcmVxdWVzdERlZmF1bHRzLmhlYWRlcnNbXCJ0aW1lLXpvbmVcIl0gPSBvcHRpb25zLnRpbWVab25lO1xuICAgIH1cbiAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0LmRlZmF1bHRzKHJlcXVlc3REZWZhdWx0cyk7XG4gICAgdGhpcy5ncmFwaHFsID0gd2l0aEN1c3RvbVJlcXVlc3QodGhpcy5yZXF1ZXN0KS5kZWZhdWx0cyhyZXF1ZXN0RGVmYXVsdHMpO1xuICAgIHRoaXMubG9nID0gY3JlYXRlTG9nZ2VyKG9wdGlvbnMubG9nKTtcbiAgICB0aGlzLmhvb2sgPSBob29rO1xuICAgIGlmICghb3B0aW9ucy5hdXRoU3RyYXRlZ3kpIHtcbiAgICAgIGlmICghb3B0aW9ucy5hdXRoKSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IGFzeW5jICgpID0+ICh7XG4gICAgICAgICAgdHlwZTogXCJ1bmF1dGhlbnRpY2F0ZWRcIlxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGF1dGggPSBjcmVhdGVUb2tlbkF1dGgob3B0aW9ucy5hdXRoKTtcbiAgICAgICAgaG9vay53cmFwKFwicmVxdWVzdFwiLCBhdXRoLmhvb2spO1xuICAgICAgICB0aGlzLmF1dGggPSBhdXRoO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IGF1dGhTdHJhdGVneSwgLi4ub3RoZXJPcHRpb25zIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgYXV0aCA9IGF1dGhTdHJhdGVneShcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXF1ZXN0OiB0aGlzLnJlcXVlc3QsXG4gICAgICAgICAgICBsb2c6IHRoaXMubG9nLFxuICAgICAgICAgICAgLy8gd2UgcGFzcyB0aGUgY3VycmVudCBvY3Rva2l0IGluc3RhbmNlIGFzIHdlbGwgYXMgaXRzIGNvbnN0cnVjdG9yIG9wdGlvbnNcbiAgICAgICAgICAgIC8vIHRvIGFsbG93IGZvciBhdXRoZW50aWNhdGlvbiBzdHJhdGVnaWVzIHRoYXQgcmV0dXJuIGEgbmV3IG9jdG9raXQgaW5zdGFuY2VcbiAgICAgICAgICAgIC8vIHRoYXQgc2hhcmVzIHRoZSBzYW1lIGludGVybmFsIHN0YXRlIGFzIHRoZSBjdXJyZW50IG9uZS4gVGhlIG9yaWdpbmFsXG4gICAgICAgICAgICAvLyByZXF1aXJlbWVudCBmb3IgdGhpcyB3YXMgdGhlIFwiZXZlbnQtb2N0b2tpdFwiIGF1dGhlbnRpY2F0aW9uIHN0cmF0ZWd5XG4gICAgICAgICAgICAvLyBvZiBodHRwczovL2dpdGh1Yi5jb20vcHJvYm90L29jdG9raXQtYXV0aC1wcm9ib3QuXG4gICAgICAgICAgICBvY3Rva2l0OiB0aGlzLFxuICAgICAgICAgICAgb2N0b2tpdE9wdGlvbnM6IG90aGVyT3B0aW9uc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb3B0aW9ucy5hdXRoXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICBob29rLndyYXAoXCJyZXF1ZXN0XCIsIGF1dGguaG9vayk7XG4gICAgICB0aGlzLmF1dGggPSBhdXRoO1xuICAgIH1cbiAgICBjb25zdCBjbGFzc0NvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzQ29uc3RydWN0b3IucGx1Z2lucy5sZW5ndGg7ICsraSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjbGFzc0NvbnN0cnVjdG9yLnBsdWdpbnNbaV0odGhpcywgb3B0aW9ucykpO1xuICAgIH1cbiAgfVxuICAvLyBhc3NpZ25lZCBkdXJpbmcgY29uc3RydWN0b3JcbiAgcmVxdWVzdDtcbiAgZ3JhcGhxbDtcbiAgbG9nO1xuICBob29rO1xuICAvLyBUT0RPOiB0eXBlIGBvY3Rva2l0LmF1dGhgIGJhc2VkIG9uIHBhc3NlZCBvcHRpb25zLmF1dGhTdHJhdGVneVxuICBhdXRoO1xufVxuZXhwb3J0IHtcbiAgT2N0b2tpdFxufTtcbiIsICJjb25zdCBWRVJTSU9OID0gXCI2LjAuMFwiO1xuZXhwb3J0IHtcbiAgVkVSU0lPTlxufTtcbiIsICJpbXBvcnQgeyBWRVJTSU9OIH0gZnJvbSBcIi4vdmVyc2lvbi5qc1wiO1xuZnVuY3Rpb24gcmVxdWVzdExvZyhvY3Rva2l0KSB7XG4gIG9jdG9raXQuaG9vay53cmFwKFwicmVxdWVzdFwiLCAocmVxdWVzdCwgb3B0aW9ucykgPT4ge1xuICAgIG9jdG9raXQubG9nLmRlYnVnKFwicmVxdWVzdFwiLCBvcHRpb25zKTtcbiAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSBvY3Rva2l0LnJlcXVlc3QuZW5kcG9pbnQucGFyc2Uob3B0aW9ucyk7XG4gICAgY29uc3QgcGF0aCA9IHJlcXVlc3RPcHRpb25zLnVybC5yZXBsYWNlKG9wdGlvbnMuYmFzZVVybCwgXCJcIik7XG4gICAgcmV0dXJuIHJlcXVlc3Qob3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3RJZCA9IHJlc3BvbnNlLmhlYWRlcnNbXCJ4LWdpdGh1Yi1yZXF1ZXN0LWlkXCJdO1xuICAgICAgb2N0b2tpdC5sb2cuaW5mbyhcbiAgICAgICAgYCR7cmVxdWVzdE9wdGlvbnMubWV0aG9kfSAke3BhdGh9IC0gJHtyZXNwb25zZS5zdGF0dXN9IHdpdGggaWQgJHtyZXF1ZXN0SWR9IGluICR7RGF0ZS5ub3coKSAtIHN0YXJ0fW1zYFxuICAgICAgKTtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3RJZCA9IGVycm9yLnJlc3BvbnNlPy5oZWFkZXJzW1wieC1naXRodWItcmVxdWVzdC1pZFwiXSB8fCBcIlVOS05PV05cIjtcbiAgICAgIG9jdG9raXQubG9nLmVycm9yKFxuICAgICAgICBgJHtyZXF1ZXN0T3B0aW9ucy5tZXRob2R9ICR7cGF0aH0gLSAke2Vycm9yLnN0YXR1c30gd2l0aCBpZCAke3JlcXVlc3RJZH0gaW4gJHtEYXRlLm5vdygpIC0gc3RhcnR9bXNgXG4gICAgICApO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSk7XG4gIH0pO1xufVxucmVxdWVzdExvZy5WRVJTSU9OID0gVkVSU0lPTjtcbmV4cG9ydCB7XG4gIHJlcXVlc3RMb2dcbn07XG4iLCAiLy8gcGtnL2Rpc3Qtc3JjL3ZlcnNpb24uanNcbnZhciBWRVJTSU9OID0gXCIwLjAuMC1kZXZlbG9wbWVudFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvbm9ybWFsaXplLXBhZ2luYXRlZC1saXN0LXJlc3BvbnNlLmpzXG5mdW5jdGlvbiBub3JtYWxpemVQYWdpbmF0ZWRMaXN0UmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgaWYgKCFyZXNwb25zZS5kYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlc3BvbnNlLFxuICAgICAgZGF0YTogW11cbiAgICB9O1xuICB9XG4gIGNvbnN0IHJlc3BvbnNlTmVlZHNOb3JtYWxpemF0aW9uID0gKFwidG90YWxfY291bnRcIiBpbiByZXNwb25zZS5kYXRhIHx8IFwidG90YWxfY29tbWl0c1wiIGluIHJlc3BvbnNlLmRhdGEpICYmICEoXCJ1cmxcIiBpbiByZXNwb25zZS5kYXRhKTtcbiAgaWYgKCFyZXNwb25zZU5lZWRzTm9ybWFsaXphdGlvbikgcmV0dXJuIHJlc3BvbnNlO1xuICBjb25zdCBpbmNvbXBsZXRlUmVzdWx0cyA9IHJlc3BvbnNlLmRhdGEuaW5jb21wbGV0ZV9yZXN1bHRzO1xuICBjb25zdCByZXBvc2l0b3J5U2VsZWN0aW9uID0gcmVzcG9uc2UuZGF0YS5yZXBvc2l0b3J5X3NlbGVjdGlvbjtcbiAgY29uc3QgdG90YWxDb3VudCA9IHJlc3BvbnNlLmRhdGEudG90YWxfY291bnQ7XG4gIGNvbnN0IHRvdGFsQ29tbWl0cyA9IHJlc3BvbnNlLmRhdGEudG90YWxfY29tbWl0cztcbiAgZGVsZXRlIHJlc3BvbnNlLmRhdGEuaW5jb21wbGV0ZV9yZXN1bHRzO1xuICBkZWxldGUgcmVzcG9uc2UuZGF0YS5yZXBvc2l0b3J5X3NlbGVjdGlvbjtcbiAgZGVsZXRlIHJlc3BvbnNlLmRhdGEudG90YWxfY291bnQ7XG4gIGRlbGV0ZSByZXNwb25zZS5kYXRhLnRvdGFsX2NvbW1pdHM7XG4gIGNvbnN0IG5hbWVzcGFjZUtleSA9IE9iamVjdC5rZXlzKHJlc3BvbnNlLmRhdGEpWzBdO1xuICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YVtuYW1lc3BhY2VLZXldO1xuICByZXNwb25zZS5kYXRhID0gZGF0YTtcbiAgaWYgKHR5cGVvZiBpbmNvbXBsZXRlUmVzdWx0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJlc3BvbnNlLmRhdGEuaW5jb21wbGV0ZV9yZXN1bHRzID0gaW5jb21wbGV0ZVJlc3VsdHM7XG4gIH1cbiAgaWYgKHR5cGVvZiByZXBvc2l0b3J5U2VsZWN0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmVzcG9uc2UuZGF0YS5yZXBvc2l0b3J5X3NlbGVjdGlvbiA9IHJlcG9zaXRvcnlTZWxlY3Rpb247XG4gIH1cbiAgcmVzcG9uc2UuZGF0YS50b3RhbF9jb3VudCA9IHRvdGFsQ291bnQ7XG4gIHJlc3BvbnNlLmRhdGEudG90YWxfY29tbWl0cyA9IHRvdGFsQ29tbWl0cztcbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaXRlcmF0b3IuanNcbmZ1bmN0aW9uIGl0ZXJhdG9yKG9jdG9raXQsIHJvdXRlLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB0eXBlb2Ygcm91dGUgPT09IFwiZnVuY3Rpb25cIiA/IHJvdXRlLmVuZHBvaW50KHBhcmFtZXRlcnMpIDogb2N0b2tpdC5yZXF1ZXN0LmVuZHBvaW50KHJvdXRlLCBwYXJhbWV0ZXJzKTtcbiAgY29uc3QgcmVxdWVzdE1ldGhvZCA9IHR5cGVvZiByb3V0ZSA9PT0gXCJmdW5jdGlvblwiID8gcm91dGUgOiBvY3Rva2l0LnJlcXVlc3Q7XG4gIGNvbnN0IG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kO1xuICBjb25zdCBoZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xuICBsZXQgdXJsID0gb3B0aW9ucy51cmw7XG4gIHJldHVybiB7XG4gICAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXTogKCkgPT4gKHtcbiAgICAgIGFzeW5jIG5leHQoKSB7XG4gICAgICAgIGlmICghdXJsKSByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0TWV0aG9kKHsgbWV0aG9kLCB1cmwsIGhlYWRlcnMgfSk7XG4gICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFJlc3BvbnNlID0gbm9ybWFsaXplUGFnaW5hdGVkTGlzdFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICB1cmwgPSAoKG5vcm1hbGl6ZWRSZXNwb25zZS5oZWFkZXJzLmxpbmsgfHwgXCJcIikubWF0Y2goXG4gICAgICAgICAgICAvPChbXjw+XSspPjtcXHMqcmVsPVwibmV4dFwiL1xuICAgICAgICAgICkgfHwgW10pWzFdO1xuICAgICAgICAgIGlmICghdXJsICYmIFwidG90YWxfY29tbWl0c1wiIGluIG5vcm1hbGl6ZWRSZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKG5vcm1hbGl6ZWRSZXNwb25zZS51cmwpO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gcGFyc2VkVXJsLnNlYXJjaFBhcmFtcztcbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBwYXJzZUludChwYXJhbXMuZ2V0KFwicGFnZVwiKSB8fCBcIjFcIiwgMTApO1xuICAgICAgICAgICAgY29uc3QgcGVyX3BhZ2UgPSBwYXJzZUludChwYXJhbXMuZ2V0KFwicGVyX3BhZ2VcIikgfHwgXCIyNTBcIiwgMTApO1xuICAgICAgICAgICAgaWYgKHBhZ2UgKiBwZXJfcGFnZSA8IG5vcm1hbGl6ZWRSZXNwb25zZS5kYXRhLnRvdGFsX2NvbW1pdHMpIHtcbiAgICAgICAgICAgICAgcGFyYW1zLnNldChcInBhZ2VcIiwgU3RyaW5nKHBhZ2UgKyAxKSk7XG4gICAgICAgICAgICAgIHVybCA9IHBhcnNlZFVybC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbm9ybWFsaXplZFJlc3BvbnNlIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyAhPT0gNDA5KSB0aHJvdyBlcnJvcjtcbiAgICAgICAgICB1cmwgPSBcIlwiO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgICAgIGRhdGE6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH07XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9wYWdpbmF0ZS5qc1xuZnVuY3Rpb24gcGFnaW5hdGUob2N0b2tpdCwgcm91dGUsIHBhcmFtZXRlcnMsIG1hcEZuKSB7XG4gIGlmICh0eXBlb2YgcGFyYW1ldGVycyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgbWFwRm4gPSBwYXJhbWV0ZXJzO1xuICAgIHBhcmFtZXRlcnMgPSB2b2lkIDA7XG4gIH1cbiAgcmV0dXJuIGdhdGhlcihcbiAgICBvY3Rva2l0LFxuICAgIFtdLFxuICAgIGl0ZXJhdG9yKG9jdG9raXQsIHJvdXRlLCBwYXJhbWV0ZXJzKVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSxcbiAgICBtYXBGblxuICApO1xufVxuZnVuY3Rpb24gZ2F0aGVyKG9jdG9raXQsIHJlc3VsdHMsIGl0ZXJhdG9yMiwgbWFwRm4pIHtcbiAgcmV0dXJuIGl0ZXJhdG9yMi5uZXh0KCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgaWYgKHJlc3VsdC5kb25lKSB7XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gICAgbGV0IGVhcmx5RXhpdCA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBlYXJseUV4aXQgPSB0cnVlO1xuICAgIH1cbiAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoXG4gICAgICBtYXBGbiA/IG1hcEZuKHJlc3VsdC52YWx1ZSwgZG9uZSkgOiByZXN1bHQudmFsdWUuZGF0YVxuICAgICk7XG4gICAgaWYgKGVhcmx5RXhpdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICAgIHJldHVybiBnYXRoZXIob2N0b2tpdCwgcmVzdWx0cywgaXRlcmF0b3IyLCBtYXBGbik7XG4gIH0pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvY29tcG9zZS1wYWdpbmF0ZS5qc1xudmFyIGNvbXBvc2VQYWdpbmF0ZVJlc3QgPSBPYmplY3QuYXNzaWduKHBhZ2luYXRlLCB7XG4gIGl0ZXJhdG9yXG59KTtcblxuLy8gcGtnL2Rpc3Qtc3JjL2dlbmVyYXRlZC9wYWdpbmF0aW5nLWVuZHBvaW50cy5qc1xudmFyIHBhZ2luYXRpbmdFbmRwb2ludHMgPSBbXG4gIFwiR0VUIC9hZHZpc29yaWVzXCIsXG4gIFwiR0VUIC9hcHAvaG9vay9kZWxpdmVyaWVzXCIsXG4gIFwiR0VUIC9hcHAvaW5zdGFsbGF0aW9uLXJlcXVlc3RzXCIsXG4gIFwiR0VUIC9hcHAvaW5zdGFsbGF0aW9uc1wiLFxuICBcIkdFVCAvYXNzaWdubWVudHMve2Fzc2lnbm1lbnRfaWR9L2FjY2VwdGVkX2Fzc2lnbm1lbnRzXCIsXG4gIFwiR0VUIC9jbGFzc3Jvb21zXCIsXG4gIFwiR0VUIC9jbGFzc3Jvb21zL3tjbGFzc3Jvb21faWR9L2Fzc2lnbm1lbnRzXCIsXG4gIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9uc1wiLFxuICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2RlcGVuZGFib3QvYWxlcnRzXCIsXG4gIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXNcIixcbiAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9tZW1iZXJzaGlwc1wiLFxuICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L29yZ2FuaXphdGlvbnNcIixcbiAgXCJHRVQgL2V2ZW50c1wiLFxuICBcIkdFVCAvZ2lzdHNcIixcbiAgXCJHRVQgL2dpc3RzL3B1YmxpY1wiLFxuICBcIkdFVCAvZ2lzdHMvc3RhcnJlZFwiLFxuICBcIkdFVCAvZ2lzdHMve2dpc3RfaWR9L2NvbW1lbnRzXCIsXG4gIFwiR0VUIC9naXN0cy97Z2lzdF9pZH0vY29tbWl0c1wiLFxuICBcIkdFVCAvZ2lzdHMve2dpc3RfaWR9L2ZvcmtzXCIsXG4gIFwiR0VUIC9pbnN0YWxsYXRpb24vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9pc3N1ZXNcIixcbiAgXCJHRVQgL2xpY2Vuc2VzXCIsXG4gIFwiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3BsYW5zXCIsXG4gIFwiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3BsYW5zL3twbGFuX2lkfS9hY2NvdW50c1wiLFxuICBcIkdFVCAvbWFya2V0cGxhY2VfbGlzdGluZy9zdHViYmVkL3BsYW5zXCIsXG4gIFwiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3N0dWJiZWQvcGxhbnMve3BsYW5faWR9L2FjY291bnRzXCIsXG4gIFwiR0VUIC9uZXR3b3Jrcy97b3duZXJ9L3tyZXBvfS9ldmVudHNcIixcbiAgXCJHRVQgL25vdGlmaWNhdGlvbnNcIixcbiAgXCJHRVQgL29yZ2FuaXphdGlvbnNcIixcbiAgXCJHRVQgL29yZ2FuaXphdGlvbnMve29yZ30vZGVwZW5kYWJvdC9yZXBvc2l0b3J5LWFjY2Vzc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2NhY2hlL3VzYWdlLWJ5LXJlcG9zaXRvcnlcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVyc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3NlbGYtaG9zdGVkLXJ1bm5lcnMvcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVyLWdyb3Vwc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lci1ncm91cHMve3J1bm5lcl9ncm91cF9pZH0vaG9zdGVkLXJ1bm5lcnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXItZ3JvdXBzL3tydW5uZXJfZ3JvdXBfaWR9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lci1ncm91cHMve3J1bm5lcl9ncm91cF9pZH0vcnVubmVyc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2F0dGVzdGF0aW9ucy9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYXR0ZXN0YXRpb25zL3tzdWJqZWN0X2RpZ2VzdH1cIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYmxvY2tzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NhbXBhaWduc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9jb2RlLXNjYW5uaW5nL2FsZXJ0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vY29waWxvdC9iaWxsaW5nL3NlYXRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NvcGlsb3QvbWV0cmljc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L2FsZXJ0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2V2ZW50c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9mYWlsZWRfaW52aXRhdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaG9va3NcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9L2RlbGl2ZXJpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaW5zaWdodHMvYXBpL3JvdXRlLXN0YXRzL3thY3Rvcl90eXBlfS97YWN0b3JfaWR9XCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2luc2lnaHRzL2FwaS9zdWJqZWN0LXN0YXRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2luc2lnaHRzL2FwaS91c2VyLXN0YXRzL3t1c2VyX2lkfVwiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9pbnN0YWxsYXRpb25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2ludml0YXRpb25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2ludml0YXRpb25zL3tpbnZpdGF0aW9uX2lkfS90ZWFtc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9pc3N1ZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vbWVtYmVyc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9tZW1iZXJzL3t1c2VybmFtZX0vY29kZXNwYWNlc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9taWdyYXRpb25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlcy97cm9sZV9pZH0vdGVhbXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3tyb2xlX2lkfS91c2Vyc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9vdXRzaWRlX2NvbGxhYm9yYXRvcnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcGFja2FnZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2VuLXJlcXVlc3RzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbi1yZXF1ZXN0cy97cGF0X3JlcXVlc3RfaWR9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW5zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbnMve3BhdF9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3ByaXZhdGUtcmVnaXN0cmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wcm9qZWN0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wcm9qZWN0c1YyXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9maWVsZHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3Byb3BlcnRpZXMvdmFsdWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3B1YmxpY19tZW1iZXJzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3JlcG9zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3J1bGVzZXRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3J1bGVzZXRzL3J1bGUtc3VpdGVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3J1bGVzZXRzL3tydWxlc2V0X2lkfS9oaXN0b3J5XCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3NlY3JldC1zY2FubmluZy9hbGVydHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vc2VjdXJpdHktYWR2aXNvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9pbW11dGFibGUtcmVsZWFzZXMvcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL25ldHdvcmstY29uZmlndXJhdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbS97dGVhbV9zbHVnfS9jb3BpbG90L21ldHJpY3NcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzL3tjb21tZW50X251bWJlcn0vcmVhY3Rpb25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vcmVhY3Rpb25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2ludml0YXRpb25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L21lbWJlcnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vcHJvamVjdHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vcmVwb3NcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vdGVhbXNcIixcbiAgXCJHRVQgL3Byb2plY3RzL3twcm9qZWN0X2lkfS9jb2xsYWJvcmF0b3JzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2FydGlmYWN0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9jYWNoZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvb3JnYW5pemF0aW9uLXNlY3JldHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvb3JnYW5pemF0aW9uLXZhcmlhYmxlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hcnRpZmFjdHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hdHRlbXB0cy97YXR0ZW1wdF9udW1iZXJ9L2pvYnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9qb2JzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3NlY3JldHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvdmFyaWFibGVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy93b3JrZmxvd3Mve3dvcmtmbG93X2lkfS9ydW5zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpdml0eVwiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXNzaWduZWVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdHRlc3RhdGlvbnMve3N1YmplY3RfZGlnZXN0fVwiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXJ1bnMve2NoZWNrX3J1bl9pZH0vYW5ub3RhdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXN1aXRlcy97Y2hlY2tfc3VpdGVfaWR9L2NoZWNrLXJ1bnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfS9pbnN0YW5jZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYW5hbHlzZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvZGV2Y29udGFpbmVyc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9zZWNyZXRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2xsYWJvcmF0b3JzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97Y29tbWl0X3NoYX0vY29tbWVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve2NvbW1pdF9zaGF9L3B1bGxzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tyZWZ9L2NoZWNrLXJ1bnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vY2hlY2stc3VpdGVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tyZWZ9L3N0YXR1c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97cmVmfS9zdGF0dXNlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tcGFyZS97YmFzZWhlYWR9XCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21wYXJlL3tiYXNlfS4uLntoZWFkfVwiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29udHJpYnV0b3JzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L2FsZXJ0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9zZWNyZXRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBsb3ltZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwbG95bWVudHMve2RlcGxveW1lbnRfaWR9L3N0YXR1c2VzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudC1icmFuY2gtcG9saWNpZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudF9wcm90ZWN0aW9uX3J1bGVzL2FwcHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vc2VjcmV0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS92YXJpYWJsZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2V2ZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZm9ya3NcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH0vZGVsaXZlcmllc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaW52aXRhdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2V2ZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vZGVwZW5kZW5jaWVzL2Jsb2NrZWRfYnlcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9kZXBlbmRlbmNpZXMvYmxvY2tpbmdcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9ldmVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sYWJlbHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9zdWJfaXNzdWVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vdGltZWxpbmVcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2tleXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2xhYmVsc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbWlsZXN0b25lc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbWlsZXN0b25lcy97bWlsZXN0b25lX251bWJlcn0vbGFiZWxzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ub3RpZmljYXRpb25zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlcy9idWlsZHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3Byb2plY3RzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxsc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vY29tbWVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vY29tbWl0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9maWxlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXZpZXdzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3Mve3Jldmlld19pZH0vY29tbWVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH0vYXNzZXRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH0vcmVhY3Rpb25zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlcy9icmFuY2hlcy97YnJhbmNofVwiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzL3J1bGUtc3VpdGVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0cy97cnVsZXNldF9pZH0vaGlzdG9yeVwiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfS9sb2NhdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3VyaXR5LWFkdmlzb3JpZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXJnYXplcnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N1YnNjcmliZXJzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90YWdzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90ZWFtc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdG9waWNzXCIsXG4gIFwiR0VUIC9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL3NlYXJjaC9jb2RlXCIsXG4gIFwiR0VUIC9zZWFyY2gvY29tbWl0c1wiLFxuICBcIkdFVCAvc2VhcmNoL2lzc3Vlc1wiLFxuICBcIkdFVCAvc2VhcmNoL2xhYmVsc1wiLFxuICBcIkdFVCAvc2VhcmNoL3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvc2VhcmNoL3RvcGljc1wiLFxuICBcIkdFVCAvc2VhcmNoL3VzZXJzXCIsXG4gIFwiR0VUIC90ZWFtcy97dGVhbV9pZH0vZGlzY3Vzc2lvbnNcIixcbiAgXCJHRVQgL3RlYW1zL3t0ZWFtX2lkfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gIFwiR0VUIC90ZWFtcy97dGVhbV9pZH0vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9udW1iZXJ9L3JlYWN0aW9uc1wiLFxuICBcIkdFVCAvdGVhbXMve3RlYW1faWR9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vcmVhY3Rpb25zXCIsXG4gIFwiR0VUIC90ZWFtcy97dGVhbV9pZH0vaW52aXRhdGlvbnNcIixcbiAgXCJHRVQgL3RlYW1zL3t0ZWFtX2lkfS9tZW1iZXJzXCIsXG4gIFwiR0VUIC90ZWFtcy97dGVhbV9pZH0vcHJvamVjdHNcIixcbiAgXCJHRVQgL3RlYW1zL3t0ZWFtX2lkfS9yZXBvc1wiLFxuICBcIkdFVCAvdGVhbXMve3RlYW1faWR9L3RlYW1zXCIsXG4gIFwiR0VUIC91c2VyL2Jsb2Nrc1wiLFxuICBcIkdFVCAvdXNlci9jb2Rlc3BhY2VzXCIsXG4gIFwiR0VUIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0c1wiLFxuICBcIkdFVCAvdXNlci9lbWFpbHNcIixcbiAgXCJHRVQgL3VzZXIvZm9sbG93ZXJzXCIsXG4gIFwiR0VUIC91c2VyL2ZvbGxvd2luZ1wiLFxuICBcIkdFVCAvdXNlci9ncGdfa2V5c1wiLFxuICBcIkdFVCAvdXNlci9pbnN0YWxsYXRpb25zXCIsXG4gIFwiR0VUIC91c2VyL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC91c2VyL2lzc3Vlc1wiLFxuICBcIkdFVCAvdXNlci9rZXlzXCIsXG4gIFwiR0VUIC91c2VyL21hcmtldHBsYWNlX3B1cmNoYXNlc1wiLFxuICBcIkdFVCAvdXNlci9tYXJrZXRwbGFjZV9wdXJjaGFzZXMvc3R1YmJlZFwiLFxuICBcIkdFVCAvdXNlci9tZW1iZXJzaGlwcy9vcmdzXCIsXG4gIFwiR0VUIC91c2VyL21pZ3JhdGlvbnNcIixcbiAgXCJHRVQgL3VzZXIvbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL3VzZXIvb3Jnc1wiLFxuICBcIkdFVCAvdXNlci9wYWNrYWdlc1wiLFxuICBcIkdFVCAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9uc1wiLFxuICBcIkdFVCAvdXNlci9wdWJsaWNfZW1haWxzXCIsXG4gIFwiR0VUIC91c2VyL3JlcG9zXCIsXG4gIFwiR0VUIC91c2VyL3JlcG9zaXRvcnlfaW52aXRhdGlvbnNcIixcbiAgXCJHRVQgL3VzZXIvc29jaWFsX2FjY291bnRzXCIsXG4gIFwiR0VUIC91c2VyL3NzaF9zaWduaW5nX2tleXNcIixcbiAgXCJHRVQgL3VzZXIvc3RhcnJlZFwiLFxuICBcIkdFVCAvdXNlci9zdWJzY3JpcHRpb25zXCIsXG4gIFwiR0VUIC91c2VyL3RlYW1zXCIsXG4gIFwiR0VUIC91c2Vyc1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9hdHRlc3RhdGlvbnMve3N1YmplY3RfZGlnZXN0fVwiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ldmVudHNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZXZlbnRzL29yZ3Mve29yZ31cIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZXZlbnRzL3B1YmxpY1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9mb2xsb3dlcnNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZm9sbG93aW5nXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2dpc3RzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2dwZ19rZXlzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2tleXNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vb3Jnc1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wYWNrYWdlc1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9maWVsZHNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3JlY2VpdmVkX2V2ZW50c1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9yZWNlaXZlZF9ldmVudHMvcHVibGljXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3JlcG9zXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3NvY2lhbF9hY2NvdW50c1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zc2hfc2lnbmluZ19rZXlzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3N0YXJyZWRcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc3Vic2NyaXB0aW9uc1wiXG5dO1xuXG4vLyBwa2cvZGlzdC1zcmMvcGFnaW5hdGluZy1lbmRwb2ludHMuanNcbmZ1bmN0aW9uIGlzUGFnaW5hdGluZ0VuZHBvaW50KGFyZykge1xuICBpZiAodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBwYWdpbmF0aW5nRW5kcG9pbnRzLmluY2x1ZGVzKGFyZyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9pbmRleC5qc1xuZnVuY3Rpb24gcGFnaW5hdGVSZXN0KG9jdG9raXQpIHtcbiAgcmV0dXJuIHtcbiAgICBwYWdpbmF0ZTogT2JqZWN0LmFzc2lnbihwYWdpbmF0ZS5iaW5kKG51bGwsIG9jdG9raXQpLCB7XG4gICAgICBpdGVyYXRvcjogaXRlcmF0b3IuYmluZChudWxsLCBvY3Rva2l0KVxuICAgIH0pXG4gIH07XG59XG5wYWdpbmF0ZVJlc3QuVkVSU0lPTiA9IFZFUlNJT047XG5leHBvcnQge1xuICBjb21wb3NlUGFnaW5hdGVSZXN0LFxuICBpc1BhZ2luYXRpbmdFbmRwb2ludCxcbiAgcGFnaW5hdGVSZXN0LFxuICBwYWdpbmF0aW5nRW5kcG9pbnRzXG59O1xuIiwgImV4cG9ydCBjb25zdCBWRVJTSU9OID0gXCIxNy4wLjBcIjtcbiIsICJpbXBvcnQgdHlwZSB7IEVuZHBvaW50c0RlZmF1bHRzQW5kRGVjb3JhdGlvbnMgfSBmcm9tIFwiLi4vdHlwZXMuanNcIjtcbmNvbnN0IEVuZHBvaW50czogRW5kcG9pbnRzRGVmYXVsdHNBbmREZWNvcmF0aW9ucyA9IHtcbiAgYWN0aW9uczoge1xuICAgIGFkZEN1c3RvbUxhYmVsc1RvU2VsZkhvc3RlZFJ1bm5lckZvck9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIGFkZEN1c3RvbUxhYmVsc1RvU2VsZkhvc3RlZFJ1bm5lckZvclJlcG86IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9L2xhYmVsc1wiLFxuICAgIF0sXG4gICAgYWRkUmVwb0FjY2Vzc1RvU2VsZkhvc3RlZFJ1bm5lckdyb3VwSW5Pcmc6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVyLWdyb3Vwcy97cnVubmVyX2dyb3VwX2lkfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBhZGRTZWxlY3RlZFJlcG9Ub09yZ1NlY3JldDogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgYWRkU2VsZWN0ZWRSZXBvVG9PcmdWYXJpYWJsZTogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIGFwcHJvdmVXb3JrZmxvd1J1bjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vYXBwcm92ZVwiLFxuICAgIF0sXG4gICAgY2FuY2VsV29ya2Zsb3dSdW46IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2NhbmNlbFwiLFxuICAgIF0sXG4gICAgY3JlYXRlRW52aXJvbm1lbnRWYXJpYWJsZTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3ZhcmlhYmxlc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlSG9zdGVkUnVubmVyRm9yT3JnOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnNcIl0sXG4gICAgY3JlYXRlT3JVcGRhdGVFbnZpcm9ubWVudFNlY3JldDogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBjcmVhdGVPclVwZGF0ZU9yZ1NlY3JldDogW1wiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJdLFxuICAgIGNyZWF0ZU9yVXBkYXRlUmVwb1NlY3JldDogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBjcmVhdGVPcmdWYXJpYWJsZTogW1wiUE9TVCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlc1wiXSxcbiAgICBjcmVhdGVSZWdpc3RyYXRpb25Ub2tlbkZvck9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy9yZWdpc3RyYXRpb24tdG9rZW5cIixcbiAgICBdLFxuICAgIGNyZWF0ZVJlZ2lzdHJhdGlvblRva2VuRm9yUmVwbzogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMvcmVnaXN0cmF0aW9uLXRva2VuXCIsXG4gICAgXSxcbiAgICBjcmVhdGVSZW1vdmVUb2tlbkZvck9yZzogW1wiUE9TVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMvcmVtb3ZlLXRva2VuXCJdLFxuICAgIGNyZWF0ZVJlbW92ZVRva2VuRm9yUmVwbzogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMvcmVtb3ZlLXRva2VuXCIsXG4gICAgXSxcbiAgICBjcmVhdGVSZXBvVmFyaWFibGU6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvdmFyaWFibGVzXCJdLFxuICAgIGNyZWF0ZVdvcmtmbG93RGlzcGF0Y2g6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy93b3JrZmxvd3Mve3dvcmtmbG93X2lkfS9kaXNwYXRjaGVzXCIsXG4gICAgXSxcbiAgICBkZWxldGVBY3Rpb25zQ2FjaGVCeUlkOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9jYWNoZXMve2NhY2hlX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlQWN0aW9uc0NhY2hlQnlLZXk6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2NhY2hlc3s/a2V5LHJlZn1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUFydGlmYWN0OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9hcnRpZmFjdHMve2FydGlmYWN0X2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlQ3VzdG9tSW1hZ2VGcm9tT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL2ltYWdlcy9jdXN0b20ve2ltYWdlX2RlZmluaXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVDdXN0b21JbWFnZVZlcnNpb25Gcm9tT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL2ltYWdlcy9jdXN0b20ve2ltYWdlX2RlZmluaXRpb25faWR9L3ZlcnNpb25zL3t2ZXJzaW9ufVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRW52aXJvbm1lbnRTZWNyZXQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRW52aXJvbm1lbnRWYXJpYWJsZTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vdmFyaWFibGVzL3tuYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlSG9zdGVkUnVubmVyRm9yT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL3tob3N0ZWRfcnVubmVyX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlT3JnU2VjcmV0OiBbXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZGVsZXRlT3JnVmFyaWFibGU6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX1cIl0sXG4gICAgZGVsZXRlUmVwb1NlY3JldDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVSZXBvVmFyaWFibGU6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX1cIixcbiAgICBdLFxuICAgIGRlbGV0ZVNlbGZIb3N0ZWRSdW5uZXJGcm9tT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZVNlbGZIb3N0ZWRSdW5uZXJGcm9tUmVwbzogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlV29ya2Zsb3dSdW46IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9XCJdLFxuICAgIGRlbGV0ZVdvcmtmbG93UnVuTG9nczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9sb2dzXCIsXG4gICAgXSxcbiAgICBkaXNhYmxlU2VsZWN0ZWRSZXBvc2l0b3J5R2l0aHViQWN0aW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9ucy9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBkaXNhYmxlV29ya2Zsb3c6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93cy97d29ya2Zsb3dfaWR9L2Rpc2FibGVcIixcbiAgICBdLFxuICAgIGRvd25sb2FkQXJ0aWZhY3Q6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2FydGlmYWN0cy97YXJ0aWZhY3RfaWR9L3thcmNoaXZlX2Zvcm1hdH1cIixcbiAgICBdLFxuICAgIGRvd25sb2FkSm9iTG9nc0ZvcldvcmtmbG93UnVuOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9qb2JzL3tqb2JfaWR9L2xvZ3NcIixcbiAgICBdLFxuICAgIGRvd25sb2FkV29ya2Zsb3dSdW5BdHRlbXB0TG9nczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hdHRlbXB0cy97YXR0ZW1wdF9udW1iZXJ9L2xvZ3NcIixcbiAgICBdLFxuICAgIGRvd25sb2FkV29ya2Zsb3dSdW5Mb2dzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2xvZ3NcIixcbiAgICBdLFxuICAgIGVuYWJsZVNlbGVjdGVkUmVwb3NpdG9yeUdpdGh1YkFjdGlvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgZW5hYmxlV29ya2Zsb3c6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93cy97d29ya2Zsb3dfaWR9L2VuYWJsZVwiLFxuICAgIF0sXG4gICAgZm9yY2VDYW5jZWxXb3JrZmxvd1J1bjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vZm9yY2UtY2FuY2VsXCIsXG4gICAgXSxcbiAgICBnZW5lcmF0ZVJ1bm5lckppdGNvbmZpZ0Zvck9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy9nZW5lcmF0ZS1qaXRjb25maWdcIixcbiAgICBdLFxuICAgIGdlbmVyYXRlUnVubmVySml0Y29uZmlnRm9yUmVwbzogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMvZ2VuZXJhdGUtaml0Y29uZmlnXCIsXG4gICAgXSxcbiAgICBnZXRBY3Rpb25zQ2FjaGVMaXN0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvY2FjaGVzXCJdLFxuICAgIGdldEFjdGlvbnNDYWNoZVVzYWdlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvY2FjaGUvdXNhZ2VcIl0sXG4gICAgZ2V0QWN0aW9uc0NhY2hlVXNhZ2VCeVJlcG9Gb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvY2FjaGUvdXNhZ2UtYnktcmVwb3NpdG9yeVwiLFxuICAgIF0sXG4gICAgZ2V0QWN0aW9uc0NhY2hlVXNhZ2VGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2NhY2hlL3VzYWdlXCJdLFxuICAgIGdldEFsbG93ZWRBY3Rpb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3NlbGVjdGVkLWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGdldEFsbG93ZWRBY3Rpb25zUmVwb3NpdG9yeTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcGVybWlzc2lvbnMvc2VsZWN0ZWQtYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgZ2V0QXJ0aWZhY3Q6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9hcnRpZmFjdHMve2FydGlmYWN0X2lkfVwiXSxcbiAgICBnZXRDdXN0b21JbWFnZUZvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy9pbWFnZXMvY3VzdG9tL3tpbWFnZV9kZWZpbml0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0Q3VzdG9tSW1hZ2VWZXJzaW9uRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL2ltYWdlcy9jdXN0b20ve2ltYWdlX2RlZmluaXRpb25faWR9L3ZlcnNpb25zL3t2ZXJzaW9ufVwiLFxuICAgIF0sXG4gICAgZ2V0Q3VzdG9tT2lkY1N1YkNsYWltRm9yUmVwbzogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvb2lkYy9jdXN0b21pemF0aW9uL3N1YlwiLFxuICAgIF0sXG4gICAgZ2V0RW52aXJvbm1lbnRQdWJsaWNLZXk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3NlY3JldHMvcHVibGljLWtleVwiLFxuICAgIF0sXG4gICAgZ2V0RW52aXJvbm1lbnRTZWNyZXQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZ2V0RW52aXJvbm1lbnRWYXJpYWJsZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vdmFyaWFibGVzL3tuYW1lfVwiLFxuICAgIF0sXG4gICAgZ2V0R2l0aHViQWN0aW9uc0RlZmF1bHRXb3JrZmxvd1Blcm1pc3Npb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3dvcmtmbG93XCIsXG4gICAgXSxcbiAgICBnZXRHaXRodWJBY3Rpb25zRGVmYXVsdFdvcmtmbG93UGVybWlzc2lvbnNSZXBvc2l0b3J5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9wZXJtaXNzaW9ucy93b3JrZmxvd1wiLFxuICAgIF0sXG4gICAgZ2V0R2l0aHViQWN0aW9uc1Blcm1pc3Npb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zXCIsXG4gICAgXSxcbiAgICBnZXRHaXRodWJBY3Rpb25zUGVybWlzc2lvbnNSZXBvc2l0b3J5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9wZXJtaXNzaW9uc1wiLFxuICAgIF0sXG4gICAgZ2V0SG9zdGVkUnVubmVyRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL3tob3N0ZWRfcnVubmVyX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0SG9zdGVkUnVubmVyc0dpdGh1Yk93bmVkSW1hZ2VzRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL2ltYWdlcy9naXRodWItb3duZWRcIixcbiAgICBdLFxuICAgIGdldEhvc3RlZFJ1bm5lcnNMaW1pdHNGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvbGltaXRzXCIsXG4gICAgXSxcbiAgICBnZXRIb3N0ZWRSdW5uZXJzTWFjaGluZVNwZWNzRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL21hY2hpbmUtc2l6ZXNcIixcbiAgICBdLFxuICAgIGdldEhvc3RlZFJ1bm5lcnNQYXJ0bmVySW1hZ2VzRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL2ltYWdlcy9wYXJ0bmVyXCIsXG4gICAgXSxcbiAgICBnZXRIb3N0ZWRSdW5uZXJzUGxhdGZvcm1zRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL3BsYXRmb3Jtc1wiLFxuICAgIF0sXG4gICAgZ2V0Sm9iRm9yV29ya2Zsb3dSdW46IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9qb2JzL3tqb2JfaWR9XCJdLFxuICAgIGdldE9yZ1B1YmxpY0tleTogW1wiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0cy9wdWJsaWMta2V5XCJdLFxuICAgIGdldE9yZ1NlY3JldDogW1wiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJdLFxuICAgIGdldE9yZ1ZhcmlhYmxlOiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9XCJdLFxuICAgIGdldFBlbmRpbmdEZXBsb3ltZW50c0ZvclJ1bjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9wZW5kaW5nX2RlcGxveW1lbnRzXCIsXG4gICAgXSxcbiAgICBnZXRSZXBvUGVybWlzc2lvbnM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wiYWN0aW9uc1wiLCBcImdldEdpdGh1YkFjdGlvbnNQZXJtaXNzaW9uc1JlcG9zaXRvcnlcIl0gfSxcbiAgICBdLFxuICAgIGdldFJlcG9QdWJsaWNLZXk6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9zZWNyZXRzL3B1YmxpYy1rZXlcIl0sXG4gICAgZ2V0UmVwb1NlY3JldDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfVwiXSxcbiAgICBnZXRSZXBvVmFyaWFibGU6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9XCJdLFxuICAgIGdldFJldmlld3NGb3JSdW46IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vYXBwcm92YWxzXCIsXG4gICAgXSxcbiAgICBnZXRTZWxmSG9zdGVkUnVubmVyRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9XCJdLFxuICAgIGdldFNlbGZIb3N0ZWRSdW5uZXJGb3JSZXBvOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRXb3JrZmxvdzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93cy97d29ya2Zsb3dfaWR9XCJdLFxuICAgIGdldFdvcmtmbG93QWNjZXNzVG9SZXBvc2l0b3J5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9wZXJtaXNzaW9ucy9hY2Nlc3NcIixcbiAgICBdLFxuICAgIGdldFdvcmtmbG93UnVuOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfVwiXSxcbiAgICBnZXRXb3JrZmxvd1J1bkF0dGVtcHQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vYXR0ZW1wdHMve2F0dGVtcHRfbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgZ2V0V29ya2Zsb3dSdW5Vc2FnZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS90aW1pbmdcIixcbiAgICBdLFxuICAgIGdldFdvcmtmbG93VXNhZ2U6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93cy97d29ya2Zsb3dfaWR9L3RpbWluZ1wiLFxuICAgIF0sXG4gICAgbGlzdEFydGlmYWN0c0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9hcnRpZmFjdHNcIl0sXG4gICAgbGlzdEN1c3RvbUltYWdlVmVyc2lvbnNGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvaW1hZ2VzL2N1c3RvbS97aW1hZ2VfZGVmaW5pdGlvbl9pZH0vdmVyc2lvbnNcIixcbiAgICBdLFxuICAgIGxpc3RDdXN0b21JbWFnZXNGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvaW1hZ2VzL2N1c3RvbVwiLFxuICAgIF0sXG4gICAgbGlzdEVudmlyb25tZW50U2VjcmV0czogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vc2VjcmV0c1wiLFxuICAgIF0sXG4gICAgbGlzdEVudmlyb25tZW50VmFyaWFibGVzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS92YXJpYWJsZXNcIixcbiAgICBdLFxuICAgIGxpc3RHaXRodWJIb3N0ZWRSdW5uZXJzSW5Hcm91cEZvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXItZ3JvdXBzL3tydW5uZXJfZ3JvdXBfaWR9L2hvc3RlZC1ydW5uZXJzXCIsXG4gICAgXSxcbiAgICBsaXN0SG9zdGVkUnVubmVyc0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnNcIl0sXG4gICAgbGlzdEpvYnNGb3JXb3JrZmxvd1J1bjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9qb2JzXCIsXG4gICAgXSxcbiAgICBsaXN0Sm9ic0ZvcldvcmtmbG93UnVuQXR0ZW1wdDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hdHRlbXB0cy97YXR0ZW1wdF9udW1iZXJ9L2pvYnNcIixcbiAgICBdLFxuICAgIGxpc3RMYWJlbHNGb3JTZWxmSG9zdGVkUnVubmVyRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzXCIsXG4gICAgXSxcbiAgICBsaXN0TGFiZWxzRm9yU2VsZkhvc3RlZFJ1bm5lckZvclJlcG86IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzXCIsXG4gICAgXSxcbiAgICBsaXN0T3JnU2VjcmV0czogW1wiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0c1wiXSxcbiAgICBsaXN0T3JnVmFyaWFibGVzOiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXNcIl0sXG4gICAgbGlzdFJlcG9Pcmdhbml6YXRpb25TZWNyZXRzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9vcmdhbml6YXRpb24tc2VjcmV0c1wiLFxuICAgIF0sXG4gICAgbGlzdFJlcG9Pcmdhbml6YXRpb25WYXJpYWJsZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL29yZ2FuaXphdGlvbi12YXJpYWJsZXNcIixcbiAgICBdLFxuICAgIGxpc3RSZXBvU2VjcmV0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3NlY3JldHNcIl0sXG4gICAgbGlzdFJlcG9WYXJpYWJsZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy92YXJpYWJsZXNcIl0sXG4gICAgbGlzdFJlcG9Xb3JrZmxvd3M6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy93b3JrZmxvd3NcIl0sXG4gICAgbGlzdFJ1bm5lckFwcGxpY2F0aW9uc0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy9kb3dubG9hZHNcIl0sXG4gICAgbGlzdFJ1bm5lckFwcGxpY2F0aW9uc0ZvclJlcG86IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMvZG93bmxvYWRzXCIsXG4gICAgXSxcbiAgICBsaXN0U2VsZWN0ZWRSZXBvc0Zvck9yZ1NlY3JldDogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBsaXN0U2VsZWN0ZWRSZXBvc0Zvck9yZ1ZhcmlhYmxlOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBsaXN0U2VsZWN0ZWRSZXBvc2l0b3JpZXNFbmFibGVkR2l0aHViQWN0aW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9ucy9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGxpc3RTZWxmSG9zdGVkUnVubmVyc0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVyc1wiXSxcbiAgICBsaXN0U2VsZkhvc3RlZFJ1bm5lcnNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVyc1wiXSxcbiAgICBsaXN0V29ya2Zsb3dSdW5BcnRpZmFjdHM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vYXJ0aWZhY3RzXCIsXG4gICAgXSxcbiAgICBsaXN0V29ya2Zsb3dSdW5zOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy93b3JrZmxvd3Mve3dvcmtmbG93X2lkfS9ydW5zXCIsXG4gICAgXSxcbiAgICBsaXN0V29ya2Zsb3dSdW5zRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnNcIl0sXG4gICAgcmVSdW5Kb2JGb3JXb3JrZmxvd1J1bjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2pvYnMve2pvYl9pZH0vcmVydW5cIixcbiAgICBdLFxuICAgIHJlUnVuV29ya2Zsb3c6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9yZXJ1blwiXSxcbiAgICByZVJ1bldvcmtmbG93RmFpbGVkSm9iczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vcmVydW4tZmFpbGVkLWpvYnNcIixcbiAgICBdLFxuICAgIHJlbW92ZUFsbEN1c3RvbUxhYmVsc0Zyb21TZWxmSG9zdGVkUnVubmVyRm9yT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzXCIsXG4gICAgXSxcbiAgICByZW1vdmVBbGxDdXN0b21MYWJlbHNGcm9tU2VsZkhvc3RlZFJ1bm5lckZvclJlcG86IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzXCIsXG4gICAgXSxcbiAgICByZW1vdmVDdXN0b21MYWJlbEZyb21TZWxmSG9zdGVkUnVubmVyRm9yT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzL3tuYW1lfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlQ3VzdG9tTGFiZWxGcm9tU2VsZkhvc3RlZFJ1bm5lckZvclJlcG86IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzL3tuYW1lfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlU2VsZWN0ZWRSZXBvRnJvbU9yZ1NlY3JldDogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlU2VsZWN0ZWRSZXBvRnJvbU9yZ1ZhcmlhYmxlOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgcmV2aWV3Q3VzdG9tR2F0ZXNGb3JSdW46IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2RlcGxveW1lbnRfcHJvdGVjdGlvbl9ydWxlXCIsXG4gICAgXSxcbiAgICByZXZpZXdQZW5kaW5nRGVwbG95bWVudHNGb3JSdW46IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L3BlbmRpbmdfZGVwbG95bWVudHNcIixcbiAgICBdLFxuICAgIHNldEFsbG93ZWRBY3Rpb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3NlbGVjdGVkLWFjdGlvbnNcIixcbiAgICBdLFxuICAgIHNldEFsbG93ZWRBY3Rpb25zUmVwb3NpdG9yeTogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcGVybWlzc2lvbnMvc2VsZWN0ZWQtYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgc2V0Q3VzdG9tTGFiZWxzRm9yU2VsZkhvc3RlZFJ1bm5lckZvck9yZzogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9L2xhYmVsc1wiLFxuICAgIF0sXG4gICAgc2V0Q3VzdG9tTGFiZWxzRm9yU2VsZkhvc3RlZFJ1bm5lckZvclJlcG86IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzXCIsXG4gICAgXSxcbiAgICBzZXRDdXN0b21PaWRjU3ViQ2xhaW1Gb3JSZXBvOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9vaWRjL2N1c3RvbWl6YXRpb24vc3ViXCIsXG4gICAgXSxcbiAgICBzZXRHaXRodWJBY3Rpb25zRGVmYXVsdFdvcmtmbG93UGVybWlzc2lvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvd29ya2Zsb3dcIixcbiAgICBdLFxuICAgIHNldEdpdGh1YkFjdGlvbnNEZWZhdWx0V29ya2Zsb3dQZXJtaXNzaW9uc1JlcG9zaXRvcnk6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zL3dvcmtmbG93XCIsXG4gICAgXSxcbiAgICBzZXRHaXRodWJBY3Rpb25zUGVybWlzc2lvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnNcIixcbiAgICBdLFxuICAgIHNldEdpdGh1YkFjdGlvbnNQZXJtaXNzaW9uc1JlcG9zaXRvcnk6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zXCIsXG4gICAgXSxcbiAgICBzZXRTZWxlY3RlZFJlcG9zRm9yT3JnU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIHNldFNlbGVjdGVkUmVwb3NGb3JPcmdWYXJpYWJsZTogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgc2V0U2VsZWN0ZWRSZXBvc2l0b3JpZXNFbmFibGVkR2l0aHViQWN0aW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9ucy9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIHNldFdvcmtmbG93QWNjZXNzVG9SZXBvc2l0b3J5OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9wZXJtaXNzaW9ucy9hY2Nlc3NcIixcbiAgICBdLFxuICAgIHVwZGF0ZUVudmlyb25tZW50VmFyaWFibGU6IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vdmFyaWFibGVzL3tuYW1lfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlSG9zdGVkUnVubmVyRm9yT3JnOiBbXG4gICAgICBcIlBBVENIIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMve2hvc3RlZF9ydW5uZXJfaWR9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVPcmdWYXJpYWJsZTogW1wiUEFUQ0ggL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9XCJdLFxuICAgIHVwZGF0ZVJlcG9WYXJpYWJsZTogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9XCIsXG4gICAgXSxcbiAgfSxcbiAgYWN0aXZpdHk6IHtcbiAgICBjaGVja1JlcG9Jc1N0YXJyZWRCeUF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvc3RhcnJlZC97b3duZXJ9L3tyZXBvfVwiXSxcbiAgICBkZWxldGVSZXBvU3Vic2NyaXB0aW9uOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N1YnNjcmlwdGlvblwiXSxcbiAgICBkZWxldGVUaHJlYWRTdWJzY3JpcHRpb246IFtcbiAgICAgIFwiREVMRVRFIC9ub3RpZmljYXRpb25zL3RocmVhZHMve3RocmVhZF9pZH0vc3Vic2NyaXB0aW9uXCIsXG4gICAgXSxcbiAgICBnZXRGZWVkczogW1wiR0VUIC9mZWVkc1wiXSxcbiAgICBnZXRSZXBvU3Vic2NyaXB0aW9uOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N1YnNjcmlwdGlvblwiXSxcbiAgICBnZXRUaHJlYWQ6IFtcIkdFVCAvbm90aWZpY2F0aW9ucy90aHJlYWRzL3t0aHJlYWRfaWR9XCJdLFxuICAgIGdldFRocmVhZFN1YnNjcmlwdGlvbkZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvbm90aWZpY2F0aW9ucy90aHJlYWRzL3t0aHJlYWRfaWR9L3N1YnNjcmlwdGlvblwiLFxuICAgIF0sXG4gICAgbGlzdEV2ZW50c0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZXZlbnRzXCJdLFxuICAgIGxpc3ROb3RpZmljYXRpb25zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvbm90aWZpY2F0aW9uc1wiXSxcbiAgICBsaXN0T3JnRXZlbnRzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2V2ZW50cy9vcmdzL3tvcmd9XCIsXG4gICAgXSxcbiAgICBsaXN0UHVibGljRXZlbnRzOiBbXCJHRVQgL2V2ZW50c1wiXSxcbiAgICBsaXN0UHVibGljRXZlbnRzRm9yUmVwb05ldHdvcms6IFtcIkdFVCAvbmV0d29ya3Mve293bmVyfS97cmVwb30vZXZlbnRzXCJdLFxuICAgIGxpc3RQdWJsaWNFdmVudHNGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZXZlbnRzL3B1YmxpY1wiXSxcbiAgICBsaXN0UHVibGljT3JnRXZlbnRzOiBbXCJHRVQgL29yZ3Mve29yZ30vZXZlbnRzXCJdLFxuICAgIGxpc3RSZWNlaXZlZEV2ZW50c0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9yZWNlaXZlZF9ldmVudHNcIl0sXG4gICAgbGlzdFJlY2VpdmVkUHVibGljRXZlbnRzRm9yVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcmVjZWl2ZWRfZXZlbnRzL3B1YmxpY1wiLFxuICAgIF0sXG4gICAgbGlzdFJlcG9FdmVudHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZXZlbnRzXCJdLFxuICAgIGxpc3RSZXBvTm90aWZpY2F0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbm90aWZpY2F0aW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdFJlcG9zU3RhcnJlZEJ5QXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9zdGFycmVkXCJdLFxuICAgIGxpc3RSZXBvc1N0YXJyZWRCeVVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zdGFycmVkXCJdLFxuICAgIGxpc3RSZXBvc1dhdGNoZWRCeVVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zdWJzY3JpcHRpb25zXCJdLFxuICAgIGxpc3RTdGFyZ2F6ZXJzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdGFyZ2F6ZXJzXCJdLFxuICAgIGxpc3RXYXRjaGVkUmVwb3NGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3N1YnNjcmlwdGlvbnNcIl0sXG4gICAgbGlzdFdhdGNoZXJzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdWJzY3JpYmVyc1wiXSxcbiAgICBtYXJrTm90aWZpY2F0aW9uc0FzUmVhZDogW1wiUFVUIC9ub3RpZmljYXRpb25zXCJdLFxuICAgIG1hcmtSZXBvTm90aWZpY2F0aW9uc0FzUmVhZDogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ub3RpZmljYXRpb25zXCJdLFxuICAgIG1hcmtUaHJlYWRBc0RvbmU6IFtcIkRFTEVURSAvbm90aWZpY2F0aW9ucy90aHJlYWRzL3t0aHJlYWRfaWR9XCJdLFxuICAgIG1hcmtUaHJlYWRBc1JlYWQ6IFtcIlBBVENIIC9ub3RpZmljYXRpb25zL3RocmVhZHMve3RocmVhZF9pZH1cIl0sXG4gICAgc2V0UmVwb1N1YnNjcmlwdGlvbjogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdWJzY3JpcHRpb25cIl0sXG4gICAgc2V0VGhyZWFkU3Vic2NyaXB0aW9uOiBbXG4gICAgICBcIlBVVCAvbm90aWZpY2F0aW9ucy90aHJlYWRzL3t0aHJlYWRfaWR9L3N1YnNjcmlwdGlvblwiLFxuICAgIF0sXG4gICAgc3RhclJlcG9Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUFVUIC91c2VyL3N0YXJyZWQve293bmVyfS97cmVwb31cIl0sXG4gICAgdW5zdGFyUmVwb0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJERUxFVEUgL3VzZXIvc3RhcnJlZC97b3duZXJ9L3tyZXBvfVwiXSxcbiAgfSxcbiAgYXBwczoge1xuICAgIGFkZFJlcG9Ub0luc3RhbGxhdGlvbjogW1xuICAgICAgXCJQVVQgL3VzZXIvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wiYXBwc1wiLCBcImFkZFJlcG9Ub0luc3RhbGxhdGlvbkZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBhZGRSZXBvVG9JbnN0YWxsYXRpb25Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQVVQgL3VzZXIvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBjaGVja1Rva2VuOiBbXCJQT1NUIC9hcHBsaWNhdGlvbnMve2NsaWVudF9pZH0vdG9rZW5cIl0sXG4gICAgY3JlYXRlRnJvbU1hbmlmZXN0OiBbXCJQT1NUIC9hcHAtbWFuaWZlc3RzL3tjb2RlfS9jb252ZXJzaW9uc1wiXSxcbiAgICBjcmVhdGVJbnN0YWxsYXRpb25BY2Nlc3NUb2tlbjogW1xuICAgICAgXCJQT1NUIC9hcHAvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9hY2Nlc3NfdG9rZW5zXCIsXG4gICAgXSxcbiAgICBkZWxldGVBdXRob3JpemF0aW9uOiBbXCJERUxFVEUgL2FwcGxpY2F0aW9ucy97Y2xpZW50X2lkfS9ncmFudFwiXSxcbiAgICBkZWxldGVJbnN0YWxsYXRpb246IFtcIkRFTEVURSAvYXBwL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH1cIl0sXG4gICAgZGVsZXRlVG9rZW46IFtcIkRFTEVURSAvYXBwbGljYXRpb25zL3tjbGllbnRfaWR9L3Rva2VuXCJdLFxuICAgIGdldEF1dGhlbnRpY2F0ZWQ6IFtcIkdFVCAvYXBwXCJdLFxuICAgIGdldEJ5U2x1ZzogW1wiR0VUIC9hcHBzL3thcHBfc2x1Z31cIl0sXG4gICAgZ2V0SW5zdGFsbGF0aW9uOiBbXCJHRVQgL2FwcC9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9XCJdLFxuICAgIGdldE9yZ0luc3RhbGxhdGlvbjogW1wiR0VUIC9vcmdzL3tvcmd9L2luc3RhbGxhdGlvblwiXSxcbiAgICBnZXRSZXBvSW5zdGFsbGF0aW9uOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2luc3RhbGxhdGlvblwiXSxcbiAgICBnZXRTdWJzY3JpcHRpb25QbGFuRm9yQWNjb3VudDogW1xuICAgICAgXCJHRVQgL21hcmtldHBsYWNlX2xpc3RpbmcvYWNjb3VudHMve2FjY291bnRfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRTdWJzY3JpcHRpb25QbGFuRm9yQWNjb3VudFN0dWJiZWQ6IFtcbiAgICAgIFwiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3N0dWJiZWQvYWNjb3VudHMve2FjY291bnRfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRVc2VySW5zdGFsbGF0aW9uOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vaW5zdGFsbGF0aW9uXCJdLFxuICAgIGdldFdlYmhvb2tDb25maWdGb3JBcHA6IFtcIkdFVCAvYXBwL2hvb2svY29uZmlnXCJdLFxuICAgIGdldFdlYmhvb2tEZWxpdmVyeTogW1wiR0VUIC9hcHAvaG9vay9kZWxpdmVyaWVzL3tkZWxpdmVyeV9pZH1cIl0sXG4gICAgbGlzdEFjY291bnRzRm9yUGxhbjogW1wiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3BsYW5zL3twbGFuX2lkfS9hY2NvdW50c1wiXSxcbiAgICBsaXN0QWNjb3VudHNGb3JQbGFuU3R1YmJlZDogW1xuICAgICAgXCJHRVQgL21hcmtldHBsYWNlX2xpc3Rpbmcvc3R1YmJlZC9wbGFucy97cGxhbl9pZH0vYWNjb3VudHNcIixcbiAgICBdLFxuICAgIGxpc3RJbnN0YWxsYXRpb25SZXBvc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgbGlzdEluc3RhbGxhdGlvblJlcXVlc3RzRm9yQXV0aGVudGljYXRlZEFwcDogW1xuICAgICAgXCJHRVQgL2FwcC9pbnN0YWxsYXRpb24tcmVxdWVzdHNcIixcbiAgICBdLFxuICAgIGxpc3RJbnN0YWxsYXRpb25zOiBbXCJHRVQgL2FwcC9pbnN0YWxsYXRpb25zXCJdLFxuICAgIGxpc3RJbnN0YWxsYXRpb25zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9pbnN0YWxsYXRpb25zXCJdLFxuICAgIGxpc3RQbGFuczogW1wiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3BsYW5zXCJdLFxuICAgIGxpc3RQbGFuc1N0dWJiZWQ6IFtcIkdFVCAvbWFya2V0cGxhY2VfbGlzdGluZy9zdHViYmVkL3BsYW5zXCJdLFxuICAgIGxpc3RSZXBvc0FjY2Vzc2libGVUb0luc3RhbGxhdGlvbjogW1wiR0VUIC9pbnN0YWxsYXRpb24vcmVwb3NpdG9yaWVzXCJdLFxuICAgIGxpc3RTdWJzY3JpcHRpb25zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9tYXJrZXRwbGFjZV9wdXJjaGFzZXNcIl0sXG4gICAgbGlzdFN1YnNjcmlwdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlclN0dWJiZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL21hcmtldHBsYWNlX3B1cmNoYXNlcy9zdHViYmVkXCIsXG4gICAgXSxcbiAgICBsaXN0V2ViaG9va0RlbGl2ZXJpZXM6IFtcIkdFVCAvYXBwL2hvb2svZGVsaXZlcmllc1wiXSxcbiAgICByZWRlbGl2ZXJXZWJob29rRGVsaXZlcnk6IFtcbiAgICAgIFwiUE9TVCAvYXBwL2hvb2svZGVsaXZlcmllcy97ZGVsaXZlcnlfaWR9L2F0dGVtcHRzXCIsXG4gICAgXSxcbiAgICByZW1vdmVSZXBvRnJvbUluc3RhbGxhdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wiYXBwc1wiLCBcInJlbW92ZVJlcG9Gcm9tSW5zdGFsbGF0aW9uRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIHJlbW92ZVJlcG9Gcm9tSW5zdGFsbGF0aW9uRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgcmVzZXRUb2tlbjogW1wiUEFUQ0ggL2FwcGxpY2F0aW9ucy97Y2xpZW50X2lkfS90b2tlblwiXSxcbiAgICByZXZva2VJbnN0YWxsYXRpb25BY2Nlc3NUb2tlbjogW1wiREVMRVRFIC9pbnN0YWxsYXRpb24vdG9rZW5cIl0sXG4gICAgc2NvcGVUb2tlbjogW1wiUE9TVCAvYXBwbGljYXRpb25zL3tjbGllbnRfaWR9L3Rva2VuL3Njb3BlZFwiXSxcbiAgICBzdXNwZW5kSW5zdGFsbGF0aW9uOiBbXCJQVVQgL2FwcC9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L3N1c3BlbmRlZFwiXSxcbiAgICB1bnN1c3BlbmRJbnN0YWxsYXRpb246IFtcbiAgICAgIFwiREVMRVRFIC9hcHAvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9zdXNwZW5kZWRcIixcbiAgICBdLFxuICAgIHVwZGF0ZVdlYmhvb2tDb25maWdGb3JBcHA6IFtcIlBBVENIIC9hcHAvaG9vay9jb25maWdcIl0sXG4gIH0sXG4gIGJpbGxpbmc6IHtcbiAgICBnZXRHaXRodWJBY3Rpb25zQmlsbGluZ09yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2JpbGxpbmcvYWN0aW9uc1wiXSxcbiAgICBnZXRHaXRodWJBY3Rpb25zQmlsbGluZ1VzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3NldHRpbmdzL2JpbGxpbmcvYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgZ2V0R2l0aHViQmlsbGluZ1ByZW1pdW1SZXF1ZXN0VXNhZ2VSZXBvcnRPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdhbml6YXRpb25zL3tvcmd9L3NldHRpbmdzL2JpbGxpbmcvcHJlbWl1bV9yZXF1ZXN0L3VzYWdlXCIsXG4gICAgXSxcbiAgICBnZXRHaXRodWJCaWxsaW5nUHJlbWl1bVJlcXVlc3RVc2FnZVJlcG9ydFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3NldHRpbmdzL2JpbGxpbmcvcHJlbWl1bV9yZXF1ZXN0L3VzYWdlXCIsXG4gICAgXSxcbiAgICBnZXRHaXRodWJCaWxsaW5nVXNhZ2VSZXBvcnRPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdhbml6YXRpb25zL3tvcmd9L3NldHRpbmdzL2JpbGxpbmcvdXNhZ2VcIixcbiAgICBdLFxuICAgIGdldEdpdGh1YkJpbGxpbmdVc2FnZVJlcG9ydFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3NldHRpbmdzL2JpbGxpbmcvdXNhZ2VcIixcbiAgICBdLFxuICAgIGdldEdpdGh1YlBhY2thZ2VzQmlsbGluZ09yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2JpbGxpbmcvcGFja2FnZXNcIl0sXG4gICAgZ2V0R2l0aHViUGFja2FnZXNCaWxsaW5nVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc2V0dGluZ3MvYmlsbGluZy9wYWNrYWdlc1wiLFxuICAgIF0sXG4gICAgZ2V0U2hhcmVkU3RvcmFnZUJpbGxpbmdPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2JpbGxpbmcvc2hhcmVkLXN0b3JhZ2VcIixcbiAgICBdLFxuICAgIGdldFNoYXJlZFN0b3JhZ2VCaWxsaW5nVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc2V0dGluZ3MvYmlsbGluZy9zaGFyZWQtc3RvcmFnZVwiLFxuICAgIF0sXG4gIH0sXG4gIGNhbXBhaWduczoge1xuICAgIGNyZWF0ZUNhbXBhaWduOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2NhbXBhaWduc1wiXSxcbiAgICBkZWxldGVDYW1wYWlnbjogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2NhbXBhaWducy97Y2FtcGFpZ25fbnVtYmVyfVwiXSxcbiAgICBnZXRDYW1wYWlnblN1bW1hcnk6IFtcIkdFVCAvb3Jncy97b3JnfS9jYW1wYWlnbnMve2NhbXBhaWduX251bWJlcn1cIl0sXG4gICAgbGlzdE9yZ0NhbXBhaWduczogW1wiR0VUIC9vcmdzL3tvcmd9L2NhbXBhaWduc1wiXSxcbiAgICB1cGRhdGVDYW1wYWlnbjogW1wiUEFUQ0ggL29yZ3Mve29yZ30vY2FtcGFpZ25zL3tjYW1wYWlnbl9udW1iZXJ9XCJdLFxuICB9LFxuICBjaGVja3M6IHtcbiAgICBjcmVhdGU6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXJ1bnNcIl0sXG4gICAgY3JlYXRlU3VpdGU6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXN1aXRlc1wiXSxcbiAgICBnZXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stcnVucy97Y2hlY2tfcnVuX2lkfVwiXSxcbiAgICBnZXRTdWl0ZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1zdWl0ZXMve2NoZWNrX3N1aXRlX2lkfVwiXSxcbiAgICBsaXN0QW5ub3RhdGlvbnM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1ydW5zL3tjaGVja19ydW5faWR9L2Fubm90YXRpb25zXCIsXG4gICAgXSxcbiAgICBsaXN0Rm9yUmVmOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vY2hlY2stcnVuc1wiXSxcbiAgICBsaXN0Rm9yU3VpdGU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1zdWl0ZXMve2NoZWNrX3N1aXRlX2lkfS9jaGVjay1ydW5zXCIsXG4gICAgXSxcbiAgICBsaXN0U3VpdGVzRm9yUmVmOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vY2hlY2stc3VpdGVzXCJdLFxuICAgIHJlcmVxdWVzdFJ1bjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1ydW5zL3tjaGVja19ydW5faWR9L3JlcmVxdWVzdFwiLFxuICAgIF0sXG4gICAgcmVyZXF1ZXN0U3VpdGU6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stc3VpdGVzL3tjaGVja19zdWl0ZV9pZH0vcmVyZXF1ZXN0XCIsXG4gICAgXSxcbiAgICBzZXRTdWl0ZXNQcmVmZXJlbmNlczogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stc3VpdGVzL3ByZWZlcmVuY2VzXCIsXG4gICAgXSxcbiAgICB1cGRhdGU6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1ydW5zL3tjaGVja19ydW5faWR9XCJdLFxuICB9LFxuICBjb2RlU2Nhbm5pbmc6IHtcbiAgICBjb21taXRBdXRvZml4OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9L2F1dG9maXgvY29tbWl0c1wiLFxuICAgIF0sXG4gICAgY3JlYXRlQXV0b2ZpeDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfS9hdXRvZml4XCIsXG4gICAgXSxcbiAgICBjcmVhdGVWYXJpYW50QW5hbHlzaXM6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9jb2RlcWwvdmFyaWFudC1hbmFseXNlc1wiLFxuICAgIF0sXG4gICAgZGVsZXRlQW5hbHlzaXM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FuYWx5c2VzL3thbmFseXNpc19pZH17P2NvbmZpcm1fZGVsZXRlfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlQ29kZXFsRGF0YWJhc2U6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2NvZGVxbC9kYXRhYmFzZXMve2xhbmd1YWdlfVwiLFxuICAgIF0sXG4gICAgZ2V0QWxlcnQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWRQYXJhbWV0ZXJzOiB7IGFsZXJ0X2lkOiBcImFsZXJ0X251bWJlclwiIH0gfSxcbiAgICBdLFxuICAgIGdldEFuYWx5c2lzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbmFseXNlcy97YW5hbHlzaXNfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRBdXRvZml4OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn0vYXV0b2ZpeFwiLFxuICAgIF0sXG4gICAgZ2V0Q29kZXFsRGF0YWJhc2U6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2NvZGVxbC9kYXRhYmFzZXMve2xhbmd1YWdlfVwiLFxuICAgIF0sXG4gICAgZ2V0RGVmYXVsdFNldHVwOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvZGVmYXVsdC1zZXR1cFwiXSxcbiAgICBnZXRTYXJpZjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL3Nhcmlmcy97c2FyaWZfaWR9XCJdLFxuICAgIGdldFZhcmlhbnRBbmFseXNpczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvY29kZXFsL3ZhcmlhbnQtYW5hbHlzZXMve2NvZGVxbF92YXJpYW50X2FuYWx5c2lzX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0VmFyaWFudEFuYWx5c2lzUmVwb1Rhc2s6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2NvZGVxbC92YXJpYW50LWFuYWx5c2VzL3tjb2RlcWxfdmFyaWFudF9hbmFseXNpc19pZH0vcmVwb3Mve3JlcG9fb3duZXJ9L3tyZXBvX25hbWV9XCIsXG4gICAgXSxcbiAgICBsaXN0QWxlcnRJbnN0YW5jZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfS9pbnN0YW5jZXNcIixcbiAgICBdLFxuICAgIGxpc3RBbGVydHNGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9jb2RlLXNjYW5uaW5nL2FsZXJ0c1wiXSxcbiAgICBsaXN0QWxlcnRzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0c1wiXSxcbiAgICBsaXN0QWxlcnRzSW5zdGFuY2VzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn0vaW5zdGFuY2VzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wiY29kZVNjYW5uaW5nXCIsIFwibGlzdEFsZXJ0SW5zdGFuY2VzXCJdIH0sXG4gICAgXSxcbiAgICBsaXN0Q29kZXFsRGF0YWJhc2VzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9jb2RlcWwvZGF0YWJhc2VzXCIsXG4gICAgXSxcbiAgICBsaXN0UmVjZW50QW5hbHlzZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbmFseXNlc1wiXSxcbiAgICB1cGRhdGVBbGVydDogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn1cIixcbiAgICBdLFxuICAgIHVwZGF0ZURlZmF1bHRTZXR1cDogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9kZWZhdWx0LXNldHVwXCIsXG4gICAgXSxcbiAgICB1cGxvYWRTYXJpZjogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9zYXJpZnNcIl0sXG4gIH0sXG4gIGNvZGVTZWN1cml0eToge1xuICAgIGF0dGFjaENvbmZpZ3VyYXRpb246IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfS9hdHRhY2hcIixcbiAgICBdLFxuICAgIGF0dGFjaEVudGVycHJpc2VDb25maWd1cmF0aW9uOiBbXG4gICAgICBcIlBPU1QgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfS9hdHRhY2hcIixcbiAgICBdLFxuICAgIGNyZWF0ZUNvbmZpZ3VyYXRpb246IFtcIlBPU1QgL29yZ3Mve29yZ30vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9uc1wiXSxcbiAgICBjcmVhdGVDb25maWd1cmF0aW9uRm9yRW50ZXJwcmlzZTogW1xuICAgICAgXCJQT1NUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9uc1wiLFxuICAgIF0sXG4gICAgZGVsZXRlQ29uZmlndXJhdGlvbjogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUNvbmZpZ3VyYXRpb25Gb3JFbnRlcnByaXNlOiBbXG4gICAgICBcIkRFTEVURSAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZXRhY2hDb25maWd1cmF0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL2RldGFjaFwiLFxuICAgIF0sXG4gICAgZ2V0Q29uZmlndXJhdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGdldENvbmZpZ3VyYXRpb25Gb3JSZXBvc2l0b3J5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zZWN1cml0eS1jb25maWd1cmF0aW9uXCIsXG4gICAgXSxcbiAgICBnZXRDb25maWd1cmF0aW9uc0ZvckVudGVycHJpc2U6IFtcbiAgICAgIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9uc1wiLFxuICAgIF0sXG4gICAgZ2V0Q29uZmlndXJhdGlvbnNGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zXCJdLFxuICAgIGdldERlZmF1bHRDb25maWd1cmF0aW9uczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy9kZWZhdWx0c1wiLFxuICAgIF0sXG4gICAgZ2V0RGVmYXVsdENvbmZpZ3VyYXRpb25zRm9yRW50ZXJwcmlzZTogW1xuICAgICAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL2RlZmF1bHRzXCIsXG4gICAgXSxcbiAgICBnZXRSZXBvc2l0b3JpZXNGb3JDb25maWd1cmF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGdldFJlcG9zaXRvcmllc0ZvckVudGVycHJpc2VDb25maWd1cmF0aW9uOiBbXG4gICAgICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgZ2V0U2luZ2xlQ29uZmlndXJhdGlvbkZvckVudGVycHJpc2U6IFtcbiAgICAgIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIHNldENvbmZpZ3VyYXRpb25Bc0RlZmF1bHQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9L2RlZmF1bHRzXCIsXG4gICAgXSxcbiAgICBzZXRDb25maWd1cmF0aW9uQXNEZWZhdWx0Rm9yRW50ZXJwcmlzZTogW1xuICAgICAgXCJQVVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfS9kZWZhdWx0c1wiLFxuICAgIF0sXG4gICAgdXBkYXRlQ29uZmlndXJhdGlvbjogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlRW50ZXJwcmlzZUNvbmZpZ3VyYXRpb246IFtcbiAgICAgIFwiUEFUQ0ggL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfVwiLFxuICAgIF0sXG4gIH0sXG4gIGNvZGVzT2ZDb25kdWN0OiB7XG4gICAgZ2V0QWxsQ29kZXNPZkNvbmR1Y3Q6IFtcIkdFVCAvY29kZXNfb2ZfY29uZHVjdFwiXSxcbiAgICBnZXRDb25kdWN0Q29kZTogW1wiR0VUIC9jb2Rlc19vZl9jb25kdWN0L3trZXl9XCJdLFxuICB9LFxuICBjb2Rlc3BhY2VzOiB7XG4gICAgYWRkUmVwb3NpdG9yeUZvclNlY3JldEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBVVCAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBhZGRTZWxlY3RlZFJlcG9Ub09yZ1NlY3JldDogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgY2hlY2tQZXJtaXNzaW9uc0ZvckRldmNvbnRhaW5lcjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvcGVybWlzc2lvbnNfY2hlY2tcIixcbiAgICBdLFxuICAgIGNvZGVzcGFjZU1hY2hpbmVzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfS9tYWNoaW5lc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvY29kZXNwYWNlc1wiXSxcbiAgICBjcmVhdGVPclVwZGF0ZU9yZ1NlY3JldDogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGNyZWF0ZU9yVXBkYXRlUmVwb1NlY3JldDogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBjcmVhdGVPclVwZGF0ZVNlY3JldEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBVVCAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgY3JlYXRlV2l0aFByRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb2Rlc3BhY2VzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVXaXRoUmVwb0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXNcIixcbiAgICBdLFxuICAgIGRlbGV0ZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJERUxFVEUgL3VzZXIvY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9XCJdLFxuICAgIGRlbGV0ZUZyb21Pcmdhbml6YXRpb246IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L21lbWJlcnMve3VzZXJuYW1lfS9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX1cIixcbiAgICBdLFxuICAgIGRlbGV0ZU9yZ1NlY3JldDogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJdLFxuICAgIGRlbGV0ZVJlcG9TZWNyZXQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlU2VjcmV0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBleHBvcnRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQT1NUIC91c2VyL2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfS9leHBvcnRzXCIsXG4gICAgXSxcbiAgICBnZXRDb2Rlc3BhY2VzRm9yVXNlckluT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9tZW1iZXJzL3t1c2VybmFtZX0vY29kZXNwYWNlc1wiLFxuICAgIF0sXG4gICAgZ2V0RXhwb3J0RGV0YWlsc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX0vZXhwb3J0cy97ZXhwb3J0X2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX1cIl0sXG4gICAgZ2V0T3JnUHVibGljS2V5OiBbXCJHRVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3B1YmxpYy1rZXlcIl0sXG4gICAgZ2V0T3JnU2VjcmV0OiBbXCJHRVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZ2V0UHVibGljS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0cy9wdWJsaWMta2V5XCIsXG4gICAgXSxcbiAgICBnZXRSZXBvUHVibGljS2V5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9zZWNyZXRzL3B1YmxpYy1rZXlcIixcbiAgICBdLFxuICAgIGdldFJlcG9TZWNyZXQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZ2V0U2VjcmV0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBsaXN0RGV2Y29udGFpbmVyc0luUmVwb3NpdG9yeUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9kZXZjb250YWluZXJzXCIsXG4gICAgXSxcbiAgICBsaXN0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9jb2Rlc3BhY2VzXCJdLFxuICAgIGxpc3RJbk9yZ2FuaXphdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vY29kZXNwYWNlc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWRQYXJhbWV0ZXJzOiB7IG9yZ19pZDogXCJvcmdcIiB9IH0sXG4gICAgXSxcbiAgICBsaXN0SW5SZXBvc2l0b3J5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzXCIsXG4gICAgXSxcbiAgICBsaXN0T3JnU2VjcmV0czogW1wiR0VUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0c1wiXSxcbiAgICBsaXN0UmVwb1NlY3JldHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9zZWNyZXRzXCJdLFxuICAgIGxpc3RSZXBvc2l0b3JpZXNGb3JTZWNyZXRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBsaXN0U2VjcmV0c0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzXCJdLFxuICAgIGxpc3RTZWxlY3RlZFJlcG9zRm9yT3JnU2VjcmV0OiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIHByZUZsaWdodFdpdGhSZXBvRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL25ld1wiLFxuICAgIF0sXG4gICAgcHVibGlzaEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBPU1QgL3VzZXIvY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9L3B1Ymxpc2hcIixcbiAgICBdLFxuICAgIHJlbW92ZVJlcG9zaXRvcnlGb3JTZWNyZXRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlU2VsZWN0ZWRSZXBvRnJvbU9yZ1NlY3JldDogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgcmVwb01hY2hpbmVzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL21hY2hpbmVzXCIsXG4gICAgXSxcbiAgICBzZXRSZXBvc2l0b3JpZXNGb3JTZWNyZXRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQVVQgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBzZXRTZWxlY3RlZFJlcG9zRm9yT3JnU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIHN0YXJ0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9L3N0YXJ0XCJdLFxuICAgIHN0b3BGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX0vc3RvcFwiXSxcbiAgICBzdG9wSW5Pcmdhbml6YXRpb246IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9tZW1iZXJzL3t1c2VybmFtZX0vY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9L3N0b3BcIixcbiAgICBdLFxuICAgIHVwZGF0ZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQQVRDSCAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX1cIl0sXG4gIH0sXG4gIGNvcGlsb3Q6IHtcbiAgICBhZGRDb3BpbG90U2VhdHNGb3JUZWFtczogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2NvcGlsb3QvYmlsbGluZy9zZWxlY3RlZF90ZWFtc1wiLFxuICAgIF0sXG4gICAgYWRkQ29waWxvdFNlYXRzRm9yVXNlcnM6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9jb3BpbG90L2JpbGxpbmcvc2VsZWN0ZWRfdXNlcnNcIixcbiAgICBdLFxuICAgIGNhbmNlbENvcGlsb3RTZWF0QXNzaWdubWVudEZvclRlYW1zOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9jb3BpbG90L2JpbGxpbmcvc2VsZWN0ZWRfdGVhbXNcIixcbiAgICBdLFxuICAgIGNhbmNlbENvcGlsb3RTZWF0QXNzaWdubWVudEZvclVzZXJzOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9jb3BpbG90L2JpbGxpbmcvc2VsZWN0ZWRfdXNlcnNcIixcbiAgICBdLFxuICAgIGNvcGlsb3RNZXRyaWNzRm9yT3JnYW5pemF0aW9uOiBbXCJHRVQgL29yZ3Mve29yZ30vY29waWxvdC9tZXRyaWNzXCJdLFxuICAgIGNvcGlsb3RNZXRyaWNzRm9yVGVhbTogW1wiR0VUIC9vcmdzL3tvcmd9L3RlYW0ve3RlYW1fc2x1Z30vY29waWxvdC9tZXRyaWNzXCJdLFxuICAgIGdldENvcGlsb3RPcmdhbml6YXRpb25EZXRhaWxzOiBbXCJHRVQgL29yZ3Mve29yZ30vY29waWxvdC9iaWxsaW5nXCJdLFxuICAgIGdldENvcGlsb3RTZWF0RGV0YWlsc0ZvclVzZXI6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L21lbWJlcnMve3VzZXJuYW1lfS9jb3BpbG90XCIsXG4gICAgXSxcbiAgICBsaXN0Q29waWxvdFNlYXRzOiBbXCJHRVQgL29yZ3Mve29yZ30vY29waWxvdC9iaWxsaW5nL3NlYXRzXCJdLFxuICB9LFxuICBjcmVkZW50aWFsczogeyByZXZva2U6IFtcIlBPU1QgL2NyZWRlbnRpYWxzL3Jldm9rZVwiXSB9LFxuICBkZXBlbmRhYm90OiB7XG4gICAgYWRkU2VsZWN0ZWRSZXBvVG9PcmdTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIGNyZWF0ZU9yVXBkYXRlT3JnU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgY3JlYXRlT3JVcGRhdGVSZXBvU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGRlbGV0ZU9yZ1NlY3JldDogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJdLFxuICAgIGRlbGV0ZVJlcG9TZWNyZXQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZ2V0QWxlcnQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9hbGVydHMve2FsZXJ0X251bWJlcn1cIl0sXG4gICAgZ2V0T3JnUHVibGljS2V5OiBbXCJHRVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3B1YmxpYy1rZXlcIl0sXG4gICAgZ2V0T3JnU2VjcmV0OiBbXCJHRVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZ2V0UmVwb1B1YmxpY0tleTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGFib3Qvc2VjcmV0cy9wdWJsaWMta2V5XCIsXG4gICAgXSxcbiAgICBnZXRSZXBvU2VjcmV0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGxpc3RBbGVydHNGb3JFbnRlcnByaXNlOiBbXG4gICAgICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2RlcGVuZGFib3QvYWxlcnRzXCIsXG4gICAgXSxcbiAgICBsaXN0QWxlcnRzRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9hbGVydHNcIl0sXG4gICAgbGlzdEFsZXJ0c0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9hbGVydHNcIl0sXG4gICAgbGlzdE9yZ1NlY3JldHM6IFtcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHNcIl0sXG4gICAgbGlzdFJlcG9TZWNyZXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGFib3Qvc2VjcmV0c1wiXSxcbiAgICBsaXN0U2VsZWN0ZWRSZXBvc0Zvck9yZ1NlY3JldDogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICByZW1vdmVTZWxlY3RlZFJlcG9Gcm9tT3JnU2VjcmV0OiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICByZXBvc2l0b3J5QWNjZXNzRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3JnYW5pemF0aW9ucy97b3JnfS9kZXBlbmRhYm90L3JlcG9zaXRvcnktYWNjZXNzXCIsXG4gICAgXSxcbiAgICBzZXRSZXBvc2l0b3J5QWNjZXNzRGVmYXVsdExldmVsOiBbXG4gICAgICBcIlBVVCAvb3JnYW5pemF0aW9ucy97b3JnfS9kZXBlbmRhYm90L3JlcG9zaXRvcnktYWNjZXNzL2RlZmF1bHQtbGV2ZWxcIixcbiAgICBdLFxuICAgIHNldFNlbGVjdGVkUmVwb3NGb3JPcmdTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgdXBkYXRlQWxlcnQ6IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGFib3QvYWxlcnRzL3thbGVydF9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVSZXBvc2l0b3J5QWNjZXNzRm9yT3JnOiBbXG4gICAgICBcIlBBVENIIC9vcmdhbml6YXRpb25zL3tvcmd9L2RlcGVuZGFib3QvcmVwb3NpdG9yeS1hY2Nlc3NcIixcbiAgICBdLFxuICB9LFxuICBkZXBlbmRlbmN5R3JhcGg6IHtcbiAgICBjcmVhdGVSZXBvc2l0b3J5U25hcHNob3Q6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kZW5jeS1ncmFwaC9zbmFwc2hvdHNcIixcbiAgICBdLFxuICAgIGRpZmZSYW5nZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGVuY3ktZ3JhcGgvY29tcGFyZS97YmFzZWhlYWR9XCIsXG4gICAgXSxcbiAgICBleHBvcnRTYm9tOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGVuY3ktZ3JhcGgvc2JvbVwiXSxcbiAgfSxcbiAgZW1vamlzOiB7IGdldDogW1wiR0VUIC9lbW9qaXNcIl0gfSxcbiAgZW50ZXJwcmlzZVRlYW1NZW1iZXJzaGlwczoge1xuICAgIGFkZDogW1xuICAgICAgXCJQVVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9tZW1iZXJzaGlwcy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICBidWxrQWRkOiBbXG4gICAgICBcIlBPU1QgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9tZW1iZXJzaGlwcy9hZGRcIixcbiAgICBdLFxuICAgIGJ1bGtSZW1vdmU6IFtcbiAgICAgIFwiUE9TVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L21lbWJlcnNoaXBzL3JlbW92ZVwiLFxuICAgIF0sXG4gICAgZ2V0OiBbXG4gICAgICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L21lbWJlcnNoaXBzL3t1c2VybmFtZX1cIixcbiAgICBdLFxuICAgIGxpc3Q6IFtcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L21lbWJlcnNoaXBzXCJdLFxuICAgIHJlbW92ZTogW1xuICAgICAgXCJERUxFVEUgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9tZW1iZXJzaGlwcy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgfSxcbiAgZW50ZXJwcmlzZVRlYW1Pcmdhbml6YXRpb25zOiB7XG4gICAgYWRkOiBbXG4gICAgICBcIlBVVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L29yZ2FuaXphdGlvbnMve29yZ31cIixcbiAgICBdLFxuICAgIGJ1bGtBZGQ6IFtcbiAgICAgIFwiUE9TVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L29yZ2FuaXphdGlvbnMvYWRkXCIsXG4gICAgXSxcbiAgICBidWxrUmVtb3ZlOiBbXG4gICAgICBcIlBPU1QgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9vcmdhbml6YXRpb25zL3JlbW92ZVwiLFxuICAgIF0sXG4gICAgZGVsZXRlOiBbXG4gICAgICBcIkRFTEVURSAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L29yZ2FuaXphdGlvbnMve29yZ31cIixcbiAgICBdLFxuICAgIGdldEFzc2lnbm1lbnQ6IFtcbiAgICAgIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vb3JnYW5pemF0aW9ucy97b3JnfVwiLFxuICAgIF0sXG4gICAgZ2V0QXNzaWdubWVudHM6IFtcbiAgICAgIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vb3JnYW5pemF0aW9uc1wiLFxuICAgIF0sXG4gIH0sXG4gIGVudGVycHJpc2VUZWFtczoge1xuICAgIGNyZWF0ZTogW1wiUE9TVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zXCJdLFxuICAgIGRlbGV0ZTogW1wiREVMRVRFIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve3RlYW1fc2x1Z31cIl0sXG4gICAgZ2V0OiBbXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97dGVhbV9zbHVnfVwiXSxcbiAgICBsaXN0OiBbXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtc1wiXSxcbiAgICB1cGRhdGU6IFtcIlBBVENIIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve3RlYW1fc2x1Z31cIl0sXG4gIH0sXG4gIGdpc3RzOiB7XG4gICAgY2hlY2tJc1N0YXJyZWQ6IFtcIkdFVCAvZ2lzdHMve2dpc3RfaWR9L3N0YXJcIl0sXG4gICAgY3JlYXRlOiBbXCJQT1NUIC9naXN0c1wiXSxcbiAgICBjcmVhdGVDb21tZW50OiBbXCJQT1NUIC9naXN0cy97Z2lzdF9pZH0vY29tbWVudHNcIl0sXG4gICAgZGVsZXRlOiBbXCJERUxFVEUgL2dpc3RzL3tnaXN0X2lkfVwiXSxcbiAgICBkZWxldGVDb21tZW50OiBbXCJERUxFVEUgL2dpc3RzL3tnaXN0X2lkfS9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gICAgZm9yazogW1wiUE9TVCAvZ2lzdHMve2dpc3RfaWR9L2ZvcmtzXCJdLFxuICAgIGdldDogW1wiR0VUIC9naXN0cy97Z2lzdF9pZH1cIl0sXG4gICAgZ2V0Q29tbWVudDogW1wiR0VUIC9naXN0cy97Z2lzdF9pZH0vY29tbWVudHMve2NvbW1lbnRfaWR9XCJdLFxuICAgIGdldFJldmlzaW9uOiBbXCJHRVQgL2dpc3RzL3tnaXN0X2lkfS97c2hhfVwiXSxcbiAgICBsaXN0OiBbXCJHRVQgL2dpc3RzXCJdLFxuICAgIGxpc3RDb21tZW50czogW1wiR0VUIC9naXN0cy97Z2lzdF9pZH0vY29tbWVudHNcIl0sXG4gICAgbGlzdENvbW1pdHM6IFtcIkdFVCAvZ2lzdHMve2dpc3RfaWR9L2NvbW1pdHNcIl0sXG4gICAgbGlzdEZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9naXN0c1wiXSxcbiAgICBsaXN0Rm9ya3M6IFtcIkdFVCAvZ2lzdHMve2dpc3RfaWR9L2ZvcmtzXCJdLFxuICAgIGxpc3RQdWJsaWM6IFtcIkdFVCAvZ2lzdHMvcHVibGljXCJdLFxuICAgIGxpc3RTdGFycmVkOiBbXCJHRVQgL2dpc3RzL3N0YXJyZWRcIl0sXG4gICAgc3RhcjogW1wiUFVUIC9naXN0cy97Z2lzdF9pZH0vc3RhclwiXSxcbiAgICB1bnN0YXI6IFtcIkRFTEVURSAvZ2lzdHMve2dpc3RfaWR9L3N0YXJcIl0sXG4gICAgdXBkYXRlOiBbXCJQQVRDSCAvZ2lzdHMve2dpc3RfaWR9XCJdLFxuICAgIHVwZGF0ZUNvbW1lbnQ6IFtcIlBBVENIIC9naXN0cy97Z2lzdF9pZH0vY29tbWVudHMve2NvbW1lbnRfaWR9XCJdLFxuICB9LFxuICBnaXQ6IHtcbiAgICBjcmVhdGVCbG9iOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvYmxvYnNcIl0sXG4gICAgY3JlYXRlQ29tbWl0OiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvY29tbWl0c1wiXSxcbiAgICBjcmVhdGVSZWY6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC9yZWZzXCJdLFxuICAgIGNyZWF0ZVRhZzogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L3RhZ3NcIl0sXG4gICAgY3JlYXRlVHJlZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L3RyZWVzXCJdLFxuICAgIGRlbGV0ZVJlZjogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvcmVmcy97cmVmfVwiXSxcbiAgICBnZXRCbG9iOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC9ibG9icy97ZmlsZV9zaGF9XCJdLFxuICAgIGdldENvbW1pdDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvY29tbWl0cy97Y29tbWl0X3NoYX1cIl0sXG4gICAgZ2V0UmVmOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC9yZWYve3JlZn1cIl0sXG4gICAgZ2V0VGFnOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC90YWdzL3t0YWdfc2hhfVwiXSxcbiAgICBnZXRUcmVlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC90cmVlcy97dHJlZV9zaGF9XCJdLFxuICAgIGxpc3RNYXRjaGluZ1JlZnM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L21hdGNoaW5nLXJlZnMve3JlZn1cIl0sXG4gICAgdXBkYXRlUmVmOiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L3JlZnMve3JlZn1cIl0sXG4gIH0sXG4gIGdpdGlnbm9yZToge1xuICAgIGdldEFsbFRlbXBsYXRlczogW1wiR0VUIC9naXRpZ25vcmUvdGVtcGxhdGVzXCJdLFxuICAgIGdldFRlbXBsYXRlOiBbXCJHRVQgL2dpdGlnbm9yZS90ZW1wbGF0ZXMve25hbWV9XCJdLFxuICB9LFxuICBob3N0ZWRDb21wdXRlOiB7XG4gICAgY3JlYXRlTmV0d29ya0NvbmZpZ3VyYXRpb25Gb3JPcmc6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9uZXR3b3JrLWNvbmZpZ3VyYXRpb25zXCIsXG4gICAgXSxcbiAgICBkZWxldGVOZXR3b3JrQ29uZmlndXJhdGlvbkZyb21Pcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3NldHRpbmdzL25ldHdvcmstY29uZmlndXJhdGlvbnMve25ldHdvcmtfY29uZmlndXJhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGdldE5ldHdvcmtDb25maWd1cmF0aW9uRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9uZXR3b3JrLWNvbmZpZ3VyYXRpb25zL3tuZXR3b3JrX2NvbmZpZ3VyYXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBnZXROZXR3b3JrU2V0dGluZ3NGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL25ldHdvcmstc2V0dGluZ3Mve25ldHdvcmtfc2V0dGluZ3NfaWR9XCIsXG4gICAgXSxcbiAgICBsaXN0TmV0d29ya0NvbmZpZ3VyYXRpb25zRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9uZXR3b3JrLWNvbmZpZ3VyYXRpb25zXCIsXG4gICAgXSxcbiAgICB1cGRhdGVOZXR3b3JrQ29uZmlndXJhdGlvbkZvck9yZzogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS9zZXR0aW5ncy9uZXR3b3JrLWNvbmZpZ3VyYXRpb25zL3tuZXR3b3JrX2NvbmZpZ3VyYXRpb25faWR9XCIsXG4gICAgXSxcbiAgfSxcbiAgaW50ZXJhY3Rpb25zOiB7XG4gICAgZ2V0UmVzdHJpY3Rpb25zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9pbnRlcmFjdGlvbi1saW1pdHNcIl0sXG4gICAgZ2V0UmVzdHJpY3Rpb25zRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vaW50ZXJhY3Rpb24tbGltaXRzXCJdLFxuICAgIGdldFJlc3RyaWN0aW9uc0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaW50ZXJhY3Rpb24tbGltaXRzXCJdLFxuICAgIGdldFJlc3RyaWN0aW9uc0ZvcllvdXJQdWJsaWNSZXBvczogW1xuICAgICAgXCJHRVQgL3VzZXIvaW50ZXJhY3Rpb24tbGltaXRzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wiaW50ZXJhY3Rpb25zXCIsIFwiZ2V0UmVzdHJpY3Rpb25zRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIHJlbW92ZVJlc3RyaWN0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJERUxFVEUgL3VzZXIvaW50ZXJhY3Rpb24tbGltaXRzXCJdLFxuICAgIHJlbW92ZVJlc3RyaWN0aW9uc0Zvck9yZzogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2ludGVyYWN0aW9uLWxpbWl0c1wiXSxcbiAgICByZW1vdmVSZXN0cmljdGlvbnNGb3JSZXBvOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaW50ZXJhY3Rpb24tbGltaXRzXCIsXG4gICAgXSxcbiAgICByZW1vdmVSZXN0cmljdGlvbnNGb3JZb3VyUHVibGljUmVwb3M6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL2ludGVyYWN0aW9uLWxpbWl0c1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcImludGVyYWN0aW9uc1wiLCBcInJlbW92ZVJlc3RyaWN0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBzZXRSZXN0cmljdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUFVUIC91c2VyL2ludGVyYWN0aW9uLWxpbWl0c1wiXSxcbiAgICBzZXRSZXN0cmljdGlvbnNGb3JPcmc6IFtcIlBVVCAvb3Jncy97b3JnfS9pbnRlcmFjdGlvbi1saW1pdHNcIl0sXG4gICAgc2V0UmVzdHJpY3Rpb25zRm9yUmVwbzogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbnRlcmFjdGlvbi1saW1pdHNcIl0sXG4gICAgc2V0UmVzdHJpY3Rpb25zRm9yWW91clB1YmxpY1JlcG9zOiBbXG4gICAgICBcIlBVVCAvdXNlci9pbnRlcmFjdGlvbi1saW1pdHNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJpbnRlcmFjdGlvbnNcIiwgXCJzZXRSZXN0cmljdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gIH0sXG4gIGlzc3Vlczoge1xuICAgIGFkZEFzc2lnbmVlczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vYXNzaWduZWVzXCIsXG4gICAgXSxcbiAgICBhZGRCbG9ja2VkQnlEZXBlbmRlbmN5OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9kZXBlbmRlbmNpZXMvYmxvY2tlZF9ieVwiLFxuICAgIF0sXG4gICAgYWRkTGFiZWxzOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vbGFiZWxzXCJdLFxuICAgIGFkZFN1Yklzc3VlOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9zdWJfaXNzdWVzXCIsXG4gICAgXSxcbiAgICBjaGVja1VzZXJDYW5CZUFzc2lnbmVkOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Fzc2lnbmVlcy97YXNzaWduZWV9XCJdLFxuICAgIGNoZWNrVXNlckNhbkJlQXNzaWduZWRUb0lzc3VlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2Fzc2lnbmVlcy97YXNzaWduZWV9XCIsXG4gICAgXSxcbiAgICBjcmVhdGU6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlc1wiXSxcbiAgICBjcmVhdGVDb21tZW50OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9jb21tZW50c1wiLFxuICAgIF0sXG4gICAgY3JlYXRlTGFiZWw6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2xhYmVsc1wiXSxcbiAgICBjcmVhdGVNaWxlc3RvbmU6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L21pbGVzdG9uZXNcIl0sXG4gICAgZGVsZXRlQ29tbWVudDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50cy97Y29tbWVudF9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUxhYmVsOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2xhYmVscy97bmFtZX1cIl0sXG4gICAgZGVsZXRlTWlsZXN0b25lOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vbWlsZXN0b25lcy97bWlsZXN0b25lX251bWJlcn1cIixcbiAgICBdLFxuICAgIGdldDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn1cIl0sXG4gICAgZ2V0Q29tbWVudDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvY29tbWVudHMve2NvbW1lbnRfaWR9XCJdLFxuICAgIGdldEV2ZW50OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9ldmVudHMve2V2ZW50X2lkfVwiXSxcbiAgICBnZXRMYWJlbDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9sYWJlbHMve25hbWV9XCJdLFxuICAgIGdldE1pbGVzdG9uZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzL3ttaWxlc3RvbmVfbnVtYmVyfVwiXSxcbiAgICBnZXRQYXJlbnQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3BhcmVudFwiXSxcbiAgICBsaXN0OiBbXCJHRVQgL2lzc3Vlc1wiXSxcbiAgICBsaXN0QXNzaWduZWVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Fzc2lnbmVlc1wiXSxcbiAgICBsaXN0Q29tbWVudHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2NvbW1lbnRzXCJdLFxuICAgIGxpc3RDb21tZW50c0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzXCJdLFxuICAgIGxpc3REZXBlbmRlbmNpZXNCbG9ja2VkQnk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vZGVwZW5kZW5jaWVzL2Jsb2NrZWRfYnlcIixcbiAgICBdLFxuICAgIGxpc3REZXBlbmRlbmNpZXNCbG9ja2luZzogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9kZXBlbmRlbmNpZXMvYmxvY2tpbmdcIixcbiAgICBdLFxuICAgIGxpc3RFdmVudHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2V2ZW50c1wiXSxcbiAgICBsaXN0RXZlbnRzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvZXZlbnRzXCJdLFxuICAgIGxpc3RFdmVudHNGb3JUaW1lbGluZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS90aW1lbGluZVwiLFxuICAgIF0sXG4gICAgbGlzdEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvaXNzdWVzXCJdLFxuICAgIGxpc3RGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9pc3N1ZXNcIl0sXG4gICAgbGlzdEZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzXCJdLFxuICAgIGxpc3RMYWJlbHNGb3JNaWxlc3RvbmU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzL3ttaWxlc3RvbmVfbnVtYmVyfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIGxpc3RMYWJlbHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2xhYmVsc1wiXSxcbiAgICBsaXN0TGFiZWxzT25Jc3N1ZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIGxpc3RNaWxlc3RvbmVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L21pbGVzdG9uZXNcIl0sXG4gICAgbGlzdFN1Yklzc3VlczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9zdWJfaXNzdWVzXCIsXG4gICAgXSxcbiAgICBsb2NrOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sb2NrXCJdLFxuICAgIHJlbW92ZUFsbExhYmVsczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIHJlbW92ZUFzc2lnbmVlczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9hc3NpZ25lZXNcIixcbiAgICBdLFxuICAgIHJlbW92ZURlcGVuZGVuY3lCbG9ja2VkQnk6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vZGVwZW5kZW5jaWVzL2Jsb2NrZWRfYnkve2lzc3VlX2lkfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlTGFiZWw6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vbGFiZWxzL3tuYW1lfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlU3ViSXNzdWU6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vc3ViX2lzc3VlXCIsXG4gICAgXSxcbiAgICByZXByaW9yaXRpemVTdWJJc3N1ZTogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3N1Yl9pc3N1ZXMvcHJpb3JpdHlcIixcbiAgICBdLFxuICAgIHNldExhYmVsczogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vbGFiZWxzXCJdLFxuICAgIHVubG9jazogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vbG9ja1wiXSxcbiAgICB1cGRhdGU6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn1cIl0sXG4gICAgdXBkYXRlQ29tbWVudDogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gICAgdXBkYXRlTGFiZWw6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9sYWJlbHMve25hbWV9XCJdLFxuICAgIHVwZGF0ZU1pbGVzdG9uZTogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vbWlsZXN0b25lcy97bWlsZXN0b25lX251bWJlcn1cIixcbiAgICBdLFxuICB9LFxuICBsaWNlbnNlczoge1xuICAgIGdldDogW1wiR0VUIC9saWNlbnNlcy97bGljZW5zZX1cIl0sXG4gICAgZ2V0QWxsQ29tbW9ubHlVc2VkOiBbXCJHRVQgL2xpY2Vuc2VzXCJdLFxuICAgIGdldEZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbGljZW5zZVwiXSxcbiAgfSxcbiAgbWFya2Rvd246IHtcbiAgICByZW5kZXI6IFtcIlBPU1QgL21hcmtkb3duXCJdLFxuICAgIHJlbmRlclJhdzogW1xuICAgICAgXCJQT1NUIC9tYXJrZG93bi9yYXdcIixcbiAgICAgIHsgaGVhZGVyczogeyBcImNvbnRlbnQtdHlwZVwiOiBcInRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIiB9IH0sXG4gICAgXSxcbiAgfSxcbiAgbWV0YToge1xuICAgIGdldDogW1wiR0VUIC9tZXRhXCJdLFxuICAgIGdldEFsbFZlcnNpb25zOiBbXCJHRVQgL3ZlcnNpb25zXCJdLFxuICAgIGdldE9jdG9jYXQ6IFtcIkdFVCAvb2N0b2NhdFwiXSxcbiAgICBnZXRaZW46IFtcIkdFVCAvemVuXCJdLFxuICAgIHJvb3Q6IFtcIkdFVCAvXCJdLFxuICB9LFxuICBtaWdyYXRpb25zOiB7XG4gICAgZGVsZXRlQXJjaGl2ZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L2FyY2hpdmVcIixcbiAgICBdLFxuICAgIGRlbGV0ZUFyY2hpdmVGb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vYXJjaGl2ZVwiLFxuICAgIF0sXG4gICAgZG93bmxvYWRBcmNoaXZlRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L2FyY2hpdmVcIixcbiAgICBdLFxuICAgIGdldEFyY2hpdmVGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9hcmNoaXZlXCIsXG4gICAgXSxcbiAgICBnZXRTdGF0dXNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH1cIl0sXG4gICAgZ2V0U3RhdHVzRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfVwiXSxcbiAgICBsaXN0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9taWdyYXRpb25zXCJdLFxuICAgIGxpc3RGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9taWdyYXRpb25zXCJdLFxuICAgIGxpc3RSZXBvc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgbGlzdFJlcG9zRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIl0sXG4gICAgbGlzdFJlcG9zRm9yVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJtaWdyYXRpb25zXCIsIFwibGlzdFJlcG9zRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIHN0YXJ0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvbWlncmF0aW9uc1wiXSxcbiAgICBzdGFydEZvck9yZzogW1wiUE9TVCAvb3Jncy97b3JnfS9taWdyYXRpb25zXCJdLFxuICAgIHVubG9ja1JlcG9Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9yZXBvcy97cmVwb19uYW1lfS9sb2NrXCIsXG4gICAgXSxcbiAgICB1bmxvY2tSZXBvRm9yT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L3JlcG9zL3tyZXBvX25hbWV9L2xvY2tcIixcbiAgICBdLFxuICB9LFxuICBvaWRjOiB7XG4gICAgZ2V0T2lkY0N1c3RvbVN1YlRlbXBsYXRlRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL29pZGMvY3VzdG9taXphdGlvbi9zdWJcIixcbiAgICBdLFxuICAgIHVwZGF0ZU9pZGNDdXN0b21TdWJUZW1wbGF0ZUZvck9yZzogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9vaWRjL2N1c3RvbWl6YXRpb24vc3ViXCIsXG4gICAgXSxcbiAgfSxcbiAgb3Jnczoge1xuICAgIGFkZFNlY3VyaXR5TWFuYWdlclRlYW06IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L3NlY3VyaXR5LW1hbmFnZXJzL3RlYW1zL3t0ZWFtX3NsdWd9XCIsXG4gICAgICB7fSxcbiAgICAgIHtcbiAgICAgICAgZGVwcmVjYXRlZDpcbiAgICAgICAgICBcIm9jdG9raXQucmVzdC5vcmdzLmFkZFNlY3VyaXR5TWFuYWdlclRlYW0oKSBpcyBkZXByZWNhdGVkLCBzZWUgaHR0cHM6Ly9kb2NzLmdpdGh1Yi5jb20vcmVzdC9vcmdzL3NlY3VyaXR5LW1hbmFnZXJzI2FkZC1hLXNlY3VyaXR5LW1hbmFnZXItdGVhbVwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGFzc2lnblRlYW1Ub09yZ1JvbGU6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlcy90ZWFtcy97dGVhbV9zbHVnfS97cm9sZV9pZH1cIixcbiAgICBdLFxuICAgIGFzc2lnblVzZXJUb09yZ1JvbGU6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlcy91c2Vycy97dXNlcm5hbWV9L3tyb2xlX2lkfVwiLFxuICAgIF0sXG4gICAgYmxvY2tVc2VyOiBbXCJQVVQgL29yZ3Mve29yZ30vYmxvY2tzL3t1c2VybmFtZX1cIl0sXG4gICAgY2FuY2VsSW52aXRhdGlvbjogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2ludml0YXRpb25zL3tpbnZpdGF0aW9uX2lkfVwiXSxcbiAgICBjaGVja0Jsb2NrZWRVc2VyOiBbXCJHRVQgL29yZ3Mve29yZ30vYmxvY2tzL3t1c2VybmFtZX1cIl0sXG4gICAgY2hlY2tNZW1iZXJzaGlwRm9yVXNlcjogW1wiR0VUIC9vcmdzL3tvcmd9L21lbWJlcnMve3VzZXJuYW1lfVwiXSxcbiAgICBjaGVja1B1YmxpY01lbWJlcnNoaXBGb3JVc2VyOiBbXCJHRVQgL29yZ3Mve29yZ30vcHVibGljX21lbWJlcnMve3VzZXJuYW1lfVwiXSxcbiAgICBjb252ZXJ0TWVtYmVyVG9PdXRzaWRlQ29sbGFib3JhdG9yOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9vdXRzaWRlX2NvbGxhYm9yYXRvcnMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgY3JlYXRlQXJ0aWZhY3RTdG9yYWdlUmVjb3JkOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vYXJ0aWZhY3RzL21ldGFkYXRhL3N0b3JhZ2UtcmVjb3JkXCIsXG4gICAgXSxcbiAgICBjcmVhdGVJbnZpdGF0aW9uOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2ludml0YXRpb25zXCJdLFxuICAgIGNyZWF0ZUlzc3VlVHlwZTogW1wiUE9TVCAvb3Jncy97b3JnfS9pc3N1ZS10eXBlc1wiXSxcbiAgICBjcmVhdGVXZWJob29rOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2hvb2tzXCJdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JPcmdzQ3JlYXRlT3JVcGRhdGVPcmdhbml6YXRpb25WYWx1ZXM6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ2FuaXphdGlvbnMve29yZ30vb3JnLXByb3BlcnRpZXMvdmFsdWVzXCIsXG4gICAgXSxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzRm9yT3Jnc0dldE9yZ2FuaXphdGlvblZhbHVlczogW1xuICAgICAgXCJHRVQgL29yZ2FuaXphdGlvbnMve29yZ30vb3JnLXByb3BlcnRpZXMvdmFsdWVzXCIsXG4gICAgXSxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzRm9yUmVwb3NDcmVhdGVPclVwZGF0ZU9yZ2FuaXphdGlvbkRlZmluaXRpb246IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L3Byb3BlcnRpZXMvc2NoZW1hL3tjdXN0b21fcHJvcGVydHlfbmFtZX1cIixcbiAgICBdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JSZXBvc0NyZWF0ZU9yVXBkYXRlT3JnYW5pemF0aW9uRGVmaW5pdGlvbnM6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ3Mve29yZ30vcHJvcGVydGllcy9zY2hlbWFcIixcbiAgICBdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JSZXBvc0NyZWF0ZU9yVXBkYXRlT3JnYW5pemF0aW9uVmFsdWVzOiBbXG4gICAgICBcIlBBVENIIC9vcmdzL3tvcmd9L3Byb3BlcnRpZXMvdmFsdWVzXCIsXG4gICAgXSxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzRm9yUmVwb3NEZWxldGVPcmdhbml6YXRpb25EZWZpbml0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9wcm9wZXJ0aWVzL3NjaGVtYS97Y3VzdG9tX3Byb3BlcnR5X25hbWV9XCIsXG4gICAgXSxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzRm9yUmVwb3NHZXRPcmdhbml6YXRpb25EZWZpbml0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9wcm9wZXJ0aWVzL3NjaGVtYS97Y3VzdG9tX3Byb3BlcnR5X25hbWV9XCIsXG4gICAgXSxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzRm9yUmVwb3NHZXRPcmdhbml6YXRpb25EZWZpbml0aW9uczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcHJvcGVydGllcy9zY2hlbWFcIixcbiAgICBdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JSZXBvc0dldE9yZ2FuaXphdGlvblZhbHVlczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcHJvcGVydGllcy92YWx1ZXNcIixcbiAgICBdLFxuICAgIGRlbGV0ZTogW1wiREVMRVRFIC9vcmdzL3tvcmd9XCJdLFxuICAgIGRlbGV0ZUF0dGVzdGF0aW9uc0J1bGs6IFtcIlBPU1QgL29yZ3Mve29yZ30vYXR0ZXN0YXRpb25zL2RlbGV0ZS1yZXF1ZXN0XCJdLFxuICAgIGRlbGV0ZUF0dGVzdGF0aW9uc0J5SWQ6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2F0dGVzdGF0aW9ucy97YXR0ZXN0YXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVBdHRlc3RhdGlvbnNCeVN1YmplY3REaWdlc3Q6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2F0dGVzdGF0aW9ucy9kaWdlc3Qve3N1YmplY3RfZGlnZXN0fVwiLFxuICAgIF0sXG4gICAgZGVsZXRlSXNzdWVUeXBlOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vaXNzdWUtdHlwZXMve2lzc3VlX3R5cGVfaWR9XCJdLFxuICAgIGRlbGV0ZVdlYmhvb2s6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9ob29rcy97aG9va19pZH1cIl0sXG4gICAgZGlzYWJsZVNlbGVjdGVkUmVwb3NpdG9yeUltbXV0YWJsZVJlbGVhc2VzT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9zZXR0aW5ncy9pbW11dGFibGUtcmVsZWFzZXMvcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgZW5hYmxlU2VsZWN0ZWRSZXBvc2l0b3J5SW1tdXRhYmxlUmVsZWFzZXNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2ltbXV0YWJsZS1yZWxlYXNlcy9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBnZXQ6IFtcIkdFVCAvb3Jncy97b3JnfVwiXSxcbiAgICBnZXRJbW11dGFibGVSZWxlYXNlc1NldHRpbmdzOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9pbW11dGFibGUtcmVsZWFzZXNcIixcbiAgICBdLFxuICAgIGdldEltbXV0YWJsZVJlbGVhc2VzU2V0dGluZ3NSZXBvc2l0b3JpZXM6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2ltbXV0YWJsZS1yZWxlYXNlcy9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGdldE1lbWJlcnNoaXBGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL21lbWJlcnNoaXBzL29yZ3Mve29yZ31cIl0sXG4gICAgZ2V0TWVtYmVyc2hpcEZvclVzZXI6IFtcIkdFVCAvb3Jncy97b3JnfS9tZW1iZXJzaGlwcy97dXNlcm5hbWV9XCJdLFxuICAgIGdldE9yZ1JvbGU6IFtcIkdFVCAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMve3JvbGVfaWR9XCJdLFxuICAgIGdldE9yZ1J1bGVzZXRIaXN0b3J5OiBbXCJHRVQgL29yZ3Mve29yZ30vcnVsZXNldHMve3J1bGVzZXRfaWR9L2hpc3RvcnlcIl0sXG4gICAgZ2V0T3JnUnVsZXNldFZlcnNpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3J1bGVzZXRzL3tydWxlc2V0X2lkfS9oaXN0b3J5L3t2ZXJzaW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0V2ViaG9vazogW1wiR0VUIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfVwiXSxcbiAgICBnZXRXZWJob29rQ29uZmlnRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9L2NvbmZpZ1wiXSxcbiAgICBnZXRXZWJob29rRGVsaXZlcnk6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfS9kZWxpdmVyaWVzL3tkZWxpdmVyeV9pZH1cIixcbiAgICBdLFxuICAgIGxpc3Q6IFtcIkdFVCAvb3JnYW5pemF0aW9uc1wiXSxcbiAgICBsaXN0QXBwSW5zdGFsbGF0aW9uczogW1wiR0VUIC9vcmdzL3tvcmd9L2luc3RhbGxhdGlvbnNcIl0sXG4gICAgbGlzdEFydGlmYWN0U3RvcmFnZVJlY29yZHM6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FydGlmYWN0cy97c3ViamVjdF9kaWdlc3R9L21ldGFkYXRhL3N0b3JhZ2UtcmVjb3Jkc1wiLFxuICAgIF0sXG4gICAgbGlzdEF0dGVzdGF0aW9uUmVwb3NpdG9yaWVzOiBbXCJHRVQgL29yZ3Mve29yZ30vYXR0ZXN0YXRpb25zL3JlcG9zaXRvcmllc1wiXSxcbiAgICBsaXN0QXR0ZXN0YXRpb25zOiBbXCJHRVQgL29yZ3Mve29yZ30vYXR0ZXN0YXRpb25zL3tzdWJqZWN0X2RpZ2VzdH1cIl0sXG4gICAgbGlzdEF0dGVzdGF0aW9uc0J1bGs6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9hdHRlc3RhdGlvbnMvYnVsay1saXN0ez9wZXJfcGFnZSxiZWZvcmUsYWZ0ZXJ9XCIsXG4gICAgXSxcbiAgICBsaXN0QmxvY2tlZFVzZXJzOiBbXCJHRVQgL29yZ3Mve29yZ30vYmxvY2tzXCJdLFxuICAgIGxpc3RGYWlsZWRJbnZpdGF0aW9uczogW1wiR0VUIC9vcmdzL3tvcmd9L2ZhaWxlZF9pbnZpdGF0aW9uc1wiXSxcbiAgICBsaXN0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9vcmdzXCJdLFxuICAgIGxpc3RGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vb3Jnc1wiXSxcbiAgICBsaXN0SW52aXRhdGlvblRlYW1zOiBbXCJHRVQgL29yZ3Mve29yZ30vaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9L3RlYW1zXCJdLFxuICAgIGxpc3RJc3N1ZVR5cGVzOiBbXCJHRVQgL29yZ3Mve29yZ30vaXNzdWUtdHlwZXNcIl0sXG4gICAgbGlzdE1lbWJlcnM6IFtcIkdFVCAvb3Jncy97b3JnfS9tZW1iZXJzXCJdLFxuICAgIGxpc3RNZW1iZXJzaGlwc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvbWVtYmVyc2hpcHMvb3Jnc1wiXSxcbiAgICBsaXN0T3JnUm9sZVRlYW1zOiBbXCJHRVQgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3tyb2xlX2lkfS90ZWFtc1wiXSxcbiAgICBsaXN0T3JnUm9sZVVzZXJzOiBbXCJHRVQgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3tyb2xlX2lkfS91c2Vyc1wiXSxcbiAgICBsaXN0T3JnUm9sZXM6IFtcIkdFVCAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXNcIl0sXG4gICAgbGlzdE9yZ2FuaXphdGlvbkZpbmVHcmFpbmVkUGVybWlzc2lvbnM6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1maW5lLWdyYWluZWQtcGVybWlzc2lvbnNcIixcbiAgICBdLFxuICAgIGxpc3RPdXRzaWRlQ29sbGFib3JhdG9yczogW1wiR0VUIC9vcmdzL3tvcmd9L291dHNpZGVfY29sbGFib3JhdG9yc1wiXSxcbiAgICBsaXN0UGF0R3JhbnRSZXBvc2l0b3JpZXM6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbnMve3BhdF9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBsaXN0UGF0R3JhbnRSZXF1ZXN0UmVwb3NpdG9yaWVzOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW4tcmVxdWVzdHMve3BhdF9yZXF1ZXN0X2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGxpc3RQYXRHcmFudFJlcXVlc3RzOiBbXCJHRVQgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2VuLXJlcXVlc3RzXCJdLFxuICAgIGxpc3RQYXRHcmFudHM6IFtcIkdFVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW5zXCJdLFxuICAgIGxpc3RQZW5kaW5nSW52aXRhdGlvbnM6IFtcIkdFVCAvb3Jncy97b3JnfS9pbnZpdGF0aW9uc1wiXSxcbiAgICBsaXN0UHVibGljTWVtYmVyczogW1wiR0VUIC9vcmdzL3tvcmd9L3B1YmxpY19tZW1iZXJzXCJdLFxuICAgIGxpc3RTZWN1cml0eU1hbmFnZXJUZWFtczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vc2VjdXJpdHktbWFuYWdlcnNcIixcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICBkZXByZWNhdGVkOlxuICAgICAgICAgIFwib2N0b2tpdC5yZXN0Lm9yZ3MubGlzdFNlY3VyaXR5TWFuYWdlclRlYW1zKCkgaXMgZGVwcmVjYXRlZCwgc2VlIGh0dHBzOi8vZG9jcy5naXRodWIuY29tL3Jlc3Qvb3Jncy9zZWN1cml0eS1tYW5hZ2VycyNsaXN0LXNlY3VyaXR5LW1hbmFnZXItdGVhbXNcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBsaXN0V2ViaG9va0RlbGl2ZXJpZXM6IFtcIkdFVCAvb3Jncy97b3JnfS9ob29rcy97aG9va19pZH0vZGVsaXZlcmllc1wiXSxcbiAgICBsaXN0V2ViaG9va3M6IFtcIkdFVCAvb3Jncy97b3JnfS9ob29rc1wiXSxcbiAgICBwaW5nV2ViaG9vazogW1wiUE9TVCAvb3Jncy97b3JnfS9ob29rcy97aG9va19pZH0vcGluZ3NcIl0sXG4gICAgcmVkZWxpdmVyV2ViaG9va0RlbGl2ZXJ5OiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9L2RlbGl2ZXJpZXMve2RlbGl2ZXJ5X2lkfS9hdHRlbXB0c1wiLFxuICAgIF0sXG4gICAgcmVtb3ZlTWVtYmVyOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vbWVtYmVycy97dXNlcm5hbWV9XCJdLFxuICAgIHJlbW92ZU1lbWJlcnNoaXBGb3JVc2VyOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vbWVtYmVyc2hpcHMve3VzZXJuYW1lfVwiXSxcbiAgICByZW1vdmVPdXRzaWRlQ29sbGFib3JhdG9yOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9vdXRzaWRlX2NvbGxhYm9yYXRvcnMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlUHVibGljTWVtYmVyc2hpcEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9wdWJsaWNfbWVtYmVycy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICByZW1vdmVTZWN1cml0eU1hbmFnZXJUZWFtOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9zZWN1cml0eS1tYW5hZ2Vycy90ZWFtcy97dGVhbV9zbHVnfVwiLFxuICAgICAge30sXG4gICAgICB7XG4gICAgICAgIGRlcHJlY2F0ZWQ6XG4gICAgICAgICAgXCJvY3Rva2l0LnJlc3Qub3Jncy5yZW1vdmVTZWN1cml0eU1hbmFnZXJUZWFtKCkgaXMgZGVwcmVjYXRlZCwgc2VlIGh0dHBzOi8vZG9jcy5naXRodWIuY29tL3Jlc3Qvb3Jncy9zZWN1cml0eS1tYW5hZ2VycyNyZW1vdmUtYS1zZWN1cml0eS1tYW5hZ2VyLXRlYW1cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICByZXZpZXdQYXRHcmFudFJlcXVlc3Q6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW4tcmVxdWVzdHMve3BhdF9yZXF1ZXN0X2lkfVwiLFxuICAgIF0sXG4gICAgcmV2aWV3UGF0R3JhbnRSZXF1ZXN0c0luQnVsazogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbi1yZXF1ZXN0c1wiLFxuICAgIF0sXG4gICAgcmV2b2tlQWxsT3JnUm9sZXNUZWFtOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMvdGVhbXMve3RlYW1fc2x1Z31cIixcbiAgICBdLFxuICAgIHJldm9rZUFsbE9yZ1JvbGVzVXNlcjogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3VzZXJzL3t1c2VybmFtZX1cIixcbiAgICBdLFxuICAgIHJldm9rZU9yZ1JvbGVUZWFtOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMvdGVhbXMve3RlYW1fc2x1Z30ve3JvbGVfaWR9XCIsXG4gICAgXSxcbiAgICByZXZva2VPcmdSb2xlVXNlcjogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3VzZXJzL3t1c2VybmFtZX0ve3JvbGVfaWR9XCIsXG4gICAgXSxcbiAgICBzZXRJbW11dGFibGVSZWxlYXNlc1NldHRpbmdzOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9pbW11dGFibGUtcmVsZWFzZXNcIixcbiAgICBdLFxuICAgIHNldEltbXV0YWJsZVJlbGVhc2VzU2V0dGluZ3NSZXBvc2l0b3JpZXM6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2ltbXV0YWJsZS1yZWxlYXNlcy9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIHNldE1lbWJlcnNoaXBGb3JVc2VyOiBbXCJQVVQgL29yZ3Mve29yZ30vbWVtYmVyc2hpcHMve3VzZXJuYW1lfVwiXSxcbiAgICBzZXRQdWJsaWNNZW1iZXJzaGlwRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L3B1YmxpY19tZW1iZXJzL3t1c2VybmFtZX1cIixcbiAgICBdLFxuICAgIHVuYmxvY2tVc2VyOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vYmxvY2tzL3t1c2VybmFtZX1cIl0sXG4gICAgdXBkYXRlOiBbXCJQQVRDSCAvb3Jncy97b3JnfVwiXSxcbiAgICB1cGRhdGVJc3N1ZVR5cGU6IFtcIlBVVCAvb3Jncy97b3JnfS9pc3N1ZS10eXBlcy97aXNzdWVfdHlwZV9pZH1cIl0sXG4gICAgdXBkYXRlTWVtYmVyc2hpcEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBBVENIIC91c2VyL21lbWJlcnNoaXBzL29yZ3Mve29yZ31cIixcbiAgICBdLFxuICAgIHVwZGF0ZVBhdEFjY2VzczogW1wiUE9TVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW5zL3twYXRfaWR9XCJdLFxuICAgIHVwZGF0ZVBhdEFjY2Vzc2VzOiBbXCJQT1NUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbnNcIl0sXG4gICAgdXBkYXRlV2ViaG9vazogW1wiUEFUQ0ggL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9XCJdLFxuICAgIHVwZGF0ZVdlYmhvb2tDb25maWdGb3JPcmc6IFtcIlBBVENIIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfS9jb25maWdcIl0sXG4gIH0sXG4gIHBhY2thZ2VzOiB7XG4gICAgZGVsZXRlUGFja2FnZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlUGFja2FnZUZvck9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX1cIixcbiAgICBdLFxuICAgIGRlbGV0ZVBhY2thZ2VGb3JVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlcnMve3VzZXJuYW1lfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlUGFja2FnZVZlcnNpb25Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnMve3BhY2thZ2VfdmVyc2lvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZVBhY2thZ2VWZXJzaW9uRm9yT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9ucy97cGFja2FnZV92ZXJzaW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlUGFja2FnZVZlcnNpb25Gb3JVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlcnMve3VzZXJuYW1lfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9ucy97cGFja2FnZV92ZXJzaW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0QWxsUGFja2FnZVZlcnNpb25zRm9yQVBhY2thZ2VPd25lZEJ5QW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wicGFja2FnZXNcIiwgXCJnZXRBbGxQYWNrYWdlVmVyc2lvbnNGb3JQYWNrYWdlT3duZWRCeU9yZ1wiXSB9LFxuICAgIF0sXG4gICAgZ2V0QWxsUGFja2FnZVZlcnNpb25zRm9yQVBhY2thZ2VPd25lZEJ5VGhlQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zXCIsXG4gICAgICB7fSxcbiAgICAgIHtcbiAgICAgICAgcmVuYW1lZDogW1xuICAgICAgICAgIFwicGFja2FnZXNcIixcbiAgICAgICAgICBcImdldEFsbFBhY2thZ2VWZXJzaW9uc0ZvclBhY2thZ2VPd25lZEJ5QXV0aGVudGljYXRlZFVzZXJcIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBnZXRBbGxQYWNrYWdlVmVyc2lvbnNGb3JQYWNrYWdlT3duZWRCeUF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9uc1wiLFxuICAgIF0sXG4gICAgZ2V0QWxsUGFja2FnZVZlcnNpb25zRm9yUGFja2FnZU93bmVkQnlPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zXCIsXG4gICAgXSxcbiAgICBnZXRBbGxQYWNrYWdlVmVyc2lvbnNGb3JQYWNrYWdlT3duZWRCeVVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zXCIsXG4gICAgXSxcbiAgICBnZXRQYWNrYWdlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9XCIsXG4gICAgXSxcbiAgICBnZXRQYWNrYWdlRm9yT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfVwiLFxuICAgIF0sXG4gICAgZ2V0UGFja2FnZUZvclVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9XCIsXG4gICAgXSxcbiAgICBnZXRQYWNrYWdlVmVyc2lvbkZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9ucy97cGFja2FnZV92ZXJzaW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0UGFja2FnZVZlcnNpb25Gb3JPcmdhbml6YXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9XCIsXG4gICAgXSxcbiAgICBnZXRQYWNrYWdlVmVyc2lvbkZvclVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9XCIsXG4gICAgXSxcbiAgICBsaXN0RG9ja2VyTWlncmF0aW9uQ29uZmxpY3RpbmdQYWNrYWdlc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9kb2NrZXIvY29uZmxpY3RzXCIsXG4gICAgXSxcbiAgICBsaXN0RG9ja2VyTWlncmF0aW9uQ29uZmxpY3RpbmdQYWNrYWdlc0Zvck9yZ2FuaXphdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vZG9ja2VyL2NvbmZsaWN0c1wiLFxuICAgIF0sXG4gICAgbGlzdERvY2tlck1pZ3JhdGlvbkNvbmZsaWN0aW5nUGFja2FnZXNGb3JVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9kb2NrZXIvY29uZmxpY3RzXCIsXG4gICAgXSxcbiAgICBsaXN0UGFja2FnZXNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3BhY2thZ2VzXCJdLFxuICAgIGxpc3RQYWNrYWdlc0Zvck9yZ2FuaXphdGlvbjogW1wiR0VUIC9vcmdzL3tvcmd9L3BhY2thZ2VzXCJdLFxuICAgIGxpc3RQYWNrYWdlc0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wYWNrYWdlc1wiXSxcbiAgICByZXN0b3JlUGFja2FnZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBPU1QgL3VzZXIvcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vcmVzdG9yZXs/dG9rZW59XCIsXG4gICAgXSxcbiAgICByZXN0b3JlUGFja2FnZUZvck9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3Jlc3RvcmV7P3Rva2VufVwiLFxuICAgIF0sXG4gICAgcmVzdG9yZVBhY2thZ2VGb3JVc2VyOiBbXG4gICAgICBcIlBPU1QgL3VzZXJzL3t1c2VybmFtZX0vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vcmVzdG9yZXs/dG9rZW59XCIsXG4gICAgXSxcbiAgICByZXN0b3JlUGFja2FnZVZlcnNpb25Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQT1NUIC91c2VyL3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9L3Jlc3RvcmVcIixcbiAgICBdLFxuICAgIHJlc3RvcmVQYWNrYWdlVmVyc2lvbkZvck9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9L3Jlc3RvcmVcIixcbiAgICBdLFxuICAgIHJlc3RvcmVQYWNrYWdlVmVyc2lvbkZvclVzZXI6IFtcbiAgICAgIFwiUE9TVCAvdXNlcnMve3VzZXJuYW1lfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9ucy97cGFja2FnZV92ZXJzaW9uX2lkfS9yZXN0b3JlXCIsXG4gICAgXSxcbiAgfSxcbiAgcHJpdmF0ZVJlZ2lzdHJpZXM6IHtcbiAgICBjcmVhdGVPcmdQcml2YXRlUmVnaXN0cnk6IFtcIlBPU1QgL29yZ3Mve29yZ30vcHJpdmF0ZS1yZWdpc3RyaWVzXCJdLFxuICAgIGRlbGV0ZU9yZ1ByaXZhdGVSZWdpc3RyeTogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vcHJpdmF0ZS1yZWdpc3RyaWVzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGdldE9yZ1ByaXZhdGVSZWdpc3RyeTogW1wiR0VUIC9vcmdzL3tvcmd9L3ByaXZhdGUtcmVnaXN0cmllcy97c2VjcmV0X25hbWV9XCJdLFxuICAgIGdldE9yZ1B1YmxpY0tleTogW1wiR0VUIC9vcmdzL3tvcmd9L3ByaXZhdGUtcmVnaXN0cmllcy9wdWJsaWMta2V5XCJdLFxuICAgIGxpc3RPcmdQcml2YXRlUmVnaXN0cmllczogW1wiR0VUIC9vcmdzL3tvcmd9L3ByaXZhdGUtcmVnaXN0cmllc1wiXSxcbiAgICB1cGRhdGVPcmdQcml2YXRlUmVnaXN0cnk6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ3Mve29yZ30vcHJpdmF0ZS1yZWdpc3RyaWVzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICB9LFxuICBwcm9qZWN0czoge1xuICAgIGFkZEl0ZW1Gb3JPcmc6IFtcIlBPU1QgL29yZ3Mve29yZ30vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zXCJdLFxuICAgIGFkZEl0ZW1Gb3JVc2VyOiBbXG4gICAgICBcIlBPU1QgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zXCIsXG4gICAgXSxcbiAgICBkZWxldGVJdGVtRm9yT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXMve2l0ZW1faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVJdGVtRm9yVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zL3tpdGVtX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0RmllbGRGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9maWVsZHMve2ZpZWxkX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0RmllbGRGb3JVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vZmllbGRzL3tmaWVsZF9pZH1cIixcbiAgICBdLFxuICAgIGdldEZvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfVwiXSxcbiAgICBnZXRGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9XCJdLFxuICAgIGdldE9yZ0l0ZW06IFtcIkdFVCAvb3Jncy97b3JnfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXMve2l0ZW1faWR9XCJdLFxuICAgIGdldFVzZXJJdGVtOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXMve2l0ZW1faWR9XCIsXG4gICAgXSxcbiAgICBsaXN0RmllbGRzRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2ZpZWxkc1wiXSxcbiAgICBsaXN0RmllbGRzRm9yVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2ZpZWxkc1wiLFxuICAgIF0sXG4gICAgbGlzdEZvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzVjJcIl0sXG4gICAgbGlzdEZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyXCJdLFxuICAgIGxpc3RJdGVtc0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9pdGVtc1wiXSxcbiAgICBsaXN0SXRlbXNGb3JVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXNcIixcbiAgICBdLFxuICAgIHVwZGF0ZUl0ZW1Gb3JPcmc6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ3Mve29yZ30vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zL3tpdGVtX2lkfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlSXRlbUZvclVzZXI6IFtcbiAgICAgIFwiUEFUQ0ggL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zL3tpdGVtX2lkfVwiLFxuICAgIF0sXG4gIH0sXG4gIHB1bGxzOiB7XG4gICAgY2hlY2tJZk1lcmdlZDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L21lcmdlXCJdLFxuICAgIGNyZWF0ZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHNcIl0sXG4gICAgY3JlYXRlUmVwbHlGb3JSZXZpZXdDb21tZW50OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfaWR9L3JlcGxpZXNcIixcbiAgICBdLFxuICAgIGNyZWF0ZVJldmlldzogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXZpZXdzXCJdLFxuICAgIGNyZWF0ZVJldmlld0NvbW1lbnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb21tZW50c1wiLFxuICAgIF0sXG4gICAgZGVsZXRlUGVuZGluZ1JldmlldzogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3cy97cmV2aWV3X2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlUmV2aWV3Q29tbWVudDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL2NvbW1lbnRzL3tjb21tZW50X2lkfVwiLFxuICAgIF0sXG4gICAgZGlzbWlzc1JldmlldzogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3cy97cmV2aWV3X2lkfS9kaXNtaXNzYWxzXCIsXG4gICAgXSxcbiAgICBnZXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfVwiXSxcbiAgICBnZXRSZXZpZXc6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3Mve3Jldmlld19pZH1cIixcbiAgICBdLFxuICAgIGdldFJldmlld0NvbW1lbnQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHMve2NvbW1lbnRfaWR9XCJdLFxuICAgIGxpc3Q6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHNcIl0sXG4gICAgbGlzdENvbW1lbnRzRm9yUmV2aWV3OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXZpZXdzL3tyZXZpZXdfaWR9L2NvbW1lbnRzXCIsXG4gICAgXSxcbiAgICBsaXN0Q29tbWl0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L2NvbW1pdHNcIl0sXG4gICAgbGlzdEZpbGVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vZmlsZXNcIl0sXG4gICAgbGlzdFJlcXVlc3RlZFJldmlld2VyczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmVxdWVzdGVkX3Jldmlld2Vyc1wiLFxuICAgIF0sXG4gICAgbGlzdFJldmlld0NvbW1lbnRzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb21tZW50c1wiLFxuICAgIF0sXG4gICAgbGlzdFJldmlld0NvbW1lbnRzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy9jb21tZW50c1wiXSxcbiAgICBsaXN0UmV2aWV3czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3NcIl0sXG4gICAgbWVyZ2U6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9tZXJnZVwiXSxcbiAgICByZW1vdmVSZXF1ZXN0ZWRSZXZpZXdlcnM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3JlcXVlc3RlZF9yZXZpZXdlcnNcIixcbiAgICBdLFxuICAgIHJlcXVlc3RSZXZpZXdlcnM6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXF1ZXN0ZWRfcmV2aWV3ZXJzXCIsXG4gICAgXSxcbiAgICBzdWJtaXRSZXZpZXc6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXZpZXdzL3tyZXZpZXdfaWR9L2V2ZW50c1wiLFxuICAgIF0sXG4gICAgdXBkYXRlOiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfVwiXSxcbiAgICB1cGRhdGVCcmFuY2g6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3VwZGF0ZS1icmFuY2hcIixcbiAgICBdLFxuICAgIHVwZGF0ZVJldmlldzogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3cy97cmV2aWV3X2lkfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlUmV2aWV3Q29tbWVudDogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHMve2NvbW1lbnRfaWR9XCIsXG4gICAgXSxcbiAgfSxcbiAgcmF0ZUxpbWl0OiB7IGdldDogW1wiR0VUIC9yYXRlX2xpbWl0XCJdIH0sXG4gIHJlYWN0aW9uczoge1xuICAgIGNyZWF0ZUZvckNvbW1pdENvbW1lbnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlRm9ySXNzdWU6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlRm9ySXNzdWVDb21tZW50OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBjcmVhdGVGb3JQdWxsUmVxdWVzdFJldmlld0NvbW1lbnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlRm9yUmVsZWFzZTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBjcmVhdGVGb3JUZWFtRGlzY3Vzc2lvbkNvbW1lbnRJbk9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGNyZWF0ZUZvclRlYW1EaXNjdXNzaW9uSW5Pcmc6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgZGVsZXRlRm9yQ29tbWl0Q29tbWVudDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnMve3JlYWN0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRm9ySXNzdWU6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vcmVhY3Rpb25zL3tyZWFjdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUZvcklzc3VlQ29tbWVudDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zL3tyZWFjdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUZvclB1bGxSZXF1ZXN0Q29tbWVudDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnMve3JlYWN0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRm9yUmVsZWFzZTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfS9yZWFjdGlvbnMve3JlYWN0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRm9yVGVhbURpc2N1c3Npb246IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vcmVhY3Rpb25zL3tyZWFjdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUZvclRlYW1EaXNjdXNzaW9uQ29tbWVudDogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9udW1iZXJ9L3JlYWN0aW9ucy97cmVhY3Rpb25faWR9XCIsXG4gICAgXSxcbiAgICBsaXN0Rm9yQ29tbWl0Q29tbWVudDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGxpc3RGb3JJc3N1ZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vcmVhY3Rpb25zXCJdLFxuICAgIGxpc3RGb3JJc3N1ZUNvbW1lbnQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdEZvclB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGxpc3RGb3JSZWxlYXNlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMve3JlbGVhc2VfaWR9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdEZvclRlYW1EaXNjdXNzaW9uQ29tbWVudEluT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzL3tjb21tZW50X251bWJlcn0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBsaXN0Rm9yVGVhbURpc2N1c3Npb25Jbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICB9LFxuICByZXBvczoge1xuICAgIGFjY2VwdEludml0YXRpb246IFtcbiAgICAgIFwiUEFUQ0ggL3VzZXIvcmVwb3NpdG9yeV9pbnZpdGF0aW9ucy97aW52aXRhdGlvbl9pZH1cIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJyZXBvc1wiLCBcImFjY2VwdEludml0YXRpb25Gb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgYWNjZXB0SW52aXRhdGlvbkZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBBVENIIC91c2VyL3JlcG9zaXRvcnlfaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBhZGRBcHBBY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvYXBwc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJhcHBzXCIgfSxcbiAgICBdLFxuICAgIGFkZENvbGxhYm9yYXRvcjogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2xsYWJvcmF0b3JzL3t1c2VybmFtZX1cIl0sXG4gICAgYWRkU3RhdHVzQ2hlY2tDb250ZXh0czogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3N0YXR1c19jaGVja3MvY29udGV4dHNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwiY29udGV4dHNcIiB9LFxuICAgIF0sXG4gICAgYWRkVGVhbUFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy90ZWFtc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJ0ZWFtc1wiIH0sXG4gICAgXSxcbiAgICBhZGRVc2VyQWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL3VzZXJzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcInVzZXJzXCIgfSxcbiAgICBdLFxuICAgIGNhbmNlbFBhZ2VzRGVwbG95bWVudDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlcy9kZXBsb3ltZW50cy97cGFnZXNfZGVwbG95bWVudF9pZH0vY2FuY2VsXCIsXG4gICAgXSxcbiAgICBjaGVja0F1dG9tYXRlZFNlY3VyaXR5Rml4ZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdXRvbWF0ZWQtc2VjdXJpdHktZml4ZXNcIixcbiAgICBdLFxuICAgIGNoZWNrQ29sbGFib3JhdG9yOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbGxhYm9yYXRvcnMve3VzZXJuYW1lfVwiXSxcbiAgICBjaGVja0ltbXV0YWJsZVJlbGVhc2VzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ltbXV0YWJsZS1yZWxlYXNlc1wiXSxcbiAgICBjaGVja1ByaXZhdGVWdWxuZXJhYmlsaXR5UmVwb3J0aW5nOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHJpdmF0ZS12dWxuZXJhYmlsaXR5LXJlcG9ydGluZ1wiLFxuICAgIF0sXG4gICAgY2hlY2tWdWxuZXJhYmlsaXR5QWxlcnRzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdnVsbmVyYWJpbGl0eS1hbGVydHNcIixcbiAgICBdLFxuICAgIGNvZGVvd25lcnNFcnJvcnM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZW93bmVycy9lcnJvcnNcIl0sXG4gICAgY29tcGFyZUNvbW1pdHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tcGFyZS97YmFzZX0uLi57aGVhZH1cIl0sXG4gICAgY29tcGFyZUNvbW1pdHNXaXRoQmFzZWhlYWQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21wYXJlL3tiYXNlaGVhZH1cIixcbiAgICBdLFxuICAgIGNyZWF0ZUF0dGVzdGF0aW9uOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdHRlc3RhdGlvbnNcIl0sXG4gICAgY3JlYXRlQXV0b2xpbms6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2F1dG9saW5rc1wiXSxcbiAgICBjcmVhdGVDb21taXRDb21tZW50OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve2NvbW1pdF9zaGF9L2NvbW1lbnRzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVDb21taXRTaWduYXR1cmVQcm90ZWN0aW9uOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc2lnbmF0dXJlc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlQ29tbWl0U3RhdHVzOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdGF0dXNlcy97c2hhfVwiXSxcbiAgICBjcmVhdGVEZXBsb3lLZXk6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2tleXNcIl0sXG4gICAgY3JlYXRlRGVwbG95bWVudDogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwbG95bWVudHNcIl0sXG4gICAgY3JlYXRlRGVwbG95bWVudEJyYW5jaFBvbGljeTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnQtYnJhbmNoLXBvbGljaWVzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVEZXBsb3ltZW50UHJvdGVjdGlvblJ1bGU6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50X3Byb3RlY3Rpb25fcnVsZXNcIixcbiAgICBdLFxuICAgIGNyZWF0ZURlcGxveW1lbnRTdGF0dXM6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwbG95bWVudHMve2RlcGxveW1lbnRfaWR9L3N0YXR1c2VzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVEaXNwYXRjaEV2ZW50OiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kaXNwYXRjaGVzXCJdLFxuICAgIGNyZWF0ZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL3JlcG9zXCJdLFxuICAgIGNyZWF0ZUZvcms6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ZvcmtzXCJdLFxuICAgIGNyZWF0ZUluT3JnOiBbXCJQT1NUIC9vcmdzL3tvcmd9L3JlcG9zXCJdLFxuICAgIGNyZWF0ZU9yVXBkYXRlRW52aXJvbm1lbnQ6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9XCIsXG4gICAgXSxcbiAgICBjcmVhdGVPclVwZGF0ZUZpbGVDb250ZW50czogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250ZW50cy97cGF0aH1cIl0sXG4gICAgY3JlYXRlT3JnUnVsZXNldDogW1wiUE9TVCAvb3Jncy97b3JnfS9ydWxlc2V0c1wiXSxcbiAgICBjcmVhdGVQYWdlc0RlcGxveW1lbnQ6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2RlcGxveW1lbnRzXCJdLFxuICAgIGNyZWF0ZVBhZ2VzU2l0ZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXNcIl0sXG4gICAgY3JlYXRlUmVsZWFzZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXNcIl0sXG4gICAgY3JlYXRlUmVwb1J1bGVzZXQ6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzXCJdLFxuICAgIGNyZWF0ZVVzaW5nVGVtcGxhdGU6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve3RlbXBsYXRlX293bmVyfS97dGVtcGxhdGVfcmVwb30vZ2VuZXJhdGVcIixcbiAgICBdLFxuICAgIGNyZWF0ZVdlYmhvb2s6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzXCJdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JSZXBvc0NyZWF0ZU9yVXBkYXRlUmVwb3NpdG9yeVZhbHVlczogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vcHJvcGVydGllcy92YWx1ZXNcIixcbiAgICBdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JSZXBvc0dldFJlcG9zaXRvcnlWYWx1ZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wcm9wZXJ0aWVzL3ZhbHVlc1wiLFxuICAgIF0sXG4gICAgZGVjbGluZUludml0YXRpb246IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL3JlcG9zaXRvcnlfaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wicmVwb3NcIiwgXCJkZWNsaW5lSW52aXRhdGlvbkZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBkZWNsaW5lSW52aXRhdGlvbkZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9yZXBvc2l0b3J5X2ludml0YXRpb25zL3tpbnZpdGF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99XCJdLFxuICAgIGRlbGV0ZUFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zXCIsXG4gICAgXSxcbiAgICBkZWxldGVBZG1pbkJyYW5jaFByb3RlY3Rpb246IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL2VuZm9yY2VfYWRtaW5zXCIsXG4gICAgXSxcbiAgICBkZWxldGVBbkVudmlyb25tZW50OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlQXV0b2xpbms6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYXV0b2xpbmtzL3thdXRvbGlua19pZH1cIl0sXG4gICAgZGVsZXRlQnJhbmNoUHJvdGVjdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb25cIixcbiAgICBdLFxuICAgIGRlbGV0ZUNvbW1pdENvbW1lbnQ6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWVudHMve2NvbW1lbnRfaWR9XCJdLFxuICAgIGRlbGV0ZUNvbW1pdFNpZ25hdHVyZVByb3RlY3Rpb246IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3NpZ25hdHVyZXNcIixcbiAgICBdLFxuICAgIGRlbGV0ZURlcGxveUtleTogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9rZXlzL3trZXlfaWR9XCJdLFxuICAgIGRlbGV0ZURlcGxveW1lbnQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBsb3ltZW50cy97ZGVwbG95bWVudF9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZURlcGxveW1lbnRCcmFuY2hQb2xpY3k6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnQtYnJhbmNoLXBvbGljaWVzL3ticmFuY2hfcG9saWN5X2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRmlsZTogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250ZW50cy97cGF0aH1cIl0sXG4gICAgZGVsZXRlSW52aXRhdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ludml0YXRpb25zL3tpbnZpdGF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlT3JnUnVsZXNldDogW1wiREVMRVRFIC9vcmdzL3tvcmd9L3J1bGVzZXRzL3tydWxlc2V0X2lkfVwiXSxcbiAgICBkZWxldGVQYWdlc1NpdGU6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXNcIl0sXG4gICAgZGVsZXRlUHVsbFJlcXVlc3RSZXZpZXdQcm90ZWN0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9wdWxsX3JlcXVlc3RfcmV2aWV3c1wiLFxuICAgIF0sXG4gICAgZGVsZXRlUmVsZWFzZTogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH1cIl0sXG4gICAgZGVsZXRlUmVsZWFzZUFzc2V0OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMvYXNzZXRzL3thc3NldF9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZVJlcG9SdWxlc2V0OiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzL3tydWxlc2V0X2lkfVwiXSxcbiAgICBkZWxldGVXZWJob29rOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfVwiXSxcbiAgICBkaXNhYmxlQXV0b21hdGVkU2VjdXJpdHlGaXhlczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2F1dG9tYXRlZC1zZWN1cml0eS1maXhlc1wiLFxuICAgIF0sXG4gICAgZGlzYWJsZURlcGxveW1lbnRQcm90ZWN0aW9uUnVsZTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudF9wcm90ZWN0aW9uX3J1bGVzL3twcm90ZWN0aW9uX3J1bGVfaWR9XCIsXG4gICAgXSxcbiAgICBkaXNhYmxlSW1tdXRhYmxlUmVsZWFzZXM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbW11dGFibGUtcmVsZWFzZXNcIixcbiAgICBdLFxuICAgIGRpc2FibGVQcml2YXRlVnVsbmVyYWJpbGl0eVJlcG9ydGluZzogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3ByaXZhdGUtdnVsbmVyYWJpbGl0eS1yZXBvcnRpbmdcIixcbiAgICBdLFxuICAgIGRpc2FibGVWdWxuZXJhYmlsaXR5QWxlcnRzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vdnVsbmVyYWJpbGl0eS1hbGVydHNcIixcbiAgICBdLFxuICAgIGRvd25sb2FkQXJjaGl2ZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3ppcGJhbGwve3JlZn1cIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJyZXBvc1wiLCBcImRvd25sb2FkWmlwYmFsbEFyY2hpdmVcIl0gfSxcbiAgICBdLFxuICAgIGRvd25sb2FkVGFyYmFsbEFyY2hpdmU6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdGFyYmFsbC97cmVmfVwiXSxcbiAgICBkb3dubG9hZFppcGJhbGxBcmNoaXZlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3ppcGJhbGwve3JlZn1cIl0sXG4gICAgZW5hYmxlQXV0b21hdGVkU2VjdXJpdHlGaXhlczogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2F1dG9tYXRlZC1zZWN1cml0eS1maXhlc1wiLFxuICAgIF0sXG4gICAgZW5hYmxlSW1tdXRhYmxlUmVsZWFzZXM6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vaW1tdXRhYmxlLXJlbGVhc2VzXCJdLFxuICAgIGVuYWJsZVByaXZhdGVWdWxuZXJhYmlsaXR5UmVwb3J0aW5nOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHJpdmF0ZS12dWxuZXJhYmlsaXR5LXJlcG9ydGluZ1wiLFxuICAgIF0sXG4gICAgZW5hYmxlVnVsbmVyYWJpbGl0eUFsZXJ0czogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3Z1bG5lcmFiaWxpdHktYWxlcnRzXCIsXG4gICAgXSxcbiAgICBnZW5lcmF0ZVJlbGVhc2VOb3RlczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy9nZW5lcmF0ZS1ub3Rlc1wiLFxuICAgIF0sXG4gICAgZ2V0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99XCJdLFxuICAgIGdldEFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zXCIsXG4gICAgXSxcbiAgICBnZXRBZG1pbkJyYW5jaFByb3RlY3Rpb246IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL2VuZm9yY2VfYWRtaW5zXCIsXG4gICAgXSxcbiAgICBnZXRBbGxEZXBsb3ltZW50UHJvdGVjdGlvblJ1bGVzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50X3Byb3RlY3Rpb25fcnVsZXNcIixcbiAgICBdLFxuICAgIGdldEFsbEVudmlyb25tZW50czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHNcIl0sXG4gICAgZ2V0QWxsU3RhdHVzQ2hlY2tDb250ZXh0czogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc3RhdHVzX2NoZWNrcy9jb250ZXh0c1wiLFxuICAgIF0sXG4gICAgZ2V0QWxsVG9waWNzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RvcGljc1wiXSxcbiAgICBnZXRBcHBzV2l0aEFjY2Vzc1RvUHJvdGVjdGVkQnJhbmNoOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvYXBwc1wiLFxuICAgIF0sXG4gICAgZ2V0QXV0b2xpbms6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXV0b2xpbmtzL3thdXRvbGlua19pZH1cIl0sXG4gICAgZ2V0QnJhbmNoOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9XCJdLFxuICAgIGdldEJyYW5jaFByb3RlY3Rpb246IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uXCIsXG4gICAgXSxcbiAgICBnZXRCcmFuY2hSdWxlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlcy9icmFuY2hlcy97YnJhbmNofVwiXSxcbiAgICBnZXRDbG9uZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdHJhZmZpYy9jbG9uZXNcIl0sXG4gICAgZ2V0Q29kZUZyZXF1ZW5jeVN0YXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXRzL2NvZGVfZnJlcXVlbmN5XCJdLFxuICAgIGdldENvbGxhYm9yYXRvclBlcm1pc3Npb25MZXZlbDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbGxhYm9yYXRvcnMve3VzZXJuYW1lfS9wZXJtaXNzaW9uXCIsXG4gICAgXSxcbiAgICBnZXRDb21iaW5lZFN0YXR1c0ZvclJlZjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tyZWZ9L3N0YXR1c1wiXSxcbiAgICBnZXRDb21taXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97cmVmfVwiXSxcbiAgICBnZXRDb21taXRBY3Rpdml0eVN0YXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXRzL2NvbW1pdF9hY3Rpdml0eVwiXSxcbiAgICBnZXRDb21taXRDb21tZW50OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzL3tjb21tZW50X2lkfVwiXSxcbiAgICBnZXRDb21taXRTaWduYXR1cmVQcm90ZWN0aW9uOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zaWduYXR1cmVzXCIsXG4gICAgXSxcbiAgICBnZXRDb21tdW5pdHlQcm9maWxlTWV0cmljczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tdW5pdHkvcHJvZmlsZVwiXSxcbiAgICBnZXRDb250ZW50OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3twYXRofVwiXSxcbiAgICBnZXRDb250cmlidXRvcnNTdGF0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdGF0cy9jb250cmlidXRvcnNcIl0sXG4gICAgZ2V0Q3VzdG9tRGVwbG95bWVudFByb3RlY3Rpb25SdWxlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50X3Byb3RlY3Rpb25fcnVsZXMve3Byb3RlY3Rpb25fcnVsZV9pZH1cIixcbiAgICBdLFxuICAgIGdldERlcGxveUtleTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9rZXlzL3trZXlfaWR9XCJdLFxuICAgIGdldERlcGxveW1lbnQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwbG95bWVudHMve2RlcGxveW1lbnRfaWR9XCJdLFxuICAgIGdldERlcGxveW1lbnRCcmFuY2hQb2xpY3k6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnQtYnJhbmNoLXBvbGljaWVzL3ticmFuY2hfcG9saWN5X2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0RGVwbG95bWVudFN0YXR1czogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzL3tkZXBsb3ltZW50X2lkfS9zdGF0dXNlcy97c3RhdHVzX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0RW52aXJvbm1lbnQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9XCIsXG4gICAgXSxcbiAgICBnZXRMYXRlc3RQYWdlc0J1aWxkOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2J1aWxkcy9sYXRlc3RcIl0sXG4gICAgZ2V0TGF0ZXN0UmVsZWFzZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy9sYXRlc3RcIl0sXG4gICAgZ2V0T3JnUnVsZVN1aXRlOiBbXCJHRVQgL29yZ3Mve29yZ30vcnVsZXNldHMvcnVsZS1zdWl0ZXMve3J1bGVfc3VpdGVfaWR9XCJdLFxuICAgIGdldE9yZ1J1bGVTdWl0ZXM6IFtcIkdFVCAvb3Jncy97b3JnfS9ydWxlc2V0cy9ydWxlLXN1aXRlc1wiXSxcbiAgICBnZXRPcmdSdWxlc2V0OiBbXCJHRVQgL29yZ3Mve29yZ30vcnVsZXNldHMve3J1bGVzZXRfaWR9XCJdLFxuICAgIGdldE9yZ1J1bGVzZXRzOiBbXCJHRVQgL29yZ3Mve29yZ30vcnVsZXNldHNcIl0sXG4gICAgZ2V0UGFnZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXNcIl0sXG4gICAgZ2V0UGFnZXNCdWlsZDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlcy9idWlsZHMve2J1aWxkX2lkfVwiXSxcbiAgICBnZXRQYWdlc0RlcGxveW1lbnQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlcy9kZXBsb3ltZW50cy97cGFnZXNfZGVwbG95bWVudF9pZH1cIixcbiAgICBdLFxuICAgIGdldFBhZ2VzSGVhbHRoQ2hlY2s6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXMvaGVhbHRoXCJdLFxuICAgIGdldFBhcnRpY2lwYXRpb25TdGF0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdGF0cy9wYXJ0aWNpcGF0aW9uXCJdLFxuICAgIGdldFB1bGxSZXF1ZXN0UmV2aWV3UHJvdGVjdGlvbjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfcHVsbF9yZXF1ZXN0X3Jldmlld3NcIixcbiAgICBdLFxuICAgIGdldFB1bmNoQ2FyZFN0YXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXRzL3B1bmNoX2NhcmRcIl0sXG4gICAgZ2V0UmVhZG1lOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlYWRtZVwiXSxcbiAgICBnZXRSZWFkbWVJbkRpcmVjdG9yeTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWFkbWUve2Rpcn1cIl0sXG4gICAgZ2V0UmVsZWFzZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH1cIl0sXG4gICAgZ2V0UmVsZWFzZUFzc2V0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL2Fzc2V0cy97YXNzZXRfaWR9XCJdLFxuICAgIGdldFJlbGVhc2VCeVRhZzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy90YWdzL3t0YWd9XCJdLFxuICAgIGdldFJlcG9SdWxlU3VpdGU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0cy9ydWxlLXN1aXRlcy97cnVsZV9zdWl0ZV9pZH1cIixcbiAgICBdLFxuICAgIGdldFJlcG9SdWxlU3VpdGVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzL3J1bGUtc3VpdGVzXCJdLFxuICAgIGdldFJlcG9SdWxlc2V0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzL3tydWxlc2V0X2lkfVwiXSxcbiAgICBnZXRSZXBvUnVsZXNldEhpc3Rvcnk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0cy97cnVsZXNldF9pZH0vaGlzdG9yeVwiLFxuICAgIF0sXG4gICAgZ2V0UmVwb1J1bGVzZXRWZXJzaW9uOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHMve3J1bGVzZXRfaWR9L2hpc3Rvcnkve3ZlcnNpb25faWR9XCIsXG4gICAgXSxcbiAgICBnZXRSZXBvUnVsZXNldHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHNcIl0sXG4gICAgZ2V0U3RhdHVzQ2hlY2tzUHJvdGVjdGlvbjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc3RhdHVzX2NoZWNrc1wiLFxuICAgIF0sXG4gICAgZ2V0VGVhbXNXaXRoQWNjZXNzVG9Qcm90ZWN0ZWRCcmFuY2g6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy90ZWFtc1wiLFxuICAgIF0sXG4gICAgZ2V0VG9wUGF0aHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdHJhZmZpYy9wb3B1bGFyL3BhdGhzXCJdLFxuICAgIGdldFRvcFJlZmVycmVyczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90cmFmZmljL3BvcHVsYXIvcmVmZXJyZXJzXCJdLFxuICAgIGdldFVzZXJzV2l0aEFjY2Vzc1RvUHJvdGVjdGVkQnJhbmNoOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvdXNlcnNcIixcbiAgICBdLFxuICAgIGdldFZpZXdzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RyYWZmaWMvdmlld3NcIl0sXG4gICAgZ2V0V2ViaG9vazogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH1cIl0sXG4gICAgZ2V0V2ViaG9va0NvbmZpZ0ZvclJlcG86IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH0vY29uZmlnXCIsXG4gICAgXSxcbiAgICBnZXRXZWJob29rRGVsaXZlcnk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH0vZGVsaXZlcmllcy97ZGVsaXZlcnlfaWR9XCIsXG4gICAgXSxcbiAgICBsaXN0QWN0aXZpdGllczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpdml0eVwiXSxcbiAgICBsaXN0QXR0ZXN0YXRpb25zOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXR0ZXN0YXRpb25zL3tzdWJqZWN0X2RpZ2VzdH1cIixcbiAgICBdLFxuICAgIGxpc3RBdXRvbGlua3M6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXV0b2xpbmtzXCJdLFxuICAgIGxpc3RCcmFuY2hlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlc1wiXSxcbiAgICBsaXN0QnJhbmNoZXNGb3JIZWFkQ29tbWl0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97Y29tbWl0X3NoYX0vYnJhbmNoZXMtd2hlcmUtaGVhZFwiLFxuICAgIF0sXG4gICAgbGlzdENvbGxhYm9yYXRvcnM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29sbGFib3JhdG9yc1wiXSxcbiAgICBsaXN0Q29tbWVudHNGb3JDb21taXQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tjb21taXRfc2hhfS9jb21tZW50c1wiLFxuICAgIF0sXG4gICAgbGlzdENvbW1pdENvbW1lbnRzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tZW50c1wiXSxcbiAgICBsaXN0Q29tbWl0U3RhdHVzZXNGb3JSZWY6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tyZWZ9L3N0YXR1c2VzXCIsXG4gICAgXSxcbiAgICBsaXN0Q29tbWl0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzXCJdLFxuICAgIGxpc3RDb250cmlidXRvcnM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29udHJpYnV0b3JzXCJdLFxuICAgIGxpc3RDdXN0b21EZXBsb3ltZW50UnVsZUludGVncmF0aW9uczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudF9wcm90ZWN0aW9uX3J1bGVzL2FwcHNcIixcbiAgICBdLFxuICAgIGxpc3REZXBsb3lLZXlzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2tleXNcIl0sXG4gICAgbGlzdERlcGxveW1lbnRCcmFuY2hQb2xpY2llczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudC1icmFuY2gtcG9saWNpZXNcIixcbiAgICBdLFxuICAgIGxpc3REZXBsb3ltZW50U3RhdHVzZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBsb3ltZW50cy97ZGVwbG95bWVudF9pZH0vc3RhdHVzZXNcIixcbiAgICBdLFxuICAgIGxpc3REZXBsb3ltZW50czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBsb3ltZW50c1wiXSxcbiAgICBsaXN0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9yZXBvc1wiXSxcbiAgICBsaXN0Rm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vcmVwb3NcIl0sXG4gICAgbGlzdEZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9yZXBvc1wiXSxcbiAgICBsaXN0Rm9ya3M6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZm9ya3NcIl0sXG4gICAgbGlzdEludml0YXRpb25zOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ludml0YXRpb25zXCJdLFxuICAgIGxpc3RJbnZpdGF0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvcmVwb3NpdG9yeV9pbnZpdGF0aW9uc1wiXSxcbiAgICBsaXN0TGFuZ3VhZ2VzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2xhbmd1YWdlc1wiXSxcbiAgICBsaXN0UGFnZXNCdWlsZHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXMvYnVpbGRzXCJdLFxuICAgIGxpc3RQdWJsaWM6IFtcIkdFVCAvcmVwb3NpdG9yaWVzXCJdLFxuICAgIGxpc3RQdWxsUmVxdWVzdHNBc3NvY2lhdGVkV2l0aENvbW1pdDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve2NvbW1pdF9zaGF9L3B1bGxzXCIsXG4gICAgXSxcbiAgICBsaXN0UmVsZWFzZUFzc2V0czogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfS9hc3NldHNcIixcbiAgICBdLFxuICAgIGxpc3RSZWxlYXNlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlc1wiXSxcbiAgICBsaXN0VGFnczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90YWdzXCJdLFxuICAgIGxpc3RUZWFtczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90ZWFtc1wiXSxcbiAgICBsaXN0V2ViaG9va0RlbGl2ZXJpZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH0vZGVsaXZlcmllc1wiLFxuICAgIF0sXG4gICAgbGlzdFdlYmhvb2tzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzXCJdLFxuICAgIG1lcmdlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9tZXJnZXNcIl0sXG4gICAgbWVyZ2VVcHN0cmVhbTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vbWVyZ2UtdXBzdHJlYW1cIl0sXG4gICAgcGluZ1dlYmhvb2s6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfS9waW5nc1wiXSxcbiAgICByZWRlbGl2ZXJXZWJob29rRGVsaXZlcnk6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9L2RlbGl2ZXJpZXMve2RlbGl2ZXJ5X2lkfS9hdHRlbXB0c1wiLFxuICAgIF0sXG4gICAgcmVtb3ZlQXBwQWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvYXBwc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJhcHBzXCIgfSxcbiAgICBdLFxuICAgIHJlbW92ZUNvbGxhYm9yYXRvcjogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbGxhYm9yYXRvcnMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlU3RhdHVzQ2hlY2tDb250ZXh0czogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc3RhdHVzX2NoZWNrcy9jb250ZXh0c1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJjb250ZXh0c1wiIH0sXG4gICAgXSxcbiAgICByZW1vdmVTdGF0dXNDaGVja1Byb3RlY3Rpb246IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3N0YXR1c19jaGVja3NcIixcbiAgICBdLFxuICAgIHJlbW92ZVRlYW1BY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy90ZWFtc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJ0ZWFtc1wiIH0sXG4gICAgXSxcbiAgICByZW1vdmVVc2VyQWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvdXNlcnNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwidXNlcnNcIiB9LFxuICAgIF0sXG4gICAgcmVuYW1lQnJhbmNoOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9yZW5hbWVcIl0sXG4gICAgcmVwbGFjZUFsbFRvcGljczogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90b3BpY3NcIl0sXG4gICAgcmVxdWVzdFBhZ2VzQnVpbGQ6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2J1aWxkc1wiXSxcbiAgICBzZXRBZG1pbkJyYW5jaFByb3RlY3Rpb246IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9lbmZvcmNlX2FkbWluc1wiLFxuICAgIF0sXG4gICAgc2V0QXBwQWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvYXBwc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJhcHBzXCIgfSxcbiAgICBdLFxuICAgIHNldFN0YXR1c0NoZWNrQ29udGV4dHM6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3N0YXR1c19jaGVja3MvY29udGV4dHNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwiY29udGV4dHNcIiB9LFxuICAgIF0sXG4gICAgc2V0VGVhbUFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL3RlYW1zXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcInRlYW1zXCIgfSxcbiAgICBdLFxuICAgIHNldFVzZXJBY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy91c2Vyc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJ1c2Vyc1wiIH0sXG4gICAgXSxcbiAgICB0ZXN0UHVzaFdlYmhvb2s6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfS90ZXN0c1wiXSxcbiAgICB0cmFuc2ZlcjogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vdHJhbnNmZXJcIl0sXG4gICAgdXBkYXRlOiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb31cIl0sXG4gICAgdXBkYXRlQnJhbmNoUHJvdGVjdGlvbjogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb25cIixcbiAgICBdLFxuICAgIHVwZGF0ZUNvbW1pdENvbW1lbnQ6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gICAgdXBkYXRlRGVwbG95bWVudEJyYW5jaFBvbGljeTogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudC1icmFuY2gtcG9saWNpZXMve2JyYW5jaF9wb2xpY3lfaWR9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVJbmZvcm1hdGlvbkFib3V0UGFnZXNTaXRlOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzXCJdLFxuICAgIHVwZGF0ZUludml0YXRpb246IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2ludml0YXRpb25zL3tpbnZpdGF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlT3JnUnVsZXNldDogW1wiUFVUIC9vcmdzL3tvcmd9L3J1bGVzZXRzL3tydWxlc2V0X2lkfVwiXSxcbiAgICB1cGRhdGVQdWxsUmVxdWVzdFJldmlld1Byb3RlY3Rpb246IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfcHVsbF9yZXF1ZXN0X3Jldmlld3NcIixcbiAgICBdLFxuICAgIHVwZGF0ZVJlbGVhc2U6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH1cIl0sXG4gICAgdXBkYXRlUmVsZWFzZUFzc2V0OiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy9hc3NldHMve2Fzc2V0X2lkfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlUmVwb1J1bGVzZXQ6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHMve3J1bGVzZXRfaWR9XCJdLFxuICAgIHVwZGF0ZVN0YXR1c0NoZWNrUG90ZWN0aW9uOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3N0YXR1c19jaGVja3NcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJyZXBvc1wiLCBcInVwZGF0ZVN0YXR1c0NoZWNrUHJvdGVjdGlvblwiXSB9LFxuICAgIF0sXG4gICAgdXBkYXRlU3RhdHVzQ2hlY2tQcm90ZWN0aW9uOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3N0YXR1c19jaGVja3NcIixcbiAgICBdLFxuICAgIHVwZGF0ZVdlYmhvb2s6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH1cIl0sXG4gICAgdXBkYXRlV2ViaG9va0NvbmZpZ0ZvclJlcG86IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfS9jb25maWdcIixcbiAgICBdLFxuICAgIHVwbG9hZFJlbGVhc2VBc3NldDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH0vYXNzZXRzez9uYW1lLGxhYmVsfVwiLFxuICAgICAgeyBiYXNlVXJsOiBcImh0dHBzOi8vdXBsb2Fkcy5naXRodWIuY29tXCIgfSxcbiAgICBdLFxuICB9LFxuICBzZWFyY2g6IHtcbiAgICBjb2RlOiBbXCJHRVQgL3NlYXJjaC9jb2RlXCJdLFxuICAgIGNvbW1pdHM6IFtcIkdFVCAvc2VhcmNoL2NvbW1pdHNcIl0sXG4gICAgaXNzdWVzQW5kUHVsbFJlcXVlc3RzOiBbXCJHRVQgL3NlYXJjaC9pc3N1ZXNcIl0sXG4gICAgbGFiZWxzOiBbXCJHRVQgL3NlYXJjaC9sYWJlbHNcIl0sXG4gICAgcmVwb3M6IFtcIkdFVCAvc2VhcmNoL3JlcG9zaXRvcmllc1wiXSxcbiAgICB0b3BpY3M6IFtcIkdFVCAvc2VhcmNoL3RvcGljc1wiXSxcbiAgICB1c2VyczogW1wiR0VUIC9zZWFyY2gvdXNlcnNcIl0sXG4gIH0sXG4gIHNlY3JldFNjYW5uaW5nOiB7XG4gICAgY3JlYXRlUHVzaFByb3RlY3Rpb25CeXBhc3M6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjcmV0LXNjYW5uaW5nL3B1c2gtcHJvdGVjdGlvbi1ieXBhc3Nlc1wiLFxuICAgIF0sXG4gICAgZ2V0QWxlcnQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWNyZXQtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICBnZXRTY2FuSGlzdG9yeTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWNyZXQtc2Nhbm5pbmcvc2Nhbi1oaXN0b3J5XCJdLFxuICAgIGxpc3RBbGVydHNGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9zZWNyZXQtc2Nhbm5pbmcvYWxlcnRzXCJdLFxuICAgIGxpc3RBbGVydHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3JldC1zY2FubmluZy9hbGVydHNcIl0sXG4gICAgbGlzdExvY2F0aW9uc0ZvckFsZXJ0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfS9sb2NhdGlvbnNcIixcbiAgICBdLFxuICAgIGxpc3RPcmdQYXR0ZXJuQ29uZmlnczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vc2VjcmV0LXNjYW5uaW5nL3BhdHRlcm4tY29uZmlndXJhdGlvbnNcIixcbiAgICBdLFxuICAgIHVwZGF0ZUFsZXJ0OiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWNyZXQtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVPcmdQYXR0ZXJuQ29uZmlnczogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS9zZWNyZXQtc2Nhbm5pbmcvcGF0dGVybi1jb25maWd1cmF0aW9uc1wiLFxuICAgIF0sXG4gIH0sXG4gIHNlY3VyaXR5QWR2aXNvcmllczoge1xuICAgIGNyZWF0ZUZvcms6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjdXJpdHktYWR2aXNvcmllcy97Z2hzYV9pZH0vZm9ya3NcIixcbiAgICBdLFxuICAgIGNyZWF0ZVByaXZhdGVWdWxuZXJhYmlsaXR5UmVwb3J0OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3VyaXR5LWFkdmlzb3JpZXMvcmVwb3J0c1wiLFxuICAgIF0sXG4gICAgY3JlYXRlUmVwb3NpdG9yeUFkdmlzb3J5OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3VyaXR5LWFkdmlzb3JpZXNcIixcbiAgICBdLFxuICAgIGNyZWF0ZVJlcG9zaXRvcnlBZHZpc29yeUN2ZVJlcXVlc3Q6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjdXJpdHktYWR2aXNvcmllcy97Z2hzYV9pZH0vY3ZlXCIsXG4gICAgXSxcbiAgICBnZXRHbG9iYWxBZHZpc29yeTogW1wiR0VUIC9hZHZpc29yaWVzL3tnaHNhX2lkfVwiXSxcbiAgICBnZXRSZXBvc2l0b3J5QWR2aXNvcnk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWN1cml0eS1hZHZpc29yaWVzL3tnaHNhX2lkfVwiLFxuICAgIF0sXG4gICAgbGlzdEdsb2JhbEFkdmlzb3JpZXM6IFtcIkdFVCAvYWR2aXNvcmllc1wiXSxcbiAgICBsaXN0T3JnUmVwb3NpdG9yeUFkdmlzb3JpZXM6IFtcIkdFVCAvb3Jncy97b3JnfS9zZWN1cml0eS1hZHZpc29yaWVzXCJdLFxuICAgIGxpc3RSZXBvc2l0b3J5QWR2aXNvcmllczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWN1cml0eS1hZHZpc29yaWVzXCJdLFxuICAgIHVwZGF0ZVJlcG9zaXRvcnlBZHZpc29yeTogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjdXJpdHktYWR2aXNvcmllcy97Z2hzYV9pZH1cIixcbiAgICBdLFxuICB9LFxuICB0ZWFtczoge1xuICAgIGFkZE9yVXBkYXRlTWVtYmVyc2hpcEZvclVzZXJJbk9yZzogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vbWVtYmVyc2hpcHMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgYWRkT3JVcGRhdGVSZXBvUGVybWlzc2lvbnNJbk9yZzogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vcmVwb3Mve293bmVyfS97cmVwb31cIixcbiAgICBdLFxuICAgIGNoZWNrUGVybWlzc2lvbnNGb3JSZXBvSW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L3JlcG9zL3tvd25lcn0ve3JlcG99XCIsXG4gICAgXSxcbiAgICBjcmVhdGU6IFtcIlBPU1QgL29yZ3Mve29yZ30vdGVhbXNcIl0sXG4gICAgY3JlYXRlRGlzY3Vzc2lvbkNvbW1lbnRJbk9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHNcIixcbiAgICBdLFxuICAgIGNyZWF0ZURpc2N1c3Npb25Jbk9yZzogW1wiUE9TVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9uc1wiXSxcbiAgICBkZWxldGVEaXNjdXNzaW9uQ29tbWVudEluT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzL3tjb21tZW50X251bWJlcn1cIixcbiAgICBdLFxuICAgIGRlbGV0ZURpc2N1c3Npb25Jbk9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlSW5Pcmc6IFtcIkRFTEVURSAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfVwiXSxcbiAgICBnZXRCeU5hbWU6IFtcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfVwiXSxcbiAgICBnZXREaXNjdXNzaW9uQ29tbWVudEluT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzL3tjb21tZW50X251bWJlcn1cIixcbiAgICBdLFxuICAgIGdldERpc2N1c3Npb25Jbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgZ2V0TWVtYmVyc2hpcEZvclVzZXJJbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vbWVtYmVyc2hpcHMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgbGlzdDogW1wiR0VUIC9vcmdzL3tvcmd9L3RlYW1zXCJdLFxuICAgIGxpc3RDaGlsZEluT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vdGVhbXNcIl0sXG4gICAgbGlzdERpc2N1c3Npb25Db21tZW50c0luT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gICAgXSxcbiAgICBsaXN0RGlzY3Vzc2lvbnNJbk9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zXCJdLFxuICAgIGxpc3RGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3RlYW1zXCJdLFxuICAgIGxpc3RNZW1iZXJzSW5Pcmc6IFtcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9tZW1iZXJzXCJdLFxuICAgIGxpc3RQZW5kaW5nSW52aXRhdGlvbnNJbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vaW52aXRhdGlvbnNcIixcbiAgICBdLFxuICAgIGxpc3RSZXBvc0luT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vcmVwb3NcIl0sXG4gICAgcmVtb3ZlTWVtYmVyc2hpcEZvclVzZXJJbk9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vbWVtYmVyc2hpcHMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlUmVwb0luT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9yZXBvcy97b3duZXJ9L3tyZXBvfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlRGlzY3Vzc2lvbkNvbW1lbnRJbk9yZzogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzL3tjb21tZW50X251bWJlcn1cIixcbiAgICBdLFxuICAgIHVwZGF0ZURpc2N1c3Npb25Jbk9yZzogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVJbk9yZzogW1wiUEFUQ0ggL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z31cIl0sXG4gIH0sXG4gIHVzZXJzOiB7XG4gICAgYWRkRW1haWxGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIlBPU1QgL3VzZXIvZW1haWxzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJhZGRFbWFpbEZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBhZGRFbWFpbEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL2VtYWlsc1wiXSxcbiAgICBhZGRTb2NpYWxBY2NvdW50Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvc29jaWFsX2FjY291bnRzXCJdLFxuICAgIGJsb2NrOiBbXCJQVVQgL3VzZXIvYmxvY2tzL3t1c2VybmFtZX1cIl0sXG4gICAgY2hlY2tCbG9ja2VkOiBbXCJHRVQgL3VzZXIvYmxvY2tzL3t1c2VybmFtZX1cIl0sXG4gICAgY2hlY2tGb2xsb3dpbmdGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZm9sbG93aW5nL3t0YXJnZXRfdXNlcn1cIl0sXG4gICAgY2hlY2tQZXJzb25Jc0ZvbGxvd2VkQnlBdXRoZW50aWNhdGVkOiBbXCJHRVQgL3VzZXIvZm9sbG93aW5nL3t1c2VybmFtZX1cIl0sXG4gICAgY3JlYXRlR3BnS2V5Rm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJQT1NUIC91c2VyL2dwZ19rZXlzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJjcmVhdGVHcGdLZXlGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgY3JlYXRlR3BnS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvZ3BnX2tleXNcIl0sXG4gICAgY3JlYXRlUHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJQT1NUIC91c2VyL2tleXNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImNyZWF0ZVB1YmxpY1NzaEtleUZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBjcmVhdGVQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9rZXlzXCJdLFxuICAgIGNyZWF0ZVNzaFNpZ25pbmdLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9zc2hfc2lnbmluZ19rZXlzXCJdLFxuICAgIGRlbGV0ZUF0dGVzdGF0aW9uc0J1bGs6IFtcbiAgICAgIFwiUE9TVCAvdXNlcnMve3VzZXJuYW1lfS9hdHRlc3RhdGlvbnMvZGVsZXRlLXJlcXVlc3RcIixcbiAgICBdLFxuICAgIGRlbGV0ZUF0dGVzdGF0aW9uc0J5SWQ6IFtcbiAgICAgIFwiREVMRVRFIC91c2Vycy97dXNlcm5hbWV9L2F0dGVzdGF0aW9ucy97YXR0ZXN0YXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVBdHRlc3RhdGlvbnNCeVN1YmplY3REaWdlc3Q6IFtcbiAgICAgIFwiREVMRVRFIC91c2Vycy97dXNlcm5hbWV9L2F0dGVzdGF0aW9ucy9kaWdlc3Qve3N1YmplY3RfZGlnZXN0fVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRW1haWxGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9lbWFpbHNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImRlbGV0ZUVtYWlsRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGRlbGV0ZUVtYWlsRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkRFTEVURSAvdXNlci9lbWFpbHNcIl0sXG4gICAgZGVsZXRlR3BnS2V5Rm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvZ3BnX2tleXMve2dwZ19rZXlfaWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJkZWxldGVHcGdLZXlGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgZGVsZXRlR3BnS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkRFTEVURSAvdXNlci9ncGdfa2V5cy97Z3BnX2tleV9pZH1cIl0sXG4gICAgZGVsZXRlUHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJERUxFVEUgL3VzZXIva2V5cy97a2V5X2lkfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwiZGVsZXRlUHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGRlbGV0ZVB1YmxpY1NzaEtleUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJERUxFVEUgL3VzZXIva2V5cy97a2V5X2lkfVwiXSxcbiAgICBkZWxldGVTb2NpYWxBY2NvdW50Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkRFTEVURSAvdXNlci9zb2NpYWxfYWNjb3VudHNcIl0sXG4gICAgZGVsZXRlU3NoU2lnbmluZ0tleUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9zc2hfc2lnbmluZ19rZXlzL3tzc2hfc2lnbmluZ19rZXlfaWR9XCIsXG4gICAgXSxcbiAgICBmb2xsb3c6IFtcIlBVVCAvdXNlci9mb2xsb3dpbmcve3VzZXJuYW1lfVwiXSxcbiAgICBnZXRBdXRoZW50aWNhdGVkOiBbXCJHRVQgL3VzZXJcIl0sXG4gICAgZ2V0QnlJZDogW1wiR0VUIC91c2VyL3thY2NvdW50X2lkfVwiXSxcbiAgICBnZXRCeVVzZXJuYW1lOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX1cIl0sXG4gICAgZ2V0Q29udGV4dEZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ob3ZlcmNhcmRcIl0sXG4gICAgZ2V0R3BnS2V5Rm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJHRVQgL3VzZXIvZ3BnX2tleXMve2dwZ19rZXlfaWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJnZXRHcGdLZXlGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgZ2V0R3BnS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9ncGdfa2V5cy97Z3BnX2tleV9pZH1cIl0sXG4gICAgZ2V0UHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJHRVQgL3VzZXIva2V5cy97a2V5X2lkfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwiZ2V0UHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGdldFB1YmxpY1NzaEtleUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIva2V5cy97a2V5X2lkfVwiXSxcbiAgICBnZXRTc2hTaWduaW5nS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL3NzaF9zaWduaW5nX2tleXMve3NzaF9zaWduaW5nX2tleV9pZH1cIixcbiAgICBdLFxuICAgIGxpc3Q6IFtcIkdFVCAvdXNlcnNcIl0sXG4gICAgbGlzdEF0dGVzdGF0aW9uczogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2F0dGVzdGF0aW9ucy97c3ViamVjdF9kaWdlc3R9XCJdLFxuICAgIGxpc3RBdHRlc3RhdGlvbnNCdWxrOiBbXG4gICAgICBcIlBPU1QgL3VzZXJzL3t1c2VybmFtZX0vYXR0ZXN0YXRpb25zL2J1bGstbGlzdHs/cGVyX3BhZ2UsYmVmb3JlLGFmdGVyfVwiLFxuICAgIF0sXG4gICAgbGlzdEJsb2NrZWRCeUF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL2Jsb2Nrc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwibGlzdEJsb2NrZWRCeUF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBsaXN0QmxvY2tlZEJ5QXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9ibG9ja3NcIl0sXG4gICAgbGlzdEVtYWlsc0ZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL2VtYWlsc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwibGlzdEVtYWlsc0ZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBsaXN0RW1haWxzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9lbWFpbHNcIl0sXG4gICAgbGlzdEZvbGxvd2VkQnlBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkdFVCAvdXNlci9mb2xsb3dpbmdcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImxpc3RGb2xsb3dlZEJ5QXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGxpc3RGb2xsb3dlZEJ5QXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9mb2xsb3dpbmdcIl0sXG4gICAgbGlzdEZvbGxvd2Vyc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvZm9sbG93ZXJzXCJdLFxuICAgIGxpc3RGb2xsb3dlcnNGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZm9sbG93ZXJzXCJdLFxuICAgIGxpc3RGb2xsb3dpbmdGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZm9sbG93aW5nXCJdLFxuICAgIGxpc3RHcGdLZXlzRm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJHRVQgL3VzZXIvZ3BnX2tleXNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImxpc3RHcGdLZXlzRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGxpc3RHcGdLZXlzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9ncGdfa2V5c1wiXSxcbiAgICBsaXN0R3BnS2V5c0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ncGdfa2V5c1wiXSxcbiAgICBsaXN0UHVibGljRW1haWxzRm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJHRVQgL3VzZXIvcHVibGljX2VtYWlsc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwibGlzdFB1YmxpY0VtYWlsc0ZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBsaXN0UHVibGljRW1haWxzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9wdWJsaWNfZW1haWxzXCJdLFxuICAgIGxpc3RQdWJsaWNLZXlzRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2tleXNcIl0sXG4gICAgbGlzdFB1YmxpY1NzaEtleXNGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkdFVCAvdXNlci9rZXlzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJsaXN0UHVibGljU3NoS2V5c0ZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBsaXN0UHVibGljU3NoS2V5c0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIva2V5c1wiXSxcbiAgICBsaXN0U29jaWFsQWNjb3VudHNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3NvY2lhbF9hY2NvdW50c1wiXSxcbiAgICBsaXN0U29jaWFsQWNjb3VudHNGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc29jaWFsX2FjY291bnRzXCJdLFxuICAgIGxpc3RTc2hTaWduaW5nS2V5c0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvc3NoX3NpZ25pbmdfa2V5c1wiXSxcbiAgICBsaXN0U3NoU2lnbmluZ0tleXNGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc3NoX3NpZ25pbmdfa2V5c1wiXSxcbiAgICBzZXRQcmltYXJ5RW1haWxWaXNpYmlsaXR5Rm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJQQVRDSCAvdXNlci9lbWFpbC92aXNpYmlsaXR5XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJzZXRQcmltYXJ5RW1haWxWaXNpYmlsaXR5Rm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIHNldFByaW1hcnlFbWFpbFZpc2liaWxpdHlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQQVRDSCAvdXNlci9lbWFpbC92aXNpYmlsaXR5XCIsXG4gICAgXSxcbiAgICB1bmJsb2NrOiBbXCJERUxFVEUgL3VzZXIvYmxvY2tzL3t1c2VybmFtZX1cIl0sXG4gICAgdW5mb2xsb3c6IFtcIkRFTEVURSAvdXNlci9mb2xsb3dpbmcve3VzZXJuYW1lfVwiXSxcbiAgICB1cGRhdGVBdXRoZW50aWNhdGVkOiBbXCJQQVRDSCAvdXNlclwiXSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVuZHBvaW50cztcbiIsICJpbXBvcnQgdHlwZSB7IE9jdG9raXQgfSBmcm9tIFwiQG9jdG9raXQvY29yZVwiO1xuaW1wb3J0IHR5cGUgeyBFbmRwb2ludE9wdGlvbnMsIFJlcXVlc3RQYXJhbWV0ZXJzLCBSb3V0ZSB9IGZyb20gXCJAb2N0b2tpdC90eXBlc1wiO1xuaW1wb3J0IEVORFBPSU5UUyBmcm9tIFwiLi9nZW5lcmF0ZWQvZW5kcG9pbnRzLmpzXCI7XG5pbXBvcnQgdHlwZSB7IFJlc3RFbmRwb2ludE1ldGhvZHMgfSBmcm9tIFwiLi9nZW5lcmF0ZWQvbWV0aG9kLXR5cGVzLmpzXCI7XG5pbXBvcnQgdHlwZSB7IEVuZHBvaW50RGVjb3JhdGlvbnMgfSBmcm9tIFwiLi90eXBlcy5qc1wiO1xuXG4vLyBUaGUgZm9sbG93aW5nIGNvZGUgd2FzIHJlZmFjdG9yZWQgaW46IGh0dHBzOi8vZ2l0aHViLmNvbS9vY3Rva2l0L3BsdWdpbi1yZXN0LWVuZHBvaW50LW1ldGhvZHMuanMvcHVsbC82MjJcbi8vIHRvIG9wdGltaXNlIHRoZSBydW50aW1lIHBlcmZvcm1hbmNlIG9mIE9jdG9raXQgaW5pdGlhbGl6YXRpb24uXG4vL1xuLy8gVGhpcyBvcHRpbWl6YXRpb24gaW52b2x2ZXMgdHdvIGtleSBjaGFuZ2VzOlxuLy8gMS4gUHJlLUNvbXB1dGF0aW9uOiBUaGUgZW5kcG9pbnQgbWV0aG9kcyBhcmUgcHJlLWNvbXB1dGVkIG9uY2UgYXQgbW9kdWxlIGxvYWRcbi8vICAgIHRpbWUgaW5zdGVhZCBvZiBlYWNoIGludm9jYXRpb24gb2YgYGVuZHBvaW50c1RvTWV0aG9kcygpYC5cbi8vIDIuIExhenkgaW5pdGlhbGl6YXRpb24gYW5kIGNhY2hpbmc6IFdlIHVzZSBhIFByb3h5IGZvciBlYWNoIHNjb3BlIHRvIG9ubHlcbi8vICAgIGluaXRpYWxpemUgbWV0aG9kcyB0aGF0IGFyZSBhY3R1YWxseSBjYWxsZWQuIFRoaXMgcmVkdWNlcyBydW50aW1lIG92ZXJoZWFkXG4vLyAgICBhcyB0aGUgaW5pdGlhbGl6YXRpb24gaW52b2x2ZXMgZGVlcCBtZXJnaW5nIG9mIG9iamVjdHMuIFRoZSBpbml0aWFsaXplZFxuLy8gICAgbWV0aG9kcyBhcmUgdGhlbiBjYWNoZWQgZm9yIGZ1dHVyZSB1c2UuXG5cbmNvbnN0IGVuZHBvaW50TWV0aG9kc01hcCA9IG5ldyBNYXAoKTtcbmZvciAoY29uc3QgW3Njb3BlLCBlbmRwb2ludHNdIG9mIE9iamVjdC5lbnRyaWVzKEVORFBPSU5UUykpIHtcbiAgZm9yIChjb25zdCBbbWV0aG9kTmFtZSwgZW5kcG9pbnRdIG9mIE9iamVjdC5lbnRyaWVzKGVuZHBvaW50cykpIHtcbiAgICBjb25zdCBbcm91dGUsIGRlZmF1bHRzLCBkZWNvcmF0aW9uc10gPSBlbmRwb2ludDtcbiAgICBjb25zdCBbbWV0aG9kLCB1cmxdID0gcm91dGUuc3BsaXQoLyAvKTtcbiAgICBjb25zdCBlbmRwb2ludERlZmF1bHRzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICB9LFxuICAgICAgZGVmYXVsdHMsXG4gICAgKTtcblxuICAgIGlmICghZW5kcG9pbnRNZXRob2RzTWFwLmhhcyhzY29wZSkpIHtcbiAgICAgIGVuZHBvaW50TWV0aG9kc01hcC5zZXQoc2NvcGUsIG5ldyBNYXAoKSk7XG4gICAgfVxuXG4gICAgZW5kcG9pbnRNZXRob2RzTWFwLmdldChzY29wZSkuc2V0KG1ldGhvZE5hbWUsIHtcbiAgICAgIHNjb3BlLFxuICAgICAgbWV0aG9kTmFtZSxcbiAgICAgIGVuZHBvaW50RGVmYXVsdHMsXG4gICAgICBkZWNvcmF0aW9ucyxcbiAgICB9KTtcbiAgfVxufVxuXG50eXBlIFByb3h5VGFyZ2V0ID0ge1xuICBvY3Rva2l0OiBPY3Rva2l0O1xuICBzY29wZTogc3RyaW5nO1xuICBjYWNoZTogUmVjb3JkPHN0cmluZywgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+O1xufTtcblxuY29uc3QgaGFuZGxlciA9IHtcbiAgaGFzKHsgc2NvcGUgfTogUHJveHlUYXJnZXQsIG1ldGhvZE5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBlbmRwb2ludE1ldGhvZHNNYXAuZ2V0KHNjb3BlKS5oYXMobWV0aG9kTmFtZSk7XG4gIH0sXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQ6IFByb3h5VGFyZ2V0LCBtZXRob2ROYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHRoaXMuZ2V0KHRhcmdldCwgbWV0aG9kTmFtZSksIC8vIGVuc3VyZXMgbWV0aG9kIGlzIGluIHRoZSBjYWNoZVxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIH07XG4gIH0sXG4gIGRlZmluZVByb3BlcnR5KFxuICAgIHRhcmdldDogUHJveHlUYXJnZXQsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nLFxuICAgIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcixcbiAgKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldC5jYWNoZSwgbWV0aG9kTmFtZSwgZGVzY3JpcHRvcik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5KHRhcmdldDogUHJveHlUYXJnZXQsIG1ldGhvZE5hbWU6IHN0cmluZykge1xuICAgIGRlbGV0ZSB0YXJnZXQuY2FjaGVbbWV0aG9kTmFtZV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIG93bktleXMoeyBzY29wZSB9OiBQcm94eVRhcmdldCkge1xuICAgIHJldHVybiBbLi4uZW5kcG9pbnRNZXRob2RzTWFwLmdldChzY29wZSkua2V5cygpXTtcbiAgfSxcbiAgc2V0KHRhcmdldDogUHJveHlUYXJnZXQsIG1ldGhvZE5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIHJldHVybiAodGFyZ2V0LmNhY2hlW21ldGhvZE5hbWVdID0gdmFsdWUpO1xuICB9LFxuICBnZXQoeyBvY3Rva2l0LCBzY29wZSwgY2FjaGUgfTogUHJveHlUYXJnZXQsIG1ldGhvZE5hbWU6IHN0cmluZykge1xuICAgIGlmIChjYWNoZVttZXRob2ROYW1lXSkge1xuICAgICAgcmV0dXJuIGNhY2hlW21ldGhvZE5hbWVdO1xuICAgIH1cblxuICAgIGNvbnN0IG1ldGhvZCA9IGVuZHBvaW50TWV0aG9kc01hcC5nZXQoc2NvcGUpLmdldChtZXRob2ROYW1lKTtcbiAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCB7IGVuZHBvaW50RGVmYXVsdHMsIGRlY29yYXRpb25zIH0gPSBtZXRob2Q7XG5cbiAgICBpZiAoZGVjb3JhdGlvbnMpIHtcbiAgICAgIGNhY2hlW21ldGhvZE5hbWVdID0gZGVjb3JhdGUoXG4gICAgICAgIG9jdG9raXQsXG4gICAgICAgIHNjb3BlLFxuICAgICAgICBtZXRob2ROYW1lLFxuICAgICAgICBlbmRwb2ludERlZmF1bHRzLFxuICAgICAgICBkZWNvcmF0aW9ucyxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlW21ldGhvZE5hbWVdID0gb2N0b2tpdC5yZXF1ZXN0LmRlZmF1bHRzKGVuZHBvaW50RGVmYXVsdHMpO1xuICAgIH1cblxuICAgIHJldHVybiBjYWNoZVttZXRob2ROYW1lXTtcbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRwb2ludHNUb01ldGhvZHMob2N0b2tpdDogT2N0b2tpdCk6IFJlc3RFbmRwb2ludE1ldGhvZHMge1xuICBjb25zdCBuZXdNZXRob2RzID0ge30gYXMgeyBba2V5OiBzdHJpbmddOiBvYmplY3QgfTtcblxuICBmb3IgKGNvbnN0IHNjb3BlIG9mIGVuZHBvaW50TWV0aG9kc01hcC5rZXlzKCkpIHtcbiAgICBuZXdNZXRob2RzW3Njb3BlXSA9IG5ldyBQcm94eSh7IG9jdG9raXQsIHNjb3BlLCBjYWNoZToge30gfSwgaGFuZGxlcik7XG4gIH1cblxuICByZXR1cm4gbmV3TWV0aG9kcyBhcyBSZXN0RW5kcG9pbnRNZXRob2RzO1xufVxuXG5mdW5jdGlvbiBkZWNvcmF0ZShcbiAgb2N0b2tpdDogT2N0b2tpdCxcbiAgc2NvcGU6IHN0cmluZyxcbiAgbWV0aG9kTmFtZTogc3RyaW5nLFxuICBkZWZhdWx0czogRW5kcG9pbnRPcHRpb25zLFxuICBkZWNvcmF0aW9uczogRW5kcG9pbnREZWNvcmF0aW9ucyxcbikge1xuICBjb25zdCByZXF1ZXN0V2l0aERlZmF1bHRzID0gb2N0b2tpdC5yZXF1ZXN0LmRlZmF1bHRzKGRlZmF1bHRzKTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBmdW5jdGlvbiB3aXRoRGVjb3JhdGlvbnMoXG4gICAgLi4uYXJnczogW1JvdXRlLCBSZXF1ZXN0UGFyYW1ldGVycz9dIHwgW0VuZHBvaW50T3B0aW9uc11cbiAgKSB7XG4gICAgLy8gQHRzLWlnbm9yZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI1NDg4XG4gICAgbGV0IG9wdGlvbnMgPSByZXF1ZXN0V2l0aERlZmF1bHRzLmVuZHBvaW50Lm1lcmdlKC4uLmFyZ3MpO1xuXG4gICAgLy8gVGhlcmUgYXJlIGN1cnJlbnRseSBubyBvdGhlciBkZWNvcmF0aW9ucyB0aGFuIGAubWFwVG9EYXRhYFxuICAgIGlmIChkZWNvcmF0aW9ucy5tYXBUb0RhdGEpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIGRhdGE6IG9wdGlvbnNbZGVjb3JhdGlvbnMubWFwVG9EYXRhXSxcbiAgICAgICAgW2RlY29yYXRpb25zLm1hcFRvRGF0YV06IHVuZGVmaW5lZCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlcXVlc3RXaXRoRGVmYXVsdHMob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGRlY29yYXRpb25zLnJlbmFtZWQpIHtcbiAgICAgIGNvbnN0IFtuZXdTY29wZSwgbmV3TWV0aG9kTmFtZV0gPSBkZWNvcmF0aW9ucy5yZW5hbWVkO1xuICAgICAgb2N0b2tpdC5sb2cud2FybihcbiAgICAgICAgYG9jdG9raXQuJHtzY29wZX0uJHttZXRob2ROYW1lfSgpIGhhcyBiZWVuIHJlbmFtZWQgdG8gb2N0b2tpdC4ke25ld1Njb3BlfS4ke25ld01ldGhvZE5hbWV9KClgLFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGRlY29yYXRpb25zLmRlcHJlY2F0ZWQpIHtcbiAgICAgIG9jdG9raXQubG9nLndhcm4oZGVjb3JhdGlvbnMuZGVwcmVjYXRlZCk7XG4gICAgfVxuXG4gICAgaWYgKGRlY29yYXRpb25zLnJlbmFtZWRQYXJhbWV0ZXJzKSB7XG4gICAgICAvLyBAdHMtaWdub3JlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjU0ODhcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSByZXF1ZXN0V2l0aERlZmF1bHRzLmVuZHBvaW50Lm1lcmdlKC4uLmFyZ3MpO1xuXG4gICAgICBmb3IgKGNvbnN0IFtuYW1lLCBhbGlhc10gb2YgT2JqZWN0LmVudHJpZXMoXG4gICAgICAgIGRlY29yYXRpb25zLnJlbmFtZWRQYXJhbWV0ZXJzLFxuICAgICAgKSkge1xuICAgICAgICBpZiAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgb2N0b2tpdC5sb2cud2FybihcbiAgICAgICAgICAgIGBcIiR7bmFtZX1cIiBwYXJhbWV0ZXIgaXMgZGVwcmVjYXRlZCBmb3IgXCJvY3Rva2l0LiR7c2NvcGV9LiR7bWV0aG9kTmFtZX0oKVwiLiBVc2UgXCIke2FsaWFzfVwiIGluc3RlYWRgLFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKCEoYWxpYXMgaW4gb3B0aW9ucykpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbYWxpYXNdID0gb3B0aW9uc1tuYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXF1ZXN0V2l0aERlZmF1bHRzKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIEB0cy1pZ25vcmUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yNTQ4OFxuICAgIHJldHVybiByZXF1ZXN0V2l0aERlZmF1bHRzKC4uLmFyZ3MpO1xuICB9XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHdpdGhEZWNvcmF0aW9ucywgcmVxdWVzdFdpdGhEZWZhdWx0cyk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBPY3Rva2l0IH0gZnJvbSBcIkBvY3Rva2l0L2NvcmVcIjtcblxuZXhwb3J0IHR5cGUgeyBSZXN0RW5kcG9pbnRNZXRob2RUeXBlcyB9IGZyb20gXCIuL2dlbmVyYXRlZC9wYXJhbWV0ZXJzLWFuZC1yZXNwb25zZS10eXBlcy5qc1wiO1xuaW1wb3J0IHsgVkVSU0lPTiB9IGZyb20gXCIuL3ZlcnNpb24uanNcIjtcbmltcG9ydCB0eXBlIHsgQXBpIH0gZnJvbSBcIi4vdHlwZXMuanNcIjtcbmltcG9ydCB7IGVuZHBvaW50c1RvTWV0aG9kcyB9IGZyb20gXCIuL2VuZHBvaW50cy10by1tZXRob2RzLmpzXCI7XG5cbi8vIEV4cG9ydCB0aGUgdHlwZSBmb3IgZG93bnN0cmVhbSB1c2VycyBpbiBvcmRlciB0byBmaXggYSBUeXBlU2NyaXB0IGVycm9yXG4vLyBUaGUgaW5mZXJyZWQgdHlwZSBvZiAnT2N0b2tpdCcgY2Fubm90IGJlIG5hbWVkIHdpdGhvdXQgYSByZWZlcmVuY2UgdG8gJy4uL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9wbHVnaW4tcmVzdC1lbmRwb2ludC1tZXRob2RzL2Rpc3QtdHlwZXMvdHlwZXMuanMnLiBUaGlzIGlzIGxpa2VseSBub3QgcG9ydGFibGUuIEEgdHlwZSBhbm5vdGF0aW9uIGlzIG5lY2Vzc2FyeS5cbmV4cG9ydCB0eXBlIHsgQXBpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiByZXN0RW5kcG9pbnRNZXRob2RzKG9jdG9raXQ6IE9jdG9raXQpOiBBcGkge1xuICBjb25zdCBhcGkgPSBlbmRwb2ludHNUb01ldGhvZHMob2N0b2tpdCk7XG4gIHJldHVybiB7XG4gICAgcmVzdDogYXBpLFxuICB9O1xufVxucmVzdEVuZHBvaW50TWV0aG9kcy5WRVJTSU9OID0gVkVSU0lPTjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxlZ2FjeVJlc3RFbmRwb2ludE1ldGhvZHMob2N0b2tpdDogT2N0b2tpdCk6IEFwaVtcInJlc3RcIl0gJiBBcGkge1xuICBjb25zdCBhcGkgPSBlbmRwb2ludHNUb01ldGhvZHMob2N0b2tpdCk7XG4gIHJldHVybiB7XG4gICAgLi4uYXBpLFxuICAgIHJlc3Q6IGFwaSxcbiAgfTtcbn1cbmxlZ2FjeVJlc3RFbmRwb2ludE1ldGhvZHMuVkVSU0lPTiA9IFZFUlNJT047XG4iLCAiY29uc3QgVkVSU0lPTiA9IFwiMjIuMC4xXCI7XG5leHBvcnQge1xuICBWRVJTSU9OXG59O1xuIiwgImltcG9ydCB7IE9jdG9raXQgYXMgQ29yZSB9IGZyb20gXCJAb2N0b2tpdC9jb3JlXCI7XG5pbXBvcnQgeyByZXF1ZXN0TG9nIH0gZnJvbSBcIkBvY3Rva2l0L3BsdWdpbi1yZXF1ZXN0LWxvZ1wiO1xuaW1wb3J0IHtcbiAgcGFnaW5hdGVSZXN0XG59IGZyb20gXCJAb2N0b2tpdC9wbHVnaW4tcGFnaW5hdGUtcmVzdFwiO1xuaW1wb3J0IHsgbGVnYWN5UmVzdEVuZHBvaW50TWV0aG9kcyB9IGZyb20gXCJAb2N0b2tpdC9wbHVnaW4tcmVzdC1lbmRwb2ludC1tZXRob2RzXCI7XG5pbXBvcnQgeyBWRVJTSU9OIH0gZnJvbSBcIi4vdmVyc2lvbi5qc1wiO1xuY29uc3QgT2N0b2tpdCA9IENvcmUucGx1Z2luKHJlcXVlc3RMb2csIGxlZ2FjeVJlc3RFbmRwb2ludE1ldGhvZHMsIHBhZ2luYXRlUmVzdCkuZGVmYXVsdHMoXG4gIHtcbiAgICB1c2VyQWdlbnQ6IGBvY3Rva2l0LXJlc3QuanMvJHtWRVJTSU9OfWBcbiAgfVxuKTtcbmV4cG9ydCB7XG4gIE9jdG9raXRcbn07XG4iLCAiaW1wb3J0IHsgT2N0b2tpdCB9IGZyb20gJ0BvY3Rva2l0L3Jlc3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2l0aHViQ2xpZW50KHRva2VuOiBzdHJpbmcpOiBPY3Rva2l0IHtcbiAgICByZXR1cm4gbmV3IE9jdG9raXQoeyBhdXRoOiB0b2tlbiB9KTtcbn1cbiIsICJpbXBvcnQgeyBkZWxldGVSZWxlYXNlQnJhbmNoLCBtZXJnZVJlbGVhc2VCcmFuY2ggfSBmcm9tICdAL2JyYW5jaC1tYW5hZ2VyJztcbmltcG9ydCB7IGNyZWF0ZUdpdGh1YkNsaWVudCB9IGZyb20gJ0AvZ2l0aHViLWNsaWVudCc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBbb3duZXIsIHJlcG9dID0gcHJvY2Vzcy5lbnZbJ0dJVEhVQl9SRVBPU0lUT1JZJ10hLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgcmVsZWFzZUJyYW5jaCA9IHByb2Nlc3MuZW52WydSRUxFQVNFX0JSQU5DSCddITtcblxuICAgIGNvbnN0IG9jdG9raXQgPSBjcmVhdGVHaXRodWJDbGllbnQocHJvY2Vzcy5lbnZbJ0dIX1RPS0VOJ10hKTtcblxuICAgIGF3YWl0IG1lcmdlUmVsZWFzZUJyYW5jaChvY3Rva2l0LCB7IG93bmVyOiBvd25lciEsIHJlcG86IHJlcG8hLCByZWxlYXNlQnJhbmNoIH0pO1xuICAgIGF3YWl0IGRlbGV0ZVJlbGVhc2VCcmFuY2gob2N0b2tpdCwgeyBvd25lcjogb3duZXIhLCByZXBvOiByZXBvISwgYnJhbmNoOiByZWxlYXNlQnJhbmNoIH0pO1xufVxuXG5pZiAocHJvY2Vzcy5hcmd2WzFdID09PSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpIHtcbiAgICBhd2FpdCBydW4oKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBLFFBQU0sYUFBYSxTQUFTQSxjQUFjO0FBQUEsSUFBRTtBQUM1QyxlQUFXLFlBQVksdUJBQU8sT0FBTyxJQUFJO0FBZ0J6QyxRQUFNLFVBQVU7QUFRaEIsUUFBTSxlQUFlO0FBU3JCLFFBQU0sY0FBYztBQUdwQixRQUFNLHFCQUFxQixFQUFFLE1BQU0sSUFBSSxZQUFZLElBQUksV0FBVyxFQUFFO0FBQ3BFLFdBQU8sT0FBTyxtQkFBbUIsVUFBVTtBQUMzQyxXQUFPLE9BQU8sa0JBQWtCO0FBVWhDLGFBQVNDLE9BQU8sUUFBUTtBQUN0QixVQUFJLE9BQU8sV0FBVyxVQUFVO0FBQzlCLGNBQU0sSUFBSSxVQUFVLGtEQUFrRDtBQUFBLE1BQ3hFO0FBRUEsVUFBSSxRQUFRLE9BQU8sUUFBUSxHQUFHO0FBQzlCLFlBQU0sT0FBTyxVQUFVLEtBQ25CLE9BQU8sTUFBTSxHQUFHLEtBQUssRUFBRSxLQUFLLElBQzVCLE9BQU8sS0FBSztBQUVoQixVQUFJLFlBQVksS0FBSyxJQUFJLE1BQU0sT0FBTztBQUNwQyxjQUFNLElBQUksVUFBVSxvQkFBb0I7QUFBQSxNQUMxQztBQUVBLFlBQU0sU0FBUztBQUFBLFFBQ2Is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QU0sb0JBQW9CLFNBQVMsRUFBRSxPQUFlLE1BQWEsUUFBUSxjQUFjLENBQUM7QUFDNUY7QUFFQSxJQUFJLFFBQVEsS0FBSyxDQUFDLE1BQU0sY0FBYyxZQUFZLEdBQUcsR0FBRztBQUNwRCxRQUFNLElBQUk7QUFDZDsiLAogICJuYW1lcyI6IFsiTnVsbE9iamVjdCIsICJwYXJzZSIsICJzYWZlUGFyc2UiLCAibmFtZSIsICJtZXRob2QiLCAiaG9vayIsICJob29rIiwgInZhbHVlIiwgInRleHQiLCAiVkVSU0lPTiIsICJpc1BsYWluT2JqZWN0IiwgIndpdGhEZWZhdWx0cyIsICJWRVJTSU9OIiwgIndpdGhEZWZhdWx0cyIsICJyZXF1ZXN0IiwgImVuZHBvaW50IiwgIlZFUlNJT04iLCAibm9vcCIsICJWRVJTSU9OIiwgImhvb2siLCAiYXV0aCIsICJWRVJTSU9OIiwgInJlcXVlc3QiLCAiVkVSU0lPTiIsICJWRVJTSU9OIiwgIlZFUlNJT04iLCAiVkVSU0lPTiIsICJlbmRwb2ludCIsICJvcHRpb25zIiwgIlZFUlNJT04iLCAiVkVSU0lPTiIsICJPY3Rva2l0IiwgIlZFUlNJT04iLCAiT2N0b2tpdCJdCn0K

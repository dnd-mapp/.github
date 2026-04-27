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
async function createReleaseBranch(octokit, params) {
  const { data: ref } = await octokit.git.getRef({
    owner: params.owner,
    repo: params.repo,
    ref: "heads/main"
  });
  await octokit.git.createRef({
    owner: params.owner,
    repo: params.repo,
    ref: `refs/heads/${params.branchName}`,
    sha: ref.object.sha
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

// src/scripts/create-release-branch.mts
var [owner, repo] = process.env["GITHUB_REPOSITORY"].split("/");
await createReleaseBranch(createGithubClient(process.env["GH_TOKEN"]), {
  owner,
  repo,
  branchName: process.env["RELEASE_BRANCH_NAME"]
});
/*! Bundled license information:

@octokit/request-error/dist-src/index.js:
  (* v8 ignore else -- @preserve -- Bug with vitest coverage where it sees an else branch that doesn't exist *)

@octokit/request/dist-bundle/index.js:
  (* v8 ignore next -- @preserve *)
  (* v8 ignore else -- @preserve *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtY29udGVudC10eXBlLXBhcnNlQDMuMC4wL25vZGVfbW9kdWxlcy9mYXN0LWNvbnRlbnQtdHlwZS1wYXJzZS9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9zcmMvYnJhbmNoLW1hbmFnZXIvYnJhbmNoLW1hbmFnZXIudHMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3VuaXZlcnNhbC11c2VyLWFnZW50QDcuMC4zL25vZGVfbW9kdWxlcy91bml2ZXJzYWwtdXNlci1hZ2VudC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYmVmb3JlLWFmdGVyLWhvb2tANC4wLjAvbm9kZV9tb2R1bGVzL2JlZm9yZS1hZnRlci1ob29rL2xpYi9yZWdpc3Rlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYmVmb3JlLWFmdGVyLWhvb2tANC4wLjAvbm9kZV9tb2R1bGVzL2JlZm9yZS1hZnRlci1ob29rL2xpYi9hZGQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JlZm9yZS1hZnRlci1ob29rQDQuMC4wL25vZGVfbW9kdWxlcy9iZWZvcmUtYWZ0ZXItaG9vay9saWIvcmVtb3ZlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9iZWZvcmUtYWZ0ZXItaG9va0A0LjAuMC9ub2RlX21vZHVsZXMvYmVmb3JlLWFmdGVyLWhvb2svaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K2VuZHBvaW50QDExLjAuMy9ub2RlX21vZHVsZXMvQG9jdG9raXQvZW5kcG9pbnQvZGlzdC1idW5kbGUvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3JlcXVlc3RAMTAuMC44L25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9yZXF1ZXN0L2Rpc3QtYnVuZGxlL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9qc29uLXdpdGgtYmlnaW50QDMuNS44L25vZGVfbW9kdWxlcy9qc29uLXdpdGgtYmlnaW50L2pzb24td2l0aC1iaWdpbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3JlcXVlc3QtZXJyb3JANy4xLjAvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3JlcXVlc3QtZXJyb3IvZGlzdC1zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K2dyYXBocWxAOS4wLjMvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L2dyYXBocWwvZGlzdC1idW5kbGUvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K2F1dGgtdG9rZW5ANi4wLjAvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L2F1dGgtdG9rZW4vZGlzdC1idW5kbGUvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K2NvcmVANy4wLjYvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L2NvcmUvZGlzdC1zcmMvdmVyc2lvbi5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9jdG9raXQrY29yZUA3LjAuNi9ub2RlX21vZHVsZXMvQG9jdG9raXQvY29yZS9kaXN0LXNyYy9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9jdG9raXQrcGx1Z2luLXJlcXVlc3QtbG9nQDYuMC4wX0BvY3Rva2l0K2NvcmVANy4wLjYvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3BsdWdpbi1yZXF1ZXN0LWxvZy9kaXN0LXNyYy92ZXJzaW9uLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtwbHVnaW4tcmVxdWVzdC1sb2dANi4wLjBfQG9jdG9raXQrY29yZUA3LjAuNi9ub2RlX21vZHVsZXMvQG9jdG9raXQvcGx1Z2luLXJlcXVlc3QtbG9nL2Rpc3Qtc3JjL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtwbHVnaW4tcGFnaW5hdGUtcmVzdEAxNC4wLjBfQG9jdG9raXQrY29yZUA3LjAuNi9ub2RlX21vZHVsZXMvQG9jdG9raXQvcGx1Z2luLXBhZ2luYXRlLXJlc3QvZGlzdC1idW5kbGUvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3BsdWdpbi1yZXN0LWVuZHBvaV84OGYxY2ZkY2NiY2QxMmY5YmQ4OWE2NjJhM2QwOGJjZS9ub2RlX21vZHVsZXMvQG9jdG9raXQvc3JjL3ZlcnNpb24udHMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3BsdWdpbi1yZXN0LWVuZHBvaV84OGYxY2ZkY2NiY2QxMmY5YmQ4OWE2NjJhM2QwOGJjZS9ub2RlX21vZHVsZXMvQG9jdG9raXQvc3JjL2dlbmVyYXRlZC9lbmRwb2ludHMudHMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3BsdWdpbi1yZXN0LWVuZHBvaV84OGYxY2ZkY2NiY2QxMmY5YmQ4OWE2NjJhM2QwOGJjZS9ub2RlX21vZHVsZXMvQG9jdG9raXQvc3JjL2VuZHBvaW50cy10by1tZXRob2RzLnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtwbHVnaW4tcmVzdC1lbmRwb2lfODhmMWNmZGNjYmNkMTJmOWJkODlhNjYyYTNkMDhiY2Uvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3NyYy9pbmRleC50cyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9jdG9raXQrcmVzdEAyMi4wLjEvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3Jlc3QvZGlzdC1zcmMvdmVyc2lvbi5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9jdG9raXQrcmVzdEAyMi4wLjEvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3Jlc3QvZGlzdC1zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vc3JjL2dpdGh1Yi1jbGllbnQvZ2l0aHViLWNsaWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvc2NyaXB0cy9jcmVhdGUtcmVsZWFzZS1icmFuY2gubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCdcblxuY29uc3QgTnVsbE9iamVjdCA9IGZ1bmN0aW9uIE51bGxPYmplY3QgKCkgeyB9XG5OdWxsT2JqZWN0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggKiggXCI7XCIgcGFyYW1ldGVyICkgaW4gUkZDIDcyMzEgc2VjIDMuMS4xLjFcbiAqXG4gKiBwYXJhbWV0ZXIgICAgID0gdG9rZW4gXCI9XCIgKCB0b2tlbiAvIHF1b3RlZC1zdHJpbmcgKVxuICogdG9rZW4gICAgICAgICA9IDEqdGNoYXJcbiAqIHRjaGFyICAgICAgICAgPSBcIiFcIiAvIFwiI1wiIC8gXCIkXCIgLyBcIiVcIiAvIFwiJlwiIC8gXCInXCIgLyBcIipcIlxuICogICAgICAgICAgICAgICAvIFwiK1wiIC8gXCItXCIgLyBcIi5cIiAvIFwiXlwiIC8gXCJfXCIgLyBcImBcIiAvIFwifFwiIC8gXCJ+XCJcbiAqICAgICAgICAgICAgICAgLyBESUdJVCAvIEFMUEhBXG4gKiAgICAgICAgICAgICAgIDsgYW55IFZDSEFSLCBleGNlcHQgZGVsaW1pdGVyc1xuICogcXVvdGVkLXN0cmluZyA9IERRVU9URSAqKCBxZHRleHQgLyBxdW90ZWQtcGFpciApIERRVU9URVxuICogcWR0ZXh0ICAgICAgICA9IEhUQUIgLyBTUCAvICV4MjEgLyAleDIzLTVCIC8gJXg1RC03RSAvIG9icy10ZXh0XG4gKiBvYnMtdGV4dCAgICAgID0gJXg4MC1GRlxuICogcXVvdGVkLXBhaXIgICA9IFwiXFxcIiAoIEhUQUIgLyBTUCAvIFZDSEFSIC8gb2JzLXRleHQgKVxuICovXG5jb25zdCBwYXJhbVJFID0gLzsgKihbISMkJSYnKisuXlxcd2B8fi1dKyk9KFwiKD86W1xcdlxcdTAwMjBcXHUwMDIxXFx1MDAyMy1cXHUwMDViXFx1MDA1ZC1cXHUwMDdlXFx1MDA4MC1cXHUwMGZmXXxcXFxcW1xcdlxcdTAwMjAtXFx1MDBmZl0pKlwifFshIyQlJicqKy5eXFx3YHx+LV0rKSAqL2d1XG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoIHF1b3RlZC1wYWlyIGluIFJGQyA3MjMwIHNlYyAzLjIuNlxuICpcbiAqIHF1b3RlZC1wYWlyID0gXCJcXFwiICggSFRBQiAvIFNQIC8gVkNIQVIgLyBvYnMtdGV4dCApXG4gKiBvYnMtdGV4dCAgICA9ICV4ODAtRkZcbiAqL1xuY29uc3QgcXVvdGVkUGFpclJFID0gL1xcXFwoW1xcdlxcdTAwMjAtXFx1MDBmZl0pL2d1XG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoIHR5cGUgaW4gUkZDIDcyMzEgc2VjIDMuMS4xLjFcbiAqXG4gKiBtZWRpYS10eXBlID0gdHlwZSBcIi9cIiBzdWJ0eXBlXG4gKiB0eXBlICAgICAgID0gdG9rZW5cbiAqIHN1YnR5cGUgICAgPSB0b2tlblxuICovXG5jb25zdCBtZWRpYVR5cGVSRSA9IC9eWyEjJCUmJyorLl5cXHd8fi1dK1xcL1shIyQlJicqKy5eXFx3fH4tXSskL3VcblxuLy8gZGVmYXVsdCBDb250ZW50VHlwZSB0byBwcmV2ZW50IHJlcGVhdGVkIG9iamVjdCBjcmVhdGlvblxuY29uc3QgZGVmYXVsdENvbnRlbnRUeXBlID0geyB0eXBlOiAnJywgcGFyYW1ldGVyczogbmV3IE51bGxPYmplY3QoKSB9XG5PYmplY3QuZnJlZXplKGRlZmF1bHRDb250ZW50VHlwZS5wYXJhbWV0ZXJzKVxuT2JqZWN0LmZyZWV6ZShkZWZhdWx0Q29udGVudFR5cGUpXG5cbi8qKlxuICogUGFyc2UgbWVkaWEgdHlwZSB0byBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBoZWFkZXJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZSAoaGVhZGVyKSB7XG4gIGlmICh0eXBlb2YgaGVhZGVyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IGhlYWRlciBpcyByZXF1aXJlZCBhbmQgbXVzdCBiZSBhIHN0cmluZycpXG4gIH1cblxuICBsZXQgaW5kZXggPSBoZWFkZXIuaW5kZXhPZignOycpXG4gIGNvbnN0IHR5cGUgPSBpbmRleCAhPT0gLTFcbiAgICA/IGhlYWRlci5zbGljZSgwLCBpbmRleCkudHJpbSgpXG4gICAgOiBoZWFkZXIudHJpbSgpXG5cbiAgaWYgKG1lZGlhVHlwZVJFLnRlc3QodHlwZSkgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBtZWRpYSB0eXBlJylcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICB0eXBlOiB0eXBlLnRvTG93ZXJDYXNlKCksXG4gICAgcGFyYW1ldGVyczogbmV3IE51bGxPYmplY3QoKVxuICB9XG5cbiAgLy8gcGFyc2UgcGFyYW1ldGVyc1xuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgbGV0IGtleVxuICBsZXQgbWF0Y2hcbiAgbGV0IHZhbHVlXG5cbiAgcGFyYW1SRS5sYXN0SW5kZXggPSBpbmRleFxuXG4gIHdoaWxlICgobWF0Y2ggPSBwYXJhbVJFLmV4ZWMoaGVhZGVyKSkpIHtcbiAgICBpZiAobWF0Y2guaW5kZXggIT09IGluZGV4KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIHBhcmFtZXRlciBmb3JtYXQnKVxuICAgIH1cblxuICAgIGluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aFxuICAgIGtleSA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKClcbiAgICB2YWx1ZSA9IG1hdGNoWzJdXG5cbiAgICBpZiAodmFsdWVbMF0gPT09ICdcIicpIHtcbiAgICAgIC8vIHJlbW92ZSBxdW90ZXMgYW5kIGVzY2FwZXNcbiAgICAgIHZhbHVlID0gdmFsdWVcbiAgICAgICAgLnNsaWNlKDEsIHZhbHVlLmxlbmd0aCAtIDEpXG5cbiAgICAgIHF1b3RlZFBhaXJSRS50ZXN0KHZhbHVlKSAmJiAodmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHF1b3RlZFBhaXJSRSwgJyQxJykpXG4gICAgfVxuXG4gICAgcmVzdWx0LnBhcmFtZXRlcnNba2V5XSA9IHZhbHVlXG4gIH1cblxuICBpZiAoaW5kZXggIT09IGhlYWRlci5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIHBhcmFtZXRlciBmb3JtYXQnKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBzYWZlUGFyc2UgKGhlYWRlcikge1xuICBpZiAodHlwZW9mIGhlYWRlciAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVmYXVsdENvbnRlbnRUeXBlXG4gIH1cblxuICBsZXQgaW5kZXggPSBoZWFkZXIuaW5kZXhPZignOycpXG4gIGNvbnN0IHR5cGUgPSBpbmRleCAhPT0gLTFcbiAgICA/IGhlYWRlci5zbGljZSgwLCBpbmRleCkudHJpbSgpXG4gICAgOiBoZWFkZXIudHJpbSgpXG5cbiAgaWYgKG1lZGlhVHlwZVJFLnRlc3QodHlwZSkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRDb250ZW50VHlwZVxuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHR5cGU6IHR5cGUudG9Mb3dlckNhc2UoKSxcbiAgICBwYXJhbWV0ZXJzOiBuZXcgTnVsbE9iamVjdCgpXG4gIH1cblxuICAvLyBwYXJzZSBwYXJhbWV0ZXJzXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBsZXQga2V5XG4gIGxldCBtYXRjaFxuICBsZXQgdmFsdWVcblxuICBwYXJhbVJFLmxhc3RJbmRleCA9IGluZGV4XG5cbiAgd2hpbGUgKChtYXRjaCA9IHBhcmFtUkUuZXhlYyhoZWFkZXIpKSkge1xuICAgIGlmIChtYXRjaC5pbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0Q29udGVudFR5cGVcbiAgICB9XG5cbiAgICBpbmRleCArPSBtYXRjaFswXS5sZW5ndGhcbiAgICBrZXkgPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpXG4gICAgdmFsdWUgPSBtYXRjaFsyXVxuXG4gICAgaWYgKHZhbHVlWzBdID09PSAnXCInKSB7XG4gICAgICAvLyByZW1vdmUgcXVvdGVzIGFuZCBlc2NhcGVzXG4gICAgICB2YWx1ZSA9IHZhbHVlXG4gICAgICAgIC5zbGljZSgxLCB2YWx1ZS5sZW5ndGggLSAxKVxuXG4gICAgICBxdW90ZWRQYWlyUkUudGVzdCh2YWx1ZSkgJiYgKHZhbHVlID0gdmFsdWUucmVwbGFjZShxdW90ZWRQYWlyUkUsICckMScpKVxuICAgIH1cblxuICAgIHJlc3VsdC5wYXJhbWV0ZXJzW2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgaWYgKGluZGV4ICE9PSBoZWFkZXIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRDb250ZW50VHlwZVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0geyBwYXJzZSwgc2FmZVBhcnNlIH1cbm1vZHVsZS5leHBvcnRzLnBhcnNlID0gcGFyc2Vcbm1vZHVsZS5leHBvcnRzLnNhZmVQYXJzZSA9IHNhZmVQYXJzZVxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdENvbnRlbnRUeXBlID0gZGVmYXVsdENvbnRlbnRUeXBlXG4iLCAiaW1wb3J0IHsgT2N0b2tpdCB9IGZyb20gJ0BvY3Rva2l0L3Jlc3QnO1xuXG5pbnRlcmZhY2UgQ3JlYXRlUmVsZWFzZUJyYW5jaFBhcmFtcyB7XG4gICAgb3duZXI6IHN0cmluZztcbiAgICByZXBvOiBzdHJpbmc7XG4gICAgYnJhbmNoTmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ29tbWl0RmlsZXNQYXJhbXMge1xuICAgIG93bmVyOiBzdHJpbmc7XG4gICAgcmVwbzogc3RyaW5nO1xuICAgIGJyYW5jaDogc3RyaW5nO1xuICAgIGZpbGVzOiB7IHBhdGg6IHN0cmluZzsgY29udGVudDogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfVtdO1xufVxuXG5pbnRlcmZhY2UgTWVyZ2VSZWxlYXNlQnJhbmNoUGFyYW1zIHtcbiAgICBvd25lcjogc3RyaW5nO1xuICAgIHJlcG86IHN0cmluZztcbiAgICByZWxlYXNlQnJhbmNoOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBEZWxldGVSZWxlYXNlQnJhbmNoUGFyYW1zIHtcbiAgICBvd25lcjogc3RyaW5nO1xuICAgIHJlcG86IHN0cmluZztcbiAgICBicmFuY2g6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlbGVhc2VCcmFuY2gob2N0b2tpdDogT2N0b2tpdCwgcGFyYW1zOiBDcmVhdGVSZWxlYXNlQnJhbmNoUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgeyBkYXRhOiByZWYgfSA9IGF3YWl0IG9jdG9raXQuZ2l0LmdldFJlZih7XG4gICAgICAgIG93bmVyOiBwYXJhbXMub3duZXIsXG4gICAgICAgIHJlcG86IHBhcmFtcy5yZXBvLFxuICAgICAgICByZWY6ICdoZWFkcy9tYWluJyxcbiAgICB9KTtcblxuICAgIGF3YWl0IG9jdG9raXQuZ2l0LmNyZWF0ZVJlZih7XG4gICAgICAgIG93bmVyOiBwYXJhbXMub3duZXIsXG4gICAgICAgIHJlcG86IHBhcmFtcy5yZXBvLFxuICAgICAgICByZWY6IGByZWZzL2hlYWRzLyR7cGFyYW1zLmJyYW5jaE5hbWV9YCxcbiAgICAgICAgc2hhOiByZWYub2JqZWN0LnNoYSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbW1pdEZpbGVzKG9jdG9raXQ6IE9jdG9raXQsIHBhcmFtczogQ29tbWl0RmlsZXNQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgcGFyYW1zLmZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgb2N0b2tpdC5yZXBvcy5nZXRDb250ZW50KHtcbiAgICAgICAgICAgIG93bmVyOiBwYXJhbXMub3duZXIsXG4gICAgICAgICAgICByZXBvOiBwYXJhbXMucmVwbyxcbiAgICAgICAgICAgIHBhdGg6IGZpbGUucGF0aCxcbiAgICAgICAgICAgIHJlZjogcGFyYW1zLmJyYW5jaCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZmlsZVNoYSA9IChkYXRhIGFzIHsgc2hhOiBzdHJpbmcgfSkuc2hhO1xuXG4gICAgICAgIGF3YWl0IG9jdG9raXQucmVwb3MuY3JlYXRlT3JVcGRhdGVGaWxlQ29udGVudHMoe1xuICAgICAgICAgICAgb3duZXI6IHBhcmFtcy5vd25lcixcbiAgICAgICAgICAgIHJlcG86IHBhcmFtcy5yZXBvLFxuICAgICAgICAgICAgcGF0aDogZmlsZS5wYXRoLFxuICAgICAgICAgICAgbWVzc2FnZTogZmlsZS5tZXNzYWdlLFxuICAgICAgICAgICAgY29udGVudDogQnVmZmVyLmZyb20oZmlsZS5jb250ZW50KS50b1N0cmluZygnYmFzZTY0JyksXG4gICAgICAgICAgICBzaGE6IGZpbGVTaGEsXG4gICAgICAgICAgICBicmFuY2g6IHBhcmFtcy5icmFuY2gsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1lcmdlUmVsZWFzZUJyYW5jaChvY3Rva2l0OiBPY3Rva2l0LCBwYXJhbXM6IE1lcmdlUmVsZWFzZUJyYW5jaFBhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IG9jdG9raXQucmVwb3MubWVyZ2Uoe1xuICAgICAgICAgICAgb3duZXI6IHBhcmFtcy5vd25lcixcbiAgICAgICAgICAgIHJlcG86IHBhcmFtcy5yZXBvLFxuICAgICAgICAgICAgYmFzZTogJ21haW4nLFxuICAgICAgICAgICAgaGVhZDogcGFyYW1zLnJlbGVhc2VCcmFuY2gsXG4gICAgICAgICAgICBjb21taXRfbWVzc2FnZTogYGNob3JlOiBtZXJnZSAke3BhcmFtcy5yZWxlYXNlQnJhbmNofSBpbnRvIG1haW5gLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoKGVycm9yIGFzIHsgc3RhdHVzPzogbnVtYmVyIH0pLnN0YXR1cyA9PT0gNDA5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYE1lcmdlIGNvbmZsaWN0OiBjYW5ub3QgbWVyZ2UgJHtwYXJhbXMucmVsZWFzZUJyYW5jaH0gaW50byBtYWluLiBSZXNvbHZlIGNvbmZsaWN0cyBtYW51YWxseS5gLFxuICAgICAgICAgICAgICAgIHsgY2F1c2U6IGVycm9yIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVsZWFzZUJyYW5jaChvY3Rva2l0OiBPY3Rva2l0LCBwYXJhbXM6IERlbGV0ZVJlbGVhc2VCcmFuY2hQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBvY3Rva2l0LmdpdC5kZWxldGVSZWYoe1xuICAgICAgICBvd25lcjogcGFyYW1zLm93bmVyLFxuICAgICAgICByZXBvOiBwYXJhbXMucmVwbyxcbiAgICAgICAgcmVmOiBgaGVhZHMvJHtwYXJhbXMuYnJhbmNofWAsXG4gICAgfSk7XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJBZ2VudCgpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09IFwib2JqZWN0XCIgJiYgXCJ1c2VyQWdlbnRcIiBpbiBuYXZpZ2F0b3IpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLnZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBgTm9kZS5qcy8ke3Byb2Nlc3MudmVyc2lvbi5zdWJzdHIoMSl9ICgke3Byb2Nlc3MucGxhdGZvcm19OyAke1xuICAgICAgcHJvY2Vzcy5hcmNoXG4gICAgfSlgO1xuICB9XG5cbiAgcmV0dXJuIFwiPGVudmlyb25tZW50IHVuZGV0ZWN0YWJsZT5cIjtcbn1cbiIsICIvLyBAdHMtY2hlY2tcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKHN0YXRlLCBuYW1lLCBtZXRob2QsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBtZXRob2QgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm1ldGhvZCBmb3IgYmVmb3JlIGhvb2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobmFtZSkpIHtcbiAgICByZXR1cm4gbmFtZS5yZXZlcnNlKCkucmVkdWNlKChjYWxsYmFjaywgbmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIHJlZ2lzdGVyLmJpbmQobnVsbCwgc3RhdGUsIG5hbWUsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICB9LCBtZXRob2QpKCk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgaWYgKCFzdGF0ZS5yZWdpc3RyeVtuYW1lXSkge1xuICAgICAgcmV0dXJuIG1ldGhvZChvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGUucmVnaXN0cnlbbmFtZV0ucmVkdWNlKChtZXRob2QsIHJlZ2lzdGVyZWQpID0+IHtcbiAgICAgIHJldHVybiByZWdpc3RlcmVkLmhvb2suYmluZChudWxsLCBtZXRob2QsIG9wdGlvbnMpO1xuICAgIH0sIG1ldGhvZCkoKTtcbiAgfSk7XG59XG4iLCAiLy8gQHRzLWNoZWNrXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRIb29rKHN0YXRlLCBraW5kLCBuYW1lLCBob29rKSB7XG4gIGNvbnN0IG9yaWcgPSBob29rO1xuICBpZiAoIXN0YXRlLnJlZ2lzdHJ5W25hbWVdKSB7XG4gICAgc3RhdGUucmVnaXN0cnlbbmFtZV0gPSBbXTtcbiAgfVxuXG4gIGlmIChraW5kID09PSBcImJlZm9yZVwiKSB7XG4gICAgaG9vayA9IChtZXRob2QsIG9wdGlvbnMpID0+IHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAudGhlbihvcmlnLmJpbmQobnVsbCwgb3B0aW9ucykpXG4gICAgICAgIC50aGVuKG1ldGhvZC5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKGtpbmQgPT09IFwiYWZ0ZXJcIikge1xuICAgIGhvb2sgPSAobWV0aG9kLCBvcHRpb25zKSA9PiB7XG4gICAgICBsZXQgcmVzdWx0O1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgIC50aGVuKG1ldGhvZC5iaW5kKG51bGwsIG9wdGlvbnMpKVxuICAgICAgICAudGhlbigocmVzdWx0XykgPT4ge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdF87XG4gICAgICAgICAgcmV0dXJuIG9yaWcocmVzdWx0LCBvcHRpb25zKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBpZiAoa2luZCA9PT0gXCJlcnJvclwiKSB7XG4gICAgaG9vayA9IChtZXRob2QsIG9wdGlvbnMpID0+IHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAudGhlbihtZXRob2QuYmluZChudWxsLCBvcHRpb25zKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJldHVybiBvcmlnKGVycm9yLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRlLnJlZ2lzdHJ5W25hbWVdLnB1c2goe1xuICAgIGhvb2s6IGhvb2ssXG4gICAgb3JpZzogb3JpZyxcbiAgfSk7XG59XG4iLCAiLy8gQHRzLWNoZWNrXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIb29rKHN0YXRlLCBuYW1lLCBtZXRob2QpIHtcbiAgaWYgKCFzdGF0ZS5yZWdpc3RyeVtuYW1lXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUucmVnaXN0cnlbbmFtZV1cbiAgICAubWFwKChyZWdpc3RlcmVkKSA9PiB7XG4gICAgICByZXR1cm4gcmVnaXN0ZXJlZC5vcmlnO1xuICAgIH0pXG4gICAgLmluZGV4T2YobWV0aG9kKTtcblxuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUucmVnaXN0cnlbbmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbn1cbiIsICIvLyBAdHMtY2hlY2tcblxuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tIFwiLi9saWIvcmVnaXN0ZXIuanNcIjtcbmltcG9ydCB7IGFkZEhvb2sgfSBmcm9tIFwiLi9saWIvYWRkLmpzXCI7XG5pbXBvcnQgeyByZW1vdmVIb29rIH0gZnJvbSBcIi4vbGliL3JlbW92ZS5qc1wiO1xuXG4vLyBiaW5kIHdpdGggYXJyYXkgb2YgYXJndW1lbnRzOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjE3OTI5MTNcbmNvbnN0IGJpbmQgPSBGdW5jdGlvbi5iaW5kO1xuY29uc3QgYmluZGFibGUgPSBiaW5kLmJpbmQoYmluZCk7XG5cbmZ1bmN0aW9uIGJpbmRBcGkoaG9vaywgc3RhdGUsIG5hbWUpIHtcbiAgY29uc3QgcmVtb3ZlSG9va1JlZiA9IGJpbmRhYmxlKHJlbW92ZUhvb2ssIG51bGwpLmFwcGx5KFxuICAgIG51bGwsXG4gICAgbmFtZSA/IFtzdGF0ZSwgbmFtZV0gOiBbc3RhdGVdXG4gICk7XG4gIGhvb2suYXBpID0geyByZW1vdmU6IHJlbW92ZUhvb2tSZWYgfTtcbiAgaG9vay5yZW1vdmUgPSByZW1vdmVIb29rUmVmO1xuICBbXCJiZWZvcmVcIiwgXCJlcnJvclwiLCBcImFmdGVyXCIsIFwid3JhcFwiXS5mb3JFYWNoKChraW5kKSA9PiB7XG4gICAgY29uc3QgYXJncyA9IG5hbWUgPyBbc3RhdGUsIGtpbmQsIG5hbWVdIDogW3N0YXRlLCBraW5kXTtcbiAgICBob29rW2tpbmRdID0gaG9vay5hcGlba2luZF0gPSBiaW5kYWJsZShhZGRIb29rLCBudWxsKS5hcHBseShudWxsLCBhcmdzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIFNpbmd1bGFyKCkge1xuICBjb25zdCBzaW5ndWxhckhvb2tOYW1lID0gU3ltYm9sKFwiU2luZ3VsYXJcIik7XG4gIGNvbnN0IHNpbmd1bGFySG9va1N0YXRlID0ge1xuICAgIHJlZ2lzdHJ5OiB7fSxcbiAgfTtcbiAgY29uc3Qgc2luZ3VsYXJIb29rID0gcmVnaXN0ZXIuYmluZChudWxsLCBzaW5ndWxhckhvb2tTdGF0ZSwgc2luZ3VsYXJIb29rTmFtZSk7XG4gIGJpbmRBcGkoc2luZ3VsYXJIb29rLCBzaW5ndWxhckhvb2tTdGF0ZSwgc2luZ3VsYXJIb29rTmFtZSk7XG4gIHJldHVybiBzaW5ndWxhckhvb2s7XG59XG5cbmZ1bmN0aW9uIENvbGxlY3Rpb24oKSB7XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIHJlZ2lzdHJ5OiB7fSxcbiAgfTtcblxuICBjb25zdCBob29rID0gcmVnaXN0ZXIuYmluZChudWxsLCBzdGF0ZSk7XG4gIGJpbmRBcGkoaG9vaywgc3RhdGUpO1xuXG4gIHJldHVybiBob29rO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IFNpbmd1bGFyLCBDb2xsZWN0aW9uIH07XG4iLCAiLy8gcGtnL2Rpc3Qtc3JjL2RlZmF1bHRzLmpzXG5pbXBvcnQgeyBnZXRVc2VyQWdlbnQgfSBmcm9tIFwidW5pdmVyc2FsLXVzZXItYWdlbnRcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL3ZlcnNpb24uanNcbnZhciBWRVJTSU9OID0gXCIwLjAuMC1kZXZlbG9wbWVudFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvZGVmYXVsdHMuanNcbnZhciB1c2VyQWdlbnQgPSBgb2N0b2tpdC1lbmRwb2ludC5qcy8ke1ZFUlNJT059ICR7Z2V0VXNlckFnZW50KCl9YDtcbnZhciBERUZBVUxUUyA9IHtcbiAgbWV0aG9kOiBcIkdFVFwiLFxuICBiYXNlVXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb21cIixcbiAgaGVhZGVyczoge1xuICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzK2pzb25cIixcbiAgICBcInVzZXItYWdlbnRcIjogdXNlckFnZW50XG4gIH0sXG4gIG1lZGlhVHlwZToge1xuICAgIGZvcm1hdDogXCJcIlxuICB9XG59O1xuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC9sb3dlcmNhc2Uta2V5cy5qc1xuZnVuY3Rpb24gbG93ZXJjYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFvYmplY3QpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkucmVkdWNlKChuZXdPYmosIGtleSkgPT4ge1xuICAgIG5ld09ialtrZXkudG9Mb3dlckNhc2UoKV0gPSBvYmplY3Rba2V5XTtcbiAgICByZXR1cm4gbmV3T2JqO1xuICB9LCB7fSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy91dGlsL2lzLXBsYWluLW9iamVjdC5qc1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IHZhbHVlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgY29uc3QgQ3RvciA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgXCJjb25zdHJ1Y3RvclwiKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwoQ3RvcikgPT09IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsKHZhbHVlKTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3V0aWwvbWVyZ2UtZGVlcC5qc1xuZnVuY3Rpb24gbWVyZ2VEZWVwKGRlZmF1bHRzLCBvcHRpb25zKSB7XG4gIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzKTtcbiAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3Qob3B0aW9uc1trZXldKSkge1xuICAgICAgaWYgKCEoa2V5IGluIGRlZmF1bHRzKSkgT2JqZWN0LmFzc2lnbihyZXN1bHQsIHsgW2tleV06IG9wdGlvbnNba2V5XSB9KTtcbiAgICAgIGVsc2UgcmVzdWx0W2tleV0gPSBtZXJnZURlZXAoZGVmYXVsdHNba2V5XSwgb3B0aW9uc1trZXldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmFzc2lnbihyZXN1bHQsIHsgW2tleV06IG9wdGlvbnNba2V5XSB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC9yZW1vdmUtdW5kZWZpbmVkLXByb3BlcnRpZXMuanNcbmZ1bmN0aW9uIHJlbW92ZVVuZGVmaW5lZFByb3BlcnRpZXMob2JqKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChvYmpba2V5XSA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9tZXJnZS5qc1xuZnVuY3Rpb24gbWVyZ2UoZGVmYXVsdHMsIHJvdXRlLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygcm91dGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICBsZXQgW21ldGhvZCwgdXJsXSA9IHJvdXRlLnNwbGl0KFwiIFwiKTtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih1cmwgPyB7IG1ldGhvZCwgdXJsIH0gOiB7IHVybDogbWV0aG9kIH0sIG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCByb3V0ZSk7XG4gIH1cbiAgb3B0aW9ucy5oZWFkZXJzID0gbG93ZXJjYXNlS2V5cyhvcHRpb25zLmhlYWRlcnMpO1xuICByZW1vdmVVbmRlZmluZWRQcm9wZXJ0aWVzKG9wdGlvbnMpO1xuICByZW1vdmVVbmRlZmluZWRQcm9wZXJ0aWVzKG9wdGlvbnMuaGVhZGVycyk7XG4gIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSBtZXJnZURlZXAoZGVmYXVsdHMgfHwge30sIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy51cmwgPT09IFwiL2dyYXBocWxcIikge1xuICAgIGlmIChkZWZhdWx0cyAmJiBkZWZhdWx0cy5tZWRpYVR5cGUucHJldmlld3M/Lmxlbmd0aCkge1xuICAgICAgbWVyZ2VkT3B0aW9ucy5tZWRpYVR5cGUucHJldmlld3MgPSBkZWZhdWx0cy5tZWRpYVR5cGUucHJldmlld3MuZmlsdGVyKFxuICAgICAgICAocHJldmlldykgPT4gIW1lcmdlZE9wdGlvbnMubWVkaWFUeXBlLnByZXZpZXdzLmluY2x1ZGVzKHByZXZpZXcpXG4gICAgICApLmNvbmNhdChtZXJnZWRPcHRpb25zLm1lZGlhVHlwZS5wcmV2aWV3cyk7XG4gICAgfVxuICAgIG1lcmdlZE9wdGlvbnMubWVkaWFUeXBlLnByZXZpZXdzID0gKG1lcmdlZE9wdGlvbnMubWVkaWFUeXBlLnByZXZpZXdzIHx8IFtdKS5tYXAoKHByZXZpZXcpID0+IHByZXZpZXcucmVwbGFjZSgvLXByZXZpZXcvLCBcIlwiKSk7XG4gIH1cbiAgcmV0dXJuIG1lcmdlZE9wdGlvbnM7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy91dGlsL2FkZC1xdWVyeS1wYXJhbWV0ZXJzLmpzXG5mdW5jdGlvbiBhZGRRdWVyeVBhcmFtZXRlcnModXJsLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHNlcGFyYXRvciA9IC9cXD8vLnRlc3QodXJsKSA/IFwiJlwiIDogXCI/XCI7XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocGFyYW1ldGVycyk7XG4gIGlmIChuYW1lcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHJldHVybiB1cmwgKyBzZXBhcmF0b3IgKyBuYW1lcy5tYXAoKG5hbWUpID0+IHtcbiAgICBpZiAobmFtZSA9PT0gXCJxXCIpIHtcbiAgICAgIHJldHVybiBcInE9XCIgKyBwYXJhbWV0ZXJzLnEuc3BsaXQoXCIrXCIpLm1hcChlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oXCIrXCIpO1xuICAgIH1cbiAgICByZXR1cm4gYCR7bmFtZX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1ldGVyc1tuYW1lXSl9YDtcbiAgfSkuam9pbihcIiZcIik7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy91dGlsL2V4dHJhY3QtdXJsLXZhcmlhYmxlLW5hbWVzLmpzXG52YXIgdXJsVmFyaWFibGVSZWdleCA9IC9cXHtbXnt9fV0rXFx9L2c7XG5mdW5jdGlvbiByZW1vdmVOb25DaGFycyh2YXJpYWJsZU5hbWUpIHtcbiAgcmV0dXJuIHZhcmlhYmxlTmFtZS5yZXBsYWNlKC8oPzpeXFxXKyl8KD86KD88IVxcVylcXFcrJCkvZywgXCJcIikuc3BsaXQoLywvKTtcbn1cbmZ1bmN0aW9uIGV4dHJhY3RVcmxWYXJpYWJsZU5hbWVzKHVybCkge1xuICBjb25zdCBtYXRjaGVzID0gdXJsLm1hdGNoKHVybFZhcmlhYmxlUmVnZXgpO1xuICBpZiAoIW1hdGNoZXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIG1hdGNoZXMubWFwKHJlbW92ZU5vbkNoYXJzKS5yZWR1Y2UoKGEsIGIpID0+IGEuY29uY2F0KGIpLCBbXSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy91dGlsL29taXQuanNcbmZ1bmN0aW9uIG9taXQob2JqZWN0LCBrZXlzVG9PbWl0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IHsgX19wcm90b19fOiBudWxsIH07XG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iamVjdCkpIHtcbiAgICBpZiAoa2V5c1RvT21pdC5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG9iamVjdFtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC91cmwtdGVtcGxhdGUuanNcbmZ1bmN0aW9uIGVuY29kZVJlc2VydmVkKHN0cikge1xuICByZXR1cm4gc3RyLnNwbGl0KC8oJVswLTlBLUZhLWZdezJ9KS9nKS5tYXAoZnVuY3Rpb24ocGFydCkge1xuICAgIGlmICghLyVbMC05QS1GYS1mXS8udGVzdChwYXJ0KSkge1xuICAgICAgcGFydCA9IGVuY29kZVVSSShwYXJ0KS5yZXBsYWNlKC8lNUIvZywgXCJbXCIpLnJlcGxhY2UoLyU1RC9nLCBcIl1cIik7XG4gICAgfVxuICAgIHJldHVybiBwYXJ0O1xuICB9KS5qb2luKFwiXCIpO1xufVxuZnVuY3Rpb24gZW5jb2RlVW5yZXNlcnZlZChzdHIpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoL1shJygpKl0vZywgZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBcIiVcIiArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWUsIGtleSkge1xuICB2YWx1ZSA9IG9wZXJhdG9yID09PSBcIitcIiB8fCBvcGVyYXRvciA9PT0gXCIjXCIgPyBlbmNvZGVSZXNlcnZlZCh2YWx1ZSkgOiBlbmNvZGVVbnJlc2VydmVkKHZhbHVlKTtcbiAgaWYgKGtleSkge1xuICAgIHJldHVybiBlbmNvZGVVbnJlc2VydmVkKGtleSkgKyBcIj1cIiArIHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdm9pZCAwICYmIHZhbHVlICE9PSBudWxsO1xufVxuZnVuY3Rpb24gaXNLZXlPcGVyYXRvcihvcGVyYXRvcikge1xuICByZXR1cm4gb3BlcmF0b3IgPT09IFwiO1wiIHx8IG9wZXJhdG9yID09PSBcIiZcIiB8fCBvcGVyYXRvciA9PT0gXCI/XCI7XG59XG5mdW5jdGlvbiBnZXRWYWx1ZXMoY29udGV4dCwgb3BlcmF0b3IsIGtleSwgbW9kaWZpZXIpIHtcbiAgdmFyIHZhbHVlID0gY29udGV4dFtrZXldLCByZXN1bHQgPSBbXTtcbiAgaWYgKGlzRGVmaW5lZCh2YWx1ZSkgJiYgdmFsdWUgIT09IFwiXCIpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwiYmlnaW50XCIgfHwgdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgaWYgKG1vZGlmaWVyICYmIG1vZGlmaWVyICE9PSBcIipcIikge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCBwYXJzZUludChtb2RpZmllciwgMTApKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICBlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWUsIGlzS2V5T3BlcmF0b3Iob3BlcmF0b3IpID8ga2V5IDogXCJcIilcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUuZmlsdGVyKGlzRGVmaW5lZCkuZm9yRWFjaChmdW5jdGlvbih2YWx1ZTIpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICAgICAgICBlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWUyLCBpc0tleU9wZXJhdG9yKG9wZXJhdG9yKSA/IGtleSA6IFwiXCIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICAgIGlmIChpc0RlZmluZWQodmFsdWVba10pKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZVtrXSwgaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0bXAgPSBbXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUuZmlsdGVyKGlzRGVmaW5lZCkuZm9yRWFjaChmdW5jdGlvbih2YWx1ZTIpIHtcbiAgICAgICAgICAgIHRtcC5wdXNoKGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZTIpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlW2tdKSkge1xuICAgICAgICAgICAgICB0bXAucHVzaChlbmNvZGVVbnJlc2VydmVkKGspKTtcbiAgICAgICAgICAgICAgdG1wLnB1c2goZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlW2tdLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNLZXlPcGVyYXRvcihvcGVyYXRvcikpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVVbnJlc2VydmVkKGtleSkgKyBcIj1cIiArIHRtcC5qb2luKFwiLFwiKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodG1wLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHRtcC5qb2luKFwiLFwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKG9wZXJhdG9yID09PSBcIjtcIikge1xuICAgICAgaWYgKGlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlVW5yZXNlcnZlZChrZXkpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIlwiICYmIChvcGVyYXRvciA9PT0gXCImXCIgfHwgb3BlcmF0b3IgPT09IFwiP1wiKSkge1xuICAgICAgcmVzdWx0LnB1c2goZW5jb2RlVW5yZXNlcnZlZChrZXkpICsgXCI9XCIpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIHJlc3VsdC5wdXNoKFwiXCIpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gcGFyc2VVcmwodGVtcGxhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBleHBhbmQ6IGV4cGFuZC5iaW5kKG51bGwsIHRlbXBsYXRlKVxuICB9O1xufVxuZnVuY3Rpb24gZXhwYW5kKHRlbXBsYXRlLCBjb250ZXh0KSB7XG4gIHZhciBvcGVyYXRvcnMgPSBbXCIrXCIsIFwiI1wiLCBcIi5cIiwgXCIvXCIsIFwiO1wiLCBcIj9cIiwgXCImXCJdO1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoXG4gICAgL1xceyhbXlxce1xcfV0rKVxcfXwoW15cXHtcXH1dKykvZyxcbiAgICBmdW5jdGlvbihfLCBleHByZXNzaW9uLCBsaXRlcmFsKSB7XG4gICAgICBpZiAoZXhwcmVzc2lvbikge1xuICAgICAgICBsZXQgb3BlcmF0b3IgPSBcIlwiO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgaWYgKG9wZXJhdG9ycy5pbmRleE9mKGV4cHJlc3Npb24uY2hhckF0KDApKSAhPT0gLTEpIHtcbiAgICAgICAgICBvcGVyYXRvciA9IGV4cHJlc3Npb24uY2hhckF0KDApO1xuICAgICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uLnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICBleHByZXNzaW9uLnNwbGl0KC8sL2cpLmZvckVhY2goZnVuY3Rpb24odmFyaWFibGUpIHtcbiAgICAgICAgICB2YXIgdG1wID0gLyhbXjpcXCpdKikoPzo6KFxcZCspfChcXCopKT8vLmV4ZWModmFyaWFibGUpO1xuICAgICAgICAgIHZhbHVlcy5wdXNoKGdldFZhbHVlcyhjb250ZXh0LCBvcGVyYXRvciwgdG1wWzFdLCB0bXBbMl0gfHwgdG1wWzNdKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3BlcmF0b3IgJiYgb3BlcmF0b3IgIT09IFwiK1wiKSB7XG4gICAgICAgICAgdmFyIHNlcGFyYXRvciA9IFwiLFwiO1xuICAgICAgICAgIGlmIChvcGVyYXRvciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHNlcGFyYXRvciA9IFwiJlwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgIT09IFwiI1wiKSB7XG4gICAgICAgICAgICBzZXBhcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICh2YWx1ZXMubGVuZ3RoICE9PSAwID8gb3BlcmF0b3IgOiBcIlwiKSArIHZhbHVlcy5qb2luKHNlcGFyYXRvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlcy5qb2luKFwiLFwiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVuY29kZVJlc2VydmVkKGxpdGVyYWwpO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbiAgaWYgKHRlbXBsYXRlID09PSBcIi9cIikge1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgvXFwvJC8sIFwiXCIpO1xuICB9XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9wYXJzZS5qc1xuZnVuY3Rpb24gcGFyc2Uob3B0aW9ucykge1xuICBsZXQgbWV0aG9kID0gb3B0aW9ucy5tZXRob2QudG9VcHBlckNhc2UoKTtcbiAgbGV0IHVybCA9IChvcHRpb25zLnVybCB8fCBcIi9cIikucmVwbGFjZSgvOihbYS16XVxcdyspL2csIFwieyQxfVwiKTtcbiAgbGV0IGhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLmhlYWRlcnMpO1xuICBsZXQgYm9keTtcbiAgbGV0IHBhcmFtZXRlcnMgPSBvbWl0KG9wdGlvbnMsIFtcbiAgICBcIm1ldGhvZFwiLFxuICAgIFwiYmFzZVVybFwiLFxuICAgIFwidXJsXCIsXG4gICAgXCJoZWFkZXJzXCIsXG4gICAgXCJyZXF1ZXN0XCIsXG4gICAgXCJtZWRpYVR5cGVcIlxuICBdKTtcbiAgY29uc3QgdXJsVmFyaWFibGVOYW1lcyA9IGV4dHJhY3RVcmxWYXJpYWJsZU5hbWVzKHVybCk7XG4gIHVybCA9IHBhcnNlVXJsKHVybCkuZXhwYW5kKHBhcmFtZXRlcnMpO1xuICBpZiAoIS9eaHR0cC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gb3B0aW9ucy5iYXNlVXJsICsgdXJsO1xuICB9XG4gIGNvbnN0IG9taXR0ZWRQYXJhbWV0ZXJzID0gT2JqZWN0LmtleXMob3B0aW9ucykuZmlsdGVyKChvcHRpb24pID0+IHVybFZhcmlhYmxlTmFtZXMuaW5jbHVkZXMob3B0aW9uKSkuY29uY2F0KFwiYmFzZVVybFwiKTtcbiAgY29uc3QgcmVtYWluaW5nUGFyYW1ldGVycyA9IG9taXQocGFyYW1ldGVycywgb21pdHRlZFBhcmFtZXRlcnMpO1xuICBjb25zdCBpc0JpbmFyeVJlcXVlc3QgPSAvYXBwbGljYXRpb25cXC9vY3RldC1zdHJlYW0vaS50ZXN0KGhlYWRlcnMuYWNjZXB0KTtcbiAgaWYgKCFpc0JpbmFyeVJlcXVlc3QpIHtcbiAgICBpZiAob3B0aW9ucy5tZWRpYVR5cGUuZm9ybWF0KSB7XG4gICAgICBoZWFkZXJzLmFjY2VwdCA9IGhlYWRlcnMuYWNjZXB0LnNwbGl0KC8sLykubWFwKFxuICAgICAgICAoZm9ybWF0KSA9PiBmb3JtYXQucmVwbGFjZShcbiAgICAgICAgICAvYXBwbGljYXRpb25cXC92bmQoXFwuXFx3KykoXFwudjMpPyhcXC5cXHcrKT8oXFwranNvbik/JC8sXG4gICAgICAgICAgYGFwcGxpY2F0aW9uL3ZuZCQxJDIuJHtvcHRpb25zLm1lZGlhVHlwZS5mb3JtYXR9YFxuICAgICAgICApXG4gICAgICApLmpvaW4oXCIsXCIpO1xuICAgIH1cbiAgICBpZiAodXJsLmVuZHNXaXRoKFwiL2dyYXBocWxcIikpIHtcbiAgICAgIGlmIChvcHRpb25zLm1lZGlhVHlwZS5wcmV2aWV3cz8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHByZXZpZXdzRnJvbUFjY2VwdEhlYWRlciA9IGhlYWRlcnMuYWNjZXB0Lm1hdGNoKC8oPzwhW1xcdy1dKVtcXHctXSsoPz0tcHJldmlldykvZykgfHwgW107XG4gICAgICAgIGhlYWRlcnMuYWNjZXB0ID0gcHJldmlld3NGcm9tQWNjZXB0SGVhZGVyLmNvbmNhdChvcHRpb25zLm1lZGlhVHlwZS5wcmV2aWV3cykubWFwKChwcmV2aWV3KSA9PiB7XG4gICAgICAgICAgY29uc3QgZm9ybWF0ID0gb3B0aW9ucy5tZWRpYVR5cGUuZm9ybWF0ID8gYC4ke29wdGlvbnMubWVkaWFUeXBlLmZvcm1hdH1gIDogXCIranNvblwiO1xuICAgICAgICAgIHJldHVybiBgYXBwbGljYXRpb24vdm5kLmdpdGh1Yi4ke3ByZXZpZXd9LXByZXZpZXcke2Zvcm1hdH1gO1xuICAgICAgICB9KS5qb2luKFwiLFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKFtcIkdFVFwiLCBcIkhFQURcIl0uaW5jbHVkZXMobWV0aG9kKSkge1xuICAgIHVybCA9IGFkZFF1ZXJ5UGFyYW1ldGVycyh1cmwsIHJlbWFpbmluZ1BhcmFtZXRlcnMpO1xuICB9IGVsc2Uge1xuICAgIGlmIChcImRhdGFcIiBpbiByZW1haW5pbmdQYXJhbWV0ZXJzKSB7XG4gICAgICBib2R5ID0gcmVtYWluaW5nUGFyYW1ldGVycy5kYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMocmVtYWluaW5nUGFyYW1ldGVycykubGVuZ3RoKSB7XG4gICAgICAgIGJvZHkgPSByZW1haW5pbmdQYXJhbWV0ZXJzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIWhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gJiYgdHlwZW9mIGJvZHkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBoZWFkZXJzW1wiY29udGVudC10eXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCI7XG4gIH1cbiAgaWYgKFtcIlBBVENIXCIsIFwiUFVUXCJdLmluY2x1ZGVzKG1ldGhvZCkgJiYgdHlwZW9mIGJvZHkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBib2R5ID0gXCJcIjtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICB7IG1ldGhvZCwgdXJsLCBoZWFkZXJzIH0sXG4gICAgdHlwZW9mIGJvZHkgIT09IFwidW5kZWZpbmVkXCIgPyB7IGJvZHkgfSA6IG51bGwsXG4gICAgb3B0aW9ucy5yZXF1ZXN0ID8geyByZXF1ZXN0OiBvcHRpb25zLnJlcXVlc3QgfSA6IG51bGxcbiAgKTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2VuZHBvaW50LXdpdGgtZGVmYXVsdHMuanNcbmZ1bmN0aW9uIGVuZHBvaW50V2l0aERlZmF1bHRzKGRlZmF1bHRzLCByb3V0ZSwgb3B0aW9ucykge1xuICByZXR1cm4gcGFyc2UobWVyZ2UoZGVmYXVsdHMsIHJvdXRlLCBvcHRpb25zKSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy93aXRoLWRlZmF1bHRzLmpzXG5mdW5jdGlvbiB3aXRoRGVmYXVsdHMob2xkRGVmYXVsdHMsIG5ld0RlZmF1bHRzKSB7XG4gIGNvbnN0IERFRkFVTFRTMiA9IG1lcmdlKG9sZERlZmF1bHRzLCBuZXdEZWZhdWx0cyk7XG4gIGNvbnN0IGVuZHBvaW50MiA9IGVuZHBvaW50V2l0aERlZmF1bHRzLmJpbmQobnVsbCwgREVGQVVMVFMyKTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZW5kcG9pbnQyLCB7XG4gICAgREVGQVVMVFM6IERFRkFVTFRTMixcbiAgICBkZWZhdWx0czogd2l0aERlZmF1bHRzLmJpbmQobnVsbCwgREVGQVVMVFMyKSxcbiAgICBtZXJnZTogbWVyZ2UuYmluZChudWxsLCBERUZBVUxUUzIpLFxuICAgIHBhcnNlXG4gIH0pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbnZhciBlbmRwb2ludCA9IHdpdGhEZWZhdWx0cyhudWxsLCBERUZBVUxUUyk7XG5leHBvcnQge1xuICBlbmRwb2ludFxufTtcbiIsICIvLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbmltcG9ydCB7IGVuZHBvaW50IH0gZnJvbSBcIkBvY3Rva2l0L2VuZHBvaW50XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9kZWZhdWx0cy5qc1xuaW1wb3J0IHsgZ2V0VXNlckFnZW50IH0gZnJvbSBcInVuaXZlcnNhbC11c2VyLWFnZW50XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy92ZXJzaW9uLmpzXG52YXIgVkVSU0lPTiA9IFwiMTAuMC44XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9kZWZhdWx0cy5qc1xudmFyIGRlZmF1bHRzX2RlZmF1bHQgPSB7XG4gIGhlYWRlcnM6IHtcbiAgICBcInVzZXItYWdlbnRcIjogYG9jdG9raXQtcmVxdWVzdC5qcy8ke1ZFUlNJT059ICR7Z2V0VXNlckFnZW50KCl9YFxuICB9XG59O1xuXG4vLyBwa2cvZGlzdC1zcmMvZmV0Y2gtd3JhcHBlci5qc1xuaW1wb3J0IHsgc2FmZVBhcnNlIH0gZnJvbSBcImZhc3QtY29udGVudC10eXBlLXBhcnNlXCI7XG5pbXBvcnQgeyBKU09OUGFyc2UsIEpTT05TdHJpbmdpZnkgfSBmcm9tIFwianNvbi13aXRoLWJpZ2ludFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvaXMtcGxhaW4tb2JqZWN0LmpzXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgdmFsdWUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHJldHVybiB0cnVlO1xuICBjb25zdCBDdG9yID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCBcImNvbnN0cnVjdG9yXCIpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJiBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbChDdG9yKSA9PT0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwodmFsdWUpO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvZmV0Y2gtd3JhcHBlci5qc1xuaW1wb3J0IHsgUmVxdWVzdEVycm9yIH0gZnJvbSBcIkBvY3Rva2l0L3JlcXVlc3QtZXJyb3JcIjtcbnZhciBub29wID0gKCkgPT4gXCJcIjtcbmFzeW5jIGZ1bmN0aW9uIGZldGNoV3JhcHBlcihyZXF1ZXN0T3B0aW9ucykge1xuICBjb25zdCBmZXRjaCA9IHJlcXVlc3RPcHRpb25zLnJlcXVlc3Q/LmZldGNoIHx8IGdsb2JhbFRoaXMuZmV0Y2g7XG4gIGlmICghZmV0Y2gpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcImZldGNoIGlzIG5vdCBzZXQuIFBsZWFzZSBwYXNzIGEgZmV0Y2ggaW1wbGVtZW50YXRpb24gYXMgbmV3IE9jdG9raXQoeyByZXF1ZXN0OiB7IGZldGNoIH19KS4gTGVhcm4gbW9yZSBhdCBodHRwczovL2dpdGh1Yi5jb20vb2N0b2tpdC9vY3Rva2l0LmpzLyNmZXRjaC1taXNzaW5nXCJcbiAgICApO1xuICB9XG4gIGNvbnN0IGxvZyA9IHJlcXVlc3RPcHRpb25zLnJlcXVlc3Q/LmxvZyB8fCBjb25zb2xlO1xuICBjb25zdCBwYXJzZVN1Y2Nlc3NSZXNwb25zZUJvZHkgPSByZXF1ZXN0T3B0aW9ucy5yZXF1ZXN0Py5wYXJzZVN1Y2Nlc3NSZXNwb25zZUJvZHkgIT09IGZhbHNlO1xuICBjb25zdCBib2R5ID0gaXNQbGFpbk9iamVjdChyZXF1ZXN0T3B0aW9ucy5ib2R5KSB8fCBBcnJheS5pc0FycmF5KHJlcXVlc3RPcHRpb25zLmJvZHkpID8gSlNPTlN0cmluZ2lmeShyZXF1ZXN0T3B0aW9ucy5ib2R5KSA6IHJlcXVlc3RPcHRpb25zLmJvZHk7XG4gIGNvbnN0IHJlcXVlc3RIZWFkZXJzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIE9iamVjdC5lbnRyaWVzKHJlcXVlc3RPcHRpb25zLmhlYWRlcnMpLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gW1xuICAgICAgbmFtZSxcbiAgICAgIFN0cmluZyh2YWx1ZSlcbiAgICBdKVxuICApO1xuICBsZXQgZmV0Y2hSZXNwb25zZTtcbiAgdHJ5IHtcbiAgICBmZXRjaFJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdE9wdGlvbnMudXJsLCB7XG4gICAgICBtZXRob2Q6IHJlcXVlc3RPcHRpb25zLm1ldGhvZCxcbiAgICAgIGJvZHksXG4gICAgICByZWRpcmVjdDogcmVxdWVzdE9wdGlvbnMucmVxdWVzdD8ucmVkaXJlY3QsXG4gICAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVycyxcbiAgICAgIHNpZ25hbDogcmVxdWVzdE9wdGlvbnMucmVxdWVzdD8uc2lnbmFsLFxuICAgICAgLy8gZHVwbGV4IG11c3QgYmUgc2V0IGlmIHJlcXVlc3QuYm9keSBpcyBSZWFkYWJsZVN0cmVhbSBvciBBc3luYyBJdGVyYWJsZXMuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2RvbS1yZXF1ZXN0aW5pdC1kdXBsZXguXG4gICAgICAuLi5yZXF1ZXN0T3B0aW9ucy5ib2R5ICYmIHsgZHVwbGV4OiBcImhhbGZcIiB9XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbGV0IG1lc3NhZ2UgPSBcIlVua25vd24gRXJyb3JcIjtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgaWYgKGVycm9yLm5hbWUgPT09IFwiQWJvcnRFcnJvclwiKSB7XG4gICAgICAgIGVycm9yLnN0YXR1cyA9IDUwMDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgIGlmIChlcnJvci5uYW1lID09PSBcIlR5cGVFcnJvclwiICYmIFwiY2F1c2VcIiBpbiBlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IuY2F1c2UgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5jYXVzZS5tZXNzYWdlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlcnJvci5jYXVzZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5jYXVzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0RXJyb3IgPSBuZXcgUmVxdWVzdEVycm9yKG1lc3NhZ2UsIDUwMCwge1xuICAgICAgcmVxdWVzdDogcmVxdWVzdE9wdGlvbnNcbiAgICB9KTtcbiAgICByZXF1ZXN0RXJyb3IuY2F1c2UgPSBlcnJvcjtcbiAgICB0aHJvdyByZXF1ZXN0RXJyb3I7XG4gIH1cbiAgY29uc3Qgc3RhdHVzID0gZmV0Y2hSZXNwb25zZS5zdGF0dXM7XG4gIGNvbnN0IHVybCA9IGZldGNoUmVzcG9uc2UudXJsO1xuICBjb25zdCByZXNwb25zZUhlYWRlcnMgPSB7fTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgZmV0Y2hSZXNwb25zZS5oZWFkZXJzKSB7XG4gICAgcmVzcG9uc2VIZWFkZXJzW2tleV0gPSB2YWx1ZTtcbiAgfVxuICBjb25zdCBvY3Rva2l0UmVzcG9uc2UgPSB7XG4gICAgdXJsLFxuICAgIHN0YXR1cyxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgZGF0YTogXCJcIlxuICB9O1xuICBpZiAoXCJkZXByZWNhdGlvblwiIGluIHJlc3BvbnNlSGVhZGVycykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSByZXNwb25zZUhlYWRlcnMubGluayAmJiByZXNwb25zZUhlYWRlcnMubGluay5tYXRjaCgvPChbXjw+XSspPjsgcmVsPVwiZGVwcmVjYXRpb25cIi8pO1xuICAgIGNvbnN0IGRlcHJlY2F0aW9uTGluayA9IG1hdGNoZXMgJiYgbWF0Y2hlcy5wb3AoKTtcbiAgICBsb2cud2FybihcbiAgICAgIGBbQG9jdG9raXQvcmVxdWVzdF0gXCIke3JlcXVlc3RPcHRpb25zLm1ldGhvZH0gJHtyZXF1ZXN0T3B0aW9ucy51cmx9XCIgaXMgZGVwcmVjYXRlZC4gSXQgaXMgc2NoZWR1bGVkIHRvIGJlIHJlbW92ZWQgb24gJHtyZXNwb25zZUhlYWRlcnMuc3Vuc2V0fSR7ZGVwcmVjYXRpb25MaW5rID8gYC4gU2VlICR7ZGVwcmVjYXRpb25MaW5rfWAgOiBcIlwifWBcbiAgICApO1xuICB9XG4gIGlmIChzdGF0dXMgPT09IDIwNCB8fCBzdGF0dXMgPT09IDIwNSkge1xuICAgIHJldHVybiBvY3Rva2l0UmVzcG9uc2U7XG4gIH1cbiAgaWYgKHJlcXVlc3RPcHRpb25zLm1ldGhvZCA9PT0gXCJIRUFEXCIpIHtcbiAgICBpZiAoc3RhdHVzIDwgNDAwKSB7XG4gICAgICByZXR1cm4gb2N0b2tpdFJlc3BvbnNlO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKGZldGNoUmVzcG9uc2Uuc3RhdHVzVGV4dCwgc3RhdHVzLCB7XG4gICAgICByZXNwb25zZTogb2N0b2tpdFJlc3BvbnNlLFxuICAgICAgcmVxdWVzdDogcmVxdWVzdE9wdGlvbnNcbiAgICB9KTtcbiAgfVxuICBpZiAoc3RhdHVzID09PSAzMDQpIHtcbiAgICBvY3Rva2l0UmVzcG9uc2UuZGF0YSA9IGF3YWl0IGdldFJlc3BvbnNlRGF0YShmZXRjaFJlc3BvbnNlKTtcbiAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKFwiTm90IG1vZGlmaWVkXCIsIHN0YXR1cywge1xuICAgICAgcmVzcG9uc2U6IG9jdG9raXRSZXNwb25zZSxcbiAgICAgIHJlcXVlc3Q6IHJlcXVlc3RPcHRpb25zXG4gICAgfSk7XG4gIH1cbiAgaWYgKHN0YXR1cyA+PSA0MDApIHtcbiAgICBvY3Rva2l0UmVzcG9uc2UuZGF0YSA9IGF3YWl0IGdldFJlc3BvbnNlRGF0YShmZXRjaFJlc3BvbnNlKTtcbiAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKHRvRXJyb3JNZXNzYWdlKG9jdG9raXRSZXNwb25zZS5kYXRhKSwgc3RhdHVzLCB7XG4gICAgICByZXNwb25zZTogb2N0b2tpdFJlc3BvbnNlLFxuICAgICAgcmVxdWVzdDogcmVxdWVzdE9wdGlvbnNcbiAgICB9KTtcbiAgfVxuICBvY3Rva2l0UmVzcG9uc2UuZGF0YSA9IHBhcnNlU3VjY2Vzc1Jlc3BvbnNlQm9keSA/IGF3YWl0IGdldFJlc3BvbnNlRGF0YShmZXRjaFJlc3BvbnNlKSA6IGZldGNoUmVzcG9uc2UuYm9keTtcbiAgcmV0dXJuIG9jdG9raXRSZXNwb25zZTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGdldFJlc3BvbnNlRGF0YShyZXNwb25zZSkge1xuICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICBpZiAoIWNvbnRlbnRUeXBlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKS5jYXRjaChub29wKTtcbiAgfVxuICBjb25zdCBtaW1ldHlwZSA9IHNhZmVQYXJzZShjb250ZW50VHlwZSk7XG4gIGlmIChpc0pTT05SZXNwb25zZShtaW1ldHlwZSkpIHtcbiAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgdHJ5IHtcbiAgICAgIHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICByZXR1cm4gSlNPTlBhcnNlKHRleHQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKG1pbWV0eXBlLnR5cGUuc3RhcnRzV2l0aChcInRleHQvXCIpIHx8IG1pbWV0eXBlLnBhcmFtZXRlcnMuY2hhcnNldD8udG9Mb3dlckNhc2UoKSA9PT0gXCJ1dGYtOFwiKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKS5jYXRjaChub29wKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKS5jYXRjaChcbiAgICAgIC8qIHY4IGlnbm9yZSBuZXh0IC0tIEBwcmVzZXJ2ZSAqL1xuICAgICAgKCkgPT4gbmV3IEFycmF5QnVmZmVyKDApXG4gICAgKTtcbiAgfVxufVxuZnVuY3Rpb24gaXNKU09OUmVzcG9uc2UobWltZXR5cGUpIHtcbiAgcmV0dXJuIG1pbWV0eXBlLnR5cGUgPT09IFwiYXBwbGljYXRpb24vanNvblwiIHx8IG1pbWV0eXBlLnR5cGUgPT09IFwiYXBwbGljYXRpb24vc2NpbStqc29uXCI7XG59XG5mdW5jdGlvbiB0b0Vycm9yTWVzc2FnZShkYXRhKSB7XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gXCJVbmtub3duIGVycm9yXCI7XG4gIH1cbiAgaWYgKFwibWVzc2FnZVwiIGluIGRhdGEpIHtcbiAgICBjb25zdCBzdWZmaXggPSBcImRvY3VtZW50YXRpb25fdXJsXCIgaW4gZGF0YSA/IGAgLSAke2RhdGEuZG9jdW1lbnRhdGlvbl91cmx9YCA6IFwiXCI7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGF0YS5lcnJvcnMpID8gYCR7ZGF0YS5tZXNzYWdlfTogJHtkYXRhLmVycm9ycy5tYXAoKHYpID0+IEpTT04uc3RyaW5naWZ5KHYpKS5qb2luKFwiLCBcIil9JHtzdWZmaXh9YCA6IGAke2RhdGEubWVzc2FnZX0ke3N1ZmZpeH1gO1xuICB9XG4gIHJldHVybiBgVW5rbm93biBlcnJvcjogJHtKU09OLnN0cmluZ2lmeShkYXRhKX1gO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvd2l0aC1kZWZhdWx0cy5qc1xuZnVuY3Rpb24gd2l0aERlZmF1bHRzKG9sZEVuZHBvaW50LCBuZXdEZWZhdWx0cykge1xuICBjb25zdCBlbmRwb2ludDIgPSBvbGRFbmRwb2ludC5kZWZhdWx0cyhuZXdEZWZhdWx0cyk7XG4gIGNvbnN0IG5ld0FwaSA9IGZ1bmN0aW9uKHJvdXRlLCBwYXJhbWV0ZXJzKSB7XG4gICAgY29uc3QgZW5kcG9pbnRPcHRpb25zID0gZW5kcG9pbnQyLm1lcmdlKHJvdXRlLCBwYXJhbWV0ZXJzKTtcbiAgICBpZiAoIWVuZHBvaW50T3B0aW9ucy5yZXF1ZXN0IHx8ICFlbmRwb2ludE9wdGlvbnMucmVxdWVzdC5ob29rKSB7XG4gICAgICByZXR1cm4gZmV0Y2hXcmFwcGVyKGVuZHBvaW50Mi5wYXJzZShlbmRwb2ludE9wdGlvbnMpKTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDIgPSAocm91dGUyLCBwYXJhbWV0ZXJzMikgPT4ge1xuICAgICAgcmV0dXJuIGZldGNoV3JhcHBlcihcbiAgICAgICAgZW5kcG9pbnQyLnBhcnNlKGVuZHBvaW50Mi5tZXJnZShyb3V0ZTIsIHBhcmFtZXRlcnMyKSlcbiAgICAgICk7XG4gICAgfTtcbiAgICBPYmplY3QuYXNzaWduKHJlcXVlc3QyLCB7XG4gICAgICBlbmRwb2ludDogZW5kcG9pbnQyLFxuICAgICAgZGVmYXVsdHM6IHdpdGhEZWZhdWx0cy5iaW5kKG51bGwsIGVuZHBvaW50MilcbiAgICB9KTtcbiAgICByZXR1cm4gZW5kcG9pbnRPcHRpb25zLnJlcXVlc3QuaG9vayhyZXF1ZXN0MiwgZW5kcG9pbnRPcHRpb25zKTtcbiAgfTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3QXBpLCB7XG4gICAgZW5kcG9pbnQ6IGVuZHBvaW50MixcbiAgICBkZWZhdWx0czogd2l0aERlZmF1bHRzLmJpbmQobnVsbCwgZW5kcG9pbnQyKVxuICB9KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG52YXIgcmVxdWVzdCA9IHdpdGhEZWZhdWx0cyhlbmRwb2ludCwgZGVmYXVsdHNfZGVmYXVsdCk7XG5leHBvcnQge1xuICByZXF1ZXN0XG59O1xuLyogdjggaWdub3JlIG5leHQgLS0gQHByZXNlcnZlICovXG4vKiB2OCBpZ25vcmUgZWxzZSAtLSBAcHJlc2VydmUgKi9cbiIsICJjb25zdCBpbnRSZWdleCA9IC9eLT9cXGQrJC87XG5jb25zdCBub2lzZVZhbHVlID0gL14tP1xcZCtuKyQvOyAvLyBOb2lzZSAtIHN0cmluZ3MgdGhhdCBtYXRjaCB0aGUgY3VzdG9tIGZvcm1hdCBiZWZvcmUgYmVpbmcgY29udmVydGVkIHRvIGl0XG5jb25zdCBvcmlnaW5hbFN0cmluZ2lmeSA9IEpTT04uc3RyaW5naWZ5O1xuY29uc3Qgb3JpZ2luYWxQYXJzZSA9IEpTT04ucGFyc2U7XG5jb25zdCBjdXN0b21Gb3JtYXQgPSAvXi0/XFxkK24kLztcblxuY29uc3QgYmlnSW50c1N0cmluZ2lmeSA9IC8oW1xcWzpdKT9cIigtP1xcZCspblwiKCR8KFtcXFxcbl18XFxzKSooXFxzfFtcXFxcbl0pKlssXFx9XFxdXSkvZztcbmNvbnN0IG5vaXNlU3RyaW5naWZ5ID1cbiAgLyhbXFxbOl0pPyhcIi0/XFxkK24rKW4oXCIkfFwiKFtcXFxcbl18XFxzKSooXFxzfFtcXFxcbl0pKlssXFx9XFxdXSkvZztcblxuLyoqXG4gKiBAdHlwZWRlZiB7KHRoaXM6IGFueSwga2V5OiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQsIHZhbHVlOiBhbnkpID0+IGFueX0gUmVwbGFjZXJcbiAqIEB0eXBlZGVmIHsoa2V5OiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQsIHZhbHVlOiBhbnksIGNvbnRleHQ/OiB7IHNvdXJjZTogc3RyaW5nIH0pID0+IGFueX0gUmV2aXZlclxuICovXG5cbi8qKlxuICogQ29udmVydHMgYSBKYXZhU2NyaXB0IHZhbHVlIHRvIGEgSlNPTiBzdHJpbmcuXG4gKlxuICogU3VwcG9ydHMgc2VyaWFsaXphdGlvbiBvZiBCaWdJbnQgdmFsdWVzIHVzaW5nIHR3byBzdHJhdGVnaWVzOlxuICogMS4gQ3VzdG9tIGZvcm1hdCBcIjEyM25cIiBcdTIxOTIgXCIxMjNcIiAodW5pdmVyc2FsIGZhbGxiYWNrKVxuICogMi4gTmF0aXZlIEpTT04ucmF3SlNPTigpIChOb2RlLmpzIDIyKywgZmFzdGVzdCkgd2hlbiBhdmFpbGFibGVcbiAqXG4gKiBBbGwgb3RoZXIgdmFsdWVzIGFyZSBzZXJpYWxpemVkIGV4YWN0bHkgbGlrZSBuYXRpdmUgSlNPTi5zdHJpbmdpZnkoKS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGEgSlNPTiBzdHJpbmcuXG4gKiBAcGFyYW0ge1JlcGxhY2VyIHwgQXJyYXk8c3RyaW5nIHwgbnVtYmVyPiB8IG51bGx9IFtyZXBsYWNlcl1cbiAqICAgQSBmdW5jdGlvbiB0aGF0IGFsdGVycyB0aGUgYmVoYXZpb3Igb2YgdGhlIHN0cmluZ2lmaWNhdGlvbiBwcm9jZXNzLFxuICogICBvciBhbiBhcnJheSBvZiBzdHJpbmdzL251bWJlcnMgdG8gaW5kaWNhdGUgcHJvcGVydGllcyB0byBleGNsdWRlLlxuICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IFtzcGFjZV1cbiAqICAgQSBzdHJpbmcgb3IgbnVtYmVyIHRvIHNwZWNpZnkgaW5kZW50YXRpb24gb3IgcHJldHR5LXByaW50aW5nLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIEpTT04gc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxuICovXG5jb25zdCBKU09OU3RyaW5naWZ5ID0gKHZhbHVlLCByZXBsYWNlciwgc3BhY2UpID0+IHtcbiAgaWYgKFwicmF3SlNPTlwiIGluIEpTT04pIHtcbiAgICByZXR1cm4gb3JpZ2luYWxTdHJpbmdpZnkoXG4gICAgICB2YWx1ZSxcbiAgICAgIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYmlnaW50XCIpIHJldHVybiBKU09OLnJhd0pTT04odmFsdWUudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXBsYWNlciA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gcmVwbGFjZXIoa2V5LCB2YWx1ZSk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVwbGFjZXIpICYmIHJlcGxhY2VyLmluY2x1ZGVzKGtleSkpIHJldHVybiB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9LFxuICAgICAgc3BhY2UsXG4gICAgKTtcbiAgfVxuXG4gIGlmICghdmFsdWUpIHJldHVybiBvcmlnaW5hbFN0cmluZ2lmeSh2YWx1ZSwgcmVwbGFjZXIsIHNwYWNlKTtcblxuICBjb25zdCBjb252ZXJ0ZWRUb0N1c3RvbUpTT04gPSBvcmlnaW5hbFN0cmluZ2lmeShcbiAgICB2YWx1ZSxcbiAgICAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgY29uc3QgaXNOb2lzZSA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiBub2lzZVZhbHVlLnRlc3QodmFsdWUpO1xuXG4gICAgICBpZiAoaXNOb2lzZSkgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkgKyBcIm5cIjsgLy8gTWFyayBub2lzZSB2YWx1ZXMgd2l0aCBhZGRpdGlvbmFsIFwiblwiIHRvIG9mZnNldCB0aGUgZGVsZXRpb24gb2Ygb25lIFwiblwiIGR1cmluZyB0aGUgcHJvY2Vzc2luZ1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJpZ2ludFwiKSByZXR1cm4gdmFsdWUudG9TdHJpbmcoKSArIFwiblwiO1xuXG4gICAgICBpZiAodHlwZW9mIHJlcGxhY2VyID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiByZXBsYWNlcihrZXksIHZhbHVlKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVwbGFjZXIpICYmIHJlcGxhY2VyLmluY2x1ZGVzKGtleSkpIHJldHVybiB2YWx1ZTtcblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgc3BhY2UsXG4gICk7XG4gIGNvbnN0IHByb2Nlc3NlZEpTT04gPSBjb252ZXJ0ZWRUb0N1c3RvbUpTT04ucmVwbGFjZShcbiAgICBiaWdJbnRzU3RyaW5naWZ5LFxuICAgIFwiJDEkMiQzXCIsXG4gICk7IC8vIERlbGV0ZSBvbmUgXCJuXCIgb2ZmIHRoZSBlbmQgb2YgZXZlcnkgQmlnSW50IHZhbHVlXG4gIGNvbnN0IGRlbm9pc2VkSlNPTiA9IHByb2Nlc3NlZEpTT04ucmVwbGFjZShub2lzZVN0cmluZ2lmeSwgXCIkMSQyJDNcIik7IC8vIFJlbW92ZSBvbmUgXCJuXCIgb2ZmIHRoZSBlbmQgb2YgZXZlcnkgbm9pc3kgc3RyaW5nXG5cbiAgcmV0dXJuIGRlbm9pc2VkSlNPTjtcbn07XG5cbmNvbnN0IGZlYXR1cmVDYWNoZSA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBEZXRlY3RzIGlmIHRoZSBjdXJyZW50IEpTT04ucGFyc2UgaW1wbGVtZW50YXRpb24gc3VwcG9ydHMgdGhlIGNvbnRleHQuc291cmNlIGZlYXR1cmUuXG4gKlxuICogVXNlcyB0b1N0cmluZygpIGZpbmdlcnByaW50aW5nIHRvIGNhY2hlIHJlc3VsdHMgYW5kIGF1dG9tYXRpY2FsbHkgZGV0ZWN0IHJ1bnRpbWVcbiAqIHJlcGxhY2VtZW50cyBvZiBKU09OLnBhcnNlIChwb2x5ZmlsbHMsIG1vY2tzLCBldGMuKS5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBjb250ZXh0LnNvdXJjZSBpcyBzdXBwb3J0ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuY29uc3QgaXNDb250ZXh0U291cmNlU3VwcG9ydGVkID0gKCkgPT4ge1xuICBjb25zdCBwYXJzZUZpbmdlcnByaW50ID0gSlNPTi5wYXJzZS50b1N0cmluZygpO1xuXG4gIGlmIChmZWF0dXJlQ2FjaGUuaGFzKHBhcnNlRmluZ2VycHJpbnQpKSB7XG4gICAgcmV0dXJuIGZlYXR1cmVDYWNoZS5nZXQocGFyc2VGaW5nZXJwcmludCk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IEpTT04ucGFyc2UoXG4gICAgICBcIjFcIixcbiAgICAgIChfLCBfXywgY29udGV4dCkgPT4gISFjb250ZXh0Py5zb3VyY2UgJiYgY29udGV4dC5zb3VyY2UgPT09IFwiMVwiLFxuICAgICk7XG4gICAgZmVhdHVyZUNhY2hlLnNldChwYXJzZUZpbmdlcnByaW50LCByZXN1bHQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCB7XG4gICAgZmVhdHVyZUNhY2hlLnNldChwYXJzZUZpbmdlcnByaW50LCBmYWxzZSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbi8qKlxuICogUmV2aXZlciBmdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGN1c3RvbS1mb3JtYXQgQmlnSW50IHN0cmluZ3MgYmFjayB0byBCaWdJbnQgdmFsdWVzLlxuICogQWxzbyBoYW5kbGVzIFwibm9pc2VcIiBzdHJpbmdzIHRoYXQgYWNjaWRlbnRhbGx5IG1hdGNoIHRoZSBCaWdJbnQgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkfSBrZXkgVGhlIG9iamVjdCBrZXkuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBwYXJzZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHRdIFBhcnNlIGNvbnRleHQgKGlmIHN1cHBvcnRlZCBieSBKU09OLnBhcnNlKS5cbiAqIEBwYXJhbSB7UmV2aXZlcn0gW3VzZXJSZXZpdmVyXSBVc2VyJ3MgY3VzdG9tIHJldml2ZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7YW55fSBUaGUgdHJhbnNmb3JtZWQgdmFsdWUuXG4gKi9cbmNvbnN0IGNvbnZlcnRNYXJrZWRCaWdJbnRzUmV2aXZlciA9IChrZXksIHZhbHVlLCBjb250ZXh0LCB1c2VyUmV2aXZlcikgPT4ge1xuICBjb25zdCBpc0N1c3RvbUZvcm1hdEJpZ0ludCA9XG4gICAgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIGN1c3RvbUZvcm1hdC50ZXN0KHZhbHVlKTtcbiAgaWYgKGlzQ3VzdG9tRm9ybWF0QmlnSW50KSByZXR1cm4gQmlnSW50KHZhbHVlLnNsaWNlKDAsIC0xKSk7XG5cbiAgY29uc3QgaXNOb2lzZVZhbHVlID0gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIG5vaXNlVmFsdWUudGVzdCh2YWx1ZSk7XG4gIGlmIChpc05vaXNlVmFsdWUpIHJldHVybiB2YWx1ZS5zbGljZSgwLCAtMSk7XG5cbiAgaWYgKHR5cGVvZiB1c2VyUmV2aXZlciAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdmFsdWU7XG5cbiAgcmV0dXJuIHVzZXJSZXZpdmVyKGtleSwgdmFsdWUsIGNvbnRleHQpO1xufTtcblxuLyoqXG4gKiBGYXN0IEpTT04ucGFyc2UgaW1wbGVtZW50YXRpb24gKH4yeCBmYXN0ZXIgdGhhbiBjbGFzc2ljIGZhbGxiYWNrKS5cbiAqIFVzZXMgSlNPTi5wYXJzZSdzIGNvbnRleHQuc291cmNlIGZlYXR1cmUgdG8gZGV0ZWN0IGludGVnZXJzIGFuZCBjb252ZXJ0XG4gKiBsYXJnZSBudW1iZXJzIGRpcmVjdGx5IHRvIEJpZ0ludCB3aXRob3V0IHN0cmluZyBtYW5pcHVsYXRpb24uXG4gKlxuICogRG9lcyBub3Qgc3VwcG9ydCBsZWdhY3kgY3VzdG9tIGZvcm1hdCBmcm9tIHYxIG9mIHRoaXMgbGlicmFyeS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBKU09OIHN0cmluZyB0byBwYXJzZS5cbiAqIEBwYXJhbSB7UmV2aXZlcn0gW3Jldml2ZXJdIFRyYW5zZm9ybSBmdW5jdGlvbiB0byBhcHBseSB0byBlYWNoIHZhbHVlLlxuICogQHJldHVybnMge2FueX0gUGFyc2VkIEphdmFTY3JpcHQgdmFsdWUuXG4gKi9cbmNvbnN0IEpTT05QYXJzZVYyID0gKHRleHQsIHJldml2ZXIpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UodGV4dCwgKGtleSwgdmFsdWUsIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBpc0JpZ051bWJlciA9XG4gICAgICB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICh2YWx1ZSA+IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IHZhbHVlIDwgTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIpO1xuICAgIGNvbnN0IGlzSW50ID0gY29udGV4dCAmJiBpbnRSZWdleC50ZXN0KGNvbnRleHQuc291cmNlKTtcbiAgICBjb25zdCBpc0JpZ0ludCA9IGlzQmlnTnVtYmVyICYmIGlzSW50O1xuXG4gICAgaWYgKGlzQmlnSW50KSByZXR1cm4gQmlnSW50KGNvbnRleHQuc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgcmV2aXZlciAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdmFsdWU7XG5cbiAgICByZXR1cm4gcmV2aXZlcihrZXksIHZhbHVlLCBjb250ZXh0KTtcbiAgfSk7XG59O1xuXG5jb25zdCBNQVhfSU5UID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIudG9TdHJpbmcoKTtcbmNvbnN0IE1BWF9ESUdJVFMgPSBNQVhfSU5ULmxlbmd0aDtcbmNvbnN0IHN0cmluZ3NPckxhcmdlTnVtYmVycyA9XG4gIC9cIig/OlxcXFwufFteXCJdKSpcInwtPygwfFsxLTldWzAtOV0qKShcXC5bMC05XSspPyhbZUVdWystXT9bMC05XSspPy9nO1xuY29uc3Qgbm9pc2VWYWx1ZVdpdGhRdW90ZXMgPSAvXlwiLT9cXGQrbitcIiQvOyAvLyBOb2lzZSAtIHN0cmluZ3MgdGhhdCBtYXRjaCB0aGUgY3VzdG9tIGZvcm1hdCBiZWZvcmUgYmVpbmcgY29udmVydGVkIHRvIGl0XG5cbi8qKlxuICogQ29udmVydHMgYSBKU09OIHN0cmluZyBpbnRvIGEgSmF2YVNjcmlwdCB2YWx1ZS5cbiAqXG4gKiBTdXBwb3J0cyBwYXJzaW5nIG9mIGxhcmdlIGludGVnZXJzIHVzaW5nIHR3byBzdHJhdGVnaWVzOlxuICogMS4gQ2xhc3NpYyBmYWxsYmFjazogTWFya3MgbGFyZ2UgbnVtYmVycyB3aXRoIFwiMTIzblwiIGZvcm1hdCwgdGhlbiBjb252ZXJ0cyB0byBCaWdJbnRcbiAqIDIuIEZhc3QgcGF0aCAoSlNPTlBhcnNlVjIpOiBVc2VzIGNvbnRleHQuc291cmNlIGZlYXR1cmUgKH4yeCBmYXN0ZXIpIHdoZW4gYXZhaWxhYmxlXG4gKlxuICogQWxsIG90aGVyIEpTT04gdmFsdWVzIGFyZSBwYXJzZWQgZXhhY3RseSBsaWtlIG5hdGl2ZSBKU09OLnBhcnNlKCkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgQSB2YWxpZCBKU09OIHN0cmluZy5cbiAqIEBwYXJhbSB7UmV2aXZlcn0gW3Jldml2ZXJdXG4gKiAgIEEgZnVuY3Rpb24gdGhhdCB0cmFuc2Zvcm1zIHRoZSByZXN1bHRzLiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBmb3IgZWFjaCBtZW1iZXJcbiAqICAgb2YgdGhlIG9iamVjdC4gSWYgYSBtZW1iZXIgY29udGFpbnMgbmVzdGVkIG9iamVjdHMsIHRoZSBuZXN0ZWQgb2JqZWN0cyBhcmVcbiAqICAgdHJhbnNmb3JtZWQgYmVmb3JlIHRoZSBwYXJlbnQgb2JqZWN0IGlzLlxuICogQHJldHVybnMge2FueX0gVGhlIHBhcnNlZCBKYXZhU2NyaXB0IHZhbHVlLlxuICogQHRocm93cyB7U3ludGF4RXJyb3J9IElmIHRleHQgaXMgbm90IHZhbGlkIEpTT04uXG4gKi9cbmNvbnN0IEpTT05QYXJzZSA9ICh0ZXh0LCByZXZpdmVyKSA9PiB7XG4gIGlmICghdGV4dCkgcmV0dXJuIG9yaWdpbmFsUGFyc2UodGV4dCwgcmV2aXZlcik7XG5cbiAgaWYgKGlzQ29udGV4dFNvdXJjZVN1cHBvcnRlZCgpKSByZXR1cm4gSlNPTlBhcnNlVjIodGV4dCwgcmV2aXZlcik7IC8vIFNob3J0Y3V0IHRvIGEgZmFzdGVyICgyeCkgYW5kIHNpbXBsZXIgdmVyc2lvblxuXG4gIC8vIEZpbmQgYW5kIG1hcmsgYmlnIG51bWJlcnMgd2l0aCBcIm5cIlxuICBjb25zdCBzZXJpYWxpemVkRGF0YSA9IHRleHQucmVwbGFjZShcbiAgICBzdHJpbmdzT3JMYXJnZU51bWJlcnMsXG4gICAgKHRleHQsIGRpZ2l0cywgZnJhY3Rpb25hbCwgZXhwb25lbnRpYWwpID0+IHtcbiAgICAgIGNvbnN0IGlzU3RyaW5nID0gdGV4dFswXSA9PT0gJ1wiJztcbiAgICAgIGNvbnN0IGlzTm9pc2UgPSBpc1N0cmluZyAmJiBub2lzZVZhbHVlV2l0aFF1b3Rlcy50ZXN0KHRleHQpO1xuXG4gICAgICBpZiAoaXNOb2lzZSkgcmV0dXJuIHRleHQuc3Vic3RyaW5nKDAsIHRleHQubGVuZ3RoIC0gMSkgKyAnblwiJzsgLy8gTWFyayBub2lzZSB2YWx1ZXMgd2l0aCBhZGRpdGlvbmFsIFwiblwiIHRvIG9mZnNldCB0aGUgZGVsZXRpb24gb2Ygb25lIFwiblwiIGR1cmluZyB0aGUgcHJvY2Vzc2luZ1xuXG4gICAgICBjb25zdCBpc0ZyYWN0aW9uYWxPckV4cG9uZW50aWFsID0gZnJhY3Rpb25hbCB8fCBleHBvbmVudGlhbDtcbiAgICAgIGNvbnN0IGlzTGVzc1RoYW5NYXhTYWZlSW50ID1cbiAgICAgICAgZGlnaXRzICYmXG4gICAgICAgIChkaWdpdHMubGVuZ3RoIDwgTUFYX0RJR0lUUyB8fFxuICAgICAgICAgIChkaWdpdHMubGVuZ3RoID09PSBNQVhfRElHSVRTICYmIGRpZ2l0cyA8PSBNQVhfSU5UKSk7IC8vIFdpdGggYSBmaXhlZCBudW1iZXIgb2YgZGlnaXRzLCB3ZSBjYW4gY29ycmVjdGx5IHVzZSBsZXhpY29ncmFwaGljYWwgY29tcGFyaXNvbiB0byBkbyBhIG51bWVyaWMgY29tcGFyaXNvblxuXG4gICAgICBpZiAoaXNTdHJpbmcgfHwgaXNGcmFjdGlvbmFsT3JFeHBvbmVudGlhbCB8fCBpc0xlc3NUaGFuTWF4U2FmZUludClcbiAgICAgICAgcmV0dXJuIHRleHQ7XG5cbiAgICAgIHJldHVybiAnXCInICsgdGV4dCArICduXCInO1xuICAgIH0sXG4gICk7XG5cbiAgcmV0dXJuIG9yaWdpbmFsUGFyc2Uoc2VyaWFsaXplZERhdGEsIChrZXksIHZhbHVlLCBjb250ZXh0KSA9PlxuICAgIGNvbnZlcnRNYXJrZWRCaWdJbnRzUmV2aXZlcihrZXksIHZhbHVlLCBjb250ZXh0LCByZXZpdmVyKSxcbiAgKTtcbn07XG5cbmV4cG9ydCB7IEpTT05TdHJpbmdpZnksIEpTT05QYXJzZSB9O1xuIiwgImNsYXNzIFJlcXVlc3RFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgbmFtZTtcbiAgLyoqXG4gICAqIGh0dHAgc3RhdHVzIGNvZGVcbiAgICovXG4gIHN0YXR1cztcbiAgLyoqXG4gICAqIFJlcXVlc3Qgb3B0aW9ucyB0aGF0IGxlYWQgdG8gdGhlIGVycm9yLlxuICAgKi9cbiAgcmVxdWVzdDtcbiAgLyoqXG4gICAqIFJlc3BvbnNlIG9iamVjdCBpZiBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxuICAgKi9cbiAgcmVzcG9uc2U7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHN0YXR1c0NvZGUsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihtZXNzYWdlLCB7IGNhdXNlOiBvcHRpb25zLmNhdXNlIH0pO1xuICAgIHRoaXMubmFtZSA9IFwiSHR0cEVycm9yXCI7XG4gICAgdGhpcy5zdGF0dXMgPSBOdW1iZXIucGFyc2VJbnQoc3RhdHVzQ29kZSk7XG4gICAgaWYgKE51bWJlci5pc05hTih0aGlzLnN0YXR1cykpIHtcbiAgICAgIHRoaXMuc3RhdHVzID0gMDtcbiAgICB9XG4gICAgLyogdjggaWdub3JlIGVsc2UgLS0gQHByZXNlcnZlIC0tIEJ1ZyB3aXRoIHZpdGVzdCBjb3ZlcmFnZSB3aGVyZSBpdCBzZWVzIGFuIGVsc2UgYnJhbmNoIHRoYXQgZG9lc24ndCBleGlzdCAqL1xuICAgIGlmIChcInJlc3BvbnNlXCIgaW4gb3B0aW9ucykge1xuICAgICAgdGhpcy5yZXNwb25zZSA9IG9wdGlvbnMucmVzcG9uc2U7XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3RDb3B5ID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucy5yZXF1ZXN0KTtcbiAgICBpZiAob3B0aW9ucy5yZXF1ZXN0LmhlYWRlcnMuYXV0aG9yaXphdGlvbikge1xuICAgICAgcmVxdWVzdENvcHkuaGVhZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMucmVxdWVzdC5oZWFkZXJzLCB7XG4gICAgICAgIGF1dGhvcml6YXRpb246IG9wdGlvbnMucmVxdWVzdC5oZWFkZXJzLmF1dGhvcml6YXRpb24ucmVwbGFjZShcbiAgICAgICAgICAvKD88ISApIC4qJC8sXG4gICAgICAgICAgXCIgW1JFREFDVEVEXVwiXG4gICAgICAgIClcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXF1ZXN0Q29weS51cmwgPSByZXF1ZXN0Q29weS51cmwucmVwbGFjZSgvXFxiY2xpZW50X3NlY3JldD1cXHcrL2csIFwiY2xpZW50X3NlY3JldD1bUkVEQUNURURdXCIpLnJlcGxhY2UoL1xcYmFjY2Vzc190b2tlbj1cXHcrL2csIFwiYWNjZXNzX3Rva2VuPVtSRURBQ1RFRF1cIik7XG4gICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdENvcHk7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIFJlcXVlc3RFcnJvclxufTtcbiIsICIvLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdFwiO1xuaW1wb3J0IHsgZ2V0VXNlckFnZW50IH0gZnJvbSBcInVuaXZlcnNhbC11c2VyLWFnZW50XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy92ZXJzaW9uLmpzXG52YXIgVkVSU0lPTiA9IFwiMC4wLjAtZGV2ZWxvcG1lbnRcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL3dpdGgtZGVmYXVsdHMuanNcbmltcG9ydCB7IHJlcXVlc3QgYXMgUmVxdWVzdDIgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvZ3JhcGhxbC5qc1xuaW1wb3J0IHsgcmVxdWVzdCBhcyBSZXF1ZXN0IH0gZnJvbSBcIkBvY3Rva2l0L3JlcXVlc3RcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL2Vycm9yLmpzXG5mdW5jdGlvbiBfYnVpbGRNZXNzYWdlRm9yUmVzcG9uc2VFcnJvcnMoZGF0YSkge1xuICByZXR1cm4gYFJlcXVlc3QgZmFpbGVkIGR1ZSB0byBmb2xsb3dpbmcgcmVzcG9uc2UgZXJyb3JzOlxuYCArIGRhdGEuZXJyb3JzLm1hcCgoZSkgPT4gYCAtICR7ZS5tZXNzYWdlfWApLmpvaW4oXCJcXG5cIik7XG59XG52YXIgR3JhcGhxbFJlc3BvbnNlRXJyb3IgPSBjbGFzcyBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IocmVxdWVzdDIsIGhlYWRlcnMsIHJlc3BvbnNlKSB7XG4gICAgc3VwZXIoX2J1aWxkTWVzc2FnZUZvclJlc3BvbnNlRXJyb3JzKHJlc3BvbnNlKSk7XG4gICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdDI7XG4gICAgdGhpcy5oZWFkZXJzID0gaGVhZGVycztcbiAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgdGhpcy5lcnJvcnMgPSByZXNwb25zZS5lcnJvcnM7XG4gICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgIH1cbiAgfVxuICBuYW1lID0gXCJHcmFwaHFsUmVzcG9uc2VFcnJvclwiO1xuICBlcnJvcnM7XG4gIGRhdGE7XG59O1xuXG4vLyBwa2cvZGlzdC1zcmMvZ3JhcGhxbC5qc1xudmFyIE5PTl9WQVJJQUJMRV9PUFRJT05TID0gW1xuICBcIm1ldGhvZFwiLFxuICBcImJhc2VVcmxcIixcbiAgXCJ1cmxcIixcbiAgXCJoZWFkZXJzXCIsXG4gIFwicmVxdWVzdFwiLFxuICBcInF1ZXJ5XCIsXG4gIFwibWVkaWFUeXBlXCIsXG4gIFwib3BlcmF0aW9uTmFtZVwiXG5dO1xudmFyIEZPUkJJRERFTl9WQVJJQUJMRV9PUFRJT05TID0gW1wicXVlcnlcIiwgXCJtZXRob2RcIiwgXCJ1cmxcIl07XG52YXIgR0hFU19WM19TVUZGSVhfUkVHRVggPSAvXFwvYXBpXFwvdjNcXC8/JC87XG5mdW5jdGlvbiBncmFwaHFsKHJlcXVlc3QyLCBxdWVyeSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgcXVlcnkgPT09IFwic3RyaW5nXCIgJiYgXCJxdWVyeVwiIGluIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgbmV3IEVycm9yKGBbQG9jdG9raXQvZ3JhcGhxbF0gXCJxdWVyeVwiIGNhbm5vdCBiZSB1c2VkIGFzIHZhcmlhYmxlIG5hbWVgKVxuICAgICAgKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xuICAgICAgaWYgKCFGT1JCSURERU5fVkFSSUFCTEVfT1BUSU9OUy5pbmNsdWRlcyhrZXkpKSBjb250aW51ZTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgIGBbQG9jdG9raXQvZ3JhcGhxbF0gXCIke2tleX1cIiBjYW5ub3QgYmUgdXNlZCBhcyB2YXJpYWJsZSBuYW1lYFxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBjb25zdCBwYXJzZWRPcHRpb25zID0gdHlwZW9mIHF1ZXJ5ID09PSBcInN0cmluZ1wiID8gT2JqZWN0LmFzc2lnbih7IHF1ZXJ5IH0sIG9wdGlvbnMpIDogcXVlcnk7XG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0gT2JqZWN0LmtleXMoXG4gICAgcGFyc2VkT3B0aW9uc1xuICApLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICBpZiAoTk9OX1ZBUklBQkxFX09QVElPTlMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBwYXJzZWRPcHRpb25zW2tleV07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBpZiAoIXJlc3VsdC52YXJpYWJsZXMpIHtcbiAgICAgIHJlc3VsdC52YXJpYWJsZXMgPSB7fTtcbiAgICB9XG4gICAgcmVzdWx0LnZhcmlhYmxlc1trZXldID0gcGFyc2VkT3B0aW9uc1trZXldO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIHt9KTtcbiAgY29uc3QgYmFzZVVybCA9IHBhcnNlZE9wdGlvbnMuYmFzZVVybCB8fCByZXF1ZXN0Mi5lbmRwb2ludC5ERUZBVUxUUy5iYXNlVXJsO1xuICBpZiAoR0hFU19WM19TVUZGSVhfUkVHRVgudGVzdChiYXNlVXJsKSkge1xuICAgIHJlcXVlc3RPcHRpb25zLnVybCA9IGJhc2VVcmwucmVwbGFjZShHSEVTX1YzX1NVRkZJWF9SRUdFWCwgXCIvYXBpL2dyYXBocWxcIik7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3QyKHJlcXVlc3RPcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9ycykge1xuICAgICAgY29uc3QgaGVhZGVycyA9IHt9O1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocmVzcG9uc2UuaGVhZGVycykpIHtcbiAgICAgICAgaGVhZGVyc1trZXldID0gcmVzcG9uc2UuaGVhZGVyc1trZXldO1xuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEdyYXBocWxSZXNwb25zZUVycm9yKFxuICAgICAgICByZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgcmVzcG9uc2UuZGF0YVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgfSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy93aXRoLWRlZmF1bHRzLmpzXG5mdW5jdGlvbiB3aXRoRGVmYXVsdHMocmVxdWVzdDIsIG5ld0RlZmF1bHRzKSB7XG4gIGNvbnN0IG5ld1JlcXVlc3QgPSByZXF1ZXN0Mi5kZWZhdWx0cyhuZXdEZWZhdWx0cyk7XG4gIGNvbnN0IG5ld0FwaSA9IChxdWVyeSwgb3B0aW9ucykgPT4ge1xuICAgIHJldHVybiBncmFwaHFsKG5ld1JlcXVlc3QsIHF1ZXJ5LCBvcHRpb25zKTtcbiAgfTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3QXBpLCB7XG4gICAgZGVmYXVsdHM6IHdpdGhEZWZhdWx0cy5iaW5kKG51bGwsIG5ld1JlcXVlc3QpLFxuICAgIGVuZHBvaW50OiBuZXdSZXF1ZXN0LmVuZHBvaW50XG4gIH0pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbnZhciBncmFwaHFsMiA9IHdpdGhEZWZhdWx0cyhyZXF1ZXN0LCB7XG4gIGhlYWRlcnM6IHtcbiAgICBcInVzZXItYWdlbnRcIjogYG9jdG9raXQtZ3JhcGhxbC5qcy8ke1ZFUlNJT059ICR7Z2V0VXNlckFnZW50KCl9YFxuICB9LFxuICBtZXRob2Q6IFwiUE9TVFwiLFxuICB1cmw6IFwiL2dyYXBocWxcIlxufSk7XG5mdW5jdGlvbiB3aXRoQ3VzdG9tUmVxdWVzdChjdXN0b21SZXF1ZXN0KSB7XG4gIHJldHVybiB3aXRoRGVmYXVsdHMoY3VzdG9tUmVxdWVzdCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgdXJsOiBcIi9ncmFwaHFsXCJcbiAgfSk7XG59XG5leHBvcnQge1xuICBHcmFwaHFsUmVzcG9uc2VFcnJvcixcbiAgZ3JhcGhxbDIgYXMgZ3JhcGhxbCxcbiAgd2l0aEN1c3RvbVJlcXVlc3Rcbn07XG4iLCAiLy8gcGtnL2Rpc3Qtc3JjL2lzLWp3dC5qc1xudmFyIGI2NHVybCA9IFwiKD86W2EtekEtWjAtOV8tXSspXCI7XG52YXIgc2VwID0gXCJcXFxcLlwiO1xudmFyIGp3dFJFID0gbmV3IFJlZ0V4cChgXiR7YjY0dXJsfSR7c2VwfSR7YjY0dXJsfSR7c2VwfSR7YjY0dXJsfSRgKTtcbnZhciBpc0pXVCA9IGp3dFJFLnRlc3QuYmluZChqd3RSRSk7XG5cbi8vIHBrZy9kaXN0LXNyYy9hdXRoLmpzXG5hc3luYyBmdW5jdGlvbiBhdXRoKHRva2VuKSB7XG4gIGNvbnN0IGlzQXBwID0gaXNKV1QodG9rZW4pO1xuICBjb25zdCBpc0luc3RhbGxhdGlvbiA9IHRva2VuLnN0YXJ0c1dpdGgoXCJ2MS5cIikgfHwgdG9rZW4uc3RhcnRzV2l0aChcImdoc19cIik7XG4gIGNvbnN0IGlzVXNlclRvU2VydmVyID0gdG9rZW4uc3RhcnRzV2l0aChcImdodV9cIik7XG4gIGNvbnN0IHRva2VuVHlwZSA9IGlzQXBwID8gXCJhcHBcIiA6IGlzSW5zdGFsbGF0aW9uID8gXCJpbnN0YWxsYXRpb25cIiA6IGlzVXNlclRvU2VydmVyID8gXCJ1c2VyLXRvLXNlcnZlclwiIDogXCJvYXV0aFwiO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFwidG9rZW5cIixcbiAgICB0b2tlbixcbiAgICB0b2tlblR5cGVcbiAgfTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3dpdGgtYXV0aG9yaXphdGlvbi1wcmVmaXguanNcbmZ1bmN0aW9uIHdpdGhBdXRob3JpemF0aW9uUHJlZml4KHRva2VuKSB7XG4gIGlmICh0b2tlbi5zcGxpdCgvXFwuLykubGVuZ3RoID09PSAzKSB7XG4gICAgcmV0dXJuIGBiZWFyZXIgJHt0b2tlbn1gO1xuICB9XG4gIHJldHVybiBgdG9rZW4gJHt0b2tlbn1gO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaG9vay5qc1xuYXN5bmMgZnVuY3Rpb24gaG9vayh0b2tlbiwgcmVxdWVzdCwgcm91dGUsIHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgZW5kcG9pbnQgPSByZXF1ZXN0LmVuZHBvaW50Lm1lcmdlKFxuICAgIHJvdXRlLFxuICAgIHBhcmFtZXRlcnNcbiAgKTtcbiAgZW5kcG9pbnQuaGVhZGVycy5hdXRob3JpemF0aW9uID0gd2l0aEF1dGhvcml6YXRpb25QcmVmaXgodG9rZW4pO1xuICByZXR1cm4gcmVxdWVzdChlbmRwb2ludCk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9pbmRleC5qc1xudmFyIGNyZWF0ZVRva2VuQXV0aCA9IGZ1bmN0aW9uIGNyZWF0ZVRva2VuQXV0aDIodG9rZW4pIHtcbiAgaWYgKCF0b2tlbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIltAb2N0b2tpdC9hdXRoLXRva2VuXSBObyB0b2tlbiBwYXNzZWQgdG8gY3JlYXRlVG9rZW5BdXRoXCIpO1xuICB9XG4gIGlmICh0eXBlb2YgdG9rZW4gIT09IFwic3RyaW5nXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIltAb2N0b2tpdC9hdXRoLXRva2VuXSBUb2tlbiBwYXNzZWQgdG8gY3JlYXRlVG9rZW5BdXRoIGlzIG5vdCBhIHN0cmluZ1wiXG4gICAgKTtcbiAgfVxuICB0b2tlbiA9IHRva2VuLnJlcGxhY2UoL14odG9rZW58YmVhcmVyKSArL2ksIFwiXCIpO1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihhdXRoLmJpbmQobnVsbCwgdG9rZW4pLCB7XG4gICAgaG9vazogaG9vay5iaW5kKG51bGwsIHRva2VuKVxuICB9KTtcbn07XG5leHBvcnQge1xuICBjcmVhdGVUb2tlbkF1dGhcbn07XG4iLCAiY29uc3QgVkVSU0lPTiA9IFwiNy4wLjZcIjtcbmV4cG9ydCB7XG4gIFZFUlNJT05cbn07XG4iLCAiaW1wb3J0IHsgZ2V0VXNlckFnZW50IH0gZnJvbSBcInVuaXZlcnNhbC11c2VyLWFnZW50XCI7XG5pbXBvcnQgSG9vayBmcm9tIFwiYmVmb3JlLWFmdGVyLWhvb2tcIjtcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdFwiO1xuaW1wb3J0IHsgd2l0aEN1c3RvbVJlcXVlc3QgfSBmcm9tIFwiQG9jdG9raXQvZ3JhcGhxbFwiO1xuaW1wb3J0IHsgY3JlYXRlVG9rZW5BdXRoIH0gZnJvbSBcIkBvY3Rva2l0L2F1dGgtdG9rZW5cIjtcbmltcG9ydCB7IFZFUlNJT04gfSBmcm9tIFwiLi92ZXJzaW9uLmpzXCI7XG5jb25zdCBub29wID0gKCkgPT4ge1xufTtcbmNvbnN0IGNvbnNvbGVXYXJuID0gY29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7XG5jb25zdCBjb25zb2xlRXJyb3IgPSBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSk7XG5mdW5jdGlvbiBjcmVhdGVMb2dnZXIobG9nZ2VyID0ge30pIHtcbiAgaWYgKHR5cGVvZiBsb2dnZXIuZGVidWcgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIGxvZ2dlci5kZWJ1ZyA9IG5vb3A7XG4gIH1cbiAgaWYgKHR5cGVvZiBsb2dnZXIuaW5mbyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgbG9nZ2VyLmluZm8gPSBub29wO1xuICB9XG4gIGlmICh0eXBlb2YgbG9nZ2VyLndhcm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIGxvZ2dlci53YXJuID0gY29uc29sZVdhcm47XG4gIH1cbiAgaWYgKHR5cGVvZiBsb2dnZXIuZXJyb3IgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIGxvZ2dlci5lcnJvciA9IGNvbnNvbGVFcnJvcjtcbiAgfVxuICByZXR1cm4gbG9nZ2VyO1xufVxuY29uc3QgdXNlckFnZW50VHJhaWwgPSBgb2N0b2tpdC1jb3JlLmpzLyR7VkVSU0lPTn0gJHtnZXRVc2VyQWdlbnQoKX1gO1xuY2xhc3MgT2N0b2tpdCB7XG4gIHN0YXRpYyBWRVJTSU9OID0gVkVSU0lPTjtcbiAgc3RhdGljIGRlZmF1bHRzKGRlZmF1bHRzKSB7XG4gICAgY29uc3QgT2N0b2tpdFdpdGhEZWZhdWx0cyA9IGNsYXNzIGV4dGVuZHMgdGhpcyB7XG4gICAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBhcmdzWzBdIHx8IHt9O1xuICAgICAgICBpZiAodHlwZW9mIGRlZmF1bHRzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBzdXBlcihkZWZhdWx0cyhvcHRpb25zKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIGRlZmF1bHRzLFxuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnMudXNlckFnZW50ICYmIGRlZmF1bHRzLnVzZXJBZ2VudCA/IHtcbiAgICAgICAgICAgICAgdXNlckFnZW50OiBgJHtvcHRpb25zLnVzZXJBZ2VudH0gJHtkZWZhdWx0cy51c2VyQWdlbnR9YFxuICAgICAgICAgICAgfSA6IG51bGxcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gT2N0b2tpdFdpdGhEZWZhdWx0cztcbiAgfVxuICBzdGF0aWMgcGx1Z2lucyA9IFtdO1xuICAvKipcbiAgICogQXR0YWNoIGEgcGx1Z2luIChvciBtYW55KSB0byB5b3VyIE9jdG9raXQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGNvbnN0IEFQSSA9IE9jdG9raXQucGx1Z2luKHBsdWdpbjEsIHBsdWdpbjIsIHBsdWdpbjMsIC4uLilcbiAgICovXG4gIHN0YXRpYyBwbHVnaW4oLi4ubmV3UGx1Z2lucykge1xuICAgIGNvbnN0IGN1cnJlbnRQbHVnaW5zID0gdGhpcy5wbHVnaW5zO1xuICAgIGNvbnN0IE5ld09jdG9raXQgPSBjbGFzcyBleHRlbmRzIHRoaXMge1xuICAgICAgc3RhdGljIHBsdWdpbnMgPSBjdXJyZW50UGx1Z2lucy5jb25jYXQoXG4gICAgICAgIG5ld1BsdWdpbnMuZmlsdGVyKChwbHVnaW4pID0+ICFjdXJyZW50UGx1Z2lucy5pbmNsdWRlcyhwbHVnaW4pKVxuICAgICAgKTtcbiAgICB9O1xuICAgIHJldHVybiBOZXdPY3Rva2l0O1xuICB9XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGhvb2sgPSBuZXcgSG9vay5Db2xsZWN0aW9uKCk7XG4gICAgY29uc3QgcmVxdWVzdERlZmF1bHRzID0ge1xuICAgICAgYmFzZVVybDogcmVxdWVzdC5lbmRwb2ludC5ERUZBVUxUUy5iYXNlVXJsLFxuICAgICAgaGVhZGVyczoge30sXG4gICAgICByZXF1ZXN0OiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLnJlcXVlc3QsIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBpbnRlcm5hbCB1c2FnZSBvbmx5LCBubyBuZWVkIHRvIHR5cGVcbiAgICAgICAgaG9vazogaG9vay5iaW5kKG51bGwsIFwicmVxdWVzdFwiKVxuICAgICAgfSksXG4gICAgICBtZWRpYVR5cGU6IHtcbiAgICAgICAgcHJldmlld3M6IFtdLFxuICAgICAgICBmb3JtYXQ6IFwiXCJcbiAgICAgIH1cbiAgICB9O1xuICAgIHJlcXVlc3REZWZhdWx0cy5oZWFkZXJzW1widXNlci1hZ2VudFwiXSA9IG9wdGlvbnMudXNlckFnZW50ID8gYCR7b3B0aW9ucy51c2VyQWdlbnR9ICR7dXNlckFnZW50VHJhaWx9YCA6IHVzZXJBZ2VudFRyYWlsO1xuICAgIGlmIChvcHRpb25zLmJhc2VVcmwpIHtcbiAgICAgIHJlcXVlc3REZWZhdWx0cy5iYXNlVXJsID0gb3B0aW9ucy5iYXNlVXJsO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5wcmV2aWV3cykge1xuICAgICAgcmVxdWVzdERlZmF1bHRzLm1lZGlhVHlwZS5wcmV2aWV3cyA9IG9wdGlvbnMucHJldmlld3M7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRpbWVab25lKSB7XG4gICAgICByZXF1ZXN0RGVmYXVsdHMuaGVhZGVyc1tcInRpbWUtem9uZVwiXSA9IG9wdGlvbnMudGltZVpvbmU7XG4gICAgfVxuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3QuZGVmYXVsdHMocmVxdWVzdERlZmF1bHRzKTtcbiAgICB0aGlzLmdyYXBocWwgPSB3aXRoQ3VzdG9tUmVxdWVzdCh0aGlzLnJlcXVlc3QpLmRlZmF1bHRzKHJlcXVlc3REZWZhdWx0cyk7XG4gICAgdGhpcy5sb2cgPSBjcmVhdGVMb2dnZXIob3B0aW9ucy5sb2cpO1xuICAgIHRoaXMuaG9vayA9IGhvb2s7XG4gICAgaWYgKCFvcHRpb25zLmF1dGhTdHJhdGVneSkge1xuICAgICAgaWYgKCFvcHRpb25zLmF1dGgpIHtcbiAgICAgICAgdGhpcy5hdXRoID0gYXN5bmMgKCkgPT4gKHtcbiAgICAgICAgICB0eXBlOiBcInVuYXV0aGVudGljYXRlZFwiXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXV0aCA9IGNyZWF0ZVRva2VuQXV0aChvcHRpb25zLmF1dGgpO1xuICAgICAgICBob29rLndyYXAoXCJyZXF1ZXN0XCIsIGF1dGguaG9vayk7XG4gICAgICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgYXV0aFN0cmF0ZWd5LCAuLi5vdGhlck9wdGlvbnMgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCBhdXRoID0gYXV0aFN0cmF0ZWd5KFxuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVlc3Q6IHRoaXMucmVxdWVzdCxcbiAgICAgICAgICAgIGxvZzogdGhpcy5sb2csXG4gICAgICAgICAgICAvLyB3ZSBwYXNzIHRoZSBjdXJyZW50IG9jdG9raXQgaW5zdGFuY2UgYXMgd2VsbCBhcyBpdHMgY29uc3RydWN0b3Igb3B0aW9uc1xuICAgICAgICAgICAgLy8gdG8gYWxsb3cgZm9yIGF1dGhlbnRpY2F0aW9uIHN0cmF0ZWdpZXMgdGhhdCByZXR1cm4gYSBuZXcgb2N0b2tpdCBpbnN0YW5jZVxuICAgICAgICAgICAgLy8gdGhhdCBzaGFyZXMgdGhlIHNhbWUgaW50ZXJuYWwgc3RhdGUgYXMgdGhlIGN1cnJlbnQgb25lLiBUaGUgb3JpZ2luYWxcbiAgICAgICAgICAgIC8vIHJlcXVpcmVtZW50IGZvciB0aGlzIHdhcyB0aGUgXCJldmVudC1vY3Rva2l0XCIgYXV0aGVudGljYXRpb24gc3RyYXRlZ3lcbiAgICAgICAgICAgIC8vIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9ib3Qvb2N0b2tpdC1hdXRoLXByb2JvdC5cbiAgICAgICAgICAgIG9jdG9raXQ6IHRoaXMsXG4gICAgICAgICAgICBvY3Rva2l0T3B0aW9uczogb3RoZXJPcHRpb25zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcHRpb25zLmF1dGhcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIGhvb2sud3JhcChcInJlcXVlc3RcIiwgYXV0aC5ob29rKTtcbiAgICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgfVxuICAgIGNvbnN0IGNsYXNzQ29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NDb25zdHJ1Y3Rvci5wbHVnaW5zLmxlbmd0aDsgKytpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNsYXNzQ29uc3RydWN0b3IucGx1Z2luc1tpXSh0aGlzLCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG4gIC8vIGFzc2lnbmVkIGR1cmluZyBjb25zdHJ1Y3RvclxuICByZXF1ZXN0O1xuICBncmFwaHFsO1xuICBsb2c7XG4gIGhvb2s7XG4gIC8vIFRPRE86IHR5cGUgYG9jdG9raXQuYXV0aGAgYmFzZWQgb24gcGFzc2VkIG9wdGlvbnMuYXV0aFN0cmF0ZWd5XG4gIGF1dGg7XG59XG5leHBvcnQge1xuICBPY3Rva2l0XG59O1xuIiwgImNvbnN0IFZFUlNJT04gPSBcIjYuMC4wXCI7XG5leHBvcnQge1xuICBWRVJTSU9OXG59O1xuIiwgImltcG9ydCB7IFZFUlNJT04gfSBmcm9tIFwiLi92ZXJzaW9uLmpzXCI7XG5mdW5jdGlvbiByZXF1ZXN0TG9nKG9jdG9raXQpIHtcbiAgb2N0b2tpdC5ob29rLndyYXAoXCJyZXF1ZXN0XCIsIChyZXF1ZXN0LCBvcHRpb25zKSA9PiB7XG4gICAgb2N0b2tpdC5sb2cuZGVidWcoXCJyZXF1ZXN0XCIsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IG9jdG9raXQucmVxdWVzdC5lbmRwb2ludC5wYXJzZShvcHRpb25zKTtcbiAgICBjb25zdCBwYXRoID0gcmVxdWVzdE9wdGlvbnMudXJsLnJlcGxhY2Uob3B0aW9ucy5iYXNlVXJsLCBcIlwiKTtcbiAgICByZXR1cm4gcmVxdWVzdChvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdElkID0gcmVzcG9uc2UuaGVhZGVyc1tcIngtZ2l0aHViLXJlcXVlc3QtaWRcIl07XG4gICAgICBvY3Rva2l0LmxvZy5pbmZvKFxuICAgICAgICBgJHtyZXF1ZXN0T3B0aW9ucy5tZXRob2R9ICR7cGF0aH0gLSAke3Jlc3BvbnNlLnN0YXR1c30gd2l0aCBpZCAke3JlcXVlc3RJZH0gaW4gJHtEYXRlLm5vdygpIC0gc3RhcnR9bXNgXG4gICAgICApO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdElkID0gZXJyb3IucmVzcG9uc2U/LmhlYWRlcnNbXCJ4LWdpdGh1Yi1yZXF1ZXN0LWlkXCJdIHx8IFwiVU5LTk9XTlwiO1xuICAgICAgb2N0b2tpdC5sb2cuZXJyb3IoXG4gICAgICAgIGAke3JlcXVlc3RPcHRpb25zLm1ldGhvZH0gJHtwYXRofSAtICR7ZXJyb3Iuc3RhdHVzfSB3aXRoIGlkICR7cmVxdWVzdElkfSBpbiAke0RhdGUubm93KCkgLSBzdGFydH1tc2BcbiAgICAgICk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9KTtcbiAgfSk7XG59XG5yZXF1ZXN0TG9nLlZFUlNJT04gPSBWRVJTSU9OO1xuZXhwb3J0IHtcbiAgcmVxdWVzdExvZ1xufTtcbiIsICIvLyBwa2cvZGlzdC1zcmMvdmVyc2lvbi5qc1xudmFyIFZFUlNJT04gPSBcIjAuMC4wLWRldmVsb3BtZW50XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9ub3JtYWxpemUtcGFnaW5hdGVkLWxpc3QtcmVzcG9uc2UuanNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhZ2luYXRlZExpc3RSZXNwb25zZShyZXNwb25zZSkge1xuICBpZiAoIXJlc3BvbnNlLmRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVzcG9uc2UsXG4gICAgICBkYXRhOiBbXVxuICAgIH07XG4gIH1cbiAgY29uc3QgcmVzcG9uc2VOZWVkc05vcm1hbGl6YXRpb24gPSAoXCJ0b3RhbF9jb3VudFwiIGluIHJlc3BvbnNlLmRhdGEgfHwgXCJ0b3RhbF9jb21taXRzXCIgaW4gcmVzcG9uc2UuZGF0YSkgJiYgIShcInVybFwiIGluIHJlc3BvbnNlLmRhdGEpO1xuICBpZiAoIXJlc3BvbnNlTmVlZHNOb3JtYWxpemF0aW9uKSByZXR1cm4gcmVzcG9uc2U7XG4gIGNvbnN0IGluY29tcGxldGVSZXN1bHRzID0gcmVzcG9uc2UuZGF0YS5pbmNvbXBsZXRlX3Jlc3VsdHM7XG4gIGNvbnN0IHJlcG9zaXRvcnlTZWxlY3Rpb24gPSByZXNwb25zZS5kYXRhLnJlcG9zaXRvcnlfc2VsZWN0aW9uO1xuICBjb25zdCB0b3RhbENvdW50ID0gcmVzcG9uc2UuZGF0YS50b3RhbF9jb3VudDtcbiAgY29uc3QgdG90YWxDb21taXRzID0gcmVzcG9uc2UuZGF0YS50b3RhbF9jb21taXRzO1xuICBkZWxldGUgcmVzcG9uc2UuZGF0YS5pbmNvbXBsZXRlX3Jlc3VsdHM7XG4gIGRlbGV0ZSByZXNwb25zZS5kYXRhLnJlcG9zaXRvcnlfc2VsZWN0aW9uO1xuICBkZWxldGUgcmVzcG9uc2UuZGF0YS50b3RhbF9jb3VudDtcbiAgZGVsZXRlIHJlc3BvbnNlLmRhdGEudG90YWxfY29tbWl0cztcbiAgY29uc3QgbmFtZXNwYWNlS2V5ID0gT2JqZWN0LmtleXMocmVzcG9uc2UuZGF0YSlbMF07XG4gIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhW25hbWVzcGFjZUtleV07XG4gIHJlc3BvbnNlLmRhdGEgPSBkYXRhO1xuICBpZiAodHlwZW9mIGluY29tcGxldGVSZXN1bHRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmVzcG9uc2UuZGF0YS5pbmNvbXBsZXRlX3Jlc3VsdHMgPSBpbmNvbXBsZXRlUmVzdWx0cztcbiAgfVxuICBpZiAodHlwZW9mIHJlcG9zaXRvcnlTZWxlY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXNwb25zZS5kYXRhLnJlcG9zaXRvcnlfc2VsZWN0aW9uID0gcmVwb3NpdG9yeVNlbGVjdGlvbjtcbiAgfVxuICByZXNwb25zZS5kYXRhLnRvdGFsX2NvdW50ID0gdG90YWxDb3VudDtcbiAgcmVzcG9uc2UuZGF0YS50b3RhbF9jb21taXRzID0gdG90YWxDb21taXRzO1xuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9pdGVyYXRvci5qc1xuZnVuY3Rpb24gaXRlcmF0b3Iob2N0b2tpdCwgcm91dGUsIHBhcmFtZXRlcnMpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHR5cGVvZiByb3V0ZSA9PT0gXCJmdW5jdGlvblwiID8gcm91dGUuZW5kcG9pbnQocGFyYW1ldGVycykgOiBvY3Rva2l0LnJlcXVlc3QuZW5kcG9pbnQocm91dGUsIHBhcmFtZXRlcnMpO1xuICBjb25zdCByZXF1ZXN0TWV0aG9kID0gdHlwZW9mIHJvdXRlID09PSBcImZ1bmN0aW9uXCIgPyByb3V0ZSA6IG9jdG9raXQucmVxdWVzdDtcbiAgY29uc3QgbWV0aG9kID0gb3B0aW9ucy5tZXRob2Q7XG4gIGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XG4gIGxldCB1cmwgPSBvcHRpb25zLnVybDtcbiAgcmV0dXJuIHtcbiAgICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdOiAoKSA9PiAoe1xuICAgICAgYXN5bmMgbmV4dCgpIHtcbiAgICAgICAgaWYgKCF1cmwpIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RNZXRob2QoeyBtZXRob2QsIHVybCwgaGVhZGVycyB9KTtcbiAgICAgICAgICBjb25zdCBub3JtYWxpemVkUmVzcG9uc2UgPSBub3JtYWxpemVQYWdpbmF0ZWRMaXN0UmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgIHVybCA9ICgobm9ybWFsaXplZFJlc3BvbnNlLmhlYWRlcnMubGluayB8fCBcIlwiKS5tYXRjaChcbiAgICAgICAgICAgIC88KFtePD5dKyk+O1xccypyZWw9XCJuZXh0XCIvXG4gICAgICAgICAgKSB8fCBbXSlbMV07XG4gICAgICAgICAgaWYgKCF1cmwgJiYgXCJ0b3RhbF9jb21taXRzXCIgaW4gbm9ybWFsaXplZFJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFVybCA9IG5ldyBVUkwobm9ybWFsaXplZFJlc3BvbnNlLnVybCk7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBwYXJzZWRVcmwuc2VhcmNoUGFyYW1zO1xuICAgICAgICAgICAgY29uc3QgcGFnZSA9IHBhcnNlSW50KHBhcmFtcy5nZXQoXCJwYWdlXCIpIHx8IFwiMVwiLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBwZXJfcGFnZSA9IHBhcnNlSW50KHBhcmFtcy5nZXQoXCJwZXJfcGFnZVwiKSB8fCBcIjI1MFwiLCAxMCk7XG4gICAgICAgICAgICBpZiAocGFnZSAqIHBlcl9wYWdlIDwgbm9ybWFsaXplZFJlc3BvbnNlLmRhdGEudG90YWxfY29tbWl0cykge1xuICAgICAgICAgICAgICBwYXJhbXMuc2V0KFwicGFnZVwiLCBTdHJpbmcocGFnZSArIDEpKTtcbiAgICAgICAgICAgICAgdXJsID0gcGFyc2VkVXJsLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBub3JtYWxpemVkUmVzcG9uc2UgfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzICE9PSA0MDkpIHRocm93IGVycm9yO1xuICAgICAgICAgIHVybCA9IFwiXCI7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgICAgZGF0YTogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3BhZ2luYXRlLmpzXG5mdW5jdGlvbiBwYWdpbmF0ZShvY3Rva2l0LCByb3V0ZSwgcGFyYW1ldGVycywgbWFwRm4pIHtcbiAgaWYgKHR5cGVvZiBwYXJhbWV0ZXJzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBtYXBGbiA9IHBhcmFtZXRlcnM7XG4gICAgcGFyYW1ldGVycyA9IHZvaWQgMDtcbiAgfVxuICByZXR1cm4gZ2F0aGVyKFxuICAgIG9jdG9raXQsXG4gICAgW10sXG4gICAgaXRlcmF0b3Iob2N0b2tpdCwgcm91dGUsIHBhcmFtZXRlcnMpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpLFxuICAgIG1hcEZuXG4gICk7XG59XG5mdW5jdGlvbiBnYXRoZXIob2N0b2tpdCwgcmVzdWx0cywgaXRlcmF0b3IyLCBtYXBGbikge1xuICByZXR1cm4gaXRlcmF0b3IyLm5leHQoKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgICBsZXQgZWFybHlFeGl0ID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGVhcmx5RXhpdCA9IHRydWU7XG4gICAgfVxuICAgIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChcbiAgICAgIG1hcEZuID8gbWFwRm4ocmVzdWx0LnZhbHVlLCBkb25lKSA6IHJlc3VsdC52YWx1ZS5kYXRhXG4gICAgKTtcbiAgICBpZiAoZWFybHlFeGl0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gICAgcmV0dXJuIGdhdGhlcihvY3Rva2l0LCByZXN1bHRzLCBpdGVyYXRvcjIsIG1hcEZuKTtcbiAgfSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9jb21wb3NlLXBhZ2luYXRlLmpzXG52YXIgY29tcG9zZVBhZ2luYXRlUmVzdCA9IE9iamVjdC5hc3NpZ24ocGFnaW5hdGUsIHtcbiAgaXRlcmF0b3Jcbn0pO1xuXG4vLyBwa2cvZGlzdC1zcmMvZ2VuZXJhdGVkL3BhZ2luYXRpbmctZW5kcG9pbnRzLmpzXG52YXIgcGFnaW5hdGluZ0VuZHBvaW50cyA9IFtcbiAgXCJHRVQgL2Fkdmlzb3JpZXNcIixcbiAgXCJHRVQgL2FwcC9ob29rL2RlbGl2ZXJpZXNcIixcbiAgXCJHRVQgL2FwcC9pbnN0YWxsYXRpb24tcmVxdWVzdHNcIixcbiAgXCJHRVQgL2FwcC9pbnN0YWxsYXRpb25zXCIsXG4gIFwiR0VUIC9hc3NpZ25tZW50cy97YXNzaWdubWVudF9pZH0vYWNjZXB0ZWRfYXNzaWdubWVudHNcIixcbiAgXCJHRVQgL2NsYXNzcm9vbXNcIixcbiAgXCJHRVQgL2NsYXNzcm9vbXMve2NsYXNzcm9vbV9pZH0vYXNzaWdubWVudHNcIixcbiAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zXCIsXG4gIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vZGVwZW5kYWJvdC9hbGVydHNcIixcbiAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtc1wiLFxuICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L21lbWJlcnNoaXBzXCIsXG4gIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vb3JnYW5pemF0aW9uc1wiLFxuICBcIkdFVCAvZXZlbnRzXCIsXG4gIFwiR0VUIC9naXN0c1wiLFxuICBcIkdFVCAvZ2lzdHMvcHVibGljXCIsXG4gIFwiR0VUIC9naXN0cy9zdGFycmVkXCIsXG4gIFwiR0VUIC9naXN0cy97Z2lzdF9pZH0vY29tbWVudHNcIixcbiAgXCJHRVQgL2dpc3RzL3tnaXN0X2lkfS9jb21taXRzXCIsXG4gIFwiR0VUIC9naXN0cy97Z2lzdF9pZH0vZm9ya3NcIixcbiAgXCJHRVQgL2luc3RhbGxhdGlvbi9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL2lzc3Vlc1wiLFxuICBcIkdFVCAvbGljZW5zZXNcIixcbiAgXCJHRVQgL21hcmtldHBsYWNlX2xpc3RpbmcvcGxhbnNcIixcbiAgXCJHRVQgL21hcmtldHBsYWNlX2xpc3RpbmcvcGxhbnMve3BsYW5faWR9L2FjY291bnRzXCIsXG4gIFwiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3N0dWJiZWQvcGxhbnNcIixcbiAgXCJHRVQgL21hcmtldHBsYWNlX2xpc3Rpbmcvc3R1YmJlZC9wbGFucy97cGxhbl9pZH0vYWNjb3VudHNcIixcbiAgXCJHRVQgL25ldHdvcmtzL3tvd25lcn0ve3JlcG99L2V2ZW50c1wiLFxuICBcIkdFVCAvbm90aWZpY2F0aW9uc1wiLFxuICBcIkdFVCAvb3JnYW5pemF0aW9uc1wiLFxuICBcIkdFVCAvb3JnYW5pemF0aW9ucy97b3JnfS9kZXBlbmRhYm90L3JlcG9zaXRvcnktYWNjZXNzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvY2FjaGUvdXNhZ2UtYnktcmVwb3NpdG9yeVwiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvc2VsZi1ob3N0ZWQtcnVubmVycy9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXItZ3JvdXBzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVyLWdyb3Vwcy97cnVubmVyX2dyb3VwX2lkfS9ob3N0ZWQtcnVubmVyc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lci1ncm91cHMve3J1bm5lcl9ncm91cF9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVyLWdyb3Vwcy97cnVubmVyX2dyb3VwX2lkfS9ydW5uZXJzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVyc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYXR0ZXN0YXRpb25zL3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hdHRlc3RhdGlvbnMve3N1YmplY3RfZGlnZXN0fVwiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9ibG9ja3NcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vY2FtcGFpZ25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGUtc2Nhbm5pbmcvYWxlcnRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9jb3BpbG90L2JpbGxpbmcvc2VhdHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vY29waWxvdC9tZXRyaWNzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2RlcGVuZGFib3QvYWxlcnRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vZXZlbnRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2ZhaWxlZF9pbnZpdGF0aW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9ob29rc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9ob29rcy97aG9va19pZH0vZGVsaXZlcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9pbnNpZ2h0cy9hcGkvcm91dGUtc3RhdHMve2FjdG9yX3R5cGV9L3thY3Rvcl9pZH1cIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaW5zaWdodHMvYXBpL3N1YmplY3Qtc3RhdHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaW5zaWdodHMvYXBpL3VzZXItc3RhdHMve3VzZXJfaWR9XCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2luc3RhbGxhdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaW52aXRhdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9L3RlYW1zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2lzc3Vlc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9tZW1iZXJzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L21lbWJlcnMve3VzZXJuYW1lfS9jb2Rlc3BhY2VzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3tyb2xlX2lkfS90ZWFtc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMve3JvbGVfaWR9L3VzZXJzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L291dHNpZGVfY29sbGFib3JhdG9yc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wYWNrYWdlc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW4tcmVxdWVzdHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2VuLXJlcXVlc3RzL3twYXRfcmVxdWVzdF9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2Vucy97cGF0X2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcHJpdmF0ZS1yZWdpc3RyaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzVjJcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2ZpZWxkc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcHJvcGVydGllcy92YWx1ZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcHVibGljX21lbWJlcnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcmVwb3NcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcnVsZXNldHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcnVsZXNldHMvcnVsZS1zdWl0ZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcnVsZXNldHMve3J1bGVzZXRfaWR9L2hpc3RvcnlcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9zZWN1cml0eS1hZHZpc29yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2ltbXV0YWJsZS1yZWxlYXNlcy9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvbmV0d29yay1jb25maWd1cmF0aW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtL3t0ZWFtX3NsdWd9L2NvcGlsb3QvbWV0cmljc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vaW52aXRhdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vbWVtYmVyc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9wcm9qZWN0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9yZXBvc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS90ZWFtc1wiLFxuICBcIkdFVCAvcHJvamVjdHMve3Byb2plY3RfaWR9L2NvbGxhYm9yYXRvcnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvYXJ0aWZhY3RzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2NhY2hlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9vcmdhbml6YXRpb24tc2VjcmV0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9vcmdhbml6YXRpb24tdmFyaWFibGVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVuc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2FydGlmYWN0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2F0dGVtcHRzL3thdHRlbXB0X251bWJlcn0vam9ic1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2pvYnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvc2VjcmV0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy92YXJpYWJsZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvd29ya2Zsb3dzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93cy97d29ya2Zsb3dfaWR9L3J1bnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGl2aXR5XCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hc3NpZ25lZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2F0dGVzdGF0aW9ucy97c3ViamVjdF9kaWdlc3R9XCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stcnVucy97Y2hlY2tfcnVuX2lkfS9hbm5vdGF0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stc3VpdGVzL3tjaGVja19zdWl0ZV9pZH0vY2hlY2stcnVuc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbGVydHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9L2luc3RhbmNlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbmFseXNlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9kZXZjb250YWluZXJzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL3NlY3JldHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbGxhYm9yYXRvcnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tjb21taXRfc2hhfS9jb21tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97Y29tbWl0X3NoYX0vcHVsbHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vY2hlY2stcnVuc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97cmVmfS9jaGVjay1zdWl0ZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vc3RhdHVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tyZWZ9L3N0YXR1c2VzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21wYXJlL3tiYXNlaGVhZH1cIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbXBhcmUve2Jhc2V9Li4ue2hlYWR9XCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250cmlidXRvcnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGFib3QvYWxlcnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L3NlY3JldHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBsb3ltZW50cy97ZGVwbG95bWVudF9pZH0vc3RhdHVzZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50LWJyYW5jaC1wb2xpY2llc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50X3Byb3RlY3Rpb25fcnVsZXMvYXBwc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9zZWNyZXRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3ZhcmlhYmxlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZXZlbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9mb3Jrc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3NcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfS9kZWxpdmVyaWVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbnZpdGF0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvY29tbWVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvZXZlbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vY29tbWVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9kZXBlbmRlbmNpZXMvYmxvY2tlZF9ieVwiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2RlcGVuZGVuY2llcy9ibG9ja2luZ1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2V2ZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2xhYmVsc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3JlYWN0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3N1Yl9pc3N1ZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS90aW1lbGluZVwiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30va2V5c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbGFiZWxzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzL3ttaWxlc3RvbmVfbnVtYmVyfS9sYWJlbHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L25vdGlmaWNhdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2J1aWxkc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHJvamVjdHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy9jb21tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb21tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb21taXRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L2ZpbGVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3NcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3cy97cmV2aWV3X2lkfS9jb21tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfS9hc3NldHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzL2JyYW5jaGVzL3ticmFuY2h9XCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHMvcnVsZS1zdWl0ZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzL3tydWxlc2V0X2lkfS9oaXN0b3J5XCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWNyZXQtc2Nhbm5pbmcvYWxlcnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWNyZXQtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9L2xvY2F0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjdXJpdHktYWR2aXNvcmllc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3RhcmdhemVyc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3Vic2NyaWJlcnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RhZ3NcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RlYW1zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90b3BpY3NcIixcbiAgXCJHRVQgL3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvc2VhcmNoL2NvZGVcIixcbiAgXCJHRVQgL3NlYXJjaC9jb21taXRzXCIsXG4gIFwiR0VUIC9zZWFyY2gvaXNzdWVzXCIsXG4gIFwiR0VUIC9zZWFyY2gvbGFiZWxzXCIsXG4gIFwiR0VUIC9zZWFyY2gvcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9zZWFyY2gvdG9waWNzXCIsXG4gIFwiR0VUIC9zZWFyY2gvdXNlcnNcIixcbiAgXCJHRVQgL3RlYW1zL3t0ZWFtX2lkfS9kaXNjdXNzaW9uc1wiLFxuICBcIkdFVCAvdGVhbXMve3RlYW1faWR9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHNcIixcbiAgXCJHRVQgL3RlYW1zL3t0ZWFtX2lkfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzL3tjb21tZW50X251bWJlcn0vcmVhY3Rpb25zXCIsXG4gIFwiR0VUIC90ZWFtcy97dGVhbV9pZH0vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL3RlYW1zL3t0ZWFtX2lkfS9pbnZpdGF0aW9uc1wiLFxuICBcIkdFVCAvdGVhbXMve3RlYW1faWR9L21lbWJlcnNcIixcbiAgXCJHRVQgL3RlYW1zL3t0ZWFtX2lkfS9wcm9qZWN0c1wiLFxuICBcIkdFVCAvdGVhbXMve3RlYW1faWR9L3JlcG9zXCIsXG4gIFwiR0VUIC90ZWFtcy97dGVhbV9pZH0vdGVhbXNcIixcbiAgXCJHRVQgL3VzZXIvYmxvY2tzXCIsXG4gIFwiR0VUIC91c2VyL2NvZGVzcGFjZXNcIixcbiAgXCJHRVQgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzXCIsXG4gIFwiR0VUIC91c2VyL2VtYWlsc1wiLFxuICBcIkdFVCAvdXNlci9mb2xsb3dlcnNcIixcbiAgXCJHRVQgL3VzZXIvZm9sbG93aW5nXCIsXG4gIFwiR0VUIC91c2VyL2dwZ19rZXlzXCIsXG4gIFwiR0VUIC91c2VyL2luc3RhbGxhdGlvbnNcIixcbiAgXCJHRVQgL3VzZXIvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL3VzZXIvaXNzdWVzXCIsXG4gIFwiR0VUIC91c2VyL2tleXNcIixcbiAgXCJHRVQgL3VzZXIvbWFya2V0cGxhY2VfcHVyY2hhc2VzXCIsXG4gIFwiR0VUIC91c2VyL21hcmtldHBsYWNlX3B1cmNoYXNlcy9zdHViYmVkXCIsXG4gIFwiR0VUIC91c2VyL21lbWJlcnNoaXBzL29yZ3NcIixcbiAgXCJHRVQgL3VzZXIvbWlncmF0aW9uc1wiLFxuICBcIkdFVCAvdXNlci9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvdXNlci9vcmdzXCIsXG4gIFwiR0VUIC91c2VyL3BhY2thZ2VzXCIsXG4gIFwiR0VUIC91c2VyL3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zXCIsXG4gIFwiR0VUIC91c2VyL3B1YmxpY19lbWFpbHNcIixcbiAgXCJHRVQgL3VzZXIvcmVwb3NcIixcbiAgXCJHRVQgL3VzZXIvcmVwb3NpdG9yeV9pbnZpdGF0aW9uc1wiLFxuICBcIkdFVCAvdXNlci9zb2NpYWxfYWNjb3VudHNcIixcbiAgXCJHRVQgL3VzZXIvc3NoX3NpZ25pbmdfa2V5c1wiLFxuICBcIkdFVCAvdXNlci9zdGFycmVkXCIsXG4gIFwiR0VUIC91c2VyL3N1YnNjcmlwdGlvbnNcIixcbiAgXCJHRVQgL3VzZXIvdGVhbXNcIixcbiAgXCJHRVQgL3VzZXJzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2F0dGVzdGF0aW9ucy97c3ViamVjdF9kaWdlc3R9XCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2V2ZW50c1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ldmVudHMvb3Jncy97b3JnfVwiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ldmVudHMvcHVibGljXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2ZvbGxvd2Vyc1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9mb2xsb3dpbmdcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZ2lzdHNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZ3BnX2tleXNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0va2V5c1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9vcmdzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3BhY2thZ2VzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzVjJcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2ZpZWxkc1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcmVjZWl2ZWRfZXZlbnRzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3JlY2VpdmVkX2V2ZW50cy9wdWJsaWNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcmVwb3NcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc29jaWFsX2FjY291bnRzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3NzaF9zaWduaW5nX2tleXNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc3RhcnJlZFwiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zdWJzY3JpcHRpb25zXCJcbl07XG5cbi8vIHBrZy9kaXN0LXNyYy9wYWdpbmF0aW5nLWVuZHBvaW50cy5qc1xuZnVuY3Rpb24gaXNQYWdpbmF0aW5nRW5kcG9pbnQoYXJnKSB7XG4gIGlmICh0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHBhZ2luYXRpbmdFbmRwb2ludHMuaW5jbHVkZXMoYXJnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG5mdW5jdGlvbiBwYWdpbmF0ZVJlc3Qob2N0b2tpdCkge1xuICByZXR1cm4ge1xuICAgIHBhZ2luYXRlOiBPYmplY3QuYXNzaWduKHBhZ2luYXRlLmJpbmQobnVsbCwgb2N0b2tpdCksIHtcbiAgICAgIGl0ZXJhdG9yOiBpdGVyYXRvci5iaW5kKG51bGwsIG9jdG9raXQpXG4gICAgfSlcbiAgfTtcbn1cbnBhZ2luYXRlUmVzdC5WRVJTSU9OID0gVkVSU0lPTjtcbmV4cG9ydCB7XG4gIGNvbXBvc2VQYWdpbmF0ZVJlc3QsXG4gIGlzUGFnaW5hdGluZ0VuZHBvaW50LFxuICBwYWdpbmF0ZVJlc3QsXG4gIHBhZ2luYXRpbmdFbmRwb2ludHNcbn07XG4iLCAiZXhwb3J0IGNvbnN0IFZFUlNJT04gPSBcIjE3LjAuMFwiO1xuIiwgImltcG9ydCB0eXBlIHsgRW5kcG9pbnRzRGVmYXVsdHNBbmREZWNvcmF0aW9ucyB9IGZyb20gXCIuLi90eXBlcy5qc1wiO1xuY29uc3QgRW5kcG9pbnRzOiBFbmRwb2ludHNEZWZhdWx0c0FuZERlY29yYXRpb25zID0ge1xuICBhY3Rpb25zOiB7XG4gICAgYWRkQ3VzdG9tTGFiZWxzVG9TZWxmSG9zdGVkUnVubmVyRm9yT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9L2xhYmVsc1wiLFxuICAgIF0sXG4gICAgYWRkQ3VzdG9tTGFiZWxzVG9TZWxmSG9zdGVkUnVubmVyRm9yUmVwbzogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzXCIsXG4gICAgXSxcbiAgICBhZGRSZXBvQWNjZXNzVG9TZWxmSG9zdGVkUnVubmVyR3JvdXBJbk9yZzogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXItZ3JvdXBzL3tydW5uZXJfZ3JvdXBfaWR9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIGFkZFNlbGVjdGVkUmVwb1RvT3JnU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBhZGRTZWxlY3RlZFJlcG9Ub09yZ1ZhcmlhYmxlOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgYXBwcm92ZVdvcmtmbG93UnVuOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hcHByb3ZlXCIsXG4gICAgXSxcbiAgICBjYW5jZWxXb3JrZmxvd1J1bjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vY2FuY2VsXCIsXG4gICAgXSxcbiAgICBjcmVhdGVFbnZpcm9ubWVudFZhcmlhYmxlOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vdmFyaWFibGVzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcIlBPU1QgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVyc1wiXSxcbiAgICBjcmVhdGVPclVwZGF0ZUVudmlyb25tZW50U2VjcmV0OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGNyZWF0ZU9yVXBkYXRlT3JnU2VjcmV0OiBbXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgY3JlYXRlT3JVcGRhdGVSZXBvU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGNyZWF0ZU9yZ1ZhcmlhYmxlOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzXCJdLFxuICAgIGNyZWF0ZVJlZ2lzdHJhdGlvblRva2VuRm9yT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL3JlZ2lzdHJhdGlvbi10b2tlblwiLFxuICAgIF0sXG4gICAgY3JlYXRlUmVnaXN0cmF0aW9uVG9rZW5Gb3JSZXBvOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy9yZWdpc3RyYXRpb24tdG9rZW5cIixcbiAgICBdLFxuICAgIGNyZWF0ZVJlbW92ZVRva2VuRm9yT3JnOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy9yZW1vdmUtdG9rZW5cIl0sXG4gICAgY3JlYXRlUmVtb3ZlVG9rZW5Gb3JSZXBvOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy9yZW1vdmUtdG9rZW5cIixcbiAgICBdLFxuICAgIGNyZWF0ZVJlcG9WYXJpYWJsZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy92YXJpYWJsZXNcIl0sXG4gICAgY3JlYXRlV29ya2Zsb3dEaXNwYXRjaDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93cy97d29ya2Zsb3dfaWR9L2Rpc3BhdGNoZXNcIixcbiAgICBdLFxuICAgIGRlbGV0ZUFjdGlvbnNDYWNoZUJ5SWQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2NhY2hlcy97Y2FjaGVfaWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVBY3Rpb25zQ2FjaGVCeUtleTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvY2FjaGVzez9rZXkscmVmfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlQXJ0aWZhY3Q6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2FydGlmYWN0cy97YXJ0aWZhY3RfaWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVDdXN0b21JbWFnZUZyb21Pcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvaW1hZ2VzL2N1c3RvbS97aW1hZ2VfZGVmaW5pdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUN1c3RvbUltYWdlVmVyc2lvbkZyb21Pcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvaW1hZ2VzL2N1c3RvbS97aW1hZ2VfZGVmaW5pdGlvbl9pZH0vdmVyc2lvbnMve3ZlcnNpb259XCIsXG4gICAgXSxcbiAgICBkZWxldGVFbnZpcm9ubWVudFNlY3JldDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVFbnZpcm9ubWVudFZhcmlhYmxlOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS92YXJpYWJsZXMve25hbWV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMve2hvc3RlZF9ydW5uZXJfaWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVPcmdTZWNyZXQ6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfVwiXSxcbiAgICBkZWxldGVPcmdWYXJpYWJsZTogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfVwiXSxcbiAgICBkZWxldGVSZXBvU2VjcmV0OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGRlbGV0ZVJlcG9WYXJpYWJsZTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlU2VsZkhvc3RlZFJ1bm5lckZyb21Pcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlU2VsZkhvc3RlZFJ1bm5lckZyb21SZXBvOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVXb3JrZmxvd1J1bjogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH1cIl0sXG4gICAgZGVsZXRlV29ya2Zsb3dSdW5Mb2dzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2xvZ3NcIixcbiAgICBdLFxuICAgIGRpc2FibGVTZWxlY3RlZFJlcG9zaXRvcnlHaXRodWJBY3Rpb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIGRpc2FibGVXb3JrZmxvdzogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvd29ya2Zsb3dzL3t3b3JrZmxvd19pZH0vZGlzYWJsZVwiLFxuICAgIF0sXG4gICAgZG93bmxvYWRBcnRpZmFjdDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvYXJ0aWZhY3RzL3thcnRpZmFjdF9pZH0ve2FyY2hpdmVfZm9ybWF0fVwiLFxuICAgIF0sXG4gICAgZG93bmxvYWRKb2JMb2dzRm9yV29ya2Zsb3dSdW46IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2pvYnMve2pvYl9pZH0vbG9nc1wiLFxuICAgIF0sXG4gICAgZG93bmxvYWRXb3JrZmxvd1J1bkF0dGVtcHRMb2dzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2F0dGVtcHRzL3thdHRlbXB0X251bWJlcn0vbG9nc1wiLFxuICAgIF0sXG4gICAgZG93bmxvYWRXb3JrZmxvd1J1bkxvZ3M6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vbG9nc1wiLFxuICAgIF0sXG4gICAgZW5hYmxlU2VsZWN0ZWRSZXBvc2l0b3J5R2l0aHViQWN0aW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9ucy9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBlbmFibGVXb3JrZmxvdzogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvd29ya2Zsb3dzL3t3b3JrZmxvd19pZH0vZW5hYmxlXCIsXG4gICAgXSxcbiAgICBmb3JjZUNhbmNlbFdvcmtmbG93UnVuOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9mb3JjZS1jYW5jZWxcIixcbiAgICBdLFxuICAgIGdlbmVyYXRlUnVubmVySml0Y29uZmlnRm9yT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL2dlbmVyYXRlLWppdGNvbmZpZ1wiLFxuICAgIF0sXG4gICAgZ2VuZXJhdGVSdW5uZXJKaXRjb25maWdGb3JSZXBvOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy9nZW5lcmF0ZS1qaXRjb25maWdcIixcbiAgICBdLFxuICAgIGdldEFjdGlvbnNDYWNoZUxpc3Q6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9jYWNoZXNcIl0sXG4gICAgZ2V0QWN0aW9uc0NhY2hlVXNhZ2U6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9jYWNoZS91c2FnZVwiXSxcbiAgICBnZXRBY3Rpb25zQ2FjaGVVc2FnZUJ5UmVwb0Zvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9jYWNoZS91c2FnZS1ieS1yZXBvc2l0b3J5XCIsXG4gICAgXSxcbiAgICBnZXRBY3Rpb25zQ2FjaGVVc2FnZUZvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvY2FjaGUvdXNhZ2VcIl0sXG4gICAgZ2V0QWxsb3dlZEFjdGlvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvc2VsZWN0ZWQtYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgZ2V0QWxsb3dlZEFjdGlvbnNSZXBvc2l0b3J5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9wZXJtaXNzaW9ucy9zZWxlY3RlZC1hY3Rpb25zXCIsXG4gICAgXSxcbiAgICBnZXRBcnRpZmFjdDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2FydGlmYWN0cy97YXJ0aWZhY3RfaWR9XCJdLFxuICAgIGdldEN1c3RvbUltYWdlRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL2ltYWdlcy9jdXN0b20ve2ltYWdlX2RlZmluaXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBnZXRDdXN0b21JbWFnZVZlcnNpb25Gb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvaW1hZ2VzL2N1c3RvbS97aW1hZ2VfZGVmaW5pdGlvbl9pZH0vdmVyc2lvbnMve3ZlcnNpb259XCIsXG4gICAgXSxcbiAgICBnZXRDdXN0b21PaWRjU3ViQ2xhaW1Gb3JSZXBvOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9vaWRjL2N1c3RvbWl6YXRpb24vc3ViXCIsXG4gICAgXSxcbiAgICBnZXRFbnZpcm9ubWVudFB1YmxpY0tleTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vc2VjcmV0cy9wdWJsaWMta2V5XCIsXG4gICAgXSxcbiAgICBnZXRFbnZpcm9ubWVudFNlY3JldDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBnZXRFbnZpcm9ubWVudFZhcmlhYmxlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS92YXJpYWJsZXMve25hbWV9XCIsXG4gICAgXSxcbiAgICBnZXRHaXRodWJBY3Rpb25zRGVmYXVsdFdvcmtmbG93UGVybWlzc2lvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvd29ya2Zsb3dcIixcbiAgICBdLFxuICAgIGdldEdpdGh1YkFjdGlvbnNEZWZhdWx0V29ya2Zsb3dQZXJtaXNzaW9uc1JlcG9zaXRvcnk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zL3dvcmtmbG93XCIsXG4gICAgXSxcbiAgICBnZXRHaXRodWJBY3Rpb25zUGVybWlzc2lvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnNcIixcbiAgICBdLFxuICAgIGdldEdpdGh1YkFjdGlvbnNQZXJtaXNzaW9uc1JlcG9zaXRvcnk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zXCIsXG4gICAgXSxcbiAgICBnZXRIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMve2hvc3RlZF9ydW5uZXJfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRIb3N0ZWRSdW5uZXJzR2l0aHViT3duZWRJbWFnZXNGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvaW1hZ2VzL2dpdGh1Yi1vd25lZFwiLFxuICAgIF0sXG4gICAgZ2V0SG9zdGVkUnVubmVyc0xpbWl0c0Zvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy9saW1pdHNcIixcbiAgICBdLFxuICAgIGdldEhvc3RlZFJ1bm5lcnNNYWNoaW5lU3BlY3NGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvbWFjaGluZS1zaXplc1wiLFxuICAgIF0sXG4gICAgZ2V0SG9zdGVkUnVubmVyc1BhcnRuZXJJbWFnZXNGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvaW1hZ2VzL3BhcnRuZXJcIixcbiAgICBdLFxuICAgIGdldEhvc3RlZFJ1bm5lcnNQbGF0Zm9ybXNGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvcGxhdGZvcm1zXCIsXG4gICAgXSxcbiAgICBnZXRKb2JGb3JXb3JrZmxvd1J1bjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2pvYnMve2pvYl9pZH1cIl0sXG4gICAgZ2V0T3JnUHVibGljS2V5OiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3B1YmxpYy1rZXlcIl0sXG4gICAgZ2V0T3JnU2VjcmV0OiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZ2V0T3JnVmFyaWFibGU6IFtcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX1cIl0sXG4gICAgZ2V0UGVuZGluZ0RlcGxveW1lbnRzRm9yUnVuOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L3BlbmRpbmdfZGVwbG95bWVudHNcIixcbiAgICBdLFxuICAgIGdldFJlcG9QZXJtaXNzaW9uczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcGVybWlzc2lvbnNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJhY3Rpb25zXCIsIFwiZ2V0R2l0aHViQWN0aW9uc1Blcm1pc3Npb25zUmVwb3NpdG9yeVwiXSB9LFxuICAgIF0sXG4gICAgZ2V0UmVwb1B1YmxpY0tleTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3NlY3JldHMvcHVibGljLWtleVwiXSxcbiAgICBnZXRSZXBvU2VjcmV0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJdLFxuICAgIGdldFJlcG9WYXJpYWJsZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX1cIl0sXG4gICAgZ2V0UmV2aWV3c0ZvclJ1bjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hcHByb3ZhbHNcIixcbiAgICBdLFxuICAgIGdldFNlbGZIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH1cIl0sXG4gICAgZ2V0U2VsZkhvc3RlZFJ1bm5lckZvclJlcG86IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH1cIixcbiAgICBdLFxuICAgIGdldFdvcmtmbG93OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvd29ya2Zsb3dzL3t3b3JrZmxvd19pZH1cIl0sXG4gICAgZ2V0V29ya2Zsb3dBY2Nlc3NUb1JlcG9zaXRvcnk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zL2FjY2Vzc1wiLFxuICAgIF0sXG4gICAgZ2V0V29ya2Zsb3dSdW46IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9XCJdLFxuICAgIGdldFdvcmtmbG93UnVuQXR0ZW1wdDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hdHRlbXB0cy97YXR0ZW1wdF9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICBnZXRXb3JrZmxvd1J1blVzYWdlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L3RpbWluZ1wiLFxuICAgIF0sXG4gICAgZ2V0V29ya2Zsb3dVc2FnZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvd29ya2Zsb3dzL3t3b3JrZmxvd19pZH0vdGltaW5nXCIsXG4gICAgXSxcbiAgICBsaXN0QXJ0aWZhY3RzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2FydGlmYWN0c1wiXSxcbiAgICBsaXN0Q3VzdG9tSW1hZ2VWZXJzaW9uc0Zvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy9pbWFnZXMvY3VzdG9tL3tpbWFnZV9kZWZpbml0aW9uX2lkfS92ZXJzaW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdEN1c3RvbUltYWdlc0Zvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy9pbWFnZXMvY3VzdG9tXCIsXG4gICAgXSxcbiAgICBsaXN0RW52aXJvbm1lbnRTZWNyZXRzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9zZWNyZXRzXCIsXG4gICAgXSxcbiAgICBsaXN0RW52aXJvbm1lbnRWYXJpYWJsZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3ZhcmlhYmxlc1wiLFxuICAgIF0sXG4gICAgbGlzdEdpdGh1Ykhvc3RlZFJ1bm5lcnNJbkdyb3VwRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lci1ncm91cHMve3J1bm5lcl9ncm91cF9pZH0vaG9zdGVkLXJ1bm5lcnNcIixcbiAgICBdLFxuICAgIGxpc3RIb3N0ZWRSdW5uZXJzRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVyc1wiXSxcbiAgICBsaXN0Sm9ic0ZvcldvcmtmbG93UnVuOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2pvYnNcIixcbiAgICBdLFxuICAgIGxpc3RKb2JzRm9yV29ya2Zsb3dSdW5BdHRlbXB0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2F0dGVtcHRzL3thdHRlbXB0X251bWJlcn0vam9ic1wiLFxuICAgIF0sXG4gICAgbGlzdExhYmVsc0ZvclNlbGZIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIGxpc3RMYWJlbHNGb3JTZWxmSG9zdGVkUnVubmVyRm9yUmVwbzogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIGxpc3RPcmdTZWNyZXRzOiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzXCJdLFxuICAgIGxpc3RPcmdWYXJpYWJsZXM6IFtcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlc1wiXSxcbiAgICBsaXN0UmVwb09yZ2FuaXphdGlvblNlY3JldHM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL29yZ2FuaXphdGlvbi1zZWNyZXRzXCIsXG4gICAgXSxcbiAgICBsaXN0UmVwb09yZ2FuaXphdGlvblZhcmlhYmxlczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvb3JnYW5pemF0aW9uLXZhcmlhYmxlc1wiLFxuICAgIF0sXG4gICAgbGlzdFJlcG9TZWNyZXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvc2VjcmV0c1wiXSxcbiAgICBsaXN0UmVwb1ZhcmlhYmxlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3ZhcmlhYmxlc1wiXSxcbiAgICBsaXN0UmVwb1dvcmtmbG93czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93c1wiXSxcbiAgICBsaXN0UnVubmVyQXBwbGljYXRpb25zRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL2Rvd25sb2Fkc1wiXSxcbiAgICBsaXN0UnVubmVyQXBwbGljYXRpb25zRm9yUmVwbzogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy9kb3dubG9hZHNcIixcbiAgICBdLFxuICAgIGxpc3RTZWxlY3RlZFJlcG9zRm9yT3JnU2VjcmV0OiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGxpc3RTZWxlY3RlZFJlcG9zRm9yT3JnVmFyaWFibGU6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGxpc3RTZWxlY3RlZFJlcG9zaXRvcmllc0VuYWJsZWRHaXRodWJBY3Rpb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgbGlzdFNlbGZIb3N0ZWRSdW5uZXJzRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzXCJdLFxuICAgIGxpc3RTZWxmSG9zdGVkUnVubmVyc0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzXCJdLFxuICAgIGxpc3RXb3JrZmxvd1J1bkFydGlmYWN0czogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hcnRpZmFjdHNcIixcbiAgICBdLFxuICAgIGxpc3RXb3JrZmxvd1J1bnM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93cy97d29ya2Zsb3dfaWR9L3J1bnNcIixcbiAgICBdLFxuICAgIGxpc3RXb3JrZmxvd1J1bnNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVuc1wiXSxcbiAgICByZVJ1bkpvYkZvcldvcmtmbG93UnVuOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvam9icy97am9iX2lkfS9yZXJ1blwiLFxuICAgIF0sXG4gICAgcmVSdW5Xb3JrZmxvdzogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L3JlcnVuXCJdLFxuICAgIHJlUnVuV29ya2Zsb3dGYWlsZWRKb2JzOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9yZXJ1bi1mYWlsZWQtam9ic1wiLFxuICAgIF0sXG4gICAgcmVtb3ZlQWxsQ3VzdG9tTGFiZWxzRnJvbVNlbGZIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIHJlbW92ZUFsbEN1c3RvbUxhYmVsc0Zyb21TZWxmSG9zdGVkUnVubmVyRm9yUmVwbzogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIHJlbW92ZUN1c3RvbUxhYmVsRnJvbVNlbGZIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHMve25hbWV9XCIsXG4gICAgXSxcbiAgICByZW1vdmVDdXN0b21MYWJlbEZyb21TZWxmSG9zdGVkUnVubmVyRm9yUmVwbzogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHMve25hbWV9XCIsXG4gICAgXSxcbiAgICByZW1vdmVTZWxlY3RlZFJlcG9Gcm9tT3JnU2VjcmV0OiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICByZW1vdmVTZWxlY3RlZFJlcG9Gcm9tT3JnVmFyaWFibGU6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICByZXZpZXdDdXN0b21HYXRlc0ZvclJ1bjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vZGVwbG95bWVudF9wcm90ZWN0aW9uX3J1bGVcIixcbiAgICBdLFxuICAgIHJldmlld1BlbmRpbmdEZXBsb3ltZW50c0ZvclJ1bjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vcGVuZGluZ19kZXBsb3ltZW50c1wiLFxuICAgIF0sXG4gICAgc2V0QWxsb3dlZEFjdGlvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvc2VsZWN0ZWQtYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgc2V0QWxsb3dlZEFjdGlvbnNSZXBvc2l0b3J5OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9wZXJtaXNzaW9ucy9zZWxlY3RlZC1hY3Rpb25zXCIsXG4gICAgXSxcbiAgICBzZXRDdXN0b21MYWJlbHNGb3JTZWxmSG9zdGVkUnVubmVyRm9yT3JnOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzXCIsXG4gICAgXSxcbiAgICBzZXRDdXN0b21MYWJlbHNGb3JTZWxmSG9zdGVkUnVubmVyRm9yUmVwbzogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIHNldEN1c3RvbU9pZGNTdWJDbGFpbUZvclJlcG86IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL29pZGMvY3VzdG9taXphdGlvbi9zdWJcIixcbiAgICBdLFxuICAgIHNldEdpdGh1YkFjdGlvbnNEZWZhdWx0V29ya2Zsb3dQZXJtaXNzaW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9ucy93b3JrZmxvd1wiLFxuICAgIF0sXG4gICAgc2V0R2l0aHViQWN0aW9uc0RlZmF1bHRXb3JrZmxvd1Blcm1pc3Npb25zUmVwb3NpdG9yeTogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcGVybWlzc2lvbnMvd29ya2Zsb3dcIixcbiAgICBdLFxuICAgIHNldEdpdGh1YkFjdGlvbnNQZXJtaXNzaW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9uc1wiLFxuICAgIF0sXG4gICAgc2V0R2l0aHViQWN0aW9uc1Blcm1pc3Npb25zUmVwb3NpdG9yeTogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcGVybWlzc2lvbnNcIixcbiAgICBdLFxuICAgIHNldFNlbGVjdGVkUmVwb3NGb3JPcmdTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgc2V0U2VsZWN0ZWRSZXBvc0Zvck9yZ1ZhcmlhYmxlOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBzZXRTZWxlY3RlZFJlcG9zaXRvcmllc0VuYWJsZWRHaXRodWJBY3Rpb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgc2V0V29ya2Zsb3dBY2Nlc3NUb1JlcG9zaXRvcnk6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zL2FjY2Vzc1wiLFxuICAgIF0sXG4gICAgdXBkYXRlRW52aXJvbm1lbnRWYXJpYWJsZTogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS92YXJpYWJsZXMve25hbWV9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy97aG9zdGVkX3J1bm5lcl9pZH1cIixcbiAgICBdLFxuICAgIHVwZGF0ZU9yZ1ZhcmlhYmxlOiBbXCJQQVRDSCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX1cIl0sXG4gICAgdXBkYXRlUmVwb1ZhcmlhYmxlOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX1cIixcbiAgICBdLFxuICB9LFxuICBhY3Rpdml0eToge1xuICAgIGNoZWNrUmVwb0lzU3RhcnJlZEJ5QXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9zdGFycmVkL3tvd25lcn0ve3JlcG99XCJdLFxuICAgIGRlbGV0ZVJlcG9TdWJzY3JpcHRpb246IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vc3Vic2NyaXB0aW9uXCJdLFxuICAgIGRlbGV0ZVRocmVhZFN1YnNjcmlwdGlvbjogW1xuICAgICAgXCJERUxFVEUgL25vdGlmaWNhdGlvbnMvdGhyZWFkcy97dGhyZWFkX2lkfS9zdWJzY3JpcHRpb25cIixcbiAgICBdLFxuICAgIGdldEZlZWRzOiBbXCJHRVQgL2ZlZWRzXCJdLFxuICAgIGdldFJlcG9TdWJzY3JpcHRpb246IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3Vic2NyaXB0aW9uXCJdLFxuICAgIGdldFRocmVhZDogW1wiR0VUIC9ub3RpZmljYXRpb25zL3RocmVhZHMve3RocmVhZF9pZH1cIl0sXG4gICAgZ2V0VGhyZWFkU3Vic2NyaXB0aW9uRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC9ub3RpZmljYXRpb25zL3RocmVhZHMve3RocmVhZF9pZH0vc3Vic2NyaXB0aW9uXCIsXG4gICAgXSxcbiAgICBsaXN0RXZlbnRzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ldmVudHNcIl0sXG4gICAgbGlzdE5vdGlmaWNhdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC9ub3RpZmljYXRpb25zXCJdLFxuICAgIGxpc3RPcmdFdmVudHNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZXZlbnRzL29yZ3Mve29yZ31cIixcbiAgICBdLFxuICAgIGxpc3RQdWJsaWNFdmVudHM6IFtcIkdFVCAvZXZlbnRzXCJdLFxuICAgIGxpc3RQdWJsaWNFdmVudHNGb3JSZXBvTmV0d29yazogW1wiR0VUIC9uZXR3b3Jrcy97b3duZXJ9L3tyZXBvfS9ldmVudHNcIl0sXG4gICAgbGlzdFB1YmxpY0V2ZW50c0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ldmVudHMvcHVibGljXCJdLFxuICAgIGxpc3RQdWJsaWNPcmdFdmVudHM6IFtcIkdFVCAvb3Jncy97b3JnfS9ldmVudHNcIl0sXG4gICAgbGlzdFJlY2VpdmVkRXZlbnRzRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L3JlY2VpdmVkX2V2ZW50c1wiXSxcbiAgICBsaXN0UmVjZWl2ZWRQdWJsaWNFdmVudHNGb3JVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9yZWNlaXZlZF9ldmVudHMvcHVibGljXCIsXG4gICAgXSxcbiAgICBsaXN0UmVwb0V2ZW50czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ldmVudHNcIl0sXG4gICAgbGlzdFJlcG9Ob3RpZmljYXRpb25zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ub3RpZmljYXRpb25zXCIsXG4gICAgXSxcbiAgICBsaXN0UmVwb3NTdGFycmVkQnlBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3N0YXJyZWRcIl0sXG4gICAgbGlzdFJlcG9zU3RhcnJlZEJ5VXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L3N0YXJyZWRcIl0sXG4gICAgbGlzdFJlcG9zV2F0Y2hlZEJ5VXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L3N1YnNjcmlwdGlvbnNcIl0sXG4gICAgbGlzdFN0YXJnYXplcnNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXJnYXplcnNcIl0sXG4gICAgbGlzdFdhdGNoZWRSZXBvc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvc3Vic2NyaXB0aW9uc1wiXSxcbiAgICBsaXN0V2F0Y2hlcnNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N1YnNjcmliZXJzXCJdLFxuICAgIG1hcmtOb3RpZmljYXRpb25zQXNSZWFkOiBbXCJQVVQgL25vdGlmaWNhdGlvbnNcIl0sXG4gICAgbWFya1JlcG9Ob3RpZmljYXRpb25zQXNSZWFkOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L25vdGlmaWNhdGlvbnNcIl0sXG4gICAgbWFya1RocmVhZEFzRG9uZTogW1wiREVMRVRFIC9ub3RpZmljYXRpb25zL3RocmVhZHMve3RocmVhZF9pZH1cIl0sXG4gICAgbWFya1RocmVhZEFzUmVhZDogW1wiUEFUQ0ggL25vdGlmaWNhdGlvbnMvdGhyZWFkcy97dGhyZWFkX2lkfVwiXSxcbiAgICBzZXRSZXBvU3Vic2NyaXB0aW9uOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N1YnNjcmlwdGlvblwiXSxcbiAgICBzZXRUaHJlYWRTdWJzY3JpcHRpb246IFtcbiAgICAgIFwiUFVUIC9ub3RpZmljYXRpb25zL3RocmVhZHMve3RocmVhZF9pZH0vc3Vic2NyaXB0aW9uXCIsXG4gICAgXSxcbiAgICBzdGFyUmVwb0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQVVQgL3VzZXIvc3RhcnJlZC97b3duZXJ9L3tyZXBvfVwiXSxcbiAgICB1bnN0YXJSZXBvRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkRFTEVURSAvdXNlci9zdGFycmVkL3tvd25lcn0ve3JlcG99XCJdLFxuICB9LFxuICBhcHBzOiB7XG4gICAgYWRkUmVwb1RvSW5zdGFsbGF0aW9uOiBbXG4gICAgICBcIlBVVCAvdXNlci9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJhcHBzXCIsIFwiYWRkUmVwb1RvSW5zdGFsbGF0aW9uRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGFkZFJlcG9Ub0luc3RhbGxhdGlvbkZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBVVCAvdXNlci9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIGNoZWNrVG9rZW46IFtcIlBPU1QgL2FwcGxpY2F0aW9ucy97Y2xpZW50X2lkfS90b2tlblwiXSxcbiAgICBjcmVhdGVGcm9tTWFuaWZlc3Q6IFtcIlBPU1QgL2FwcC1tYW5pZmVzdHMve2NvZGV9L2NvbnZlcnNpb25zXCJdLFxuICAgIGNyZWF0ZUluc3RhbGxhdGlvbkFjY2Vzc1Rva2VuOiBbXG4gICAgICBcIlBPU1QgL2FwcC9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L2FjY2Vzc190b2tlbnNcIixcbiAgICBdLFxuICAgIGRlbGV0ZUF1dGhvcml6YXRpb246IFtcIkRFTEVURSAvYXBwbGljYXRpb25zL3tjbGllbnRfaWR9L2dyYW50XCJdLFxuICAgIGRlbGV0ZUluc3RhbGxhdGlvbjogW1wiREVMRVRFIC9hcHAvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfVwiXSxcbiAgICBkZWxldGVUb2tlbjogW1wiREVMRVRFIC9hcHBsaWNhdGlvbnMve2NsaWVudF9pZH0vdG9rZW5cIl0sXG4gICAgZ2V0QXV0aGVudGljYXRlZDogW1wiR0VUIC9hcHBcIl0sXG4gICAgZ2V0QnlTbHVnOiBbXCJHRVQgL2FwcHMve2FwcF9zbHVnfVwiXSxcbiAgICBnZXRJbnN0YWxsYXRpb246IFtcIkdFVCAvYXBwL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH1cIl0sXG4gICAgZ2V0T3JnSW5zdGFsbGF0aW9uOiBbXCJHRVQgL29yZ3Mve29yZ30vaW5zdGFsbGF0aW9uXCJdLFxuICAgIGdldFJlcG9JbnN0YWxsYXRpb246IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaW5zdGFsbGF0aW9uXCJdLFxuICAgIGdldFN1YnNjcmlwdGlvblBsYW5Gb3JBY2NvdW50OiBbXG4gICAgICBcIkdFVCAvbWFya2V0cGxhY2VfbGlzdGluZy9hY2NvdW50cy97YWNjb3VudF9pZH1cIixcbiAgICBdLFxuICAgIGdldFN1YnNjcmlwdGlvblBsYW5Gb3JBY2NvdW50U3R1YmJlZDogW1xuICAgICAgXCJHRVQgL21hcmtldHBsYWNlX2xpc3Rpbmcvc3R1YmJlZC9hY2NvdW50cy97YWNjb3VudF9pZH1cIixcbiAgICBdLFxuICAgIGdldFVzZXJJbnN0YWxsYXRpb246IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9pbnN0YWxsYXRpb25cIl0sXG4gICAgZ2V0V2ViaG9va0NvbmZpZ0ZvckFwcDogW1wiR0VUIC9hcHAvaG9vay9jb25maWdcIl0sXG4gICAgZ2V0V2ViaG9va0RlbGl2ZXJ5OiBbXCJHRVQgL2FwcC9ob29rL2RlbGl2ZXJpZXMve2RlbGl2ZXJ5X2lkfVwiXSxcbiAgICBsaXN0QWNjb3VudHNGb3JQbGFuOiBbXCJHRVQgL21hcmtldHBsYWNlX2xpc3RpbmcvcGxhbnMve3BsYW5faWR9L2FjY291bnRzXCJdLFxuICAgIGxpc3RBY2NvdW50c0ZvclBsYW5TdHViYmVkOiBbXG4gICAgICBcIkdFVCAvbWFya2V0cGxhY2VfbGlzdGluZy9zdHViYmVkL3BsYW5zL3twbGFuX2lkfS9hY2NvdW50c1wiLFxuICAgIF0sXG4gICAgbGlzdEluc3RhbGxhdGlvblJlcG9zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBsaXN0SW5zdGFsbGF0aW9uUmVxdWVzdHNGb3JBdXRoZW50aWNhdGVkQXBwOiBbXG4gICAgICBcIkdFVCAvYXBwL2luc3RhbGxhdGlvbi1yZXF1ZXN0c1wiLFxuICAgIF0sXG4gICAgbGlzdEluc3RhbGxhdGlvbnM6IFtcIkdFVCAvYXBwL2luc3RhbGxhdGlvbnNcIl0sXG4gICAgbGlzdEluc3RhbGxhdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2luc3RhbGxhdGlvbnNcIl0sXG4gICAgbGlzdFBsYW5zOiBbXCJHRVQgL21hcmtldHBsYWNlX2xpc3RpbmcvcGxhbnNcIl0sXG4gICAgbGlzdFBsYW5zU3R1YmJlZDogW1wiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3N0dWJiZWQvcGxhbnNcIl0sXG4gICAgbGlzdFJlcG9zQWNjZXNzaWJsZVRvSW5zdGFsbGF0aW9uOiBbXCJHRVQgL2luc3RhbGxhdGlvbi9yZXBvc2l0b3JpZXNcIl0sXG4gICAgbGlzdFN1YnNjcmlwdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL21hcmtldHBsYWNlX3B1cmNoYXNlc1wiXSxcbiAgICBsaXN0U3Vic2NyaXB0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyU3R1YmJlZDogW1xuICAgICAgXCJHRVQgL3VzZXIvbWFya2V0cGxhY2VfcHVyY2hhc2VzL3N0dWJiZWRcIixcbiAgICBdLFxuICAgIGxpc3RXZWJob29rRGVsaXZlcmllczogW1wiR0VUIC9hcHAvaG9vay9kZWxpdmVyaWVzXCJdLFxuICAgIHJlZGVsaXZlcldlYmhvb2tEZWxpdmVyeTogW1xuICAgICAgXCJQT1NUIC9hcHAvaG9vay9kZWxpdmVyaWVzL3tkZWxpdmVyeV9pZH0vYXR0ZW1wdHNcIixcbiAgICBdLFxuICAgIHJlbW92ZVJlcG9Gcm9tSW5zdGFsbGF0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJhcHBzXCIsIFwicmVtb3ZlUmVwb0Zyb21JbnN0YWxsYXRpb25Gb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgcmVtb3ZlUmVwb0Zyb21JbnN0YWxsYXRpb25Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICByZXNldFRva2VuOiBbXCJQQVRDSCAvYXBwbGljYXRpb25zL3tjbGllbnRfaWR9L3Rva2VuXCJdLFxuICAgIHJldm9rZUluc3RhbGxhdGlvbkFjY2Vzc1Rva2VuOiBbXCJERUxFVEUgL2luc3RhbGxhdGlvbi90b2tlblwiXSxcbiAgICBzY29wZVRva2VuOiBbXCJQT1NUIC9hcHBsaWNhdGlvbnMve2NsaWVudF9pZH0vdG9rZW4vc2NvcGVkXCJdLFxuICAgIHN1c3BlbmRJbnN0YWxsYXRpb246IFtcIlBVVCAvYXBwL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH0vc3VzcGVuZGVkXCJdLFxuICAgIHVuc3VzcGVuZEluc3RhbGxhdGlvbjogW1xuICAgICAgXCJERUxFVEUgL2FwcC9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L3N1c3BlbmRlZFwiLFxuICAgIF0sXG4gICAgdXBkYXRlV2ViaG9va0NvbmZpZ0ZvckFwcDogW1wiUEFUQ0ggL2FwcC9ob29rL2NvbmZpZ1wiXSxcbiAgfSxcbiAgYmlsbGluZzoge1xuICAgIGdldEdpdGh1YkFjdGlvbnNCaWxsaW5nT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvYmlsbGluZy9hY3Rpb25zXCJdLFxuICAgIGdldEdpdGh1YkFjdGlvbnNCaWxsaW5nVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc2V0dGluZ3MvYmlsbGluZy9hY3Rpb25zXCIsXG4gICAgXSxcbiAgICBnZXRHaXRodWJCaWxsaW5nUHJlbWl1bVJlcXVlc3RVc2FnZVJlcG9ydE9yZzogW1xuICAgICAgXCJHRVQgL29yZ2FuaXphdGlvbnMve29yZ30vc2V0dGluZ3MvYmlsbGluZy9wcmVtaXVtX3JlcXVlc3QvdXNhZ2VcIixcbiAgICBdLFxuICAgIGdldEdpdGh1YkJpbGxpbmdQcmVtaXVtUmVxdWVzdFVzYWdlUmVwb3J0VXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc2V0dGluZ3MvYmlsbGluZy9wcmVtaXVtX3JlcXVlc3QvdXNhZ2VcIixcbiAgICBdLFxuICAgIGdldEdpdGh1YkJpbGxpbmdVc2FnZVJlcG9ydE9yZzogW1xuICAgICAgXCJHRVQgL29yZ2FuaXphdGlvbnMve29yZ30vc2V0dGluZ3MvYmlsbGluZy91c2FnZVwiLFxuICAgIF0sXG4gICAgZ2V0R2l0aHViQmlsbGluZ1VzYWdlUmVwb3J0VXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc2V0dGluZ3MvYmlsbGluZy91c2FnZVwiLFxuICAgIF0sXG4gICAgZ2V0R2l0aHViUGFja2FnZXNCaWxsaW5nT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvYmlsbGluZy9wYWNrYWdlc1wiXSxcbiAgICBnZXRHaXRodWJQYWNrYWdlc0JpbGxpbmdVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zZXR0aW5ncy9iaWxsaW5nL3BhY2thZ2VzXCIsXG4gICAgXSxcbiAgICBnZXRTaGFyZWRTdG9yYWdlQmlsbGluZ09yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvYmlsbGluZy9zaGFyZWQtc3RvcmFnZVwiLFxuICAgIF0sXG4gICAgZ2V0U2hhcmVkU3RvcmFnZUJpbGxpbmdVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zZXR0aW5ncy9iaWxsaW5nL3NoYXJlZC1zdG9yYWdlXCIsXG4gICAgXSxcbiAgfSxcbiAgY2FtcGFpZ25zOiB7XG4gICAgY3JlYXRlQ2FtcGFpZ246IFtcIlBPU1QgL29yZ3Mve29yZ30vY2FtcGFpZ25zXCJdLFxuICAgIGRlbGV0ZUNhbXBhaWduOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vY2FtcGFpZ25zL3tjYW1wYWlnbl9udW1iZXJ9XCJdLFxuICAgIGdldENhbXBhaWduU3VtbWFyeTogW1wiR0VUIC9vcmdzL3tvcmd9L2NhbXBhaWducy97Y2FtcGFpZ25fbnVtYmVyfVwiXSxcbiAgICBsaXN0T3JnQ2FtcGFpZ25zOiBbXCJHRVQgL29yZ3Mve29yZ30vY2FtcGFpZ25zXCJdLFxuICAgIHVwZGF0ZUNhbXBhaWduOiBbXCJQQVRDSCAvb3Jncy97b3JnfS9jYW1wYWlnbnMve2NhbXBhaWduX251bWJlcn1cIl0sXG4gIH0sXG4gIGNoZWNrczoge1xuICAgIGNyZWF0ZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stcnVuc1wiXSxcbiAgICBjcmVhdGVTdWl0ZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stc3VpdGVzXCJdLFxuICAgIGdldDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1ydW5zL3tjaGVja19ydW5faWR9XCJdLFxuICAgIGdldFN1aXRlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXN1aXRlcy97Y2hlY2tfc3VpdGVfaWR9XCJdLFxuICAgIGxpc3RBbm5vdGF0aW9uczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXJ1bnMve2NoZWNrX3J1bl9pZH0vYW5ub3RhdGlvbnNcIixcbiAgICBdLFxuICAgIGxpc3RGb3JSZWY6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97cmVmfS9jaGVjay1ydW5zXCJdLFxuICAgIGxpc3RGb3JTdWl0ZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXN1aXRlcy97Y2hlY2tfc3VpdGVfaWR9L2NoZWNrLXJ1bnNcIixcbiAgICBdLFxuICAgIGxpc3RTdWl0ZXNGb3JSZWY6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97cmVmfS9jaGVjay1zdWl0ZXNcIl0sXG4gICAgcmVyZXF1ZXN0UnVuOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXJ1bnMve2NoZWNrX3J1bl9pZH0vcmVyZXF1ZXN0XCIsXG4gICAgXSxcbiAgICByZXJlcXVlc3RTdWl0ZTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1zdWl0ZXMve2NoZWNrX3N1aXRlX2lkfS9yZXJlcXVlc3RcIixcbiAgICBdLFxuICAgIHNldFN1aXRlc1ByZWZlcmVuY2VzOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1zdWl0ZXMvcHJlZmVyZW5jZXNcIixcbiAgICBdLFxuICAgIHVwZGF0ZTogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXJ1bnMve2NoZWNrX3J1bl9pZH1cIl0sXG4gIH0sXG4gIGNvZGVTY2FubmluZzoge1xuICAgIGNvbW1pdEF1dG9maXg6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn0vYXV0b2ZpeC9jb21taXRzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVBdXRvZml4OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9L2F1dG9maXhcIixcbiAgICBdLFxuICAgIGNyZWF0ZVZhcmlhbnRBbmFseXNpczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2NvZGVxbC92YXJpYW50LWFuYWx5c2VzXCIsXG4gICAgXSxcbiAgICBkZWxldGVBbmFseXNpczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYW5hbHlzZXMve2FuYWx5c2lzX2lkfXs/Y29uZmlybV9kZWxldGV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVDb2RlcWxEYXRhYmFzZTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvY29kZXFsL2RhdGFiYXNlcy97bGFuZ3VhZ2V9XCIsXG4gICAgXSxcbiAgICBnZXRBbGVydDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZFBhcmFtZXRlcnM6IHsgYWxlcnRfaWQ6IFwiYWxlcnRfbnVtYmVyXCIgfSB9LFxuICAgIF0sXG4gICAgZ2V0QW5hbHlzaXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FuYWx5c2VzL3thbmFseXNpc19pZH1cIixcbiAgICBdLFxuICAgIGdldEF1dG9maXg6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfS9hdXRvZml4XCIsXG4gICAgXSxcbiAgICBnZXRDb2RlcWxEYXRhYmFzZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvY29kZXFsL2RhdGFiYXNlcy97bGFuZ3VhZ2V9XCIsXG4gICAgXSxcbiAgICBnZXREZWZhdWx0U2V0dXA6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9kZWZhdWx0LXNldHVwXCJdLFxuICAgIGdldFNhcmlmOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvc2FyaWZzL3tzYXJpZl9pZH1cIl0sXG4gICAgZ2V0VmFyaWFudEFuYWx5c2lzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9jb2RlcWwvdmFyaWFudC1hbmFseXNlcy97Y29kZXFsX3ZhcmlhbnRfYW5hbHlzaXNfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRWYXJpYW50QW5hbHlzaXNSZXBvVGFzazogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvY29kZXFsL3ZhcmlhbnQtYW5hbHlzZXMve2NvZGVxbF92YXJpYW50X2FuYWx5c2lzX2lkfS9yZXBvcy97cmVwb19vd25lcn0ve3JlcG9fbmFtZX1cIixcbiAgICBdLFxuICAgIGxpc3RBbGVydEluc3RhbmNlczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9L2luc3RhbmNlc1wiLFxuICAgIF0sXG4gICAgbGlzdEFsZXJ0c0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2NvZGUtc2Nhbm5pbmcvYWxlcnRzXCJdLFxuICAgIGxpc3RBbGVydHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzXCJdLFxuICAgIGxpc3RBbGVydHNJbnN0YW5jZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfS9pbnN0YW5jZXNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJjb2RlU2Nhbm5pbmdcIiwgXCJsaXN0QWxlcnRJbnN0YW5jZXNcIl0gfSxcbiAgICBdLFxuICAgIGxpc3RDb2RlcWxEYXRhYmFzZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2NvZGVxbC9kYXRhYmFzZXNcIixcbiAgICBdLFxuICAgIGxpc3RSZWNlbnRBbmFseXNlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FuYWx5c2VzXCJdLFxuICAgIHVwZGF0ZUFsZXJ0OiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlRGVmYXVsdFNldHVwOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2RlZmF1bHQtc2V0dXBcIixcbiAgICBdLFxuICAgIHVwbG9hZFNhcmlmOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL3Nhcmlmc1wiXSxcbiAgfSxcbiAgY29kZVNlY3VyaXR5OiB7XG4gICAgYXR0YWNoQ29uZmlndXJhdGlvbjogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9L2F0dGFjaFwiLFxuICAgIF0sXG4gICAgYXR0YWNoRW50ZXJwcmlzZUNvbmZpZ3VyYXRpb246IFtcbiAgICAgIFwiUE9TVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9L2F0dGFjaFwiLFxuICAgIF0sXG4gICAgY3JlYXRlQ29uZmlndXJhdGlvbjogW1wiUE9TVCAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zXCJdLFxuICAgIGNyZWF0ZUNvbmZpZ3VyYXRpb25Gb3JFbnRlcnByaXNlOiBbXG4gICAgICBcIlBPU1QgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zXCIsXG4gICAgXSxcbiAgICBkZWxldGVDb25maWd1cmF0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlQ29uZmlndXJhdGlvbkZvckVudGVycHJpc2U6IFtcbiAgICAgIFwiREVMRVRFIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRldGFjaENvbmZpZ3VyYXRpb246IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMvZGV0YWNoXCIsXG4gICAgXSxcbiAgICBnZXRDb25maWd1cmF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0Q29uZmlndXJhdGlvbkZvclJlcG9zaXRvcnk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNlY3VyaXR5LWNvbmZpZ3VyYXRpb25cIixcbiAgICBdLFxuICAgIGdldENvbmZpZ3VyYXRpb25zRm9yRW50ZXJwcmlzZTogW1xuICAgICAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zXCIsXG4gICAgXSxcbiAgICBnZXRDb25maWd1cmF0aW9uc0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnNcIl0sXG4gICAgZ2V0RGVmYXVsdENvbmZpZ3VyYXRpb25zOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL2RlZmF1bHRzXCIsXG4gICAgXSxcbiAgICBnZXREZWZhdWx0Q29uZmlndXJhdGlvbnNGb3JFbnRlcnByaXNlOiBbXG4gICAgICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMvZGVmYXVsdHNcIixcbiAgICBdLFxuICAgIGdldFJlcG9zaXRvcmllc0ZvckNvbmZpZ3VyYXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgZ2V0UmVwb3NpdG9yaWVzRm9yRW50ZXJwcmlzZUNvbmZpZ3VyYXRpb246IFtcbiAgICAgIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBnZXRTaW5nbGVDb25maWd1cmF0aW9uRm9yRW50ZXJwcmlzZTogW1xuICAgICAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgc2V0Q29uZmlndXJhdGlvbkFzRGVmYXVsdDogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH0vZGVmYXVsdHNcIixcbiAgICBdLFxuICAgIHNldENvbmZpZ3VyYXRpb25Bc0RlZmF1bHRGb3JFbnRlcnByaXNlOiBbXG4gICAgICBcIlBVVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9L2RlZmF1bHRzXCIsXG4gICAgXSxcbiAgICB1cGRhdGVDb25maWd1cmF0aW9uOiBbXG4gICAgICBcIlBBVENIIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVFbnRlcnByaXNlQ29uZmlndXJhdGlvbjogW1xuICAgICAgXCJQQVRDSCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9XCIsXG4gICAgXSxcbiAgfSxcbiAgY29kZXNPZkNvbmR1Y3Q6IHtcbiAgICBnZXRBbGxDb2Rlc09mQ29uZHVjdDogW1wiR0VUIC9jb2Rlc19vZl9jb25kdWN0XCJdLFxuICAgIGdldENvbmR1Y3RDb2RlOiBbXCJHRVQgL2NvZGVzX29mX2NvbmR1Y3Qve2tleX1cIl0sXG4gIH0sXG4gIGNvZGVzcGFjZXM6IHtcbiAgICBhZGRSZXBvc2l0b3J5Rm9yU2VjcmV0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUFVUIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIGFkZFNlbGVjdGVkUmVwb1RvT3JnU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBjaGVja1Blcm1pc3Npb25zRm9yRGV2Y29udGFpbmVyOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9wZXJtaXNzaW9uc19jaGVja1wiLFxuICAgIF0sXG4gICAgY29kZXNwYWNlTWFjaGluZXNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9L21hY2hpbmVzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9jb2Rlc3BhY2VzXCJdLFxuICAgIGNyZWF0ZU9yVXBkYXRlT3JnU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgY3JlYXRlT3JVcGRhdGVSZXBvU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGNyZWF0ZU9yVXBkYXRlU2VjcmV0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUFVUIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBjcmVhdGVXaXRoUHJGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L2NvZGVzcGFjZXNcIixcbiAgICBdLFxuICAgIGNyZWF0ZVdpdGhSZXBvRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlc1wiLFxuICAgIF0sXG4gICAgZGVsZXRlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkRFTEVURSAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX1cIl0sXG4gICAgZGVsZXRlRnJvbU9yZ2FuaXphdGlvbjogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vbWVtYmVycy97dXNlcm5hbWV9L2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlT3JnU2VjcmV0OiBbXCJERUxFVEUgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZGVsZXRlUmVwb1NlY3JldDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVTZWNyZXRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGV4cG9ydEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBPU1QgL3VzZXIvY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9L2V4cG9ydHNcIixcbiAgICBdLFxuICAgIGdldENvZGVzcGFjZXNGb3JVc2VySW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L21lbWJlcnMve3VzZXJuYW1lfS9jb2Rlc3BhY2VzXCIsXG4gICAgXSxcbiAgICBnZXRFeHBvcnREZXRhaWxzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfS9leHBvcnRzL3tleHBvcnRfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfVwiXSxcbiAgICBnZXRPcmdQdWJsaWNLZXk6IFtcIkdFVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHMvcHVibGljLWtleVwiXSxcbiAgICBnZXRPcmdTZWNyZXQ6IFtcIkdFVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfVwiXSxcbiAgICBnZXRQdWJsaWNLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzL3B1YmxpYy1rZXlcIixcbiAgICBdLFxuICAgIGdldFJlcG9QdWJsaWNLZXk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL3NlY3JldHMvcHVibGljLWtleVwiLFxuICAgIF0sXG4gICAgZ2V0UmVwb1NlY3JldDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBnZXRTZWNyZXRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGxpc3REZXZjb250YWluZXJzSW5SZXBvc2l0b3J5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL2RldmNvbnRhaW5lcnNcIixcbiAgICBdLFxuICAgIGxpc3RGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2NvZGVzcGFjZXNcIl0sXG4gICAgbGlzdEluT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZFBhcmFtZXRlcnM6IHsgb3JnX2lkOiBcIm9yZ1wiIH0gfSxcbiAgICBdLFxuICAgIGxpc3RJblJlcG9zaXRvcnlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXNcIixcbiAgICBdLFxuICAgIGxpc3RPcmdTZWNyZXRzOiBbXCJHRVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzXCJdLFxuICAgIGxpc3RSZXBvU2VjcmV0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL3NlY3JldHNcIl0sXG4gICAgbGlzdFJlcG9zaXRvcmllc0ZvclNlY3JldEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGxpc3RTZWNyZXRzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHNcIl0sXG4gICAgbGlzdFNlbGVjdGVkUmVwb3NGb3JPcmdTZWNyZXQ6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgcHJlRmxpZ2h0V2l0aFJlcG9Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvbmV3XCIsXG4gICAgXSxcbiAgICBwdWJsaXNoRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUE9TVCAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX0vcHVibGlzaFwiLFxuICAgIF0sXG4gICAgcmVtb3ZlUmVwb3NpdG9yeUZvclNlY3JldEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICByZW1vdmVTZWxlY3RlZFJlcG9Gcm9tT3JnU2VjcmV0OiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICByZXBvTWFjaGluZXNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvbWFjaGluZXNcIixcbiAgICBdLFxuICAgIHNldFJlcG9zaXRvcmllc0ZvclNlY3JldEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBVVCAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIHNldFNlbGVjdGVkUmVwb3NGb3JPcmdTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgc3RhcnRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX0vc3RhcnRcIl0sXG4gICAgc3RvcEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfS9zdG9wXCJdLFxuICAgIHN0b3BJbk9yZ2FuaXphdGlvbjogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L21lbWJlcnMve3VzZXJuYW1lfS9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX0vc3RvcFwiLFxuICAgIF0sXG4gICAgdXBkYXRlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBBVENIIC91c2VyL2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfVwiXSxcbiAgfSxcbiAgY29waWxvdDoge1xuICAgIGFkZENvcGlsb3RTZWF0c0ZvclRlYW1zOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vY29waWxvdC9iaWxsaW5nL3NlbGVjdGVkX3RlYW1zXCIsXG4gICAgXSxcbiAgICBhZGRDb3BpbG90U2VhdHNGb3JVc2VyczogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2NvcGlsb3QvYmlsbGluZy9zZWxlY3RlZF91c2Vyc1wiLFxuICAgIF0sXG4gICAgY2FuY2VsQ29waWxvdFNlYXRBc3NpZ25tZW50Rm9yVGVhbXM6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2NvcGlsb3QvYmlsbGluZy9zZWxlY3RlZF90ZWFtc1wiLFxuICAgIF0sXG4gICAgY2FuY2VsQ29waWxvdFNlYXRBc3NpZ25tZW50Rm9yVXNlcnM6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2NvcGlsb3QvYmlsbGluZy9zZWxlY3RlZF91c2Vyc1wiLFxuICAgIF0sXG4gICAgY29waWxvdE1ldHJpY3NGb3JPcmdhbml6YXRpb246IFtcIkdFVCAvb3Jncy97b3JnfS9jb3BpbG90L21ldHJpY3NcIl0sXG4gICAgY29waWxvdE1ldHJpY3NGb3JUZWFtOiBbXCJHRVQgL29yZ3Mve29yZ30vdGVhbS97dGVhbV9zbHVnfS9jb3BpbG90L21ldHJpY3NcIl0sXG4gICAgZ2V0Q29waWxvdE9yZ2FuaXphdGlvbkRldGFpbHM6IFtcIkdFVCAvb3Jncy97b3JnfS9jb3BpbG90L2JpbGxpbmdcIl0sXG4gICAgZ2V0Q29waWxvdFNlYXREZXRhaWxzRm9yVXNlcjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vbWVtYmVycy97dXNlcm5hbWV9L2NvcGlsb3RcIixcbiAgICBdLFxuICAgIGxpc3RDb3BpbG90U2VhdHM6IFtcIkdFVCAvb3Jncy97b3JnfS9jb3BpbG90L2JpbGxpbmcvc2VhdHNcIl0sXG4gIH0sXG4gIGNyZWRlbnRpYWxzOiB7IHJldm9rZTogW1wiUE9TVCAvY3JlZGVudGlhbHMvcmV2b2tlXCJdIH0sXG4gIGRlcGVuZGFib3Q6IHtcbiAgICBhZGRTZWxlY3RlZFJlcG9Ub09yZ1NlY3JldDogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgY3JlYXRlT3JVcGRhdGVPcmdTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBjcmVhdGVPclVwZGF0ZVJlcG9TZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlT3JnU2VjcmV0OiBbXCJERUxFVEUgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZGVsZXRlUmVwb1NlY3JldDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGFib3Qvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBnZXRBbGVydDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L2FsZXJ0cy97YWxlcnRfbnVtYmVyfVwiXSxcbiAgICBnZXRPcmdQdWJsaWNLZXk6IFtcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHMvcHVibGljLWtleVwiXSxcbiAgICBnZXRPcmdTZWNyZXQ6IFtcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfVwiXSxcbiAgICBnZXRSZXBvUHVibGljS2V5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9zZWNyZXRzL3B1YmxpYy1rZXlcIixcbiAgICBdLFxuICAgIGdldFJlcG9TZWNyZXQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgbGlzdEFsZXJ0c0ZvckVudGVycHJpc2U6IFtcbiAgICAgIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vZGVwZW5kYWJvdC9hbGVydHNcIixcbiAgICBdLFxuICAgIGxpc3RBbGVydHNGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L2FsZXJ0c1wiXSxcbiAgICBsaXN0QWxlcnRzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L2FsZXJ0c1wiXSxcbiAgICBsaXN0T3JnU2VjcmV0czogW1wiR0VUIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0c1wiXSxcbiAgICBsaXN0UmVwb1NlY3JldHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9zZWNyZXRzXCJdLFxuICAgIGxpc3RTZWxlY3RlZFJlcG9zRm9yT3JnU2VjcmV0OiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIHJlbW92ZVNlbGVjdGVkUmVwb0Zyb21PcmdTZWNyZXQ6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIHJlcG9zaXRvcnlBY2Nlc3NGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdhbml6YXRpb25zL3tvcmd9L2RlcGVuZGFib3QvcmVwb3NpdG9yeS1hY2Nlc3NcIixcbiAgICBdLFxuICAgIHNldFJlcG9zaXRvcnlBY2Nlc3NEZWZhdWx0TGV2ZWw6IFtcbiAgICAgIFwiUFVUIC9vcmdhbml6YXRpb25zL3tvcmd9L2RlcGVuZGFib3QvcmVwb3NpdG9yeS1hY2Nlc3MvZGVmYXVsdC1sZXZlbFwiLFxuICAgIF0sXG4gICAgc2V0U2VsZWN0ZWRSZXBvc0Zvck9yZ1NlY3JldDogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICB1cGRhdGVBbGVydDogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9hbGVydHMve2FsZXJ0X251bWJlcn1cIixcbiAgICBdLFxuICAgIHVwZGF0ZVJlcG9zaXRvcnlBY2Nlc3NGb3JPcmc6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ2FuaXphdGlvbnMve29yZ30vZGVwZW5kYWJvdC9yZXBvc2l0b3J5LWFjY2Vzc1wiLFxuICAgIF0sXG4gIH0sXG4gIGRlcGVuZGVuY3lHcmFwaDoge1xuICAgIGNyZWF0ZVJlcG9zaXRvcnlTbmFwc2hvdDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRlbmN5LWdyYXBoL3NuYXBzaG90c1wiLFxuICAgIF0sXG4gICAgZGlmZlJhbmdlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kZW5jeS1ncmFwaC9jb21wYXJlL3tiYXNlaGVhZH1cIixcbiAgICBdLFxuICAgIGV4cG9ydFNib206IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kZW5jeS1ncmFwaC9zYm9tXCJdLFxuICB9LFxuICBlbW9qaXM6IHsgZ2V0OiBbXCJHRVQgL2Vtb2ppc1wiXSB9LFxuICBlbnRlcnByaXNlVGVhbU1lbWJlcnNoaXBzOiB7XG4gICAgYWRkOiBbXG4gICAgICBcIlBVVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L21lbWJlcnNoaXBzL3t1c2VybmFtZX1cIixcbiAgICBdLFxuICAgIGJ1bGtBZGQ6IFtcbiAgICAgIFwiUE9TVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L21lbWJlcnNoaXBzL2FkZFwiLFxuICAgIF0sXG4gICAgYnVsa1JlbW92ZTogW1xuICAgICAgXCJQT1NUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vbWVtYmVyc2hpcHMvcmVtb3ZlXCIsXG4gICAgXSxcbiAgICBnZXQ6IFtcbiAgICAgIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vbWVtYmVyc2hpcHMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgbGlzdDogW1wiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vbWVtYmVyc2hpcHNcIl0sXG4gICAgcmVtb3ZlOiBbXG4gICAgICBcIkRFTEVURSAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L21lbWJlcnNoaXBzL3t1c2VybmFtZX1cIixcbiAgICBdLFxuICB9LFxuICBlbnRlcnByaXNlVGVhbU9yZ2FuaXphdGlvbnM6IHtcbiAgICBhZGQ6IFtcbiAgICAgIFwiUFVUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vb3JnYW5pemF0aW9ucy97b3JnfVwiLFxuICAgIF0sXG4gICAgYnVsa0FkZDogW1xuICAgICAgXCJQT1NUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vb3JnYW5pemF0aW9ucy9hZGRcIixcbiAgICBdLFxuICAgIGJ1bGtSZW1vdmU6IFtcbiAgICAgIFwiUE9TVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L29yZ2FuaXphdGlvbnMvcmVtb3ZlXCIsXG4gICAgXSxcbiAgICBkZWxldGU6IFtcbiAgICAgIFwiREVMRVRFIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vb3JnYW5pemF0aW9ucy97b3JnfVwiLFxuICAgIF0sXG4gICAgZ2V0QXNzaWdubWVudDogW1xuICAgICAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9vcmdhbml6YXRpb25zL3tvcmd9XCIsXG4gICAgXSxcbiAgICBnZXRBc3NpZ25tZW50czogW1xuICAgICAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9vcmdhbml6YXRpb25zXCIsXG4gICAgXSxcbiAgfSxcbiAgZW50ZXJwcmlzZVRlYW1zOiB7XG4gICAgY3JlYXRlOiBbXCJQT1NUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXNcIl0sXG4gICAgZGVsZXRlOiBbXCJERUxFVEUgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97dGVhbV9zbHVnfVwiXSxcbiAgICBnZXQ6IFtcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3t0ZWFtX3NsdWd9XCJdLFxuICAgIGxpc3Q6IFtcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zXCJdLFxuICAgIHVwZGF0ZTogW1wiUEFUQ0ggL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97dGVhbV9zbHVnfVwiXSxcbiAgfSxcbiAgZ2lzdHM6IHtcbiAgICBjaGVja0lzU3RhcnJlZDogW1wiR0VUIC9naXN0cy97Z2lzdF9pZH0vc3RhclwiXSxcbiAgICBjcmVhdGU6IFtcIlBPU1QgL2dpc3RzXCJdLFxuICAgIGNyZWF0ZUNvbW1lbnQ6IFtcIlBPU1QgL2dpc3RzL3tnaXN0X2lkfS9jb21tZW50c1wiXSxcbiAgICBkZWxldGU6IFtcIkRFTEVURSAvZ2lzdHMve2dpc3RfaWR9XCJdLFxuICAgIGRlbGV0ZUNvbW1lbnQ6IFtcIkRFTEVURSAvZ2lzdHMve2dpc3RfaWR9L2NvbW1lbnRzL3tjb21tZW50X2lkfVwiXSxcbiAgICBmb3JrOiBbXCJQT1NUIC9naXN0cy97Z2lzdF9pZH0vZm9ya3NcIl0sXG4gICAgZ2V0OiBbXCJHRVQgL2dpc3RzL3tnaXN0X2lkfVwiXSxcbiAgICBnZXRDb21tZW50OiBbXCJHRVQgL2dpc3RzL3tnaXN0X2lkfS9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gICAgZ2V0UmV2aXNpb246IFtcIkdFVCAvZ2lzdHMve2dpc3RfaWR9L3tzaGF9XCJdLFxuICAgIGxpc3Q6IFtcIkdFVCAvZ2lzdHNcIl0sXG4gICAgbGlzdENvbW1lbnRzOiBbXCJHRVQgL2dpc3RzL3tnaXN0X2lkfS9jb21tZW50c1wiXSxcbiAgICBsaXN0Q29tbWl0czogW1wiR0VUIC9naXN0cy97Z2lzdF9pZH0vY29tbWl0c1wiXSxcbiAgICBsaXN0Rm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2dpc3RzXCJdLFxuICAgIGxpc3RGb3JrczogW1wiR0VUIC9naXN0cy97Z2lzdF9pZH0vZm9ya3NcIl0sXG4gICAgbGlzdFB1YmxpYzogW1wiR0VUIC9naXN0cy9wdWJsaWNcIl0sXG4gICAgbGlzdFN0YXJyZWQ6IFtcIkdFVCAvZ2lzdHMvc3RhcnJlZFwiXSxcbiAgICBzdGFyOiBbXCJQVVQgL2dpc3RzL3tnaXN0X2lkfS9zdGFyXCJdLFxuICAgIHVuc3RhcjogW1wiREVMRVRFIC9naXN0cy97Z2lzdF9pZH0vc3RhclwiXSxcbiAgICB1cGRhdGU6IFtcIlBBVENIIC9naXN0cy97Z2lzdF9pZH1cIl0sXG4gICAgdXBkYXRlQ29tbWVudDogW1wiUEFUQ0ggL2dpc3RzL3tnaXN0X2lkfS9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gIH0sXG4gIGdpdDoge1xuICAgIGNyZWF0ZUJsb2I6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC9ibG9ic1wiXSxcbiAgICBjcmVhdGVDb21taXQ6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC9jb21taXRzXCJdLFxuICAgIGNyZWF0ZVJlZjogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L3JlZnNcIl0sXG4gICAgY3JlYXRlVGFnOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvdGFnc1wiXSxcbiAgICBjcmVhdGVUcmVlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvdHJlZXNcIl0sXG4gICAgZGVsZXRlUmVmOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC9yZWZzL3tyZWZ9XCJdLFxuICAgIGdldEJsb2I6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L2Jsb2JzL3tmaWxlX3NoYX1cIl0sXG4gICAgZ2V0Q29tbWl0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC9jb21taXRzL3tjb21taXRfc2hhfVwiXSxcbiAgICBnZXRSZWY6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L3JlZi97cmVmfVwiXSxcbiAgICBnZXRUYWc6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L3RhZ3Mve3RhZ19zaGF9XCJdLFxuICAgIGdldFRyZWU6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L3RyZWVzL3t0cmVlX3NoYX1cIl0sXG4gICAgbGlzdE1hdGNoaW5nUmVmczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvbWF0Y2hpbmctcmVmcy97cmVmfVwiXSxcbiAgICB1cGRhdGVSZWY6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvcmVmcy97cmVmfVwiXSxcbiAgfSxcbiAgZ2l0aWdub3JlOiB7XG4gICAgZ2V0QWxsVGVtcGxhdGVzOiBbXCJHRVQgL2dpdGlnbm9yZS90ZW1wbGF0ZXNcIl0sXG4gICAgZ2V0VGVtcGxhdGU6IFtcIkdFVCAvZ2l0aWdub3JlL3RlbXBsYXRlcy97bmFtZX1cIl0sXG4gIH0sXG4gIGhvc3RlZENvbXB1dGU6IHtcbiAgICBjcmVhdGVOZXR3b3JrQ29uZmlndXJhdGlvbkZvck9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3NldHRpbmdzL25ldHdvcmstY29uZmlndXJhdGlvbnNcIixcbiAgICBdLFxuICAgIGRlbGV0ZU5ldHdvcmtDb25maWd1cmF0aW9uRnJvbU9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vc2V0dGluZ3MvbmV0d29yay1jb25maWd1cmF0aW9ucy97bmV0d29ya19jb25maWd1cmF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0TmV0d29ya0NvbmZpZ3VyYXRpb25Gb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL25ldHdvcmstY29uZmlndXJhdGlvbnMve25ldHdvcmtfY29uZmlndXJhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGdldE5ldHdvcmtTZXR0aW5nc0Zvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvbmV0d29yay1zZXR0aW5ncy97bmV0d29ya19zZXR0aW5nc19pZH1cIixcbiAgICBdLFxuICAgIGxpc3ROZXR3b3JrQ29uZmlndXJhdGlvbnNGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL25ldHdvcmstY29uZmlndXJhdGlvbnNcIixcbiAgICBdLFxuICAgIHVwZGF0ZU5ldHdvcmtDb25maWd1cmF0aW9uRm9yT3JnOiBbXG4gICAgICBcIlBBVENIIC9vcmdzL3tvcmd9L3NldHRpbmdzL25ldHdvcmstY29uZmlndXJhdGlvbnMve25ldHdvcmtfY29uZmlndXJhdGlvbl9pZH1cIixcbiAgICBdLFxuICB9LFxuICBpbnRlcmFjdGlvbnM6IHtcbiAgICBnZXRSZXN0cmljdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2ludGVyYWN0aW9uLWxpbWl0c1wiXSxcbiAgICBnZXRSZXN0cmljdGlvbnNGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9pbnRlcmFjdGlvbi1saW1pdHNcIl0sXG4gICAgZ2V0UmVzdHJpY3Rpb25zRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbnRlcmFjdGlvbi1saW1pdHNcIl0sXG4gICAgZ2V0UmVzdHJpY3Rpb25zRm9yWW91clB1YmxpY1JlcG9zOiBbXG4gICAgICBcIkdFVCAvdXNlci9pbnRlcmFjdGlvbi1saW1pdHNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJpbnRlcmFjdGlvbnNcIiwgXCJnZXRSZXN0cmljdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgcmVtb3ZlUmVzdHJpY3Rpb25zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkRFTEVURSAvdXNlci9pbnRlcmFjdGlvbi1saW1pdHNcIl0sXG4gICAgcmVtb3ZlUmVzdHJpY3Rpb25zRm9yT3JnOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vaW50ZXJhY3Rpb24tbGltaXRzXCJdLFxuICAgIHJlbW92ZVJlc3RyaWN0aW9uc0ZvclJlcG86IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbnRlcmFjdGlvbi1saW1pdHNcIixcbiAgICBdLFxuICAgIHJlbW92ZVJlc3RyaWN0aW9uc0ZvcllvdXJQdWJsaWNSZXBvczogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvaW50ZXJhY3Rpb24tbGltaXRzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wiaW50ZXJhY3Rpb25zXCIsIFwicmVtb3ZlUmVzdHJpY3Rpb25zRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIHNldFJlc3RyaWN0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQVVQgL3VzZXIvaW50ZXJhY3Rpb24tbGltaXRzXCJdLFxuICAgIHNldFJlc3RyaWN0aW9uc0Zvck9yZzogW1wiUFVUIC9vcmdzL3tvcmd9L2ludGVyYWN0aW9uLWxpbWl0c1wiXSxcbiAgICBzZXRSZXN0cmljdGlvbnNGb3JSZXBvOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ludGVyYWN0aW9uLWxpbWl0c1wiXSxcbiAgICBzZXRSZXN0cmljdGlvbnNGb3JZb3VyUHVibGljUmVwb3M6IFtcbiAgICAgIFwiUFVUIC91c2VyL2ludGVyYWN0aW9uLWxpbWl0c1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcImludGVyYWN0aW9uc1wiLCBcInNldFJlc3RyaWN0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgfSxcbiAgaXNzdWVzOiB7XG4gICAgYWRkQXNzaWduZWVzOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9hc3NpZ25lZXNcIixcbiAgICBdLFxuICAgIGFkZEJsb2NrZWRCeURlcGVuZGVuY3k6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2RlcGVuZGVuY2llcy9ibG9ja2VkX2J5XCIsXG4gICAgXSxcbiAgICBhZGRMYWJlbHM6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sYWJlbHNcIl0sXG4gICAgYWRkU3ViSXNzdWU6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3N1Yl9pc3N1ZXNcIixcbiAgICBdLFxuICAgIGNoZWNrVXNlckNhbkJlQXNzaWduZWQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXNzaWduZWVzL3thc3NpZ25lZX1cIl0sXG4gICAgY2hlY2tVc2VyQ2FuQmVBc3NpZ25lZFRvSXNzdWU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vYXNzaWduZWVzL3thc3NpZ25lZX1cIixcbiAgICBdLFxuICAgIGNyZWF0ZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzXCJdLFxuICAgIGNyZWF0ZUNvbW1lbnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVMYWJlbDogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vbGFiZWxzXCJdLFxuICAgIGNyZWF0ZU1pbGVzdG9uZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vbWlsZXN0b25lc1wiXSxcbiAgICBkZWxldGVDb21tZW50OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzL3tjb21tZW50X2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlTGFiZWw6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vbGFiZWxzL3tuYW1lfVwiXSxcbiAgICBkZWxldGVNaWxlc3RvbmU6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzL3ttaWxlc3RvbmVfbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgZ2V0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfVwiXSxcbiAgICBnZXRDb21tZW50OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gICAgZ2V0RXZlbnQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2V2ZW50cy97ZXZlbnRfaWR9XCJdLFxuICAgIGdldExhYmVsOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2xhYmVscy97bmFtZX1cIl0sXG4gICAgZ2V0TWlsZXN0b25lOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L21pbGVzdG9uZXMve21pbGVzdG9uZV9udW1iZXJ9XCJdLFxuICAgIGdldFBhcmVudDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vcGFyZW50XCJdLFxuICAgIGxpc3Q6IFtcIkdFVCAvaXNzdWVzXCJdLFxuICAgIGxpc3RBc3NpZ25lZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXNzaWduZWVzXCJdLFxuICAgIGxpc3RDb21tZW50czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vY29tbWVudHNcIl0sXG4gICAgbGlzdENvbW1lbnRzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvY29tbWVudHNcIl0sXG4gICAgbGlzdERlcGVuZGVuY2llc0Jsb2NrZWRCeTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9kZXBlbmRlbmNpZXMvYmxvY2tlZF9ieVwiLFxuICAgIF0sXG4gICAgbGlzdERlcGVuZGVuY2llc0Jsb2NraW5nOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2RlcGVuZGVuY2llcy9ibG9ja2luZ1wiLFxuICAgIF0sXG4gICAgbGlzdEV2ZW50czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vZXZlbnRzXCJdLFxuICAgIGxpc3RFdmVudHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9ldmVudHNcIl0sXG4gICAgbGlzdEV2ZW50c0ZvclRpbWVsaW5lOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3RpbWVsaW5lXCIsXG4gICAgXSxcbiAgICBsaXN0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9pc3N1ZXNcIl0sXG4gICAgbGlzdEZvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2lzc3Vlc1wiXSxcbiAgICBsaXN0Rm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXNcIl0sXG4gICAgbGlzdExhYmVsc0Zvck1pbGVzdG9uZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L21pbGVzdG9uZXMve21pbGVzdG9uZV9udW1iZXJ9L2xhYmVsc1wiLFxuICAgIF0sXG4gICAgbGlzdExhYmVsc0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbGFiZWxzXCJdLFxuICAgIGxpc3RMYWJlbHNPbklzc3VlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2xhYmVsc1wiLFxuICAgIF0sXG4gICAgbGlzdE1pbGVzdG9uZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbWlsZXN0b25lc1wiXSxcbiAgICBsaXN0U3ViSXNzdWVzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3N1Yl9pc3N1ZXNcIixcbiAgICBdLFxuICAgIGxvY2s6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2xvY2tcIl0sXG4gICAgcmVtb3ZlQWxsTGFiZWxzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2xhYmVsc1wiLFxuICAgIF0sXG4gICAgcmVtb3ZlQXNzaWduZWVzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2Fzc2lnbmVlc1wiLFxuICAgIF0sXG4gICAgcmVtb3ZlRGVwZW5kZW5jeUJsb2NrZWRCeTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9kZXBlbmRlbmNpZXMvYmxvY2tlZF9ieS97aXNzdWVfaWR9XCIsXG4gICAgXSxcbiAgICByZW1vdmVMYWJlbDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sYWJlbHMve25hbWV9XCIsXG4gICAgXSxcbiAgICByZW1vdmVTdWJJc3N1ZTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9zdWJfaXNzdWVcIixcbiAgICBdLFxuICAgIHJlcHJpb3JpdGl6ZVN1Yklzc3VlOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vc3ViX2lzc3Vlcy9wcmlvcml0eVwiLFxuICAgIF0sXG4gICAgc2V0TGFiZWxzOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sYWJlbHNcIl0sXG4gICAgdW5sb2NrOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sb2NrXCJdLFxuICAgIHVwZGF0ZTogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfVwiXSxcbiAgICB1cGRhdGVDb21tZW50OiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzL3tjb21tZW50X2lkfVwiXSxcbiAgICB1cGRhdGVMYWJlbDogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2xhYmVscy97bmFtZX1cIl0sXG4gICAgdXBkYXRlTWlsZXN0b25lOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzL3ttaWxlc3RvbmVfbnVtYmVyfVwiLFxuICAgIF0sXG4gIH0sXG4gIGxpY2Vuc2VzOiB7XG4gICAgZ2V0OiBbXCJHRVQgL2xpY2Vuc2VzL3tsaWNlbnNlfVwiXSxcbiAgICBnZXRBbGxDb21tb25seVVzZWQ6IFtcIkdFVCAvbGljZW5zZXNcIl0sXG4gICAgZ2V0Rm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9saWNlbnNlXCJdLFxuICB9LFxuICBtYXJrZG93bjoge1xuICAgIHJlbmRlcjogW1wiUE9TVCAvbWFya2Rvd25cIl0sXG4gICAgcmVuZGVyUmF3OiBbXG4gICAgICBcIlBPU1QgL21hcmtkb3duL3Jhd1wiLFxuICAgICAgeyBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IFwidGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiIH0gfSxcbiAgICBdLFxuICB9LFxuICBtZXRhOiB7XG4gICAgZ2V0OiBbXCJHRVQgL21ldGFcIl0sXG4gICAgZ2V0QWxsVmVyc2lvbnM6IFtcIkdFVCAvdmVyc2lvbnNcIl0sXG4gICAgZ2V0T2N0b2NhdDogW1wiR0VUIC9vY3RvY2F0XCJdLFxuICAgIGdldFplbjogW1wiR0VUIC96ZW5cIl0sXG4gICAgcm9vdDogW1wiR0VUIC9cIl0sXG4gIH0sXG4gIG1pZ3JhdGlvbnM6IHtcbiAgICBkZWxldGVBcmNoaXZlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vYXJjaGl2ZVwiLFxuICAgIF0sXG4gICAgZGVsZXRlQXJjaGl2ZUZvck9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9hcmNoaXZlXCIsXG4gICAgXSxcbiAgICBkb3dubG9hZEFyY2hpdmVGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vYXJjaGl2ZVwiLFxuICAgIF0sXG4gICAgZ2V0QXJjaGl2ZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L2FyY2hpdmVcIixcbiAgICBdLFxuICAgIGdldFN0YXR1c0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfVwiXSxcbiAgICBnZXRTdGF0dXNGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9XCJdLFxuICAgIGxpc3RGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL21pZ3JhdGlvbnNcIl0sXG4gICAgbGlzdEZvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnNcIl0sXG4gICAgbGlzdFJlcG9zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBsaXN0UmVwb3NGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L3JlcG9zaXRvcmllc1wiXSxcbiAgICBsaXN0UmVwb3NGb3JVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcIm1pZ3JhdGlvbnNcIiwgXCJsaXN0UmVwb3NGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgc3RhcnRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9taWdyYXRpb25zXCJdLFxuICAgIHN0YXJ0Rm9yT3JnOiBbXCJQT1NUIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnNcIl0sXG4gICAgdW5sb2NrUmVwb0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L3JlcG9zL3tyZXBvX25hbWV9L2xvY2tcIixcbiAgICBdLFxuICAgIHVubG9ja1JlcG9Gb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vcmVwb3Mve3JlcG9fbmFtZX0vbG9ja1wiLFxuICAgIF0sXG4gIH0sXG4gIG9pZGM6IHtcbiAgICBnZXRPaWRjQ3VzdG9tU3ViVGVtcGxhdGVGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvb2lkYy9jdXN0b21pemF0aW9uL3N1YlwiLFxuICAgIF0sXG4gICAgdXBkYXRlT2lkY0N1c3RvbVN1YlRlbXBsYXRlRm9yT3JnOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL29pZGMvY3VzdG9taXphdGlvbi9zdWJcIixcbiAgICBdLFxuICB9LFxuICBvcmdzOiB7XG4gICAgYWRkU2VjdXJpdHlNYW5hZ2VyVGVhbTogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vc2VjdXJpdHktbWFuYWdlcnMvdGVhbXMve3RlYW1fc2x1Z31cIixcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICBkZXByZWNhdGVkOlxuICAgICAgICAgIFwib2N0b2tpdC5yZXN0Lm9yZ3MuYWRkU2VjdXJpdHlNYW5hZ2VyVGVhbSgpIGlzIGRlcHJlY2F0ZWQsIHNlZSBodHRwczovL2RvY3MuZ2l0aHViLmNvbS9yZXN0L29yZ3Mvc2VjdXJpdHktbWFuYWdlcnMjYWRkLWEtc2VjdXJpdHktbWFuYWdlci10ZWFtXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgYXNzaWduVGVhbVRvT3JnUm9sZTogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3RlYW1zL3t0ZWFtX3NsdWd9L3tyb2xlX2lkfVwiLFxuICAgIF0sXG4gICAgYXNzaWduVXNlclRvT3JnUm9sZTogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3VzZXJzL3t1c2VybmFtZX0ve3JvbGVfaWR9XCIsXG4gICAgXSxcbiAgICBibG9ja1VzZXI6IFtcIlBVVCAvb3Jncy97b3JnfS9ibG9ja3Mve3VzZXJuYW1lfVwiXSxcbiAgICBjYW5jZWxJbnZpdGF0aW9uOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9XCJdLFxuICAgIGNoZWNrQmxvY2tlZFVzZXI6IFtcIkdFVCAvb3Jncy97b3JnfS9ibG9ja3Mve3VzZXJuYW1lfVwiXSxcbiAgICBjaGVja01lbWJlcnNoaXBGb3JVc2VyOiBbXCJHRVQgL29yZ3Mve29yZ30vbWVtYmVycy97dXNlcm5hbWV9XCJdLFxuICAgIGNoZWNrUHVibGljTWVtYmVyc2hpcEZvclVzZXI6IFtcIkdFVCAvb3Jncy97b3JnfS9wdWJsaWNfbWVtYmVycy97dXNlcm5hbWV9XCJdLFxuICAgIGNvbnZlcnRNZW1iZXJUb091dHNpZGVDb2xsYWJvcmF0b3I6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L291dHNpZGVfY29sbGFib3JhdG9ycy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICBjcmVhdGVBcnRpZmFjdFN0b3JhZ2VSZWNvcmQ6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9hcnRpZmFjdHMvbWV0YWRhdGEvc3RvcmFnZS1yZWNvcmRcIixcbiAgICBdLFxuICAgIGNyZWF0ZUludml0YXRpb246IFtcIlBPU1QgL29yZ3Mve29yZ30vaW52aXRhdGlvbnNcIl0sXG4gICAgY3JlYXRlSXNzdWVUeXBlOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2lzc3VlLXR5cGVzXCJdLFxuICAgIGNyZWF0ZVdlYmhvb2s6IFtcIlBPU1QgL29yZ3Mve29yZ30vaG9va3NcIl0sXG4gICAgY3VzdG9tUHJvcGVydGllc0Zvck9yZ3NDcmVhdGVPclVwZGF0ZU9yZ2FuaXphdGlvblZhbHVlczogW1xuICAgICAgXCJQQVRDSCAvb3JnYW5pemF0aW9ucy97b3JnfS9vcmctcHJvcGVydGllcy92YWx1ZXNcIixcbiAgICBdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JPcmdzR2V0T3JnYW5pemF0aW9uVmFsdWVzOiBbXG4gICAgICBcIkdFVCAvb3JnYW5pemF0aW9ucy97b3JnfS9vcmctcHJvcGVydGllcy92YWx1ZXNcIixcbiAgICBdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JSZXBvc0NyZWF0ZU9yVXBkYXRlT3JnYW5pemF0aW9uRGVmaW5pdGlvbjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vcHJvcGVydGllcy9zY2hlbWEve2N1c3RvbV9wcm9wZXJ0eV9uYW1lfVwiLFxuICAgIF0sXG4gICAgY3VzdG9tUHJvcGVydGllc0ZvclJlcG9zQ3JlYXRlT3JVcGRhdGVPcmdhbml6YXRpb25EZWZpbml0aW9uczogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS9wcm9wZXJ0aWVzL3NjaGVtYVwiLFxuICAgIF0sXG4gICAgY3VzdG9tUHJvcGVydGllc0ZvclJlcG9zQ3JlYXRlT3JVcGRhdGVPcmdhbml6YXRpb25WYWx1ZXM6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ3Mve29yZ30vcHJvcGVydGllcy92YWx1ZXNcIixcbiAgICBdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JSZXBvc0RlbGV0ZU9yZ2FuaXphdGlvbkRlZmluaXRpb246IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3Byb3BlcnRpZXMvc2NoZW1hL3tjdXN0b21fcHJvcGVydHlfbmFtZX1cIixcbiAgICBdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JSZXBvc0dldE9yZ2FuaXphdGlvbkRlZmluaXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3Byb3BlcnRpZXMvc2NoZW1hL3tjdXN0b21fcHJvcGVydHlfbmFtZX1cIixcbiAgICBdLFxuICAgIGN1c3RvbVByb3BlcnRpZXNGb3JSZXBvc0dldE9yZ2FuaXphdGlvbkRlZmluaXRpb25zOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9wcm9wZXJ0aWVzL3NjaGVtYVwiLFxuICAgIF0sXG4gICAgY3VzdG9tUHJvcGVydGllc0ZvclJlcG9zR2V0T3JnYW5pemF0aW9uVmFsdWVzOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9wcm9wZXJ0aWVzL3ZhbHVlc1wiLFxuICAgIF0sXG4gICAgZGVsZXRlOiBbXCJERUxFVEUgL29yZ3Mve29yZ31cIl0sXG4gICAgZGVsZXRlQXR0ZXN0YXRpb25zQnVsazogW1wiUE9TVCAvb3Jncy97b3JnfS9hdHRlc3RhdGlvbnMvZGVsZXRlLXJlcXVlc3RcIl0sXG4gICAgZGVsZXRlQXR0ZXN0YXRpb25zQnlJZDogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYXR0ZXN0YXRpb25zL3thdHRlc3RhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUF0dGVzdGF0aW9uc0J5U3ViamVjdERpZ2VzdDogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYXR0ZXN0YXRpb25zL2RpZ2VzdC97c3ViamVjdF9kaWdlc3R9XCIsXG4gICAgXSxcbiAgICBkZWxldGVJc3N1ZVR5cGU6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9pc3N1ZS10eXBlcy97aXNzdWVfdHlwZV9pZH1cIl0sXG4gICAgZGVsZXRlV2ViaG9vazogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfVwiXSxcbiAgICBkaXNhYmxlU2VsZWN0ZWRSZXBvc2l0b3J5SW1tdXRhYmxlUmVsZWFzZXNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3NldHRpbmdzL2ltbXV0YWJsZS1yZWxlYXNlcy9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBlbmFibGVTZWxlY3RlZFJlcG9zaXRvcnlJbW11dGFibGVSZWxlYXNlc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvaW1tdXRhYmxlLXJlbGVhc2VzL3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIGdldDogW1wiR0VUIC9vcmdzL3tvcmd9XCJdLFxuICAgIGdldEltbXV0YWJsZVJlbGVhc2VzU2V0dGluZ3M6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2ltbXV0YWJsZS1yZWxlYXNlc1wiLFxuICAgIF0sXG4gICAgZ2V0SW1tdXRhYmxlUmVsZWFzZXNTZXR0aW5nc1JlcG9zaXRvcmllczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvaW1tdXRhYmxlLXJlbGVhc2VzL3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgZ2V0TWVtYmVyc2hpcEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvbWVtYmVyc2hpcHMvb3Jncy97b3JnfVwiXSxcbiAgICBnZXRNZW1iZXJzaGlwRm9yVXNlcjogW1wiR0VUIC9vcmdzL3tvcmd9L21lbWJlcnNoaXBzL3t1c2VybmFtZX1cIl0sXG4gICAgZ2V0T3JnUm9sZTogW1wiR0VUIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlcy97cm9sZV9pZH1cIl0sXG4gICAgZ2V0T3JnUnVsZXNldEhpc3Rvcnk6IFtcIkdFVCAvb3Jncy97b3JnfS9ydWxlc2V0cy97cnVsZXNldF9pZH0vaGlzdG9yeVwiXSxcbiAgICBnZXRPcmdSdWxlc2V0VmVyc2lvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcnVsZXNldHMve3J1bGVzZXRfaWR9L2hpc3Rvcnkve3ZlcnNpb25faWR9XCIsXG4gICAgXSxcbiAgICBnZXRXZWJob29rOiBbXCJHRVQgL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9XCJdLFxuICAgIGdldFdlYmhvb2tDb25maWdGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9ob29rcy97aG9va19pZH0vY29uZmlnXCJdLFxuICAgIGdldFdlYmhvb2tEZWxpdmVyeTogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9L2RlbGl2ZXJpZXMve2RlbGl2ZXJ5X2lkfVwiLFxuICAgIF0sXG4gICAgbGlzdDogW1wiR0VUIC9vcmdhbml6YXRpb25zXCJdLFxuICAgIGxpc3RBcHBJbnN0YWxsYXRpb25zOiBbXCJHRVQgL29yZ3Mve29yZ30vaW5zdGFsbGF0aW9uc1wiXSxcbiAgICBsaXN0QXJ0aWZhY3RTdG9yYWdlUmVjb3JkczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYXJ0aWZhY3RzL3tzdWJqZWN0X2RpZ2VzdH0vbWV0YWRhdGEvc3RvcmFnZS1yZWNvcmRzXCIsXG4gICAgXSxcbiAgICBsaXN0QXR0ZXN0YXRpb25SZXBvc2l0b3JpZXM6IFtcIkdFVCAvb3Jncy97b3JnfS9hdHRlc3RhdGlvbnMvcmVwb3NpdG9yaWVzXCJdLFxuICAgIGxpc3RBdHRlc3RhdGlvbnM6IFtcIkdFVCAvb3Jncy97b3JnfS9hdHRlc3RhdGlvbnMve3N1YmplY3RfZGlnZXN0fVwiXSxcbiAgICBsaXN0QXR0ZXN0YXRpb25zQnVsazogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2F0dGVzdGF0aW9ucy9idWxrLWxpc3R7P3Blcl9wYWdlLGJlZm9yZSxhZnRlcn1cIixcbiAgICBdLFxuICAgIGxpc3RCbG9ja2VkVXNlcnM6IFtcIkdFVCAvb3Jncy97b3JnfS9ibG9ja3NcIl0sXG4gICAgbGlzdEZhaWxlZEludml0YXRpb25zOiBbXCJHRVQgL29yZ3Mve29yZ30vZmFpbGVkX2ludml0YXRpb25zXCJdLFxuICAgIGxpc3RGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL29yZ3NcIl0sXG4gICAgbGlzdEZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9vcmdzXCJdLFxuICAgIGxpc3RJbnZpdGF0aW9uVGVhbXM6IFtcIkdFVCAvb3Jncy97b3JnfS9pbnZpdGF0aW9ucy97aW52aXRhdGlvbl9pZH0vdGVhbXNcIl0sXG4gICAgbGlzdElzc3VlVHlwZXM6IFtcIkdFVCAvb3Jncy97b3JnfS9pc3N1ZS10eXBlc1wiXSxcbiAgICBsaXN0TWVtYmVyczogW1wiR0VUIC9vcmdzL3tvcmd9L21lbWJlcnNcIl0sXG4gICAgbGlzdE1lbWJlcnNoaXBzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9tZW1iZXJzaGlwcy9vcmdzXCJdLFxuICAgIGxpc3RPcmdSb2xlVGVhbXM6IFtcIkdFVCAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMve3JvbGVfaWR9L3RlYW1zXCJdLFxuICAgIGxpc3RPcmdSb2xlVXNlcnM6IFtcIkdFVCAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMve3JvbGVfaWR9L3VzZXJzXCJdLFxuICAgIGxpc3RPcmdSb2xlczogW1wiR0VUIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlc1wiXSxcbiAgICBsaXN0T3JnYW5pemF0aW9uRmluZUdyYWluZWRQZXJtaXNzaW9uczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLWZpbmUtZ3JhaW5lZC1wZXJtaXNzaW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdE91dHNpZGVDb2xsYWJvcmF0b3JzOiBbXCJHRVQgL29yZ3Mve29yZ30vb3V0c2lkZV9jb2xsYWJvcmF0b3JzXCJdLFxuICAgIGxpc3RQYXRHcmFudFJlcG9zaXRvcmllczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2Vucy97cGF0X2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGxpc3RQYXRHcmFudFJlcXVlc3RSZXBvc2l0b3JpZXM6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbi1yZXF1ZXN0cy97cGF0X3JlcXVlc3RfaWR9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgbGlzdFBhdEdyYW50UmVxdWVzdHM6IFtcIkdFVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW4tcmVxdWVzdHNcIl0sXG4gICAgbGlzdFBhdEdyYW50czogW1wiR0VUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbnNcIl0sXG4gICAgbGlzdFBlbmRpbmdJbnZpdGF0aW9uczogW1wiR0VUIC9vcmdzL3tvcmd9L2ludml0YXRpb25zXCJdLFxuICAgIGxpc3RQdWJsaWNNZW1iZXJzOiBbXCJHRVQgL29yZ3Mve29yZ30vcHVibGljX21lbWJlcnNcIl0sXG4gICAgbGlzdFNlY3VyaXR5TWFuYWdlclRlYW1zOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9zZWN1cml0eS1tYW5hZ2Vyc1wiLFxuICAgICAge30sXG4gICAgICB7XG4gICAgICAgIGRlcHJlY2F0ZWQ6XG4gICAgICAgICAgXCJvY3Rva2l0LnJlc3Qub3Jncy5saXN0U2VjdXJpdHlNYW5hZ2VyVGVhbXMoKSBpcyBkZXByZWNhdGVkLCBzZWUgaHR0cHM6Ly9kb2NzLmdpdGh1Yi5jb20vcmVzdC9vcmdzL3NlY3VyaXR5LW1hbmFnZXJzI2xpc3Qtc2VjdXJpdHktbWFuYWdlci10ZWFtc1wiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGxpc3RXZWJob29rRGVsaXZlcmllczogW1wiR0VUIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfS9kZWxpdmVyaWVzXCJdLFxuICAgIGxpc3RXZWJob29rczogW1wiR0VUIC9vcmdzL3tvcmd9L2hvb2tzXCJdLFxuICAgIHBpbmdXZWJob29rOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfS9waW5nc1wiXSxcbiAgICByZWRlbGl2ZXJXZWJob29rRGVsaXZlcnk6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9ob29rcy97aG9va19pZH0vZGVsaXZlcmllcy97ZGVsaXZlcnlfaWR9L2F0dGVtcHRzXCIsXG4gICAgXSxcbiAgICByZW1vdmVNZW1iZXI6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9tZW1iZXJzL3t1c2VybmFtZX1cIl0sXG4gICAgcmVtb3ZlTWVtYmVyc2hpcEZvclVzZXI6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9tZW1iZXJzaGlwcy97dXNlcm5hbWV9XCJdLFxuICAgIHJlbW92ZU91dHNpZGVDb2xsYWJvcmF0b3I6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L291dHNpZGVfY29sbGFib3JhdG9ycy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICByZW1vdmVQdWJsaWNNZW1iZXJzaGlwRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3B1YmxpY19tZW1iZXJzL3t1c2VybmFtZX1cIixcbiAgICBdLFxuICAgIHJlbW92ZVNlY3VyaXR5TWFuYWdlclRlYW06IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3NlY3VyaXR5LW1hbmFnZXJzL3RlYW1zL3t0ZWFtX3NsdWd9XCIsXG4gICAgICB7fSxcbiAgICAgIHtcbiAgICAgICAgZGVwcmVjYXRlZDpcbiAgICAgICAgICBcIm9jdG9raXQucmVzdC5vcmdzLnJlbW92ZVNlY3VyaXR5TWFuYWdlclRlYW0oKSBpcyBkZXByZWNhdGVkLCBzZWUgaHR0cHM6Ly9kb2NzLmdpdGh1Yi5jb20vcmVzdC9vcmdzL3NlY3VyaXR5LW1hbmFnZXJzI3JlbW92ZS1hLXNlY3VyaXR5LW1hbmFnZXItdGVhbVwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHJldmlld1BhdEdyYW50UmVxdWVzdDogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbi1yZXF1ZXN0cy97cGF0X3JlcXVlc3RfaWR9XCIsXG4gICAgXSxcbiAgICByZXZpZXdQYXRHcmFudFJlcXVlc3RzSW5CdWxrOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2VuLXJlcXVlc3RzXCIsXG4gICAgXSxcbiAgICByZXZva2VBbGxPcmdSb2xlc1RlYW06IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlcy90ZWFtcy97dGVhbV9zbHVnfVwiLFxuICAgIF0sXG4gICAgcmV2b2tlQWxsT3JnUm9sZXNVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMvdXNlcnMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgcmV2b2tlT3JnUm9sZVRlYW06IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlcy90ZWFtcy97dGVhbV9zbHVnfS97cm9sZV9pZH1cIixcbiAgICBdLFxuICAgIHJldm9rZU9yZ1JvbGVVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMvdXNlcnMve3VzZXJuYW1lfS97cm9sZV9pZH1cIixcbiAgICBdLFxuICAgIHNldEltbXV0YWJsZVJlbGVhc2VzU2V0dGluZ3M6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2ltbXV0YWJsZS1yZWxlYXNlc1wiLFxuICAgIF0sXG4gICAgc2V0SW1tdXRhYmxlUmVsZWFzZXNTZXR0aW5nc1JlcG9zaXRvcmllczogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvaW1tdXRhYmxlLXJlbGVhc2VzL3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgc2V0TWVtYmVyc2hpcEZvclVzZXI6IFtcIlBVVCAvb3Jncy97b3JnfS9tZW1iZXJzaGlwcy97dXNlcm5hbWV9XCJdLFxuICAgIHNldFB1YmxpY01lbWJlcnNoaXBGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vcHVibGljX21lbWJlcnMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgdW5ibG9ja1VzZXI6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9ibG9ja3Mve3VzZXJuYW1lfVwiXSxcbiAgICB1cGRhdGU6IFtcIlBBVENIIC9vcmdzL3tvcmd9XCJdLFxuICAgIHVwZGF0ZUlzc3VlVHlwZTogW1wiUFVUIC9vcmdzL3tvcmd9L2lzc3VlLXR5cGVzL3tpc3N1ZV90eXBlX2lkfVwiXSxcbiAgICB1cGRhdGVNZW1iZXJzaGlwRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUEFUQ0ggL3VzZXIvbWVtYmVyc2hpcHMvb3Jncy97b3JnfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlUGF0QWNjZXNzOiBbXCJQT1NUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbnMve3BhdF9pZH1cIl0sXG4gICAgdXBkYXRlUGF0QWNjZXNzZXM6IFtcIlBPU1QgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2Vuc1wiXSxcbiAgICB1cGRhdGVXZWJob29rOiBbXCJQQVRDSCAvb3Jncy97b3JnfS9ob29rcy97aG9va19pZH1cIl0sXG4gICAgdXBkYXRlV2ViaG9va0NvbmZpZ0Zvck9yZzogW1wiUEFUQ0ggL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9L2NvbmZpZ1wiXSxcbiAgfSxcbiAgcGFja2FnZXM6IHtcbiAgICBkZWxldGVQYWNrYWdlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVQYWNrYWdlRm9yT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlUGFja2FnZUZvclVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2Vycy97dXNlcm5hbWV9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVQYWNrYWdlVmVyc2lvbkZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9ucy97cGFja2FnZV92ZXJzaW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlUGFja2FnZVZlcnNpb25Gb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVQYWNrYWdlVmVyc2lvbkZvclVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2Vycy97dXNlcm5hbWV9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9XCIsXG4gICAgXSxcbiAgICBnZXRBbGxQYWNrYWdlVmVyc2lvbnNGb3JBUGFja2FnZU93bmVkQnlBbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJwYWNrYWdlc1wiLCBcImdldEFsbFBhY2thZ2VWZXJzaW9uc0ZvclBhY2thZ2VPd25lZEJ5T3JnXCJdIH0sXG4gICAgXSxcbiAgICBnZXRBbGxQYWNrYWdlVmVyc2lvbnNGb3JBUGFja2FnZU93bmVkQnlUaGVBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnNcIixcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICByZW5hbWVkOiBbXG4gICAgICAgICAgXCJwYWNrYWdlc1wiLFxuICAgICAgICAgIFwiZ2V0QWxsUGFja2FnZVZlcnNpb25zRm9yUGFja2FnZU93bmVkQnlBdXRoZW50aWNhdGVkVXNlclwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGdldEFsbFBhY2thZ2VWZXJzaW9uc0ZvclBhY2thZ2VPd25lZEJ5QXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zXCIsXG4gICAgXSxcbiAgICBnZXRBbGxQYWNrYWdlVmVyc2lvbnNGb3JQYWNrYWdlT3duZWRCeU9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnNcIixcbiAgICBdLFxuICAgIGdldEFsbFBhY2thZ2VWZXJzaW9uc0ZvclBhY2thZ2VPd25lZEJ5VXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnNcIixcbiAgICBdLFxuICAgIGdldFBhY2thZ2VGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX1cIixcbiAgICBdLFxuICAgIGdldFBhY2thZ2VGb3JPcmdhbml6YXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9XCIsXG4gICAgXSxcbiAgICBnZXRQYWNrYWdlRm9yVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX1cIixcbiAgICBdLFxuICAgIGdldFBhY2thZ2VWZXJzaW9uRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9XCIsXG4gICAgXSxcbiAgICBnZXRQYWNrYWdlVmVyc2lvbkZvck9yZ2FuaXphdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnMve3BhY2thZ2VfdmVyc2lvbl9pZH1cIixcbiAgICBdLFxuICAgIGdldFBhY2thZ2VWZXJzaW9uRm9yVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnMve3BhY2thZ2VfdmVyc2lvbl9pZH1cIixcbiAgICBdLFxuICAgIGxpc3REb2NrZXJNaWdyYXRpb25Db25mbGljdGluZ1BhY2thZ2VzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL2RvY2tlci9jb25mbGljdHNcIixcbiAgICBdLFxuICAgIGxpc3REb2NrZXJNaWdyYXRpb25Db25mbGljdGluZ1BhY2thZ2VzRm9yT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9kb2NrZXIvY29uZmxpY3RzXCIsXG4gICAgXSxcbiAgICBsaXN0RG9ja2VyTWlncmF0aW9uQ29uZmxpY3RpbmdQYWNrYWdlc0ZvclVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2RvY2tlci9jb25mbGljdHNcIixcbiAgICBdLFxuICAgIGxpc3RQYWNrYWdlc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvcGFja2FnZXNcIl0sXG4gICAgbGlzdFBhY2thZ2VzRm9yT3JnYW5pemF0aW9uOiBbXCJHRVQgL29yZ3Mve29yZ30vcGFja2FnZXNcIl0sXG4gICAgbGlzdFBhY2thZ2VzRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L3BhY2thZ2VzXCJdLFxuICAgIHJlc3RvcmVQYWNrYWdlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUE9TVCAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS9yZXN0b3Jlez90b2tlbn1cIixcbiAgICBdLFxuICAgIHJlc3RvcmVQYWNrYWdlRm9yT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vcmVzdG9yZXs/dG9rZW59XCIsXG4gICAgXSxcbiAgICByZXN0b3JlUGFja2FnZUZvclVzZXI6IFtcbiAgICAgIFwiUE9TVCAvdXNlcnMve3VzZXJuYW1lfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS9yZXN0b3Jlez90b2tlbn1cIixcbiAgICBdLFxuICAgIHJlc3RvcmVQYWNrYWdlVmVyc2lvbkZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBPU1QgL3VzZXIvcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnMve3BhY2thZ2VfdmVyc2lvbl9pZH0vcmVzdG9yZVwiLFxuICAgIF0sXG4gICAgcmVzdG9yZVBhY2thZ2VWZXJzaW9uRm9yT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnMve3BhY2thZ2VfdmVyc2lvbl9pZH0vcmVzdG9yZVwiLFxuICAgIF0sXG4gICAgcmVzdG9yZVBhY2thZ2VWZXJzaW9uRm9yVXNlcjogW1xuICAgICAgXCJQT1NUIC91c2Vycy97dXNlcm5hbWV9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9L3Jlc3RvcmVcIixcbiAgICBdLFxuICB9LFxuICBwcml2YXRlUmVnaXN0cmllczoge1xuICAgIGNyZWF0ZU9yZ1ByaXZhdGVSZWdpc3RyeTogW1wiUE9TVCAvb3Jncy97b3JnfS9wcml2YXRlLXJlZ2lzdHJpZXNcIl0sXG4gICAgZGVsZXRlT3JnUHJpdmF0ZVJlZ2lzdHJ5OiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9wcml2YXRlLXJlZ2lzdHJpZXMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZ2V0T3JnUHJpdmF0ZVJlZ2lzdHJ5OiBbXCJHRVQgL29yZ3Mve29yZ30vcHJpdmF0ZS1yZWdpc3RyaWVzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZ2V0T3JnUHVibGljS2V5OiBbXCJHRVQgL29yZ3Mve29yZ30vcHJpdmF0ZS1yZWdpc3RyaWVzL3B1YmxpYy1rZXlcIl0sXG4gICAgbGlzdE9yZ1ByaXZhdGVSZWdpc3RyaWVzOiBbXCJHRVQgL29yZ3Mve29yZ30vcHJpdmF0ZS1yZWdpc3RyaWVzXCJdLFxuICAgIHVwZGF0ZU9yZ1ByaXZhdGVSZWdpc3RyeTogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS9wcml2YXRlLXJlZ2lzdHJpZXMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gIH0sXG4gIHByb2plY3RzOiB7XG4gICAgYWRkSXRlbUZvck9yZzogW1wiUE9TVCAvb3Jncy97b3JnfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXNcIl0sXG4gICAgYWRkSXRlbUZvclVzZXI6IFtcbiAgICAgIFwiUE9TVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXNcIixcbiAgICBdLFxuICAgIGRlbGV0ZUl0ZW1Gb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9pdGVtcy97aXRlbV9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUl0ZW1Gb3JVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXMve2l0ZW1faWR9XCIsXG4gICAgXSxcbiAgICBnZXRGaWVsZEZvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2ZpZWxkcy97ZmllbGRfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRGaWVsZEZvclVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9maWVsZHMve2ZpZWxkX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0Rm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9XCJdLFxuICAgIGdldEZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn1cIl0sXG4gICAgZ2V0T3JnSXRlbTogW1wiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9pdGVtcy97aXRlbV9pZH1cIl0sXG4gICAgZ2V0VXNlckl0ZW06IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9pdGVtcy97aXRlbV9pZH1cIixcbiAgICBdLFxuICAgIGxpc3RGaWVsZHNGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vZmllbGRzXCJdLFxuICAgIGxpc3RGaWVsZHNGb3JVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vZmllbGRzXCIsXG4gICAgXSxcbiAgICBsaXN0Rm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vcHJvamVjdHNWMlwiXSxcbiAgICBsaXN0Rm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzVjJcIl0sXG4gICAgbGlzdEl0ZW1zRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zXCJdLFxuICAgIGxpc3RJdGVtc0ZvclVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9pdGVtc1wiLFxuICAgIF0sXG4gICAgdXBkYXRlSXRlbUZvck9yZzogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXMve2l0ZW1faWR9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVJdGVtRm9yVXNlcjogW1xuICAgICAgXCJQQVRDSCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXMve2l0ZW1faWR9XCIsXG4gICAgXSxcbiAgfSxcbiAgcHVsbHM6IHtcbiAgICBjaGVja0lmTWVyZ2VkOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vbWVyZ2VcIl0sXG4gICAgY3JlYXRlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxsc1wiXSxcbiAgICBjcmVhdGVSZXBseUZvclJldmlld0NvbW1lbnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9pZH0vcmVwbGllc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlUmV2aWV3OiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3NcIl0sXG4gICAgY3JlYXRlUmV2aWV3Q29tbWVudDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gICAgXSxcbiAgICBkZWxldGVQZW5kaW5nUmV2aWV3OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXZpZXdzL3tyZXZpZXdfaWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVSZXZpZXdDb21tZW50OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHMve2NvbW1lbnRfaWR9XCIsXG4gICAgXSxcbiAgICBkaXNtaXNzUmV2aWV3OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXZpZXdzL3tyZXZpZXdfaWR9L2Rpc21pc3NhbHNcIixcbiAgICBdLFxuICAgIGdldDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9XCJdLFxuICAgIGdldFJldmlldzogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3cy97cmV2aWV3X2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0UmV2aWV3Q29tbWVudDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gICAgbGlzdDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxsc1wiXSxcbiAgICBsaXN0Q29tbWVudHNGb3JSZXZpZXc6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3Mve3Jldmlld19pZH0vY29tbWVudHNcIixcbiAgICBdLFxuICAgIGxpc3RDb21taXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vY29tbWl0c1wiXSxcbiAgICBsaXN0RmlsZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9maWxlc1wiXSxcbiAgICBsaXN0UmVxdWVzdGVkUmV2aWV3ZXJzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXF1ZXN0ZWRfcmV2aWV3ZXJzXCIsXG4gICAgXSxcbiAgICBsaXN0UmV2aWV3Q29tbWVudHM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gICAgXSxcbiAgICBsaXN0UmV2aWV3Q29tbWVudHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL2NvbW1lbnRzXCJdLFxuICAgIGxpc3RSZXZpZXdzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3c1wiXSxcbiAgICBtZXJnZTogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L21lcmdlXCJdLFxuICAgIHJlbW92ZVJlcXVlc3RlZFJldmlld2VyczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmVxdWVzdGVkX3Jldmlld2Vyc1wiLFxuICAgIF0sXG4gICAgcmVxdWVzdFJldmlld2VyczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3JlcXVlc3RlZF9yZXZpZXdlcnNcIixcbiAgICBdLFxuICAgIHN1Ym1pdFJldmlldzogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3Mve3Jldmlld19pZH0vZXZlbnRzXCIsXG4gICAgXSxcbiAgICB1cGRhdGU6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9XCJdLFxuICAgIHVwZGF0ZUJyYW5jaDogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vdXBkYXRlLWJyYW5jaFwiLFxuICAgIF0sXG4gICAgdXBkYXRlUmV2aWV3OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXZpZXdzL3tyZXZpZXdfaWR9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVSZXZpZXdDb21tZW50OiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy9jb21tZW50cy97Y29tbWVudF9pZH1cIixcbiAgICBdLFxuICB9LFxuICByYXRlTGltaXQ6IHsgZ2V0OiBbXCJHRVQgL3JhdGVfbGltaXRcIl0gfSxcbiAgcmVhY3Rpb25zOiB7XG4gICAgY3JlYXRlRm9yQ29tbWl0Q29tbWVudDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBjcmVhdGVGb3JJc3N1ZTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBjcmVhdGVGb3JJc3N1ZUNvbW1lbnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGNyZWF0ZUZvclB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBjcmVhdGVGb3JSZWxlYXNlOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGNyZWF0ZUZvclRlYW1EaXNjdXNzaW9uQ29tbWVudEluT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9udW1iZXJ9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlRm9yVGVhbURpc2N1c3Npb25Jbk9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBkZWxldGVGb3JDb21taXRDb21tZW50OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9ucy97cmVhY3Rpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVGb3JJc3N1ZTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9yZWFjdGlvbnMve3JlYWN0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRm9ySXNzdWVDb21tZW50OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnMve3JlYWN0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRm9yUHVsbFJlcXVlc3RDb21tZW50OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9ucy97cmVhY3Rpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVGb3JSZWxlYXNlOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMve3JlbGVhc2VfaWR9L3JlYWN0aW9ucy97cmVhY3Rpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVGb3JUZWFtRGlzY3Vzc2lvbjogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9yZWFjdGlvbnMve3JlYWN0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRm9yVGVhbURpc2N1c3Npb25Db21tZW50OiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzL3tjb21tZW50X251bWJlcn0vcmVhY3Rpb25zL3tyZWFjdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGxpc3RGb3JDb21taXRDb21tZW50OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdEZvcklzc3VlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9yZWFjdGlvbnNcIl0sXG4gICAgbGlzdEZvcklzc3VlQ29tbWVudDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBsaXN0Rm9yUHVsbFJlcXVlc3RSZXZpZXdDb21tZW50OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdEZvclJlbGVhc2U6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBsaXN0Rm9yVGVhbURpc2N1c3Npb25Db21tZW50SW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGxpc3RGb3JUZWFtRGlzY3Vzc2lvbkluT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gIH0sXG4gIHJlcG9zOiB7XG4gICAgYWNjZXB0SW52aXRhdGlvbjogW1xuICAgICAgXCJQQVRDSCAvdXNlci9yZXBvc2l0b3J5X2ludml0YXRpb25zL3tpbnZpdGF0aW9uX2lkfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInJlcG9zXCIsIFwiYWNjZXB0SW52aXRhdGlvbkZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBhY2NlcHRJbnZpdGF0aW9uRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUEFUQ0ggL3VzZXIvcmVwb3NpdG9yeV9pbnZpdGF0aW9ucy97aW52aXRhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGFkZEFwcEFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy9hcHBzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcImFwcHNcIiB9LFxuICAgIF0sXG4gICAgYWRkQ29sbGFib3JhdG9yOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbGxhYm9yYXRvcnMve3VzZXJuYW1lfVwiXSxcbiAgICBhZGRTdGF0dXNDaGVja0NvbnRleHRzOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc3RhdHVzX2NoZWNrcy9jb250ZXh0c1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJjb250ZXh0c1wiIH0sXG4gICAgXSxcbiAgICBhZGRUZWFtQWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL3RlYW1zXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcInRlYW1zXCIgfSxcbiAgICBdLFxuICAgIGFkZFVzZXJBY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvdXNlcnNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwidXNlcnNcIiB9LFxuICAgIF0sXG4gICAgY2FuY2VsUGFnZXNEZXBsb3ltZW50OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2RlcGxveW1lbnRzL3twYWdlc19kZXBsb3ltZW50X2lkfS9jYW5jZWxcIixcbiAgICBdLFxuICAgIGNoZWNrQXV0b21hdGVkU2VjdXJpdHlGaXhlczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2F1dG9tYXRlZC1zZWN1cml0eS1maXhlc1wiLFxuICAgIF0sXG4gICAgY2hlY2tDb2xsYWJvcmF0b3I6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29sbGFib3JhdG9ycy97dXNlcm5hbWV9XCJdLFxuICAgIGNoZWNrSW1tdXRhYmxlUmVsZWFzZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaW1tdXRhYmxlLXJlbGVhc2VzXCJdLFxuICAgIGNoZWNrUHJpdmF0ZVZ1bG5lcmFiaWxpdHlSZXBvcnRpbmc6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wcml2YXRlLXZ1bG5lcmFiaWxpdHktcmVwb3J0aW5nXCIsXG4gICAgXSxcbiAgICBjaGVja1Z1bG5lcmFiaWxpdHlBbGVydHM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS92dWxuZXJhYmlsaXR5LWFsZXJ0c1wiLFxuICAgIF0sXG4gICAgY29kZW93bmVyc0Vycm9yczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlb3duZXJzL2Vycm9yc1wiXSxcbiAgICBjb21wYXJlQ29tbWl0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21wYXJlL3tiYXNlfS4uLntoZWFkfVwiXSxcbiAgICBjb21wYXJlQ29tbWl0c1dpdGhCYXNlaGVhZDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbXBhcmUve2Jhc2VoZWFkfVwiLFxuICAgIF0sXG4gICAgY3JlYXRlQXR0ZXN0YXRpb246IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2F0dGVzdGF0aW9uc1wiXSxcbiAgICBjcmVhdGVBdXRvbGluazogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXV0b2xpbmtzXCJdLFxuICAgIGNyZWF0ZUNvbW1pdENvbW1lbnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97Y29tbWl0X3NoYX0vY29tbWVudHNcIixcbiAgICBdLFxuICAgIGNyZWF0ZUNvbW1pdFNpZ25hdHVyZVByb3RlY3Rpb246IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zaWduYXR1cmVzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVDb21taXRTdGF0dXM6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXR1c2VzL3tzaGF9XCJdLFxuICAgIGNyZWF0ZURlcGxveUtleTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30va2V5c1wiXSxcbiAgICBjcmVhdGVEZXBsb3ltZW50OiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBsb3ltZW50c1wiXSxcbiAgICBjcmVhdGVEZXBsb3ltZW50QnJhbmNoUG9saWN5OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudC1icmFuY2gtcG9saWNpZXNcIixcbiAgICBdLFxuICAgIGNyZWF0ZURlcGxveW1lbnRQcm90ZWN0aW9uUnVsZTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnRfcHJvdGVjdGlvbl9ydWxlc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlRGVwbG95bWVudFN0YXR1czogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBsb3ltZW50cy97ZGVwbG95bWVudF9pZH0vc3RhdHVzZXNcIixcbiAgICBdLFxuICAgIGNyZWF0ZURpc3BhdGNoRXZlbnQ6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Rpc3BhdGNoZXNcIl0sXG4gICAgY3JlYXRlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvcmVwb3NcIl0sXG4gICAgY3JlYXRlRm9yazogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZm9ya3NcIl0sXG4gICAgY3JlYXRlSW5Pcmc6IFtcIlBPU1QgL29yZ3Mve29yZ30vcmVwb3NcIl0sXG4gICAgY3JlYXRlT3JVcGRhdGVFbnZpcm9ubWVudDogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX1cIixcbiAgICBdLFxuICAgIGNyZWF0ZU9yVXBkYXRlRmlsZUNvbnRlbnRzOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3twYXRofVwiXSxcbiAgICBjcmVhdGVPcmdSdWxlc2V0OiBbXCJQT1NUIC9vcmdzL3tvcmd9L3J1bGVzZXRzXCJdLFxuICAgIGNyZWF0ZVBhZ2VzRGVwbG95bWVudDogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXMvZGVwbG95bWVudHNcIl0sXG4gICAgY3JlYXRlUGFnZXNTaXRlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlc1wiXSxcbiAgICBjcmVhdGVSZWxlYXNlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlc1wiXSxcbiAgICBjcmVhdGVSZXBvUnVsZXNldDogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHNcIl0sXG4gICAgY3JlYXRlVXNpbmdUZW1wbGF0ZTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97dGVtcGxhdGVfb3duZXJ9L3t0ZW1wbGF0ZV9yZXBvfS9nZW5lcmF0ZVwiLFxuICAgIF0sXG4gICAgY3JlYXRlV2ViaG9vazogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3NcIl0sXG4gICAgY3VzdG9tUHJvcGVydGllc0ZvclJlcG9zQ3JlYXRlT3JVcGRhdGVSZXBvc2l0b3J5VmFsdWVzOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wcm9wZXJ0aWVzL3ZhbHVlc1wiLFxuICAgIF0sXG4gICAgY3VzdG9tUHJvcGVydGllc0ZvclJlcG9zR2V0UmVwb3NpdG9yeVZhbHVlczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3Byb3BlcnRpZXMvdmFsdWVzXCIsXG4gICAgXSxcbiAgICBkZWNsaW5lSW52aXRhdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvcmVwb3NpdG9yeV9pbnZpdGF0aW9ucy97aW52aXRhdGlvbl9pZH1cIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJyZXBvc1wiLCBcImRlY2xpbmVJbnZpdGF0aW9uRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGRlY2xpbmVJbnZpdGF0aW9uRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL3JlcG9zaXRvcnlfaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGU6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb31cIl0sXG4gICAgZGVsZXRlQWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnNcIixcbiAgICBdLFxuICAgIGRlbGV0ZUFkbWluQnJhbmNoUHJvdGVjdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vZW5mb3JjZV9hZG1pbnNcIixcbiAgICBdLFxuICAgIGRlbGV0ZUFuRW52aXJvbm1lbnQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVBdXRvbGluazogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdXRvbGlua3Mve2F1dG9saW5rX2lkfVwiXSxcbiAgICBkZWxldGVCcmFuY2hQcm90ZWN0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvblwiLFxuICAgIF0sXG4gICAgZGVsZXRlQ29tbWl0Q29tbWVudDogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gICAgZGVsZXRlQ29tbWl0U2lnbmF0dXJlUHJvdGVjdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc2lnbmF0dXJlc1wiLFxuICAgIF0sXG4gICAgZGVsZXRlRGVwbG95S2V5OiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2tleXMve2tleV9pZH1cIl0sXG4gICAgZGVsZXRlRGVwbG95bWVudDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzL3tkZXBsb3ltZW50X2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRGVwbG95bWVudEJyYW5jaFBvbGljeTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudC1icmFuY2gtcG9saWNpZXMve2JyYW5jaF9wb2xpY3lfaWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVGaWxlOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3twYXRofVwiXSxcbiAgICBkZWxldGVJbnZpdGF0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVPcmdSdWxlc2V0OiBbXCJERUxFVEUgL29yZ3Mve29yZ30vcnVsZXNldHMve3J1bGVzZXRfaWR9XCJdLFxuICAgIGRlbGV0ZVBhZ2VzU2l0ZTogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlc1wiXSxcbiAgICBkZWxldGVQdWxsUmVxdWVzdFJldmlld1Byb3RlY3Rpb246IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3B1bGxfcmVxdWVzdF9yZXZpZXdzXCIsXG4gICAgXSxcbiAgICBkZWxldGVSZWxlYXNlOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfVwiXSxcbiAgICBkZWxldGVSZWxlYXNlQXNzZXQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy9hc3NldHMve2Fzc2V0X2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlUmVwb1J1bGVzZXQ6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHMve3J1bGVzZXRfaWR9XCJdLFxuICAgIGRlbGV0ZVdlYmhvb2s6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9XCJdLFxuICAgIGRpc2FibGVBdXRvbWF0ZWRTZWN1cml0eUZpeGVzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYXV0b21hdGVkLXNlY3VyaXR5LWZpeGVzXCIsXG4gICAgXSxcbiAgICBkaXNhYmxlRGVwbG95bWVudFByb3RlY3Rpb25SdWxlOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50X3Byb3RlY3Rpb25fcnVsZXMve3Byb3RlY3Rpb25fcnVsZV9pZH1cIixcbiAgICBdLFxuICAgIGRpc2FibGVJbW11dGFibGVSZWxlYXNlczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ltbXV0YWJsZS1yZWxlYXNlc1wiLFxuICAgIF0sXG4gICAgZGlzYWJsZVByaXZhdGVWdWxuZXJhYmlsaXR5UmVwb3J0aW5nOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcHJpdmF0ZS12dWxuZXJhYmlsaXR5LXJlcG9ydGluZ1wiLFxuICAgIF0sXG4gICAgZGlzYWJsZVZ1bG5lcmFiaWxpdHlBbGVydHM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS92dWxuZXJhYmlsaXR5LWFsZXJ0c1wiLFxuICAgIF0sXG4gICAgZG93bmxvYWRBcmNoaXZlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vemlwYmFsbC97cmVmfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInJlcG9zXCIsIFwiZG93bmxvYWRaaXBiYWxsQXJjaGl2ZVwiXSB9LFxuICAgIF0sXG4gICAgZG93bmxvYWRUYXJiYWxsQXJjaGl2ZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90YXJiYWxsL3tyZWZ9XCJdLFxuICAgIGRvd25sb2FkWmlwYmFsbEFyY2hpdmU6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vemlwYmFsbC97cmVmfVwiXSxcbiAgICBlbmFibGVBdXRvbWF0ZWRTZWN1cml0eUZpeGVzOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXV0b21hdGVkLXNlY3VyaXR5LWZpeGVzXCIsXG4gICAgXSxcbiAgICBlbmFibGVJbW11dGFibGVSZWxlYXNlczogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbW11dGFibGUtcmVsZWFzZXNcIl0sXG4gICAgZW5hYmxlUHJpdmF0ZVZ1bG5lcmFiaWxpdHlSZXBvcnRpbmc6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wcml2YXRlLXZ1bG5lcmFiaWxpdHktcmVwb3J0aW5nXCIsXG4gICAgXSxcbiAgICBlbmFibGVWdWxuZXJhYmlsaXR5QWxlcnRzOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vdnVsbmVyYWJpbGl0eS1hbGVydHNcIixcbiAgICBdLFxuICAgIGdlbmVyYXRlUmVsZWFzZU5vdGVzOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL2dlbmVyYXRlLW5vdGVzXCIsXG4gICAgXSxcbiAgICBnZXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb31cIl0sXG4gICAgZ2V0QWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnNcIixcbiAgICBdLFxuICAgIGdldEFkbWluQnJhbmNoUHJvdGVjdGlvbjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vZW5mb3JjZV9hZG1pbnNcIixcbiAgICBdLFxuICAgIGdldEFsbERlcGxveW1lbnRQcm90ZWN0aW9uUnVsZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnRfcHJvdGVjdGlvbl9ydWxlc1wiLFxuICAgIF0sXG4gICAgZ2V0QWxsRW52aXJvbm1lbnRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50c1wiXSxcbiAgICBnZXRBbGxTdGF0dXNDaGVja0NvbnRleHRzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zdGF0dXNfY2hlY2tzL2NvbnRleHRzXCIsXG4gICAgXSxcbiAgICBnZXRBbGxUb3BpY3M6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdG9waWNzXCJdLFxuICAgIGdldEFwcHNXaXRoQWNjZXNzVG9Qcm90ZWN0ZWRCcmFuY2g6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy9hcHBzXCIsXG4gICAgXSxcbiAgICBnZXRBdXRvbGluazogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdXRvbGlua3Mve2F1dG9saW5rX2lkfVwiXSxcbiAgICBnZXRCcmFuY2g6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH1cIl0sXG4gICAgZ2V0QnJhbmNoUHJvdGVjdGlvbjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb25cIixcbiAgICBdLFxuICAgIGdldEJyYW5jaFJ1bGVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzL2JyYW5jaGVzL3ticmFuY2h9XCJdLFxuICAgIGdldENsb25lczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90cmFmZmljL2Nsb25lc1wiXSxcbiAgICBnZXRDb2RlRnJlcXVlbmN5U3RhdHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3RhdHMvY29kZV9mcmVxdWVuY3lcIl0sXG4gICAgZ2V0Q29sbGFib3JhdG9yUGVybWlzc2lvbkxldmVsOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29sbGFib3JhdG9ycy97dXNlcm5hbWV9L3Blcm1pc3Npb25cIixcbiAgICBdLFxuICAgIGdldENvbWJpbmVkU3RhdHVzRm9yUmVmOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vc3RhdHVzXCJdLFxuICAgIGdldENvbW1pdDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tyZWZ9XCJdLFxuICAgIGdldENvbW1pdEFjdGl2aXR5U3RhdHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3RhdHMvY29tbWl0X2FjdGl2aXR5XCJdLFxuICAgIGdldENvbW1pdENvbW1lbnQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWVudHMve2NvbW1lbnRfaWR9XCJdLFxuICAgIGdldENvbW1pdFNpZ25hdHVyZVByb3RlY3Rpb246IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3NpZ25hdHVyZXNcIixcbiAgICBdLFxuICAgIGdldENvbW11bml0eVByb2ZpbGVNZXRyaWNzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW11bml0eS9wcm9maWxlXCJdLFxuICAgIGdldENvbnRlbnQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29udGVudHMve3BhdGh9XCJdLFxuICAgIGdldENvbnRyaWJ1dG9yc1N0YXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXRzL2NvbnRyaWJ1dG9yc1wiXSxcbiAgICBnZXRDdXN0b21EZXBsb3ltZW50UHJvdGVjdGlvblJ1bGU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnRfcHJvdGVjdGlvbl9ydWxlcy97cHJvdGVjdGlvbl9ydWxlX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0RGVwbG95S2V5OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2tleXMve2tleV9pZH1cIl0sXG4gICAgZ2V0RGVwbG95bWVudDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBsb3ltZW50cy97ZGVwbG95bWVudF9pZH1cIl0sXG4gICAgZ2V0RGVwbG95bWVudEJyYW5jaFBvbGljeTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudC1icmFuY2gtcG9saWNpZXMve2JyYW5jaF9wb2xpY3lfaWR9XCIsXG4gICAgXSxcbiAgICBnZXREZXBsb3ltZW50U3RhdHVzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwbG95bWVudHMve2RlcGxveW1lbnRfaWR9L3N0YXR1c2VzL3tzdGF0dXNfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRFbnZpcm9ubWVudDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX1cIixcbiAgICBdLFxuICAgIGdldExhdGVzdFBhZ2VzQnVpbGQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXMvYnVpbGRzL2xhdGVzdFwiXSxcbiAgICBnZXRMYXRlc3RSZWxlYXNlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL2xhdGVzdFwiXSxcbiAgICBnZXRPcmdSdWxlU3VpdGU6IFtcIkdFVCAvb3Jncy97b3JnfS9ydWxlc2V0cy9ydWxlLXN1aXRlcy97cnVsZV9zdWl0ZV9pZH1cIl0sXG4gICAgZ2V0T3JnUnVsZVN1aXRlczogW1wiR0VUIC9vcmdzL3tvcmd9L3J1bGVzZXRzL3J1bGUtc3VpdGVzXCJdLFxuICAgIGdldE9yZ1J1bGVzZXQ6IFtcIkdFVCAvb3Jncy97b3JnfS9ydWxlc2V0cy97cnVsZXNldF9pZH1cIl0sXG4gICAgZ2V0T3JnUnVsZXNldHM6IFtcIkdFVCAvb3Jncy97b3JnfS9ydWxlc2V0c1wiXSxcbiAgICBnZXRQYWdlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlc1wiXSxcbiAgICBnZXRQYWdlc0J1aWxkOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2J1aWxkcy97YnVpbGRfaWR9XCJdLFxuICAgIGdldFBhZ2VzRGVwbG95bWVudDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2RlcGxveW1lbnRzL3twYWdlc19kZXBsb3ltZW50X2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0UGFnZXNIZWFsdGhDaGVjazogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlcy9oZWFsdGhcIl0sXG4gICAgZ2V0UGFydGljaXBhdGlvblN0YXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXRzL3BhcnRpY2lwYXRpb25cIl0sXG4gICAgZ2V0UHVsbFJlcXVlc3RSZXZpZXdQcm90ZWN0aW9uOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9wdWxsX3JlcXVlc3RfcmV2aWV3c1wiLFxuICAgIF0sXG4gICAgZ2V0UHVuY2hDYXJkU3RhdHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3RhdHMvcHVuY2hfY2FyZFwiXSxcbiAgICBnZXRSZWFkbWU6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVhZG1lXCJdLFxuICAgIGdldFJlYWRtZUluRGlyZWN0b3J5OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlYWRtZS97ZGlyfVwiXSxcbiAgICBnZXRSZWxlYXNlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfVwiXSxcbiAgICBnZXRSZWxlYXNlQXNzZXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMvYXNzZXRzL3thc3NldF9pZH1cIl0sXG4gICAgZ2V0UmVsZWFzZUJ5VGFnOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3RhZ3Mve3RhZ31cIl0sXG4gICAgZ2V0UmVwb1J1bGVTdWl0ZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzL3J1bGUtc3VpdGVzL3tydWxlX3N1aXRlX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0UmVwb1J1bGVTdWl0ZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHMvcnVsZS1zdWl0ZXNcIl0sXG4gICAgZ2V0UmVwb1J1bGVzZXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHMve3J1bGVzZXRfaWR9XCJdLFxuICAgIGdldFJlcG9SdWxlc2V0SGlzdG9yeTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzL3tydWxlc2V0X2lkfS9oaXN0b3J5XCIsXG4gICAgXSxcbiAgICBnZXRSZXBvUnVsZXNldFZlcnNpb246IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0cy97cnVsZXNldF9pZH0vaGlzdG9yeS97dmVyc2lvbl9pZH1cIixcbiAgICBdLFxuICAgIGdldFJlcG9SdWxlc2V0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0c1wiXSxcbiAgICBnZXRTdGF0dXNDaGVja3NQcm90ZWN0aW9uOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zdGF0dXNfY2hlY2tzXCIsXG4gICAgXSxcbiAgICBnZXRUZWFtc1dpdGhBY2Nlc3NUb1Byb3RlY3RlZEJyYW5jaDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL3RlYW1zXCIsXG4gICAgXSxcbiAgICBnZXRUb3BQYXRoczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90cmFmZmljL3BvcHVsYXIvcGF0aHNcIl0sXG4gICAgZ2V0VG9wUmVmZXJyZXJzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RyYWZmaWMvcG9wdWxhci9yZWZlcnJlcnNcIl0sXG4gICAgZ2V0VXNlcnNXaXRoQWNjZXNzVG9Qcm90ZWN0ZWRCcmFuY2g6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy91c2Vyc1wiLFxuICAgIF0sXG4gICAgZ2V0Vmlld3M6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdHJhZmZpYy92aWV3c1wiXSxcbiAgICBnZXRXZWJob29rOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfVwiXSxcbiAgICBnZXRXZWJob29rQ29uZmlnRm9yUmVwbzogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfS9jb25maWdcIixcbiAgICBdLFxuICAgIGdldFdlYmhvb2tEZWxpdmVyeTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfS9kZWxpdmVyaWVzL3tkZWxpdmVyeV9pZH1cIixcbiAgICBdLFxuICAgIGxpc3RBY3Rpdml0aWVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGl2aXR5XCJdLFxuICAgIGxpc3RBdHRlc3RhdGlvbnM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdHRlc3RhdGlvbnMve3N1YmplY3RfZGlnZXN0fVwiLFxuICAgIF0sXG4gICAgbGlzdEF1dG9saW5rczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdXRvbGlua3NcIl0sXG4gICAgbGlzdEJyYW5jaGVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzXCJdLFxuICAgIGxpc3RCcmFuY2hlc0ZvckhlYWRDb21taXQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tjb21taXRfc2hhfS9icmFuY2hlcy13aGVyZS1oZWFkXCIsXG4gICAgXSxcbiAgICBsaXN0Q29sbGFib3JhdG9yczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2xsYWJvcmF0b3JzXCJdLFxuICAgIGxpc3RDb21tZW50c0ZvckNvbW1pdDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve2NvbW1pdF9zaGF9L2NvbW1lbnRzXCIsXG4gICAgXSxcbiAgICBsaXN0Q29tbWl0Q29tbWVudHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzXCJdLFxuICAgIGxpc3RDb21taXRTdGF0dXNlc0ZvclJlZjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vc3RhdHVzZXNcIixcbiAgICBdLFxuICAgIGxpc3RDb21taXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHNcIl0sXG4gICAgbGlzdENvbnRyaWJ1dG9yczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250cmlidXRvcnNcIl0sXG4gICAgbGlzdEN1c3RvbURlcGxveW1lbnRSdWxlSW50ZWdyYXRpb25zOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50X3Byb3RlY3Rpb25fcnVsZXMvYXBwc1wiLFxuICAgIF0sXG4gICAgbGlzdERlcGxveUtleXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30va2V5c1wiXSxcbiAgICBsaXN0RGVwbG95bWVudEJyYW5jaFBvbGljaWVzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50LWJyYW5jaC1wb2xpY2llc1wiLFxuICAgIF0sXG4gICAgbGlzdERlcGxveW1lbnRTdGF0dXNlczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzL3tkZXBsb3ltZW50X2lkfS9zdGF0dXNlc1wiLFxuICAgIF0sXG4gICAgbGlzdERlcGxveW1lbnRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzXCJdLFxuICAgIGxpc3RGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3JlcG9zXCJdLFxuICAgIGxpc3RGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9yZXBvc1wiXSxcbiAgICBsaXN0Rm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L3JlcG9zXCJdLFxuICAgIGxpc3RGb3JrczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9mb3Jrc1wiXSxcbiAgICBsaXN0SW52aXRhdGlvbnM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaW52aXRhdGlvbnNcIl0sXG4gICAgbGlzdEludml0YXRpb25zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9yZXBvc2l0b3J5X2ludml0YXRpb25zXCJdLFxuICAgIGxpc3RMYW5ndWFnZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbGFuZ3VhZ2VzXCJdLFxuICAgIGxpc3RQYWdlc0J1aWxkczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlcy9idWlsZHNcIl0sXG4gICAgbGlzdFB1YmxpYzogW1wiR0VUIC9yZXBvc2l0b3JpZXNcIl0sXG4gICAgbGlzdFB1bGxSZXF1ZXN0c0Fzc29jaWF0ZWRXaXRoQ29tbWl0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97Y29tbWl0X3NoYX0vcHVsbHNcIixcbiAgICBdLFxuICAgIGxpc3RSZWxlYXNlQXNzZXRzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMve3JlbGVhc2VfaWR9L2Fzc2V0c1wiLFxuICAgIF0sXG4gICAgbGlzdFJlbGVhc2VzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzXCJdLFxuICAgIGxpc3RUYWdzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RhZ3NcIl0sXG4gICAgbGlzdFRlYW1zOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RlYW1zXCJdLFxuICAgIGxpc3RXZWJob29rRGVsaXZlcmllczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfS9kZWxpdmVyaWVzXCIsXG4gICAgXSxcbiAgICBsaXN0V2ViaG9va3M6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3NcIl0sXG4gICAgbWVyZ2U6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L21lcmdlc1wiXSxcbiAgICBtZXJnZVVwc3RyZWFtOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9tZXJnZS11cHN0cmVhbVwiXSxcbiAgICBwaW5nV2ViaG9vazogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9L3BpbmdzXCJdLFxuICAgIHJlZGVsaXZlcldlYmhvb2tEZWxpdmVyeTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH0vZGVsaXZlcmllcy97ZGVsaXZlcnlfaWR9L2F0dGVtcHRzXCIsXG4gICAgXSxcbiAgICByZW1vdmVBcHBBY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy9hcHBzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcImFwcHNcIiB9LFxuICAgIF0sXG4gICAgcmVtb3ZlQ29sbGFib3JhdG9yOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vY29sbGFib3JhdG9ycy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICByZW1vdmVTdGF0dXNDaGVja0NvbnRleHRzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zdGF0dXNfY2hlY2tzL2NvbnRleHRzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcImNvbnRleHRzXCIgfSxcbiAgICBdLFxuICAgIHJlbW92ZVN0YXR1c0NoZWNrUHJvdGVjdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc3RhdHVzX2NoZWNrc1wiLFxuICAgIF0sXG4gICAgcmVtb3ZlVGVhbUFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL3RlYW1zXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcInRlYW1zXCIgfSxcbiAgICBdLFxuICAgIHJlbW92ZVVzZXJBY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy91c2Vyc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJ1c2Vyc1wiIH0sXG4gICAgXSxcbiAgICByZW5hbWVCcmFuY2g6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3JlbmFtZVwiXSxcbiAgICByZXBsYWNlQWxsVG9waWNzOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RvcGljc1wiXSxcbiAgICByZXF1ZXN0UGFnZXNCdWlsZDogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXMvYnVpbGRzXCJdLFxuICAgIHNldEFkbWluQnJhbmNoUHJvdGVjdGlvbjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL2VuZm9yY2VfYWRtaW5zXCIsXG4gICAgXSxcbiAgICBzZXRBcHBBY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy9hcHBzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcImFwcHNcIiB9LFxuICAgIF0sXG4gICAgc2V0U3RhdHVzQ2hlY2tDb250ZXh0czogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc3RhdHVzX2NoZWNrcy9jb250ZXh0c1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJjb250ZXh0c1wiIH0sXG4gICAgXSxcbiAgICBzZXRUZWFtQWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvdGVhbXNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwidGVhbXNcIiB9LFxuICAgIF0sXG4gICAgc2V0VXNlckFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL3VzZXJzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcInVzZXJzXCIgfSxcbiAgICBdLFxuICAgIHRlc3RQdXNoV2ViaG9vazogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9L3Rlc3RzXCJdLFxuICAgIHRyYW5zZmVyOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90cmFuc2ZlclwiXSxcbiAgICB1cGRhdGU6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfVwiXSxcbiAgICB1cGRhdGVCcmFuY2hQcm90ZWN0aW9uOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvblwiLFxuICAgIF0sXG4gICAgdXBkYXRlQ29tbWl0Q29tbWVudDogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzL3tjb21tZW50X2lkfVwiXSxcbiAgICB1cGRhdGVEZXBsb3ltZW50QnJhbmNoUG9saWN5OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50LWJyYW5jaC1wb2xpY2llcy97YnJhbmNoX3BvbGljeV9pZH1cIixcbiAgICBdLFxuICAgIHVwZGF0ZUluZm9ybWF0aW9uQWJvdXRQYWdlc1NpdGU6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXNcIl0sXG4gICAgdXBkYXRlSW52aXRhdGlvbjogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVPcmdSdWxlc2V0OiBbXCJQVVQgL29yZ3Mve29yZ30vcnVsZXNldHMve3J1bGVzZXRfaWR9XCJdLFxuICAgIHVwZGF0ZVB1bGxSZXF1ZXN0UmV2aWV3UHJvdGVjdGlvbjogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9wdWxsX3JlcXVlc3RfcmV2aWV3c1wiLFxuICAgIF0sXG4gICAgdXBkYXRlUmVsZWFzZTogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfVwiXSxcbiAgICB1cGRhdGVSZWxlYXNlQXNzZXQ6IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL2Fzc2V0cy97YXNzZXRfaWR9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVSZXBvUnVsZXNldDogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0cy97cnVsZXNldF9pZH1cIl0sXG4gICAgdXBkYXRlU3RhdHVzQ2hlY2tQb3RlY3Rpb246IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc3RhdHVzX2NoZWNrc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInJlcG9zXCIsIFwidXBkYXRlU3RhdHVzQ2hlY2tQcm90ZWN0aW9uXCJdIH0sXG4gICAgXSxcbiAgICB1cGRhdGVTdGF0dXNDaGVja1Byb3RlY3Rpb246IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc3RhdHVzX2NoZWNrc1wiLFxuICAgIF0sXG4gICAgdXBkYXRlV2ViaG9vazogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfVwiXSxcbiAgICB1cGRhdGVXZWJob29rQ29uZmlnRm9yUmVwbzogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9L2NvbmZpZ1wiLFxuICAgIF0sXG4gICAgdXBsb2FkUmVsZWFzZUFzc2V0OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfS9hc3NldHN7P25hbWUsbGFiZWx9XCIsXG4gICAgICB7IGJhc2VVcmw6IFwiaHR0cHM6Ly91cGxvYWRzLmdpdGh1Yi5jb21cIiB9LFxuICAgIF0sXG4gIH0sXG4gIHNlYXJjaDoge1xuICAgIGNvZGU6IFtcIkdFVCAvc2VhcmNoL2NvZGVcIl0sXG4gICAgY29tbWl0czogW1wiR0VUIC9zZWFyY2gvY29tbWl0c1wiXSxcbiAgICBpc3N1ZXNBbmRQdWxsUmVxdWVzdHM6IFtcIkdFVCAvc2VhcmNoL2lzc3Vlc1wiXSxcbiAgICBsYWJlbHM6IFtcIkdFVCAvc2VhcmNoL2xhYmVsc1wiXSxcbiAgICByZXBvczogW1wiR0VUIC9zZWFyY2gvcmVwb3NpdG9yaWVzXCJdLFxuICAgIHRvcGljczogW1wiR0VUIC9zZWFyY2gvdG9waWNzXCJdLFxuICAgIHVzZXJzOiBbXCJHRVQgL3NlYXJjaC91c2Vyc1wiXSxcbiAgfSxcbiAgc2VjcmV0U2Nhbm5pbmc6IHtcbiAgICBjcmVhdGVQdXNoUHJvdGVjdGlvbkJ5cGFzczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWNyZXQtc2Nhbm5pbmcvcHVzaC1wcm90ZWN0aW9uLWJ5cGFzc2VzXCIsXG4gICAgXSxcbiAgICBnZXRBbGVydDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3JldC1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn1cIixcbiAgICBdLFxuICAgIGdldFNjYW5IaXN0b3J5OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3JldC1zY2FubmluZy9zY2FuLWhpc3RvcnlcIl0sXG4gICAgbGlzdEFsZXJ0c0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3NlY3JldC1zY2FubmluZy9hbGVydHNcIl0sXG4gICAgbGlzdEFsZXJ0c0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0c1wiXSxcbiAgICBsaXN0TG9jYXRpb25zRm9yQWxlcnQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWNyZXQtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9L2xvY2F0aW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdE9yZ1BhdHRlcm5Db25maWdzOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9zZWNyZXQtc2Nhbm5pbmcvcGF0dGVybi1jb25maWd1cmF0aW9uc1wiLFxuICAgIF0sXG4gICAgdXBkYXRlQWxlcnQ6IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3JldC1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn1cIixcbiAgICBdLFxuICAgIHVwZGF0ZU9yZ1BhdHRlcm5Db25maWdzOiBbXG4gICAgICBcIlBBVENIIC9vcmdzL3tvcmd9L3NlY3JldC1zY2FubmluZy9wYXR0ZXJuLWNvbmZpZ3VyYXRpb25zXCIsXG4gICAgXSxcbiAgfSxcbiAgc2VjdXJpdHlBZHZpc29yaWVzOiB7XG4gICAgY3JlYXRlRm9yazogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWN1cml0eS1hZHZpc29yaWVzL3tnaHNhX2lkfS9mb3Jrc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlUHJpdmF0ZVZ1bG5lcmFiaWxpdHlSZXBvcnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjdXJpdHktYWR2aXNvcmllcy9yZXBvcnRzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVSZXBvc2l0b3J5QWR2aXNvcnk6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjdXJpdHktYWR2aXNvcmllc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlUmVwb3NpdG9yeUFkdmlzb3J5Q3ZlUmVxdWVzdDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWN1cml0eS1hZHZpc29yaWVzL3tnaHNhX2lkfS9jdmVcIixcbiAgICBdLFxuICAgIGdldEdsb2JhbEFkdmlzb3J5OiBbXCJHRVQgL2Fkdmlzb3JpZXMve2doc2FfaWR9XCJdLFxuICAgIGdldFJlcG9zaXRvcnlBZHZpc29yeTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3VyaXR5LWFkdmlzb3JpZXMve2doc2FfaWR9XCIsXG4gICAgXSxcbiAgICBsaXN0R2xvYmFsQWR2aXNvcmllczogW1wiR0VUIC9hZHZpc29yaWVzXCJdLFxuICAgIGxpc3RPcmdSZXBvc2l0b3J5QWR2aXNvcmllczogW1wiR0VUIC9vcmdzL3tvcmd9L3NlY3VyaXR5LWFkdmlzb3JpZXNcIl0sXG4gICAgbGlzdFJlcG9zaXRvcnlBZHZpc29yaWVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3VyaXR5LWFkdmlzb3JpZXNcIl0sXG4gICAgdXBkYXRlUmVwb3NpdG9yeUFkdmlzb3J5OiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWN1cml0eS1hZHZpc29yaWVzL3tnaHNhX2lkfVwiLFxuICAgIF0sXG4gIH0sXG4gIHRlYW1zOiB7XG4gICAgYWRkT3JVcGRhdGVNZW1iZXJzaGlwRm9yVXNlckluT3JnOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9tZW1iZXJzaGlwcy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICBhZGRPclVwZGF0ZVJlcG9QZXJtaXNzaW9uc0luT3JnOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9yZXBvcy97b3duZXJ9L3tyZXBvfVwiLFxuICAgIF0sXG4gICAgY2hlY2tQZXJtaXNzaW9uc0ZvclJlcG9Jbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vcmVwb3Mve293bmVyfS97cmVwb31cIixcbiAgICBdLFxuICAgIGNyZWF0ZTogW1wiUE9TVCAvb3Jncy97b3JnfS90ZWFtc1wiXSxcbiAgICBjcmVhdGVEaXNjdXNzaW9uQ29tbWVudEluT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50c1wiLFxuICAgIF0sXG4gICAgY3JlYXRlRGlzY3Vzc2lvbkluT3JnOiBbXCJQT1NUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zXCJdLFxuICAgIGRlbGV0ZURpc2N1c3Npb25Db21tZW50SW5Pcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlRGlzY3Vzc2lvbkluT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICBkZWxldGVJbk9yZzogW1wiREVMRVRFIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9XCJdLFxuICAgIGdldEJ5TmFtZTogW1wiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9XCJdLFxuICAgIGdldERpc2N1c3Npb25Db21tZW50SW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgZ2V0RGlzY3Vzc2lvbkluT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICBnZXRNZW1iZXJzaGlwRm9yVXNlckluT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9tZW1iZXJzaGlwcy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICBsaXN0OiBbXCJHRVQgL29yZ3Mve29yZ30vdGVhbXNcIl0sXG4gICAgbGlzdENoaWxkSW5Pcmc6IFtcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS90ZWFtc1wiXSxcbiAgICBsaXN0RGlzY3Vzc2lvbkNvbW1lbnRzSW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHNcIixcbiAgICBdLFxuICAgIGxpc3REaXNjdXNzaW9uc0luT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnNcIl0sXG4gICAgbGlzdEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvdGVhbXNcIl0sXG4gICAgbGlzdE1lbWJlcnNJbk9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L21lbWJlcnNcIl0sXG4gICAgbGlzdFBlbmRpbmdJbnZpdGF0aW9uc0luT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9pbnZpdGF0aW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdFJlcG9zSW5Pcmc6IFtcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9yZXBvc1wiXSxcbiAgICByZW1vdmVNZW1iZXJzaGlwRm9yVXNlckluT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9tZW1iZXJzaGlwcy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICByZW1vdmVSZXBvSW5Pcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L3JlcG9zL3tvd25lcn0ve3JlcG99XCIsXG4gICAgXSxcbiAgICB1cGRhdGVEaXNjdXNzaW9uQ29tbWVudEluT3JnOiBbXG4gICAgICBcIlBBVENIIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlRGlzY3Vzc2lvbkluT3JnOiBbXG4gICAgICBcIlBBVENIIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn1cIixcbiAgICBdLFxuICAgIHVwZGF0ZUluT3JnOiBbXCJQQVRDSCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfVwiXSxcbiAgfSxcbiAgdXNlcnM6IHtcbiAgICBhZGRFbWFpbEZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiUE9TVCAvdXNlci9lbWFpbHNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImFkZEVtYWlsRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGFkZEVtYWlsRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvZW1haWxzXCJdLFxuICAgIGFkZFNvY2lhbEFjY291bnRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9zb2NpYWxfYWNjb3VudHNcIl0sXG4gICAgYmxvY2s6IFtcIlBVVCAvdXNlci9ibG9ja3Mve3VzZXJuYW1lfVwiXSxcbiAgICBjaGVja0Jsb2NrZWQ6IFtcIkdFVCAvdXNlci9ibG9ja3Mve3VzZXJuYW1lfVwiXSxcbiAgICBjaGVja0ZvbGxvd2luZ0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9mb2xsb3dpbmcve3RhcmdldF91c2VyfVwiXSxcbiAgICBjaGVja1BlcnNvbklzRm9sbG93ZWRCeUF1dGhlbnRpY2F0ZWQ6IFtcIkdFVCAvdXNlci9mb2xsb3dpbmcve3VzZXJuYW1lfVwiXSxcbiAgICBjcmVhdGVHcGdLZXlGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIlBPU1QgL3VzZXIvZ3BnX2tleXNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImNyZWF0ZUdwZ0tleUZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBjcmVhdGVHcGdLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9ncGdfa2V5c1wiXSxcbiAgICBjcmVhdGVQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIlBPU1QgL3VzZXIva2V5c1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwiY3JlYXRlUHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGNyZWF0ZVB1YmxpY1NzaEtleUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL2tleXNcIl0sXG4gICAgY3JlYXRlU3NoU2lnbmluZ0tleUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL3NzaF9zaWduaW5nX2tleXNcIl0sXG4gICAgZGVsZXRlQXR0ZXN0YXRpb25zQnVsazogW1xuICAgICAgXCJQT1NUIC91c2Vycy97dXNlcm5hbWV9L2F0dGVzdGF0aW9ucy9kZWxldGUtcmVxdWVzdFwiLFxuICAgIF0sXG4gICAgZGVsZXRlQXR0ZXN0YXRpb25zQnlJZDogW1xuICAgICAgXCJERUxFVEUgL3VzZXJzL3t1c2VybmFtZX0vYXR0ZXN0YXRpb25zL3thdHRlc3RhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUF0dGVzdGF0aW9uc0J5U3ViamVjdERpZ2VzdDogW1xuICAgICAgXCJERUxFVEUgL3VzZXJzL3t1c2VybmFtZX0vYXR0ZXN0YXRpb25zL2RpZ2VzdC97c3ViamVjdF9kaWdlc3R9XCIsXG4gICAgXSxcbiAgICBkZWxldGVFbWFpbEZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL2VtYWlsc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwiZGVsZXRlRW1haWxGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgZGVsZXRlRW1haWxGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiREVMRVRFIC91c2VyL2VtYWlsc1wiXSxcbiAgICBkZWxldGVHcGdLZXlGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9ncGdfa2V5cy97Z3BnX2tleV9pZH1cIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImRlbGV0ZUdwZ0tleUZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBkZWxldGVHcGdLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiREVMRVRFIC91c2VyL2dwZ19rZXlzL3tncGdfa2V5X2lkfVwiXSxcbiAgICBkZWxldGVQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9rZXlzL3trZXlfaWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJkZWxldGVQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgZGVsZXRlUHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkRFTEVURSAvdXNlci9rZXlzL3trZXlfaWR9XCJdLFxuICAgIGRlbGV0ZVNvY2lhbEFjY291bnRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiREVMRVRFIC91c2VyL3NvY2lhbF9hY2NvdW50c1wiXSxcbiAgICBkZWxldGVTc2hTaWduaW5nS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL3NzaF9zaWduaW5nX2tleXMve3NzaF9zaWduaW5nX2tleV9pZH1cIixcbiAgICBdLFxuICAgIGZvbGxvdzogW1wiUFVUIC91c2VyL2ZvbGxvd2luZy97dXNlcm5hbWV9XCJdLFxuICAgIGdldEF1dGhlbnRpY2F0ZWQ6IFtcIkdFVCAvdXNlclwiXSxcbiAgICBnZXRCeUlkOiBbXCJHRVQgL3VzZXIve2FjY291bnRfaWR9XCJdLFxuICAgIGdldEJ5VXNlcm5hbWU6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfVwiXSxcbiAgICBnZXRDb250ZXh0Rm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2hvdmVyY2FyZFwiXSxcbiAgICBnZXRHcGdLZXlGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkdFVCAvdXNlci9ncGdfa2V5cy97Z3BnX2tleV9pZH1cIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImdldEdwZ0tleUZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBnZXRHcGdLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2dwZ19rZXlzL3tncGdfa2V5X2lkfVwiXSxcbiAgICBnZXRQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkdFVCAvdXNlci9rZXlzL3trZXlfaWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJnZXRQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgZ2V0UHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9rZXlzL3trZXlfaWR9XCJdLFxuICAgIGdldFNzaFNpZ25pbmdLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvc3NoX3NpZ25pbmdfa2V5cy97c3NoX3NpZ25pbmdfa2V5X2lkfVwiLFxuICAgIF0sXG4gICAgbGlzdDogW1wiR0VUIC91c2Vyc1wiXSxcbiAgICBsaXN0QXR0ZXN0YXRpb25zOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vYXR0ZXN0YXRpb25zL3tzdWJqZWN0X2RpZ2VzdH1cIl0sXG4gICAgbGlzdEF0dGVzdGF0aW9uc0J1bGs6IFtcbiAgICAgIFwiUE9TVCAvdXNlcnMve3VzZXJuYW1lfS9hdHRlc3RhdGlvbnMvYnVsay1saXN0ez9wZXJfcGFnZSxiZWZvcmUsYWZ0ZXJ9XCIsXG4gICAgXSxcbiAgICBsaXN0QmxvY2tlZEJ5QXV0aGVudGljYXRlZDogW1xuICAgICAgXCJHRVQgL3VzZXIvYmxvY2tzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJsaXN0QmxvY2tlZEJ5QXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGxpc3RCbG9ja2VkQnlBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2Jsb2Nrc1wiXSxcbiAgICBsaXN0RW1haWxzRm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJHRVQgL3VzZXIvZW1haWxzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJsaXN0RW1haWxzRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGxpc3RFbWFpbHNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2VtYWlsc1wiXSxcbiAgICBsaXN0Rm9sbG93ZWRCeUF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL2ZvbGxvd2luZ1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwibGlzdEZvbGxvd2VkQnlBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgbGlzdEZvbGxvd2VkQnlBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2ZvbGxvd2luZ1wiXSxcbiAgICBsaXN0Rm9sbG93ZXJzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9mb2xsb3dlcnNcIl0sXG4gICAgbGlzdEZvbGxvd2Vyc0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9mb2xsb3dlcnNcIl0sXG4gICAgbGlzdEZvbGxvd2luZ0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9mb2xsb3dpbmdcIl0sXG4gICAgbGlzdEdwZ0tleXNGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkdFVCAvdXNlci9ncGdfa2V5c1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwibGlzdEdwZ0tleXNGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgbGlzdEdwZ0tleXNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2dwZ19rZXlzXCJdLFxuICAgIGxpc3RHcGdLZXlzRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2dwZ19rZXlzXCJdLFxuICAgIGxpc3RQdWJsaWNFbWFpbHNGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkdFVCAvdXNlci9wdWJsaWNfZW1haWxzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJsaXN0UHVibGljRW1haWxzRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGxpc3RQdWJsaWNFbWFpbHNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3B1YmxpY19lbWFpbHNcIl0sXG4gICAgbGlzdFB1YmxpY0tleXNGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0va2V5c1wiXSxcbiAgICBsaXN0UHVibGljU3NoS2V5c0ZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL2tleXNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImxpc3RQdWJsaWNTc2hLZXlzRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGxpc3RQdWJsaWNTc2hLZXlzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9rZXlzXCJdLFxuICAgIGxpc3RTb2NpYWxBY2NvdW50c0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvc29jaWFsX2FjY291bnRzXCJdLFxuICAgIGxpc3RTb2NpYWxBY2NvdW50c0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zb2NpYWxfYWNjb3VudHNcIl0sXG4gICAgbGlzdFNzaFNpZ25pbmdLZXlzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9zc2hfc2lnbmluZ19rZXlzXCJdLFxuICAgIGxpc3RTc2hTaWduaW5nS2V5c0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zc2hfc2lnbmluZ19rZXlzXCJdLFxuICAgIHNldFByaW1hcnlFbWFpbFZpc2liaWxpdHlGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIlBBVENIIC91c2VyL2VtYWlsL3Zpc2liaWxpdHlcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcInNldFByaW1hcnlFbWFpbFZpc2liaWxpdHlGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgc2V0UHJpbWFyeUVtYWlsVmlzaWJpbGl0eUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBBVENIIC91c2VyL2VtYWlsL3Zpc2liaWxpdHlcIixcbiAgICBdLFxuICAgIHVuYmxvY2s6IFtcIkRFTEVURSAvdXNlci9ibG9ja3Mve3VzZXJuYW1lfVwiXSxcbiAgICB1bmZvbGxvdzogW1wiREVMRVRFIC91c2VyL2ZvbGxvd2luZy97dXNlcm5hbWV9XCJdLFxuICAgIHVwZGF0ZUF1dGhlbnRpY2F0ZWQ6IFtcIlBBVENIIC91c2VyXCJdLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRW5kcG9pbnRzO1xuIiwgImltcG9ydCB0eXBlIHsgT2N0b2tpdCB9IGZyb20gXCJAb2N0b2tpdC9jb3JlXCI7XG5pbXBvcnQgdHlwZSB7IEVuZHBvaW50T3B0aW9ucywgUmVxdWVzdFBhcmFtZXRlcnMsIFJvdXRlIH0gZnJvbSBcIkBvY3Rva2l0L3R5cGVzXCI7XG5pbXBvcnQgRU5EUE9JTlRTIGZyb20gXCIuL2dlbmVyYXRlZC9lbmRwb2ludHMuanNcIjtcbmltcG9ydCB0eXBlIHsgUmVzdEVuZHBvaW50TWV0aG9kcyB9IGZyb20gXCIuL2dlbmVyYXRlZC9tZXRob2QtdHlwZXMuanNcIjtcbmltcG9ydCB0eXBlIHsgRW5kcG9pbnREZWNvcmF0aW9ucyB9IGZyb20gXCIuL3R5cGVzLmpzXCI7XG5cbi8vIFRoZSBmb2xsb3dpbmcgY29kZSB3YXMgcmVmYWN0b3JlZCBpbjogaHR0cHM6Ly9naXRodWIuY29tL29jdG9raXQvcGx1Z2luLXJlc3QtZW5kcG9pbnQtbWV0aG9kcy5qcy9wdWxsLzYyMlxuLy8gdG8gb3B0aW1pc2UgdGhlIHJ1bnRpbWUgcGVyZm9ybWFuY2Ugb2YgT2N0b2tpdCBpbml0aWFsaXphdGlvbi5cbi8vXG4vLyBUaGlzIG9wdGltaXphdGlvbiBpbnZvbHZlcyB0d28ga2V5IGNoYW5nZXM6XG4vLyAxLiBQcmUtQ29tcHV0YXRpb246IFRoZSBlbmRwb2ludCBtZXRob2RzIGFyZSBwcmUtY29tcHV0ZWQgb25jZSBhdCBtb2R1bGUgbG9hZFxuLy8gICAgdGltZSBpbnN0ZWFkIG9mIGVhY2ggaW52b2NhdGlvbiBvZiBgZW5kcG9pbnRzVG9NZXRob2RzKClgLlxuLy8gMi4gTGF6eSBpbml0aWFsaXphdGlvbiBhbmQgY2FjaGluZzogV2UgdXNlIGEgUHJveHkgZm9yIGVhY2ggc2NvcGUgdG8gb25seVxuLy8gICAgaW5pdGlhbGl6ZSBtZXRob2RzIHRoYXQgYXJlIGFjdHVhbGx5IGNhbGxlZC4gVGhpcyByZWR1Y2VzIHJ1bnRpbWUgb3ZlcmhlYWRcbi8vICAgIGFzIHRoZSBpbml0aWFsaXphdGlvbiBpbnZvbHZlcyBkZWVwIG1lcmdpbmcgb2Ygb2JqZWN0cy4gVGhlIGluaXRpYWxpemVkXG4vLyAgICBtZXRob2RzIGFyZSB0aGVuIGNhY2hlZCBmb3IgZnV0dXJlIHVzZS5cblxuY29uc3QgZW5kcG9pbnRNZXRob2RzTWFwID0gbmV3IE1hcCgpO1xuZm9yIChjb25zdCBbc2NvcGUsIGVuZHBvaW50c10gb2YgT2JqZWN0LmVudHJpZXMoRU5EUE9JTlRTKSkge1xuICBmb3IgKGNvbnN0IFttZXRob2ROYW1lLCBlbmRwb2ludF0gb2YgT2JqZWN0LmVudHJpZXMoZW5kcG9pbnRzKSkge1xuICAgIGNvbnN0IFtyb3V0ZSwgZGVmYXVsdHMsIGRlY29yYXRpb25zXSA9IGVuZHBvaW50O1xuICAgIGNvbnN0IFttZXRob2QsIHVybF0gPSByb3V0ZS5zcGxpdCgvIC8pO1xuICAgIGNvbnN0IGVuZHBvaW50RGVmYXVsdHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0cyxcbiAgICApO1xuXG4gICAgaWYgKCFlbmRwb2ludE1ldGhvZHNNYXAuaGFzKHNjb3BlKSkge1xuICAgICAgZW5kcG9pbnRNZXRob2RzTWFwLnNldChzY29wZSwgbmV3IE1hcCgpKTtcbiAgICB9XG5cbiAgICBlbmRwb2ludE1ldGhvZHNNYXAuZ2V0KHNjb3BlKS5zZXQobWV0aG9kTmFtZSwge1xuICAgICAgc2NvcGUsXG4gICAgICBtZXRob2ROYW1lLFxuICAgICAgZW5kcG9pbnREZWZhdWx0cyxcbiAgICAgIGRlY29yYXRpb25zLFxuICAgIH0pO1xuICB9XG59XG5cbnR5cGUgUHJveHlUYXJnZXQgPSB7XG4gIG9jdG9raXQ6IE9jdG9raXQ7XG4gIHNjb3BlOiBzdHJpbmc7XG4gIGNhY2hlOiBSZWNvcmQ8c3RyaW5nLCAoLi4uYXJnczogYW55W10pID0+IGFueT47XG59O1xuXG5jb25zdCBoYW5kbGVyID0ge1xuICBoYXMoeyBzY29wZSB9OiBQcm94eVRhcmdldCwgbWV0aG9kTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGVuZHBvaW50TWV0aG9kc01hcC5nZXQoc2NvcGUpLmhhcyhtZXRob2ROYW1lKTtcbiAgfSxcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldDogUHJveHlUYXJnZXQsIG1ldGhvZE5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy5nZXQodGFyZ2V0LCBtZXRob2ROYW1lKSwgLy8gZW5zdXJlcyBtZXRob2QgaXMgaW4gdGhlIGNhY2hlXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgfTtcbiAgfSxcbiAgZGVmaW5lUHJvcGVydHkoXG4gICAgdGFyZ2V0OiBQcm94eVRhcmdldCxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmcsXG4gICAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yLFxuICApIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LmNhY2hlLCBtZXRob2ROYW1lLCBkZXNjcmlwdG9yKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHkodGFyZ2V0OiBQcm94eVRhcmdldCwgbWV0aG9kTmFtZTogc3RyaW5nKSB7XG4gICAgZGVsZXRlIHRhcmdldC5jYWNoZVttZXRob2ROYW1lXTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgb3duS2V5cyh7IHNjb3BlIH06IFByb3h5VGFyZ2V0KSB7XG4gICAgcmV0dXJuIFsuLi5lbmRwb2ludE1ldGhvZHNNYXAuZ2V0KHNjb3BlKS5rZXlzKCldO1xuICB9LFxuICBzZXQodGFyZ2V0OiBQcm94eVRhcmdldCwgbWV0aG9kTmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuICh0YXJnZXQuY2FjaGVbbWV0aG9kTmFtZV0gPSB2YWx1ZSk7XG4gIH0sXG4gIGdldCh7IG9jdG9raXQsIHNjb3BlLCBjYWNoZSB9OiBQcm94eVRhcmdldCwgbWV0aG9kTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKGNhY2hlW21ldGhvZE5hbWVdKSB7XG4gICAgICByZXR1cm4gY2FjaGVbbWV0aG9kTmFtZV07XG4gICAgfVxuXG4gICAgY29uc3QgbWV0aG9kID0gZW5kcG9pbnRNZXRob2RzTWFwLmdldChzY29wZSkuZ2V0KG1ldGhvZE5hbWUpO1xuICAgIGlmICghbWV0aG9kKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZW5kcG9pbnREZWZhdWx0cywgZGVjb3JhdGlvbnMgfSA9IG1ldGhvZDtcblxuICAgIGlmIChkZWNvcmF0aW9ucykge1xuICAgICAgY2FjaGVbbWV0aG9kTmFtZV0gPSBkZWNvcmF0ZShcbiAgICAgICAgb2N0b2tpdCxcbiAgICAgICAgc2NvcGUsXG4gICAgICAgIG1ldGhvZE5hbWUsXG4gICAgICAgIGVuZHBvaW50RGVmYXVsdHMsXG4gICAgICAgIGRlY29yYXRpb25zLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGVbbWV0aG9kTmFtZV0gPSBvY3Rva2l0LnJlcXVlc3QuZGVmYXVsdHMoZW5kcG9pbnREZWZhdWx0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhY2hlW21ldGhvZE5hbWVdO1xuICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuZHBvaW50c1RvTWV0aG9kcyhvY3Rva2l0OiBPY3Rva2l0KTogUmVzdEVuZHBvaW50TWV0aG9kcyB7XG4gIGNvbnN0IG5ld01ldGhvZHMgPSB7fSBhcyB7IFtrZXk6IHN0cmluZ106IG9iamVjdCB9O1xuXG4gIGZvciAoY29uc3Qgc2NvcGUgb2YgZW5kcG9pbnRNZXRob2RzTWFwLmtleXMoKSkge1xuICAgIG5ld01ldGhvZHNbc2NvcGVdID0gbmV3IFByb3h5KHsgb2N0b2tpdCwgc2NvcGUsIGNhY2hlOiB7fSB9LCBoYW5kbGVyKTtcbiAgfVxuXG4gIHJldHVybiBuZXdNZXRob2RzIGFzIFJlc3RFbmRwb2ludE1ldGhvZHM7XG59XG5cbmZ1bmN0aW9uIGRlY29yYXRlKFxuICBvY3Rva2l0OiBPY3Rva2l0LFxuICBzY29wZTogc3RyaW5nLFxuICBtZXRob2ROYW1lOiBzdHJpbmcsXG4gIGRlZmF1bHRzOiBFbmRwb2ludE9wdGlvbnMsXG4gIGRlY29yYXRpb25zOiBFbmRwb2ludERlY29yYXRpb25zLFxuKSB7XG4gIGNvbnN0IHJlcXVlc3RXaXRoRGVmYXVsdHMgPSBvY3Rva2l0LnJlcXVlc3QuZGVmYXVsdHMoZGVmYXVsdHMpO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGZ1bmN0aW9uIHdpdGhEZWNvcmF0aW9ucyhcbiAgICAuLi5hcmdzOiBbUm91dGUsIFJlcXVlc3RQYXJhbWV0ZXJzP10gfCBbRW5kcG9pbnRPcHRpb25zXVxuICApIHtcbiAgICAvLyBAdHMtaWdub3JlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjU0ODhcbiAgICBsZXQgb3B0aW9ucyA9IHJlcXVlc3RXaXRoRGVmYXVsdHMuZW5kcG9pbnQubWVyZ2UoLi4uYXJncyk7XG5cbiAgICAvLyBUaGVyZSBhcmUgY3VycmVudGx5IG5vIG90aGVyIGRlY29yYXRpb25zIHRoYW4gYC5tYXBUb0RhdGFgXG4gICAgaWYgKGRlY29yYXRpb25zLm1hcFRvRGF0YSkge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgZGF0YTogb3B0aW9uc1tkZWNvcmF0aW9ucy5tYXBUb0RhdGFdLFxuICAgICAgICBbZGVjb3JhdGlvbnMubWFwVG9EYXRhXTogdW5kZWZpbmVkLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVxdWVzdFdpdGhEZWZhdWx0cyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZGVjb3JhdGlvbnMucmVuYW1lZCkge1xuICAgICAgY29uc3QgW25ld1Njb3BlLCBuZXdNZXRob2ROYW1lXSA9IGRlY29yYXRpb25zLnJlbmFtZWQ7XG4gICAgICBvY3Rva2l0LmxvZy53YXJuKFxuICAgICAgICBgb2N0b2tpdC4ke3Njb3BlfS4ke21ldGhvZE5hbWV9KCkgaGFzIGJlZW4gcmVuYW1lZCB0byBvY3Rva2l0LiR7bmV3U2NvcGV9LiR7bmV3TWV0aG9kTmFtZX0oKWAsXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoZGVjb3JhdGlvbnMuZGVwcmVjYXRlZCkge1xuICAgICAgb2N0b2tpdC5sb2cud2FybihkZWNvcmF0aW9ucy5kZXByZWNhdGVkKTtcbiAgICB9XG5cbiAgICBpZiAoZGVjb3JhdGlvbnMucmVuYW1lZFBhcmFtZXRlcnMpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yNTQ4OFxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHJlcXVlc3RXaXRoRGVmYXVsdHMuZW5kcG9pbnQubWVyZ2UoLi4uYXJncyk7XG5cbiAgICAgIGZvciAoY29uc3QgW25hbWUsIGFsaWFzXSBvZiBPYmplY3QuZW50cmllcyhcbiAgICAgICAgZGVjb3JhdGlvbnMucmVuYW1lZFBhcmFtZXRlcnMsXG4gICAgICApKSB7XG4gICAgICAgIGlmIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICBvY3Rva2l0LmxvZy53YXJuKFxuICAgICAgICAgICAgYFwiJHtuYW1lfVwiIHBhcmFtZXRlciBpcyBkZXByZWNhdGVkIGZvciBcIm9jdG9raXQuJHtzY29wZX0uJHttZXRob2ROYW1lfSgpXCIuIFVzZSBcIiR7YWxpYXN9XCIgaW5zdGVhZGAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoIShhbGlhcyBpbiBvcHRpb25zKSkge1xuICAgICAgICAgICAgb3B0aW9uc1thbGlhc10gPSBvcHRpb25zW25hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWxldGUgb3B0aW9uc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcXVlc3RXaXRoRGVmYXVsdHMob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gQHRzLWlnbm9yZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI1NDg4XG4gICAgcmV0dXJuIHJlcXVlc3RXaXRoRGVmYXVsdHMoLi4uYXJncyk7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24od2l0aERlY29yYXRpb25zLCByZXF1ZXN0V2l0aERlZmF1bHRzKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IE9jdG9raXQgfSBmcm9tIFwiQG9jdG9raXQvY29yZVwiO1xuXG5leHBvcnQgdHlwZSB7IFJlc3RFbmRwb2ludE1ldGhvZFR5cGVzIH0gZnJvbSBcIi4vZ2VuZXJhdGVkL3BhcmFtZXRlcnMtYW5kLXJlc3BvbnNlLXR5cGVzLmpzXCI7XG5pbXBvcnQgeyBWRVJTSU9OIH0gZnJvbSBcIi4vdmVyc2lvbi5qc1wiO1xuaW1wb3J0IHR5cGUgeyBBcGkgfSBmcm9tIFwiLi90eXBlcy5qc1wiO1xuaW1wb3J0IHsgZW5kcG9pbnRzVG9NZXRob2RzIH0gZnJvbSBcIi4vZW5kcG9pbnRzLXRvLW1ldGhvZHMuanNcIjtcblxuLy8gRXhwb3J0IHRoZSB0eXBlIGZvciBkb3duc3RyZWFtIHVzZXJzIGluIG9yZGVyIHRvIGZpeCBhIFR5cGVTY3JpcHQgZXJyb3Jcbi8vIFRoZSBpbmZlcnJlZCB0eXBlIG9mICdPY3Rva2l0JyBjYW5ub3QgYmUgbmFtZWQgd2l0aG91dCBhIHJlZmVyZW5jZSB0byAnLi4vbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3BsdWdpbi1yZXN0LWVuZHBvaW50LW1ldGhvZHMvZGlzdC10eXBlcy90eXBlcy5qcycuIFRoaXMgaXMgbGlrZWx5IG5vdCBwb3J0YWJsZS4gQSB0eXBlIGFubm90YXRpb24gaXMgbmVjZXNzYXJ5LlxuZXhwb3J0IHR5cGUgeyBBcGkgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RFbmRwb2ludE1ldGhvZHMob2N0b2tpdDogT2N0b2tpdCk6IEFwaSB7XG4gIGNvbnN0IGFwaSA9IGVuZHBvaW50c1RvTWV0aG9kcyhvY3Rva2l0KTtcbiAgcmV0dXJuIHtcbiAgICByZXN0OiBhcGksXG4gIH07XG59XG5yZXN0RW5kcG9pbnRNZXRob2RzLlZFUlNJT04gPSBWRVJTSU9OO1xuXG5leHBvcnQgZnVuY3Rpb24gbGVnYWN5UmVzdEVuZHBvaW50TWV0aG9kcyhvY3Rva2l0OiBPY3Rva2l0KTogQXBpW1wicmVzdFwiXSAmIEFwaSB7XG4gIGNvbnN0IGFwaSA9IGVuZHBvaW50c1RvTWV0aG9kcyhvY3Rva2l0KTtcbiAgcmV0dXJuIHtcbiAgICAuLi5hcGksXG4gICAgcmVzdDogYXBpLFxuICB9O1xufVxubGVnYWN5UmVzdEVuZHBvaW50TWV0aG9kcy5WRVJTSU9OID0gVkVSU0lPTjtcbiIsICJjb25zdCBWRVJTSU9OID0gXCIyMi4wLjFcIjtcbmV4cG9ydCB7XG4gIFZFUlNJT05cbn07XG4iLCAiaW1wb3J0IHsgT2N0b2tpdCBhcyBDb3JlIH0gZnJvbSBcIkBvY3Rva2l0L2NvcmVcIjtcbmltcG9ydCB7IHJlcXVlc3RMb2cgfSBmcm9tIFwiQG9jdG9raXQvcGx1Z2luLXJlcXVlc3QtbG9nXCI7XG5pbXBvcnQge1xuICBwYWdpbmF0ZVJlc3Rcbn0gZnJvbSBcIkBvY3Rva2l0L3BsdWdpbi1wYWdpbmF0ZS1yZXN0XCI7XG5pbXBvcnQgeyBsZWdhY3lSZXN0RW5kcG9pbnRNZXRob2RzIH0gZnJvbSBcIkBvY3Rva2l0L3BsdWdpbi1yZXN0LWVuZHBvaW50LW1ldGhvZHNcIjtcbmltcG9ydCB7IFZFUlNJT04gfSBmcm9tIFwiLi92ZXJzaW9uLmpzXCI7XG5jb25zdCBPY3Rva2l0ID0gQ29yZS5wbHVnaW4ocmVxdWVzdExvZywgbGVnYWN5UmVzdEVuZHBvaW50TWV0aG9kcywgcGFnaW5hdGVSZXN0KS5kZWZhdWx0cyhcbiAge1xuICAgIHVzZXJBZ2VudDogYG9jdG9raXQtcmVzdC5qcy8ke1ZFUlNJT059YFxuICB9XG4pO1xuZXhwb3J0IHtcbiAgT2N0b2tpdFxufTtcbiIsICJpbXBvcnQgeyBPY3Rva2l0IH0gZnJvbSAnQG9jdG9raXQvcmVzdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHaXRodWJDbGllbnQodG9rZW46IHN0cmluZyk6IE9jdG9raXQge1xuICAgIHJldHVybiBuZXcgT2N0b2tpdCh7IGF1dGg6IHRva2VuIH0pO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZVJlbGVhc2VCcmFuY2ggfSBmcm9tICdAL2JyYW5jaC1tYW5hZ2VyJztcbmltcG9ydCB7IGNyZWF0ZUdpdGh1YkNsaWVudCB9IGZyb20gJ0AvZ2l0aHViLWNsaWVudCc7XG5cbmNvbnN0IFtvd25lciwgcmVwb10gPSBwcm9jZXNzLmVudlsnR0lUSFVCX1JFUE9TSVRPUlknXSEuc3BsaXQoJy8nKTtcblxuYXdhaXQgY3JlYXRlUmVsZWFzZUJyYW5jaChjcmVhdGVHaXRodWJDbGllbnQocHJvY2Vzcy5lbnZbJ0dIX1RPS0VOJ10hKSwge1xuICAgIG93bmVyOiBvd25lciEsXG4gICAgcmVwbzogcmVwbyEsXG4gICAgYnJhbmNoTmFtZTogcHJvY2Vzcy5lbnZbJ1JFTEVBU0VfQlJBTkNIX05BTUUnXSEsXG59KTtcbiJd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RTtBQUFBLEVBQy9FO0FBQUEsSUFDRSxXQUFXLG1CQUFtQkMsUUFBTztBQUFBLEVBQ3ZDO0FBQ0Y7OztBQ1RPLFNBQVMsbUJBQW1CLE9BQXdCO0FBQ3ZELFNBQU8sSUFBSUMsU0FBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDOzs7QUNEQSxJQUFNLENBQUMsT0FBTyxJQUFJLElBQUksUUFBUSxJQUFJLG1CQUFtQixFQUFHLE1BQU0sR0FBRztBQUVqRSxNQUFNLG9CQUFvQixtQkFBbUIsUUFBUSxJQUFJLFVBQVUsQ0FBRSxHQUFHO0FBQUEsRUFDcEU7QUFBQSxFQUNBO0FBQUEsRUFDQSxZQUFZLFFBQVEsSUFBSSxxQkFBcUI7QUFDakQsQ0FBQzsiLAogICJuYW1lcyI6IFsiTnVsbE9iamVjdCIsICJwYXJzZSIsICJzYWZlUGFyc2UiLCAibmFtZSIsICJtZXRob2QiLCAiaG9vayIsICJob29rIiwgInZhbHVlIiwgInRleHQiLCAiVkVSU0lPTiIsICJpc1BsYWluT2JqZWN0IiwgIndpdGhEZWZhdWx0cyIsICJWRVJTSU9OIiwgIndpdGhEZWZhdWx0cyIsICJyZXF1ZXN0IiwgImVuZHBvaW50IiwgIlZFUlNJT04iLCAibm9vcCIsICJWRVJTSU9OIiwgImhvb2siLCAiYXV0aCIsICJWRVJTSU9OIiwgInJlcXVlc3QiLCAiVkVSU0lPTiIsICJWRVJTSU9OIiwgIlZFUlNJT04iLCAiVkVSU0lPTiIsICJlbmRwb2ludCIsICJvcHRpb25zIiwgIlZFUlNJT04iLCAiVkVSU0lPTiIsICJPY3Rva2l0IiwgIlZFUlNJT04iLCAiT2N0b2tpdCJdCn0K

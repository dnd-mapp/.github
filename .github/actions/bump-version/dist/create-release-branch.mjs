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

// src/scripts/create-release-branch.ts
import { fileURLToPath } from "url";
async function run() {
  const [owner, repo] = process.env["GITHUB_REPOSITORY"].split("/");
  await createReleaseBranch(createGithubClient(process.env["GH_TOKEN"]), {
    owner,
    repo,
    branchName: process.env["RELEASE_BRANCH_NAME"]
  });
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtY29udGVudC10eXBlLXBhcnNlQDMuMC4wL25vZGVfbW9kdWxlcy9mYXN0LWNvbnRlbnQtdHlwZS1wYXJzZS9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9zcmMvYnJhbmNoLW1hbmFnZXIvYnJhbmNoLW1hbmFnZXIudHMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3VuaXZlcnNhbC11c2VyLWFnZW50QDcuMC4zL25vZGVfbW9kdWxlcy91bml2ZXJzYWwtdXNlci1hZ2VudC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYmVmb3JlLWFmdGVyLWhvb2tANC4wLjAvbm9kZV9tb2R1bGVzL2JlZm9yZS1hZnRlci1ob29rL2xpYi9yZWdpc3Rlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYmVmb3JlLWFmdGVyLWhvb2tANC4wLjAvbm9kZV9tb2R1bGVzL2JlZm9yZS1hZnRlci1ob29rL2xpYi9hZGQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JlZm9yZS1hZnRlci1ob29rQDQuMC4wL25vZGVfbW9kdWxlcy9iZWZvcmUtYWZ0ZXItaG9vay9saWIvcmVtb3ZlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9iZWZvcmUtYWZ0ZXItaG9va0A0LjAuMC9ub2RlX21vZHVsZXMvYmVmb3JlLWFmdGVyLWhvb2svaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K2VuZHBvaW50QDExLjAuMy9ub2RlX21vZHVsZXMvQG9jdG9raXQvZW5kcG9pbnQvZGlzdC1idW5kbGUvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3JlcXVlc3RAMTAuMC44L25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9yZXF1ZXN0L2Rpc3QtYnVuZGxlL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9qc29uLXdpdGgtYmlnaW50QDMuNS44L25vZGVfbW9kdWxlcy9qc29uLXdpdGgtYmlnaW50L2pzb24td2l0aC1iaWdpbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3JlcXVlc3QtZXJyb3JANy4xLjAvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3JlcXVlc3QtZXJyb3IvZGlzdC1zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K2dyYXBocWxAOS4wLjMvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L2dyYXBocWwvZGlzdC1idW5kbGUvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K2F1dGgtdG9rZW5ANi4wLjAvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L2F1dGgtdG9rZW4vZGlzdC1idW5kbGUvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K2NvcmVANy4wLjYvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L2NvcmUvZGlzdC1zcmMvdmVyc2lvbi5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9jdG9raXQrY29yZUA3LjAuNi9ub2RlX21vZHVsZXMvQG9jdG9raXQvY29yZS9kaXN0LXNyYy9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9jdG9raXQrcGx1Z2luLXJlcXVlc3QtbG9nQDYuMC4wX0BvY3Rva2l0K2NvcmVANy4wLjYvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3BsdWdpbi1yZXF1ZXN0LWxvZy9kaXN0LXNyYy92ZXJzaW9uLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtwbHVnaW4tcmVxdWVzdC1sb2dANi4wLjBfQG9jdG9raXQrY29yZUA3LjAuNi9ub2RlX21vZHVsZXMvQG9jdG9raXQvcGx1Z2luLXJlcXVlc3QtbG9nL2Rpc3Qtc3JjL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtwbHVnaW4tcGFnaW5hdGUtcmVzdEAxNC4wLjBfQG9jdG9raXQrY29yZUA3LjAuNi9ub2RlX21vZHVsZXMvQG9jdG9raXQvcGx1Z2luLXBhZ2luYXRlLXJlc3QvZGlzdC1idW5kbGUvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3BsdWdpbi1yZXN0LWVuZHBvaV84OGYxY2ZkY2NiY2QxMmY5YmQ4OWE2NjJhM2QwOGJjZS9ub2RlX21vZHVsZXMvQG9jdG9raXQvc3JjL3ZlcnNpb24udHMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3BsdWdpbi1yZXN0LWVuZHBvaV84OGYxY2ZkY2NiY2QxMmY5YmQ4OWE2NjJhM2QwOGJjZS9ub2RlX21vZHVsZXMvQG9jdG9raXQvc3JjL2dlbmVyYXRlZC9lbmRwb2ludHMudHMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvY3Rva2l0K3BsdWdpbi1yZXN0LWVuZHBvaV84OGYxY2ZkY2NiY2QxMmY5YmQ4OWE2NjJhM2QwOGJjZS9ub2RlX21vZHVsZXMvQG9jdG9raXQvc3JjL2VuZHBvaW50cy10by1tZXRob2RzLnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab2N0b2tpdCtwbHVnaW4tcmVzdC1lbmRwb2lfODhmMWNmZGNjYmNkMTJmOWJkODlhNjYyYTNkMDhiY2Uvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3NyYy9pbmRleC50cyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9jdG9raXQrcmVzdEAyMi4wLjEvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3Jlc3QvZGlzdC1zcmMvdmVyc2lvbi5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9jdG9raXQrcmVzdEAyMi4wLjEvbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3Jlc3QvZGlzdC1zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vc3JjL2dpdGh1Yi1jbGllbnQvZ2l0aHViLWNsaWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvc2NyaXB0cy9jcmVhdGUtcmVsZWFzZS1icmFuY2gudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBOdWxsT2JqZWN0ID0gZnVuY3Rpb24gTnVsbE9iamVjdCAoKSB7IH1cbk51bGxPYmplY3QucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4vKipcbiAqIFJlZ0V4cCB0byBtYXRjaCAqKCBcIjtcIiBwYXJhbWV0ZXIgKSBpbiBSRkMgNzIzMSBzZWMgMy4xLjEuMVxuICpcbiAqIHBhcmFtZXRlciAgICAgPSB0b2tlbiBcIj1cIiAoIHRva2VuIC8gcXVvdGVkLXN0cmluZyApXG4gKiB0b2tlbiAgICAgICAgID0gMSp0Y2hhclxuICogdGNoYXIgICAgICAgICA9IFwiIVwiIC8gXCIjXCIgLyBcIiRcIiAvIFwiJVwiIC8gXCImXCIgLyBcIidcIiAvIFwiKlwiXG4gKiAgICAgICAgICAgICAgIC8gXCIrXCIgLyBcIi1cIiAvIFwiLlwiIC8gXCJeXCIgLyBcIl9cIiAvIFwiYFwiIC8gXCJ8XCIgLyBcIn5cIlxuICogICAgICAgICAgICAgICAvIERJR0lUIC8gQUxQSEFcbiAqICAgICAgICAgICAgICAgOyBhbnkgVkNIQVIsIGV4Y2VwdCBkZWxpbWl0ZXJzXG4gKiBxdW90ZWQtc3RyaW5nID0gRFFVT1RFICooIHFkdGV4dCAvIHF1b3RlZC1wYWlyICkgRFFVT1RFXG4gKiBxZHRleHQgICAgICAgID0gSFRBQiAvIFNQIC8gJXgyMSAvICV4MjMtNUIgLyAleDVELTdFIC8gb2JzLXRleHRcbiAqIG9icy10ZXh0ICAgICAgPSAleDgwLUZGXG4gKiBxdW90ZWQtcGFpciAgID0gXCJcXFwiICggSFRBQiAvIFNQIC8gVkNIQVIgLyBvYnMtdGV4dCApXG4gKi9cbmNvbnN0IHBhcmFtUkUgPSAvOyAqKFshIyQlJicqKy5eXFx3YHx+LV0rKT0oXCIoPzpbXFx2XFx1MDAyMFxcdTAwMjFcXHUwMDIzLVxcdTAwNWJcXHUwMDVkLVxcdTAwN2VcXHUwMDgwLVxcdTAwZmZdfFxcXFxbXFx2XFx1MDAyMC1cXHUwMGZmXSkqXCJ8WyEjJCUmJyorLl5cXHdgfH4tXSspICovZ3VcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggcXVvdGVkLXBhaXIgaW4gUkZDIDcyMzAgc2VjIDMuMi42XG4gKlxuICogcXVvdGVkLXBhaXIgPSBcIlxcXCIgKCBIVEFCIC8gU1AgLyBWQ0hBUiAvIG9icy10ZXh0IClcbiAqIG9icy10ZXh0ICAgID0gJXg4MC1GRlxuICovXG5jb25zdCBxdW90ZWRQYWlyUkUgPSAvXFxcXChbXFx2XFx1MDAyMC1cXHUwMGZmXSkvZ3VcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggdHlwZSBpbiBSRkMgNzIzMSBzZWMgMy4xLjEuMVxuICpcbiAqIG1lZGlhLXR5cGUgPSB0eXBlIFwiL1wiIHN1YnR5cGVcbiAqIHR5cGUgICAgICAgPSB0b2tlblxuICogc3VidHlwZSAgICA9IHRva2VuXG4gKi9cbmNvbnN0IG1lZGlhVHlwZVJFID0gL15bISMkJSYnKisuXlxcd3x+LV0rXFwvWyEjJCUmJyorLl5cXHd8fi1dKyQvdVxuXG4vLyBkZWZhdWx0IENvbnRlbnRUeXBlIHRvIHByZXZlbnQgcmVwZWF0ZWQgb2JqZWN0IGNyZWF0aW9uXG5jb25zdCBkZWZhdWx0Q29udGVudFR5cGUgPSB7IHR5cGU6ICcnLCBwYXJhbWV0ZXJzOiBuZXcgTnVsbE9iamVjdCgpIH1cbk9iamVjdC5mcmVlemUoZGVmYXVsdENvbnRlbnRUeXBlLnBhcmFtZXRlcnMpXG5PYmplY3QuZnJlZXplKGRlZmF1bHRDb250ZW50VHlwZSlcblxuLyoqXG4gKiBQYXJzZSBtZWRpYSB0eXBlIHRvIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IGhlYWRlclxuICogQHJldHVybiB7T2JqZWN0fVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHBhcnNlIChoZWFkZXIpIHtcbiAgaWYgKHR5cGVvZiBoZWFkZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgaGVhZGVyIGlzIHJlcXVpcmVkIGFuZCBtdXN0IGJlIGEgc3RyaW5nJylcbiAgfVxuXG4gIGxldCBpbmRleCA9IGhlYWRlci5pbmRleE9mKCc7JylcbiAgY29uc3QgdHlwZSA9IGluZGV4ICE9PSAtMVxuICAgID8gaGVhZGVyLnNsaWNlKDAsIGluZGV4KS50cmltKClcbiAgICA6IGhlYWRlci50cmltKClcblxuICBpZiAobWVkaWFUeXBlUkUudGVzdCh0eXBlKSA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIG1lZGlhIHR5cGUnKVxuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHR5cGU6IHR5cGUudG9Mb3dlckNhc2UoKSxcbiAgICBwYXJhbWV0ZXJzOiBuZXcgTnVsbE9iamVjdCgpXG4gIH1cblxuICAvLyBwYXJzZSBwYXJhbWV0ZXJzXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBsZXQga2V5XG4gIGxldCBtYXRjaFxuICBsZXQgdmFsdWVcblxuICBwYXJhbVJFLmxhc3RJbmRleCA9IGluZGV4XG5cbiAgd2hpbGUgKChtYXRjaCA9IHBhcmFtUkUuZXhlYyhoZWFkZXIpKSkge1xuICAgIGlmIChtYXRjaC5pbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgcGFyYW1ldGVyIGZvcm1hdCcpXG4gICAgfVxuXG4gICAgaW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoXG4gICAga2V5ID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKVxuICAgIHZhbHVlID0gbWF0Y2hbMl1cblxuICAgIGlmICh2YWx1ZVswXSA9PT0gJ1wiJykge1xuICAgICAgLy8gcmVtb3ZlIHF1b3RlcyBhbmQgZXNjYXBlc1xuICAgICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAuc2xpY2UoMSwgdmFsdWUubGVuZ3RoIC0gMSlcblxuICAgICAgcXVvdGVkUGFpclJFLnRlc3QodmFsdWUpICYmICh2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocXVvdGVkUGFpclJFLCAnJDEnKSlcbiAgICB9XG5cbiAgICByZXN1bHQucGFyYW1ldGVyc1trZXldID0gdmFsdWVcbiAgfVxuXG4gIGlmIChpbmRleCAhPT0gaGVhZGVyLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgcGFyYW1ldGVyIGZvcm1hdCcpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIHNhZmVQYXJzZSAoaGVhZGVyKSB7XG4gIGlmICh0eXBlb2YgaGVhZGVyICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZWZhdWx0Q29udGVudFR5cGVcbiAgfVxuXG4gIGxldCBpbmRleCA9IGhlYWRlci5pbmRleE9mKCc7JylcbiAgY29uc3QgdHlwZSA9IGluZGV4ICE9PSAtMVxuICAgID8gaGVhZGVyLnNsaWNlKDAsIGluZGV4KS50cmltKClcbiAgICA6IGhlYWRlci50cmltKClcblxuICBpZiAobWVkaWFUeXBlUkUudGVzdCh0eXBlKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZGVmYXVsdENvbnRlbnRUeXBlXG4gIH1cblxuICBjb25zdCByZXN1bHQgPSB7XG4gICAgdHlwZTogdHlwZS50b0xvd2VyQ2FzZSgpLFxuICAgIHBhcmFtZXRlcnM6IG5ldyBOdWxsT2JqZWN0KClcbiAgfVxuXG4gIC8vIHBhcnNlIHBhcmFtZXRlcnNcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGxldCBrZXlcbiAgbGV0IG1hdGNoXG4gIGxldCB2YWx1ZVxuXG4gIHBhcmFtUkUubGFzdEluZGV4ID0gaW5kZXhcblxuICB3aGlsZSAoKG1hdGNoID0gcGFyYW1SRS5leGVjKGhlYWRlcikpKSB7XG4gICAgaWYgKG1hdGNoLmluZGV4ICE9PSBpbmRleCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb250ZW50VHlwZVxuICAgIH1cblxuICAgIGluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aFxuICAgIGtleSA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKClcbiAgICB2YWx1ZSA9IG1hdGNoWzJdXG5cbiAgICBpZiAodmFsdWVbMF0gPT09ICdcIicpIHtcbiAgICAgIC8vIHJlbW92ZSBxdW90ZXMgYW5kIGVzY2FwZXNcbiAgICAgIHZhbHVlID0gdmFsdWVcbiAgICAgICAgLnNsaWNlKDEsIHZhbHVlLmxlbmd0aCAtIDEpXG5cbiAgICAgIHF1b3RlZFBhaXJSRS50ZXN0KHZhbHVlKSAmJiAodmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHF1b3RlZFBhaXJSRSwgJyQxJykpXG4gICAgfVxuXG4gICAgcmVzdWx0LnBhcmFtZXRlcnNba2V5XSA9IHZhbHVlXG4gIH1cblxuICBpZiAoaW5kZXggIT09IGhlYWRlci5sZW5ndGgpIHtcbiAgICByZXR1cm4gZGVmYXVsdENvbnRlbnRUeXBlXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSB7IHBhcnNlLCBzYWZlUGFyc2UgfVxubW9kdWxlLmV4cG9ydHMucGFyc2UgPSBwYXJzZVxubW9kdWxlLmV4cG9ydHMuc2FmZVBhcnNlID0gc2FmZVBhcnNlXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0Q29udGVudFR5cGUgPSBkZWZhdWx0Q29udGVudFR5cGVcbiIsICJpbXBvcnQgeyBPY3Rva2l0IH0gZnJvbSAnQG9jdG9raXQvcmVzdCc7XG5cbmludGVyZmFjZSBDcmVhdGVSZWxlYXNlQnJhbmNoUGFyYW1zIHtcbiAgICBvd25lcjogc3RyaW5nO1xuICAgIHJlcG86IHN0cmluZztcbiAgICBicmFuY2hOYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDb21taXRGaWxlc1BhcmFtcyB7XG4gICAgb3duZXI6IHN0cmluZztcbiAgICByZXBvOiBzdHJpbmc7XG4gICAgYnJhbmNoOiBzdHJpbmc7XG4gICAgZmlsZXM6IHsgcGF0aDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9W107XG59XG5cbmludGVyZmFjZSBNZXJnZVJlbGVhc2VCcmFuY2hQYXJhbXMge1xuICAgIG93bmVyOiBzdHJpbmc7XG4gICAgcmVwbzogc3RyaW5nO1xuICAgIHJlbGVhc2VCcmFuY2g6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIERlbGV0ZVJlbGVhc2VCcmFuY2hQYXJhbXMge1xuICAgIG93bmVyOiBzdHJpbmc7XG4gICAgcmVwbzogc3RyaW5nO1xuICAgIGJyYW5jaDogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVsZWFzZUJyYW5jaChvY3Rva2l0OiBPY3Rva2l0LCBwYXJhbXM6IENyZWF0ZVJlbGVhc2VCcmFuY2hQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IGRhdGE6IHJlZiB9ID0gYXdhaXQgb2N0b2tpdC5naXQuZ2V0UmVmKHtcbiAgICAgICAgb3duZXI6IHBhcmFtcy5vd25lcixcbiAgICAgICAgcmVwbzogcGFyYW1zLnJlcG8sXG4gICAgICAgIHJlZjogJ2hlYWRzL21haW4nLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgb2N0b2tpdC5naXQuY3JlYXRlUmVmKHtcbiAgICAgICAgb3duZXI6IHBhcmFtcy5vd25lcixcbiAgICAgICAgcmVwbzogcGFyYW1zLnJlcG8sXG4gICAgICAgIHJlZjogYHJlZnMvaGVhZHMvJHtwYXJhbXMuYnJhbmNoTmFtZX1gLFxuICAgICAgICBzaGE6IHJlZi5vYmplY3Quc2hhLFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29tbWl0RmlsZXMob2N0b2tpdDogT2N0b2tpdCwgcGFyYW1zOiBDb21taXRGaWxlc1BhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGZvciAoY29uc3QgZmlsZSBvZiBwYXJhbXMuZmlsZXMpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBvY3Rva2l0LnJlcG9zLmdldENvbnRlbnQoe1xuICAgICAgICAgICAgb3duZXI6IHBhcmFtcy5vd25lcixcbiAgICAgICAgICAgIHJlcG86IHBhcmFtcy5yZXBvLFxuICAgICAgICAgICAgcGF0aDogZmlsZS5wYXRoLFxuICAgICAgICAgICAgcmVmOiBwYXJhbXMuYnJhbmNoLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBmaWxlU2hhID0gKGRhdGEgYXMgeyBzaGE6IHN0cmluZyB9KS5zaGE7XG5cbiAgICAgICAgYXdhaXQgb2N0b2tpdC5yZXBvcy5jcmVhdGVPclVwZGF0ZUZpbGVDb250ZW50cyh7XG4gICAgICAgICAgICBvd25lcjogcGFyYW1zLm93bmVyLFxuICAgICAgICAgICAgcmVwbzogcGFyYW1zLnJlcG8sXG4gICAgICAgICAgICBwYXRoOiBmaWxlLnBhdGgsXG4gICAgICAgICAgICBtZXNzYWdlOiBmaWxlLm1lc3NhZ2UsXG4gICAgICAgICAgICBjb250ZW50OiBCdWZmZXIuZnJvbShmaWxlLmNvbnRlbnQpLnRvU3RyaW5nKCdiYXNlNjQnKSxcbiAgICAgICAgICAgIHNoYTogZmlsZVNoYSxcbiAgICAgICAgICAgIGJyYW5jaDogcGFyYW1zLmJyYW5jaCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWVyZ2VSZWxlYXNlQnJhbmNoKG9jdG9raXQ6IE9jdG9raXQsIHBhcmFtczogTWVyZ2VSZWxlYXNlQnJhbmNoUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgb2N0b2tpdC5yZXBvcy5tZXJnZSh7XG4gICAgICAgICAgICBvd25lcjogcGFyYW1zLm93bmVyLFxuICAgICAgICAgICAgcmVwbzogcGFyYW1zLnJlcG8sXG4gICAgICAgICAgICBiYXNlOiAnbWFpbicsXG4gICAgICAgICAgICBoZWFkOiBwYXJhbXMucmVsZWFzZUJyYW5jaCxcbiAgICAgICAgICAgIGNvbW1pdF9tZXNzYWdlOiBgY2hvcmU6IG1lcmdlICR7cGFyYW1zLnJlbGVhc2VCcmFuY2h9IGludG8gbWFpbmAsXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmICgoZXJyb3IgYXMgeyBzdGF0dXM/OiBudW1iZXIgfSkuc3RhdHVzID09PSA0MDkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgTWVyZ2UgY29uZmxpY3Q6IGNhbm5vdCBtZXJnZSAke3BhcmFtcy5yZWxlYXNlQnJhbmNofSBpbnRvIG1haW4uIFJlc29sdmUgY29uZmxpY3RzIG1hbnVhbGx5LmAsXG4gICAgICAgICAgICAgICAgeyBjYXVzZTogZXJyb3IgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVSZWxlYXNlQnJhbmNoKG9jdG9raXQ6IE9jdG9raXQsIHBhcmFtczogRGVsZXRlUmVsZWFzZUJyYW5jaFBhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IG9jdG9raXQuZ2l0LmRlbGV0ZVJlZih7XG4gICAgICAgIG93bmVyOiBwYXJhbXMub3duZXIsXG4gICAgICAgIHJlcG86IHBhcmFtcy5yZXBvLFxuICAgICAgICByZWY6IGBoZWFkcy8ke3BhcmFtcy5icmFuY2h9YCxcbiAgICB9KTtcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gZ2V0VXNlckFnZW50KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciA9PT0gXCJvYmplY3RcIiAmJiBcInVzZXJBZ2VudFwiIGluIG5hdmlnYXRvcikge1xuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MudmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGBOb2RlLmpzLyR7cHJvY2Vzcy52ZXJzaW9uLnN1YnN0cigxKX0gKCR7cHJvY2Vzcy5wbGF0Zm9ybX07ICR7XG4gICAgICBwcm9jZXNzLmFyY2hcbiAgICB9KWA7XG4gIH1cblxuICByZXR1cm4gXCI8ZW52aXJvbm1lbnQgdW5kZXRlY3RhYmxlPlwiO1xufVxuIiwgIi8vIEB0cy1jaGVja1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIoc3RhdGUsIG5hbWUsIG1ldGhvZCwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIG1ldGhvZCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibWV0aG9kIGZvciBiZWZvcmUgaG9vayBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShuYW1lKSkge1xuICAgIHJldHVybiBuYW1lLnJldmVyc2UoKS5yZWR1Y2UoKGNhbGxiYWNrLCBuYW1lKSA9PiB7XG4gICAgICByZXR1cm4gcmVnaXN0ZXIuYmluZChudWxsLCBzdGF0ZSwgbmFtZSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICAgIH0sIG1ldGhvZCkoKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICBpZiAoIXN0YXRlLnJlZ2lzdHJ5W25hbWVdKSB7XG4gICAgICByZXR1cm4gbWV0aG9kKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZS5yZWdpc3RyeVtuYW1lXS5yZWR1Y2UoKG1ldGhvZCwgcmVnaXN0ZXJlZCkgPT4ge1xuICAgICAgcmV0dXJuIHJlZ2lzdGVyZWQuaG9vay5iaW5kKG51bGwsIG1ldGhvZCwgb3B0aW9ucyk7XG4gICAgfSwgbWV0aG9kKSgpO1xuICB9KTtcbn1cbiIsICIvLyBAdHMtY2hlY2tcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEhvb2soc3RhdGUsIGtpbmQsIG5hbWUsIGhvb2spIHtcbiAgY29uc3Qgb3JpZyA9IGhvb2s7XG4gIGlmICghc3RhdGUucmVnaXN0cnlbbmFtZV0pIHtcbiAgICBzdGF0ZS5yZWdpc3RyeVtuYW1lXSA9IFtdO1xuICB9XG5cbiAgaWYgKGtpbmQgPT09IFwiYmVmb3JlXCIpIHtcbiAgICBob29rID0gKG1ldGhvZCwgb3B0aW9ucykgPT4ge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgIC50aGVuKG9yaWcuYmluZChudWxsLCBvcHRpb25zKSlcbiAgICAgICAgLnRoZW4obWV0aG9kLmJpbmQobnVsbCwgb3B0aW9ucykpO1xuICAgIH07XG4gIH1cblxuICBpZiAoa2luZCA9PT0gXCJhZnRlclwiKSB7XG4gICAgaG9vayA9IChtZXRob2QsIG9wdGlvbnMpID0+IHtcbiAgICAgIGxldCByZXN1bHQ7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgLnRoZW4obWV0aG9kLmJpbmQobnVsbCwgb3B0aW9ucykpXG4gICAgICAgIC50aGVuKChyZXN1bHRfKSA9PiB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0XztcbiAgICAgICAgICByZXR1cm4gb3JpZyhyZXN1bHQsIG9wdGlvbnMpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChraW5kID09PSBcImVycm9yXCIpIHtcbiAgICBob29rID0gKG1ldGhvZCwgb3B0aW9ucykgPT4ge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgIC50aGVuKG1ldGhvZC5iaW5kKG51bGwsIG9wdGlvbnMpKVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9yaWcoZXJyb3IsIG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgc3RhdGUucmVnaXN0cnlbbmFtZV0ucHVzaCh7XG4gICAgaG9vazogaG9vayxcbiAgICBvcmlnOiBvcmlnLFxuICB9KTtcbn1cbiIsICIvLyBAdHMtY2hlY2tcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUhvb2soc3RhdGUsIG5hbWUsIG1ldGhvZCkge1xuICBpZiAoIXN0YXRlLnJlZ2lzdHJ5W25hbWVdKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5yZWdpc3RyeVtuYW1lXVxuICAgIC5tYXAoKHJlZ2lzdGVyZWQpID0+IHtcbiAgICAgIHJldHVybiByZWdpc3RlcmVkLm9yaWc7XG4gICAgfSlcbiAgICAuaW5kZXhPZihtZXRob2QpO1xuXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0ZS5yZWdpc3RyeVtuYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xufVxuIiwgIi8vIEB0cy1jaGVja1xuXG5pbXBvcnQgeyByZWdpc3RlciB9IGZyb20gXCIuL2xpYi9yZWdpc3Rlci5qc1wiO1xuaW1wb3J0IHsgYWRkSG9vayB9IGZyb20gXCIuL2xpYi9hZGQuanNcIjtcbmltcG9ydCB7IHJlbW92ZUhvb2sgfSBmcm9tIFwiLi9saWIvcmVtb3ZlLmpzXCI7XG5cbi8vIGJpbmQgd2l0aCBhcnJheSBvZiBhcmd1bWVudHM6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMTc5MjkxM1xuY29uc3QgYmluZCA9IEZ1bmN0aW9uLmJpbmQ7XG5jb25zdCBiaW5kYWJsZSA9IGJpbmQuYmluZChiaW5kKTtcblxuZnVuY3Rpb24gYmluZEFwaShob29rLCBzdGF0ZSwgbmFtZSkge1xuICBjb25zdCByZW1vdmVIb29rUmVmID0gYmluZGFibGUocmVtb3ZlSG9vaywgbnVsbCkuYXBwbHkoXG4gICAgbnVsbCxcbiAgICBuYW1lID8gW3N0YXRlLCBuYW1lXSA6IFtzdGF0ZV1cbiAgKTtcbiAgaG9vay5hcGkgPSB7IHJlbW92ZTogcmVtb3ZlSG9va1JlZiB9O1xuICBob29rLnJlbW92ZSA9IHJlbW92ZUhvb2tSZWY7XG4gIFtcImJlZm9yZVwiLCBcImVycm9yXCIsIFwiYWZ0ZXJcIiwgXCJ3cmFwXCJdLmZvckVhY2goKGtpbmQpID0+IHtcbiAgICBjb25zdCBhcmdzID0gbmFtZSA/IFtzdGF0ZSwga2luZCwgbmFtZV0gOiBbc3RhdGUsIGtpbmRdO1xuICAgIGhvb2tba2luZF0gPSBob29rLmFwaVtraW5kXSA9IGJpbmRhYmxlKGFkZEhvb2ssIG51bGwpLmFwcGx5KG51bGwsIGFyZ3MpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gU2luZ3VsYXIoKSB7XG4gIGNvbnN0IHNpbmd1bGFySG9va05hbWUgPSBTeW1ib2woXCJTaW5ndWxhclwiKTtcbiAgY29uc3Qgc2luZ3VsYXJIb29rU3RhdGUgPSB7XG4gICAgcmVnaXN0cnk6IHt9LFxuICB9O1xuICBjb25zdCBzaW5ndWxhckhvb2sgPSByZWdpc3Rlci5iaW5kKG51bGwsIHNpbmd1bGFySG9va1N0YXRlLCBzaW5ndWxhckhvb2tOYW1lKTtcbiAgYmluZEFwaShzaW5ndWxhckhvb2ssIHNpbmd1bGFySG9va1N0YXRlLCBzaW5ndWxhckhvb2tOYW1lKTtcbiAgcmV0dXJuIHNpbmd1bGFySG9vaztcbn1cblxuZnVuY3Rpb24gQ29sbGVjdGlvbigpIHtcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgcmVnaXN0cnk6IHt9LFxuICB9O1xuXG4gIGNvbnN0IGhvb2sgPSByZWdpc3Rlci5iaW5kKG51bGwsIHN0YXRlKTtcbiAgYmluZEFwaShob29rLCBzdGF0ZSk7XG5cbiAgcmV0dXJuIGhvb2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgU2luZ3VsYXIsIENvbGxlY3Rpb24gfTtcbiIsICIvLyBwa2cvZGlzdC1zcmMvZGVmYXVsdHMuanNcbmltcG9ydCB7IGdldFVzZXJBZ2VudCB9IGZyb20gXCJ1bml2ZXJzYWwtdXNlci1hZ2VudFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvdmVyc2lvbi5qc1xudmFyIFZFUlNJT04gPSBcIjAuMC4wLWRldmVsb3BtZW50XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9kZWZhdWx0cy5qc1xudmFyIHVzZXJBZ2VudCA9IGBvY3Rva2l0LWVuZHBvaW50LmpzLyR7VkVSU0lPTn0gJHtnZXRVc2VyQWdlbnQoKX1gO1xudmFyIERFRkFVTFRTID0ge1xuICBtZXRob2Q6IFwiR0VUXCIsXG4gIGJhc2VVcmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbVwiLFxuICBoZWFkZXJzOiB7XG4gICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIudjMranNvblwiLFxuICAgIFwidXNlci1hZ2VudFwiOiB1c2VyQWdlbnRcbiAgfSxcbiAgbWVkaWFUeXBlOiB7XG4gICAgZm9ybWF0OiBcIlwiXG4gIH1cbn07XG5cbi8vIHBrZy9kaXN0LXNyYy91dGlsL2xvd2VyY2FzZS1rZXlzLmpzXG5mdW5jdGlvbiBsb3dlcmNhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIW9iamVjdCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5yZWR1Y2UoKG5ld09iaiwga2V5KSA9PiB7XG4gICAgbmV3T2JqW2tleS50b0xvd2VyQ2FzZSgpXSA9IG9iamVjdFtrZXldO1xuICAgIHJldHVybiBuZXdPYmo7XG4gIH0sIHt9KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3V0aWwvaXMtcGxhaW4tb2JqZWN0LmpzXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgdmFsdWUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHJldHVybiB0cnVlO1xuICBjb25zdCBDdG9yID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCBcImNvbnN0cnVjdG9yXCIpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJiBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbChDdG9yKSA9PT0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwodmFsdWUpO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC9tZXJnZS1kZWVwLmpzXG5mdW5jdGlvbiBtZXJnZURlZXAoZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMpO1xuICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChvcHRpb25zW2tleV0pKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVmYXVsdHMpKSBPYmplY3QuYXNzaWduKHJlc3VsdCwgeyBba2V5XTogb3B0aW9uc1trZXldIH0pO1xuICAgICAgZWxzZSByZXN1bHRba2V5XSA9IG1lcmdlRGVlcChkZWZhdWx0c1trZXldLCBvcHRpb25zW2tleV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwgeyBba2V5XTogb3B0aW9uc1trZXldIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy91dGlsL3JlbW92ZS11bmRlZmluZWQtcHJvcGVydGllcy5qc1xuZnVuY3Rpb24gcmVtb3ZlVW5kZWZpbmVkUHJvcGVydGllcyhvYmopIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG9ialtrZXldID09PSB2b2lkIDApIHtcbiAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL21lcmdlLmpzXG5mdW5jdGlvbiBtZXJnZShkZWZhdWx0cywgcm91dGUsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiByb3V0ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGxldCBbbWV0aG9kLCB1cmxdID0gcm91dGUuc3BsaXQoXCIgXCIpO1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHVybCA/IHsgbWV0aG9kLCB1cmwgfSA6IHsgdXJsOiBtZXRob2QgfSwgb3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHJvdXRlKTtcbiAgfVxuICBvcHRpb25zLmhlYWRlcnMgPSBsb3dlcmNhc2VLZXlzKG9wdGlvbnMuaGVhZGVycyk7XG4gIHJlbW92ZVVuZGVmaW5lZFByb3BlcnRpZXMob3B0aW9ucyk7XG4gIHJlbW92ZVVuZGVmaW5lZFByb3BlcnRpZXMob3B0aW9ucy5oZWFkZXJzKTtcbiAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IG1lcmdlRGVlcChkZWZhdWx0cyB8fCB7fSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLnVybCA9PT0gXCIvZ3JhcGhxbFwiKSB7XG4gICAgaWYgKGRlZmF1bHRzICYmIGRlZmF1bHRzLm1lZGlhVHlwZS5wcmV2aWV3cz8ubGVuZ3RoKSB7XG4gICAgICBtZXJnZWRPcHRpb25zLm1lZGlhVHlwZS5wcmV2aWV3cyA9IGRlZmF1bHRzLm1lZGlhVHlwZS5wcmV2aWV3cy5maWx0ZXIoXG4gICAgICAgIChwcmV2aWV3KSA9PiAhbWVyZ2VkT3B0aW9ucy5tZWRpYVR5cGUucHJldmlld3MuaW5jbHVkZXMocHJldmlldylcbiAgICAgICkuY29uY2F0KG1lcmdlZE9wdGlvbnMubWVkaWFUeXBlLnByZXZpZXdzKTtcbiAgICB9XG4gICAgbWVyZ2VkT3B0aW9ucy5tZWRpYVR5cGUucHJldmlld3MgPSAobWVyZ2VkT3B0aW9ucy5tZWRpYVR5cGUucHJldmlld3MgfHwgW10pLm1hcCgocHJldmlldykgPT4gcHJldmlldy5yZXBsYWNlKC8tcHJldmlldy8sIFwiXCIpKTtcbiAgfVxuICByZXR1cm4gbWVyZ2VkT3B0aW9ucztcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3V0aWwvYWRkLXF1ZXJ5LXBhcmFtZXRlcnMuanNcbmZ1bmN0aW9uIGFkZFF1ZXJ5UGFyYW1ldGVycyh1cmwsIHBhcmFtZXRlcnMpIHtcbiAgY29uc3Qgc2VwYXJhdG9yID0gL1xcPy8udGVzdCh1cmwpID8gXCImXCIgOiBcIj9cIjtcbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKTtcbiAgaWYgKG5hbWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgcmV0dXJuIHVybCArIHNlcGFyYXRvciArIG5hbWVzLm1hcCgobmFtZSkgPT4ge1xuICAgIGlmIChuYW1lID09PSBcInFcIikge1xuICAgICAgcmV0dXJuIFwicT1cIiArIHBhcmFtZXRlcnMucS5zcGxpdChcIitcIikubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbihcIitcIik7XG4gICAgfVxuICAgIHJldHVybiBgJHtuYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbWV0ZXJzW25hbWVdKX1gO1xuICB9KS5qb2luKFwiJlwiKTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3V0aWwvZXh0cmFjdC11cmwtdmFyaWFibGUtbmFtZXMuanNcbnZhciB1cmxWYXJpYWJsZVJlZ2V4ID0gL1xce1tee319XStcXH0vZztcbmZ1bmN0aW9uIHJlbW92ZU5vbkNoYXJzKHZhcmlhYmxlTmFtZSkge1xuICByZXR1cm4gdmFyaWFibGVOYW1lLnJlcGxhY2UoLyg/Ol5cXFcrKXwoPzooPzwhXFxXKVxcVyskKS9nLCBcIlwiKS5zcGxpdCgvLC8pO1xufVxuZnVuY3Rpb24gZXh0cmFjdFVybFZhcmlhYmxlTmFtZXModXJsKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSB1cmwubWF0Y2godXJsVmFyaWFibGVSZWdleCk7XG4gIGlmICghbWF0Y2hlcykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gbWF0Y2hlcy5tYXAocmVtb3ZlTm9uQ2hhcnMpLnJlZHVjZSgoYSwgYikgPT4gYS5jb25jYXQoYiksIFtdKTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3V0aWwvb21pdC5qc1xuZnVuY3Rpb24gb21pdChvYmplY3QsIGtleXNUb09taXQpIHtcbiAgY29uc3QgcmVzdWx0ID0geyBfX3Byb3RvX186IG51bGwgfTtcbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSkge1xuICAgIGlmIChrZXlzVG9PbWl0LmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gb2JqZWN0W2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy91dGlsL3VybC10ZW1wbGF0ZS5qc1xuZnVuY3Rpb24gZW5jb2RlUmVzZXJ2ZWQoc3RyKSB7XG4gIHJldHVybiBzdHIuc3BsaXQoLyglWzAtOUEtRmEtZl17Mn0pL2cpLm1hcChmdW5jdGlvbihwYXJ0KSB7XG4gICAgaWYgKCEvJVswLTlBLUZhLWZdLy50ZXN0KHBhcnQpKSB7XG4gICAgICBwYXJ0ID0gZW5jb2RlVVJJKHBhcnQpLnJlcGxhY2UoLyU1Qi9nLCBcIltcIikucmVwbGFjZSgvJTVEL2csIFwiXVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnQ7XG4gIH0pLmpvaW4oXCJcIik7XG59XG5mdW5jdGlvbiBlbmNvZGVVbnJlc2VydmVkKHN0cikge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCkqXS9nLCBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIFwiJVwiICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZSwga2V5KSB7XG4gIHZhbHVlID0gb3BlcmF0b3IgPT09IFwiK1wiIHx8IG9wZXJhdG9yID09PSBcIiNcIiA/IGVuY29kZVJlc2VydmVkKHZhbHVlKSA6IGVuY29kZVVucmVzZXJ2ZWQodmFsdWUpO1xuICBpZiAoa2V5KSB7XG4gICAgcmV0dXJuIGVuY29kZVVucmVzZXJ2ZWQoa2V5KSArIFwiPVwiICsgdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2b2lkIDAgJiYgdmFsdWUgIT09IG51bGw7XG59XG5mdW5jdGlvbiBpc0tleU9wZXJhdG9yKG9wZXJhdG9yKSB7XG4gIHJldHVybiBvcGVyYXRvciA9PT0gXCI7XCIgfHwgb3BlcmF0b3IgPT09IFwiJlwiIHx8IG9wZXJhdG9yID09PSBcIj9cIjtcbn1cbmZ1bmN0aW9uIGdldFZhbHVlcyhjb250ZXh0LCBvcGVyYXRvciwga2V5LCBtb2RpZmllcikge1xuICB2YXIgdmFsdWUgPSBjb250ZXh0W2tleV0sIHJlc3VsdCA9IFtdO1xuICBpZiAoaXNEZWZpbmVkKHZhbHVlKSAmJiB2YWx1ZSAhPT0gXCJcIikge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJiaWdpbnRcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICBpZiAobW9kaWZpZXIgJiYgbW9kaWZpZXIgIT09IFwiKlwiKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHBhcnNlSW50KG1vZGlmaWVyLCAxMCkpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goXG4gICAgICAgIGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZSwgaXNLZXlPcGVyYXRvcihvcGVyYXRvcikgPyBrZXkgOiBcIlwiKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZS5maWx0ZXIoaXNEZWZpbmVkKS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlMikge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goXG4gICAgICAgICAgICAgIGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZTIsIGlzS2V5T3BlcmF0b3Iob3BlcmF0b3IpID8ga2V5IDogXCJcIilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goZnVuY3Rpb24oaykge1xuICAgICAgICAgICAgaWYgKGlzRGVmaW5lZCh2YWx1ZVtrXSkpIHtcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlW2tdLCBrKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRtcCA9IFtdO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZS5maWx0ZXIoaXNEZWZpbmVkKS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlMikge1xuICAgICAgICAgICAgdG1wLnB1c2goZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlMikpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICAgIGlmIChpc0RlZmluZWQodmFsdWVba10pKSB7XG4gICAgICAgICAgICAgIHRtcC5wdXNoKGVuY29kZVVucmVzZXJ2ZWQoaykpO1xuICAgICAgICAgICAgICB0bXAucHVzaChlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWVba10udG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0tleU9wZXJhdG9yKG9wZXJhdG9yKSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVVucmVzZXJ2ZWQoa2V5KSArIFwiPVwiICsgdG1wLmpvaW4oXCIsXCIpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0bXAubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2godG1wLmpvaW4oXCIsXCIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAob3BlcmF0b3IgPT09IFwiO1wiKSB7XG4gICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICByZXN1bHQucHVzaChlbmNvZGVVbnJlc2VydmVkKGtleSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiXCIgJiYgKG9wZXJhdG9yID09PSBcIiZcIiB8fCBvcGVyYXRvciA9PT0gXCI/XCIpKSB7XG4gICAgICByZXN1bHQucHVzaChlbmNvZGVVbnJlc2VydmVkKGtleSkgKyBcIj1cIik7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgcmVzdWx0LnB1c2goXCJcIik7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBwYXJzZVVybCh0ZW1wbGF0ZSkge1xuICByZXR1cm4ge1xuICAgIGV4cGFuZDogZXhwYW5kLmJpbmQobnVsbCwgdGVtcGxhdGUpXG4gIH07XG59XG5mdW5jdGlvbiBleHBhbmQodGVtcGxhdGUsIGNvbnRleHQpIHtcbiAgdmFyIG9wZXJhdG9ycyA9IFtcIitcIiwgXCIjXCIsIFwiLlwiLCBcIi9cIiwgXCI7XCIsIFwiP1wiLCBcIiZcIl07XG4gIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShcbiAgICAvXFx7KFteXFx7XFx9XSspXFx9fChbXlxce1xcfV0rKS9nLFxuICAgIGZ1bmN0aW9uKF8sIGV4cHJlc3Npb24sIGxpdGVyYWwpIHtcbiAgICAgIGlmIChleHByZXNzaW9uKSB7XG4gICAgICAgIGxldCBvcGVyYXRvciA9IFwiXCI7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgICAgICBpZiAob3BlcmF0b3JzLmluZGV4T2YoZXhwcmVzc2lvbi5jaGFyQXQoMCkpICE9PSAtMSkge1xuICAgICAgICAgIG9wZXJhdG9yID0gZXhwcmVzc2lvbi5jaGFyQXQoMCk7XG4gICAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24uc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICAgIGV4cHJlc3Npb24uc3BsaXQoLywvZykuZm9yRWFjaChmdW5jdGlvbih2YXJpYWJsZSkge1xuICAgICAgICAgIHZhciB0bXAgPSAvKFteOlxcKl0qKSg/OjooXFxkKyl8KFxcKikpPy8uZXhlYyh2YXJpYWJsZSk7XG4gICAgICAgICAgdmFsdWVzLnB1c2goZ2V0VmFsdWVzKGNvbnRleHQsIG9wZXJhdG9yLCB0bXBbMV0sIHRtcFsyXSB8fCB0bXBbM10pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcGVyYXRvciAmJiBvcGVyYXRvciAhPT0gXCIrXCIpIHtcbiAgICAgICAgICB2YXIgc2VwYXJhdG9yID0gXCIsXCI7XG4gICAgICAgICAgaWYgKG9wZXJhdG9yID09PSBcIj9cIikge1xuICAgICAgICAgICAgc2VwYXJhdG9yID0gXCImXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciAhPT0gXCIjXCIpIHtcbiAgICAgICAgICAgIHNlcGFyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKHZhbHVlcy5sZW5ndGggIT09IDAgPyBvcGVyYXRvciA6IFwiXCIpICsgdmFsdWVzLmpvaW4oc2VwYXJhdG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWVzLmpvaW4oXCIsXCIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZW5jb2RlUmVzZXJ2ZWQobGl0ZXJhbCk7XG4gICAgICB9XG4gICAgfVxuICApO1xuICBpZiAodGVtcGxhdGUgPT09IFwiL1wiKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKC9cXC8kLywgXCJcIik7XG4gIH1cbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3BhcnNlLmpzXG5mdW5jdGlvbiBwYXJzZShvcHRpb25zKSB7XG4gIGxldCBtZXRob2QgPSBvcHRpb25zLm1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICBsZXQgdXJsID0gKG9wdGlvbnMudXJsIHx8IFwiL1wiKS5yZXBsYWNlKC86KFthLXpdXFx3KykvZywgXCJ7JDF9XCIpO1xuICBsZXQgaGVhZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMuaGVhZGVycyk7XG4gIGxldCBib2R5O1xuICBsZXQgcGFyYW1ldGVycyA9IG9taXQob3B0aW9ucywgW1xuICAgIFwibWV0aG9kXCIsXG4gICAgXCJiYXNlVXJsXCIsXG4gICAgXCJ1cmxcIixcbiAgICBcImhlYWRlcnNcIixcbiAgICBcInJlcXVlc3RcIixcbiAgICBcIm1lZGlhVHlwZVwiXG4gIF0pO1xuICBjb25zdCB1cmxWYXJpYWJsZU5hbWVzID0gZXh0cmFjdFVybFZhcmlhYmxlTmFtZXModXJsKTtcbiAgdXJsID0gcGFyc2VVcmwodXJsKS5leHBhbmQocGFyYW1ldGVycyk7XG4gIGlmICghL15odHRwLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSBvcHRpb25zLmJhc2VVcmwgKyB1cmw7XG4gIH1cbiAgY29uc3Qgb21pdHRlZFBhcmFtZXRlcnMgPSBPYmplY3Qua2V5cyhvcHRpb25zKS5maWx0ZXIoKG9wdGlvbikgPT4gdXJsVmFyaWFibGVOYW1lcy5pbmNsdWRlcyhvcHRpb24pKS5jb25jYXQoXCJiYXNlVXJsXCIpO1xuICBjb25zdCByZW1haW5pbmdQYXJhbWV0ZXJzID0gb21pdChwYXJhbWV0ZXJzLCBvbWl0dGVkUGFyYW1ldGVycyk7XG4gIGNvbnN0IGlzQmluYXJ5UmVxdWVzdCA9IC9hcHBsaWNhdGlvblxcL29jdGV0LXN0cmVhbS9pLnRlc3QoaGVhZGVycy5hY2NlcHQpO1xuICBpZiAoIWlzQmluYXJ5UmVxdWVzdCkge1xuICAgIGlmIChvcHRpb25zLm1lZGlhVHlwZS5mb3JtYXQpIHtcbiAgICAgIGhlYWRlcnMuYWNjZXB0ID0gaGVhZGVycy5hY2NlcHQuc3BsaXQoLywvKS5tYXAoXG4gICAgICAgIChmb3JtYXQpID0+IGZvcm1hdC5yZXBsYWNlKFxuICAgICAgICAgIC9hcHBsaWNhdGlvblxcL3ZuZChcXC5cXHcrKShcXC52Myk/KFxcLlxcdyspPyhcXCtqc29uKT8kLyxcbiAgICAgICAgICBgYXBwbGljYXRpb24vdm5kJDEkMi4ke29wdGlvbnMubWVkaWFUeXBlLmZvcm1hdH1gXG4gICAgICAgIClcbiAgICAgICkuam9pbihcIixcIik7XG4gICAgfVxuICAgIGlmICh1cmwuZW5kc1dpdGgoXCIvZ3JhcGhxbFwiKSkge1xuICAgICAgaWYgKG9wdGlvbnMubWVkaWFUeXBlLnByZXZpZXdzPy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgcHJldmlld3NGcm9tQWNjZXB0SGVhZGVyID0gaGVhZGVycy5hY2NlcHQubWF0Y2goLyg/PCFbXFx3LV0pW1xcdy1dKyg/PS1wcmV2aWV3KS9nKSB8fCBbXTtcbiAgICAgICAgaGVhZGVycy5hY2NlcHQgPSBwcmV2aWV3c0Zyb21BY2NlcHRIZWFkZXIuY29uY2F0KG9wdGlvbnMubWVkaWFUeXBlLnByZXZpZXdzKS5tYXAoKHByZXZpZXcpID0+IHtcbiAgICAgICAgICBjb25zdCBmb3JtYXQgPSBvcHRpb25zLm1lZGlhVHlwZS5mb3JtYXQgPyBgLiR7b3B0aW9ucy5tZWRpYVR5cGUuZm9ybWF0fWAgOiBcIitqc29uXCI7XG4gICAgICAgICAgcmV0dXJuIGBhcHBsaWNhdGlvbi92bmQuZ2l0aHViLiR7cHJldmlld30tcHJldmlldyR7Zm9ybWF0fWA7XG4gICAgICAgIH0pLmpvaW4oXCIsXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoW1wiR0VUXCIsIFwiSEVBRFwiXS5pbmNsdWRlcyhtZXRob2QpKSB7XG4gICAgdXJsID0gYWRkUXVlcnlQYXJhbWV0ZXJzKHVybCwgcmVtYWluaW5nUGFyYW1ldGVycyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKFwiZGF0YVwiIGluIHJlbWFpbmluZ1BhcmFtZXRlcnMpIHtcbiAgICAgIGJvZHkgPSByZW1haW5pbmdQYXJhbWV0ZXJzLmRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhyZW1haW5pbmdQYXJhbWV0ZXJzKS5sZW5ndGgpIHtcbiAgICAgICAgYm9keSA9IHJlbWFpbmluZ1BhcmFtZXRlcnM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSAmJiB0eXBlb2YgYm9keSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIjtcbiAgfVxuICBpZiAoW1wiUEFUQ0hcIiwgXCJQVVRcIl0uaW5jbHVkZXMobWV0aG9kKSAmJiB0eXBlb2YgYm9keSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGJvZHkgPSBcIlwiO1xuICB9XG4gIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgIHsgbWV0aG9kLCB1cmwsIGhlYWRlcnMgfSxcbiAgICB0eXBlb2YgYm9keSAhPT0gXCJ1bmRlZmluZWRcIiA/IHsgYm9keSB9IDogbnVsbCxcbiAgICBvcHRpb25zLnJlcXVlc3QgPyB7IHJlcXVlc3Q6IG9wdGlvbnMucmVxdWVzdCB9IDogbnVsbFxuICApO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvZW5kcG9pbnQtd2l0aC1kZWZhdWx0cy5qc1xuZnVuY3Rpb24gZW5kcG9pbnRXaXRoRGVmYXVsdHMoZGVmYXVsdHMsIHJvdXRlLCBvcHRpb25zKSB7XG4gIHJldHVybiBwYXJzZShtZXJnZShkZWZhdWx0cywgcm91dGUsIG9wdGlvbnMpKTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3dpdGgtZGVmYXVsdHMuanNcbmZ1bmN0aW9uIHdpdGhEZWZhdWx0cyhvbGREZWZhdWx0cywgbmV3RGVmYXVsdHMpIHtcbiAgY29uc3QgREVGQVVMVFMyID0gbWVyZ2Uob2xkRGVmYXVsdHMsIG5ld0RlZmF1bHRzKTtcbiAgY29uc3QgZW5kcG9pbnQyID0gZW5kcG9pbnRXaXRoRGVmYXVsdHMuYmluZChudWxsLCBERUZBVUxUUzIpO1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihlbmRwb2ludDIsIHtcbiAgICBERUZBVUxUUzogREVGQVVMVFMyLFxuICAgIGRlZmF1bHRzOiB3aXRoRGVmYXVsdHMuYmluZChudWxsLCBERUZBVUxUUzIpLFxuICAgIG1lcmdlOiBtZXJnZS5iaW5kKG51bGwsIERFRkFVTFRTMiksXG4gICAgcGFyc2VcbiAgfSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9pbmRleC5qc1xudmFyIGVuZHBvaW50ID0gd2l0aERlZmF1bHRzKG51bGwsIERFRkFVTFRTKTtcbmV4cG9ydCB7XG4gIGVuZHBvaW50XG59O1xuIiwgIi8vIHBrZy9kaXN0LXNyYy9pbmRleC5qc1xuaW1wb3J0IHsgZW5kcG9pbnQgfSBmcm9tIFwiQG9jdG9raXQvZW5kcG9pbnRcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL2RlZmF1bHRzLmpzXG5pbXBvcnQgeyBnZXRVc2VyQWdlbnQgfSBmcm9tIFwidW5pdmVyc2FsLXVzZXItYWdlbnRcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL3ZlcnNpb24uanNcbnZhciBWRVJTSU9OID0gXCIxMC4wLjhcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL2RlZmF1bHRzLmpzXG52YXIgZGVmYXVsdHNfZGVmYXVsdCA9IHtcbiAgaGVhZGVyczoge1xuICAgIFwidXNlci1hZ2VudFwiOiBgb2N0b2tpdC1yZXF1ZXN0LmpzLyR7VkVSU0lPTn0gJHtnZXRVc2VyQWdlbnQoKX1gXG4gIH1cbn07XG5cbi8vIHBrZy9kaXN0LXNyYy9mZXRjaC13cmFwcGVyLmpzXG5pbXBvcnQgeyBzYWZlUGFyc2UgfSBmcm9tIFwiZmFzdC1jb250ZW50LXR5cGUtcGFyc2VcIjtcbmltcG9ydCB7IEpTT05QYXJzZSwgSlNPTlN0cmluZ2lmeSB9IGZyb20gXCJqc29uLXdpdGgtYmlnaW50XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9pcy1wbGFpbi1vYmplY3QuanNcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiB8fCB2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIGNvbnN0IEN0b3IgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvdG8sIFwiY29uc3RydWN0b3JcIikgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PT0gXCJmdW5jdGlvblwiICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmIEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsKEN0b3IpID09PSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCh2YWx1ZSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9mZXRjaC13cmFwcGVyLmpzXG5pbXBvcnQgeyBSZXF1ZXN0RXJyb3IgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdC1lcnJvclwiO1xudmFyIG5vb3AgPSAoKSA9PiBcIlwiO1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXcmFwcGVyKHJlcXVlc3RPcHRpb25zKSB7XG4gIGNvbnN0IGZldGNoID0gcmVxdWVzdE9wdGlvbnMucmVxdWVzdD8uZmV0Y2ggfHwgZ2xvYmFsVGhpcy5mZXRjaDtcbiAgaWYgKCFmZXRjaCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiZmV0Y2ggaXMgbm90IHNldC4gUGxlYXNlIHBhc3MgYSBmZXRjaCBpbXBsZW1lbnRhdGlvbiBhcyBuZXcgT2N0b2tpdCh7IHJlcXVlc3Q6IHsgZmV0Y2ggfX0pLiBMZWFybiBtb3JlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9vY3Rva2l0L29jdG9raXQuanMvI2ZldGNoLW1pc3NpbmdcIlxuICAgICk7XG4gIH1cbiAgY29uc3QgbG9nID0gcmVxdWVzdE9wdGlvbnMucmVxdWVzdD8ubG9nIHx8IGNvbnNvbGU7XG4gIGNvbnN0IHBhcnNlU3VjY2Vzc1Jlc3BvbnNlQm9keSA9IHJlcXVlc3RPcHRpb25zLnJlcXVlc3Q/LnBhcnNlU3VjY2Vzc1Jlc3BvbnNlQm9keSAhPT0gZmFsc2U7XG4gIGNvbnN0IGJvZHkgPSBpc1BsYWluT2JqZWN0KHJlcXVlc3RPcHRpb25zLmJvZHkpIHx8IEFycmF5LmlzQXJyYXkocmVxdWVzdE9wdGlvbnMuYm9keSkgPyBKU09OU3RyaW5naWZ5KHJlcXVlc3RPcHRpb25zLmJvZHkpIDogcmVxdWVzdE9wdGlvbnMuYm9keTtcbiAgY29uc3QgcmVxdWVzdEhlYWRlcnMgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgT2JqZWN0LmVudHJpZXMocmVxdWVzdE9wdGlvbnMuaGVhZGVycykubWFwKChbbmFtZSwgdmFsdWVdKSA9PiBbXG4gICAgICBuYW1lLFxuICAgICAgU3RyaW5nKHZhbHVlKVxuICAgIF0pXG4gICk7XG4gIGxldCBmZXRjaFJlc3BvbnNlO1xuICB0cnkge1xuICAgIGZldGNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0T3B0aW9ucy51cmwsIHtcbiAgICAgIG1ldGhvZDogcmVxdWVzdE9wdGlvbnMubWV0aG9kLFxuICAgICAgYm9keSxcbiAgICAgIHJlZGlyZWN0OiByZXF1ZXN0T3B0aW9ucy5yZXF1ZXN0Py5yZWRpcmVjdCxcbiAgICAgIGhlYWRlcnM6IHJlcXVlc3RIZWFkZXJzLFxuICAgICAgc2lnbmFsOiByZXF1ZXN0T3B0aW9ucy5yZXF1ZXN0Py5zaWduYWwsXG4gICAgICAvLyBkdXBsZXggbXVzdCBiZSBzZXQgaWYgcmVxdWVzdC5ib2R5IGlzIFJlYWRhYmxlU3RyZWFtIG9yIEFzeW5jIEl0ZXJhYmxlcy5cbiAgICAgIC8vIFNlZSBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jZG9tLXJlcXVlc3Rpbml0LWR1cGxleC5cbiAgICAgIC4uLnJlcXVlc3RPcHRpb25zLmJvZHkgJiYgeyBkdXBsZXg6IFwiaGFsZlwiIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsZXQgbWVzc2FnZSA9IFwiVW5rbm93biBFcnJvclwiO1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IubmFtZSA9PT0gXCJBYm9ydEVycm9yXCIpIHtcbiAgICAgICAgZXJyb3Iuc3RhdHVzID0gNTAwO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgaWYgKGVycm9yLm5hbWUgPT09IFwiVHlwZUVycm9yXCIgJiYgXCJjYXVzZVwiIGluIGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5jYXVzZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IGVycm9yLmNhdXNlLm1lc3NhZ2U7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVycm9yLmNhdXNlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IGVycm9yLmNhdXNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3RFcnJvciA9IG5ldyBSZXF1ZXN0RXJyb3IobWVzc2FnZSwgNTAwLCB7XG4gICAgICByZXF1ZXN0OiByZXF1ZXN0T3B0aW9uc1xuICAgIH0pO1xuICAgIHJlcXVlc3RFcnJvci5jYXVzZSA9IGVycm9yO1xuICAgIHRocm93IHJlcXVlc3RFcnJvcjtcbiAgfVxuICBjb25zdCBzdGF0dXMgPSBmZXRjaFJlc3BvbnNlLnN0YXR1cztcbiAgY29uc3QgdXJsID0gZmV0Y2hSZXNwb25zZS51cmw7XG4gIGNvbnN0IHJlc3BvbnNlSGVhZGVycyA9IHt9O1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBmZXRjaFJlc3BvbnNlLmhlYWRlcnMpIHtcbiAgICByZXNwb25zZUhlYWRlcnNba2V5XSA9IHZhbHVlO1xuICB9XG4gIGNvbnN0IG9jdG9raXRSZXNwb25zZSA9IHtcbiAgICB1cmwsXG4gICAgc3RhdHVzLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICBkYXRhOiBcIlwiXG4gIH07XG4gIGlmIChcImRlcHJlY2F0aW9uXCIgaW4gcmVzcG9uc2VIZWFkZXJzKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHJlc3BvbnNlSGVhZGVycy5saW5rICYmIHJlc3BvbnNlSGVhZGVycy5saW5rLm1hdGNoKC88KFtePD5dKyk+OyByZWw9XCJkZXByZWNhdGlvblwiLyk7XG4gICAgY29uc3QgZGVwcmVjYXRpb25MaW5rID0gbWF0Y2hlcyAmJiBtYXRjaGVzLnBvcCgpO1xuICAgIGxvZy53YXJuKFxuICAgICAgYFtAb2N0b2tpdC9yZXF1ZXN0XSBcIiR7cmVxdWVzdE9wdGlvbnMubWV0aG9kfSAke3JlcXVlc3RPcHRpb25zLnVybH1cIiBpcyBkZXByZWNhdGVkLiBJdCBpcyBzY2hlZHVsZWQgdG8gYmUgcmVtb3ZlZCBvbiAke3Jlc3BvbnNlSGVhZGVycy5zdW5zZXR9JHtkZXByZWNhdGlvbkxpbmsgPyBgLiBTZWUgJHtkZXByZWNhdGlvbkxpbmt9YCA6IFwiXCJ9YFxuICAgICk7XG4gIH1cbiAgaWYgKHN0YXR1cyA9PT0gMjA0IHx8IHN0YXR1cyA9PT0gMjA1KSB7XG4gICAgcmV0dXJuIG9jdG9raXRSZXNwb25zZTtcbiAgfVxuICBpZiAocmVxdWVzdE9wdGlvbnMubWV0aG9kID09PSBcIkhFQURcIikge1xuICAgIGlmIChzdGF0dXMgPCA0MDApIHtcbiAgICAgIHJldHVybiBvY3Rva2l0UmVzcG9uc2U7XG4gICAgfVxuICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoZmV0Y2hSZXNwb25zZS5zdGF0dXNUZXh0LCBzdGF0dXMsIHtcbiAgICAgIHJlc3BvbnNlOiBvY3Rva2l0UmVzcG9uc2UsXG4gICAgICByZXF1ZXN0OiByZXF1ZXN0T3B0aW9uc1xuICAgIH0pO1xuICB9XG4gIGlmIChzdGF0dXMgPT09IDMwNCkge1xuICAgIG9jdG9raXRSZXNwb25zZS5kYXRhID0gYXdhaXQgZ2V0UmVzcG9uc2VEYXRhKGZldGNoUmVzcG9uc2UpO1xuICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoXCJOb3QgbW9kaWZpZWRcIiwgc3RhdHVzLCB7XG4gICAgICByZXNwb25zZTogb2N0b2tpdFJlc3BvbnNlLFxuICAgICAgcmVxdWVzdDogcmVxdWVzdE9wdGlvbnNcbiAgICB9KTtcbiAgfVxuICBpZiAoc3RhdHVzID49IDQwMCkge1xuICAgIG9jdG9raXRSZXNwb25zZS5kYXRhID0gYXdhaXQgZ2V0UmVzcG9uc2VEYXRhKGZldGNoUmVzcG9uc2UpO1xuICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IodG9FcnJvck1lc3NhZ2Uob2N0b2tpdFJlc3BvbnNlLmRhdGEpLCBzdGF0dXMsIHtcbiAgICAgIHJlc3BvbnNlOiBvY3Rva2l0UmVzcG9uc2UsXG4gICAgICByZXF1ZXN0OiByZXF1ZXN0T3B0aW9uc1xuICAgIH0pO1xuICB9XG4gIG9jdG9raXRSZXNwb25zZS5kYXRhID0gcGFyc2VTdWNjZXNzUmVzcG9uc2VCb2R5ID8gYXdhaXQgZ2V0UmVzcG9uc2VEYXRhKGZldGNoUmVzcG9uc2UpIDogZmV0Y2hSZXNwb25zZS5ib2R5O1xuICByZXR1cm4gb2N0b2tpdFJlc3BvbnNlO1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVzcG9uc2VEYXRhKHJlc3BvbnNlKSB7XG4gIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XG4gIGlmICghY29udGVudFR5cGUpIHtcbiAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpLmNhdGNoKG5vb3ApO1xuICB9XG4gIGNvbnN0IG1pbWV0eXBlID0gc2FmZVBhcnNlKGNvbnRlbnRUeXBlKTtcbiAgaWYgKGlzSlNPTlJlc3BvbnNlKG1pbWV0eXBlKSkge1xuICAgIGxldCB0ZXh0ID0gXCJcIjtcbiAgICB0cnkge1xuICAgICAgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIHJldHVybiBKU09OUGFyc2UodGV4dCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gIH0gZWxzZSBpZiAobWltZXR5cGUudHlwZS5zdGFydHNXaXRoKFwidGV4dC9cIikgfHwgbWltZXR5cGUucGFyYW1ldGVycy5jaGFyc2V0Py50b0xvd2VyQ2FzZSgpID09PSBcInV0Zi04XCIpIHtcbiAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpLmNhdGNoKG5vb3ApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXNwb25zZS5hcnJheUJ1ZmZlcigpLmNhdGNoKFxuICAgICAgLyogdjggaWdub3JlIG5leHQgLS0gQHByZXNlcnZlICovXG4gICAgICAoKSA9PiBuZXcgQXJyYXlCdWZmZXIoMClcbiAgICApO1xuICB9XG59XG5mdW5jdGlvbiBpc0pTT05SZXNwb25zZShtaW1ldHlwZSkge1xuICByZXR1cm4gbWltZXR5cGUudHlwZSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIgfHwgbWltZXR5cGUudHlwZSA9PT0gXCJhcHBsaWNhdGlvbi9zY2ltK2pzb25cIjtcbn1cbmZ1bmN0aW9uIHRvRXJyb3JNZXNzYWdlKGRhdGEpIHtcbiAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBcIlVua25vd24gZXJyb3JcIjtcbiAgfVxuICBpZiAoXCJtZXNzYWdlXCIgaW4gZGF0YSkge1xuICAgIGNvbnN0IHN1ZmZpeCA9IFwiZG9jdW1lbnRhdGlvbl91cmxcIiBpbiBkYXRhID8gYCAtICR7ZGF0YS5kb2N1bWVudGF0aW9uX3VybH1gIDogXCJcIjtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShkYXRhLmVycm9ycykgPyBgJHtkYXRhLm1lc3NhZ2V9OiAke2RhdGEuZXJyb3JzLm1hcCgodikgPT4gSlNPTi5zdHJpbmdpZnkodikpLmpvaW4oXCIsIFwiKX0ke3N1ZmZpeH1gIDogYCR7ZGF0YS5tZXNzYWdlfSR7c3VmZml4fWA7XG4gIH1cbiAgcmV0dXJuIGBVbmtub3duIGVycm9yOiAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWA7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy93aXRoLWRlZmF1bHRzLmpzXG5mdW5jdGlvbiB3aXRoRGVmYXVsdHMob2xkRW5kcG9pbnQsIG5ld0RlZmF1bHRzKSB7XG4gIGNvbnN0IGVuZHBvaW50MiA9IG9sZEVuZHBvaW50LmRlZmF1bHRzKG5ld0RlZmF1bHRzKTtcbiAgY29uc3QgbmV3QXBpID0gZnVuY3Rpb24ocm91dGUsIHBhcmFtZXRlcnMpIHtcbiAgICBjb25zdCBlbmRwb2ludE9wdGlvbnMgPSBlbmRwb2ludDIubWVyZ2Uocm91dGUsIHBhcmFtZXRlcnMpO1xuICAgIGlmICghZW5kcG9pbnRPcHRpb25zLnJlcXVlc3QgfHwgIWVuZHBvaW50T3B0aW9ucy5yZXF1ZXN0Lmhvb2spIHtcbiAgICAgIHJldHVybiBmZXRjaFdyYXBwZXIoZW5kcG9pbnQyLnBhcnNlKGVuZHBvaW50T3B0aW9ucykpO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0MiA9IChyb3V0ZTIsIHBhcmFtZXRlcnMyKSA9PiB7XG4gICAgICByZXR1cm4gZmV0Y2hXcmFwcGVyKFxuICAgICAgICBlbmRwb2ludDIucGFyc2UoZW5kcG9pbnQyLm1lcmdlKHJvdXRlMiwgcGFyYW1ldGVyczIpKVxuICAgICAgKTtcbiAgICB9O1xuICAgIE9iamVjdC5hc3NpZ24ocmVxdWVzdDIsIHtcbiAgICAgIGVuZHBvaW50OiBlbmRwb2ludDIsXG4gICAgICBkZWZhdWx0czogd2l0aERlZmF1bHRzLmJpbmQobnVsbCwgZW5kcG9pbnQyKVxuICAgIH0pO1xuICAgIHJldHVybiBlbmRwb2ludE9wdGlvbnMucmVxdWVzdC5ob29rKHJlcXVlc3QyLCBlbmRwb2ludE9wdGlvbnMpO1xuICB9O1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXdBcGksIHtcbiAgICBlbmRwb2ludDogZW5kcG9pbnQyLFxuICAgIGRlZmF1bHRzOiB3aXRoRGVmYXVsdHMuYmluZChudWxsLCBlbmRwb2ludDIpXG4gIH0pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbnZhciByZXF1ZXN0ID0gd2l0aERlZmF1bHRzKGVuZHBvaW50LCBkZWZhdWx0c19kZWZhdWx0KTtcbmV4cG9ydCB7XG4gIHJlcXVlc3Rcbn07XG4vKiB2OCBpZ25vcmUgbmV4dCAtLSBAcHJlc2VydmUgKi9cbi8qIHY4IGlnbm9yZSBlbHNlIC0tIEBwcmVzZXJ2ZSAqL1xuIiwgImNvbnN0IGludFJlZ2V4ID0gL14tP1xcZCskLztcbmNvbnN0IG5vaXNlVmFsdWUgPSAvXi0/XFxkK24rJC87IC8vIE5vaXNlIC0gc3RyaW5ncyB0aGF0IG1hdGNoIHRoZSBjdXN0b20gZm9ybWF0IGJlZm9yZSBiZWluZyBjb252ZXJ0ZWQgdG8gaXRcbmNvbnN0IG9yaWdpbmFsU3RyaW5naWZ5ID0gSlNPTi5zdHJpbmdpZnk7XG5jb25zdCBvcmlnaW5hbFBhcnNlID0gSlNPTi5wYXJzZTtcbmNvbnN0IGN1c3RvbUZvcm1hdCA9IC9eLT9cXGQrbiQvO1xuXG5jb25zdCBiaWdJbnRzU3RyaW5naWZ5ID0gLyhbXFxbOl0pP1wiKC0/XFxkKyluXCIoJHwoW1xcXFxuXXxcXHMpKihcXHN8W1xcXFxuXSkqWyxcXH1cXF1dKS9nO1xuY29uc3Qgbm9pc2VTdHJpbmdpZnkgPVxuICAvKFtcXFs6XSk/KFwiLT9cXGQrbispbihcIiR8XCIoW1xcXFxuXXxcXHMpKihcXHN8W1xcXFxuXSkqWyxcXH1cXF1dKS9nO1xuXG4vKipcbiAqIEB0eXBlZGVmIHsodGhpczogYW55LCBrZXk6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCwgdmFsdWU6IGFueSkgPT4gYW55fSBSZXBsYWNlclxuICogQHR5cGVkZWYgeyhrZXk6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCwgdmFsdWU6IGFueSwgY29udGV4dD86IHsgc291cmNlOiBzdHJpbmcgfSkgPT4gYW55fSBSZXZpdmVyXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0cyBhIEphdmFTY3JpcHQgdmFsdWUgdG8gYSBKU09OIHN0cmluZy5cbiAqXG4gKiBTdXBwb3J0cyBzZXJpYWxpemF0aW9uIG9mIEJpZ0ludCB2YWx1ZXMgdXNpbmcgdHdvIHN0cmF0ZWdpZXM6XG4gKiAxLiBDdXN0b20gZm9ybWF0IFwiMTIzblwiIFx1MjE5MiBcIjEyM1wiICh1bml2ZXJzYWwgZmFsbGJhY2spXG4gKiAyLiBOYXRpdmUgSlNPTi5yYXdKU09OKCkgKE5vZGUuanMgMjIrLCBmYXN0ZXN0KSB3aGVuIGF2YWlsYWJsZVxuICpcbiAqIEFsbCBvdGhlciB2YWx1ZXMgYXJlIHNlcmlhbGl6ZWQgZXhhY3RseSBsaWtlIG5hdGl2ZSBKU09OLnN0cmluZ2lmeSgpLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQgdG8gYSBKU09OIHN0cmluZy5cbiAqIEBwYXJhbSB7UmVwbGFjZXIgfCBBcnJheTxzdHJpbmcgfCBudW1iZXI+IHwgbnVsbH0gW3JlcGxhY2VyXVxuICogICBBIGZ1bmN0aW9uIHRoYXQgYWx0ZXJzIHRoZSBiZWhhdmlvciBvZiB0aGUgc3RyaW5naWZpY2F0aW9uIHByb2Nlc3MsXG4gKiAgIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MvbnVtYmVycyB0byBpbmRpY2F0ZSBwcm9wZXJ0aWVzIHRvIGV4Y2x1ZGUuXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gW3NwYWNlXVxuICogICBBIHN0cmluZyBvciBudW1iZXIgdG8gc3BlY2lmeSBpbmRlbnRhdGlvbiBvciBwcmV0dHktcHJpbnRpbmcuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgSlNPTiBzdHJpbmcgcmVwcmVzZW50YXRpb24uXG4gKi9cbmNvbnN0IEpTT05TdHJpbmdpZnkgPSAodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSkgPT4ge1xuICBpZiAoXCJyYXdKU09OXCIgaW4gSlNPTikge1xuICAgIHJldHVybiBvcmlnaW5hbFN0cmluZ2lmeShcbiAgICAgIHZhbHVlLFxuICAgICAgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJiaWdpbnRcIikgcmV0dXJuIEpTT04ucmF3SlNPTih2YWx1ZS50b1N0cmluZygpKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlcGxhY2VyID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiByZXBsYWNlcihrZXksIHZhbHVlKTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXBsYWNlcikgJiYgcmVwbGFjZXIuaW5jbHVkZXMoa2V5KSkgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBzcGFjZSxcbiAgICApO1xuICB9XG5cbiAgaWYgKCF2YWx1ZSkgcmV0dXJuIG9yaWdpbmFsU3RyaW5naWZ5KHZhbHVlLCByZXBsYWNlciwgc3BhY2UpO1xuXG4gIGNvbnN0IGNvbnZlcnRlZFRvQ3VzdG9tSlNPTiA9IG9yaWdpbmFsU3RyaW5naWZ5KFxuICAgIHZhbHVlLFxuICAgIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBpc05vaXNlID0gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIG5vaXNlVmFsdWUudGVzdCh2YWx1ZSk7XG5cbiAgICAgIGlmIChpc05vaXNlKSByZXR1cm4gdmFsdWUudG9TdHJpbmcoKSArIFwiblwiOyAvLyBNYXJrIG5vaXNlIHZhbHVlcyB3aXRoIGFkZGl0aW9uYWwgXCJuXCIgdG8gb2Zmc2V0IHRoZSBkZWxldGlvbiBvZiBvbmUgXCJuXCIgZHVyaW5nIHRoZSBwcm9jZXNzaW5nXG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYmlnaW50XCIpIHJldHVybiB2YWx1ZS50b1N0cmluZygpICsgXCJuXCI7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVwbGFjZXIgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHJlcGxhY2VyKGtleSwgdmFsdWUpO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXBsYWNlcikgJiYgcmVwbGFjZXIuaW5jbHVkZXMoa2V5KSkgcmV0dXJuIHZhbHVlO1xuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBzcGFjZSxcbiAgKTtcbiAgY29uc3QgcHJvY2Vzc2VkSlNPTiA9IGNvbnZlcnRlZFRvQ3VzdG9tSlNPTi5yZXBsYWNlKFxuICAgIGJpZ0ludHNTdHJpbmdpZnksXG4gICAgXCIkMSQyJDNcIixcbiAgKTsgLy8gRGVsZXRlIG9uZSBcIm5cIiBvZmYgdGhlIGVuZCBvZiBldmVyeSBCaWdJbnQgdmFsdWVcbiAgY29uc3QgZGVub2lzZWRKU09OID0gcHJvY2Vzc2VkSlNPTi5yZXBsYWNlKG5vaXNlU3RyaW5naWZ5LCBcIiQxJDIkM1wiKTsgLy8gUmVtb3ZlIG9uZSBcIm5cIiBvZmYgdGhlIGVuZCBvZiBldmVyeSBub2lzeSBzdHJpbmdcblxuICByZXR1cm4gZGVub2lzZWRKU09OO1xufTtcblxuY29uc3QgZmVhdHVyZUNhY2hlID0gbmV3IE1hcCgpO1xuXG4vKipcbiAqIERldGVjdHMgaWYgdGhlIGN1cnJlbnQgSlNPTi5wYXJzZSBpbXBsZW1lbnRhdGlvbiBzdXBwb3J0cyB0aGUgY29udGV4dC5zb3VyY2UgZmVhdHVyZS5cbiAqXG4gKiBVc2VzIHRvU3RyaW5nKCkgZmluZ2VycHJpbnRpbmcgdG8gY2FjaGUgcmVzdWx0cyBhbmQgYXV0b21hdGljYWxseSBkZXRlY3QgcnVudGltZVxuICogcmVwbGFjZW1lbnRzIG9mIEpTT04ucGFyc2UgKHBvbHlmaWxscywgbW9ja3MsIGV0Yy4pLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGNvbnRleHQuc291cmNlIGlzIHN1cHBvcnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jb25zdCBpc0NvbnRleHRTb3VyY2VTdXBwb3J0ZWQgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcnNlRmluZ2VycHJpbnQgPSBKU09OLnBhcnNlLnRvU3RyaW5nKCk7XG5cbiAgaWYgKGZlYXR1cmVDYWNoZS5oYXMocGFyc2VGaW5nZXJwcmludCkpIHtcbiAgICByZXR1cm4gZmVhdHVyZUNhY2hlLmdldChwYXJzZUZpbmdlcnByaW50KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gSlNPTi5wYXJzZShcbiAgICAgIFwiMVwiLFxuICAgICAgKF8sIF9fLCBjb250ZXh0KSA9PiAhIWNvbnRleHQ/LnNvdXJjZSAmJiBjb250ZXh0LnNvdXJjZSA9PT0gXCIxXCIsXG4gICAgKTtcbiAgICBmZWF0dXJlQ2FjaGUuc2V0KHBhcnNlRmluZ2VycHJpbnQsIHJlc3VsdCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIHtcbiAgICBmZWF0dXJlQ2FjaGUuc2V0KHBhcnNlRmluZ2VycHJpbnQsIGZhbHNlKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXZpdmVyIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgY3VzdG9tLWZvcm1hdCBCaWdJbnQgc3RyaW5ncyBiYWNrIHRvIEJpZ0ludCB2YWx1ZXMuXG4gKiBBbHNvIGhhbmRsZXMgXCJub2lzZVwiIHN0cmluZ3MgdGhhdCBhY2NpZGVudGFsbHkgbWF0Y2ggdGhlIEJpZ0ludCBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWR9IGtleSBUaGUgb2JqZWN0IGtleS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIHBhcnNlZC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29udGV4dF0gUGFyc2UgY29udGV4dCAoaWYgc3VwcG9ydGVkIGJ5IEpTT04ucGFyc2UpLlxuICogQHBhcmFtIHtSZXZpdmVyfSBbdXNlclJldml2ZXJdIFVzZXIncyBjdXN0b20gcmV2aXZlciBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHthbnl9IFRoZSB0cmFuc2Zvcm1lZCB2YWx1ZS5cbiAqL1xuY29uc3QgY29udmVydE1hcmtlZEJpZ0ludHNSZXZpdmVyID0gKGtleSwgdmFsdWUsIGNvbnRleHQsIHVzZXJSZXZpdmVyKSA9PiB7XG4gIGNvbnN0IGlzQ3VzdG9tRm9ybWF0QmlnSW50ID1cbiAgICB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgY3VzdG9tRm9ybWF0LnRlc3QodmFsdWUpO1xuICBpZiAoaXNDdXN0b21Gb3JtYXRCaWdJbnQpIHJldHVybiBCaWdJbnQodmFsdWUuc2xpY2UoMCwgLTEpKTtcblxuICBjb25zdCBpc05vaXNlVmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgbm9pc2VWYWx1ZS50ZXN0KHZhbHVlKTtcbiAgaWYgKGlzTm9pc2VWYWx1ZSkgcmV0dXJuIHZhbHVlLnNsaWNlKDAsIC0xKTtcblxuICBpZiAodHlwZW9mIHVzZXJSZXZpdmVyICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiB2YWx1ZTtcblxuICByZXR1cm4gdXNlclJldml2ZXIoa2V5LCB2YWx1ZSwgY29udGV4dCk7XG59O1xuXG4vKipcbiAqIEZhc3QgSlNPTi5wYXJzZSBpbXBsZW1lbnRhdGlvbiAofjJ4IGZhc3RlciB0aGFuIGNsYXNzaWMgZmFsbGJhY2spLlxuICogVXNlcyBKU09OLnBhcnNlJ3MgY29udGV4dC5zb3VyY2UgZmVhdHVyZSB0byBkZXRlY3QgaW50ZWdlcnMgYW5kIGNvbnZlcnRcbiAqIGxhcmdlIG51bWJlcnMgZGlyZWN0bHkgdG8gQmlnSW50IHdpdGhvdXQgc3RyaW5nIG1hbmlwdWxhdGlvbi5cbiAqXG4gKiBEb2VzIG5vdCBzdXBwb3J0IGxlZ2FjeSBjdXN0b20gZm9ybWF0IGZyb20gdjEgb2YgdGhpcyBsaWJyYXJ5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IEpTT04gc3RyaW5nIHRvIHBhcnNlLlxuICogQHBhcmFtIHtSZXZpdmVyfSBbcmV2aXZlcl0gVHJhbnNmb3JtIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggdmFsdWUuXG4gKiBAcmV0dXJucyB7YW55fSBQYXJzZWQgSmF2YVNjcmlwdCB2YWx1ZS5cbiAqL1xuY29uc3QgSlNPTlBhcnNlVjIgPSAodGV4dCwgcmV2aXZlcikgPT4ge1xuICByZXR1cm4gSlNPTi5wYXJzZSh0ZXh0LCAoa2V5LCB2YWx1ZSwgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGlzQmlnTnVtYmVyID1cbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJlxuICAgICAgKHZhbHVlID4gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgdmFsdWUgPCBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUik7XG4gICAgY29uc3QgaXNJbnQgPSBjb250ZXh0ICYmIGludFJlZ2V4LnRlc3QoY29udGV4dC5zb3VyY2UpO1xuICAgIGNvbnN0IGlzQmlnSW50ID0gaXNCaWdOdW1iZXIgJiYgaXNJbnQ7XG5cbiAgICBpZiAoaXNCaWdJbnQpIHJldHVybiBCaWdJbnQoY29udGV4dC5zb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiByZXZpdmVyICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiB2YWx1ZTtcblxuICAgIHJldHVybiByZXZpdmVyKGtleSwgdmFsdWUsIGNvbnRleHQpO1xuICB9KTtcbn07XG5cbmNvbnN0IE1BWF9JTlQgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUi50b1N0cmluZygpO1xuY29uc3QgTUFYX0RJR0lUUyA9IE1BWF9JTlQubGVuZ3RoO1xuY29uc3Qgc3RyaW5nc09yTGFyZ2VOdW1iZXJzID1cbiAgL1wiKD86XFxcXC58W15cIl0pKlwifC0/KDB8WzEtOV1bMC05XSopKFxcLlswLTldKyk/KFtlRV1bKy1dP1swLTldKyk/L2c7XG5jb25zdCBub2lzZVZhbHVlV2l0aFF1b3RlcyA9IC9eXCItP1xcZCtuK1wiJC87IC8vIE5vaXNlIC0gc3RyaW5ncyB0aGF0IG1hdGNoIHRoZSBjdXN0b20gZm9ybWF0IGJlZm9yZSBiZWluZyBjb252ZXJ0ZWQgdG8gaXRcblxuLyoqXG4gKiBDb252ZXJ0cyBhIEpTT04gc3RyaW5nIGludG8gYSBKYXZhU2NyaXB0IHZhbHVlLlxuICpcbiAqIFN1cHBvcnRzIHBhcnNpbmcgb2YgbGFyZ2UgaW50ZWdlcnMgdXNpbmcgdHdvIHN0cmF0ZWdpZXM6XG4gKiAxLiBDbGFzc2ljIGZhbGxiYWNrOiBNYXJrcyBsYXJnZSBudW1iZXJzIHdpdGggXCIxMjNuXCIgZm9ybWF0LCB0aGVuIGNvbnZlcnRzIHRvIEJpZ0ludFxuICogMi4gRmFzdCBwYXRoIChKU09OUGFyc2VWMik6IFVzZXMgY29udGV4dC5zb3VyY2UgZmVhdHVyZSAofjJ4IGZhc3Rlcikgd2hlbiBhdmFpbGFibGVcbiAqXG4gKiBBbGwgb3RoZXIgSlNPTiB2YWx1ZXMgYXJlIHBhcnNlZCBleGFjdGx5IGxpa2UgbmF0aXZlIEpTT04ucGFyc2UoKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBBIHZhbGlkIEpTT04gc3RyaW5nLlxuICogQHBhcmFtIHtSZXZpdmVyfSBbcmV2aXZlcl1cbiAqICAgQSBmdW5jdGlvbiB0aGF0IHRyYW5zZm9ybXMgdGhlIHJlc3VsdHMuIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGZvciBlYWNoIG1lbWJlclxuICogICBvZiB0aGUgb2JqZWN0LiBJZiBhIG1lbWJlciBjb250YWlucyBuZXN0ZWQgb2JqZWN0cywgdGhlIG5lc3RlZCBvYmplY3RzIGFyZVxuICogICB0cmFuc2Zvcm1lZCBiZWZvcmUgdGhlIHBhcmVudCBvYmplY3QgaXMuXG4gKiBAcmV0dXJucyB7YW55fSBUaGUgcGFyc2VkIEphdmFTY3JpcHQgdmFsdWUuXG4gKiBAdGhyb3dzIHtTeW50YXhFcnJvcn0gSWYgdGV4dCBpcyBub3QgdmFsaWQgSlNPTi5cbiAqL1xuY29uc3QgSlNPTlBhcnNlID0gKHRleHQsIHJldml2ZXIpID0+IHtcbiAgaWYgKCF0ZXh0KSByZXR1cm4gb3JpZ2luYWxQYXJzZSh0ZXh0LCByZXZpdmVyKTtcblxuICBpZiAoaXNDb250ZXh0U291cmNlU3VwcG9ydGVkKCkpIHJldHVybiBKU09OUGFyc2VWMih0ZXh0LCByZXZpdmVyKTsgLy8gU2hvcnRjdXQgdG8gYSBmYXN0ZXIgKDJ4KSBhbmQgc2ltcGxlciB2ZXJzaW9uXG5cbiAgLy8gRmluZCBhbmQgbWFyayBiaWcgbnVtYmVycyB3aXRoIFwiblwiXG4gIGNvbnN0IHNlcmlhbGl6ZWREYXRhID0gdGV4dC5yZXBsYWNlKFxuICAgIHN0cmluZ3NPckxhcmdlTnVtYmVycyxcbiAgICAodGV4dCwgZGlnaXRzLCBmcmFjdGlvbmFsLCBleHBvbmVudGlhbCkgPT4ge1xuICAgICAgY29uc3QgaXNTdHJpbmcgPSB0ZXh0WzBdID09PSAnXCInO1xuICAgICAgY29uc3QgaXNOb2lzZSA9IGlzU3RyaW5nICYmIG5vaXNlVmFsdWVXaXRoUXVvdGVzLnRlc3QodGV4dCk7XG5cbiAgICAgIGlmIChpc05vaXNlKSByZXR1cm4gdGV4dC5zdWJzdHJpbmcoMCwgdGV4dC5sZW5ndGggLSAxKSArICduXCInOyAvLyBNYXJrIG5vaXNlIHZhbHVlcyB3aXRoIGFkZGl0aW9uYWwgXCJuXCIgdG8gb2Zmc2V0IHRoZSBkZWxldGlvbiBvZiBvbmUgXCJuXCIgZHVyaW5nIHRoZSBwcm9jZXNzaW5nXG5cbiAgICAgIGNvbnN0IGlzRnJhY3Rpb25hbE9yRXhwb25lbnRpYWwgPSBmcmFjdGlvbmFsIHx8IGV4cG9uZW50aWFsO1xuICAgICAgY29uc3QgaXNMZXNzVGhhbk1heFNhZmVJbnQgPVxuICAgICAgICBkaWdpdHMgJiZcbiAgICAgICAgKGRpZ2l0cy5sZW5ndGggPCBNQVhfRElHSVRTIHx8XG4gICAgICAgICAgKGRpZ2l0cy5sZW5ndGggPT09IE1BWF9ESUdJVFMgJiYgZGlnaXRzIDw9IE1BWF9JTlQpKTsgLy8gV2l0aCBhIGZpeGVkIG51bWJlciBvZiBkaWdpdHMsIHdlIGNhbiBjb3JyZWN0bHkgdXNlIGxleGljb2dyYXBoaWNhbCBjb21wYXJpc29uIHRvIGRvIGEgbnVtZXJpYyBjb21wYXJpc29uXG5cbiAgICAgIGlmIChpc1N0cmluZyB8fCBpc0ZyYWN0aW9uYWxPckV4cG9uZW50aWFsIHx8IGlzTGVzc1RoYW5NYXhTYWZlSW50KVxuICAgICAgICByZXR1cm4gdGV4dDtcblxuICAgICAgcmV0dXJuICdcIicgKyB0ZXh0ICsgJ25cIic7XG4gICAgfSxcbiAgKTtcblxuICByZXR1cm4gb3JpZ2luYWxQYXJzZShzZXJpYWxpemVkRGF0YSwgKGtleSwgdmFsdWUsIGNvbnRleHQpID0+XG4gICAgY29udmVydE1hcmtlZEJpZ0ludHNSZXZpdmVyKGtleSwgdmFsdWUsIGNvbnRleHQsIHJldml2ZXIpLFxuICApO1xufTtcblxuZXhwb3J0IHsgSlNPTlN0cmluZ2lmeSwgSlNPTlBhcnNlIH07XG4iLCAiY2xhc3MgUmVxdWVzdEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBuYW1lO1xuICAvKipcbiAgICogaHR0cCBzdGF0dXMgY29kZVxuICAgKi9cbiAgc3RhdHVzO1xuICAvKipcbiAgICogUmVxdWVzdCBvcHRpb25zIHRoYXQgbGVhZCB0byB0aGUgZXJyb3IuXG4gICAqL1xuICByZXF1ZXN0O1xuICAvKipcbiAgICogUmVzcG9uc2Ugb2JqZWN0IGlmIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkXG4gICAqL1xuICByZXNwb25zZTtcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgc3RhdHVzQ29kZSwgb3B0aW9ucykge1xuICAgIHN1cGVyKG1lc3NhZ2UsIHsgY2F1c2U6IG9wdGlvbnMuY2F1c2UgfSk7XG4gICAgdGhpcy5uYW1lID0gXCJIdHRwRXJyb3JcIjtcbiAgICB0aGlzLnN0YXR1cyA9IE51bWJlci5wYXJzZUludChzdGF0dXNDb2RlKTtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHRoaXMuc3RhdHVzKSkge1xuICAgICAgdGhpcy5zdGF0dXMgPSAwO1xuICAgIH1cbiAgICAvKiB2OCBpZ25vcmUgZWxzZSAtLSBAcHJlc2VydmUgLS0gQnVnIHdpdGggdml0ZXN0IGNvdmVyYWdlIHdoZXJlIGl0IHNlZXMgYW4gZWxzZSBicmFuY2ggdGhhdCBkb2Vzbid0IGV4aXN0ICovXG4gICAgaWYgKFwicmVzcG9uc2VcIiBpbiBvcHRpb25zKSB7XG4gICAgICB0aGlzLnJlc3BvbnNlID0gb3B0aW9ucy5yZXNwb25zZTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdENvcHkgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLnJlcXVlc3QpO1xuICAgIGlmIChvcHRpb25zLnJlcXVlc3QuaGVhZGVycy5hdXRob3JpemF0aW9uKSB7XG4gICAgICByZXF1ZXN0Q29weS5oZWFkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucy5yZXF1ZXN0LmhlYWRlcnMsIHtcbiAgICAgICAgYXV0aG9yaXphdGlvbjogb3B0aW9ucy5yZXF1ZXN0LmhlYWRlcnMuYXV0aG9yaXphdGlvbi5yZXBsYWNlKFxuICAgICAgICAgIC8oPzwhICkgLiokLyxcbiAgICAgICAgICBcIiBbUkVEQUNURURdXCJcbiAgICAgICAgKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJlcXVlc3RDb3B5LnVybCA9IHJlcXVlc3RDb3B5LnVybC5yZXBsYWNlKC9cXGJjbGllbnRfc2VjcmV0PVxcdysvZywgXCJjbGllbnRfc2VjcmV0PVtSRURBQ1RFRF1cIikucmVwbGFjZSgvXFxiYWNjZXNzX3Rva2VuPVxcdysvZywgXCJhY2Nlc3NfdG9rZW49W1JFREFDVEVEXVwiKTtcbiAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0Q29weTtcbiAgfVxufVxuZXhwb3J0IHtcbiAgUmVxdWVzdEVycm9yXG59O1xuIiwgIi8vIHBrZy9kaXN0LXNyYy9pbmRleC5qc1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCJAb2N0b2tpdC9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBnZXRVc2VyQWdlbnQgfSBmcm9tIFwidW5pdmVyc2FsLXVzZXItYWdlbnRcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL3ZlcnNpb24uanNcbnZhciBWRVJTSU9OID0gXCIwLjAuMC1kZXZlbG9wbWVudFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvd2l0aC1kZWZhdWx0cy5qc1xuaW1wb3J0IHsgcmVxdWVzdCBhcyBSZXF1ZXN0MiB9IGZyb20gXCJAb2N0b2tpdC9yZXF1ZXN0XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9ncmFwaHFsLmpzXG5pbXBvcnQgeyByZXF1ZXN0IGFzIFJlcXVlc3QgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvZXJyb3IuanNcbmZ1bmN0aW9uIF9idWlsZE1lc3NhZ2VGb3JSZXNwb25zZUVycm9ycyhkYXRhKSB7XG4gIHJldHVybiBgUmVxdWVzdCBmYWlsZWQgZHVlIHRvIGZvbGxvd2luZyByZXNwb25zZSBlcnJvcnM6XG5gICsgZGF0YS5lcnJvcnMubWFwKChlKSA9PiBgIC0gJHtlLm1lc3NhZ2V9YCkuam9pbihcIlxcblwiKTtcbn1cbnZhciBHcmFwaHFsUmVzcG9uc2VFcnJvciA9IGNsYXNzIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihyZXF1ZXN0MiwgaGVhZGVycywgcmVzcG9uc2UpIHtcbiAgICBzdXBlcihfYnVpbGRNZXNzYWdlRm9yUmVzcG9uc2VFcnJvcnMocmVzcG9uc2UpKTtcbiAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0MjtcbiAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xuICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICB0aGlzLmVycm9ycyA9IHJlc3BvbnNlLmVycm9ycztcbiAgICB0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuICB9XG4gIG5hbWUgPSBcIkdyYXBocWxSZXNwb25zZUVycm9yXCI7XG4gIGVycm9ycztcbiAgZGF0YTtcbn07XG5cbi8vIHBrZy9kaXN0LXNyYy9ncmFwaHFsLmpzXG52YXIgTk9OX1ZBUklBQkxFX09QVElPTlMgPSBbXG4gIFwibWV0aG9kXCIsXG4gIFwiYmFzZVVybFwiLFxuICBcInVybFwiLFxuICBcImhlYWRlcnNcIixcbiAgXCJyZXF1ZXN0XCIsXG4gIFwicXVlcnlcIixcbiAgXCJtZWRpYVR5cGVcIixcbiAgXCJvcGVyYXRpb25OYW1lXCJcbl07XG52YXIgRk9SQklEREVOX1ZBUklBQkxFX09QVElPTlMgPSBbXCJxdWVyeVwiLCBcIm1ldGhvZFwiLCBcInVybFwiXTtcbnZhciBHSEVTX1YzX1NVRkZJWF9SRUdFWCA9IC9cXC9hcGlcXC92M1xcLz8kLztcbmZ1bmN0aW9uIGdyYXBocWwocmVxdWVzdDIsIHF1ZXJ5LCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeSA9PT0gXCJzdHJpbmdcIiAmJiBcInF1ZXJ5XCIgaW4gb3B0aW9ucykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICBuZXcgRXJyb3IoYFtAb2N0b2tpdC9ncmFwaHFsXSBcInF1ZXJ5XCIgY2Fubm90IGJlIHVzZWQgYXMgdmFyaWFibGUgbmFtZWApXG4gICAgICApO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAoIUZPUkJJRERFTl9WQVJJQUJMRV9PUFRJT05TLmluY2x1ZGVzKGtleSkpIGNvbnRpbnVlO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgYFtAb2N0b2tpdC9ncmFwaHFsXSBcIiR7a2V5fVwiIGNhbm5vdCBiZSB1c2VkIGFzIHZhcmlhYmxlIG5hbWVgXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHBhcnNlZE9wdGlvbnMgPSB0eXBlb2YgcXVlcnkgPT09IFwic3RyaW5nXCIgPyBPYmplY3QuYXNzaWduKHsgcXVlcnkgfSwgb3B0aW9ucykgOiBxdWVyeTtcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSBPYmplY3Qua2V5cyhcbiAgICBwYXJzZWRPcHRpb25zXG4gICkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIGlmIChOT05fVkFSSUFCTEVfT1BUSU9OUy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHBhcnNlZE9wdGlvbnNba2V5XTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGlmICghcmVzdWx0LnZhcmlhYmxlcykge1xuICAgICAgcmVzdWx0LnZhcmlhYmxlcyA9IHt9O1xuICAgIH1cbiAgICByZXN1bHQudmFyaWFibGVzW2tleV0gPSBwYXJzZWRPcHRpb25zW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xuICBjb25zdCBiYXNlVXJsID0gcGFyc2VkT3B0aW9ucy5iYXNlVXJsIHx8IHJlcXVlc3QyLmVuZHBvaW50LkRFRkFVTFRTLmJhc2VVcmw7XG4gIGlmIChHSEVTX1YzX1NVRkZJWF9SRUdFWC50ZXN0KGJhc2VVcmwpKSB7XG4gICAgcmVxdWVzdE9wdGlvbnMudXJsID0gYmFzZVVybC5yZXBsYWNlKEdIRVNfVjNfU1VGRklYX1JFR0VYLCBcIi9hcGkvZ3JhcGhxbFwiKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdDIocmVxdWVzdE9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3JzKSB7XG4gICAgICBjb25zdCBoZWFkZXJzID0ge307XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhyZXNwb25zZS5oZWFkZXJzKSkge1xuICAgICAgICBoZWFkZXJzW2tleV0gPSByZXNwb25zZS5oZWFkZXJzW2tleV07XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgR3JhcGhxbFJlc3BvbnNlRXJyb3IoXG4gICAgICAgIHJlcXVlc3RPcHRpb25zLFxuICAgICAgICBoZWFkZXJzLFxuICAgICAgICByZXNwb25zZS5kYXRhXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICB9KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3dpdGgtZGVmYXVsdHMuanNcbmZ1bmN0aW9uIHdpdGhEZWZhdWx0cyhyZXF1ZXN0MiwgbmV3RGVmYXVsdHMpIHtcbiAgY29uc3QgbmV3UmVxdWVzdCA9IHJlcXVlc3QyLmRlZmF1bHRzKG5ld0RlZmF1bHRzKTtcbiAgY29uc3QgbmV3QXBpID0gKHF1ZXJ5LCBvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIGdyYXBocWwobmV3UmVxdWVzdCwgcXVlcnksIG9wdGlvbnMpO1xuICB9O1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXdBcGksIHtcbiAgICBkZWZhdWx0czogd2l0aERlZmF1bHRzLmJpbmQobnVsbCwgbmV3UmVxdWVzdCksXG4gICAgZW5kcG9pbnQ6IG5ld1JlcXVlc3QuZW5kcG9pbnRcbiAgfSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9pbmRleC5qc1xudmFyIGdyYXBocWwyID0gd2l0aERlZmF1bHRzKHJlcXVlc3QsIHtcbiAgaGVhZGVyczoge1xuICAgIFwidXNlci1hZ2VudFwiOiBgb2N0b2tpdC1ncmFwaHFsLmpzLyR7VkVSU0lPTn0gJHtnZXRVc2VyQWdlbnQoKX1gXG4gIH0sXG4gIG1ldGhvZDogXCJQT1NUXCIsXG4gIHVybDogXCIvZ3JhcGhxbFwiXG59KTtcbmZ1bmN0aW9uIHdpdGhDdXN0b21SZXF1ZXN0KGN1c3RvbVJlcXVlc3QpIHtcbiAgcmV0dXJuIHdpdGhEZWZhdWx0cyhjdXN0b21SZXF1ZXN0LCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICB1cmw6IFwiL2dyYXBocWxcIlxuICB9KTtcbn1cbmV4cG9ydCB7XG4gIEdyYXBocWxSZXNwb25zZUVycm9yLFxuICBncmFwaHFsMiBhcyBncmFwaHFsLFxuICB3aXRoQ3VzdG9tUmVxdWVzdFxufTtcbiIsICIvLyBwa2cvZGlzdC1zcmMvaXMtand0LmpzXG52YXIgYjY0dXJsID0gXCIoPzpbYS16QS1aMC05Xy1dKylcIjtcbnZhciBzZXAgPSBcIlxcXFwuXCI7XG52YXIgand0UkUgPSBuZXcgUmVnRXhwKGBeJHtiNjR1cmx9JHtzZXB9JHtiNjR1cmx9JHtzZXB9JHtiNjR1cmx9JGApO1xudmFyIGlzSldUID0gand0UkUudGVzdC5iaW5kKGp3dFJFKTtcblxuLy8gcGtnL2Rpc3Qtc3JjL2F1dGguanNcbmFzeW5jIGZ1bmN0aW9uIGF1dGgodG9rZW4pIHtcbiAgY29uc3QgaXNBcHAgPSBpc0pXVCh0b2tlbik7XG4gIGNvbnN0IGlzSW5zdGFsbGF0aW9uID0gdG9rZW4uc3RhcnRzV2l0aChcInYxLlwiKSB8fCB0b2tlbi5zdGFydHNXaXRoKFwiZ2hzX1wiKTtcbiAgY29uc3QgaXNVc2VyVG9TZXJ2ZXIgPSB0b2tlbi5zdGFydHNXaXRoKFwiZ2h1X1wiKTtcbiAgY29uc3QgdG9rZW5UeXBlID0gaXNBcHAgPyBcImFwcFwiIDogaXNJbnN0YWxsYXRpb24gPyBcImluc3RhbGxhdGlvblwiIDogaXNVc2VyVG9TZXJ2ZXIgPyBcInVzZXItdG8tc2VydmVyXCIgOiBcIm9hdXRoXCI7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJ0b2tlblwiLFxuICAgIHRva2VuLFxuICAgIHRva2VuVHlwZVxuICB9O1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvd2l0aC1hdXRob3JpemF0aW9uLXByZWZpeC5qc1xuZnVuY3Rpb24gd2l0aEF1dGhvcml6YXRpb25QcmVmaXgodG9rZW4pIHtcbiAgaWYgKHRva2VuLnNwbGl0KC9cXC4vKS5sZW5ndGggPT09IDMpIHtcbiAgICByZXR1cm4gYGJlYXJlciAke3Rva2VufWA7XG4gIH1cbiAgcmV0dXJuIGB0b2tlbiAke3Rva2VufWA7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9ob29rLmpzXG5hc3luYyBmdW5jdGlvbiBob29rKHRva2VuLCByZXF1ZXN0LCByb3V0ZSwgcGFyYW1ldGVycykge1xuICBjb25zdCBlbmRwb2ludCA9IHJlcXVlc3QuZW5kcG9pbnQubWVyZ2UoXG4gICAgcm91dGUsXG4gICAgcGFyYW1ldGVyc1xuICApO1xuICBlbmRwb2ludC5oZWFkZXJzLmF1dGhvcml6YXRpb24gPSB3aXRoQXV0aG9yaXphdGlvblByZWZpeCh0b2tlbik7XG4gIHJldHVybiByZXF1ZXN0KGVuZHBvaW50KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG52YXIgY3JlYXRlVG9rZW5BdXRoID0gZnVuY3Rpb24gY3JlYXRlVG9rZW5BdXRoMih0b2tlbikge1xuICBpZiAoIXRva2VuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW0BvY3Rva2l0L2F1dGgtdG9rZW5dIE5vIHRva2VuIHBhc3NlZCB0byBjcmVhdGVUb2tlbkF1dGhcIik7XG4gIH1cbiAgaWYgKHR5cGVvZiB0b2tlbiAhPT0gXCJzdHJpbmdcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiW0BvY3Rva2l0L2F1dGgtdG9rZW5dIFRva2VuIHBhc3NlZCB0byBjcmVhdGVUb2tlbkF1dGggaXMgbm90IGEgc3RyaW5nXCJcbiAgICApO1xuICB9XG4gIHRva2VuID0gdG9rZW4ucmVwbGFjZSgvXih0b2tlbnxiZWFyZXIpICsvaSwgXCJcIik7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKGF1dGguYmluZChudWxsLCB0b2tlbiksIHtcbiAgICBob29rOiBob29rLmJpbmQobnVsbCwgdG9rZW4pXG4gIH0pO1xufTtcbmV4cG9ydCB7XG4gIGNyZWF0ZVRva2VuQXV0aFxufTtcbiIsICJjb25zdCBWRVJTSU9OID0gXCI3LjAuNlwiO1xuZXhwb3J0IHtcbiAgVkVSU0lPTlxufTtcbiIsICJpbXBvcnQgeyBnZXRVc2VyQWdlbnQgfSBmcm9tIFwidW5pdmVyc2FsLXVzZXItYWdlbnRcIjtcbmltcG9ydCBIb29rIGZyb20gXCJiZWZvcmUtYWZ0ZXItaG9va1wiO1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCJAb2N0b2tpdC9yZXF1ZXN0XCI7XG5pbXBvcnQgeyB3aXRoQ3VzdG9tUmVxdWVzdCB9IGZyb20gXCJAb2N0b2tpdC9ncmFwaHFsXCI7XG5pbXBvcnQgeyBjcmVhdGVUb2tlbkF1dGggfSBmcm9tIFwiQG9jdG9raXQvYXV0aC10b2tlblwiO1xuaW1wb3J0IHsgVkVSU0lPTiB9IGZyb20gXCIuL3ZlcnNpb24uanNcIjtcbmNvbnN0IG5vb3AgPSAoKSA9PiB7XG59O1xuY29uc3QgY29uc29sZVdhcm4gPSBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKTtcbmNvbnN0IGNvbnNvbGVFcnJvciA9IGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKTtcbmZ1bmN0aW9uIGNyZWF0ZUxvZ2dlcihsb2dnZXIgPSB7fSkge1xuICBpZiAodHlwZW9mIGxvZ2dlci5kZWJ1ZyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgbG9nZ2VyLmRlYnVnID0gbm9vcDtcbiAgfVxuICBpZiAodHlwZW9mIGxvZ2dlci5pbmZvICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBsb2dnZXIuaW5mbyA9IG5vb3A7XG4gIH1cbiAgaWYgKHR5cGVvZiBsb2dnZXIud2FybiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgbG9nZ2VyLndhcm4gPSBjb25zb2xlV2FybjtcbiAgfVxuICBpZiAodHlwZW9mIGxvZ2dlci5lcnJvciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgbG9nZ2VyLmVycm9yID0gY29uc29sZUVycm9yO1xuICB9XG4gIHJldHVybiBsb2dnZXI7XG59XG5jb25zdCB1c2VyQWdlbnRUcmFpbCA9IGBvY3Rva2l0LWNvcmUuanMvJHtWRVJTSU9OfSAke2dldFVzZXJBZ2VudCgpfWA7XG5jbGFzcyBPY3Rva2l0IHtcbiAgc3RhdGljIFZFUlNJT04gPSBWRVJTSU9OO1xuICBzdGF0aWMgZGVmYXVsdHMoZGVmYXVsdHMpIHtcbiAgICBjb25zdCBPY3Rva2l0V2l0aERlZmF1bHRzID0gY2xhc3MgZXh0ZW5kcyB0aGlzIHtcbiAgICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGFyZ3NbMF0gfHwge307XG4gICAgICAgIGlmICh0eXBlb2YgZGVmYXVsdHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHN1cGVyKGRlZmF1bHRzKG9wdGlvbnMpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgZGVmYXVsdHMsXG4gICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9ucy51c2VyQWdlbnQgJiYgZGVmYXVsdHMudXNlckFnZW50ID8ge1xuICAgICAgICAgICAgICB1c2VyQWdlbnQ6IGAke29wdGlvbnMudXNlckFnZW50fSAke2RlZmF1bHRzLnVzZXJBZ2VudH1gXG4gICAgICAgICAgICB9IDogbnVsbFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBPY3Rva2l0V2l0aERlZmF1bHRzO1xuICB9XG4gIHN0YXRpYyBwbHVnaW5zID0gW107XG4gIC8qKlxuICAgKiBBdHRhY2ggYSBwbHVnaW4gKG9yIG1hbnkpIHRvIHlvdXIgT2N0b2tpdCBpbnN0YW5jZS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogY29uc3QgQVBJID0gT2N0b2tpdC5wbHVnaW4ocGx1Z2luMSwgcGx1Z2luMiwgcGx1Z2luMywgLi4uKVxuICAgKi9cbiAgc3RhdGljIHBsdWdpbiguLi5uZXdQbHVnaW5zKSB7XG4gICAgY29uc3QgY3VycmVudFBsdWdpbnMgPSB0aGlzLnBsdWdpbnM7XG4gICAgY29uc3QgTmV3T2N0b2tpdCA9IGNsYXNzIGV4dGVuZHMgdGhpcyB7XG4gICAgICBzdGF0aWMgcGx1Z2lucyA9IGN1cnJlbnRQbHVnaW5zLmNvbmNhdChcbiAgICAgICAgbmV3UGx1Z2lucy5maWx0ZXIoKHBsdWdpbikgPT4gIWN1cnJlbnRQbHVnaW5zLmluY2x1ZGVzKHBsdWdpbikpXG4gICAgICApO1xuICAgIH07XG4gICAgcmV0dXJuIE5ld09jdG9raXQ7XG4gIH1cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgaG9vayA9IG5ldyBIb29rLkNvbGxlY3Rpb24oKTtcbiAgICBjb25zdCByZXF1ZXN0RGVmYXVsdHMgPSB7XG4gICAgICBiYXNlVXJsOiByZXF1ZXN0LmVuZHBvaW50LkRFRkFVTFRTLmJhc2VVcmwsXG4gICAgICBoZWFkZXJzOiB7fSxcbiAgICAgIHJlcXVlc3Q6IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMucmVxdWVzdCwge1xuICAgICAgICAvLyBAdHMtaWdub3JlIGludGVybmFsIHVzYWdlIG9ubHksIG5vIG5lZWQgdG8gdHlwZVxuICAgICAgICBob29rOiBob29rLmJpbmQobnVsbCwgXCJyZXF1ZXN0XCIpXG4gICAgICB9KSxcbiAgICAgIG1lZGlhVHlwZToge1xuICAgICAgICBwcmV2aWV3czogW10sXG4gICAgICAgIGZvcm1hdDogXCJcIlxuICAgICAgfVxuICAgIH07XG4gICAgcmVxdWVzdERlZmF1bHRzLmhlYWRlcnNbXCJ1c2VyLWFnZW50XCJdID0gb3B0aW9ucy51c2VyQWdlbnQgPyBgJHtvcHRpb25zLnVzZXJBZ2VudH0gJHt1c2VyQWdlbnRUcmFpbH1gIDogdXNlckFnZW50VHJhaWw7XG4gICAgaWYgKG9wdGlvbnMuYmFzZVVybCkge1xuICAgICAgcmVxdWVzdERlZmF1bHRzLmJhc2VVcmwgPSBvcHRpb25zLmJhc2VVcmw7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnByZXZpZXdzKSB7XG4gICAgICByZXF1ZXN0RGVmYXVsdHMubWVkaWFUeXBlLnByZXZpZXdzID0gb3B0aW9ucy5wcmV2aWV3cztcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudGltZVpvbmUpIHtcbiAgICAgIHJlcXVlc3REZWZhdWx0cy5oZWFkZXJzW1widGltZS16b25lXCJdID0gb3B0aW9ucy50aW1lWm9uZTtcbiAgICB9XG4gICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdC5kZWZhdWx0cyhyZXF1ZXN0RGVmYXVsdHMpO1xuICAgIHRoaXMuZ3JhcGhxbCA9IHdpdGhDdXN0b21SZXF1ZXN0KHRoaXMucmVxdWVzdCkuZGVmYXVsdHMocmVxdWVzdERlZmF1bHRzKTtcbiAgICB0aGlzLmxvZyA9IGNyZWF0ZUxvZ2dlcihvcHRpb25zLmxvZyk7XG4gICAgdGhpcy5ob29rID0gaG9vaztcbiAgICBpZiAoIW9wdGlvbnMuYXV0aFN0cmF0ZWd5KSB7XG4gICAgICBpZiAoIW9wdGlvbnMuYXV0aCkge1xuICAgICAgICB0aGlzLmF1dGggPSBhc3luYyAoKSA9PiAoe1xuICAgICAgICAgIHR5cGU6IFwidW5hdXRoZW50aWNhdGVkXCJcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhdXRoID0gY3JlYXRlVG9rZW5BdXRoKG9wdGlvbnMuYXV0aCk7XG4gICAgICAgIGhvb2sud3JhcChcInJlcXVlc3RcIiwgYXV0aC5ob29rKTtcbiAgICAgICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBhdXRoU3RyYXRlZ3ksIC4uLm90aGVyT3B0aW9ucyB9ID0gb3B0aW9ucztcbiAgICAgIGNvbnN0IGF1dGggPSBhdXRoU3RyYXRlZ3koXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVxdWVzdDogdGhpcy5yZXF1ZXN0LFxuICAgICAgICAgICAgbG9nOiB0aGlzLmxvZyxcbiAgICAgICAgICAgIC8vIHdlIHBhc3MgdGhlIGN1cnJlbnQgb2N0b2tpdCBpbnN0YW5jZSBhcyB3ZWxsIGFzIGl0cyBjb25zdHJ1Y3RvciBvcHRpb25zXG4gICAgICAgICAgICAvLyB0byBhbGxvdyBmb3IgYXV0aGVudGljYXRpb24gc3RyYXRlZ2llcyB0aGF0IHJldHVybiBhIG5ldyBvY3Rva2l0IGluc3RhbmNlXG4gICAgICAgICAgICAvLyB0aGF0IHNoYXJlcyB0aGUgc2FtZSBpbnRlcm5hbCBzdGF0ZSBhcyB0aGUgY3VycmVudCBvbmUuIFRoZSBvcmlnaW5hbFxuICAgICAgICAgICAgLy8gcmVxdWlyZW1lbnQgZm9yIHRoaXMgd2FzIHRoZSBcImV2ZW50LW9jdG9raXRcIiBhdXRoZW50aWNhdGlvbiBzdHJhdGVneVxuICAgICAgICAgICAgLy8gb2YgaHR0cHM6Ly9naXRodWIuY29tL3Byb2JvdC9vY3Rva2l0LWF1dGgtcHJvYm90LlxuICAgICAgICAgICAgb2N0b2tpdDogdGhpcyxcbiAgICAgICAgICAgIG9jdG9raXRPcHRpb25zOiBvdGhlck9wdGlvbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wdGlvbnMuYXV0aFxuICAgICAgICApXG4gICAgICApO1xuICAgICAgaG9vay53cmFwKFwicmVxdWVzdFwiLCBhdXRoLmhvb2spO1xuICAgICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgICB9XG4gICAgY29uc3QgY2xhc3NDb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc0NvbnN0cnVjdG9yLnBsdWdpbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgY2xhc3NDb25zdHJ1Y3Rvci5wbHVnaW5zW2ldKHRoaXMsIG9wdGlvbnMpKTtcbiAgICB9XG4gIH1cbiAgLy8gYXNzaWduZWQgZHVyaW5nIGNvbnN0cnVjdG9yXG4gIHJlcXVlc3Q7XG4gIGdyYXBocWw7XG4gIGxvZztcbiAgaG9vaztcbiAgLy8gVE9ETzogdHlwZSBgb2N0b2tpdC5hdXRoYCBiYXNlZCBvbiBwYXNzZWQgb3B0aW9ucy5hdXRoU3RyYXRlZ3lcbiAgYXV0aDtcbn1cbmV4cG9ydCB7XG4gIE9jdG9raXRcbn07XG4iLCAiY29uc3QgVkVSU0lPTiA9IFwiNi4wLjBcIjtcbmV4cG9ydCB7XG4gIFZFUlNJT05cbn07XG4iLCAiaW1wb3J0IHsgVkVSU0lPTiB9IGZyb20gXCIuL3ZlcnNpb24uanNcIjtcbmZ1bmN0aW9uIHJlcXVlc3RMb2cob2N0b2tpdCkge1xuICBvY3Rva2l0Lmhvb2sud3JhcChcInJlcXVlc3RcIiwgKHJlcXVlc3QsIG9wdGlvbnMpID0+IHtcbiAgICBvY3Rva2l0LmxvZy5kZWJ1ZyhcInJlcXVlc3RcIiwgb3B0aW9ucyk7XG4gICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0gb2N0b2tpdC5yZXF1ZXN0LmVuZHBvaW50LnBhcnNlKG9wdGlvbnMpO1xuICAgIGNvbnN0IHBhdGggPSByZXF1ZXN0T3B0aW9ucy51cmwucmVwbGFjZShvcHRpb25zLmJhc2VVcmwsIFwiXCIpO1xuICAgIHJldHVybiByZXF1ZXN0KG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0SWQgPSByZXNwb25zZS5oZWFkZXJzW1wieC1naXRodWItcmVxdWVzdC1pZFwiXTtcbiAgICAgIG9jdG9raXQubG9nLmluZm8oXG4gICAgICAgIGAke3JlcXVlc3RPcHRpb25zLm1ldGhvZH0gJHtwYXRofSAtICR7cmVzcG9uc2Uuc3RhdHVzfSB3aXRoIGlkICR7cmVxdWVzdElkfSBpbiAke0RhdGUubm93KCkgLSBzdGFydH1tc2BcbiAgICAgICk7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0SWQgPSBlcnJvci5yZXNwb25zZT8uaGVhZGVyc1tcIngtZ2l0aHViLXJlcXVlc3QtaWRcIl0gfHwgXCJVTktOT1dOXCI7XG4gICAgICBvY3Rva2l0LmxvZy5lcnJvcihcbiAgICAgICAgYCR7cmVxdWVzdE9wdGlvbnMubWV0aG9kfSAke3BhdGh9IC0gJHtlcnJvci5zdGF0dXN9IHdpdGggaWQgJHtyZXF1ZXN0SWR9IGluICR7RGF0ZS5ub3coKSAtIHN0YXJ0fW1zYFxuICAgICAgKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0pO1xuICB9KTtcbn1cbnJlcXVlc3RMb2cuVkVSU0lPTiA9IFZFUlNJT047XG5leHBvcnQge1xuICByZXF1ZXN0TG9nXG59O1xuIiwgIi8vIHBrZy9kaXN0LXNyYy92ZXJzaW9uLmpzXG52YXIgVkVSU0lPTiA9IFwiMC4wLjAtZGV2ZWxvcG1lbnRcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL25vcm1hbGl6ZS1wYWdpbmF0ZWQtbGlzdC1yZXNwb25zZS5qc1xuZnVuY3Rpb24gbm9ybWFsaXplUGFnaW5hdGVkTGlzdFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gIGlmICghcmVzcG9uc2UuZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXNwb25zZSxcbiAgICAgIGRhdGE6IFtdXG4gICAgfTtcbiAgfVxuICBjb25zdCByZXNwb25zZU5lZWRzTm9ybWFsaXphdGlvbiA9IChcInRvdGFsX2NvdW50XCIgaW4gcmVzcG9uc2UuZGF0YSB8fCBcInRvdGFsX2NvbW1pdHNcIiBpbiByZXNwb25zZS5kYXRhKSAmJiAhKFwidXJsXCIgaW4gcmVzcG9uc2UuZGF0YSk7XG4gIGlmICghcmVzcG9uc2VOZWVkc05vcm1hbGl6YXRpb24pIHJldHVybiByZXNwb25zZTtcbiAgY29uc3QgaW5jb21wbGV0ZVJlc3VsdHMgPSByZXNwb25zZS5kYXRhLmluY29tcGxldGVfcmVzdWx0cztcbiAgY29uc3QgcmVwb3NpdG9yeVNlbGVjdGlvbiA9IHJlc3BvbnNlLmRhdGEucmVwb3NpdG9yeV9zZWxlY3Rpb247XG4gIGNvbnN0IHRvdGFsQ291bnQgPSByZXNwb25zZS5kYXRhLnRvdGFsX2NvdW50O1xuICBjb25zdCB0b3RhbENvbW1pdHMgPSByZXNwb25zZS5kYXRhLnRvdGFsX2NvbW1pdHM7XG4gIGRlbGV0ZSByZXNwb25zZS5kYXRhLmluY29tcGxldGVfcmVzdWx0cztcbiAgZGVsZXRlIHJlc3BvbnNlLmRhdGEucmVwb3NpdG9yeV9zZWxlY3Rpb247XG4gIGRlbGV0ZSByZXNwb25zZS5kYXRhLnRvdGFsX2NvdW50O1xuICBkZWxldGUgcmVzcG9uc2UuZGF0YS50b3RhbF9jb21taXRzO1xuICBjb25zdCBuYW1lc3BhY2VLZXkgPSBPYmplY3Qua2V5cyhyZXNwb25zZS5kYXRhKVswXTtcbiAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGFbbmFtZXNwYWNlS2V5XTtcbiAgcmVzcG9uc2UuZGF0YSA9IGRhdGE7XG4gIGlmICh0eXBlb2YgaW5jb21wbGV0ZVJlc3VsdHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXNwb25zZS5kYXRhLmluY29tcGxldGVfcmVzdWx0cyA9IGluY29tcGxldGVSZXN1bHRzO1xuICB9XG4gIGlmICh0eXBlb2YgcmVwb3NpdG9yeVNlbGVjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJlc3BvbnNlLmRhdGEucmVwb3NpdG9yeV9zZWxlY3Rpb24gPSByZXBvc2l0b3J5U2VsZWN0aW9uO1xuICB9XG4gIHJlc3BvbnNlLmRhdGEudG90YWxfY291bnQgPSB0b3RhbENvdW50O1xuICByZXNwb25zZS5kYXRhLnRvdGFsX2NvbW1pdHMgPSB0b3RhbENvbW1pdHM7XG4gIHJldHVybiByZXNwb25zZTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2l0ZXJhdG9yLmpzXG5mdW5jdGlvbiBpdGVyYXRvcihvY3Rva2l0LCByb3V0ZSwgcGFyYW1ldGVycykge1xuICBjb25zdCBvcHRpb25zID0gdHlwZW9mIHJvdXRlID09PSBcImZ1bmN0aW9uXCIgPyByb3V0ZS5lbmRwb2ludChwYXJhbWV0ZXJzKSA6IG9jdG9raXQucmVxdWVzdC5lbmRwb2ludChyb3V0ZSwgcGFyYW1ldGVycyk7XG4gIGNvbnN0IHJlcXVlc3RNZXRob2QgPSB0eXBlb2Ygcm91dGUgPT09IFwiZnVuY3Rpb25cIiA/IHJvdXRlIDogb2N0b2tpdC5yZXF1ZXN0O1xuICBjb25zdCBtZXRob2QgPSBvcHRpb25zLm1ldGhvZDtcbiAgY29uc3QgaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcbiAgbGV0IHVybCA9IG9wdGlvbnMudXJsO1xuICByZXR1cm4ge1xuICAgIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl06ICgpID0+ICh7XG4gICAgICBhc3luYyBuZXh0KCkge1xuICAgICAgICBpZiAoIXVybCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdE1ldGhvZCh7IG1ldGhvZCwgdXJsLCBoZWFkZXJzIH0pO1xuICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRSZXNwb25zZSA9IG5vcm1hbGl6ZVBhZ2luYXRlZExpc3RSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgdXJsID0gKChub3JtYWxpemVkUmVzcG9uc2UuaGVhZGVycy5saW5rIHx8IFwiXCIpLm1hdGNoKFxuICAgICAgICAgICAgLzwoW148Pl0rKT47XFxzKnJlbD1cIm5leHRcIi9cbiAgICAgICAgICApIHx8IFtdKVsxXTtcbiAgICAgICAgICBpZiAoIXVybCAmJiBcInRvdGFsX2NvbW1pdHNcIiBpbiBub3JtYWxpemVkUmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTChub3JtYWxpemVkUmVzcG9uc2UudXJsKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHBhcnNlZFVybC5zZWFyY2hQYXJhbXM7XG4gICAgICAgICAgICBjb25zdCBwYWdlID0gcGFyc2VJbnQocGFyYW1zLmdldChcInBhZ2VcIikgfHwgXCIxXCIsIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHBlcl9wYWdlID0gcGFyc2VJbnQocGFyYW1zLmdldChcInBlcl9wYWdlXCIpIHx8IFwiMjUwXCIsIDEwKTtcbiAgICAgICAgICAgIGlmIChwYWdlICogcGVyX3BhZ2UgPCBub3JtYWxpemVkUmVzcG9uc2UuZGF0YS50b3RhbF9jb21taXRzKSB7XG4gICAgICAgICAgICAgIHBhcmFtcy5zZXQoXCJwYWdlXCIsIFN0cmluZyhwYWdlICsgMSkpO1xuICAgICAgICAgICAgICB1cmwgPSBwYXJzZWRVcmwudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG5vcm1hbGl6ZWRSZXNwb25zZSB9O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgIT09IDQwOSkgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgdXJsID0gXCJcIjtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgICBkYXRhOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9O1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvcGFnaW5hdGUuanNcbmZ1bmN0aW9uIHBhZ2luYXRlKG9jdG9raXQsIHJvdXRlLCBwYXJhbWV0ZXJzLCBtYXBGbikge1xuICBpZiAodHlwZW9mIHBhcmFtZXRlcnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIG1hcEZuID0gcGFyYW1ldGVycztcbiAgICBwYXJhbWV0ZXJzID0gdm9pZCAwO1xuICB9XG4gIHJldHVybiBnYXRoZXIoXG4gICAgb2N0b2tpdCxcbiAgICBbXSxcbiAgICBpdGVyYXRvcihvY3Rva2l0LCByb3V0ZSwgcGFyYW1ldGVycylbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCksXG4gICAgbWFwRm5cbiAgKTtcbn1cbmZ1bmN0aW9uIGdhdGhlcihvY3Rva2l0LCByZXN1bHRzLCBpdGVyYXRvcjIsIG1hcEZuKSB7XG4gIHJldHVybiBpdGVyYXRvcjIubmV4dCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIGlmIChyZXN1bHQuZG9uZSkge1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICAgIGxldCBlYXJseUV4aXQgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgZWFybHlFeGl0ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KFxuICAgICAgbWFwRm4gPyBtYXBGbihyZXN1bHQudmFsdWUsIGRvbmUpIDogcmVzdWx0LnZhbHVlLmRhdGFcbiAgICApO1xuICAgIGlmIChlYXJseUV4aXQpIHtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgICByZXR1cm4gZ2F0aGVyKG9jdG9raXQsIHJlc3VsdHMsIGl0ZXJhdG9yMiwgbWFwRm4pO1xuICB9KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2NvbXBvc2UtcGFnaW5hdGUuanNcbnZhciBjb21wb3NlUGFnaW5hdGVSZXN0ID0gT2JqZWN0LmFzc2lnbihwYWdpbmF0ZSwge1xuICBpdGVyYXRvclxufSk7XG5cbi8vIHBrZy9kaXN0LXNyYy9nZW5lcmF0ZWQvcGFnaW5hdGluZy1lbmRwb2ludHMuanNcbnZhciBwYWdpbmF0aW5nRW5kcG9pbnRzID0gW1xuICBcIkdFVCAvYWR2aXNvcmllc1wiLFxuICBcIkdFVCAvYXBwL2hvb2svZGVsaXZlcmllc1wiLFxuICBcIkdFVCAvYXBwL2luc3RhbGxhdGlvbi1yZXF1ZXN0c1wiLFxuICBcIkdFVCAvYXBwL2luc3RhbGxhdGlvbnNcIixcbiAgXCJHRVQgL2Fzc2lnbm1lbnRzL3thc3NpZ25tZW50X2lkfS9hY2NlcHRlZF9hc3NpZ25tZW50c1wiLFxuICBcIkdFVCAvY2xhc3Nyb29tc1wiLFxuICBcIkdFVCAvY2xhc3Nyb29tcy97Y2xhc3Nyb29tX2lkfS9hc3NpZ25tZW50c1wiLFxuICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnNcIixcbiAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9kZXBlbmRhYm90L2FsZXJ0c1wiLFxuICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zXCIsXG4gIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vbWVtYmVyc2hpcHNcIixcbiAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9vcmdhbml6YXRpb25zXCIsXG4gIFwiR0VUIC9ldmVudHNcIixcbiAgXCJHRVQgL2dpc3RzXCIsXG4gIFwiR0VUIC9naXN0cy9wdWJsaWNcIixcbiAgXCJHRVQgL2dpc3RzL3N0YXJyZWRcIixcbiAgXCJHRVQgL2dpc3RzL3tnaXN0X2lkfS9jb21tZW50c1wiLFxuICBcIkdFVCAvZ2lzdHMve2dpc3RfaWR9L2NvbW1pdHNcIixcbiAgXCJHRVQgL2dpc3RzL3tnaXN0X2lkfS9mb3Jrc1wiLFxuICBcIkdFVCAvaW5zdGFsbGF0aW9uL3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvaXNzdWVzXCIsXG4gIFwiR0VUIC9saWNlbnNlc1wiLFxuICBcIkdFVCAvbWFya2V0cGxhY2VfbGlzdGluZy9wbGFuc1wiLFxuICBcIkdFVCAvbWFya2V0cGxhY2VfbGlzdGluZy9wbGFucy97cGxhbl9pZH0vYWNjb3VudHNcIixcbiAgXCJHRVQgL21hcmtldHBsYWNlX2xpc3Rpbmcvc3R1YmJlZC9wbGFuc1wiLFxuICBcIkdFVCAvbWFya2V0cGxhY2VfbGlzdGluZy9zdHViYmVkL3BsYW5zL3twbGFuX2lkfS9hY2NvdW50c1wiLFxuICBcIkdFVCAvbmV0d29ya3Mve293bmVyfS97cmVwb30vZXZlbnRzXCIsXG4gIFwiR0VUIC9ub3RpZmljYXRpb25zXCIsXG4gIFwiR0VUIC9vcmdhbml6YXRpb25zXCIsXG4gIFwiR0VUIC9vcmdhbml6YXRpb25zL3tvcmd9L2RlcGVuZGFib3QvcmVwb3NpdG9yeS1hY2Nlc3NcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9jYWNoZS91c2FnZS1ieS1yZXBvc2l0b3J5XCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9ucy9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9ucy9zZWxmLWhvc3RlZC1ydW5uZXJzL3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lci1ncm91cHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXItZ3JvdXBzL3tydW5uZXJfZ3JvdXBfaWR9L2hvc3RlZC1ydW5uZXJzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVyLWdyb3Vwcy97cnVubmVyX2dyb3VwX2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXItZ3JvdXBzL3tydW5uZXJfZ3JvdXBfaWR9L3J1bm5lcnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hdHRlc3RhdGlvbnMvcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2F0dGVzdGF0aW9ucy97c3ViamVjdF9kaWdlc3R9XCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2Jsb2Nrc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9jYW1wYWlnbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vY29kZS1zY2FubmluZy9hbGVydHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vY29kZXNwYWNlc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NvcGlsb3QvYmlsbGluZy9zZWF0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9jb3BpbG90L21ldHJpY3NcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9hbGVydHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9ldmVudHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vZmFpbGVkX2ludml0YXRpb25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2hvb2tzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfS9kZWxpdmVyaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2luc2lnaHRzL2FwaS9yb3V0ZS1zdGF0cy97YWN0b3JfdHlwZX0ve2FjdG9yX2lkfVwiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9pbnNpZ2h0cy9hcGkvc3ViamVjdC1zdGF0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9pbnNpZ2h0cy9hcGkvdXNlci1zdGF0cy97dXNlcl9pZH1cIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaW5zdGFsbGF0aW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9pbnZpdGF0aW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9pbnZpdGF0aW9ucy97aW52aXRhdGlvbl9pZH0vdGVhbXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaXNzdWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L21lbWJlcnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vbWVtYmVycy97dXNlcm5hbWV9L2NvZGVzcGFjZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vbWlncmF0aW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMve3JvbGVfaWR9L3RlYW1zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlcy97cm9sZV9pZH0vdXNlcnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vb3V0c2lkZV9jb2xsYWJvcmF0b3JzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3BhY2thZ2VzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbi1yZXF1ZXN0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW4tcmVxdWVzdHMve3BhdF9yZXF1ZXN0X2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2Vuc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW5zL3twYXRfaWR9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wcml2YXRlLXJlZ2lzdHJpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcHJvamVjdHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcHJvamVjdHNWMlwiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vZmllbGRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9pdGVtc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wcm9wZXJ0aWVzL3ZhbHVlc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9wdWJsaWNfbWVtYmVyc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9yZXBvc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9ydWxlc2V0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9ydWxlc2V0cy9ydWxlLXN1aXRlc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9ydWxlc2V0cy97cnVsZXNldF9pZH0vaGlzdG9yeVwiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9zZWNyZXQtc2Nhbm5pbmcvYWxlcnRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3NlY3VyaXR5LWFkdmlzb3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvaW1tdXRhYmxlLXJlbGVhc2VzL3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9uZXR3b3JrLWNvbmZpZ3VyYXRpb25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW0ve3RlYW1fc2x1Z30vY29waWxvdC9tZXRyaWNzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9udW1iZXJ9L3JlYWN0aW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L3JlYWN0aW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9pbnZpdGF0aW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9tZW1iZXJzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L3Byb2plY3RzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L3JlcG9zXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L3RlYW1zXCIsXG4gIFwiR0VUIC9wcm9qZWN0cy97cHJvamVjdF9pZH0vY29sbGFib3JhdG9yc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9hcnRpZmFjdHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvY2FjaGVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL29yZ2FuaXphdGlvbi1zZWNyZXRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL29yZ2FuaXphdGlvbi12YXJpYWJsZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVyc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vYXJ0aWZhY3RzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vYXR0ZW1wdHMve2F0dGVtcHRfbnVtYmVyfS9qb2JzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vam9ic1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9zZWNyZXRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3ZhcmlhYmxlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy93b3JrZmxvd3NcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvd29ya2Zsb3dzL3t3b3JrZmxvd19pZH0vcnVuc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aXZpdHlcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Fzc2lnbmVlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXR0ZXN0YXRpb25zL3tzdWJqZWN0X2RpZ2VzdH1cIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1ydW5zL3tjaGVja19ydW5faWR9L2Fubm90YXRpb25zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1zdWl0ZXMve2NoZWNrX3N1aXRlX2lkfS9jaGVjay1ydW5zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn0vaW5zdGFuY2VzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FuYWx5c2VzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL2RldmNvbnRhaW5lcnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvc2VjcmV0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29sbGFib3JhdG9yc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve2NvbW1pdF9zaGF9L2NvbW1lbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tjb21taXRfc2hhfS9wdWxsc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97cmVmfS9jaGVjay1ydW5zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tyZWZ9L2NoZWNrLXN1aXRlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97cmVmfS9zdGF0dXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vc3RhdHVzZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbXBhcmUve2Jhc2VoZWFkfVwiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tcGFyZS97YmFzZX0uLi57aGVhZH1cIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRyaWJ1dG9yc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9hbGVydHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGFib3Qvc2VjcmV0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwbG95bWVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzL3tkZXBsb3ltZW50X2lkfS9zdGF0dXNlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnQtYnJhbmNoLXBvbGljaWVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnRfcHJvdGVjdGlvbl9ydWxlcy9hcHBzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3NlY3JldHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vdmFyaWFibGVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ldmVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ZvcmtzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9L2RlbGl2ZXJpZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ludml0YXRpb25zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9ldmVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9jb21tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2RlcGVuZGVuY2llcy9ibG9ja2VkX2J5XCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vZGVwZW5kZW5jaWVzL2Jsb2NraW5nXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vZXZlbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vbGFiZWxzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vcmVhY3Rpb25zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vc3ViX2lzc3Vlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3RpbWVsaW5lXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9rZXlzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9sYWJlbHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L21pbGVzdG9uZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L21pbGVzdG9uZXMve21pbGVzdG9uZV9udW1iZXJ9L2xhYmVsc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbm90aWZpY2F0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXMvYnVpbGRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wcm9qZWN0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL2NvbW1lbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L2NvbW1pdHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vZmlsZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXZpZXdzL3tyZXZpZXdfaWR9L2NvbW1lbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMve3JlbGVhc2VfaWR9L2Fzc2V0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMve3JlbGVhc2VfaWR9L3JlYWN0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXMvYnJhbmNoZXMve2JyYW5jaH1cIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0cy9ydWxlLXN1aXRlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHMve3J1bGVzZXRfaWR9L2hpc3RvcnlcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3JldC1zY2FubmluZy9hbGVydHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3JldC1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn0vbG9jYXRpb25zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWN1cml0eS1hZHZpc29yaWVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdGFyZ2F6ZXJzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdWJzY3JpYmVyc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdGFnc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdGVhbXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RvcGljc1wiLFxuICBcIkdFVCAvcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9zZWFyY2gvY29kZVwiLFxuICBcIkdFVCAvc2VhcmNoL2NvbW1pdHNcIixcbiAgXCJHRVQgL3NlYXJjaC9pc3N1ZXNcIixcbiAgXCJHRVQgL3NlYXJjaC9sYWJlbHNcIixcbiAgXCJHRVQgL3NlYXJjaC9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL3NlYXJjaC90b3BpY3NcIixcbiAgXCJHRVQgL3NlYXJjaC91c2Vyc1wiLFxuICBcIkdFVCAvdGVhbXMve3RlYW1faWR9L2Rpc2N1c3Npb25zXCIsXG4gIFwiR0VUIC90ZWFtcy97dGVhbV9pZH0vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50c1wiLFxuICBcIkdFVCAvdGVhbXMve3RlYW1faWR9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL3RlYW1zL3t0ZWFtX2lkfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L3JlYWN0aW9uc1wiLFxuICBcIkdFVCAvdGVhbXMve3RlYW1faWR9L2ludml0YXRpb25zXCIsXG4gIFwiR0VUIC90ZWFtcy97dGVhbV9pZH0vbWVtYmVyc1wiLFxuICBcIkdFVCAvdGVhbXMve3RlYW1faWR9L3Byb2plY3RzXCIsXG4gIFwiR0VUIC90ZWFtcy97dGVhbV9pZH0vcmVwb3NcIixcbiAgXCJHRVQgL3RlYW1zL3t0ZWFtX2lkfS90ZWFtc1wiLFxuICBcIkdFVCAvdXNlci9ibG9ja3NcIixcbiAgXCJHRVQgL3VzZXIvY29kZXNwYWNlc1wiLFxuICBcIkdFVCAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHNcIixcbiAgXCJHRVQgL3VzZXIvZW1haWxzXCIsXG4gIFwiR0VUIC91c2VyL2ZvbGxvd2Vyc1wiLFxuICBcIkdFVCAvdXNlci9mb2xsb3dpbmdcIixcbiAgXCJHRVQgL3VzZXIvZ3BnX2tleXNcIixcbiAgXCJHRVQgL3VzZXIvaW5zdGFsbGF0aW9uc1wiLFxuICBcIkdFVCAvdXNlci9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvdXNlci9pc3N1ZXNcIixcbiAgXCJHRVQgL3VzZXIva2V5c1wiLFxuICBcIkdFVCAvdXNlci9tYXJrZXRwbGFjZV9wdXJjaGFzZXNcIixcbiAgXCJHRVQgL3VzZXIvbWFya2V0cGxhY2VfcHVyY2hhc2VzL3N0dWJiZWRcIixcbiAgXCJHRVQgL3VzZXIvbWVtYmVyc2hpcHMvb3Jnc1wiLFxuICBcIkdFVCAvdXNlci9taWdyYXRpb25zXCIsXG4gIFwiR0VUIC91c2VyL21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC91c2VyL29yZ3NcIixcbiAgXCJHRVQgL3VzZXIvcGFja2FnZXNcIixcbiAgXCJHRVQgL3VzZXIvcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnNcIixcbiAgXCJHRVQgL3VzZXIvcHVibGljX2VtYWlsc1wiLFxuICBcIkdFVCAvdXNlci9yZXBvc1wiLFxuICBcIkdFVCAvdXNlci9yZXBvc2l0b3J5X2ludml0YXRpb25zXCIsXG4gIFwiR0VUIC91c2VyL3NvY2lhbF9hY2NvdW50c1wiLFxuICBcIkdFVCAvdXNlci9zc2hfc2lnbmluZ19rZXlzXCIsXG4gIFwiR0VUIC91c2VyL3N0YXJyZWRcIixcbiAgXCJHRVQgL3VzZXIvc3Vic2NyaXB0aW9uc1wiLFxuICBcIkdFVCAvdXNlci90ZWFtc1wiLFxuICBcIkdFVCAvdXNlcnNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vYXR0ZXN0YXRpb25zL3tzdWJqZWN0X2RpZ2VzdH1cIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZXZlbnRzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2V2ZW50cy9vcmdzL3tvcmd9XCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2V2ZW50cy9wdWJsaWNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZm9sbG93ZXJzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2ZvbGxvd2luZ1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9naXN0c1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ncGdfa2V5c1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9rZXlzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L29yZ3NcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcGFja2FnZXNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMlwiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vZmllbGRzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9pdGVtc1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9yZWNlaXZlZF9ldmVudHNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcmVjZWl2ZWRfZXZlbnRzL3B1YmxpY1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9yZXBvc1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zb2NpYWxfYWNjb3VudHNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc3NoX3NpZ25pbmdfa2V5c1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zdGFycmVkXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3N1YnNjcmlwdGlvbnNcIlxuXTtcblxuLy8gcGtnL2Rpc3Qtc3JjL3BhZ2luYXRpbmctZW5kcG9pbnRzLmpzXG5mdW5jdGlvbiBpc1BhZ2luYXRpbmdFbmRwb2ludChhcmcpIHtcbiAgaWYgKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gcGFnaW5hdGluZ0VuZHBvaW50cy5pbmNsdWRlcyhhcmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbmZ1bmN0aW9uIHBhZ2luYXRlUmVzdChvY3Rva2l0KSB7XG4gIHJldHVybiB7XG4gICAgcGFnaW5hdGU6IE9iamVjdC5hc3NpZ24ocGFnaW5hdGUuYmluZChudWxsLCBvY3Rva2l0KSwge1xuICAgICAgaXRlcmF0b3I6IGl0ZXJhdG9yLmJpbmQobnVsbCwgb2N0b2tpdClcbiAgICB9KVxuICB9O1xufVxucGFnaW5hdGVSZXN0LlZFUlNJT04gPSBWRVJTSU9OO1xuZXhwb3J0IHtcbiAgY29tcG9zZVBhZ2luYXRlUmVzdCxcbiAgaXNQYWdpbmF0aW5nRW5kcG9pbnQsXG4gIHBhZ2luYXRlUmVzdCxcbiAgcGFnaW5hdGluZ0VuZHBvaW50c1xufTtcbiIsICJleHBvcnQgY29uc3QgVkVSU0lPTiA9IFwiMTcuMC4wXCI7XG4iLCAiaW1wb3J0IHR5cGUgeyBFbmRwb2ludHNEZWZhdWx0c0FuZERlY29yYXRpb25zIH0gZnJvbSBcIi4uL3R5cGVzLmpzXCI7XG5jb25zdCBFbmRwb2ludHM6IEVuZHBvaW50c0RlZmF1bHRzQW5kRGVjb3JhdGlvbnMgPSB7XG4gIGFjdGlvbnM6IHtcbiAgICBhZGRDdXN0b21MYWJlbHNUb1NlbGZIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzXCIsXG4gICAgXSxcbiAgICBhZGRDdXN0b21MYWJlbHNUb1NlbGZIb3N0ZWRSdW5uZXJGb3JSZXBvOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIGFkZFJlcG9BY2Nlc3NUb1NlbGZIb3N0ZWRSdW5uZXJHcm91cEluT3JnOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lci1ncm91cHMve3J1bm5lcl9ncm91cF9pZH0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgYWRkU2VsZWN0ZWRSZXBvVG9PcmdTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIGFkZFNlbGVjdGVkUmVwb1RvT3JnVmFyaWFibGU6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBhcHByb3ZlV29ya2Zsb3dSdW46IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2FwcHJvdmVcIixcbiAgICBdLFxuICAgIGNhbmNlbFdvcmtmbG93UnVuOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9jYW5jZWxcIixcbiAgICBdLFxuICAgIGNyZWF0ZUVudmlyb25tZW50VmFyaWFibGU6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS92YXJpYWJsZXNcIixcbiAgICBdLFxuICAgIGNyZWF0ZUhvc3RlZFJ1bm5lckZvck9yZzogW1wiUE9TVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzXCJdLFxuICAgIGNyZWF0ZU9yVXBkYXRlRW52aXJvbm1lbnRTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgY3JlYXRlT3JVcGRhdGVPcmdTZWNyZXQ6IFtcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfVwiXSxcbiAgICBjcmVhdGVPclVwZGF0ZVJlcG9TZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgY3JlYXRlT3JnVmFyaWFibGU6IFtcIlBPU1QgL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXNcIl0sXG4gICAgY3JlYXRlUmVnaXN0cmF0aW9uVG9rZW5Gb3JPcmc6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMvcmVnaXN0cmF0aW9uLXRva2VuXCIsXG4gICAgXSxcbiAgICBjcmVhdGVSZWdpc3RyYXRpb25Ub2tlbkZvclJlcG86IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzL3JlZ2lzdHJhdGlvbi10b2tlblwiLFxuICAgIF0sXG4gICAgY3JlYXRlUmVtb3ZlVG9rZW5Gb3JPcmc6IFtcIlBPU1QgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL3JlbW92ZS10b2tlblwiXSxcbiAgICBjcmVhdGVSZW1vdmVUb2tlbkZvclJlcG86IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzL3JlbW92ZS10b2tlblwiLFxuICAgIF0sXG4gICAgY3JlYXRlUmVwb1ZhcmlhYmxlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3ZhcmlhYmxlc1wiXSxcbiAgICBjcmVhdGVXb3JrZmxvd0Rpc3BhdGNoOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvd29ya2Zsb3dzL3t3b3JrZmxvd19pZH0vZGlzcGF0Y2hlc1wiLFxuICAgIF0sXG4gICAgZGVsZXRlQWN0aW9uc0NhY2hlQnlJZDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvY2FjaGVzL3tjYWNoZV9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUFjdGlvbnNDYWNoZUJ5S2V5OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9jYWNoZXN7P2tleSxyZWZ9XCIsXG4gICAgXSxcbiAgICBkZWxldGVBcnRpZmFjdDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvYXJ0aWZhY3RzL3thcnRpZmFjdF9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUN1c3RvbUltYWdlRnJvbU9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy9pbWFnZXMvY3VzdG9tL3tpbWFnZV9kZWZpbml0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlQ3VzdG9tSW1hZ2VWZXJzaW9uRnJvbU9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy9pbWFnZXMvY3VzdG9tL3tpbWFnZV9kZWZpbml0aW9uX2lkfS92ZXJzaW9ucy97dmVyc2lvbn1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUVudmlyb25tZW50U2VjcmV0OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUVudmlyb25tZW50VmFyaWFibGU6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3ZhcmlhYmxlcy97bmFtZX1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUhvc3RlZFJ1bm5lckZvck9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy97aG9zdGVkX3J1bm5lcl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZU9yZ1NlY3JldDogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJdLFxuICAgIGRlbGV0ZU9yZ1ZhcmlhYmxlOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9XCJdLFxuICAgIGRlbGV0ZVJlcG9TZWNyZXQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlUmVwb1ZhcmlhYmxlOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVTZWxmSG9zdGVkUnVubmVyRnJvbU9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVTZWxmSG9zdGVkUnVubmVyRnJvbVJlcG86IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZVdvcmtmbG93UnVuOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfVwiXSxcbiAgICBkZWxldGVXb3JrZmxvd1J1bkxvZ3M6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vbG9nc1wiLFxuICAgIF0sXG4gICAgZGlzYWJsZVNlbGVjdGVkUmVwb3NpdG9yeUdpdGh1YkFjdGlvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgZGlzYWJsZVdvcmtmbG93OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy93b3JrZmxvd3Mve3dvcmtmbG93X2lkfS9kaXNhYmxlXCIsXG4gICAgXSxcbiAgICBkb3dubG9hZEFydGlmYWN0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9hcnRpZmFjdHMve2FydGlmYWN0X2lkfS97YXJjaGl2ZV9mb3JtYXR9XCIsXG4gICAgXSxcbiAgICBkb3dubG9hZEpvYkxvZ3NGb3JXb3JrZmxvd1J1bjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvam9icy97am9iX2lkfS9sb2dzXCIsXG4gICAgXSxcbiAgICBkb3dubG9hZFdvcmtmbG93UnVuQXR0ZW1wdExvZ3M6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vYXR0ZW1wdHMve2F0dGVtcHRfbnVtYmVyfS9sb2dzXCIsXG4gICAgXSxcbiAgICBkb3dubG9hZFdvcmtmbG93UnVuTG9nczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9sb2dzXCIsXG4gICAgXSxcbiAgICBlbmFibGVTZWxlY3RlZFJlcG9zaXRvcnlHaXRodWJBY3Rpb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIGVuYWJsZVdvcmtmbG93OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy93b3JrZmxvd3Mve3dvcmtmbG93X2lkfS9lbmFibGVcIixcbiAgICBdLFxuICAgIGZvcmNlQ2FuY2VsV29ya2Zsb3dSdW46IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2ZvcmNlLWNhbmNlbFwiLFxuICAgIF0sXG4gICAgZ2VuZXJhdGVSdW5uZXJKaXRjb25maWdGb3JPcmc6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMvZ2VuZXJhdGUtaml0Y29uZmlnXCIsXG4gICAgXSxcbiAgICBnZW5lcmF0ZVJ1bm5lckppdGNvbmZpZ0ZvclJlcG86IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzL2dlbmVyYXRlLWppdGNvbmZpZ1wiLFxuICAgIF0sXG4gICAgZ2V0QWN0aW9uc0NhY2hlTGlzdDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2NhY2hlc1wiXSxcbiAgICBnZXRBY3Rpb25zQ2FjaGVVc2FnZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2NhY2hlL3VzYWdlXCJdLFxuICAgIGdldEFjdGlvbnNDYWNoZVVzYWdlQnlSZXBvRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2NhY2hlL3VzYWdlLWJ5LXJlcG9zaXRvcnlcIixcbiAgICBdLFxuICAgIGdldEFjdGlvbnNDYWNoZVVzYWdlRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9jYWNoZS91c2FnZVwiXSxcbiAgICBnZXRBbGxvd2VkQWN0aW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9ucy9zZWxlY3RlZC1hY3Rpb25zXCIsXG4gICAgXSxcbiAgICBnZXRBbGxvd2VkQWN0aW9uc1JlcG9zaXRvcnk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zL3NlbGVjdGVkLWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGdldEFydGlmYWN0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvYXJ0aWZhY3RzL3thcnRpZmFjdF9pZH1cIl0sXG4gICAgZ2V0Q3VzdG9tSW1hZ2VGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvaG9zdGVkLXJ1bm5lcnMvaW1hZ2VzL2N1c3RvbS97aW1hZ2VfZGVmaW5pdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGdldEN1c3RvbUltYWdlVmVyc2lvbkZvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy9pbWFnZXMvY3VzdG9tL3tpbWFnZV9kZWZpbml0aW9uX2lkfS92ZXJzaW9ucy97dmVyc2lvbn1cIixcbiAgICBdLFxuICAgIGdldEN1c3RvbU9pZGNTdWJDbGFpbUZvclJlcG86IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL29pZGMvY3VzdG9taXphdGlvbi9zdWJcIixcbiAgICBdLFxuICAgIGdldEVudmlyb25tZW50UHVibGljS2V5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9zZWNyZXRzL3B1YmxpYy1rZXlcIixcbiAgICBdLFxuICAgIGdldEVudmlyb25tZW50U2VjcmV0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGdldEVudmlyb25tZW50VmFyaWFibGU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3ZhcmlhYmxlcy97bmFtZX1cIixcbiAgICBdLFxuICAgIGdldEdpdGh1YkFjdGlvbnNEZWZhdWx0V29ya2Zsb3dQZXJtaXNzaW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9ucy93b3JrZmxvd1wiLFxuICAgIF0sXG4gICAgZ2V0R2l0aHViQWN0aW9uc0RlZmF1bHRXb3JrZmxvd1Blcm1pc3Npb25zUmVwb3NpdG9yeTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcGVybWlzc2lvbnMvd29ya2Zsb3dcIixcbiAgICBdLFxuICAgIGdldEdpdGh1YkFjdGlvbnNQZXJtaXNzaW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9uc1wiLFxuICAgIF0sXG4gICAgZ2V0R2l0aHViQWN0aW9uc1Blcm1pc3Npb25zUmVwb3NpdG9yeTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcGVybWlzc2lvbnNcIixcbiAgICBdLFxuICAgIGdldEhvc3RlZFJ1bm5lckZvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy97aG9zdGVkX3J1bm5lcl9pZH1cIixcbiAgICBdLFxuICAgIGdldEhvc3RlZFJ1bm5lcnNHaXRodWJPd25lZEltYWdlc0Zvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy9pbWFnZXMvZ2l0aHViLW93bmVkXCIsXG4gICAgXSxcbiAgICBnZXRIb3N0ZWRSdW5uZXJzTGltaXRzRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL2xpbWl0c1wiLFxuICAgIF0sXG4gICAgZ2V0SG9zdGVkUnVubmVyc01hY2hpbmVTcGVjc0Zvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy9tYWNoaW5lLXNpemVzXCIsXG4gICAgXSxcbiAgICBnZXRIb3N0ZWRSdW5uZXJzUGFydG5lckltYWdlc0Zvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy9pbWFnZXMvcGFydG5lclwiLFxuICAgIF0sXG4gICAgZ2V0SG9zdGVkUnVubmVyc1BsYXRmb3Jtc0Zvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ob3N0ZWQtcnVubmVycy9wbGF0Zm9ybXNcIixcbiAgICBdLFxuICAgIGdldEpvYkZvcldvcmtmbG93UnVuOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvam9icy97am9iX2lkfVwiXSxcbiAgICBnZXRPcmdQdWJsaWNLZXk6IFtcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHMvcHVibGljLWtleVwiXSxcbiAgICBnZXRPcmdTZWNyZXQ6IFtcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfVwiXSxcbiAgICBnZXRPcmdWYXJpYWJsZTogW1wiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfVwiXSxcbiAgICBnZXRQZW5kaW5nRGVwbG95bWVudHNGb3JSdW46IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vcGVuZGluZ19kZXBsb3ltZW50c1wiLFxuICAgIF0sXG4gICAgZ2V0UmVwb1Blcm1pc3Npb25zOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9wZXJtaXNzaW9uc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcImFjdGlvbnNcIiwgXCJnZXRHaXRodWJBY3Rpb25zUGVybWlzc2lvbnNSZXBvc2l0b3J5XCJdIH0sXG4gICAgXSxcbiAgICBnZXRSZXBvUHVibGljS2V5OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvc2VjcmV0cy9wdWJsaWMta2V5XCJdLFxuICAgIGdldFJlcG9TZWNyZXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZ2V0UmVwb1ZhcmlhYmxlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfVwiXSxcbiAgICBnZXRSZXZpZXdzRm9yUnVuOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2FwcHJvdmFsc1wiLFxuICAgIF0sXG4gICAgZ2V0U2VsZkhvc3RlZFJ1bm5lckZvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfVwiXSxcbiAgICBnZXRTZWxmSG9zdGVkUnVubmVyRm9yUmVwbzogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0V29ya2Zsb3c6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy93b3JrZmxvd3Mve3dvcmtmbG93X2lkfVwiXSxcbiAgICBnZXRXb3JrZmxvd0FjY2Vzc1RvUmVwb3NpdG9yeTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcGVybWlzc2lvbnMvYWNjZXNzXCIsXG4gICAgXSxcbiAgICBnZXRXb3JrZmxvd1J1bjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH1cIl0sXG4gICAgZ2V0V29ya2Zsb3dSdW5BdHRlbXB0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2F0dGVtcHRzL3thdHRlbXB0X251bWJlcn1cIixcbiAgICBdLFxuICAgIGdldFdvcmtmbG93UnVuVXNhZ2U6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vdGltaW5nXCIsXG4gICAgXSxcbiAgICBnZXRXb3JrZmxvd1VzYWdlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy93b3JrZmxvd3Mve3dvcmtmbG93X2lkfS90aW1pbmdcIixcbiAgICBdLFxuICAgIGxpc3RBcnRpZmFjdHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvYXJ0aWZhY3RzXCJdLFxuICAgIGxpc3RDdXN0b21JbWFnZVZlcnNpb25zRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL2ltYWdlcy9jdXN0b20ve2ltYWdlX2RlZmluaXRpb25faWR9L3ZlcnNpb25zXCIsXG4gICAgXSxcbiAgICBsaXN0Q3VzdG9tSW1hZ2VzRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL2ltYWdlcy9jdXN0b21cIixcbiAgICBdLFxuICAgIGxpc3RFbnZpcm9ubWVudFNlY3JldHM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3NlY3JldHNcIixcbiAgICBdLFxuICAgIGxpc3RFbnZpcm9ubWVudFZhcmlhYmxlczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vdmFyaWFibGVzXCIsXG4gICAgXSxcbiAgICBsaXN0R2l0aHViSG9zdGVkUnVubmVyc0luR3JvdXBGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVyLWdyb3Vwcy97cnVubmVyX2dyb3VwX2lkfS9ob3N0ZWQtcnVubmVyc1wiLFxuICAgIF0sXG4gICAgbGlzdEhvc3RlZFJ1bm5lcnNGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzXCJdLFxuICAgIGxpc3RKb2JzRm9yV29ya2Zsb3dSdW46IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vam9ic1wiLFxuICAgIF0sXG4gICAgbGlzdEpvYnNGb3JXb3JrZmxvd1J1bkF0dGVtcHQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vYXR0ZW1wdHMve2F0dGVtcHRfbnVtYmVyfS9qb2JzXCIsXG4gICAgXSxcbiAgICBsaXN0TGFiZWxzRm9yU2VsZkhvc3RlZFJ1bm5lckZvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9L2xhYmVsc1wiLFxuICAgIF0sXG4gICAgbGlzdExhYmVsc0ZvclNlbGZIb3N0ZWRSdW5uZXJGb3JSZXBvOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9L2xhYmVsc1wiLFxuICAgIF0sXG4gICAgbGlzdE9yZ1NlY3JldHM6IFtcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHNcIl0sXG4gICAgbGlzdE9yZ1ZhcmlhYmxlczogW1wiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzXCJdLFxuICAgIGxpc3RSZXBvT3JnYW5pemF0aW9uU2VjcmV0czogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvb3JnYW5pemF0aW9uLXNlY3JldHNcIixcbiAgICBdLFxuICAgIGxpc3RSZXBvT3JnYW5pemF0aW9uVmFyaWFibGVzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9vcmdhbml6YXRpb24tdmFyaWFibGVzXCIsXG4gICAgXSxcbiAgICBsaXN0UmVwb1NlY3JldHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9zZWNyZXRzXCJdLFxuICAgIGxpc3RSZXBvVmFyaWFibGVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvdmFyaWFibGVzXCJdLFxuICAgIGxpc3RSZXBvV29ya2Zsb3dzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvd29ya2Zsb3dzXCJdLFxuICAgIGxpc3RSdW5uZXJBcHBsaWNhdGlvbnNGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMvZG93bmxvYWRzXCJdLFxuICAgIGxpc3RSdW5uZXJBcHBsaWNhdGlvbnNGb3JSZXBvOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzL2Rvd25sb2Fkc1wiLFxuICAgIF0sXG4gICAgbGlzdFNlbGVjdGVkUmVwb3NGb3JPcmdTZWNyZXQ6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgbGlzdFNlbGVjdGVkUmVwb3NGb3JPcmdWYXJpYWJsZTogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgbGlzdFNlbGVjdGVkUmVwb3NpdG9yaWVzRW5hYmxlZEdpdGh1YkFjdGlvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBsaXN0U2VsZkhvc3RlZFJ1bm5lcnNGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnNcIl0sXG4gICAgbGlzdFNlbGZIb3N0ZWRSdW5uZXJzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnNcIl0sXG4gICAgbGlzdFdvcmtmbG93UnVuQXJ0aWZhY3RzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2FydGlmYWN0c1wiLFxuICAgIF0sXG4gICAgbGlzdFdvcmtmbG93UnVuczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvd29ya2Zsb3dzL3t3b3JrZmxvd19pZH0vcnVuc1wiLFxuICAgIF0sXG4gICAgbGlzdFdvcmtmbG93UnVuc0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zXCJdLFxuICAgIHJlUnVuSm9iRm9yV29ya2Zsb3dSdW46IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9qb2JzL3tqb2JfaWR9L3JlcnVuXCIsXG4gICAgXSxcbiAgICByZVJ1bldvcmtmbG93OiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vcmVydW5cIl0sXG4gICAgcmVSdW5Xb3JrZmxvd0ZhaWxlZEpvYnM6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L3JlcnVuLWZhaWxlZC1qb2JzXCIsXG4gICAgXSxcbiAgICByZW1vdmVBbGxDdXN0b21MYWJlbHNGcm9tU2VsZkhvc3RlZFJ1bm5lckZvck9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9L2xhYmVsc1wiLFxuICAgIF0sXG4gICAgcmVtb3ZlQWxsQ3VzdG9tTGFiZWxzRnJvbVNlbGZIb3N0ZWRSdW5uZXJGb3JSZXBvOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9L2xhYmVsc1wiLFxuICAgIF0sXG4gICAgcmVtb3ZlQ3VzdG9tTGFiZWxGcm9tU2VsZkhvc3RlZFJ1bm5lckZvck9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9L2xhYmVscy97bmFtZX1cIixcbiAgICBdLFxuICAgIHJlbW92ZUN1c3RvbUxhYmVsRnJvbVNlbGZIb3N0ZWRSdW5uZXJGb3JSZXBvOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9L2xhYmVscy97bmFtZX1cIixcbiAgICBdLFxuICAgIHJlbW92ZVNlbGVjdGVkUmVwb0Zyb21PcmdTZWNyZXQ6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIHJlbW92ZVNlbGVjdGVkUmVwb0Zyb21PcmdWYXJpYWJsZTogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIHJldmlld0N1c3RvbUdhdGVzRm9yUnVuOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9kZXBsb3ltZW50X3Byb3RlY3Rpb25fcnVsZVwiLFxuICAgIF0sXG4gICAgcmV2aWV3UGVuZGluZ0RlcGxveW1lbnRzRm9yUnVuOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9wZW5kaW5nX2RlcGxveW1lbnRzXCIsXG4gICAgXSxcbiAgICBzZXRBbGxvd2VkQWN0aW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9ucy9zZWxlY3RlZC1hY3Rpb25zXCIsXG4gICAgXSxcbiAgICBzZXRBbGxvd2VkQWN0aW9uc1JlcG9zaXRvcnk6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zL3NlbGVjdGVkLWFjdGlvbnNcIixcbiAgICBdLFxuICAgIHNldEN1c3RvbUxhYmVsc0ZvclNlbGZIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHNcIixcbiAgICBdLFxuICAgIHNldEN1c3RvbUxhYmVsc0ZvclNlbGZIb3N0ZWRSdW5uZXJGb3JSZXBvOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9L2xhYmVsc1wiLFxuICAgIF0sXG4gICAgc2V0Q3VzdG9tT2lkY1N1YkNsYWltRm9yUmVwbzogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvb2lkYy9jdXN0b21pemF0aW9uL3N1YlwiLFxuICAgIF0sXG4gICAgc2V0R2l0aHViQWN0aW9uc0RlZmF1bHRXb3JrZmxvd1Blcm1pc3Npb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3dvcmtmbG93XCIsXG4gICAgXSxcbiAgICBzZXRHaXRodWJBY3Rpb25zRGVmYXVsdFdvcmtmbG93UGVybWlzc2lvbnNSZXBvc2l0b3J5OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9wZXJtaXNzaW9ucy93b3JrZmxvd1wiLFxuICAgIF0sXG4gICAgc2V0R2l0aHViQWN0aW9uc1Blcm1pc3Npb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zXCIsXG4gICAgXSxcbiAgICBzZXRHaXRodWJBY3Rpb25zUGVybWlzc2lvbnNSZXBvc2l0b3J5OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9wZXJtaXNzaW9uc1wiLFxuICAgIF0sXG4gICAgc2V0U2VsZWN0ZWRSZXBvc0Zvck9yZ1NlY3JldDogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBzZXRTZWxlY3RlZFJlcG9zRm9yT3JnVmFyaWFibGU6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIHNldFNlbGVjdGVkUmVwb3NpdG9yaWVzRW5hYmxlZEdpdGh1YkFjdGlvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBzZXRXb3JrZmxvd0FjY2Vzc1RvUmVwb3NpdG9yeTogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcGVybWlzc2lvbnMvYWNjZXNzXCIsXG4gICAgXSxcbiAgICB1cGRhdGVFbnZpcm9ubWVudFZhcmlhYmxlOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3ZhcmlhYmxlcy97bmFtZX1cIixcbiAgICBdLFxuICAgIHVwZGF0ZUhvc3RlZFJ1bm5lckZvck9yZzogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS9hY3Rpb25zL2hvc3RlZC1ydW5uZXJzL3tob3N0ZWRfcnVubmVyX2lkfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlT3JnVmFyaWFibGU6IFtcIlBBVENIIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfVwiXSxcbiAgICB1cGRhdGVSZXBvVmFyaWFibGU6IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfVwiLFxuICAgIF0sXG4gIH0sXG4gIGFjdGl2aXR5OiB7XG4gICAgY2hlY2tSZXBvSXNTdGFycmVkQnlBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3N0YXJyZWQve293bmVyfS97cmVwb31cIl0sXG4gICAgZGVsZXRlUmVwb1N1YnNjcmlwdGlvbjogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdWJzY3JpcHRpb25cIl0sXG4gICAgZGVsZXRlVGhyZWFkU3Vic2NyaXB0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvbm90aWZpY2F0aW9ucy90aHJlYWRzL3t0aHJlYWRfaWR9L3N1YnNjcmlwdGlvblwiLFxuICAgIF0sXG4gICAgZ2V0RmVlZHM6IFtcIkdFVCAvZmVlZHNcIl0sXG4gICAgZ2V0UmVwb1N1YnNjcmlwdGlvbjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdWJzY3JpcHRpb25cIl0sXG4gICAgZ2V0VGhyZWFkOiBbXCJHRVQgL25vdGlmaWNhdGlvbnMvdGhyZWFkcy97dGhyZWFkX2lkfVwiXSxcbiAgICBnZXRUaHJlYWRTdWJzY3JpcHRpb25Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL25vdGlmaWNhdGlvbnMvdGhyZWFkcy97dGhyZWFkX2lkfS9zdWJzY3JpcHRpb25cIixcbiAgICBdLFxuICAgIGxpc3RFdmVudHNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2V2ZW50c1wiXSxcbiAgICBsaXN0Tm90aWZpY2F0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL25vdGlmaWNhdGlvbnNcIl0sXG4gICAgbGlzdE9yZ0V2ZW50c0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ldmVudHMvb3Jncy97b3JnfVwiLFxuICAgIF0sXG4gICAgbGlzdFB1YmxpY0V2ZW50czogW1wiR0VUIC9ldmVudHNcIl0sXG4gICAgbGlzdFB1YmxpY0V2ZW50c0ZvclJlcG9OZXR3b3JrOiBbXCJHRVQgL25ldHdvcmtzL3tvd25lcn0ve3JlcG99L2V2ZW50c1wiXSxcbiAgICBsaXN0UHVibGljRXZlbnRzRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2V2ZW50cy9wdWJsaWNcIl0sXG4gICAgbGlzdFB1YmxpY09yZ0V2ZW50czogW1wiR0VUIC9vcmdzL3tvcmd9L2V2ZW50c1wiXSxcbiAgICBsaXN0UmVjZWl2ZWRFdmVudHNGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcmVjZWl2ZWRfZXZlbnRzXCJdLFxuICAgIGxpc3RSZWNlaXZlZFB1YmxpY0V2ZW50c0ZvclVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3JlY2VpdmVkX2V2ZW50cy9wdWJsaWNcIixcbiAgICBdLFxuICAgIGxpc3RSZXBvRXZlbnRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2V2ZW50c1wiXSxcbiAgICBsaXN0UmVwb05vdGlmaWNhdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L25vdGlmaWNhdGlvbnNcIixcbiAgICBdLFxuICAgIGxpc3RSZXBvc1N0YXJyZWRCeUF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvc3RhcnJlZFwiXSxcbiAgICBsaXN0UmVwb3NTdGFycmVkQnlVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc3RhcnJlZFwiXSxcbiAgICBsaXN0UmVwb3NXYXRjaGVkQnlVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc3Vic2NyaXB0aW9uc1wiXSxcbiAgICBsaXN0U3RhcmdhemVyc0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3RhcmdhemVyc1wiXSxcbiAgICBsaXN0V2F0Y2hlZFJlcG9zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9zdWJzY3JpcHRpb25zXCJdLFxuICAgIGxpc3RXYXRjaGVyc0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3Vic2NyaWJlcnNcIl0sXG4gICAgbWFya05vdGlmaWNhdGlvbnNBc1JlYWQ6IFtcIlBVVCAvbm90aWZpY2F0aW9uc1wiXSxcbiAgICBtYXJrUmVwb05vdGlmaWNhdGlvbnNBc1JlYWQ6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vbm90aWZpY2F0aW9uc1wiXSxcbiAgICBtYXJrVGhyZWFkQXNEb25lOiBbXCJERUxFVEUgL25vdGlmaWNhdGlvbnMvdGhyZWFkcy97dGhyZWFkX2lkfVwiXSxcbiAgICBtYXJrVGhyZWFkQXNSZWFkOiBbXCJQQVRDSCAvbm90aWZpY2F0aW9ucy90aHJlYWRzL3t0aHJlYWRfaWR9XCJdLFxuICAgIHNldFJlcG9TdWJzY3JpcHRpb246IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3Vic2NyaXB0aW9uXCJdLFxuICAgIHNldFRocmVhZFN1YnNjcmlwdGlvbjogW1xuICAgICAgXCJQVVQgL25vdGlmaWNhdGlvbnMvdGhyZWFkcy97dGhyZWFkX2lkfS9zdWJzY3JpcHRpb25cIixcbiAgICBdLFxuICAgIHN0YXJSZXBvRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBVVCAvdXNlci9zdGFycmVkL3tvd25lcn0ve3JlcG99XCJdLFxuICAgIHVuc3RhclJlcG9Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiREVMRVRFIC91c2VyL3N0YXJyZWQve293bmVyfS97cmVwb31cIl0sXG4gIH0sXG4gIGFwcHM6IHtcbiAgICBhZGRSZXBvVG9JbnN0YWxsYXRpb246IFtcbiAgICAgIFwiUFVUIC91c2VyL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcImFwcHNcIiwgXCJhZGRSZXBvVG9JbnN0YWxsYXRpb25Gb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgYWRkUmVwb1RvSW5zdGFsbGF0aW9uRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUFVUIC91c2VyL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgY2hlY2tUb2tlbjogW1wiUE9TVCAvYXBwbGljYXRpb25zL3tjbGllbnRfaWR9L3Rva2VuXCJdLFxuICAgIGNyZWF0ZUZyb21NYW5pZmVzdDogW1wiUE9TVCAvYXBwLW1hbmlmZXN0cy97Y29kZX0vY29udmVyc2lvbnNcIl0sXG4gICAgY3JlYXRlSW5zdGFsbGF0aW9uQWNjZXNzVG9rZW46IFtcbiAgICAgIFwiUE9TVCAvYXBwL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH0vYWNjZXNzX3Rva2Vuc1wiLFxuICAgIF0sXG4gICAgZGVsZXRlQXV0aG9yaXphdGlvbjogW1wiREVMRVRFIC9hcHBsaWNhdGlvbnMve2NsaWVudF9pZH0vZ3JhbnRcIl0sXG4gICAgZGVsZXRlSW5zdGFsbGF0aW9uOiBbXCJERUxFVEUgL2FwcC9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9XCJdLFxuICAgIGRlbGV0ZVRva2VuOiBbXCJERUxFVEUgL2FwcGxpY2F0aW9ucy97Y2xpZW50X2lkfS90b2tlblwiXSxcbiAgICBnZXRBdXRoZW50aWNhdGVkOiBbXCJHRVQgL2FwcFwiXSxcbiAgICBnZXRCeVNsdWc6IFtcIkdFVCAvYXBwcy97YXBwX3NsdWd9XCJdLFxuICAgIGdldEluc3RhbGxhdGlvbjogW1wiR0VUIC9hcHAvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfVwiXSxcbiAgICBnZXRPcmdJbnN0YWxsYXRpb246IFtcIkdFVCAvb3Jncy97b3JnfS9pbnN0YWxsYXRpb25cIl0sXG4gICAgZ2V0UmVwb0luc3RhbGxhdGlvbjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbnN0YWxsYXRpb25cIl0sXG4gICAgZ2V0U3Vic2NyaXB0aW9uUGxhbkZvckFjY291bnQ6IFtcbiAgICAgIFwiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL2FjY291bnRzL3thY2NvdW50X2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0U3Vic2NyaXB0aW9uUGxhbkZvckFjY291bnRTdHViYmVkOiBbXG4gICAgICBcIkdFVCAvbWFya2V0cGxhY2VfbGlzdGluZy9zdHViYmVkL2FjY291bnRzL3thY2NvdW50X2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0VXNlckluc3RhbGxhdGlvbjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2luc3RhbGxhdGlvblwiXSxcbiAgICBnZXRXZWJob29rQ29uZmlnRm9yQXBwOiBbXCJHRVQgL2FwcC9ob29rL2NvbmZpZ1wiXSxcbiAgICBnZXRXZWJob29rRGVsaXZlcnk6IFtcIkdFVCAvYXBwL2hvb2svZGVsaXZlcmllcy97ZGVsaXZlcnlfaWR9XCJdLFxuICAgIGxpc3RBY2NvdW50c0ZvclBsYW46IFtcIkdFVCAvbWFya2V0cGxhY2VfbGlzdGluZy9wbGFucy97cGxhbl9pZH0vYWNjb3VudHNcIl0sXG4gICAgbGlzdEFjY291bnRzRm9yUGxhblN0dWJiZWQ6IFtcbiAgICAgIFwiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3N0dWJiZWQvcGxhbnMve3BsYW5faWR9L2FjY291bnRzXCIsXG4gICAgXSxcbiAgICBsaXN0SW5zdGFsbGF0aW9uUmVwb3NGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGxpc3RJbnN0YWxsYXRpb25SZXF1ZXN0c0ZvckF1dGhlbnRpY2F0ZWRBcHA6IFtcbiAgICAgIFwiR0VUIC9hcHAvaW5zdGFsbGF0aW9uLXJlcXVlc3RzXCIsXG4gICAgXSxcbiAgICBsaXN0SW5zdGFsbGF0aW9uczogW1wiR0VUIC9hcHAvaW5zdGFsbGF0aW9uc1wiXSxcbiAgICBsaXN0SW5zdGFsbGF0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvaW5zdGFsbGF0aW9uc1wiXSxcbiAgICBsaXN0UGxhbnM6IFtcIkdFVCAvbWFya2V0cGxhY2VfbGlzdGluZy9wbGFuc1wiXSxcbiAgICBsaXN0UGxhbnNTdHViYmVkOiBbXCJHRVQgL21hcmtldHBsYWNlX2xpc3Rpbmcvc3R1YmJlZC9wbGFuc1wiXSxcbiAgICBsaXN0UmVwb3NBY2Nlc3NpYmxlVG9JbnN0YWxsYXRpb246IFtcIkdFVCAvaW5zdGFsbGF0aW9uL3JlcG9zaXRvcmllc1wiXSxcbiAgICBsaXN0U3Vic2NyaXB0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvbWFya2V0cGxhY2VfcHVyY2hhc2VzXCJdLFxuICAgIGxpc3RTdWJzY3JpcHRpb25zRm9yQXV0aGVudGljYXRlZFVzZXJTdHViYmVkOiBbXG4gICAgICBcIkdFVCAvdXNlci9tYXJrZXRwbGFjZV9wdXJjaGFzZXMvc3R1YmJlZFwiLFxuICAgIF0sXG4gICAgbGlzdFdlYmhvb2tEZWxpdmVyaWVzOiBbXCJHRVQgL2FwcC9ob29rL2RlbGl2ZXJpZXNcIl0sXG4gICAgcmVkZWxpdmVyV2ViaG9va0RlbGl2ZXJ5OiBbXG4gICAgICBcIlBPU1QgL2FwcC9ob29rL2RlbGl2ZXJpZXMve2RlbGl2ZXJ5X2lkfS9hdHRlbXB0c1wiLFxuICAgIF0sXG4gICAgcmVtb3ZlUmVwb0Zyb21JbnN0YWxsYXRpb246IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcImFwcHNcIiwgXCJyZW1vdmVSZXBvRnJvbUluc3RhbGxhdGlvbkZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICByZW1vdmVSZXBvRnJvbUluc3RhbGxhdGlvbkZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIHJlc2V0VG9rZW46IFtcIlBBVENIIC9hcHBsaWNhdGlvbnMve2NsaWVudF9pZH0vdG9rZW5cIl0sXG4gICAgcmV2b2tlSW5zdGFsbGF0aW9uQWNjZXNzVG9rZW46IFtcIkRFTEVURSAvaW5zdGFsbGF0aW9uL3Rva2VuXCJdLFxuICAgIHNjb3BlVG9rZW46IFtcIlBPU1QgL2FwcGxpY2F0aW9ucy97Y2xpZW50X2lkfS90b2tlbi9zY29wZWRcIl0sXG4gICAgc3VzcGVuZEluc3RhbGxhdGlvbjogW1wiUFVUIC9hcHAvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9zdXNwZW5kZWRcIl0sXG4gICAgdW5zdXNwZW5kSW5zdGFsbGF0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvYXBwL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH0vc3VzcGVuZGVkXCIsXG4gICAgXSxcbiAgICB1cGRhdGVXZWJob29rQ29uZmlnRm9yQXBwOiBbXCJQQVRDSCAvYXBwL2hvb2svY29uZmlnXCJdLFxuICB9LFxuICBiaWxsaW5nOiB7XG4gICAgZ2V0R2l0aHViQWN0aW9uc0JpbGxpbmdPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9iaWxsaW5nL2FjdGlvbnNcIl0sXG4gICAgZ2V0R2l0aHViQWN0aW9uc0JpbGxpbmdVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zZXR0aW5ncy9iaWxsaW5nL2FjdGlvbnNcIixcbiAgICBdLFxuICAgIGdldEdpdGh1YkJpbGxpbmdQcmVtaXVtUmVxdWVzdFVzYWdlUmVwb3J0T3JnOiBbXG4gICAgICBcIkdFVCAvb3JnYW5pemF0aW9ucy97b3JnfS9zZXR0aW5ncy9iaWxsaW5nL3ByZW1pdW1fcmVxdWVzdC91c2FnZVwiLFxuICAgIF0sXG4gICAgZ2V0R2l0aHViQmlsbGluZ1ByZW1pdW1SZXF1ZXN0VXNhZ2VSZXBvcnRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zZXR0aW5ncy9iaWxsaW5nL3ByZW1pdW1fcmVxdWVzdC91c2FnZVwiLFxuICAgIF0sXG4gICAgZ2V0R2l0aHViQmlsbGluZ1VzYWdlUmVwb3J0T3JnOiBbXG4gICAgICBcIkdFVCAvb3JnYW5pemF0aW9ucy97b3JnfS9zZXR0aW5ncy9iaWxsaW5nL3VzYWdlXCIsXG4gICAgXSxcbiAgICBnZXRHaXRodWJCaWxsaW5nVXNhZ2VSZXBvcnRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zZXR0aW5ncy9iaWxsaW5nL3VzYWdlXCIsXG4gICAgXSxcbiAgICBnZXRHaXRodWJQYWNrYWdlc0JpbGxpbmdPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9iaWxsaW5nL3BhY2thZ2VzXCJdLFxuICAgIGdldEdpdGh1YlBhY2thZ2VzQmlsbGluZ1VzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3NldHRpbmdzL2JpbGxpbmcvcGFja2FnZXNcIixcbiAgICBdLFxuICAgIGdldFNoYXJlZFN0b3JhZ2VCaWxsaW5nT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9iaWxsaW5nL3NoYXJlZC1zdG9yYWdlXCIsXG4gICAgXSxcbiAgICBnZXRTaGFyZWRTdG9yYWdlQmlsbGluZ1VzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3NldHRpbmdzL2JpbGxpbmcvc2hhcmVkLXN0b3JhZ2VcIixcbiAgICBdLFxuICB9LFxuICBjYW1wYWlnbnM6IHtcbiAgICBjcmVhdGVDYW1wYWlnbjogW1wiUE9TVCAvb3Jncy97b3JnfS9jYW1wYWlnbnNcIl0sXG4gICAgZGVsZXRlQ2FtcGFpZ246IFtcIkRFTEVURSAvb3Jncy97b3JnfS9jYW1wYWlnbnMve2NhbXBhaWduX251bWJlcn1cIl0sXG4gICAgZ2V0Q2FtcGFpZ25TdW1tYXJ5OiBbXCJHRVQgL29yZ3Mve29yZ30vY2FtcGFpZ25zL3tjYW1wYWlnbl9udW1iZXJ9XCJdLFxuICAgIGxpc3RPcmdDYW1wYWlnbnM6IFtcIkdFVCAvb3Jncy97b3JnfS9jYW1wYWlnbnNcIl0sXG4gICAgdXBkYXRlQ2FtcGFpZ246IFtcIlBBVENIIC9vcmdzL3tvcmd9L2NhbXBhaWducy97Y2FtcGFpZ25fbnVtYmVyfVwiXSxcbiAgfSxcbiAgY2hlY2tzOiB7XG4gICAgY3JlYXRlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1ydW5zXCJdLFxuICAgIGNyZWF0ZVN1aXRlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1zdWl0ZXNcIl0sXG4gICAgZ2V0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXJ1bnMve2NoZWNrX3J1bl9pZH1cIl0sXG4gICAgZ2V0U3VpdGU6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stc3VpdGVzL3tjaGVja19zdWl0ZV9pZH1cIl0sXG4gICAgbGlzdEFubm90YXRpb25zOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stcnVucy97Y2hlY2tfcnVuX2lkfS9hbm5vdGF0aW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdEZvclJlZjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tyZWZ9L2NoZWNrLXJ1bnNcIl0sXG4gICAgbGlzdEZvclN1aXRlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stc3VpdGVzL3tjaGVja19zdWl0ZV9pZH0vY2hlY2stcnVuc1wiLFxuICAgIF0sXG4gICAgbGlzdFN1aXRlc0ZvclJlZjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tyZWZ9L2NoZWNrLXN1aXRlc1wiXSxcbiAgICByZXJlcXVlc3RSdW46IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stcnVucy97Y2hlY2tfcnVuX2lkfS9yZXJlcXVlc3RcIixcbiAgICBdLFxuICAgIHJlcmVxdWVzdFN1aXRlOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXN1aXRlcy97Y2hlY2tfc3VpdGVfaWR9L3JlcmVxdWVzdFwiLFxuICAgIF0sXG4gICAgc2V0U3VpdGVzUHJlZmVyZW5jZXM6IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXN1aXRlcy9wcmVmZXJlbmNlc1wiLFxuICAgIF0sXG4gICAgdXBkYXRlOiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stcnVucy97Y2hlY2tfcnVuX2lkfVwiXSxcbiAgfSxcbiAgY29kZVNjYW5uaW5nOiB7XG4gICAgY29tbWl0QXV0b2ZpeDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfS9hdXRvZml4L2NvbW1pdHNcIixcbiAgICBdLFxuICAgIGNyZWF0ZUF1dG9maXg6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn0vYXV0b2ZpeFwiLFxuICAgIF0sXG4gICAgY3JlYXRlVmFyaWFudEFuYWx5c2lzOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvY29kZXFsL3ZhcmlhbnQtYW5hbHlzZXNcIixcbiAgICBdLFxuICAgIGRlbGV0ZUFuYWx5c2lzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbmFseXNlcy97YW5hbHlzaXNfaWR9ez9jb25maXJtX2RlbGV0ZX1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUNvZGVxbERhdGFiYXNlOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9jb2RlcWwvZGF0YWJhc2VzL3tsYW5ndWFnZX1cIixcbiAgICBdLFxuICAgIGdldEFsZXJ0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn1cIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkUGFyYW1ldGVyczogeyBhbGVydF9pZDogXCJhbGVydF9udW1iZXJcIiB9IH0sXG4gICAgXSxcbiAgICBnZXRBbmFseXNpczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYW5hbHlzZXMve2FuYWx5c2lzX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0QXV0b2ZpeDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9L2F1dG9maXhcIixcbiAgICBdLFxuICAgIGdldENvZGVxbERhdGFiYXNlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9jb2RlcWwvZGF0YWJhc2VzL3tsYW5ndWFnZX1cIixcbiAgICBdLFxuICAgIGdldERlZmF1bHRTZXR1cDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2RlZmF1bHQtc2V0dXBcIl0sXG4gICAgZ2V0U2FyaWY6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9zYXJpZnMve3NhcmlmX2lkfVwiXSxcbiAgICBnZXRWYXJpYW50QW5hbHlzaXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2NvZGVxbC92YXJpYW50LWFuYWx5c2VzL3tjb2RlcWxfdmFyaWFudF9hbmFseXNpc19pZH1cIixcbiAgICBdLFxuICAgIGdldFZhcmlhbnRBbmFseXNpc1JlcG9UYXNrOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9jb2RlcWwvdmFyaWFudC1hbmFseXNlcy97Y29kZXFsX3ZhcmlhbnRfYW5hbHlzaXNfaWR9L3JlcG9zL3tyZXBvX293bmVyfS97cmVwb19uYW1lfVwiLFxuICAgIF0sXG4gICAgbGlzdEFsZXJ0SW5zdGFuY2VzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn0vaW5zdGFuY2VzXCIsXG4gICAgXSxcbiAgICBsaXN0QWxlcnRzRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vY29kZS1zY2FubmluZy9hbGVydHNcIl0sXG4gICAgbGlzdEFsZXJ0c0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbGVydHNcIl0sXG4gICAgbGlzdEFsZXJ0c0luc3RhbmNlczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9L2luc3RhbmNlc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcImNvZGVTY2FubmluZ1wiLCBcImxpc3RBbGVydEluc3RhbmNlc1wiXSB9LFxuICAgIF0sXG4gICAgbGlzdENvZGVxbERhdGFiYXNlczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvY29kZXFsL2RhdGFiYXNlc1wiLFxuICAgIF0sXG4gICAgbGlzdFJlY2VudEFuYWx5c2VzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYW5hbHlzZXNcIl0sXG4gICAgdXBkYXRlQWxlcnQ6IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVEZWZhdWx0U2V0dXA6IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvZGVmYXVsdC1zZXR1cFwiLFxuICAgIF0sXG4gICAgdXBsb2FkU2FyaWY6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvc2FyaWZzXCJdLFxuICB9LFxuICBjb2RlU2VjdXJpdHk6IHtcbiAgICBhdHRhY2hDb25maWd1cmF0aW9uOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH0vYXR0YWNoXCIsXG4gICAgXSxcbiAgICBhdHRhY2hFbnRlcnByaXNlQ29uZmlndXJhdGlvbjogW1xuICAgICAgXCJQT1NUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH0vYXR0YWNoXCIsXG4gICAgXSxcbiAgICBjcmVhdGVDb25maWd1cmF0aW9uOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnNcIl0sXG4gICAgY3JlYXRlQ29uZmlndXJhdGlvbkZvckVudGVycHJpc2U6IFtcbiAgICAgIFwiUE9TVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnNcIixcbiAgICBdLFxuICAgIGRlbGV0ZUNvbmZpZ3VyYXRpb246IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVDb25maWd1cmF0aW9uRm9yRW50ZXJwcmlzZTogW1xuICAgICAgXCJERUxFVEUgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGV0YWNoQ29uZmlndXJhdGlvbjogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy9kZXRhY2hcIixcbiAgICBdLFxuICAgIGdldENvbmZpZ3VyYXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBnZXRDb25maWd1cmF0aW9uRm9yUmVwb3NpdG9yeTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2VjdXJpdHktY29uZmlndXJhdGlvblwiLFxuICAgIF0sXG4gICAgZ2V0Q29uZmlndXJhdGlvbnNGb3JFbnRlcnByaXNlOiBbXG4gICAgICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnNcIixcbiAgICBdLFxuICAgIGdldENvbmZpZ3VyYXRpb25zRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9uc1wiXSxcbiAgICBnZXREZWZhdWx0Q29uZmlndXJhdGlvbnM6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMvZGVmYXVsdHNcIixcbiAgICBdLFxuICAgIGdldERlZmF1bHRDb25maWd1cmF0aW9uc0ZvckVudGVycHJpc2U6IFtcbiAgICAgIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy9kZWZhdWx0c1wiLFxuICAgIF0sXG4gICAgZ2V0UmVwb3NpdG9yaWVzRm9yQ29uZmlndXJhdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBnZXRSZXBvc2l0b3JpZXNGb3JFbnRlcnByaXNlQ29uZmlndXJhdGlvbjogW1xuICAgICAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGdldFNpbmdsZUNvbmZpZ3VyYXRpb25Gb3JFbnRlcnByaXNlOiBbXG4gICAgICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2NvZGUtc2VjdXJpdHkvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBzZXRDb25maWd1cmF0aW9uQXNEZWZhdWx0OiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9jb2RlLXNlY3VyaXR5L2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9uX2lkfS9kZWZhdWx0c1wiLFxuICAgIF0sXG4gICAgc2V0Q29uZmlndXJhdGlvbkFzRGVmYXVsdEZvckVudGVycHJpc2U6IFtcbiAgICAgIFwiUFVUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH0vZGVmYXVsdHNcIixcbiAgICBdLFxuICAgIHVwZGF0ZUNvbmZpZ3VyYXRpb246IFtcbiAgICAgIFwiUEFUQ0ggL29yZ3Mve29yZ30vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIHVwZGF0ZUVudGVycHJpc2VDb25maWd1cmF0aW9uOiBbXG4gICAgICBcIlBBVENIIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vY29kZS1zZWN1cml0eS9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbl9pZH1cIixcbiAgICBdLFxuICB9LFxuICBjb2Rlc09mQ29uZHVjdDoge1xuICAgIGdldEFsbENvZGVzT2ZDb25kdWN0OiBbXCJHRVQgL2NvZGVzX29mX2NvbmR1Y3RcIl0sXG4gICAgZ2V0Q29uZHVjdENvZGU6IFtcIkdFVCAvY29kZXNfb2ZfY29uZHVjdC97a2V5fVwiXSxcbiAgfSxcbiAgY29kZXNwYWNlczoge1xuICAgIGFkZFJlcG9zaXRvcnlGb3JTZWNyZXRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQVVQgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgYWRkU2VsZWN0ZWRSZXBvVG9PcmdTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIGNoZWNrUGVybWlzc2lvbnNGb3JEZXZjb250YWluZXI6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL3Blcm1pc3Npb25zX2NoZWNrXCIsXG4gICAgXSxcbiAgICBjb2Rlc3BhY2VNYWNoaW5lc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX0vbWFjaGluZXNcIixcbiAgICBdLFxuICAgIGNyZWF0ZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL2NvZGVzcGFjZXNcIl0sXG4gICAgY3JlYXRlT3JVcGRhdGVPcmdTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBjcmVhdGVPclVwZGF0ZVJlcG9TZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgY3JlYXRlT3JVcGRhdGVTZWNyZXRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQVVQgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGNyZWF0ZVdpdGhQckZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vY29kZXNwYWNlc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlV2l0aFJlcG9Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzXCIsXG4gICAgXSxcbiAgICBkZWxldGVGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiREVMRVRFIC91c2VyL2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfVwiXSxcbiAgICBkZWxldGVGcm9tT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9tZW1iZXJzL3t1c2VybmFtZX0vY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVPcmdTZWNyZXQ6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfVwiXSxcbiAgICBkZWxldGVSZXBvU2VjcmV0OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGRlbGV0ZVNlY3JldEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZXhwb3J0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUE9TVCAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX0vZXhwb3J0c1wiLFxuICAgIF0sXG4gICAgZ2V0Q29kZXNwYWNlc0ZvclVzZXJJbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vbWVtYmVycy97dXNlcm5hbWV9L2NvZGVzcGFjZXNcIixcbiAgICBdLFxuICAgIGdldEV4cG9ydERldGFpbHNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9L2V4cG9ydHMve2V4cG9ydF9pZH1cIixcbiAgICBdLFxuICAgIGdldEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9XCJdLFxuICAgIGdldE9yZ1B1YmxpY0tleTogW1wiR0VUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0cy9wdWJsaWMta2V5XCJdLFxuICAgIGdldE9yZ1NlY3JldDogW1wiR0VUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJdLFxuICAgIGdldFB1YmxpY0tleUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHMvcHVibGljLWtleVwiLFxuICAgIF0sXG4gICAgZ2V0UmVwb1B1YmxpY0tleTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvc2VjcmV0cy9wdWJsaWMta2V5XCIsXG4gICAgXSxcbiAgICBnZXRSZXBvU2VjcmV0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGdldFNlY3JldEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfVwiLFxuICAgIF0sXG4gICAgbGlzdERldmNvbnRhaW5lcnNJblJlcG9zaXRvcnlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvZGV2Y29udGFpbmVyc1wiLFxuICAgIF0sXG4gICAgbGlzdEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvY29kZXNwYWNlc1wiXSxcbiAgICBsaXN0SW5Pcmdhbml6YXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkUGFyYW1ldGVyczogeyBvcmdfaWQ6IFwib3JnXCIgfSB9LFxuICAgIF0sXG4gICAgbGlzdEluUmVwb3NpdG9yeUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlc1wiLFxuICAgIF0sXG4gICAgbGlzdE9yZ1NlY3JldHM6IFtcIkdFVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL3NlY3JldHNcIl0sXG4gICAgbGlzdFJlcG9TZWNyZXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvc2VjcmV0c1wiXSxcbiAgICBsaXN0UmVwb3NpdG9yaWVzRm9yU2VjcmV0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgbGlzdFNlY3JldHNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0c1wiXSxcbiAgICBsaXN0U2VsZWN0ZWRSZXBvc0Zvck9yZ1NlY3JldDogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBwcmVGbGlnaHRXaXRoUmVwb0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9uZXdcIixcbiAgICBdLFxuICAgIHB1Ymxpc2hGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQT1NUIC91c2VyL2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfS9wdWJsaXNoXCIsXG4gICAgXSxcbiAgICByZW1vdmVSZXBvc2l0b3J5Rm9yU2VjcmV0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIHJlbW92ZVNlbGVjdGVkUmVwb0Zyb21PcmdTZWNyZXQ6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIHJlcG9NYWNoaW5lc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9tYWNoaW5lc1wiLFxuICAgIF0sXG4gICAgc2V0UmVwb3NpdG9yaWVzRm9yU2VjcmV0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUFVUIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgc2V0U2VsZWN0ZWRSZXBvc0Zvck9yZ1NlY3JldDogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBzdGFydEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfS9zdGFydFwiXSxcbiAgICBzdG9wRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9L3N0b3BcIl0sXG4gICAgc3RvcEluT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vbWVtYmVycy97dXNlcm5hbWV9L2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfS9zdG9wXCIsXG4gICAgXSxcbiAgICB1cGRhdGVGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUEFUQ0ggL3VzZXIvY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9XCJdLFxuICB9LFxuICBjb3BpbG90OiB7XG4gICAgYWRkQ29waWxvdFNlYXRzRm9yVGVhbXM6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9jb3BpbG90L2JpbGxpbmcvc2VsZWN0ZWRfdGVhbXNcIixcbiAgICBdLFxuICAgIGFkZENvcGlsb3RTZWF0c0ZvclVzZXJzOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vY29waWxvdC9iaWxsaW5nL3NlbGVjdGVkX3VzZXJzXCIsXG4gICAgXSxcbiAgICBjYW5jZWxDb3BpbG90U2VhdEFzc2lnbm1lbnRGb3JUZWFtczogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vY29waWxvdC9iaWxsaW5nL3NlbGVjdGVkX3RlYW1zXCIsXG4gICAgXSxcbiAgICBjYW5jZWxDb3BpbG90U2VhdEFzc2lnbm1lbnRGb3JVc2VyczogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vY29waWxvdC9iaWxsaW5nL3NlbGVjdGVkX3VzZXJzXCIsXG4gICAgXSxcbiAgICBjb3BpbG90TWV0cmljc0Zvck9yZ2FuaXphdGlvbjogW1wiR0VUIC9vcmdzL3tvcmd9L2NvcGlsb3QvbWV0cmljc1wiXSxcbiAgICBjb3BpbG90TWV0cmljc0ZvclRlYW06IFtcIkdFVCAvb3Jncy97b3JnfS90ZWFtL3t0ZWFtX3NsdWd9L2NvcGlsb3QvbWV0cmljc1wiXSxcbiAgICBnZXRDb3BpbG90T3JnYW5pemF0aW9uRGV0YWlsczogW1wiR0VUIC9vcmdzL3tvcmd9L2NvcGlsb3QvYmlsbGluZ1wiXSxcbiAgICBnZXRDb3BpbG90U2VhdERldGFpbHNGb3JVc2VyOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9tZW1iZXJzL3t1c2VybmFtZX0vY29waWxvdFwiLFxuICAgIF0sXG4gICAgbGlzdENvcGlsb3RTZWF0czogW1wiR0VUIC9vcmdzL3tvcmd9L2NvcGlsb3QvYmlsbGluZy9zZWF0c1wiXSxcbiAgfSxcbiAgY3JlZGVudGlhbHM6IHsgcmV2b2tlOiBbXCJQT1NUIC9jcmVkZW50aWFscy9yZXZva2VcIl0gfSxcbiAgZGVwZW5kYWJvdDoge1xuICAgIGFkZFNlbGVjdGVkUmVwb1RvT3JnU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgXSxcbiAgICBjcmVhdGVPclVwZGF0ZU9yZ1NlY3JldDogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGNyZWF0ZU9yVXBkYXRlUmVwb1NlY3JldDogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGFib3Qvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVPcmdTZWNyZXQ6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfVwiXSxcbiAgICBkZWxldGVSZXBvU2VjcmV0OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIixcbiAgICBdLFxuICAgIGdldEFsZXJ0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGFib3QvYWxlcnRzL3thbGVydF9udW1iZXJ9XCJdLFxuICAgIGdldE9yZ1B1YmxpY0tleTogW1wiR0VUIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0cy9wdWJsaWMta2V5XCJdLFxuICAgIGdldE9yZ1NlY3JldDogW1wiR0VUIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJdLFxuICAgIGdldFJlcG9QdWJsaWNLZXk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L3NlY3JldHMvcHVibGljLWtleVwiLFxuICAgIF0sXG4gICAgZ2V0UmVwb1NlY3JldDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGFib3Qvc2VjcmV0cy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBsaXN0QWxlcnRzRm9yRW50ZXJwcmlzZTogW1xuICAgICAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9kZXBlbmRhYm90L2FsZXJ0c1wiLFxuICAgIF0sXG4gICAgbGlzdEFsZXJ0c0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2RlcGVuZGFib3QvYWxlcnRzXCJdLFxuICAgIGxpc3RBbGVydHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGFib3QvYWxlcnRzXCJdLFxuICAgIGxpc3RPcmdTZWNyZXRzOiBbXCJHRVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzXCJdLFxuICAgIGxpc3RSZXBvU2VjcmV0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L3NlY3JldHNcIl0sXG4gICAgbGlzdFNlbGVjdGVkUmVwb3NGb3JPcmdTZWNyZXQ6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgcmVtb3ZlU2VsZWN0ZWRSZXBvRnJvbU9yZ1NlY3JldDogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgcmVwb3NpdG9yeUFjY2Vzc0Zvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ2FuaXphdGlvbnMve29yZ30vZGVwZW5kYWJvdC9yZXBvc2l0b3J5LWFjY2Vzc1wiLFxuICAgIF0sXG4gICAgc2V0UmVwb3NpdG9yeUFjY2Vzc0RlZmF1bHRMZXZlbDogW1xuICAgICAgXCJQVVQgL29yZ2FuaXphdGlvbnMve29yZ30vZGVwZW5kYWJvdC9yZXBvc2l0b3J5LWFjY2Vzcy9kZWZhdWx0LWxldmVsXCIsXG4gICAgXSxcbiAgICBzZXRTZWxlY3RlZFJlcG9zRm9yT3JnU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIHVwZGF0ZUFsZXJ0OiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L2FsZXJ0cy97YWxlcnRfbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlUmVwb3NpdG9yeUFjY2Vzc0Zvck9yZzogW1xuICAgICAgXCJQQVRDSCAvb3JnYW5pemF0aW9ucy97b3JnfS9kZXBlbmRhYm90L3JlcG9zaXRvcnktYWNjZXNzXCIsXG4gICAgXSxcbiAgfSxcbiAgZGVwZW5kZW5jeUdyYXBoOiB7XG4gICAgY3JlYXRlUmVwb3NpdG9yeVNuYXBzaG90OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGVuY3ktZ3JhcGgvc25hcHNob3RzXCIsXG4gICAgXSxcbiAgICBkaWZmUmFuZ2U6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRlbmN5LWdyYXBoL2NvbXBhcmUve2Jhc2VoZWFkfVwiLFxuICAgIF0sXG4gICAgZXhwb3J0U2JvbTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRlbmN5LWdyYXBoL3Nib21cIl0sXG4gIH0sXG4gIGVtb2ppczogeyBnZXQ6IFtcIkdFVCAvZW1vamlzXCJdIH0sXG4gIGVudGVycHJpc2VUZWFtTWVtYmVyc2hpcHM6IHtcbiAgICBhZGQ6IFtcbiAgICAgIFwiUFVUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vbWVtYmVyc2hpcHMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgYnVsa0FkZDogW1xuICAgICAgXCJQT1NUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vbWVtYmVyc2hpcHMvYWRkXCIsXG4gICAgXSxcbiAgICBidWxrUmVtb3ZlOiBbXG4gICAgICBcIlBPU1QgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9tZW1iZXJzaGlwcy9yZW1vdmVcIixcbiAgICBdLFxuICAgIGdldDogW1xuICAgICAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9tZW1iZXJzaGlwcy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICBsaXN0OiBbXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9tZW1iZXJzaGlwc1wiXSxcbiAgICByZW1vdmU6IFtcbiAgICAgIFwiREVMRVRFIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vbWVtYmVyc2hpcHMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gIH0sXG4gIGVudGVycHJpc2VUZWFtT3JnYW5pemF0aW9uczoge1xuICAgIGFkZDogW1xuICAgICAgXCJQVVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9vcmdhbml6YXRpb25zL3tvcmd9XCIsXG4gICAgXSxcbiAgICBidWxrQWRkOiBbXG4gICAgICBcIlBPU1QgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9vcmdhbml6YXRpb25zL2FkZFwiLFxuICAgIF0sXG4gICAgYnVsa1JlbW92ZTogW1xuICAgICAgXCJQT1NUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve2VudGVycHJpc2UtdGVhbX0vb3JnYW5pemF0aW9ucy9yZW1vdmVcIixcbiAgICBdLFxuICAgIGRlbGV0ZTogW1xuICAgICAgXCJERUxFVEUgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtcy97ZW50ZXJwcmlzZS10ZWFtfS9vcmdhbml6YXRpb25zL3tvcmd9XCIsXG4gICAgXSxcbiAgICBnZXRBc3NpZ25tZW50OiBbXG4gICAgICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L29yZ2FuaXphdGlvbnMve29yZ31cIixcbiAgICBdLFxuICAgIGdldEFzc2lnbm1lbnRzOiBbXG4gICAgICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3tlbnRlcnByaXNlLXRlYW19L29yZ2FuaXphdGlvbnNcIixcbiAgICBdLFxuICB9LFxuICBlbnRlcnByaXNlVGVhbXM6IHtcbiAgICBjcmVhdGU6IFtcIlBPU1QgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS90ZWFtc1wiXSxcbiAgICBkZWxldGU6IFtcIkRFTEVURSAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3t0ZWFtX3NsdWd9XCJdLFxuICAgIGdldDogW1wiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXMve3RlYW1fc2x1Z31cIl0sXG4gICAgbGlzdDogW1wiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vdGVhbXNcIl0sXG4gICAgdXBkYXRlOiBbXCJQQVRDSCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3RlYW1zL3t0ZWFtX3NsdWd9XCJdLFxuICB9LFxuICBnaXN0czoge1xuICAgIGNoZWNrSXNTdGFycmVkOiBbXCJHRVQgL2dpc3RzL3tnaXN0X2lkfS9zdGFyXCJdLFxuICAgIGNyZWF0ZTogW1wiUE9TVCAvZ2lzdHNcIl0sXG4gICAgY3JlYXRlQ29tbWVudDogW1wiUE9TVCAvZ2lzdHMve2dpc3RfaWR9L2NvbW1lbnRzXCJdLFxuICAgIGRlbGV0ZTogW1wiREVMRVRFIC9naXN0cy97Z2lzdF9pZH1cIl0sXG4gICAgZGVsZXRlQ29tbWVudDogW1wiREVMRVRFIC9naXN0cy97Z2lzdF9pZH0vY29tbWVudHMve2NvbW1lbnRfaWR9XCJdLFxuICAgIGZvcms6IFtcIlBPU1QgL2dpc3RzL3tnaXN0X2lkfS9mb3Jrc1wiXSxcbiAgICBnZXQ6IFtcIkdFVCAvZ2lzdHMve2dpc3RfaWR9XCJdLFxuICAgIGdldENvbW1lbnQ6IFtcIkdFVCAvZ2lzdHMve2dpc3RfaWR9L2NvbW1lbnRzL3tjb21tZW50X2lkfVwiXSxcbiAgICBnZXRSZXZpc2lvbjogW1wiR0VUIC9naXN0cy97Z2lzdF9pZH0ve3NoYX1cIl0sXG4gICAgbGlzdDogW1wiR0VUIC9naXN0c1wiXSxcbiAgICBsaXN0Q29tbWVudHM6IFtcIkdFVCAvZ2lzdHMve2dpc3RfaWR9L2NvbW1lbnRzXCJdLFxuICAgIGxpc3RDb21taXRzOiBbXCJHRVQgL2dpc3RzL3tnaXN0X2lkfS9jb21taXRzXCJdLFxuICAgIGxpc3RGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZ2lzdHNcIl0sXG4gICAgbGlzdEZvcmtzOiBbXCJHRVQgL2dpc3RzL3tnaXN0X2lkfS9mb3Jrc1wiXSxcbiAgICBsaXN0UHVibGljOiBbXCJHRVQgL2dpc3RzL3B1YmxpY1wiXSxcbiAgICBsaXN0U3RhcnJlZDogW1wiR0VUIC9naXN0cy9zdGFycmVkXCJdLFxuICAgIHN0YXI6IFtcIlBVVCAvZ2lzdHMve2dpc3RfaWR9L3N0YXJcIl0sXG4gICAgdW5zdGFyOiBbXCJERUxFVEUgL2dpc3RzL3tnaXN0X2lkfS9zdGFyXCJdLFxuICAgIHVwZGF0ZTogW1wiUEFUQ0ggL2dpc3RzL3tnaXN0X2lkfVwiXSxcbiAgICB1cGRhdGVDb21tZW50OiBbXCJQQVRDSCAvZ2lzdHMve2dpc3RfaWR9L2NvbW1lbnRzL3tjb21tZW50X2lkfVwiXSxcbiAgfSxcbiAgZ2l0OiB7XG4gICAgY3JlYXRlQmxvYjogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L2Jsb2JzXCJdLFxuICAgIGNyZWF0ZUNvbW1pdDogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L2NvbW1pdHNcIl0sXG4gICAgY3JlYXRlUmVmOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvcmVmc1wiXSxcbiAgICBjcmVhdGVUYWc6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC90YWdzXCJdLFxuICAgIGNyZWF0ZVRyZWU6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC90cmVlc1wiXSxcbiAgICBkZWxldGVSZWY6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L3JlZnMve3JlZn1cIl0sXG4gICAgZ2V0QmxvYjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvYmxvYnMve2ZpbGVfc2hhfVwiXSxcbiAgICBnZXRDb21taXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L2NvbW1pdHMve2NvbW1pdF9zaGF9XCJdLFxuICAgIGdldFJlZjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvcmVmL3tyZWZ9XCJdLFxuICAgIGdldFRhZzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvdGFncy97dGFnX3NoYX1cIl0sXG4gICAgZ2V0VHJlZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvdHJlZXMve3RyZWVfc2hhfVwiXSxcbiAgICBsaXN0TWF0Y2hpbmdSZWZzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC9tYXRjaGluZy1yZWZzL3tyZWZ9XCJdLFxuICAgIHVwZGF0ZVJlZjogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC9yZWZzL3tyZWZ9XCJdLFxuICB9LFxuICBnaXRpZ25vcmU6IHtcbiAgICBnZXRBbGxUZW1wbGF0ZXM6IFtcIkdFVCAvZ2l0aWdub3JlL3RlbXBsYXRlc1wiXSxcbiAgICBnZXRUZW1wbGF0ZTogW1wiR0VUIC9naXRpZ25vcmUvdGVtcGxhdGVzL3tuYW1lfVwiXSxcbiAgfSxcbiAgaG9zdGVkQ29tcHV0ZToge1xuICAgIGNyZWF0ZU5ldHdvcmtDb25maWd1cmF0aW9uRm9yT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vc2V0dGluZ3MvbmV0d29yay1jb25maWd1cmF0aW9uc1wiLFxuICAgIF0sXG4gICAgZGVsZXRlTmV0d29ya0NvbmZpZ3VyYXRpb25Gcm9tT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9zZXR0aW5ncy9uZXR3b3JrLWNvbmZpZ3VyYXRpb25zL3tuZXR3b3JrX2NvbmZpZ3VyYXRpb25faWR9XCIsXG4gICAgXSxcbiAgICBnZXROZXR3b3JrQ29uZmlndXJhdGlvbkZvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvbmV0d29yay1jb25maWd1cmF0aW9ucy97bmV0d29ya19jb25maWd1cmF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0TmV0d29ya1NldHRpbmdzRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9uZXR3b3JrLXNldHRpbmdzL3tuZXR3b3JrX3NldHRpbmdzX2lkfVwiLFxuICAgIF0sXG4gICAgbGlzdE5ldHdvcmtDb25maWd1cmF0aW9uc0Zvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvbmV0d29yay1jb25maWd1cmF0aW9uc1wiLFxuICAgIF0sXG4gICAgdXBkYXRlTmV0d29ya0NvbmZpZ3VyYXRpb25Gb3JPcmc6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ3Mve29yZ30vc2V0dGluZ3MvbmV0d29yay1jb25maWd1cmF0aW9ucy97bmV0d29ya19jb25maWd1cmF0aW9uX2lkfVwiLFxuICAgIF0sXG4gIH0sXG4gIGludGVyYWN0aW9uczoge1xuICAgIGdldFJlc3RyaWN0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvaW50ZXJhY3Rpb24tbGltaXRzXCJdLFxuICAgIGdldFJlc3RyaWN0aW9uc0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2ludGVyYWN0aW9uLWxpbWl0c1wiXSxcbiAgICBnZXRSZXN0cmljdGlvbnNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ludGVyYWN0aW9uLWxpbWl0c1wiXSxcbiAgICBnZXRSZXN0cmljdGlvbnNGb3JZb3VyUHVibGljUmVwb3M6IFtcbiAgICAgIFwiR0VUIC91c2VyL2ludGVyYWN0aW9uLWxpbWl0c1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcImludGVyYWN0aW9uc1wiLCBcImdldFJlc3RyaWN0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICByZW1vdmVSZXN0cmljdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiREVMRVRFIC91c2VyL2ludGVyYWN0aW9uLWxpbWl0c1wiXSxcbiAgICByZW1vdmVSZXN0cmljdGlvbnNGb3JPcmc6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9pbnRlcmFjdGlvbi1saW1pdHNcIl0sXG4gICAgcmVtb3ZlUmVzdHJpY3Rpb25zRm9yUmVwbzogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ludGVyYWN0aW9uLWxpbWl0c1wiLFxuICAgIF0sXG4gICAgcmVtb3ZlUmVzdHJpY3Rpb25zRm9yWW91clB1YmxpY1JlcG9zOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9pbnRlcmFjdGlvbi1saW1pdHNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJpbnRlcmFjdGlvbnNcIiwgXCJyZW1vdmVSZXN0cmljdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgc2V0UmVzdHJpY3Rpb25zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBVVCAvdXNlci9pbnRlcmFjdGlvbi1saW1pdHNcIl0sXG4gICAgc2V0UmVzdHJpY3Rpb25zRm9yT3JnOiBbXCJQVVQgL29yZ3Mve29yZ30vaW50ZXJhY3Rpb24tbGltaXRzXCJdLFxuICAgIHNldFJlc3RyaWN0aW9uc0ZvclJlcG86IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vaW50ZXJhY3Rpb24tbGltaXRzXCJdLFxuICAgIHNldFJlc3RyaWN0aW9uc0ZvcllvdXJQdWJsaWNSZXBvczogW1xuICAgICAgXCJQVVQgL3VzZXIvaW50ZXJhY3Rpb24tbGltaXRzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wiaW50ZXJhY3Rpb25zXCIsIFwic2V0UmVzdHJpY3Rpb25zRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICB9LFxuICBpc3N1ZXM6IHtcbiAgICBhZGRBc3NpZ25lZXM6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2Fzc2lnbmVlc1wiLFxuICAgIF0sXG4gICAgYWRkQmxvY2tlZEJ5RGVwZW5kZW5jeTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vZGVwZW5kZW5jaWVzL2Jsb2NrZWRfYnlcIixcbiAgICBdLFxuICAgIGFkZExhYmVsczogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2xhYmVsc1wiXSxcbiAgICBhZGRTdWJJc3N1ZTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vc3ViX2lzc3Vlc1wiLFxuICAgIF0sXG4gICAgY2hlY2tVc2VyQ2FuQmVBc3NpZ25lZDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hc3NpZ25lZXMve2Fzc2lnbmVlfVwiXSxcbiAgICBjaGVja1VzZXJDYW5CZUFzc2lnbmVkVG9Jc3N1ZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9hc3NpZ25lZXMve2Fzc2lnbmVlfVwiLFxuICAgIF0sXG4gICAgY3JlYXRlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXNcIl0sXG4gICAgY3JlYXRlQ29tbWVudDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vY29tbWVudHNcIixcbiAgICBdLFxuICAgIGNyZWF0ZUxhYmVsOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9sYWJlbHNcIl0sXG4gICAgY3JlYXRlTWlsZXN0b25lOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzXCJdLFxuICAgIGRlbGV0ZUNvbW1lbnQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvY29tbWVudHMve2NvbW1lbnRfaWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVMYWJlbDogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9sYWJlbHMve25hbWV9XCJdLFxuICAgIGRlbGV0ZU1pbGVzdG9uZTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L21pbGVzdG9uZXMve21pbGVzdG9uZV9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICBnZXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9XCJdLFxuICAgIGdldENvbW1lbnQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzL3tjb21tZW50X2lkfVwiXSxcbiAgICBnZXRFdmVudDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvZXZlbnRzL3tldmVudF9pZH1cIl0sXG4gICAgZ2V0TGFiZWw6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbGFiZWxzL3tuYW1lfVwiXSxcbiAgICBnZXRNaWxlc3RvbmU6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbWlsZXN0b25lcy97bWlsZXN0b25lX251bWJlcn1cIl0sXG4gICAgZ2V0UGFyZW50OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9wYXJlbnRcIl0sXG4gICAgbGlzdDogW1wiR0VUIC9pc3N1ZXNcIl0sXG4gICAgbGlzdEFzc2lnbmVlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hc3NpZ25lZXNcIl0sXG4gICAgbGlzdENvbW1lbnRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9jb21tZW50c1wiXSxcbiAgICBsaXN0Q29tbWVudHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50c1wiXSxcbiAgICBsaXN0RGVwZW5kZW5jaWVzQmxvY2tlZEJ5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2RlcGVuZGVuY2llcy9ibG9ja2VkX2J5XCIsXG4gICAgXSxcbiAgICBsaXN0RGVwZW5kZW5jaWVzQmxvY2tpbmc6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vZGVwZW5kZW5jaWVzL2Jsb2NraW5nXCIsXG4gICAgXSxcbiAgICBsaXN0RXZlbnRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9ldmVudHNcIl0sXG4gICAgbGlzdEV2ZW50c0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2V2ZW50c1wiXSxcbiAgICBsaXN0RXZlbnRzRm9yVGltZWxpbmU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vdGltZWxpbmVcIixcbiAgICBdLFxuICAgIGxpc3RGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2lzc3Vlc1wiXSxcbiAgICBsaXN0Rm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vaXNzdWVzXCJdLFxuICAgIGxpc3RGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlc1wiXSxcbiAgICBsaXN0TGFiZWxzRm9yTWlsZXN0b25lOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbWlsZXN0b25lcy97bWlsZXN0b25lX251bWJlcn0vbGFiZWxzXCIsXG4gICAgXSxcbiAgICBsaXN0TGFiZWxzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9sYWJlbHNcIl0sXG4gICAgbGlzdExhYmVsc09uSXNzdWU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vbGFiZWxzXCIsXG4gICAgXSxcbiAgICBsaXN0TWlsZXN0b25lczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzXCJdLFxuICAgIGxpc3RTdWJJc3N1ZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vc3ViX2lzc3Vlc1wiLFxuICAgIF0sXG4gICAgbG9jazogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vbG9ja1wiXSxcbiAgICByZW1vdmVBbGxMYWJlbHM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vbGFiZWxzXCIsXG4gICAgXSxcbiAgICByZW1vdmVBc3NpZ25lZXM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vYXNzaWduZWVzXCIsXG4gICAgXSxcbiAgICByZW1vdmVEZXBlbmRlbmN5QmxvY2tlZEJ5OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2RlcGVuZGVuY2llcy9ibG9ja2VkX2J5L3tpc3N1ZV9pZH1cIixcbiAgICBdLFxuICAgIHJlbW92ZUxhYmVsOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2xhYmVscy97bmFtZX1cIixcbiAgICBdLFxuICAgIHJlbW92ZVN1Yklzc3VlOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3N1Yl9pc3N1ZVwiLFxuICAgIF0sXG4gICAgcmVwcmlvcml0aXplU3ViSXNzdWU6IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9zdWJfaXNzdWVzL3ByaW9yaXR5XCIsXG4gICAgXSxcbiAgICBzZXRMYWJlbHM6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2xhYmVsc1wiXSxcbiAgICB1bmxvY2s6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2xvY2tcIl0sXG4gICAgdXBkYXRlOiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9XCJdLFxuICAgIHVwZGF0ZUNvbW1lbnQ6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvY29tbWVudHMve2NvbW1lbnRfaWR9XCJdLFxuICAgIHVwZGF0ZUxhYmVsOiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vbGFiZWxzL3tuYW1lfVwiXSxcbiAgICB1cGRhdGVNaWxlc3RvbmU6IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L21pbGVzdG9uZXMve21pbGVzdG9uZV9udW1iZXJ9XCIsXG4gICAgXSxcbiAgfSxcbiAgbGljZW5zZXM6IHtcbiAgICBnZXQ6IFtcIkdFVCAvbGljZW5zZXMve2xpY2Vuc2V9XCJdLFxuICAgIGdldEFsbENvbW1vbmx5VXNlZDogW1wiR0VUIC9saWNlbnNlc1wiXSxcbiAgICBnZXRGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2xpY2Vuc2VcIl0sXG4gIH0sXG4gIG1hcmtkb3duOiB7XG4gICAgcmVuZGVyOiBbXCJQT1NUIC9tYXJrZG93blwiXSxcbiAgICByZW5kZXJSYXc6IFtcbiAgICAgIFwiUE9TVCAvbWFya2Rvd24vcmF3XCIsXG4gICAgICB7IGhlYWRlcnM6IHsgXCJjb250ZW50LXR5cGVcIjogXCJ0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCIgfSB9LFxuICAgIF0sXG4gIH0sXG4gIG1ldGE6IHtcbiAgICBnZXQ6IFtcIkdFVCAvbWV0YVwiXSxcbiAgICBnZXRBbGxWZXJzaW9uczogW1wiR0VUIC92ZXJzaW9uc1wiXSxcbiAgICBnZXRPY3RvY2F0OiBbXCJHRVQgL29jdG9jYXRcIl0sXG4gICAgZ2V0WmVuOiBbXCJHRVQgL3plblwiXSxcbiAgICByb290OiBbXCJHRVQgL1wiXSxcbiAgfSxcbiAgbWlncmF0aW9uczoge1xuICAgIGRlbGV0ZUFyY2hpdmVGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9hcmNoaXZlXCIsXG4gICAgXSxcbiAgICBkZWxldGVBcmNoaXZlRm9yT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L2FyY2hpdmVcIixcbiAgICBdLFxuICAgIGRvd25sb2FkQXJjaGl2ZUZvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9hcmNoaXZlXCIsXG4gICAgXSxcbiAgICBnZXRBcmNoaXZlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vYXJjaGl2ZVwiLFxuICAgIF0sXG4gICAgZ2V0U3RhdHVzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9XCJdLFxuICAgIGdldFN0YXR1c0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH1cIl0sXG4gICAgbGlzdEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvbWlncmF0aW9uc1wiXSxcbiAgICBsaXN0Rm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vbWlncmF0aW9uc1wiXSxcbiAgICBsaXN0UmVwb3NGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgICBdLFxuICAgIGxpc3RSZXBvc0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCJdLFxuICAgIGxpc3RSZXBvc0ZvclVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wibWlncmF0aW9uc1wiLCBcImxpc3RSZXBvc0ZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBzdGFydEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL21pZ3JhdGlvbnNcIl0sXG4gICAgc3RhcnRGb3JPcmc6IFtcIlBPU1QgL29yZ3Mve29yZ30vbWlncmF0aW9uc1wiXSxcbiAgICB1bmxvY2tSZXBvRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vcmVwb3Mve3JlcG9fbmFtZX0vbG9ja1wiLFxuICAgIF0sXG4gICAgdW5sb2NrUmVwb0Zvck9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9yZXBvcy97cmVwb19uYW1lfS9sb2NrXCIsXG4gICAgXSxcbiAgfSxcbiAgb2lkYzoge1xuICAgIGdldE9pZGNDdXN0b21TdWJUZW1wbGF0ZUZvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9vaWRjL2N1c3RvbWl6YXRpb24vc3ViXCIsXG4gICAgXSxcbiAgICB1cGRhdGVPaWRjQ3VzdG9tU3ViVGVtcGxhdGVGb3JPcmc6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvb2lkYy9jdXN0b21pemF0aW9uL3N1YlwiLFxuICAgIF0sXG4gIH0sXG4gIG9yZ3M6IHtcbiAgICBhZGRTZWN1cml0eU1hbmFnZXJUZWFtOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9zZWN1cml0eS1tYW5hZ2Vycy90ZWFtcy97dGVhbV9zbHVnfVwiLFxuICAgICAge30sXG4gICAgICB7XG4gICAgICAgIGRlcHJlY2F0ZWQ6XG4gICAgICAgICAgXCJvY3Rva2l0LnJlc3Qub3Jncy5hZGRTZWN1cml0eU1hbmFnZXJUZWFtKCkgaXMgZGVwcmVjYXRlZCwgc2VlIGh0dHBzOi8vZG9jcy5naXRodWIuY29tL3Jlc3Qvb3Jncy9zZWN1cml0eS1tYW5hZ2VycyNhZGQtYS1zZWN1cml0eS1tYW5hZ2VyLXRlYW1cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBhc3NpZ25UZWFtVG9PcmdSb2xlOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMvdGVhbXMve3RlYW1fc2x1Z30ve3JvbGVfaWR9XCIsXG4gICAgXSxcbiAgICBhc3NpZ25Vc2VyVG9PcmdSb2xlOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tcm9sZXMvdXNlcnMve3VzZXJuYW1lfS97cm9sZV9pZH1cIixcbiAgICBdLFxuICAgIGJsb2NrVXNlcjogW1wiUFVUIC9vcmdzL3tvcmd9L2Jsb2Nrcy97dXNlcm5hbWV9XCJdLFxuICAgIGNhbmNlbEludml0YXRpb246IFtcIkRFTEVURSAvb3Jncy97b3JnfS9pbnZpdGF0aW9ucy97aW52aXRhdGlvbl9pZH1cIl0sXG4gICAgY2hlY2tCbG9ja2VkVXNlcjogW1wiR0VUIC9vcmdzL3tvcmd9L2Jsb2Nrcy97dXNlcm5hbWV9XCJdLFxuICAgIGNoZWNrTWVtYmVyc2hpcEZvclVzZXI6IFtcIkdFVCAvb3Jncy97b3JnfS9tZW1iZXJzL3t1c2VybmFtZX1cIl0sXG4gICAgY2hlY2tQdWJsaWNNZW1iZXJzaGlwRm9yVXNlcjogW1wiR0VUIC9vcmdzL3tvcmd9L3B1YmxpY19tZW1iZXJzL3t1c2VybmFtZX1cIl0sXG4gICAgY29udmVydE1lbWJlclRvT3V0c2lkZUNvbGxhYm9yYXRvcjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vb3V0c2lkZV9jb2xsYWJvcmF0b3JzL3t1c2VybmFtZX1cIixcbiAgICBdLFxuICAgIGNyZWF0ZUFydGlmYWN0U3RvcmFnZVJlY29yZDogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2FydGlmYWN0cy9tZXRhZGF0YS9zdG9yYWdlLXJlY29yZFwiLFxuICAgIF0sXG4gICAgY3JlYXRlSW52aXRhdGlvbjogW1wiUE9TVCAvb3Jncy97b3JnfS9pbnZpdGF0aW9uc1wiXSxcbiAgICBjcmVhdGVJc3N1ZVR5cGU6IFtcIlBPU1QgL29yZ3Mve29yZ30vaXNzdWUtdHlwZXNcIl0sXG4gICAgY3JlYXRlV2ViaG9vazogW1wiUE9TVCAvb3Jncy97b3JnfS9ob29rc1wiXSxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzRm9yT3Jnc0NyZWF0ZU9yVXBkYXRlT3JnYW5pemF0aW9uVmFsdWVzOiBbXG4gICAgICBcIlBBVENIIC9vcmdhbml6YXRpb25zL3tvcmd9L29yZy1wcm9wZXJ0aWVzL3ZhbHVlc1wiLFxuICAgIF0sXG4gICAgY3VzdG9tUHJvcGVydGllc0Zvck9yZ3NHZXRPcmdhbml6YXRpb25WYWx1ZXM6IFtcbiAgICAgIFwiR0VUIC9vcmdhbml6YXRpb25zL3tvcmd9L29yZy1wcm9wZXJ0aWVzL3ZhbHVlc1wiLFxuICAgIF0sXG4gICAgY3VzdG9tUHJvcGVydGllc0ZvclJlcG9zQ3JlYXRlT3JVcGRhdGVPcmdhbml6YXRpb25EZWZpbml0aW9uOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9wcm9wZXJ0aWVzL3NjaGVtYS97Y3VzdG9tX3Byb3BlcnR5X25hbWV9XCIsXG4gICAgXSxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzRm9yUmVwb3NDcmVhdGVPclVwZGF0ZU9yZ2FuaXphdGlvbkRlZmluaXRpb25zOiBbXG4gICAgICBcIlBBVENIIC9vcmdzL3tvcmd9L3Byb3BlcnRpZXMvc2NoZW1hXCIsXG4gICAgXSxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzRm9yUmVwb3NDcmVhdGVPclVwZGF0ZU9yZ2FuaXphdGlvblZhbHVlczogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS9wcm9wZXJ0aWVzL3ZhbHVlc1wiLFxuICAgIF0sXG4gICAgY3VzdG9tUHJvcGVydGllc0ZvclJlcG9zRGVsZXRlT3JnYW5pemF0aW9uRGVmaW5pdGlvbjogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vcHJvcGVydGllcy9zY2hlbWEve2N1c3RvbV9wcm9wZXJ0eV9uYW1lfVwiLFxuICAgIF0sXG4gICAgY3VzdG9tUHJvcGVydGllc0ZvclJlcG9zR2V0T3JnYW5pemF0aW9uRGVmaW5pdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcHJvcGVydGllcy9zY2hlbWEve2N1c3RvbV9wcm9wZXJ0eV9uYW1lfVwiLFxuICAgIF0sXG4gICAgY3VzdG9tUHJvcGVydGllc0ZvclJlcG9zR2V0T3JnYW5pemF0aW9uRGVmaW5pdGlvbnM6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3Byb3BlcnRpZXMvc2NoZW1hXCIsXG4gICAgXSxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzRm9yUmVwb3NHZXRPcmdhbml6YXRpb25WYWx1ZXM6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3Byb3BlcnRpZXMvdmFsdWVzXCIsXG4gICAgXSxcbiAgICBkZWxldGU6IFtcIkRFTEVURSAvb3Jncy97b3JnfVwiXSxcbiAgICBkZWxldGVBdHRlc3RhdGlvbnNCdWxrOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2F0dGVzdGF0aW9ucy9kZWxldGUtcmVxdWVzdFwiXSxcbiAgICBkZWxldGVBdHRlc3RhdGlvbnNCeUlkOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hdHRlc3RhdGlvbnMve2F0dGVzdGF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlQXR0ZXN0YXRpb25zQnlTdWJqZWN0RGlnZXN0OiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hdHRlc3RhdGlvbnMvZGlnZXN0L3tzdWJqZWN0X2RpZ2VzdH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUlzc3VlVHlwZTogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2lzc3VlLXR5cGVzL3tpc3N1ZV90eXBlX2lkfVwiXSxcbiAgICBkZWxldGVXZWJob29rOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9XCJdLFxuICAgIGRpc2FibGVTZWxlY3RlZFJlcG9zaXRvcnlJbW11dGFibGVSZWxlYXNlc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vc2V0dGluZ3MvaW1tdXRhYmxlLXJlbGVhc2VzL3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIixcbiAgICBdLFxuICAgIGVuYWJsZVNlbGVjdGVkUmVwb3NpdG9yeUltbXV0YWJsZVJlbGVhc2VzT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9pbW11dGFibGUtcmVsZWFzZXMvcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0OiBbXCJHRVQgL29yZ3Mve29yZ31cIl0sXG4gICAgZ2V0SW1tdXRhYmxlUmVsZWFzZXNTZXR0aW5nczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvaW1tdXRhYmxlLXJlbGVhc2VzXCIsXG4gICAgXSxcbiAgICBnZXRJbW11dGFibGVSZWxlYXNlc1NldHRpbmdzUmVwb3NpdG9yaWVzOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9pbW11dGFibGUtcmVsZWFzZXMvcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBnZXRNZW1iZXJzaGlwRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9tZW1iZXJzaGlwcy9vcmdzL3tvcmd9XCJdLFxuICAgIGdldE1lbWJlcnNoaXBGb3JVc2VyOiBbXCJHRVQgL29yZ3Mve29yZ30vbWVtYmVyc2hpcHMve3VzZXJuYW1lfVwiXSxcbiAgICBnZXRPcmdSb2xlOiBbXCJHRVQgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3tyb2xlX2lkfVwiXSxcbiAgICBnZXRPcmdSdWxlc2V0SGlzdG9yeTogW1wiR0VUIC9vcmdzL3tvcmd9L3J1bGVzZXRzL3tydWxlc2V0X2lkfS9oaXN0b3J5XCJdLFxuICAgIGdldE9yZ1J1bGVzZXRWZXJzaW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9ydWxlc2V0cy97cnVsZXNldF9pZH0vaGlzdG9yeS97dmVyc2lvbl9pZH1cIixcbiAgICBdLFxuICAgIGdldFdlYmhvb2s6IFtcIkdFVCAvb3Jncy97b3JnfS9ob29rcy97aG9va19pZH1cIl0sXG4gICAgZ2V0V2ViaG9va0NvbmZpZ0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfS9jb25maWdcIl0sXG4gICAgZ2V0V2ViaG9va0RlbGl2ZXJ5OiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9ob29rcy97aG9va19pZH0vZGVsaXZlcmllcy97ZGVsaXZlcnlfaWR9XCIsXG4gICAgXSxcbiAgICBsaXN0OiBbXCJHRVQgL29yZ2FuaXphdGlvbnNcIl0sXG4gICAgbGlzdEFwcEluc3RhbGxhdGlvbnM6IFtcIkdFVCAvb3Jncy97b3JnfS9pbnN0YWxsYXRpb25zXCJdLFxuICAgIGxpc3RBcnRpZmFjdFN0b3JhZ2VSZWNvcmRzOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hcnRpZmFjdHMve3N1YmplY3RfZGlnZXN0fS9tZXRhZGF0YS9zdG9yYWdlLXJlY29yZHNcIixcbiAgICBdLFxuICAgIGxpc3RBdHRlc3RhdGlvblJlcG9zaXRvcmllczogW1wiR0VUIC9vcmdzL3tvcmd9L2F0dGVzdGF0aW9ucy9yZXBvc2l0b3JpZXNcIl0sXG4gICAgbGlzdEF0dGVzdGF0aW9uczogW1wiR0VUIC9vcmdzL3tvcmd9L2F0dGVzdGF0aW9ucy97c3ViamVjdF9kaWdlc3R9XCJdLFxuICAgIGxpc3RBdHRlc3RhdGlvbnNCdWxrOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vYXR0ZXN0YXRpb25zL2J1bGstbGlzdHs/cGVyX3BhZ2UsYmVmb3JlLGFmdGVyfVwiLFxuICAgIF0sXG4gICAgbGlzdEJsb2NrZWRVc2VyczogW1wiR0VUIC9vcmdzL3tvcmd9L2Jsb2Nrc1wiXSxcbiAgICBsaXN0RmFpbGVkSW52aXRhdGlvbnM6IFtcIkdFVCAvb3Jncy97b3JnfS9mYWlsZWRfaW52aXRhdGlvbnNcIl0sXG4gICAgbGlzdEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvb3Jnc1wiXSxcbiAgICBsaXN0Rm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L29yZ3NcIl0sXG4gICAgbGlzdEludml0YXRpb25UZWFtczogW1wiR0VUIC9vcmdzL3tvcmd9L2ludml0YXRpb25zL3tpbnZpdGF0aW9uX2lkfS90ZWFtc1wiXSxcbiAgICBsaXN0SXNzdWVUeXBlczogW1wiR0VUIC9vcmdzL3tvcmd9L2lzc3VlLXR5cGVzXCJdLFxuICAgIGxpc3RNZW1iZXJzOiBbXCJHRVQgL29yZ3Mve29yZ30vbWVtYmVyc1wiXSxcbiAgICBsaXN0TWVtYmVyc2hpcHNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL21lbWJlcnNoaXBzL29yZ3NcIl0sXG4gICAgbGlzdE9yZ1JvbGVUZWFtczogW1wiR0VUIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlcy97cm9sZV9pZH0vdGVhbXNcIl0sXG4gICAgbGlzdE9yZ1JvbGVVc2VyczogW1wiR0VUIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlcy97cm9sZV9pZH0vdXNlcnNcIl0sXG4gICAgbGlzdE9yZ1JvbGVzOiBbXCJHRVQgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzXCJdLFxuICAgIGxpc3RPcmdhbml6YXRpb25GaW5lR3JhaW5lZFBlcm1pc3Npb25zOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9vcmdhbml6YXRpb24tZmluZS1ncmFpbmVkLXBlcm1pc3Npb25zXCIsXG4gICAgXSxcbiAgICBsaXN0T3V0c2lkZUNvbGxhYm9yYXRvcnM6IFtcIkdFVCAvb3Jncy97b3JnfS9vdXRzaWRlX2NvbGxhYm9yYXRvcnNcIl0sXG4gICAgbGlzdFBhdEdyYW50UmVwb3NpdG9yaWVzOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW5zL3twYXRfaWR9L3JlcG9zaXRvcmllc1wiLFxuICAgIF0sXG4gICAgbGlzdFBhdEdyYW50UmVxdWVzdFJlcG9zaXRvcmllczogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2VuLXJlcXVlc3RzL3twYXRfcmVxdWVzdF9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBsaXN0UGF0R3JhbnRSZXF1ZXN0czogW1wiR0VUIC9vcmdzL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbi1yZXF1ZXN0c1wiXSxcbiAgICBsaXN0UGF0R3JhbnRzOiBbXCJHRVQgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2Vuc1wiXSxcbiAgICBsaXN0UGVuZGluZ0ludml0YXRpb25zOiBbXCJHRVQgL29yZ3Mve29yZ30vaW52aXRhdGlvbnNcIl0sXG4gICAgbGlzdFB1YmxpY01lbWJlcnM6IFtcIkdFVCAvb3Jncy97b3JnfS9wdWJsaWNfbWVtYmVyc1wiXSxcbiAgICBsaXN0U2VjdXJpdHlNYW5hZ2VyVGVhbXM6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3NlY3VyaXR5LW1hbmFnZXJzXCIsXG4gICAgICB7fSxcbiAgICAgIHtcbiAgICAgICAgZGVwcmVjYXRlZDpcbiAgICAgICAgICBcIm9jdG9raXQucmVzdC5vcmdzLmxpc3RTZWN1cml0eU1hbmFnZXJUZWFtcygpIGlzIGRlcHJlY2F0ZWQsIHNlZSBodHRwczovL2RvY3MuZ2l0aHViLmNvbS9yZXN0L29yZ3Mvc2VjdXJpdHktbWFuYWdlcnMjbGlzdC1zZWN1cml0eS1tYW5hZ2VyLXRlYW1zXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgbGlzdFdlYmhvb2tEZWxpdmVyaWVzOiBbXCJHRVQgL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9L2RlbGl2ZXJpZXNcIl0sXG4gICAgbGlzdFdlYmhvb2tzOiBbXCJHRVQgL29yZ3Mve29yZ30vaG9va3NcIl0sXG4gICAgcGluZ1dlYmhvb2s6IFtcIlBPU1QgL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9L3BpbmdzXCJdLFxuICAgIHJlZGVsaXZlcldlYmhvb2tEZWxpdmVyeTogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfS9kZWxpdmVyaWVzL3tkZWxpdmVyeV9pZH0vYXR0ZW1wdHNcIixcbiAgICBdLFxuICAgIHJlbW92ZU1lbWJlcjogW1wiREVMRVRFIC9vcmdzL3tvcmd9L21lbWJlcnMve3VzZXJuYW1lfVwiXSxcbiAgICByZW1vdmVNZW1iZXJzaGlwRm9yVXNlcjogW1wiREVMRVRFIC9vcmdzL3tvcmd9L21lbWJlcnNoaXBzL3t1c2VybmFtZX1cIl0sXG4gICAgcmVtb3ZlT3V0c2lkZUNvbGxhYm9yYXRvcjogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vb3V0c2lkZV9jb2xsYWJvcmF0b3JzL3t1c2VybmFtZX1cIixcbiAgICBdLFxuICAgIHJlbW92ZVB1YmxpY01lbWJlcnNoaXBGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vcHVibGljX21lbWJlcnMve3VzZXJuYW1lfVwiLFxuICAgIF0sXG4gICAgcmVtb3ZlU2VjdXJpdHlNYW5hZ2VyVGVhbTogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vc2VjdXJpdHktbWFuYWdlcnMvdGVhbXMve3RlYW1fc2x1Z31cIixcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICBkZXByZWNhdGVkOlxuICAgICAgICAgIFwib2N0b2tpdC5yZXN0Lm9yZ3MucmVtb3ZlU2VjdXJpdHlNYW5hZ2VyVGVhbSgpIGlzIGRlcHJlY2F0ZWQsIHNlZSBodHRwczovL2RvY3MuZ2l0aHViLmNvbS9yZXN0L29yZ3Mvc2VjdXJpdHktbWFuYWdlcnMjcmVtb3ZlLWEtc2VjdXJpdHktbWFuYWdlci10ZWFtXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgcmV2aWV3UGF0R3JhbnRSZXF1ZXN0OiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2VuLXJlcXVlc3RzL3twYXRfcmVxdWVzdF9pZH1cIixcbiAgICBdLFxuICAgIHJldmlld1BhdEdyYW50UmVxdWVzdHNJbkJ1bGs6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW4tcmVxdWVzdHNcIixcbiAgICBdLFxuICAgIHJldm9rZUFsbE9yZ1JvbGVzVGVhbTogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3RlYW1zL3t0ZWFtX3NsdWd9XCIsXG4gICAgXSxcbiAgICByZXZva2VBbGxPcmdSb2xlc1VzZXI6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlcy91c2Vycy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICByZXZva2VPcmdSb2xlVGVhbTogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vb3JnYW5pemF0aW9uLXJvbGVzL3RlYW1zL3t0ZWFtX3NsdWd9L3tyb2xlX2lkfVwiLFxuICAgIF0sXG4gICAgcmV2b2tlT3JnUm9sZVVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L29yZ2FuaXphdGlvbi1yb2xlcy91c2Vycy97dXNlcm5hbWV9L3tyb2xlX2lkfVwiLFxuICAgIF0sXG4gICAgc2V0SW1tdXRhYmxlUmVsZWFzZXNTZXR0aW5nczogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvaW1tdXRhYmxlLXJlbGVhc2VzXCIsXG4gICAgXSxcbiAgICBzZXRJbW11dGFibGVSZWxlYXNlc1NldHRpbmdzUmVwb3NpdG9yaWVzOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9zZXR0aW5ncy9pbW11dGFibGUtcmVsZWFzZXMvcmVwb3NpdG9yaWVzXCIsXG4gICAgXSxcbiAgICBzZXRNZW1iZXJzaGlwRm9yVXNlcjogW1wiUFVUIC9vcmdzL3tvcmd9L21lbWJlcnNoaXBzL3t1c2VybmFtZX1cIl0sXG4gICAgc2V0UHVibGljTWVtYmVyc2hpcEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9wdWJsaWNfbWVtYmVycy97dXNlcm5hbWV9XCIsXG4gICAgXSxcbiAgICB1bmJsb2NrVXNlcjogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2Jsb2Nrcy97dXNlcm5hbWV9XCJdLFxuICAgIHVwZGF0ZTogW1wiUEFUQ0ggL29yZ3Mve29yZ31cIl0sXG4gICAgdXBkYXRlSXNzdWVUeXBlOiBbXCJQVVQgL29yZ3Mve29yZ30vaXNzdWUtdHlwZXMve2lzc3VlX3R5cGVfaWR9XCJdLFxuICAgIHVwZGF0ZU1lbWJlcnNoaXBGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQQVRDSCAvdXNlci9tZW1iZXJzaGlwcy9vcmdzL3tvcmd9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVQYXRBY2Nlc3M6IFtcIlBPU1QgL29yZ3Mve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2Vucy97cGF0X2lkfVwiXSxcbiAgICB1cGRhdGVQYXRBY2Nlc3NlczogW1wiUE9TVCAvb3Jncy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW5zXCJdLFxuICAgIHVwZGF0ZVdlYmhvb2s6IFtcIlBBVENIIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfVwiXSxcbiAgICB1cGRhdGVXZWJob29rQ29uZmlnRm9yT3JnOiBbXCJQQVRDSCAvb3Jncy97b3JnfS9ob29rcy97aG9va19pZH0vY29uZmlnXCJdLFxuICB9LFxuICBwYWNrYWdlczoge1xuICAgIGRlbGV0ZVBhY2thZ2VGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX1cIixcbiAgICBdLFxuICAgIGRlbGV0ZVBhY2thZ2VGb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9XCIsXG4gICAgXSxcbiAgICBkZWxldGVQYWNrYWdlRm9yVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXJzL3t1c2VybmFtZX0vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX1cIixcbiAgICBdLFxuICAgIGRlbGV0ZVBhY2thZ2VWZXJzaW9uRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVQYWNrYWdlVmVyc2lvbkZvck9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnMve3BhY2thZ2VfdmVyc2lvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZVBhY2thZ2VWZXJzaW9uRm9yVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXJzL3t1c2VybmFtZX0vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnMve3BhY2thZ2VfdmVyc2lvbl9pZH1cIixcbiAgICBdLFxuICAgIGdldEFsbFBhY2thZ2VWZXJzaW9uc0ZvckFQYWNrYWdlT3duZWRCeUFuT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9uc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInBhY2thZ2VzXCIsIFwiZ2V0QWxsUGFja2FnZVZlcnNpb25zRm9yUGFja2FnZU93bmVkQnlPcmdcIl0gfSxcbiAgICBdLFxuICAgIGdldEFsbFBhY2thZ2VWZXJzaW9uc0ZvckFQYWNrYWdlT3duZWRCeVRoZUF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9uc1wiLFxuICAgICAge30sXG4gICAgICB7XG4gICAgICAgIHJlbmFtZWQ6IFtcbiAgICAgICAgICBcInBhY2thZ2VzXCIsXG4gICAgICAgICAgXCJnZXRBbGxQYWNrYWdlVmVyc2lvbnNGb3JQYWNrYWdlT3duZWRCeUF1dGhlbnRpY2F0ZWRVc2VyXCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgZ2V0QWxsUGFja2FnZVZlcnNpb25zRm9yUGFja2FnZU93bmVkQnlBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnNcIixcbiAgICBdLFxuICAgIGdldEFsbFBhY2thZ2VWZXJzaW9uc0ZvclBhY2thZ2VPd25lZEJ5T3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9uc1wiLFxuICAgIF0sXG4gICAgZ2V0QWxsUGFja2FnZVZlcnNpb25zRm9yUGFja2FnZU93bmVkQnlVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9uc1wiLFxuICAgIF0sXG4gICAgZ2V0UGFja2FnZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfVwiLFxuICAgIF0sXG4gICAgZ2V0UGFja2FnZUZvck9yZ2FuaXphdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX1cIixcbiAgICBdLFxuICAgIGdldFBhY2thZ2VGb3JVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfVwiLFxuICAgIF0sXG4gICAgZ2V0UGFja2FnZVZlcnNpb25Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnMve3BhY2thZ2VfdmVyc2lvbl9pZH1cIixcbiAgICBdLFxuICAgIGdldFBhY2thZ2VWZXJzaW9uRm9yT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9ucy97cGFja2FnZV92ZXJzaW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0UGFja2FnZVZlcnNpb25Gb3JVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9ucy97cGFja2FnZV92ZXJzaW9uX2lkfVwiLFxuICAgIF0sXG4gICAgbGlzdERvY2tlck1pZ3JhdGlvbkNvbmZsaWN0aW5nUGFja2FnZXNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvZG9ja2VyL2NvbmZsaWN0c1wiLFxuICAgIF0sXG4gICAgbGlzdERvY2tlck1pZ3JhdGlvbkNvbmZsaWN0aW5nUGFja2FnZXNGb3JPcmdhbml6YXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2RvY2tlci9jb25mbGljdHNcIixcbiAgICBdLFxuICAgIGxpc3REb2NrZXJNaWdyYXRpb25Db25mbGljdGluZ1BhY2thZ2VzRm9yVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZG9ja2VyL2NvbmZsaWN0c1wiLFxuICAgIF0sXG4gICAgbGlzdFBhY2thZ2VzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9wYWNrYWdlc1wiXSxcbiAgICBsaXN0UGFja2FnZXNGb3JPcmdhbml6YXRpb246IFtcIkdFVCAvb3Jncy97b3JnfS9wYWNrYWdlc1wiXSxcbiAgICBsaXN0UGFja2FnZXNGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcGFja2FnZXNcIl0sXG4gICAgcmVzdG9yZVBhY2thZ2VGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQT1NUIC91c2VyL3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3Jlc3RvcmV7P3Rva2VufVwiLFxuICAgIF0sXG4gICAgcmVzdG9yZVBhY2thZ2VGb3JPcmc6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS9yZXN0b3Jlez90b2tlbn1cIixcbiAgICBdLFxuICAgIHJlc3RvcmVQYWNrYWdlRm9yVXNlcjogW1xuICAgICAgXCJQT1NUIC91c2Vycy97dXNlcm5hbWV9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3Jlc3RvcmV7P3Rva2VufVwiLFxuICAgIF0sXG4gICAgcmVzdG9yZVBhY2thZ2VWZXJzaW9uRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUE9TVCAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9ucy97cGFja2FnZV92ZXJzaW9uX2lkfS9yZXN0b3JlXCIsXG4gICAgXSxcbiAgICByZXN0b3JlUGFja2FnZVZlcnNpb25Gb3JPcmc6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9ucy97cGFja2FnZV92ZXJzaW9uX2lkfS9yZXN0b3JlXCIsXG4gICAgXSxcbiAgICByZXN0b3JlUGFja2FnZVZlcnNpb25Gb3JVc2VyOiBbXG4gICAgICBcIlBPU1QgL3VzZXJzL3t1c2VybmFtZX0vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnMve3BhY2thZ2VfdmVyc2lvbl9pZH0vcmVzdG9yZVwiLFxuICAgIF0sXG4gIH0sXG4gIHByaXZhdGVSZWdpc3RyaWVzOiB7XG4gICAgY3JlYXRlT3JnUHJpdmF0ZVJlZ2lzdHJ5OiBbXCJQT1NUIC9vcmdzL3tvcmd9L3ByaXZhdGUtcmVnaXN0cmllc1wiXSxcbiAgICBkZWxldGVPcmdQcml2YXRlUmVnaXN0cnk6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3ByaXZhdGUtcmVnaXN0cmllcy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgICBnZXRPcmdQcml2YXRlUmVnaXN0cnk6IFtcIkdFVCAvb3Jncy97b3JnfS9wcml2YXRlLXJlZ2lzdHJpZXMve3NlY3JldF9uYW1lfVwiXSxcbiAgICBnZXRPcmdQdWJsaWNLZXk6IFtcIkdFVCAvb3Jncy97b3JnfS9wcml2YXRlLXJlZ2lzdHJpZXMvcHVibGljLWtleVwiXSxcbiAgICBsaXN0T3JnUHJpdmF0ZVJlZ2lzdHJpZXM6IFtcIkdFVCAvb3Jncy97b3JnfS9wcml2YXRlLXJlZ2lzdHJpZXNcIl0sXG4gICAgdXBkYXRlT3JnUHJpdmF0ZVJlZ2lzdHJ5OiBbXG4gICAgICBcIlBBVENIIC9vcmdzL3tvcmd9L3ByaXZhdGUtcmVnaXN0cmllcy97c2VjcmV0X25hbWV9XCIsXG4gICAgXSxcbiAgfSxcbiAgcHJvamVjdHM6IHtcbiAgICBhZGRJdGVtRm9yT3JnOiBbXCJQT1NUIC9vcmdzL3tvcmd9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9pdGVtc1wiXSxcbiAgICBhZGRJdGVtRm9yVXNlcjogW1xuICAgICAgXCJQT1NUIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9pdGVtc1wiLFxuICAgIF0sXG4gICAgZGVsZXRlSXRlbUZvck9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zL3tpdGVtX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlSXRlbUZvclVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9pdGVtcy97aXRlbV9pZH1cIixcbiAgICBdLFxuICAgIGdldEZpZWxkRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vZmllbGRzL3tmaWVsZF9pZH1cIixcbiAgICBdLFxuICAgIGdldEZpZWxkRm9yVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2ZpZWxkcy97ZmllbGRfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn1cIl0sXG4gICAgZ2V0Rm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfVwiXSxcbiAgICBnZXRPcmdJdGVtOiBbXCJHRVQgL29yZ3Mve29yZ30vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zL3tpdGVtX2lkfVwiXSxcbiAgICBnZXRVc2VySXRlbTogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zL3tpdGVtX2lkfVwiLFxuICAgIF0sXG4gICAgbGlzdEZpZWxkc0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9maWVsZHNcIl0sXG4gICAgbGlzdEZpZWxkc0ZvclVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9maWVsZHNcIixcbiAgICBdLFxuICAgIGxpc3RGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9wcm9qZWN0c1YyXCJdLFxuICAgIGxpc3RGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMlwiXSxcbiAgICBsaXN0SXRlbXNGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9wcm9qZWN0c1YyL3twcm9qZWN0X251bWJlcn0vaXRlbXNcIl0sXG4gICAgbGlzdEl0ZW1zRm9yVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNWMi97cHJvamVjdF9udW1iZXJ9L2l0ZW1zXCIsXG4gICAgXSxcbiAgICB1cGRhdGVJdGVtRm9yT3JnOiBbXG4gICAgICBcIlBBVENIIC9vcmdzL3tvcmd9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9pdGVtcy97aXRlbV9pZH1cIixcbiAgICBdLFxuICAgIHVwZGF0ZUl0ZW1Gb3JVc2VyOiBbXG4gICAgICBcIlBBVENIIC91c2Vycy97dXNlcm5hbWV9L3Byb2plY3RzVjIve3Byb2plY3RfbnVtYmVyfS9pdGVtcy97aXRlbV9pZH1cIixcbiAgICBdLFxuICB9LFxuICBwdWxsczoge1xuICAgIGNoZWNrSWZNZXJnZWQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9tZXJnZVwiXSxcbiAgICBjcmVhdGU6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzXCJdLFxuICAgIGNyZWF0ZVJlcGx5Rm9yUmV2aWV3Q29tbWVudDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZXBsaWVzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVSZXZpZXc6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3c1wiXSxcbiAgICBjcmVhdGVSZXZpZXdDb21tZW50OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vY29tbWVudHNcIixcbiAgICBdLFxuICAgIGRlbGV0ZVBlbmRpbmdSZXZpZXc6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3Mve3Jldmlld19pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZVJldmlld0NvbW1lbnQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy9jb21tZW50cy97Y29tbWVudF9pZH1cIixcbiAgICBdLFxuICAgIGRpc21pc3NSZXZpZXc6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3Mve3Jldmlld19pZH0vZGlzbWlzc2Fsc1wiLFxuICAgIF0sXG4gICAgZ2V0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn1cIl0sXG4gICAgZ2V0UmV2aWV3OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXZpZXdzL3tyZXZpZXdfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRSZXZpZXdDb21tZW50OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL2NvbW1lbnRzL3tjb21tZW50X2lkfVwiXSxcbiAgICBsaXN0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzXCJdLFxuICAgIGxpc3RDb21tZW50c0ZvclJldmlldzogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3cy97cmV2aWV3X2lkfS9jb21tZW50c1wiLFxuICAgIF0sXG4gICAgbGlzdENvbW1pdHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb21taXRzXCJdLFxuICAgIGxpc3RGaWxlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L2ZpbGVzXCJdLFxuICAgIGxpc3RSZXF1ZXN0ZWRSZXZpZXdlcnM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3JlcXVlc3RlZF9yZXZpZXdlcnNcIixcbiAgICBdLFxuICAgIGxpc3RSZXZpZXdDb21tZW50czogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vY29tbWVudHNcIixcbiAgICBdLFxuICAgIGxpc3RSZXZpZXdDb21tZW50c0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHNcIl0sXG4gICAgbGlzdFJldmlld3M6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXZpZXdzXCJdLFxuICAgIG1lcmdlOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vbWVyZ2VcIl0sXG4gICAgcmVtb3ZlUmVxdWVzdGVkUmV2aWV3ZXJzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXF1ZXN0ZWRfcmV2aWV3ZXJzXCIsXG4gICAgXSxcbiAgICByZXF1ZXN0UmV2aWV3ZXJzOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmVxdWVzdGVkX3Jldmlld2Vyc1wiLFxuICAgIF0sXG4gICAgc3VibWl0UmV2aWV3OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3cy97cmV2aWV3X2lkfS9ldmVudHNcIixcbiAgICBdLFxuICAgIHVwZGF0ZTogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn1cIl0sXG4gICAgdXBkYXRlQnJhbmNoOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS91cGRhdGUtYnJhbmNoXCIsXG4gICAgXSxcbiAgICB1cGRhdGVSZXZpZXc6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3Mve3Jldmlld19pZH1cIixcbiAgICBdLFxuICAgIHVwZGF0ZVJldmlld0NvbW1lbnQ6IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL2NvbW1lbnRzL3tjb21tZW50X2lkfVwiLFxuICAgIF0sXG4gIH0sXG4gIHJhdGVMaW1pdDogeyBnZXQ6IFtcIkdFVCAvcmF0ZV9saW1pdFwiXSB9LFxuICByZWFjdGlvbnM6IHtcbiAgICBjcmVhdGVGb3JDb21taXRDb21tZW50OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGNyZWF0ZUZvcklzc3VlOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGNyZWF0ZUZvcklzc3VlQ29tbWVudDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlRm9yUHVsbFJlcXVlc3RSZXZpZXdDb21tZW50OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGNyZWF0ZUZvclJlbGVhc2U6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMve3JlbGVhc2VfaWR9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlRm9yVGVhbURpc2N1c3Npb25Db21tZW50SW5Pcmc6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzL3tjb21tZW50X251bWJlcn0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBjcmVhdGVGb3JUZWFtRGlzY3Vzc2lvbkluT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGRlbGV0ZUZvckNvbW1pdENvbW1lbnQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zL3tyZWFjdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUZvcklzc3VlOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3JlYWN0aW9ucy97cmVhY3Rpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVGb3JJc3N1ZUNvbW1lbnQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9ucy97cmVhY3Rpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVGb3JQdWxsUmVxdWVzdENvbW1lbnQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zL3tyZWFjdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUZvclJlbGVhc2U6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH0vcmVhY3Rpb25zL3tyZWFjdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUZvclRlYW1EaXNjdXNzaW9uOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L3JlYWN0aW9ucy97cmVhY3Rpb25faWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVGb3JUZWFtRGlzY3Vzc2lvbkNvbW1lbnQ6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfbnVtYmVyfS9yZWFjdGlvbnMve3JlYWN0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgbGlzdEZvckNvbW1pdENvbW1lbnQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBsaXN0Rm9ySXNzdWU6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3JlYWN0aW9uc1wiXSxcbiAgICBsaXN0Rm9ySXNzdWVDb21tZW50OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGxpc3RGb3JQdWxsUmVxdWVzdFJldmlld0NvbW1lbnQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgICBsaXN0Rm9yUmVsZWFzZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfS9yZWFjdGlvbnNcIixcbiAgICBdLFxuICAgIGxpc3RGb3JUZWFtRGlzY3Vzc2lvbkNvbW1lbnRJbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9udW1iZXJ9L3JlYWN0aW9uc1wiLFxuICAgIF0sXG4gICAgbGlzdEZvclRlYW1EaXNjdXNzaW9uSW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vcmVhY3Rpb25zXCIsXG4gICAgXSxcbiAgfSxcbiAgcmVwb3M6IHtcbiAgICBhY2NlcHRJbnZpdGF0aW9uOiBbXG4gICAgICBcIlBBVENIIC91c2VyL3JlcG9zaXRvcnlfaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wicmVwb3NcIiwgXCJhY2NlcHRJbnZpdGF0aW9uRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGFjY2VwdEludml0YXRpb25Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQQVRDSCAvdXNlci9yZXBvc2l0b3J5X2ludml0YXRpb25zL3tpbnZpdGF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgYWRkQXBwQWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL2FwcHNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwiYXBwc1wiIH0sXG4gICAgXSxcbiAgICBhZGRDb2xsYWJvcmF0b3I6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29sbGFib3JhdG9ycy97dXNlcm5hbWV9XCJdLFxuICAgIGFkZFN0YXR1c0NoZWNrQ29udGV4dHM6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zdGF0dXNfY2hlY2tzL2NvbnRleHRzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcImNvbnRleHRzXCIgfSxcbiAgICBdLFxuICAgIGFkZFRlYW1BY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvdGVhbXNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwidGVhbXNcIiB9LFxuICAgIF0sXG4gICAgYWRkVXNlckFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy91c2Vyc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJ1c2Vyc1wiIH0sXG4gICAgXSxcbiAgICBjYW5jZWxQYWdlc0RlcGxveW1lbnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXMvZGVwbG95bWVudHMve3BhZ2VzX2RlcGxveW1lbnRfaWR9L2NhbmNlbFwiLFxuICAgIF0sXG4gICAgY2hlY2tBdXRvbWF0ZWRTZWN1cml0eUZpeGVzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXV0b21hdGVkLXNlY3VyaXR5LWZpeGVzXCIsXG4gICAgXSxcbiAgICBjaGVja0NvbGxhYm9yYXRvcjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2xsYWJvcmF0b3JzL3t1c2VybmFtZX1cIl0sXG4gICAgY2hlY2tJbW11dGFibGVSZWxlYXNlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbW11dGFibGUtcmVsZWFzZXNcIl0sXG4gICAgY2hlY2tQcml2YXRlVnVsbmVyYWJpbGl0eVJlcG9ydGluZzogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3ByaXZhdGUtdnVsbmVyYWJpbGl0eS1yZXBvcnRpbmdcIixcbiAgICBdLFxuICAgIGNoZWNrVnVsbmVyYWJpbGl0eUFsZXJ0czogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3Z1bG5lcmFiaWxpdHktYWxlcnRzXCIsXG4gICAgXSxcbiAgICBjb2Rlb3duZXJzRXJyb3JzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVvd25lcnMvZXJyb3JzXCJdLFxuICAgIGNvbXBhcmVDb21taXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbXBhcmUve2Jhc2V9Li4ue2hlYWR9XCJdLFxuICAgIGNvbXBhcmVDb21taXRzV2l0aEJhc2VoZWFkOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tcGFyZS97YmFzZWhlYWR9XCIsXG4gICAgXSxcbiAgICBjcmVhdGVBdHRlc3RhdGlvbjogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXR0ZXN0YXRpb25zXCJdLFxuICAgIGNyZWF0ZUF1dG9saW5rOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdXRvbGlua3NcIl0sXG4gICAgY3JlYXRlQ29tbWl0Q29tbWVudDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tjb21taXRfc2hhfS9jb21tZW50c1wiLFxuICAgIF0sXG4gICAgY3JlYXRlQ29tbWl0U2lnbmF0dXJlUHJvdGVjdGlvbjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3NpZ25hdHVyZXNcIixcbiAgICBdLFxuICAgIGNyZWF0ZUNvbW1pdFN0YXR1czogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3RhdHVzZXMve3NoYX1cIl0sXG4gICAgY3JlYXRlRGVwbG95S2V5OiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9rZXlzXCJdLFxuICAgIGNyZWF0ZURlcGxveW1lbnQ6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzXCJdLFxuICAgIGNyZWF0ZURlcGxveW1lbnRCcmFuY2hQb2xpY3k6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50LWJyYW5jaC1wb2xpY2llc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlRGVwbG95bWVudFByb3RlY3Rpb25SdWxlOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudF9wcm90ZWN0aW9uX3J1bGVzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVEZXBsb3ltZW50U3RhdHVzOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzL3tkZXBsb3ltZW50X2lkfS9zdGF0dXNlc1wiLFxuICAgIF0sXG4gICAgY3JlYXRlRGlzcGF0Y2hFdmVudDogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGlzcGF0Y2hlc1wiXSxcbiAgICBjcmVhdGVGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9yZXBvc1wiXSxcbiAgICBjcmVhdGVGb3JrOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9mb3Jrc1wiXSxcbiAgICBjcmVhdGVJbk9yZzogW1wiUE9TVCAvb3Jncy97b3JnfS9yZXBvc1wiXSxcbiAgICBjcmVhdGVPclVwZGF0ZUVudmlyb25tZW50OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfVwiLFxuICAgIF0sXG4gICAgY3JlYXRlT3JVcGRhdGVGaWxlQ29udGVudHM6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29udGVudHMve3BhdGh9XCJdLFxuICAgIGNyZWF0ZU9yZ1J1bGVzZXQ6IFtcIlBPU1QgL29yZ3Mve29yZ30vcnVsZXNldHNcIl0sXG4gICAgY3JlYXRlUGFnZXNEZXBsb3ltZW50OiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlcy9kZXBsb3ltZW50c1wiXSxcbiAgICBjcmVhdGVQYWdlc1NpdGU6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzXCJdLFxuICAgIGNyZWF0ZVJlbGVhc2U6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzXCJdLFxuICAgIGNyZWF0ZVJlcG9SdWxlc2V0OiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0c1wiXSxcbiAgICBjcmVhdGVVc2luZ1RlbXBsYXRlOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3t0ZW1wbGF0ZV9vd25lcn0ve3RlbXBsYXRlX3JlcG99L2dlbmVyYXRlXCIsXG4gICAgXSxcbiAgICBjcmVhdGVXZWJob29rOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rc1wiXSxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzRm9yUmVwb3NDcmVhdGVPclVwZGF0ZVJlcG9zaXRvcnlWYWx1ZXM6IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L3Byb3BlcnRpZXMvdmFsdWVzXCIsXG4gICAgXSxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzRm9yUmVwb3NHZXRSZXBvc2l0b3J5VmFsdWVzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHJvcGVydGllcy92YWx1ZXNcIixcbiAgICBdLFxuICAgIGRlY2xpbmVJbnZpdGF0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9yZXBvc2l0b3J5X2ludml0YXRpb25zL3tpbnZpdGF0aW9uX2lkfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInJlcG9zXCIsIFwiZGVjbGluZUludml0YXRpb25Gb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgZGVjbGluZUludml0YXRpb25Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvcmVwb3NpdG9yeV9pbnZpdGF0aW9ucy97aW52aXRhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZTogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfVwiXSxcbiAgICBkZWxldGVBY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9uc1wiLFxuICAgIF0sXG4gICAgZGVsZXRlQWRtaW5CcmFuY2hQcm90ZWN0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9lbmZvcmNlX2FkbWluc1wiLFxuICAgIF0sXG4gICAgZGVsZXRlQW5FbnZpcm9ubWVudDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUF1dG9saW5rOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2F1dG9saW5rcy97YXV0b2xpbmtfaWR9XCJdLFxuICAgIGRlbGV0ZUJyYW5jaFByb3RlY3Rpb246IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uXCIsXG4gICAgXSxcbiAgICBkZWxldGVDb21taXRDb21tZW50OiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzL3tjb21tZW50X2lkfVwiXSxcbiAgICBkZWxldGVDb21taXRTaWduYXR1cmVQcm90ZWN0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zaWduYXR1cmVzXCIsXG4gICAgXSxcbiAgICBkZWxldGVEZXBsb3lLZXk6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30va2V5cy97a2V5X2lkfVwiXSxcbiAgICBkZWxldGVEZXBsb3ltZW50OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwbG95bWVudHMve2RlcGxveW1lbnRfaWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVEZXBsb3ltZW50QnJhbmNoUG9saWN5OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50LWJyYW5jaC1wb2xpY2llcy97YnJhbmNoX3BvbGljeV9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUZpbGU6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vY29udGVudHMve3BhdGh9XCJdLFxuICAgIGRlbGV0ZUludml0YXRpb246IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbnZpdGF0aW9ucy97aW52aXRhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZU9yZ1J1bGVzZXQ6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9ydWxlc2V0cy97cnVsZXNldF9pZH1cIl0sXG4gICAgZGVsZXRlUGFnZXNTaXRlOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzXCJdLFxuICAgIGRlbGV0ZVB1bGxSZXF1ZXN0UmV2aWV3UHJvdGVjdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfcHVsbF9yZXF1ZXN0X3Jldmlld3NcIixcbiAgICBdLFxuICAgIGRlbGV0ZVJlbGVhc2U6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMve3JlbGVhc2VfaWR9XCJdLFxuICAgIGRlbGV0ZVJlbGVhc2VBc3NldDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL2Fzc2V0cy97YXNzZXRfaWR9XCIsXG4gICAgXSxcbiAgICBkZWxldGVSZXBvUnVsZXNldDogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0cy97cnVsZXNldF9pZH1cIl0sXG4gICAgZGVsZXRlV2ViaG9vazogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH1cIl0sXG4gICAgZGlzYWJsZUF1dG9tYXRlZFNlY3VyaXR5Rml4ZXM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdXRvbWF0ZWQtc2VjdXJpdHktZml4ZXNcIixcbiAgICBdLFxuICAgIGRpc2FibGVEZXBsb3ltZW50UHJvdGVjdGlvblJ1bGU6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnRfcHJvdGVjdGlvbl9ydWxlcy97cHJvdGVjdGlvbl9ydWxlX2lkfVwiLFxuICAgIF0sXG4gICAgZGlzYWJsZUltbXV0YWJsZVJlbGVhc2VzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaW1tdXRhYmxlLXJlbGVhc2VzXCIsXG4gICAgXSxcbiAgICBkaXNhYmxlUHJpdmF0ZVZ1bG5lcmFiaWxpdHlSZXBvcnRpbmc6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wcml2YXRlLXZ1bG5lcmFiaWxpdHktcmVwb3J0aW5nXCIsXG4gICAgXSxcbiAgICBkaXNhYmxlVnVsbmVyYWJpbGl0eUFsZXJ0czogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3Z1bG5lcmFiaWxpdHktYWxlcnRzXCIsXG4gICAgXSxcbiAgICBkb3dubG9hZEFyY2hpdmU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS96aXBiYWxsL3tyZWZ9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wicmVwb3NcIiwgXCJkb3dubG9hZFppcGJhbGxBcmNoaXZlXCJdIH0sXG4gICAgXSxcbiAgICBkb3dubG9hZFRhcmJhbGxBcmNoaXZlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RhcmJhbGwve3JlZn1cIl0sXG4gICAgZG93bmxvYWRaaXBiYWxsQXJjaGl2ZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS96aXBiYWxsL3tyZWZ9XCJdLFxuICAgIGVuYWJsZUF1dG9tYXRlZFNlY3VyaXR5Rml4ZXM6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdXRvbWF0ZWQtc2VjdXJpdHktZml4ZXNcIixcbiAgICBdLFxuICAgIGVuYWJsZUltbXV0YWJsZVJlbGVhc2VzOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ltbXV0YWJsZS1yZWxlYXNlc1wiXSxcbiAgICBlbmFibGVQcml2YXRlVnVsbmVyYWJpbGl0eVJlcG9ydGluZzogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3ByaXZhdGUtdnVsbmVyYWJpbGl0eS1yZXBvcnRpbmdcIixcbiAgICBdLFxuICAgIGVuYWJsZVZ1bG5lcmFiaWxpdHlBbGVydHM6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS92dWxuZXJhYmlsaXR5LWFsZXJ0c1wiLFxuICAgIF0sXG4gICAgZ2VuZXJhdGVSZWxlYXNlTm90ZXM6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMvZ2VuZXJhdGUtbm90ZXNcIixcbiAgICBdLFxuICAgIGdldDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfVwiXSxcbiAgICBnZXRBY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9uc1wiLFxuICAgIF0sXG4gICAgZ2V0QWRtaW5CcmFuY2hQcm90ZWN0aW9uOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9lbmZvcmNlX2FkbWluc1wiLFxuICAgIF0sXG4gICAgZ2V0QWxsRGVwbG95bWVudFByb3RlY3Rpb25SdWxlczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudF9wcm90ZWN0aW9uX3J1bGVzXCIsXG4gICAgXSxcbiAgICBnZXRBbGxFbnZpcm9ubWVudHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzXCJdLFxuICAgIGdldEFsbFN0YXR1c0NoZWNrQ29udGV4dHM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3N0YXR1c19jaGVja3MvY29udGV4dHNcIixcbiAgICBdLFxuICAgIGdldEFsbFRvcGljczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90b3BpY3NcIl0sXG4gICAgZ2V0QXBwc1dpdGhBY2Nlc3NUb1Byb3RlY3RlZEJyYW5jaDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL2FwcHNcIixcbiAgICBdLFxuICAgIGdldEF1dG9saW5rOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2F1dG9saW5rcy97YXV0b2xpbmtfaWR9XCJdLFxuICAgIGdldEJyYW5jaDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofVwiXSxcbiAgICBnZXRCcmFuY2hQcm90ZWN0aW9uOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvblwiLFxuICAgIF0sXG4gICAgZ2V0QnJhbmNoUnVsZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXMvYnJhbmNoZXMve2JyYW5jaH1cIl0sXG4gICAgZ2V0Q2xvbmVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RyYWZmaWMvY2xvbmVzXCJdLFxuICAgIGdldENvZGVGcmVxdWVuY3lTdGF0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdGF0cy9jb2RlX2ZyZXF1ZW5jeVwiXSxcbiAgICBnZXRDb2xsYWJvcmF0b3JQZXJtaXNzaW9uTGV2ZWw6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2xsYWJvcmF0b3JzL3t1c2VybmFtZX0vcGVybWlzc2lvblwiLFxuICAgIF0sXG4gICAgZ2V0Q29tYmluZWRTdGF0dXNGb3JSZWY6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97cmVmfS9zdGF0dXNcIl0sXG4gICAgZ2V0Q29tbWl0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn1cIl0sXG4gICAgZ2V0Q29tbWl0QWN0aXZpdHlTdGF0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdGF0cy9jb21taXRfYWN0aXZpdHlcIl0sXG4gICAgZ2V0Q29tbWl0Q29tbWVudDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gICAgZ2V0Q29tbWl0U2lnbmF0dXJlUHJvdGVjdGlvbjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc2lnbmF0dXJlc1wiLFxuICAgIF0sXG4gICAgZ2V0Q29tbXVuaXR5UHJvZmlsZU1ldHJpY3M6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbXVuaXR5L3Byb2ZpbGVcIl0sXG4gICAgZ2V0Q29udGVudDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250ZW50cy97cGF0aH1cIl0sXG4gICAgZ2V0Q29udHJpYnV0b3JzU3RhdHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3RhdHMvY29udHJpYnV0b3JzXCJdLFxuICAgIGdldEN1c3RvbURlcGxveW1lbnRQcm90ZWN0aW9uUnVsZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudF9wcm90ZWN0aW9uX3J1bGVzL3twcm90ZWN0aW9uX3J1bGVfaWR9XCIsXG4gICAgXSxcbiAgICBnZXREZXBsb3lLZXk6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30va2V5cy97a2V5X2lkfVwiXSxcbiAgICBnZXREZXBsb3ltZW50OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzL3tkZXBsb3ltZW50X2lkfVwiXSxcbiAgICBnZXREZXBsb3ltZW50QnJhbmNoUG9saWN5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50LWJyYW5jaC1wb2xpY2llcy97YnJhbmNoX3BvbGljeV9pZH1cIixcbiAgICBdLFxuICAgIGdldERlcGxveW1lbnRTdGF0dXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBsb3ltZW50cy97ZGVwbG95bWVudF9pZH0vc3RhdHVzZXMve3N0YXR1c19pZH1cIixcbiAgICBdLFxuICAgIGdldEVudmlyb25tZW50OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfVwiLFxuICAgIF0sXG4gICAgZ2V0TGF0ZXN0UGFnZXNCdWlsZDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlcy9idWlsZHMvbGF0ZXN0XCJdLFxuICAgIGdldExhdGVzdFJlbGVhc2U6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMvbGF0ZXN0XCJdLFxuICAgIGdldE9yZ1J1bGVTdWl0ZTogW1wiR0VUIC9vcmdzL3tvcmd9L3J1bGVzZXRzL3J1bGUtc3VpdGVzL3tydWxlX3N1aXRlX2lkfVwiXSxcbiAgICBnZXRPcmdSdWxlU3VpdGVzOiBbXCJHRVQgL29yZ3Mve29yZ30vcnVsZXNldHMvcnVsZS1zdWl0ZXNcIl0sXG4gICAgZ2V0T3JnUnVsZXNldDogW1wiR0VUIC9vcmdzL3tvcmd9L3J1bGVzZXRzL3tydWxlc2V0X2lkfVwiXSxcbiAgICBnZXRPcmdSdWxlc2V0czogW1wiR0VUIC9vcmdzL3tvcmd9L3J1bGVzZXRzXCJdLFxuICAgIGdldFBhZ2VzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzXCJdLFxuICAgIGdldFBhZ2VzQnVpbGQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXMvYnVpbGRzL3tidWlsZF9pZH1cIl0sXG4gICAgZ2V0UGFnZXNEZXBsb3ltZW50OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXMvZGVwbG95bWVudHMve3BhZ2VzX2RlcGxveW1lbnRfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRQYWdlc0hlYWx0aENoZWNrOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2hlYWx0aFwiXSxcbiAgICBnZXRQYXJ0aWNpcGF0aW9uU3RhdHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3RhdHMvcGFydGljaXBhdGlvblwiXSxcbiAgICBnZXRQdWxsUmVxdWVzdFJldmlld1Byb3RlY3Rpb246IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3B1bGxfcmVxdWVzdF9yZXZpZXdzXCIsXG4gICAgXSxcbiAgICBnZXRQdW5jaENhcmRTdGF0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdGF0cy9wdW5jaF9jYXJkXCJdLFxuICAgIGdldFJlYWRtZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWFkbWVcIl0sXG4gICAgZ2V0UmVhZG1lSW5EaXJlY3Rvcnk6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVhZG1lL3tkaXJ9XCJdLFxuICAgIGdldFJlbGVhc2U6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMve3JlbGVhc2VfaWR9XCJdLFxuICAgIGdldFJlbGVhc2VBc3NldDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy9hc3NldHMve2Fzc2V0X2lkfVwiXSxcbiAgICBnZXRSZWxlYXNlQnlUYWc6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMvdGFncy97dGFnfVwiXSxcbiAgICBnZXRSZXBvUnVsZVN1aXRlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHMvcnVsZS1zdWl0ZXMve3J1bGVfc3VpdGVfaWR9XCIsXG4gICAgXSxcbiAgICBnZXRSZXBvUnVsZVN1aXRlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0cy9ydWxlLXN1aXRlc1wiXSxcbiAgICBnZXRSZXBvUnVsZXNldDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0cy97cnVsZXNldF9pZH1cIl0sXG4gICAgZ2V0UmVwb1J1bGVzZXRIaXN0b3J5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHMve3J1bGVzZXRfaWR9L2hpc3RvcnlcIixcbiAgICBdLFxuICAgIGdldFJlcG9SdWxlc2V0VmVyc2lvbjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzL3tydWxlc2V0X2lkfS9oaXN0b3J5L3t2ZXJzaW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZ2V0UmVwb1J1bGVzZXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzXCJdLFxuICAgIGdldFN0YXR1c0NoZWNrc1Byb3RlY3Rpb246IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3N0YXR1c19jaGVja3NcIixcbiAgICBdLFxuICAgIGdldFRlYW1zV2l0aEFjY2Vzc1RvUHJvdGVjdGVkQnJhbmNoOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvdGVhbXNcIixcbiAgICBdLFxuICAgIGdldFRvcFBhdGhzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RyYWZmaWMvcG9wdWxhci9wYXRoc1wiXSxcbiAgICBnZXRUb3BSZWZlcnJlcnM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdHJhZmZpYy9wb3B1bGFyL3JlZmVycmVyc1wiXSxcbiAgICBnZXRVc2Vyc1dpdGhBY2Nlc3NUb1Byb3RlY3RlZEJyYW5jaDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL3VzZXJzXCIsXG4gICAgXSxcbiAgICBnZXRWaWV3czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90cmFmZmljL3ZpZXdzXCJdLFxuICAgIGdldFdlYmhvb2s6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9XCJdLFxuICAgIGdldFdlYmhvb2tDb25maWdGb3JSZXBvOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9L2NvbmZpZ1wiLFxuICAgIF0sXG4gICAgZ2V0V2ViaG9va0RlbGl2ZXJ5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9L2RlbGl2ZXJpZXMve2RlbGl2ZXJ5X2lkfVwiLFxuICAgIF0sXG4gICAgbGlzdEFjdGl2aXRpZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aXZpdHlcIl0sXG4gICAgbGlzdEF0dGVzdGF0aW9uczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2F0dGVzdGF0aW9ucy97c3ViamVjdF9kaWdlc3R9XCIsXG4gICAgXSxcbiAgICBsaXN0QXV0b2xpbmtzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2F1dG9saW5rc1wiXSxcbiAgICBsaXN0QnJhbmNoZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXNcIl0sXG4gICAgbGlzdEJyYW5jaGVzRm9ySGVhZENvbW1pdDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve2NvbW1pdF9zaGF9L2JyYW5jaGVzLXdoZXJlLWhlYWRcIixcbiAgICBdLFxuICAgIGxpc3RDb2xsYWJvcmF0b3JzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbGxhYm9yYXRvcnNcIl0sXG4gICAgbGlzdENvbW1lbnRzRm9yQ29tbWl0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97Y29tbWl0X3NoYX0vY29tbWVudHNcIixcbiAgICBdLFxuICAgIGxpc3RDb21taXRDb21tZW50c0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWVudHNcIl0sXG4gICAgbGlzdENvbW1pdFN0YXR1c2VzRm9yUmVmOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97cmVmfS9zdGF0dXNlc1wiLFxuICAgIF0sXG4gICAgbGlzdENvbW1pdHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0c1wiXSxcbiAgICBsaXN0Q29udHJpYnV0b3JzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRyaWJ1dG9yc1wiXSxcbiAgICBsaXN0Q3VzdG9tRGVwbG95bWVudFJ1bGVJbnRlZ3JhdGlvbnM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnRfcHJvdGVjdGlvbl9ydWxlcy9hcHBzXCIsXG4gICAgXSxcbiAgICBsaXN0RGVwbG95S2V5czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9rZXlzXCJdLFxuICAgIGxpc3REZXBsb3ltZW50QnJhbmNoUG9saWNpZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnQtYnJhbmNoLXBvbGljaWVzXCIsXG4gICAgXSxcbiAgICBsaXN0RGVwbG95bWVudFN0YXR1c2VzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwbG95bWVudHMve2RlcGxveW1lbnRfaWR9L3N0YXR1c2VzXCIsXG4gICAgXSxcbiAgICBsaXN0RGVwbG95bWVudHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwbG95bWVudHNcIl0sXG4gICAgbGlzdEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvcmVwb3NcIl0sXG4gICAgbGlzdEZvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3JlcG9zXCJdLFxuICAgIGxpc3RGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcmVwb3NcIl0sXG4gICAgbGlzdEZvcmtzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ZvcmtzXCJdLFxuICAgIGxpc3RJbnZpdGF0aW9uczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbnZpdGF0aW9uc1wiXSxcbiAgICBsaXN0SW52aXRhdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3JlcG9zaXRvcnlfaW52aXRhdGlvbnNcIl0sXG4gICAgbGlzdExhbmd1YWdlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9sYW5ndWFnZXNcIl0sXG4gICAgbGlzdFBhZ2VzQnVpbGRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2J1aWxkc1wiXSxcbiAgICBsaXN0UHVibGljOiBbXCJHRVQgL3JlcG9zaXRvcmllc1wiXSxcbiAgICBsaXN0UHVsbFJlcXVlc3RzQXNzb2NpYXRlZFdpdGhDb21taXQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tjb21taXRfc2hhfS9wdWxsc1wiLFxuICAgIF0sXG4gICAgbGlzdFJlbGVhc2VBc3NldHM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH0vYXNzZXRzXCIsXG4gICAgXSxcbiAgICBsaXN0UmVsZWFzZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXNcIl0sXG4gICAgbGlzdFRhZ3M6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdGFnc1wiXSxcbiAgICBsaXN0VGVhbXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdGVhbXNcIl0sXG4gICAgbGlzdFdlYmhvb2tEZWxpdmVyaWVzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9L2RlbGl2ZXJpZXNcIixcbiAgICBdLFxuICAgIGxpc3RXZWJob29rczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rc1wiXSxcbiAgICBtZXJnZTogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vbWVyZ2VzXCJdLFxuICAgIG1lcmdlVXBzdHJlYW06IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L21lcmdlLXVwc3RyZWFtXCJdLFxuICAgIHBpbmdXZWJob29rOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH0vcGluZ3NcIl0sXG4gICAgcmVkZWxpdmVyV2ViaG9va0RlbGl2ZXJ5OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfS9kZWxpdmVyaWVzL3tkZWxpdmVyeV9pZH0vYXR0ZW1wdHNcIixcbiAgICBdLFxuICAgIHJlbW92ZUFwcEFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL2FwcHNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwiYXBwc1wiIH0sXG4gICAgXSxcbiAgICByZW1vdmVDb2xsYWJvcmF0b3I6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2xsYWJvcmF0b3JzL3t1c2VybmFtZX1cIixcbiAgICBdLFxuICAgIHJlbW92ZVN0YXR1c0NoZWNrQ29udGV4dHM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3N0YXR1c19jaGVja3MvY29udGV4dHNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwiY29udGV4dHNcIiB9LFxuICAgIF0sXG4gICAgcmVtb3ZlU3RhdHVzQ2hlY2tQcm90ZWN0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zdGF0dXNfY2hlY2tzXCIsXG4gICAgXSxcbiAgICByZW1vdmVUZWFtQWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvdGVhbXNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwidGVhbXNcIiB9LFxuICAgIF0sXG4gICAgcmVtb3ZlVXNlckFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL3VzZXJzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcInVzZXJzXCIgfSxcbiAgICBdLFxuICAgIHJlbmFtZUJyYW5jaDogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcmVuYW1lXCJdLFxuICAgIHJlcGxhY2VBbGxUb3BpY3M6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vdG9waWNzXCJdLFxuICAgIHJlcXVlc3RQYWdlc0J1aWxkOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlcy9idWlsZHNcIl0sXG4gICAgc2V0QWRtaW5CcmFuY2hQcm90ZWN0aW9uOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vZW5mb3JjZV9hZG1pbnNcIixcbiAgICBdLFxuICAgIHNldEFwcEFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL2FwcHNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwiYXBwc1wiIH0sXG4gICAgXSxcbiAgICBzZXRTdGF0dXNDaGVja0NvbnRleHRzOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zdGF0dXNfY2hlY2tzL2NvbnRleHRzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcImNvbnRleHRzXCIgfSxcbiAgICBdLFxuICAgIHNldFRlYW1BY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy90ZWFtc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJ0ZWFtc1wiIH0sXG4gICAgXSxcbiAgICBzZXRVc2VyQWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvdXNlcnNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwidXNlcnNcIiB9LFxuICAgIF0sXG4gICAgdGVzdFB1c2hXZWJob29rOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH0vdGVzdHNcIl0sXG4gICAgdHJhbnNmZXI6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RyYW5zZmVyXCJdLFxuICAgIHVwZGF0ZTogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99XCJdLFxuICAgIHVwZGF0ZUJyYW5jaFByb3RlY3Rpb246IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uXCIsXG4gICAgXSxcbiAgICB1cGRhdGVDb21taXRDb21tZW50OiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWVudHMve2NvbW1lbnRfaWR9XCJdLFxuICAgIHVwZGF0ZURlcGxveW1lbnRCcmFuY2hQb2xpY3k6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnQtYnJhbmNoLXBvbGljaWVzL3ticmFuY2hfcG9saWN5X2lkfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlSW5mb3JtYXRpb25BYm91dFBhZ2VzU2l0ZTogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlc1wiXSxcbiAgICB1cGRhdGVJbnZpdGF0aW9uOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbnZpdGF0aW9ucy97aW52aXRhdGlvbl9pZH1cIixcbiAgICBdLFxuICAgIHVwZGF0ZU9yZ1J1bGVzZXQ6IFtcIlBVVCAvb3Jncy97b3JnfS9ydWxlc2V0cy97cnVsZXNldF9pZH1cIl0sXG4gICAgdXBkYXRlUHVsbFJlcXVlc3RSZXZpZXdQcm90ZWN0aW9uOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3B1bGxfcmVxdWVzdF9yZXZpZXdzXCIsXG4gICAgXSxcbiAgICB1cGRhdGVSZWxlYXNlOiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMve3JlbGVhc2VfaWR9XCJdLFxuICAgIHVwZGF0ZVJlbGVhc2VBc3NldDogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMvYXNzZXRzL3thc3NldF9pZH1cIixcbiAgICBdLFxuICAgIHVwZGF0ZVJlcG9SdWxlc2V0OiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzZXRzL3tydWxlc2V0X2lkfVwiXSxcbiAgICB1cGRhdGVTdGF0dXNDaGVja1BvdGVjdGlvbjogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zdGF0dXNfY2hlY2tzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wicmVwb3NcIiwgXCJ1cGRhdGVTdGF0dXNDaGVja1Byb3RlY3Rpb25cIl0gfSxcbiAgICBdLFxuICAgIHVwZGF0ZVN0YXR1c0NoZWNrUHJvdGVjdGlvbjogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zdGF0dXNfY2hlY2tzXCIsXG4gICAgXSxcbiAgICB1cGRhdGVXZWJob29rOiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9XCJdLFxuICAgIHVwZGF0ZVdlYmhvb2tDb25maWdGb3JSZXBvOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH0vY29uZmlnXCIsXG4gICAgXSxcbiAgICB1cGxvYWRSZWxlYXNlQXNzZXQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMve3JlbGVhc2VfaWR9L2Fzc2V0c3s/bmFtZSxsYWJlbH1cIixcbiAgICAgIHsgYmFzZVVybDogXCJodHRwczovL3VwbG9hZHMuZ2l0aHViLmNvbVwiIH0sXG4gICAgXSxcbiAgfSxcbiAgc2VhcmNoOiB7XG4gICAgY29kZTogW1wiR0VUIC9zZWFyY2gvY29kZVwiXSxcbiAgICBjb21taXRzOiBbXCJHRVQgL3NlYXJjaC9jb21taXRzXCJdLFxuICAgIGlzc3Vlc0FuZFB1bGxSZXF1ZXN0czogW1wiR0VUIC9zZWFyY2gvaXNzdWVzXCJdLFxuICAgIGxhYmVsczogW1wiR0VUIC9zZWFyY2gvbGFiZWxzXCJdLFxuICAgIHJlcG9zOiBbXCJHRVQgL3NlYXJjaC9yZXBvc2l0b3JpZXNcIl0sXG4gICAgdG9waWNzOiBbXCJHRVQgL3NlYXJjaC90b3BpY3NcIl0sXG4gICAgdXNlcnM6IFtcIkdFVCAvc2VhcmNoL3VzZXJzXCJdLFxuICB9LFxuICBzZWNyZXRTY2FubmluZzoge1xuICAgIGNyZWF0ZVB1c2hQcm90ZWN0aW9uQnlwYXNzOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3JldC1zY2FubmluZy9wdXNoLXByb3RlY3Rpb24tYnlwYXNzZXNcIixcbiAgICBdLFxuICAgIGdldEFsZXJ0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgZ2V0U2Nhbkhpc3Rvcnk6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjcmV0LXNjYW5uaW5nL3NjYW4taGlzdG9yeVwiXSxcbiAgICBsaXN0QWxlcnRzRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0c1wiXSxcbiAgICBsaXN0QWxlcnRzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWNyZXQtc2Nhbm5pbmcvYWxlcnRzXCJdLFxuICAgIGxpc3RMb2NhdGlvbnNGb3JBbGVydDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3JldC1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn0vbG9jYXRpb25zXCIsXG4gICAgXSxcbiAgICBsaXN0T3JnUGF0dGVybkNvbmZpZ3M6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3NlY3JldC1zY2FubmluZy9wYXR0ZXJuLWNvbmZpZ3VyYXRpb25zXCIsXG4gICAgXSxcbiAgICB1cGRhdGVBbGVydDogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlT3JnUGF0dGVybkNvbmZpZ3M6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ3Mve29yZ30vc2VjcmV0LXNjYW5uaW5nL3BhdHRlcm4tY29uZmlndXJhdGlvbnNcIixcbiAgICBdLFxuICB9LFxuICBzZWN1cml0eUFkdmlzb3JpZXM6IHtcbiAgICBjcmVhdGVGb3JrOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3VyaXR5LWFkdmlzb3JpZXMve2doc2FfaWR9L2ZvcmtzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVQcml2YXRlVnVsbmVyYWJpbGl0eVJlcG9ydDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWN1cml0eS1hZHZpc29yaWVzL3JlcG9ydHNcIixcbiAgICBdLFxuICAgIGNyZWF0ZVJlcG9zaXRvcnlBZHZpc29yeTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWN1cml0eS1hZHZpc29yaWVzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVSZXBvc2l0b3J5QWR2aXNvcnlDdmVSZXF1ZXN0OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3VyaXR5LWFkdmlzb3JpZXMve2doc2FfaWR9L2N2ZVwiLFxuICAgIF0sXG4gICAgZ2V0R2xvYmFsQWR2aXNvcnk6IFtcIkdFVCAvYWR2aXNvcmllcy97Z2hzYV9pZH1cIl0sXG4gICAgZ2V0UmVwb3NpdG9yeUFkdmlzb3J5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjdXJpdHktYWR2aXNvcmllcy97Z2hzYV9pZH1cIixcbiAgICBdLFxuICAgIGxpc3RHbG9iYWxBZHZpc29yaWVzOiBbXCJHRVQgL2Fkdmlzb3JpZXNcIl0sXG4gICAgbGlzdE9yZ1JlcG9zaXRvcnlBZHZpc29yaWVzOiBbXCJHRVQgL29yZ3Mve29yZ30vc2VjdXJpdHktYWR2aXNvcmllc1wiXSxcbiAgICBsaXN0UmVwb3NpdG9yeUFkdmlzb3JpZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjdXJpdHktYWR2aXNvcmllc1wiXSxcbiAgICB1cGRhdGVSZXBvc2l0b3J5QWR2aXNvcnk6IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3VyaXR5LWFkdmlzb3JpZXMve2doc2FfaWR9XCIsXG4gICAgXSxcbiAgfSxcbiAgdGVhbXM6IHtcbiAgICBhZGRPclVwZGF0ZU1lbWJlcnNoaXBGb3JVc2VySW5Pcmc6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L21lbWJlcnNoaXBzL3t1c2VybmFtZX1cIixcbiAgICBdLFxuICAgIGFkZE9yVXBkYXRlUmVwb1Blcm1pc3Npb25zSW5Pcmc6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L3JlcG9zL3tvd25lcn0ve3JlcG99XCIsXG4gICAgXSxcbiAgICBjaGVja1Blcm1pc3Npb25zRm9yUmVwb0luT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9yZXBvcy97b3duZXJ9L3tyZXBvfVwiLFxuICAgIF0sXG4gICAgY3JlYXRlOiBbXCJQT1NUIC9vcmdzL3tvcmd9L3RlYW1zXCJdLFxuICAgIGNyZWF0ZURpc2N1c3Npb25Db21tZW50SW5Pcmc6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gICAgXSxcbiAgICBjcmVhdGVEaXNjdXNzaW9uSW5Pcmc6IFtcIlBPU1QgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnNcIl0sXG4gICAgZGVsZXRlRGlzY3Vzc2lvbkNvbW1lbnRJbk9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICBkZWxldGVEaXNjdXNzaW9uSW5Pcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUluT3JnOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z31cIl0sXG4gICAgZ2V0QnlOYW1lOiBbXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z31cIl0sXG4gICAgZ2V0RGlzY3Vzc2lvbkNvbW1lbnRJbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICBnZXREaXNjdXNzaW9uSW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn1cIixcbiAgICBdLFxuICAgIGdldE1lbWJlcnNoaXBGb3JVc2VySW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L21lbWJlcnNoaXBzL3t1c2VybmFtZX1cIixcbiAgICBdLFxuICAgIGxpc3Q6IFtcIkdFVCAvb3Jncy97b3JnfS90ZWFtc1wiXSxcbiAgICBsaXN0Q2hpbGRJbk9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L3RlYW1zXCJdLFxuICAgIGxpc3REaXNjdXNzaW9uQ29tbWVudHNJbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50c1wiLFxuICAgIF0sXG4gICAgbGlzdERpc2N1c3Npb25zSW5Pcmc6IFtcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9uc1wiXSxcbiAgICBsaXN0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci90ZWFtc1wiXSxcbiAgICBsaXN0TWVtYmVyc0luT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vbWVtYmVyc1wiXSxcbiAgICBsaXN0UGVuZGluZ0ludml0YXRpb25zSW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2ludml0YXRpb25zXCIsXG4gICAgXSxcbiAgICBsaXN0UmVwb3NJbk9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L3JlcG9zXCJdLFxuICAgIHJlbW92ZU1lbWJlcnNoaXBGb3JVc2VySW5Pcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L21lbWJlcnNoaXBzL3t1c2VybmFtZX1cIixcbiAgICBdLFxuICAgIHJlbW92ZVJlcG9Jbk9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vcmVwb3Mve293bmVyfS97cmVwb31cIixcbiAgICBdLFxuICAgIHVwZGF0ZURpc2N1c3Npb25Db21tZW50SW5Pcmc6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9udW1iZXJ9XCIsXG4gICAgXSxcbiAgICB1cGRhdGVEaXNjdXNzaW9uSW5Pcmc6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfVwiLFxuICAgIF0sXG4gICAgdXBkYXRlSW5Pcmc6IFtcIlBBVENIIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9XCJdLFxuICB9LFxuICB1c2Vyczoge1xuICAgIGFkZEVtYWlsRm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJQT1NUIC91c2VyL2VtYWlsc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwiYWRkRW1haWxGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgYWRkRW1haWxGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9lbWFpbHNcIl0sXG4gICAgYWRkU29jaWFsQWNjb3VudEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL3NvY2lhbF9hY2NvdW50c1wiXSxcbiAgICBibG9jazogW1wiUFVUIC91c2VyL2Jsb2Nrcy97dXNlcm5hbWV9XCJdLFxuICAgIGNoZWNrQmxvY2tlZDogW1wiR0VUIC91c2VyL2Jsb2Nrcy97dXNlcm5hbWV9XCJdLFxuICAgIGNoZWNrRm9sbG93aW5nRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2ZvbGxvd2luZy97dGFyZ2V0X3VzZXJ9XCJdLFxuICAgIGNoZWNrUGVyc29uSXNGb2xsb3dlZEJ5QXV0aGVudGljYXRlZDogW1wiR0VUIC91c2VyL2ZvbGxvd2luZy97dXNlcm5hbWV9XCJdLFxuICAgIGNyZWF0ZUdwZ0tleUZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiUE9TVCAvdXNlci9ncGdfa2V5c1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwiY3JlYXRlR3BnS2V5Rm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGNyZWF0ZUdwZ0tleUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL2dwZ19rZXlzXCJdLFxuICAgIGNyZWF0ZVB1YmxpY1NzaEtleUZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiUE9TVCAvdXNlci9rZXlzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJjcmVhdGVQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgY3JlYXRlUHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIva2V5c1wiXSxcbiAgICBjcmVhdGVTc2hTaWduaW5nS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvc3NoX3NpZ25pbmdfa2V5c1wiXSxcbiAgICBkZWxldGVBdHRlc3RhdGlvbnNCdWxrOiBbXG4gICAgICBcIlBPU1QgL3VzZXJzL3t1c2VybmFtZX0vYXR0ZXN0YXRpb25zL2RlbGV0ZS1yZXF1ZXN0XCIsXG4gICAgXSxcbiAgICBkZWxldGVBdHRlc3RhdGlvbnNCeUlkOiBbXG4gICAgICBcIkRFTEVURSAvdXNlcnMve3VzZXJuYW1lfS9hdHRlc3RhdGlvbnMve2F0dGVzdGF0aW9uX2lkfVwiLFxuICAgIF0sXG4gICAgZGVsZXRlQXR0ZXN0YXRpb25zQnlTdWJqZWN0RGlnZXN0OiBbXG4gICAgICBcIkRFTEVURSAvdXNlcnMve3VzZXJuYW1lfS9hdHRlc3RhdGlvbnMvZGlnZXN0L3tzdWJqZWN0X2RpZ2VzdH1cIixcbiAgICBdLFxuICAgIGRlbGV0ZUVtYWlsRm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvZW1haWxzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJkZWxldGVFbWFpbEZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBkZWxldGVFbWFpbEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJERUxFVEUgL3VzZXIvZW1haWxzXCJdLFxuICAgIGRlbGV0ZUdwZ0tleUZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL2dwZ19rZXlzL3tncGdfa2V5X2lkfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwiZGVsZXRlR3BnS2V5Rm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGRlbGV0ZUdwZ0tleUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJERUxFVEUgL3VzZXIvZ3BnX2tleXMve2dwZ19rZXlfaWR9XCJdLFxuICAgIGRlbGV0ZVB1YmxpY1NzaEtleUZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL2tleXMve2tleV9pZH1cIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImRlbGV0ZVB1YmxpY1NzaEtleUZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBkZWxldGVQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiREVMRVRFIC91c2VyL2tleXMve2tleV9pZH1cIl0sXG4gICAgZGVsZXRlU29jaWFsQWNjb3VudEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJERUxFVEUgL3VzZXIvc29jaWFsX2FjY291bnRzXCJdLFxuICAgIGRlbGV0ZVNzaFNpZ25pbmdLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvc3NoX3NpZ25pbmdfa2V5cy97c3NoX3NpZ25pbmdfa2V5X2lkfVwiLFxuICAgIF0sXG4gICAgZm9sbG93OiBbXCJQVVQgL3VzZXIvZm9sbG93aW5nL3t1c2VybmFtZX1cIl0sXG4gICAgZ2V0QXV0aGVudGljYXRlZDogW1wiR0VUIC91c2VyXCJdLFxuICAgIGdldEJ5SWQ6IFtcIkdFVCAvdXNlci97YWNjb3VudF9pZH1cIl0sXG4gICAgZ2V0QnlVc2VybmFtZTogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9XCJdLFxuICAgIGdldENvbnRleHRGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vaG92ZXJjYXJkXCJdLFxuICAgIGdldEdwZ0tleUZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL2dwZ19rZXlzL3tncGdfa2V5X2lkfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwiZ2V0R3BnS2V5Rm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfSxcbiAgICBdLFxuICAgIGdldEdwZ0tleUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvZ3BnX2tleXMve2dwZ19rZXlfaWR9XCJdLFxuICAgIGdldFB1YmxpY1NzaEtleUZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL2tleXMve2tleV9pZH1cIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImdldFB1YmxpY1NzaEtleUZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBnZXRQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2tleXMve2tleV9pZH1cIl0sXG4gICAgZ2V0U3NoU2lnbmluZ0tleUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9zc2hfc2lnbmluZ19rZXlzL3tzc2hfc2lnbmluZ19rZXlfaWR9XCIsXG4gICAgXSxcbiAgICBsaXN0OiBbXCJHRVQgL3VzZXJzXCJdLFxuICAgIGxpc3RBdHRlc3RhdGlvbnM6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9hdHRlc3RhdGlvbnMve3N1YmplY3RfZGlnZXN0fVwiXSxcbiAgICBsaXN0QXR0ZXN0YXRpb25zQnVsazogW1xuICAgICAgXCJQT1NUIC91c2Vycy97dXNlcm5hbWV9L2F0dGVzdGF0aW9ucy9idWxrLWxpc3R7P3Blcl9wYWdlLGJlZm9yZSxhZnRlcn1cIixcbiAgICBdLFxuICAgIGxpc3RCbG9ja2VkQnlBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkdFVCAvdXNlci9ibG9ja3NcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImxpc3RCbG9ja2VkQnlBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgbGlzdEJsb2NrZWRCeUF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvYmxvY2tzXCJdLFxuICAgIGxpc3RFbWFpbHNGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkdFVCAvdXNlci9lbWFpbHNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImxpc3RFbWFpbHNGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgbGlzdEVtYWlsc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvZW1haWxzXCJdLFxuICAgIGxpc3RGb2xsb3dlZEJ5QXV0aGVudGljYXRlZDogW1xuICAgICAgXCJHRVQgL3VzZXIvZm9sbG93aW5nXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJsaXN0Rm9sbG93ZWRCeUF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBsaXN0Rm9sbG93ZWRCeUF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvZm9sbG93aW5nXCJdLFxuICAgIGxpc3RGb2xsb3dlcnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2ZvbGxvd2Vyc1wiXSxcbiAgICBsaXN0Rm9sbG93ZXJzRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2ZvbGxvd2Vyc1wiXSxcbiAgICBsaXN0Rm9sbG93aW5nRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2ZvbGxvd2luZ1wiXSxcbiAgICBsaXN0R3BnS2V5c0ZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL2dwZ19rZXlzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJsaXN0R3BnS2V5c0ZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBsaXN0R3BnS2V5c0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvZ3BnX2tleXNcIl0sXG4gICAgbGlzdEdwZ0tleXNGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZ3BnX2tleXNcIl0sXG4gICAgbGlzdFB1YmxpY0VtYWlsc0ZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL3B1YmxpY19lbWFpbHNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImxpc3RQdWJsaWNFbWFpbHNGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgbGlzdFB1YmxpY0VtYWlsc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvcHVibGljX2VtYWlsc1wiXSxcbiAgICBsaXN0UHVibGljS2V5c0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9rZXlzXCJdLFxuICAgIGxpc3RQdWJsaWNTc2hLZXlzRm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJHRVQgL3VzZXIva2V5c1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwibGlzdFB1YmxpY1NzaEtleXNGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9LFxuICAgIF0sXG4gICAgbGlzdFB1YmxpY1NzaEtleXNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2tleXNcIl0sXG4gICAgbGlzdFNvY2lhbEFjY291bnRzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9zb2NpYWxfYWNjb3VudHNcIl0sXG4gICAgbGlzdFNvY2lhbEFjY291bnRzRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L3NvY2lhbF9hY2NvdW50c1wiXSxcbiAgICBsaXN0U3NoU2lnbmluZ0tleXNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3NzaF9zaWduaW5nX2tleXNcIl0sXG4gICAgbGlzdFNzaFNpZ25pbmdLZXlzRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L3NzaF9zaWduaW5nX2tleXNcIl0sXG4gICAgc2V0UHJpbWFyeUVtYWlsVmlzaWJpbGl0eUZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiUEFUQ0ggL3VzZXIvZW1haWwvdmlzaWJpbGl0eVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwic2V0UHJpbWFyeUVtYWlsVmlzaWJpbGl0eUZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH0sXG4gICAgXSxcbiAgICBzZXRQcmltYXJ5RW1haWxWaXNpYmlsaXR5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUEFUQ0ggL3VzZXIvZW1haWwvdmlzaWJpbGl0eVwiLFxuICAgIF0sXG4gICAgdW5ibG9jazogW1wiREVMRVRFIC91c2VyL2Jsb2Nrcy97dXNlcm5hbWV9XCJdLFxuICAgIHVuZm9sbG93OiBbXCJERUxFVEUgL3VzZXIvZm9sbG93aW5nL3t1c2VybmFtZX1cIl0sXG4gICAgdXBkYXRlQXV0aGVudGljYXRlZDogW1wiUEFUQ0ggL3VzZXJcIl0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbmRwb2ludHM7XG4iLCAiaW1wb3J0IHR5cGUgeyBPY3Rva2l0IH0gZnJvbSBcIkBvY3Rva2l0L2NvcmVcIjtcbmltcG9ydCB0eXBlIHsgRW5kcG9pbnRPcHRpb25zLCBSZXF1ZXN0UGFyYW1ldGVycywgUm91dGUgfSBmcm9tIFwiQG9jdG9raXQvdHlwZXNcIjtcbmltcG9ydCBFTkRQT0lOVFMgZnJvbSBcIi4vZ2VuZXJhdGVkL2VuZHBvaW50cy5qc1wiO1xuaW1wb3J0IHR5cGUgeyBSZXN0RW5kcG9pbnRNZXRob2RzIH0gZnJvbSBcIi4vZ2VuZXJhdGVkL21ldGhvZC10eXBlcy5qc1wiO1xuaW1wb3J0IHR5cGUgeyBFbmRwb2ludERlY29yYXRpb25zIH0gZnJvbSBcIi4vdHlwZXMuanNcIjtcblxuLy8gVGhlIGZvbGxvd2luZyBjb2RlIHdhcyByZWZhY3RvcmVkIGluOiBodHRwczovL2dpdGh1Yi5jb20vb2N0b2tpdC9wbHVnaW4tcmVzdC1lbmRwb2ludC1tZXRob2RzLmpzL3B1bGwvNjIyXG4vLyB0byBvcHRpbWlzZSB0aGUgcnVudGltZSBwZXJmb3JtYW5jZSBvZiBPY3Rva2l0IGluaXRpYWxpemF0aW9uLlxuLy9cbi8vIFRoaXMgb3B0aW1pemF0aW9uIGludm9sdmVzIHR3byBrZXkgY2hhbmdlczpcbi8vIDEuIFByZS1Db21wdXRhdGlvbjogVGhlIGVuZHBvaW50IG1ldGhvZHMgYXJlIHByZS1jb21wdXRlZCBvbmNlIGF0IG1vZHVsZSBsb2FkXG4vLyAgICB0aW1lIGluc3RlYWQgb2YgZWFjaCBpbnZvY2F0aW9uIG9mIGBlbmRwb2ludHNUb01ldGhvZHMoKWAuXG4vLyAyLiBMYXp5IGluaXRpYWxpemF0aW9uIGFuZCBjYWNoaW5nOiBXZSB1c2UgYSBQcm94eSBmb3IgZWFjaCBzY29wZSB0byBvbmx5XG4vLyAgICBpbml0aWFsaXplIG1ldGhvZHMgdGhhdCBhcmUgYWN0dWFsbHkgY2FsbGVkLiBUaGlzIHJlZHVjZXMgcnVudGltZSBvdmVyaGVhZFxuLy8gICAgYXMgdGhlIGluaXRpYWxpemF0aW9uIGludm9sdmVzIGRlZXAgbWVyZ2luZyBvZiBvYmplY3RzLiBUaGUgaW5pdGlhbGl6ZWRcbi8vICAgIG1ldGhvZHMgYXJlIHRoZW4gY2FjaGVkIGZvciBmdXR1cmUgdXNlLlxuXG5jb25zdCBlbmRwb2ludE1ldGhvZHNNYXAgPSBuZXcgTWFwKCk7XG5mb3IgKGNvbnN0IFtzY29wZSwgZW5kcG9pbnRzXSBvZiBPYmplY3QuZW50cmllcyhFTkRQT0lOVFMpKSB7XG4gIGZvciAoY29uc3QgW21ldGhvZE5hbWUsIGVuZHBvaW50XSBvZiBPYmplY3QuZW50cmllcyhlbmRwb2ludHMpKSB7XG4gICAgY29uc3QgW3JvdXRlLCBkZWZhdWx0cywgZGVjb3JhdGlvbnNdID0gZW5kcG9pbnQ7XG4gICAgY29uc3QgW21ldGhvZCwgdXJsXSA9IHJvdXRlLnNwbGl0KC8gLyk7XG4gICAgY29uc3QgZW5kcG9pbnREZWZhdWx0cyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgfSxcbiAgICAgIGRlZmF1bHRzLFxuICAgICk7XG5cbiAgICBpZiAoIWVuZHBvaW50TWV0aG9kc01hcC5oYXMoc2NvcGUpKSB7XG4gICAgICBlbmRwb2ludE1ldGhvZHNNYXAuc2V0KHNjb3BlLCBuZXcgTWFwKCkpO1xuICAgIH1cblxuICAgIGVuZHBvaW50TWV0aG9kc01hcC5nZXQoc2NvcGUpLnNldChtZXRob2ROYW1lLCB7XG4gICAgICBzY29wZSxcbiAgICAgIG1ldGhvZE5hbWUsXG4gICAgICBlbmRwb2ludERlZmF1bHRzLFxuICAgICAgZGVjb3JhdGlvbnMsXG4gICAgfSk7XG4gIH1cbn1cblxudHlwZSBQcm94eVRhcmdldCA9IHtcbiAgb2N0b2tpdDogT2N0b2tpdDtcbiAgc2NvcGU6IHN0cmluZztcbiAgY2FjaGU6IFJlY29yZDxzdHJpbmcsICguLi5hcmdzOiBhbnlbXSkgPT4gYW55Pjtcbn07XG5cbmNvbnN0IGhhbmRsZXIgPSB7XG4gIGhhcyh7IHNjb3BlIH06IFByb3h5VGFyZ2V0LCBtZXRob2ROYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZW5kcG9pbnRNZXRob2RzTWFwLmdldChzY29wZSkuaGFzKG1ldGhvZE5hbWUpO1xuICB9LFxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0OiBQcm94eVRhcmdldCwgbWV0aG9kTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB0aGlzLmdldCh0YXJnZXQsIG1ldGhvZE5hbWUpLCAvLyBlbnN1cmVzIG1ldGhvZCBpcyBpbiB0aGUgY2FjaGVcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB9O1xuICB9LFxuICBkZWZpbmVQcm9wZXJ0eShcbiAgICB0YXJnZXQ6IFByb3h5VGFyZ2V0LFxuICAgIG1ldGhvZE5hbWU6IHN0cmluZyxcbiAgICBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IsXG4gICkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQuY2FjaGUsIG1ldGhvZE5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eSh0YXJnZXQ6IFByb3h5VGFyZ2V0LCBtZXRob2ROYW1lOiBzdHJpbmcpIHtcbiAgICBkZWxldGUgdGFyZ2V0LmNhY2hlW21ldGhvZE5hbWVdO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBvd25LZXlzKHsgc2NvcGUgfTogUHJveHlUYXJnZXQpIHtcbiAgICByZXR1cm4gWy4uLmVuZHBvaW50TWV0aG9kc01hcC5nZXQoc2NvcGUpLmtleXMoKV07XG4gIH0sXG4gIHNldCh0YXJnZXQ6IFByb3h5VGFyZ2V0LCBtZXRob2ROYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICByZXR1cm4gKHRhcmdldC5jYWNoZVttZXRob2ROYW1lXSA9IHZhbHVlKTtcbiAgfSxcbiAgZ2V0KHsgb2N0b2tpdCwgc2NvcGUsIGNhY2hlIH06IFByb3h5VGFyZ2V0LCBtZXRob2ROYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoY2FjaGVbbWV0aG9kTmFtZV0pIHtcbiAgICAgIHJldHVybiBjYWNoZVttZXRob2ROYW1lXTtcbiAgICB9XG5cbiAgICBjb25zdCBtZXRob2QgPSBlbmRwb2ludE1ldGhvZHNNYXAuZ2V0KHNjb3BlKS5nZXQobWV0aG9kTmFtZSk7XG4gICAgaWYgKCFtZXRob2QpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3QgeyBlbmRwb2ludERlZmF1bHRzLCBkZWNvcmF0aW9ucyB9ID0gbWV0aG9kO1xuXG4gICAgaWYgKGRlY29yYXRpb25zKSB7XG4gICAgICBjYWNoZVttZXRob2ROYW1lXSA9IGRlY29yYXRlKFxuICAgICAgICBvY3Rva2l0LFxuICAgICAgICBzY29wZSxcbiAgICAgICAgbWV0aG9kTmFtZSxcbiAgICAgICAgZW5kcG9pbnREZWZhdWx0cyxcbiAgICAgICAgZGVjb3JhdGlvbnMsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZVttZXRob2ROYW1lXSA9IG9jdG9raXQucmVxdWVzdC5kZWZhdWx0cyhlbmRwb2ludERlZmF1bHRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FjaGVbbWV0aG9kTmFtZV07XG4gIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZW5kcG9pbnRzVG9NZXRob2RzKG9jdG9raXQ6IE9jdG9raXQpOiBSZXN0RW5kcG9pbnRNZXRob2RzIHtcbiAgY29uc3QgbmV3TWV0aG9kcyA9IHt9IGFzIHsgW2tleTogc3RyaW5nXTogb2JqZWN0IH07XG5cbiAgZm9yIChjb25zdCBzY29wZSBvZiBlbmRwb2ludE1ldGhvZHNNYXAua2V5cygpKSB7XG4gICAgbmV3TWV0aG9kc1tzY29wZV0gPSBuZXcgUHJveHkoeyBvY3Rva2l0LCBzY29wZSwgY2FjaGU6IHt9IH0sIGhhbmRsZXIpO1xuICB9XG5cbiAgcmV0dXJuIG5ld01ldGhvZHMgYXMgUmVzdEVuZHBvaW50TWV0aG9kcztcbn1cblxuZnVuY3Rpb24gZGVjb3JhdGUoXG4gIG9jdG9raXQ6IE9jdG9raXQsXG4gIHNjb3BlOiBzdHJpbmcsXG4gIG1ldGhvZE5hbWU6IHN0cmluZyxcbiAgZGVmYXVsdHM6IEVuZHBvaW50T3B0aW9ucyxcbiAgZGVjb3JhdGlvbnM6IEVuZHBvaW50RGVjb3JhdGlvbnMsXG4pIHtcbiAgY29uc3QgcmVxdWVzdFdpdGhEZWZhdWx0cyA9IG9jdG9raXQucmVxdWVzdC5kZWZhdWx0cyhkZWZhdWx0cyk7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZnVuY3Rpb24gd2l0aERlY29yYXRpb25zKFxuICAgIC4uLmFyZ3M6IFtSb3V0ZSwgUmVxdWVzdFBhcmFtZXRlcnM/XSB8IFtFbmRwb2ludE9wdGlvbnNdXG4gICkge1xuICAgIC8vIEB0cy1pZ25vcmUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yNTQ4OFxuICAgIGxldCBvcHRpb25zID0gcmVxdWVzdFdpdGhEZWZhdWx0cy5lbmRwb2ludC5tZXJnZSguLi5hcmdzKTtcblxuICAgIC8vIFRoZXJlIGFyZSBjdXJyZW50bHkgbm8gb3RoZXIgZGVjb3JhdGlvbnMgdGhhbiBgLm1hcFRvRGF0YWBcbiAgICBpZiAoZGVjb3JhdGlvbnMubWFwVG9EYXRhKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBkYXRhOiBvcHRpb25zW2RlY29yYXRpb25zLm1hcFRvRGF0YV0sXG4gICAgICAgIFtkZWNvcmF0aW9ucy5tYXBUb0RhdGFdOiB1bmRlZmluZWQsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXF1ZXN0V2l0aERlZmF1bHRzKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChkZWNvcmF0aW9ucy5yZW5hbWVkKSB7XG4gICAgICBjb25zdCBbbmV3U2NvcGUsIG5ld01ldGhvZE5hbWVdID0gZGVjb3JhdGlvbnMucmVuYW1lZDtcbiAgICAgIG9jdG9raXQubG9nLndhcm4oXG4gICAgICAgIGBvY3Rva2l0LiR7c2NvcGV9LiR7bWV0aG9kTmFtZX0oKSBoYXMgYmVlbiByZW5hbWVkIHRvIG9jdG9raXQuJHtuZXdTY29wZX0uJHtuZXdNZXRob2ROYW1lfSgpYCxcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChkZWNvcmF0aW9ucy5kZXByZWNhdGVkKSB7XG4gICAgICBvY3Rva2l0LmxvZy53YXJuKGRlY29yYXRpb25zLmRlcHJlY2F0ZWQpO1xuICAgIH1cblxuICAgIGlmIChkZWNvcmF0aW9ucy5yZW5hbWVkUGFyYW1ldGVycykge1xuICAgICAgLy8gQHRzLWlnbm9yZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI1NDg4XG4gICAgICBjb25zdCBvcHRpb25zID0gcmVxdWVzdFdpdGhEZWZhdWx0cy5lbmRwb2ludC5tZXJnZSguLi5hcmdzKTtcblxuICAgICAgZm9yIChjb25zdCBbbmFtZSwgYWxpYXNdIG9mIE9iamVjdC5lbnRyaWVzKFxuICAgICAgICBkZWNvcmF0aW9ucy5yZW5hbWVkUGFyYW1ldGVycyxcbiAgICAgICkpIHtcbiAgICAgICAgaWYgKG5hbWUgaW4gb3B0aW9ucykge1xuICAgICAgICAgIG9jdG9raXQubG9nLndhcm4oXG4gICAgICAgICAgICBgXCIke25hbWV9XCIgcGFyYW1ldGVyIGlzIGRlcHJlY2F0ZWQgZm9yIFwib2N0b2tpdC4ke3Njb3BlfS4ke21ldGhvZE5hbWV9KClcIi4gVXNlIFwiJHthbGlhc31cIiBpbnN0ZWFkYCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICghKGFsaWFzIGluIG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBvcHRpb25zW2FsaWFzXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVxdWVzdFdpdGhEZWZhdWx0cyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBAdHMtaWdub3JlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjU0ODhcbiAgICByZXR1cm4gcmVxdWVzdFdpdGhEZWZhdWx0cyguLi5hcmdzKTtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih3aXRoRGVjb3JhdGlvbnMsIHJlcXVlc3RXaXRoRGVmYXVsdHMpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgT2N0b2tpdCB9IGZyb20gXCJAb2N0b2tpdC9jb3JlXCI7XG5cbmV4cG9ydCB0eXBlIHsgUmVzdEVuZHBvaW50TWV0aG9kVHlwZXMgfSBmcm9tIFwiLi9nZW5lcmF0ZWQvcGFyYW1ldGVycy1hbmQtcmVzcG9uc2UtdHlwZXMuanNcIjtcbmltcG9ydCB7IFZFUlNJT04gfSBmcm9tIFwiLi92ZXJzaW9uLmpzXCI7XG5pbXBvcnQgdHlwZSB7IEFwaSB9IGZyb20gXCIuL3R5cGVzLmpzXCI7XG5pbXBvcnQgeyBlbmRwb2ludHNUb01ldGhvZHMgfSBmcm9tIFwiLi9lbmRwb2ludHMtdG8tbWV0aG9kcy5qc1wiO1xuXG4vLyBFeHBvcnQgdGhlIHR5cGUgZm9yIGRvd25zdHJlYW0gdXNlcnMgaW4gb3JkZXIgdG8gZml4IGEgVHlwZVNjcmlwdCBlcnJvclxuLy8gVGhlIGluZmVycmVkIHR5cGUgb2YgJ09jdG9raXQnIGNhbm5vdCBiZSBuYW1lZCB3aXRob3V0IGEgcmVmZXJlbmNlIHRvICcuLi9ub2RlX21vZHVsZXMvQG9jdG9raXQvcGx1Z2luLXJlc3QtZW5kcG9pbnQtbWV0aG9kcy9kaXN0LXR5cGVzL3R5cGVzLmpzJy4gVGhpcyBpcyBsaWtlbHkgbm90IHBvcnRhYmxlLiBBIHR5cGUgYW5ub3RhdGlvbiBpcyBuZWNlc3NhcnkuXG5leHBvcnQgdHlwZSB7IEFwaSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzdEVuZHBvaW50TWV0aG9kcyhvY3Rva2l0OiBPY3Rva2l0KTogQXBpIHtcbiAgY29uc3QgYXBpID0gZW5kcG9pbnRzVG9NZXRob2RzKG9jdG9raXQpO1xuICByZXR1cm4ge1xuICAgIHJlc3Q6IGFwaSxcbiAgfTtcbn1cbnJlc3RFbmRwb2ludE1ldGhvZHMuVkVSU0lPTiA9IFZFUlNJT047XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWdhY3lSZXN0RW5kcG9pbnRNZXRob2RzKG9jdG9raXQ6IE9jdG9raXQpOiBBcGlbXCJyZXN0XCJdICYgQXBpIHtcbiAgY29uc3QgYXBpID0gZW5kcG9pbnRzVG9NZXRob2RzKG9jdG9raXQpO1xuICByZXR1cm4ge1xuICAgIC4uLmFwaSxcbiAgICByZXN0OiBhcGksXG4gIH07XG59XG5sZWdhY3lSZXN0RW5kcG9pbnRNZXRob2RzLlZFUlNJT04gPSBWRVJTSU9OO1xuIiwgImNvbnN0IFZFUlNJT04gPSBcIjIyLjAuMVwiO1xuZXhwb3J0IHtcbiAgVkVSU0lPTlxufTtcbiIsICJpbXBvcnQgeyBPY3Rva2l0IGFzIENvcmUgfSBmcm9tIFwiQG9jdG9raXQvY29yZVwiO1xuaW1wb3J0IHsgcmVxdWVzdExvZyB9IGZyb20gXCJAb2N0b2tpdC9wbHVnaW4tcmVxdWVzdC1sb2dcIjtcbmltcG9ydCB7XG4gIHBhZ2luYXRlUmVzdFxufSBmcm9tIFwiQG9jdG9raXQvcGx1Z2luLXBhZ2luYXRlLXJlc3RcIjtcbmltcG9ydCB7IGxlZ2FjeVJlc3RFbmRwb2ludE1ldGhvZHMgfSBmcm9tIFwiQG9jdG9raXQvcGx1Z2luLXJlc3QtZW5kcG9pbnQtbWV0aG9kc1wiO1xuaW1wb3J0IHsgVkVSU0lPTiB9IGZyb20gXCIuL3ZlcnNpb24uanNcIjtcbmNvbnN0IE9jdG9raXQgPSBDb3JlLnBsdWdpbihyZXF1ZXN0TG9nLCBsZWdhY3lSZXN0RW5kcG9pbnRNZXRob2RzLCBwYWdpbmF0ZVJlc3QpLmRlZmF1bHRzKFxuICB7XG4gICAgdXNlckFnZW50OiBgb2N0b2tpdC1yZXN0LmpzLyR7VkVSU0lPTn1gXG4gIH1cbik7XG5leHBvcnQge1xuICBPY3Rva2l0XG59O1xuIiwgImltcG9ydCB7IE9jdG9raXQgfSBmcm9tICdAb2N0b2tpdC9yZXN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdpdGh1YkNsaWVudCh0b2tlbjogc3RyaW5nKTogT2N0b2tpdCB7XG4gICAgcmV0dXJuIG5ldyBPY3Rva2l0KHsgYXV0aDogdG9rZW4gfSk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlUmVsZWFzZUJyYW5jaCB9IGZyb20gJ0AvYnJhbmNoLW1hbmFnZXInO1xuaW1wb3J0IHsgY3JlYXRlR2l0aHViQ2xpZW50IH0gZnJvbSAnQC9naXRodWItY2xpZW50JztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IFtvd25lciwgcmVwb10gPSBwcm9jZXNzLmVudlsnR0lUSFVCX1JFUE9TSVRPUlknXSEuc3BsaXQoJy8nKTtcblxuICAgIGF3YWl0IGNyZWF0ZVJlbGVhc2VCcmFuY2goY3JlYXRlR2l0aHViQ2xpZW50KHByb2Nlc3MuZW52WydHSF9UT0tFTiddISksIHtcbiAgICAgICAgb3duZXI6IG93bmVyISxcbiAgICAgICAgcmVwbzogcmVwbyEsXG4gICAgICAgIGJyYW5jaE5hbWU6IHByb2Nlc3MuZW52WydSRUxFQVNFX0JSQU5DSF9OQU1FJ10hLFxuICAgIH0pO1xufVxuXG5pZiAocHJvY2Vzcy5hcmd2WzFdID09PSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpIHtcbiAgICBhd2FpdCBydW4oKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBLFFBQU0sYUFBYSxTQUFTQSxjQUFjO0FBQUEsSUFBRTtBQUM1QyxlQUFXLFlBQVksdUJBQU8sT0FBTyxJQUFJO0FBZ0J6QyxRQUFNLFVBQVU7QUFRaEIsUUFBTSxlQUFlO0FBU3JCLFFBQU0sY0FBYztBQUdwQixRQUFNLHFCQUFxQixFQUFFLE1BQU0sSUFBSSxZQUFZLElBQUksV0FBVyxFQUFFO0FBQ3BFLFdBQU8sT0FBTyxtQkFBbUIsVUFBVTtBQUMzQyxXQUFPLE9BQU8sa0JBQWtCO0FBVWhDLGFBQVNDLE9BQU8sUUFBUTtBQUN0QixVQUFJLE9BQU8sV0FBVyxVQUFVO0FBQzlCLGNBQU0sSUFBSSxVQUFVLGtEQUFrRDtBQUFBLE1BQ3hFO0FBRUEsVUFBSSxRQUFRLE9BQU8sUUFBUSxHQUFHO0FBQzlCLFlBQU0sT0FBTyxVQUFVLEtBQ25CLE9BQU8sTUFBTSxHQUFHLEtBQUssRUFBRSxLQUFLLElBQzVCLE9BQU8sS0FBSztBQUVoQixVQUFJLFlBQVksS0FBSyxJQUFJLE1BQU0sT0FBTztBQUNwQyxjQUFNLElBQUksVUFBVSxvQkFBb0I7QUFBQSxNQUMxQztBQUVBLFlBQU0sU0FBUztBQUFBLFFBQ2IsTUFBTSxLQUFLLFlBQVk7QUFBQSxRQUN2QixZQUFZLElBQUksV0FBVztBQUFBLE1BQzdCO0FBR0EsVUFBSSxVQUFVLElBQUk7QUFDaEIsZUFBTztBQUFBLE1BQ1Q7QUFFQSxVQUFJO0FBQ0osVUFBSTtBQUNKLFVBQUk7QUFFSixjQUFRLFlBQVk7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QkFBb0IsVUFBVUM7QUFFdkIsU0FBUywwQkFBMEIsU0FBcUM7QUFDN0UsUUFBTSxNQUFNLG1CQUFtQixPQUFPO0FBQ3RDLFNBQU87SUFDTCxHQUFHO0lBQ0gsTUFBTTtFQUNSO0FBQ0Y7QUFDQSwwQkFBMEIsVUFBVUE7OztBQzFCcEMsSUFBTUMsV0FBVTs7O0FDT2hCLElBQU1DLFdBQVUsUUFBSyxPQUFPLFlBQVksMkJBQTJCLFlBQVksRUFBRTtBQUFBLEVBQy9FO0FBQUEsSUFDRSxXQUFXLG1CQUFtQkMsUUFBTztBQUFBLEVBQ3ZDO0FBQ0Y7OztBQ1RPLFNBQVMsbUJBQW1CLE9BQXdCO0FBQ3ZELFNBQU8sSUFBSUMsU0FBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDOzs7QUNGQSxTQUFTLHFCQUFxQjtBQUU5QixlQUFzQixNQUFxQjtBQUN2QyxRQUFNLENBQUMsT0FBTyxJQUFJLElBQUksUUFBUSxJQUFJLG1CQUFtQixFQUFHLE1BQU0sR0FBRztBQUVqRSxRQUFNLG9CQUFvQixtQkFBbUIsUUFBUSxJQUFJLFVBQVUsQ0FBRSxHQUFHO0FBQUEsSUFDcEU7QUFBQSxJQUNBO0FBQUEsSUFDQSxZQUFZLFFBQVEsSUFBSSxxQkFBcUI7QUFBQSxFQUNqRCxDQUFDO0FBQ0w7QUFFQSxJQUFJLFFBQVEsS0FBSyxDQUFDLE1BQU0sY0FBYyxZQUFZLEdBQUcsR0FBRztBQUNwRCxRQUFNLElBQUk7QUFDZDsiLAogICJuYW1lcyI6IFsiTnVsbE9iamVjdCIsICJwYXJzZSIsICJzYWZlUGFyc2UiLCAibmFtZSIsICJtZXRob2QiLCAiaG9vayIsICJob29rIiwgInZhbHVlIiwgInRleHQiLCAiVkVSU0lPTiIsICJpc1BsYWluT2JqZWN0IiwgIndpdGhEZWZhdWx0cyIsICJWRVJTSU9OIiwgIndpdGhEZWZhdWx0cyIsICJyZXF1ZXN0IiwgImVuZHBvaW50IiwgIlZFUlNJT04iLCAibm9vcCIsICJWRVJTSU9OIiwgImhvb2siLCAiYXV0aCIsICJWRVJTSU9OIiwgInJlcXVlc3QiLCAiVkVSU0lPTiIsICJWRVJTSU9OIiwgIlZFUlNJT04iLCAiVkVSU0lPTiIsICJlbmRwb2ludCIsICJvcHRpb25zIiwgIlZFUlNJT04iLCAiVkVSU0lPTiIsICJPY3Rva2l0IiwgIlZFUlNJT04iLCAiT2N0b2tpdCJdCn0K

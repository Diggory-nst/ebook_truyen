const statusCode = {

    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    PROCESSING: 102,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTI_STATUS: 207,
    CREATE_FAILED: 208,
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANENTLY: 301,
    MOVED_TEMPORARILY: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    REQUEST_TOO_LONG: 413,
    REQUEST_URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    REQUESTED_RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    IM_A_TEAPOT: 418,
    INSUFFICIENT_SPACE_ON_RESOURCE: 419,
    METHOD_FAILURE: 420,
    MISDIRECTED_REQUEST: 421,
    UNPROCESSABLE_ENTITY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    INSUFFICIENT_STORAGE: 507,
    NETWORK_AUTHENTICATION_REQUIRED: 511,
    TOKEN_ERROR: 600,
    ALREADY_EXIST: 601
}

const reasonPhrases = {
    ALREADY_EXIST: "ALREADY_EXIST",
    TOKEN_ERROR: "TOKEN_ERROR",
    CREATE_FAILED: "CREATE_FAILED",
    ACCEPTED: "ACCEPTED",
    BAD_GATEWAY: "BAD_GATEWAY",
    BAD_REQUEST: "BAD_REQUEST",
    CONFLICT: "CONFLICT",
    CONTINUE: "CONTINUE",
    CREATED: "CREATED",
    EXPECTATION_FAILED: "EXPECTATION_FAILED",
    FAILED_DEPENDENCY: "FAILED_DEPENDENCY",
    FORBIDDEN: "FORBIDDEN",
    GATEWAY_TIMEOUT: "GATEWAY_TIMEOUT",
    GONE: "GONE",
    HTTP_VERSION_NOT_SUPPORTED: "HTTP_VERSION_NOT_SUPPORTED",
    IM_A_TEAPOT: "IM_A_TEAPOT",
    INSUFFICIENT_SPACE_ON_RESOURCE: "INSUFFICIENT_SPACE_ON_RESOURCE",
    INSUFFICIENT_STORAGE: "INSUFFICIENT_STORAGE",
    INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
    LENGTH_REQUIRED: "LENGTH_REQUIRED",
    LOCKED: "LOCKED",
    METHOD_FAILURE: "METHOD_FAILURE",
    METHOD_NOT_ALLOWED: "METHOD_NOT_ALLOWED",
    MOVED_PERMANENTLY: "MOVED_PERMANENTLY",
    MOVED_TEMPORARILY: "Moved Temporarily",
    MULTI_STATUS: "Multi-Status",
    MULTIPLE_CHOICES: "Multiple Choices",
    NETWORK_AUTHENTICATION_REQUIRED: "Network Authentication Required",
    NO_CONTENT: "NO_CONTENT",
    NON_AUTHORITATIVE_INFORMATION: "Non Authoritative Information",
    NOT_ACCEPTABLE: "Not Acceptable",
    NOT_FOUND: "NOT_FOUND",
    NOT_IMPLEMENTED: "NOT_IMPLEMENTED",
    NOT_MODIFIED: "NOT_MODIFIED",
    OK: "OK",
    PARTIAL_CONTENT: "Partial Content",
    PAYMENT_REQUIRED: "PAYMENT_REQUIRED",
    PERMANENT_REDIRECT: "Permanent Redirect",
    PRECONDITION_FAILED: "Precondition Failed",
    PRECONDITION_REQUIRED: "Precondition Required",
    PROCESSING: "PROCESSING",
    PROXY_AUTHENTICATION_REQUIRED: "Proxy Authentication Required",
    REQUEST_HEADER_FIELDS_TOO_LARGE: "Request Header Fields Too Large",
    REQUEST_TIMEOUT: "Request Timeout",
    REQUEST_TOO_LONG: "Request Entity Too Large",
    REQUEST_URI_TOO_LONG: "Request-URI Too Long",
    REQUESTED_RANGE_NOT_SATISFIABLE: "Requested Range Not Satisfiable",
    RESET_CONTENT: "Reset Content",
    SEE_OTHER: "See Other",
    SERVICE_UNAVAILABLE: "Service Unavailable",
    SWITCHING_PROTOCOLS: "Switching Protocols",
    TEMPORARY_REDIRECT: "Temporary Redirect",
    TOO_MANY_REQUESTS: "Too Many Requests",
    UNAUTHORIZED: "UNAUTHORIZED",
    UNAVAILABLE_FOR_LEGAL_REASONS: "UNAVAILABLE_FOR_LEGAL_REASONS",
    UNPROCESSABLE_ENTITY: "Unprocessable Entity",
    UNSUPPORTED_MEDIA_TYPE: "UNSUPPORTED_MEDIA_TYPE",
    USE_PROXY: "Use Proxy",
    MISDIRECTED_REQUEST: "Misdirected Request"
}

export {
    statusCode,
    reasonPhrases
} 
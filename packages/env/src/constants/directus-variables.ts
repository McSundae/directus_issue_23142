/**
 * Variables in the environment that Directus will read as configuration
 */
export const DIRECTUS_VARIABLES = [
	// general
	'CONFIG_PATH',
	'HOST',
	'PORT',
	'PUBLIC_URL',
	'LOG_LEVEL',
	'LOG_STYLE',
	'LOG_HTTP_IGNORE_PATHS',
	'MAX_PAYLOAD_SIZE',
	'ROOT_REDIRECT',
	'SERVE_APP',
	'GRAPHQL_INTROSPECTION',
	'GRAPHQL_SCHEMA_CACHE_CAPACITY',
	'GRAPHQL_QUERY_TOKEN_LIMIT',
	'MAX_BATCH_MUTATION',
	'LOGGER_.+',
	'QUERY_LIMIT_MAX',
	'QUERY_LIMIT_DEFAULT',
	'ROBOTS_TXT',
	'TEMP_PATH',

	'MARKETPLACE_REGISTRY',
	'MARKETPLACE_TRUST',

	// server
	'SERVER_.+',

	// database
	'DB_.+',

	// security
	'SECRET',

	'ACCESS_TOKEN_TTL',
	'EMAIL_VERIFICATION_TOKEN_TTL',
	'REFRESH_TOKEN_TTL',
	'REFRESH_TOKEN_COOKIE_NAME',
	'REFRESH_TOKEN_COOKIE_DOMAIN',
	'REFRESH_TOKEN_COOKIE_SECURE',
	'REFRESH_TOKEN_COOKIE_SAME_SITE',

	'SESSION_COOKIE_TTL',
	'SESSION_COOKIE_NAME',
	'SESSION_COOKIE_DOMAIN',
	'SESSION_COOKIE_SECURE',
	'SESSION_COOKIE_SAME_SITE',
	'SESSION_REFRESH_GRACE_PERIOD',

	'REDIS',
	'REDIS_ENABLED',
	'REDIS_HOST',
	'REDIS_PORT',
	'REDIS_USERNAME',
	'REDIS_PASSWORD',
	'REDIS_DB',

	'LOGIN_STALL_TIME',
	'REGISTER_STALL_TIME',
	'PASSWORD_RESET_URL_ALLOW_LIST',
	'USER_INVITE_TOKEN_TTL',
	'USER_INVITE_URL_ALLOW_LIST',
	'USER_REGISTER_URL_ALLOW_LIST',
	'IP_TRUST_PROXY',
	'IP_CUSTOM_HEADER',
	'ASSETS_CONTENT_SECURITY_POLICY',
	'IMPORT_IP_DENY_LIST',
	'CONTENT_SECURITY_POLICY_.+',
	'HSTS_.+',

	// hashing
	'HASH_.+',

	// cors
	'CORS_ENABLED',
	'CORS_ORIGIN',
	'CORS_METHODS',
	'CORS_ALLOWED_HEADERS',
	'CORS_EXPOSED_HEADERS',
	'CORS_CREDENTIALS',
	'CORS_MAX_AGE',

	// rate limiting
	'RATE_LIMITER_GLOBAL_.+',
	'RATE_LIMITER_.+',
	'RATE_LIMITER_REGISTRATION_.+',

	// cache
	'CACHE_ENABLED',
	'CACHE_TTL',
	'CACHE_CONTROL_S_MAXAGE',
	'CACHE_AUTO_PURGE',
	'CACHE_AUTO_PURGE_IGNORE_LIST',
	'CACHE_SYSTEM_TTL',
	'CACHE_SCHEMA',
	'CACHE_SCHEMA_MAX_ITERATIONS',
	'CACHE_SCHEMA_SYNC_TIMEOUT',
	'CACHE_NAMESPACE',
	'CACHE_STORE',
	'CACHE_STATUS_HEADER',
	'CACHE_VALUE_MAX_SIZE',
	'CACHE_SKIP_ALLOWED',
	'CACHE_HEALTHCHECK_THRESHOLD',

	// storage
	'STORAGE_LOCATIONS',
	'STORAGE_.+_DRIVER',
	'STORAGE_.+_ROOT',
	'STORAGE_.+_KEY',
	'STORAGE_.+_SECRET',
	'STORAGE_.+_BUCKET',
	'STORAGE_.+_REGION',
	'STORAGE_.+_ENDPOINT',
	'STORAGE_.+_ACL',
	'STORAGE_.+_CONTAINER_NAME',
	'STORAGE_.+_SERVER_SIDE_ENCRYPTION',
	'STORAGE_.+_ACCOUNT_NAME',
	'STORAGE_.+_ACCOUNT_KEY',
	'STORAGE_.+_ENDPOINT',
	'STORAGE_.+_KEY_FILENAME',
	'STORAGE_.+_BUCKET',
	'STORAGE_.+_HEALTHCHECK_THRESHOLD',

	// metadata
	'FILE_METADATA_ALLOW_LIST',

	// files
	'FILES_MAX_UPLOAD_SIZE',
	'FILES_CONTENT_TYPE_ALLOW_LIST',

	// assets
	'ASSETS_CACHE_TTL',
	'ASSETS_TRANSFORM_MAX_CONCURRENT',
	'ASSETS_TRANSFORM_IMAGE_MAX_DIMENSION',
	'ASSETS_TRANSFORM_MAX_OPERATIONS',
	'ASSETS_TRANSFORM_TIMEOUT',
	'ASSETS_CONTENT_SECURITY_POLICY',
	'ASSETS_INVALID_IMAGE_SENSITIVITY_LEVEL',

	// auth
	'AUTH_PROVIDERS',
	'AUTH_DISABLE_DEFAULT',
	'AUTH_.+_DRIVER',
	'AUTH_.+_CLIENT_ID',
	'AUTH_.+_CLIENT_SECRET',
	'AUTH_.+_SCOPE',
	'AUTH_.+_AUTHORIZE_URL',
	'AUTH_.+_ACCESS_URL',
	'AUTH_.+_PROFILE_URL',
	'AUTH_.+_IDENTIFIER_KEY',
	'AUTH_.+_EMAIL_KEY',
	'AUTH_.+_FIRST_NAME_KEY',
	'AUTH_.+_LAST_NAME_KEY',
	'AUTH_.+_ALLOW_PUBLIC_REGISTRATION',
	'AUTH_.+_DEFAULT_ROLE_ID',
	'AUTH_.+_ICON',
	'AUTH_.+_LABEL',
	'AUTH_.+_PARAMS',
	'AUTH_.+_ISSUER_URL',
	'AUTH_.+_AUTH_REQUIRE_VERIFIED_EMAIL',
	'AUTH_.+_CLIENT_URL',
	'AUTH_.+_BIND_DN',
	'AUTH_.+_BIND_PASSWORD',
	'AUTH_.+_USER_DN',
	'AUTH_.+_USER_ATTRIBUTE',
	'AUTH_.+_USER_SCOPE',
	'AUTH_.+_MAIL_ATTRIBUTE',
	'AUTH_.+_FIRST_NAME_ATTRIBUTE',
	'AUTH_.+_LAST_NAME_ATTRIBUTE',
	'AUTH_.+_GROUP_DN',
	'AUTH_.+_GROUP_ATTRIBUTE',
	'AUTH_.+_GROUP_SCOPE',
	'AUTH_.+_IDP.+',
	'AUTH_.+_SP.+',
	'AUTH_.+_REDIRECT_ALLOW_LIST',

	// extensions
	'PACKAGE_FILE_LOCATION',
	'EXTENSIONS_LOCATION',
	'EXTENSIONS_PATH',
	'EXTENSIONS_MUST_LOAD',
	'EXTENSIONS_AUTO_RELOAD',
	'EXTENSIONS_CACHE_TTL',
	'EXTENSIONS_SANDBOX_MEMORY',
	'EXTENSIONS_SANDBOX_TIMEOUT',
	'EXTENSIONS_LIMIT',

	// migrations
	'MIGRATIONS_PATH',

	// synchronization
	'SYNCHRONIZATION_STORE',
	'SYNCHRONIZATION_NAMESPACE',

	// emails
	'EMAIL_FROM',
	'EMAIL_TRANSPORT',
	'EMAIL_VERIFY_SETUP',
	'EMAIL_SENDMAIL_NEW_LINE',
	'EMAIL_SENDMAIL_PATH',
	'EMAIL_SMTP_NAME',
	'EMAIL_SMTP_HOST',
	'EMAIL_SMTP_PORT',
	'EMAIL_SMTP_USER',
	'EMAIL_SMTP_PASSWORD',
	'EMAIL_SMTP_POOL',
	'EMAIL_SMTP_SECURE',
	'EMAIL_SMTP_IGNORE_TLS',
	'EMAIL_MAILGUN_API_KEY',
	'EMAIL_MAILGUN_DOMAIN',
	'EMAIL_MAILGUN_HOST',
	'EMAIL_SENDGRID_API_KEY',
	'EMAIL_SES_CREDENTIALS__ACCESS_KEY_ID',
	'EMAIL_SES_CREDENTIALS__SECRET_ACCESS_KEY',
	'EMAIL_SES_REGION',
	'EMAIL_TEMPLATES_PATH',

	// admin account
	'ADMIN_EMAIL',
	'ADMIN_PASSWORD',
	'ADMIN_TOKEN',

	// telemetry
	'TELEMETRY',
	'TELEMETRY_URL',
	'TELEMETRY_AUTHORIZATION',

	// limits & optimization
	'RELATIONAL_BATCH_SIZE',
	'EXPORT_BATCH_SIZE',
	'USERS_ADMIN_ACCESS_LIMIT',
	'USERS_APP_ACCESS_LIMIT',
	'USERS_API_ACCESS_LIMIT',

	// flows
	'FLOWS_ENV_ALLOW_LIST',
	'FLOWS_RUN_SCRIPT_MAX_MEMORY',
	'FLOWS_RUN_SCRIPT_TIMEOUT',

	// websockets
	'WEBSOCKETS_.+',
] as const;

/**
 * Variables in the environment that Directus will read as configuration in RegExp format
 */
export const DIRECTUS_VARIABLES_REGEX = DIRECTUS_VARIABLES.map((name) => new RegExp(`^${name}$`));

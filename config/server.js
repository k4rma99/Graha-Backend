module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '2b4844946e51707a1d99043121a15c9b'),
    },
  },
});

module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: env('NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN', 'ZoYFIJOTQADqnX-1P8ocvFseWpasz6Emjc8ZhIKWkRU')
    },
  },
});
// module.exports = ({ env }) => ({
//     // ...
//     upload: {
//       provider: 'cloudinary',
//       providerOptions: {
//         cloud_name: 'graha',
//         api_key: '131425146859753',
//         api_secret: '1hpgLOqm_77WHBrCB9-ktRoR7UU',
//       },
//     },
//     // ...
//   });

// module.exports = ({ env }) => ({
//     // ...
//     upload: {
//       provider: 'cloudinary',
//       providerOptions: {
//         cloud_name: "graha",
//         api_key: "131425146859753",
//         api_secret: "1hpgLOqm_77WHBrCB9-ktRoR7UU",
//       },
//     },
//     // ...
//   });

module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: "ZoYFIJOTQADqnX-1P8ocvFseWpasz6Emjc8ZhIKWkRU",
      sites: [
        {
          name: 'grahaadmin',
          id: "34591704-8158-4a66-90f1-6259e3a6ead1",
          buildHook: "https://api.netlify.com/build_hooks/6389bdafc792c352a532620b",
          branch: 'master' // optional
        }
      ]
    },
  },
});

module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET'),
        },
      },
    },
  },
  // ...
});
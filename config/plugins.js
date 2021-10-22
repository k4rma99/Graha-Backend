module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
    },
    // ...
  });

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


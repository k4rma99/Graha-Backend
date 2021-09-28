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
//         cloud_name: "grahastudio",
//         api_key: "239144481548437",
//         api_secret: "V_5xIAfOc8li3lxZ1OOIwdbBOrg",
//       },
//     },
//     // ...
//   });


module.exports = function (api) {
   api.cache(true);
   return {
      presets: ['babel-preset-expo'],
      plugins: [
         [
            'module-resolver',
            {
               root: ['./src'],
               extensions: [
                  '.ios.js',
                  '.android.js',
                  '.js',
                  '.ts',
                  '.tsx',
                  '.json',
               ],
               alias: {
                  app: ['./app/'],
                  _components: ['app/components'],
                  _images: ['app/images'],
                  _pages: ['app/images'],
                  _navigation: ['app/navigation'],
                  _theme: ['app/theme'],
                  _utils: ['app/utils'],
               },
            },
         ],
      ],
   };
};

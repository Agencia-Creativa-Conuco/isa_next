const { withFaust } = require('@faustjs/next')

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  images: {
    domains: [
      // "[yourapp].wpengine.com" (Update this to be your Wordpress application name in order to load images connected to your posts)
      'secure.gravatar.com',
      '2.gravatar.com',
      'i0.wp.com',
      'prueba.conuco.do',
      'localhost',
    ],
  },
  experimental: {
    emotion:
      true |
      {
        // default is true. It will be disabled when build type is production.
        sourceMap: true,
        // default is 'dev-only'.
        autoLabel: 'always',
        // default is '[local]'.
        // Allowed values: `[local]` `[filename]` and `[dirname]`
        // This option only works when autoLabel is set to 'dev-only' or 'always'.
        // It allows you to define the format of the resulting label.
        // The format is defined via string where variable parts are enclosed in square brackets [].
        // For example labelFormat: "my-classname--[local]", where [local] will be replaced with the name of the variable the result is assigned to.
        // labelFormat: string,
      },
  },
})

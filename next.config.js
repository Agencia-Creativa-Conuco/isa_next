const { withFaust } = require("@faustjs/next");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  images: {
    domains: [
      // "[yourapp].wpengine.com" (Update this to be your Wordpress application name in order to load images connected to your posts)
      "secure.gravatar.com",
      "2.gravatar.com",
      "i0.wp.com",
      "prueba.conuco.do",
      "localhost",
    ],
  },
});

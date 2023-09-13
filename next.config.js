const { withFaust } = require("@faustjs/next");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  images: {
    domains: [
      "secure.gravatar.com",
      "2.gravatar.com",
      "i0.wp.com",
      "isa.edu.do",
      "app.isa.edu.do",
      "localhost",
    ],
  },
  compiler: {
    emotion: true,
  },
});

module.exports = {
  sets: {
    desktop: {
      files: "tests/desktop/**/*.testplane.js",
    },
  },

  browsers: {
    chrome: {
      automationProtocol: "devtools",
      desiredCapabilities: {
        browserName: "chrome",
      },
    },
  },
};

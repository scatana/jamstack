module.exports = function(config) {
  config.addPassthroughCopy("src/js");

  return {
    pathPrefix: "/jamstack/",
    dir: {
      input: "src",
      output: "dist"
    }
  };
}

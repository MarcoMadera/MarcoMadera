const fs = require("fs").promises;
const Parser = require("rss-parser");
const parser = new Parser();

fs.readFile("./README.md.tpl", { encoding: "utf-8" }).then(
  (markdownTemplate) => {
    console.log(markdownTemplate);
  }
);

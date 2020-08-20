const fs = require("fs").promises;
const Parser = require("rss-parser");
const parser = new Parser();

const LATEST_ARTICLE_PLACEHOLDER = "%{{latest_article}}%";

(async () => {
  const markdownTemplate = await fs.readFile("./README.md.tpl", {
    encoding: "utf-8",
  });
  const { items } = await parser.parseURL("https://marcomadera.com/rss.xml");
  const [{ title }, { link }] = items;
  const latestArticleMardown = `[${title}](${link})`;
  const newMarkdown = markdownTemplate.replace(
    LATEST_ARTICLE_PLACEHOLDER,
    latestArticleMardown
  );
  await fs.writeFile("./README.md", newMarkdown);
})();

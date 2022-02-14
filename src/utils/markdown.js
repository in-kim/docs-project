import { marked } from "marked";
const rendererTable = new marked.Renderer();

const hljs = require("highlight.js");
hljs.registerLanguage("bash", require("highlight.js/lib/languages/bash")); // Includes sh
hljs.registerLanguage("css", require("highlight.js/lib/languages/css"));
hljs.registerLanguage(
  "javascript",
  require("highlight.js/lib/languages/javascript")
);
hljs.registerLanguage("json", require("highlight.js/lib/languages/json"));
hljs.registerLanguage(
  "plaintext",
  require("highlight.js/lib/languages/plaintext")
);
hljs.registerLanguage("scss", require("highlight.js/lib/languages/scss"));
hljs.registerLanguage("shell", require("highlight.js/lib/languages/shell"));
hljs.registerLanguage(
  "typescript",
  require("highlight.js/lib/languages/typescript")
);
hljs.registerLanguage("xml", require("highlight.js/lib/languages/xml")); // Includes HTML
// --- Constants ---

// const RX_EXCLUDE_EXTENSIONS = /\.(s?css|js|ts)$/;
const RX_CODE_FILENAME = /^\/\/ ([\w,\s-]+\.[A-Za-z]{1,4})\n/m;

const ANCHOR_LINK_HEADING_LEVELS = [2, 3, 4, 5];

const renderer = {
  code: (code, language) => {
    const attrs = {
      class: `hljs ${language} p-2`,
      translate: "no",
    };

    const [, filename] = RX_CODE_FILENAME.exec(code) || [];
    if (filename) {
      attrs["data-filename"] = filename;
      code = code.replace(RX_CODE_FILENAME, "");
    }

    const validLang = !!(language && hljs.getLanguage(language));
    const highlighted = validLang
      ? hljs.highlight(code, { language }).value
      : code;

    const attrsMarkup = Object.keys(attrs).reduce(
      (markup, attr) => `${markup}${markup ? " " : ""}${attr}="${attrs[attr]}"`,
      ""
    );

    return `<div class="bd-code"><pre ${attrsMarkup}>${highlighted}</pre></div>`;
  },
  // Custom "highlight.js" implementation for markdown renderer
  // Instruct Google Translate not to translate `<code>` content
  // and don't let browsers wrap the contents across lines
  // Custom link renderer, to update Bootstrap docs version in href
  // Only applies to markdown links (not explicit `<a href="..">...</a>` tags
  codespan: (code) => {
    return `<code class="text-nowrap" translate="no">${code}</code>`;
  },
  link: (href, title, text) => {
    let target = "";
    let rel = "";
    let classAttr = "";
    href = href || "#";
    title = title ? ` title="${title}"` : "";
    text = text || "";
    if (href.indexOf("http") === 0 || href.indexOf("//") === 0) {
      // External links
      // Open in a new window (will reduce bounce rates in analytics)
      target = ' target="_blank"';
      // We add in rel="noopener" to all external links for security and performance reasons
      // https://developers.google.com/web/tools/lighthouse/audits/noopener
      rel = ' rel="noopener"';
      // External links use the default link style
    } else if (href.indexOf("/") === 0 || href.indexOf("#") === 0) {
      // Internal docs links
      classAttr = ' class="font-weight-bold"';
    }
    return `<a href="${href}"${classAttr}${title}${target}${rel}>${text}</a>`;
  },

  // Custom heading implementation for markdown renderer
  // @link: https://github.com/nuxt/docs/blob/967fc39b4dc0712d2d5089014eddc7e7a2e65422/api.js#L27
  // @link: https://github.com/markedjs/marked/blob/1f5b9a19f532e2e1e3e63ae5efd81af75acf572f/lib/marked.js#L962
  // Convert lead-in blockquote paragraphs to true Bootstrap docs leads
  heading: function (text, level, raw, slugger) {
    const getTextMarkup = (text) =>
      `<span class="bd-content-title">${text}</span>`;

    if (!this.options.headerIds) {
      return `<h${level}>${getTextMarkup(text)}</h${level}>\n`;
    }

    const pattern = /\s?{([^}]+)}$/;

    let link = pattern.exec(text);
    if (link && link.length && link[1]) {
      text = text.replace(pattern, "");
      link = link[1];
    } else {
      link = this.options.headerPrefix + slugger.slug(raw);
    }

    const anchor =
      ANCHOR_LINK_HEADING_LEVELS.indexOf(level) !== -1
        ? `<a class="anchorjs-link" href="#${link}" aria-labelledby="${link}"></a>`
        : "";
    const attrs = `id="${link}" class="bv-no-focus-ring"`;
    return `<h${level} ${attrs}>${getTextMarkup(text + anchor)}</h${level}>\n`;
  },

  blockquote: function (text) {
    return text.replace("<p>", '<p class="bd-lead">');
  },

  table: function () {
    const originalTable = rendererTable;
    let table = originalTable.table.apply(this, arguments);
    table = table
      .replace(
        "<table>",
        '<table class="b-table table table-bordered table-striped bv-docs-table">'
      )
      .replace("<thead>", '<thead class="thead-default">');
    return `<div class="table-responsive-sm">${table}</div>`;
  },
};

export default function changeMarkdown(markdown) {
  marked.use({ renderer });
  marked.use({ rendererTable });
  return marked.parse(markdown);
}

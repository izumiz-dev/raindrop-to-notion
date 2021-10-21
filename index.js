const fs = require("fs");
const html = fs.readFileSync("./Raindrop.io.html", "utf-8");

const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

// Parse raindrop.io html file
const aTags = html.match(/<A(?: .+?)?>.*?<\/A>/g);
const entries = aTags.map((aTag) => {
  const url = aTag.match(/HREF=".+?\"/g)[0].match(/https?:\/\/.+[^"]/)[0];
  const title = aTag.match(/(?<=(">)).*?(?=(<\/A>))/)[0];
  return {
    url,
    title,
  };
});

console.log(`Found ${entries.length} entries.`);

// Add data to notion table

const addEntry = async (entry) => {
  const response = await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: {
      名前: {
        title: [
          {
            text: {
              content: entry.title,
            },
          },
        ],
      },
      URL: {
        url: entry.url,
      },
    },
  });
};

for (const entry of entries) {
  addEntry(entry);
}

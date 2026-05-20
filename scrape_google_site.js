import https from "https";

function getRawHtml(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } }, (res) => {
      let data = "";
      res.on("data", (chunk) => { data += chunk; });
      res.on("end", () => {
        resolve(data);
      });
    }).on("error", () => {
      resolve("");
    });
  });
}

async function scrapeBookId(name, path) {
  const url = `https://sites.google.com/view/elitelibraryyy/e-library/soft-skills/${encodeURIComponent(path)}`;
  console.log(`Scraping raw HTML for "${name}" from: ${url}`);
  const html = await getRawHtml(url);
  
  const regex = /drive\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]{33})/g;
  let matches = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    matches.push(match[1]);
  }
  
  const idRegex = /"id":"([a-zA-Z0-9_-]{33})"/g;
  while ((match = idRegex.exec(html)) !== null) {
    matches.push(match[1]);
  }
  
  const unique_ids = [...new Set(matches)];
  if (unique_ids.length > 0) {
    console.log(`🎉 SUCCESS! Found IDs for "${name}":`);
    for (const id of unique_ids) {
      console.log(`  -> ${id}`);
    }
  } else {
    console.log(`❌ No IDs found in HTML for "${name}"`);
  }
}

async function run() {
  await scrapeBookId("Sapiens", "sách-sapiens-lược-sử-loài-người");
  await scrapeBookId("Khéo ăn khéo nói", "sách-khéo-ăn-nói-sẽ-có-được-thiên-hạ");
}

run();

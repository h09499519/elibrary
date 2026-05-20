import https from "https";

const links = {
  "15 secrets (Scraped)": "https://drive.google.com/file/d/1Bwz7VQ5QF0GbxEOXfyd7FEFkMlf1e5d9/view",
  "The 4 disciplines (Scraped)": "https://drive.google.com/file/d/1gohQtO-MUfIk2a_ER9X41-vKyPdRn-mx/view",
  "90 giây (Scraped)": "https://drive.google.com/file/d/1Gk3EOPuY75JtQYzzmXXpYGin_h4_XttR/view",
  "Bạn có thể đàm phán (Scraped)": "https://drive.google.com/file/d/1wPR2loFV9rlFT5cixlHSudKqEQolIxtN/view",
};

function getUrlTitle(name, url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } }, (res) => {
      // Follow up to one redirect
      if (res.statusCode === 302 && res.headers.location) {
        const redirectUrl = res.headers.location;
        https.get(redirectUrl, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } }, (res2) => {
          let data = "";
          res2.on("data", (chunk) => { data += chunk; });
          res2.on("end", () => {
            const match = data.match(/<title>([^<]+)<\/title>/i);
            const title = match ? match[1].trim() : "No Title Found";
            const isError = res2.statusCode === 404 || data.includes("We're sorry") || data.includes("Google Drive - Page Not Found") || title.includes("Page Not Found") || title.includes("privacy");
            resolve({ name, url: redirectUrl, statusCode: res2.statusCode, title, isError });
          });
        });
      } else {
        let data = "";
        res.on("data", (chunk) => { data += chunk; });
        res.on("end", () => {
          const match = data.match(/<title>([^<]+)<\/title>/i);
          const title = match ? match[1].trim() : "No Title Found";
          const isError = res.statusCode === 404 || data.includes("We're sorry") || data.includes("Google Drive - Page Not Found") || title.includes("Page Not Found") || title.includes("privacy");
          resolve({ name, url, statusCode: res.statusCode, title, isError });
        });
      }
    }).on("error", (err) => {
      resolve({ name, url, statusCode: 0, title: err.message, isError: true });
    });
  });
}

async function run() {
  for (const [name, url] of Object.entries(links)) {
    const res = await getUrlTitle(name, url);
    const errorMarker = res.isError || res.title.toLowerCase().includes("error") ? "❌ ERROR" : "✅ OK";
    console.log(`${errorMarker} | ${res.name} | Status: ${res.statusCode} | Title: ${res.title}`);
  }
}

run();

import https from "https";

function ping(id) {
  const url = `https://drive.google.com/file/d/${id}/view`;
  return new Promise((resolve) => {
    const req = https.get(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } }, (res) => {
      let data = "";
      res.on("data", (chunk) => { data += chunk; });
      res.on("end", () => {
        const match = data.match(/<title>([^<]+)<\/title>/i);
        const title = match ? match[1].trim() : "No Title";
        const isError = data.includes("We're sorry") || data.includes("Google Drive - Page Not Found") || title.includes("Page Not Found") || title.includes("privacy");
        resolve({ id, statusCode: res.statusCode, title, isError });
      });
    });
    req.on("error", () => {
      resolve({ id, statusCode: 0, title: "network error", isError: true });
    });
    req.setTimeout(4000, () => {
      req.destroy();
      resolve({ id, statusCode: 0, title: "timeout", isError: true });
    });
  });
}

const ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";

// Mutator 1: Single character replacement (tests all single typos)
function getSingleReplacements(base) {
  const list = [];
  for (let i = 0; i < base.length; i++) {
    for (const char of ALPHABET) {
      if (base[i] !== char) {
        list.push(base.substring(0, i) + char + base.substring(i + 1));
      }
    }
  }
  return [...new Set(list)];
}

// Mutator 2: Single character insertion (for base length 32)
function getSingleInsertions(base) {
  const list = [];
  for (let i = 0; i <= base.length; i++) {
    for (const char of ALPHABET) {
      list.push(base.substring(0, i) + char + base.substring(i));
    }
  }
  return [...new Set(list)];
}

async function findMatch(name, baseId, isLength32 = false) {
  const candidates = isLength32 ? getSingleInsertions(baseId) : getSingleReplacements(baseId);
  console.log(`Auditing ${candidates.length} candidate mutations for "${name}"...`);
  
  const chunkSize = 60;
  for (let i = 0; i < candidates.length; i += chunkSize) {
    const chunk = candidates.slice(i, i + chunkSize);
    const results = await Promise.all(chunk.map(ping));
    const match = results.find(r => r.statusCode === 200 && !r.isError && !r.title.includes("Page") && !r.title.includes("privacy"));
    if (match) {
      console.log(`\n🎉 SUCCESS! FOUND EXTREMELY CORRECT LINK FOR "${name}"!`);
      console.log(`Original: ${baseId}`);
      console.log(`Correct:  ${match.id}`);
      console.log(`Title:    ${match.title}\n`);
      return match.id;
    }
    if (i > 0 && i % 300 === 0) {
      process.stdout.write(`.` ); // progress indicator
    }
  }
  console.log(`\n❌ Failed to find a single-mutation match for "${name}"`);
  return null;
}

async function run() {
  console.log("Starting exhaustive mutation scan...");
  
  // 1. "Khéo ăn khéo nói" (original length 32: 1QLeB4GgmPvwyP9_voACpAKewWpnhC_t)
  await findMatch("Sách Khéo ăn khéo nói sẽ có được thiên hạ", "1QLeB4GgmPvwyP9_voACpAKewWpnhC_t", true);

  // 2. "Sapiens" (original: 1sZS-pyx9Pvz3mg-edlz2LsGtbVuEZX7e)
  await findMatch("Sapiens - Lược sử về loài người", "1sZS-pyx9Pvz3mg-edlz2LsGtbVuEZX7e", false);

  // 3. "15 secrets" (original: 1Bwz7VQ5QF0GbxEOXfyd7FEFKMlf1e5d9)
  await findMatch("Sách 15 secrets", "1Bwz7VQ5QF0GbxEOXfyd7FEFKMlf1e5d9", false);

  // 4. "Bạn có thể đàm phán" (original: 1wPR2loFV9rIFT5cixIHSudKqEQollxtN)
  await findMatch("Sách Bạn có thể đàm phán bất cứ điều gì", "1wPR2loFV9rIFT5cixIHSudKqEQollxtN", false);

  // 5. "The 4 disciplines" (original: 1gohQtO-MUflk2a_ER9X41-vKyPdRn-mx)
  await findMatch("Sách The 4 disciplines of execution", "1gohQtO-MUflk2a_ER9X41-vKyPdRn-mx", false);
}

run();

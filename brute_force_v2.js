import https from "https";

function ping(id) {
  const url = `https://drive.google.com/file/d/${id}/view`;
  return new Promise((resolve) => {
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } }, (res) => {
      let data = "";
      res.on("data", (chunk) => { data += chunk; });
      res.on("end", () => {
        const match = data.match(/<title>([^<]+)<\/title>/i);
        const title = match ? match[1].trim() : "No Title";
        const isError = data.includes("We're sorry") || data.includes("Google Drive - Page Not Found") || title.includes("Page Not Found") || title.includes("privacy");
        resolve({ id, statusCode: res.statusCode, title, isError });
      });
    }).on("error", () => {
      resolve({ id, statusCode: 0, title: "network error", isError: true });
    });
  });
}

async function findMatch(name, baseId, mutator) {
  const candidates = [...new Set(mutator(baseId))];
  console.log(`Testing ${candidates.length} unique candidates for "${name}"...`);
  
  const chunkSize = 25;
  for (let i = 0; i < candidates.length; i += chunkSize) {
    const chunk = candidates.slice(i, i + chunkSize);
    const results = await Promise.all(chunk.map(ping));
    const match = results.find(r => r.statusCode === 200 && !r.isError && !r.title.includes("Page Not Found") && !r.title.includes("privacy"));
    if (match) {
      console.log(`🎉 FOUND MATCH FOR "${name}"! ID: ${match.id} | Title: ${match.title}`);
      return match.id;
    }
  }
  console.log(`❌ No match found for "${name}"`);
  return null;
}

// Helper to generate swaps of a 1/l/I at various positions
function getSwaps(str) {
  let list = [str];
  const characters = ["l", "1", "I"];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "l" || char === "1" || char === "I") {
      const currentLen = list.length;
      for (let j = 0; j < currentLen; j++) {
        for (const replacement of characters) {
          if (replacement !== char) {
            const mutated = list[j].substring(0, i) + replacement + list[j].substring(i + 1);
            list.push(mutated);
          }
        }
      }
    }
  }
  return list;
}

async function run() {
  // 1. Sapiens (base: 1sZS-pyx9Pvz3mg-edlz2LsGtbVuEZX7e)
  // Let's check 1sZs or 1sZS, swap of l/I/1, dash to underscore, and also is "edlz" -> "ed1z"?
  await findMatch("Sapiens", "1sZS-pyx9Pvz3mg-edlz2LsGtbVuEZX7e", (base) => {
    const list = [];
    const prefixVariants = ["sZs", "sZS", "szs", "SZS"];
    const midDashes = [
      ["-", "-"],
      ["_", "_"],
      ["-", "_"],
      ["_", "-"],
    ];
    for (const p of prefixVariants) {
      for (const d of midDashes) {
        let temp = "1" + p + "-pyx9Pvz3mg-edlz2LsGtbVuEZX7e";
        temp = temp.replace("-pyx", d[0] + "pyx").replace("-edlz", d[1] + "edlz");
        
        // Let's add swaps of 1/l/I
        const swaps = getSwaps(temp);
        list.push(...swaps);
      }
    }
    return list;
  });

  // 2. 15 secrets (base: 1Bwz7VQ5QF0GbxEOXfyd7FEFKMlf1e5d9)
  await findMatch("15 secrets", "1Bwz7VQ5QF0GbxEOXfyd7FEFKMlf1e5d9", (base) => {
    const list = [];
    // Could EOF/EOX have underscores?
    const bases = [
      "1Bwz7VQ5QF0GbxEOXfyd7FEFKMlf1e5d9",
      "1Bwz7VQ5QF0GbxEOXfyd7FEFKMlf1e5D9",
      "1Bwz7VQ5QF0GbxEOXf_d7FEFKMlf1e5d9",
      "1Bwz7VQ5QF0GbxEOXf_d7FEFKMlf1e5D9",
      "1Bwz7VQ5QF0GbxEOXfyd7FEFKMlfe5d9",
    ];
    for (const b of bases) {
      list.push(...getSwaps(b));
    }
    return list;
  });

  // 3. Bạn có thể đàm phán (base: 1wPR2loFV9rIFT5cixIHSudKqEQollxtN)
  await findMatch("Bạn có thể đàm phán", "1wPR2loFV9rIFT5cixIHSudKqEQollxtN", (base) => {
    const list = [];
    const rv = ["9r", "8r", "yr", "Yr", "9R", "8R"];
    for (const r of rv) {
      let b = `1wPR2loFV${r}IFT5cixIHSudKqEQollxtN`;
      list.push(...getSwaps(b));
      list.push(...getSwaps(b.replace("EQollxtN", "EQollxtn")));
    }
    return list;
  });

  // 4. The 4 disciplines (base: 1gohQtO-MUflk2a_ER9X41-vKyPdRn-mx)
  await findMatch("The 4 disciplines", "1gohQtO-MUflk2a_ER9X41-vKyPdRn-mx", (base) => {
    const list = [];
    const starts = ["1gohQtO", "1gohQto", "1gohQlo", "1gohQlO", "1gohQt0"];
    const dashes = [
      ["-", "_", "-"],
      ["-", "-", "-"],
      ["_", "_", "_"],
      ["-", "_", "_"],
      ["_", "-", "-"],
    ];
    for (const s of starts) {
      for (const d of dashes) {
        let b = `${s}${d[0]}MUflk2a_ER9X41${d[1]}vKyPdRn${d[2]}mx`;
        list.push(...getSwaps(b));
        list.push(...getSwaps(b.replace("mx", "mX")));
      }
    }
    return list;
  });

  // 5. Khéo ăn khéo nói (original 32 char: 1QLeB4GgmPvwyP9_voACpAKewWpnhC_t)
  await findMatch("Khéo ăn khéo nói", "1QLeB4GgmPvwyP9_voACpAKewWpnhC_t", (base) => {
    const list = [];
    // We knew it has 32 chars. Let's try adding 1/l/I/v/o/V/O/t/T/-/_/p/P/k/K anywhere or at end/start
    const appendChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
    for (const c of appendChars) {
      list.push(base + c);
      list.push(c + base);
    }
    // Try swaps of l/I/1 inside the base first, then append a character
    const baseSwaps = getSwaps(base);
    for (const bs of baseSwaps) {
      for (const c of appendChars) {
        list.push(bs + c);
      }
    }
    return list;
  });
}

run();

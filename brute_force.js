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
  const candidates = mutator(baseId);
  console.log(`Testing ${candidates.length} candidates for "${name}"...`);
  
  // Chunk candidates to avoid hitting Google's rate limits
  const chunkSize = 15;
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

const replaceAt = (str, index, char) => str.substring(0, index) + char + str.substring(index + 1);

async function run() {
  // 1. Sapiens (base: 1sZS-pyx9Pvz3mg-edlz2LsGtbVuEZX7e)
  await findMatch("Sapiens", "1sZS-pyx9Pvz3mg-edlz2LsGtbVuEZX7e", (base) => {
    const list = [];
    // Try variations of "sZS"
    const prefixVariants = ["sZS", "sZs", "szs", "SZS", "Szs"];
    for (const p of prefixVariants) {
      list.push(base.replace(/^1sZS/, "1" + p));
      list.push(base.replace(/^1sZS/, "1" + p).replace(/-/g, "_"));
    }
    return list;
  });

  // 2. Sách 11 bí quyết (base: 1ll0fuk9BJiTbTY_uNgEcZpaWTjXZ8VVk)
  await findMatch("11 bí quyết", "1ll0fuk9BJiTbTY_uNgEcZpaWTjXZ8VVk", (base) => {
    // We already know 1Il0fuk9BJiTbTY_uNgEcZpaWTjXZ8VVk works, so let's confirm
    return ["1Il0fuk9BJiTbTY_uNgEcZpaWTjXZ8VVk", "1ll0fuk9BJiTbTY_uNgEcZpaWTjXZ8VVk"];
  });

  // 3. Khéo ăn khéo nói (base: 1QLeB4GgmPvwyP9_voACpAKewWpnhC_t -> length 32)
  await findMatch("Khéo ăn khéo nói", "1QLeB4GgmPvwyP9_voACpAKewWpnhC_t", (base) => {
    const list = [];
    // Add characters at the end (try a-z, A-Z, 0-9)
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
    for (const c of chars) {
      list.push(base + c);
    }
    // Also try swapping some character positions or changing underscores
    return list;
  });

  // 4. Atomic Habit (base: 1TYkRLrheTJ__p_alcP-gAHen41mxR10i)
  await findMatch("Atomic Habit", "1TYkRLrheTJ__p_alcP-gAHen41mxR10i", (base) => {
    const list = [];
    const underscores = ["__p_", "_p_", "___p_", "_"];
    const alcs = ["alcP", "a1cP", "aIcP", "allP"];
    const midDashes = ["-", "_"];
    const ends = ["10i", "1Oi", "l0i", "lOi", "1oi", "10l", "10I", "1OI"];
    const hens = ["AHen", "AHeN", "ahen", "aHeN"];

    for (const u of underscores) {
      for (const a of alcs) {
        for (const d of midDashes) {
          for (const h of hens) {
            for (const e of ends) {
              list.push(`1TYkRLrheTJ${u}${a}${d}g${h}41mxR${e}`);
            }
          }
        }
      }
    }
    return list;
  });

  // 5. 15 secrets (base: 1Bwz7VQ5QF0GbxEOXfyd7FEFKMlf1e5d9)
  await findMatch("15 secrets", "1Bwz7VQ5QF0GbxEOXfyd7FEFKMlf1e5d9", (base) => {
    const list = [];
    // Variations of end "FEFKMlf1e5d9" or mid "EOXfyd7" or "Bwz7VQ5"
    // Let's check lf1e5d9 vs lfle5d9 vs lf1e5D9 vs lf1e5d9
    const ends = ["FEFKMlf1e5d9", "FEFKMlf1e5D9", "FEFKMlfle5D9", "FEFKMlfe5d9", "FEFKMlfIe5d9", "FEFKMlf1e5b9", "FEFKMlf1e5B9", "FEFKMlf1e5g9", "FEFKMlf1e5G9"];
    const mids = ["EOXfyd7", "EOXfyd_", "EOXf_d7", "EOX_yd7"];
    for (const e of ends) {
      for (const m of mids) {
        list.push(`1Bwz7VQ5QF0Gbx${m}${e}`);
      }
    }
    return list;
  });

  // 6. The art of powerful (base: 1lg9DjPM7QrnDQ6h5QyjM7fJWKzP1mcoh)
  await findMatch("The art of powerful", "1lg9DjPM7QrnDQ6h5QyjM7fJWKzP1mcoh", (base) => {
    const list = [];
    const firsts = ["1lg9", "11g9", "1Ig9", "1lgP"];
    const ends = ["1mcoh", "Imcoh", "lmcoh", "1mcoH", "lmcoH", "ImcoH"];
    for (const f of firsts) {
      for (const e of ends) {
        list.push(base.replace(/^1lg9/, f).replace(/1mcoh$/, e));
      }
    }
    return list;
  });

  // 7. Bạn có thể đàm phán (base: 1wPR2loFV9rIFT5cixIHSudKqEQollxtN)
  await findMatch("Bạn có thể đàm phán", "1wPR2loFV9rIFT5cixIHSudKqEQollxtN", (base) => {
    const list = [];
    const rV = ["9r", "8r", "yr", "Yr", "9R", "8R"];
    const cix = ["cixIHSud", "cix1HSud", "cixlHSud", "clxIHSud", "cIxIHSud"];
    const eq = ["EQollxtN", "EQol1xtN", "EQo11xtN", "EQolIxtN", "EQollxtn"];
    for (const r of rV) {
      for (const c of cix) {
        for (const e of eq) {
          list.push(`1wPR2loFV${r}IFT5${c}Kq${e}`);
        }
      }
    }
    return list;
  });

  // 8. The 4 disciplines (base: 1gohQtO-MUflk2a_ER9X41-vKyPdRn-mx)
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
        list.push(`${s}${d[0]}MUflk2a_ER9X41${d[1]}vKyPdRn${d[2]}mx`);
      }
    }
    return list;
  });
}

run();

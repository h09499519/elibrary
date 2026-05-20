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

async function runBook(name, list) {
  list = [...new Set(list)];
  console.log(`Checking ${list.length} candidates for ${name}...`);
  const results = await Promise.all(list.map(ping));
  const match = results.find(r => r.statusCode === 200 && !r.isError && !r.title.includes("Page") && !r.title.includes("privacy"));
  if (match) {
    console.log(`🎉 FOUND MATCH FOR "${name}"! ID: ${match.id} | Title: ${match.title}`);
  } else {
    console.log(`❌ No match found for "${name}"`);
  }
}

async function main() {
  // 1. Sapiens (original: 1sZS-pyx9Pvz3mg-edlz2LsGtbVuEZX7e)
  // Let's check common case adjustments for "sZS" and swapping "-" with "_"
  const sapiens = [
    "1sZs-pyx9Pvz3mg-edlz2LsGtbVuEZX7e",
    "1sZS-pyx9Pvz3mg-edlz2LsGtbVuEZX7e",
    "1sZS_pyx9Pvz3mg_edlz2LsGtbVuEZX7e",
    "1sZs_pyx9Pvz3mg_edlz2LsGtbVuEZX7e",
    "1szs-pyx9Pvz3mg-edlz2LsGtbVuEZX7e",
    "1szs_pyx9Pvz3mg_edlz2LsGtbVuEZX7e",
    // swap l/I/1 at "edlz" -> "ed1z" or L -> 1/l/I
    "1sZs-pyx9Pvz3mg-ed1z2LsGtbVuEZX7e",
    "1sZs-pyx9Pvz3mg-edIz2LsGtbVuEZX7e",
    "1sZs-pyx9Pvz3mg-edlz21sGtbVuEZX7e",
    "1sZs-pyx9Pvz3mg-edlz2lsGtbVuEZX7e",
    "1sZs-pyx9Pvz3mg-edlz2IsGtbVuEZX7e",
    "1sZs-pyx9Pvz3mg-ed1z2lsGtbVuEZX7e",
    "1sZs-pyx9Pvz3mg-ed1z2IsGtbVuEZX7e",
  ];
  await runBook("Sapiens", sapiens);

  // 2. 15 secrets (original: 1Bwz7VQ5QF0GbxEOXfyd7FEFKMlf1e5d9)
  // Let's target the FEFKMlf1e5d9 end and EOXfyd7 mid
  const secrets = [
    "1Bwz7VQ5QF0GbxEOXfyd7FEFKMlf1e5d9",
    "1Bwz7VQ5QF0GbxEOXfyd7FEFKMlf1e5D9",
    "1Bwz7VQ5QF0GbxEOXfyd7FEFKMlfle5d9",
    "1Bwz7VQ5QF0GbxEOXfyd7FEFKMlfle5D9",
    "1Bwz7VQ5QF0GbxEOXf_d7FEFKMlf1e5d9",
    "1Bwz7VQ5QF0GbxEOXf_d7FEFKMlf1e5D9",
    "1Bwz7VQ5QF0GbxEOXf_d7FEFKMlfle5d9",
    "1Bwz7VQ5QF0GbxEOXf_d7FEFKMlfle5D9",
    "1Bwz7VQ5QF0GbxEOXfyd7FEFKMlfe5d9",
    "1Bwz7VQ5QF0GbxEOXfyd7FEFKMlfe5D9",
    "1Bwz7VQ5QF0gbxEOXfyd7FEFKMlf1e5d9",
    "1Bwz7VQ5QF0gbxEOXfyd7FEFKMlf1e5D9",
    "1Bwz7VQ5QF0GbxEOXfyd7FEFKM1f1e5d9",
    "1Bwz7VQ5QF0GbxEOXfyd7FEFKM1f1e5D9",
    "1Bwz7VQ5QF0GbxEOXfyd7FEFKM1fle5d9",
    "1Bwz7VQ5QF0GbxEOXfyd7FEFKM1fle5D9",
  ];
  await runBook("15 secrets", secrets);

  // 3. Bạn có thể đàm phán (original: 1wPR2loFV9rIFT5cixIHSudKqEQollxtN)
  // Target F9r vs F8r vs Fyr, cixIHSud, EQollxtN
  const negotiation = [
    "1wPR2loFV9rIFT5cixIHSudKqEQollxtN",
    "1wPR2loFV8rIFT5cixIHSudKqEQollxtN",
    "1wPR2loFVyrIFT5cixIHSudKqEQollxtN",
    "1wPR2loFVYrIFT5cixIHSudKqEQollxtN",
    "1wPR2loFV8rIFT5cix1HSudKqEQollxtN",
    "1wPR2loFV8rIFT5cixlHSudKqEQollxtN",
    "1wPR2loFV9rIFT5cix1HSudKqEQollxtN",
    "1wPR2loFV9rIFT5cixlHSudKqEQollxtN",
    "1wPR2loFV9rIFT5cixIHSudKqEQo11xtN",
    "1wPR2loFV9rIFT5cixIHSudKqEQol1xtN",
    "1wPR2loFV8rIFT5cixIHSudKqEQo11xtN",
    "1wPR2loFV8rIFT5cixIHSudKqEQol1xtN",
    "1wPR2loFVyrIFT5cixIHSudKqEQo11xtN",
    "1wPR2loFVyrIFT5cixIHSudKqEQol1xtN",
    "1wPR2loFVYrIFT5cixIHSudKqEQo11xtN",
    "1wPR2loFVYrIFT5cixIHSudKqEQol1xtN",
  ];
  await runBook("Bạn có thể đàm phán", negotiation);

  // 4. The 4 disciplines (original: 1gohQtO-MUflk2a_ER9X41-vKyPdRn-mx)
  // Target: "-", "_" combinations, "1gohQtO" vs "1gohQto" vs "1gohQlo"
  const disciplines = [
    "1gohQtO-MUflk2a_ER9X41-vKyPdRn-mx",
    "1gohQto-MUflk2a_ER9X41-vKyPdRn-mx",
    "1gohQlo-MUflk2a_ER9X41-vKyPdRn-mx",
    "1gohQtO_MUflk2a_ER9X41_vKyPdRn_mx",
    "1gohQto_MUflk2a_ER9X41_vKyPdRn_mx",
    "1gohQlo_MUflk2a_ER9X41_vKyPdRn_mx",
    "1gohQtO-MUflk2a_ER9X41_vKyPdRn_mx",
    "1gohQto-MUflk2a_ER9X41_vKyPdRn_mx",
    "1gohQlo-MUflk2a_ER9X41_vKyPdRn_mx",
    "1gohQtO_MUflk2a_ER9X41-vKyPdRn_mx",
    "1gohQto_MUflk2a_ER9X41-vKyPdRn_mx",
    "1gohQlo_MUflk2a_ER9X41-vKyPdRn_mx",
    "1gohQtO-MUflk2a_ER9X41-vKyPdRn_mx",
    "1gohQto-MUflk2a_ER9X41-vKyPdRn_mx",
    "1gohQlo-MUflk2a_ER9X41-vKyPdRn_mx",
  ];
  await runBook("The 4 disciplines", disciplines);
}

main();

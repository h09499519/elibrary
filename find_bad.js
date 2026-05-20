import fs from "fs";

function processFile(path) {
  const content = fs.readFileSync(path, "utf8");
  const objects = [];
  
  // Find all objects inside arrays
  const matches = content.match(/\{[\s\S]*?\}/g) || [];
  for (const m of matches) {
    if (m.includes("genre:") && m.includes("title:") && m.includes("link:")) {
      const genreMatch = m.match(/genre:\s*["']([^"']+)["']/);
      const titleMatch = m.match(/title:\s*["']([^"']+)["']/);
      const linkMatch = m.match(/link:\s*["']([^"']+)["']/);
      const contributorMatch = m.match(/contributor:\s*["']([^"']+)["']/);
      
      if (genreMatch && titleMatch && linkMatch) {
        objects.push({
          genre: genreMatch[1].trim(),
          title: titleMatch[1].trim(),
          contributor: contributorMatch ? contributorMatch[1].trim() : "",
          link: linkMatch[1].trim(),
          lineSample: m.slice(0, 80)
        });
      }
    }
  }
  return objects;
}

const indexItems = processFile("./index.html");
console.log(`Parsed ${indexItems.length} items from index.html`);

const badPatterns = ["placeholder", "error", "link-loi", "#", ""];
const badItems = indexItems.filter(item => {
  const link = item.link.trim().toLowerCase();
  return !link || link === "#" || badPatterns.some(p => link.includes(p)) || !link.startsWith("https://drive.google.com/");
});

console.log("Bad items found in index.html:");
for (const item of badItems) {
  console.log(`- [${item.genre}] ${item.title}: ${item.link}`);
}

const mammoth = require("mammoth");
const fs = require("fs");
const path = require("path");

const docxPath = path.join(__dirname, "src", "assets", "gia school prospectus.docx");
const outputPath = path.join(__dirname, "prospectus-content.txt");

mammoth.extractRawText({ path: docxPath })
  .then(result => {
    fs.writeFileSync(outputPath, result.value);
    console.log("Content extracted successfully to prospectus-content.txt");
    console.log("\n--- Prospectus Content ---\n");
    console.log(result.value);
  })
  .catch(err => {
    console.error("Error extracting content:", err);
  });

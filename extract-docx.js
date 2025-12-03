import mammoth from "mammoth";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const docxPath = join(__dirname, "src", "assets", "GIA SCHOOL PROSPECTUS.docx");

mammoth.extractRawText({ path: docxPath })
  .then((result) => {
    console.log("=== PROSPECTUS CONTENT ===\n");
    console.log(result.value);
    console.log("\n=== END OF CONTENT ===");

    if (result.messages.length > 0) {
      console.log("\n=== MESSAGES ===");
      console.log(result.messages);
    }
  })
  .catch((err) => {
    console.error("Error reading docx file:", err);
  });

import Tesseract from "tesseract.js";
import path from "path";

export async function getTextFromImage() {
  try {
    return (
      await Tesseract.recognize(
        path.join(process.cwd(), "./utils/test.png"),
        "jpn"
      )
    ).data.text;
  } catch (err) {
    console.error(err);
    return;
  }
}

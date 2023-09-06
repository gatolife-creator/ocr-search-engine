import type { NextApiRequest, NextApiResponse } from "next";
import { getTextFromImage } from "@/utils/ocr";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const text = await getTextFromImage();
    res.status(200).send(text);
  } catch (err) {
    res.status(500).send(err);
  }
}

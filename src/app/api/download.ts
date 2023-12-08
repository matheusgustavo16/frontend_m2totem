import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const picRes = await fetch("https://picsum.photos/200/300");

  console.log("content-type:", picRes.headers.get("content-type"));

  // maybe you can use this too see if the image's too large
  // to send downstream
  console.log("content-length:", picRes.headers.get("content-length")); 
  const imageBlob: any = await picRes.blob();

  const chunks: any[] = [];

  for (const chunk of imageBlob.stream().read()) {
    chunks.push(chunk);
  }

  console.log(chunks.length);
  res.setHeader(
    "content-type",
    picRes.headers.get("content-type") || "image/*"
  );

  res.setHeader(
    "content-length",
    picRes.headers.get("content-length") || chunks.length
  );

  res.setHeader("Content-Disposition", 'attachment; filename="tomato.jpeg"');

  res.write(Uint8Array.from(chunks));

  return res.status(200).end();
}
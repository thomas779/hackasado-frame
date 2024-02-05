import type { NextApiRequest, NextApiResponse } from "next";

import { BASE_URL, generateFarcasterFrame } from "@/utils";
import { validateMessage } from "@/validate";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
	console.log('hey')
  return res.redirect(302, "https://lu.ma/xl67p196");
}

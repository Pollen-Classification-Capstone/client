import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  let users;
  try {
    users = prisma.pollen_data.findFirst();
    res.json(users);
    console.log("API SUCCESS DEBUG NOTE");
  } catch (e) {
    console.log(e.message);
  }
}

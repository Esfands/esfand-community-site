import type { NextApiRequest, NextApiResponse } from 'next'

export default function Unban(req: NextApiRequest, res: NextApiResponse) {
  
  const apiKey = process.env.API_KEY;
  res.status(200).json({ name: apiKey?.substring(0, 3) })
}
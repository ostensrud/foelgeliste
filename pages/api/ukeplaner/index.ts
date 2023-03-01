import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Ugyldig metode" });
  }
  if (req.method === "GET") {
    try {
      const result = await fetch("https://levreskole.no/?show=rss&fID=2921");
      if (result.ok) {
        const data = await result.text();
        res.status(res.statusCode).send(data);
      } else {
        res.status(res.statusCode).json({ message: result.statusText });
      }
    } catch (e) {
      res.status(500).send({ error: e });
    }
  }
};

export default handler;

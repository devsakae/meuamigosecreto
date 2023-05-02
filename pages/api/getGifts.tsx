import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
   try {
       const client = await clientPromise;
       const db = client.db("masdatabase");
       const gifts = await db
           .collection("gifts")
           .find({})
           .limit(10)
           .toArray();
       res.json(gifts);
   } catch (e: unknown) {
       alert(e);
   }
};
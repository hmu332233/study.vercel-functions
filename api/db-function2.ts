import type { VercelRequest, VercelResponse } from '@vercel/node';

// Import the dependency.
import clientPromise from '../utils/mongodbClient';
// Handler
export default async (request: VercelRequest, response: VercelResponse) => {
  // Get the MongoClient by calling await on the promise.
   // Because it is a promise, it will only resolve once.
   const client = await clientPromise;
   // Use the client to return the name of the connected database.


   const modUserWords = await client.db().collection('user_words');
   const userWords = await modUserWords.find().sort({ _id: -1 });

   response.status(200).json({ data: userWords });
};
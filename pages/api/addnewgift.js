// import clientPromise from "../../lib/mongodb";

// export default async (req, res) => {
//    try {
//        const client = await clientPromise;
//        const db = client.db("masdatabase");
//        const { body: { user, families, title, description, value, imageUrl } } = req;
//        const payload = { user, families, title, description, value, imageUrl };
//        await db
//            .collection("gifts")
//            .createOne(payload);
//        res.send(201);
//    } catch (e) {
//        console.error(e);
//    }
// };
import clientPromise from "../lib/mongodb";

export default function Gifts({ gifts }: any) {
    return (
        <div>
            <h1>Gifts</h1>
            <ul>
                { gifts.map((g: any) => (
                    <li>
                        <h2>{g.title}</h2>
                        <h3>{g.description}</h3>
                        <p>{g.value}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("masdatabase");

        const gifts = await db
            .collection("gifts")
            .find({})
            .limit(20)
            .toArray();

        return {
            props: { gifts: JSON.parse(JSON.stringify(gifts)) },
        };
    } catch (e) {
        console.error(e);
    }
}
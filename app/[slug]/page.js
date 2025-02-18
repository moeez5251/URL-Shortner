import { redirect } from 'next/navigation'
import { Client, Databases, Query } from 'appwrite';
const client = new Client();
client.setProject(process.env.NEXT_PUBLIC_PROJECT)
const databases = new Databases(client);
export default async function Page({ params }) {
    const slug = await params;
    const response = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DB_ID,
        process.env.NEXT_PUBLIC_COLLECTION,
        [
            Query.equal("keyword", slug.slug)
        ]
    );
    if (response) {
        const red = response.documents[0];

        if (red) {

            redirect(red.URL);
        }
        else {
            redirect('/error');
        }
    }
}
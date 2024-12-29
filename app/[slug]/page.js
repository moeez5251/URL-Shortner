import { redirect } from 'next/navigation'
import { Client, Databases } from 'appwrite';
const client = new Client();
client.setProject(process.env.NEXT_PUBLIC_PROJECT)
const databases = new Databases(client);
export default async function Page({ params }) {
    const slug = await params;
    let response= await databases.listDocuments(
        process.env.NEXT_PUBLIC_DB_ID,
        process.env.NEXT_PUBLIC_COLLECTION,
    )
    let red =  response.documents.find(e => {
        return e.keyword === slug.slug;
    })
    if(red){

        redirect(red.URL);
    }
    else{
        redirect('/');
    }
}
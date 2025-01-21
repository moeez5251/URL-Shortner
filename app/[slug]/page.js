import { redirect } from 'next/navigation'
import { Client, Databases, Query } from 'appwrite';
const client = new Client();
client.setProject(process.env.NEXT_PUBLIC_PROJECT)
const databases = new Databases(client);
let limit = 100;  
let offset = 0;
let allDocuments = [];
let hasMore = true;
export default async function Page({ params }) {
    const slug = await params;
   while (hasMore) {
        let response = await databases.listDocuments(
            process.env.NEXT_PUBLIC_DB_ID,
            process.env.NEXT_PUBLIC_COLLECTION,
            [
                Query.limit(limit),
                Query.offset(offset)
            ]
        );

    allDocuments.push(...response.documents);

        if (response.documents.length < limit) {
            hasMore = false;
        } else {
            offset += limit; 
        }
    }
    let red = allDocuments.find(e => {
        return e.keyword === slug.slug;
    })
    if(red){

        redirect(red.URL);
    }
    else{
        redirect('/error');
    }
}
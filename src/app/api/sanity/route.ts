import { createClient, type ClientConfig } from '@sanity/client'

const config: ClientConfig = {
  projectId: 'iw0ox6hp',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
}
const client = createClient(config)

const data = await client.fetch<number>(`count(*)`)
// data is typed as `number`
console.log(`Number of documents: ${data}`)

type Props = {
  documentName: String;
}

export async function getAllPost() {
  await client.getDocument('User').then((data) => console.log(data))
}
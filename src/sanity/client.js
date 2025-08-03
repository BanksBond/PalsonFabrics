import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PF_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});

export const getFliers = async () => {
  const query = `*[_type == "flier"]{
    title,
    description,
    category,
    publishedAt,
    "fileUrl": flierFile.asset->url
  } | order(publishedAt desc)`;

  return await client.fetch(query);
};

import { fallbackProjects, Project } from "./fallbackData";

/**
 * Sanity client abstraction.
 * If SANITY environment variables are provided, fetches from Sanity CMS;
 * otherwise gracefully returns authentic fallback projects.
 */
export async function getProjects(): Promise<Project[]> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

  if (!projectId) {
    return fallbackProjects;
  }

  try {
    const query = encodeURIComponent(
      `*[_type == "project"] | order(number asc) {
        "id": _id,
        number,
        title,
        category,
        description,
        services,
        liveUrl,
        "image": mainImage.asset->url,
        alt
      }`
    );
    const res = await fetch(
      `https://${projectId}.api.sanity.io/v2023-08-01/data/query/${dataset}?query=${query}`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) {
      return fallbackProjects;
    }
    const data = await res.json();
    return data.result && data.result.length > 0 ? data.result : fallbackProjects;
  } catch (error) {
    console.warn("Sanity fetch failed, falling back to local dataset:", error);
    return fallbackProjects;
  }
}

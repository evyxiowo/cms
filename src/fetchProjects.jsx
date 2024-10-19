import { createClient } from "contentful";
import { useState, useEffect, useCallback } from "react"; // Added useCallback

const client = createClient({
  space: 'ywmj9uo5ju0t',
  environment: 'master',
  accessToken: 'Pi0fNozPSs3HQmdVX34mflGgCef8K6ct3ZlZ_qFPDGU',
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null); // New state for error handling

  const getData = useCallback(async () => {
    setLoading(true); // Reset loading state if refetching
    setError(null);   // Clear previous errors

    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError(err.message); // Store the error message
    } finally {
      setLoading(false);
    }
  }, []); // Memoize getData to avoid unnecessary re-renders

  useEffect(() => {
    getData();
  }, [getData]); // Add getData as a dependency

  return { loading, projects, error, refetch: getData }; // Expose refetch function
};

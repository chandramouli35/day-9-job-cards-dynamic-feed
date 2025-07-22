import { useState, useEffect } from "react";

function useFetchJobs() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      try {
        // Try local JSON first, fallback to mock API
        let response = await fetch("/data/jobs.json");
        if (!response.ok) throw new Error("Failed to fetch local JSON");
        let data = await response.json();
        setJobs(data);
      } catch (err) {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
          const data = await response.json();
          // Map mock API data to job-like structure
          setJobs(
            data.slice(0, 3).map((post, index) => ({
              id: post.id,
              title: `Job ${post.id}`,
              company: `Company ${index + 1}`,
              location: ["San Francisco", "New York", "London"][index],
              type: index % 2 === 0 ? "Remote" : "Onsite",
              tags: ["React", "JavaScript"],
            }))
          );
        } catch (apiErr) {
          setError("Failed to fetch jobs");
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchJobs();
  }, []);

  return { jobs, isLoading, error };
}

export default useFetchJobs;

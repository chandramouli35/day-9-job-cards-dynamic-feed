import { useState, useMemo } from "react";
import "./App.css";
import JobCard from "./components/JobCard";
import JobFilter from "./components/JobFilter";
import LoadingSpinner from "./components/LoadingSpinner";
import useFetchJobs from "./hooks/useFetchJobs";

function App() {
  const { jobs, isLoading, error } = useFetchJobs();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesLocation =
        !selectedLocation || job.location === selectedLocation;
      const matchesTag = !selectedTag || job.tags.includes(selectedTag);
      return matchesLocation && matchesTag;
    });
  }, [jobs, selectedLocation, selectedTag]);

  const locations = useMemo(
    () => [...new Set(jobs.map((job) => job.location))],
    [jobs]
  );
  const tags = useMemo(
    () => [...new Set(jobs.flatMap((job) => job.tags))],
    [jobs]
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Job Listings
      </h1>
      <JobFilter
        locations={locations}
        tags={tags}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="text-center text-red-500">
          <p>{error}</p>
          <p>Try refreshing or checking your connection.</p>
        </div>
      ) : filteredJobs.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>No jobs found for the selected filters.</p>
          <button
            onClick={() => {
              setSelectedLocation("");
              setSelectedTag("");
            }}
            className="mt-2 text-blue-500 hover:underline"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

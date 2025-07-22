function JobCard({ job }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-500">{job.location}</p>
      <span
        className={`inline-block px-2 py-1 mt-2 rounded text-white ${
          job.type === "Remote" ? "bg-blue-500" : "bg-green-500"
        }`}
      >
        {job.type}
      </span>
      <div className="flex flex-wrap gap-2 mt-3">
        {job.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default JobCard;

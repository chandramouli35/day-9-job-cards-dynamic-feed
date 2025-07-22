function JobFilter({
  locations,
  tags,
  selectedLocation,
  setSelectedLocation,
  selectedTag,
  setSelectedTag,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="flex-1">
        <label
          htmlFor="location"
          className="block text-gray-700 font-semibold mb-1"
        >
          Location
        </label>
        <select
          id="location"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Locations</option>
          {locations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="tag" className="block text-gray-700 font-semibold mb-1">
          Tag
        </label>
        <select
          id="tag"
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Tags</option>
          {tags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default JobFilter;

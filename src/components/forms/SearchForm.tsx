import React from "react";

const SearchForm: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
       <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Reset
      </button>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;

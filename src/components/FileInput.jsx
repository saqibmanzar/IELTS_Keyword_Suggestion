import React from 'react';

const FileInput = ({ label, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-indigo-600 mb-1">{label}</label>
    <input
      type="file"
      onChange={(e) => onChange(e.target.files[0])}
      className="block w-full text-sm text-gray-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-gray-100 file:text-gray-700
        hover:file:bg-gray-200
        cursor-pointer border border-gray-300 rounded-full
        focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
);

export default FileInput;
import React from 'react';

interface ResultsTableProps {
  results: any[];
}

function ResultsTable({ results }: ResultsTableProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Query Results</h2>
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Class</th>
            <th className="px-4 py-2">Section</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{result.name}</td>
              <td className="border px-4 py-2">{result.class_}</td>
              <td className="border px-4 py-2">{result.section}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultsTable;
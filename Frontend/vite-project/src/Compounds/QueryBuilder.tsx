
import React, { useState } from 'react';
import { Search, RefreshCw } from 'lucide-react';


interface QueryBuilderProps {
  onExecuteQuery: (query: string) => Promise<void>;
}

function QueryBuilder({ onExecuteQuery }: QueryBuilderProps) {

  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Define the handleSubmit function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/students', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      
      
      const processedData = data;  
      
      onExecuteQuery(JSON.stringify(processedData)); 
    } finally {
      setIsLoading(false);
    }
  };

  const commonQueries = [
    "Show all patients admitted this week",
    "List patients with pending lab results",
    "Find patients with diabetes",
    "Show emergency room visits today"
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Query Builder</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your query here..."
          />
          <button
            type="submit"
            disabled={isLoading}
            className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center space-x-2"
          >
            {isLoading ? (
              <RefreshCw className="h-5 w-5 animate-spin" />
            ) : (
              <Search className="h-5 w-5" />
            )}
            <span>Execute Query</span>
          </button>
        </div>
      </form>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Common Queries</h3>
        <div className="grid grid-cols-2 gap-2">
          {commonQueries.map((q, index) => (
            <button
              key={index}
              onClick={() => setQuery(q)}
              className="text-left text-sm text-gray-600 hover:text-blue-600 p-2 rounded-md hover:bg-blue-50"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export {QueryBuilder};
import React, { useEffect } from 'react';
import Header from './Compounds/Header';
import {QueryBuilder} from './Compounds/QueryBuilder';
import ResultsTable from './Compounds/ResultsTable';

function App() {
  const [results, setResults] = React.useState([]);


  useEffect(()=>{
    fetch('http://localhost:5000/member', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error('Error:', error));
  },[])

  console.log(results)


  return (
    <>
      <Header />
      <QueryBuilder 
        onExecuteQuery={(query) => {
          fetch('http://localhost:5000/api/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(query),
          })
          .then(response => response.json())
          .then(data => setResults(data))
          .catch(error => console.error('Error:', error));
        }}
      />
      {/* <ResultsTable results={results} /> */}
    </>
  );
}

export default App;
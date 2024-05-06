// App.tsx
import * as React from 'react';
import './App.css';
import PageTitle from './components/PageTitle';

export default function App() {
  let count = 0;

  const addCount = () => {
    count += 1;
    // count = count + 1
    console.log(count);
  };

  return (
    <>
      <div>
        <PageTitle title="App" />
        <p>{count}</p>
        <button onClick={addCount}>Add</button>
      </div>
    </>
  );
}

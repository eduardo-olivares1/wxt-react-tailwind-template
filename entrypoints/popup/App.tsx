import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import wxtLogo from '/wxt.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <a />
      <div className="max-w-[1280px] mx-auto p-8 text-center">
        <div className='flex justify-center items-center'>
          <a href="https://wxt.dev" target="_blank">
            <img 
              src={wxtLogo} 
              className="h-24 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_0.5em_#54bc4ae0]" 
              alt="WXT logo" 
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img 
              src={reactLogo} 
              className="h-24 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_0.5em_#61dafbaa] animate-[spin_20s_linear_infinite]" 
              alt="React logo" 
            />
          </a>
        </div>
        <h1>WXT + React</h1>
        <div className="p-4">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p className="my-2">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-[#888]">
          Click on the WXT and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;

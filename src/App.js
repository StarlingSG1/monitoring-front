import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getData } from './api/Data';
import Table from './components/Table';

function App() {

  const [data, setData] = useState({})

  const getDataOnLoad = async () => {
    const response = await getData()
    console.log(response["front"])
    if (response) {
      setData(response)
    }
  }

  useEffect(() => {
    getDataOnLoad()
  }, [])

  return (
    <div className='w-full h-full flex pt-20'>
      <div className='w-[800px] m-auto flex flex-col gap-10'>

      {data && Object.keys(data).map((key, index) => (
        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl uppercase'>{key}</h2>
          <table className='border-2 border-black w-full'>
            <tr>
              <th className='text-left'>URL</th>
              <th className='text-left'>PORT</th>
              {/* <th>STATUS</th> */}
            </tr>
                {data[key].map((site, subIndex) => (
                  <tr key={subIndex}>
                    <td>
                      https://{site.url}
                    </td>
                    <td>
                      {site.port}
                    </td>
                  </tr>
                ))}
          </table>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
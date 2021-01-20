import React, { useState, useEffect } from 'react'
import { Table } from 'antd'

import './App.css';
import 'antd/dist/antd.css';

const columns = [
  {
    title: 'Fields',
    dataIndex: 'fields',
  }
];  

function App() {
  const [data, setData] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(() =>{
    const aryObj = []

    for (let i = 0; i < 5000; i++) {
      aryObj.push({ key: i, fields: 'Field ' + i })
    }
    console.log('teste')
    setData(aryObj)
    setLoad(false)
  },[])

  return (
    <div className="App" >
      {
        load ? <h1>Loading...</h1> :
        <Table 
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ y: 400 }}
          style={{ width: 600, margin: 'auto' }}
        >
        </Table>
      }
    </div>
  );
}

export default App;

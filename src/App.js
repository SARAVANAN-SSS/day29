import React, { useState } from 'react'
import { Provider } from './Context'
import Input from './input'
import Tabledata from './Tabledata'



function App() {
    const [data,setdata] = useState("")
    const retrivedata = (list) => {
        setdata(list)
    }
    const deleteupdate = (items) => {
        setdata(items)
    }
    const onsaveddata =(items) => {
        setdata(items)
    }
  return (
    <div>
        <Input retrivedata={retrivedata}/>        
        <Provider value={data}>
            <Tabledata deleteupdate={deleteupdate} onsaveddata={onsaveddata}/>
        </Provider>
    </div>
  )
}

export default App
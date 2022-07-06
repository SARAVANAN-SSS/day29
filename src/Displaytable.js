import React from 'react'

function Displaytable({item,index,edithandler,deletehandler}) {
  return (
    <tr key={index}>
        <td>{index+1}</td>
        <td>{item.user}</td>
        <td>{item.profile}</td>
        <td>
           <button onClick={()=>edithandler(item)}>Edit</button>
       </td>
       <td>
           <button onClick={()=> deletehandler(item)}>Delete</button>
       </td>
    </tr>
    )
}

export default Displaytable
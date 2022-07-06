import React, { Fragment } from 'react'

function Editrow({editlist,item,editrowhandler,cancelhandler,savwhandler}) {
    
  return (
    <Fragment>
       <tr>
           <td>
               <input type="text" />
           </td>
           <td>
               <input type="text" value={editlist.user} onChange={editrowhandler} name="user" required="required"/>
           </td>
           <td>
               <input type="text" value={editlist.profile} onChange={editrowhandler} name="profile" required="required"/>
           </td>
           <td>
               <button onClick={savwhandler}>Save</button>
           </td>
           <td>
               <button onClick={cancelhandler}>Cancel</button>
           </td>
       </tr>
    </Fragment>
  )
}

export default Editrow
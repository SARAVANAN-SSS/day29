import React, { Fragment, useContext, useState } from 'react'
import { Consumer,user } from './Context'
import Displaytable from './Displaytable'
import Editrow from './Editrow'

function Tabledata({deleteupdate,onsaveddata}) {
    const value = useContext(user)
    const [editvalue,seteditvalue] = useState(null)
    const [editlist,seteditlist] = useState({
        user:"",
        profile:"",
        id:""
    })

    const edithandler = (item) => {
        seteditvalue(item.id)
        console.log(item)
        seteditlist({...editlist,user:item.user,profile:item.profile,id:item.id})
    }

    const editrowhandler =(e) => {
        seteditlist({...editlist,[e.target.name]:e.target.value})
    }
    const cancelhandler =() => {
        seteditvalue(null)
    }

    const deletehandler = (item) => {
        const newvalues = value.filter(list => list.id != item.id)
        deleteupdate(newvalues)
    }
    const savwhandler = () => {
        const newvalue = value.findIndex(item => item.id == editlist.id)
        const newarray = [...value]
        newarray[newvalue] = editlist
        onsaveddata(newarray)
        seteditvalue(null)
    }
    return (
    <div>
        {
            value == "" ? <h1>No Data to Display</h1>
            :  <table>
            <thead>
                <tr>
                    <th>SL.NO</th>
                    <th>User</th>
                    <th>Profile</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                   value.map((item,index) => {
                       return (
                            <Fragment key={index}>
                                {
                                    editvalue == item.id ? <Editrow item={item} cancelhandler={cancelhandler} editlist={editlist} editrowhandler={editrowhandler} savwhandler={savwhandler}/>
                                    :  <Displaytable item={item} deletehandler={deletehandler} index={index} edithandler={edithandler}/>
                                }
                            </Fragment>
                        )
                   })
                }
            </tbody>
        </table>
            
        }
       
        
    </div>
  )
}

export default Tabledata
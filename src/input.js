import React, { useRef, useState } from 'react'
import {nanoid} from "nanoid"

function Input({retrivedata}) {
    const inputref = useRef()
    const [list,setlist] = useState([])
    const [data,setdata] = useState({
        user:"",
        profile:""
    })

    const changehandler = (e) => {
        e.preventDefault()

        setdata({...data,[e.target.name]:e.target.value})
    }

    const submitdata = (e) => {
        e.preventDefault()
        const newdata = {
            id:nanoid(),
            user:data.user,
            profile:data.profile
        }
        setlist([...list,newdata])
        setdata({
            user:"",
            profile:""
        })
        inputref.current.focus()
        retrivedata([...list,newdata])
    }
  return (
    <div>
        <form onSubmit={submitdata}>
            <input type={"text"} placeholder="Enter a Name" required="required" name="user" onChange={changehandler} value={data.user} ref={inputref}/>
            <br />
            <br />
            <input type={"text"} placeholder="Enter a Profile" required="required" name="profile" onChange={changehandler} value={data.profile}/>
            <br />
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Input
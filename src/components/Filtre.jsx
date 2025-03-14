import React, { useState } from 'react'


const Filter = ({sports, setfiltered}) => {
    const [title,settitle]= useState("");
     const [description, setdescription] = useState("");
      const [dueDate, setdueDate] = useState("");
      const [status, setstatus] = useState("");
    const click2=(e)=>{
        e.preventDefault();
        setfiltered(sports.filter((sport)=> sport.title.includes(title)&&sport.description.includes(description)&&sport.dueDate.includes(dueDate)&&sport.status.includes(status)))
  };
  return (
    <div>
        <form onSubmit={click2}>
            <input type="text" placeholder='title'required={true} value={title} onChange={(e)=> settitle(e.target.value)} />
            <input type='text' placeholder='description' required={true} value={description} onChange={(e)=>setdescription(e.target.value)}/>
            <input type='date' placeholder='date' value={dueDate} required={true} onChange={(e)=>setdueDate(e.target.value)}/>
            <input type='text' placeholder='status' value={status} required={true} onChange={(e)=>setstatus(e.target.value)}/>
            <input type='submit'/>
        </form>
    </div>
  )
}

export default Filter;
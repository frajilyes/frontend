import React, { useState } from "react";

const AddForm = ({ setfiltered, sports, setsports }) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [dueDate, setdueDate] = useState("");
  const [status, setstatus] = useState("");
  const click1 = (e) => {
    e.preventDefault();
    setsports([
      ...sports,
      { title: title },
      { description: description },
      { dueDate: dueDate },
      { status: status },
    ]);
    setfiltered([
      ...sports,
      { title: title },
      { description: description },
      { dueDate: dueDate },
      { status: status },
    ]);
  };
  return (
    <div>
      <form onSubmit={click1}>
        <input
          type="text"
          placeholder="title"
          value={title}
          required={true}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          required={true}
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <input
          type="date"
          placeholder="date"
          value={dueDate}
          required={true}
          onChange={(e) => setdueDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="status"
          value={status}
          required={true}
          onChange={(e) => setstatus(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddForm;

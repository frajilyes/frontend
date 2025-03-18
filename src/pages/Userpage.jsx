import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Userpage = () => {
  const params = useParams();
  console.log(params);

  const [todos, settodos] = useState([]);

  useEffect(() => {
    axios.get("/Api/users/All/todos")
        .get("/Api/users/:id/todos")
        .then((res) => settodos(res.data))
        .catch((err) => console.log(err));
  }, []);
  return <div>Userpage</div>;
};

export default Userpage;

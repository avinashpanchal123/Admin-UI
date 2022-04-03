import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import User from "./User";
import "./styles/UserList.css";


function UserList() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );
    const data = result.data;

    setData(data);
  }, []);

  const deleteHandler = (id)=>{
    console.log(id)
    const newData = data.filter((el)=>{
      return el.id !== id
    })
    setData(newData)
  }
  return (
    <>
      <div className="user_container">
        <Header />

     
       
          {data.map((user) => {
            let { id, name, email, role } = user;
            return (
              <User
                users={data}
                id={id}
                key={id}
                name={name}
                email={email}
                role={role}
                deleteHandler={deleteHandler}
              />
            );
          })}
       
      </div>
    </>
  );
}

export default UserList;

import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import UserList from "./components/UserList";

function App() {
  return (
    <>
     <div style={{ display: 'block', padding: 30 }}>
         <UserList/>
      <Pagination count={10} />
    </div>
    </>
  );
}

export default App;

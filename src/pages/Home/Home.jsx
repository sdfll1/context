import React, { useContext} from "react";
import { Context } from "../../Context/Context";

function Home() {
    const {id, setId} = useContext(Context)
    
  return (
    <div>
      <h1>Home</h1>
      <button onClick={()=> setId(50)}>click</button>
    </div>
  );
}

export default Home;

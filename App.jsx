import Button  from "./components/Button";
import { useState } from "react";


function App(){
  const [name ,setName] =useState("");
  const [count, setCount]= useState(0);
  return(
    <>
    <div>
      <input type="text" placeholder="Enter Your Name" onChange={(e)=> setName(e.target.value)}/>
      <h2>{name}</h2>
    </div>

        <div>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count +1)}/>
                <button onClick={()=> setCount(count -1)}/>
        </div>
        </>
  )
  
}
export default App1();

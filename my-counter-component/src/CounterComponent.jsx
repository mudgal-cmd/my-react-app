
import react, {useState} from "react"

function CounterComponent(){

  // const [boolVal, setBoolVal] = useState("False");

  // const handleBoolVal = () => {
  //   if(boolVal === "False"){return setBoolVal("True");}
  //   return setBoolVal("False");
  // }
  let flag = false;
  const [count, setCount] = useState(0);
  let intervalId;

  const incrementCount = () => {
     setCount(count+1);
    // return intervalId;
  }
  // let intervalId = incrementCount();
  const decrementCount = () => setCount(count-1)
  const resetCount = () => {
    
    setCount(0);
    clearInterval(incrementCount);
  }


  return (

    // <div>
    //   <p>I am {boolVal}</p>
    //   <button onClick={handleBoolVal}
    //     >Toggle value</button>
    // </div>

    <div>
      <p className="counter">{count}</p>
      <div className="button-group">
        <button className="increment-btn" onClick={(event) => incrementCount(event)}>Increment</button>
        <button className="decrement-btn" onClick={decrementCount}>Decrement</button>
        <button className="reset-btn" onClick={resetCount}>Reset</button>
      </div>
      
    </div>

  );

}

export default CounterComponent
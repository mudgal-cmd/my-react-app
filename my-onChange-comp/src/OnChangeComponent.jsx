import { useState } from "react";

function OnChangeComponent(){

  const [value, setValue] = useState('');

  const handleTextChange = (event) => {
    setValue(event.target.value);
  }

  const [payment, setPayment] = useState('VISA');

  const handlePaymentMethod = (event) => {
    // setPayment(event.target.value);
    setPayment(event.target.value);
  }
  
  return (

    <>
      <input  type="text" placeholder="Enter any additional comments" onChange={(e)=> handleTextChange(e)}/>
      <p>{value}</p>
      <br/>
      <br/>
      <p>Do you want to add any delivery instructions? Please enter below:</p>
      <br/>
      <textarea placeholder="Delivery Instructions" rows={10} cols={30}/>
      <br/>
      <br/>
      <div>
        <h4>Payment Method: </h4>
        <label>
        <input type="radio" value="VISA" name="payment-type" defaultChecked={true} onChange={(e) => handlePaymentMethod(e)}/>
        VISA
        </label>
        <label>
        <br/>
        <br/>
        <input type="radio" value="MASTERCARD" name="payment-type" onChange={(e) => handlePaymentMethod(e)}/>
        MASTERCARD
        </label>
        <label>
        <br/>
        <br/>
        <input type="radio" value="PAYPAL" name="payment-type" onChange={(e) => handlePaymentMethod(e)}/>
        PAYPAL
        </label>
      </div>
      <p>Opted Payment Method: {payment}</p>
     
    </>

  );
}

export default OnChangeComponent;
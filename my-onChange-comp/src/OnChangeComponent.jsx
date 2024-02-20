import { useState } from "react";

function OnChangeComponent(){

  const [value, setValue] = useState('');

  const handleTextChange = (event) => {
    setValue(event.target.value);
  }

  const [payment, setPayment] = useState('VISA');

  const handlePaymentMethod = (event) => {
    setPayment(event.target.value);
  }

  const [delivery, setDelivery] = useState('Delivery');

  const handleDelivery = (event) =>{
    setDelivery(event.target.value);
    // console.log(event);
  }

  const [deliveryInst, setDeliveryInst] = useState('');

  const handleDeliveryInstruction = (event) => {
    setDeliveryInst(event.target.value);
  }
  
  return (

    <>
      <input  type="text" placeholder="Enter any additional comments" onChange={(e)=> handleTextChange(e)}/>
      <p>{value}</p>
      <br/>
      <br/>
      <p>Do you want to add any delivery instructions? Please enter below:</p>
      <br/>
      <textarea placeholder="Delivery Instructions" rows={10} cols={30} onChange={(e)=> handleDeliveryInstruction(e)}/>
      <br/>
      <p>{deliveryInst}</p>
      <br/>
      <br/>
      <select onChange={(e) => handlePaymentMethod(e)}>
        <option value="">Select Payment Method</option>
        <option value="VISA" selected={true}>VISA</option>
        <option value="MASTERCARD">MASTERCARD</option>
        <option value="AMEX">AMEX</option>
        <option value="PAYPAL">PAYPAL</option>
      </select>
      <p>Payment Method: {payment}</p>

      <div onChange={(e)=> handleDelivery(e)}>
        <h4>Please select the delivery method</h4>
        <label>
          <input type="radio" name="delivery-method" value="Pick-Up"/>
          &nbsp;&nbsp;Pick-up
        </label>
        <br/>
        <br/>
        <label>
          <input type="radio" name="delivery-method" value="Delivery" defaultChecked="true"/>
          &nbsp;&nbsp;Delivery
        </label>
        <br/>
        <br/>
        <label>
          <input type="radio" name="delivery-method" value="Schedule Delivery"/>
          &nbsp;&nbsp;Schedule Delivery
        </label>
        
      </div>
      <p>Opted Delivery method: {delivery}</p>
    </>

  );
}

export default OnChangeComponent;
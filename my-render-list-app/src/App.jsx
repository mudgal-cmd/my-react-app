import List from "./List"

function App() {

  const fruits = [
    {id:1, name: "Apple", calories: 95}, 
    {id:2, name: "Orange", calories: 80}, 
    {id:3, name: "Banana", calories: 100}, 
    {id:4, name: "Coconut", calories: 125}, 
    {id:5, name: "Pineapple", calories: 130}, 

]

const vegetables = [
  {id:6, name: "Potatoes", calories: 35}, 
  {id:7, name: "Cabbage", calories: 70}, 
  {id:8, name: "Tomatoes", calories: 120}, 
  {id:9, name: "Bell Pepper", calories: 45}, 
  {id:10, name: "Carrots", calories: 110}, 

]

  return(
    <>
      {/* Using the ternary operator */}
      {/* {fruits.length > 0? <List items = {fruits} category ="Fruits"></List> : []} */} 
      {/* Using the short circuit method, if left is false the remaining expression won't be evaluated */}
      {fruits.length > 0 && <List items = {fruits} category ="Fruits"></List>}
      {vegetables.length> 0? <List items = {vegetables} category = "Vegetables"></List>: []}
    </>
    
  );

}

export default App

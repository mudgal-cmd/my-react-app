
function List(){
  
  const fruits = ['Apple', 'Orange', 'Banana', 'Coconut', 'Pineapple'];

  const fruitObj = [
    {id:1, name: "Apple", calories: 95}, 
    {id:2, name: "Orange", calories: 80}, 
    {id:3, name: "Banana", calories: 100}, 
    {id:4, name: "Coconut", calories: 125}, 
    {id:5, name: "Pineapple", calories: 130}, 

]

  // fruits.sort();

  // const fruitList = fruits.map(fruit => <li>{fruit}</li>);

  fruitObj.sort((a,b) => a.name.localeCompare(b.name)); // Lexicographical or Alphabetical sorting acc to the fruit name

  // fruitObj.sort((a,b) => a.calories - b.calories); // sorting according to the calories / Numeric order / Asc

  const fruitObjList = fruitObj.map(fruit => <li key ={fruit.id}>{fruit.name}: &nbsp; <strong>{fruit.calories}</strong></li>)

  const filteredFruits = fruitObj.filter(fruit => fruit.calories>100);

  return (
    <ol>
      {
      /* {fruitList} */

        filteredFruits.map(fruit => <li key = {fruit.id}>{fruit.name}</li>)

      }

    </ol>
    
  );

}

export default List
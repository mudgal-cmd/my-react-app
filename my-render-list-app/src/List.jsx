import PropTypes from "prop-types";
function List(props){
  
  // const fruits = ['Apple', 'Orange', 'Banana', 'Coconut', 'Pineapple'];

  const itemsArray = props.items;

  // fruits.sort();

  // const fruitList = fruits.map(fruit => <li>{fruit}</li>);

  // fruitObj.sort((a,b) => a.name.localeCompare(b.name)); // Lexicographical or Alphabetical sorting acc to the fruit name

  // fruitObj.sort((a,b) => a.calories - b.calories); // sorting according to the calories / Numeric order / Asc

  const itemObjList = itemsArray.map(item => <li className="list-item" key ={item.id}>{item.name}: &nbsp; <strong>{item.calories}</strong></li>)

  // const filteredFruits = fruitObj.filter(fruit => fruit.calories>100);

  return (
    <>
    <h3 className="item-category">{props.category}</h3>
      <ol className="item-list">
      {
      /* {fruitList} */
        // filteredFruits.map(fruit => <li key = {fruit.id}>{fruit.name}</li>)
        itemObjList

      }

    </ol>
    </>
    
  );

}


List.propTypes = {
  
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))

}

List.defaultProps = {
  category : "Category",
  items: []
}


export default List

function Button (){

  // const handleClick = () => alert('Hello');

  const handleClick = (event) => event.target.style.display = "none";

  const url = "./src/assets/image.jpg";

  const handleClickParam = (name) => console.log(`${name} clicked me`);

  const handleClickEvent = (event) => {
    
    event.target.innerHTML = "OUCH! &#9760;";

    console.log(event);
  
  };

  return (
    // <button onClick={handleClick}>Click ME &#9760;</button>
    // <button onClick={() => handleClickParam('Nishant')}>Click ME &#9760;</button> 'Nishant' string cannot be passed as a param to the arrow function
    // <button onClick={(e) => handleClickEvent(e)}>Click ME &#9760;</button> //Event / 'e' object provided by the onClick event is passed as a param to the arrow func and  we can pass such objects as the param.

    // <button onDoubleClick={(e)=> handleClickEvent(e)}>Click Me &#9760;</button>

    <img src={url} className="image" onClick={(e) => handleClick(e)}></img>

  );

}

export default Button
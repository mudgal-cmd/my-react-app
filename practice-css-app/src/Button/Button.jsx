
import styles from './Button.module.css'
//Three methods to apply styles in React
// 1) External - apply styles in index.css or outside the .jsx file
// 2) MODULES
// 3) INLINE
function Button(){

  // const styles = {
  //     backgroundColor: "hsl(200, 100%, 50%)",
  //     color: "white",
  //     padding: "10px 20px",
  //     borderRadius: "5px",
  //     border: "none",
  //     cursor: "pointer"
  //   }  These are INLINE styles
  
  
  return (
    <button className={styles.button}> 
      Click Me
    </button>

    //<button style = {styles}>Click Me</button>
  );

}

export default Button
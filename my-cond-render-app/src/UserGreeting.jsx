import PropTypes from "prop-types";

function UserGreeting(props){

  // if(props.isLogged){
  //   return (
  //     <h1 className="username">Username: {props.username}</h1>
  //   );
  // }
  // return(
  //   <h1>Username: You are not logged in</h1>
  // );

  const welcomeMsg = <h2 className="loggedIn">Welcome {props.username} </h2>;
  const loginPrompt = <h2 className="notLoggedIn">Please login to continue.</h2>;

  return (
    // <h2>{props.isLogged? `Username: ${props.username}`:"You are not logged in"}</h2>
    props.isLogged? welcomeMsg : loginPrompt 
  );

}

UserGreeting.propTypes = {
  isLogged : PropTypes.bool,
  username : PropTypes.string
}

UserGreeting.defaultProps = {
  isLogged : false,
  username: "Default"
}

export default UserGreeting
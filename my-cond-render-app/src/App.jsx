import { useState } from 'react'
import UserGreeting from './UserGreeting.jsx'

function App() {
  
  return (
    <>
      <UserGreeting isLogged = {true} username = {"Doberman221"}></UserGreeting>
      <UserGreeting isLogged = {false} username = {"Pug113"}></UserGreeting>
      <UserGreeting isLogged = {true} username = {"GoldenRetriever557"}></UserGreeting>
      <UserGreeting isLogged = {"true"} username = {"GoldenRetriever557"}></UserGreeting>
      <UserGreeting></UserGreeting>
    </>
    
  );

}

export default App

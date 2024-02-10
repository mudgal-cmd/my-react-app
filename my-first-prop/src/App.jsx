import Student from "./Student"

function App() {

  return(
    <>
      <Student name="Spongebob" age={30} isStudent = {true}></Student>
      <Student name="Patrick" age={24} isStudent={false}></Student>
      <Student name="Squidward" age={19} isStudent={true}></Student>
      <Student name="Oswald" age={65} isStudent={false}></Student>
      <Student></Student>
    </>
    
  );

}

export default App

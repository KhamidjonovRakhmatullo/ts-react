import Intro from "./components/pages/intro";
import Students from "./components/pages/students";

function App() {
  const studentName ={
    name:{
      first: "Sherzod",
      last: "Xudaynazarov"
    }
  }
  return (
    <div style={{textAlign: "center"}}>
     <Intro name="Rahmatulloh" msgNum={3} isLoggedIn={false}/>
     <Students name={studentName.name}/>
    </div>
  );
}

export default App;

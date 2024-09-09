import Contact from "./components/pages/contact";
import Intro from "./components/pages/intro";
import Status from "./components/pages/status";
import StudentList from "./components/pages/studentList";
import Students from "./components/pages/students";

function App() {
  const studentName = {
    name: {
      first: "Sherzod",
      last: "Xudaynazarov",
    },
  };

  const studentsInfo = [
    {
      first: "Hamidjonov",
      last: "Rahmatulloh",
    },
    {
      first: "Ilyosjon",
      last: "Inomjonov",
    },
    {
      first: "Sherzod",
      last: "Xudaynazarov",
    },
    {
      first: "Donoyor",
      last: "Rahmonov",
    },
  ]


  return (
    <div style={{ textAlign: "center" }}>
      <Intro name="Rahmatulloh" msgNum={3} isLoggedIn={true} />
      <Students name={studentName.name} />
      <StudentList name={studentsInfo}/>
      <Status status="success"/>
      <Contact>Lorem ipsum dolor sit, amet consectetur adipisicing.</Contact>
    </div>
  );
}

export default App;

import Intro from "./components/pages/intro";
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
      <Intro name="Rahmatulloh" msgNum={3} isLoggedIn={false} />
      <Students name={studentName.name} />
      <StudentList name={studentsInfo}/>
    </div>
  );
}

export default App;

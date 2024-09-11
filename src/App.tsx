import Contact from "./components/pages/contact";
import Intro from "./components/pages/intro";
import Lesson from "./components/pages/lesson";
import LessonDays from "./components/pages/lessonDays";
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

  const LessonInfo = [
    {
      name: "English Through Media",
      room: 712,
      students: 8,
      degree: "Upper-Intermediate",
      day: "Monday",
      hour: "10:10",
    },
    {
      name: "Math",
      room: 103,
      students: 12,
      degree: "Elementry",
      day: "Friday",
      hour: "13:10",
    },
    {
      name: "Ecomomics",
      room: 633,
      students: 10,
      degree: "Pre-Intermediate",
      day: "Tuesday",
      hour: "10:10",
    },
]


  return (
    <div style={{ textAlign: "center" }}>
      <Intro name="Rahmatulloh" msgNum={3} isLoggedIn={false} />
      <Students name={studentName.name} />
      <StudentList name={studentsInfo}/>
      <Status status="success"/>
      <Contact>Lorem ipsum dolor sit, amet consectetur adipisicing.</Contact>
      <Lesson lesson="Schedule: "/>
      <LessonDays lesson={LessonInfo}/>
    </div>
  );
}

export default App;

import { LessonDaysProps } from "../types/data"
import './table.css';

const LessonDays = (props: LessonDaysProps) => {
  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Room</th>
          <th>Students</th>
          <th>Degree</th>
          <th>Day</th>
          <th>Hour</th>
        </tr>
      </thead>
      <tbody>
      {props.lesson.map((value, index) => (
        <tr key={index}>
          <td>{value.name}</td>
          <td>{value.room}</td>
          <td>{value.students}</td>
          <td>{value.degree}</td>
          <td>{value.day}</td>
          <td>{value.hour}</td>
        </tr>
        ))}
      </tbody>
    </table>
</div>

  )
}

export default LessonDays
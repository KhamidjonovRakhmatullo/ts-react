import { StudentProps } from "../types/data"


const Students = (props: StudentProps) => {
  return (
    <div>
        <h1>Students: </h1>
        <h2>{props.name.first} {props.name.last}</h2>
    </div>
  )
}

export default Students
import { LessonProps } from "../types/data"

const Lesson = (props: LessonProps) => {
  return (
    <div>
        <h1>{props.lesson}</h1>
    </div>
  )
}

export default Lesson
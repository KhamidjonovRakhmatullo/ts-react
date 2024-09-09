import { ContactProps } from "../types/data"

const Contact = (props: ContactProps) => {
  return (
    <div>
        <h2>{props.children}</h2>
    </div>
  )
}

export default Contact
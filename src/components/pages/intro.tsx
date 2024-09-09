import { IntroProps } from "../types/data"


const Intro = (props: IntroProps) => {
  return (
    <div>
        {props.isLoggedIn ? (
        <h1> 
            Hi {props.name}! You new got {props.msgNum} message(s) on Gmail
        </h1>
        ) : (
            "You are NOT LoggedIn YET"
        )}
    </div>
  )
}

export default Intro
import { IntroProps } from "../types/data"


const Intro = (props: IntroProps) => {
  return (
    <div>
        {props.isLoggedIn ? (
        <h1> 
            Hi {props.name}! You got {props.msgNum} new message(s) on Gmail
        </h1>
        ) : (
            "You are NOT LoggedIn YET"
        )}
    </div>
  )
}

export default Intro
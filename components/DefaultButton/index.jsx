import { Button } from "./styled"

const DefaultButton = (props) => {
  console.log(props.text)
  return <Button>{props.children}</Button>
}

export default DefaultButton

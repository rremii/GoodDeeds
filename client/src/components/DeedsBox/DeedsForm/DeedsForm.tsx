import styled from "styled-components"
import { useRef } from "react"

const DeedsForm = () => {

  const inputRef = useRef<HTMLInputElement | null>(null)

  const AddDeed = () => {
    alert(inputRef.current?.value)
  }

  return <FormLayout>
    <input ref={inputRef} type="text" />
    <button onClick={AddDeed}>Add</button>
  </FormLayout>
}
export default DeedsForm
const FormLayout = styled.div`
  display: flex;
  gap: 10px;
  border: black solid 1px;
  height: 45px;

  input {
    padding-left: 10px;
  }

  button {
    padding: 5px 20px;
    background-color: #D9D9D9;
  }
`

import styled from "styled-components"
import DeedsList from "@/components/DeedsBox/DeedsList/DeedsList"
import DeedsForm from "@/components/DeedsBox/DeedsForm/DeedsForm"

const DeedsBox = () => {

  return <BoxLayout>
    <DeedsForm />
    <DeedsList />
  </BoxLayout>
}
export default DeedsBox
const BoxLayout = styled.div`
  width: 100%;
  background-color: white;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: black solid 1px;
`

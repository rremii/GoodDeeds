import styled from "styled-components"
import { FC } from "react"

interface Props {
  content: string
}

const Deed: FC<Props> = ({ content }) => {
  return <DeedLayout>
    {content}
  </DeedLayout>
}
export default Deed
const DeedLayout = styled.div`


`

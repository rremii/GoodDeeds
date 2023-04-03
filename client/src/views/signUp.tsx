import styled from "styled-components"
import { SignUpForm } from "@/components/SignUpFom/SignUpForm"

const SingUpView = () => {
  return <SingUpLayout>
    <SignUpForm />
  </SingUpLayout>
}
export default SingUpView
const SingUpLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;


`

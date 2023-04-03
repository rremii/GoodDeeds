import styled from "styled-components"
import { LoginForm } from "@/components/LoginFom/LoginForm"

const LoginView = () => {
  return <LoginLayout>
    <LoginForm />
  </LoginLayout>
}
export default LoginView
const LoginLayout = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

`

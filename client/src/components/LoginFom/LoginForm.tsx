import styled from "styled-components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useEffect, useState } from "react"
import { Form } from "@/shared/ui/Form"

export interface FormFields {
  email: string;
  password: string;
}


const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required()
}).required()


const LoginFormData = {
  btnText: "Sign In",
  linkText: "Don't have an account yet?",
  title: "Sign In",
  linkHref: "/auth/signUp"
}

export const LoginForm = () => {

  const [loginError, setLoginError] = useState<string>("")

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema)
  })

  // const [login, { isLoading, data, error }] = useLoginMutation()

  // useEffect(() => {
  //   if (!error && data) {
  //     localStorage.setItem("accessToken", data.accessToken)
  //     navigate("/game-menu")
  //   }
  //   if (error && error.message)
  //     debugger
  //
  //   setLoginError(error?.message)
  // }
// }, [isLoading, data]
// )


  const OnSubmit = async (data: FormFields) => {
    // await login(data)
    reset()
  }

  return <Form {...LoginFormData}  OnSubmit={handleSubmit(OnSubmit)}>
    <input type="email" {...register("email")} placeholder="Email" />
    <input type="password"  {...register("password")} placeholder="Password" />
  </Form>

}

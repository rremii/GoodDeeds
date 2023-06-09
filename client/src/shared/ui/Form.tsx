import styled from "styled-components"
// import { NavLink, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { FC, ReactNode } from "react"
import Link from "next/link"


interface IProps {
  // children?: ReactNode[]
  OnSubmit: () => void
  title: string
  btnText: string
  linkText: string
  linkHref: string
}

export const Form: FC<IProps> = ({ children, OnSubmit, btnText, linkText, title, linkHref }) => {

  return <FormLayout autoComplete="off" onSubmit={OnSubmit}>
    <div className="title">
      <h2>{title}</h2>
    </div>
    <div className="input-box">
      {children}
    </div>
    <div className="submit-box">
      <button type="submit">{btnText}</button>
    </div>
    <Link href={"/" + linkHref} className="link">
      {linkText}
    </Link>
  </FormLayout>
}
const FormLayout = styled.form`

  width: 280px;
  min-height: 430px;
  background: linear-gradient(179.5deg, #00a33c 0.43%, rgb(45, 132, 117) 95.39%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 29px 26px 29px;

  .title {
    margin-bottom: 56px;

    h2 {

      font-family: 'IBM Plex Sans Condensed', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 52px;
      /* identical to box height */
      color: #FFFFFF;
    }
  }

  .input-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 22px;
    width: 100%;

    input {
      width: 100%;
      height: 45px;
      background: #E7E7E7;
      border-radius: 8px;
      padding-left: 18px;

      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;

      color: #040306;

      ::placeholder {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;

        color: rgba(8, 2, 13, 0.56);
      }
    }
  }

  .submit-box {
    margin-top: 50px;
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;

    button {
      background: #ffffff;
      border-radius: 9px;
      padding: 5px 19px;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 30px;

      color: #010000;
    }
  }

  .link {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #FFFFFF;
  }
`

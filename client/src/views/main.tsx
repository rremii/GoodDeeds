import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import { useAppDispatch } from "../store/ReduxStore"
import { useRouter } from "next/router"
import DeedsBox from "@/components/DeedsBox/DeedsBox"
import FriendsBox from "@/components/FriendsBox/FriendsBox"
import SearchBox from "@/components/SearchBox/SearchBox"


const MainView = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()


  return (
    <MainWrapper>
      <div className="side-bar">
        <SearchBox />
        <FriendsBox />
      </div>
      <DeedsBox />
    </MainWrapper>
  )
}
export default MainView
const MainWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  .side-bar {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: aqua;
    min-width: 360px;
  }
`

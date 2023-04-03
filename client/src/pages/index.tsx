import Head from "next/head"
import useIsAuth from "@/hooks/useIsAuth"
import MainView from "@/views/main"
import { useEffect } from "react"
import { useRouter } from "next/router"


export default function Home() {
  const Router = useRouter()
  // const { isPending, isLoggedIn } = useIsAuth()
  useEffect(() => {
    Router.push("/auth/login")
  }, [])
  // return <main>{!isPending && isLoggedIn === "success" && <Main />}</main>
  return <main><MainView /></main>
}

import { useRouter } from "next/router"
import HomeLayout from "../layouts/HomeLayout"

export default function useLayout() {
  const router = useRouter()

  let Layout = HomeLayout
  if (router.route === "") {
    console.log("test")
    Layout = HomeLayout
  } else {
    console.log("test2")
  }
  return Layout
}

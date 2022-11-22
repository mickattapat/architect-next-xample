import { useRouter } from "next/router";
import MainLayout from "layouts/MainLayout";
import HomeLayout from "layouts/HomeLayout";

export default function useLayout() {
  const router = useRouter();

  let Layout = MainLayout;
  if (
    router.route === "/" ||
    router.route === "/page1" ||
    router.route === "/page2"
  ) {
    Layout = HomeLayout;
  } else {
    Layout = MainLayout;
  }
  return Layout;
}

// react router dom imports
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

// component

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <a href="https://www.youtube.com" target="_blank">
          Youtube
        </a>
        |
        <a href="https://github.com/behruzbektester" target="_blank">
          Github
        </a>
      </footer>
    </>
  );
}

export default MainLayout;

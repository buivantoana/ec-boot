import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCoursesContext } from "../App";
import LayoutWebsite from "../components/layouts/LayoutWebsite";

import PrivateRouter from "../components/PrivateRouter";
import NotFound from "../components/NotFound";

import LayoutAdmin from "../components/layouts/LayoutAdmin";
import HomeController from "../pages/home/HomeController";

const Router = () => {
  const context: any = useCoursesContext();

  return (
    <Routes>
      <Route path='/' element={<LayoutWebsite />}>
        <Route path='' element={<HomeController />} />
      </Route>
      <Route path='/admin' element={<LayoutAdmin />}>
        {/* <Route path='' element={<DashBoardController />} /> */}
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Router;

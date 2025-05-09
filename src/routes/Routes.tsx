import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCoursesContext } from "../App";
import LayoutWebsite from "../components/layouts/LayoutWebsite";

import PrivateRouter from "../components/PrivateRouter";
import NotFound from "../components/NotFound";

import LayoutAdmin from "../components/layouts/LayoutAdmin";
import HomeController from "../pages/home/HomeController";
import AiGenController from "../pages/ai_gen/AiGenController";
import TryOnEditorController from "../pages/editor/TryOnEditorController";

const Router = () => {
  const context: any = useCoursesContext();

  return (
    <Routes>
      <Route path='/' element={<LayoutWebsite />}>
        <Route path='' element={<HomeController />} />
        <Route path='ai-gen' element={<AiGenController />} />
        <Route path='editor' element={<TryOnEditorController />} />
      </Route>
      <Route path='/admin' element={<LayoutAdmin />}>
        {/* <Route path='' element={<DashBoardController />} /> */}
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Router;

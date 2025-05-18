import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCoursesContext } from "../App";
import LayoutWebsite from "../components/layouts/LayoutWebsite";

import PrivateRouter from "../components/PrivateRouter";
import NotFound from "../components/NotFound";

import LayoutAdmin from "../components/layouts/LayoutAdmin";
import HomeController from "../pages/home/HomeController";
import AiGenController from "../pages/ai_gen/AiGenController";
import TryOnEditorController from "../pages/editor/TryOnEditorController";
import AiVideoController from "../pages/ai_video/AiVideoController";
import AiChatController from "../pages/ai-chat/AiChatController";
import LoginController from "../pages/login/LoginController";
import PayController from "../pages/pay/PayController";

const Router = () => {
  const context: any = useCoursesContext();

  return (
    <Routes>
      <Route path='/' element={<LayoutWebsite />}>
        <Route path='' element={<HomeController />} />
        <Route path='ai-gen' element={<AiGenController />} />
        <Route path='ai-video' element={<AiVideoController />} />
        <Route path='ai-chat' element={<AiChatController />} />
      </Route>
      <Route path='/admin' element={<LayoutAdmin />}>
        {/* <Route path='' element={<DashBoardController />} /> */}
      </Route>
      <Route path='editor' element={<TryOnEditorController />} />
      <Route path='login' element={<LoginController />} />
      <Route path='pay' element={<PayController />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Router;

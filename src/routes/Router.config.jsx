import { createBrowserRouter, Outlet, useParams } from "react-router-dom";
import App from "../App";
import Caption from "../components/Caption";
import Doa from "../components/Doa";
import DoaDetail from "../components/DoaDetail";
import ListSurah from "../components/ListSurah";
import Ngaji from "../components/Ngaji";
import Tafsir from "../components/Tafsir";
import UploadCaption from "../components/UploadCaption";
import CaptionEditor from "../pages/CaptionEditor";

const NgajiComponent = () => {
  const params = useParams();
  return (
    <div>
      <p>
        {params.nomor ? <Ngaji nomor={`${params.nomor}`} /> : <ListSurah />}
      </p>
    </div>
  );
};
const DoaComponent = () => {
  const params = useParams();
  return (
    <div>
      <p>{params.id ? <DoaDetail id={`${params.id}`} /> : <Doa />}</p>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-custom-radial">
        <App />
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <Caption />,
      },
      {
        path: "quran/:nomor?",
        element: <NgajiComponent />,
      },
      {
        path: "doa/:id?",
        element: <DoaComponent />,
      },
      {
        path: "caption",
        element: <UploadCaption />,
      },
      {
        path: "tafsir/:nomor",
        element: <Tafsir />,
      },
      
    ],
  },
  {
    path:"/caption_editor/:id",
    element:<CaptionEditor />
  }
]);
export default router;

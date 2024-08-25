import { createBrowserRouter, Outlet, useParams } from "react-router-dom";
import Doa from "../components/Doa";
import App from "../App";
import ListSurah from "../components/ListSurah";
import Kuis from "../components/Kuis";
import Ngaji from "../components/Ngaji";
import DoaDetail from "../components/DoaDetail";


const NgajiComponent = () => {
  const params = useParams();
  return (
    <div>
      <p>
        {params.nomor
          ?<Ngaji nomor={`${params.nomor}`} />
          : <ListSurah />}
      </p>
    </div>
  );
};
const DoaComponent = () => {
  const params = useParams();
  return (
    <div>
      <p>
        {params.id
          ?<DoaDetail id={`${params.id}`} />
          : <Doa />}
      </p>
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
        path: "quran/:nomor?",
        element: <NgajiComponent />,
      },
      {
        path: "doa/:id?",
        element: <DoaComponent />,
      },
      {
        path: "kuis",
        element: <Kuis />,
      },
      
    ],
  },
]);


export default router;

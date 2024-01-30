import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "pages/Main";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Main />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

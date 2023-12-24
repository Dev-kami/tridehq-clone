import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import SolutionsPage from "./pages/SolutionsPage";
import AboutPage from "./pages/AboutPage";
import FeesPage from "./pages/FeesPage";
import BlogsPage from "./pages/BlogsPage";
import ErrorElement from "./ui/ErrorElement";
import { CtaProvider } from "./contexts/CtaContext";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorElement />,

      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/solutions",
          element: <SolutionsPage />,
        },
        {
          path: "/about-us",
          element: <AboutPage />,
        },
        {
          path: "/fees",
          element: <FeesPage />,
        },
        {
          path: "/blogs",
          element: <BlogsPage />,
        },
      ],
    },
  ]);

  return (
    <CtaProvider>
      <RouterProvider router={router} />
    </CtaProvider>
  );
}

export default App;

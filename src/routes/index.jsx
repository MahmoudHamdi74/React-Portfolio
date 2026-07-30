import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("../Pages/home"));
const About = lazy(() => import("../components/About/About"));
const Skills = lazy(() => import("../components/Skills/Skills"));
const Projects = lazy(() => import("../components/Projects/Projects"));
const Contact = lazy(() => import("../components/Contact/Contact"));
const Github = lazy(() => import("../components/GitHub/Github"));
const NotFound = lazy(() => import("../Pages/NotFound"));

// Loading Fallback Component
const LoadingFallback = () => (
  <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
    <div className="rounded-2xl p-8 flex flex-col items-center justify-center min-h-55 bg-amber-100/50 dark:bg-gray-900/50 border border-amber-200 dark:border-purple-800/50">
      <div className="blob-loader"></div>
      <p className="text-gray-900 dark:text-white mt-6 font-medium">Loading...</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">Please wait</p>
    </div>
  </div>
);

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Home />
      </Suspense>
    ),
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/Skills",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Skills />
          </Suspense>
        ),
      },
      {
        path: "/Projects",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "/Github",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Github />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={Router} />;
}

export default Router;

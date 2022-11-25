import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Broken from './Pages/Broken/Broken';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Education from './Pages/Education/Education';
import Skills from './Pages/Skills/Skills';
import Seminars from './Pages/Seminars/Seminars';
import Interests from './Pages/Interests/Interests';
import Awards from './Pages/Awards/Awards';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: 'contact',
          element: <Contact></Contact>,
        },
        {
          path: 'education',
          element: <Education></Education>,
        },
        {
          path: 'skills',
          element: <Skills></Skills>,
        },
        {
          path: 'seminars',
          element: <Seminars></Seminars>,
        },
        {
          path: 'interests',
          element: <Interests></Interests>,
        },
        {
          path: 'awards',
          element: <Awards></Awards>,
        },
        {
          path: '*',
          element: <Broken></Broken>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

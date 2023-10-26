import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements, useLocation } from 'react-router-dom'
import { allCourses0 } from './data/course';
import Views from './utilities/Views';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout title={"Bow online course registration"} />}>
//       <Route index element={<Home />} />
//       <Route path="login" element={<Login />} />
//       <Route path="*" element={<p>Wrong route</p>} />
//     </Route>
//   )
// )


function App() {
  const [allCourses, setAllCourses] = useState(allCourses0);

  // Todo: Use it on <form onSubmit={addCourse}/> 
  const addCourse = (newCourse) => {
    setAllCourses(...allCourses, newCourse);
  }

  return (

      <BrowserRouter>
          <Views />
          {/* <footer>{ !auth.user ? 'not logged in' : 'logged in'}</footer> */}
      </BrowserRouter>

  );
}

export default App;



// User Authen and Router :
//   Todo: research on auth and user and routing
//   should i use other people's library
//   do i have to build my own

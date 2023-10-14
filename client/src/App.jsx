import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css'
import DefaultLayout from './DefaultLayout';
// import DefaultLayout from './DefaultLayout';
function App() {

  return (
    <>
     <Routes>
        {/* <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} /> */}
        <Route element={<DefaultLayout />}>
          <Route index element={<h1>hi</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App

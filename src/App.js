import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeView from './views/Home';
import NotFound from './views/NotFound'
import CoursesView  from './views/Courses'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/cursos" element={<CoursesView />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  );
}

export default App;

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeView from './views/Home';
import NotFound from './views/NotFound'
import CoursesView  from './views/Courses'
import CourseDetailView from './views/CourseDetail';
import { DashboardView } from './views/Dashboard';
import { AdminCourses } from './views/AdminCourses';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/cursos" element={<CoursesView />} />
      <Route path="/cursos/:id" element={<CourseDetailView />} />
      <Route path="/portal" element={<DashboardView />} />
      <Route path="/portal/cursos" element={<AdminCourses />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  );
}

export default App;

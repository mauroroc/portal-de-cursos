import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeView from './views/Home';
import NotFound from './views/NotFound'
import CoursesView  from './views/Courses'
import CourseDetailView from './views/CourseDetail';
import { DashboardView } from './views/Dashboard';
import { AdminCourses } from './views/AdminCourses';
import { AdminAddCourse } from './views/AdminAddCourse';
import { AdminEditCourse } from './views/AdminEditCourse';
import { Login } from './views/Login';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/cursos" element={<CoursesView />} />
      <Route path="/cursos/:id" element={<CourseDetailView />} />
      <Route path="/portal" element={<PrivateRoute><DashboardView /></PrivateRoute>} />
      <Route path="/portal/cursos" element={<PrivateRoute userTypes={[1]}><AdminCourses /></PrivateRoute>} />
      <Route path="/portal/cursos/add" element={<PrivateRoute userTypes={[1]}><AdminAddCourse /></PrivateRoute>} />
      <Route path="/portal/cursos/:id" element={<PrivateRoute userTypes={[1]}><AdminEditCourse /></PrivateRoute>} />
      <Route path="/portal/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  );
}

export default App;

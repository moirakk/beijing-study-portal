import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollManager from './components/ScrollManager'
import { lazy } from 'react'
const Dashboard = lazy(() => import('./pages/Dashboard'))
const SubjectDetail = lazy(() => import('./pages/SubjectDetail'))
const TopicDetail = lazy(() => import('./pages/TopicDetail'))
const Semester = lazy(() => import('./pages/Semester'))
const Search = lazy(() => import('./pages/Search'))
const WrongBook = lazy(() => import('./pages/WrongBook'))
const Flashcards = lazy(() => import('./pages/Flashcards'))

export default function App() {
  return (
    <HashRouter>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/subjects" element={<Navigate to="/" replace />} />
          <Route path="/subject/:id" element={<SubjectDetail />} />
          <Route path="/topic/:id" element={<TopicDetail />} />
          <Route path="/semester/:id" element={<Semester />} />
          <Route path="/search" element={<Search />} />
          <Route path="/wrongbook" element={<WrongBook />} />
          <Route path="/flashcards" element={<Flashcards />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

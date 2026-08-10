import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollManager from './components/ScrollManager'
import Dashboard from './pages/Dashboard'
import SubjectDetail from './pages/SubjectDetail'
import TopicDetail from './pages/TopicDetail'
import Semester from './pages/Semester'
import Search from './pages/Search'
import WrongBook from './pages/WrongBook'
import Flashcards from './pages/Flashcards'

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

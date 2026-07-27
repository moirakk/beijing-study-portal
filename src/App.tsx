import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import SubjectDetail from './pages/SubjectDetail'
import TopicDetail from './pages/TopicDetail'
import Search from './pages/Search'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/subjects" element={<Navigate to="/" replace />} />
          <Route path="/subject/:id" element={<SubjectDetail />} />
          <Route path="/topic/:id" element={<TopicDetail />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

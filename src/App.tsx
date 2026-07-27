import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Subjects from './pages/Subjects'
import SubjectDetail from './pages/SubjectDetail'
import KnowledgeTree from './pages/KnowledgeTree'
import TopicDetail from './pages/TopicDetail'
import Search from './pages/Search'
import Progress from './pages/Progress'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/subject/:id" element={<SubjectDetail />} />
          <Route path="/subject/:id/tree" element={<KnowledgeTree />} />
          <Route path="/topic/:id" element={<TopicDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/progress" element={<Progress />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

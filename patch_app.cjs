const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/import Dashboard from '.\/pages\/Dashboard'/g, "import { lazy } from 'react'\nconst Dashboard = lazy(() => import('./pages/Dashboard'))");
code = code.replace(/import SubjectDetail from '.\/pages\/SubjectDetail'/g, "const SubjectDetail = lazy(() => import('./pages/SubjectDetail'))");
code = code.replace(/import TopicDetail from '.\/pages\/TopicDetail'/g, "const TopicDetail = lazy(() => import('./pages/TopicDetail'))");
code = code.replace(/import Semester from '.\/pages\/Semester'/g, "const Semester = lazy(() => import('./pages/Semester'))");
code = code.replace(/import Search from '.\/pages\/Search'/g, "const Search = lazy(() => import('./pages/Search'))");
code = code.replace(/import WrongBook from '.\/pages\/WrongBook'/g, "const WrongBook = lazy(() => import('./pages/WrongBook'))");
code = code.replace(/import Flashcards from '.\/pages\/Flashcards'/g, "const Flashcards = lazy(() => import('./pages/Flashcards'))");

fs.writeFileSync('src/App.tsx', code);

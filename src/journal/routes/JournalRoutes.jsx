import { Navigate, Route, Routes } from 'react-router-dom'
import JournalApp from '../../JournalApp'
import { HomePage } from '../pages/HomePage'

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/*" element={<Navigate to="/" /> } />
    </Routes>
  )
}

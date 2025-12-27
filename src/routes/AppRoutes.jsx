import BasicLayout from '../layouts/BasicLayout'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import TodoPage from '../pages/TodoPage'
import PrivateRoute from './PrivateRoute'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import { TodoProvider } from '../context/TodoContext'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<BasicLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path="/app" element={
                    <PrivateRoute>
                        <TodoProvider>
                            <TodoPage />
                        </TodoProvider>
                    </PrivateRoute>
                } />
            </Route>
        </Routes>
    )
}

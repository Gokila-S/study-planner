import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
// import Footer from '../components/Footer'

export default function BasicLayout() {
    return (
        <div className='text-black min-h-screen' style={{ fontFamily: "'Quicksand', 'Segoe UI', 'Arial', sans-serif" }}>
            <Header />
            <div className='min-h-[90vh] bg-white p-10'>
                <Outlet />
            </div>
            {/* Footer removed */}
        </div>
    )
}

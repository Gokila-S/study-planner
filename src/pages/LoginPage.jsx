import { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';

// uncontrolled component
export default function LoginPage() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const emailRef = useRef();
    const passRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        const result = login(email, password);
        if (result) {
            Swal.fire({
                icon: "success",
                title: "Login successful",
                text: "Welcome back!",
            });
            navigate('/app');
        } else {
            Swal.fire({
                icon: "error",
                title: "Login failed",
                text: "email or password is wrong.",
            });
        }
    }
    return (
        <div className='w-full flex flex-col justify-center items-center min-h-[80vh] bg-green-50'>
            <form onSubmit={handleSubmit} className='bg-white shadow-lg w-96 p-10 rounded-2xl border border-green-100'>
                <h1 className='text-3xl text-center mb-8 font-bold text-green-700'>
                    Welcome Back to Study Planner
                </h1>
                <section className='flex flex-col gap-4'>
                    <input
                        ref={emailRef}
                        className='p-3 rounded-lg bg-green-50 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 transition'
                        type="email"
                        placeholder='📩 Email'
                        required
                    />
                    <input
                        ref={passRef}
                        className='p-3 rounded-lg bg-green-50 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 transition'
                        type="password"
                        placeholder='🔒 Password'
                        required
                    />
                </section>
                <section className='flex gap-3 mt-6'>
                    <button 
                        className='flex-1 cursor-pointer p-3 rounded-lg text-white bg-green-500 hover:bg-green-600 shadow-md hover:shadow-lg transition font-semibold' 
                        type='submit'
                    >
                        Login
                    </button>
                    <button 
                        className='flex-1 cursor-pointer p-3 rounded-lg text-green-700 bg-green-100 hover:bg-green-200 shadow-md hover:shadow-lg transition font-semibold' 
                        type='reset'
                    >
                        Reset
                    </button>
                </section>
                <div className='text-sm mt-6 text-center text-green-700'>
                    Not a member? <Link to="/register" className='text-green-600 font-semibold hover:underline'>Create an account</Link>
                </div>
            </form>
        </div>
    )
}

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-green-50">
      <section className="w-2/3 max-w-3xl text-center">
        <h1 className="font-extrabold text-6xl text-green-700 mb-6">
          Welcome to Study Planner
        </h1>
        <p className="text-xl text-green-900 mb-8 leading-relaxed">
          Plan, organize, and track your study sessions with ease.<br/>
          Stay motivated and achieve your learning goals with your personal study planner.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            to="/login" 
            className="bg-green-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-600 transition shadow-md hover:shadow-lg"
          >
            Start Planning
          </Link>
          <Link 
            to="/register" 
            className="bg-white text-green-700 py-3 px-8 rounded-lg font-semibold border-2 border-green-400 hover:bg-green-50 transition shadow-md"
          >
            Sign Up
          </Link>
        </div>
      </section>
    </div>
  )
}

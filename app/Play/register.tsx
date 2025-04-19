import Navbar from '../Navbar/page'

export default function Register() {
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <form className="space-y-4">
          <input type="text" placeholder="First Name" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Last Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Business Email" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Company Address (optional)" className="w-full p-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
    </>
  )
}

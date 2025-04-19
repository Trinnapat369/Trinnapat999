import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="font-bold">HydroStation</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  )
}

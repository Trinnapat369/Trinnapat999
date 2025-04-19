import Navbar from '../Navbar/page'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Welcome to HydroStation</h1>
        <p className="text-gray-600 mt-4">Your water solution starts here 💧</p>
      </div>
    </>
  )
}
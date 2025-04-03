import Image from 'next/image';

export default function CardWithBanner() {
  return (
    <div className="relative w-[400px] h-[200px] border rounded-lg overflow-hidden shadow-lg m-auto">
      {/* Banner */}
      <div className="absolute top-[-20px] left-[50%] translate-x-[-50%] bg-blue-200 px-4 py-1 border rounded shadow">
        <span className="font-bold text-black">Banner</span>
      </div>

      {/* Card Content */}
      <div className="absolute inset-0 flex items-center justify-center bg-green-300">
        <p className="border border-white px-4 py-2 text-white font-semibold">
          This is css position
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-white text-black">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
      <p className="mb-6">Elegant products just for you.</p>
      <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">Explore Now</button>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Best Selling Products</h2>
        <div className="flex space-x-8">
          <div className="text-center">
            <p className="font-bold">Luxury Watch</p>
            <p>$299</p>
          </div>
          <div className="text-center">
            <p className="font-bold">Elegant Bag</p>
            <p>$199</p>
          </div>
          <div className="text-center">
            <p className="font-bold">Stylish Glasses</p>
            <p>$149</p>
          </div>
        </div>
      </div>
    </main>
  );
}

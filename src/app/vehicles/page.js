import Link from "next/link";

export default function VehiclesPage() {
  return (
    <div className="flex">
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Manage Vehicles</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <p className="mb-4 text-gray-600">Add, update, and manage vehicle details.</p>
          <Link href="/vehicles/add" className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-500 transition duration-200">
            Add New Vehicle
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Vehicle List</h3>
          <ul className="list-disc pl-5">
            {/* Placeholder for vehicle list items */}
            <li className="flex justify-between items-center mb-4 p-2 border-b border-gray-200">
              <span className="text-gray-700">Vehicle 1</span>
              <Link href="/vehicles/edit/1" className="text-blue-600 hover:underline transition duration-200">Edit</Link>
            </li>
            <li className="flex justify-between items-center mb-4 p-2 border-b border-gray-200">
              <span className="text-gray-700">Vehicle 2</span>
              <Link href="/vehicles/edit/2" className="text-blue-600 hover:underline transition duration-200">Edit</Link>
            </li>
            {/* Add more vehicles as needed */}
          </ul>
        </div>
      </main>
    </div>
  );
}

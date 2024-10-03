export default function AddVehiclePage() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-4">Add New Vehicle</h2>
        <form className="bg-white p-4 rounded shadow-md">
          <div className="mb-4">
            <label htmlFor="vehicleName" className="block mb-2">Vehicle Name</label>
            <input type="text" id="vehicleName" className="border border-gray-300 p-2 w-full rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="vehicleType" className="block mb-2">Vehicle Type</label>
            <input type="text" id="vehicleType" className="border border-gray-300 p-2 w-full rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="licensePlate" className="block mb-2">License Plate</label>
            <input type="text" id="licensePlate" className="border border-gray-300 p-2 w-full rounded" required />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
            Add Vehicle
          </button>
        </form>
      </div>
    );
  }
  
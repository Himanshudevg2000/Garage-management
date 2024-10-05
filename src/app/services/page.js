export default function Services() {
  const services = [
    { id: 1, name: 'Oil Change' },
    { id: 2, name: 'Tire Replacement' },
    { id: 3, name: 'Brake Inspection' },
  ];

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold my-6">Available Services</h2>
      <ul className="space-y-4">
        {services.map(service => (
          <li key={service.id} className="p-4 bg-white rounded shadow">
            {service.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

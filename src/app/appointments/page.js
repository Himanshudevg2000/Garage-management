export default function Appointments() {
    const appointments = [
      { id: 1, vehicle: 'Toyota Corolla', date: '2024-10-05', time: '10:00 AM' },
      { id: 2, vehicle: 'Honda Civic', date: '2024-10-06', time: '02:00 PM' },
    ];
  
    return (
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold my-6">Scheduled Appointments</h2>
        <ul className="space-y-4">
          {appointments.map(appointment => (
            <li key={appointment.id} className="p-4 bg-white rounded shadow">
              {appointment.vehicle} - {appointment.date} at {appointment.time}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
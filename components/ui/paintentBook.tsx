const TotoalAppointment = () => {
  const patients = [
    { id: 1, avatar: "/patient1.jpg", name: "Patient 1" },
    { id: 2, avatar: "/patient2.jpg", name: "Patient 2" },
    { id: 3, avatar: "/patient3.jpg", name: "Patient 3" },
    { id: 4, avatar: "/patient4.jpg", name: "Patient 4" },
  ];

  const additionalCount = 5;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-fit">
      <h2 className="text-gray-800 font-semibold text-lg mb-4">
        Total Appointment
      </h2>
      <div className="flex items-center">
        {patients.map((patient, index) => (
          <div
            key={patient.id}
            className="relative w-12 h-12 rounded-full border-4 border-white overflow-hidden"
            style={{ marginLeft: index > 0 ? "-12px" : "0" }}
          >
            <img
              src={patient.avatar}
              alt={patient.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div
          className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white font-semibold text-sm border-4 border-white"
          style={{ marginLeft: "-12px" }}
        >
          {additionalCount}+
        </div>
      </div>
    </div>
  );
};

export default TotoalAppointment;

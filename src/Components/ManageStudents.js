// ManageStudents.js
import React, { useState } from 'react';
import { Trash2, Edit, Plus } from 'react-feather';
import Sidebar from './Sidebar';

const ManageStudents = () => {
  const initialStudents = [
    // ... (same as your initialStudents array)
  ];

  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingStudent, setIsAddingStudent] = useState(false);

  const handleDeleteStudent = (studentId) => {
    // Implement your logic to delete a student by ID
    // Update the 'students' state accordingly
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openAddStudentForm = () => {
    setIsAddingStudent(true);
  };

  return (
    <div className="flex h-screen">
      <div style={{display: 'grid', gridTemplateColumns: '250px auto'}}>
		<Sidebar />  
      </div>
      <div className="ml-6 w-3/4 p-4">
        <h2 className="text-2xl font-semibold mb-8">Manage Clients</h2>

        <div className="flex mb-4 ">
          <div className="mb-4 w-3/4 mt-4">
            <input
              type="text"
              placeholder="Search students..."
              className="border rounded py-2 px-3 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-4"
            onClick={openAddStudentForm}
          >
            <Plus size={16} className="mr-2 inline" />
            Add Client
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-20 h-20 mx-auto rounded-full mb-2"
              />
              <h3 className="text-lg font-semibold">{student.name}</h3>
              <p className="text-gray-600">{student.phoneNumber}</p>
              <p className="text-green-500 font-semibold">{student.status}</p>
              <div className="mt-4">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600"
                  onClick={() => {
                    // Implement your update student logic
                  }}
                >
                  <Edit size={16} /> {/* Edit icon */}
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  onClick={() => {
                    handleDeleteStudent(student.id);
                  }}
                >
                  <Trash2 size={16} /> {/* Delete icon */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageStudents;

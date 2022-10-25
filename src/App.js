import { useState } from "react";
import "./App.css";
function App() {
  const [studentList, setStudentList] = useState([]);

  const [student, setStudent] = useState({
    name: "",
    courseName: "",
    instructor: "",
    score: "",
  });

  const [isStudentValid, setIsStudentValid] = useState({
    name: true,
    courseName: true,
    instructor: true,
    score: true,
  });

  const handleClick = (e) => {
    e.preventDefault();

    setIsStudentValid({ ...student });

    if (Object.values(student).every((valid) => valid)) {
      setStudentList((prevStudentList) => [
        ...prevStudentList,
        { ...student, id: `${Date.now()}${Math.ceil(Math.random() * 1000)}` },
      ]);
    }
  };

  return (
    <div className="container">
      <h1>Student Manager</h1>
      <form action="" className="frm">
        <div className="input-control">
          <input
            type="text"
            placeholder="Enter name..."
            onChange={(e) =>
              setStudent((prevStudent) => ({
                ...prevStudent,
                name: e.target.value,
              }))
            }
            value={student.name}
          />
          {!isStudentValid.name && (
            <p className="input-error">Name cannot be empty!</p>
          )}
        </div>
        <div className="input-control">
          <input
            type="text"
            placeholder="Enter course..."
            onChange={(e) =>
              setStudent((prevStudent) => ({
                ...prevStudent,
                courseName: e.target.value,
              }))
            }
            value={student.courseName}
          />
          {!isStudentValid.courseName && (
            <p className="input-error">Course cannot be empty!</p>
          )}
        </div>
        <div className="input-control">
          <input
            type="text"
            placeholder="Enter instructor..."
            onChange={(e) =>
              setStudent((prevStudent) => ({
                ...prevStudent,
                instructor: e.target.value,
              }))
            }
            value={student.instructor}
          />
          {!isStudentValid.instructor && (
            <p className="input-error">Instructor cannot be empty!</p>
          )}
        </div>
        <div className="input-control">
          <input
            type="text"
            placeholder="Enter score..."
            onChange={(e) =>
              setStudent((prevStudent) => ({
                ...prevStudent,
                score: e.target.value,
              }))
            }
            value={student.score}
          />
          {!isStudentValid.score && (
            <p className="input-error">Score cannot be empty!</p>
          )}
        </div>
        <button onClick={handleClick}>Add Student</button>
      </form>
      <div className="card-container">
        {studentList.map(({ id, name, courseName, instructor, score }) => (
          <div key={id} className="student-card">
            <p
              className="delete-button"
              onClick={() => {
                // setStudentList(studentList.filter(student => student.id !== id));
                setStudentList((prevStudentList) =>
                  prevStudentList.filter((student) => student.id !== id)
                );
                // console.log(studentList.filter(student => student.id !== id));
              }}
            >
              X
            </p>
            <h4>{name}</h4>
            <p>{courseName}</p>
            <p>{instructor}</p>
            <p>{score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

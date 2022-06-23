import './styles.css'
import Card from '../../components/Card'
import { useEffect, useState } from 'react';

function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''});

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pr-br")
    }

    setStudents([...students ,newStudent]);
    setStudentName('');
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/pedrosouza423');
      const data = await response.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url
      });
    }

    fetchData();

  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>
      <input 
        type="text" 
        placeholder='Digite o nome...' 
        value={studentName} 
        onChange={e => setStudentName(e.target.value)}
      />
      <button type='button' onClick={handleAddStudent}>
        Adicionar
      </button>

      {

        students.map((student) => <Card key={student.time} name={student.name} time={student.time} /> )
      }
    </div>
  )
}

export default Home

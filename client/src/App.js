import './App.css';
import TableComponent
from './Layout/TableContact/TableComponent';
import { useState } from 'react';



function App() {
  let [contacts, setContacts] = useState([
    { id: 1, name: "Имя Фамилия 1", email: "mail1@mail.ru" },
    { id: 2, name: "Имя Фамилия 2", email: "mail2@mail.ru" },
    { id: 5, name: "Имя Фамилия 3", email: "mail3@mail.ru" },
  ]);

  const addContact = () => {
    let num = Math.max(...contacts.map(item => item.id)) + 1;

    let item = {
      id: num,
      name: `Имя Фамилия ${num}`,
      email: `mail${num}@mail.ru`
    }

    setContacts([...contacts,item]);
  }

  return (
      <div className="container mt-5">
        <div className="card">
          <h1 className="card-header">Список контактов</h1>
        </div>

        <div className="card-body">
          <TableComponent contacts={contacts}/>
        </div>
        <button 
          className="btn btn-primary" 
          onClick={() => addContact()}>
            Добавить человека
        </button>
      </div>
  );
}

export default App;


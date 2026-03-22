import './App.css';
import FormComponent from './Layout/FormContact/FormComponent';
import TableComponent
from './Layout/TableContact/TableComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';

const baseApiUrl = process.env.REACT_APP_API_URL;

function App() {
  const url = `${baseApiUrl}/contacts`

  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get(url).then(
      res => setContacts(res.data)
    );
  }, [])


  const addContact = (name, email) => {
    let num = contacts.length > 0 ? Math.max(...contacts.map(item => item.id)) + 1 : 1;

    let item = {
      id: num,
      name: name,
      email: email
    }

    axios.post(url, item);
    setContacts([...contacts,item]);
  }

  const deleteContact = (id) => {
    axios.delete(`${url}/${id}`);
    
    setContacts(contacts.filter(item => item.id !== id))
  }

  return (
      <div className="container mt-5">
        <div className="card">
          <h1 className="card-header">Список контактов</h1>
        </div>

        <TableComponent contacts={contacts}
                        deleteContact={deleteContact}/>
        <FormComponent addContact={addContact}
        />
      </div>

  );
}

export default App;


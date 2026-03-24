import './App.css';
import FormComponent from './Layout/FormContact/FormComponent';
import TableComponent
from './Layout/TableContact/TableComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom';
import ContactDetails from './Layout/ContanctDetails/ContactDetails';

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
    let item = {
      name: name,
      email: email
    }

    axios.post(url, item).then(
      response => setContacts([...contacts, response.data])
    );
  }

  return (
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={
            <div className="card">
              <h1 className="card-header">Список контактов</h1>

              <TableComponent contacts={contacts}/>
              <FormComponent addContact={addContact}/>
            </div>
          } />

        <Route path="contacts/:id" element={
          <ContactDetails/>
        } />
        </Routes>
      </div>
  );
}

export default App;


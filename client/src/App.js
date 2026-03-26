import './App.css';
import FormComponent from './Layout/FormContact/FormComponent';
import TableComponent
from './Layout/TableContact/TableComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom';
import ContactDetails from './Layout/ContanctDetails/ContactDetails';
import { useLocation } from 'react-router-dom';
import Pagination from './Layout/Pagination';

const baseApiUrl = process.env.REACT_APP_API_URL;

function App() {
  let [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize] = useState(5);
  const location = useLocation();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); 
  }
  
  useEffect(() => {
    const url = `${baseApiUrl}/contacts/page?pageNumber=${currentPage}&pageSize=${pageSize}`;
    
    axios.get(url).then(
      res => { 
        console.log(res.data);

        setContacts(res.data.contacts);
        setTotalPages(Math.ceil(res.data.totalPages / pageSize));
      }
    );
  }, [currentPage, pageSize, location.pathname])


  const addContact = (name, email) => {
    
    let item = {
      name: name,
      email: email
    }
    
    let url = `${baseApiUrl}/contacts`;
    axios.post(url, item);

    url = `${baseApiUrl}/contacts/page?pageNumber=${currentPage}&pageSize=${pageSize}`;
    axios.get(url).then(
      res => {
        setContacts(res.data.contacts);
        setTotalPages(Math.ceil(res.data.totalPages / pageSize));
      }
    );
  }

  return (
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={
            <div className="card">
              <h1 className="card-header">Список контактов</h1>

              <TableComponent contacts={contacts}/>
              <Pagination 
                          currentPage={currentPage}
                          totalPages={totalPages}
                          onPageChange={handlePageChange}
                          />
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


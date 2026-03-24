import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

const ContactDetails = () => {
    const [contact, setContact] = useState({ name: "", email: "" })
    const  { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const url = `${baseUrl}/contacts/${id}`
        axios.get(url).then(
            response => setContact(response.data)
        ).catch(
            err => { 
                console.log(err);
                navigate("/") 
            }
        )
    }, [id, navigate]);

    const handleRemove = () => {
        const url = `${baseUrl}/contacts/${id}`
        
        
        if (window.confirm("Вы уверены, что хотите удалить контакт?")) {
            axios.delete(url).then(
                () => navigate("/")
            ).catch(
                err => console.log(err)
            );
        }
    }

    const handleUpdate = () => {
        const url = `${baseUrl}/contacts/${id}`

        axios.put(url, contact).then(
            () => alert("Данные обновлены!")
        ).catch(
            err => console.log(err)
        );
    }

    return (
         <div className="container mt-5">
            <h2>Детали контакта</h2>
            <div className="mb-3">
                <label className="form-label">Имя: </label>
                <input type="text"
                    className="form-control"
                    value={contact.name}
                    onChange={(e) => { setContact({ ...contact, name: e.target.value }) }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email: </label>
                <input type="email"
                    className="form-control"
                    value={contact.email}
                    onChange={(e) => { setContact({ ...contact, email: e.target.value }) }}
                />
            </div>
            <button className="btn btn-primary me-2" onClick={(e) => { handleUpdate() }}>
                Обновить
            </button>
            <button className="btn btn-danger" onClick={(e) => { handleRemove() }}>
                Удалить
            </button> 
            <button className="btn btn-secondary ms-2" onClick={(e) => { navigate("/") }}>
                Назад
            </button>
         </div>
    )
}

export default ContactDetails;
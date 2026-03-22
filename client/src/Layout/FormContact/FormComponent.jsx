import { useState } from "react";

const FormComponent = (props) => {

    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");

    const submit = () => {
        if (contactName.trim() === "" || contactEmail.trim() === "") 
            return;

        props.addContact(contactName, contactEmail);

        setContactName("");
        setContactEmail("");
    }

    return (
        <div>
            <div className="mb-5">
                <form>
                    <div className="mb-3 d-flex flex-row" >
                        <label className="form-label">Введите имя: </label>
                        <textarea className="form-control"
                                    value={contactName}
                                    rows={1}
                                    onChange={(e) => setContactName(e.target.value)}>
                        </textarea>
                    </div>
                    <div className="mb-3 d-flex flex-row" >
                        <label className="form-label">Введите email: </label>
                        <textarea className="form-control"
                                    value={contactEmail}
                                    rows={1}
                                    onChange={(e) => setContactEmail(e.target.value)}>
                        </textarea>
                    </div>
                </form>
            </div>

            <button
                className="btn btn-primary"
                onClick={() => submit()}>
                Добавить человека
            </button>
        </div>
    )
}

export default FormComponent;
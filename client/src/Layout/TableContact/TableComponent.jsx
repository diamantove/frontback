import RowTableComponent from "./components/RowTableComponent";

const TableComponent = (props) => {
    return (
        
    <div className="card-body">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Имя контакта</th>
                    <th>E-mail</th>
                </tr>
            </thead>

            <tbody>
                {
                    props.contacts.map(
                        (item, index) => (
                        <RowTableComponent  key={index}
                                            id={item.id}
                                            name={item.name}
                                            email={item.email}
                                            deleteContact={props.deleteContact}/>
                        )
                    )
                }
            </tbody>
        </table>
    </div >
    )
}

export default TableComponent;
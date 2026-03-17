import RowTableComponent from "./components/RowTableComponent";

const TableComponent = (props) => {
    return (
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
                        item => (
                        <RowTableComponent id={item.id}
                                            name={item.name}
                                            email={item.email}/>
                        )
                    )
                }
            </tbody>
        </table>
    )
}

export default TableComponent;
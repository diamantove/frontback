import RowTableComponent from "./components/RowTableComponent";

const TableComponent = () => {
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
                <RowTableComponent />
                <RowTableComponent />
                <RowTableComponent />
                <RowTableComponent />
                <RowTableComponent />
            </tbody>
        </table>
    )
}

export default TableComponent;
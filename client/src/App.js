import './App.css';
import RowTableComponent from './Layout/TableContact/components/RowTableComponent';
import TableComponent
 from './Layout/TableContact/TableComponent';
function App() {
  return (
      <div className="container mt-5">
        <div className="card">
          <h1 className="card-header">Список контактов</h1>
        </div>

        <div className="card-body">
          <TableComponent/>
        </div>
      </div>
  );
}

export default App;

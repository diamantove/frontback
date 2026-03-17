import './App.css';

function App() {
  return (
    <div>
      <div>
        <div>
          <h1>Список контактов</h1>
        </div>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Имя контакта</th>
              <th>E-mail</th>
            </tr>
          </thead>

          <tbody>
              <tr>
                <td>1</td>
                <td>Имя файла 1</td>
                <td>example1@mail.ru</td> 
              </tr>
              
              <tr>
                <td>2</td>
                <td>Имя файла 2</td>
                <td>example2@mail.ru</td> 
              </tr>

              <tr>
                <td>3</td>
                <td>Имя файла 3</td>
                <td>example3@mail.ru</td> 
              </tr>

              <tr>
                <td>4</td>
                <td>Имя файла 4</td>
                <td>example4@mail.ru</td> 
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

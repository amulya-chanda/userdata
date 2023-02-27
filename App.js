import './App.css';
import {User_data} from './user_data'
import  data  from './Mock-Data';

function App() {
  return (
    <div>
        <User_data data={data}/>
    </div>
  ) 
}
export default App;

import './App.css';
import { Route, Routes , BrowserRouter} from 'react-router-dom';
import Home from './Home';
import UploadImage from "./UploadImage";
import Test from './Test';
import UploadComennt from './UploadComment';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/UploadImg" element={<UploadImage/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/comment" element={<UploadComennt/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

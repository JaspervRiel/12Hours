import './App.css';
import { Route, Routes , BrowserRouter} from 'react-router-dom';
import Home from './Home';
import UploadImage from "./UploadImage";
import Test from './Test';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/UploadImg" element={<UploadImage/>} />
        <Route path="/test" element={<Test/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

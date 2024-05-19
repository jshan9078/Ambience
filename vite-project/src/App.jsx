import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Reader from './pages/Reader';
import Home from './pages/Home';

function App(){
  

  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/reader" element={<Reader/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
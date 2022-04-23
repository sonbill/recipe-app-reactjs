import Pages from './pages/Pages';
import Category from './components/Category'
import Search from './components/Search'
import Nav from './components/Nav'

import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="mx-[3%] md:mx-[10%] max-w-[90%]">
          <Nav />
          <div className="mx-0 md:mx-[20%]">
            <Search />
          </div>
          <Category />
          <Pages />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

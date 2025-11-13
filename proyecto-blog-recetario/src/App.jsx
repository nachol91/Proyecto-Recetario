import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FooterComponents from './components/footerComponents';
import HeaderComponents from './components/headerComponents';
import HomePage from './pages/homePage'


function App() {


  return (
    <>
     <HeaderComponents/> 
     <HomePage/>
     <FooterComponents/>
    </>
  )
}

export default App

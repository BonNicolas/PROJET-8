import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/About/about'
import Header from './layouts/Header/header'
import Footer from './layouts/Footer/footer'
import Lodging from './pages/Lodging/lodging'
import Error from './pages/Error/error'


function App() {
    return (
    <Router>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/lodging/:id" element={<Lodging />} />
                <Route path="*" element={<Error />} />
            </Routes>
        <Footer />
    </Router>
    );
  }
  
export default App;
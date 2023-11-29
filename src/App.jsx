import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from '../maxblaul-fullstack-portfolio/src/components/Header';
import Footer from '../maxblaul-fullstack-portfolio/src/components/Footer';
import Nav from '../maxblaul-fullstack-portfolio/src/components/Nav';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header></Header>
    <Footer></Footer>
    <Nav></Nav>
</div>
  )
}

export default App

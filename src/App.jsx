import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Nav from '../src/components/Nav';


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

import './index.css'
import { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`header-maincontainer ${isScrolled ? 'scrolled' : ''}`}>
        <div className="name-container">
            <h2 className='header-h2'>Luiz Eduardo</h2>
        </div>
        <div className="section-header">
            <ul className='header-ul'>
                <li className='header-li'>
                    <a href="#about" className="header-link">Sobre mim</a>
                </li>
                <li className='header-li'>
                    <a href="#services" className="header-link">Serviços</a>
                </li>
                <li className='header-li'>
                    <a href="#contact" className="header-link">Contate-me</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header

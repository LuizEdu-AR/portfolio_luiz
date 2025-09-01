import './index.css'
import { useState, useEffect } from 'react'

import WaveEffect from '../WaveEffect'
import ThemeToggle from '../ThemeToggle'
import LanguageToggle from '../LanguageToggle'
import { useTranslation } from '../../../hooks/useTranslation'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className={`header-maincontainer ${isScrolled ? 'scrolled' : ''}`}>
        <div className="name-container">
            <WaveEffect />
            <h2 className='header-h2'>Luiz Eduardo</h2>
        </div>
        
        {/* Menu Desktop */}
        <div className="section-header desktop-menu">
            <ul className='header-ul'>
                <li className='header-li'>
                    <a href="#about" className="header-link">{t('about')}</a>
                </li>
                <li className='header-li'>
                    <a href="#services" className="header-link">{t('services')}</a>
                </li>
                <li className='header-li'>
                    <a href="#contact" className="header-link">{t('contact')}</a>
                </li>
                <li className="github-li">
                  <a href="https://github.com/LuizEdu-AR" className="github-link" target="_blank" rel="noopener noreferrer">{t('github')}</a>
                </li>
                <li className='header-li language-toggle-li'>
                    <LanguageToggle />
                </li>
                <li className='header-li theme-toggle-li'>
                    <ThemeToggle />
                </li>
            </ul>
        </div>

        {/* Botão do Menu Hambúrguer (apenas mobile) */}
        <div className="hamburger-menu" onClick={toggleMenu}>
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
        </div>

        {/* Menu Mobile */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className='mobile-menu-ul'>
                <li className='mobile-menu-li'>
                    <a href="#about" className="mobile-menu-link" onClick={closeMenu}>{t('about')}</a>
                </li>
                <li className='mobile-menu-li'>
                    <a href="#services" className="mobile-menu-link" onClick={closeMenu}>{t('services')}</a>
                </li>
                <li className='mobile-menu-li'>
                    <a href="#contact" className="mobile-menu-link" onClick={closeMenu}>{t('contact')}</a>
                </li>
                <li className="mobile-menu-li">
                  <a href="https://github.com/LuizEdu-AR" className="mobile-menu-link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>{t('github')}</a>
                </li>
                <li className='mobile-menu-li theme-toggle-mobile'>
                    <div className="mobile-toggles">
                        <LanguageToggle />
                        <ThemeToggle />
                    </div>
                </li>
            </ul>
        </div>

        {/* Overlay para fechar o menu quando clicar fora */}
        {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </div>
  )
}

export default Header

import './index.css'

const Header = () => {
  return (
    <div className='header-maincontainer'>
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

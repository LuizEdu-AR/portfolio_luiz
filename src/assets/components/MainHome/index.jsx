import './index.css'
import fotoPessoal from '../../img/foto pessoal.jpg'
import curriculoPDF from '../../documents/curriculo-luiz-eduardo.pdf'

const MainHome = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a')
        link.href = curriculoPDF
        link.download = 'Curriculo-Luiz-Eduardo-UIUX.pdf'
        link.click()
    }

    return (
        <div className='main-home-container'>
            <div className="main-home">
                <h1 className="home-h1">
                    Oi, Eu sou <br className="desktop-break" />
                    Luiz Eduardo
                </h1>
                <p className="home-p">UI/UX Designer & Desenvolvedor FrontEnd</p>
                <button className="home-button" onClick={handleDownloadCV}>Download CV</button>
            </div>
            <div className="image-home-container">
                <div className="ball-image">
                    <img src={fotoPessoal} alt="Foto de Luiz Eduardo" className='home-img' />
                </div>
            </div>
        </div>
    )
}

export default MainHome

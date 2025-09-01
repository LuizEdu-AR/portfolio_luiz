import './index.css'
import fotoPessoal from '../../img/foto pessoal.jpg'
import curriculoPDF from '../../documents/curriculo-luiz-eduardo.pdf'
import { useTranslation } from '../../../hooks/useTranslation'

const MainHome = () => {
    const { t } = useTranslation()
    
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
                    {t('greeting')} <br className="desktop-break" />
                    {t('name')}
                </h1>
                <p className="home-p">{t('role')}</p>
                <div className="home-buttons-container">
                    <button className="home-button primary" onClick={handleDownloadCV}>{t('downloadCV')}</button>
                    <button className="home-button secondary" onClick={() => window.open('https://github.com/LuizEdu-AR', '_blank')}>GitHub</button>
                </div>
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

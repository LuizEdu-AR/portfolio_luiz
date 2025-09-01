import './index.css'
import { useTranslation } from '../../../hooks/useTranslation'

const About = () => {
    const { t } = useTranslation()
    
    return (
        <div id="about" className="about-container">
            <h2 className="about-title">{t('aboutTitle')}</h2>
            <p className="about-text">{t('aboutText')}</p>
            <div className="about-info">
                <div className="info-container">
                    <div className="miniball-container">
                        <div className="miniball"></div>
                    </div>
                    <p className="info">{t('fullName')}</p>
                    <p className="subinfo">Luiz Eduardo de Almeida Rodrigues</p>
                </div>
                <div className="info-container">
                    <div className="miniball-container">
                        <div className="miniball"></div>
                    </div>
                    <p className="info">{t('email')}</p>
                    <p className="subinfo">luizedu.btiufersa@gmail.com</p>
                </div>
                <div className="info-container">
                    <div className="miniball-container">
                        <div className="miniball"></div>
                    </div>
                    <p className="info">{t('linkedin')}</p>
                    <p className="subinfo">luiz-eduardoar</p>
                </div>
                <div className="info-container">
                    <div className="miniball-container">
                        <div className="miniball"></div>
                    </div>
                    <p className="info">{t('phone')}</p>
                    <p className="subinfo">(84)98676-9639</p>
                </div>
            </div>
        </div>
    )
}

export default About

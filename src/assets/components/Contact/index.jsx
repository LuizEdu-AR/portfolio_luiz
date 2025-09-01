import './index.css'
import { useTranslation } from '../../../hooks/useTranslation'

const Contact = () => {
    const { t } = useTranslation()
    
    return (
        <div id="contact" className='contact-container'>
            <h2 className="contact-h2">{t('contactTitle')}</h2>
            <p className="contact-p">{t('contactDescription')}</p>
            <a href="mailto:luizedu.btiufersa@gmail.com?subject=Contato através do Portfolio&body=Olá Luiz Eduardo, vi seu portfolio e gostaria de conversar sobre..." className="contact-button">
                {t('contact')}
            </a>
        </div>
    )
}

export default Contact

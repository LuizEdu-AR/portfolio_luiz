import './index.css'
import { useTranslation } from '../../../hooks/useTranslation'

import SoftLogo from '../../svg/Vector.svg'
import WevLogo from '../../svg/web.svg'
import DevLogo from '../../svg/dev.svg'

const ServiceSection = () => {
    const { t } = useTranslation()
    
    return (
        <div id="services" className='service-section-container'>
            <h2 className='service-title'>{t('servicesTitle')}</h2>
            <div className='service-card-container'>
                <div className="service-card">
                    <img src={SoftLogo} alt="Ícone de Serviço" className='service-icon' />
                    <p className="service-p">
                        <span className="software-text">{t('softwareDev').split(' ')[0]}</span>
                        <span className="break-mobile"> </span>
                        <span className="development-text">{t('softwareDev').split(' ')[1]}</span>
                    </p>
                </div>
                <div className="service-card">
                    <img src={WevLogo} alt="Ícone de Serviço" className='service-icon' />
                    <p className="service-p">{t('uiuxDesign')}</p>
                    </div>
                <div className="service-card">
                    <img src={DevLogo} alt="Ícone de Serviço" className='service-icon' />
                    <p className="service-p">
                        <span className="web-text">{t('webDev').split(' ')[0]}</span>
                        <span className="break-mobile"> </span>
                        <span className="development-text">{t('webDev').split(' ')[1]}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection

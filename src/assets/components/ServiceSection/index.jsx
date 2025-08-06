import './index.css'

import SoftLogo from '../../svg/Vector.svg'
import WevLogo from '../../svg/web.svg'
import DevLogo from '../../svg/dev.svg'

const ServiceSection = () => {
    return (
        <div id="services" className='service-section-container'>
            <h2 className='service-title'>Meus Serviços</h2>
            <div className='service-card-container'>
                <div className="service-card">
                    <img src={SoftLogo} alt="Ícone de Serviço" className='service-icon' />
                    <p className="service-p">Software Development</p>
                </div>
                <div className="service-card">
                    <img src={WevLogo} alt="Ícone de Serviço" className='service-icon' />
                    <p className="service-p">UI/UX{'\n'}Design</p>
                    </div>
                <div className="service-card">
                    <img src={DevLogo} alt="Ícone de Serviço" className='service-icon' />
                    <p className="service-p">Web Development</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection

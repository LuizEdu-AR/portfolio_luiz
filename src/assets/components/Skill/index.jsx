import './index.css'
import { useTranslation } from '../../../hooks/useTranslation'

const Skill = () => {
    const { t } = useTranslation()
    
    return (
        <div className='skill-container'>
            <h2 className="skill-h2">{t('skillsTitle')}</h2>
            <div className="skill-card-container">
                <div className="skill-card">
                    <h3 className="skill-h3">40%</h3>
                    <p className="skill-p">Figma</p>
                </div>
                <div className="skill-card">
                    <h3 className="skill-h3">30%</h3>
                    <p className="skill-p">React.JS</p>
                </div>
                <div className="skill-card">
                    <h3 className="skill-h3">20%</h3>
                    <p className="skill-p">JavaScript</p>
                </div>
                <div className="skill-card">
                    <h3 className="skill-h3">10%</h3>
                    <p className="skill-p">TypeScript</p>
                </div>
            </div>
        </div>
    )
}

export default Skill

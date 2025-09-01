import { useLanguage } from '../../../contexts/LanguageContext'
import FlagBR from '../../svg/flag-br.svg'
import FlagUS from '../../svg/flag-us.svg'
import './index.css'

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button 
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={`Mudar para ${language === 'pt' ? 'inglês' : 'português'}`}
      title={`Mudar para ${language === 'pt' ? 'inglês' : 'português'}`}
    >
      <div className="language-toggle-content">
        <img 
          src={language === 'pt' ? FlagUS : FlagBR} 
          alt={language === 'pt' ? 'Bandeira dos EUA' : 'Bandeira do Brasil'}
          className="language-flag-img"
        />
      </div>
    </button>
  )
}

export default LanguageToggle

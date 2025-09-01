import './index.css'
import { useTranslation } from '../../../hooks/useTranslation'

const Footer = () => {
  const { t } = useTranslation()
  
  return (
    <div className='footer-container'>
      <p className="footer-p">{t('footerText')}</p>
    </div>
  )
}

export default Footer

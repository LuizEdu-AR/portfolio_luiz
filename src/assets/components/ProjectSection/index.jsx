import './index.css'

import Ecop from '../../img/ECOP.png'
import Nits from '../../img/NITS.png'
import Pilao from '../../img/PILAO.png'

const ProjectSection = () => {
    return (
        <div className='project-section-container'>
            <h2 className='project-title'>Meus Projetos</h2>
            <div className='project-card-container'>
                <a href="https://www.ecopufersa.com.br/" target="_blank" rel="noopener noreferrer" className="project-link">
                    <div className="project-card">
                        <h3 className="project-h3">Site Ecop</h3>
                        <img src={Ecop} alt="Projeto Ecop" className='project-img' />
                        <p className="project-p">AltoTech</p>
                        <p className="project-sub">UI/UX Design</p>
                    </div>
                </a>
                <div className="project-card">
                    <h3 className="project-h3">Site NITS</h3>
                    <img src={Nits} alt="Projeto NITS" className='project-img' />
                    <p className="project-p">AltoTech</p>
                    <p className="project-sub">UI/UX Design</p>
                </div>
                <div className="project-card">
                    <h3 className="project-h3">Site Pilão</h3>
                    <img src={Pilao} alt="Projeto Pilão" className='project-img' />
                    <p className="project-p">AltoTech</p>
                    <p className="project-sub">UI/UX Design</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection

import './index.css'

const About = () => {
    return (
        <div id="about" className="about-container">
            <h2 className="about-title">Sobre</h2>
            <p className="about-text">Sou Luiz Eduardo, graduando do Bacharelado Interdisciplinar em Tecnologia da Informação pela Universidade Federal Rural do Semi-Árido (UFERSA). Tenho paixão por criar experiências digitais funcionais e intuitivas. Atualmente, atuo como UI/UX Designer na AltoTech Juniors, a empresa júnior da UFERSA, onde contribuo com o desenvolvimento de interfaces centradas no usuário para diferentes projetos. Também integro o CILab, o Laboratório de Inteligência Computacional, participando de iniciativas voltadas à pesquisa e inovação em tecnologia. Além disso, trabalho como Desenvolvedor Front-End freelancer, com foco em interfaces modernas e responsivas utilizando tecnologias como ReactJS e TailwindCSS. Busco constantemente unir design, usabilidade e tecnologia para transformar ideias em soluções digitais eficientes e acessíveis.</p>
            <div className="about-info">
                <div className="info-container">
                    <div className="miniball-container">
                        <div className="miniball"></div>
                    </div>
                    <p className="info">Nome Completo</p>
                    <p className="subinfo">Luiz Eduardo de Almeida Rodrigues</p>
                </div>
                <div className="info-container">
                    <div className="miniball-container">
                        <div className="miniball"></div>
                    </div>
                    <p className="info">Email</p>
                    <p className="subinfo">luizedu.btiufersa@gmail.com</p>
                </div>
                <div className="info-container">
                    <div className="miniball-container">
                        <div className="miniball"></div>
                    </div>
                    <p className="info">Linkedln</p>
                    <p className="subinfo">luiz-eduardoar</p>
                </div>
                <div className="info-container">
                    <div className="miniball-container">
                        <div className="miniball"></div>
                    </div>
                    <p className="info">Telefone</p>
                    <p className="subinfo">(84)98676-9639</p>
                </div>
            </div>
        </div>
    )
}

export default About

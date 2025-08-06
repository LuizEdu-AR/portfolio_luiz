import './index.css'

const Contact = () => {
    return (
        <div id="contact" className='contact-container'>
            <h2 className="contact-h2">Interessado no meu trabalho? Vamos conversar!</h2>
            <p className="contact-p">Se alguma das minhas criações chamou sua atenção e você quer saber mais, estou aberto para esclarecer dúvidas, trocar ideias e falar sobre como posso ajudar no seu projeto. Quem sabe seja o início de uma grande parceria?</p>
            <a href="mailto:luizedu.btiufersa@gmail.com?subject=Contato através do Portfolio&body=Olá Luiz Eduardo, vi seu portfolio e gostaria de conversar sobre..." className="contact-button">
                Contate-me
            </a>
        </div>
    )
}

export default Contact

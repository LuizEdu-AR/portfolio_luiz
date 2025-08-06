import { useEffect, useState } from 'react'
import './index.css'

const FallingStars = () => {
    const [stars, setStars] = useState([])

    useEffect(() => {
        const generateStars = () => {
            const newStars = []
            const numberOfStars = 40 // Quantidade de estrelas

            for (let i = 0; i < numberOfStars; i++) {
                newStars.push({
                    id: i,
                    x: Math.random() * 100, // Posição X em %
                    y: Math.random() * -30 - 10, // Começam um pouco acima da tela
                    size: Math.random() * 2 + 2, // Tamanho entre 2px e 4px
                    animationDuration: Math.random() * 8 + 10, // Duração entre 10s e 18s para queda
                    animationDelay: Math.random() * 8, // Delay inicial entre 0s e 8s
                    opacity: Math.random() * 0.4 + 0.6, // Opacidade entre 0.6 e 1.0
                    rotation: Math.random() * 360, // Rotação inicial aleatória
                })
            }
            setStars(newStars)
        }

        generateStars()
    }, [])

    return (
        <div className="falling-stars">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                        animationDelay: `${star.animationDelay}s`,
                        transform: `rotate(${star.rotation}deg)`,
                    }}
                />
            ))}
        </div>
    )
}

export default FallingStars

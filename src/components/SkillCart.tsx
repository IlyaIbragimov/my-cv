import './Skills.css'

interface SkillCart {
    title: string;
    points: string[]
}

const SkillCart: React.FC<SkillCart> = ({title, points}) => {
    return (
        <>
        <div className="skill-cart">
            <div className='cart-wrapper'>
                <div className='cart-title'>
                    <h2>{title}</h2>
                </div>
                <div className='cart-list'>
                    <ul>
                        {points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default SkillCart
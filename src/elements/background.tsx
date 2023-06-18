import './styles/Background.css'

export const Background = ({ content, className }: any) => (
    <div className="background">
        <span className={className}>{content}</span>
    </div>
)

import './button.css'

interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'outlined' | 'filled';
}

const Button = ({label, variant='outlined', onClick}: ButtonProps): JSX.Element => {
    return (
        <button className={`${variant} mainButton`} onClick={onClick}>{label}</button>
    )
}

export default Button;
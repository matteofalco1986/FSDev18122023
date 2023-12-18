const Button = (props) => {
    return <button type="button" onClick={() => console.log(`Io sono un bottone dal nome ${props.name}`)}>{props.name}</button>
}

export default Button;
interface NumberButtonProps {
    value: number,
    func: () => void,
}

const NumberButton = ({ value, func }: NumberButtonProps) => {
    return (
        <button className='bg-dbuttonbg p-1' onClick={e => func()}>{value}</button>
    )
}


export default NumberButton;
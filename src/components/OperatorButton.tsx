interface OperatorButtonProps {
    value: string,
    func?: () => void,
}

const OperatorButton = ({ value, func }: OperatorButtonProps) => {
    return (
        <button className='bg-dbuttonbg p-1' onClick={func}>{value}</button>
    )
}


export default OperatorButton;
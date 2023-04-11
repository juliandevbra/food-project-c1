
const Toggle = ({ onBtnClick = () => {} }) => {
    const onClick = (e) => {
        setTimeout(() => {
            onBtnClick(e);
        }, 500);
    }
    return (
        <div>
            <button onClick={onClick}>Click aquí</button>
        </div>
    );
};
    
export default Toggle;
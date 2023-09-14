import './ModalForm.css';

const ModalForm = () => {
    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault()
                console.log('good')
            }}>
                <p><input placeholder='FirstName' type="text" /></p>
                <p><input placeholder='LastName' type="text" /></p>
                <p><button type='submit'>Submit</button></p>
            </form>
        </div>
    );
};

export default ModalForm;
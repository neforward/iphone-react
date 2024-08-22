import { useForm } from 'react-hook-form';

const Form = ({ onClose }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-top">
                    <h2>Заполните форму
                        и с вами свяжутся
                        в ближайшее время</h2>
                    <svg onClick={onClose} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="21.5786" y="6.55713" width="2.42308" height="21" transform="rotate(44.9077 21.5786 6.55713)" fill="#1E1E1E" />
                        <rect x="23.3159" y="21.4038" width="2.42308" height="21" transform="rotate(134.908 23.3159 21.4038)" fill="#1E1E1E" />
                    </svg>
                </div>

                <div className="modal-bottom">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-groups">
                            <div className="form-group">
                                <label htmlFor="name">ВАШЕ ИМЯ:</label>
                                <input
                                    id="name"
                                    type="text"
                                    {...register('name')}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">ВАШ ТЕЛЕФОН:</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    {...register('phone')}
                                />
                            </div>
                        </div>
                        <div className="checkbox">
                            <label htmlFor="agree">
                                <input
                                    id="agree"
                                    type="checkbox"
                                    {...register('agree')}
                                />
                                Я согласен с условиями
                            </label>
                        </div>

                        <div className="form-actions">
                            <button type="submit">Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;

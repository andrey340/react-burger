import done from '../../../images/done.svg';
import styles from './order-details.module.css';
const OrderDetails = () => {
    return (
        <>
            <span className="text text_type_digits-large mt-4 mb-8">034536</span>
            <span className='text text_type_main-medium'>идентификатор заказа</span>
            <img className={`mt-15 mb-15 ${styles.img}`} src={done} />
            <span className="text text_type_main-default">Ваш заказ начали готовить</span>
            <span className="text text_type_main-default text_color_inactive mt-2 mb-20">Дождитесь готовности на орбитальной станции</span>
        </>
    )
}

export default OrderDetails
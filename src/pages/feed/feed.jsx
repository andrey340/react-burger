
import { Link, useNavigate } from 'react-router-dom';
import styles from './feed.module.css';


export const Feed = () => {
    return (
        <div className={styles.content}>
             <h2 className='text text_type_main-large mb-5'>Лента заказов</h2>
             <div className={styles.orders}>
                Заказы
             </div>
             <div className={styles.stats}>
                Статистика
             </div>
        </div>
    );
}
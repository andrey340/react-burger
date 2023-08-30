import styles from './loading.module.css';
import { FC } from 'react';
const Loading: FC = () => {
    return (
        <div className={styles.loader}>
            <div data-glitch="Формируем заказ..." className={styles.glitch}>Формируем заказ...</div>
        </div>
    )
}

export default Loading
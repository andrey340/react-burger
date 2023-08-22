import styles from './loading.module.css';
const Loading = () => {
    return (
        <div className={styles.loader}>
            <div data-glitch="Формируем заказ..." className={styles.glitch}>Формируем заказ...</div>
        </div>
    )
}

export default Loading
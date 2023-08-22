import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import image404 from '../../images/404.png'


export const NotFoundPage: FC = () => {
    const navigate = useNavigate();


    return (
        <div className={styles.content}>
            <h2 className="text text_type_main-large mb-6">Упс... <br /> Страница потерялась в межгалактическом пространстве</h2>
            <img className={`${styles.img} mb-20`} src={image404} alt='Страница не найдена'/>
            <Link to='/login' className={styles.link}>Вернутся на главную</Link>
        </div>
    );
}
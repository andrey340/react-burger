import {React} from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, Button, DragIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import {tempData} from '../../utils/temp-data';




function BurgerConstructor({data = tempData}) {

  const total = 610;

  return (
    <section className={`mt-25 ${styles.section}`}>
      <div className={styles.ingredients}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          extraClass='mt-4 mb-4 ml-4 mr-2'
        />

        <div className={`${styles.content} ${styles.scrollbar}`}>
          {data.map((elem, index) => ( 
 
              <div key={index} className={styles.dragable}>
                <DragIcon type="primary" />         
                <ConstructorElement
                isLocked={false}
                text={elem.text}
                price={elem.price}
                thumbnail={elem.img}
                extraClass='mt-4 mb-4 ml-2 mr-2'
                />
              </div>

            ))}
        </div>
        
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          extraClass='mt-4 mb-4 ml-4 mr-2'
        />
      </div>
       

      <div className={`mt-10 ${styles.total}`}>
        <p className="text text_type_digits-medium mr-2">{total}</p>
        <CurrencyIcon  type="primary" />
        <Button htmlType="button" type="primary" size="large" extraClass='ml-10'>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
      }).isRequired
    )
}


export default BurgerConstructor;

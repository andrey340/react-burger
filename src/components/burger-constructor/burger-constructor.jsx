import {React} from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, Button, DragIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';

const tempData = [
  {
    "text": "Соус традиционный галактический",
    "price": 15,
    "img": "https://code.s3.yandex.net/react/code/sauce-03.png"
  },
  {
    "text": "Мясо бессмертных моллюсков Protostomia",
    "price": 1337,
    "img": "https://code.s3.yandex.net/react/code/meat-02.png"
  },
  {
    "text": "Плоды Фалленианского дерева",
    "price": 874,
    "img": "https://code.s3.yandex.net/react/code/sp_1.png"
  },
  {
    "text": "Хрустящие минеральные кольца",
    "price": 300,
    "img": "https://code.s3.yandex.net/react/code/mineral_rings.png"
  },
  {
    "text": "Хрустящие минеральные кольца",
    "price": 300,
    "img": "https://code.s3.yandex.net/react/code/mineral_rings.png"
  }
]



function BurgerConstructor() {

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
          {tempData.map((elem, index) => ( 
 
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


export default BurgerConstructor;

import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, Button, DragIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import { IngredientContext } from '../services/ingredient-context';

function BurgerConstructor({ modalOpen }) {

  const handleClick = (e) => {
    modalOpen('order')
  }

  const total = 610;
  const data = useContext(IngredientContext);

  const bun =  data.find((el) => el.type === 'bun')
  const otherIngredients = data.filter((el) => el.type !== 'bun')


  return (
    <section className={`mt-25 ${styles.section}`}>
      <div className={styles.ingredients}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text= {`${bun.name}  (верх)`}
          price={bun.price}
          thumbnail={bun.image_large}
          extraClass='mt-4 mb-4 ml-4 mr-2'
        />
        <div className={`${styles.content} ${styles.scrollbar}`}>
          {otherIngredients.map((elem, index) => ( 
          

            <div key={index} className={styles.dragable}>
              <DragIcon type="primary" />
              <ConstructorElement
                isLocked={false}
                text={elem.name}
                price={elem.price}
                thumbnail={elem.image_large}
                extraClass='mt-4 mb-4 ml-2 mr-2'
              />
            </div>

          ))}
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text= {`${bun.name}  (низ)`}
          price={bun.price}
          thumbnail={bun.image_large}
          extraClass='mt-4 mb-4 ml-4 mr-2'
        />
      </div>
      <div className={`mt-10 ${styles.total}`}>
        <p className="text text_type_digits-medium mr-2">{total}</p>
        <CurrencyIcon type="primary" />
        <Button htmlType="button" type="primary" size="large" extraClass='ml-10' onClick={handleClick}>
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

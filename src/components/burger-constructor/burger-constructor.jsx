import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Filling from './fillings/fillings';
import styles from './burger-constructor.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDrop } from 'react-dnd/dist/hooks';
import { useDispatch } from 'react-redux';
import { ADD_TO_CONSTRUCTOR, GET_ORDER_REQUEST, getOrder } from '../../services/actions/ingredients';


function BurgerConstructor({ modalOpen }) {
  const dispatch = useDispatch()

  const handleClick = (e) => {
    dispatch({
      type: GET_ORDER_REQUEST,
    })
    const idsArr = filling.map((el) => el._id)
    idsArr.push(bun._id)
    idsArr.push(bun._id) //Булочки то две должны в заказ упасть...
    if (idsArr.length !== 0) dispatch(getOrder({ ingredients: idsArr }));
    modalOpen()
  }

  const bun = useSelector(state => state.ingredients.constructor.bun)
  const filling = useSelector(state => state.ingredients.constructor.filling);

  const totalCost = filling.reduce((acc, cur) => acc + cur.price, 0) + bun.price * 2;

  const toOrder = item => {
    dispatch({
      type: ADD_TO_CONSTRUCTOR,
      item: item
    })
  }

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredients',
    drop(item) {
      toOrder(item)
    },
    collect: monitor => ({
      isHover: monitor.isOver()
    })
  });



  return (
    <section className={`mt-25 ${styles.section} ${isHover ? styles.onHover : ''}`}>
      <div ref={dropTarget} className={styles.ingredients} >
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun.name}  (верх)`}
          price={bun.price}
          thumbnail={bun.image_large}
          extraClass={`mt-4 mb-4 ml-4 mr-2 ${styles.elem}`}
        />
        <div className={`${styles.content} ${styles.scrollbar}`}>
          {filling.map((elem, index) => (
            <Filling elem={elem} key={index} index={index} />
          ))}
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${bun.name}  (низ)`}
          price={bun.price}
          thumbnail={bun.image_large}
          extraClass={`mt-4 mb-4 ml-4 mr-2 ${styles.elem}`}
        />
      </div>
      <div className={`mt-10 ${styles.total}`}>
        <p className="text text_type_digits-medium mr-2">{totalCost}</p>
        <CurrencyIcon type="primary" />
        <Button htmlType="button" type="primary" size="large" extraClass='ml-10' onClick={handleClick}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  modalOpen: PropTypes.func.isRequired
}


export default BurgerConstructor;

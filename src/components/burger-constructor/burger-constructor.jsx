import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Filling from './fillings/fillings';
import styles from './burger-constructor.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDrop } from 'react-dnd/dist/hooks';
import { useDispatch } from 'react-redux';
import { ADD_TO_CONSTRUCTOR } from '../../services/actions/constructor';
import { getOrder } from '../../services/actions/order';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';


function BurgerConstructor({ modalOpen }) {
  const isAuth = useSelector(state => state.user.isUserAuth);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (isAuth) {
      const idsArr = filling.map((el) => el._id)
      idsArr.push(bun._id)
      idsArr.push(bun._id) //Булочки то две должны в заказ упасть...
      if (idsArr.length !== 0) dispatch(getOrder({ ingredients: idsArr }));
      modalOpen()
    } else {
      navigate('/login')
    }

  }

  const bun = useSelector(state => state.constructorOrder.bun)
  const filling = useSelector(state => state.constructorOrder.filling);
  const ingredients = useSelector(state => state.ingredients.ingredients);

  const toOrder = item => {
    dispatch({
      type: ADD_TO_CONSTRUCTOR,
      item: item
    })
  }

  useEffect(
    () => {
      if (Object.keys(bun).length === 0) {
        const bunToAdd = ingredients.find((el) => el.type === 'bun')
        toOrder(bunToAdd)
      }
    },
    []
  );


  const totalCost = (Object.keys(bun).length === 0) ? 0 : filling.reduce((acc, cur) => acc + cur.price, 0) + bun.price * 2;


  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredients',
    drop(item) {
      toOrder(item);
      item.uuid = uuid()
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
            <Filling elem={elem} key={elem.uuid} index={index} />
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

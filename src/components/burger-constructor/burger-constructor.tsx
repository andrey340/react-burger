import React, { FC, useEffect } from 'react';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Filling from './fillings/fillings';
import styles from './burger-constructor.module.css';
import { useAppSelector, useAppDispatch } from '../../hooks/selector-and-dispatch';
import { Iingredient } from '../../types/ingredient';
import { useDrop } from 'react-dnd/dist/hooks';
import { ADD_TO_CONSTRUCTOR } from '../../services/actions/constructor';
import { getOrder } from '../../services/actions/order';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

interface IConstructor {
  modalOpen: () => void;
}


export const BurgerConstructor :FC<IConstructor> = ({ modalOpen }) => {
  const isAuth = useAppSelector(state => state.user.isUserAuth);
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const handleClick = () => {
    if (isAuth) {
      const idsArr = filling.map((el: Iingredient) => el._id)
      idsArr.push(bun._id)
      idsArr.push(bun._id) //Булочки то две должны в заказ упасть...
      if (idsArr.length !== 0) dispatch(getOrder({ ingredients: idsArr }));
      modalOpen()
    } else {
      navigate('/login')
    }

  }

  const bun = useAppSelector(state => state.constructorOrder.bun)
  const filling = useAppSelector(state => state.constructorOrder.filling);
  const ingredients = useAppSelector(state => state.ingredients.ingredients);

 
  const toOrder = (item: Iingredient): void => {
    dispatch({
      type: ADD_TO_CONSTRUCTOR,
      item: item
    })
  }

  useEffect(
    () => {
      if (Object.keys(bun).length === 0) {
        const bunToAdd = ingredients.find((el: Iingredient) => el.type === 'bun')
        toOrder(bunToAdd)
      }
    },
    []
  );


  const totalCost = (Object.keys(bun).length === 0) ? 0 : filling.reduce((acc: number, cur: any) => acc + cur.price, 0) + bun.price * 2;


  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredients',
    drop(item: Iingredient) {
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
          {filling.map((elem: Iingredient, index: number) => (
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



export default BurgerConstructor;

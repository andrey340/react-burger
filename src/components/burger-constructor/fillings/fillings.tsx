import React, { FC, useRef } from 'react';
import { Iingredient } from '../../../types/ingredient';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../burger-constructor.module.css';
import { useDrop, useDrag } from 'react-dnd/dist/hooks';
import { useDispatch } from '../../../hooks/useReducer';
import { DEL_FROM_CONSTRUCTOR, MOVE_IN_CONSTRUCTOR } from '../../../services/actions/constructor';

interface IFilling  {
  index: number;
  elem: Iingredient;
}

export const Filling :FC<IFilling> = ({ elem, index }) => {

  const dispatch = useDispatch()

  const deleteElem = (index: number, id: string) => {
    dispatch({
      type: DEL_FROM_CONSTRUCTOR,
      index: index,
      id: id
    })
  }

  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop<IFilling, unknown, unknown >({
    accept: ["SORT_INGREDIENT"],
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect!.bottom - hoverBoundingRect!.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect!.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch({
        type: MOVE_IN_CONSTRUCTOR,
        payload: {
          from: dragIndex,
          to: hoverIndex,
        },
      });
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "SORT_INGREDIENT",
    item: () => {
      return { elem, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div ref={ref} data-index={index} className={styles.dragable} style={{ opacity }}>
      <DragIcon type="primary" />
      <ConstructorElement
        isLocked={false}
        text={elem.name}
        price={elem.price}
        thumbnail={elem.image_large}
        extraClass={`mt-4 mb-4 ml-4 mr-2 ${styles.elem}`}
        handleClose={() => deleteElem(index, elem._id)}
      />
    </div>
  )
}



export default Filling;
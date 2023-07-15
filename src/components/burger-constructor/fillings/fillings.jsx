import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../burger-constructor.module.css';
import { useDrop, useDrag } from 'react-dnd/dist/hooks';
import { useDispatch } from 'react-redux';
import { DEL_FROM_CONSTRUCTOR, MOVE_IN_CONSTRUCTOR } from '../../../services/actions/ingredients';

function Filling({elem, index}) {

    const dispatch = useDispatch()

    const deleteElem = (index) => {
        dispatch({
            type: DEL_FROM_CONSTRUCTOR,
            item: index
        })
    }

    const [{ opacity }, ref] = useDrag({
        type: 'order',
        item: index ,
        collect: monitor => ({
          opacity: monitor.isDragging() ? 0.5 : 1
        })
      });

      const  [ {}, dropTarget ] = useDrop({
        accept: 'order',
        drop(item) {
           console.log(item)
        }
      });
      

      

    return (
        <div ref={ref} key={index} className={styles.dragable} style={{ opacity }}>
            <DragIcon type="primary" />
            <ConstructorElement
                isLocked={false}
                text={elem.name}
                price={elem.price}
                thumbnail={elem.image_large}
                extraClass={`mt-4 mb-4 ml-4 mr-2 ${styles.elem}`}
                handleClose={() => deleteElem(index)}
            />
        </div>
    )
}

export default Filling;
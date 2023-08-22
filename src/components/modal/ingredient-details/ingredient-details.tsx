import styles from './ingredient-details.module.css';
import { FC } from 'react';
import { Iingredient } from '../../../types/ingredient';

const IngredientDetails: FC<{item: Iingredient}> = ({ item }) => {

    return (

        <>
            <img className={`mt-15 mb-15 ml-10 mr-10 ${styles.img}`} src={item.image_large} alt={item.name} />
            <span className="text text_type_main-default">{item.name}</span>

            <div className={`mt-8 mb-5 ${styles.techs}`}>
                <div>
                    <span className="text text_type_main-default text_color_inactive">Калории, ккал</span>
                    <span className="text text_type_digits-default text_color_inactive">{item.calories}</span>
                </div>
                <div>
                    <span className="text text_type_main-default text_color_inactive">Белки, г</span>
                    <span className="text text_type_digits-default text_color_inactive">{item.proteins}</span>
                </div>
                <div>
                    <span className="text text_type_main-default text_color_inactive">Жиры, г</span>
                    <span className="text text_type_digits-default text_color_inactive">{item.fat}</span>
                </div>
                <div>
                    <span className="text text_type_main-default text_color_inactive">Углеводы, г</span>
                    <span className="text text_type_digits-default text_color_inactive">{item.carbohydrates}</span>
                </div>
            </div>
        </>
        
    )
}



export default IngredientDetails
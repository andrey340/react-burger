import React from "react";
import IngredientCard from "./ingredient-card/ingredient-card";
import styles from './ingredients.module.css';

function Ingredients({ingredients}) {

    const buns = ingredients.filter(item => item.type === 'bun');
    const mains = ingredients.filter(item => item.type === 'main');
    const sauces = ingredients.filter(item => item.type === 'sauce');

  

    return (
        <div className={`${styles.content} ${styles.scrollbar}`}>
            <div className="mt-10">
                <h2 className="mb-6 text text_type_main-medium">
                    Булки
                </h2>
                <ul className={styles.ul}>
                {buns.map((elem) => (
                    <IngredientCard key={elem._id} item={elem} />
                ))}
                </ul>
            </div>
            <div className="mt-10">
                <h2 className="mb-6 text text_type_main-medium">
                    Соусы
                </h2>
                <ul className={styles.ul}>
                {sauces.map((elem) => (
                    <IngredientCard key={elem._id} item={elem} />
                ))}
                </ul>
            </div>
            <div className="mt-10">
                <h2 className="mb-6 text text_type_main-medium">
                    Начинки
                </h2>
                <ul className={styles.ul}>
                {mains.map((elem) => (
                    <IngredientCard key={elem._id} item={elem} />
                ))}
                </ul>
            </div>
        </div>
    );
}

export default Ingredients;
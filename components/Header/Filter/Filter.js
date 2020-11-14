import { useContext } from 'react';

/** components */
import HomeContext from '../../Home/HomeContext'

/** styles */
import css from './Filter.module.css'

export default function Filter() {
    return (
        <div className={css.filter}>
            <CategoryFilter />
            <AreaFilter />
        </div>
    )

}

function CategoryFilter() {
    const { handleFetchCategory, categoryData: { meals } } = useContext(HomeContext)
    return (
        <div className={css.subFilter}>
            <h3 className={css.title}>Search by Category</h3>
            {meals.map((meal) => {
                return (
                    <button
                        className={css.btn}
                        onClick={() => handleFetchCategory(meal.strCategory)}
                        key={meal.strCategory}
                    >
                        {meal.strCategory}
                    </button>
                )
            })}
        </div>
    )
}

function AreaFilter() {
    const { handleFetchArea, areaData: { meals } } = useContext(HomeContext)
    return (
        <div className={css.subFilter}>
            <h3 className={css.title}>Search by Area</h3>
            {meals.map((mealArea) => {
                return (
                    <button
                        className={css.btn}
                        onClick={() => handleFetchArea(mealArea.strArea)}
                        key={mealArea.strArea}
                    >
                        {mealArea.strArea}
                    </button>
                )
            })}
        </div>
    )
}
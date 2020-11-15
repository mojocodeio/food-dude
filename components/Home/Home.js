import { useContext } from 'react'

/** components */
import HomeContext from './HomeContext'

/** styles */
import css from './Home.module.css'

export default function Home() {
    return (
        <>
            <ActiveList />
        </>
    )
}

function ActiveList() {
    const { activeList, isLoadingList, hasError, handleSetFoodItem, foodItem } = useContext(HomeContext)
    if(hasError) {
        return (
            <div>404 page here. Coming soon...</div>
        )
    } else if(isLoadingList) {
        return <div className={css.loader} />
    } else if (!activeList.length) {
        return (
            <div className={css.landing}>
                <h1>Food Dude</h1>
                <h3 className={css.catTitle}>Please Select A Category</h3>
                <div>
                    <svg className={css.svg} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="flat"><path d="m108.624 151.261a40.014 40.014 0 0 0 -68.613 26.776 32 32 0 1 0 45.176 40.843 40.045 40.045 0 0 0 17.867-6.973 32 32 0 1 0 5.57-60.646z" fill="#02a437"/><path d="m94.546 224.481a8 8 0 0 1 -7.455-5.093l-14.542-37.264a8 8 0 0 1 14.906-5.816l14.545 37.263a8 8 0 0 1 -7.451 10.91z" fill="#027e2a"/><path d="m109.458 218.663c-.245 0-.492-.012-.741-.034a8 8 0 0 1 -7.234-8.7 62.044 62.044 0 0 1 15.665-35.717 8 8 0 1 1 11.868 10.73 45.954 45.954 0 0 0 -11.6 26.45 8 8 0 0 1 -7.958 7.271z" fill="#027e2a"/><path d="m79.636 230.3a7.971 7.971 0 0 1 -5.363-2.066 45.942 45.942 0 0 0 -26.449-11.6 8 8 0 1 1 1.464-15.934 62.063 62.063 0 0 1 35.712 15.661 8 8 0 0 1 -5.364 13.939z" fill="#027e2a"/><path d="m188.339 368.8-59.621 23.27-57.463-115.188a43.835 43.835 0 0 1 23.289-60.4 43.834 43.834 0 0 1 58.046 28.662z" fill="#fd9226"/><path d="m272 24h32v224h-32z" fill="#026a23"/><path d="m287.11 185.94a69.015 69.015 0 0 0 -3.78-14.07l-35.33-91.87-24 8 34.27 89.1a85.942 85.942 0 0 1 5.73 30.87v28.39z" fill="#027226"/><path d="m322.31 325.75a30.42 30.42 0 0 1 0 36.5l-.11.15a34 34 0 0 1 -27.2 13.6h-14a34 34 0 0 1 -27.2-13.6l-.11-.15a30.42 30.42 0 0 1 0-36.5l10.31-13.75v-75.64l23.11-50.42.89-1.94 40-104 24 8-34.27 89.1a85.942 85.942 0 0 0 -5.73 30.87v104.03z" fill="#027e2a"/><path d="m322.31 362.25-.11.15a33.871 33.871 0 0 1 -12.88 10.43l-47.83-2.99a33.688 33.688 0 0 1 -7.69-7.44l-.11-.15a30.42 30.42 0 0 1 0-36.5l.71-.95 9.6-4.8 48-112.03v104.03l10.31 13.75a30.42 30.42 0 0 1 0 36.5z" fill="#027e2a"/><g fill="#e78244"><path d="m80.55 298.644a8 8 0 0 1 -2.91-15.456l14.905-5.816a8 8 0 0 1 5.817 14.906l-14.9 5.817a8 8 0 0 1 -2.912.549z"/><path d="m125.266 281.193a8 8 0 0 1 -2.911-15.455l14.906-5.816a8 8 0 1 1 5.816 14.906l-14.9 5.817a8 8 0 0 1 -2.911.548z"/><path d="m93.411 327.728a8 8 0 0 1 -2.91-15.456l21.13-8a8 8 0 0 1 5.817 14.907l-21.131 8a8 8 0 0 1 -2.906.549z"/><path d="m144.352 308.1a8 8 0 0 1 -2.91-15.455l7.453-2.909a8 8 0 0 1 5.816 14.907l-7.453 2.908a8 8 0 0 1 -2.906.549z"/></g><path d="m189 200h18.987a34 34 0 0 1 30.413 18.8l6.6 13.2h-18.987a34 34 0 0 1 -30.41-18.795z" fill="#02a437"/><path d="m227.633 278a8 8 0 0 1 -8-8 56.945 56.945 0 0 1 45.654-55.689l.778-.156a8 8 0 0 1 3.136 15.69l-.777.155a40.9 40.9 0 0 0 -32.791 40 8 8 0 0 1 -8 8z" fill="#8f6934"/><path d="m322.31 362.25-.11.15a33.871 33.871 0 0 1 -12.88 10.43l-47.83-2.99a33.688 33.688 0 0 1 -7.69-7.44l-.11-.15a30.42 30.42 0 0 1 0-36.5l.71-.95 9.6-4.8 48-112.03v104.03l10.31 13.75a30.42 30.42 0 0 1 0 36.5z" fill="#cbcbcb"/><path d="m198.988 254a23.627 23.627 0 0 1 19.659 10.521 10.8 10.8 0 0 0 17.972 0 23.626 23.626 0 0 1 19.658-10.521 23.626 23.626 0 0 1 18.449 8.867l1.879 2.348a52 52 0 0 1 3.491 60.044l-15.61 24.976a16.521 16.521 0 0 1 -14.01 7.765 16.521 16.521 0 0 1 -11.682-4.839 15.784 15.784 0 0 0 -22.322 0 16.524 16.524 0 0 1 -11.682 4.839 16.519 16.519 0 0 1 -14.01-7.765l-15.61-24.976a52 52 0 0 1 3.491-60.044l1.878-2.348a23.629 23.629 0 0 1 18.449-8.867z" fill="#e82f3e"/><path d="m204.6 320a7.978 7.978 0 0 1 -5.657-2.343 23.667 23.667 0 0 1 -4.443-27.357l2.941-5.881a8 8 0 0 1 14.31 7.156l-2.94 5.881a7.686 7.686 0 0 0 1.442 8.884 8 8 0 0 1 -5.653 13.66z" fill="#ff6268"/><path d="m24 392h464v48h-464z" fill="#ea9d2d"/><path d="m72 424h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16z" fill="#c38325"/><path d="m456 424h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16z" fill="#c38325"/><path d="m24 440h464v48h-464z" fill="#fbb540"/><g fill="#c38325"><path d="m72 472h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16z"/><path d="m264 424h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16z"/><path d="m264 472h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16z"/><path d="m456 472h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16z"/></g><path d="m352 296 7.029 7.029a57.94 57.94 0 0 1 16.971 40.971h24v-8a57.94 57.94 0 0 0 -16.971-40.971l-7.029-7.029z" fill="#027e2a"/><path d="m448 296-7.029 7.029a57.94 57.94 0 0 0 -16.971 40.971h-24v-8a57.94 57.94 0 0 1 16.971-40.971l7.029-7.029z" fill="#027e2a"/><path d="m488 234a29.94 29.94 0 0 0 -10.815-23.062 29.987 29.987 0 0 0 -27.185-36.865 59.985 59.985 0 0 0 -103.99 0 29.987 29.987 0 0 0 -27.19 36.865 29.986 29.986 0 0 0 -4.027 42.062 40 40 0 0 0 59.756 50.567 49.738 49.738 0 0 0 23.451-9.567 49.738 49.738 0 0 0 23.451 9.569 40 40 0 0 0 59.756-50.569 29.862 29.862 0 0 0 6.793-19z" fill="#02a437"/><path d="m420.634 200a8 8 0 0 1 -7.543-5.336 16.009 16.009 0 0 0 -30.182 0 8 8 0 0 1 -15.086-5.332 32.01 32.01 0 0 1 60.354 0 8 8 0 0 1 -7.543 10.668z" fill="#027e2a"/><path d="m358 256a24 24 0 0 1 0-48 8 8 0 0 1 0 16 8 8 0 0 0 0 16 8 8 0 0 1 0 16z" fill="#027e2a"/><path d="m24 344h464v48h-464z" fill="#fbb540"/><path d="m72 376h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16z" fill="#c38325"/><path d="m456 376h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16z" fill="#c38325"/><path d="m264 376h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16z" fill="#c38325"/></g></svg>
                </div>
            </div>
        )
    } else if (foodItem?.idMeal) {
        return (
            <FoodItem />
        )
    }

    return (
        <div className={css.activeList}>
            {activeList.map(meal => {
                return (
                    <button
                        className={css.card}
                        key={meal.idMeal}
                        onClick={() => handleSetFoodItem(meal.idMeal)}
                    >
                        <div className={css.imgContainer}>
                            <img
                                className={css.img}
                                src={meal.strMealThumb}
                            />
                        </div>
                        <div className={css.text}>{meal.strMeal}</div>
                    </button>
                )
            })}
        </div>
    )
}

function FoodItem() {
    const { activeList, handleSetFoodItem, foodItem } = useContext(HomeContext)
    return (
        <div>
            <div>
                <h1 className={css.title}>{foodItem.strMeal}</h1>
                <div className={css.itemContent}>
                    <img className={css.hero} src={foodItem.strMealThumb} />
                    <Instructions />
                </div>
                <h3 className={css.more}>More Like {foodItem.strMeal}</h3>
                <div className={css.moreFilter}>
                    {activeList.map((meal) => {
                        return (
                            <button
                                key={meal.idMeal}
                                onClick={() => handleSetFoodItem(meal.idMeal)}
                                className={css.btn}
                            >
                                {meal.strMeal}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

function Instructions() {
    const { foodItem } = useContext(HomeContext)

    function instructionsList() {
        let tableRows = []
        for(let i = 1; i <= 20; i++) {
            console.log('i', i)
            tableRows.push(
                <tr className={css.ingRow}>
                    <td className={css.ingName}>{foodItem[`strIngredient${i}`]}</td>
                    <td>{foodItem[`strMeasure${i}`]}</td>
                </tr>
            )
        }
        return tableRows;
    }

    return (
        <div className={css.instructionsContainer}>
            <table>
                <tr><th colspan="2"><h3>Instructions</h3></th></tr>
                {instructionsList()}
            </table>
        </div>
    )
}
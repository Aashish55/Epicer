import React, { useState, useEffect } from 'react';
import './Home.css'
import { Link } from "react-router-dom";
import Error from '../Error/Error'
import { useSelector, useDispatch } from 'react-redux'
import { saveRecipe } from '../../Redux/Action/Action';

const Home = () => {

    // const [recipes, setRecipes] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const recipeFromStore = useSelector(state => state.updatedRecipe)
    const dispatch = useDispatch();


    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('recipe'));
        if (item) {
            dispatch(saveRecipe(item))
        }
        // console.log(recipes)
    }, [])

    const validURL = (str) => {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }


    const displayRecipeCard = (recipe, index) => {
        return (
            <div key={index} className='recipeCard'>
                <img className='recipeImage' src={validURL(recipe.imageURL) ? recipe.imageURL : 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt='ImageHere' />
                <div className='textArea'>
                    <h3 className='recipeTitle'>{recipe.recipeName}</h3>
                    <div className='leftRightContainer'>
                        <div className='left'>
                            <p className='ingredientLists'>{recipe.ingredientsList}</p>
                            <br />
                            <p className='ingredientLists'>{recipe.description}</p>
                            <br />
                            <p className='ingredientLists'>NOTE: Quantity is measured in {recipe.unit}</p>
                        </div>
                        <div className='right'>
                            <div className='row'>
                                <h4 className='cardSubtitle'>Ingredients</h4>
                                <h4 className='cardSubtitle'>Quantity</h4>
                            </div>
                            {
                                recipe.ingredients.map((ingredient, subIndex) => (
                                    <div key={subIndex} className='rowData'>
                                        <p className='cardSubtitleData'>{ingredient.ingredient}</p>
                                        <p className='cardSubtitleData'>{ingredient.quantity}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <br />
                    <br />
                    <p className='footerText'>Added by: {recipe.authorName}</p>
                </div>
            </div>
        );
    }

    const regex = new RegExp(searchValue, "gi");

    const searchResults = recipeFromStore.filter((recipe) => {

        if (recipe.recipeName && recipe.recipeName.match(regex)) {
            return true;
        } else {
            let doesIncludes = false;
            recipe.ingredients.forEach(({ ingredient }) => {
                if (ingredient.match(regex)) { doesIncludes = true; }
            })
            if (doesIncludes) {
                return true;
            }
        }
        return false;

    });


    return (
        <div className='home'>
            <h2 className='title'><span>Burgeon</span> Recipe</h2>
            <div className='field-area'>
                <div>
                    <div className='searchArea'>
                        <input
                            className="search"
                            name="search"
                            type="text"
                            value={searchValue}
                            onChange={(e) =>
                                setSearchValue(e.target.value)
                            }
                            placeholder='Search by ingredients.'
                        />
                    </div>
                </div>
                <button className="addMoreButton">
                    <Link className='link' to="/add">Add More Recipe</Link>
                </button>
            </div>
            {
                recipeFromStore.length > 0 ? <div className='flex-wrap'>
                    {
                        searchResults.length > 0 ? searchResults.map((recipe, index) => (
                            displayRecipeCard(recipe, index))
                        ) :
                            recipeFromStore.map((recipe, index) => (
                                displayRecipeCard(recipe, index)
                            ))
                    }
                </div> : <Error />
            }
        </div>
    );
}


export default Home;
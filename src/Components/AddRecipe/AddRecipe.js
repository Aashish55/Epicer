import React, { useState, useEffect } from 'react'
import './AddRecipe.css'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { saveRecipe } from '../../Redux/Action/Action';

const AddRecipe = () => {

    const [recipeName, setRecipeName] = useState('');
    const [lists, setLists] = useState('')
    const [ingredients, setIngredients] = useState([{ ingredient: '', quantity: '' }]);
    const [unit, setUnit] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [description, setDescription] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [error, setError] = useState('');
    const dispatch = useDispatch();


    const [recipeStore, setRecipeStore] = useState([]);


    const handleInputChange = (e, index) => {
        const newSetOfIngredients = [...ingredients];
        newSetOfIngredients[index][e.target.name] = e.target.value;
        setIngredients(newSetOfIngredients)
    }

    const handleAddMoreIngredient = (e) => {
        e.preventDefault();
        const newSetOfIngredients = [...ingredients];
        newSetOfIngredients.push({ ingredient: '', quantity: '' });
        setIngredients(newSetOfIngredients)
    }

    const deleteIngredient = (e, index) => {
        e.preventDefault();
        const newSetOfIngredients = [...ingredients];
        newSetOfIngredients.splice(index, 1)
        setIngredients(newSetOfIngredients)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formvalid()) {
            console.log('Ready to save');
            console.log(recipeStore)
            const recipeData = {
                recipeName: recipeName,
                ingredientsList: lists,
                ingredients: ingredients,
                unit: unit,
                imageURL: imageURL,
                description: description,
                authorName: authorName
            };
            const newStore = [...recipeStore];
            newStore.push(recipeData);
            setRecipeStore(newStore)
            //setRecipeStore(oldStore => [...oldStore, { recipeData }])
            console.log(recipeStore);
            dispatch(saveRecipe(recipeStore))
            localStorage.setItem('recipe', JSON.stringify(newStore));
            clearInputFields();
        }
    }

    const clearInputFields = () => {
        setRecipeName('');
        setLists('');
        setUnit('');
        setImageURL('');
        setAuthorName('');
        setDescription('');
        setIngredients([{ ingredient: '', quantity: '' }]);
        setError('');
    }

    const formvalid = () => {
        if (isFormEmpty()) {
            setError('Fill in all fields.')
            //setErrors([...errors, errorMessage])
            return false;
        } else {
            return true;
        }
    }
    const isFormEmpty = () => {
        return !recipeName.length || !lists.length || !unit.length || !imageURL.length || !authorName.length || !description.length || !ingredients[0].ingredient || !ingredients[0].quantity;
    }


    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('recipe'));
        if (item) {
            setRecipeStore(item)
        }
    }, [])

    return (
        <div className='addRecipe'>
            <h2 className='title'><span>Burgeon</span> Recipe</h2>
            <button className="addMoreButton">
                <Link className='link' to="/">Back to Homepage</Link>
            </button>
            <div className='form'>
                <h3 className='formTitle'>Add Recipe</h3>
                <input
                    className="addInput"
                    name="recipeName"
                    type="text"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                    placeholder='Recipe Name'
                />
                <input
                    className="addInput"
                    name="lists"
                    type="text"
                    value={lists}
                    onChange={(e) => setLists(e.target.value)}
                    placeholder='List of Ingredients. e.g: butter, flour etc'
                />
                {
                    ingredients.map(({ ingredient, quantity }, index) => (
                        <div key={index} className='row'>
                            <input
                                value={ingredient}
                                onChange={(e) => handleInputChange(e, index)}
                                className="addInput"
                                name="ingredient"
                                type="text"
                                placeholder={`${index + 1}. Name of Ingredient`}
                            />
                            <input
                                value={quantity}
                                onChange={(e) => handleInputChange(e, index)}
                                className="addInput"
                                name="quantity"
                                type="number"
                                min="1"
                                placeholder={`${index + 1}. Quantity`}
                            />
                            {ingredients.length > 1 ? <button className="delete" onClick={(e) => deleteIngredient(e, index)} >
                                X
                            </button> : ''}
                        </div>
                    ))
                }
                <button className="addMore" onClick={handleAddMoreIngredient} >
                    Add more Ingredients
                </button>
                <input
                    className="addInput"
                    name="unit"
                    type="text"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    placeholder='Units of the quantities'
                />
                <input
                    className="addInput"
                    name="imageURL"
                    type="text"
                    value={imageURL}
                    onChange={(e) => setImageURL(e.target.value)}
                    placeholder='URL/link of the food,images'
                />
                <input
                    className="addInput large"
                    name="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Steps to Cook'
                />
                <input
                    className="addInput"
                    name="authorName"
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder='Author Name'
                />
                {error.length > 0 ? <h4 className='errorText'>{error}</h4> : ''}
                <button className="submitForm" onClick={handleSubmit} >
                    Save Recipe
                </button>
            </div>
        </div>
    );
}


export default AddRecipe;
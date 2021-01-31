import React, { useState } from 'react'
import './AddRecipe.css'

const AddRecipe = () => {

    const [ingredients, setIngredients] = useState([{ ingredient: '', quantity: '' }]);

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
        console.log(ingredients);
    }

    return (
        <div className='addRecipe'>
            <h2 className='title'><span>Burgeon</span> Recipe</h2>
            <form className='form'>
                <h3 className='formTitle'>Add Recipe</h3>
                <input
                    className="addInput"
                    name="title"
                    type="text"
                    placeholder='Recipe Name'
                />
                <input
                    className="addInput"
                    name="lists"
                    type="text"
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
                                placeholder={`Name of Ingredient`}
                            />
                            <input
                                value={quantity}
                                onChange={(e) => handleInputChange(e, index)}
                                className="addInput"
                                name="quantity"
                                type="number"
                                placeholder={`Quantity`}
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
                    placeholder='Units of the quantities'
                />
                <input
                    className="addInput"
                    name="imageURL"
                    type="text"
                    placeholder='URL/link of the food,images'
                />
                <input
                    className="addInput large"
                    name="description"
                    type="text"
                    placeholder='Steps to Cook'
                />
                <button className="submitForm" onClick={handleSubmit} >
                    Save Recipe
                </button>
            </form>
        </div>
    );
}


export default AddRecipe;
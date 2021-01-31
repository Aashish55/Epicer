import React, { useState } from 'react'
import './AddRecipe.css'

const AddRecipe = () => {

    const [recipeName, setRecipeName] = useState('');
    const [lists, setLists] = useState('')
    const [ingredients, setIngredients] = useState([{ ingredient: '', quantity: '' }]);
    const [unit, setUnit] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [description, setDescription] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [error, setError] = useState('')


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
        if (formvalid()) {
            console.log('Ready to save');
        }
    }

    const formvalid = () => {
        if (isFormEmpty()) {
            const errorMessage = { message: "Fill in all fields" };
            setError([...error, errorMessage])
            //   this.setState({ errors: errors.concat(error) });
            return false;
        } else {
            return true;
        }
    }
    const isFormEmpty = () => {
        return !recipeName.length || !lists.length || !unit.length || !imageURL.length || !authorName.length || !description.length || !ingredients[0].ingredient || !ingredients[0].quantity;
    }

    return (
        <div className='addRecipe'>
            <h2 className='title'><span>Burgeon</span> Recipe</h2>
            <form className='form'>
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
                <button className="submitForm" onClick={handleSubmit} >
                    Save Recipe
                </button>
            </form>
        </div>
    );
}


export default AddRecipe;
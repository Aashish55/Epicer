const initialRecipeState = {
    updatedRecipe: []
};

const recipeReducer = (state = initialRecipeState, action) => {
    switch (action.type) {
        case "SAVE":
            return {
                updatedRecipe: action.payload.updatedRecipe,
            }
        default:
            return state;
    }
}

export default recipeReducer;
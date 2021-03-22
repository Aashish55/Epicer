export const saveRecipe = recipe => {
    return {
        type: "SAVE",
        payload: {
            updatedRecipe: recipe
        }
    }
}
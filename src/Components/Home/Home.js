import React from 'react';
import './Home.css'

const Home = () => {

    const loginHandler = () => {
        console.log("On submit");
    }

    return (
        <div className='home'>
            <h2 className='title'><span>Burgeon</span> Recipe</h2>
            <div className='searchArea'>
                <input
                    className="search"
                    name="search"
                    type="text"
                    placeholder='Serach here...'
                />
                <button className="submit" onClick={loginHandler}>
                    Search
                </button>
            </div>

            <div className='recipeCard'>
                <img className='recipeImage' src='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='food1' />
                <div className='textArea'>
                    <h3 className='recipeTitle'>Falful</h3>

                    <div className='leftRightContainer'>
                        <div className='left'>
                            <p className='ingredientLists'>Here goes the all ingredients lists.Here goes the all ingredients lists.Here goes the all ingredients lists.Here goes the all ingredients lists.</p>
                            <br />
                            <p className='ingredientLists'>Here goes the all steps.Here goes the all ingredients lists.Here goes the all ingredients lists.Here goes the all ingredients lists.</p>
                            <br />
                            <p className='ingredientLists'>NOTE: Quantity is measured in...</p>
                        </div>
                        <div className='right'>
                            <div className='row'>
                                <h4 className='cardSubtitle'>Ingredients</h4>
                                <h4 className='cardSubtitle'>Quantity</h4>
                            </div>
                            <div className='rowData'>
                                <p className='cardSubtitleData'>Ingredients</p>
                                <p className='cardSubtitleData'>Quantity</p>
                            </div>
                            <div className='rowData'>
                                <p className='cardSubtitleData'>Ingredients</p>
                                <p className='cardSubtitleData'>Quantity</p>
                            </div>
                            <div className='rowData'>
                                <p className='cardSubtitleData'>Ingredients</p>
                                <p className='cardSubtitleData'>Quantity</p>
                            </div>
                            <div className='rowData'>
                                <p className='cardSubtitleData'>Ingredients</p>
                                <p className='cardSubtitleData'>Quantity</p>
                            </div>
                            <div className='rowData'>
                                <p className='cardSubtitleData'>Ingredients</p>
                                <p className='cardSubtitleData'>Quantity</p>
                            </div>
                            <div className='rowData'>
                                <p className='cardSubtitleData'>Ingredients</p>
                                <p className='cardSubtitleData'>Quantity</p>
                            </div>
                        </div>
                    </div>

                    <br />
                    <br />
                    <p className='footerText'>Added by: Aashish Jangam</p>
                </div>
            </div>
        </div>
    );
}


export default Home;

//value={searchValue}
//onChange={this.handleChange}
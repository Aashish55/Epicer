import React from 'react';
import './Home.css'

const Home = () => {

    const loginHandler = () => {
        console.log("On submit");
    }

    return (
        <div className='home'>
            <h2 className='title'><span>Burgeon</span> Reciepe</h2>
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
                    <p className='ingredientLists'>Here goes the all ingredients lists.Here goes the all ingredients lists.Here goes the all ingredients lists.Here goes the all ingredients lists.</p>
                </div>
            </div>
        </div>
    );
}


export default Home;

//value={searchValue}
//onChange={this.handleChange}
import React from 'react';
import { GAMES_ARRAY } from '../api/index.js';

const Home = () => {



    return <div id="home">

        <section id="games">
            <h3>Have some time to kill?</h3>
            <div className='conatainer'>
                {
                    GAMES_ARRAY.map(game => {
                        return <div key={game.id} className='container-item'>
                            < h2 > {game.title}</h2>
                            <p>Description</p>
                            <img />
                            <div id='easter'>
                                <img alt='favoriteCharacter' />
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
        <section id='introduction'>
            <div>
                StrangersThings
                    {/* make this as cool text characters stair-casing */}
            </div>
            <div className='container'>
                <div className='container-item'>
                    <h2>
                        Not a member yet?
                        </h2>
                    <img />
                    <p>
                        Click here to register an account!
                        </p>
                </div>
                <div className='container-item'>
                    <h2>
                        See what people are selling!
                        </h2>
                    <img />
                    <p>
                        Click here to view user's posts.
                        </p>
                </div>
                <div className='container-item'>
                    <div>
                        Log in
                        </div>
                </div>
            </div>
            <div className="container">
                <div>
                    Ads god here? Ads for our "MySite" projects?
                    </div>
            </div>
        </section>

    </div>
}

export default Home;
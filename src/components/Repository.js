import React from 'react';

function Repository () {
    return (
        <div 
            className="uk-card uk-card-default"
            style={{paddingTop: '20px'}}
        >
            <h3
                style={{paddingLeft:'30px'}}
            >
                My Repository
            </h3>
            <hr className="uk-divider-icon"/>
            <br />
            <p
                style={{textAlign:'center', paddingBottom: '40px'}}
            >
                <i>"Talk is cheap. Show me the code." ~ Linus Torvalds</i>
            </p>
            <form action="https://github.com/callummattaeussong?tab=repositories" target="_blank">
                <button 
                    className="uk-button uk-button-secondary uk-width-1-1 uk-margin-small-bottom"
                >
                    My Repository
                </button>
            </form>
        </div>
    );
}

export default Repository;
import React, { useState } from 'react';

const customDictionary = 
[
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
]


function Dictionary() {

    const [searchTerm, setSearchTerm] = useState('');
    const [definition, setDefinition] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        const foundWord = customDictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());
        if (foundWord) {
            setDefinition(foundWord.meaning);
        } else {
            setDefinition('Word not found in dictionary.');
        }
    }

  return (
    <div>
        <h1>Dictionary App</h1>
        <form onSubmit={handleSearch}>
            <input type='text' placeholder='Search for a word...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button type='submit'>Search</button>
        </form>
        <h3>Definition:</h3>
        <p>{definition}</p>
    </div>
  )
}

export default Dictionary;
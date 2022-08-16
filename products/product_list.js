import React from "react";

async function ProductList(){

  let results = await fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({ //why fetching hiddes the name
      query: `{
        characters {
          results {
            name
          }
        }
      }`
    })
  })
  let characters = await results.json();
  console.log(characters.data)

  .then(r => r.json()) //or that
    .then(data => console.log('data returned:', data));

  return (
    <div>
      <h1>SpaceX Launches</h1>
      
    </div>
  );
}

export default ProductList
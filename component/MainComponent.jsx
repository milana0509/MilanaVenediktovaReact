import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ShowInfoCard from "./ShowInfoCard";

function Main() {
	const [data, setData] = useState(Object);
	const apiEndpoint = "http://localhost:4000/";
	const query = `
    query products{
        product(id: "apple-airtag") {
          id
          name
          inStock
          gallery
          description
          category
          attributes{
            id
            name
            type
            items {
              displayValue
              value
              id
            }
          }
          prices {
            currency{
              label
              symbol
            }
            amount
          }
          brand
        }
      }
      
	`;

	const getData = (term) => {
		fetch(apiEndpoint, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				query,
				variables: { term }
			})
		})
			.then(res => res.json())
			.then((data) => setData(data))
			.catch(console.error);
	};
	// console.log(data)
	return (
		<div>
            <h2>First</h2>
			<SearchBar getData={getData} />
			{data.data ? data.data.tv.search.map(({ product }) => (
				<ShowInfoCard key={product.id} product={product} />
			)) : <div></div>
			}
		</div>
	);

}

export default Main;


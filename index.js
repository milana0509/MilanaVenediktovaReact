import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import appStore from "./redux/store";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider
  } from "@apollo/client";

  const client = new ApolloClient({
	uri: 'http://localhost:4000/',
	cache: new InMemoryCache()
  });

ReactDOM.render(
	<ApolloProvider client={client}>
	<React.StrictMode>
		<Provider store={appStore}>
			<App />
		</Provider>
	</React.StrictMode>
	</ApolloProvider>,
	document.getElementById("root")
);

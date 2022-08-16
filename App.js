import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useQuery, gql } from "@apollo/client";

import Navbar from './component/Navbar';
import Home from "./test/Home";
import About from "./test/About";
import ContactUs from "./test/ContactUs";
import Page from "./test/page1";
import Contact from "./products/page2/page2";

const FILMS_QUERY = gql`
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

const App = () => {

  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <Router>
      
      <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/page1" element={<Page />} />
          <Route path="/page2" element={<Contact />} />
        </Routes>

        <ul>
        {data.launchesPast.map((launch) => (
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </ul>
      
    </Router>
  );
};

export default App;
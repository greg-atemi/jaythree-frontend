import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './main-page.css';
import Sidebar from "./sidebar";
// import { useEffect, useState, useMemo } from 'react';
// import FeaturedHouse from "./featured-house";
// import Header from "./header";
// import * as PropTypes from "prop-types";
// import SearchResults from "../search-results";
// import HouseFilter from "./house-filter";
// import HouseFromQuery from "../house/HouseFromQuery";
// import useHouses from "../hooks/useHouses";
// import useFeaturedHouse from "../hooks/useFeatuedHouse";
// import HouseContext from "../context/housesContext";

function Index() {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route path="/">
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Index;

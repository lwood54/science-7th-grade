import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
// import PageList from './components/ContentPages/PageList/PageList';
import HomePage from './components/ContentPages/HomePage/HomePage';
// JSX Rendering requires pascal case...which apparently doesn't allow for Unit1_2, etc.
import UnitOneOne from './components/ContentPages/Unit1_1/Unit1_1';
import GameOneOne from './components/ContentPages/Unit1_1/Game1_1/Game1_1';
import UnitOneTwo from './components/ContentPages/Unit1_2/Unit1_2';
import GameOneTwo from './components/ContentPages/Unit1_2/Game1_2/Game1_2';
import UnitTwoOne from './components/ContentPages/Unit2_1/Unit2_1';
import GameTwoOne from './components/ContentPages/Unit2_1/Game2_1/Game2_1';
import UnitTwoTwo from './components/ContentPages/Unit2_2/Unit2_2';
import GameTwoTwo from './components/ContentPages/Unit2_2/Game2_2/Game2_2';
import UnitThreeOne from './components/ContentPages/Unit3_1/Unit3_1';
import GameThreeOne from './components/ContentPages/Unit3_1/Game3_1/Game3_1';
import UnitFourOne from './components/ContentPages/Unit4_1/Unit4_1';
import GameFourOne from './components/ContentPages/Unit4_1/Game4_1/Game4_1';
import UnitFourTwo from './components/ContentPages/Unit4_2/Unit4_2';
import GameFourTwo from './components/ContentPages/Unit4_2/Game4_2/Game4_2';
import UnitFiveOne from './components/ContentPages/Unit5_1/Unit5_1';
import GameFiveOne from './components/ContentPages/Unit5_1/Game5_1/Game5_1';
import UnitFiveTwo from './components/ContentPages/Unit5_2/Unit5_2';
import GameFiveTwo from './components/ContentPages/Unit5_2/Game5_2/Game5_2';
import UnitSixOne from './components/ContentPages/Unit6_1/Unit6_1';
import GameSixOne from './components/ContentPages/Unit6_1/Game6_1/Game6_1';
import UnitSixTwo from './components/ContentPages/Unit6_2/Unit6_2';
import GameSixTwo from './components/ContentPages/Unit6_2/Game6_2/Game6_2';

// look into code splitting for the page renders. No need
// to load all pages, only the one being accessed.

// PROBLEM: There is alot of redundant code. Can I map this
// or loop to render the layout and load the PageList component
// to determine the path? Should work.

// ALSO...can I create an array of page objects.

// const pageListArray = PageList();

class App extends Component {
    render() {
        // console.log(pageListArray[0].pageAddress);
        // this works, now make a lop and render simply
        // is it better to list these pages out or to render them with map()?

        return (
            <div className="App">
                <Layout>
                    {/*
                        wrap and render using this.props.children inside Layout.js
                        this will send the wrapped components AS props? or will send
                        the props.children?
                    */}
                    <Switch>
                        <Route path="/unit1_1" exact component={UnitOneOne} />
                        <Route path="/unit1_1/game1_1" component={GameOneOne} />
                        <Route path="/unit1_2" exact component={UnitOneTwo} />
                        <Route path="/unit1_2/game1_2" component={GameOneTwo} />
                        <Route path="/unit2_1" exact component={UnitTwoOne} />
                        <Route path="/unit2_1/game2_1" component={GameTwoOne} />
                        <Route path="/unit2_2" exact component={UnitTwoTwo} />
                        <Route path="/unit2_2/game2_2" component={GameTwoTwo} />
                        <Route path="/unit3_1" exact component={UnitThreeOne} />
                        <Route
                            path="/unit3_1/game3_1"
                            component={GameThreeOne}
                        />
                        <Route path="/unit4_1" exact component={UnitFourOne} />
                        <Route
                            path="/unit4_1/game4_1"
                            component={GameFourOne}
                        />
                        <Route path="/unit4_2" exact component={UnitFourTwo} />
                        <Route
                            path="/unit4_2/game4_2"
                            component={GameFourTwo}
                        />
                        <Route path="/unit5_1" exact component={UnitFiveOne} />
                        <Route
                            path="/unit5_1/game5_1"
                            component={GameFiveOne}
                        />
                        <Route path="/unit5_2" exact component={UnitFiveTwo} />
                        <Route
                            path="/unit5_2/game5_2"
                            component={GameFiveTwo}
                        />
                        <Route path="/unit6_1" exact component={UnitSixOne} />
                        <Route path="/unit6_1/game6_1" component={GameSixOne} />
                        <Route path="/unit6_2" exact component={UnitSixTwo} />
                        <Route path="/unit6_2/game6_2" component={GameSixTwo} />
                        <Route path="/" component={HomePage} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;

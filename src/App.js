import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
// import PageList from './components/ContentPages/PageList/PageList';
import HomePage from './components/ContentPages/HomePage/HomePage';
// JSX Rendering requires pascal case...which apparently doesn't allow for Unit1_2, etc.
import UnitOneOne from './components/ContentPages/UnitContent/Unit1_1/Unit1_1';
import GameOneOne from './components/ContentPages/UnitContent/Unit1_1/Game1_1';
import GameOneOneB from './components/ContentPages/UnitContent/Unit1_1/Game1_1b';
import UnitOneTwo from './components/ContentPages/UnitContent/Unit1_2/Unit1_2';
import GameOneTwo from './components/ContentPages/UnitContent/Unit1_2/Game1_2';
import GameOneTwoB from './components/ContentPages/UnitContent/Unit1_2/Game1_2b';
import UnitTwoOne from './components/ContentPages/UnitContent/Unit2_1/Unit2_1';
import GameTwoOne from './components/ContentPages/UnitContent/Unit2_1/Game2_1';
import GameTwoOneB from './components/ContentPages/UnitContent/Unit2_1/Game2_1b';
import UnitTwoTwo from './components/ContentPages/UnitContent/Unit2_2/Unit2_2';
import GameTwoTwo from './components/ContentPages/UnitContent/Unit2_2/Game2_2';
import GameTwoTwoB from './components/ContentPages/UnitContent/Unit2_2/Game2_2b';
import UnitThreeOne from './components/ContentPages/UnitContent/Unit3_1/Unit3_1';
import GameThreeOne from './components/ContentPages/UnitContent/Unit3_1/Game3_1';
import GameThreeOneB from './components/ContentPages/UnitContent/Unit3_1/Game3_1b';
import UnitFourOne from './components/ContentPages/UnitContent/Unit4_1/Unit4_1';
import GameFourOne from './components/ContentPages/UnitContent/Unit4_1/Game4_1';
import GameFourOneB from './components/ContentPages/UnitContent/Unit4_1/Game4_1b';
import UnitFourTwo from './components/ContentPages/UnitContent/Unit4_2/Unit4_2';
import GameFourTwo from './components/ContentPages/UnitContent/Unit4_2/Game4_2';
import GameFourTwoB from './components/ContentPages/UnitContent/Unit4_2/Game4_2b';
import UnitFiveOne from './components/ContentPages/UnitContent/Unit5_1/Unit5_1';
import GameFiveOne from './components/ContentPages/UnitContent/Unit5_1/Game5_1';
import GameFiveOneB from './components/ContentPages/UnitContent/Unit5_1/Game5_1b';
import UnitFiveTwo from './components/ContentPages/UnitContent/Unit5_2/Unit5_2';
import GameFiveTwo from './components/ContentPages/UnitContent/Unit5_2/Game5_2';
import GameFiveTwoB from './components/ContentPages/UnitContent/Unit5_2/Game5_2b';
import UnitSixOne from './components/ContentPages/UnitContent/Unit6_1/Unit6_1';
import GameSixOne from './components/ContentPages/UnitContent/Unit6_1/Game6_1';
import GameSixOneB from './components/ContentPages/UnitContent/Unit6_1/Game6_1b';
import UnitSixTwo from './components/ContentPages/UnitContent/Unit6_2/Unit6_2';
import GameSixTwo from './components/ContentPages/UnitContent/Unit6_2/Game6_2';
import GameSixTwoB from './components/ContentPages/UnitContent/Unit6_2/Game6_2b';
import Quiz7_5A from './components/ContentPages/TEKSContent/TEKS7_5A/Quiz7_5A';
import Quiz7_5B from './components/ContentPages/TEKSContent/TEKS7_5B/Quiz7_5B';
import Quiz7_6A from './components/ContentPages/TEKSContent/TEKS7_6A/Quiz7_6A';
import Quiz7_7A from './components/ContentPages/TEKSContent/TEKS7_7A/Quiz7_7A';
import Quiz7_7B from './components/ContentPages/TEKSContent/TEKS7_7B/Quiz7_7B';
import Quiz7_8A from './components/ContentPages/TEKSContent/TEKS7_8A/Quiz7_8A';
import Quiz7_8B from './components/ContentPages/TEKSContent/TEKS7_8B/Quiz7_8B';
import Quiz7_8C from './components/ContentPages/TEKSContent/TEKS7_8C/Quiz7_8C';
import Quiz7_9A from './components/ContentPages/TEKSContent/TEKS7_9A/Quiz7_9A';
import Quiz7_9B from './components/ContentPages/TEKSContent/TEKS7_9B/Quiz7_9B';
import Quiz7_10A from './components/ContentPages/TEKSContent/TEKS7_10A/Quiz7_10A';
import Quiz7_10B from './components/ContentPages/TEKSContent/TEKS7_10B/Quiz7_10B';
import Quiz7_10C from './components/ContentPages/TEKSContent/TEKS7_10C/Quiz7_10C';
import Quiz7_11A from './components/ContentPages/TEKSContent/TEKS7_11A/Quiz7_11A';
import Quiz7_11B from './components/ContentPages/TEKSContent/TEKS7_11B/Quiz7_11B';
import Quiz7_11C from './components/ContentPages/TEKSContent/TEKS7_11C/Quiz7_11C';
import Quiz7_12A from './components/ContentPages/TEKSContent/TEKS7_12A/Quiz7_12A';
import Quiz7_12B from './components/ContentPages/TEKSContent/TEKS7_12B/Quiz7_12B';
import Quiz7_12C from './components/ContentPages/TEKSContent/TEKS7_12C/Quiz7_12C';
import Quiz7_12D from './components/ContentPages/TEKSContent/TEKS7_12D/Quiz7_12D';
import Quiz7_12E from './components/ContentPages/TEKSContent/TEKS7_12E/Quiz7_12E';
import Quiz7_12F from './components/ContentPages/TEKSContent/TEKS7_12F/Quiz7_12F';
import Quiz7_13A from './components/ContentPages/TEKSContent/TEKS7_13A/Quiz7_13A';
import Quiz7_13B from './components/ContentPages/TEKSContent/TEKS7_13B/Quiz7_13B';
import Quiz7_14A from './components/ContentPages/TEKSContent/TEKS7_14A/Quiz7_14A';
import Quiz7_14B from './components/ContentPages/TEKSContent/TEKS7_14B/Quiz7_14B';
import Quiz7_14C from './components/ContentPages/TEKSContent/TEKS7_14C/Quiz7_14C';

// look into code splitting for the page renders. No need
// to load all pages, only the one being accessed.

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
                                                <Route path="/unit1_1/game1_1" exact component={GameOneOne} />
                                                <Route
                                                        path="/unit1_1/game1_1b"
                                                        exact
                                                        component={GameOneOneB}
                                                />
                                                <Route path="/unit1_2" exact component={UnitOneTwo} />
                                                <Route path="/unit1_2/game1_2" exact component={GameOneTwo} />
                                                <Route
                                                        path="/unit1_2/game1_2b"
                                                        exact
                                                        component={GameOneTwoB}
                                                />
                                                <Route path="/unit2_1" exact component={UnitTwoOne} />
                                                <Route path="/unit2_1/game2_1" exact component={GameTwoOne} />
                                                <Route
                                                        path="/unit2_1/game2_1b"
                                                        exact
                                                        component={GameTwoOneB}
                                                />
                                                <Route path="/unit2_2" exact component={UnitTwoTwo} />
                                                <Route path="/unit2_2/game2_2" exact component={GameTwoTwo} />
                                                <Route
                                                        path="/unit2_2/game2_2b"
                                                        exact
                                                        component={GameTwoTwoB}
                                                />
                                                <Route path="/unit3_1" exact component={UnitThreeOne} />
                                                <Route
                                                        path="/unit3_1/game3_1"
                                                        exact
                                                        component={GameThreeOne}
                                                />
                                                <Route
                                                        path="/unit3_1/game3_1b"
                                                        exact
                                                        component={GameThreeOneB}
                                                />
                                                <Route path="/unit4_1" exact component={UnitFourOne} />
                                                <Route
                                                        path="/unit4_1/game4_1"
                                                        exact
                                                        component={GameFourOne}
                                                />
                                                <Route
                                                        path="/unit4_1/game4_1b"
                                                        exact
                                                        component={GameFourOneB}
                                                />
                                                <Route path="/unit4_2" exact component={UnitFourTwo} />
                                                <Route
                                                        path="/unit4_2/game4_2"
                                                        exact
                                                        component={GameFourTwo}
                                                />
                                                <Route
                                                        path="/unit4_2/game4_2b"
                                                        exact
                                                        component={GameFourTwoB}
                                                />
                                                <Route path="/unit5_1" exact component={UnitFiveOne} />
                                                <Route
                                                        path="/unit5_1/game5_1"
                                                        exact
                                                        component={GameFiveOne}
                                                />
                                                <Route
                                                        path="/unit5_1/game5_1b"
                                                        exact
                                                        component={GameFiveOneB}
                                                />
                                                <Route path="/unit5_2" exact component={UnitFiveTwo} />
                                                <Route
                                                        path="/unit5_2/game5_2"
                                                        exact
                                                        component={GameFiveTwo}
                                                />
                                                <Route
                                                        path="/unit5_2/game5_2b"
                                                        exact
                                                        component={GameFiveTwoB}
                                                />
                                                <Route path="/unit6_1" exact component={UnitSixOne} />
                                                <Route path="/unit6_1/game6_1" exact component={GameSixOne} />
                                                <Route
                                                        path="/unit6_1/game6_1b"
                                                        exact
                                                        component={GameSixOneB}
                                                />
                                                <Route path="/unit6_2" exact component={UnitSixTwo} />
                                                <Route path="/unit6_2/game6_2" exact component={GameSixTwo} />
                                                <Route
                                                        path="/unit6_2/game6_2b"
                                                        exact
                                                        component={GameSixTwoB}
                                                />
                                                <Route path="/quiz7_5A" component={Quiz7_5A} />
                                                <Route path="/quiz7_5B" component={Quiz7_5B} />
                                                <Route path="/quiz7_6A" component={Quiz7_6A} />
                                                <Route path="/quiz7_7A" component={Quiz7_7A} />
                                                <Route path="/quiz7_7B" component={Quiz7_7B} />
                                                <Route path="/quiz7_8A" component={Quiz7_8A} />
                                                <Route path="/quiz7_8B" component={Quiz7_8B} />
                                                <Route path="/quiz7_8C" component={Quiz7_8C} />
                                                <Route path="/quiz7_9A" component={Quiz7_9A} />
                                                <Route path="/quiz7_9B" component={Quiz7_9B} />
                                                <Route path="/quiz7_10A" component={Quiz7_10A} />
                                                <Route path="/quiz7_10B" component={Quiz7_10B} />
                                                <Route path="/quiz7_10C" component={Quiz7_10C} />
                                                <Route path="/quiz7_11A" component={Quiz7_11A} />
                                                <Route path="/quiz7_11B" component={Quiz7_11B} />
                                                <Route path="/quiz7_11C" component={Quiz7_11C} />
                                                <Route path="/quiz7_12A" component={Quiz7_12A} />
                                                <Route path="/quiz7_12B" component={Quiz7_12B} />
                                                <Route path="/quiz7_12C" component={Quiz7_12C} />
                                                <Route path="/quiz7_12D" component={Quiz7_12D} />
                                                <Route path="/quiz7_12E" component={Quiz7_12E} />
                                                <Route path="/quiz7_12F" component={Quiz7_12F} />
                                                <Route path="/quiz7_13A" component={Quiz7_13A} />
                                                <Route path="/quiz7_13B" component={Quiz7_13B} />
                                                <Route path="/quiz7_14A" component={Quiz7_14A} />
                                                <Route path="/quiz7_14B" component={Quiz7_14B} />
                                                <Route path="/quiz7_14C" component={Quiz7_14C} />
                                                <Route path="/" component={HomePage} />
                                        </Switch>
                                </Layout>
                        </div>
                );
        }
}

export default App;

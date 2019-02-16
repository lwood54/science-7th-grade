import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_8A from './Obj7_8A';

import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////
import tornado_with_farm from './images/tornado_with_farm.jpg';
import wildfire from './images/wildfire.jpg';
import tornado_damage_trees from './images/tornado_damage_trees.jpg';
import hurricane from './images/hurricane.jpg';
import volcano from './images/volcano.jpg';
import volcanic_ash from './images/volcanic_ash.jpg';

const notes7_8A = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_8A.teksNum}
                        teksContent={Obj7_8A.teksContent}
                        teksQuiz={Obj7_8A.teksQuiz}
                        title={Obj7_8A.teksLabel}
                >
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img
                                                src={tornado_with_farm}
                                                alt="tornado with farm"
                                                className={cls.Image}
                                        />
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Catastrophic Events</em> are those that cause major
                                                destruction, which can be both financial and natural. This
                                                year, we are going to focus on some of those natural events
                                                and how they affect different ecosystems.
                                        </p>
                                </div>
                        </div>

                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <ul>
                                                <em>Common Events</em>
                                                <li>Tornadoes</li>
                                                <li>Hurricanes</li>
                                                <li>Volcanic Activity</li>
                                                <li>Earthquakes</li>
                                                <li>Tsunamis</li>
                                                <li>Flooding</li>
                                                <li>Wildfires</li>
                                        </ul>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img src={wildfire} alt="wildfire" className={cls.Image} />
                                </div>
                        </div>

                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img
                                                src={tornado_damage_trees}
                                                alt=" tornado damage"
                                                className={cls.Image}
                                        />
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                When catastrophic events occur, they bring with them different
                                                amounts of destruction. In one instance, it may result for a
                                                major inconvience for an ecosystem, but a quick recovery, such
                                                as light flooding. In other instances, like a massive volcanic
                                                eruption, there may be total destruction of an ecosystem that
                                                can take decades or centuries to recover.
                                        </p>
                                </div>
                        </div>

                        <div className={cls.NotesContainer}>
                                <div className={cls.wideParagraph}>
                                        <p>
                                                Some of these events, as scary and destructive as they are,
                                                are sometimes very beneficial for ecosystems in the long term.
                                                <em>Wildfires</em> can completely burn up a forest and either
                                                kill the local species or cause their evacuation.
                                        </p>
                                        <p>
                                                Upon investigation, scientists discovered that wildfires
                                                actual play a key role in cycling nutrients and can increase
                                                the biodiversity in an ecosystem.
                                        </p>
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                There are even some special organisms like giant redwoods that
                                                require wildfires to spread their seeds. The destruction of
                                                leaves and limbs of these competitive giants allows young
                                                sapplings to gain essential exposure to sunlight!
                                        </p>
                                </div>
                        </div>

                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img src={hurricane} alt="hurricane" className={cls.Image} />
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Hurricanes</em> have powerful winds in excess of 175 mph,
                                                which can cause great destruction.
                                        </p>
                                        <p>
                                                However, they also frequently bring with them huge storm
                                                surges that can cause massive amounts of flooding. These
                                                destructive forces can often result in recovery times that
                                                reach into multiple decades.
                                        </p>
                                </div>
                        </div>

                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Volcanoes</em> are able to massively affect an ecosystem
                                                by the removal of land when enormous eruptions can explode,
                                                resulting in tons of ash to be sent into the sky for long
                                                periods of time which can cause cooling and reduced plant
                                                growth.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img
                                                src={volcanic_ash}
                                                alt="volcano with ash cloud"
                                                className={cls.Image}
                                        />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                On the other hand, volcanoes can also release molten rock, or
                                                lava, which when cools forms new land. That new land will
                                                eventually get broken down over centuries, combining with
                                                organic matter, forming nutrient rich soil that can be amazing
                                                for plant life.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img src={volcano} alt="volcano" className={cls.Image} />
                                </div>
                        </div>
                </NotesTemplate>
        );
};

export default notes7_8A;

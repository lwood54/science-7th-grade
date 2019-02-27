import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_10A from './Obj7_10A';

import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////
import biomes_map from './images/biomes_map.jpg';
import abiotic_factors from './images/abiotic_factors.png';
import biotic_factors from './images/biotic_factors.jpg';
import tundra from '../../UnitContent/Unit5_1/images/gifs/tundra.gif';
import taiga from '../../UnitContent/Unit5_1/images/gifs/taiga.gif';
import temperate_forest from '../../UnitContent/Unit5_1/images/gifs/temperate_forest.gif';
import temperate_grassland from './images/temperate_grassland.jpg';
import desert from '../../UnitContent/Unit5_1/images/gifs/desert.gif';
import tropical_grassland from './images/tropical_grassland.gif';
import temperate_rainforest from './images/temperate_rainforest.gif';
import tropical_rainforest from './images/tropical_rainforest.gif';
import microhabitat from '../../UnitContent/Unit4_2/images/gifs/microhabitat.gif';

const notes7_10A = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_10A.teksNum}
                        teksContent={Obj7_10A.teksContent}
                        teksQuiz={Obj7_10A.teksQuiz}
                        title={Obj7_10A.teksLabel}
                >
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                The amount and variation of living things in an environment
                                                are determined by many factors. <em>Biomes</em> are large,
                                                naturally occurring communities of plants and animals that
                                                have similar climates.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img src={biomes_map} alt="biomes map" className={cls.Image} />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Abiotic factors</em> are the non-living components of an
                                                ecosystem. They greatly influence their environments.
                                        </p>
                                        <ul>
                                                <em>Abiotic Factors:</em>
                                                <li>Rocks</li>
                                                <li>Sunlight</li>
                                                <li>Climate</li>
                                                <li>Water</li>
                                        </ul>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img
                                                src={abiotic_factors}
                                                alt="abiotic factors"
                                                className={cls.Image}
                                        />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img
                                                src={biotic_factors}
                                                alt="biotic factors"
                                                className={cls.Image}
                                        />
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Biotic factors</em> are the living components of an
                                                ecosystem. They have evolved and adapted to the biotic and
                                                abiotic facotrs in their environment.
                                        </p>
                                        <ul>
                                                <em>Biotic Factors:</em>
                                                <li>Plants</li>
                                                <li>Animals</li>
                                                <li>Microorganisms</li>
                                        </ul>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <ul>
                                                <em>Major Land Biomes:</em>
                                                <li>Tundra</li>
                                                <li>Taiga (aka Boreal Forest)</li>
                                                <li>Temperate Forest (aka Deciduous Forest)</li>
                                                <li>Temperate Grassland</li>
                                                <li>Desert</li>
                                                <li>Tropical Grassland</li>
                                                <li>Tropical Rainforest</li>
                                        </ul>
                                </div>
                                <div className={cls.wideParagraph}>
                                        <p>
                                                These are the major land biomes found on Earth. You will see,
                                                in looking at the map, that these biomes tend to fall along
                                                similar latitudes. (Latitude is the distance North or South of
                                                the equator.
                                        </p>
                                        <p>
                                                Because they have a similar latitude, they will receive a
                                                similar amount of sunlight throughout the year.
                                        </p>
                                        <p>
                                                After latitude, another major factor is availability of water.
                                                The difference between a tropcial rainforest and a tropical
                                                grassland is essentially the amount of rain it gets on a
                                                yearly basis.
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img src={tundra} alt="tundra" className={cls.Image} />
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                The <em>Tundra</em> are the farthest away from the equator and
                                                therefore receive the least amount of radiant energy
                                                (sunlight).
                                        </p>
                                        <p>
                                                Many have a layer of permafrost, which is a thick layer of
                                                soil that remains frozen year round.
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                The <em>Taiga</em> is the largest land biome on Earth. They
                                                are also known as <em>Coniferous Forest</em> or{' '}
                                                <em>Boreal Forest</em>
                                        </p>
                                        <p>
                                                They are snow filled forests that are full of evergreen trees.
                                                These trees stay green year round, but have very thin leaves,
                                                known as needles, which help prevent water loss and damage in
                                                the cold temperatures.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img src={taiga} alt="taiga" className={cls.Image} />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                The <em>Temperate Forest</em> are those are are most familiar
                                                with in North America. They are characterized by having the
                                                most significant seasonal changes.
                                        </p>
                                        <p>
                                                Most regions of Temperate Forests experience all 4 seasons.
                                                They also contain a mixture of tree types, but have large
                                                populations of deciduous trees. <em>Deciduous trees</em> are
                                                those that drop their lives in the winter.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img
                                                src={temperate_forest}
                                                alt="temperate forest"
                                                className={cls.Image}
                                        />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Temperate Grasslands</em> are similar in some ways to
                                                temperate forests in that they receive a similar amount of
                                                sunlight.
                                        </p>
                                        <p>
                                                However, the grasslands just don't receive as much annual
                                                rainfall, so cannot support as large a population of big
                                                trees. But instead of many grasses, shrubs, and small trees.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img
                                                src={temperate_grassland}
                                                alt="temperate grassland"
                                                className={cls.Image}
                                        />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img
                                                src={temperate_rainforest}
                                                alt="temperate rainforest"
                                                className={cls.Image}
                                        />
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Temperate Rainforests</em> receive similar amounts of
                                                sunlight as temperate deciduous forests. But as their names
                                                imply, the rainforests receive much more rainfall year round.
                                        </p>
                                        <p>
                                                The region in Washing State, the Pacific North West of the
                                                United States, have wonderful temperate rainforests that are
                                                home to a diverse wildlife population.
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img src={desert} alt="desert" className={cls.Image} />
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Deserts</em> are primarily defined by their lack of
                                                precipitation (rain, sleet, snow).
                                        </p>
                                        <p>
                                                Though we most frequently think of deserts of being hot, some
                                                sections of the tundra receive such little precipitation, that
                                                they too can be considered deserts.
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Tropical Grasslands</em> are located along the equator and
                                                get plenty of sunlight year round. They maintain very
                                                stable/warm temperatures, but don't get consistant year round
                                                rainfall.
                                        </p>
                                        <p>
                                                In fact, the tropical grasslands (also known as savannas) in
                                                Africa are home to the largest land migrations on the planet.
                                                The animals migrating are in search of fresh grass, which
                                                grows where there is rain. In the African grasslands, they
                                                have rainy season and dry season.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img
                                                src={tropical_grassland}
                                                alt="tropical grassland"
                                                className={cls.Image}
                                        />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Tropical Rainforests</em> are home to the greatest
                                                biodiversity of plant and animal life on the planet. These
                                                forests receive consistant year round sunlight because they
                                                are located along the equator. On top of that, these regions
                                                also receive an abundance of rainfall.
                                        </p>
                                        <p>
                                                This combination of energy and water provide the worlds
                                                largest variety of plants what they need. In turn, those
                                                plants support the animals on up the food chain.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img
                                                src={tropical_rainforest}
                                                alt="tropical rainforest"
                                                className={cls.Image}
                                        />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.wideParagraph}>
                                        <p>
                                                <em>Microhabitats</em> are at the other end of the spectrum as
                                                compared to biomes, however they are no less important.
                                        </p>
                                        <p>
                                                These small or "micro" habitats are defined by being of
                                                limited extend and different than their surround environment.
                                                This can range from a pond within a forest, all the way down
                                                to the small and microorganisms living underneath a rock.
                                        </p>
                                        <p>
                                                In fact, as we have discussed previously, lichens which are
                                                organisms that are technically made up of symbiotic algae and
                                                fungi, can be considered a microhabitat.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img src={microhabitat} alt="microhabitat" className={cls.Image} />
                                </div>
                        </div>
                </NotesTemplate>
        );
};

export default notes7_10A;

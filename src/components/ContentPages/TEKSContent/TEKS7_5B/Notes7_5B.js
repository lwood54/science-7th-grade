import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_5B from './Obj7_5B';

import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////
import forest_light from './images/forest_light.jpg';
import plants from './images/plants.jpg';
import red_panda from './images/red_panda.jpg';
import lion_hunt from './images/lione_hunt.jpg';
import tertiary_bird from './images/tertiary_bird.jpg';
import basic_foodchain from './images/basic_foodchain.png';
import foodweb from './images/foodweb.jpg';
import energy_pyramid from './images/energy_pyramid.png';
import mushrooms from './images/mushrooms.jpg';

const notes7_5B = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_5B.teksNum}
                        teksContent={Obj7_5B.teksContent}
                        teksQuiz={Obj7_5B.teksQuiz}
                        title={Obj7_5B.teksLabel}
                >
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                It's important to understand that all life on earth needs
                                                energy. Much of the diversity of organisms and their
                                                adaptations come as a result of the need to acquire energy.
                                        </p>
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Energy</em> is the ability to do work. Everything from a
                                                single-celled bacterium to large complex organisms like a blue
                                                whale need energy to survive.
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img
                                                src={forest_light}
                                                alt="forest with light"
                                                className={cls.Image}
                                        />
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                Aside from extreme organisms that may get their energy from
                                                chemicals, the overwhelming majority of life on the planet
                                                gets energy from the Sun, either directly or indirectly.
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img src={plants} alt="plants" className={cls.Image} />
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                This concept is pretty understandable when we look at plants
                                                and understand photosynthesis, but how does all that energy
                                                makes it way throughout an ecosystem?
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                Here we can see a red panda eating bamboo. We call organisms
                                                that eat plants <em>primary consumers</em>. They are the first
                                                (primary) level of consumers in a food chain.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img src={red_panda} alt="red panda" className={cls.Image} />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                The energy that was stored in the cells of the plant has now
                                                been passed on to the red panda. Likewise, if the red panda
                                                were to be eaten by a predator, the energy stored in its body
                                                would be passed on to that predator. We can see a wildebeest
                                                (which is a primary consumer), being chased by this lion.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img src={lion_hunt} alt="lion hunt" className={cls.Image} />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                When an animal eats a primary consumer, we call that a{' '}
                                                <em>secondary consumer</em>. And an animal that eats primary
                                                and secondary consumers is called a <em>tertiary consumer</em>
                                                .
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img src={tertiary_bird} alt="tertiary bird" className={cls.Image} />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img
                                                src={basic_foodchain}
                                                alt="basic food chain"
                                                className={cls.Image}
                                        />
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                A simple model showing the direct flow of energy at different
                                                levels of consumption is called a <em>food chain</em>. It is
                                                easy to follow a food chain and understand that the Sun points
                                                to the plant because it provides energy to the plant. The
                                                plant points to the grasshopper and so on. The arrows are
                                                important in that they show the direction that energy flows.
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                The problem with a food chain is that it doesn't show the
                                                complexity in an ecosystem. As an example, we saw the bird
                                                above identified as a tertiary consumer, but the lion was only
                                                eating a primary consumer. In now way would that bird be
                                                higher on a food chain than the lion. This is why a{' '}
                                                <em>food web</em> can do a better job of modeling energy flow
                                                in an ecosystem.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img src={foodweb} alt="food web" className={cls.Image} />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                So what happens to all the energy the Sun provided to the
                                                plants? Energy is limited. There are far more plants on the
                                                Earth than primary consumers. There are for more primary
                                                consumers than secondary and so on. Why are there so many
                                                fewer organisms at the top than the bottom?
                                        </p>
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Only about 10%</em> of the energy aquired by one level is
                                                passed on to the level that consumes it. So what happens to
                                                90% of the energy given to plants? Just like animals, plants
                                                use energy for other requirements, like cell division and
                                                growth. Animals use their energy to move, hunt, reproduce,
                                                digest, etc.
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                In addition to using energy for daily processes,{' '}
                                                <em>
                                                        organisms also release heat or thermal energy into the
                                                        atmosphere
                                                </em>
                                                . This energy flow, combined with food webs is often displayed
                                                in an <em>energy pyramid</em>.
                                        </p>
                                </div>
                                <div className={cls.FullImageContainer}>
                                        <img
                                                src={energy_pyramid}
                                                alt="energy pyramid"
                                                className={cls.Image}
                                        />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                Organisms may die at any level in a food web. This is where{' '}
                                                <em>decomposers</em> come in. They break down dead organic
                                                matter. There are many different kinds of decomposers, ranging
                                                from bacteria to earthworms to mushrooms.
                                        </p>
                                </div>
                                <div className={cls.FullImageContainer}>
                                        <img src={mushrooms} alt="mushrooms" className={cls.Image} />
                                </div>
                        </div>
                </NotesTemplate>
        );
};

export default notes7_5B;

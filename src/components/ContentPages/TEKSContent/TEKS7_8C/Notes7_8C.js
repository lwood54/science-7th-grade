import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import NoteCard from '../../../Templates/NotesTemplate/NoteCard';
import Obj7_8C from './Obj7_8C';

//////////////////// PICTURE IMPORTS /////////////////////////////////
import groundwater from './images/groundwater.png';
import surface_water from './images/surface_water.jpg';
import runoff from './images/runoff.JPG';
import algae_bloom from './images/algae_bloom.jpg';

const notes7_8C = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_8C.teksNum}
                        teksContent={Obj7_8C.teksContent}
                        teksQuiz={Obj7_8C.teksQuiz}
                        title={Obj7_8C.teksLabel}
                >
                        <NoteCard source={groundwater} alt="groundwater" imageDir="left">
                                <em>Groundwater</em> is the water found under ground. When precipitation like
                                rain, sleet, snow, or hail has a chance to soak into the ground, it's
                                considered groundwater.
                        </NoteCard>
                        <NoteCard source={runoff} alt="runoff" imageDir="right">
                                Water that does not get soaked into the ground runs along the surface of the
                                Earth and is called <em>runoff</em>. The more runoff there is, the more
                                erosion and increased spreading of pollutants it may collect along the way.
                        </NoteCard>
                        <NoteCard source={surface_water} alt="surface water" imageDir="right">
                                As runoff continues along the Earth's surface, it will accumulate into common
                                areas, such as in lakes, ponds, rivers, streams, etc.
                        </NoteCard>
                        <NoteCard>
                                When we increased paved surfaces, we create a situation in which water is
                                unable to penetrate the impermeable layers, like concrete. When water is
                                unable to soak into the ground, it has no option other than moving along the
                                surface. When this happens any waste, trash, toxins, loose soil, chemicals, or
                                anything can be carried along and deposited into bodies of surface water.
                        </NoteCard>
                        <NoteCard source={algae_bloom} alt="algae bloom" imageDir="left">
                                One pollutant that is often seen affecting local sources of surface water is
                                excess nitrogen. Excess nitrogen can come from places like animal waste or
                                fertilizer. This excess is often seen near large residential areas, due to
                                pets and their waste, or near ranches and the animal waste found there. When
                                there is too much nitrogen, then the water will experience algal blooms. This
                                doesn't sound that bad because algae is a producer. The problem is when the
                                algae dies, their decomposition removes all the oxygen from the water and
                                kills the aquatic life.
                        </NoteCard>
                        <NoteCard>
                                Here are some things you can do to help prevent pollution that may accumulate
                                in our surface water:
                                <ul>
                                        <li>Pick up after your dog or pet if it gets rid of solid waste.</li>
                                        <li>Make sure you don't over fertilize your lawn.</li>
                                        <li>
                                                Make sure that any toxic chemicals are disposed of correctly
                                                and not just dumped onto the ground or in the gutter.
                                        </li>
                                        <li>
                                                Don't litter. Try to reduce the amount of trash on the ground.
                                                Help with local clean up efforts.
                                        </li>
                                </ul>
                        </NoteCard>
                </NotesTemplate>
        );
};

export default notes7_8C;

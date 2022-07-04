import React, { useState } from 'react';
import '../scss/main.scss';
import decoration from "../assets/Decoration.svg";
import LocalCollection from './LocalCollection';
import NGOrganisation from './NGOrganisation';
import Fundation from './Fundation';


const Organisation = () => {

    const [chooseList, setChooseList] = useState(1);

    return (
        <div id="organisation">
            <div className='desctription'>
                <h2>Komu pomagamy?</h2>
                <img src={decoration} alt="" />
                <div className='btns'>
                    <button onClick={() => { setChooseList(1) }} style={chooseList === 1 ? { borderColor: "black" } : null}>Fundacjom</button>
                    <button onClick={() => { setChooseList(2) }} style={chooseList === 2 ? { borderColor: "black" } : null}>Organizacjom pozarządowym</button>
                    <button onClick={() => { setChooseList(3) }} style={chooseList === 3 ? { borderColor: "black" } : null}>Lokalnym zbiórkom</button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate rem inventore, ullam esse aperiam eum sit placeat iure autem enim molestiae minima sunt rerum, iste qui veniam exercitationem ipsa alias.</p>
            </div>
            <div className="listHelp">
                {chooseList === 1 && <Fundation />}
                {chooseList === 2 && <NGOrganisation />}
                {chooseList === 3 && <LocalCollection />}
            </div>
        </div>
    );
}

export default Organisation;
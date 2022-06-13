import axios from 'axios';
import React, {useState, useContext} from 'react';
import {DataContext} from '../DataPRovider';


let Animalinv = () => {
    const [count, setCount] = useState(0);

    let getAnimal = async () => {
        let data = await axios.get('https://foxes-90kb.herokuapp.com/api/animals');
        return data.status === 200 ? data.data : null;
    }

    let loadAnimal = async () => {
        let data = await getAnimal();
        console.log(data);
        setAnimals(data.Animals);
    }

    const [animals, setAnimals] = useState(()=> {loadAnimal();});
    const [msg, setMsg] = useState(false);
    const {cart, setCart} = useContext(DataContext);

    const adoptAnimal = animal => {
        let mutableCart = {...cart};
        mutableCart.size++;
        mutableCart.total += animal.price;
        mutableCart.items[animal.id] ?
            mutableCart.items[animal.id].quantity++ :
            mutableCart.items[animal.id] = {'obj': animal, 'quantity': 1}
        console.log(mutableCart);
        setCart(mutableCart);

    }

    
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <h1>Market</h1>
            </div>
            <div className='row justify-content-center'>
                <p>You have chosen {count} animals.</p>
                <button onClick={()=> setCount(count+1)}>Select</button>
            </div>
            <div className='row justify-content-center'>
                {typeof animals === 'object' && animals[1] ? animals.map((animal, index) =>{
                    return <div key={index} className='card m-3' style={{width:18 + 'rem'}}>
                        <img src={animal.image} className="card-img-top" alt={animal.latin_name} />
                        <div className="card-body">
                            <h5 className="card-title">{animal.species}</h5>
                            <h5 className="card-title font-italic">{animal.sci_name}</h5>
                            <p className="card-text">{animal.description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{animal.diet}</li>
                            <li className="list-group-item"><span>Lifespan: {animal.lifespan} years.</span>
                                <span className='float-right'>Size: {animal.size_cm}</span></li>
                        </ul>
                        <div className="card-body">
                            <p className="card-link float-left">${animal.price}</p>
                                <button onClick={() => { adoptAnimal(animal) }} className="float-right btn btn-sm btn-info">Add to Your Pack!</button>
                        </div>
                    </div>
                })
                :   <h3>Importing animals...</h3>}
            </div>
        </div>
    )
};

export default Animalinv;



    
import axios from 'axios';
import {useEffect, useState} from 'react';


let Home = () => {
    
    const [party, setParty] = useState(['Matt', 'Karun', 'Andrea', 'Ethan', 'Leda', 'Sam', 'Joseph', 'Kristen'])

    const shuffleParty = () => {
    console.log('shuffling...');
    let tempParty = [...party];
    tempParty.sort(()=> Math.random() - 0.5);
    setParty(tempParty);
    }

    const [rmcimg, setRMCimg] = useState();
    
    const getRMCimg = async () => {
        let response = await axios.get('https://rickandmortyapi.com/api/character/600');
        return response.status === 200 ? response.data : null;}

    const loadRMCimg = async () => {
        let fact = await getRMCimg();
        setRMCimg(fact.image);
        }

    useEffect(() => {loadRMCimg();}, [party]);

    return (
        <div className="container mt-2">
            <div className='row justify-content-center'>
                <button className='btn btn-lg btn-info' onClick={shuffleParty}>Shuffle Party</button>
            </div>
            <div className="row justify-content-center">
                <h1>{party[0]}'s Favorite Character:</h1>
            </div>
            <div className="row justify-content-center">
                <img src= {rmcimg}/>
            </div>
        </div>
    )
}

export default Home;
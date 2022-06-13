import {useState, createContext} from 'react';

const DataProvider = props => {
    const [cart, setCart] = useState();
    return (
        <DataContext.Provider value={{'cart': cart, 'setCart': setCart}}>
            {props.children}
        </DataContext.Provider>
    )
};

export default DataProvider;
export let DataContext = createContext();
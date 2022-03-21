import React, {useState} from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Hotel from "./components/hotel/Hotel";

function App() {


    const [adult, setAdult] = useState<number>(0);
    const [child, setChild] = useState<number>(0);

    const incrementAdult = () => {
        setAdult(adult + 1)
        if (adult === 6) setAdult(6)
    } ;

    const decrementAdult = () => {
        setAdult(adult - 1)
        if (adult === 0) setAdult(0)
    } ;

    const incrementChild = () => {
        setChild(child + 1)
        if (child === 4) setChild(4)
    };
    const decrementChild = () => {
        setChild(child - 1)
        if (child === 0) setChild(0)
    }

    return (
        <div className="App">
            <Header
                adult={adult}
                increment={incrementAdult}
                decrement={decrementAdult}
                child={child}
                incrementChild={incrementChild}
                decrementChild={decrementChild}

            />
            <Hotel adult={adult}
                   child={child}/>

        </div>
    );
}

export default App;

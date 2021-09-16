import React from 'react';
import {useState} from 'react';
import "./App.css";
import * as ReactBoostStrap from 'react-bootstrap';
import Cards from './MyComponents/cards';
import logo from "./img/logo.png";

function App(){
    const [loading, setLoading] = useState(false);
    const [cardInfo, setcardInfo] =useState([]);
    const [buttonClick, setButtonClick] =useState(false);
    const btnClick = async () => {
        try{
            setButtonClick(true);

            fetch('https://reqres.in/api/users?page=1')
            .then((response) => response.json())
            .then((json) =>{
                setcardInfo(json.data);
            })

            setInterval(() => {
                setLoading(true);
            }, 1500);

        
        }
        catch(e)
        {
            console.log(e);
        }
    };

    return(
        <>
            {/* Navbar Start */}
            <nav className="navbar-section">
                <div className="top_main_footer">
                    <h2 id="main_title"><img className="logo" src={logo} alt="Logo Here" width="50px" height="50px"/>  ZIPPY</h2>
                    <button className="button" type="button" onClick={btnClick}>Get Users</button>
                </div>
            </nav>
            {/* Navbar End */}

            <div className="container">
                <div className="row justify-content-center">
                    {buttonClick ?
                    (loading ? (<Cards cardInfo={ cardInfo } />) : <ReactBoostStrap.Spinner animation="grow" variant="primary" /> )
                    : (<div className="main_footer"> Click "Get User Button" for fetching Data </div>)
                    }
                </div>
            </div>
        </>
    );
}

export default App;
import Card from 'react-bootstrap/Card';
import './Styles/Home.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react';
import ListGroupComponent from '../Components/ListGroup';

function Home(){
    const [cities, setCities] = React.useState<string[]>(() => {
        const savedCities = localStorage.getItem('cities');
        return savedCities ? JSON.parse(savedCities) : [];
    });
    const [descriptions, setDescriptions] = React.useState<string[]>(() => {
        const savedDescriptions = localStorage.getItem('descriptions');
        return savedDescriptions ? JSON.parse(savedDescriptions) : [];
    });
    const [cityInput, setCityInput] = React.useState('');
    const [descriptionInput, setDescriptionInput] = React.useState('');

    useEffect(() => {
        localStorage.setItem('cities', JSON.stringify(cities));
    }, [cities]);
    
    useEffect(() => {
        localStorage.setItem('descriptions', JSON.stringify(descriptions));
    }, [descriptions]);

    function handleAddCity(){
        setCities([...cities, cityInput]);
        setDescriptions([...descriptions, descriptionInput]);
        setCityInput('');
        setDescriptionInput('');
    }

    function clearStorge(){
        localStorage.clear();
        setCities([]); 
        setDescriptions([]);
    }

    return(
        <>
        <div className='main-container'>
            <h1>City Explorer</h1>
            <div className='search-bar' >
                <Form.Control type="text" placeholder="Search for a city"/>
            </div>
            <ListGroupComponent cities={cities} descriptions={descriptions} />
            <div className='card-container'>
                <Card>
                    <Card.Body>
                        <h2>Add a New City</h2>
                        <div className='input-container'>
                        <Form.Control id='cityName' type="text" placeholder="City name" className='mt-1' value={cityInput} onChange={(e) => setCityInput(e.target.value)} />
                        <Form.Control id='cityDesc' type="text" placeholder="City description" className='mt-2' value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} /></div>
                    </Card.Body>
                </Card>
                <div className='footer-btn-tray'>
                    <Button variant="success" onClick={handleAddCity}>Add City</Button>
                </div>
            </div>
            <Button variant="danger" onClick={clearStorge}>Reset City Selection</Button>
        </div>
        </>
    );
}
export default Home;
import Card from 'react-bootstrap/Card';
import './Styles/Home.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useState, useEffect } from 'react';
import ListGroupComponent from '../Components/ListGroup';

function Home(){
    const [cities, setCities] = useState<string[]>(() => {
        const savedCities = localStorage.getItem('cities');
        return savedCities ? JSON.parse(savedCities) : [];
    });

    const [descriptions, setDescriptions] = useState<string[]>(() => {
        const savedDescriptions = localStorage.getItem('descriptions');
        return savedDescriptions ? JSON.parse(savedDescriptions) : [];
    });

    const [cityInput, setCityInput] = useState<string>('');
    const [descriptionInput, setDescriptionInput] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [showDesc, setShowDesc] = useState<boolean>(false);
    const [selectedDesc, setSelectedDesc] = useState<string>('');

    useEffect(() => {
        localStorage.setItem('cities', JSON.stringify(cities));
    }, [cities]);

    useEffect(() => {
        localStorage.setItem('descriptions', JSON.stringify(descriptions));
    }, [descriptions]);

    function handleAddCity(): void {
        setCities((prevCities) => [...prevCities, cityInput]);
        setDescriptions((prevDescriptions) => [...prevDescriptions, descriptionInput]);
        setCityInput('');
        setDescriptionInput('');
    }

    function clearStorage(): void {
        localStorage.clear();
        setCities([]);
        setDescriptions([]);
    }

    function handleSearchCity(e: React.ChangeEvent<HTMLInputElement>): void {
        setSearchQuery(e.target.value);
    }

    const filteredCities = cities.filter((city, index) => 
        city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        descriptions[index].toLowerCase().includes(searchQuery.toLowerCase())
    );

    function clearSelection(): void {
        setShowDesc(false);
    }

    return(
        <>
        <div className='main-container'>
            <h1>City Explorer</h1>
            <div className='search-bar' >
                <Form.Control type="text" placeholder="Search for a city" onChange={handleSearchCity} value={searchQuery}/>
            </div>
            <div className='result-container'>
                <h2>Available Cities</h2>
            </div>  
            {cities.length>0 && 
                <ListGroupComponent cities={filteredCities} descriptions={descriptions} setShowDesc={setShowDesc} setSelectedDesc={setSelectedDesc}/>
            }
            {showDesc &&
            <div className='desc-container'>
                <h2>Description</h2>
                <p>{selectedDesc}</p>
            </div> 
            } 
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
            <Button variant="danger" onClick={clearSelection}>Reset City Selection</Button>
        </div>
        </>
    );
}
export default Home;
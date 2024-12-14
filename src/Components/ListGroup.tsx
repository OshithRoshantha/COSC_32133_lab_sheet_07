import { useState } from 'react';
import './Styles/ListGroup.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ListGroupComponent({ cities, descriptions, setShowDesc, setSelectedDesc }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    function handleClick(index) {
        setShowDesc(true);
        setSelectedDesc(descriptions[index]);
        setSelectedIndex(index); 
    }
    return (
        <div className='list-container'>
            <Card>
                <ListGroup>
                    {cities.map((city, index) => (
                        <ListGroup.Item
                            key={index}
                            onClick={() => handleClick(index)}
                            style={{
                                backgroundColor: selectedIndex === index ? 'blue' : 'white',
                                color: selectedIndex === index ? 'white' : 'black',
                            }}
                        >
                            {city}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        </div>
    );
}

export default ListGroupComponent;


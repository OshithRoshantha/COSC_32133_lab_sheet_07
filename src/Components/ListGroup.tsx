import './Styles/ListGroup.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ListGroupComponent({cities,descriptions}) {
    return (
        <div className='list-container'>
            <h2>Available Cities</h2>
            <Card>
                <ListGroup>
                    {cities.map((city, index) => (
                        <ListGroup.Item key={index}>
                            {city} 
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        </div>
    );
}

export default ListGroupComponent;

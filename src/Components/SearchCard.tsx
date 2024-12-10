import Card from 'react-bootstrap/Card';

function SearchCard({City,Desc}){
    return(
        <>
            <Card>
                <Card.Body className='py-2'>
                    {City}
                </Card.Body>
            </Card>
        </>
    );
}

export default SearchCard;
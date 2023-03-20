import {Grid, Card, CardContent } from '@material-ui/core';

function CardComponent(props) {
    return (
      <Card>
        <CardContent style={{backgroundColor:'black'}}>
          <h2 style={{color:"red"}}>{props.title}</h2>
          <p style={{color:"blue"}}>{props.description}</p>
        </CardContent>
      </Card>
    );
  }

  export default CardComponent;
  
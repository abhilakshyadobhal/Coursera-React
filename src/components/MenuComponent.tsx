import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderMenuItem({ dish }: any) {
  return (
    <Card>
      <CardImg width='100%' src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

const Menu = (props: any) => {
  const menu = props.dishes.map((dish: any) => {
    return (
      <div className='col-12 col-md-5 m-1' key={dish.id}>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className='container'>
      <div className='row'>{menu}</div>
    </div>
  );
};

export default Menu;

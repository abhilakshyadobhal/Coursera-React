import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';

function renderDish(dish: any) {
  return (
    <Card>
      <CardImg width='100%' src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function renderComments(comments: any) {
  var commentList = comments.map((comment: any) => {
    return (
      <li key={comment.id}>
        {comment.comment}
        <br />
        <br />
        -- {comment.author},{' '}
        {new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit'
        }).format(new Date(Date.parse(comment.date)))}
        <br />
        <br />
      </li>
    );
  });

  return (
    <div>
      <h4>Comments</h4>
      <ul className='list-unstyled'>{commentList}</ul>
    </div>
  );
}

const DishDetail = (props: any) => {
  return (
    <div className='container'>
      <div className='row'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/menu'>Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className='col-12'>
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-md-5 m-1'>{renderDish(props.dish)}</div>
        <div className='col-12 col-md-5 m-1'>
          {renderComments(props.comments)}
        </div>
      </div>
    </div>
  );
};

export default DishDetail;

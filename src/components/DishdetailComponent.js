import React , { Component } from 'react';
import {Card,CardBody,CardTitle,CardImg,CardText} from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                   <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                   <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                   </CardBody> 
                </Card>
            </div>
        )
    }
    renderComments(dish){
        const comments = dish.comments.map((comment)=>{
            return (
                <div className="container">
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
                </div>
            )
        })
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments}
                </ul>
            </div>
        )
    }

    render(){
        if(this.props.dish != null){
            return (
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish)}
                </div>
                )
        }
        else{
            return(
                <div></div>
            )
        }
        
    }
}
export default DishDetail;

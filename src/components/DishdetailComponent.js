import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         selectedDish: this.props.dishes

    //     }

    // }

function RenderDish({ dish }) {



        if (dish != null) {


            return (
                <Card >
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else
            return (
                <div></div>
            );
    }
function RenderComments({ dish }) {
        if (dish != null) {

            const com = dish.comments.map((c) => {
                return (
                    <div key={c.id} >
                        <li>{c.comment}</li>
                        <li>--{c.author}, {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short', // can be long  or short
                            day: '2-digit'
                        }).format(new Date(c.date))}</li>
                    </div>
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {com}
                    </ul>
                </div>
            );
        }
        else
            return (
                <div></div>
            );
    }
    const DishDetail = (props) => {

        return (
            <div className="container">
                <div className="row ">
                    <div className="col-12 col-md-5 m-1">
                        {/* {this.renderDish(this.props.dishes)} */}
                        <RenderDish dish={props.dishes}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">

                        {/* {this.renderComments(this.props.dishes)} */}
                        <RenderComments dish={props.dishes} />
                    </div>

                </div>
            </div>
        );
    }


export default DishDetail;

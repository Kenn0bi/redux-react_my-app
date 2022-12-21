import React from 'react';

class BookWithoutPrice extends React.Component{

  render(){
   const price = this.props.price ? <strong>{this.props.price}</strong> : <del>&nbsp;</del>;
    return <div className="book book-default" >
    <h3>{this.props.title}</h3>
    <img src={'https://via.placeholder.com/100x120?text='+this.props.title} alt="" />
    <p> Автор: {this.props.author}</p>
    <p> Цена: {price} руб.</p>
    </div>;
  }
}

export default BookWithoutPrice;
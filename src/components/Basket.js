import React from 'react';

class Basket extends React.Component {
 
render (){ 
 let items = [];
 let dataBook = {};
 let summa = 0;
 for(let i in this.props.dataBook){
  dataBook[this.props.dataBook[i]["id"]] = this.props.dataBook[i];
 }
 
//  console.log(this.props.items)
//  console.log(items)
//  console.log(dataBook)

 for(let item in this.props.items){
    summa += dataBook[item]['price'] * this.props.items[item]; 
    items.push(
      <div className="basket-item" key={item}>
       <a href="#">{dataBook[item]['title']}</a>
       <span>{this.props.items[item]}шт</span>
       <span>{dataBook[item]['price']}руб</span>
       <a href="#" onClick={(ev)=>{this.props.removeBookFromBasket(item); ev.preventDefault()}} id={item} className="btn btn-success" >Удалить</a>
      </div>
    )  
 }
 if(summa) items.push(
      <div className="basket-item"  key="bskt">
       <strong>Сумма</strong>
       <span>{summa}руб</span>
      </div>
    )  
  return <div className='basket'>
 <h3>Корзина</h3>
 {items}
</div> ;
 } 
}

export default Basket;
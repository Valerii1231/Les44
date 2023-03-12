import React from "react";
import iphone from '../img/iphone.jpg';
import watch from '../img/watch.jpg';
import noFoto from '../img/no-foto.jpg';
function Product(props){

    const remove = () => {
        props.onRemove(props.id)
    }
    let imgh;
    if (props.name === 'Iphone')  {imgh = iphone}
    if (props.name === 'Watch')  {imgh = watch} 
    if (props.name !='Iphone' && props.name !='Watch')  {imgh = noFoto}
    
    return (
        <div className="product">

            <div className="img">
                <img src={imgh} />
            </div>

            <div className="body">
                <h1 className="title">{props.name}</h1>
                <div className="price">{props.price}</div>
            </div>
            <button onClick={remove} type="button">Remove</button>
        </div>
    )
}

export default Product;
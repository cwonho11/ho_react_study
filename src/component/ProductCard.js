import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }

  return (
    <div className='card card-section' onClick={showDetail} >
        <div className='fix'>
          <img src={item?.img} alt={item?.title} />  
        </div>
        <div>{item?.choice == true ? "Conscious choice" : ""}</div>
        <div>{item?.title}</div>
        <div>￦{item?.price}</div>
        <div>{item?.new == true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard;
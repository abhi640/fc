import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
            <div className='cards__item__info'>
            <h6 className='cards__item__text'>{props.text}</h6>
          </div>
          </figure>
          
        </Link>
      </li>
    </>
  );
}

export default CardItem;

import React, { useState } from 'react';
import './SinglePackingCategory.css';
import arrow_right from '../../assets/arrow_right.svg';
import arrow_down from '../../assets/arrow_down.svg';
import cross from '../../assets/items/cross.svg';
import plus from '../../assets/items/plus.svg';
import minus from '../../assets/items/minus.svg';
import { usePackingListContext } from '../../context/packingListContext';

const SinglePackingCategory = ({ id, category, items }) => {
  const { deleteItemFromCategory, changeItemAmount } = usePackingListContext();
  const [isShowItems, setIsShowItems] = useState(false);

  const toggleCategory = () => {
    setIsShowItems(!isShowItems);
  };

  const clickHandler = (e, itemId) => {
    if (e.target.alt === 'cross') {
      deleteItemFromCategory(id, itemId);
    } else if (e.target.alt === 'minus') {
      changeItemAmount('decrease', id, itemId);
    } else {
      changeItemAmount('increase', id, itemId);
    }
  };

  return (
    <article className='packing__content'>
      <header>
        <button>
          <h4 onClick={toggleCategory}>
            {category}
            <img src={!isShowItems ? arrow_right : arrow_down} alt='arrow' />
          </h4>
        </button>
      </header>
      <div className={isShowItems ? 'packing__items active' : 'packing__items'}>
        {items.map(item => {
          return (
            <div key={item.id}>
              <img
                className='item__delete'
                src={cross}
                alt='cross'
                onClick={e => clickHandler(e, item.id)}
              />
              {item.name}
              <div
                className={`item__amount ${item.amount > 0 && 'clear__margin'}`}
              >
                {item.amount > 0 && (
                  <>
                    <img
                      src={minus}
                      alt='minus'
                      onClick={e => clickHandler(e, item.id)}
                    />
                    {item.amount}
                  </>
                )}

                <img
                  src={plus}
                  alt='plus'
                  onClick={e => clickHandler(e, item.id)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default SinglePackingCategory;

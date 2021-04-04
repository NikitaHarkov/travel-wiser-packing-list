import React, { useState } from 'react';
import './PackingList.css';
import SinglePackingCategory from './SinglePackingCategory';
import { usePackingListContext } from '../../context/packingListContext';

const PackingList = () => {
  const {
    packingList,
    categories,
    openModal,
    openPopup,
  } = usePackingListContext();
  const [listId, setListId] = useState();

  const removeHandler = (e, id) => {
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 2;
    if (id === undefined) {
      id = packingList[0].id;
    }
    openPopup(id, { center, bottom });
  };

  const changeHandler = e => {
    setListId(parseInt(e.target.value, 10));
  };

  return (
    <section className='container__padding'>
      <h1 className='packing__title'>My packing lists</h1>
      <div className='packing'>
        <article className='packing__header'>
          <select
            className='packing__select'
            name='listId'
            onChange={changeHandler}
          >
            {packingList.map(list => {
              return (
                <option key={list.id} value={list.id}>
                  {list.name}
                </option>
              );
            })}
          </select>
          <button className='button-primary' onClick={openModal}>
            Create new
          </button>
          <button
            className='button-primary'
            onClick={e => removeHandler(e, listId)}
          >
            Delete this packing list
          </button>
        </article>
        {categories.map(category => {
          return <SinglePackingCategory key={category.id} {...category} />;
        })}
      </div>
    </section>
  );
};

export default PackingList;

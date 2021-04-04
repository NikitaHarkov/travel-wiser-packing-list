import React, { useRef, useEffect } from 'react';
import { usePackingListContext } from '../../context/packingListContext';
import './Popup.css';

const Popup = () => {
  const {
    isPopupOpen,
    location,
    closePopup,
    id,
    removePackingList,
  } = usePackingListContext();

  const container = useRef(null);
  useEffect(() => {
    const popup = container.current;
    const { center, bottom } = location;
    popup.style.left = `${center}px`;
    popup.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`${isPopupOpen ? 'popup show' : 'popup'}`}
      ref={container}
    >
      <h4>Are you sure you want to delete this packing list?</h4>
      <div className={`popup-center`}>
        <button
          type='button'
          className='button-primary pink'
          onClick={() => {
            removePackingList(id);
            closePopup();
          }}
        >
          Delete
        </button>
        <button type='button' onClick={closePopup}>
          Cancel
        </button>
      </div>
    </aside>
  );
};

export default Popup;

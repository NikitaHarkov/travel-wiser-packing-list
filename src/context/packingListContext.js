import React, { useEffect, useState, useContext, useReducer } from 'react';
import reducer from '../reducer/packingListReducer';
import {
  LOAD_DATA,
  DELETE_ITEM,
  CHANGE_ITEM_AMOUNT,
  CREATE_PACKING_LIST,
  REMOVE_PACKING_LIST,
} from '../types/types';
import { categories, packingList } from '../example_data/packing-data';

const PackingListContext = React.createContext();

const initialState = {
  packingList: [],
  categories: [],
};

export const PackingListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [id, setId] = useState();

  const openPopup = (id, coordinates) => {
    setId(id);
    setLocation(coordinates);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const createPackingList = form => {
    dispatch({ type: CREATE_PACKING_LIST, payload: { form } });
    closeModal();
  };

  const removePackingList = listId => {
    dispatch({ type: REMOVE_PACKING_LIST, payload: listId });
  };

  const deleteItemFromCategory = (categoryId, itemId) => {
    dispatch({ type: DELETE_ITEM, payload: { categoryId, itemId } });
  };

  const changeItemAmount = (action, categoryId, itemId) => {
    dispatch({
      type: CHANGE_ITEM_AMOUNT,
      payload: { action, categoryId, itemId },
    });
  };

  useEffect(() => {
    dispatch({ type: LOAD_DATA, payload: { categories, packingList } });
  }, []);
  return (
    <PackingListContext.Provider
      value={{
        ...state,
        deleteItemFromCategory,
        changeItemAmount,
        createPackingList,
        removePackingList,
        isShowModal,
        openModal,
        closeModal,
        openPopup,
        closePopup,
        isPopupOpen,
        location,
        id,
      }}
    >
      {children}
    </PackingListContext.Provider>
  );
};

export const usePackingListContext = () => {
  return useContext(PackingListContext);
};

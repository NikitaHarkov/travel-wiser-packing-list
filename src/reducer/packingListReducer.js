import {
  CHANGE_ITEM_AMOUNT,
  CREATE_PACKING_LIST,
  DELETE_ITEM,
  LOAD_DATA,
  REMOVE_PACKING_LIST,
} from '../types/types';

const packingListReducer = (state, action) => {
  const { payload, type } = action;
  let tempCategories;
  switch (type) {
    case LOAD_DATA:
      return {
        ...state,
        packingList: payload.packingList,
        categories: payload.categories,
      };
    case DELETE_ITEM:
      tempCategories = state.categories.map(list => {
        if (list.id === payload.categoryId) {
          const tempItems = list.items.filter(
            item => item.id !== payload.itemId
          );
          return { ...list, items: tempItems };
        }
        return list;
      });
      return { ...state, categories: tempCategories };
    case CHANGE_ITEM_AMOUNT:
      tempCategories = state.categories.map(list => {
        if (list.id === payload.categoryId) {
          const tempAmount = list.items.map(item => {
            if (item.id === payload.itemId) {
              let newAmount;
              if (payload.action === 'increase') {
                newAmount = item.amount + 1;
              } else {
                newAmount = item.amount - 1;
              }
              return { ...item, amount: newAmount };
            }
            return { ...item };
          });
          return { ...list, items: tempAmount };
        }
        return list;
      });
      return { ...state, categories: tempCategories };
    case CREATE_PACKING_LIST:
      state.packingList.unshift({
        id: new Date(),
        name: payload.form.name,
      });
      return { ...state };
    case REMOVE_PACKING_LIST:
      const tempList = state.packingList.filter(list => list.id !== payload);
      return { ...state, packingList: tempList };
    default:
      return { ...state };
  }
};

export default packingListReducer;

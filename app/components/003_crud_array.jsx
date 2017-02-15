//from boilerplate 002-crud:

//when the state is an array

//LOAD INITIAL ITEMS: return action.items

//ADD ITEM: return [...state, action.item]

//REMOVE ITEM: use filter to return all except the one to remove
// return state.filter((item) => {
//   return (item.name !== action.payload);
// });

//UPDATE ITEM: use map returning a ternary operator to change only the selected item



export default (state=[], action) => {
  switch(action.type) {
  case 'LOAD_CONTACTS':
    return action.payload;
  case 'ADD_CONTACT':
    return [
      ...state,
      action.payload
    ];
  case 'REMOVE_CONTACT':
    return state.filter((item) => {
      return (item.name !== action.payload);
    });
  case 'UPDATE_NAME':
    return state.map((item) => {
      return (item.name === action.oldName) ?
        {...item, name: action.newName} :
        item;
    });
  default:
    return state;
  }
};

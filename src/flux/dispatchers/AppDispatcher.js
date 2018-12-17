import { Dispatcher } from 'flux';
import ListStore from '../stores/ListStore';
const AppDispatcher = new Dispatcher();

AppDispatcher.register(action => {
  switch (action.actionType) {
    case 'ADD_NEW_ITEM':
      ListStore.addNewItemHandler(action.text);
      ListStore.emitChange();
      break;
    default:
      break;
  }
});

export default AppDispatcher;
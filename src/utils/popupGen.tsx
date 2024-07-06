import { ReactNode } from 'react';
import { PopupTypes } from '../types';
import Add from '../components/PopupHtmls/Add';
import Edit from '../components/PopupHtmls/Edit';
import View from '../components/PopupHtmls/View';
import ErrorPopup from '../components/PopupHtmls/ErrorPopup';
import Login from '../components/PopupHtmls/Login';
import Config from '../components/PopupHtmls/Config';

export default function popupGen(type: PopupTypes): ReactNode {
  switch (type) {
    case 'add':
      return <Add />;
    case 'edit':
      return <Edit />;
    case 'view':
      return <View />;
    case 'login':
      return <Login />;
    case 'cadastro':
      return <Login />;
    case 'config':
      return <Config />;
    default:
      return <ErrorPopup />;
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Protected from './examples/Protected';
// import Sidebar from './examples/Sidebar';
//import Connected from './examples/Connected';
import SidebarWithStyles from './examples/SidebarWithStyles';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SidebarWithStyles />, document.getElementById('root'));
registerServiceWorker();

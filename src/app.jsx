import React from 'react';
import Router from 'react-router';
import {createHistory, createHashHistory, useQueries} from 'history';

import Routes from './routes.jsx';

import { APPNAME } from '../config';

document.title = APPNAME;

let history = createHashHistory();

React.render(<Router history={history}>{Routes}</Router>,document.body);
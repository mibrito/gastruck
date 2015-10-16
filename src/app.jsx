/*
 * App.jsx, responsible for rendering the components on body
 */
import React from 'react';
import Router from 'react-router';
import {createHistory, createHashHistory, useQueries} from 'history';

import { APPNAME } from '../config';

import Routes from './routes.js';


document.title = APPNAME;	// set page title

let history = createHashHistory();	// create a history

React.render(<Router history={history}>{Routes}</Router>,document.body);	// render everything on body

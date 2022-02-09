import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import ClubOverview from './src/views/ClubOverView';

export default function App() {
	return (
		<Provider store={createStore(reducers, applyMiddleware(thunk))}>
			<ClubOverview/>
		</Provider>
	);
}
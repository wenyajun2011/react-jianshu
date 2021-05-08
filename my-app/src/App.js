import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { ResetCss } from './style';
import { IconfontStyle } from './statics/iconfont/iconfont';
import Header from './common/header';
import Home from './pages/home';
import store from './store';

class App extends Component {
	render() {
		return (
			<div className="App">
				<ResetCss />
				<IconfontStyle />
				<Provider store={store}>
					<Header />
					<BrowserRouter>
						<Route path="/" exact component={Home}></Route>
					</BrowserRouter>
				</Provider>
			</div>
		);
	}
}

export default App;

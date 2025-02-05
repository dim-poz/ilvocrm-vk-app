import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './assets/pages/Home';
import QueueRecords from './assets/pages/QueueRecords';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [user, setUser] = useState(null);
	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return <View activePanel={activePanel}>
			    <Home id='home' bridge={bridge} go={go} />
		    	<QueueRecords id='queue-records' go={go} />
			</View>;
}

export default App;


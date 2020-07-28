import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';


const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader>header</PanelHeader>
	</Panel>
);

export default Persik;

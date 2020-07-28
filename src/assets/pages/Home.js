import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import { Header, PanelHeaderButton } from '@vkontakte/vkui';
import UserGroups from '../components/UserGroups'
import User from '../components/User'

export default class Home extends React.Component {

    render() {
        return <Panel id='vk-info' header={false}>
		        	<pre>{this.groups}</pre>
		        	<pre>{this.user}</pre>
		        	<pre>{this.access_token}</pre>
		        	<User user={this.user}/>
		        	<UserGroups groups={this.groups}/>
		        </Panel>
    }

    //Life
    componentDidMount() {
        this.bridge = this.props.bridge;
        this.groups = null;
        this.user = null;
        this.access_token = null;
        this.getUset();
        this.getToken();
        this.getGroups();
    }

    //Methods
    getUset() {
        this.bridge.send('VKWebAppGetUserInfo').then((result) => {
            this.user = result
        });
    }

    getToken(user) {
        this.bridge.send("VKWebAppGetAuthToken", { "app_id": 7551645, "scope": "groups,wall,photos" }).then((data) => {
            this.access_token = data
        });
    }

    getGroups(access_token, user_id) {
        this.bridge.send("VKWebAppCallAPIMethod", { "method": "groups.get", "request_id": "getUserGroups", "params": { "user_ids": user_id, "v": "5.120", "access_token": access_token } }).then((e) => {
            this.groups = e
        })
    }

};

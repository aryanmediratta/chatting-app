import React, {Component, Fragment} from 'react';

import firebase from 'firebase';

import * as remoteActions from '../scripts/remoteActions';

import appStore from '../store/appStore';

class Header extends Component {

	state = {
			user : null
		}

	componentDidMount(){
		remoteActions.setListenerOnAuthChange();
	}	
	render(){
		return(
			<Fragment>
			<h1> this is a header </h1>
			{
				appStore.isLoggenIn? (
					<Fragment>
					<button className = 'btn' onClick={()=>remoteActions.signOut()}> Sign out </button>	
					<img style = {styles.profile} src = {appStore.user.photoURL} />
					</Fragment>
				) : (
					<button className = 'btn' onClick={()=>remoteActions.signIn()}> Sign in </button>
				)

			}
			</Fragment>
			);
	}
}

const styles = {
	profile : {
		width : 40,
		height : 40,
		margin : 40
	}
}

export default Header;


import React, {Component} from 'react';

import {Link } from 'react-router-dom';

import firebase from 'firebase';

import Header from '../components/Header';

var db = firebase.database();

class Profile extends Component {

	state = {
		userProfile : null
	}

	componentDidMount(){
		let userId = this.props.match.params.userId
		db.ref('/users/'+userId).once('value').then(snapshot =>{
			let userProfile = snapshot.val();
			this.setState({
				userProfile
			})
		})

	}



	render(){
		let userId = this.props.match.params.userId
		return(
			<div>
			<Header />
			<h1>Profile Page {userId}</h1>
			{ 
				this.state.userProfile?
					<div>
						<h3>Name : {this.state.userProfile.name}</h3>
						<h4>Age : {this.state.userProfile.age}</h4>
					</div>
					:
					null
			}

			<Link to = "/chat" > View Chat </Link> 
			<br/>
			<Link to = '/' > View Home </Link>
			</div>
			)
	}
}


export default Profile;


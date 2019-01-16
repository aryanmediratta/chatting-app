import React, { Component } from 'react';

import fire from '../fire';

import {Link } from 'react-router-dom';

import Header from '../components/Header'

var database = fire.database();

class Chat extends Component {
	
	constructor(props){
		super(props); // super se parent class ka constructor call hota hai as in , in this case, Component ka constructor banega and not chat ka
		 // super props is so that all the properties of child class is added to the parent class for the use of parent class asnwell.
		this.state = {
			messages : [],
			newMessage: 'Hello'
		}
	}
	componentDidMount(){
		database.ref('messages').on('child_added', function(snapshot){
			var msg = snapshot.val();

			this.setState({
				messages : [...this.state.messages, msg]  // ... is for stuff inside as in a = [2,3,4] and b1 = [a,5],, to make it nice, we use b2 = [...a,5]. in first case we get a 2d array but in 2nd case we get [2,3,4,5] 
			})


		}.bind(this))
	}   	//did mount because components have already been mounted. will mount not good because it might get stuck in an infinite loop.
	_handleClick(){
		database.ref('messages').push().set({
			body: this.state.newMessage,
			author: 'J.K.Rowling'
		})
		this.setState({
			newMessage: ''
		})
	}
  render() {
    return (
    	<div>
    	<Header />
      <br />
      <br />
      	<Link to = '/' > View Home </Link>
      	<br/>
      	<Link to ='/profile'> View profile </Link>
  		<br/>
    	 <h1> do chat here please </h1>
    	 
    	 <input value={this.state.newMessage} 
    	 onChange = {function(e){
    	 	this.setState({
    	 		newMessage: e.target.value
    	 	})
    	 }.bind(this)} />
    	 <button onClick = {this._handleClick.bind(this)}>Send</button>

    	 {
    	 	this.state.messages.map(function(m,i){
    	 		return(
    	 		<p key = {i}> {m.body} - {m.author} </p>
    	 		)
    	 	})
    	 }

    	 </div> 
    );
  }
}

export default Chat;

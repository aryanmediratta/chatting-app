import { observable, action, computed, decorate } from 'mobx';



class AppStore {

	isLoggedIn = false 

	user = null

	setUser(user){
		this.user = user;
		this.isLoggedIn = true;
	}

	unsetUser(){
		this.user = null;
		this.isLoggedIn = false;
	}

}


decorate(AppStore,{
	isLoggedIn: observable,
	user : observable,
	setUser : action,
	unsetUser : action
})

const appStore = new AppStore();
export default appStore;
import { makeAutoObservable, toJS } from "mobx";

export default class ActiveUsersStore {
    constructor() {
        this._usersStore = [];
        makeAutoObservable(this);
    };

    setUserInUserStore(user) {
        this._usersStore.push(user);
    };
    setArrOfUsers(users) {
        this._usersStore = users;
    };
    
    get usersStore() {
        return toJS(this._usersStore);
    };
};
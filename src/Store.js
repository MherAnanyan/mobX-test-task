import { makeObservable, observable, action } from "mobx";

class Store {
    firstName = "";
    lastName = "";
    constructor(firstName, lastName) {
        makeObservable(this, {
            firstName: observable,
            lastName: observable,
            update: action
        });
        this.firstName = firstName;
        this.lastName = lastName;
    }

    update(value, name) {
        this[name] = value;
    }
}

const storeInstance = new Store();
export default storeInstance;

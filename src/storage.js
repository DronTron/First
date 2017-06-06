let count = 0;

function change(count, action){
    switch(action.type){
    case "INCREASE" :
        return count + action.value
    case "MULTIPLY" : 
        return count * action.value
    default: return count
    }
    
}


// КЛАСС!
class Store {
    constructor(inition_state, change){
        this.state = inition_state;
        this.change = change;
        this.subcribers = [];
    };
    dispatch(action) {
        let new_state = this.change(this.state, action);
        this.state = new_state;
        this.call();
    };
    subcribe(callback){
        this.subcribers.push(callback);
        return () => this.subcribers = this.subcribers.filter((value) => value != callback);
    };
    
    call(){
        this.subcribers.forEach((value) => {
            value.call();
            
        });
    };
};
let store = new Store(count, change);
const act1 = {
    type:"INCREASE",
    value: 1
}
const act2 = {
    type:"MULTIPLY",
    value: 3
}

let val1 = store.subcribe(() => console.log("First", store.state));
let val2 = store.subcribe(() => console.log("Second", store.state));
store.dispatch(act1);
val2();
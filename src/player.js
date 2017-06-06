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

let person = {
    health: 100
};
const reducer = (state,action) => {
    switch (action.type){
        case "DEVASTED": 
            return {health: state.health - action.payload};
        default: return state;
    };
};
let store = new Store(person,reducer);

const act_devasted = {type: "DEVASTED",
                      payload: 10,  
                    };

let player = document.querySelectorAll(".person")[0];
let button = document.querySelectorAll("button")[0];

let val = store.subcribe(() => {
    player.style.height = `${store.state.health*3}px`;
    console.log(1);
});

button.onclick = (e) =>{

        store.dispatch(act_devasted);
        if (store.state.health <= 0) val();
        // player.style.height = `${person.health*3}px`;
    };


import {createStore} from 'redux';

const incrementCount =(payload={})=>({
    type:'INCREMENT',
    incrementby:  typeof payload.incrementBy==='number' ? payload.incrementBy : 1
});

const decrementCount =(payload={})=>({
    type:'DECREMENT',
    decrementby:  typeof payload.decrementBy==='number' ? payload.decrementBy : 1
});

const resetCount =()=>({
    type:'RESET',
});

const setCount =(payload)=>({
    type:'SET',
    count: payload.count
});

const countReducer=(state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                count: state.count + action.incrementby
            };
        case 'DECREMENT':
            const decrementby= !!action.decrementby ? action.decrementby : 1;
            return{
                count: state.count - decrementby
            };
        case 'SET':
            return{
                count: action.count
            }
        case 'RESET':
            return{
                count: 0
            }
        default:
            return state;
    }
}

const store=createStore(countReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount({decrementBy: 3}));

store.dispatch(resetCount());

store.dispatch(setCount({count: 100}))
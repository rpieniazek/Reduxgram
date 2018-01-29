//reducer takes 2 things:
//1. action
//2. copy of current state


//action, store

//okey let me see

//store

export default function posts(state = [], action) {
    switch (action.type){
        case 'INCREMENT_LIKES':
            const i = action.index;
            console.log('incrementing likes');
            console.log(state);
            return [
                ...state.slice(0,i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i+1)
            ];
        default:
            return state;
    }
}


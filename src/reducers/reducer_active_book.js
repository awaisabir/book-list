// this 'state' arg is simply for the piece of state this reducer is responsible
// for - NOT ALL OF THE GLOBAL STATE
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}
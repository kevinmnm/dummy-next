const initialState = {
   number: 5
}

const calcReducer = (state = initialState, action) => {
   switch(action.type) {

      case 'ADD': {
         return {
            ...state,
            number: state.number++
         }
      }

      default:
         return state
   }
}

export default calcReducer;
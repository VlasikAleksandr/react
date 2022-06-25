
const SENT_MESSAGE = 'SENT-MESSAGE'

let initialState = {
   dialogs: [
      { id: 1, name: 'Artem' },
      { id: 2, name: 'Pasha' },
      { id: 3, name: 'Sasha' },
      { id: 4, name: 'Oleg' },
      { id: 5, name: 'Slava' },
      { id: 6, name: 'Dima' }
   ],
   messages: [
      { id: 1, message: 'Hi, how are you' },
      { id: 2, message: 'What are you doing' },
      { id: 3, message: 'Hello' },
   ],
}

const dialogsReduser = (state = initialState, action) => {

   switch (action.type) {
      case SENT_MESSAGE:
         let newMessage = {
            id: 4,
            message: action.newMessageBody
         }
         return {
            ...state,
            messages: [...state.messages, newMessage],
         }
      default:
         return state;
   }
}


export let sendMessageCreator = (newMessageBody) => ({
   type: SENT_MESSAGE, newMessageBody

})


export default dialogsReduser
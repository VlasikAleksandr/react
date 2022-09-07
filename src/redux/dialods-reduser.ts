
const SENT_MESSAGE = 'SENT-MESSAGE'

type DialogsType = {
   id: number
   name:string
}
type MessagesType = {
   id: number
   message:string
}
let initialState = {
   dialogs: [
      { id: 1, name: 'Artem' },
      { id: 2, name: 'Pasha' },
      { id: 3, name: 'Sasha' },
      { id: 4, name: 'Oleg' },
      { id: 5, name: 'Slava' },
      { id: 6, name: 'Dima' }
   ] as Array<DialogsType>,
   messages: [
      { id: 1, message: 'Hi, how are you' },
      { id: 2, message: 'What are you doing' },
      { id: 3, message: 'Hello' },
   ] as Array<MessagesType>,
}

type InitialStateType = typeof initialState

const dialogsReduser = (state = initialState, action:any):InitialStateType => {

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

type SendMessageCreatorType = {
   type: typeof SENT_MESSAGE
   newMessageBody: string 
}

export let sendMessageCreator = (newMessageBody:string):SendMessageCreatorType => ({
   type: SENT_MESSAGE, newMessageBody

})


export default dialogsReduser
import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import { required, maxLengthCreator } from '../../utils/validators/validators'

const maxLength100 = maxLengthCreator(100)
const Dialogs = (props) => {


   let dialodsElement = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)

   let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />)
   let newMessageBody = props.dialogsPage.newMessageBody

   let addNewMessage = (values) => {
      props.sendMessageCreator(values.newMessageBody);
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>
            {dialodsElement}
         </div>
         <div className={s.messages}>

            {messagesElements}
            <AddMessageFormRedux onSubmit={addNewMessage} />
         </div>
      </div>
   )
}

const AddMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div className={s.text}>
            <Field component={Textarea} name={'newMessageBody'}
               placeholder='Enter your message'
               validate={[required, maxLength100]} />
         </div>
         <div>
            <button>Send</button>
         </div>
      </form>
   )
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)
export default Dialogs
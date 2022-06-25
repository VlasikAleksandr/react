import React from 'react';
import Post from './Posts/Post';
import s from './MyPost.module.css'
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10)

const MyPost = (props) => {
   let postsElements = props.posts.map(p => <Post message={p.message} avatar={p.avatar} like={p.like} likesCount={p.likesCount} />)

   let addNewPost = (values) => {
      props.addPost(values.newPostText)
   }

   return (
      <div className={s.new_post}>
         <h2>My post</h2>
         <AddNewPostRedux onSubmit={addNewPost} />
         {postsElements}
      </div>
   )
}


const AddNewPost = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div className={s.textarea}>
            <Field component={Textarea} name={'newPostText'}
               placeholder='Post message'
               validate={[required, maxLength10]} />
         </div>
         <div className={s.button}>
            <button>Send</button>
         </div>
      </form>
   )
}

const AddNewPostRedux = reduxForm({ form: 'profileAddNewPost' })(AddNewPost)
export default MyPost
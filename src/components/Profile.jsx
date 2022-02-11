import React from 'react';
import './Profile.css'

const Profile = () => {
   return (
      <div className='content'>
         <div className='first-image'>
            <img src="https://avatars.mds.yandex.net/i?id=4eec9a1b34fb8130d33509dadee2ef10-5896834-images-thumbs&n=13&exp=1" />
         </div>
         <div className='avatar'>
            <div className='logo'>
               <img src="https://avatars.mds.yandex.net/i?id=f776459b2ec99e77433217873cae4fa3-4033951-images-thumbs&n=13&exp=1" />
            </div>
            <div className='informatoin'>
               <div className='title'>Vlasik S.</div>
               <div className='data'>
                  <p>Date of Birth: 21 july</p>
                  <p>City: Musik</p>
                  <p>Edukation: BSU'11</p>
                  <p>Web Site:https//it-kamasutra.com</p>
               </div>
            </div>
         </div>
         <div className='title-nes-post'>
            My post
         </div>
         <div className='textarea'>
            <textarea>your nems</textarea>
         </div>
         <div className='button'>
            <button>Send</button>
         </div>
         <div className='post'>
            <div className='logo-post'>
               <img src="https://avatars.mds.yandex.net/i?id=f776459b2ec99e77433217873cae4fa3-4033951-images-thumbs&n=13&exp=1" />
            </div>
            <div className='data-post'> Hey why nobody love me?</div>
         </div>
      </div>
   );
}
export default Profile
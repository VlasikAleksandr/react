import React from "react";
import { useEffect, useState } from "react";

type ProfileStatusPropsType ={
   status:string
   updeteStatus:(status:string)=>void
}

const ProfileStatus:React.FC<ProfileStatusPropsType> = (props) => {

   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.status)

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   const activateEditMode = () => {
      setEditMode(true)
   }

   const deactivateEditMode = () => {
      setEditMode(false)
      props.updeteStatus(status)
   }

   const onStatusChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setStatus(e.currentTarget.value)
   }

   return (
      <div>
         {!editMode
            ? <div>
               <span onDoubleClick={activateEditMode} >Hello </span>
            </div>
            : <div>
               <input
                  onChange={onStatusChange}
                  autoFocus={true}
                  onBlur={deactivateEditMode}
                  value={status} />
            </div>
         }
      </div>
   )
}


export default ProfileStatus
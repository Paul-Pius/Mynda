import React, { useState } from "react";
import { useFormik } from 'formik';
import convertToBase64 from '../../my-component/helper/convert';
import avatar from "../../../assets/profile.png";
import styles from '../styles/Username.module.css';

const Profile = () => {

    const [file, setFile] = useState()


    const formik = useFormik({
        initialValues : {
          email: 'doyol56239@cnogs.com',
          username: 'example123',
          password : 'admin@123'
        },
    
        onSubmit : async values => {
          values = await Object.assign(values, { profile : file || ''})
        //   let registerPromise = registerUser(values)
          
    
        //   registerPromise.then(function(){ navigate('/')});
        }
      })


    const onUpload = async e => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
      }

  return (
    <div>
        <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
                <label htmlFor="profile">
                <img style={{width: "40px"}} src={file || avatar} className={styles.profile_img} alt="avatar" />
                </label>
                
                <input onChange={onUpload} type="file" id='profile' name='profile' />
            </div>
        </form>
    </div>
  )
}

export default Profile;
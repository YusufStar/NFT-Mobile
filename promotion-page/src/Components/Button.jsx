import React from 'react'
import styles from "../styles/Global"
import AppApk from "../assets/AppApk.apk"

const Button = ({ assetUrl, link }) => {
  return (
    <button className={`${styles.btnBlack}`}>
      <img src={assetUrl} alt="expo_icon" className={`${styles.btnIcon}`} />
      <a href={AppApk} download className='flex flex-col justify-start ml-4'>
        <p className={`${styles.btnText} font-normal text-xs`}>.APK</p>
        <p className={`${styles.btnText} font-bold text-xs`}>Download</p>
      </a>
    </button>
  )
}

export default Button
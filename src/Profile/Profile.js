import React from 'react'
import PropTypes from 'prop-types'


const Profile = (props) => {
  const HandleName=() => alert(`Hello  ${props.Fullname} `)
  return (
    <div>
       {props.children} 
      <h2>Name of profile User : {props.Fullname} </h2>
      <h2>Profession of profile User : {props.Profession} </h2>
      <h2>Bio: {props.Bio}</h2>
      <button className='B1' onClick={HandleName}>show user FullName</button>
    </div>
  )
}

  Profile.propTypes={
    Fullname: PropTypes.string ,
    Bio: PropTypes.string ,
    Profession: PropTypes.string,
  }

  Profile.defaultProps = {
    Fullname: "Amira Belhaj",
    Bio: "HAHAHAHAHAHA",
    Profession: "Student"
  }

export default Profile
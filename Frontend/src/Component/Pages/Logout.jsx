import React from 'react'
import { removeToken } from '../Service/AdminService'

const Logout = () => {

    const handleLogout = () =>{
        removeToken("token");
    }

  return (
    <div>
        <button onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default Logout
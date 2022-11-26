import {createContext, useState} from 'react'


const UserContext = createContext();

export function UserContextProvider({ children }) {

    const [userInfo, setUserInfo] = useState({
        user_creation_epoch: '',
        user_email: '',
        user_id: '',
        user_is_active: '',
        user_is_new: '',
        user_last_active_epoch: '',
        user_profile_image: '',
        user_token: '',
        user_username: ''
      })

      return (<UserContext.Provider value={{userInfo, setUserInfo}}>{children}</UserContext.Provider>);
}

export default UserContext;
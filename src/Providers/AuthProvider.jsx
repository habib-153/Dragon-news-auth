/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
// import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // const location = useLocation();
    // const navigate = useNavigate();

    // createUser with email and pass
    const createUser = (name, photo, email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        .then(res =>{
            console.log(res.user)
            // user.displayName = name
        })
        .catch(err =>{
            console.error(err)
        })
    }
// login with pass
    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
        // .then(res =>{
        //     console.log(res.user)
            
        //     // navigate after login
        //     navigate(location?.state? location.state : '/')
        // })
        // .catch(err =>{
        //     console.error(err)
        // })
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        logOut,
        logIn,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
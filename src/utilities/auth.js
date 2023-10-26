// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext()

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState()
//     const login = user => { setUser(user) }
//     const logout = () => { setUser(null) }

//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// // Authentication
// // useAuth().user -> return user
// // userAuth().login(user) 
// // userAuth().logout() 
// export const useAuth = () => {  
//     console.log('util/ auth.js: ', useContext(AuthContext))
//     return useContext(AuthContext)
// }

// export const ProtectedRoutes = () => {
//     const isLoggedIn = useAuth().user;
//     return (
//         isLoggedIn ?
//             (
//                 <>
//                     <TopNavbar title="Bow online course registration" navs={["Home", "My Account", "Logout"]} />
//                     <Outlet />
//                 </>
//             )
//             :
//             (
//                 <>
//                     <div>'nooo'</div> 
//                     <StudentSignIn />
//                 </>
//             ))
// }
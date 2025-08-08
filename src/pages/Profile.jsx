import { useDispatch } from "react-redux"
import { logoutUser, updateUserData } from "../Redux/Actions/userAction"

const Profile = () => {
    const dispatch = useDispatch()

    const handleUser = () => {
        const data = {
            id: 1,
            email: "aliza@mail.com",
            name: "Aliza",
            password: "123456",
            role: "Admin"
        }
        const dispatchObject = updateUserData(data);
        //after action, dispatch data to store.
        dispatch(dispatchObject)
    } 
    const handleUserLogout = () => {
        const dispatchLogout = logoutUser()
        dispatch(dispatchLogout);

    }
    return (
        <div className="container mx-auto">
            <h1>User Profile</h1>

            <div>
                <button className="px-2 py-2 rounded-md bg-blue-600 text-white" onClick={handleUser}>Set User</button>
            </div>
            <hr />
             <div>
                <button className="px-2 py-2 rounded-md bg-red-600 text-white" onClick={handleUserLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Profile;

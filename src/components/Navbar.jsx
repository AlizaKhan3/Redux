import { useSelector } from "react-redux"

const Navbar = () => {
    const user = useSelector((state) => state.userReducer)
    console.log(user)
    return (
        <div className="container px-3 py-3 flex justify-between">
            <div>LOGO</div>
            {user.data ?
                <div className="flex justify-between gap-3">
                    <p>{user.data.name}</p>
                    <p>{user.data.email}</p>
                </div>
                : <div>
                    <p>Loading data....</p>
                </div>
            }
        </div>
    )
}

export default Navbar;
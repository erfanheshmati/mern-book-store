import { Sidebar } from 'flowbite-react';
import { BiBuoy, BiExit } from 'react-icons/bi';
import { HiChartPie, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import userImg from '/assets/profile.jpg'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const SideBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/"

    const handleLogout = () => {
        logOut()
            .then(() => {
                alert("Signed out successfully!")
                navigate(from, { replace: true })
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

    return (
        <Sidebar aria-label="Sidebar with content separator example" className='h-screen'>
            <Sidebar.Logo href="#" img={user?.photoURL} imgAlt="">
                {user?.displayName || "Demo User"}
            </Sidebar.Logo>
            <hr className='mb-1' />
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                        Upload Book
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/manage" icon={HiTable}>
                        Manage Books
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Users
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiShoppingBag}>
                        Products
                    </Sidebar.Item>
                    <Sidebar.Item icon={FaSignOutAlt}>
                        <button onClick={handleLogout}>Sign Out</button>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Upgrade to Pro
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards}>
                        Documentation
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={BiBuoy}>
                        Help
                    </Sidebar.Item>
                    <Sidebar.Item href="/" icon={BiExit}>
                        Exit
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default SideBar;
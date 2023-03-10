import Logo from "./Logo"
import GoogleMapsSearch from "./GoogleMapsSearch"
import JobList from "./JobList"
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
    <div className="flex items-center flex-wrap gap-60 border-b-2 border-gray-">
        <Logo />
        <MenuIcon />
        <JobList />
        <GoogleMapsSearch />
    </div>
  )
}

export default Navbar

import {Link} from "react-router/internal/react-server-client";

const Navbar = () => {
    return (
       <nav className={"navbar"}>
            <Link to={"/"}>
                <p className={"text-2xl font-bold text-gradient"}>RESUMIND</p>
            </Link>

           <Link to={"/upload"}>
               <p className={"primary-button w-fit"}>Upload Resume</p>
           </Link>
       </nav>
    )
}
export default Navbar

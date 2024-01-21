import '../App.css'
import notification from '../notification-statu.png';
import item from '../element-11.png'
import settings from '../Frame.png'
import profile from '../profile.png'
import exit from '../exit-right.png'
function Navbar() {
    return (
        <div className="nav">
            <div className="nav-left">
                <h1 className="logo">Ser<span>ve</span>.restaurant</h1>
                <div className="links-div">
                    <nav>
                        <ul>
                            <li className="dashboard">
                                <a>Dashboard</a>
                            </li>
                            <li>
                                <a>Pages</a>
                            </li>
                            <li>
                                <a>Apps</a>
                            </li>
                            <li>
                                <a>Layouts</a>
                            </li>
                            <li>
                                <a>Help</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="nav-right">
                <img src={notification} alt="" />
                <img src={item} alt="" />
                <img src={settings} alt="" />
                <img className="profile-img" src={profile} alt="" />
                <img src={exit} alt="" />
            </div>
        </div>
    )
}

export default Navbar;
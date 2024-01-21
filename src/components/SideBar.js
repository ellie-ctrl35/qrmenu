import '../App.css'
import ficon from '../regis.png'
function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <div className="icon"></div>
                <div className="texts">
                    <div className="pd">All Channels</div>
                    <div className="pt">80 orders recieved</div>
                </div>
            </div>
            <div className="sidebar-item">
                <div className="icon"></div>
                <div className="texts">
                    <div className="pd">All Channels</div>
                    <div className="pt">80 orders recieved</div>
                </div>
            </div>
            <div className="sidebar-item">
                <div className="icon"></div>
                <div className="texts">
                    <div className="pd">All Channels</div>
                    <div className="pt">80 orders recieved</div>
                </div>
            </div>
            <div className="sidebar-item">
                <div className="icon"></div>
                <div className="texts">
                    <div className="pd">All Channels</div>
                    <div className="pt">80 orders recieved</div>
                </div>
            </div>
            <div className="sidebar-item">
                <div className="icon"></div>
                <div className="texts">
                    <div className="pd">All Channels</div>
                    <div className="pt">80 orders recieved</div>
                </div>
            </div>

            <div className="bottom-sidebar">
                <img className="ficon" src={ficon} alt="" />
                <button className="addbtn">+ Add Channel </button>
            </div>
        </div>
    )
}
 export default SideBar;

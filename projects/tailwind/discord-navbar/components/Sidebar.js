import {FaFire, FaPoo} from "react-icons/fa"
import { BsFillLightningFill, BsPlus } from "react-icons/bs";

function Sidebar() {
  return (
    <nav className="fixed top-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg">

      <SidebarIcon icon={<FaFire size="28"/>}/>
      <SidebarIcon icon={<BsPlus size="28"/>}/>
      <SidebarIcon icon={<BsFillLightningFill size="28"/>}/>
      <SidebarIcon icon={<FaPoo size="28"/>}/>
    </nav>
  );
}


const SidebarIcon = ({icon, text = "tooltip"}) => {
  return (
    <div className="sidebar-icon group">
      {icon}

      <span class="sidebar-tooltip group-hover:scale-100">
          {text}
      </span>
    </div>
  )
}

export default Sidebar
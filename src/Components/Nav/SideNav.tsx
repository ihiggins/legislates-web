import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HearingIcon from '@mui/icons-material/Hearing';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';


import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

var SideNav = () => {
  return (
    <div className="side-nav">
      <Link to="/">
        <SideNavElement title="Goverment Today" icon={<TodayOutlinedIcon />} />
      </Link>
      <Divider variant="middle" />
      <Link to="/president">
        <SideNavElement title="President's Desk" icon={<GavelOutlinedIcon />} />
      </Link>
      <Link to="/house">
        <SideNavElement
          title="House Floor"
          icon={<AccountBalanceOutlinedIcon />}
        />
      </Link>
      <Link to="/senate">
        <SideNavElement title="Senate Floor" icon={<HomeOutlinedIcon />} />
      </Link>
      <Divider variant="middle" />

      <Link to="/bills">
        <SideNavElement title="Congressional Bills" icon={<InsertDriveFileOutlinedIcon/>} />
      </Link>

      <Link to="/hearings">
        <SideNavElement title="Hearings" icon={<HearingIcon />} />
      </Link>

    </div>
  );
};

export default SideNav;

var SideNavElement = ({ title, icon }: props) => {
  return (
    <div className="side-nav-element">
      {icon}
      <h3 className="side-nav-element-text">{title}</h3>
    </div>
  );
};

interface props {
  title: string;
  icon: any;
}

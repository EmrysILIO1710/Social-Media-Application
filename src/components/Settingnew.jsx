import React, { useEffect } from 'react'; 
import SettingsLeftSidebar from './SettingsLeftSidebar';  


function SideBar(props) {
  useEffect(()=> {
    props.handleCB(true);
  })
  return (
    <div className="bg-orange-200">
      <SettingsLeftSidebar mode={props.mode} />
    </div>
  );
}

export default SideBar;
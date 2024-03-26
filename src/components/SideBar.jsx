import React from 'react';
import ListGroupSideBar from './ListGroupSideBar';
import RightSideBar from './RightSideBar';  

function SideBar() {
  return (
    <div className="App">
      <ListGroupSideBar />
      <RightSideBar/>
    </div>
  );
}

export default SideBar;
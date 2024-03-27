import React from 'react';
import ListGroupSideBar from './ListGroupSideBar';
import RightSideBar from './RightSideBar';  

function SideBar(props) {
  return (
    <div className="App">
      <ListGroupSideBar mode={props.mode} />
      <RightSideBar mode={props.mode} />
    </div>
  );
}

export default SideBar;
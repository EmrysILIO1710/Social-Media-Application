import React from 'react';
import ListGroupSideBar from './ListGroupSideBar';
import RightSideBar from './RightSideBar';  

function SideBar(props) {
  return (
    <div className="App">
      <div className='hidden xl:block'>
        <ListGroupSideBar
          gradient={"linear-gradient(to left, rgb(255, 246, 234, 0) 0%, rgb(254, 163, 82) 50% "}
          mode={props.mode} 
          position={"fixed mt-16"}
        />
      </div>
      <div className='hidden sm:hidden md:hidden lg:block xl:block 2xl:block'>
        <RightSideBar mode={props.mode} />
      </div>
    </div>
  );
}

export default SideBar;
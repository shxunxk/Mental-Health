import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
 
export default function MultiLevelSidebar() {

  const options = ['Home', 'Connections', 'Find a peer', 'Explore Support Group', 'Log Out']
  const links = ['home', '/connections', 'find-a-peer', 'support-groups']

const [cond, setCond] = useState(false);
  console.log(cond)
 
  return (
    <>
    <div
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: '#333',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={() => setCond(!cond)}
    >
      {!cond && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="8" y1="9" x2="16" y2="9" />
          <line x1="8" y1="15" x2="16" y2="15" />
        </svg>
      )}
      {cond && (
        <div className="sidebar-menu">
            <div className="fixed top-0 left-0 h-full w-48 bg-gray-800 p-1">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <line x1="2" y1="3" x2="4" y2="5" />
                <line x1="2" y1="5" x2="4" y2="3" />
                </svg>
                <div className='flex flex-col justify-middle align-start items-center text-white'>
                <List>
                  {options.map((item,index)=>(
                    <ListItem key={index}>
                      <ListItemPrefix>
                          <UserCircleIcon className="h-5 w-5 pr-2" />
                      </ListItemPrefix>
                      <Link to={`../${links[index]}`}>{item}</Link>
                    </ListItem>
                  ))}
                </List>
                </div>
            </div>
        </div>
      )}
    </div>
    </>
  );
}
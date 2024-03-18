import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
 
export default function MultiLevelSidebar() {

  const [open, setOpen] = React.useState(0);

  const options = ['Home', 'Connections']
  const sub = [['1','2'], ['1','2']]
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

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
                    {options.map((item, index)=>(
                        <div key={index} className="">
                            <Accordion
                        open={open === index}
                        icon={
                            <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === index ? "rotate-180" : ""}`}
                            />
                        }
                        >
                        <ListItem className="p-0" selected={open === index}>
                            <AccordionHeader onClick={() => handleOpen(index)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                {item}
                            </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                            <ListItem>
                                <ListItemPrefix>
                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Analytics
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Reporting
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Projects
                            </ListItem>
                            </List>
                        </AccordionBody>
                        </Accordion>
                        </div>
                    ))}
                    <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                        />
                    }
                    >
                    <ListItem className="p-0" selected={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                        <ListItemPrefix>
                            <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            E-Commerce
                        </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                        <ListItem>
                            <ListItemPrefix>
                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                            </ListItemPrefix>
                            Orders
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                            </ListItemPrefix>
                            Products
                        </ListItem>
                        </List>
                    </AccordionBody>
                    </Accordion>
                    <ListItem>
                    <ListItemPrefix>
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Inbox
                    <ListItemSuffix>
                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                    </ListItem>
                    <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                    </ListItem>
                    <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                    </ListItem>
                    <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
                </List>
                </div>
            </div>
        </div>
      )}
    </div>
    </>
  );
}
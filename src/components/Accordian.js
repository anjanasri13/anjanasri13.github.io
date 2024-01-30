import React,{useState} from 'react'
import { Menu2 } from '../styles/HomeStyles'
import { Menu } from "antd";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// function getItem(label, key, children, type) {
//     return {
//       key,
//       children,
//       label,
//       type,
//     };
//   }

// const items = [
//     getItem("Lorem Ipsum Dolor Sit Amet Consectetur.", "sub1", [
//       getItem(
//         "Lorem Ipsum Dolor Sit Amet Consectetur.Iaculis Sed Viverra Pretium Sed.",
//         "1"
//       ),
//     ]),
//     getItem("Lorem Ipsum Dolor Sit Amet Consectetur.", "sub2", [
//       getItem(
//         "Lorem Ipsum Dolor Sit Amet Consectetur.Iaculis Sed Viverra Pretium Sed.",
//         "5"
//       ),
//     ]),
//     getItem("Lorem Ipsum Dolor Sit Amet Consectetur.", "sub3", [
//       getItem(
//         "Lorem Ipsum Dolor Sit Amet Consectetur.Iaculis Sed Viverra Pretium Sed.",
//         "5"
//       ),
//     ]),
//   ];

  
// const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

export default function Accordion1() {
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    // const [openKeys, setOpenKeys] = useState(["sub1"]);
    // const onOpenChange = (keys) => {
    //   const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    //   if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //     setOpenKeys(keys);
    //   } else {
    //     setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    //   }
    // };
  
  return (
    <Menu2>

        {/* <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={items}
           /> */}

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className="rounded-[10px] shadow-none "
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          style={{borderRadius:"10px",backgroundColor:"#EAEAEA",borderRadius:"10px"}}
        //   className=" rounded-[30px] bg-blue "
        >
          <Typography
            sx={{
              width: "100%",
              flexShrink: 0,
              fontSize: "18px",
              color: "#000",
              textTransform:"capitalize",
            }}
          >
          Lorem ipsum dolorsit amet consectetur pretium sed lorem ? 
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#EAEAEA] rounded-[10px]">
          <Typography sx={{
              width: "100%",
              flexShrink: 0,
              fontSize: "16px",
              color: "#000",
              textTransform:"capitalize"
            }}>
          Lorem ipsum dolor sit amet consectetur. Iaculis sed viverra pretium sed.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Menu2>
  )
}

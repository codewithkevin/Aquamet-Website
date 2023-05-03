// import React, { useContext, useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { AiOutlineMenu } from "react-icons/ai";

// import logo from "../assests/logo2.png";
// import { Button } from "@mui/material";
// import NavItems from "./Navitems";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [show, setShow] = useState(false);
//   const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     window.onresize = () => setDeviceWidth(window.innerWidth);
//     if (deviceWidth > 1024) setOpen(true);
//     else setOpen(false);
//   }, [deviceWidth]);

//   return (
//     <div className="bg-blue-s w-full h-[12vh] lg:max-h-20 grid grid-cols-4 lg:grid-cols-8">
//       <motion.div className="col-start-1 flex justify-center items-center">
//         <a href="../../index.html">
//           <img src={logo} alt="" className="w-16 aspect-square" />
//         </a>
//       </motion.div>

//       <NavItems deviceWidth={deviceWidth} />
//       <motion.div
//         // initial={{ x: 200 }}
//         // animate={{ x: 0 }}
//         className="lg:hidden col-start-4 flex justify-center items-center"
//       >
//         <AiOutlineMenu size={30} onClick={(e) => setOpen((prev) => !prev)} />
//       </motion.div>
//     </div>
//   );
// };

// export default Navbar;

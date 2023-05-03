// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { AiOutlineMenu } from "react-icons/ai";
// import logo from "../assests/logo2.png";
// import NavItems from "./Navitems";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setDeviceWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     if (deviceWidth > 1024) setOpen(true);
//     else setOpen(false);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [deviceWidth]);

//   const toggleOpen = () => setOpen(!open);

//   return (
//     <div className="bg-blue-s w-full h-[12vh] lg:max-h-20 grid grid-cols-4 lg:grid-cols-8">
//       <motion.div className="col-start-1 flex justify-center items-center">
//         <a href="../../index.html">
//           <img src={logo} alt="" className="w-16 aspect-square" />
//         </a>
//       </motion.div>

//       <NavItems deviceWidth={deviceWidth} />

//       {/* Only show the menu icon on small screens */}
//       {deviceWidth <= 1024 && (
//         <motion.div
//           className="lg:hidden col-start-4 flex justify-center items-center"
//           onClick={toggleOpen}
//         >
//           <AiOutlineMenu size={30} />
//         </motion.div>
//       )}

//       {/* Show the menu items on small screens if the menu is open */}
//       {deviceWidth <= 1024 && open && (
//         <NavItems
//           deviceWidth={deviceWidth}
//           className="lg:hidden col-span-4 flex justify-center items-center"
//         />
//       )}
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// // import { createPopper } from "@popperjs/core";
// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import MainPopup from "@/popup/MainPopup";
// const BankForm = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [nextOpen, setNextPopup] = useState(false);
//   const handleClick = () => {
//     <MainPopup />;
//   };

//   function openPopup() {
//     setIsOpen(true);
//   }
//   function closePopup() {
//     setIsOpen(false);
//   }

//   return (
//     <>
//       <button onClick={openPopup}>Open Popup</button>
//       <Transition appear show={isOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="h-screen fixed inset-0 z-10 overflow-y-auto"
//           onClose={closePopup}
//         >
//           <div className="px-4 text-center ">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
//             </Transition.Child>
//             <span
//               className="inline-block h-screen align-middle"
//               aria-hidden="true"
//             >
//               &#8203;
//             </span>
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <div className="inline-block w-full max-w-5xl p-6 my-8  overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl border-8 min-h-screen overflow-x-scroll bg-orange-300 border-amber-900">
//                 <div className="w-full  flex justify-end gap-5">
//                   <button className="my-2 px-10  bg-white rounded-lg">
//                     WG
//                   </button>
//                   <button className="my-2 px-10  bg-white rounded-lg">
//                     WD
//                   </button>
//                 </div>

//   <div className="border-5 border-black w-full flex justify-around flex-wrap items-center gap-5 bg-pink-300 border-5  p-5 mt-5 rounded-lg h-[400px]  ">
//     <div className="border-2 p-5 bg-blue-100 hover:cursor-pointer  border-black border-r-2 rounded-md  w-1/6 h-[150px]"></div>

//     <div className="border-2 p-5 bg-blue-100 hover:cursor-pointer  border-black border-r-2 rounded-md  w-1/6 h-[150px]"></div>
//     <div className="border-2 p-5 bg-blue-100 hover:cursor-pointer  border-black border-r-2 rounded-md   w-1/6 h-[150px]"></div>
//     <div className="border-2 p-5 bg-blue-100 hover:cursor-pointer  border-black border-r-2 rounded-md  w-1/6 h-[150px]"></div>
//     <div className="border-2 p-5 bg-blue-100 hover:cursor-pointer  border-black border-r-2 rounded-md  w-1/6 h-[150px]"></div>
//     <div className="border-2 p-5 bg-blue-100 hover:cursor-pointer  border-black border-r-2 rounded-md  w-1/6 h-[150px]"></div>
//     <div className="border-2 p-5 bg-blue-100 hover:cursor-pointer  border-black border-r-2 rounded-md w-1/6 h-[150px]"></div>
//     <div className="border-2 p-5 bg-blue-100 hover:cursor-pointer  border-black border-r-2 rounded-md w-1/6 h-[150px]"></div>
//     <div className="border-2 p-5 bg-blue-100 hover:cursor-pointer  border-black border-r-2 rounded-md  w-1/6 h-[150px]"></div>
//     <div className="border-2 p-5 bg-blue-100 hover:cursor-pointer  border-black border-r-2 rounded-md w-1/6 h-[150px]"></div>
//   </div>
// </div>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   );
// };
// export default BankForm;

import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { Tab } from "@headlessui/react";
import StakingCart from "@/component/StakingCart";
import LiquidityCart from "@/component/LiquidityCart";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  const gameWalletButton = (
    <button className="block w-56 py-1 text-center text-sm border-4 border-amber-900  text-gray-700 hover:bg-gray-100 hover:text-gray-900">
      Liquidity Mining
    </button>
  );
  const walletButton = (
    <button className="block  w-56 text-center py-1 border-4 border-amber-900  text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
      Staking Pool
    </button>
  );
  return (
    <div className=" lg:w-[90%] md:w-[100%] sm:w-[100%]  lg:m-auto  ">
      <div className="   w-[80%] m-auto my-20      bg-orange-300  border-black border-[5px] ">
        <div className="w-full h-[50px] p-5 flex justify-between">
          <p className="text-white bold text-2xl">Bank</p>
          <button className="text-white bg-red-800 items-center px-2 py-4 flex justify-center rounded-lg">
            <ImCross />
          </button>
        </div>
        <div className="flex flex-col  ">
          <div className="w-full flex flex-col justify-center items-center px-10 ">
            <Tab.Group>
              <Tab.List
                className={classNames(
                  "w-full flex lg:flex-row md:flex-col max-sm:flex-col max-sm:gap-1 sm:flex-col justify-center  items-center lg:gap-3 md:gap-1 sm:gap-1  rounded-xl px-1 pt-3 "
                )}
              >
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "block  w-56 text-center py-1 border-4 border-amber-900  text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow outline-none"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  Liquidity Mining
                </Tab>

                <Tab
                  className={({ selected }) =>
                    classNames(
                      " block  w-56 text-center py-1 border-4 border-amber-900  text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  Staking Pool
                </Tab>
              </Tab.List>
              <Tab.Panels className="my-10 px-14 w-[100%]">
                <Tab.Panel
                  className={classNames(
                    "flex lg:justify-start sm:justify-center md:justify-center max-sm:justify-center flex-wrap p-3 lg:gap-5 md:gap-10 sm:gap-10 max-sm:gap-5 ",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <LiquidityCart />
                </Tab.Panel>
                <Tab.Panel
                  className={classNames(
                    "flex lg:justify-start sm:justify-center md:justify-center max-sm:justify-center flex-wrap p-3 lg:gap-5 md:gap-10 sm:gap-10 max-sm:gap-5",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <StakingCart />
                  <StakingCart />
                  <StakingCart />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

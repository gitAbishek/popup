import { useState } from "react";
import { Dialog } from "@headlessui/react";

const MainPopup = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="border-2 p-5 bg-blue-100 hover:cursor-pointer  border-black border-r-2 rounded-md w-1/6 h-[150px]"
        onClick={() => setIsOpen(true)}
      ></div>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-90 flex items-center justify-center z-10">
        <div className="w-1/2 ml-10  mr-10  border-[0.1px] rounded-md bg-white ">
          <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <Dialog.Panel>
              <Dialog.Title>Deactivate account</Dialog.Title>
              <Dialog.Description>
                This will permanently deactivate your account
              </Dialog.Description>

              <p>
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed. This action cannot be undone.
              </p>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default MainPopup;

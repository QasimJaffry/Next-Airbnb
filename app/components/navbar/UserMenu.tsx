"use client";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const toggle = useCallback(() => {
    setIsOpen((value: any) => !value);
  }, [setIsOpen]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className={
            "hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          }
        >
          Technooo
        </div>
        <div
          onClick={toggle}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] bg-white md:w-3/4 overflow-hidden right-0 ttop-12 text-sm">
          <div className="flex flex-col curssor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />

              <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

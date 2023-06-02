import React, { useState } from "react";
import Signin from "@/components/Signin"

const Navbar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="flex items-center justify-between px-20 mt-5">
      <div>CollegeLyfe</div>
      <div>
        <button onClick={openDialog}>SignIn</button>

        {isDialogOpen && (
          <dialog open id="signin">
            <Signin />
          </dialog>
        )}
      </div>
    </div>
  );
};

export default Navbar;

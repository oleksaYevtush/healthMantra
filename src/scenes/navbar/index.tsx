import { useState } from "react";
import { motion } from "framer-motion";  
import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import CrossIcon from "@/assets/crossIcon.png";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-3 xs:py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {isAboveMediumScreens ? (
              <>
                <div className={`${flexBetween} w-full text-right gap-[55px] text-[30px] font-voga`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Health"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Join Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <img alt="logo" src={Logo} />
              </>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-5"
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-7 w-7 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <motion.div  
          initial={{ opacity: 0, x: "100%" }}  
          animate={{ opacity: 1, x: 0 }} 
          transition={{ type: "spring", stiffness: 150, duration: 0.5 }} 
          className="fixed right-0 top-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-5">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img src={CrossIcon} alt="Cross Icon" className="h-20 w-20" /> 
            </button>
          </div>
          <div className="mr-8 flex flex-col gap-10 text-2xl pl-5">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Health"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Join Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

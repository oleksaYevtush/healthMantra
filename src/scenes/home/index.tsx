import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePage from "@/assets/HomePage.png";
import YogaPoseOne from "@/assets/YogaPoseOne.png";
import YogaPoseTwo from "@/assets/YogaPoseTwo.png";
import YogaPoseThree from "@/assets/YogaPoseThree.png";
import YogaPoseFour from "@/assets/YogaPoseFour.png";
import YogaPoseFive from "@/assets/YogaPoseFive.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const yogaPoseContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '180px',
  width: '100%',
  overflow: 'hidden',
};
const yogaPoseImageStyle = {
  width: '100px',
  height: 'auto', 
};

const Home = ({ setSelectedPage }: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const yogaPoseAnimationClasses = isAboveMediumScreens
    ? 'yoga-pose-container-animate'
    : '';

  return (
    <section id="home" className="gap-16 py-10 sl:py-6 bg-[#e4efea]">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <div className="relative">
              <div className=" before:absolute before:-top-[140px] before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-4 text-base">
            “True yoga is not about the shape of your body, but the shape of your life. Yoga is not to be performed; yoga is to be lived.“
            </p>
          </motion.div>
          <motion.div
            className="mt-8 flex items-center gap-8 sm:flex sm:justify-center xs:flex xs:justify-center sl:flex sl:justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <ActionButton setSelectedPage={() => setSelectedPage(SelectedPage.ContactUs)}>
              Join Now
            </ActionButton>
          </motion.div>
        </div>
        <div
          className="flex basis-3/5 justify-center md:z-10 sm:mt-8 xs:mt-8 sl:mt-7
              md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="home-page" src={HomePage} />
        </div>
      </motion.div>
      {/* YOGA POSE */}
      {isAboveMediumScreens && (
        <div className={`h-[180px] py-14 mb-2 ${yogaPoseAnimationClasses}`}>
          <div className="mx-auto" style={yogaPoseContainerStyle}>
            <motion.div className="flex items-center justify-between gap-[100px]">
              {[YogaPoseOne, YogaPoseTwo, YogaPoseThree, YogaPoseFour, YogaPoseFive].map((pose, index) => (
                <motion.img
                  key={index}
                  alt={`yoga-${index}`}
                  src={pose}
                  style={yogaPoseImageStyle}
                  initial={{ x: 0 }}
                  animate={{ x: '-100%' }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;

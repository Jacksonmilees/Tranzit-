import styles from "@/styles/style";
import { discount, robot } from "@/public/assets";
import GetStarted from "./GetStarted";
import Image from "next/image";

const Hero: React.FC = () => (
  <section id="home" className={`hero flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div
        className={`discount-banner flex flex-row items-center py-[6px] px-4 bg-black rounded-[10px] mb-2`}
      >
        <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2 text-white`}>
          <span className="text-white">10%</span> Discount For{" "}
          <span className="text-white">First Booking</span>
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1
          className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]"
        >
          Reliable <br className="sm:block hidden" />{" "}
          <span className="text-black">House-to-House</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1
        className="w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] leading-[75px]"
      >
        Delivery Service
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
        Our network of trucks, pickups, and lorries ensures your goods are
        delivered safely and on time, with real-time tracking and flexible
        scheduling.
      </p>
    </div>
    <div
      className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}
    >
      <Image
        src={robot}
        alt="delivery-truck"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 green__gradient" />
      <div
        className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 blue__gradient"
      />
      <div
        className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"
      />
    </div>
    <div className={`${styles.flexCenter} ss:hidden`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
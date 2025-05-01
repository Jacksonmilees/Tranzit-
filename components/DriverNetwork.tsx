import styles, { layout } from "@/styles/style";
import Button from "./Button";
import Image from "next/image";
import { card } from "@/public/assets";

const DriverNetwork: React.FC = () => (
  <section className={`driver-network ${layout.section}`}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-black`}>
        Join Our Driver Network <br className="sm:block hidden" /> in a Few Easy
        Steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
        Partner with Tranzit to deliver goods for house-to-house movers using
        trucks, pickups, and lorries. Sign up, schedule deliveries, and earn with
        ease.
      </p>
      <Button styles="mt-10">Join Now</Button>
    </div>
    <div className={layout.sectionImg}>
      <Image src={card} alt="driver-network" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default DriverNetwork;
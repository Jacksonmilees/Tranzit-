import styles, { layout } from "@/styles/style";
import { features } from "@/constants";
import Button from "./Button";
import FeaturesCard from "./FeaturesCard";

const DeliveryService: React.FC = () => (
  <section id="features" className={`delivery-service ${layout.section}`}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-black`}>
        Focus on Moving, <br className="sm:block hidden" />
        We’ll Handle the Delivery
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
        With Tranzit, you can schedule reliable house-to-house deliveries using
        trucks, pickups, and lorries. Track your goods and move with ease.
      </p>
      <Button styles="mt-10">Get Started</Button>
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeaturesCard
          key={feature.id}
          {...feature}
          index={index}
          isLast={index === features.length - 1}
        />
      ))}
    </div>
  </section>
);

export default DeliveryService;
import styles from "@/styles/style";
import GetStarted from "./GetStarted";

const CTA: React.FC = () => (
  <section
    className={`cta ${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-tranzitBlack rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-white`}>Book Your Delivery Now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
        Everything you need to schedule reliable house-to-house deliveries with
        Tranzit’s trucks, pickups, and lorries.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <GetStarted />
    </div>
  </section>
);

export default CTA;
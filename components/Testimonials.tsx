import { feedback } from "@/constants";
import styles from "@/styles/style";
import FeedbackCard from "./FeedbackCard";

const Testimonials: React.FC = () => (
  <section
    id="testimonials"
    className={`testimonials ${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-10 mb-6 relative z-[1]">
      <h1 className={`${styles.heading2} text-black`}>
        What Movers Are <br className="sm:block hidden" /> Saying About Tranzit
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-black text-left max-w-[450px]`}>
          Hear from customers who trust Tranzit for reliable, hassle-free
          house-to-house deliveries.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
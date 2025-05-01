import { apple, bill, google } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Image from "next/image";

const BookingProcess: React.FC = () => (
  <section id="booking" className={`booking-process ${layout.sectionReverse}`}>
    <div className={layout.sectionImgReverse}>
      <Image
        src={bill}
        alt="delivery-truck"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full green__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full blue__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-black`}>
        Book Your Delivery <br className="sm:block hidden" /> with Ease
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
        Schedule your house-to-house delivery in minutes using the Tranzit app.
        Choose your truck, track your goods, and move with confidence.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Image
          src={apple}
          alt="app_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer app-store-badge"
        />
        <Image
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain cursor-pointer app-store-badge"
        />
      </div>
    </div>
  </section>
);

export default BookingProcess;
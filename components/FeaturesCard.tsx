import styles from "@/styles/style";
import { FeaturedCardProps } from "@types";
import Image from "next/image";

const FeaturesCard: React.FC<FeaturedCardProps> = ({ icon, title, content, index, isLast }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${isLast ? "mb-0" : "mb-6"} feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full bg-tranzitGreen ${styles.flexCenter}`}
    >
      <Image src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[24px]">
        {title}
      </h4>
      <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

export default FeaturesCard;
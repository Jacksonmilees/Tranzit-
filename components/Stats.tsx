import styles from "@/styles/style";
import { stats } from "@/constants";

const Stats: React.FC = () => (
  <section className={`stats ${styles.flexCenter} bg-white flex-row flex-wrap sm:mb-20 mb-6 px-4 sm:px-6 md:px-8`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3 min-w-[200px]`}
      >
        <h4 className="font-poppins font-semibold text-black xs:text-[40px] text-[24px] sm:text-[32px] md:text-[40px] xs:leading-[53px] leading-[36px] sm:leading-[48px]">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal text-black xs:text-[20px] text-[14px] sm:text-[16px] md:text-[18px] xs:leading-[26px] leading-[20px] sm:leading-[24px] uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
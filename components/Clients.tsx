import styles from "@/styles/style";

const Clients: React.FC = () => (
  <section
    id="clients"
    className={`${styles.flexCenter} bg-white my-4 py-8 px-4 sm:px-6 md:px-8 max-w-[1440px] mx-auto`}
  >
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {/* Placeholder: Clients section removed as per request */}
      <h2 className="font-poppins font-semibold text-black text-[24px] xs:text-[32px] sm:text-[40px] md:text-[48px] leading-[36px] xs:leading-[48px] sm:leading-[60px] text-center">
        Our Partners
      </h2>
      <p className="font-poppins font-normal text-black text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] mt-4 text-center max-w-[600px]">
        Information about our trusted partners will be updated soon.
      </p>
    </div>
  </section>
);

export default Clients;
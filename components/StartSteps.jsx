import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[50px] h-[50px] rounded-[24px] bg-[#e35e20]`}
    >
      <p className="font-bold text-[20px] text-white">
        {number}
      </p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#d5d5d5] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;

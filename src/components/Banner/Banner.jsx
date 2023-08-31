import { BiRightArrowAlt } from 'react-icons/bi';

const Banner = () => {
  return (
    <div className='relative' >
      <img
    
        src="https://www.aesop.com/u1nb1km7t5q7/AGQGWYrTapcQI1NrPvsYU/11e99769c1767531dd3c12b6fce85f37/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px.jpg"
        alt=""
      />
      <div className=" absolute top-28  flex space-x-28   text-white">
        <div className="ml-14">
          <h3 className="font-semibold text-3xl">Aesop</h3>
        </div>
        <div>
          <p className=" font-semibold mb-5">Bar Soaps</p>
          <h4 className=" text-3xl font-semibold mb-5">
            A body care classic, <br />
            reimagined
          </h4>
          <p className="mb-10">
            Breathing new life into the humble bar soap are Nurture,
            <br />
            Polish and Refresh—three additions to the range, each <br />
            imparting a unique constellation of benefits.
          </p>
          <button className=" flex items-center space-x-9 border border-white px-5 py-4 text-white hover:bg-white hover:text-black ">
           <span> Discovers Bar Soap</span>
            <span><BiRightArrowAlt></BiRightArrowAlt></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

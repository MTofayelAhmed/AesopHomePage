import { BiRightArrowAlt } from "react-icons/bi";

const ReadingRoom = () => {
  return (
    <div className=" grid grid-cols-5 ">
      <div className="col-span-2 ml-28">
        <p className=" font-semibold">The Athenaeum</p>
        <h3>The warm-up </h3>
        <p>
          In The Athenaeum, our digital reading room: a guide to <br /> ensuring
          a healthy complexion through the warmer <br />
          months.
        </p>
        <button className=" flex items-center space-x-9 border border-white px-5 py-4 text-white hover:bg-white hover:text-black ">
          <span> Read More</span>
          <span>
            <BiRightArrowAlt></BiRightArrowAlt>
          </span>
        </button>
      </div>
      <div className="col-span-3">
        <img src="https://www.aesop.com/u1nb1km7t5q7/3GSzEbfK3uJnoXUkae2D9G/37d1916a82b754c70870cab8f85f34b0/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Desktop_2560x1440px.jpg" alt="" />
      </div>
    </div>
  );
};

export default ReadingRoom;

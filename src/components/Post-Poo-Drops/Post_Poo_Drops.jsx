import { BiRightArrowAlt } from "react-icons/bi";

const Post_Poo_Drops = () => {
  return (
    <div className=" grid grid-cols-5 mt-48 ">
      <div className="col-span-3">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/6m4yuIyUcyfXMyKT17ZYsr/9bc9ba78322632d97323d73f364113f0/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_2560x1540px.png"
          alt=""
        />
      </div>
      <div className="col-span-2 ml-28">
        <h3 className=" font-semibold text-3xl mb-10">
          Post-Poo Drops has returned{" "}
        </h3>
        <p className="mb-10">
          Post-Poo Drops has returned Here to make the malodorous melodious once
          again. <br /> Dispense this favoured formulation into the toilet bowl <br /> after
          flushing to effectively mask disagreeable odours. 
        </p>
        <button className=" flex items-center space-x-36 border border-black px-5 py-4  hover:bg-black hover:text-white">
          <span> Discover Post-Poo Drops</span>
          <span>
            <BiRightArrowAlt></BiRightArrowAlt>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Post_Poo_Drops;

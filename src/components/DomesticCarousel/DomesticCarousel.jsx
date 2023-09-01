

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { BiRightArrowAlt } from "react-icons/bi";
const AllTypeCarousel = () => {
  return (
    <div className=" mt-44 ">
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={true}
        navigation={true}
        // pagination={{
        //   clickable: true,

        // }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper hide-navigation ]"
      >
        <SwiperSlide>
          <div className="col-span-2 ml-28">
            <p className="  mb-5 ">For the Home</p>
            <h3 className=" font-semibold text-3xl mb-10">Domestic Pleasures </h3>
            <p className="mb-5">
              In The Athenaeum, our digital reading room: a guide to <br />{" "}
              ensuring a healthy complexion through the warmer <br />
              months.
            </p>
            <button className="  flex items-center space-x-1  px-5 py-4">
              <span> See All Homes</span>
              <span>
                <BiRightArrowAlt></BiRightArrowAlt>
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex flex-col items-center justify-center">
          <img src="https://www.aesop.com/u1nb1km7t5q7/WnUICDuVJPP7cJqhUM660/59834fc21eca3e5e68ea8697f83b5082/Aesop_Home_Post-Poo_Drops_100mL_Web_Large_782x796px.png" />
          <div className="flex flex-col justify-center items-center">
            <p>Lucent Facial Concentrate</p>
            <p className="font-semibold mt-3 hover: underline ">
              A Vitamin C rich layering serum
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img  src="https://www.aesop.com/u1nb1km7t5q7/7Ix7IeS83oTfoM8BlMmaJw/1efca65b0dfa372e628004665a5b55e5/Aesop_Home_Aganice_Aromatique_Candle_Web_Large_1102x962px.png" />
          <div className="flex flex-col justify-center items-center">
            <p>Lucent Facial Concentrate</p>
            <p className="font-semibold mt-3 hover: underline ">
              A Vitamin C rich layering serum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.aesop.com/u1nb1km7t5q7/4fQwfatAQoq2zajw67WrEU/82a34fa52baa55583c71de77690589eb/Aesop_Home_Ptolemy_Aromatique_Candle_Web_Large_1102x962px.png" />
          <div className="flex flex-col justify-center items-center">
            <p>Lucent Facial Concentrate</p>
            <p className="font-semibold mt-3 hover: underline ">
              A Vitamin C rich layering serum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.aesop.com/u1nb1km7t5q7/1HDrLNDwmYh2CtqiEsFL2n/507570e4e0b46a69e418d63df74fe44f/Aesop_Home_Callippus_Aromatique_Candle_Web_Large_1102x962px.png" />
          <div className="flex flex-col justify-center items-center">
            <p>Lucent Facial Concentrate</p>
            <p className="font-semibold mt-3 hover: underline ">
              A Vitamin C rich layering serum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.aesop.com/u1nb1km7t5q7/6MZHhbImkG5zap3LhHMVWG/69169b192588fe369e89f462015d1287/Aesop_Home_Bronze_Incense_Holder_Web_Large_1150x481px.png" />
          <div className="flex flex-col justify-center items-center">
            <p>Lucent Facial Concentrate</p>
            <p className="font-semibold mt-3 hover: underline ">
              A Vitamin C rich layering serum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.aesop.com/u1nb1km7t5q7/3Gl0lAqs3RFMdTkfohehHt/0e5ed642c54781db0a84f694797b5907/Aesop_Home_Murasaki_Aromatique_Incense_Web_Large_1584x1384px.png" />
          <div className="flex flex-col justify-center items-center">
            <p>Lucent Facial Concentrate</p>
            <p className="font-semibold mt-3 hover: underline ">
              A Vitamin C rich layering serum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.aesop.com/u1nb1km7t5q7/3kzopPwcQE6AFQcsmJjirZ/a8b49c14b2646dd0965202a179fc3440/Aesop_Home_Kagerou_Aromatique_Incense_Web_Large_1584x1384px.png" />
          <div className="flex flex-col justify-center items-center">
            <p>Lucent Facial Concentrate</p>
            <p className="font-semibold mt-3 hover: underline ">
              A Vitamin C rich layering serum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.aesop.com/u1nb1km7t5q7/7fdcsmcQIJ9BvoM0hv4qbK/1ceca68b04189e8c45e224c7a15e10cb/Aesop_Home_Sarashina_Aromatique_Incense_Web_Large_1584x1384px.png" />
          <div className="flex flex-col justify-center items-center">
            <p>Lucent Facial Concentrate</p>
            <p className="font-semibold mt-3 hover: underline ">
              A Vitamin C rich layering serum
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AllTypeCarousel;

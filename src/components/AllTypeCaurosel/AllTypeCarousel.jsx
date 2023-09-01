import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

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
            <p className=" mb-5 ">For the Skin</p>
            <h3 className="  text-3xl mb-10">Attention For All Types </h3>
            <p className="mb-5">
              In The Athenaeum, our digital reading room: a guide to <br />{" "}
              ensuring a healthy complexion through the warmer <br />
              months.
            </p>
            <button className="  flex items-center space-x-1   px-5 py-4">
              <span> See All Skin Care</span>
              <span>
                <BiRightArrowAlt></BiRightArrowAlt>
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex flex-col items-center justify-center">
          <img src="https://www.aesop.com/u1nb1km7t5q7/LL8pUKUiuq1n8mKKpLdbb/b41e1d77b6dfeca7632d6677ee232fcb/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png" />
          <div className="flex flex-col justify-center items-center">
            <p>Lucent Facial Concentrate</p>
            <p className="font-semibold mt-3 hover: underline ">
              A Vitamin C rich layering serum
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img  src="https://www.aesop.com/u1nb1km7t5q7/4DGsDcDdfO5dcxxkckH0Vz/ff15e75ea0734ffa3273513bda5a40d2/Aesop_Skin_Purifying_Facial_Cream_Cleanser_100mL_Web_Large_843x1000px.png" />
          <div className="flex flex-col justify-center items-center">
            <p>Lucent Facial Concentrate</p>
            <p className="font-semibold mt-3 hover: underline ">
              A Vitamin C rich layering serum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.aesop.com/u1nb1km7t5q7/5EM8cNCKUmSUw5Ad9vg3d1/73b569f7bcb04bafc22cd73e519d3f2a/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.png" />
          <div className="flex flex-col justify-center items-center">
            <p>Lucent Facial Concentrate</p>
            <p className="font-semibold mt-3 hover: underline ">
              A Vitamin C rich layering serum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.aesop.com/u1nb1km7t5q7/4fclKcB1FNLpV5wHmZkAQ6/c6c62862184703d834efbc07077b86cb/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Large_901x478px.png" />
          <div className="flex flex-col justify-center items-center">
            <p>Lucent Facial Concentrate</p>
            <p className="font-semibold mt-3 hover: underline ">
              A Vitamin C rich layering serum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.aesop.com/u1nb1km7t5q7/X8p8nJaqVBrDKAQReq7rw/9b27a60101217ba11ebd8a6673b13683/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Large_901x478px.png" />
          <div className="flex flex-col justify-center items-center">
            <p>Lucent Facial Concentrate</p>
            <p className="font-semibold mt-3 hover: underline ">
              A Vitamin C rich layering serum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.aesop.com/u1nb1km7t5q7/2RdKQmpPtqVC2lVLtCeott/3841f8985a8decb737794e843b3239d3/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-large.png" />
          <div className="flex flex-col justify-center items-center">
            <p>Lucent Facial Concentrate</p>
            <p className="font-semibold mt-3 hover: underline ">
              A Vitamin C rich layering serum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.aesop.com/u1nb1km7t5q7/18oCIrIJkaPhgw23dVa6xz/29244f678a3fc2b0308a0edac55b2171/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Intense_Serum_60mL_Web_Large_684x668px.png" />
          <div className="flex flex-col justify-center items-center">
            <p>Lucent Facial Concentrate</p>
            <p className="font-semibold mt-3 hover: underline ">
              A Vitamin C rich layering serum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.aesop.com/u1nb1km7t5q7/LL8pUKUiuq1n8mKKpLdbb/b41e1d77b6dfeca7632d6677ee232fcb/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png" />
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

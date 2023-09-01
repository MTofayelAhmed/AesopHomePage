import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { BiRightArrowAlt } from "react-icons/bi";
const CareCarousel = () => {
  return (
    <div className=" pt-40">
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
            <p className=" font-semibold mb-6 ">For the Body</p>
            <h3 className="  text-3xl mb-6">An Expression of Care </h3>
            <p className="mb-6">
              In The Athenaeum, our digital reading room: a guide to <br />{" "}
              ensuring a healthy complexion through the warmer <br />
              months.
            </p>
            <button className="  flex items-center space-x-5   px-5 py-4">
              <span> See All Body Care</span>
              <span>
                <BiRightArrowAlt></BiRightArrowAlt>
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex flex-col items-center justify-center">
          <img src="https://www.aesop.com/u1nb1km7t5q7/2YWbdNlnJHD3t3zF4arNfK/4d9d61c34d4ef151f41defd952535345/Aesop_Body_Nurture_Bar_Soap_150g_Web_Front_Large_1800x1093px.png" />
          <div className="flex flex-col justify-center items-center">
            <p>Lucent Facial Concentrate</p>
            <p className="font-semibold mt-3 hover: underline ">
              A Vitamin C rich layering serum
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img  src="https://www.aesop.com/u1nb1km7t5q7/5NoA4d0c8KG7Hhz5y0kdfq/88bc42ee1a607d834f6f62c94373d2c1/Aesop_Body_Polish_Bar_Soap_150g_Web_Front_Large_1800x1093px.png" />
          <div className="flex flex-col justify-center items-center">
            <p>Lucent Facial Concentrate</p>
            <p className="font-semibold mt-3 hover: underline ">
              A Vitamin C rich layering serum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.aesop.com/u1nb1km7t5q7/1jDpJFSo3ih2QozJeNoNEJ/5f9d6b5863522f92eee44e0f1100608e/Aesop_Body_Refresh_Bar_Soap_150g_Web_Front_Large_1800x1093px.png" />
          <div className="flex flex-col justify-center items-center mb-10">
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

export default CareCarousel;

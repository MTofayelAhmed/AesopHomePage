import { BiRightArrowAlt } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
const StoreLocator = () => {
  return (
    <div className=" grid grid-cols-5 pt-40">
      <div className="col-span-2">
        <div className="ml-28">
          <p className=" font-semibold mb-5 ">Store Locator</p>
          
          <p className="mb-5">
            In The Athenaeum, our digital reading room: a guide to <br />{" "}
            ensuring a healthy complexion through the warmer <br />
            months.
          </p>
          <button className=" flex items-center space-x-36 border border-black px-5 py-4  hover:bg-black hover:text-white">
            <span> Find a nearby Store</span>
            <span>
              <BiRightArrowAlt></BiRightArrowAlt>
            </span>
          </button>
        </div>
      </div>
      <div className=" col-span-3">
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
                slidesPerView: 1,
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
            <SwiperSlide className=" flex flex-col items-center justify-center">
              <img src="https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg" />
              <div className="flex flex-col justify-center items-center">
                <p>Lucent Facial Concentrate</p>
                <p className="font-semibold mt-3 hover: underline ">
                  A Vitamin C rich layering serum
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img src="https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg" />
              <div className="flex flex-col justify-center items-center">
                <p>Lucent Facial Concentrate</p>
                <p className="font-semibold mt-3 hover: underline ">
                  A Vitamin C rich layering serum
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg" />
              <div className="flex flex-col justify-center items-center">
                <p>Lucent Facial Concentrate</p>
                <p className="font-semibold mt-3 hover: underline ">
                  A Vitamin C rich layering serum
                </p>
              </div>
            </SwiperSlide>
         
        
       
        
            
             
       
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;

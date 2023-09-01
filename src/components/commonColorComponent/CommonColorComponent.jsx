import AllTypeCarousel from "../AllTypeCaurosel/AllTypeCarousel";
import CareCarousel from "../CareCarousel/CareCarousel";
import Post_Poo_Drops from "../Post-Poo-Drops/Post_Poo_Drops";
import Quote from "../Quote/Quote";
import ReadingRoom from "../ReadingRoom/ReadingRoom";
import DomesticCarousel from "../DomesticCarousel/DomesticCarousel"
import StoreLocator from "../StoreLocatorCarousel/StoreLocator";

const CommonColorComponent = () => {
    return (
        <div className="bg-[#FFFEF2] ">
            <CareCarousel></CareCarousel>
                 <ReadingRoom></ReadingRoom>
                 <AllTypeCarousel></AllTypeCarousel>
                 
                 <Post_Poo_Drops></Post_Poo_Drops>
                 <DomesticCarousel></DomesticCarousel>
                 <StoreLocator></StoreLocator>
                 <Quote></Quote>
                

                
              
                 
                 
                
            
        </div>
    );
};

export default CommonColorComponent;
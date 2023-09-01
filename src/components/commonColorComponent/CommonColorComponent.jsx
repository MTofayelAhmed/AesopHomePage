import Post_Poo_Drops from "../Post-Poo-Drops/Post_Poo_Drops";
import Quote from "../Quote/Quote";
import ReadingRoom from "../ReadingRoom/ReadingRoom";


const CommonColorComponent = () => {
    return (
        <div className="bg-[#FFFEF2] ">
                 <ReadingRoom></ReadingRoom>
                 <Post_Poo_Drops></Post_Poo_Drops>
                 <Quote></Quote>
            
        </div>
    );
};

export default CommonColorComponent;
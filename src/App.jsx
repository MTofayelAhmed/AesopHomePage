import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
// import ReadingRoom from "./components/ReadingRoom/ReadingRoom"
import CommonColorComponent from "./components/commonColorComponent/CommonColorComponent"
import Consultation from "./components/consultation/Consultation"
import ShippingOffer from "./components/shippingOffer/ShippingOffer"


function App() {


  return (
    <>
     <Consultation></Consultation>
     <ShippingOffer></ShippingOffer>
     <Navbar></Navbar>
     <Banner></Banner>
     <CommonColorComponent>

     </CommonColorComponent>
   
    </>
  )
}

export default App

import {HiOutlineLocationMarker,HiMail,HiPhone} from "react-icons/hi"
function Contact4() {
  return (
    <div className="container mx-auto my-10  ">
    <div className="text-center">
    <h3  className=" text-3xl font-semibold text-[#0099cc]">CONTACT US!</h3>
<p className="text-[#999] text-sm mt-2">A wonderful serenity has taken possession of my entire soul, like se sweet mornings ring which ring</p>
    </div>
    <div className="flex max-w-3xl mx-auto gap-4 mt-5">
        <div className="w-1/2">
            <img className="" src="https://www.executiveenglishcoaching.com/wp-content/uploads/2019/10/64857-431x286.jpg" alt="" />
        </div>
    <div className="w-1/2  px-3">
    <p className="text-[#999] text-sm ">A wonderful serenity has taken possession of my entire soul, like se sweet mornings ring which ring</p>
<div className="flex  flex-col gap-4 mt-4">
<div className="flex items-center gap-4">
        <HiOutlineLocationMarker size="2em" color="#0099cc"/>
        <p  className="text-[#999]  ">2345 San Andreas St. Cillvana 773613</p>
    </div>
    <div className="flex items-center gap-4">
        <HiMail size="2em" color="#0099cc"/>
        <p  className="text-[#999]  ">Example@email.com</p>
    </div>
    <div className="flex items-center gap-4">
        <HiPhone size="2em" color="#0099cc"/>
        <p  className="text-[#999]  ">+9671 5116 5151 511</p>
    </div>
    
</div>
    
  

    </div>
    </div>
    
    </div>
  )
}
export default Contact4
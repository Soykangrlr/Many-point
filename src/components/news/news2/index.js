import {RiCustomerService2Fill} from "react-icons/ri"
import {TfiCup} from "react-icons/tfi"
import {MdLocalShipping} from "react-icons/md"
import {TbMailFast} from "react-icons/tb"
 function Index() {
  return (
    <div className="container mx-auto mt-10  ">
        <div className="text-center">
        <h3  className=" text-3xl font-semibold text-[#0099cc]">OUR BENEFITS</h3>
    <p className="text-[#999] text-sm mt-2">A wonderful serenity has taken possession of my entire soul, like se sweet mornings ring which ring</p>
        </div>
  
    <div>
        <ul className="flex flex-wrap justify-evenly mt-6 px-16 gap-3">
        <li className=" text-center p-2" >
                <div className="h-20 w-20 mb-2 mx-auto  rounded-full p-3 flex items-center justify-center text-white  bg-[#0099cc]">
                <RiCustomerService2Fill size="2em"/>
                </div>
                <div>
                    <h5 className="text-[#0099cc]">FULL SERVİCE</h5>
                    <p className="max-w-[180px] text-gray-500 text-sm mt-2">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    <p  className="text-[#0099cc] text-sm hover:cursor-pointer mt-2">Read More</p>

                </div>
            </li>
            <li className=" text-center p-2" >
                <div className="h-20 w-20 mb-2 mx-auto  rounded-full p-3 flex items-center justify-center text-white  bg-[#0099cc]">
                <TbMailFast size="2em"/>
                </div>
                <div>
                    <h5 className="text-[#0099cc]">FAST RESPONSE</h5>
                    <p className="max-w-[180px] text-gray-500 text-sm mt-2">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    <p  className="text-[#0099cc] text-sm hover:cursor-pointer mt-2">Read More</p>
                </div>
            </li>
            <li className=" text-center p-2" >
                <div className="h-20 w-20 mb-2 mx-auto rounded-full p-3 flex items-center justify-center text-white  bg-[#0099cc]">
                <TfiCup size="2em"/>
                </div>
                <div>
                    <h5 className="text-[#0099cc]">GREAT AWARD</h5>
                    <p className="max-w-[180px] text-gray-500 text-sm mt-2">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    <p  className="text-[#0099cc] text-sm hover:cursor-pointer mt-2">Read More</p>

                </div>
            </li>
            <li className=" text-center p-2" >
                <div className="h-20 w-20 mb-2 mx-auto  rounded-full p-3 flex items-center justify-center text-white  bg-[#0099cc]">
                <MdLocalShipping size="2em"/>
                </div>
                <div>
                    <h5 className="text-[#0099cc]">FREE SHIPPING</h5>
                    <p className="max-w-[180px] text-gray-500 text-sm mt-2">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    <p  className="text-[#0099cc] text-sm hover:cursor-pointer mt-2">Read More</p>

                </div>
            </li>
        </ul>
    </div>
</div>
  )
}
export default Index
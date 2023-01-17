import {AiFillStar} from "react-icons/ai"
import {SlBasket} from "react-icons/sl"
import {BiPurchaseTagAlt} from "react-icons/bi"

function Index() {
  return (
    <div className="container mx-auto mt-4  text-center ">
        <h3 className=" text-3xl font-semibold text-[#0099cc]">NEW ARRIVALS!</h3>
        <p className="text-[#999] mt-2">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring wh</p>
        <div className="flex justify-around mt-5 mb-8 items-center">
            <div className="p-3 text-white font-semibold bg-[#00cccc] sm:min-w-[130px]">Latest Products</div>
            <div  className="p-3 text-white font-semibold bg-[#999] sm:min-w-[130px]">Shoes</div>
            <div  className="p-3 text-white font-semibold bg-[#999] sm:min-w-[130px]">Bag</div>
            <div  className="p-3 text-white font-semibold bg-[#999] sm:min-w-[130px]">T-Shirt</div>
        </div>
        <div className="flex flex-col justify-center gap-4 ">
          <div className="md:flex mx-auto md:gap-6 items-center">
            <div className="relative w-fit mx-auto">
              <div className="w-40 h-40 rounded-full bg-blue-600"></div>
              <img className="h-36 w-36 absolute -top-4 left-2" src="card.png" alt="" />
            </div>
            <div className="flex flex-col md:text-left">
                <h4 className="text-blue-500 text-2xl font-semibold">BLUE NAV BAGGER</h4>
                <p className="max-w-lg min-h-[100px] mt-2 text-gray-500 text-sm ">A wonderful serenity has taken possession of my entire soul, like se sweet mornings,A wonderful serenity has taken possession of my entire soul,</p>
                <div className="flex ">
                  <AiFillStar size="1.8em" color="yellow"/>
                  <AiFillStar size="1.8em" color="yellow"/>
                  <AiFillStar size="1.8em" color="yellow"/>
                  <AiFillStar size="1.8em" color="gray"/>
                  <AiFillStar size="1.8em" color="gray"/>
                </div>
                <div className="md:flex p-2 md:justify-between items-center text-center">
                    <div>
                      <span className="line-through text-gray-500">$66.54</span>
                      <span className="text-blue-600 text-lg ml-2 font-semibold">$60.54</span>
                    </div>
                    <div className="flex gap-3 justify-center  ">
                    <button type="button" class=" justify-center flex items-center gap-2 text-blue-600 bg-white border border-blue-500  hover:bg-blue-500 hover:text-white  font-medium min-w-[130px]  text-xs px-5  py-1"><SlBasket/><span>Add to Cart</span> </button>
                    <button type="button" class="justify-center flex items-center gap-2 text-white border border-blue-500 bg-blue-500   hover:bg-white hover:text-blue-600  font-medium min-w-[130px]  text-xs px-5  py-1"><BiPurchaseTagAlt/><span>Purchase Now</span> </button>
                    </div>
                </div>
            </div>
          </div>
          <div className="md:flex md:flex-row-reverse mx-auto gap-6 items-center">
          <div className="relative w-fit mx-auto">
              <div className="w-40 h-40 rounded-full bg-blue-600"></div>
              <img className="h-36 w-36 absolute -top-4 left-2" src="card.png" alt="" />
            </div>
            <div className="flex flex-col md:text-right">
                <h4 className="text-blue-500 text-2xl font-semibold">BLUE NAV BAGGER</h4>
                <p className="max-w-lg min-h-[100px] mt-2 text-gray-500 text-sm ">A wonderful serenity has taken possession of my entire soul, like se sweet mornings,A wonderful serenity has taken possession of my entire soul,</p>
                <div className="flex md:justify-end ">
                  <AiFillStar size="1.8em" color="yellow"/>
                  <AiFillStar size="1.8em" color="yellow"/>
                  <AiFillStar size="1.8em" color="yellow"/>
                  <AiFillStar size="1.8em" color="gray"/>
                  <AiFillStar size="1.8em" color="gray"/>
                </div>
                <div className=" md:flex md:flex-row-reverse  p-2  items-center text-center">
                    <div>
                      <span className="line-through text-gray-500">$66.54</span>
                      <span className="text-blue-600 text-lg ml-2 font-semibold">$60.54</span>
                    </div>
                    <div className="flex gap-3 justify-center  ">
                    <button type="button" class=" justify-center flex items-center gap-2 text-blue-600 bg-white border border-blue-500  hover:bg-blue-500 hover:text-white  font-medium min-w-[130px]  text-xs px-5  py-1"><SlBasket/><span>Add to Cart</span> </button>
                    <button type="button" class="justify-center flex items-center gap-2 text-white border border-blue-500 bg-blue-500   hover:bg-white hover:text-blue-600  font-medium min-w-[130px]  text-xs px-5  py-1"><BiPurchaseTagAlt/><span>Purchase Now</span> </button>
                    </div>
                </div>
            </div>
          </div>
          <div className="md:flex mx-auto md:gap-6 items-center">
            <div className="relative w-fit mx-auto">
              <div className="w-40 h-40 rounded-full bg-blue-600"></div>
              <img className="h-36 w-36 absolute -top-4 left-2" src="card.png" alt="" />
            </div>
            <div className="flex flex-col md:text-left">
                <h4 className="text-blue-500 text-2xl font-semibold">BLUE NAV BAGGER</h4>
                <p className="max-w-lg min-h-[100px] mt-2 text-gray-500 text-sm ">A wonderful serenity has taken possession of my entire soul, like se sweet mornings,A wonderful serenity has taken possession of my entire soul,</p>
                <div className="flex ">
                  <AiFillStar size="1.8em" color="yellow"/>
                  <AiFillStar size="1.8em" color="yellow"/>
                  <AiFillStar size="1.8em" color="yellow"/>
                  <AiFillStar size="1.8em" color="gray"/>
                  <AiFillStar size="1.8em" color="gray"/>
                </div>
                <div className="md:flex p-2 md:justify-between items-center text-center">
                    <div>
                      <span className="line-through text-gray-500">$66.54</span>
                      <span className="text-blue-600 text-lg ml-2 font-semibold">$60.54</span>
                    </div>
                    <div className="flex gap-3 justify-center ">
                    <button type="button" class=" justify-center flex items-center gap-2 text-blue-600 bg-white border border-blue-500  hover:bg-blue-500 hover:text-white  font-medium min-w-[130px]  text-xs px-5  py-1"><SlBasket/><span>Add to Cart</span> </button>
                    <button type="button" class="justify-center flex items-center gap-2 text-white border border-blue-500 bg-blue-500   hover:bg-white hover:text-blue-600  font-medium min-w-[130px]  text-xs px-5  py-1"><BiPurchaseTagAlt/><span>Purchase Now</span> </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Index
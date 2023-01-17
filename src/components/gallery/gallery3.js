import {HiMail} from "react-icons/hi"

function Gallery3() {
  return (
    <div className="container mx-auto mt-10  mb-10 ">
    <div className="text-center">
    <h3  className=" text-3xl font-semibold text-[#0099cc]">OUR NEWSLETTER!</h3>
<p className="text-[#999] text-sm mt-2">A wonderful serenity has taken possession of my entire soul, like se sweet mornings ring which ring</p>
    </div>
    
    <div className="container mx-auto bg-blue-700 p-5 py-10 max-w-3xl my-10 bg-blend-overlay bg-image">
      <div className="flex gap-3 flex-col mt-2 items-center justify-center text-white">
        <HiMail size="5em"/>
        <h5 className="font-extrabold text-2xl">SUBSCRIBE NOW & GET NOTIFICATION UPDATE</h5>

        <p className="text-gray-300 w-3/5 text-xs text-center"> lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum tortor eget ante aliquet posuere.</p>
        <div className="mt-3">
         <input className="bg-transparent border-b  px-6 outline-none border-white" type="text" placeholder="Enter Your Email Address Here" />
        <button className="bg-opacity-50 px-6 bg-blue-500">Submit</button>
        </div>
      </div>
    </div>

    <div className="mt-8 flex max-w-3xl mx-auto p-3 gap-4">
        <div>
            <h6 className="text-[#0099cc] text-lg font-semibold mb-3">OUR ADVANTAGE</h6>
        <p className="text-gray-300  "> lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum tortor eget ante aliquet posuere.</p>

        </div>
        <div>
            <h6 className="text-[#0099cc] text-lg font-semibold mb-3">OUR ADVANTAGE</h6>
        <p className="text-gray-300  "> lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum tortor eget ante aliquet posuere.</p>

        </div>
    </div>
    </div>
  )
}
export default Gallery3
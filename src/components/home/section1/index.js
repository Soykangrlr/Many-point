import Slide from "./slide"

function Index() {
  return (
    <div className="bg-[#0099cc] p-3 ">
        <div className="container mx-auto text-center">
            <div className="mt-10">
            <h3 className=" text-2xl text-[#ccffff]"><span className="text-white font-semibold text-3xl">PLAY</span> MARKET AND </h3>
            <h3 className="text-2xl text-[#ccffff]">START <span className="text-3xl text-white font-bold">LIVING</span></h3>
            </div>
            <p className="mt-3 max-w-lg mx-auto text-[#ccffff] ">Our jobs as marketers are to understand how the customer wants to buy and help them to do so</p>
            <Slide/>
        </div>
    </div>
  )
}
export default Index
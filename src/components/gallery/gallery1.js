function Gallery1() {
    const array=[1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <div className="container mx-auto mt-10  mb-10 ">
    <div className="text-center">
    <h3  className=" text-3xl font-semibold text-[#0099cc]">OUR GALLERY!</h3>
<p className="text-[#999] text-sm mt-2">A wonderful serenity has taken possession of my entire soul, like se sweet mornings ring which ring</p>
    </div>
    <div className="flex flex-wrap gap-x-5 gap-y-10 justify-center mt-10">
       {
            array.map(element =>(
                <div className="max-w-[250px]  ">
                <a href="#">
                    <img className=" max-w-[250px]" src="./product1.jpg" alt="" />
                </a>
                <div className="mt-2">
                    <a href="#">
                        <h5 className="mb-2 text-lg font-semibold tracking-tight text-[#0099CC]">GREAT PRODUCT</h5>
                    </a>
                    <p className="mb-3 font-light text-gray-400 text-sm ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    
                </div>
            </div>
            ) 
       
                  
                
                
            )
       }
    </div>

   

    </div>
  )
}
export default Gallery1
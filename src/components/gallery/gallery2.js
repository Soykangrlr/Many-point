function Gallery2() {
    const array=[1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <div className="container mx-auto mt-10  mb-10 ">
    <div className="text-center">
    <h3  className=" text-3xl font-semibold text-[#0099cc]">OUR STORES!</h3>
<p className="text-[#999] text-sm mt-2">A wonderful serenity has taken possession of my entire soul, like se sweet mornings ring which ring</p>
    </div>
    <div className="mx-10 p-2 mt-8 text-xs justify-center text-gray-400 font-light flex flex-wrap gap-x-3 gap-y-8">
    
        {
            array.map(element =>(
             
            <div className="flex gap-3"> 
            <div className="h-4 w-4 bg-blue-500  rounded-full"></div>
            <p className="max-w-[200px]"> A wonderful serenity has taken possession of my entire </p>
         </div>
           
            ) 
       
                  
                
                
            )
       }
             

    </div>
    </div>
  )
}
export default Gallery2
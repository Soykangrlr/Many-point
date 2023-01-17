import {BiPlayCircle} from "react-icons/bi"
function Index() {
  return (
    <div className="container mx-auto bg-blue-700 p-5 py-10 max-w-3xl my-10 bg-blend-overlay bg-image">
      <div className="flex gap-3 flex-col mt-2 items-center justify-center text-white">
        <BiPlayCircle size="5em"/>
        <h5 className="font-extrabold text-5xl">Build Something</h5>
        <hr className="w-1/3 "/>
        <p className="text-gray-300 w-3/5 text-xs text-center"> lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum tortor eget ante aliquet posuere. Praesent lobortis est vitae ipsum rutrum, sit amet convallis nibh viverra. Aliquam erat volutpat. Vestibulum.</p>
        <div className="mt-3">
          <button className=" mr-2 bg-blue-500 px-3 py-2">See More</button>
          <button className=" bg-blue-500 px-3 py-2">Join Us</button>

        </div>
      </div>
    </div>
  )
}
export default Index
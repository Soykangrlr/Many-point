import Slider from "react-slick";

import {BiRightArrow,BiLeftArrow} from 'react-icons/bi'
import {BsHeart} from "react-icons/bs"
function Slide() {
    const data=[
        {
            image:"product1.jpg",
            price:"80",
            name:"Çanta",
            like:12
        },
        {
            image:"product1.jpg",
            price:"124",
            name:"Çanta",
            like:132
        },
        {
            image:"product1.jpg",
            price:"90",
            name:"Çanta",
            like:187
        },
        {
            image:"product1.jpg",
            price:"123",
            name:"Çanta",
            like:86
        },  {
          image:"product1.jpg",
          price:"123",
          name:"Çanta",
          like:86
      }
    ]
    function PrevBtn(props) {
        const {className, onClick } = props;
        return (
          //  next ve Prev Butonları eklendi
          <button
            className='absolute top-1/2 -left-6 text-card-secondary-color -translate-y-1/2 text-brand-color'
            onClick={onClick}
          ><BiLeftArrow  color="#00cccc" size={22}/></button>
        );
      }
      function NextBtn(props) {
        const {className, onClick } = props;
        return (
          <button
          className='absolute text-card-secondary-color top-1/2 -right-6 -translate-y-1/2 text-brand-color'
            onClick={onClick}
          ><BiRightArrow color="#00cccc" size={22}/></button>
        );
      }
        const settings = {
          
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          cssEase: 'linear',
          nextArrow: <NextBtn />,
          prevArrow: <PrevBtn />,
          // Responsive slider yapıldı
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
          };
  return (
    <div className="my-8 mx-4 ">
    <Slider {...settings}>
     
      {data.map(item=>
            <div className="pl-4 ">
                <img className="w-full  h-[150px] object-cover" src={item.image} alt="" />
                <div className="bg-[#00cccc] p-2 pl-6">
                    <p className="text-white font-bold text-left text-lg">${item.price}</p>
                    <div className="flex items-center justify-between text-white text-sm">
                      <p>{item.name}</p>
                      <div className="flex items-center gap-3">
                        <BsHeart className="text-white"/>
                        <span>{item.like} </span>
                      </div>
                    </div>
                </div>
            </div>
        )}
    
       
    </Slider>
    </div>
  )
}
export default Slide
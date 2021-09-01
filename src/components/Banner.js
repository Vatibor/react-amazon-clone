import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
            <Carousel 
                autoPlay 
                infiniteLoop 
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000} >
                <div>
                    <img src="/carousel_1.jpg" loading="lazy" alt="" />
                </div>
                <div>
                    <img src="/carousel_2.jpg" loading="lazy" alt="" />
                </div>
                <div>
                    <img src="/carousel_3.jpg" loading="lazy" alt="" />
                </div>

            </Carousel>
            
        </div>
    )
}

export default Banner


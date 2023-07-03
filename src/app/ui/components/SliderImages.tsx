import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

interface props {
  data: string[]
}

export default function SliderImages ({ data }: props): JSX.Element {
  // SLIDER CONFIG
  const settings = {
    // dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          className: 'center',
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1,
          speed: 300
        }
      }
    ]
  }

  return (
    <div className='mmb'>
      <Slider {...settings} className='cursor-grab'>
        {
          data.map((image: string, idx: number) => (
            <div key={idx} className=''>
              <img src={image} alt='' />
            </div>
          ))
          // data.map((movie, idx) => (<Pa cont={idx} key={idx} />))
        }
      </Slider>
    </div>
  )
}

/* <Card movie={movie} key={idx} />) */

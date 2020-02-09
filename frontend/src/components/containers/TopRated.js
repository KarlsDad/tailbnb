import React from 'react';

// Components
import TopRatedCard from '../cards/TopRatedCard';
import ShowAll from '../ShowAll';

// Images
// High Resolution
import experience1 from '../../../public/img/high/experience1.jpg';
import experience2 from '../../../public/img/high/experience2.jpg';
import experience3 from '../../../public/img/high/experience3.jpg';
import experience4 from '../../../public/img/high/experience4.jpg';
// Low Resolution
import experience1low from '../../../public/img/low/experience1-low.jpg';
import experience2low from '../../../public/img/low/experience2-low.jpg';
import experience3low from '../../../public/img/low/experience3-low.jpg';
import experience4low from '../../../public/img/low/experience4-low.jpg';

export default () => {
  const toprateds = [
    {
      img: experience1,
      imglow: experience1low,
      location: 'Italy',
      title: 'Luca & Lorenzo, cooking in Chianti hills',
      price: 172,
      reviews: 1765
    },
    {
      img: experience2,
      imglow: experience2low,
      location: 'Italy',
      title: 'Truffle experience Rome',
      price: 148,
      reviews: 621
    },
    {
      img: experience3,
      imglow: experience3low,
      location: 'Japan',
      title: 'Feeling Samurai Soul',
      price: 119,
      reviews: 1047
    },
    {
      img: experience4,
      imglow: experience4low,
      location: 'Italy',
      title: 'Lisbon best flavors',
      price: 90,
      reviews: 3733
    }
  ];
  return (
    <>
      <div className='flex items-start justify-start flex-wrap w-full grid'>
        {toprateds.map(
          ({ id, img, imglow, location, title, price, reviews }) => {
            return (
              <div className='md:w-1/4 sm:w-1/3 w-1/2 pb-5'>
                <TopRatedCard
                  key={id}
                  img={img}
                  imglow={imglow}
                  location={location}
                  title={title}
                  price={price}
                  reviews={reviews}
                />
              </div>
            );
          }
        )}
      </div>
      <ShowAll title='Show all experiences' />
    </>
  );
};
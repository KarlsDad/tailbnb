import React from 'react';

// Components
import FeaturedCard from '../components/FeaturedCard';

// Images
import featured1 from '../../public/img/featured-1.jpg';
import featured2 from '../../public/img/featured-2.jpg';
import featured3 from '../../public/img/featured-3.jpg';

export default () => {
  return (
    <>
      <div className='overflow-y-hidden'>
        <div className='w-full h-full overflow-y-hidden'>
          <div className='h-full scroller'>
            <div className='scrollable sm:inset-x-0 flex items-start justify-startpy-2 rounded-xl w-featured md:w-full'>
              <div className='w-80 lg:w-1/3 pb-5 mr-2'>
                <FeaturedCard
                  img={featured1}
                  verified='940'
                  description='Find beachside bungalows, mid-century modern cottages, and more verified placed to stay in the City of Angels'
                />
              </div>
              <div className='w-80 lg:w-1/3 pb-5 mr-2'>
                <FeaturedCard
                  img={featured2}
                  verified='300'
                  description='Discover Victorian flats, SoMa lofts, and more verified places stay in a city where invention meets counterculture.'
                />
              </div>
              <div className='w-80 lg:w-1/3 pb-5 pr-4'>
                <FeaturedCard
                  img={featured3}
                  verified='290'
                  description='Take in soaring views and Edwardian details from Toronto places to stay verified for quality and design'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
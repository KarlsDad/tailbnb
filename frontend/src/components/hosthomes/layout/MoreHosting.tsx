import * as React from 'react';

// Functions
import { MoreHostingCard } from '../functions/MoreHostingCard';

// Images
const setup = require('../../../../public/img/high/hosting-setup.jpg');
const safety = require('../../../../public/img/high/hosting-safety.jpg');
const financials = require('../../../../public/img/high/hosting-financials.jpg');

export const MoreHosting: React.FC<{}> = () => {
  return (
    <div className='w-full max-w-5xl mx-auto py-8'>
      <div className='mb-3'>
        <h3
          style={{ fontFamily: 'airbnb-bold' }}
          className='text-2xl text-gray-750'>
          More about hosting
        </h3>
      </div>
      <div className='flex'>
        <MoreHostingCard img={setup} last={false} />
        <MoreHostingCard img={safety} last={false} />
        <MoreHostingCard img={financials} last={true} />
      </div>
    </div>
  );
};
import * as React from 'react';

export const HostHomesHeader: React.FC<{}> = () => {
  return (
    <div className='bg-white w-full flex border-b border-gray-300 items-center justify-between sticky top-0 z-50'>
      <div className='flex items-center justify-start'>
        <div className='ml-6 mr-3'>
          <a href='/'>
            <span className='sr-only'>Airbnb</span>
            <svg
              viewBox='0 0 1000 1000'
              role='presentation'
              aria-hidden='true'
              focusable='false'
              className='block'
              style={{ height: 34, width: 34, fill: '#008489' }}>
              <path d='m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z'></path>
            </svg>
          </a>
        </div>
        <div
          style={{ fontFamily: 'airbnb-medium' }}
          className='flex text-sm text-gray-750'>
          <div className='mx-4 border-green-850 border-b-2 py-8'>
            <a href='' className='text-green-850'>
              Overview
            </a>
          </div>
          <div className='mx-4 py-8'>
            <a href=''>Setup</a>
          </div>
          <div className='mx-4 py-8'>
            <a href=''>Safety</a>
          </div>
          <div className='mx-4 py-8'>
            <a href=''>Financials</a>
          </div>
          <div className='mx-4 py-8'>
            <a href=''>Hosting services</a>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <div>
          <p
            style={{ fontFamily: 'airbnb-book' }}
            className='text-gray-750 text-sm'>
            Monthly potential
          </p>
        </div>
        <div className='h-3 w-3 mx-1'>
          <svg
            className='w-full h-full'
            viewBox='0 0 24 24'
            style={{ fill: '#484848' }}>
            <path d='m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm4.75-14c0 1.8-.82 2.93-2.35 3.89-.23.14-1 .59-1.14.67-.4.25-.51.38-.51.44v2a .75.75 0 0 1 -1.5 0v-2c0-.74.42-1.22 1.22-1.72.17-.11.94-.55 1.14-.67 1.13-.71 1.64-1.41 1.64-2.61a3.25 3.25 0 0 0 -6.5 0 .75.75 0 0 1 -1.5 0 4.75 4.75 0 0 1 9.5 0zm-3.75 10a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z'></path>
          </svg>
        </div>
        <div className='relative mx-1' style={{ bottom: 3 }}>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-2xl text-gray-850'>
            $1,162
          </h3>
        </div>
        <div className='px-1 ml-2 mr-16'>
          <button
            style={{ fontFamily: 'airbnb-medium' }}
            className='py-2 px-4 rounded bg-red-600 text-white text-sm'>
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};
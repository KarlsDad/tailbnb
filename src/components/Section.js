import React from 'react';

export default ({ title, phrase, children }) => {
  const renderContent = () => {
    if (phrase) {
      return (
        <>
          <h3 className='text-2xl text-gray-850 font-medium pt-3'>{title}</h3>
          <p className='text-sm md:text-md mb-5 text-gray-850 pb-3'>{phrase}</p>
        </>
      );
    } else {
      return (
        <>
          <h3 className='text-gray-850 text-2xl font-semibold py-3 '>
            {title}
          </h3>
        </>
      );
    }
  };
  return (
    <div className='px-5 md:px-10 lg:max-w-5.5xl xl:px-0 mx-auto py-5'>
      {renderContent()}
      {children}
    </div>
  );
};
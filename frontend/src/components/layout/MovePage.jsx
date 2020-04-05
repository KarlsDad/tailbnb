import * as React from 'react';
import Link from 'next/link';

export const MovePage = ({
  category,
  page,
  previousPage,
  nextPage,
  first,
  last,
}) => {
  return (
    <>
      <div className='px-12 md:px-0 md:max-w-md lg:max-w-sm mx-auto'>
        <div className='flex justify-between'>
          {first ? (
            <div className='flex items-center'>
              <div className='p-4'>
                <div className='w-3 h-3'>
                  <svg
                    style={{ fill: 'rgb(221, 221, 221)' }}
                    className='w-full h-full'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 492 492'>
                    <g>
                      <g>
                        <path
                          d='M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
			C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
			c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
			l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z'
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div>
                <h3
                  style={{
                    color: 'rgb(221, 221, 221)',
                    fontFamily: 'airbnb-medium',
                  }}
                  className='underline'>
                  Previous page
                </h3>
              </div>
            </div>
          ) : (
            <>
              {previousPage == 1 ? (
                <Link href={`/${category}`}>
                  <div className='cursor-pointer flex items-center'>
                    <div className='p-4'>
                      <div className='w-3 h-3'>
                        <svg
                          style={{ fill: 'rgb(221, 221, 221)' }}
                          className='w-full h-full'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 492 492'>
                          <g>
                            <g>
                              <path
                                d='M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
			C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
			c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
			l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z'
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3
                        style={{
                          color: 'rgb(221, 221, 221)',
                          fontFamily: 'airbnb-medium',
                        }}
                        className='underline'>
                        Previous page
                      </h3>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link href={`/page/${page - 1}`}>
                  <div className='cursor-pointer flex items-center'>
                    <div className='p-4'>
                      <div className='w-3 h-3'>
                        <svg
                          className='w-full h-full'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 492 492'>
                          <g>
                            <g>
                              <path
                                d='M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
			C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
			c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
			l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z'
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3
                        style={{ fontFamily: 'airbnb-medium' }}
                        className='underline'>
                        Previous page
                      </h3>
                    </div>
                  </div>
                </Link>
              )}
            </>
          )}
          {last ? (
            <div className='cursor-pointer flex items-center'>
              <div>
                <h3
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='underline'>
                  Next page
                </h3>
              </div>
              <a className='p-4'>
                <div className='w-3 h-3'>
                  <svg
                    style={{ fill: '#F2F2F2' }}
                    className='w-full h-full'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 492.004 492.004'>
                    <g>
                      <g>
                        <path
                          d='M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
          c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
          c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
          c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z'
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </a>
            </div>
          ) : (
            <Link href={`/page/${nextPage}`} as={`/page/${page + 1}`}>
              <div className='cursor-pointer flex items-center'>
                <div>
                  <h3
                    style={{ fontFamily: 'airbnb-medium' }}
                    className='underline'>
                    Next page
                  </h3>
                </div>
                <a className='p-4'>
                  <div className='w-3 h-3'>
                    <svg
                      style={{ fill: '#484848' }}
                      className='w-full h-full'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 492.004 492.004'>
                      <g>
                        <g>
                          <path
                            d='M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
              c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
              c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
              c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z'
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className='mt-10 px-12 md:px-0 md:max-w-md lg:max-w-lg mx-auto'>
        <div className='flex justify-center'>
          <div>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='text-xs text-gray-650'>
              Enter dates to see full pricing. Additional fees apply. Taxes may
              be added.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
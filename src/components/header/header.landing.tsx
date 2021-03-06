import React, { useState } from 'react';
import Link from 'next/link';

import styles from 'components/header/header.landing.module.scss';
import { useModalDispatch, useModalState } from 'context';

import { HeaderCard } from 'components/header/header.card';
import { NoNameLogo, BottomArrow, NameLogo } from 'assets/svg';

// Modals
// import { CurrencyModal } from '../modals/CurrencyModal';
// import { LanguageModal } from '../modals/LanguageModal';

// import { RegisterModal } from '../modals/RegisterModal';
// import { HelpModal } from '../modals/HelpModal';

// import { OptionModal } from '../modals/OptionModal';

// Images
// const background = require('/assets/img/airbnb-background.jpg');

interface Props {
  // switchMenuModal: () => void;
}

// interface CurrencyObject {
//   name: string;
//   sign: string;
// }

// ({ switchMenuModal })
export const Header: React.FC<Props> = () => {
  const dispatch = useModalDispatch();
  // const [registerModal, setRegisterModal] = useState(false);
  // const [helpModal, setHelpModal] = useState(false);
  // const [optionModal, setOptionModal] = useState(false);
  // const [currency, setCurrency] = useState({ sign: '$', name: 'CAD' });

  // const [languageModal, setLanguageModal] = useState(false);
  // const [currencyModal, setCurrencyModal] = useState(false);
  // const [type, setType] = useState('');

  // const switchCurrencyModal = () => {
  //   setCurrencyModal(!currencyModal);
  // };

  // const switchLanguageModal = () => {
  //   setLanguageModal(!languageModal);
  // };

  // const switchRegisterModal = () => {
  //   setRegisterModal(!registerModal);
  // };

  // const switchHelpModal = () => {
  //   setHelpModal(!helpModal);
  // };

  // const switchOptionModal = () => {
  //   setOptionModal(!optionModal);
  // };

  // const switchType = (type: string) => {
  //   setType(type);
  // };

  // const switchCurrency = (currency: CurrencyObject) => {
  //   setCurrency(currency);
  // };

  // const configureScroll = (name: string) => {
  //   document.body.style.overflow = name;
  // };

  return (
    <header className={styles['header']}>
      <div className={styles['header__inner']}>
        <div className={styles['header__content']}>
          <div className={styles['header__logo--others']}>
            <Link href='/'>
              <a>
                <NameLogo fill='#ffffff' />
              </a>
            </Link>
          </div>
          <div className={styles['header__logo--mobile']}>
            <button
              onClick={() => {
                dispatch({
                  type: 'MENU_MODAL',
                });
              }}>
              <div>
                <NoNameLogo fill='#ffffff' />
              </div>
              <div className='ml-2'>
                <BottomArrow fill='#ffffff' />
              </div>
            </button>
          </div>

          <div className={styles['header__nav']}>
            <nav>
              <div>
                <button
                  onClick={() => {
                    // switchOptionModal()
                    console.log('hello');
                  }}
                  className='py-3 px-2 rounded-full'>
                  <div className='flex items-center justify-start text-sm mx-2'>
                    <div className='w-4'>
                      <svg
                        className='block relative w-full h-full'
                        aria-hidden='true'
                        style={{ fill: '#ffffff', right: 5 }}
                        viewBox='0 0 16 16'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M7.99985 0.349976C3.78135 0.349976 0.349854 3.78148 0.349854 7.99998C0.349854 12.2185 3.78135 15.65 7.99985 15.65C12.2184 15.65 15.6499 12.2185 15.6499 7.99998C15.6499 3.78148 12.2184 0.349976 7.99985 0.349976ZM1.68285 8.64997H3.86735C3.90085 9.42497 3.99535 10.1625 4.14085 10.85H2.33335C1.98351 10.1627 1.76301 9.41698 1.68285 8.64997ZM8.74985 3.84998V1.90748C9.25785 2.24998 9.74385 2.92348 10.1204 3.84998H8.74985ZM10.5274 5.14998C10.6859 5.81348 10.7954 6.54998 10.8339 7.34998H8.74985V5.14998H10.5274ZM7.24985 1.90748V3.84998H5.87985C6.25585 2.92348 6.74235 2.24998 7.24985 1.90748ZM7.24985 5.14998V7.34998H5.16585C5.20435 6.54998 5.31385 5.81348 5.47235 5.14998H7.24985ZM3.86735 7.34998H1.68285C1.76285 6.56498 1.99285 5.82498 2.33285 5.14998H4.14085C3.98937 5.87454 3.89789 6.61037 3.86735 7.34998ZM5.16585 8.64997H7.24985V10.85H5.47235C5.30192 10.1278 5.1993 9.39125 5.16585 8.64997ZM7.24985 12.15V14.0925C6.74235 13.7495 6.25585 13.0765 5.87985 12.15H7.24985ZM8.74985 14.0925V12.15H10.1204C9.74385 13.0765 9.25785 13.75 8.74985 14.0925ZM8.74985 10.85V8.64997H10.8339C10.8004 9.39125 10.6978 10.1278 10.5274 10.85H8.74985ZM12.1324 8.64997H14.3169C14.2369 9.43497 14.0069 10.175 13.6669 10.85H11.8589C12.0044 10.1625 12.0989 9.42497 12.1324 8.64997ZM12.1324 7.34998C12.1018 6.61037 12.0103 5.87454 11.8589 5.14998H13.6664C14.0074 5.82498 14.2364 6.56498 14.3169 7.34998H12.1324ZM12.7954 3.84998H11.5014C11.3192 3.31162 11.0813 2.7938 10.7914 2.30498C11.5556 2.68104 12.2369 3.20638 12.7949 3.84998H12.7954ZM5.20835 2.30498C4.91844 2.7938 4.68047 3.31162 4.49835 3.84998H3.20485C3.76298 3.20632 4.44439 2.68099 5.20885 2.30498H5.20835ZM3.20485 12.15H4.49935C4.69735 12.7245 4.93635 13.242 5.20935 13.695C4.44453 13.3191 3.76278 12.7937 3.20435 12.15H3.20485ZM10.7919 13.695C11.0818 13.2061 11.3197 12.6883 11.5019 12.15H12.7959C12.2377 12.7936 11.5563 13.319 10.7919 13.695Z' />
                      </svg>
                    </div>
                    <div className='h-2 w-2'>
                      <svg
                        className='h-full w-full'
                        style={{ fill: '#ffffff' }}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 491.996 491.996'>
                        <g>
                          <g>
                            <path
                              d='M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848
			L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128
			c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084
			c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224
			C491.996,136.902,489.204,130.046,484.132,124.986z'
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles['header__item']}>
                <div>
                  <Link href='/host/homes'>
                    <a className='text-sm  tracking-wide'>Host your home</a>
                  </Link>
                </div>
              </div>
              <div className={styles['header__item']}>
                <div>
                  <Link href='/host/experiences'>
                    <a className='text-sm  tracking-wide'>Host an experience</a>
                  </Link>
                </div>
              </div>
              <div className={styles['header__item']}>
                <div>
                  <button
                    // onClick={switchHelpModal}
                    onClick={() => console.log('hello')}>
                    Help
                  </button>
                </div>
              </div>
              <div className={styles['header__item']}>
                <div>
                  <button
                    onClick={() => {
                      // switchType('Log in');
                      // switchRegisterModal();
                      console.log('hello');
                    }}>
                    Log in
                  </button>
                </div>
              </div>
              <div className={styles['header__signup']}>
                <div>
                  <button
                    onClick={() => {
                      // switchType('Sign up');
                      // switchRegisterModal();
                      console.log('hello');
                    }}>
                    Sign up
                  </button>
                </div>
              </div>
            </nav>
            {/* {optionModal && !languageModal && !currencyModal ? (
              <>
                <div style={{ left: -140, top: 60 }} className='absolute z-50'>
                  <OptionModal
                    switchLanguageModal={switchLanguageModal}
                    switchCurrencyModal={switchCurrencyModal}
                    currency={currency}
                  />
                </div>
              </>
            ) : null} */}
          </div>
        </div>
        <div className={styles['header__card']}>
          <div className={styles['header__card--title']}>
            <h3>Book unique places to stay and things to do.</h3>
          </div>
          <HeaderCard />
          <div className={styles['header__notice']}>
            <div className={styles['header__notice--color']} />
            <div className={styles['header__notice--content']}>
              <div>
                <p>
                  Airbnb is taking steps to support our community in this time
                  of need.
                </p>
              </div>
              <div className='mt-2'>
                <Link href='#'>
                  <a>Learn more</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {registerModal ? (
        <>
          {typeof window !== 'undefined' ? configureScroll('hidden') : null}
          {type == 'Log in' ? (
            <RegisterModal
              setRegisterModal={setRegisterModal}
              type='Log in'
              nottype='Sign up'
              phrase={`Don\'t`}
              setType={switchType}
            />
          ) : (
            <RegisterModal
              setRegisterModal={setRegisterModal}
              type='Sign up'
              nottype='Log in'
              phrase='Already'
              setType={switchType}
            />
          )}
        </>
      ) : (
        <>{typeof window !== 'undefined' ? configureScroll('auto') : null}</>
      )} */}
      {/* {helpModal ? <HelpModal setHelpModal={switchHelpModal} /> : null}
      {currencyModal ? (
        <>
          {typeof window !== 'undefined' ? configureScroll('hidden') : null}
          <CurrencyModal
            location='Canada'
            setCurrencyModal={switchCurrencyModal}
            setCurrency={switchCurrency}
          />
        </>
      ) : null} */}
      {/* {languageModal ? (
        <>
          {typeof window !== 'undefined' ? configureScroll('hidden') : null}
          <LanguageModal
            location='Canada'
            setLanguageModal={switchLanguageModal}
          />
        </>
      ) : null} */}
    </header>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

// import data
import { nav } from '../../data';

const NavMobile = ({ navMobile }) => {
  return (
    <nav
      className={`${navMobile ? 'min-h-screen' : 'min-h-0'
        } w-full fixed top-0 left-0 right-0 bg-neutral-500 -bottom-12 -z-10 lg:hidden overflow-hidden transition-all h-0`}
    >
      <ul className='w-full top-0 left-0 h-full flex flex-col justify-center items-center gap-y-8'>
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <a className='text-white text-body-md' href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      {/* buttons */}
      <div className='-mt-44 flex justify-center gap-x-8'>
        <Link to='/login' className='btn btn-lg text-white'>Đăng nhập</Link>
        <Link to='/register' className='btn btn-lg btn-primary'>Đăng ký</Link>
      </div>
    </nav>
  );
};

export default NavMobile;

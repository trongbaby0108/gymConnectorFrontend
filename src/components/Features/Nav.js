import React from 'react';




const Nav = () => {

  let nav = {};
  if (localStorage.getItem("role") === "PERSONAL_TRAINER") {
    nav = [
      { name: "Trang chủ", href: "/home" },
      { name: "Học viên", href: "/userByTrainer/" + localStorage.getItem("id") }
    ];
  }
  else {
    nav = [
      { name: "Trang chủ", href: "/home" },
      { name: "Phòng tập", href: "/gyms" },
      { name: "Huấn luyện viên", href: "/trainers" },
      { name: "Thông tin cá nhân", href: "/userInfo" },
    ];

  }

  return (
    <nav className='hidden lg:flex'>
      <ul className='flex gap-x-8 text-white'>
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <a href={item.href} className='hover:text-primary-200 transition'>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

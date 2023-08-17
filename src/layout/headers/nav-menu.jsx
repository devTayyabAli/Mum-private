import Link from "next/link";
import React, { useEffect, useState } from "react";
import menu_data from "./menu-data";

const NavMenu = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    if (window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }

  })

  return (
    <>
      <ul>
        {menu_data.map((menu_item, i) => (
          <li key={i} >
            <Link href={menu_item.link} style={{ color: (sticky == true ? "#000" : "#fff") }}>{menu_item.title}</Link>
            {menu_item.has_dropdown && (
              <ul className="submenu">
                {menu_item.sub_menus.map((sub_menu, i) => (
                  <li key={i} >
                    <Link href={sub_menu.link}  >{sub_menu.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li>
          <Link href={'/'} onClick={() => {
            pricing(document.getElementById("personalPortal"), {
              sourceLink: "https://localhost/",
              project: 4,
              pricingPlacement: 1,
            });
            var portalContainer = document.getElementById('portalContainer')
            portalContainer.style.display = "block"
          }} style={{ color: (sticky == true ? "#000" : "#fff") }}>Pricing</Link>
        </li>
      </ul>
    </>
  );
};

export default NavMenu;

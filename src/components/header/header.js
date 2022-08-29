import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../theme-context";
import { useSelector, useDispatch } from "react-redux";
import { unlockProfile, lockProfile } from "../../store/profile";

export const Header = () => {
  const { theme, themeSetter } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.profile.menu)

  return (
    <div>
      <h1>{theme.name}</h1>
      <button
        disabled={theme.name === "light"}
        onClick={() => themeSetter("light")}
      >
        light
      </button>
      <button
        disabled={theme.name === "dark"}
        onClick={() => themeSetter("dark")}
      >
        dark
      </button>

      {menu.map((item) => {
        if (item.show === true) return (
          < NavLink key={item.to} to={item.to} >
            {item.title}
          </NavLink>
        )
      }

      )}

      <button disabled={menu[menu.indexOf(menu.find(el => el.title === 'Profile'))].show === true} onClick={() => dispatch(unlockProfile())}>UnlockProfile</button>
      <button disabled={menu[menu.indexOf(menu.find(el => el.title === 'Profile'))].show === false} onClick={() => dispatch(lockProfile())}>LockProfile</button>
    </div>
  );
};

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/loader/loader';
import { useStyles } from './mainMarkupStyles';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.svg'

export const MainMarkup = () => {
  const classes = useStyles(); 
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <NavLink to="/" end className={classes.logoLink}>
          <div className={classes.logo}>
            M<img src={Logo} alt="Logo" className={classes.logoImage} width={56}/>vies
          </div>
        </NavLink>
        <nav className={classes.linksWrap}>
          <NavLink to="/" end className={classes.link}>
            Home
          </NavLink>
          <NavLink to="/movies" className={classes.link}>Movies</NavLink>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

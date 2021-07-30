import React from "react";
import {
  goToCartPage,
  goToFeedPage,
  goToProfilePage,
} from "../../Routes/coordinator";
import Avatar from '../../Assets/avatar.png'
import Shopping_cart from '../../Assets/shopping-cart.png'
import Homepage from '../../Assets/homepage.png'
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const useStyles = makeStyles({
  root: {
    width: 'min(415px, 100%)',
    position:'fixed',
    bottom:0,
    boxShadow: '0 0 2px black',
  },
});

function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const history = useHistory();
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
       icon={<img  src={Homepage} onClick={() => goToFeedPage(history)} />}
      />
      <BottomNavigationAction
        icon={<img  src={Shopping_cart} onClick={() => goToCartPage(history)} />}
      />
      <BottomNavigationAction
        icon={
          <img  src={Avatar} onClick={() => goToProfilePage(history)} />
        }
      />
    </BottomNavigation>
  );
}

export default Footer;

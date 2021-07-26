import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import InitialPage from '../pages/InitialPage/InitialPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import FeedPage from '../pages/Feed/FeedPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import EditProfilePage from '../pages/EditProfilePage/EditProfilePage'
import RestaurantPage from '../pages/RestaurantPage/RestaurantPage'
import AddressPage from '../pages/AddressPage/AddressPage'
import CartPage from '../pages/CartPage/CartPage'


const Router = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={InitialPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/sign_up' component={SignUpPage} />
            <Route exact path='/feed' component={FeedPage} />
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/edit_profile' component={EditProfilePage} />
            <Route exact path='/restaurant/:id' component={RestaurantPage} />
            <Route exact path='/address_form' component={AddressPage} />
            <Route exact path='/cart' component={CartPage} />
        </Switch>
        </BrowserRouter>
    )
}
export default Router
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Search from './Search'
import Body from './Body';
import Body2 from'./Body2';
import Signup from'./Signup';
import Login from'./Login';
import HeaderUser from './HeaderUser';
import User from './User';
import Books from './Books';
import HeaderOrg from './HeaderOrg';
import FooterOrg from './FooterOrg';
import Org from './Org'
import HeaderOrguser from './HeaderOrg';
import FooterOrguser from './FooterOrg';
import Orguser from './Orguser';
import {getMemberOrg} from './actions/members';
import {
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getMemberOrg());
  }, [dispatch]);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/home/Search">
        <Header />
          <Search />
          <Footer />
        </Route>
        <Route exact path="/home">
        <Header />
          <Body />
          <Body2 />
          <Footer />
        </Route>
        <Route exact path="/home/Signup">
        <Header />
          <Signup />
          <Footer />
        </Route>
        <Route exact path="/home/Login">
        <Header />
          <Login />
          <Footer />
        </Route>
        <Route exact path="/home/Map">
        <Header />
          <Login />
          <Footer />
        </Route>
        <Route exact path="/home/Books">
        <Header />
          <Books />
          <Footer />
        </Route>
        <Route exact path="/home/Forums">
        <Header />
          <Login />
          <Footer />
        </Route>
        <Route exact path="/home/Zone">
        <Header />
          <Login />
          <Footer />
        </Route>
        <Route exact path="/home/AboutUs">
        <Header />
          <Login />
          <Footer />
        </Route>
        <Route exact path="/home/HowTo">
        <Header />
          <Login />
          <Footer />
        </Route>
        <Route exact path="/home/Quotes">
        <Header />
          <Login />
          <Footer />
        </Route>
        <Route exact path="/home/Team">
        <Header />
          <Login />
          <Footer />
        </Route>
        <Route exact path="/home/Contact">
        <Header />
          <Login />
          <Footer />
        </Route>
        <Route exact path="/home/Privacy">
        <Header />
          <Login />
          <Footer />
        </Route>
        <Route exact path="/home/user">
        <HeaderUser />
          <User />
          <Footer />
        </Route>
        <Route exact path="/home/user/Profile">
        <HeaderUser />
          <User />
          <Footer />
        </Route>
        <Route exact path="/home/user/MyBooks">
        <HeaderUser />
          <User />
          <Footer />
        </Route>
        <Route exact path="/home/user/Friends">
        <HeaderUser />
          <User />
          <Footer />
        </Route>
        <Route exact path="/home/user/Add">
        <HeaderUser />
          <User />
          <Footer />
        </Route>
        <Route exact path="/home/user/Manage">
        <HeaderUser />
          <User />
          <Footer />
        </Route>
        <Route exact path="/home/user/Map">
        <HeaderUser />
          <User />
          <Footer />
        </Route>
        <Route exact path="/home/user/Search">
        <HeaderUser />
          <User />
          <Footer />
        </Route>
        <Route exact path="/home/user/Books">
        <HeaderUser />
          <User />
          <Footer />
        </Route>
        <Route exact path="/home/user/Forums">
        <HeaderUser />
          <User />
          <Footer />
        </Route>
        <Route exact path="/home/user/Zone">
        <HeaderUser />
          <User />
          <Footer />
        </Route>
        <Route exact path="/home/user/AboutUs">
        <HeaderUser />
          <User />
          <Footer />
        </Route>
        <Route exact path="/home/user/HowTo">
        <HeaderUser />
          <User />
          <Footer />
        </Route>
        <Route exact path="/home/user/Quotes">
        <HeaderUser />
          <User />
          <Footer />
        </Route>
        <Route exact path="/home/user/Team">
        <HeaderUser />
          <User />
          <Footer />
        </Route>
        <Route exact path="/home/user/Contact">
        <HeaderUser />
          <User />
          <Footer />
        </Route>
        <Route exact path="/home/user/Privacy">
        <HeaderUser />
          <User />
          <Footer />
        </Route>
        <Route exact path="/home/Org">
          <HeaderOrg />
          <Org />
          <FooterOrg />
        </Route>
        <Route exact path="/home/Org/Profile">
        <HeaderOrg />
          <Org />
          <FooterOrg />
        </Route>
        <Route exact path="/home/Org/MyBooks">
        <HeaderOrg />
          <Org />
          <FooterOrg />
        </Route>
        <Route exact path="/home/Org/Users">
        <HeaderOrg />
          <Org />
          <FooterOrg />
        </Route>
        <Route exact path="/home/Org/AddUser">
        <HeaderOrg />
          <Org />
          <FooterOrg />
        </Route>
        <Route exact path="/home/Org/Add">
        <HeaderOrg />
          <Org />
          <FooterOrg />
        </Route>
        <Route exact path="/home/Org/Manage">
        <HeaderOrg />
          <Org />
          <FooterOrg />
        </Route>
        <Route exact path="/home/Org/Map">
        <HeaderOrg />
          <Org />
          <FooterOrg />
        </Route>
        <Route exact path="/home/Org/Search">
        <HeaderOrg />
          <Org />
          <FooterOrg />
        </Route>
        <Route exact path="/home/Org/Books">
        <HeaderOrg />
          <Org />
          <FooterOrg />
        </Route>
        <Route exact path="/home/Org/Forums">
        <HeaderOrg />
          <Org />
          <FooterOrg />
        </Route>
        <Route exact path="/home/Org/Zone">
        <HeaderOrg />
          <Org />
          <FooterOrg />
        </Route>
        <Route exact path="/home/Org/AboutUs">
        <HeaderOrg />
          <Org />
          <FooterOrg />
        </Route>
        <Route exact path="/home/Org/HowTo">
        <HeaderOrg />
          <Org />
          <FooterOrg />
        </Route>
        <Route exact path="/home/Org/Quotes">
        <HeaderOrg />
          <Org />
          <FooterOrg />
        </Route>
        <Route exact path="/home/Org/Team">
        <HeaderOrg />
          <Org />
          <FooterOrg />
        </Route>
        <Route exact path="/home/Org/Contact">
        <HeaderOrg />
          <Org />
          <FooterOrg />
        </Route>
        <Route exact path="/home/Org/Privacy">
        <HeaderOrg />
          <Org />
          <FooterOrg />
        </Route>
        <Route exact path="/home/Orguser">
          <HeaderOrguser />
          <Orguser />
          <FooterOrguser />
        </Route>
        <Route exact path="/home/Orguser/Profile">
        <HeaderOrguser />
          <Orguser />
          <FooterOrguser />
        </Route>
        <Route exact path="/home/Orguser/MyBooks">
        <HeaderOrguser />
          <Orguser />
          <FooterOrguser />
        </Route>
        <Route exact path="/home/Org/Users">
        <HeaderOrguser />
          <Orguser />
          <FooterOrguser />
        </Route>
        <Route exact path="/home/Orguser/Manage">
        <HeaderOrguser />
          <Orguser />
          <FooterOrguser />
        </Route>
        <Route exact path="/home/Orguser/Map">
        <HeaderOrguser />
          <Orguser />
          <FooterOrguser />
        </Route>
        <Route exact path="/home/Orguser/Search">
        <HeaderOrguser />
          <Orguser />
          <FooterOrguser />
        </Route>
        <Route exact path="/home/Orguser/Books">
        <HeaderOrguser />
          <Orguser />
          <FooterOrguser />
        </Route>
        <Route exact path="/home/Orguser/Forums">
        <HeaderOrguser />
          <Orguser />
          <FooterOrguser />
        </Route>
        <Route exact path="/home/Orguser/Zone">
        <HeaderOrguser />
          <Orguser />
          <FooterOrguser />
        </Route>
        <Route exact path="/home/Orguser/AboutUs">
        <HeaderOrguser />
          <Orguser />
          <FooterOrguser />
        </Route>
        <Route exact path="/home/Orguser/HowTo">
        <HeaderOrguser />
          <Orguser />
          <FooterOrguser />
        </Route>
        <Route exact path="/home/Orguser/Quotes">
        <HeaderOrguser />
          <Orguser />
          <FooterOrguser />
        </Route>
        <Route exact path="/home/Orguser/Team">
        <HeaderOrguser />
          <Orguser />
          <FooterOrguser />
        </Route>
        <Route exact path="/home/Orguser/Contact">
          <HeaderOrguser />
          <Orguser />
          <FooterOrguser />
        </Route>
        <Route exact path="/home/Orguser/Privacy">
          <HeaderOrguser />
          <Orguser />
          <FooterOrguser />
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;

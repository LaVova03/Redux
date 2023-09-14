import './PageOne.css';
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../redux/actions';
import ModalForm from '../ModalForm/ModalForm';

function App() {

  const navigate = useNavigate();

  const next = () => {
    navigate("/pagetwo");
  }

  const currentUser = useSelector(state => state.currentUser)

  const dispatch = useDispatch()

  const user = { name: "Jummi" }

  useEffect(() => {
    dispatch(allActions.userActions.setUser(user))
  }, [])

  return (
    <div className="PageOne">
      Open next page
      <button onClick={next}>Next</button>
      {
        currentUser.loggedIn ?
          <>
            <h1>Заполните форму, {currentUser.user.name} !</h1>
            <button onClick={() => dispatch(allActions.userActions.logOut())}>Form Close</button>
            <ModalForm />
          </>
          :
          <>
            <h1>Login</h1>
            <button onClick={() => dispatch(allActions.userActions.setUser(user))}>Login as Jummi</button>
          </>
      }
    </div >
  );
}

export default App;

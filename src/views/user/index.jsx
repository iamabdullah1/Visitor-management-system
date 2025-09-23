import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { url } from "../../utils/Constants.jsx";
import Notification from "../../components/notification/index.jsx";
import { UserContext } from "../../context/UserContext.jsx";

import Users from './Users';
import UserProfile from './UserProfile';
import UpdateUser from './UpdateUser';
import AddNewUser from './AddNewUser';
import ResetPasswordUser from './ResetPasswordUser';
import mockApi from "../../utils/mockApi";

const User = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [addNewUserModalOpen, setAddNewUserModalOpen] = useState(false);
  const [resetPasswordModalOpen, setResetPasswordModalOpen] = useState(false);

  const handleActionClick = (action, user = null) => {
    if (user) setSelectedUser(user);
    if (action === 'view') setViewModalOpen(true);
    if (action === 'update') setUpdateModalOpen(true);
    if (action === 'addNewUser') setAddNewUserModalOpen(true);
    if (action === 'resetPassword') setResetPasswordModalOpen(true);
  };

  let history = useNavigate();

  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const json = await mockApi.getAllUsers();
      setUserData(json);
    } catch (err) {
      Notification.showErrorMessage("Error", err.message || "Server error!");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history("/login");
    }
    fetchData();
  }, []);

  return (
    <div style={{marginBottom:"55px"}}>
      {userData && (<Users users={userData} isLoading={isLoading} onActionClick={handleActionClick} />)}
      {selectedUser && (<>
        <UserProfile open={viewModalOpen} onClose={() => setViewModalOpen(false)} user={selectedUser} onActionClick={handleActionClick} />
        <UpdateUser open={updateModalOpen} onClose={() => setUpdateModalOpen(false)} user={selectedUser} fetchData={fetchData} />
        <ResetPasswordUser open={resetPasswordModalOpen} onClose={() => setResetPasswordModalOpen(false)} user={selectedUser} />
      </>
      )}
      <AddNewUser open={addNewUserModalOpen} onClose={() => setAddNewUserModalOpen(false)} fetchData={fetchData} />
    </div>
  );
};

export default User;

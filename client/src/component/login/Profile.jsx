import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from '../userinfo/UserProfile.jsx';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <UserProfile isAuthenticated={isAuthenticated} userEmail={user.email} />
  );
};

export default Profile;
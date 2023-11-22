import { createContext, useState } from "react";
import usersActions from "./actions/tasks-fetch";
export const UserListContext = createContext(null);

const UserListProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    return UsersActions.fetch().then((data) => setUsers(data));
  };

  const deleteUser = (user) => {
    return usersActions
      .delete(user)
      .then(() => setUsers(users.filter((u) => u.id !== user.id)));
  };

  const addUser = (user) => {
    return usersActions.add(user).then((data) => setUsers([data, ...users]));
  };

  const editUser = (user, newValue) => {
    return usersActions.edit(user, newValue).then((data) =>
      setUsers(
        users.map((u) => {
          if (u.id === data.id) {
            u = data;
          }
          return u;
        })
      )
    );
  };

  const toggleUserStatus = (user) => {
    return editUser(user, {
      status: !user.status,
    });
  };

  return (
    <UserListContext.Provider
      value={{
        users,
        editUser,
        addUser,
        deleteUser,
        toggleUserStatus,
        fetchUsers,
      }}
    >
      {children}
    </UserListContext.Provider>
  );
};

export default TaskListProvider;
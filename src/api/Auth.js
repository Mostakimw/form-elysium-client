export const saveUserToDb = (user) => {
  const currentUser = {
    user: user?.email,
    email: user?.email,
  };
  fetch(`${import.meta.env.VITE_apiLink}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then(() => {});
};

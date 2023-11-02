const saveUserToDb = (user) => {
  const currentUser = {
    email: user?.email,
    name: user?.name,
  };
  fetch(`${import.meta.env.VITE_apiLink}/api/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then(() => {});
};

export default saveUserToDb;

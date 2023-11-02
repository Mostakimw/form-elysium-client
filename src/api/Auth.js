const saveUserToDb = (user) => {
  const currentUser = {
    email: user?.email,
    name: user?.name,
  };
  fetch(`https://form-elysium-server-mostakimw.vercel.app/api/users`, {
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

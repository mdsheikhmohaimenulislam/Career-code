export const applicationsPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/applications?email=${email}`, {
    credentials: "include",

    // firebase accessToken
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  }).then((res) => res.json());
};

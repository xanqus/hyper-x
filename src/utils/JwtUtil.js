export const validCheck = (token) => {
  if (!token) return false;
  try {
    const pureToken = token.split(" ")[1];
    const payload = JSON.parse(window.atob(pureToken.split(".")[1]));
    if (payload.exp * 1000 < Date.now()) {
      return false;
    }
    return true;
  } catch (e) {
    console.log(e);
  }
};

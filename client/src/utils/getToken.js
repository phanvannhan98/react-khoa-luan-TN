const getToken = () =>
    document.cookie &&
    document.cookie.split(";").find((n) => n.includes("authorization"))
        ? document.cookie
              .split(";")
              .find((n) => n.includes("authorization"))
              .split("=")[1]
        : "";
export default getToken;

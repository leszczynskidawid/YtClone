export const handleExciption = (error) => {
  let status = error.response.status;

  switch (status) {
    case 404:
      return console.log("404", status);
    case 400:
      return console.log("400", status);
    case 403:
      return console.log("403", status);

    default:
      return "allRigth";
  }
};

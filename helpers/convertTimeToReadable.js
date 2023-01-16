const convertTimeToReadable = (time) => {
  const date = new Date(time);

  const hours = date.getHours();

  const minutes = date.getMinutes();

  const month = date.getMonth() + 1;

  const day = date.getDate();

  const year = date.getFullYear();

  return `${day}:${month}:${year} ${hours}:${minutes}`;
};

export default convertTimeToReadable;

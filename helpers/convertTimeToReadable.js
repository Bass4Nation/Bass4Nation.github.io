const convertTimeToReadable = (time) => {
  const date = new Date(time);

  const hours = date.getHours();

  const minutes = date.getMinutes();

  const seconds = date.getSeconds();

  return `${hours}:${minutes}:${seconds}`;
};

export default convertTimeToReadable;

import addZeroToNumber from "./addZeroToNumber";

const convertTimeToReadable = (time) => {
  const date = new Date(time);

  const hours = addZeroToNumber(date.getHours());

  const minutes = addZeroToNumber(date.getMinutes());

  const month = addZeroToNumber(date.getMonth() + 1);

  const day = addZeroToNumber(date.getDate());

  const year = addZeroToNumber(date.getFullYear());


  return `${day}:${month}:${year} ${hours}:${minutes}`;
};

export default convertTimeToReadable;

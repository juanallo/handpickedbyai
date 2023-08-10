import { intlFormatDistance } from "date-fns";

export const formatDate = (timeStamp: string) => {
  const formatOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Intl.DateTimeFormat("en-US", formatOptions).format(
    new Date(Number(timeStamp))
  );
  const distance = intlFormatDistance(new Date(Number(timeStamp)), new Date());

  return `${distance} - ${date}`;
};

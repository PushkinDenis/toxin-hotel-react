const months: Record<string, string> = {
  ["Jan"]: "01",
  ["Feb"]: "02",
  ["Mar"]: "03",
  ["Apr"]: "04",
  ["May"]: "05",
  ["Jun"]: "06",
  ["Jul"]: "07",
  ["Aug"]: "08",
  ["Sep"]: "09",
  ["Oct"]: "10",
  ["Nov"]: "11",
  ["Dec"]: "12",
};

export const parseDate = (date: string): string => {
  const dateArr = date.split(" ") as string[];
  const newDateArr = [dateArr[2], months[`${dateArr[1]}`], dateArr[3]];
  return `${newDateArr.join(".")}`;
};

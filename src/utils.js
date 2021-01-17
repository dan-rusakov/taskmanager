const formattedDate = (date) => {
  const newDate = new Date(date);

  return newDate.toLocaleString(`ru-RU`, {
    day: `numeric`,
    month: `long`
  });
};

const formattedTime = (date) => {
  const newDate = new Date(date);

  return newDate.toLocaleString(`ru-RU`, {
    hour: `numeric`,
    minute: `numeric`,
  });
};

export {formattedDate, formattedTime};

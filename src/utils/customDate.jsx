export default  function customDate(newDate) {
  const date = new Date(newDate);

  const result = `${date.toLocaleString("en-US", { month: "short" })} ${date.getFullYear()}`;

  return result;
}
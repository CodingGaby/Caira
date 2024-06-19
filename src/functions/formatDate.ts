export const formatDate = function(inputDate: Date) {
  const date = new Date(inputDate);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric'};
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return formattedDate;
}
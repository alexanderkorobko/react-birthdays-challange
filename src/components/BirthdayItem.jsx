function BirthdayItem(props) {
  const { firstName, lastName, dob, id } = props;

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var cur = new Date().getMonth();

  var sortedMonths = [...month.slice(cur), ...month.slice(0, cur)];

  const bDate = new Date(dob);

  return (
    <li>
      {firstName} {lastName} - {bDate.getDate()} {month[bDate.getMonth()]}{" "}
      {bDate.getFullYear()} year
    </li>
  );
}

export default BirthdayItem;

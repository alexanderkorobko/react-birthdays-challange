import BirthdayItem from "./BirthdayItem";

function BirthdayList(props) {
  const { employees, listt } = props;

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

  let cur = new Date().getMonth();

  const sortedMonths = [...month.slice(cur), ...month.slice(0, cur)];

  let employeesData = listt.map((e) => {
    const newItem = employees.find((emp) => emp.id === e);
    return newItem;
  });

  const neededMonths = employeesData.map((d) => {
    const bMonthNumber = new Date(d.dob).getMonth();
    return month[bMonthNumber];
  });

  return (
    <div className="b-list">
      {listt[0] ? (
        <div>
          {sortedMonths.map((m, i) => {
            if (neededMonths.includes(m)) {
              return (
                <div key={m}>
                  <h3>{m}</h3>

                  {employeesData.map((e, i) => {
                    const bMonth = new Date(e.dob).getMonth();

                    if (bMonth === month.indexOf(m)) {
                      return <BirthdayItem key={e.id} {...e} />;
                    } else {
                      return null;
                    }
                  })}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      ) : (
        <h3> Employees List is empty</h3>
      )}
    </div>
  );
}

export default BirthdayList;

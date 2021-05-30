import { useState } from "react";

function Employee(props) {
  const [active, setActive] = useState(false);
  const { firstName, lastName, dob, id, cb } = props;

  const handleFilter = (event) => {
    active ? setActive(false) : setActive(true);
    cb(id);
  };

  return (
    <div>
      <h3 className={active ? "colored" : null}>
        {lastName} {firstName}
      </h3>
      <label>
        <input
          name={id}
          type="radio"
          checked={active === false}
          onChange={handleFilter}
        />
        <span>Not active</span>
      </label>
      <br />
      <label>
        <input
          name={id}
          type="radio"
          onChange={handleFilter}
          checked={active === true}
        />
        <span>Active</span>
      </label>
    </div>
  );
}

export default Employee;

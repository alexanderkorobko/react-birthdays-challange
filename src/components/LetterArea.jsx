import Employee from "./Employee";

function LetterArea(props) {
  const { letter, employees, cb } = props;

  return (
    <div>
      <h2>{letter}</h2>
      <div>
        {employees[0] ? (
          employees.map((e) => <Employee key={e.id} {...e} cb={cb} />)
        ) : (
          <span>-----</span>
        )}
      </div>
    </div>
  );
}

export default LetterArea;

import { useEffect, useState } from "react";
import axios from "axios";
import LetterArea from "./components/LetterArea";
import Employee from "./components/Employee";
import BirthdayList from "./components/BirthdayList";

function App() {
  const [employees, setEmployees] = useState([]);
  const [activeList, setActiveList] = useState([]);
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  function toggleActive(id) {
    if (activeList.indexOf(id) !== -1) {
      setActiveList((prev) => {
        return prev.filter((e) => e !== id);
      });
    } else {
      setActiveList((prev) => {
        return [...prev, id];
      });
    }
  }

  useEffect(() => {
    axios
      .get("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then((res) => setEmployees(res.data));
  }, []);

  return (
    <div className="App">
      <div className="abc">
        {alphabet.map((l) => {
          const suitableEmployees = employees.filter(
            (e) => e.lastName[0] === l
          );
          // const suitableEmployeesList=suitableEmployees.map(emp=><Employee key={emp.id} {...emp} />);
          return (
            <LetterArea
              letter={l}
              key={l}
              employees={suitableEmployees}
              cb={toggleActive}
            />
          );
        })}
      </div>

      <BirthdayList employees={employees} listt={activeList} />
    </div>
  );
}

export default App;

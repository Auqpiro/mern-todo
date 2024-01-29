import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get("todos")
        .then(({ data }) => setStatus(data))
        .catch((err) => setStatus(err));
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <div>
        <p>
          {status.map((item) => (
            <li key={item.id}>{JSON.stringify(item)}</li>
          ))}
        </p>
      </div>
    </>
  );
}

export default App;

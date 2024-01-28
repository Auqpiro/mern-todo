import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [status, setStatus] = useState("...fetching");

  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get("api/v1")
        .then(({ data }) => setStatus(data))
        .catch((err) => setStatus(err));
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <>
      <div >
        <p>{status}</p>
      </div>
    </>
  );
}

export default App;

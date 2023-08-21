import { useState } from "react";

const Task1Todo = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  function clearAllHandler() {
    setData([]);
  }

  const clearSingleTask = (id) => {
    return setData(data.filter((item) => item.id !== id));
  };

  function capitalizeHandler(title, id) {
    const words = title.split(" ");

    for (let i = 0; i < words.length; i++)
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);

    let item = document.getElementById(`${id}title`);
    item.innerText = words.join(" ");
  }

  // console.log(data);

  return (
    <div className="main">
      {err && <h2>{err}</h2>}

      <button className="main-btn" onClick={handleClick}>
        Fetch data
      </button>
      <button className="main-btn" onClick={clearAllHandler}>
        {" "}
        Clear All
      </button>
      {isLoading && <h2>Loading...</h2>}

      <div className="items">
        {data.map((item) => {
          return (
            <div className="smallFlex" key={item.id}>
              <ul>
                <h3 id={`${item.id}title`}>{item.title}</h3>
              </ul>
              <div>
                <button
                  className="smallBtn"
                  onClick={() => clearSingleTask(item.id)}
                >
                  X
                </button>
                <button
                  className="smallBtn"
                  onClick={() => capitalizeHandler(item.title, item.id)}
                >
                  Capitalize
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Task1Todo;

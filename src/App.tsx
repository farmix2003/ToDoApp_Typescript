import { ChangeEvent, useState } from "react";
import styles from "./home.module.css";
import { IData } from "./interfaces";
import { data } from "./constants";

const App = (): JSX.Element => {
  const [title, setTitle] = useState<string>();
  const [arr, setArr] = useState<IData[]>(data);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  const submitHandler = (): void => {
    if (!title?.length) return;
    const data = {
      title: title,
      id: new Date().getTime(),
      description: "Description",
    };
    setArr([...arr, data]);
    setTitle("");
  };
  const delData = (id: number): void => {
    const newData = arr.filter((c) => c.id !== id);
    setArr(newData);
  };
  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>To Do App</h1>
      <input
        type="text"
        placeholder="Enter task"
        className={styles.input}
        value={title}
        onChange={changeHandler}
      />
      <button className={styles.button} onClick={submitHandler}>
        Add Todo
      </button>
      <div className={styles.card}>
        {arr?.map((c) => (
          <div key={c.id} className={styles.cardItem}>
            <p>{c.title}</p>
            <div className={styles.delBtn}>
              <button onClick={() => delData(c.id)}>Del</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

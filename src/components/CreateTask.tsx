import { useContext, useState } from 'react';
import useTasks from '../service/useTasks';
import AppContext from '../context/AppContext';

function CreateTask({ close }: { close: (p:boolean) => void }) {
  const data = new Date();
  data.setDate(data.getDate() + 1);
  const { effect } = useTasks();
  const { setReload, reload } = useContext(AppContext);
  const [task, setTask] = useState({
    taskName: '',
    description: '',
    deadline: data });

  return (
    <section className="h-[45%] z-10 w-[80%] absolute text-black">
      <header
        className="h-[50px] text-white gap-7 items-center
       bg-[#68D2DF] flex flex-row relative rounded-t-xl p-2"
      >
        <h1 className="text-xl">Create New Task.</h1>
        <button
          onClick={ () => close(false) }
        >
          X
        </button>
      </header>
      <form
        className="h-full bg-[#E8E8E8] rounded-b-xl p-5 flex flex-col justify-center
        items-center gap-5"
        onSubmit={ (e) => e.preventDefault() }
      >
        <label className="flex flex-col text-left justify-center">
          <span>Task Name</span>
          <input
            required
            className="pl-2 w-40 rounded-lg outline-none"
            type="text"
            name="taskName"
            onChange={ ({ target: { name, value } }) => setTask({
              ...task, [name]: value }) }
          />
        </label>
        <label className="flex flex-col text-left justify-center">
          <span>Description</span>
          <input
            className="pl-2 w-40 rounded-lg outline-none"
            type="text"
            name="description"
            onChange={ ({ target: { name, value } }) => setTask({
              ...task, [name]: value }) }
          />
        </label>
        <label className="flex flex-col text-left justify-center">
          <span>Deadline</span>
          <input
            className="pl-2 w-40 rounded-lg outline-none"
            type="datetime-local"
            name="deadline"
            onChange={ ({ target: { name, value } }) => setTask({
              ...task, [name]: value }) }
          />
        </label>
        <button
          onClick={ () => {
            effect(task, 'POST');
            setReload(!reload);
            setTimeout(() => {
              close(false);
            }, 500);
          } }
          type="submit"
          className="text-white bg-black font-light var w-40 rounded-2xl p-1"
        >
          Create
        </button>
      </form>
    </section>
  );
}

export default CreateTask;

import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import AppContext from '../context/AppContext';
import { addTask } from '../service/fetch';

function CreateTask({ close }: { close: (p:boolean) => void }) {
  const { token, setReload, reload } = useContext(AppContext);
  const data = new Date();
  data.setDate(data.getDate() + 1);
  const [task, setTask] = useState({
    taskName: '',
    description: '',
    deadline: data });

  const handleAddTask = async () => {
    const request = await addTask(task, token);
    Swal.fire({ title: request.message, timer: 1500, position: 'top-end' });

    setReload(!reload);
    close(false);
  };

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
            handleAddTask();
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

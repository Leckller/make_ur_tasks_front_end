import { useAppSelector } from '../../hooks/reduxHooks';

function View() {
  const { coockingTask } = useAppSelector((state) => state.Task);
  return (
    <div
      className="bg-white rounded-md h-[90%]
    flex flex-col justify-around text-xl
    "
    >
      <p>{coockingTask.description}</p>
      <h3>{coockingTask.deadline.toString()}</h3>
    </div>
  );
}

export default View;

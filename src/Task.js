import React from "react";
import { tr } from "date-fns/locale";
import { formatDistanceToNow, differenceInDays } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  let result = formatDistanceToNow(new Date(taskObj.deadline), { locale: tr });
  console.log("formatDistanceToNow", result);

  let differenceResult = differenceInDays(
    new Date(taskObj.deadline),
    new Date()
  );

  console.log("differenceInDay", differenceResult);

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:
        <span className={differenceResult <= 3 ? "bg-red-600" : ""}>
          {result}
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline px-3 py-1.5 text-sm border border-indigo-500 mx-1.5 rounded-full text-blue-400 hover:shadow-lg"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;


import { useRecoilValue } from "recoil";
import { addTitleState, addTitleStateLength } from "./addTitleState";

const AddTask: React.FC = () => {
const addTask = useRecoilValue(addTitleState);
const taskNumber = useRecoilValue(addTitleStateLength);
    return (
        <div>
            <div>タスクが{taskNumber}個あります</div>
            <ul>
                {addTask.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
                
            </ul>
        </div>
    );
};

export default AddTask;
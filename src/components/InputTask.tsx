import { useRecoilValue } from "recoil";
import { inputTitleState } from "../states/inputTitleState";

const InputTask: React.FC = () => {
    const inputTitle = useRecoilValue(inputTitleState);

    const handleClick = () => {
        console.log(inputTitle);
    };

    return (
        <div>
            <p className='task-title'>Task</p>
            <input
                type="text"
                onChange={handleClick}
                placeholder="Enter a new task"
                className='task-input'
            />
            <button type="submit" className='task-button'>Add Task</button>
        </div>
    );
};

export default InputTask;
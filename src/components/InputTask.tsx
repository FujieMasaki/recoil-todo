import { useRecoilState } from "recoil";
import { inputTitleState } from "../states/inputTitleState";
import { useCallback } from "react";


const InputTask: React.FC = () => {
    const [inputTitle, setInputTitle] = useRecoilState(inputTitleState);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value);
        console.log(inputTitle);
    },[inputTitle]);

    const handleClick = () => {
        console.log(inputTitle);
    };

    return (
        <div>
            <p className='task-title'>Task</p>
            <input
                type="text"
                onChange={handleChange}
                placeholder="Enter a new task"
                className='task-input'
            />
            <button type="submit" className='task-button' onClick={handleClick}>Add Task</button>
        </div>
    );
};

export default InputTask;
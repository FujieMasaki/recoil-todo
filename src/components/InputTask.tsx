import { useRecoilState } from "recoil";
import { inputTitleState } from "../states/inputTitleState";
import { useCallback } from "react";
import { addTitleState } from "./addTitleState";

const getKey = () => { return Math.random().toString(32).substring(2) }

const InputTask: React.FC = () => {
    const [inputTitle, setInputTitle] = useRecoilState(inputTitleState);
    const [addTitle, setAddTitle] = useRecoilState(addTitleState);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value);
        console.log(inputTitle);
    },[inputTitle]);

    const handleClick = () => {
        // 第一引数に以前の値、第二引数に新しい値を渡す
        setAddTitle([...addTitle, {id: getKey(), title: inputTitle}]);
        setInputTitle('');
        console.log(addTitle);
    };

    return (
        <div>
            <p className='task-title'>Task</p>
            <input
                type="text"
                onChange={handleChange}
                placeholder="Enter a new task"
                className='task-input'
                value={inputTitle}
            />
            <button type="submit" className='task-button' onClick={handleClick}>Add Task</button>
        </div>
    );
};

export default InputTask;
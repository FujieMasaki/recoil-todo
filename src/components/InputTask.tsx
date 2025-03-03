import { useRecoilState } from "recoil";
import { inputTitleState } from "../states/inputTitleState";

const InputTask: React.FC = () => {
    const [inputTask, setInputTask] = useRecoilState(inputTitleState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTask(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(inputTask);
        // ここでタスク追加のロジックを実装
    };

    return (
        <form className='task-form' onSubmit={handleSubmit}>
            <p className='task-title'>Task</p>
            <input
                type="text"
                value={inputTask}
                onChange={handleChange}
                placeholder="Enter a new task"
                className='task-input'
            />
            <button type="submit" className='task-button'>Add Task</button>
        </form>
    );
};

export default InputTask;
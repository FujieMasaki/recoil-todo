import { atom, selector } from "recoil";
import { Task } from "../types/addTitleState";

//memoが何が入っているのか、数がどれくらいなのかを管理するためのatom
export const addTitleState = atom<Array<Task>>({
    key: 'addTitleState',
    default: [],
});

// セレクターを使って、addTitleStateの中にあるタスクの数を数える
// セレクターは状態を変換するためのもの
export const addTitleStateLength = selector<number>({
    key: 'addTitleStateLength',
    // addTitleStateの中にあるタスクの数を数える
    get: ({ get }) => {
        const addTitleNumber = get(addTitleState);
        return addTitleNumber.length? addTitleNumber.length : 0;
    }
});
import { atom } from "recoil";

// formで入力されたタスクの値を保持するためのatom
// どのコンポーネントからでもこの状態を参照できる(グローバルな状態)
// atomは状態を管理するためのもので、recoilの中で一番基本的なもの
// atomはkeyとdefaultを持つ
// keyは状態を一意に識別するためのもの
// defaultは初期値
export const inputTitleState = atom({
  key: 'inputTitleState',
  default: 'first input task',
});
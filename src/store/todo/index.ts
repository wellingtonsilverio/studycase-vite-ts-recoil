import { atom } from "recoil";

export interface Todo {
  key: number;
  label: string;
}

export const todoListState = atom<Todo[]>({
  key: 'todoList',
  default: []
})
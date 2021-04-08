import { selector } from "recoil";
import { todoListState } from "../atoms/TodoListAtom";
import { searchTextFormState } from "../atoms/SearchTextFormAtom";
import Todo from "../types/Todo";

// Atomの値を用いて何らかの計算や加工・副作用を処理した結果を返す
export const searchedTodoListSelector = selector<Todo[]>({
  key: "searchedTodoListSelector",
  get: ({ get }) => {
    // 引数のgetを使ってAtomから最新の値を取得(タスク一覧)
    const todoList: Todo[] = get(todoListState);
    // 同様に検索フィールドの文字列を取得
    const searchText: string = get(searchTextFormState);
    //   検索フィールドに文字列がある場合は、その条件に合致したタスクのみを返却する
    return searchText
      ? todoList.filter((t) => t.title.includes(searchText))
      : todoList;
  },
});

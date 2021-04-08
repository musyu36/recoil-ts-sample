import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from "recoil";
import { todoTitleFormState } from "../atoms/TodoTitleFormAtom";

const TitleForm: React.FC = () => {
    // useRecoilValue で todoTitleFormState の値を取得
    const todoTitleFormValue: string = useRecoilValue(todoTitleFormState); // Atomを渡す
    // useSetRecoilState で todoTitleFormState の値を更新するSetter関数を取得
    const setTodoTitleFormValue: SetterOrUpdater<string> = useSetRecoilState(todoTitleFormState); // Atomを渡す

    // 下記でも可
    // const [todoTitleFormValue, setTodoTitleFormValue] = useRecoilState(todoTitleFormState);

    // テキストフィールドのonChange処理
    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            // 先に取得したsetTodoTitleFormValueに対して更新したい値を渡して実行
            setTodoTitleFormValue(event.target.value);
        },
        [setTodoTitleFormValue]
    );

    return (
        <label>
            タスク名:
            <input type="text" value={todoTitleFormValue} onChange={onChange} name="title" style={{ margin: 12 }} />
        </label>
    );
};

export default TitleForm;
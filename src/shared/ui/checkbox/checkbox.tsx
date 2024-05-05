import { ChangeEvent, useId } from "react";

import styles from "./checkbox.module.scss";

interface CheckboxProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
    label: string;
}

const Checkbox = ({ onChange, label, checked }: CheckboxProps) => {
    const id = useId();

    return (
        <div className={styles["checkbox-wrapper-4"]}>
            <input className={styles["inp-cbx"]} id={id} type="checkbox" onChange={onChange} checked={checked} />
            <label className={styles["cbx"]} htmlFor={id}>
                <span>
                    <svg width="12px" height="10px">
                        <use href="#check-4"></use>
                    </svg>
                </span>
                <span className={styles["label"]}>{label}</span>
            </label>
            <svg className={styles["inline-svg"]}>
                <symbol id="check-4" viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </symbol>
            </svg>
        </div>
    );
};

export default Checkbox;

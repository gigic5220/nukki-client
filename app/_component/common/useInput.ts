import {useEffect, useState} from "react";

const useInput = (initialValue: string = '') : [string, (value: string) => void] => {
    const [value, setValue] = useState(initialValue);

    const onChangeValue = (value: string) => {
        setValue(value);
    }

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue])

    return [
        value, onChangeValue
    ]
}

export default useInput;
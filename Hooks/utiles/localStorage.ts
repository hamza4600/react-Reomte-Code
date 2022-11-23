import { useState } from "react";

interface ILocalStorage {
    res?: string;
    setItem: (key: string, value: string) => void;
    getItem: (key: string) => void;
    deleteItem: (key: string) => void;
}
export const useLocalStorage = (): ILocalStorage => {
    const [res, setRes] = useState<string>();

    const setItem = (key: string, value: string): void => {
        localStorage.setItem(key, value);
    };

    const getItem = (key: string): void => {
        const response = localStorage.getItem(key);
        if (response) setRes(response);
    };

    const deleteItem = (key: string): void => {
        localStorage.removeItem(key);
    };

    return {
        res,
        setItem,
        getItem,
        deleteItem,
    };
};

export default useLocalStorage;

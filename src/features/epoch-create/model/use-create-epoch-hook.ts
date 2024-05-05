import { ChangeEvent, useState } from "react";

import epochsApi from "../api";

const useCreateEpochHook = () => {
    const [file, setFile] = useState<File | undefined>(undefined);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0];
        if (f) {
            setFile(f);
        }
    };

    const handleCreateEpoch = () => {
        epochsApi.createEpoch({ file, title, description });
    };

    return { title, setTitle, description, setDescription, handleFileChange, handleCreateEpoch };
};

export default useCreateEpochHook;

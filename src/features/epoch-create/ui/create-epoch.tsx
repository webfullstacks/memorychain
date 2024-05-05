import { useId } from "react";

import useCreateEpochHook from "../model";

const CreateEpoch = () => {
    const id = useId();

    const { title, setTitle, description, setDescription, handleFileChange, handleCreateEpoch } = useCreateEpochHook();

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <input placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <label htmlFor={id}>
                <input type="file" id={id} className="upload-files-input" onChange={handleFileChange} />
            </label>
            <button onClick={handleCreateEpoch}>create epoch</button>
        </div>
    );
};

export default CreateEpoch;

import apiClient from "@/shared/api";
import { ChangeEvent, useId } from "react";

interface FileUploadProps {
    children: JSX.Element;
    heroId: string;
}

const fileUpload = async ({
    file,
    heroId,
    fileName,
    description,
}: {
    file: File;
    heroId: string;
    fileName: string;
    description: string;
}) => {
    const url = `/gateway/hero/draft/photo/put`;

    try {
        const formData = new FormData();
        formData.append("photoFile", file);
        formData.append(
            "request",
            new Blob([JSON.stringify({ heroId: heroId, fileName: fileName, description: description })], {
                type: "application/json",
            }),
        );

        const response = await apiClient.post(url, formData);

        console.log(response);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const useFileUploadHook = (heroId: string) => {
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            fileUpload({ file, heroId, fileName: file.name, description: "file description" });
            // Здесь можно выполнить дополнительные действия с выбранным файлом
        }
    };
    return { handleFileChange };
};

const FileUpload = ({ children, heroId }: FileUploadProps) => {
    const id = useId();

    const { handleFileChange } = useFileUploadHook(heroId);

    return (
        <label htmlFor={id}>
            <input type="file" id={id} className="upload-files-input" onChange={handleFileChange} />
            {children}
        </label>
    );
};

export default FileUpload;

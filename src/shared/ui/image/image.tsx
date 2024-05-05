import apiClient from "@/shared/api";
import { useEffect, useState } from "react";

const fileDownload = async ({ fileId }: { fileId: string }) => {
    const url = `/gateway/file/download?fileId=${fileId}`;

    try {
        const response = await apiClient.get(url, { responseType: "blob" });

        return response.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const AppImage = ({ fileId, className }: { fileId: string; className?: string }) => {
    const [imageSrc, setImageSrc] = useState<Blob | null>(null);

    useEffect(() => {
        if (fileId) {
            fileDownload({ fileId: fileId }).then((res) => {
                setImageSrc(res);
            });
        }

        return () => {
            setImageSrc(null);
        };
    }, [fileId]);

    if (!imageSrc) {
        return <></>;
    }

    return <img src={URL.createObjectURL(imageSrc)} className={className} />;
};

export default AppImage;

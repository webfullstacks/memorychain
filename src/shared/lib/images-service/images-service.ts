import apiClient from "@/shared/api";

class ImagesService {
    private static imageDownload = async ({ imageId }: { imageId: string }) => {
        const url = `/gateway/file/download?fileId=${imageId}`;

        try {
            const response = await apiClient.get(url, { responseType: "blob" });

            return response.data;
        } catch (error) {
            throw new Error(`${url} ErrorRequest: ${error}`);
        }
    };

    static setBackgroundImageByElementId = async ({ imageId, elementId }: { imageId?: string; elementId?: string }) => {
        if (elementId && imageId) {
            const element = document.getElementById(elementId);

            console.log(elementId, imageId, element);

            await this.imageDownload({ imageId }).then((res) => {
                if (element) {
                    element.style.backgroundImage = `url(${URL.createObjectURL(res)})`;
                }
            });
        }
    };
}

export default ImagesService;

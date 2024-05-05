export enum HeroStatus {
    visible = "VISIBLE",
    notVisible = "NOT_VISIBLE",
}

export enum HeroSearchParams {
    birthDate = "birthDate",
    countryId = "countryId",
    deathDate = "deathDate",
    epochId = "epochId",
    name = "name",
    title = "title",
}

export interface HeroInterface {
    awards: string[];
    birthDate: string;
    countryId: string;
    createdAt: number;
    deathDate: string;
    epochId: string;
    fileHash?: string;
    heroDescription: string;
    heroDocuments: [
        {
            description: string;
            docType: string;
            fileId: string;
            fileName: string;
            heroId: string;
            id: string;
        },
    ];
    heroName: string;
    heroPhotos: [
        {
            description: string;
            fileId: string;
            fileName: string;
            heroId: string;
            id: string;
            imageType: string;
        },
    ];
    heroTitle: string;
    id: string;
    ipfsHash?: string;
    mainPhotoId?: string;
    ownerId: string;
    status: HeroStatus;
}

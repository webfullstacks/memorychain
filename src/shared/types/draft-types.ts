export enum DraftStatus {
    new = "NEW",
    awaitingPayment = "AWAITING_PAYMENT",
    onModeration = "ON_MODERATION",
}

export interface DraftInterface {
    birthDate: string;
    countryId: string;
    createdAt?: number;
    deathDate: string;
    epochId: string;
    heroDescription: string;
    heroName: string;
    heroTitle: string;
    id: string;
    mainPhotoId?: string;
    ownerId: string;
    status: DraftStatus;
    updatedAt?: number;
    heroDraftDocuments?: DraftDocumentInterface[];
    heroDraftPhotos?: DraftPhotoInterface[];
    awards: string[];
}

export interface DraftDocumentInterface {}

export interface DraftPhotoInterface {}

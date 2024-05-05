import FileUpload from "@/shared/ui/file-upload";

import { useAddPhotoFileHook, useCreateDraftHook, usePayProductHook } from "../model";

const DraftPage = () => {
    const {
        birthDate,
        countryId,
        deathDate,
        epochId,
        heroDescription,
        heroTitle,
        heroName,
        onCreateDraft,
        setBirthDate,
        setCountryId,
        setDeathDate,
        setEpochId,
        setHeroDescription,
        setHeroName,
        setHeroTitle,
    } = useCreateDraftHook();

    const { setHeroId, heroId } = useAddPhotoFileHook();

    const {
        handleGetProductsList,
        createOrder,
        heroId: heroIdForPayment,
        setHeroId: setHeroIdForPayment,
        productId,
        setProductId,
    } = usePayProductHook();

    return (
        <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                Create default draft
                <input placeholder="birthDate" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                <input placeholder="countryId" value={countryId} onChange={(e) => setCountryId(e.target.value)} />
                <input placeholder="deathDate" value={deathDate} onChange={(e) => setDeathDate(e.target.value)} />
                <input placeholder="epochId" value={epochId} onChange={(e) => setEpochId(e.target.value)} />
                <input
                    placeholder="heroDescription"
                    value={heroDescription}
                    onChange={(e) => setHeroDescription(e.target.value)}
                />
                <input placeholder="heroName" value={heroName} onChange={(e) => setHeroName(e.target.value)} />
                <input placeholder="heroTitle" value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} />
                <button onClick={onCreateDraft}>create draft</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                Add photo to draft
                <input placeholder="heroId" value={heroId} onChange={(e) => setHeroId(e.target.value)} />
                <FileUpload heroId={heroId}>
                    <div>File Uploader</div>
                </FileUpload>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                Get drafts list
                <input
                    placeholder="heroId"
                    value={heroIdForPayment}
                    onChange={(e) => setHeroIdForPayment(e.target.value)}
                />
                <input placeholder="productId" value={productId} onChange={(e) => setProductId(e.target.value)} />
                <button onClick={handleGetProductsList}>Get Products List</button>
                <button onClick={createOrder}>createOrder</button>
            </div>
        </div>
    );
};

export default DraftPage;

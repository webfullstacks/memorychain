import agreementsText from "./useragreements.html?raw";

const UseragreementPage = () => {
    return <div className="container pt-48 lg:pt-60" dangerouslySetInnerHTML={{ __html: agreementsText }}></div>;
};

export default UseragreementPage;

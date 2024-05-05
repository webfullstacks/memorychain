import { useAuthFieldsHook } from "../model";

const EmailSignupAndSignin = () => {
    const { email, setEmail, password, setPassword, handleSendValidationCode } = useAuthFieldsHook();

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" />
            <input
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
            />
            <button onClick={handleSendValidationCode}>Email login</button>
            {/* <input
                placeholder="validation code"
                value={validationCode}
                onChange={(e) => setValidationCode(e.target.value)}
            /> */}
        </div>
    );
};

export default EmailSignupAndSignin;

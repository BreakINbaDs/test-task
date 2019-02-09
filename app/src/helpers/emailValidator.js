export const validateEmail = (email) => {
    const emailRegexp = /\S+@\S+\.\S+/;
    if (!emailRegexp.test(email))
        alert("Unsupported email format type!");
    return emailRegexp.test(email);
};
export const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if(!phone.match(phoneRegex))
        alert("Unsupported phone number format type!");
    return phone.match(phoneRegex);
};
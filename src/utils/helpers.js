export const formatMessage = (username, message) => {
    return `${username}: ${message}`;
};

export const validateInput = (input) => {
    return input && input.trim().length > 0;
};

export const generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};
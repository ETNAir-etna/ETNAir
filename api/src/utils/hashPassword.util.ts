let createError = require("http-errors");

const bcrypt = require("bcrypt");

export const hashPassword = async (password: string) => {

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    } catch (error) {
        // TODO : find the error message to send in the catch og hashed function
        throw createError(500, "A VOIR");
    }
}; 

export const comparePassword = async(password: string) => {
    try {
        const match = await bcrypt.compare(password, hashedPassword);
        if (match) {
            console.log('✅ Mot de passe valide');
        } else {
            console.log('❌ Mot de passe invalide');
        }
        return match;
    } catch (error) {
        console.error('Erreur lors de la vérification du mot de passe :', error);
        throw error;
    }
}

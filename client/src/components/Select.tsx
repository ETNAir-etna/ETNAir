import { useState } from "react";
import { MenuItem, Select } from "./muiComponents";
import { useTranslation } from 'react-i18next';


export const LanguagesSelect: React.FC = () => {

    const { i18n } = useTranslation();

    const [language, setLanguage] = useState<string>(i18n.language);

    const changeLanguage = (lang: string) => {
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };

    return (
        <Select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            
            inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="fr">Français</MenuItem>
        </Select>
    );
};

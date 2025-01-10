
import { Box, IconButton, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import React from "react";
import { settings } from '../interfaces/settings';
import SlideMenu from './SlideMenu';

export const LanguagesSelect: React.FC = () => {

    const { i18n } = useTranslation();
    const { t } = useTranslation('components/footer')

    const handleSelect = (selectedItem: settings) => {
        i18n.changeLanguage(selectedItem.value);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>

            <SlideMenu anchor="bottom" items={(t('language.options', { returnObjects: true }) as settings[])} onItemClick={handleSelect} >
                <Tooltip title="Open settings" >
                    <IconButton size="medium" >
                        <LanguageRoundedIcon fontSize="medium" />
                    </IconButton>
                </Tooltip>
            </SlideMenu>
        </Box>
    );
};

import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from "@mui/material"
import { IconButton } from "./Button";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { useTranslation } from "react-i18next";

interface CustomCardProps {
    imgUrl: string;
    title: string;
    rating: number;
    host: string;
    price: number;
    isSuperhost: boolean
    onClick?: () => void;
}

export const PropretyCard: React.FC<CustomCardProps> = ({imgUrl, title, rating, host, price, isSuperhost, onClick}) =>  {

    const {t} = useTranslation('components/card')

    return (
        <Card  onClick={onClick} sx={{
            
            maxWidth: 300,
            minWidth: 122,
            borderRadius: 4,
            boxShadow: 0,
            overflow: 'hidden',
        }}>
            <CardActionArea>
                {/* Image Section */}
                <Box position="relative" >
                    <CardMedia
                        component="img"
                        height="300"
                        // image={img}
                        image={imgUrl}
                        alt={title}
                        sx={{
                            borderRadius: 4,
                            border: 'none'
                        }}
                    />
                    {/* Badge on the top-left */}
                    {isSuperhost === true ? <Chip
                        // label={badgeText}
                        label={t("chipLabel")}
                        color="whiteBlack"
                        sx={{
                            position: 'absolute',
                            top: 10,
                            left: 10,
                            fontWeight: 'bold'
                        }}
                    />
                    : null }
                    {/* Heart Icon on the top-right */}
                    <IconButton
                        sx={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            color: '#FFFFFF', 
                        }}
                    >
                        <FavoriteTwoToneIcon aria-label="add to favorites" />
                    </IconButton>
                </Box>




                
                 {/* Content Section */}
                <CardContent>
                    {/* Title and Rating */}
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{ maxWidth: '70%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                        >
                            {title}
                        </Typography>
                        <Box display="flex" alignItems="center">
                            <StarRateRoundedIcon fontSize="small" sx={{ color: 'blackWhite', ml: 0.5 }} />
                            <Typography variant="body1">{rating}</Typography>
                        </Box>
                    </Box>

                    {/* Host Section */}
                    <Typography variant="body2" color="text.secondary" >
                        {t("subText.p1")}: {host}
                    </Typography>

                    {/* Price Section */}
                    <Box mt={0.5}>
                        <Typography variant="body1" fontWeight="bold">
                            {price} {t("subText.priceDevice")}
                        </Typography>
                        <Typography variant="body1">
                            {t("subText.p2")}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )

}
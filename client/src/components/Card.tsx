import { Box, Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { useTranslation } from "react-i18next";
import { FavoriteIcon } from "./Button";

interface CustomCardProps {
    imgUrl: string;
    title: string;
    rating: number;
    host?: string;
    price: number;
    isSuperhost?: boolean
    onClick?: () => void;
    hostDetails?: boolean
}

export const PropretyCard: React.FC<CustomCardProps> = ({imgUrl, title, rating, host, price, isSuperhost, onClick, hostDetails = true}) =>  {

    const {t} = useTranslation('components/card')

    return (
    
        <Card sx={{
            
            maxWidth: 300,
            minWidth: 122,
            borderRadius: 4,
            boxShadow: 0,
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            '&:hover': {
                backgroundColor: '#F8F8F8AF',
                transform: 'scale(1.01)',
                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
                },
        }}>
            <Box>
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
                    {isSuperhost === true ? 
                    <Chip
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
                        <FavoriteIcon />
                </Box>




                
                 {/* Content Section */}
                <CardContent onClick={onClick} sx={{textAlign: "left", cursor: "pointer"}}>
                    {/* Title and Rating */}
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{ maxWidth: '85%', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight:550 }}
                        >
                            {title}
                        </Typography>
                        <Box display="flex" alignItems="center">
                            <StarRateRoundedIcon fontSize="small" sx={{ color: 'blackWhite', ml: 0.5 }} />
                            <Typography variant="body1">{rating}</Typography>
                        </Box>
                    </Box>

                    {/* Host Section */}
                    {hostDetails ? 
                        <Typography variant="body2" color="text.secondary" >
                            {t("subText.p1")}: {host}
                        </Typography>
                    : 
                    null
                    }
                    

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
            </Box>
        </Card>
    )

}
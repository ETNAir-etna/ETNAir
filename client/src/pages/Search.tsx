import { Property } from "@etnair-etna/shared";
import { Box, Container, Pagination, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { PropertyAndHost } from "../interfaces/PropertyAndHost";
import { SEO } from "../components/SEO";
import { PropretyCard } from "../components/Card";

function Search() {

    const [page, setPage] = useState<number>(1);
    const [count, setCount] = useState<number>(0);
    const [resultPerPage, setRresultPerPage ] = useState<number>(16)
    const [properties, setProperties] = useState<PropertyAndHost[]>([]);

    const navigate = useNavigate();
    const params = useParams();

    if (params.page && !isNaN(parseInt(params.page, 10))) {
        
        setPage(parseInt(params.page, 10));
    }
    

    const { t } = useTranslation('common.searchpage')

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const propertyResponse = await fetch(`api-etnair/property/all?page=${page}`);
                    if (!propertyResponse.ok) throw new Error('Erreur lors de la récupération des propriétés');
                    const result: (number | Property[])[] = (await propertyResponse.json()).data;
                    const propertyData = result[1] as Property[];
                    setCount(Math.ceil(result[0] as number / resultPerPage));

                    const hostIds = [...new Set(propertyData.map((property) => property.ownerId))];
    
                    const userPromises = hostIds.map((id) =>
                        fetch(`api-etnair/user/${id}`)
                            .then((res) => {
                                if (!res.ok) {throw new Error(`Erreur lors de la récupération de l'utilisateur ${id}`);}
                                return res.json();
                            })
                            .then((data) => data.data)
                    );
    
                    const users = await Promise.all(userPromises);
    
                    const mergedProperties = propertyData.map((property) => ({
                        ...property,
                        host: users.find((user) => user.id === property.ownerId) || null,
                    }));
    
                    setProperties(mergedProperties);
                } catch (error) {
                    const typedError = error as Error;
                    console.error('ERROR:', typedError.message);
                    
                }
            };
    
            fetchData();
        }, [page, resultPerPage]);
     
        const handlePageChange = (event: React.ChangeEvent<unknown>,value: number) => {
            if (value === (page + 1)) {
                console.log('Navigation en avant (▶)');
            } else if (value < page) {
                console.log('Navigation en arrière (◀)');
            } else {
                console.log(`Navigué directement à la page ${value}`);
            }
            setPage(value);
            navigate(`/search?page=${page}`)
        };

    return (
        <>
            <SEO title={t('SEO.homepage.title')} description={t('SEO.homepage.description')} />
        <Box>
            <h1>Welcome to the Search Page</h1>

            {properties.length > 0 ? (
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',

                            gap: 2,
                            mt: 3,
                        }}
                    >
                        {properties.map(property => (
                            <PropretyCard key={property.id} onClick={() => navigate(`/property/${property.id}`)} imgUrl={property.mainImgUrl} title={property.title} rating={property.rating} host={`${property.host.firstName} ${property.host.lastName}`} price={property.pricePerNight} isSuperhost={property.host.isSuperHost ? true : false} />
                        ))}
                    </Box>
                ) : (
                    <Typography variant="body1">No properties found</Typography>
                )}


            <Pagination
                count={count}
                color="primary"
                page={page}
                onChange={handlePageChange}
            />
        </Box>
        </>
    );
}

export default Search;
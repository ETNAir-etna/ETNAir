import { Property, PropertyFilter } from "@etnair-etna/shared";
import { Box, Pagination, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { SEO } from "../components/SEO";
import { PropretyCard } from "../components/Card";
import PropertyFilterForm from "../components/PropertyFilterForm";

function Search() {

    const [page, setPage] = useState<number>(1);
    const [count, setCount] = useState<number>(0);
    const [properties, setProperties] = useState<Property[]>([]);
    const pagesFilters :PropertyFilter = {
        country: undefined,
        city: undefined,
        propertyType: undefined,
        occupancyMax: undefined,
        pricePerNight: undefined,
        numberByPage: 16,
        page: 1
    };

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
                setCount(Math.ceil(result[0] as number / pagesFilters.numberByPage));


                setProperties(propertyData);
            } catch (error) {
                const typedError = error as Error;
                console.error('ERROR:', typedError.message);

            }
        };
       
        fetchData();
    }, [page, pagesFilters.numberByPage]);



    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        
            console.log(event);
       
        setPage(value);
        navigate(`/search?page=${value}`)
    };

    const sub = async (filters: PropertyFilter) => {

        
        pagesFilters.country = filters.country === "" ? undefined : filters.country
        pagesFilters.city = filters.city === "" ? undefined : filters.city
        pagesFilters.propertyType = filters.propertyType === "" ? undefined : filters.propertyType
        pagesFilters.occupancyMax = parseInt(String(filters.occupancyMax), 10)
        pagesFilters.pricePerNight = filters.pricePerNight === "" ? undefined : filters.pricePerNight
        console.log("pagesFilters submitted:", pagesFilters);

        try {

            const propertyResponse = await  fetch(`api-etnair/property/all?page=${pagesFilters.page}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pagesFilters),
            })
    if (!propertyResponse.ok) throw new Error('Erreur lors de la récupération des propriétés');
    const result: (number | Property[])[] = (await propertyResponse.json()).data;
    const propertyData = result[1] as Property[];
    setCount(Math.ceil(result[0] as number / pagesFilters.numberByPage));


    setProperties(propertyData);
    console.log(properties)
} catch (error) {
    const typedError = error as Error;
    console.error('ERROR:', typedError.message);

}



    }

    return (
        <>
            <SEO title={t('SEO.homepage.title')} description={t('SEO.homepage.description')} />
            <Box>
                <h1>Welcome to the Search Page</h1>
                <PropertyFilterForm onSubmit={sub} />

                {properties.length > 0 ? (
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: "center",
                            gap: 5,
                            mt: 3,
                        }}
                    >
                        {properties.map(property => (
                            <PropretyCard hostDetails={false} key={property.id}
                            onClick={() => navigate(`/property/${property.id}`)}
                            imgUrl={property.mainImgUrl} title={property.title}
                            rating={property.rating}
                            price={property.pricePerNight} />
                        ))}
                    </Box>
                ) : (
                    <Typography variant="body1">No properties found</Typography>
                )}

<Box sx={{ width:"100%", display: "flex", justifyContent: "center", mt : 4 }}>
<Pagination
                    
                    count={count}
                    color="primary"
                    page={page}
                    onChange={handlePageChange}
                />

</Box>

            </Box>
        </>
    );
}

export default Search;
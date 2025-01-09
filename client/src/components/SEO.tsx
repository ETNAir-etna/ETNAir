import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SeoInterface {
    title: string
    description: string
}

export const SEO = ({ title, description }: SeoInterface) => {

    const { i18n } = useTranslation();

    return (
        <HelmetProvider>
            <Helmet>
                <html lang={i18n.language} />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
        </HelmetProvider>
    )
}
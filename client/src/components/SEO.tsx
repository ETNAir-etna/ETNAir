import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next";

interface SeoInterface {
    title: string
    description: string
}

export const SEO = ({ title, description }: SeoInterface) => {

    const { i18n } = useTranslation();
    
    return (
        <Helmet>
            <html lang={i18n.language} />
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    )
}
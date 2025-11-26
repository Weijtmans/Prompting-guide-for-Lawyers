import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://prompting.hvglaw.nl'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
            alternates: {
                languages: {
                    nl: baseUrl,
                    en: baseUrl,
                },
            },
        },
    ]
}


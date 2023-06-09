import { param, ValidationChain } from 'express-validator';

export const keywordValidator: ValidationChain[] = [
    param('keyword').custom((value) => {        
        const allSections = [
            'about', 'animals-farmed', 'artanddesign', 'australia-news', 'better-business', 'books', 'business', 'business-to-business', 'cardiff', 'childrens-books-site', 'cities', 'commentisfree', 'community', 'crosswords', 'culture', 'culture-network', 'culture-professionals-network', 'edinburgh', 'education', 'enterprise-network', 'environment', 'extra', 'fashion', 'film', 'food', 'football', 'games', 'global-development', 'global-development-professionals-network', 'government-computing-network', 'guardian-professional', 'healthcare-network', 'help', 'higher-education-network', 'housing-network', 'inequality', 'info', 'jobsadvice', 'katine', 'law', 'leeds', 'lifeandstyle', 'local', 'local-government-network', 'media', 'media-network', 'membership', 'money', 'music', 'news', 'politics', 'public-leaders-network', 'science', 'search', 'small-business-network', 'social-care-network', 'social-enterprise-network', 'society', 'society-professionals', 'sport', 'stage', 'teacher-network', 'technology', 'theguardian', 'theobserver', 'travel', 'travel/offers', 'tv-and-radio', 'uk-news', 'us-news', 'voluntary-sector-network', 'weather', 'women-in-leadership', 'working-in-development', 'world'
        ]
        const regex = /^[a-z]+(?:-[a-z]+)*$/;

        if(!regex.test(value)){
            throw new Error('Section needs to be indicated using only lowercase letters and hyphens example section,a-section')
        }

        if(!allSections.includes(value)) {
            throw new Error('Section does not exist')
        }

        return true;
    })
]
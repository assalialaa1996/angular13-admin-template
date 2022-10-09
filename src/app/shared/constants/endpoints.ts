export const endpoints = {
    ADMIN: {
        LOGIN: 'auth/login/admin',
        BACKOFFICE: {
            SERVICES: 'back-office-admin-services',
            CATEGORIES: 'back-office-admin-categories',
            TYPES: 'back-office-admin-types',
            PRODUCTS: 'back-office-admin-products',
            USERS: 'back-office-admin-users',
        }
    },
    LAUNDRY: {
        REGISTER: 'auth/register/laundry-owner',
        LOGIN: 'auth/login/laundry-owner',
        PRODUCTS: 'back-office-laundry-products',
        LAUNDRIES: 'back-office-laundry-laundries'
    },
}


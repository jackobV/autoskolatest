export interface Product {
    item_id: string;
    item_name: string;
    price: number;
    quantity: number;
    currency: string;
}

export interface PurchaseEventParams {
    currency: string;
    value: number;
    transaction_id: string;
    items: Product[];
}

// utils/analytics.ts
declare global {
    interface Window {
        dataLayer: any[];
    }
}
export function pushEvent(eventName: string, params?: Record<string, any>) {
    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: eventName, ...params });
    }
}

export const analyticsEvents = {
    pageview: (url: string) => {
        pushEvent('page_view', {
            page_path: url,
        });
    },


    beginCheckout: (products: Product[]) => {
        const value = products.reduce(
            (sum, product) => sum + product.price * (product.quantity || 1),
            0
        );

        pushEvent('begin_checkout', {
            currency: 'CZK',
            value,
            items: products,
        });
    },

    purchase: (params: PurchaseEventParams) => {
        pushEvent('purchase', params);
    },
};
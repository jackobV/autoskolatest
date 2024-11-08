// components/AnalyticsClient.tsx
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import {analyticsEvents} from "@/app/utils/analytics";


export function AnalyticsClient() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname) {
            analyticsEvents.pageview(pathname);
            console.log(pathname);
        }
    }, [pathname, searchParams]);

    return null;
}
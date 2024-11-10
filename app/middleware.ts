import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import PocketBase from 'pocketbase';

// Define protected routes that require authentication
const protectedRoutes = ['/osobni_zona', '/osobni_zona/test', '/osobni_zona/kategorie'];

export async function middleware(request: NextRequest) {
    const pb = new PocketBase("https://pocketbase-production-5de6.up.railway.app");

    // Check if the current path is a protected route
    const isProtectedRoute = protectedRoutes.some(route =>
        request.nextUrl.pathname.startsWith(route)
    );

    if (isProtectedRoute) {
        // Check if user is authenticated
        if (!pb.authStore.isValid) {
            // Redirect to login page if not authenticated
            const loginUrl = new URL('/unauthorized', request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
    matcher: [
        '/osobni_zona/:path*',
    ]
}
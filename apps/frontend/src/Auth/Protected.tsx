import { ReactNode } from "react";
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from 'react-router-dom';

/**
 * A component that restricts access to signed out users
 * Redirects user to the login url if not signed in
 * 
 * @param children - The react component to show if the user is signed in
 * @returns - The protected component 
 */
export function ProtectedRoute({ children  }: { children : ReactNode }) {
    const { isLoaded, userId } = useAuth();

    if (!isLoaded) return <div>Loading...</div>;

    if (!userId) {
        return <Navigate to="/login"/>;
    }

    return children ;
}
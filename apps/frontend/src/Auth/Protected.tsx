import { ReactNode } from "react";
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from 'react-router-dom';


export function ProtectedRoute({ children  }: { children : ReactNode }) {
    const { isLoaded, userId } = useAuth();

    if (!isLoaded) return <div>Loading...</div>;

    if (!userId) {
        return <Navigate to="/login"/>;
    }

    return children ;
}
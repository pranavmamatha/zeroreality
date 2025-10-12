import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-lg sm:text-xl text-foreground/60 mb-6">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-block bg-neon-green text-black px-6 py-3 rounded-full font-medium hover:bg-neon-green/90 transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

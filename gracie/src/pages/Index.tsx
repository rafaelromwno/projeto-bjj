
import { useEffect, lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';

// Lazy load components that are further down the page
const Programs = lazy(() => import('@/components/Programs'));
const Instructors = lazy(() => import('@/components/Instructors'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Benefits = lazy(() => import('@/components/Benefits'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full py-12 flex justify-center items-center">
    <div className="animate-pulse flex space-x-4">
      <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
      <div className="space-y-3 flex-1">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
);

const Index = () => {
  // Smooth scrolling for section navigation from links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        event.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          history.pushState(null, '', target.hash); // Update hash in URL
        }
      }
    };

    // Check if there's a hash in URL when page loads
    if (window.location.hash) {
      // Small timeout to ensure DOM is fully loaded
      setTimeout(handleHashChange, 100);
    }

    // Add event listeners
    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Suspense fallback={<LoadingFallback />}>
        <Programs />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Instructors />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Benefits />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;

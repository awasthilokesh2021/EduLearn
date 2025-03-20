import React, { lazy, Suspense } from "react";

const Hero = lazy(() => import("./Hero"));
const Features = lazy(() => import("./Features"));
const SkillTrack = lazy(() => import("../Pages/SkillTrack"));
const Testimonials = lazy(() => import("./Testimonials"));

const Home = () => {
  return (
    <Suspense fallback={<h1 className="text-center text-blue-500">Loading...</h1>}>
      <Hero />
      <Features />
      <SkillTrack />
      <Testimonials />
    </Suspense>
  );
};

export default Home;
  
  // In the above code, we have used the  Suspense  component to wrap the components that are being loaded lazily. We have also used the  fallback  prop to display a loading message while the components are being loaded. 
  // Now, when you run the application, you will see the loading message while the components are being loaded. 
  // Conclusion 
  // In this article, we have learned how to use the  React.lazy()  function to load components lazily in a React application. We have also learned how to use the  Suspense  component to display a loading message while the components are being loaded. 
  // I hope this article was helpful to you. Please let me know your thoughts in the comments section. 
  // Happy coding! 
  // Peer Review Contributions by:  Lalithnarayan C
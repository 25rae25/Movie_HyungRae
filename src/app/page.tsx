import CarouselPosts from "@/components/CarouselPosts";
import Hero from "@/components/Hero";
import MoviePosts from "@/components/MoviePosts";


export default function HomePage() {
  return (
    <>
      <Hero />
      <MoviePosts />
      <CarouselPosts />
    </>
  );
}

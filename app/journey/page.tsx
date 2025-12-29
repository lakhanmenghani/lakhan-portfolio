import { CareerTimeline } from "@/components/career-timeline";

export default function JourneyPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">My Journey</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          From Program Management to Product Leadership.
        </p>
      </div>
      <div className="max-w-3xl mx-auto mt-16">
        <CareerTimeline />
      </div>
    </div>
  );
}

import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // Import your Card components
import { Button } from "@/components/ui/button"; // Import your Button component

const Page = () => {
  // Mock data for quizzes
  const mockQuizzes = [
    {
      title: "General Knowledge Quiz",
      description: "Test your general knowledge with this quiz!",
    },
    {
      title: "Science Quiz",
      description: "Explore the wonders of science with this quiz!",
    },
    {
      title: "History Quiz",
      description: "Challenge your knowledge of historical events!",
    },
    {
      title: "Mathematics Quiz",
      description: "Solve mathematical problems in this quiz!",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Available Quizzes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mockQuizzes.map((quiz, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader>
              <h2 className="text-lg font-semibold">{quiz.title}</h2>
            </CardHeader>
            <CardContent>
              <p>{quiz.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Start Quiz</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;

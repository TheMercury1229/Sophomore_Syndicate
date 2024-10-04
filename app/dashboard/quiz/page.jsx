"use client"; // Ensures this component is treated as a client component
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const page = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(""); // For displaying the generated quiz
  const [numQuestions, setNumQuestions] = useState(20); // Default number of questions
  const [difficulty, setDifficulty] = useState("easy"); // Default difficulty

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNumQuestionsChange = (e) => {
    setNumQuestions(e.target.value);
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    // Update prompt with dynamic inputs
    const prompt = `Generate ${numQuestions} Quiz MCQ Questions with ${difficulty} difficulty based on the PDF uploaded. Do not provide any text beautification on the generated text and don't give any introduction.`;

    formData.append("question", prompt);
    formData.append(
      "training_data",
      "You are a teacher; try to build the quiz questions for the students"
    );
    formData.append("files", file);
    formData.append("model", "aicon-v4-nano-160824");
    formData.append("stream_data", "true");

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer sk-e4621ce80de24c3882dcce763d387d25",
      },
      body: formData,
    };

    try {
      const response = await fetch(
        "https://api.worqhat.com/api/ai/content/v4",
        requestOptions
      );

      // Stream the response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let resultText = "";
      let contentArray = []; // Store the content values

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        // Decode the chunked response
        resultText = decoder.decode(value, { stream: true });

        // Try to parse the individual data objects
        const chunks = resultText.split("data: ").filter(Boolean);
        chunks.forEach((chunk) => {
          try {
            const jsonData = JSON.parse(chunk); // Parse the chunk as JSON
            if (jsonData.content) {
              contentArray.push(jsonData.content); // Push the 'content' value to the array
            }
          } catch (error) {
            console.error("Error parsing JSON chunk:", error);
          }
        });
      }

      setResponseData(contentArray.join("\n")); // Display all content as a string
    } catch (error) {
      console.error("Error during file upload or API request:", error);
      alert("There was an error generating the quiz. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(responseData);
    alert("Quiz questions copied to clipboard!");
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="file"
          onChange={handleFileChange}
          className="border rounded-md p-2"
        />
        <div className="flex items-center space-x-2">
          <Input
            type="number"
            value={numQuestions}
            onChange={handleNumQuestionsChange}
            min="1"
            placeholder="Number of Questions"
            className="flex-grow border rounded-md p-2"
          />
          <select
            value={difficulty}
            onChange={handleDifficultyChange}
            className="border rounded-md p-2"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Generating Quiz..." : "Upload PDF"}
        </Button>
      </form>

      {/* Display the result after streaming is complete */}
      {responseData && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Generated Quiz Questions:</h3>
          <pre className="bg-gray-100 text-gray-800 p-4 rounded-md whitespace-pre-wrap">
            {responseData}
          </pre>
          <Button onClick={handleCopy} className="mt-2 w-full">
            Copy to Clipboard
          </Button>
        </div>
      )}
    </div>
  );
};

export default page;

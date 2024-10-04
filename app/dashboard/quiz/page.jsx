"use client"; // Ensures this component is treated as a client component
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ClipboardIcon } from "lucide-react"; // Import Clipboard icon

const Page = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [questionArray, setQuestionArray] = useState([]);
  const [numQuestions, setNumQuestions] = useState(20);
  const [difficulty, setDifficulty] = useState("easy");

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
    const prompt = `Generate ${numQuestions} Quiz MCQ Questions with ${difficulty} difficulty based on the PDF uploaded. Do not provide any text beautification on the generated text and don't give any introduction.
    Put the questions in the format given below 
    Question 1 : The question? 
    a) ..
    b) ..
    c) ..
    d) ..`;

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

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let resultText = "";
      let content = "";
      let questions = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        resultText = decoder.decode(value, { stream: true });
        const chunks = resultText.split("data: ").filter(Boolean);
        chunks.forEach((chunk) => {
          try {
            const jsonData = JSON.parse(chunk);
            if (jsonData.content) {
              content += jsonData.content;
            }
          } catch (error) {
            console.error("Error parsing JSON chunk:", error);
          }
        });
      }

      const splitContent = content.split("\n\n");
      const questionArray = splitContent.map((question, index) => {
        const lines = question.split("\n");
        const questionString = lines[0].split(":")[1]?.trim();
        const options = {
          a: lines[1]?.trim() || "",
          b: lines[2]?.trim() || "",
          c: lines[3]?.trim() || "",
          d: lines[4]?.trim() || "",
        };
        return {
          question: questionString,
          options: options,
        };
      });

      setQuestionArray(questionArray);
      console.log(questionArray);
    } catch (error) {
      console.error("Error during file upload or API request:", error);
      alert("There was an error generating the quiz. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle copying all questions and options to clipboard
  const handleCopyAllToClipboard = () => {
    const allQuestions = questionArray
      .map((question, index) => {
        return `${index + 1}. ${question.question}\nA) ${
          question.options.a
        }\nB) ${question.options.b}\nC) ${question.options.c}\nD) ${
          question.options.d
        }`;
      })
      .join("\n\n");

    navigator.clipboard.writeText(allQuestions).then(() => {
      alert("All questions and options copied to clipboard!");
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <Input
          type="file"
          onChange={handleFileChange}
          className="border rounded-md p-2 w-full"
        />
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 w-full">
          <Input
            type="number"
            value={numQuestions}
            onChange={handleNumQuestionsChange}
            min="1"
            placeholder="Number of Questions"
            className="border rounded-md p-2 flex-grow"
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

      {/* Display the questions after streaming is complete */}
      {questionArray.length > 0 && (
        <div className="mt-6 w-full">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Generated Quiz Questions:
          </h3>
          <div className="space-y-6 h-96 overflow-y-auto border p-4 rounded-md">
            {questionArray.map((question, index) => (
              <div key={index} className=" p-4 rounded-md shadow">
                <p className="font-semibold">{`${index + 1}. ${
                  question.question
                }`}</p>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  {Object.entries(question.options).map(([key, value]) => (
                    <label key={key} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={key}
                      />
                      <span>{` ${value}`}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Button to copy all questions and options */}
          <Button onClick={handleCopyAllToClipboard} className="mt-4">
            <ClipboardIcon className="h-5 w-5 mr-2" />
            Copy All Questions
          </Button>
        </div>
      )}
    </div>
  );
};

export default Page;

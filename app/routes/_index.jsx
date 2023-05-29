import React, { useState } from "react";

import { Link } from "@remix-run/react";
const API_KEY = "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";
// const systemMessage = {
//   //  setting up perspective.
//   role: "system",
//   content:
//     "Explain things like you're talking to a software professional with 2 years of experience.",
// };
export const chatLog=[
  {
    id: 1,
    message: "John Doe iogvilgvigea;iogrvoegh;iovughqekvkijqebi;vugbeio;uh",
    result:
      "john@example.com ukedfcvwluegciwgeiucgwigcklwebjciklgjwebilcugwio;cbil;wjbilgucbik;wsegvbfck;io.gwbsdvai;.ckgbwasiko;.cvfgbiok;.wasGBEK;IOVFCGBAWEOS;IKDGFCVBOL;KWAGBSEODLCVFK;GBWDSOL;FKCVGOWSKL;EGF",
  },
  { id: 2, message: "Jane Smith", result: "jane@example.com" },
  { id: 1, message: "John Doe", result: "john@example.com" },
  { id: 2, message: "Jane Smith", result: "jane@example.com" },
  { id: 1, message: "John Doe", result: "john@example.com" },
  { id: 2, message: "Jane Smith", result: "jane@example.com" },
  { id: 1, message: "John Doe", result: "john@example.com" },
  { id: 2, message: "Jane Smith", result: "jane@example.com" },
  { id: 1, message: "John Doe", result: "john@example.com" },
  { id: 2, message: "Jane Smith", result: "jane@example.com" },
  { id: 1, message: "John Doe", result: "john@example.com" },
  { id: 2, message: "Jane Smith", result: "jane@example.com" },
  { id: 1, message: "John Doe", result: "john@example.com" },
  { id: 2, message: "Jane Smith", result: "jane@example.com" },
  { id: 1, message: "John Doe", result: "john@example.com" },
  { id: 2, message: "Jane Smith", result: "jane@example.com" },
  { id: 1, message: "John Doe", result: "john@example.com" },
  { id: 2, message: "Jane Smith", result: "jane@example.com" },
  { id: 1, message: "John Doe", result: "john@example.com" },
  { id: 2, message: "Jane Smith", result: "jane@example.com" },
  { id: 1, message: "John Doe", result: "john@example.com" },
  { id: 2, message: "Jane Smith", result: "jane@example.com" },
  { id: 1, message: "John Doe", result: "john@example.com" },
  { id: 2, message: "Jane Smith", result: "jane@example.com" },
  { id: 1, message: "John Doe", result: "john@example.com" },
  { id: 2, message: "Jane Smith", result: "jane@example.com" },
];
export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [inputData, setInputData] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  // const messages = [
  //   { id: 1, text: "Hello!", sender: "user" },
  //   { id: 2, text: "Hi there!", sender: "other" },
  //   { id: 3, text: "How are you?", sender: "user" },
  //   { id: 4, text: "I am doing great!", sender: "other" },
  //   { id: 1, text: "Hello!", sender: "user" },
  //   { id: 2, text: "Hi there!", sender: "other" },
  //   { id: 3, text: "How are you?", sender: "user" },
  //   { id: 4, text: "I am doing great!", sender: "other" },
  //   { id: 1, text: "Hello!", sender: "user" },
  //   { id: 2, text: "Hi there!", sender: "other" },
  //   { id: 3, text: "How are you?", sender: "user" },
  //   { id: 4, text: "I am doing great!", sender: "other" },
  //   { id: 1, text: "Hello!", sender: "user" },
  //   { id: 2, text: "Hi there!", sender: "other" },
  //   { id: 3, text: "How are you?", sender: "user" },
  //   { id: 4, text: "I am doing great!", sender: "other" },
  //   { id: 1, text: "Hello!", sender: "user" },
  //   { id: 2, text: "Hi there!", sender: "other" },
  //   { id: 3, text: "How are you?", sender: "user" },
  //   { id: 4, text: "I am doing great!", sender: "other" },
  //   { id: 1, text: "Hello!", sender: "user" },
  //   { id: 2, text: "Hi there!", sender: "other" },
  //   { id: 3, text: "How are you?", sender: "user" },
  //   { id: 4, text: "I am doing great!", sender: "other" },
  //   { id: 1, text: "Hello!", sender: "user" },
  //   { id: 2, text: "Hi there!", sender: "other" },
  //   { id: 3, text: "How are you?", sender: "user" },
  //   { id: 4, text: "I am doing great!", sender: "other" },
  // ];

  const handleSend = async () => {
    console.log("inputData",inputData)
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        message: inputData,
        sender: "user",
      },
    ]);
    setIsTyping(true);
   
   const apiRequestBody = {
    "model": "gpt-3.5-turbo",
  //   "usage":{
  //     "prompt_tokens":13,
  //     "completion_tokens":7,
  //     "total_tokens":20
  //  },
    "messages": [
      {"role": "user", "content": inputData}
    ]
  }

  await fetch("https://api.openai.com/v1/chat/completions", 
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(apiRequestBody)
  }).then((data) => {
    return data.json();
  }).then((data) => {
    console.log("datta in res>>>>",data);
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        message: data?.choices[0]?.message?.content,
        sender: "ChatGPT",
      },
    ]);

    chatLog.push({
      id:chatLog.length+1,
      message:inputData,
      result: data?.choices[0]?.message?.content,
    })
    setIsTyping(false);
    setInputData("")
  });


  };
  console.log("chatLog",chatLog)
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex justify-between bg-gray-200 py-4 sticky top-0 z-10">
          <Link
              to="/list1"
              className="m-2 px-4 py-2 rounded-lg bg-blue-500 text-white"
            >
              Scroll History
            </Link>
            <Link
              to="/pagination"
              className="m-2 px-4 py-2 rounded-lg bg-blue-500 text-white"
            >
              Table History
            </Link>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="flex-1 overflow-y-auto px-4 py-8">
            {messages.map((res) => (
              <div
                key={res?.id}
                className={`flex ${
                  res.sender === "user" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                <div
                  className={`rounded-lg px-4 py-2 ${
                    res.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {res.message}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-200 py-4 sticky bottom-0 z-10 p-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Type a message..."
              value={inputData}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
            <button
              className={`ml-2 px-4 py-2 rounded-lg ${
                inputData === ""
                  ? "bg-gray-400 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white"
              }`}
              onClick={handleSend}
              disabled={inputData === ""}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

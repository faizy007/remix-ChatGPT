import React from "react";
import RemixLazyLoad from "./remixLazyLoading";
import {chatLog} from "./_index"

const List1 = () => {
  // Dummy data for demonstration
  const data = [  {
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

  // Add more data as needed
]

  return (
    <div>
      <RemixLazyLoad data={chatLog} />
    </div>
  );
};

export default List1;

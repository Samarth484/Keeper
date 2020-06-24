import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";





function App() {
  return (
    <div>
      <Header />
      {/* <Note title="this is the title" content="this is the content" /> */}
      {notes.map(noteItem => <Note key={noteItem.key} title={noteItem.title} content={noteItem.content}></Note>)}
      <Footer />
    </div>
  );
}

export default App;

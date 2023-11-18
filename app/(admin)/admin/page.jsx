"use client";

import { useState, useRef } from "react";

export default function AdminPage() {
  const [isAddArticle, setIsAddArticle] = useState(false);
  const [isEditArticle, setIsEditArticle] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");

  const textareaRef = useRef();

  const toggleOperation = (operation) => {
    if (!isAddArticle && !isEditArticle) {
      if (operation === "add") setIsAddArticle(!isAddArticle);
      else if (operation === "edit") setIsEditArticle(!isEditArticle);
    } else {
      setIsAddArticle(!isAddArticle);
      setIsEditArticle(!isEditArticle);
    }
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleAddText = (textBeforeSelected, textAfterSelected) => {
    const textarea = textareaRef.current;

    const textBeforeCursor = textareaValue.substring(
      0,
      textarea.selectionStart,
    );
    const textSelected = textareaValue.substring(
      textarea.selectionStart,
      textarea.selectionEnd,
    );
    const textAfterCursor = textareaValue.substring(textarea.selectionEnd);

    setTextareaValue(
      textBeforeCursor +
        textBeforeSelected +
        textSelected +
        textAfterSelected +
        textAfterCursor,
    ); // pogrubienie **text** , link [text](link) , podtytuł ##text ,
  };

  return (
    <section>
      {!isAddArticle && !isEditArticle ? (
        <div className="mx-[auto] flex h-[100vh] flex-col items-center justify-center gap-10 bg-slate-100 text-2xl md:flex-row">
          <button
            className="h-[200px] w-[200px] cursor-pointer rounded-md bg-primary px-[54px] py-[10px] text-white transition duration-300 hover:scale-105 md:h-[400px] md:w-[400px]"
            onClick={() => toggleOperation("add")}
          >
            Dodaj artykuł
          </button>
          <button
            className="h-[200px] w-[200px] cursor-pointer rounded-md bg-primary px-[54px] py-[10px] text-white transition duration-300 hover:scale-105 md:h-[400px] md:w-[400px]"
            onClick={() => toggleOperation("edit")}
          >
            Edytuj artykuł
          </button>
        </div>
      ) : null}

      {isAddArticle ? (
        <form className="mx-[auto] my-5 flex w-3/4 flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-lg">Tytuł artykułu</label>
            <input
              className="rounded-md border-[0.5px] border-solid py-[3px] pl-[10px]"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg">Zdjęcie główne</label>
            <input id="image" type="file" name="image" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <button
                className="cursor-pointer rounded-md bg-primary px-[15px] py-[5px] text-white transition duration-300"
                type="button"
                onClick={() => handleAddText("**", "**")}
              >
                Pogrubienie
              </button>
              <button
                className="cursor-pointer rounded-md bg-primary px-[15px] py-[5px] text-white transition duration-300"
                type="button"
              >
                Link
              </button>
              <button
                className="cursor-pointer rounded-md bg-primary px-[15px] py-[5px] text-white transition duration-300"
                type="button"
              >
                Podtytuł
              </button>
              <button
                className="cursor-pointer rounded-md bg-primary px-[15px] py-[5px] text-white transition duration-300"
                type="button"
              >
                Zdjęcie
              </button>
              <button
                className="cursor-pointer rounded-md bg-primary px-[15px] py-[5px] text-white transition duration-300"
                type="button"
              >
                Kod
              </button>
            </div>
            <textarea
              className="h-[75vh] w-full rounded-md border-[0.5px] border-solid py-[3px] pl-[10px]"
              name="newArticle"
              id="newArticle"
              ref={textareaRef}
              value={textareaValue}
              onChange={handleTextareaChange}
            ></textarea>
          </div>
        </form>
      ) : null}
      <p>{isEditArticle ? "edit true" : ""}</p>
    </section>
  );
}

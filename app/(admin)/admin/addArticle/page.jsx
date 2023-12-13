"use client";

import { useState, useRef } from "react";

export default function AddArticlePage() {
    const [articleForm, setArticleForm] = useState({
        title: "",
        mainImage: null,
        content: "",
        authorId: "64627cba4d5c4755ddf3bbc4", // do obsłużenia jak będzie system logowania
        category: "",
    }); 

    const textareaRef = useRef();

    const handleAddMarkdownText = (
        textBeforeSelected,
        textAfterSelected,
        isImage = false,
    ) => {
        const textarea = textareaRef.current;
        let placeholderText = "Wprowadź tekst";
    
        if (isImage) placeholderText = "";
    
        const textBeforeCursor = articleForm.content.substring(
          0,
          textarea.selectionStart,
        );
        const textSelected = articleForm.content.substring(
          textarea.selectionStart,
          textarea.selectionEnd,
        );
        const textAfterCursor = articleForm.content.substring(
          textarea.selectionEnd,
        );
    
        setArticleForm({
          ...articleForm,
          content:
            textBeforeCursor +
            (textBeforeSelected ? textBeforeSelected : "") +
            (textSelected && !isImage ? textSelected : placeholderText) +
            (textAfterSelected ? textAfterSelected : "") +
            textAfterCursor,
        });
      };
    
      const handleSubmitArticleForm = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        for (const value in articleForm) {
          formData.append(value, articleForm[value]);
        }

        const fetchedResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/articles/`,
          {
            method: "POST",
            body: formData,
          },
          {
            cache: "no-store",
          },
        );

        const res = await fetchedResponse.json();
        console.log(res)

        setArticleForm({
          title: "",
          mainImage: null,
          content: "",
          category: "",
        });
      };

    return (
        <form
          className="mx-[auto] my-5 flex w-3/4 flex-col gap-8"
          id="articleForm"
          name="articleForm"
          onSubmit={handleSubmitArticleForm}
        >
          <div className="flex flex-col gap-2">
            <label className="text-lg">Tytuł artykułu</label>
            <input
              className="rounded-md border-[0.5px] border-solid py-[3px] pl-[10px]"
              id="title"
              name="title"
              type="text"
              value={articleForm.title}
              onChange={(e) =>
                setArticleForm({
                  ...articleForm,
                  title: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg">Kategoria</label>
            <div className="flex gap-1">
              <button
                className={`cursor-pointer rounded-md bg-primary ${
                  articleForm.category === "DIY"
                    ? "pointer-events-none bg-secondary"
                    : ""
                } px-[15px] py-[5px] text-white transition duration-200 hover:opacity-75`}
                type="button"
                onClick={() =>
                  setArticleForm({
                    ...articleForm,
                    category: "DIY",
                  })
                }
              >
                DIY
              </button>
              <button
                className={`cursor-pointer rounded-md bg-primary ${
                  articleForm.category === "Music"
                    ? "pointer-events-none bg-secondary"
                    : ""
                } px-[15px] py-[5px] text-white transition duration-200 hover:opacity-75`}
                type="button"
                onClick={() =>
                  setArticleForm({
                    ...articleForm,
                    category: "Music",
                  })
                }
              >
                Muzyka
              </button>
              <button
                className={`cursor-pointer rounded-md bg-primary ${
                  articleForm.category === "Programming"
                    ? "pointer-events-none bg-secondary"
                    : ""
                } px-[15px] py-[5px] text-white transition duration-200 hover:opacity-75`}
                type="button"
                onClick={() =>
                  setArticleForm({
                    ...articleForm,
                    category: "Programming",
                  })
                }
              >
                Programowanie
              </button>
              <button
                className={`cursor-pointer rounded-md bg-primary ${
                  articleForm.category === "Projects"
                    ? "pointer-events-none bg-secondary"
                    : ""
                } px-[15px] py-[5px] text-white transition duration-200 hover:opacity-75`}
                type="button"
                onClick={() =>
                  setArticleForm({
                    ...articleForm,
                    category: "Projects",
                  })
                }
              >
                Projekty
              </button>
              <button
                className={`cursor-pointer rounded-md bg-primary ${
                  articleForm.category === "SelfDevelopment"
                    ? "pointer-events-none bg-secondary"
                    : ""
                } px-[15px] py-[5px] text-white transition duration-200 hover:opacity-75`}
                type="button"
                onClick={() =>
                  setArticleForm({
                    ...articleForm,
                    category: "SelfDevelopment",
                  })
                }
              >
                Rozwój osobisty
              </button>
              <button
                className={`cursor-pointer rounded-md bg-primary ${
                  articleForm.category === "Sports"
                    ? "pointer-events-none bg-secondary"
                    : ""
                } px-[15px] py-[5px] text-white transition duration-200 hover:opacity-75`}
                type="button"
                onClick={() =>
                  setArticleForm({
                    ...articleForm,
                    category: "Sports",
                  })
                }
              >
                Sport
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg">Zdjęcie główne</label>
            <input id="image" 
              type="file" 
              name="image" 
              onChange={(e) => setArticleForm({
                ...articleForm,
                mainImage: e.target.files[0]
              })}/>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <div className="flex gap-1">
                <button
                  className="cursor-pointer rounded-md bg-primary px-[15px] py-[5px] text-white transition duration-200 hover:opacity-75"
                  type="button"
                  onClick={() => handleAddMarkdownText("**", "**")}
                >
                  Pogrubienie
                </button>
                <button
                  className="cursor-pointer rounded-md bg-primary px-[15px] py-[5px] text-white transition duration-200 hover:opacity-75"
                  type="button"
                  onClick={() =>
                    handleAddMarkdownText("[", "](Wprowadź adres)")
                  }
                >
                  Link
                </button>
                <button
                  className="cursor-pointer rounded-md bg-primary px-[15px] py-[5px] text-white transition duration-200 hover:opacity-75"
                  type="button"
                  onClick={() => handleAddMarkdownText("##")}
                >
                  Podtytuł
                </button>
                <button
                  className="cursor-pointer rounded-md bg-primary px-[15px] py-[5px] text-white transition duration-200 hover:opacity-75"
                  type="button"
                  onClick={() =>
                    handleAddMarkdownText(
                      "![Wprowadź ALT](Wprowadź URL)",
                      "",
                      true,
                    )
                  }
                >
                  Zdjęcie
                </button>
                <button
                  className="cursor-pointer rounded-md bg-primary px-[15px] py-[5px] text-white transition duration-200 hover:opacity-75"
                  type="button"
                  onClick={() => handleAddMarkdownText("```", "```")}
                >
                  Kod
                </button>
              </div>
              <button
                className="cursor-pointer rounded-md bg-secondary px-[15px] py-[5px] text-white transition duration-200 hover:opacity-75"
                type="submit"
                form="articleForm"
              >
                Dodaj artykuł
              </button>
            </div>
            <textarea
              className="h-[75vh] w-full rounded-md border-[0.5px] border-solid py-[3px] pl-[10px]"
              id="content"
              name="content"
              ref={textareaRef}
              value={articleForm.content}
              onChange={(e) =>
                setArticleForm({
                  ...articleForm,
                  content: e.target.value,
                })
              }
            ></textarea>
          </div>
        </form>
    )
}
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentForm = ({ articleId, authorEmail, authorName, authorAvatar }) => {
  const router = useRouter();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [commentForm, setCommentForm] = useState({
    email: authorEmail,
    name: authorName,
    avatar: authorAvatar,
    content: "",
  });
  const [response, setResponse] = useState({
    message: "",
    color: "",
    location: {
      email: "",
      name: "",
      content: "",
    },
  });

  const handleSubmitCommentForm = async (e) => {
    e.preventDefault();

    setResponse({
      message: "Publikowanie komentarza...",
      color: "black",
      location: {
        email: "",
        name: "",
        content: "",
      },
    });

    const json = {
      commentForm,
      articleId,
    };

    const fetchedResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(json),
      },
      {
        cache: "no-store",
      },
    );

    const res = await fetchedResponse.json();

    setCommentForm({
      ...commentForm,
      content: "",
    });

    if (res.error === 400) {
      const searchErrorMessage = (label) => {
        let message;
        res.locations.forEach((element) => {
          if (element.label === label) message = element.message;
        });

        return message;
      };

      setResponse({
        message: "Nie udało się opublikować komentarza",
        color: "error",
        location: {
          email: searchErrorMessage("email"),
          name: searchErrorMessage("name"),
          content: searchErrorMessage("content"),
        },
      });
    } else if (res.error && res.error !== 400)
      setResponse({
        message: "Nie udało się opublikować komentarza",
        color: "error",
        location: {
          email: "",
          name: "",
          content: "",
        },
      });
    else {
      setResponse({
        message: "Opublikowano komentarz!",
        color: "success",
        location: {
          email: "",
          name: "",
          content: "",
        },
      });
      router.refresh();
    }
  };

  return (
    <div className="relative py-[20px]">
      <div
        className={`flex justify-center md:justify-start ${
          isFormVisible ? "absolute" : ""
        }`}
      >
        <button
          className={`w-[150px] transform cursor-pointer rounded-md bg-primary px-[37px] py-[10px] text-white transition duration-300 hover:opacity-75 ${
            isFormVisible ? "pointer-events-none scale-0" : ""
          }`}
          onClick={() => {
            setIsFormVisible(true);
          }}
        >
          Skomentuj
        </button>
      </div>

      <form
        id="commentForm"
        name="commentForm"
        className={`flex transform flex-col rounded-md bg-black/5 px-[10px] pb-[20px] transition-transform ${
          isFormVisible ? "static scale-100" : "absolute scale-0"
        }`}
        onSubmit={handleSubmitCommentForm}
      >
        <div className="h-[20px]">
          <p className={`text-sm text-${response.color} text-center font-bold`}>
            {response.message}
          </p>
        </div>
        <textarea
          name="content"
          id="content"
          className={`mb-[20px] rounded-md border-[0.5px] border-solid py-[3px] pl-[10px] ${
            response.location.content ? "border-error" : "border-black/25"
          }`}
          value={commentForm.content}
          placeholder="Treść komentarza"
          rows={6}
          required
          onChange={(e) =>
            setCommentForm({
              ...commentForm,
              content: e.target.value,
            })
          }
        ></textarea>
        <button
          className="mx-auto w-[150px] cursor-pointer rounded-md bg-primary px-[40px] py-[10px] text-white"
          type="submit"
          form="commentForm"
        >
          Opublikuj
        </button>
      </form>
    </div>
  );
};

export default CommentForm;

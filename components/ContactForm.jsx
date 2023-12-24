"use client";

import { useState } from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    email: "",
    name: "",
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

  const handleSubmitContactForm = async (e) => {
    console.log('w fukncji')
    e.preventDefault();

    setResponse({
      message: "Wysyłanie wiadomości...",
      color: "black",
      location: {
        email: "",
        name: "",
        content: "",
      },
    });

    const json = contactForm;

    const fetchedResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/contact`,
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

    setContactForm({
      email: "",
      name: "",
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
        message: "Nie udało się wysłać wiadomości",
        color: "error",
        location: {
          email: searchErrorMessage("email"),
          name: searchErrorMessage("name"),
          content: searchErrorMessage("content"),
        },
      });
    } else if (res.error && res.error !== 400)
      setResponse({
        message: "Nie udało się wysłać wiadomości",
        color: "error",
        location: {
          email: "",
          name: "",
          content: "",
        },
      });
    else
      setResponse({
        message: "Wysłano wiadomość!",
        color: "success",
        location: {
          email: "",
          name: "",
          content: "",
        },
      });
  };

  return (
    <section>
      <h2 className="mx-[20px] mb-[62px] mt-[62px] text-center text-lg md:mt-0">
        Napisz do mnie!
      </h2>
      <form
        id="contactForm"
        name="contactForm"
        className="relative flex flex-col rounded-md bg-black/5 px-[10px] pb-[15px] pt-[40px]"
        onSubmit={handleSubmitContactForm}
      >
        <div className="absolute left-[50%] top-0 h-[64px] w-[64px] translate-x-[-50%] translate-y-[-50%] rounded-[50%] bg-primary">
          <HiOutlineEnvelope
            style={{
              width: "32px",
              height: "32px",
              color: "white",
              position: "absolute",
              top: "0",
              left: "0",
              transform: "translate(50%, 50%)",
            }}
          />
        </div>
        <div className="h-[20px]">
          <p className={`text-sm text-${response.color} text-center font-bold`}>
            {response.message}
          </p>
        </div>
        <input
          className={`rounded-md border-[0.5px] border-solid py-[3px] pl-[10px] ${
            response.location.email ? "border-error" : "border-black/25"
          }`}
          type="email"
          name="email"
          id="email"
          value={contactForm.email}
          placeholder="E-mail"
          autoComplete="off"
          required
          onChange={(e) =>
            setContactForm({
              ...contactForm,
              email: e.target.value,
            })
          }
        />
        <span
          className={`h-[15px] text-xs text-${response.color} text-right font-bold`}
        >
          {response.location.email}
        </span>
        <input
          className={`rounded-md border-[0.5px] border-solid py-[3px] pl-[10px] ${
            response.location.name ? "border-error" : "border-black/25"
          }`}
          type="text"
          name="name"
          id="name"
          value={contactForm.name}
          placeholder="Imię"
          autoComplete="off"
          required
          onChange={(e) =>
            setContactForm({
              ...contactForm,
              name: e.target.value,
            })
          }
        />
        <span
          className={`h-[15px] text-xs text-${response.color} text-right font-bold`}
        >
          {response.location.name}
        </span>
        <textarea
          className={`rounded-md border-[0.5px] border-solid py-[3px] pl-[10px] ${
            response.location.content ? "border-error" : "border-black/25"
          }`}
          name="content"
          id="content"
          value={contactForm.content}
          rows={6}
          placeholder="Treść wiadomości"
          autoComplete="off"
          required
          onChange={(e) =>
            setContactForm({
              ...contactForm,
              content: e.target.value,
            })
          }
        />
        <span
          className={`mb-[12px] h-[15px] text-xs text-${response.color} text-right font-bold`}
        >
          {response.location.content}
        </span>
        <button
          className="mx-auto w-[150px] cursor-pointer rounded-md bg-primary px-[54px] py-[10px] text-white transition duration-300 hover:opacity-75"
          type="submit"
          form="contactForm"
        >
          Wyślij
        </button>
      </form>
    </section>
  );
};

export default ContactForm;

import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

async function onSubmit(data) {
  console.log("Form data:", data);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.textarea,
      }),
    });

    // ✅ Show actual server response for debugging
    const text = await response.text();
    console.log("Server response:", text);

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      throw new Error("Server returned invalid response: " + text);
    }

    if (result.success) {
      alert("Message sent successfully! ✅");
      reset();
    } else {
      alert("Error: " + result.message);
    }

  } catch (error) {
    console.error("Full error:", error);
    alert("Server error: " + error.message);
  }
}

  return (
    <>
      <div
        className="form-all md:py-30 py-15 md:px-20 px-5 md:flex justify-between"
        id="contact-item"
      >
        <div className="form-left md:w-1/2 w-full">
          <h1 className="text-black md:text-7xl text-4xl font-semibold">
            Ready to make a lasting impact with your Hoarding?
          </h1>
          <p className="text-black py-5 md:text-[20px] text-[17px]">
            Let's begin creating impactful outdoor advertising campaigns
            together
          </p>
        </div>
        <div className="form-right md:w-1/2 w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pb-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black/10 py-2 px-2 outline-none"
                {...register("name", {
                  required: "Name is required",
                  minLength: { value: 3, message: "Min 3 characters" },
                })}
              />
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div className="pb-3">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black/10 py-2 px-2 outline-none"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div className="pb-3">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-black/10 py-2 px-2 outline-none"
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: { value: 10, message: "Min 10 digits" },
                })}
              />
              {errors.phone && (
                <p className="text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div className="pb-3">
              <textarea
                rows="4"
                placeholder="Tell your thoughts"
                className="w-full bg-black/10 py-2 px-2 outline-none"
                {...register("textarea", {
                  required: "Message is required",
                  minLength: { value: 5, message: "Min 5 characters" },
                })}
              ></textarea>
              {errors.textarea && (
                <p className="text-red-600">{errors.textarea.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#000000] text-white py-2 px-2 outline-none hover:cursor-pointer hover:bg-black/80 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

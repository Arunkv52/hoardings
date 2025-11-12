import React, { useState } from "react";
import { useForm } from "react-hook-form";


const Contact = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()



  function onSubmit(data) {

    console.log(data)
    reset(); // ✅ clears all input fields

  }

  return (
    <>
      <div className="form-all md:py-30 py-15 md:px-20 px-5 md:flex justify-between">
        <div className="form-left md:w-1/2 w-full">
          <h1 className="text-black md:text-7xl text-4xl font-semibold">
            Ready to make a lasting impact with your Hoarding?
          </h1>
          <p className="text-black py-5 md:text-[20px] text-[17px]">
            Let's begin creating impactful outdoor advertising campaigns together
          </p>
          
        </div>
        <div className="form-right md:w-1/2 w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pb-3">
              <label htmlFor="name"></label>
              <input
                type="text"
                name="name"
                id="input-box"
                placeholder="Your Name"
                className="w-full bg-black/10 py-2 px-2 outline-none"
                {...register("name", {
                  required: { value: true, message: "Username is must" },
                  maxLength: { value: 20, message: "Max 20 letters only allowed" },
                  minLength: { value: 5, message: "Min 5 letters only allowed" },

                })}
              />
              {/* errors will return when field validation fails  */}
              {errors.name && <p className="text-red-600">{errors.name.message}</p>}
            </div>
            <div className="pb-3">
              <input
                type="email"
                name="email"
                id=""
                placeholder="Email Address"
                className="w-full bg-black/10 py-2 px-2 outline-none"
                {...register("email", {
                  required: { value: true, message: "Email is must" },
                  maxLength: { value: 20, message: "Max 20 letters only allowed" },
                  minLength: { value: 5, message: "Min 5 letters only allowed" },

                })}
              />
              {/* errors will return when field validation fails  */}
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>
            <div className="pb-3">
              <input
                type="tel"
                name="phone"
                id=""
                placeholder="Phone Number"
                className="w-full bg-black/10 py-2 px-2 outline-none"
        
                {...register("phone", {
                  required: { value: true, message: "Phone number is must" },
                  maxLength: { value: 20, message: "Max 20 letters only allowed" },
                  minLength: { value: 5, message: "Min 5 letters only allowed" },

                })}
              />
              {/* errors will return when field validation fails  */}
              {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}
            </div>
            <div className="pb-3">
              <textarea
                name="textarea"
                id=""
                rows="4"
                placeholder="Tell your thoughts"
                className="w-full bg-black/10 py-2 px-2 outline-none"
                {...register("textarea", {
                  required: { value: true, message: "Comments is must" },
                  maxLength: { value: 20, message: "Max 20 letters only allowed" },
                  minLength: { value: 5, message: "Min 5 letters only allowed" },

                })}
              ></textarea>
              {/* errors will return when field validation fails  */}
              {errors.textarea && <p className="text-red-600">{errors.textarea.message}</p>}
            </div>

            <button type="submit" className="w-full bg-[#000000] text-white py-2 px-2 outline-none hover:cursor-pointer hover:bg-black/80">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

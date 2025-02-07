import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";
import ContactUsImg from "../../assets/contactImg.jpg";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted: ", data);
    toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 3000,
    });
    reset(); // Reset the form fields
  };

  return (
    <>
      <section
        className=" w-full !p-5"
        style={{
          backgroundImage: `url(${ContactUsImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <h2 className=" text-lg md:text-3xl lg:text-4xl font-bold !p-2 shadow-md shadow-orange-500 inline-block !pb- text-white">
            Who We Are?
          </h2>
        </div>
        <div className="!py-8">
          <ToastContainer />
          <div className="">
            <div className="w-full flex justify-center order-2 lg:order-1 !p-4">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md bg-black rounded-lg shadow-lg !p-6 !space-y-4"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-orange-500"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", {
                      required: "Name is required.",
                      minLength: {
                        value: 6,
                        message: "Name must be at least 6 characters.",
                      },
                      maxLength: {
                        value: 40,
                        message: "Name cannot exceed 40 characters.",
                      },
                    })}
                    placeholder="Enter your full name"
                    className={`!mt-1 block w-full !px-4 !py-2 border ${
                      errors.name ? "border-red-500" : "border-orange-500"
                    } rounded-lg bg-transparent
            outline-none text-white shadow-sm focus:ring-orange-500 focus:border-orange-500`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm !mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-orange-500"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Enter a valid email address.",
                      },
                    })}
                    placeholder="Enter your email"
                    className={`!mt-1 block w-full !px-4 !py-2 border ${
                      errors.email ? "border-red-500" : "border-orange-500"
                    } rounded-lg text-white outline-none bg-transparent shadow-sm 
             focus:ring-orange-500 focus:border-orange-500`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm !mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-orange-500"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register("subject", {
                      required: "Subject is required.",
                    })}
                    placeholder="Enter the subject"
                    className={`!mt-1 block w-full !px-4 !py-2 border ${
                      errors.subject ? "border-red-500" : "border-orange-500"
                    } rounded-lg text-white outline-none bg-transparent shadow-sm focus:ring-orange-500 focus:border-orange-500`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm !mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-orange-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message", {
                      required: "Message is required.",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters long.",
                      },
                    })}
                    rows="4"
                    placeholder="Enter your message"
                    className={`!mt-1 block w-full !px-4 !py-2 border ${
                      errors.message ? "border-red-500" : "border-orange-500"
                    } rounded-lg resize-none text-white outline-none bg-transparent shadow-sm focus:ring-orange-500 focus:border-orange-500`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm !mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <Button
                    type="submit"
                    className="w-full  !text-orange-500
            !font-bold !tracking-wider !mt-2 !py-2 !rounded-full shadow 
            !border-orange-500 focus:!border-orange-500 focus:!ring-orange-500"
                    variant="outlined"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>

            <div className="">
              <p className="!my-6 text-lg text-gray-300 text-center">
                Have questions or need help? We're here to assist! Fill out the
                form, and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsForm;

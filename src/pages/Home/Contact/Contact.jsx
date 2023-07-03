import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef(null);
  const [state, handleSubmit] = useForm("xeqbjbjg");
  if (state.succeeded) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Message Send successfully",
    });
    if (formRef.current) {
      formRef.current.reset();
    }
  }
  return (
    <>
      <section
        className="my-16 lg:mt-32 min-h-[80vh] px-4 lg:px-0"
        id="contact"
      >
        <h1 className="text-3xl text-center font-bold text-primary uppercase mb-20">
          Contact Me
        </h1>

        <form
          className="card-body border-2 border-primary lg:w-2/3 mx-auto rounded-lg pt-10 pb-20"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered text-gray-700 font-semibold"
              name="name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="input input-bordered text-gray-700 font-semibold"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Message</span>
            </label>
            <textarea
              className="textarea textarea-primary h-32 text-gray-700 font-semibold"
              placeholder="Message"
              required
              name="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="form-control mt-6">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={state.submitting}
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;

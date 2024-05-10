import React from "react";
import { contactDetails } from "../Details";
import { styles } from "../styles";
import contact from "../assets/contact.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Contact() {
  let navigate = useNavigate();
  let validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "minimum length is 3 char")
      .max(30, "maximum lenght is 30 char"),
    email: Yup.string()
      .required("Email is required")
      .email("Enter avalid email"),
    message: Yup.string()
      .required("message is required")
      .min(5, "minimum length is 5 char"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
  });

  async function sendMessage(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "44311697-cde5-45cc-b016-f5125c31476b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      navigate("/delivery");
    }
  }

  return (
    <div className="bg-tertiary h-home cotainer mx-auto max-width">
      <section>
        <div className="heading pb-5">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
        </div>

        <main className={`flex md:flex-row flex-col-reverse gap-10 `}>
          <div className="flex-[0.50] bg-gray-700 p-6 rounded-2xl shadow-lg shadow-primary">
            <form className="mt-2 flex flex-col gap-5" onSubmit={sendMessage}>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="What's your good name?"
                  className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.errors.name && formik.touched.name ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.name}
                  </span>
                ) : (
                  ""
                )}
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="What's your web address?"
                  className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.email}
                  </span>
                ) : (
                  ""
                )}
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="What you want to say?"
                  className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                />
                {formik.errors.message && formik.touched.message ? (
                  <span className="text-red-400 text-sm">
                    *{formik.errors.message}*
                  </span>
                ) : (
                  ""
                )}
              </label>

              <button
                disabled={!(formik.isValid && formik.dirty)}
                type="submit"
                className={styles.contactButton}
              >
                Submit
              </button>
            </form>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 0.8,
            }}
            className="flex-[0.50] "
          >
            <img src={contact} alt="contact me" loading="lazy" />
          </motion.div>
        </main>
      </section>
    </div>
  );
}

export default Contact;

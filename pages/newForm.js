/* eslint-disable react-hooks/rules-of-hooks */
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validation } from "../data/validation";
import Header from "../components/Header";
import Button from "../components/Button";
import { useRouter } from "next/router";

const newForm = () => {
  const router = useRouter();
  const submitHandle = (values) => {
    console.log("values", values);
    localStorage.setItem("values", JSON.stringify(values));
    router.push("/document");
  };

  return (
    <div className="">
      <Formik
        validationSchema={validation}
        initialValues={{
          step: 1,
          lastStep: 6,

          name: "",
          surname: "",
          age: "",

          email: "",
          phone: "",
          address: "",

          education: "",

          experience: "",

          skills: "",

          others: "",
        }}
        onSubmit={submitHandle}
      >
        {({ values, setFieldValue, isValid, dirty }) => {
          const nextHandle = () => {
            setFieldValue("step", values.step + 1);
          };
          const prevHandle = () => {
            setFieldValue("step", values.step - 1);
          };
          const stepHandle = (step) => {
            setFieldValue("step", step);
          };

          return (
            <Form className="w-[500px] mx-auto mt-20 py-4">
              <Header values={values} stepHandle={stepHandle} />

              {values.step === 1 && (
                <div className="grid gap-2.5 mt-5">
                  <div>
                    <Field name="name" className="input" placeholder="Name" />
                    <ErrorMessage
                      name="name"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div>
                    <Field
                      name="surname"
                      className="input"
                      placeholder="Surname"
                    />
                    <ErrorMessage
                      name="surname"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div>
                    <Field name="age" className="input" placeholder="Age" />
                    <ErrorMessage
                      name="age"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                </div>
              )}
              {values.step === 2 && (
                <div className="grid gap-2.5 mt-5">
                  <div>
                    <Field name="email" className="input" placeholder="Email" />
                    <ErrorMessage
                      name="email"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div>
                    <Field name="phone" className="input" placeholder="Phone" />
                    <ErrorMessage
                      name="phone"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div>
                    <Field
                      name="address"
                      className="input"
                      placeholder="Address"
                    />
                    <ErrorMessage
                      name="address"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                </div>
              )}
              {values.step === 3 && (
                <div className="grid gap-2.5 mt-5">
                  <div>
                    <Field
                      name="education"
                      component="textarea"
                      className="textarea"
                      placeholder="Education"
                    />
                    <ErrorMessage
                      name="education"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                </div>
              )}
              {values.step === 4 && (
                <div className="grid gap-2.5 mt-5">
                  <div>
                    <Field
                      name="experience"
                      component="textarea"
                      className="textarea"
                      placeholder="Experience"
                    />
                    <ErrorMessage
                      name="experience"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                </div>
              )}
              {values.step === 5 && (
                <div className="grid gap-2.5 mt-5">
                  <div>
                    <Field
                      name="skills"
                      component="textarea"
                      className="textarea"
                      placeholder="Skills"
                    />
                    <ErrorMessage
                      name="skills"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                </div>
              )}
              {values.step === 6 && (
                <div className="grid gap-2.5 mt-5">
                  <div>
                    <Field
                      name="others"
                      component="textarea"
                      className="textarea"
                      placeholder="Eklemek istediginiz diger bilgiler"
                    />
                    <ErrorMessage
                      name="others"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                </div>
              )}
              <Button
                values={values}
                prevHandle={prevHandle}
                nextHandle={nextHandle}
                submitHandle={submitHandle}
                isValid={isValid}
                dirty={dirty}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default newForm;

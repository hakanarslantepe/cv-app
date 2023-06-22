import * as Yup from "yup";

export const validation = Yup.object().shape({
  name: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required(),
  }),
  surname: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required(),
  }),
  age: Yup.number().when("step", {
    is: 1,
    then: (schema) => schema.required(),
  }),
  email: Yup.string().when("step", {
    is: 2,
    then: (schema) => schema.required(),
  }),
  phone: Yup.number().when("step", {
    is: 2,
    then: (schema) => schema.required(),
  }),
  address: Yup.string().when("step", {
    is: 2,
    then: (schema) => schema.required(),
  }),
  education: Yup.string().when("step", {
    is: 3,
    then: (schema) => schema.required(),
  }),
  experience: Yup.string().when("step", {
    is: 4,
    then: (schema) => schema,
  }),

  skills: Yup.string().when("step", {
    is: 5,
    then: (schema) => schema.required(),
  }),
  others: Yup.string().when("step", {
    is: 6,
    then: (schema) => schema.required(),
  }),
});

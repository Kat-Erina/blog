import * as Yup from "yup";

const validationScheme = Yup.object().shape({
  email: Yup.string()
    .trim()
    .matches(/@redberry\.ge$/, {
      message: "ელ-ფოსტა უნდა მთავრდებოდეს @redberry.ge-ით",
    })
    .required(),
});

export default validationScheme;

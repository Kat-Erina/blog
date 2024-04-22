import * as Yup from "yup";

const lettersPattern = /^[ა-ჰ\s]+$/;
const twoWords = /\s+/;
const lettersAmountPattern = /^.*(?:[ა-ჰ]\s*){4,}.*$/;

const titlePattern = /^.*(?:[^ \s]\s*){2,}.*$/;

const validationScheme = Yup.object().shape({
  author: Yup.string()
    .trim()
    .required()
    .matches(twoWords, { message: "At least 2 Words" })
    .matches(lettersPattern, { message: "Only Georgian letters" })
    .matches(lettersAmountPattern, { message: "Minimum 4 letters " }),
  title: Yup.string().trim().required().matches(titlePattern),
  description:  Yup.string().trim().required().matches(titlePattern),
  email:Yup.string().trim().required()
});

export default validationScheme;

import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Zorunlu alan"),
  age: yup
    .number()
    .positive("Yaş negatif olamaz")
    .integer("Lütfen yaşınızı tam sayı giriniz")
    .required("Zorunlu alan"),
  password: yup
    .string()
    .min(5, "Lütfen minimum 5 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az bir büyük harf, 1 küçük harf ve 1 sayı giriniz.",
    })
    .required("Zorunlu alan"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Zorunlu alan "),
});

export const advancedSchema = yup.object().shape({
  username: yup.string().min(3, "En az 3 karakter").required("Zorunlu alan"),
  university: yup
    .string()
    .oneOf(["bogazici", "gsu", "itü", "odtü"], "Lütfen üniversitenizi seçiniz.")
    .required("Zorunlu alan"),
  isAccepted: yup.boolean().oneOf([true], "Kabul ediniz."),
});

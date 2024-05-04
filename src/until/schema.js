import * as Yup from "yup";
const validateRef = (value) => {
  if (value === null || value === undefined || value === "") {
    return true;
  }
  return value.length >= 3 && value.length <= 100;
};

export const SCHEMA_REGISTER_DASHBOARD = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(3, "First name must be at least 3 characters")
    .max(100, "First name cannot exceed 100 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(3, "Last name must be at least 3 characters")
    .max(100, "Last name cannot exceed 100 characters"),
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(100, "Username cannot exceed 100 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .max(250, "Email cannot exceed 250 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  ref: Yup.string().test({
    name: "ref-validation",
    test: validateRef,
    message:
      "Referral must be at least 3 characters and cannot exceed 100 characters",
  }),
});

export const SCHEMA_REGISTER = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(8, "Username must be at least 8 characters")
    .max(100, "Username must not exceed 100 characters")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Username can only contain letters and numbers, no special characters"
    )
    .matches(/^\S*$/, "Username must not contain whitespace"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .max(250, "Email must not exceed 250 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(24, "Password must not exceed 24 characters"),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  ref: Yup.string().test({
    name: "ref-validation",
    test: validateRef,
    message: "Referrer must be between 3 and 100 characters",
  }),
});

export const SCHEMA_VERIFY = Yup.object().shape({
  code: Yup.string()
    .required("OTP is required")
    .min(3, "OTP must be at least 3 characters")
    .max(10, "OTP cannot exceed 10 characters"),
});

export const SCHEMA_VERIFY_EMAIL = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .max(250, "Email cannot exceed 250 characters"),
});

export const SCHEMA_LOGIN = Yup.object().shape({
  usernameOrEmail: Yup.string()
    .required("Username or email is required")
    .min(6, "Username or email must be at least 6 characters")
    .max(250, "Username or email cannot exceed 250 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export const SCHEMA_FORGOT = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .max(250, "Email cannot exceed 250 characters"),
});

export const SCHEMA_RESET_PASS = Yup.object().shape({
  code: Yup.string()
    .required("Code is required")
    .min(3, "Code must be at least 3 characters")
    .max(100, "Code cannot exceed 100 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password is not valid")
    .required("Confirm password is required"),
});

export const SCHEMA_UPDATE_ADDRESS = Yup.object().shape({
  provinceId: Yup.object()
    .shape({
      id: Yup.string().required("Province is required"),
      name: Yup.string().required("Province is required"),
    })
    .required("Province is required"),
  districtId: Yup.object()
    .shape({
      id: Yup.string().required("District is required"),
      name: Yup.string().required("District is required"),
    })
    .required("District is required"),
  wardId: Yup.object()
    .shape({
      id: Yup.string().required("Ward is required"),
      name: Yup.string().required("Ward is required"),
    })
    .required("Ward is required"),
  street: Yup.string()
    .required("Street address is required")
    .max(1000, "Street address cannot exceed 1000 characters"),
});

export const SCHEMA_KYC = Yup.object().shape({
  phoneCode: Yup.object()
    .shape({
      geonameId: Yup.string().required("Phone Code is required"),
      phoneCode: Yup.string().required("Phone Code is required"),
    })
    .required("Country is required"),
  countryId: Yup.object()
    .shape({
      geonameId: Yup.string().required("Country is required"),
      name: Yup.string().required("Country is required"),
    })
    .required("Country is required"),
  provinceId: Yup.object()
    .shape({
      geonameId: Yup.string().required("Province is required"),
      name: Yup.string().required("Province is required"),
    })
    .required("Province is required"),
  districtId: Yup.object()
    .shape({
      geonameId: Yup.string().required("District is required"),
      name: Yup.string().required("District is required"),
    })
    .required("District is required"),
  wardId: Yup.object()
    .shape({
      geonameId: Yup.string().required("Ward is required"),
      name: Yup.string().required("Ward is required"),
    })
    .required("Ward is required"),
  street: Yup.string()
    .required("Street address is required")
    .max(1000, "Street address cannot exceed 1000 characters"),
  fullname: Yup.string().required("Full name is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^0\d{9}$/, "Invalid phone number. Please check again."),
  cardId: Yup.string().required("ID card number is required"),
  dayOfBirth: Yup.date()
    .transform((originalValue, originalObject) =>
      originalValue === null ? undefined : originalValue
    )
    .nullable()
    .required("Date of birth is required")
    .typeError("Date of birth is not in correct format.")
    .test(
      "valid-date",
      "Date of birth is not in correct format.",
      function (value) {
        if (value === undefined || !isNaN(Date.parse(value))) {
          return true;
        }
        return false;
      }
    ),
  gender: Yup.string().required("Gender is required"),
  frontCard: Yup.string().required("Front ID card is required"),
  backCard: Yup.string().required("Back ID card is required"),
  selfie: Yup.string().required("Selfie with ID card is required"),
});

export const SCHEMA_CHANGE_PASS = Yup.object().shape({
  oldPassword: Yup.string()
    .required("Old password is required")
    .min(6, "Old password must be at least 6 characters")
    .max(50, "Old password cannot exceed 50 characters"),
  newPassword: Yup.string()
    .required("New password is required")
    .min(6, "New password must be at least 6 characters")
    .max(50, "New password cannot exceed 50 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Password is not valid")
    .required("Confirm password is required"),
});

export const SCHEMA_ADD_BANK = Yup.object().shape({
  bankId: Yup.object().required("Bank is required"),
  branch: Yup.string()
    .required("Branch is required")
    .min(5, "Branch must be at least 5 characters")
    .max(100, "Branch cannot exceed 100 characters"),
  ownerName: Yup.string()
    .required("Account owner name is required")
    .min(5, "Account owner name must be at least 5 characters")
    .max(100, "Account owner name cannot exceed 100 characters"),
  accountNumber: Yup.string()
    .required("Account number is required")
    .matches(/^[0-9]{7,19}$/, "Invalid account number"),
});

export const SCHEMA_BUY_TREE = Yup.object().shape({
  treeId: Yup.string().required("Tree ID is required"),
  amount: Yup.string()
    .required("Amount is required")
    .matches(/^[0-9]+$/, "Invalid amount"),
});

export const SCHEMA_PHONE = Yup.object().shape({
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^0\d{9}$/, "Invalid phone number. Please check again."),
});

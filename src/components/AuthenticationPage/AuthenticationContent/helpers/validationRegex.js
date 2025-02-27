export const validationRegex = {
  email: {
    validation: /^(?=.*[A-Za-zА-Яа-я])(?=.*\d?).{8,}$/,
    errorMessage: "Invalid email",
  },
  password: {
    validation: /^(?=.*[A-Za-zА-Яа-я])(?=.*\d?).{8,}$/,
    // errorMessage: "Password should be at least 8 characters and digits",
    errorMessage:
      "Password must be at least 8 characters and include digits",
  },
  repeatPassword: {
    validation: /^(?=.*[A-Za-zА-Яа-я])[A-Za-zА-Яа-я\d]{8,}$/,
    errorMessage: "Passwords do not match",
  },
  firstName: {
    validation: /^[A-Za-zА-Яа-я]{2,}$/,
    errorMessage: "Invalid first name",
  },
  lastName: {
    validation: /^[A-Za-zА-Яа-я]{2,}$/,
    errorMessage: "Invalid last name",
  },
  dateOfBirth: { validation: /.+/, errorMessage: "Date of birth is required" },
  patientId: {
    validation: /^\d{10}$/,
    errorMessage: "Identification number is invalid",
  },
  pharmacistId: {
    validation: /^\d{10}$/,
    errorMessage: "Identification number is invalid",
  },
  pharmacyName: {
    validation: /^[a-zA-Z\s]{3,}$/,
    errorMessage: "Invalid pharmacy name",
  },
  hospitalName: {
    validation: /^[a-zA-Z\s]{3,}$/,
    errorMessage: "Invalid hospital name",
  },
  doctorId: {
    validation: /^\d{10}$/,
    errorMessage: "Identification number is invalid",
  },
  specialty: {
    validation: /^[a-zA-Z\s]{3,}$/,
    errorMessage: "Invalid specialty",
  },
}
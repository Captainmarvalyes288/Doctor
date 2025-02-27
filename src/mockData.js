export const medicinesData = [
  {
    _id: "123456",
    dosage: "500mg",
    medicineName: "Analgin",
    signature: "2 x 1 tablet",
    description:
      "Analgin tablets contain the active ingredient metamizole sodium, which belongs to pain-relieving medications (analgesics). In addition to pain relief, it also has fever-reducing properties. Analgin is used for: treating moderate to severe pain of various origins: headache, toothache, neuralgia, neuritis, myalgia (muscle pain), trauma, burns, post-operative pain, phantom pain (sensation of pain in a missing limb), menstrual pain, pain in oncological diseases, renal and biliary colic, for reducing high temperature.",
  },
  {
    _id: "123456",
    dosage: "500mg",
    medicineName: "Paracetamol",
    signature: "2 x 1 tablet",
    description: "",
  },
];

export const prescriptionsData = [
  {
    _id: "12",
    medicines: [
      {
        article: "Nurofen 500",
        quantity: "2",
        methodOfUse: "after meals",
      },
      {
        article: "Analgin 100",
        quantity: "1",
        methodOfUse: "in the morning",
      },
      {
        article: "Spasmalgon",
        quantity: "1",
        methodOfUse: "before bedtime",
      },
      {
        article: "Nurofen 500",
        quantity: "2",
        methodOfUse: "after meals",
      },
      {
        article: "Analgin 100",
        quantity: "1",
        methodOfUse: "in the morning",
      },
      {
        article: "Spasmalgon",
        quantity: "1",
        methodOfUse: "before bedtime",
      },
    ],
    issuedOn: "string",
    isCompleted: true,
    validPeriod: "10.10.2010",
    prescribedBy: {
      name: "Stefan",
      lastName: "Georgiev",
      doctorId: "7816000009",
      hospitalId: "7777773099",
      doctorPhone: "0893377777",
    },
    prescribedTo: {
      firstName: "Peter",
      secondName: "Ivanov",
      lastName: "Mitev",
      age: "28",
      specifics: "none",
    },
  },
  {
    _id: "23",
    medicines: [
      {
        article: "Nurofen 500",
        quantity: "2",
        methodOfUse: "after meals",
      },
      {
        article: "Analgin 100",
        quantity: "1",
        methodOfUse: "in the morning",
      },
      {
        article: "Spasmalgon",
        quantity: "1",
        methodOfUse: "before bedtime",
      },
      {
        article: "Nurofen 500",
        quantity: "2",
        methodOfUse: "after meals",
      },
      {
        article: "Analgin 100",
        quantity: "1",
        methodOfUse: "in the morning",
      },
      {
        article: "Spasmalgon",
        quantity: "1",
        methodOfUse: "before bedtime",
      },
    ],
    issuedOn: "string",
    isCompleted: true,
    validPeriod: "10.10.2010",
    prescribedBy: {
      name: "Ivan",
      lastName: "Milev",
      doctorId: "8816840911",
      hospitalId: "7777773099",
      doctorPhone: "0893336491",
    },
    prescribedTo: {
      firstName: "Ivan",
      secondName: "Ivanov",
      lastName: "Popov",
      age: "38",
      specifics: "diabetic",
    },
  },
  {
    _id: "34",
    medicines: [
      {
        article: "Nurofen 500",
        quantity: "2",
        methodOfUse: "after meals",
      },
      {
        article: "Analgin 100",
        quantity: "1",
        methodOfUse: "in the morning",
      },
      {
        article: "Spasmalgon",
        quantity: "1",
        methodOfUse: "before bedtime",
      },
      {
        article: "Nurofen 500",
        quantity: "2",
        methodOfUse: "after meals",
      },
      {
        article: "Analgin 100",
        quantity: "1",
        methodOfUse: "in the morning",
      },
      {
        article: "Spasmalgon",
        quantity: "1",
        methodOfUse: "before bedtime",
      },
      {
        article: "Nurofen 500",
        quantity: "2",
        methodOfUse: "after meals",
      },
      {
        article: "Analgin 100",
        quantity: "1",
        methodOfUse: "in the morning",
      },
      {
        article: "Spasmalgon",
        quantity: "1",
        methodOfUse: "before bedtime",
      },
    ],
    issuedOn: "string",
    isCompleted: true,
    validPeriod: "10.10.2010",
    prescribedBy: {
      name: "Sara",
      lastName: "Ivanova",
      doctorId: "9916847735",
      hospitalId: "7777773099",
      doctorPhone: "0893388674",
    },
    prescribedTo: {
      firstName: "Elena",
      secondName: "Kirova",
      lastName: "Samandova",
      age: "18",
      specifics: "none",
    },
  },
  {
    _id: "43",
    medicines: [
      {
        article: "Nurofen 500",
        quantity: "2",
        methodOfUse: "after meals",
      },
      {
        article: "Analgin 100",
        quantity: "1",
        methodOfUse: "in the morning",
      },
      {
        article: "Spasmalgon",
        quantity: "1",
        methodOfUse: "before bedtime",
      },
      {
        article: "Nurofen 500",
        quantity: "2",
        methodOfUse: "after meals",
      },
      {
        article: "Analgin 100",
        quantity: "1",
        methodOfUse: "in the morning",
      },
      {
        article: "Spasmalgon",
        quantity: "1",
        methodOfUse: "before bedtime",
      },
    ],
    issuedOn: "string",
    isCompleted: true,
    validPeriod: "10.10.2010",
    prescribedBy: {
      name: "Maria",
      lastName: "Stefanova",
      doctorId: "4416840555",
      hospitalId: "7777773099",
      doctorPhone: "0893444449",
    },
    prescribedTo: {
      firstName: "Viktor",
      secondName: "Alexandrov",
      lastName: "Petrov",
      age: "26",
      specifics: "none",
    },
  },
];
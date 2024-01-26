import React, { useState, useEffect, useContext } from "react";

import classes from "../../components/SectionInquiryForm/SectionInquiryForm.module.css";
import clsx from "clsx";
import DropdownMenu from "components/DropdownMenu/DropdownMenu";
import { REVALIDATE, baseURL } from "config";
import axios from "axios";
// @ts-ignore
import validator from "validator";
import ThankYouPopup from "components/ThankYouPopup/ThankYouPopup";
import popupContext from "contexts/popupContext";
import { NextPage } from "next";

const SectionInquiryForm: NextPage = ({ productData, brandData }: any) => {
  const { setPopupData } = useContext(popupContext);
  const [orderData, setOrderData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    category: "N / A",
    product: "",
    weight: "",
    service: "N / A",
    message: "",
    length: "",
    width: "",
    thickness: "",
    companyName: "",
    GST: "",
    brand: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });
  const [err, setErr] = useState<any>(null);
  const [activeProduct, setActiveProduct] = useState<any>(null);
  const [categoryData, setCategoryData] = useState<any>([]);
  const [serviceData, setServiceData] = useState<any>([]);
  const [captchaCode, setCaptchaCode] = useState<any>("");
  const [enteredCode, setEnteredCode] = useState<any>("");

  const generateCode = () => {
    let charString =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charArr = charString.split("");
    const output = [];
    for (let i = 0; i < 7; i++) {
      let randomChar = charArr[Math.floor(Math.random() * charArr.length)];
      console.log(randomChar);
      output.push(randomChar);
    }
    const randomCode = output.join("");
    setCaptchaCode(randomCode);
  };

  useEffect(() => {
    setActiveProduct(productData[0].attributes.name);

    setCategoryData(
      productData[0].attributes.categories.data.map((el: any) => {
        return el.attributes.name;
      })
    );
    setServiceData(
      productData[0].attributes.services.data.map((el: any) => {
        return el.attributes.name;
      })
    );

    generateCode();
  }, []);

  useEffect(() => {
    if (productData !== null) {
      let outputCategory;
      let outputService;
      setCategoryData([]);
      setServiceData([]);
      setOrderData((prev) => ({
        ...prev,
        category: "N / A",
        service: "N / A",
        length: "",
        width: "",
        weight: "",
        thickness: "",
      }));
      productData.forEach((el: any) => {
        if (el.attributes.name === activeProduct) {
          console.log(
            el.attributes?.categories?.data.map(
              (category: any) => category.attributes.name
            ),
            activeProduct
          );
          outputCategory = el.attributes?.categories?.data.map(
            (category: any) => category.attributes.name
          );
        }
      });
      setCategoryData(outputCategory);
      productData.forEach((el: any) => {
        if (el.attributes.name === activeProduct) {
          outputService = el.attributes?.services?.data.map(
            (service: any) => service.attributes.name
          );
        }
      }),
        setServiceData(outputService);
    }

    if (activeProduct === "M. S. Structure") {
      setOrderData((prev) => ({
        ...prev,
        length: "N / A",
        width: "N / A",
        thickness: "N / A",
        category: "N / A",
        service: "N / A",
      }));
    }
  }, [activeProduct]);

  // When user has selected slitting service N / A should be displayed in length field

  useEffect(() => {
    if (orderData.service === "Slitting") {
      setOrderData((prev) => ({ ...prev, length: "N / A" }));
    }
  }, [orderData.service]);

  const state = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const city = [
    "Agartala",
    "Agra",
    "Agumbe",
    "Ahmedabad",
    "Aizawl",
    "Ajmer",
    "Alappuzha Beach",
    "Allahabad",
    "Alleppey",
    "Almora",
    "Amarnath",
    "Amritsar",
    "Anantagir",
    "Andaman and Nicobar Islands",
    "Araku valley",
    "Aurangabad",
    "Ayodhya",
    "Badrinath",
    "Bangalore",
    "Baroda",
    "Bastar",
    "Bhagalpur",
    "Bhilai",
    "Bhimtal",
    "Bhopal",
    "Bhubaneswar",
    "Bhuj",
    "Bidar",
    "Bilaspur",
    "Bodh Gaya",
    "Calicut",
    "Chail",
    "Chamba",
    "Chandigarh",
    "Chennai",
    "Chennai Beaches",
    "Cherai",
    "Cherrapunji",
    "Chidambaram",
    "Chikhaldara Hills",
    "Chopta",
    "Coimbatore",
    "Coonoor",
    "Coorg",
    "Corbett National Park",
    "Cotigao Wild Life Sanctuary",
    "Cuttack",
    "Dadra and Nagar Haveli",
    "Dalhousie",
    "Daman and Diu",
    "Darjeeling",
    "Dehradun",
    "Delhi",
    "Devikulam",
    "Dhanaulti",
    "Dharamashala",
    "Dindigul",
    "Dudhwa National Park",
    "Dwaraka",
    "Faridabad",
    "Gandhinagar",
    "Gangotri",
    "Gangtok",
    "Gir Wildlife Sanctuary",
    "Goa",
    "Great Himalayan National Park",
    "Gulmarg",
    "Gurgaon",
    "Guruvayoor",
    "Guwahati",
    "Gwalior",
    "Hampi",
    "Haridwar",
    "Hogenakkal",
    "Horsley Hills",
    "Hyderabad",
    "Idukki",
    "Imphal",
    "Indore",
    "Itangar",
    "Jabalpur",
    "Jaipur",
    "Jaisalmer",
    "Jalandhar",
    "Jammu",
    "Jamshedpur",
    "Jodhpur",
    "Kanchipuram",
    "Kanha National Park",
    "Kanpur",
    "Kanyakumari",
    "Kargil",
    "Karwar",
    "Kausani",
    "Kedarnath",
    "Keoladeoghana National Park",
    "Khajuraho",
    "Kochi",
    "Kodaikanal",
    "Kolkata",
    "Kollam",
    "Konark",
    "Kotagiri",
    "Kottakkal and Ayurveda",
    "Kovalam",
    "Kovalam and Ayurveda",
    "Kudremukh",
    "Kullu",
    "Kumaon",
    "Kumarakom",
    "Kumarakom and Ayurveda",
    "Kumarakom Bird Sanctuary",
    "Kurukshetra",
    "Lakshadweep",
    "Lucknow",
    "Ludhiana",
    "Madurai",
    "Mahabalipuram",
    "Malpe Beach",
    "Manas National Park",
    "Mangalore",
    "Maravanthe Beach",
    "Margoa",
    "Mount Abu",
    "Mumbai",
    "Munnar",
    "Mussoorie",
    "Mysore",
    "Nahsik",
    "Nalanda",
    "Nanda Devi National Park",
    "Nandi Hills",
    "Netravali Wild Life Sanctuary",
    "Ooty",
    "Orchha",
    "Pahalgam",
    "Palakkad",
    "Panchgani",
    "Patna",
    "Patnitop",
    "Pattadakkal",
    "Periyar Wildlife Sanctuary",
    "Pithoragarh",
    "Pondicherry",
    "Pune",
    "Puri",
    "Pushkar",
    "Raipur",
    "Rajaji National Park",
    "Rajgir",
    "Rameshwaram",
    "Ranchi",
    "Ranganthittu Bird Sanctuary",
    "Ranikhet",
    "Ranthambore",
    "Rishikesh",
    "Rourkela",
    "Sanchi",
    "Saputara",
    "Sariska Wildlife Sanctuary",
    "Shillong",
    "Shimla",
    "Sohna_Hills",
    "Srinagar",
    "Sunderbans",
    "Surat",
    "Tezpur",
    "Thanjavur",
    "Thiruvananthapuram",
    "Thrissur",
    "Tirunelveli",
    "Tirupati",
    "Trichy",
    "Udaipur",
    "Ujjain",
    "Vaishali",
    "Valley of Flowers",
    "Varanasi",
    "Varkala and Ayurveda",
    "Vijayawada",
    "Vishakhapatnam",
    "Vrindhavan",
    "Warangal",
    "Wayanad",
    "Wayanad Wildlife Sanctuary",
    "Yercaud",
    "Zanskar",
  ];

  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands",
  ];

  return (
    <>
      {productData && (
        <div className={clsx(classes.root, "section")}>
          <div className={clsx(classes.container, "container")}>
            <div
              className={clsx(classes.title, "heading-2 text-black mb-5 pb-2")}
            >
              Send Order Details
            </div>
            <div className={clsx(classes.body, "")}>
              <div className={clsx(classes.row3, "")}>
                <div className={clsx(classes.inputBox, "")}>
                  <div className={clsx(classes.label, "")}>
                    First Name <span style={{ color: "maroon" }}>*</span>
                  </div>
                  <input
                    onChange={(e) => {
                      setOrderData((prev: any) => ({
                        ...prev,
                        firstName: e.target.value,
                      }));
                    }}
                    type="text"
                    className={classes.input}
                  />
                </div>
                <div className={clsx(classes.inputBox, "")}>
                  <div className={clsx(classes.label, "")}>
                    Last Name <span style={{ color: "maroon" }}>*</span>
                  </div>
                  <input
                    onChange={(e) => {
                      setOrderData((prev: any) => ({
                        ...prev,
                        lastName: e.target.value,
                      }));
                    }}
                    type="text"
                    className={classes.input}
                  />
                </div>
                <div className={clsx(classes.inputBox, "")}>
                  <div className={clsx(classes.label, "")}>
                    Email Address <span style={{ color: "maroon" }}>*</span>
                  </div>
                  <input
                    onChange={(e) => {
                      setOrderData((prev: any) => ({
                        ...prev,
                        email: e.target.value,
                      }));
                    }}
                    type="text"
                    className={classes.input}
                  />
                </div>
              </div>
              <div className={clsx(classes.row2, "")}>
                <div className={clsx(classes.inputBox, "")}>
                  <div className={clsx(classes.label, "")}>Contact Number</div>
                  <input
                    onChange={(e) => {
                      setOrderData((prev: any) => ({
                        ...prev,
                        contactNumber: e.target.value,
                      }));
                    }}
                    type="text"
                    className={classes.input}
                  />
                </div>
                <div className={clsx(classes.inputBox, "")}>
                  <div className={clsx(classes.label, "")}>
                    Products <span style={{ color: "maroon" }}>*</span>
                  </div>
                  <DropdownMenu
                    changeHandler={(v: any) => {
                      setOrderData((prev: any) => ({ ...prev, product: v }));
                      setActiveProduct(v);
                    }}
                    label=""
                    pvalue={activeProduct}
                    dataArr={
                      productData
                        ? productData.map((el: any) => {
                            return el.attributes.name;
                          })
                        : []
                    }
                  />
                </div>
              </div>
              <div className={clsx(classes.row3, "")}>
                <div className={clsx(classes.inputBox, "")}>
                  <div className={clsx(classes.label, "")}>Category</div>
                  {categoryData && (
                    <DropdownMenu
                      changeHandler={(v: any) => {
                        setOrderData((prev: any) => ({ ...prev, category: v }));
                      }}
                      label=""
                      pvalue={orderData.category}
                      dataArr={[...categoryData, "N / A"]}
                    />
                  )}
                </div>
                <div className={clsx(classes.inputBox, "")}>
                  <div className={clsx(classes.label, "")}>Weight</div>
                  <div className="p-relative w-100 d-flex align-items-center">
                    <input
                      disabled={orderData.width === "N / A"}
                      value={orderData.weight}
                      onChange={(e) => {
                        setOrderData((prev: any) => ({
                          ...prev,
                          weight: e.target.value,
                        }));
                      }}
                      type="text"
                      className={classes.input}
                    />
                    <span className={classes.placeholder}>MT</span>
                  </div>
                </div>
                <div className={clsx(classes.inputBox, "")}>
                  <div className={clsx(classes.label, "")}>Service</div>
                  {serviceData && (
                    <DropdownMenu
                      changeHandler={(v: any) => {
                        setOrderData((prev: any) => ({ ...prev, service: v }));
                      }}
                      label=""
                      pvalue={orderData.service}
                      dataArr={[...serviceData, "Other service", "N / A"]}
                    />
                  )}
                </div>
              </div>
              <div className={clsx(classes.row3, "")}>
                <div className={clsx(classes.inputBox, "")}>
                  <div className={clsx(classes.label, "")}>Dimensions</div>
                  <div className="p-relative w-100 d-flex align-items-center">
                    <input
                      disabled={orderData.length === "N / A"}
                      value={orderData.length}
                      onChange={(e) => {
                        setOrderData((prev: any) => ({
                          ...prev,
                          length: e.target.value,
                        }));
                      }}
                      placeholder="Length"
                      type="text"
                      className={classes.input}
                    />
                    <span className={classes.placeholder}>MM</span>
                  </div>
                </div>
                <div className={clsx(classes.inputBox, "")}>
                  <div className={clsx(classes.label, "")}>&nbsp;</div>
                  <div className="p-relative w-100 d-flex align-items-center">
                    <input
                      disabled={orderData.width === "N / A"}
                      value={orderData.width}
                      onChange={(e) => {
                        setOrderData((prev: any) => ({
                          ...prev,
                          width: e.target.value,
                        }));
                      }}
                      placeholder="Width"
                      type="text"
                      className={classes.input}
                    />
                    <span className={classes.placeholder}>MM</span>
                  </div>
                </div>
                <div className={clsx(classes.inputBox, "")}>
                  <div className={clsx(classes.label, "")}>&nbsp;</div>
                  <div className="p-relative w-100 d-flex align-items-center">
                    <input
                      disabled={orderData.thickness === "N / A"}
                      value={orderData.thickness}
                      onChange={(e) => {
                        setOrderData((prev: any) => ({
                          ...prev,
                          thickness: e.target.value,
                        }));
                      }}
                      placeholder="Thickness"
                      type="text"
                      className={classes.input}
                    />
                    <span className={classes.placeholder}>MM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={clsx(classes.row3, "")}>
              <div className={clsx(classes.inputBox, "")}>
                <div className={clsx(classes.label, "")}>
                  Company Name <span style={{ color: "maroon" }}>*</span>
                </div>
                <input
                  onChange={(e) => {
                    setOrderData((prev: any) => ({
                      ...prev,
                      companyName: e.target.value,
                    }));
                  }}
                  type="text"
                  className={classes.input}
                />
              </div>
              <div className={clsx(classes.inputBox, "")}>
                <div className={clsx(classes.label, "")}>
                  GST Number <span style={{ color: "maroon" }}>*</span>
                </div>
                <input
                  onChange={(e) => {
                    setOrderData((prev: any) => ({
                      ...prev,
                      GST: e.target.value,
                    }));
                  }}
                  type="text"
                  className={classes.input}
                />
              </div>
              <div className={clsx(classes.inputBox, "")}>
                <div className={clsx(classes.label, "")}>Brand</div>
                <DropdownMenu
                  changeHandler={(v: any) => {
                    setOrderData((prev: any) => ({ ...prev, brand: v }));
                  }}
                  label=""
                  pvalue={brandData[0]}
                  dataArr={[...brandData, "Other Brand"]}
                />
              </div>
            </div>
            <div className={clsx(classes.row1)}>
              <div className={clsx(classes.inputBox, "")}>
                <div className={clsx(classes.label, "")}>
                  Billing Address <span style={{ color: "maroon" }}>*</span>
                </div>
                <input
                  onChange={(e) => {
                    setOrderData((prev: any) => ({
                      ...prev,
                      addressLine1: e.target.value,
                    }));
                  }}
                  placeholder="Line 1"
                  type="text"
                  className={classes.input}
                />
                <input
                  onChange={(e) => {
                    setOrderData((prev: any) => ({
                      ...prev,
                      addressLine2: e.target.value,
                    }));
                  }}
                  placeholder="Line 2 (Optional)"
                  type="text"
                  className={clsx(classes.input, "mt-3 mb-4")}
                />
              </div>
            </div>
            <div className={clsx(classes.row3)}>
              <div className={clsx(classes.inputBox, "")}>
                <div className={clsx(classes.label, "")}>
                  City <span style={{ color: "maroon" }}>*</span>
                </div>
                <DropdownMenu
                  changeHandler={(v: any) => {
                    setOrderData((prev: any) => ({ ...prev, city: v }));
                  }}
                  label=""
                  pvalue={"Ahmedabad"}
                  dataArr={city}
                />
              </div>
              <div className={clsx(classes.inputBox, "")}>
                <div className={clsx(classes.label, "")}>
                  State <span style={{ color: "maroon" }}>*</span>
                </div>
                <DropdownMenu
                  changeHandler={(v: any) => {
                    setOrderData((prev: any) => ({ ...prev, state: v }));
                  }}
                  label=""
                  pvalue={"Gujarat"}
                  dataArr={state}
                />
              </div>
              <div className={clsx(classes.inputBox, "")}>
                <div className={clsx(classes.label, "")}>
                  Country <span style={{ color: "maroon" }}>*</span>
                </div>
                <DropdownMenu
                  changeHandler={(v: any) => {
                    setOrderData((prev: any) => ({ ...prev, country: v }));
                  }}
                  label=""
                  pvalue={"India"}
                  dataArr={countryList}
                />
              </div>
            </div>
            <div className={clsx(classes.row4, "align-items-start")}>
              <div className={clsx(classes.inputBox)}>
                <div className={clsx(classes.label, "")}>
                  Pincode <span style={{ color: "maroon" }}>*</span>
                </div>
                <input
                  onChange={(e) => {
                    setOrderData((prev: any) => ({
                      ...prev,
                      pincode: e.target.value,
                    }));
                  }}
                  type="text"
                  className={clsx(classes.input, "mt-3 mb-4")}
                />
              </div>
              <div className={clsx("flex-column d-flex")}>
                <div className={clsx(classes.label, "")}>
                  Captcha <span style={{ color: "maroon" }}>*</span>
                </div>
                <div className="d-flex w-100 align-items-center mt-3">
                  <div className={classes.captchBG}>{captchaCode}</div>
                  <input
                    onChange={(e) => {
                      setEnteredCode(e.target.value);
                    }}
                    type="text"
                    className={clsx(classes.input, `ml-3`)}
                    placeholder="Enter Code"
                  />
                </div>
              </div>
            </div>
            <div className={clsx(classes.btnBox, "d-flex align-items-center")}>
              {/* <button className={clsx(classes.btn, "btn btn-white mr-4")}>
            <svg
              className="mr-1"
              width={14}
              height={23}
              viewBox="0 0 14 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.25781 15.1803V6.75161C4.26755 6.13527 4.51922 5.54746 4.95853 5.11504C5.39783 4.68262 5.98954 4.44027 6.60596 4.44027C7.22238 4.44027 7.81408 4.68262 8.25339 5.11504C8.69269 5.54746 8.94437 6.13527 8.9541 6.75161L8.96172 17.7995C8.96811 18.3263 8.86987 18.8491 8.67269 19.3376C8.47552 19.8262 8.18333 20.2707 7.81307 20.6455C7.4428 21.0203 7.00183 21.3179 6.51571 21.521C6.02959 21.724 5.50799 21.8286 4.98115 21.8286C4.45431 21.8286 3.93272 21.724 3.4466 21.521C2.96047 21.3179 2.5195 21.0203 2.14924 20.6455C1.77897 20.2707 1.48678 19.8262 1.28961 19.3376C1.09243 18.8491 0.994194 18.3263 1.00059 17.7995V6.6772C0.989853 5.93554 1.12666 5.19916 1.40305 4.51085C1.67945 3.82254 2.08991 3.19604 2.61059 2.66778C3.13126 2.13951 3.75175 1.72003 4.43599 1.4337C5.12023 1.14738 5.85456 0.999927 6.59629 0.999927C7.33802 0.999927 8.07235 1.14738 8.75659 1.4337C9.44082 1.72003 10.0613 2.13951 10.582 2.66778C11.1027 3.19604 11.5131 3.82254 11.7895 4.51085C12.0659 5.19916 12.2027 5.93554 12.192 6.6772V17.0706"
                stroke="#B9B3B3"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
              />
            </svg>
            Attach
          </button> */}
              <a
                href={`https://res.cloudinary.com/domdsbthb/image/upload/v1663735499/V_Metal_Solutions_Inc_3d5e6a4f6c.pdf`}
                download
                target="_blank"
                rel="noreferrer"
              >
                <button
                  style={{ backgroundColor: "#072854" }}
                  className={clsx(classes.btn, "btn btn-white mr-4")}
                >
                  <svg
                    style={{ transform: "translateY(-0.3rem)" }}
                    className="mr-1"
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4773 6.85714H10.8636V15.0734L13.7077 12.2513C13.871 12.0973 14.0884 12.0127 14.3136 12.0156C14.5388 12.0184 14.754 12.1085 14.9132 12.2666C15.0725 12.4246 15.1632 12.6382 15.1661 12.8617C15.169 13.0852 15.0838 13.301 14.9287 13.463L10.6105 17.7488C10.4485 17.9094 10.229 17.9996 10 17.9996C9.77105 17.9996 9.55146 17.9094 9.38952 17.7488L5.07134 13.463C4.91621 13.301 4.831 13.0852 4.83389 12.8617C4.83677 12.6382 4.92751 12.4246 5.08677 12.2666C5.24603 12.1085 5.46119 12.0184 5.6864 12.0156C5.9116 12.0127 6.12902 12.0973 6.2923 12.2513L9.13636 15.0734V6.85714H3.52273C2.72131 6.85799 1.95297 7.17434 1.38628 7.73676C0.819598 8.29919 0.500857 9.06175 0.5 9.85714V21C0.500857 21.7954 0.819598 22.558 1.38628 23.1204C1.95297 23.6828 2.72131 23.9991 3.52273 24H16.4773C17.2787 23.9991 18.047 23.6828 18.6137 23.1204C19.1804 22.558 19.4991 21.7954 19.5 21V9.85714C19.4991 9.06175 19.1804 8.29919 18.6137 7.73676C18.047 7.17434 17.2787 6.85799 16.4773 6.85714ZM10.8636 0.857143C10.8636 0.629814 10.7726 0.411797 10.6107 0.251051C10.4487 0.0903058 10.2291 0 10 0C9.77095 0 9.55128 0.0903058 9.38932 0.251051C9.22735 0.411797 9.13636 0.629814 9.13636 0.857143V6.85714H10.8636V0.857143Z"
                      fill="#fff"
                    />
                  </svg>
                  <span className="d-inline-block ml-1 text-white">
                    E Brochure
                  </span>
                </button>
              </a>

              <button
                onClick={() => {
                  if (orderData.firstName.length === 0) {
                    setErr("Please fill your first name.");
                  } else if (orderData.lastName.length === 0) {
                    setErr("Please fill your last name.");
                  } else if (orderData.email.length === 0) {
                    console.log(orderData.email);
                    setErr("Please provide your email.");
                  } else if (!validator.isEmail(orderData.email)) {
                    setErr("Please provide valid email.");
                  } else if (orderData.product.length === 0) {
                    setErr("Please Select a Product.");
                  } else if (orderData.companyName.length === 0) {
                    setErr("Please provide a company name.");
                  } else if (orderData.GST.length === 0) {
                    setErr("Please provide GST Number.");
                  } else if (orderData.addressLine1.length === 0) {
                    setErr("Please provide order address.");
                  } else if (orderData.city.length === 0) {
                    setErr("Please select your city.");
                  } else if (orderData.state.length === 0) {
                    setErr("Please select your state.");
                  } else if (orderData.country.length === 0) {
                    setErr("Please select your country.");
                  } else if (orderData.pincode.length === 0) {
                    setErr("Please provide valid pincode.");
                  } else if (enteredCode !== captchaCode) {
                    setErr("Please enter correct captcha.");
                    generateCode();
                    setEnteredCode("");
                  } else {
                    axios
                      .post(`${baseURL}/api/my-orders`, {
                        data: { ...orderData },
                      })
                      .then((res) => {
                        console.log(orderData);
                        console.log(res.data);
                        setPopupData((prev: any) => ({
                          isVisible: true,
                          childComponent: <ThankYouPopup isFromType2={true} />,
                        }));
                        setErr("");
                      })
                      .catch((err) => {
                        console.log(err.message);
                        setErr("Cant submit data now please try again!");
                      });
                  }
                }}
                className={clsx(classes.btn, "btn btn-contained")}
              >
                Submit
              </button>
            </div>
            {err && (
              <p style={{ color: "maroon" }} className="mt-3">
                {err}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export async function getStaticProps() {
  const [res1, res2] = await Promise.all([
    axios.get(`${baseURL}/api/products?populate=*`),
    axios.get(`${baseURL}/api/brands?populate=*`),
  ]);

  return {
    props: {
      productData: res1.data.data,
      brandData: res2.data.data.map((el: any) => {
        return el.attributes.name;
      }),
    },
    revalidate: REVALIDATE,
  };
}

export default SectionInquiryForm;

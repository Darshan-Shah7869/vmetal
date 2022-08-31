import React, { useContext, useEffect, useState } from "react";

import classes from "./../SectionInquiryForm/SectionInquiryForm.module.css";
import clsx from "clsx";
import DropdownMenu from "components/DropdownMenu/DropdownMenu";
import CaptchaImage from "public/assets/images/captcha.png";
import popupContext from "contexts/popupContext";
import ThankYouPopup from "components/ThankYouPopup/ThankYouPopup";
import orderContext from "contexts/orderContext";
import axios from "axios";
import { baseURL } from "config";

const BuyerDetails = () => {
  const { popupData, setPopupData } = useContext(popupContext);
  const { orderData, setOrderData } = useContext(orderContext);
  const [brandData, setBrandsData] = useState<any>([]);
  const [code, setCode] = useState("");
  const [enteredCode, setEnteredCode] = useState("");
  const [err, setErr] = useState<any>("");

  useEffect(() => {
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
    setCode(randomCode);

    axios
      .get(`${baseURL}/api/brands`)
      .then((brandRes) => {
        setBrandsData((prev: any) => [...prev, ...brandRes?.data?.data]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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

  const [validate, isValidate] = useState(false);

  return (
    <div
      style={{ backgroundColor: "transparent" }}
      className={clsx(classes.root, "")}
    >
      <div className={clsx(classes.inputBox, "mb-5")}>
        <div className={clsx(classes.label, "")}>Full Name</div>
        <input
          onChange={(e) => {
            setOrderData((prev: any) => ({
              ...prev,
              name: e.target.value,
            }));
          }}
          type="text"
          className={classes.input}
          placeholder=""
        />
      </div>
      <div className={clsx(classes.inputBox, "mb-5")}>
        <div className={clsx(classes.label, "")}>Contact No.</div>
        <input
          onChange={(e) => {
            setOrderData((prev: any) => ({
              ...prev,
              contactNumber: e.target.value,
            }));
          }}
          type="text"
          className={classes.input}
          placeholder=""
        />
      </div>
      <div className={clsx(classes.inputBox, "mb-5")}>
        <div className={clsx(classes.label, "")}>Email Address</div>
        <input
          onChange={(e) => {
            setOrderData((prev: any) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
          type="text"
          className={classes.input}
          placeholder=""
        />
      </div>
      <div className={clsx(classes.inputBox, "mb-5")}>
        <div className={clsx(classes.label, "")}>Company Name</div>
        <input
          onChange={(e) => {
            setOrderData((prev: any) => ({
              ...prev,
              companyName: e.target.value,
            }));
          }}
          type="text"
          className={classes.input}
          placeholder=""
        />
      </div>
      <div className={clsx(classes.inputBox, "mb-5")}>
        <div className={clsx(classes.label, "")}>Billing Address</div>
        <input
          onChange={(e) => {
            setOrderData((prev: any) => ({
              ...prev,
              addressLine1: e.target.value,
            }));
          }}
          type="text"
          className={`${classes.input} mb-2`}
          placeholder="Line 1"
        />
        <input
          onChange={(e) => {
            setOrderData((prev: any) => ({
              ...prev,
              addressLine2: e.target.value,
            }));
          }}
          type="text"
          className={`${classes.input} mb-2`}
          placeholder="Line 2"
        />
        <input
          onChange={(e) => {
            setOrderData((prev: any) => ({
              ...prev,
              pincode: e.target.value,
            }));
          }}
          type="text"
          className={`${classes.input} mb-2`}
          placeholder="Pincode"
        />
        <div className="mb-2">
          <DropdownMenu
            changeHandler={(v: any) => {
              setOrderData((prev: any) => ({
                ...prev,
                city: v,
              }));
            }}
            label=""
            pvalue="City"
            dataArr={city}
          />
        </div>{" "}
        <div className="mb-2">
          <DropdownMenu
            changeHandler={(v: any) => {
              setOrderData((prev: any) => ({
                ...prev,
                state: v,
              }));
            }}
            label=""
            pvalue="State"
            dataArr={state}
          />
        </div>
        <div>
          <DropdownMenu
            changeHandler={(v: any) => {
              setOrderData((prev: any) => ({
                ...prev,
                country: v,
              }));
            }}
            label=""
            pvalue="Country"
            dataArr={countryList}
          />
        </div>
        <div className="mt-5">
          <div className={clsx(classes.label, "")}>Brand</div>
          <DropdownMenu
            changeHandler={(v: any) => {
              setOrderData((prev: any) => ({
                ...prev,
                brand: v,
              }));
            }}
            label=""
            pvalue="Brand"
            dataArr={brandData.map((el: any) => el.attributes.name)}
          />
        </div>{" "}
      </div>
      <div className={clsx(classes.inputBox, "mb-5")}>
        <div className={clsx(classes.label, "")}>GST Number</div>
        <input
          onChange={(e) => {
            setOrderData((prev: any) => ({
              ...prev,
              GSTNumber: e.target.value,
            }));
          }}
          type="text"
          className={classes.input}
          placeholder=""
        />
      </div>
      <div className="d-flex w-100 align-items-center">
        <div className={classes.captchBG}>{code}</div>
        <input
          onChange={(e) => {
            setEnteredCode(e.target.value);
          }}
          type="text"
          className={`${classes.input} ml-3`}
          placeholder="Enter Code"
        />
      </div>

      <button
        // onClick={() => {
        //
        // }}
        onClick={() => {
          console.log(orderData);
          const newOrderData: any = { ...orderData };
          newOrderData.order.forEach((el: any) => {
            el.basicValue = el.basicValue * el.quantity;
            el.invoiceValue = el.invoiceValue * el.quantity;
            el.totalValue = el.totalValue * el.quantity;
          });

          let subt: any = 0;
          let inv: any = 0;
          let tv: any = 0;
          newOrderData.order.forEach((el: any) => {
            subt = el.basicValue + subt;
          });
          newOrderData.order.forEach((el: any) => {
            inv = el.invoiceValue + inv;
          });
          newOrderData.order.forEach((el: any) => {
            tv = el.totalValue + tv;
          });
          subt.toFixed(2);
          inv.toFixed(2);
          tv.toFixed(2);

          if (err.length === 0) {
            axios
              .post(`${baseURL}/api/orders`, {
                data: { ...orderData, subtotal: subt, tax: inv, total: tv },
              })
              .then((res) =>
                setPopupData((prev: any) => ({
                  ...prev,
                  isVisible: true,
                  childComponent: <ThankYouPopup />,
                }))
              )
              .catch((err) => {
                console.log(err.message);
              });
          }
        }}
        className="btn btn-contained mt-5 w-100"
      >
        {/* Continue Buyer’s Details */}
        Book Order Online
      </button>
      <p className={classes.error}>{err}</p>
    </div>
  );
};

export default BuyerDetails;

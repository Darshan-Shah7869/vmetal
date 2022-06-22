import React from "react";

import classes from "./SectionContact.module.css";
import clsx from "clsx";
import DropdownMenu from "components/DropdownMenu/DropdownMenu";

const SectionContact = () => {
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

  return (
    <div className={clsx(classes.root, "section")}>
      <div
        className={clsx(
          classes.container,
          "container d-flex align-items-center"
        )}
      >
        <div className={clsx(classes.left, "w-50")}>
          <div className={clsx(classes.label, "heading-3 text-black")}>
            Address
          </div>
          <input
            type="text"
            className={clsx(classes.input, classes.fullRow, "")}
            placeholder="Country/region"
          />
          <input
            type="text"
            className={clsx(classes.input, classes.fullRow, "")}
            placeholder="Address"
          />
          <DropdownMenu label="" pvalue="City" dataArr={city} />
          <DropdownMenu label="" pvalue="State" dataArr={state} />
          <input
            type="text"
            className={clsx(classes.input, "")}
            placeholder="Pincode"
          />
          <input
            type="text"
            className={clsx(classes.input, "")}
            placeholder="Mobile No."
          />

          <button className={clsx("btn btn-contained w-100", classes.btn)}>
            Continue Shipping
          </button>
        </div>
        <div className={clsx(classes.right, "w-50")}>
          <iframe
            className={clsx(classes.map, "w-100")}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3671.8569940799066!2d72.68170661744385!3d23.0290224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87a00b2a756d%3A0xe4ce4109276aaa2c!2s523%2C%20Rd%20Number%2014%2C%20Kathwada%20GIDC%2C%20Odhav%20Industrial%20Estate%2C%20Odhav%2C%20Ahmedabad%2C%20Gujarat%20382430!5e0!3m2!1sen!2sin!4v1655869389520!5m2!1sen!2sin"
            width="600"
            height="450"
            // style="border:0;"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SectionContact;

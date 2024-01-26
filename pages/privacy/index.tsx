import clsx from "clsx";
import React from "react";
import classes from "./style.module.css";

const PrivacyPage = () => {
  return (
    <main className={clsx(classes.root, "container")}>
      <h1 className={clsx(classes.title)}>
        Privacy Policy for V Metal Solutions INC
      </h1>
      <h2 className={clsx(classes.subtitle)}>Effective Date: 21 July 2023</h2>{" "}
      <p className={clsx(classes.para)}>
        Welcome to <b>V Metal Solutions INC.</b> This Privacy Policy is designed
        to inform you about the collection, use, and disclosure of personal
        information we receive from users of our website, located at
        <a href="https://www.vmetalsolutions.com">
          https://www.vmetalsolutions.com
        </a>
        , and any related services. By using our website and services, you agree
        to the terms of this Privacy Policy.
      </p>
      <div className={clsx(classes.heading3)}>1. Information We Collect:</div>
      <p className={clsx(classes.para)}>
        We may collect and store the following basic information about potential
        leads:
      </p>
      <p className={clsx(classes.para)}>
        a. Personal Information: <br />
        - Name
        <br />
        - Email address
        <br />
        - Phone number
        <br />
        - Address <br />
        - Company name <br />
        - Job title <br />
        - GST Number
        <br />
      </p>
      <p className={clsx(classes.para)}>
        b. Non-Personal Information: <br />
        - Referral source <br />
        - Pages visited on the website <br />
        - Date and time of visits <br />
        - Cookies and other anonymous identifiers <br />
      </p>
      <div className={clsx(classes.heading3)}>
        2. How We Use the Information:
      </div>
      <p className={clsx(classes.para)}>We use the collected information to:</p>
      <p className={clsx(classes.para)}>
        a. Provide and Improve Services: <br />- To contact you regarding your
        inquiry or to respond to any questions. <br />- To send you relevant
        information about our products, services, promotions, and updates.
      </p>
      <p className={clsx(classes.para)}>
        b. Analytics: <br />
        - To analyse the usage of our website and improve our services. <br /> -
        To track the effectiveness of marketing campaigns.
      </p>
      <p className={clsx(classes.para)}>
        c. Legal Compliance: <br />- To comply with legal obligations and
        resolve any disputes or issues that may arise.
      </p>
      <p className={clsx(classes.para)}>
        We will retain your personal information only for as long as necessary
        to fulfil the purposes for which it was collected and follow applicable
        laws.
      </p>
      <div className={clsx(classes.heading3)}>3. Data Retention:</div>
      <p className={clsx(classes.para)}>We use the collected information to:</p>
      <p className={clsx(classes.para)}>
        a. Provide and Improve Services: <br />
        - To contact you regarding your inquiry or to respond to any questions.
        <br />- To send you relevant information about our products, services,
        promotions, and updates.
      </p>
      <p className={clsx(classes.para)}>
        b. Analytics: <br />
        - To analyse the usage of our website and improve our services.
        <br /> - To track the effectiveness of marketing campaigns.
      </p>
      <p className={clsx(classes.para)}>
        c. Legal Compliance: <br />
        - To comply with legal obligations and resolve any disputes or issues
        that may arise. <br />
        - We will retain your personal information only for as long as necessary
        to fulfil the purposes for which it was collected and follow applicable
        laws. <br />
      </p>
      <div className={clsx(classes.heading3)}>
        4. Information Sharing and Disclosure:
      </div>
      <p className={clsx(classes.para)}>
        We do not sell, rent, or trade your personal information to third
        parties. However, we may share your information under the following
        circumstances:
      </p>
      <p className={clsx(classes.para)}>
        a. Service Providers: <br />
        We may engage third-party service providers to assist us in providing
        and improving our services. Confidentiality obligations bind these
        service providers, and they are not allowed to use your personal
        information for any purpose other than as instructed by us.
      </p>
      <p className={clsx(classes.para)}>
        b. Legal Requirements: <br />
        We may disclose your information to comply with applicable laws,
        regulations, legal processes, or government requests.
      </p>
      <p className={clsx(classes.para)}>
        c. Business Transfers: <br />
        In the event of a merger, acquisition, or sale of all or a portion of
        our assets, your information may be transferred to the acquiring entity.
      </p>
      <div className={clsx(classes.heading3)}>5. Your Choices:</div>
      <p className={clsx(classes.para)}>You have the right to:</p>
      <p className={clsx(classes.para)}>
        a. Access, Correct, or Delete Your Information: <br />
        You may request access to the personal information we hold about you or
        correct any inaccuracies. You may also request the deletion of your
        personal information from our records.
      </p>
      <p className={clsx(classes.para)}>
        b. Opt-out of Marketing Communications: <br />
        You can opt out of receiving marketing communications from us at any
        time by following the instructions in the transmission or contacting us
        directly.
      </p>
      <div className={clsx(classes.heading3)}>6. Security:</div>
      <p className={clsx(classes.para)}>
        We take reasonable measures to protect your personal information from
        unauthorised access, disclosure, or misuse. However, data transmission
        over the Internet or electronic storage is only partially secure, so we
        cannot guarantee absolute security.
      </p>
      <div className={clsx(classes.heading3)}>
        7. Changes to this Privacy Policy:
      </div>
      <p className={clsx(classes.para)}>
        We may update this Privacy Policy from time to time. Any changes will be
        effective upon posting the revised Privacy Policy on this page, and the
        &quot;Effective Date&quot; at the top will indicate the most recent
        revision date.
      </p>
      <div className={clsx(classes.heading3)}>8. Contact Us:</div>
      <p className={clsx(classes.para)}>
        If you have any questions, concerns, or requests regarding this Privacy
        Policy or our data practices, please get in touch with us at:{" "}
        <a
          href="mailto:info@vmetalsolutions.com"
          target="_blank"
          rel="noreferrer"
        >
          <b>info@vmetalsolutions.com</b>
        </a>
      </p>
      <p className={clsx(classes.para)}>
        Using our website and services signifies your acceptance of this Privacy
        Policy. If you disagree with this Privacy Policy, please refrain from
        using our website and services.
      </p>
      <p className={clsx(classes.para)}>
        Thank you for visiting V Metal Solutions INC.
      </p>
    </main>
  );
};

export default PrivacyPage;

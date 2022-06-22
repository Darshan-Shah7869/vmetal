import React from "react";

import classes from "./SectionInquiryForm.module.css";
import clsx from "clsx";
import DropdownMenu from "components/DropdownMenu/DropdownMenu";

const SectionInquiryForm = () => {
  return (
    <div className={clsx(classes.root, "section")}>
      <div className="container">
        <div className={clsx(classes.title, "heading-2 text-black mb-5 pb-2")}>
          Inquiry Form
        </div>
        <div className={clsx(classes.body, "")}>
          <div className={clsx(classes.row3, "")}>
            <div className={clsx(classes.inputBox, "")}>
              <div className={clsx(classes.label, "")}>First Name</div>
              <input type="text" className={classes.input} />
            </div>
            <div className={clsx(classes.inputBox, "")}>
              <div className={clsx(classes.label, "")}>Last Name</div>
              <input type="text" className={classes.input} />
            </div>
            <div className={clsx(classes.inputBox, "")}>
              <div className={clsx(classes.label, "")}>Email Address</div>
              <input type="text" className={classes.input} />
            </div>
          </div>
          <div className={clsx(classes.row2, "")}>
            <div className={clsx(classes.inputBox, "")}>
              <div className={clsx(classes.label, "")}>Contact Number</div>
              <input type="text" className={classes.input} />
            </div>
            <div className={clsx(classes.inputBox, "")}>
              <div className={clsx(classes.label, "")}>Category</div>
              <DropdownMenu
                label=""
                pvalue="Category1"
                dataArr={["Category1", "Category2", "Category3", "Category4"]}
              />
            </div>
          </div>
          <div className={clsx(classes.row3, "")}>
            <div className={clsx(classes.inputBox, "")}>
              <div className={clsx(classes.label, "")}>Products</div>
              <DropdownMenu
                label=""
                pvalue="Product1"
                dataArr={["Product1", "Product2", "Product3", "Product4"]}
              />
            </div>
            <div className={clsx(classes.inputBox, "")}>
              <div className={clsx(classes.label, "")}>Weight</div>
              <div className="p-relative w-100 d-flex align-items-center">
                <input type="text" className={classes.input} />
                <span className={classes.placeholder}>MT</span>
              </div>
            </div>
            <div className={clsx(classes.inputBox, "")}>
              <div className={clsx(classes.label, "")}>Service</div>
              <DropdownMenu
                label=""
                pvalue="Cut-To-Length"
                dataArr={["Cut-To-Length", "Service2", "Service3", "Service4"]}
              />
            </div>
          </div>
          <div className={clsx(classes.row3, "")}>
            <div className={clsx(classes.inputBox, "")}>
              <div className={clsx(classes.label, "")}>Cut-To-Length</div>
              <div className="p-relative w-100 d-flex align-items-center">
                <input
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
                  placeholder="Thickness"
                  type="text"
                  className={classes.input}
                />
                <span className={classes.placeholder}>MM</span>
              </div>
            </div>
          </div>
          <div className={clsx(classes.row1, "")}>
            <div className={clsx(classes.label, "")}>Message</div>
            <textarea className={classes.message} />
          </div>
        </div>
        <div className={clsx(classes.btnBox, "d-flex align-items-center")}>
          <button className={clsx(classes.btn, "btn btn-white mr-4")}>
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
          </button>
          <button className={clsx(classes.btn, "btn btn-white mr-4")}>
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
                fill="#B9B3B3"
              />
            </svg>
            Download
          </button>
          <button className={clsx(classes.btn, "btn btn-contained")}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionInquiryForm;

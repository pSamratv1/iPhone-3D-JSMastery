import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <section className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an Apple Store</span> or{" "}
            <span className="underline text-blue"> other retailer</span> near
            you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 098765-432-1098
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex  flex-col md:items-center justify-center">
          <p className="font-semibold text-gray text-xs">
            Copy @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, idx) => (
              <p key={idx} className="font-semibold  text-xs text-blue">
                {link}{" "}
                {idx !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

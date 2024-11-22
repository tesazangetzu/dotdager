import React from "react";
import { UsDesktop } from "./items/UsDesktop";
import { UsResponsive } from "./items/UsResponsive";

export const Us = () => {
  return (
    <section className="bg-black text-white px-9 py-16 xl:p-22">
      <div className="container">
        <UsDesktop />
        <UsResponsive />
        <p className="text-xl sm:text-base text-center mt-5">
          Schedule a free consultation on how <br className="hidden sm:block" />{" "}
          bring your digital presence to another level.
        </p>
        <button
          type="button"
          className="block mt-6 mb-4 m-auto py-3 px-12 rounded-full bg-black text-white border border-white"
        >
          Book advice
        </button>
      </div>
    </section>
  );
};

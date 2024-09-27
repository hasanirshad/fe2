import React from "react";

export const Faq = () => {
    return (
      <section className="w-full md:px-28 py-16">
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="md:text-5xl py-8 font-bold text-center mb-6 text-blue-900 flex items-center justify-center">
          FREQUENTLY ASKED QUESTIONS{" "}
          <span className="w-14 h-14 rounded-full flex items-center justify-center">
            <img width={36} src="/assets/svgs/question-mark.svg" alt="" />
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div className="space-y-10">
            <div className="bg-white rounded-lg shadow-md">
              <button
                className="w-full text-left p-8 font-semibold focus:outline-none black-font"
                onclick="toggleDropdown('dropdown1')"
              >
                When Will I Get My Tokens?
                <span
                  className="float-right transition-transform duration-200 black-font"
                  id="arrow1"
                >
                  ▼
                </span>
              </button>
              <div id="dropdown1" className="hidden px-4 py-2 text-gray-700 black-font">
                Answer to "When Will I Get My Tokens?" goes here.
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <button
                className="w-full text-left p-8 font-semibold focus:outline-none black-font"
                onclick="toggleDropdown('dropdown2')"
              >
                Will You List On Exchanges?
                <span
                  className="float-right transition-transform duration-200 black-font"
                  id="arrow2"
                >
                  ▼
                </span>
              </button>
              <div id="dropdown2" className="hidden px-4 py-2 text-gray-700 black-font">
                Answer to "Will You List On Exchanges?" goes here.
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <button
                className="w-full text-left p-8 font-semibold focus:outline-none black-font"
                onclick="toggleDropdown('dropdown3')"
              >
                Will I Pay Any Tax For Buying And Selling?
                <span
                  className="float-right transition-transform duration-200 black-font"
                  id="arrow3"
                >
                  ▼
                </span>
              </button>
              <div id="dropdown3" className="hidden px-4 py-2 text-gray-700 black-font">
                Answer to "Will I Pay Any Tax For Buying And Selling?" goes here.
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <button
                className="w-full text-left p-8 font-semibold focus:outline-none black-font"
                onclick="toggleDropdown('dropdown4')"
              >
                Do You Have An Anti-Dump Plan For The Tokens?
                <span
                  className="float-right transition-transform duration-200 black-font"
                  id="arrow4"
                >
                  ▼
                </span>
              </button>
              <div id="dropdown4" className="hidden px-4 py-2 text-gray-700 black-font">
                Answer to "Do You Have An Anti-Dump Plan For The Tokens?" goes here.
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div className="bg-white rounded-lg shadow-md">
              <button
                className="w-full text-left p-8  font-semibold focus:outline-none black-font"
                onclick="toggleDropdown('dropdown5')"
              >
                Is ETFSwap Regulated?
                <span
                  className="float-right transition-transform duration-200 black-font"
                  id="arrow5"
                >
                  ▼
                </span>
              </button>
              <div id="dropdown5" className="hidden px-4 py-2 text-gray-700 black-font">
                Answer to "Is ETFSwap Regulated?" goes here.
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <button
                className="w-full text-left p-8  font-semibold focus:outline-none black-font"
                onclick="toggleDropdown('dropdown6')"
              >
                How Can I See Your Community?
                <span
                  className="float-right transition-transform duration-200 black-font"
                  id="arrow6"
                >
                  ▼
                </span>
              </button>
              <div id="dropdown6" className="hidden px-4 py-2 text-gray-700 black-font">
                Answer to "How Can I See Your Community?" goes here.
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <button
                className="w-full text-left p-8  font-semibold focus:outline-none black-font"
                onclick="toggleDropdown('dropdown7')"
              >
                What Returns Can I Expect For Adding Liquidity?
                <span
                  className="float-right transition-transform duration-200 black-font"
                  id="arrow7"
                >
                  ▼
                </span>
              </button>
              <div id="dropdown7" className="hidden px-4 py-2 text-gray-700 black-font">
                Answer to "What Returns Can I Expect For Adding Liquidity?" goes
                here.
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <button
                className="w-full text-left p-8  font-semibold focus:outline-none black-font"
                onclick="toggleDropdown('dropdown8')"
              >
                What Revenue Do You Expect ETFSwap Will Generate?
                <span
                  className="float-right transition-transform duration-200 black-font"
                  id="arrow8"
                >
                  ▼
                </span>
              </button>
              <div id="dropdown8" className="hidden px-4 py-2 text-gray-700 black-font">
                Answer to "What Revenue Do You Expect ETFSwap Will Generate?" goes
                here.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     
    );}
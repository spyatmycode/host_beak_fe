import React from "react";
import { deleteiconred } from "../assets/shared/shared";

const Add = () => {
  return (
    <div className="w-full pl-10 h-full overflow-y-auto py-10 pr-10">
      <h2 className="font-[700] text-[36px] py-5 font-inter">Add bill</h2>

      {/* Inputs */}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-7 py-10 lg:w-[85%] w-full gap-[100px]">
        <div className="flex flex-col items-start w-full gap-2">
          <label htmlFor="" className="text-[#304156] text-[14px] font-inter font-medium">
            Vendor
          </label>

          <select
            name=""
            id=""
            className="text-[#727E8C] font-ibm-plex-sans text-[17px] w-full select-custom border px-4 py-4 rounded-md font-normal"
          >
            <option value="default">Choose</option>
          </select>
        </div>
        <div className="flex flex-col items-start w-full gap-2 ">
          <label htmlFor="" className="text-[#304156]  text-[14px] font-inter font-medium">
            Date
          </label>

          <input
            type="date"
            defaultValue={"2021-03-25"}
            className="text-[#727E8C] font-ibm-plex-sans text-[17px] w-full border px-4 py-4 rounded-md font-normal"
          />
        </div>
        <div className="flex flex-col items-start  w-full gap-2 ">
          <label htmlFor="" className="text-[#304156] text-[14px] font-inter font-medium">
            Bill #
          </label>

          <input
            type="text"
            className="text-[#727E8C] font-ibm-plex-sans text-[17px] w-full border px-4 py-4 rounded-md  font-normal"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col items-start w-full gap-2 font-inter font-medium">
          <label htmlFor="" className="text-[#304156] text-[14px]">
            Currency
          </label>

          <select
            name=""
            id=""
            className="text-[#727E8C] font-ibm-plex-sans text-[17px] w-full select-custom border px-4 py-4 rounded-md font-normal"
          >
            <option value="default">USD - U.S dollar</option>
          </select>
        </div>
        <div className="flex flex-col items-start w-full gap-2 ">
          <label htmlFor="" className="text-[#304156]  text-[14px] font-inter font-medium">
            Due Date
          </label>

          <input
            type="date"
            defaultValue={"2021-03-25"}
            className="text-[#727E8C] font-ibm-plex-sans text-[17px] w-full border px-4 py-4 rounded-m font-normal"
          />
        </div>
        <div className="flex flex-col items-start  w-full gap-2 relative">
          <label htmlFor="" className="text-[#304156] text-[14px] font-inter font-medium">
            Notes
          </label>

          <textarea
            type="text" 
            className="text-[#727E8C] resize-none font-ibm-plex-sans w-full text-[17px]  border px-4 py-4 rounded-md lg:absolute h-44 top-8 font-normal"
          />
        </div>

        {/* Row 3 */}

        <div className="flex flex-col items-start w-full gap-2 ">
          <label htmlFor="" className="text-[#304156]  text-[14px] font-inter font-medium">
            Upload Copy of Bill
          </label>

          <select
            name=""
            id=""
            className="text-[#727E8C] font-ibm-plex-sans text-[17px] w-full select-custom border px-4 py-4 rounded-md font-normal outline-none upload-custom" disabled
          >
            <option value="default">Upload File</option>
          </select>
          
        </div>
        <div className="flex flex-col items-start  w-full gap-2 ">
          <label htmlFor="" className="text-[#304156] text-[14px] font-inter font-medium">
            P.O / S.O
          </label>

          <input
            type="text"
            className="text-[#727E8C] font-ibm-plex-sans text-[17px] w-full border px-4 py-4 rounded-md font-normal"
          />
        </div>
      </div>

      {/* Table */}

      <div className="relative overflow-x-auto border sm:rounded-lg px-2 my-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 overflow-x-auto">
          <thead className="text-xs text-gray-700 capitalize text-[20px] bg-white border-b-2 border-b-[#98A2B3]">
            <tr className="">
              <th scope="col" className="font-inter px-6 py-3">
                Item
              </th>
              <th scope="col" className="font-inter px-6 py-3 whitespace-nowrap">
                Expense Category
              </th>
              <th scope="col" className="font-inter px-6 py-3">
                Description
              </th>
              <th scope="col" className="font-inter px-6 py-3">
                Qty
              </th>
              <th scope="col" className="font-inter px-6 py-3">
                Price
              </th>
              <th scope="col" className="font-inter px-6 py-3">
                Tax
              </th>
              <th scope="col" className="font-inter px-6 py-3">
                Amount
              </th>
              <th scope="col" className="font-inter px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b font-ibm-plex-sans">
              <td className="px-3 py-4 w-44 whitespace-nowrap " scope="col">
                <select
                  name=""
                  id=""
                  className="text-[#727E8C] text-[17px] w-full select-custom border px-4 py-4 rounded-md"
                >
                  <option value="default">Choose</option>
                </select>
              </td>
              <td className="px-6 py-4 w-56">
                <select
                  name=""
                  id=""
                  className="text-[#727E8C] text-[17px] w-full select-custom border px-4 py-4 rounded-md"
                >
                  <option value="default">Choose</option>
                </select>
              </td>
              <td className="px-6 py-4 w-[100px]" >
                <input
                  type="text"
                  className="text-[#727E8C] text-[17px] w-full border px-4 py-4 rounded-md"
                />
              </td>
              <td className="px-6 py-4 w-[100px]" colspan="1">
                <input
                  type="number"
                  className="text-[#727E8C] text-[17px] w-full border px-4 py-4 rounded-md"
                  placeholder={0}
                />
              </td>
              <td className="px-6 py-4">
                <input
                  type="number"
                  className="text-[#727E8C] text-[17px] w-full border px-4 py-4 rounded-md"
                  placeholder={1}
                />
              </td>
              <td className="px-6 py-4" >
                <input
                  type="number"
                  className="text-[#727E8C] text-[17px] w-full border px-4 py-4 rounded-md"
                  placeholder={""}
                />
              </td>

              <td className="px-6 py-4">N0.00</td>
              <td className="flex items-center justify-center h-20 w-20">
                <img src={deleteiconred} alt="" className="" />
              </td>
            </tr>
          </tbody>

          <tfoot className="w-full font-inter">
            <tr className="py-10">
              <td colspan="5"></td>
              <td
                colSpan={"4"}
                className="flex items-start gap-[32px] py-3"
              >
                <div className="flex flex-col items-end gap-[17.5px]">
                  <span>
                  Subtotal:

                  </span>
                  <span>
                  Total(NGN):


                    
                  </span>
                </div>
                <div  className="flex flex-col items-start gap-[17.5px]">
                  <span>
                  N0.00

                  </span>
                  <span>
                  N0.00

                  </span>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Buttons */}

      <div className="w-full flex !justify-end py-10">
        <div className="flex w-full lg:w-auto items-center gap-5 flex-col lg:flex-row font-inter">
          <button className="border rounded-md bg-white text-[18px] w-full lg:w-[129px] text-[#667085] font-[300] px-5 py-4">
            Cancel
          </button>
          <button className="rounded-md bg-[#3DB0FF] w-full lg:w-[112px] text-[18px] text-white font-[300] px-5 py-4">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;

import React from "react";
import { chat, newstatus } from "../assets/shared/shared";

const View = () => {
  const data = [
    {
      reportName: "February 2021 Report",
      isNew: true,
      date: "4th , October 2021  11:20am",
    },
    {
      reportName: "February 2021 Report",
      isNew: false,
      date: "4th , October 2021  11:20am",
    },
    {
      reportName: "February 2021 Report",
      isNew: false,
      date: "4th , October 2021  11:20am",
    },
    {
      reportName: "February 2021 Report",
      isNew: false,
      date: "4th , October 2021  11:20am",
    },
    {
      reportName: "February 2021 Report",
      isNew: false,
      date: "4th , October 2021  11:20am",
    },
    {
      reportName: "February 2021 Report",
      isNew: false,
      date: "4th , October 2021  11:20am",
    },
    {
      reportName: "February 2021 Report",
      isNew: false,
      date: "4th , October 2021  11:20am",
    },
    {
      reportName: "February 2021 Report",
      isNew: false,
      date: "4th , October 2021  11:20am",
    },
    {
      reportName: "February 2021 ",
      isNew: false,
      date: "4th , October 2021  11:20am",
    },
  ];
  return (
    <div className="w-full pl-10 h-full overflow-y-auto py-10 lg:pr-24 pr-10 font-inter">
      <h2 className="font-[700] text-[36px] py-5 ">View reports</h2>

      <div className="relative overflow-x-auto sm:rounded-lg border-t border-b w-full">
        <table className="w-full text-sm text-left rtl:text-left  text-gray-500">
          <tbody>
            {data.map((each, i) => {
              return (
                <tr className={`bg-white hover:bg-gray-50  ${(i !== 0 && i !== (data.length - 1)) && "border-t border-b"} border-r border-l cursor-pointer`}>
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <label for="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td
                    colSpan={0}
                    className=" py-4 text-gray-900 whitespace-nowrap flex items-center gap-3"
                  >
                    <p className={`capitalize text-[#304156] text-[20px] ${each.isNew && "text-[#081494]"} whitespace-nowrap`}>
                      {each.reportName}
                    </p>

                    <img
                      src={newstatus}
                      alt=""
                      className={`${!each.isNew && "invisible"} whitespace-nowrap`}
                    />
                  </td>

                <td className="py-5 text-[18px] text-[#667085] lg:pr-24 whitespace-nowrap">{each.date}</td>

                  <td className="flex items-center justify-end gap-[37px] pr-7 py-4">
                    <button className="px-6 py-3 bg-[#3DB0FF] font-semibold text-[20px] text-white rounded-sm">
                      View
                    </button>

                    <span className="cursor-pointer">
                      <img src={chat} alt="" />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;

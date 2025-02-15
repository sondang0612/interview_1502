/* eslint-disable @next/next/no-img-element */
import useGetPageContentByParams from "@/hooks/useTranslation";
import CalendarDeskTop from "../CalendarDeskTop";
import TextEditor from "../TextEditor";
import useDeviceType from "@/hooks/useDeviceType";
import Calendar from "../Calendar";

const BookCalendar = () => {
  const { pageContent } = useGetPageContentByParams();

  const { deviceType } = useDeviceType();

  return (
    <div className="mt-20 mb-[140px]">
      <div>
        <div className="flex items-center justify-center gap-10 h-[3.75rem] px-24">
          <div
            className="h-0.5 xl:w-80 w-0"
            style={{ backgroundColor: "rgba(187, 187, 187, 1)" }}
          />
          <h3 className="text-primary text-2xl lg:text-[2rem] xl:text-[3.25rem] font-semibold md:leading-[3.75rem] text-center leading-normal uppercase">
            {pageContent?.bloc_2_2?.title}
          </h3>
          <div
            className="h-0.5 xl:w-80 w-0"
            style={{ backgroundColor: "rgba(187, 187, 187, 1)" }}
          />
        </div>
        <div className="mt-10">
          {deviceType === "mobile" ? <Calendar /> : <CalendarDeskTop />}
          <div className="md:mt-10 mt-6 flex gap-2 md:gap-5 flex-col">
            <div className="flex flex-row items-center gap-4">
              <p className="text-base md:text-2xl text-secondary w-[7.5rem]">
                {pageContent?.bloc_2_2?.btn_1[0]}:
              </p>
              <input
                className="shadow-primary flex-1 h-10 rounded-full px-4 outline-none common-border"
                placeholder={pageContent?.bloc_2_2?.btn_1[1]}
              />
            </div>
            <div className="flex flex-row items-center gap-4">
              <p className="text-base md:text-2xl text-secondary w-[7.5rem]">
                {pageContent?.bloc_2_2?.btn_2[0]}:
              </p>
              <input
                className="shadow-primary flex-1 h-10 rounded-full px-4 outline-none common-border"
                placeholder={pageContent?.bloc_2_2?.btn_2[1]}
              />
            </div>
            <div className="flex flex-row items-start gap-4">
              <p
                className={`text-base md:text-2xl text-secondary w-[7.5rem] ${
                  deviceType === "mobile" && "4.5rem"
                }`}
              >
                {pageContent?.bloc_2_2?.btn_3}:
              </p>
              <div className="flex-1">
                <TextEditor />
              </div>
            </div>
            <div className="flex flex-row items-start gap-4">
              <p className="text-base md:text-2xl text-secondary w-[7.5rem]">
                {pageContent?.bloc_2_2?.btn_4[0]}:
              </p>
              <button className="flex items-center justify-center gap-0.5 flex-col sm:flex-row sm:gap-4">
                <div className="flex items-center justify-center gap-1">
                  <img src="/Paperclip.svg" alt="Paperclip" />
                  <p className="font-medium text-sm md:text-xl text-link">
                    {pageContent?.bloc_2_2?.btn_4[1]}:
                  </p>
                </div>
                <p className="font-normal text-blur">
                  (*{pageContent?.bloc_2_2?.btn_4[2]}:)
                </p>
              </button>
            </div>

            <div className="flex items-center justify-end gap-4 mt-8">
              <button className="bp font-medium text-lg text-secondary w-[12.5rem] flex items-center justify-center common-border rounded-full h-10 md:h-12 hover:bg-[#FFEDE8]">
                {pageContent?.bloc_2_2?.btn_5}
              </button>
              <button className="bp font-medium text-lg text-white hover:bg-[#CA3E1B] bg-primary w-[12.5rem] gap-2 flex items-center justify-center rounded-full h-10 md:h-12">
                {pageContent?.bloc_2_2?.btn_6}
                <img src="/send-2.svg" alt="plan" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCalendar;

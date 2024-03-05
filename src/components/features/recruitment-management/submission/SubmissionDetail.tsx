import React from "react";
import { ActionTypeAdd, PersonSubmission } from "./SubmissionTable";
import { IconButton, Modal, Tooltip } from "@mui/material";
import { DatetimePicker, SelectBox } from "@/components/shared/inputs";
import TestOptions from "@/utils/data/json/test.json";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ClearIcon from "@mui/icons-material/Clear";
import MicIcon from "@mui/icons-material/Mic";

import { ACTIONS } from "@/utils/constants";
import { format } from "date-fns";

interface Props {
  data: PersonSubmission;
  open: boolean;
  onClose: () => void;
  handleOpenModal: (person: PersonSubmission, action?: ActionTypeAdd) => void;
}

const classNameCol = "md:col-span-1 xs:col-span-2";

export const SubmissionDetail: React.FC<Props> = ({
  data,
  onClose,
  open,
  handleOpenModal,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[80vw] w-full h-auto max-h-[80vh] max-[768px]:overflow-y-scroll bg-white mx-auto">
        <div className="grid grid-cols-6 h-full md:p-8 p-4">
          <div className="lg:col-span-4 col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={classNameCol}>
              <span className="font-bold">Họ và tên: </span>
              {data.full_name}
            </div>
            <div className={classNameCol}>
              <span className="font-bold">Ngày tháng năm sinh: </span>
              {data.birthday}
            </div>
            <div className={classNameCol}>
              <span className="font-bold">Email: </span>
              {data.email}
            </div>
            <div className={classNameCol}>
              <span className="font-bold">Số điện thoại: </span>
              {data.phone_number}
            </div>
            <div className={classNameCol}>
              <span className="font-bold">Nơi làm việc: </span>
              {data.work_place}
            </div>
            <div className={classNameCol}>
              <span className="font-bold">
                Đã từng tham gia hoạt động xã hội:{" "}
              </span>

              {data.has_social_activities ? "Có" : "Không"}
            </div>
            <div className={classNameCol}>
              <span className="font-bold">
                Kỷ niệm đáng nhớ khi tham gia hoạt động xã hội:{" "}
              </span>
              {data.memories}
            </div>
            <div className={classNameCol}>
              <span className="font-bold">Vị trí mong muốn: </span>
              {data.position}
            </div>
            <div className={classNameCol}>
              <span className="font-bold">
                Điều mong muốn nhận khi tham gia KTCB:{" "}
              </span>
              {data.hope_to_receive}
            </div>
          </div>

          <div className="lg:col-span-2 col-span-6 gap-4 flex flex-col max-[1024px]:mt-4">
            <div className="flex flex-col gap-1">
              <p className="font-bold">Chọn ngày giờ phỏng vấn</p>
              <DatetimePicker
                onChange={(e) => console.log(e)}
                fullWidth
                defaultValue={format(
                  new Date(data?.date_time as string),
                  "yyyy-MM-dd HH:mm"
                )}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold">Chọn bài test</p>
              <SelectBox
                options={TestOptions}
                value={""}
                onChange={(value) => console.log(value)}
                fullWidth
              />
            </div>
            <div className="flex items-center justify-start min-w-">
              <Tooltip title="Chuyển đơn tuyển sang thành viên chính thức">
                <IconButton
                  onClick={() => {
                    handleOpenModal(data, ACTIONS["ACCEPT"] as ActionTypeAdd);
                  }}
                >
                  <PeopleAltIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Chuyển đơn tuyển sang vòng phỏng vấn">
                <IconButton
                  onClick={() =>
                    handleOpenModal(
                      data,
                      ACTIONS["ACCEPT_INTERVIEW"] as ActionTypeAdd
                    )
                  }
                >
                  <MicIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Loại đơn tuyển">
                <IconButton
                  onClick={() => {
                    handleOpenModal(data, ACTIONS["REJECT"] as ActionTypeAdd);
                  }}
                >
                  <ClearIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

import React from "react";
import { Person } from "./InterviewTable";
import { IconButton, Modal, Tooltip } from "@mui/material";
import { DatetimePicker, SelectBox } from "@/components/shared/inputs";
import TestOptions from "@/utils/data/json/test.json";
import { ActionType } from "@/@types/common";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ClearIcon from "@mui/icons-material/Clear";
import { ACTIONS } from "@/utils/constants";

interface Props {
  data: Person;
  open: boolean;
  onClose: () => void;
  openConfirm: () => void;
  openDetail: () => void;
}

const classNameCol = "col-span-1";

export const InterviewDetail: React.FC<Props> = ({
  data,
  onClose,
  open,
  openConfirm,
  openDetail,
}) => {
  const handleOpenModal = (action: ActionType) => {
    action ? openConfirm() : openDetail();

    // setAction(action);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[80vw] w-full h-auto min-h-[700px] bg-white mx-auto">
        <div className="grid grid-cols-6 h-full p-8">
          <div className="col-span-4 grid grid-cols-2 gap-4">
            <div className={classNameCol}>Họ và tên: {data.full_name}</div>
            <div className={classNameCol}>
              Ngày tháng năm sinh: {data.birthday}
            </div>
            <div className={classNameCol}>Email: {data.email}</div>
            <div className={classNameCol}>
              Số điện thoại: {data.phone_number}
            </div>
            <div className={classNameCol}>Nơi làm việc: {data.work_place}</div>
            <div className={classNameCol}>
              Đã từng tham gia hoạt động xã hội:{" "}
              {data.has_social_activities ? "Có" : "Không"}
            </div>
            <div className={classNameCol}>
              Kỷ niệm đáng nhớ khi tham gia hoạt động xã hội: {data.memories}
            </div>
            <div className={classNameCol}>
              Vị trí mong muốn: {data.position}
            </div>
            <div className={classNameCol}>
              Điều mong muốn nhận khi tham gia KTCB: {data.hope_to_receive}
            </div>
            <div className={classNameCol}>
              Link GG meet:
              <a href={data.link_gg_met} target="_blank" className="underline">
                {data.link_gg_met}
              </a>
            </div>
          </div>

          <div className="col-span-2 gap-4 flex flex-col">
            <div className="flex flex-col gap-1">
              <p>Chọn ngày giờ phỏng vấn</p>
              <DatetimePicker onChange={(e) => console.log(e)} fullWidth />
            </div>
            <div className="flex flex-col gap-1">
              <p>Chọn bài test</p>
              <SelectBox
                options={TestOptions}
                value={""}
                onChange={(value) => console.log(value)}
                fullWidth
              />
            </div>
            <div className="flex items-center justify-center min-w-">
              <Tooltip title="Chuyển đơn tuyển sang thành viên chính thức">
                <IconButton
                  onClick={() =>
                    handleOpenModal(ACTIONS["ACCEPT"] as ActionType)
                  }
                >
                  <PeopleAltIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Loại đơn tuyển">
                <IconButton
                  onClick={() =>
                    handleOpenModal(ACTIONS["REJECT"] as ActionType)
                  }
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

import React from "react";
import { Person } from "./InterviewTable";
import { Modal } from "@mui/material";

interface Props {
  data: Person;
  open: boolean;
  onClose: () => void;
}

export const InterviewDetail: React.FC<Props> = ({ data, onClose, open }) => {
  console.log("data", data);

  return (
    <Modal open={open} onClose={onClose}>
      <>{data?.email}</>
    </Modal>
  );
};

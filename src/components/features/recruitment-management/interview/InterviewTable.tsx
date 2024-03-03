import { useMemo, useState } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { useTable } from "@/libs/hooks/useTable";
import { IconButton, MenuItem, Tooltip, Typography } from "@mui/material";
import { IMember } from "@/@types/member";
import { ellipsisText } from "@/utils/common";
import { ModalConfirm } from "@/components/shared/modals";
import { ACTIONS } from "@/utils/constants";
import { useDisclosure } from "@/libs/hooks/useDisclosure";
import { ActionType } from "@/@types/common";

import VisibilityIcon from "@mui/icons-material/Visibility";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ClearIcon from "@mui/icons-material/Clear";
import ToastSuccess from "@/components/shared/toasts/ToastSuccess";
import { InterviewDetail } from "./InterviewDetail";

export interface Person extends IMember {
  date_time: string;
  test_id: number;
  link_gg_met: string;
}

const TEXT_TOAST = {
  [ACTIONS["ACCEPT"]]: "Xác nhận thành viên chính thức thành công!",
  [ACTIONS["REJECT"]]: "Xác nhận loại đơn tuyển thành công",
};

const TEXT_CONFIRM = {
  [ACTIONS["ACCEPT"]]: "Xác nhận chuyển đơn tuyển sang THÀNH VIÊN CHÍNH THỨC",
  [ACTIONS["REJECT"]]: "Xác nhận LOẠI đơn tuyển",
};

const data: Person[] = [
  {
    full_name: "123",
    email: "Kentucky@gmail.com",
    birthday: "27/02/2001",
    phone_number: "0334455667",
    address: "144 Xuan Thuy",
    work_place: "144 Xuan Thuy",
    has_social_activities: "Đã từng",
    memories: "Làm việc nhóm tốt",
    position: "Thành viên",
    hope_to_receive: "Kinh nghiệm, kiến thức và trải nghiệm",
    date_time: "20/12/2023 12:00:00",
    test_id: 1,
    link_gg_met: "https://meet.google.com/lookup/abc",
  },
  {
    full_name: "123",
    email: "Ohio@gmail.com",
    birthday: "27/02/2001",
    phone_number: "0334455667",
    address: "144 Xuan Thuy",
    work_place: "144 Xuan Thuy",
    has_social_activities: "Chưa từng",
    memories: "Làm việc nhóm tốt",
    position: "Thành viên",
    hope_to_receive: "Kinh nghiệm, kiến thức và trải nghiệm",
    date_time: "20/12/2023 12:00:00",
    test_id: 1,
    link_gg_met: "https://meet.google.com/lookup/abc",
  },
  {
    full_name: "123",
    email: "West Virginia@gmail.com",
    birthday: "27/02/2001",
    phone_number: "0334455667",
    address: "144 Xuan Thuy",
    work_place: "144 Xuan Thuy",
    has_social_activities: "Đã từng",
    memories:
      "Làm việc nhóm tốt Làm việc nhóm tốt Làm việc nhóm tốt Làm việc nhóm tốt Làm việc nhóm tốt Làm việc nhóm tốt Làm việc nhóm tốt Làm việc nhóm tốt Làm việc nhóm tốtLàm việc nhóm tốtLàm việc nhóm tốt Làm việc nhóm tốt Làm việc nhóm tốt ",
    position: "Thành viên",
    hope_to_receive: "Kinh nghiệm, kiến thức và trải nghiệm",
    date_time: "20/12/2023 12:00:00",
    test_id: 1,
    link_gg_met: "https://meet.google.com/lookup/abc",
  },
  {
    full_name: "123",
    email: "Nebraska@gmail.com",
    birthday: "27/02/2001",
    phone_number: "0334455667",
    address: "144 Xuan Thuy",
    work_place: "144 Xuan Thuy",
    has_social_activities: "Chưa từng",
    memories: "Làm việc nhóm tốt",
    position: "Thành viên",
    hope_to_receive: "Kinh nghiệm, kiến thức và trải nghiệm",
    date_time: "20/12/2023 12:00:00",
    test_id: 1,
    link_gg_met: "https://meet.google.com/lookup/abc",
  },
  {
    full_name: "123",
    email: "Nebraska@gmail.com",
    birthday: "27/02/2001",
    phone_number: "0334455667",
    address: "144 Xuan Thuy",
    work_place: "144 Xuan Thuy",
    has_social_activities: "Chưa từng",
    memories: "Làm việc nhóm tốt",
    position: "Thành viên",
    hope_to_receive: "Kinh nghiệm, kiến thức và trải nghiệm",
    date_time: "20/12/2023 12:00:00",
    test_id: 1,
    link_gg_met: "https://meet.google.com/lookup/abc",
  },
];

const InterviewTable = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "full_name",
        header: "Họ và tên",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 150,
      },
      {
        accessorKey: "birthday",
        header: "Ngày sinh",
        size: 150,
      },
      // {
      //   accessorKey: "phone_number",
      //   header: "Số điện thoại",
      //   size: 150,
      // },
      // {
      //   accessorKey: "address",
      //   header: "Khu vực sống",
      //   size: 150,
      // },
      // {
      //   accessorKey: "work_place",
      //   header: "Nơi làm việc",
      //   size: 150,
      // },
      // {
      //   accessorKey: "has_social_activities",
      //   header: "Đã từng tham gia hoạt động xã hội",
      //   size: 200,
      // },
      // {
      //   accessorKey: "memories",
      //   header: "Kỷ niệm đáng nhớ khi tham gia hoạt động xã hội",
      //   size: 200,
      //   Cell({ row }) {
      //     return (
      //       <Tooltip title={row.original.memories}>
      //         <Typography
      //           sx={{
      //             ...ellipsisText(2),
      //             fontSize: "14px",
      //           }}
      //         >
      //           {row.original.memories}
      //         </Typography>
      //       </Tooltip>
      //     );
      //   },
      // },
      // {
      //   accessorKey: "position",
      //   header: "Vị trí mong muốn trong KTCB",
      //   size: 150,
      // },
      // {
      //   accessorKey: "hope_to_receive",
      //   header: "Điều mong muốn nhận khi tham gia KTCB",
      //   size: 200,
      //   Cell({ row }) {
      //     return (
      //       <Tooltip title={row.original.hope_to_receive}>
      //         <Typography
      //           sx={{
      //             ...ellipsisText(2),
      //             fontSize: "14px",
      //           }}
      //         >
      //           {row.original.hope_to_receive}
      //         </Typography>
      //       </Tooltip>
      //     );
      //   },
      // },
      {
        accessorKey: "link_gg_met",
        header: "Link Google Meet",
        size: 150,
        Cell({ row }) {
          return (
            <a href={row.original.link_gg_met} target="_blank">
              {row.original.link_gg_met}
            </a>
          );
        },
      },
      {
        accessorKey: "date_time",
        header: "Ngày giờ phỏng vấn",
        size: 150,
      },
      {
        accessorKey: "test_id",
        header: "Bài test",
        size: 150,
      },
    ],
    []
  );

  const [opened, { open, close }] = useDisclosure();
  const [openedDetail, { open: openDetail, close: closeDetail }] =
    useDisclosure();

  const [openToast, setOpenToast] = useState(false);

  const [rowSelected, setRowSelected] = useState<Person>();
  const [action, setAction] = useState<ActionType>();

  const handleOpenModal = (person: Person, action?: ActionType) => {
    action ? open() : openDetail();

    setRowSelected(person);
    setAction(action);
  };

  const handleComfirm = () => {
    setOpenToast(true);

    close();
  };

  const table = useTable({
    columns,
    data,
    enableRowActions: true,
    renderTopToolbar: () => <div />,
    renderBottomToolbar: () => <div />,
    renderRowActions: ({ row }) => (
      <div className="flex items-center justify-center min-w-">
        <Tooltip title="Xem hồ sơ của đơn tuyển">
          <IconButton onClick={() => handleOpenModal(row.original)}>
            <VisibilityIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Chuyển đơn tuyển sang thành viên chính thức">
          <IconButton
            onClick={() =>
              handleOpenModal(row.original, ACTIONS["ACCEPT"] as ActionType)
            }
          >
            <PeopleAltIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Loại đơn tuyển">
          <IconButton
            onClick={() =>
              handleOpenModal(row.original, ACTIONS["REJECT"] as ActionType)
            }
          >
            <ClearIcon />
          </IconButton>
        </Tooltip>
      </div>
    ),
    positionActionsColumn: "last",
  });

  return (
    <>
      <MaterialReactTable table={table} />

      <ToastSuccess
        open={openToast}
        onClose={() => setOpenToast(false)}
        heading="Xác nhận thành công"
        content={`${TEXT_TOAST[action as ActionType]}`}
      />
      <ModalConfirm
        title={`Thông báo xác nhận`}
        open={opened}
        onClose={close}
        content={`${TEXT_CONFIRM[action as ActionType]}`}
        onConfirm={handleComfirm}
      />

      {rowSelected && (
        <InterviewDetail
          open={openedDetail}
          onClose={closeDetail}
          data={rowSelected!}
        />
      )}
    </>
  );
};

export { InterviewTable };

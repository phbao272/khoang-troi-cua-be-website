import { useMemo, useState } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { useTable } from "@/libs/hooks/useTable";
import { IOfficialMember } from "@/@types/member";
import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import { useDisclosure } from "@/libs/hooks/useDisclosure";
import { MemberDetail } from "./MemberDetail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { EllipsisCell } from "@/components/shared/table";

export interface IMemberList extends IOfficialMember {
  team?: string;
  position?: string;
}

const data: IMemberList[] = [
  {
    full_name: "123",
    email: "Kentucky_dai_dai_dai_ktcb@gmail.com",
    birthday: "27/02/2001",
    phone_number: "0334455667",
    address: "144 Xuan Thuy",
    work_place: "144 Xuan Thuy",
    team: "Cùng bé trải nghiệm",
    position: "Tình nguyện viên",
    bank_account: "123456789",
    bank_name: "ACB",
  },
  {
    full_name: "123",
    email: "Ohio@gmail.com",
    birthday: "27/02/2001",
    phone_number: "0334455667",
    address: "144 Xuan Thuy",
    work_place: "144 Xuan Thuy",
    team: "Cùng bé trải nghiệm",
    position: "Tình nguyện viên",
    bank_account: "123456789",
    bank_name: "ACB",
  },
  {
    full_name: "123",
    email: "West Virginia@gmail.com",
    birthday: "27/02/2001",
    phone_number: "0334455667",
    address: "144 Xuan Thuy",
    work_place: "144 Xuan Thuy",
    team: "Cùng bé trải nghiệm",
    position: "Tình nguyện viên",
    bank_account: "123456789",
    bank_name: "ACB",
  },
  {
    full_name: "123",
    email: "Nebraska@gmail.com",
    birthday: "27/02/2001",
    phone_number: "0334455667",
    address: "144 Xuan Thuy",
    work_place: "144 Xuan Thuy",
    team: "Cùng bé trải nghiệm",
    position: "Tình nguyện viên",
    bank_account: "123456789",
    bank_name: "ACB",
  },
  {
    full_name: "123",
    email: "Nebraska@gmail.com",
    birthday: "27/02/2001",
    phone_number: "0334455667",
    address: "144 Xuan Thuy",
    work_place: "144 Xuan Thuy",
    team: "Cùng bé trải nghiệm",
    position: "Tình nguyện viên dsajdsajd sadsad sa ds ad sa d sa dsa",
    bank_account: "123456789",
    bank_name: "ACB",
  },
];

const MemberListTable = () => {
  const [openedDetail, { open: openDetail, close: closeDetail }] =
    useDisclosure();

  const [rowSelected, setRowSelected] = useState<IMemberList>();

  const handleOpenModal = (person: IMemberList) => {
    openDetail();
    setRowSelected(person);
  };

  const columns = useMemo<MRT_ColumnDef<IMemberList>[]>(
    () => [
      {
        accessorKey: "full_name",
        header: "Họ và tên",
        size: 200,
        Cell: (props) => <EllipsisCell {...props} />,
      },
      {
        accessorKey: "birthday",
        header: "Ngày sinh",
        size: 200,
        Cell: (props) => <EllipsisCell {...props} />,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 200,
        Cell: (props) => <EllipsisCell {...props} />,
      },
      {
        accessorKey: "phone_number",
        header: "Số điện thoại",
        size: 200,
        Cell: (props) => <EllipsisCell {...props} />,
      },
      {
        accessorKey: "team",
        header: "Team",
        size: 200,
        Cell: (props) => <EllipsisCell {...props} />,
      },
      {
        accessorKey: "position",
        header: "Vị trí",
        size: 200,
        Cell: (props) => <EllipsisCell {...props} />,
      },
    ],
    []
  );

  const table = useTable({
    columns,
    data,
    renderTopToolbar: () => <div />,
    renderBottomToolbar: () => <div />,
    enableRowActions: true,
    renderRowActions: ({ row }) => (
      <div className="flex items-center justify-center min-w-">
        <Tooltip title="Xem hồ sơ">
          <IconButton onClick={() => handleOpenModal(row.original)}>
            <VisibilityIcon />
          </IconButton>
        </Tooltip>
      </div>
    ),
    positionActionsColumn: "last",
  });

  const handleDownload = () => {
    console.log("download");
  };

  return (
    <div className="min-h-[520px] flex flex-col gap-4">
      <Typography fontSize={28} fontWeight={"bold"}>
        Danh sách thành viên
      </Typography>
      <MaterialReactTable table={table} />

      <div className="flex items-center justify-end">
        <Button
          variant="contained"
          sx={{
            width: "fit-content",
          }}
          color="secondary"
          onClick={handleDownload}
        >
          Tải về danh sách thành viên
        </Button>
      </div>

      {rowSelected && (
        <MemberDetail
          open={openedDetail}
          onClose={closeDetail}
          data={rowSelected!}
        />
      )}
    </div>
  );
};

export { MemberListTable };

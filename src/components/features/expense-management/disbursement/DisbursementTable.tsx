import { IExpense } from "@/@types/expense";
import React, { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { useTable } from "@/libs/hooks/useTable";
import { IconButton, Tooltip } from "@mui/material";
import { ACTIONS } from "@/utils/constants";
import { ActionType } from "@/@types/common";

import VisibilityIcon from "@mui/icons-material/Visibility";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ClearIcon from "@mui/icons-material/Clear";

const data: IExpense[] = [
  {
    title: "123",
    content: "Kentucky@gmail.com",
    date: "2022-10-10 10:10:10",
    img_url: "https://picsum.photos/200",
  },
  {
    title: "123",
    content: "Ohio@gmail.com",
    date: "2022-10-10 10:10:10",
    img_url: "https://picsum.photos/200",
  },
  {
    title: "123",
    content: "West Virginia@gmail.com",
    date: "2022-10-10 10:10:10",
    img_url: "https://picsum.photos/200",
  },
  {
    title: "123",
    content: "Nebraska@gmail.com",
    date: "2022-10-10 10:10:10",
    img_url: "https://picsum.photos/200",
  },
  {
    title: "123",
    content: "Nebraska@gmail.com",
    date: "2022-10-10 10:10:10",
    img_url: "https://picsum.photos/200",
  },
];

export const DisbursementTable = () => {
  const columns = useMemo<MRT_ColumnDef<IExpense>[]>(
    () => [
      {
        accessorKey: "title",
        header: "Tiêu đề của khoản chi",
        size: 200,
      },
      {
        accessorKey: "date",
        header: "Ngày chi",
        size: 200,
      },
      {
        accessorKey: "birthday",
        header: "Nội dung chi tiết khoản chi",
        size: 200,
      },
      {
        accessorKey: "img_url",
        header: "Minh chứnh",
        size: 200,
        Cell({ row }) {
          return (
            <a href={row.original.img_url} target="_blank">
              {row.original.img_url}
            </a>
          );
        },
      },
    ],
    []
  );

  const handleOpenModal = (expense: IExpense, action?: ActionType) => {
    console.log(expense);
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
    </>
  );
};

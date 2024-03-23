import { IExpense } from "@/@types/expense";
import React, { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { useTable } from "@/libs/hooks/useTable";
import { IconButton, Tooltip } from "@mui/material";
import { ACTIONS } from "@/utils/constants";
import { ActionType } from "@/@types/common";

import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const data: IExpense[] = [
  {
    title: "123",
    content: "Kentucky@gmail.com",
    date: "2022-10-10 10:10:10",
    img_url: "https://picsum.photos/200",
    status: "pending",
  },
  {
    title: "123",
    content: "Ohio@gmail.com",
    date: "2022-10-10 10:10:10",
    img_url: "https://picsum.photos/200",
    status: "pending",
  },
  {
    title: "123",
    content: "West Virginia@gmail.com",
    date: "2022-10-10 10:10:10",
    img_url: "https://picsum.photos/200",
    status: "pending",
  },
  {
    title: "123",
    content: "Nebraska@gmail.com",
    date: "2022-10-10 10:10:10",
    img_url: "https://picsum.photos/200",
    status: "pending",
  },
  {
    title: "123",
    content: "Nebraska@gmail.com",
    date: "2022-10-10 10:10:10",
    img_url: "https://picsum.photos/200",
    status: "pending",
  },
];

export const DisbursementTable = () => {
  const columns = useMemo<MRT_ColumnDef<IExpense>[]>(
    () => [
      {
        accessorKey: "title",
        header: "Tiêu đề",
        size: 200,
      },
      {
        accessorKey: "date",
        header: "Ngày chi",
        size: 200,
      },
      {
        accessorKey: "content",
        header: "Chi tiết",
        size: 200,
      },
      {
        accessorKey: "img_url",
        header: "Minh chứng",
        size: 200,
        Cell({ row }) {
          return (
            <a href={row.original.img_url} target="_blank">
              {row.original.img_url}
            </a>
          );
        },
      },
      {
        accessorKey: "status",
        header: "Trạng thái",
        size: 200,
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
    renderRowActions: ({ row }) => {
      console.log(row.original);

      return (
        <div className="flex items-center justify-center min-w-">
          <Tooltip title="Duyệt">
            <IconButton onClick={() => handleOpenModal(row.original)}>
              <CheckIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Hoàn duyệt">
            <IconButton onClick={() => handleOpenModal(row.original)}>
              <RadioButtonUncheckedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Không duyệt">
            <IconButton
              onClick={() =>
                handleOpenModal(row.original, ACTIONS["REJECT"] as ActionType)
              }
            >
              <ClearIcon />
            </IconButton>
          </Tooltip>
        </div>
      );
    },
    positionActionsColumn: "last",
  });

  return (
    <>
      <MaterialReactTable table={table} />
    </>
  );
};

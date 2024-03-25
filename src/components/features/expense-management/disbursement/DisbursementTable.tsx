import { IExpense } from "@/@types/expense";
import React, { useMemo, useState } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { useTable } from "@/libs/hooks/useTable";
import { IconButton, Tooltip } from "@mui/material";
import { ActionType } from "@/@types/common";

import CheckIcon from "@mui/icons-material/Check";
import { UploadFile } from "@/components/shared/inputs/upload";
import { EllipsisCell } from "@/components/shared/table";
import { useForm } from "react-hook-form";

interface IDisbursement extends IExpense {
  img_disbursement: string;
}

const data: IDisbursement[] = [
  {
    title: "123",
    content: "Kentucky@gmail.com",
    date: "2022-10-10 10:10:10",
    img_url: "https://picsum.photos/200",
    img_disbursement: "https://picsum.photos/200",
    status: "pending",
  },
  {
    title: "123",
    content: "Ohio@gmail.com",
    date: "2022-10-10 10:10:10",
    img_url: "https://picsum.photos/200",
    img_disbursement: "https://picsum.photos/200",
    status: "pending",
  },
  {
    title: "123",
    content: "West Virginia@gmail.com",
    date: "2022-10-10 10:10:10",
    img_url: "https://picsum.photos/200",
    img_disbursement: "https://picsum.photos/200",
    status: "pending",
  },
  {
    title: "123",
    content: "Nebraska@gmail.com",
    date: "2022-10-10 10:10:10",
    img_url: "https://picsum.photos/200",
    img_disbursement: "https://picsum.photos/200",
    status: "pending",
  },
  {
    title: "123",
    content: "Nebraska@gmail.com",
    date: "2022-10-10 10:10:10",
    img_url: "https://picsum.photos/200",
    img_disbursement: "https://picsum.photos/200",
    status: "pending",
  },
];

export const DisbursementTable = () => {
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string | undefined>
  >({});

  const methods = useForm<IDisbursement>({
    defaultValues: {},
  });

  const columns = useMemo<MRT_ColumnDef<IDisbursement>[]>(
    () => [
      {
        accessorKey: "title",
        header: "Tiêu đề",
        enableEditing: false,
        size: 200,
        Cell: (props) => <EllipsisCell {...props} />,
      },
      {
        accessorKey: "date",
        header: "Ngày chi",
        enableEditing: false,
        size: 200,
        Cell: (props) => <EllipsisCell {...props} />,
      },
      {
        accessorKey: "content",
        header: "Chi tiết",
        enableEditing: false,
        size: 200,
        Cell: (props) => <EllipsisCell {...props} />,
      },
      {
        accessorKey: "img_url",
        header: "Minh chứng yêu cầu",
        enableEditing: false,
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
        accessorKey: "img_disbursement",
        header: "Minh chứng giải ngân",
        size: 200,
        enableClickToCopy: false,
        Cell({ row }) {
          return (
            <div className="flex justify-center">
              <UploadFile
                fullWidth
                name={"img_disbursement"}
                notShowText={true}
              />
            </div>
          );
        },
      },
      {
        accessorKey: "status",
        header: "Trạng thái",
        enableEditing: false,
        size: 200,
        Cell: (props) => <EllipsisCell {...props} />,
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
          <Tooltip title="Xác nhận giải ngân">
            <IconButton onClick={() => handleOpenModal(row.original)}>
              <CheckIcon />
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

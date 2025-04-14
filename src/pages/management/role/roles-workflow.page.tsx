import { Button } from "@/components/button/Button";
import Card from "@/components/card/Card";
import ActionModal from "@/components/modal/ActionModal";
import TablePagination from "@/components/table/TablePagination";
import { useAlert } from "@/context/AlertContext";
import BaseService from "@/lib/services/BaseService";
import React from "react";
import RolesWorkflowForm from "./components/roles-workflow.form";

const service = new BaseService();

const getData = async (page = 0, limit = 5) => {
  const res = await service.get("/department", {
    params: { pageNumber: page + 1, limit: limit },
  });
  if (!res.data) throw new Error("Failed to fetch roles workflow");
  return res.data;
};

const RolesWorkflowPage: React.FC = () => {
  const { showAlert } = useAlert();
  const [selectedData, setSelectedData] = React.useState<any>(null);
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(5);
  const [list, setList] = React.useState<any>({ data: [], total_data: 0 });
  const [isOpen, setIsOpen] = React.useState({
    form: false,
    delete: false,
  });
  const [isPending, startTransition] = React.useTransition();

  const fetchData = () => {
    startTransition(async () => {
      const result = await getData(page, pageSize);
      setList(result);
    });
  };

  React.useEffect(() => {
    fetchData();
  }, [page, pageSize]);

  return (
    <div>
      <div className="space-y-6">
        <Card>
          <div className="flex justify-end gap-2 m-4">
            <Button
              onClick={() => {
                setSelectedData(null);
                setIsOpen({ ...isOpen, form: true });
              }}
              variant="info"
            >
              Tambah
            </Button>
          </div>
          <hr />
          <div className="m-4">
            {isPending ? (
              <p>Loading...</p>
            ) : (
              <TablePagination
                columns={[
                  "#",
                  "Roles Workflow",
                  "Total Workflow",
                  "Created Date",
                  "Created By",
                  "Action",
                ]}
                data={list.data}
                page={page}
                pageSize={pageSize}
                total={list.total_data}
                onPageChange={setPage}
                onPageSizeChange={(size) => {
                  setPageSize(size);
                  setPage(0);
                }}
                renderRow={(user: any, idx: number) => (
                  <>
                    <td className="px-4 py-2 w-4">
                      {idx + 1 + page * pageSize}
                    </td>
                    <td className="px-4 py-2 break-all md:min-w-[300px]">
                      <p>{user.position}</p>
                    </td>
                    <td className="px-4 py-2">
                      <p>{user.qty_workflow}</p>
                    </td>
                    <td className="px-4 py-2">{user.created_date}</td>
                    <td className="px-4 py-2">{user.created_by}</td>
                    <td className="px-4 py-2 flex gap-2">
                      <Button
                        onClick={() => {
                          setSelectedData(user);
                          setIsOpen({ ...isOpen, form: true });
                        }}
                        variant="warning"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => {
                          setSelectedData(user);
                          setIsOpen({ ...isOpen, delete: true });
                        }}
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </td>
                  </>
                )}
              />
            )}
          </div>
          <RolesWorkflowForm
            open={isOpen.form}
            togleModal={() => setIsOpen({ ...isOpen, form: false })}
            data={selectedData}
            refetch={fetchData}
          />
          <ActionModal
            open={isOpen.delete}
            togleModal={() => setIsOpen({ ...isOpen, delete: false })}
            title="Delete Roles Workflow"
            desc="Are you sure you want to delete this roles workflow ?"
            onSubmit={async () => {
              const id = selectedData.id;
              try {
                await service.delete("/department", id);
                showAlert("Berhasil menghapus data", "success");
              } catch (error) {
                showAlert(
                  (error as any)?.response?.data?.message ||
                    "Gagal menghapus data",
                  "error"
                );
              } finally {
                fetchData();
                setIsOpen({ ...isOpen, delete: false });
              }
            }}
          />
        </Card>
      </div>
    </div>
  );
};

export default RolesWorkflowPage;

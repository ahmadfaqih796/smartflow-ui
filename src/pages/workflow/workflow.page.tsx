import { Button } from "@/components/button/Button";
import Card from "@/components/card/Card";
import SearchForm from "@/components/forms/SearchForm";
import TablePagination from "@/components/table/TablePagination";
import BaseService from "@/lib/services/BaseService";
import React from "react";
import WorkflowDiagram from "./components/workflow.diagram";
import LoadingModal from "@/components/modal/LoadingModal";

const service = new BaseService();

const getData = async (page = 0, limit = 5) => {
  const res = await service.get("/workflow", {
    params: { pageNumber: page + 1, limit: limit },
  });
  if (!res.data) throw new Error("Failed to fetch roles workflow");
  return res.data;
};

const WorkflowPage: React.FC = () => {
  const [isPending, startTransition] = React.useTransition();
  const [selectedData, setSelectedData] = React.useState<any>(null);
  const [pagination, setPagination] = React.useState({
    page: 0,
    pageSize: 5,
    total: 0,
    data: [] as any,
  });
  const [isOpen, setIsOpen] = React.useState({
    diagram: false,
    form: false,
    delete: false,
  });

  const fetchData = () => {
    startTransition(async () => {
      const result = await getData(pagination.page, pagination.pageSize);
      setPagination((prev) => ({
        ...prev,
        data: result.data,
        total: (result as any).total_data,
      }));
    });
  };

  React.useEffect(() => {
    fetchData();
  }, [pagination.page, pagination.pageSize]);

  const openDiagramModal = React.useCallback(
    async (row: any) => {
      setIsOpen({ ...isOpen, diagram: true });
      const res = await service.get(`/workflow/${row.id}`);
      console.log("masukkkk", res.data);
      if (res) {
        setIsOpen({ ...isOpen, diagram: true });
        setSelectedData(res.data);
      }
    },
    [setIsOpen, setSelectedData, isOpen]
  );
  return (
    <div>
      <LoadingModal open={isPending} />
      <div className="space-y-6">
        <Card>
          <div className="flex justify-between gap-2 m-4">
            <SearchForm />
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
                  "Name",
                  "Remark",
                  "Status",
                  "Doc Ongoing",
                  "Doc Quantity",
                  "Created By",
                  "Action",
                ]}
                data={pagination.data}
                page={pagination.page}
                pageSize={pagination.pageSize}
                total={pagination.total}
                onPageChange={(page) =>
                  setPagination((prev) => ({ ...prev, page }))
                }
                onPageSizeChange={(size) =>
                  setPagination({ ...pagination, pageSize: size, page: 0 })
                }
                renderRow={(item: any, idx: number) => (
                  <>
                    <td className="px-4 py-2 w-4">
                      {idx + 1 + pagination.page * pagination.pageSize}
                    </td>
                    <td className="px-4 py-2 break-all md:min-w-[300px]">
                      <p>{item.name}</p>
                    </td>
                    <td className="px-4 py-2">
                      <p>{item.remark}</p>
                    </td>
                    <td className="px-4 py-2">{item.status}</td>
                    <td className="px-4 py-2">{item.doc_count}</td>
                    <td className="px-4 py-2">{item.doc_count_active}</td>
                    <td className="px-4 py-2">{item.created_by}</td>
                    <td className="px-4 py-2 flex gap-2">
                      <Button
                        onClick={() => {
                          openDiagramModal(item);
                        }}
                        variant="warning"
                      >
                        Diagram
                      </Button>
                      <Button
                        onClick={() => {
                          setSelectedData(item);
                          setIsOpen({ ...isOpen, form: true });
                        }}
                        variant="warning"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => {
                          setSelectedData(item);
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
        </Card>
      </div>
      <WorkflowDiagram
        open={isOpen.diagram}
        togleModal={() => setIsOpen({ ...isOpen, diagram: false })}
        data={selectedData}
        refetch={fetchData}
      />
    </div>
  );
};

export default WorkflowPage;

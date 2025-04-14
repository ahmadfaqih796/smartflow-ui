import Card from "@/components/card/Card";
import TablePagination from "@/components/table/TablePagination";
import RolesWorkflowService from "@/lib/services/RolesWorkflowService";
import React from "react";
import RolesWorkflowForm from "./components/roles-workflow.form";

const service = new RolesWorkflowService();

export async function getData(page = 0, limit = 5) {
  const res = await service.getRolesWorkflow({
    params: { pageNumber: page + 1, limit: limit },
  });
  if (!res.data) throw new Error("Failed to fetch roles workflow");
  return res.data;
}

const RolesWorkflowPage: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(5);
  const [data, setData] = React.useState<any>({ data: [], total_data: 0 });
  const [isOpen, setIsOpen] = React.useState({
    form: false,
    delete: false,
  });
  const [isPending, startTransition] = React.useTransition();

  const fetchUsers = () => {
    startTransition(async () => {
      const result = await getData(page, pageSize);
      setData(result);
    });
  };

  React.useEffect(() => {
    fetchUsers();
  }, [page, pageSize]);

  return (
    <div>
      <div className="space-y-6">
        <Card>
          <div className="flex justify-end gap-2 m-4">
            <button
              onClick={() => setIsOpen({ ...isOpen, form: true })}
              className="btn btn-primary"
            >
              Add User
            </button>
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
                ]}
                data={data.data}
                page={page}
                pageSize={pageSize}
                total={data.total_data}
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
                  </>
                )}
              />
            )}
          </div>
          <RolesWorkflowForm
            open={isOpen.form}
            togleModal={() => setIsOpen({ ...isOpen, form: false })}
          />
        </Card>
      </div>
    </div>
  );
};

export default RolesWorkflowPage;

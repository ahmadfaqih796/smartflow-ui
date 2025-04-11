import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Card from "@/components/card/Card";
import TablePagination from "@/components/table/TablePagination";
import RolesWorkflowService from "@/lib/services/RolesWorkflowService";
import React from "react";
import RolesWorkflowForm from "./components/roles-workflow.form";

const service = new RolesWorkflowService();

export async function getData(page = 0, limit = 10) {
  const res = await service.getRolesWorkflow({
    params: { pageNumber: page + 1, limit: limit },
  });
  if (!res.data) throw new Error("Failed to fetch roles workflow");
  return res.data;
}

const RolesWorkflowPage: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);
  const [data, setData] = React.useState<any>({ data: [], total_data: 0 });
  const [isOpen, setIsOpen] = React.useState({
    create: false,
    update: false,
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
      <Breadcrumb pageTitle="Roles Workflow" path="management/roles-workflow" />
      <div className="space-y-6">
        <Card>
          {/* <button
            onClick={() => setIsOpen({ ...isOpen, create: true })}
            className="btn btn-primary"
          >
            Add User
          </button> */}
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
                  <td className="px-4 py-2 w-4">{idx + 1 + page * pageSize}</td>
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
          <RolesWorkflowForm
            open={isOpen.create}
            togleModal={() => setIsOpen({ ...isOpen, create: false })}
          />
        </Card>
      </div>
    </div>
  );
};

export default RolesWorkflowPage;

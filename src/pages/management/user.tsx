import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Card from "@/components/card/Card";
import TablePagination from "@/components/table/TablePagination";
import { TEXT_ELLIPSIS } from "@/constants/theme";
import UserService from "@/lib/services/UserService";
import React from "react";

const service = new UserService();

export async function getUsers(page = 0, limit = 10) {
  const res = await service.getUsers({
    params: { pageNumber: page + 1, limit: limit },
  });
  if (!res.data) throw new Error("Failed to fetch users");
  return res.data;
}

const UserPage: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);
  const [data, setData] = React.useState<any>({ data: [], total_data: 0 });
  const [isPending, startTransition] = React.useTransition();

  const fetchUsers = () => {
    startTransition(async () => {
      const result = await getUsers(page, pageSize);
      setData(result);
    });
  };

  React.useEffect(() => {
    fetchUsers();
  }, [page, pageSize]);

  return (
    <div>
      <Breadcrumb pageTitle="User" path="management/user" />
      <div className="space-y-6">
        <Card title="Basic Table 1">
          {isPending ? (
            <p>Loading...</p>
          ) : (
            <TablePagination
              columns={["#", "Full Name", "Email", "Role"]}
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
                    <p>{user.full_name}</p>
                  </td>
                  <td className="px-4 py-2 break-all md:min-w-[300px]">
                    <p>{user.email}</p>
                  </td>
                  <td className="px-4 py-2">{user.privileges}</td>
                </>
              )}
            />
          )}
        </Card>
      </div>
    </div>
  );
};

export default UserPage;

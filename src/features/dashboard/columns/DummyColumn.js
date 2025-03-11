export const DummyColumn = [
   {
     width: 30,
     label: "No",
     dataKey: "no",
     formatter : (cell, row, index) => index + 1,
   },
   {
     width: 100,
     label: "First Name",
     dataKey: "firstName",
   },
   {
     width: 100,
     label: "Last Name",
     dataKey: "lastName",
   },
   {
     width: 100,
     label: "Full Name",
     dataKey: "fullName",
     formatter : (cell, row, index) => `${row?.firstName} ${row?.lastName}`,
   },
   {
     width: 130,
     label: "Email",
     dataKey: "email",
   },
   {
     width: 50,
     label: "Age",
     dataKey: "age",
     numeric: true,
   },
   {
     width: 110,
     label: "State",
     dataKey: "state",
   },
   {
     width: 130,
     label: "Phone Number",
     dataKey: "phone",
   },
   {
     width: 130,
     label: "Address",
     dataKey: "address",
   },
   {
     width: 130,
     label: "Avatar",
     dataKey: "avatar",
     formatter : (cell, row, index) => <img src={row?.cell} alt="Avatar"/>,
   },
 ];
import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    disableFilters:true,
    sticky:'left'
    
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    sticky:'left'
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    sticky:'left'
  },
  {
    Header: "Mail",
    Footer: "Mail",
    accessor: "email",
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    cell: ({value})=>{return format(new Date(value), 'dd/MM/yyyy')}
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
];

export const GROUPED_COLUMNS=[
    {
        Header: "Id",
    Footer: "Id",
    accessor: "id",
    },
    {
        Header:'Name',
        Footer:'Name',
        columns:[
            {
                Header: "First Name",
                Footer: "First Name",
                accessor: "first_name",
            },
            {
                Header: "Last Name",
                Footer: "Last Name",
                accessor: "last_name",
            }
        ]
    },
    {
        Header:'Info',
        Footer:'Info',
        columns:[
            {
                Header: "Mail",
                Footer: "Mail",
                accessor: "email",
              },
              {
                Header: "Age",
                Footer: "Age",
                accessor: "age",
              },
              {
                Header: "Date of Birth",
                Footer: "Date of Birth",
                accessor: "date_of_birth",
              },
              {
                Header: "Phone",
                Footer: "Phone",
                accessor: "phone",
              },
        ]
    }
]
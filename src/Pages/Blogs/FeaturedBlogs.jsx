import { createTheme, ThemeProvider } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";

const getData = async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_URL}/blogs/table`
  );

  const dataSerial = data.map((item, index) => ({
    ...item,
    serial: index + 1,
  }));

  return dataSerial;
};

const FeaturedBlogs = () => {
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: getData,
    queryKey: "table",
  });

  if (isLoading) {
    return (
      <ReactLoading
        type="bars"
        color="black"
        height={"5%"}
        className="flex mx-auto mt-20"
        width={"5%"}
      />
    );
  }

  if (isError) {
    toast.error(error.message);
    return <div>Error: {error.message}</div>;
  }

  const columns = [
    {
      name: "serial",
      label: "S.no",
    },
    {
      name: "title",
      label: "Title",
    },
    {
      name: "long_des_count",
      label: "Words",
      options: {
        customBodyRender: (value) => (
          <p className="py-2 px-5 bg-blue-200 text-blue-700 inline-block rounded-full">
            {value}
          </p>
        ),
      },
    },
    {
      name: "writerName",
      label: "Owner",
    },
    {
      name: "writerProfile",
      label: "Profile",
      options: {
        customBodyRender: (value) => (
          <img src={value} className="w-12 h-12 rounded-full" alt="Profile" />
        ),
      },
    },
  ];

  const options = {
    selectableRows: "none",
    elevation: 0,
  };

  const getMuiTheme = () =>
    createTheme({
      typography: {},
    });

  return (
    <div className="bg-slate-200 min-h-screen flex items-center justify-center">
      <div className="container mx-auto my-10 p-5 rounded-lg">
        <ThemeProvider theme={getMuiTheme}>
          <MUIDataTable
            title={"Featured Blogs"}
            data={data}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default FeaturedBlogs;

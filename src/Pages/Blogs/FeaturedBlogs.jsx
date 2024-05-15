import { createTheme, ThemeProvider } from "@mui/material";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";

const FeaturedBlogs = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/blogs/table`
      );

      const dataSerial = data.map((item, index) => ({
        ...item,
        serial: index + 1,
      }));

      setTableData(dataSerial);
    };
    getData();
  }, []);

  const columns = [
    {
      name: "serial",
      label: "S.no",
    },
    {
      name: "title",
    },

    {
      name: "long_des_count",
      label: "Words",
      options: {
        customBodyRender: (value) => (
          <p className=" py-2 px-5 bg-blue-200 text-blue-700 inline-block rounded-full">
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
          <img src={value} className=" w-12 h-12 rounded-full"></img>
        ),
      },
    },
  ];

  const options = {
    selectableRows: false,
    elevation: 0,
  };

  const getMuiTheme = () =>
    createTheme({
      typography: {},
    });

  return (
    <div className=" bg-slate-200 min-h-screen flex items-center justify-center">
      <div className="container bg-slate-400 mx-auto my-10">
        <ThemeProvider theme={getMuiTheme}>
          <MUIDataTable
            title={"Featured Blogs"}
            data={tableData}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default FeaturedBlogs;

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Link } from "react-router-dom";
const queryClient = new QueryClient();

export default function SearchResults(props) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* {console.log(props.mode)} */}
      <Search mode={props.mode} />
    </QueryClientProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(254, 163, 82)  ",
    },
    text: {
        secondary: purple,
    }
  },
});

const filter = createFilterOptions();

const Search = () => {
  const [value, setValue] = React.useState(null);

  const getData = async () => {
    const res = await fetch("https://dummyapi.io/data/v1/post?limit=50", {
      method: "GET",
      headers: {
        "app-id": "65dca2b0afdc1b13e468846b",
      },
    });
    return res.json();
  };

  const { data, error, isLoading } = useQuery("randomData", getData);
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div></div>;

  return (
    <ThemeProvider theme={theme}>
      {console.log(data.data)}
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue({
              owner: {
                firstname: newValue,
              },
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              owner: {
                firstname: newValue.inputValue,
              },
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some(
            (option) => inputValue === option.owner.firstName
          );
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue,
              owner: {
                firstName: `no user found by the name "${inputValue}"`,
                lastName: "",
              },
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={data.data}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.owner.firstName;
        }}
        renderOption={(props, option) => (
          <div style={{ backgroundColor: "white" }}>
            <Link
              to={"/userprofile"}
              state={{
                dataName: option.owner.firstName + " " + option.owner.lastName,
                dataDp: option.owner.picture,
                dataAbout: option.text,
                dataPic: option.image,
              }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <li {...props}>
                <img
                  src={option.owner.picture}
                  style={{
                    width: "40px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                  alt=""
                />
                {option.owner.firstName + " " + option.owner.lastName}
              </li>
            </Link>
          </div>
        )}
        sx={{ width: 400, bgcolor: "rgb(0, 0, 0, 0)",  inline: "1px solid black"  }}
        freeSolo
        renderInput={(params) => <TextField {...params}  label="Search" />}
      />
    </ThemeProvider>
  );
};


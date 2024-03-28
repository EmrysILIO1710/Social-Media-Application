import * as React from "react";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Link } from "react-router-dom";
import "./RightSideBar.css";

const queryClient = new QueryClient();

export default function SearchResults(props) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* {console.log(props.mode)} */}
      <Search3 mode={props.mode} />
    </QueryClientProvider>
  );
}

const Label = styled("label")({
  display: "block",
});

const Input = styled("input")(({ theme }) => ({
  width: 450,
  height: 40,
  padding: 5,
  border: "2px solid rgb(138, 138, 138)",
  borderRadius: "10px",
//   backgroundColor: "white",
  outline: "none"
//   outline: "2px solid rgb(254, 163, 82)",
}));

const Listbox = styled("ul")(({ theme }) => ({
  width: 450,
  marginTop: 10,
  padding: 5,
  zIndex: 1,
  position: "absolute",
  listStyle: "none",
//   backgroundColor: "white",
  overflow: "auto",
  maxHeight: 200,
  border: "0px solid rgba(0,0,0,.25)",
  "& li.Mui-focused": {
    backgroundColor: "rgb(254, 163, 82) ",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "rgb(254, 163, 82)",
    color: "white",
  },
}));

const Search3 = (props) => {
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

  return <Search2 data={data.data} mode={props.mode} />;
};

const Search2 = (props) => {
  // const [list, setList] = React.useState(null);
  const [modebg, setModebg] = React.useState("white");
  const [modebg2, setModebg2] = React.useState("white");
  const [modetext, setModetext] = React.useState("black");

  React.useEffect(() => {
    // setModeTrigger(1);
    if(props.mode){
      //dark mode
      setModebg("rgb(15, 12, 39)"); 
      setModetext("white");
      setModebg2("rgb(26, 24, 48)")
    }
    else{
      //light mode
      setModebg("white");
      setModetext("black");
      setModebg2("white");
    }
    
  }, [props]);

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: props.data,
    getOptionLabel: (option) => option.owner.firstName,
  });

  return (
    <div>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}></Label>
        <Input {...getInputProps()} placeholder="Search..." style={{backgroundColor: modebg2, color: modetext}} />
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()} style={{backgroundColor: modebg}} className="scrollarea">
          {groupedOptions.map((option, index) => (
            // <div style={{ backgroundColor: "white" }}>
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
              <li {...getOptionProps({ option, index })} className="flex items-center mb-[10px] rounded-l-full text-xl" style={{color: modetext}}>
                <img
                  src={option.owner.picture}
                  style={{
                    width: "50px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                  alt=""
                />
                {option.owner.firstName + " " + option.owner.lastName}
              </li>
            </Link>
        //   </div>
            
          ))}
        </Listbox>
      ) : null}
    </div>
  );
};

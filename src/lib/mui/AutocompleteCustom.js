import { forwardRef } from "react";

import Paper from "@mui/material/Paper";
import Autocomplete from "@mui/material/Autocomplete";

const CustomAutocomplete = forwardRef((props, ref) => {
  return (
    <Autocomplete
      {...props}
      ref={ref}
      PaperComponent={(props) => (
        <Paper {...props} className="custom-autocomplete-paper" />
      )}
    />
  );
});

export default CustomAutocomplete;

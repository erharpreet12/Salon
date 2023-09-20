import MKTypography from "components/MKTypography";
import MKBadge from "components/MKBadge";

const authorsTableData = {
  columns: [
    { name: "certificate Number", align: "center" },
    { name: "certificate Image", align: "center" },
    { name: "Created At", align: "center" },
    { name: "action", align: "center" },
  ],
};

export const itemList = (item) => ({
  "certificate Number": (
    <MKTypography variant="caption" color="secondary" fontWeight="medium">
      {item.cNum}
    </MKTypography>
  ),
  "certificate Image": (
    <img
      // className="mobile-logo"
      src={item.cUrl}
      alt="mobile logo"
      style={{ width: "10vw", height: "8vw" }}
    />
  ),
  "Created At": (
    <MKTypography variant="caption" color="secondary" fontWeight="medium">
      {item.createAt.seconds}
    </MKTypography>
  ),
  action: (
    <MKTypography component="a" href="#" variant="caption" color="secondary" fontWeight="medium">
      Delete
    </MKTypography>
  ),
});

export default authorsTableData;

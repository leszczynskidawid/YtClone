import { styled } from "@mui/system";
import { Box } from "@mui/system";
const AppBarContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 90px;
  margin-top: 0.5rem;
  gap: 20px;
`;
const AppBarFragmentsContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
export { AppBarContainer, AppBarFragmentsContainer };

import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { useGetReposQuery } from "./services/github.service";

const App = () => {
  const { isLoading, data } = useGetReposQuery({ owner: "fthomasvp" });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Repo</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map(({ id, name }) => (
              <Tr key={id}>
                <Td>{name}</Td>
                {/* <Td isNumeric>25.4</Td> */}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default App;

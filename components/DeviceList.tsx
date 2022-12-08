import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { useRouter } from "next/router";
import {
  FirebaseAppProvider,
  FirestoreProvider,
  useFirestoreDocData,
  useFirestore,
  useFirebaseApp,
  useFirestoreCollectionData,
  SuspenseWithPerf,
} from "reactfire";
import { doc, collection, query, where } from "@firebase/firestore";

export default function DeviceList() {
  const router = useRouter();
  const deviceCollection = collection(useFirestore(), "devices");
  const devices = useFirestoreCollectionData(deviceCollection);

  const tableRowClickHandler = (id) => {
    router.push("devices/" + id);
  };

  return (
    <SuspenseWithPerf fallback={<LoadingSpinner />} traceId="app_root">
      <Title>Devices</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Device</TableCell>
            <TableCell>Survey</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {devices.data.map((row) => (
            <TableRow
              hover={true}
              selected={true}
              key={row.id}
              onClick={() => tableRowClickHandler(row.id)}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.survey}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </SuspenseWithPerf>
  );
}

const LoadingSpinner = () => {
  return <div>Loading</div>;
};

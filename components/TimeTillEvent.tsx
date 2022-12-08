import React from "react";

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
import { limit, orderBy } from "firebase/firestore";

import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import be from "javascript-time-ago/locale/be";
import en from "javascript-time-ago/locale/en";
import { Typography } from "@mui/material";

TimeAgo.addLocale(be);
TimeAgo.addLocale(en);

export default function TimeTillEvent({ deviceId, type }: any) {
  const animalsCollection = collection(useFirestore(), "logging");

  const animalsQuery = query(
    animalsCollection,
    where("deviceId", "==", deviceId),
    where("type", "==", type),
    where("value", "==", "reboot"),
    orderBy("createdAt", "asc"),
    limit(1)
  );

  const { status, data: animals } = useFirestoreCollectionData(animalsQuery);

  const tillComponent =
    animals.length == 0 ? (
      <Typography>Not found</Typography>
    ) : (
      <ReactTimeAgo date={animals[0].createdAt.toDate()} locale="en-US" />
    );

  return (
    <SuspenseWithPerf fallback={"loading..."} traceId="app_time_till">
      <Typography>{tillComponent}</Typography>
    </SuspenseWithPerf>
  );
}

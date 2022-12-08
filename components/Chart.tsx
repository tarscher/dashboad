import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";

import {
  FirebaseAppProvider,
  FirestoreProvider,
  useFirestoreDocData,
  useFirestore,
  useFirebaseApp,
  useFirestoreCollectionData,
} from "reactfire";
import { doc, collection, query, where } from "@firebase/firestore";
import { orderBy } from "firebase/firestore";
import { F } from "chart.js/dist/chunks/helpers.core";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

interface ChartProps {
  type: string;
  deviceId: boolean;
}

export default function Chart({ deviceId, type }: ChartProps) {
  const firestore = useFirestore();

  const animalsCollection = collection(firestore, "logging");

  const animalsQuery = query(
    animalsCollection,
    where("deviceId", "==", deviceId),
    where("type", "==", type),
    orderBy("createdAt", "asc")
  );

  const { status, data: animals } = useFirestoreCollectionData(animalsQuery);

  console.log(type);
  console.log(animals);

  const options = {
    scales: {
      x: {
        type: "time",
      },
    },
  };

  const data = {
    datasets: [
      {
        label: type,
        borderColor: "rgb(150, 150, 150)",
        data: animals.map((a) => ({
          x: new Date(a.createdAt.seconds * 1000),
          y: a.value,
        })),
      },
    ],
  };

  return <Line options={options} data={data} />;
}

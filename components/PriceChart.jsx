"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getPriceHistory } from "@/app/actions";
import { Loader2 } from "lucide-react";

export default function PriceChart({ productId }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const history = await getPriceHistory(productId);

      const chartData = history.map((item) => ({
        date: new Date(item.checked_at).toLocaleDateString(),
        price: parseFloat(item.price),
      }));

      setData(chartData);
      setLoading(false);
    }

    loadData();
  }, [productId]);

  // LOADING STATE
  if (loading) {
    return (
      <div
        className="
        flex items-center justify-center py-10 w-full
        text-cyan-600 dark:text-purple-400
      "
      >
        <Loader2 className="w-5 h-5 animate-spin mr-2" />
        Syncing price matrix...
      </div>
    );
  }

  // EMPTY STATE
  if (data.length === 0) {
    return (
      <div
        className="
        text-center py-10 w-full
        text-slate-500 dark:text-gray-500
      "
      >
        No price history yet. Neural engine is learning this product.
      </div>
    );
  }

  return (
    <div className="w-full">

      <h4
        className="
        text-sm font-semibold mb-4
        text-cyan-700 dark:text-purple-300
      "
      >
        Price History
      </h4>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>

          {/* GRID */}
          <CartesianGrid
            strokeDasharray="3 3"
            className="stroke-cyan-200 dark:stroke-purple-900"
          />

          {/* AXIS */}
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            className="text-slate-500 dark:text-gray-500"
          />

          <YAxis
            tick={{ fontSize: 12 }}
            className="text-slate-500 dark:text-gray-500"
          />

          {/* TOOLTIP */}
          <Tooltip
            contentStyle={{

              /* LIGHT */
              backgroundColor: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(6,182,212,0.3)",

              /* GLASS */
              backdropFilter: "blur(12px)",
              borderRadius: "10px",

              /* DARK */
              boxShadow: "0 0 15px rgba(6,182,212,0.25)",
            }}
            labelStyle={{
              color: "#0e7490",
            }}
          />

          {/* NEON LINE */}
          <Line
            type="monotone"
            dataKey="price"

            /* LIGHT CYAN */
            stroke="#06b6d4"

            strokeWidth={3}

            dot={{
              fill: "#06b6d4",
              r: 4,
            }}

            activeDot={{
              r: 6,
              fill: "#22d3ee",
            }}

            className="
            drop-shadow-[0_0_6px_rgba(6,182,212,0.6)]
            dark:drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]
          "
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

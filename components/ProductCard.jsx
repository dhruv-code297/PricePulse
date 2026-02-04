"use client";

import { useState } from "react";
import { deleteProduct } from "@/app/actions";
import PriceChart from "./PriceChart";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Trash2,
  TrendingDown,
  ChevronDown,
  ChevronUp,
  Loader2,
} from "lucide-react";
import Link from "next/link";

export default function ProductCard({ product }) {

  const [showChart, setShowChart] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Disconnect this product from neural tracking?")) return;

    setDeleting(true);
    await deleteProduct(product.id);
  };

  return (
    <Card
      className="

      /* LIGHT CYBER */
      bg-white/70
      border border-cyan-200/40

      /* DARK CYBER */
      dark:bg-black/60
      dark:border-purple-500/30

      backdrop-blur-lg

      hover:-translate-y-1
      transition-all duration-300

      shadow-[0_0_20px_rgba(6,182,212,0.08)]
      dark:shadow-[0_0_20px_rgba(168,85,247,0.15)]
    "
    >

      <CardHeader className="pb-3">
        <div className="flex gap-4">

          {product.image_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.image_url}
              alt={product.name}
              className="
              w-20 h-20 object-cover
              rounded-md

              border border-cyan-200/40
              dark:border-purple-500/40
            "
            />
          )}

          <div className="flex-1 min-w-0">

            <h3 className="font-semibold

  text-slate-900 dark:text-white

  tracking-[0.3px]

  hover:text-cyan-700
  dark:hover:text-purple-300

  transition-colors">
              {product.name}
            </h3>

            <div className="flex items-baseline gap-2">

              {/* NEON PRICE */}
              <span
                className="
                text-3xl font-bold

                text-cyan-600 dark:text-purple-400

                drop-shadow-[0_0_6px_rgba(6,182,212,0.5)]
                dark:drop-shadow-[0_0_6px_rgba(168,85,247,0.6)]
              "
              >
                {product.currency} {product.current_price}
              </span>

              {/* BADGE */}
              <Badge
                variant="secondary"
                className="
                gap-1

                bg-cyan-50 dark:bg-purple-950/40
                border border-cyan-300/40 dark:border-purple-500/40

                text-cyan-700 dark:text-purple-300
              "
              >
                <TrendingDown className="w-3 h-3" />
                Tracking
              </Badge>

            </div>
          </div>
        </div>
      </CardHeader>


      <CardContent>
        <div className="flex flex-wrap gap-2">

          {/* CHART TOGGLE */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowChart(!showChart)}
            className="

            gap-1

            border-cyan-300/40 dark:border-purple-500/40

            hover:bg-cyan-50 dark:hover:bg-purple-950/40
          "
          >
            {showChart ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Hide Chart
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show Chart
              </>
            )}
          </Button>


          {/* VIEW */}
          <Button
            variant="outline"
            size="sm"
            asChild
            className="
            gap-1

            border-cyan-300/40 dark:border-purple-500/40

            hover:bg-cyan-50 dark:hover:bg-purple-950/40
          "
          >
            <Link
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
              View Product
            </Link>
          </Button>


          {/* DELETE */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDelete}
            disabled={deleting}

            className="
            text-red-500

            hover:bg-red-50 dark:hover:bg-red-950/30

            gap-1
          "
          >
            {deleting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Removing
              </>
            ) : (
              <>
                <Trash2 className="w-4 h-4" />
                Remove
              </>
            )}
          </Button>

        </div>
      </CardContent>


      {/* CHART PANEL */}
      {showChart && (
        <CardFooter
          className="
          pt-0

          border-t border-cyan-200/30
          dark:border-purple-500/20
        "
        >
          <PriceChart productId={product.id} />
        </CardFooter>
      )}

    </Card>
  );
}

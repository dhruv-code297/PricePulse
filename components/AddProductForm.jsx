"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2, Link2, Zap } from "lucide-react";
import { AuthModal } from "./AuthModal";
import { addProduct } from "@/app/actions";
import { toast } from "sonner";

export default function AddProductForm({ user }) {

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return setShowAuthModal(true);

    setLoading(true);
    const fd = new FormData();
    fd.append("url", url);

    const res = await addProduct(fd);

    res.error
      ? toast.error(res.error)
      : toast.success("Neural tracking activated ⚡");

    setUrl("");
    setLoading(false);
  };

  return (
    <>
      {/* CYBER CONTAINER */}
      <div
        className="
        max-w-2xl mx-auto

        bg-white/60 dark:bg-black/60
        backdrop-blur-xl

        border border-cyan-300/40 dark:border-purple-500/40
        rounded-xl p-4

        shadow-[0_0_25px_rgba(6,182,212,0.12)]
        dark:shadow-[0_0_25px_rgba(168,85,247,0.18)]

        transition-all
      "
      >
        <form onSubmit={handleSubmit} className="flex gap-2">

          {/* URL INPUT */}
          <div className="relative flex-1 group">

            <Link2
              className="
              absolute left-3 top-1/2 -translate-y-1/2
              w-4 h-4
              text-cyan-500 dark:text-purple-400
              opacity-70
              group-focus-within:opacity-100
            "
            />

            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              placeholder="Enter any product url..."
              
              className="

              /* BULKY STYLE */
              h-12 pl-9 pr-4
              text-base

              bg-white dark:bg-black/40

              border-cyan-300/40 dark:border-purple-500/40

              focus-visible:ring-cyan-500
              dark:focus-visible:ring-purple-500

              focus-visible:ring-[3px]

              placeholder:text-slate-400
              dark:placeholder:text-gray-600

              transition-all
            "
            />
          </div>

          {/* TRACK BUTTON */}
          <Button
            disabled={loading}
            className="

            h-12 px-6

            bg-cyan-500 hover:bg-cyan-600
            dark:bg-purple-600 dark:hover:bg-purple-700

            shadow-[0_0_15px_rgba(6,182,212,0.3)]
            dark:shadow-[0_0_15px_rgba(168,85,247,0.4)]

            transition-all
          "
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2 w-4 h-4" />
                Syncing
              </>
            ) : (
              <>
                <Zap className="mr-2 w-4 h-4" />
                Track
              </>
            )}
          </Button>

        </form>

        {/* SUBTEXT */}
        <p
          className="
          mt-2 text-xs text-slate-500 dark:text-gray-500
          text-center
        "
        >
          Supports Amazon • Flipkart • Walmart • Any ecommerce
        </p>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}

"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { LogInIcon, LogOut } from "lucide-react";
import { AuthModal } from "./AuthModal";
import { signOut } from "@/app/actions";

const AuthButton = ({ user }) => {
  const [showAuthModal, setShowAuthModel] = useState(false);

  // LOGGED IN STATE
  if (user) {
    return (
      <form action={signOut}>
        <Button
          variant="ghost"
          size="sm"
          type="submit"
          className="
          gap-2

          text-cyan-700 dark:text-purple-300

          hover:bg-cyan-50 dark:hover:bg-purple-950/40

          border border-transparent
          hover:border-cyan-300/40 dark:hover:border-purple-500/40

          transition-all
        "
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </Button>
      </form>
    );
  }

  // NOT LOGGED IN
  return (
    <>
      <Button
        onClick={() => setShowAuthModel(true)}
        variant="default"
        size="sm"
        className="

        gap-2

        /* LIGHT CYBER */
        bg-cyan-500 hover:bg-cyan-600

        /* DARK CYBER */
        dark:bg-purple-600 dark:hover:bg-purple-700

        shadow-[0_0_12px_rgba(6,182,212,0.35)]
        dark:shadow-[0_0_12px_rgba(168,85,247,0.45)]

        transition-all
      "
      >
        <LogInIcon className="h-4 w-4" />
        Sign In
      </Button>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModel(false)}
      />
    </>
  );
};

export default AuthButton;

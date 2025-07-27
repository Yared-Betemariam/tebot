"use client";

import { useEffect, useState } from "react";
import { SettingsModal } from "../auth/components/SettingsModal";
import { ConfirmationModal } from "./components/ConfirmationModal";

const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, []);

  if (!mounted) return null;

  return (
    <>
      <SettingsModal />
      <ConfirmationModal />
    </>
  );
};
export default Modals;

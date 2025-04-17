import { Button } from "@/components/button/Button";
import { SCROLLBAR } from "@/constants/theme";
import { Check, Download, GitPullRequest, Save, X } from "lucide-react";
import React from "react";

const Action: React.FC = () => {
  return (
    <div className="border-l h-full flex flex-col">
      <h4 className="font-bold text-center my-4">Action</h4>
      <div
        className={`flex-1 gap-2 px-4 overflow-y-auto flex flex-col items-center ${SCROLLBAR}`}
      >
        <Button color="success" variant="rounded"><Save /></Button>
        <Button color="success" variant="rounded"><GitPullRequest /></Button>
        <Button color="success" variant="rounded"><Download /></Button>
        <Button color="success" variant="rounded"><Check /></Button>
        <Button color="success" variant="rounded"><X /></Button>
      </div>
    </div>
  );
};

export default Action;

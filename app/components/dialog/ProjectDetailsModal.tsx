import { Dialog } from "@headlessui/react";
import { AddTree } from "~/components/dialog/AddTree";
import { Button } from "~/components/Button";
import { LogoAddProject } from "~/components/icons/LogoAddProject";
import type { ModalProps } from "~/components/Modal";
import { Modal } from "~/components/Modal";
import { RigthArrow } from "~/components/icons/RigthArrow";

type Props = ModalProps & {
  onSubmit: () => void;
  onNewTree: () => void;
  projectName: string;
};

export const ProjectDetailsModal = ({
  projectName,
  isOpen,
  onClose,
  onNewTree,
  onSubmit,
}: Props) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <div className="flex flex-row">
      <LogoAddProject />
      <div className="ml-4 flex flex-col">
        <Dialog.Title className="text-lg font-semibold">
          {projectName}
        </Dialog.Title>
        <Dialog.Description className="text-sm">
          Adicione arvores para serem avaliadas
        </Dialog.Description>
      </div>
    </div>
    <div className="mt-10 flex flex-row justify-between">
      <AddTree onClick={onNewTree} />
      <AddTree disabled />
      <AddTree disabled />
    </div>
    <div className="mt-16 flex flex-row justify-end">
      <button
        onClick={onClose}
        className=" mr-3 flex h-11 w-44 items-center justify-center rounded-lg border bg-white font-semibold"
      >
        Cancel
      </button>
      <Button onClick={onSubmit}>
        Proximo
        <div className="ml-3 flex items-center justify-center">
          <RigthArrow />
        </div>
      </Button>
    </div>
  </Modal>
);

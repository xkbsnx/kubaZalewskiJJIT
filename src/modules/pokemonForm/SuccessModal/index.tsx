import { FC, Dispatch, SetStateAction } from "react";
import { Modal, Box, Typography } from "@mui/material";
import { UseFormSetValue, FieldValues } from "react-hook-form";

import Button from "@/common/components/Button";
import { ModalContentWrapper } from "./styled";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  resetForm: () => void;
  setChosenPokemon: Dispatch<
    SetStateAction<
      | {
          name: string;
          id: number;
        }
      | undefined
    >
  >;
}

const SuccessModal: FC<Props> = ({
  isModalOpen,
  setIsModalOpen,
  resetForm,
  setChosenPokemon,
}) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContentWrapper>
        <Typography fontSize="20px">Successfully submitted!</Typography>
        <Button
          buttontype="soft"
          onClick={() => {
            resetForm();
            setChosenPokemon(undefined);
            setIsModalOpen(false);
          }}
        >
          <Typography fontSize="20px">Reset</Typography>
        </Button>
      </ModalContentWrapper>
    </Modal>
  );
};

export default SuccessModal;
